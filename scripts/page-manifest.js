#!/usr/bin/env node
/**
 * Post-build: record which pages changed, date them, and list them for IndexNow.
 *
 * Runs after `next build` (npm postbuild), on every Vercel build. It:
 *   1. Fingerprints every page listed in out/sitemap.xml (scripts/lib/page-hash.js).
 *   2. Compares each fingerprint with the live site's last record,
 *      https://teledirectmd.com/page-manifest.json. If the live record is
 *      unavailable (first deploy), it compares with data/page-manifest-seed.json.
 *   3. Sets each URL's sitemap <lastmod> to the date its content last changed:
 *      unchanged pages keep their recorded date, changed or newly listed pages
 *      get today's date (America/New_York).
 *   4. Writes out/page-manifest.json (the record for the next deploy) and
 *      out/indexnow-changed.json (changed, newly listed and dropped URLs).
 *
 * It submits nothing. The "IndexNow submit" GitHub workflow waits until the
 * live site serves this build's indexnow-changed.json, so Bing is told only
 * after the new pages are live, and only about pages that changed.
 *
 * Best effort: any failure logs and exits 0 so a deploy never fails here.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { pageHash } = require('./lib/page-hash');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'out');
const SITE = 'https://teledirectmd.com';
const LIVE_MANIFEST = `${SITE}/page-manifest.json`;
const SEED = path.join(ROOT, 'data', 'page-manifest-seed.json');

function today() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(new Date());
}

function fetchJson(url, timeoutMs = 15000) {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: timeoutMs, headers: { 'cache-control': 'no-cache' } }, (res) => {
      if (res.statusCode !== 200) { res.resume(); return resolve(null); }
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (c) => { body += c; });
      res.on('end', () => { try { resolve(JSON.parse(body)); } catch { resolve(null); } });
    });
    req.on('timeout', () => { req.destroy(); resolve(null); });
    req.on('error', () => resolve(null));
  });
}

function validManifest(m) {
  return m && m.version === 1 && m.urls && typeof m.urls === 'object' && !Array.isArray(m.urls);
}

// https://teledirectmd.com/a/b/ -> out/a/b/index.html ; /x.html or /x.pdf -> out/x.html
function fileFor(loc) {
  const p = decodeURI(loc.slice(SITE.length)).replace(/^\//, '');
  const candidates = /\.[a-z0-9]+$/i.test(p)
    ? [path.join(OUT, p)]
    : [path.join(OUT, p, 'index.html'), path.join(OUT, `${p.replace(/\/$/, '')}.html`)];
  return candidates.find((c) => fs.existsSync(c)) || null;
}

async function main() {
  const sitemapPath = path.join(OUT, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) { console.log('[page-manifest] no out/sitemap.xml; skipped.'); return; }
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const blocks = xml.match(/<url>[\s\S]*?<\/url>/g) || [];

  // 1) Fingerprint current pages.
  const current = {};
  const listedLastmod = {};
  for (const b of blocks) {
    const loc = (b.match(/<loc>([^<]+)<\/loc>/) || [])[1];
    if (!loc) continue;
    const lm = (b.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1];
    listedLastmod[loc] = lm ? lm.slice(0, 10) : null;
    const file = fileFor(loc);
    if (!file) { console.warn(`[page-manifest] listed URL has no built file: ${loc}`); continue; }
    current[loc] = pageHash(fs.readFileSync(file, 'utf8'));
  }

  // 2) Previous record: live site first, then the committed seed.
  let prev = await fetchJson(LIVE_MANIFEST);
  let base = 'live';
  if (!validManifest(prev)) {
    prev = fs.existsSync(SEED) ? JSON.parse(fs.readFileSync(SEED, 'utf8')) : null;
    base = validManifest(prev) ? 'seed' : 'none';
    if (base === 'none') prev = null;
  }

  // 3) Dates and change list.
  const day = today();
  const urls = {};
  const changed = [];
  for (const [loc, h] of Object.entries(current)) {
    const p = prev && prev.urls[loc];
    let d;
    if (p && p.h === h) d = p.d || listedLastmod[loc] || null;
    else if (p) { d = day; changed.push(loc); }
    else if (prev) { d = day; changed.push(loc); }          // newly listed page
    else d = listedLastmod[loc] || null;                     // no record at all: keep the coded date
    urls[loc] = d ? { h, d } : { h };
  }
  const dropped = prev ? Object.keys(prev.urls).filter((u) => !(u in urls)) : [];

  // 4) Rewrite sitemap lastmod from the record.
  const rewritten = xml.replace(/<url>[\s\S]*?<\/url>/g, (b) => {
    const loc = (b.match(/<loc>([^<]+)<\/loc>/) || [])[1];
    const d = loc && urls[loc] && urls[loc].d;
    if (!d) return b;
    if (/<lastmod>[^<]*<\/lastmod>/.test(b)) return b.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${d}</lastmod>`);
    return b.replace(/(<loc>[^<]+<\/loc>)/, `$1\n<lastmod>${d}</lastmod>`);
  });
  fs.writeFileSync(sitemapPath, rewritten);

  const sha = process.env.VERCEL_GIT_COMMIT_SHA || null;
  const generated = new Date().toISOString();
  fs.writeFileSync(path.join(OUT, 'page-manifest.json'), JSON.stringify({ version: 1, generated, sha, urls }));
  fs.writeFileSync(path.join(OUT, 'indexnow-changed.json'), JSON.stringify({
    version: 1, generated, sha, base,
    counts: { listed: Object.keys(urls).length, changed: changed.length, dropped: dropped.length },
    urls: [...changed, ...dropped],
  }, null, 1));

  console.log(`[page-manifest] compared with ${base} record: ${Object.keys(urls).length} listed, ${changed.length} changed or new, ${dropped.length} dropped.`);
  for (const u of [...changed, ...dropped].slice(0, 25)) console.log(`  ${u}`);
}

main().catch((err) => { console.error('[page-manifest] failed (deploy continues):', err); });
