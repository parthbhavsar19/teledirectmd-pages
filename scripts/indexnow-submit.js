#!/usr/bin/env node
/**
 * IndexNow URL submission script.
 *
 * Submits one or more URLs to the IndexNow protocol — notifies Bing, Yandex,
 * Seznam, Naver, and Yep simultaneously. Bing's index also feeds Perplexity,
 * ChatGPT browsing, Microsoft Copilot, and Brave Search.
 *
 * Usage:
 *   node scripts/indexnow-submit.js <url1> [url2] [url3] ...
 *   node scripts/indexnow-submit.js --file <path>           (one URL per line)
 *   node scripts/indexnow-submit.js --sitemap               (submit full sitemap)
 *
 * Environment:
 *   INDEXNOW_KEY  — 64-char hex key (required; falls back to .indexnow-key file)
 *   HOST          — teledirectmd.com (default)
 *   SITEMAP_URL   — https://teledirectmd.com/sitemap.xml (default)
 *
 * Best-effort: this script never exits non-zero on submission failure.
 * Vercel builds should not fail because IndexNow had a hiccup.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = process.env.HOST || 'teledirectmd.com';
const SITEMAP_URL = process.env.SITEMAP_URL || `https://${HOST}/sitemap.xml`;
const KEY = (process.env.INDEXNOW_KEY ||
  (fs.existsSync(path.join(__dirname, '..', '.indexnow-key'))
    ? fs.readFileSync(path.join(__dirname, '..', '.indexnow-key'), 'utf8').trim()
    : 'd76375fb5cb6c507ff64bf4a98239d44')); // baked-in default for this repo

if (!KEY) {
  console.error('ERROR: No IndexNow key found. Set INDEXNOW_KEY env var or create .indexnow-key file.');
  process.exit(0); // best-effort: don't fail the build
}

const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function collectUrls(argv) {
  const args = argv.slice(2);
  let urls = [];
  let wantsSitemap = false;
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--file' || a === '-f') {
      const file = args[++i];
      urls = urls.concat(
        fs.readFileSync(file, 'utf8').split('\n').map(s => s.trim()).filter(Boolean)
      );
    } else if (a === '--sitemap') {
      wantsSitemap = true;
    } else if (a.startsWith('http')) {
      urls.push(a);
    }
  }
  urls = urls.filter(u => u.startsWith('https://' + HOST + '/'));
  return { urls, wantsSitemap };
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

async function fetchSitemapUrls() {
  // Prefer the just-built local sitemap (postbuild context) over the live URL.
  // This lets the deploy ping IndexNow with URLs that may not yet be live but will be in seconds.
  const localSitemapPaths = [
    path.join(__dirname, '..', 'out', 'sitemap.xml'),
    path.join(__dirname, '..', 'public', 'sitemap.xml'),
  ];
  let body = null;
  for (const p of localSitemapPaths) {
    if (fs.existsSync(p)) {
      console.log(`Reading local sitemap from ${p}…`);
      body = fs.readFileSync(p, 'utf8');
      break;
    }
  }
  if (!body) {
    console.log(`No local sitemap found. Fetching from ${SITEMAP_URL}…`);
    const r = await fetchUrl(SITEMAP_URL);
    if (r.status !== 200) {
      throw new Error(`Sitemap fetch failed: HTTP ${r.status}`);
    }
    body = r.body;
  }
  // Extract all <loc>...</loc> entries
  const matches = body.match(/<loc>([^<]+)<\/loc>/g) || [];
  const urls = matches.map((m) => m.replace(/<\/?loc>/g, '').trim());
  // Canonicalize: trailing slashes on non-apex URLs (skip files with extensions)
  const canonicalized = urls.map((u) => {
    if (u === `https://${HOST}`) return `https://${HOST}/`;
    if (!u.endsWith('/') && !/\.[a-z0-9]{2,4}($|\?)/i.test(u)) {
      return u + '/';
    }
    return u;
  });
  return [...new Set(canonicalized)];
}

function submitToEndpoint(hostname, urls) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    });
    const req = https.request({
      hostname,
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(body),
      },
      timeout: 30000,
    }, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', (e) => resolve({ status: 0, body: String(e) }));
    req.on('timeout', () => { req.destroy(); resolve({ status: 0, body: 'timeout' }); });
    req.write(body);
    req.end();
  });
}

async function submit(urls) {
  // Fan out to IndexNow master + Bing direct + Yandex direct for redundancy.
  // Bing direct ensures fastest propagation to ChatGPT Search and Copilot.
  const endpoints = [
    { name: 'IndexNow.org (master)', host: 'api.indexnow.org' },
    { name: 'Bing direct',           host: 'www.bing.com' },
    { name: 'Yandex direct',         host: 'yandex.com' },
  ];
  const results = [];
  for (const ep of endpoints) {
    const r = await submitToEndpoint(ep.host, urls);
    results.push({ name: ep.name, status: r.status, body: r.body });
  }
  return results;
}

async function main() {
  const { urls: explicitUrls, wantsSitemap } = collectUrls(process.argv);
  let urls = explicitUrls.slice();

  if (wantsSitemap) {
    try {
      const sitemapUrls = await fetchSitemapUrls();
      console.log(`Fetched ${sitemapUrls.length} URLs from sitemap.`);
      urls = [...new Set([...urls, ...sitemapUrls])];
    } catch (e) {
      console.error('Sitemap fetch failed:', e.message);
      return; // best-effort
    }
  }

  if (urls.length === 0) {
    console.error('No valid URLs to submit. Skipping.');
    return; // best-effort
  }

  if (urls.length > 10000) {
    console.log(`Truncating from ${urls.length} to 10,000 URLs (IndexNow per-call limit).`);
    urls = urls.slice(0, 10000);
  }

  console.log(`Submitting ${urls.length} URL(s) to IndexNow…`);
  console.log(`  Host:     ${HOST}`);
  console.log(`  Key file: ${KEY_LOCATION}`);
  console.log('');

  const results = await submit(urls);
  let anyOk = false;
  for (const r of results) {
    const ok = r.status === 200 || r.status === 202;
    const icon = ok ? '✓' : '✗';
    const bodyPreview = r.body ? ' — ' + r.body.slice(0, 120).replace(/\s+/g, ' ') : '';
    console.log(`  ${icon} ${r.name}: HTTP ${r.status}${bodyPreview}`);
    if (ok) anyOk = true;
  }

  if (anyOk) {
    console.log(`\n✓ IndexNow submission complete (${urls.length} URLs).`);
  } else {
    console.error('\n⚠ All endpoints failed — build continues (best-effort).');
  }
}

main().catch((err) => {
  // Final safety net: never fail the build.
  console.error('Unexpected error:', err);
});
