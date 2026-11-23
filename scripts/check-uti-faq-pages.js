#!/usr/bin/env node
// Build guard for the per-state UTI FAQ pages (/faq/deep-dive/can-you-get-uti-treatment-online-in-{state}/).
//
// The pages were rebuilt on 2026-11-23 (PR 278) so each one carries its own
// sourced state content instead of one template with the state name swapped.
// This check fails the build, and so blocks the deploy, if that slips back.
//
//   node scripts/check-uti-faq-pages.js            source check (runs in prebuild)
//   node scripts/check-uti-faq-pages.js --built    rendered check on out/ (runs after next build)
//   node scripts/check-uti-faq-pages.js --update-lock
//                                                  record content fingerprints after an edit,
//                                                  once faqDeepDive in lib/content-dates.js is bumped
//
// Rules, source check (data/faq-deep-dive/uti-states.json and the page template):
//   1. Every state in lib/faq-deep-dive-pages.js has an entry, and no entry is left over.
//   2. Every entry has a lead, a summary, a meta description and at least 2 state FAQs.
//      Every state outside HELD_STATES also has state law or pharmacy text and at least
//      2 sources, each an https link with a label.
//   3. No banned wording anywhere in the data or the page template:
//      the retired visit price, Medicaid, CHIP or any Medicaid, MME or D-SNP plan wording, an exact count of
//      states served (the site says "40+ states"), and em or en dashes.
//   4. No two states' own text overlaps more than MAX_PAIR_OWNED (8-word sequences,
//      state names, cities and numbers masked), and the average pair stays under
//      MAX_MEAN_OWNED. A page that falls back to shared template text fails here.
//   5. If any state's content or the page template changed since the lock file was
//      written, faqDeepDive in lib/content-dates.js must be newer than the lock's date,
//      and the lock must be refreshed with --update-lock. That date is the
//      "Last updated" date on every page and the sitemap lastmod.
//
// Rules, rendered check (out/faq/deep-dive/*/index.html, page body from the H1 to the
// review footer):
//   6. Every listed page is built, each shows "Last updated" with the faqDeepDive date, and
//      every state outside HELD_STATES renders a Sources list with at least 2 outside links.
//   7. Rule 3 again on the rendered body, title and meta description.
//   8. Rendered bodies: no pair over MAX_PAIR_RENDERED, average under MAX_MEAN_RENDERED.
//
// Thresholds. Measured on 2026-11-23 after PR 278: state-owned text averages 0.1%
// overlap between pages, closest pair 3.7% (Michigan and Missouri, two held states);
// rendered page bodies average 10.4%, closest pair 24.6% (DC and Michigan). Before
// PR 278 the rendered pages averaged 87% and many pairs were identical. The limits
// sit well above today's values so ordinary edits pass, and far below a template
// fallback so that fails.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = process.env.UTI_FAQ_ROOT ? path.resolve(process.env.UTI_FAQ_ROOT) : path.join(__dirname, '..');
const DATA = 'data/faq-deep-dive/uti-states.json';
const LOCK = 'data/faq-deep-dive/uti-states.lock.json';
const TEMPLATE = 'app/faq/deep-dive/[slug]/page.js';

// Pages kept to facts already on the site, with no state law or source list, while
// these states are on hold. Remove a state from this list once its page gets sources.
const HELD_STATES = ['mo', 'mi', 'dc'];

const MAX_PAIR_OWNED = 0.30;
const MAX_MEAN_OWNED = 0.10;
const MAX_PAIR_RENDERED = 0.50;
const MAX_MEAN_RENDERED = 0.30;
const SHINGLE = 8;

const BANNED = [
  // The retired price, built from parts so the sitewide stale-price check does not flag this file.
  [new RegExp(`\\$\\s*${4}${9}(?!\\d)`), 'the retired visit price (the visit is $79)'],
  [/medicaid/i, 'Medicaid'],
  [/\bCHIP\b/, 'CHIP'],
  [/\bMMEs?\b/, 'MME'],
  [/\bD-?SNPs?\b|dual[- ]eligible|special needs plan/i, 'D-SNP or dual-eligible plan'],
  [/medicare[- ]medicaid/i, 'Medicare-Medicaid plan'],
  [/\b(Medi-Cal|MassHealth|TennCare|SoonerCare|BadgerCare|MaineCare|HUSKY Health|Apple Health|AHCCCS|MO HealthNet|Healthy Michigan Plan|Healthy Louisiana|KanCare|NJ FamilyCare|PeachCare|Community Plan)\b/i, 'a state Medicaid or CHIP program name'],
  [/(?<![\d+])\b([2-5]\d)\s+states\b(?!\s*\+)/i, 'an exact count of states (use "40+ states")'],
  [/[‒–—―]/, 'an em or en dash'],
];

const args = process.argv.slice(2);
const MODE = args.includes('--built') ? 'built' : args.includes('--update-lock') ? 'lock' : 'source';
const problems = [];
const fail = (msg) => problems.push(msg);

const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

function faqStates() {
  const src = read('lib/faq-deep-dive-pages.js');
  const states = JSON.parse(src.match(/export const STATES = (\[[^\]]*\])/)[1].replace(/'/g, '"'));
  const names = JSON.parse(
    src.match(/export const STATE_NAMES = (\{[^}]*\})/)[1].replace(/'/g, '"').replace(/([a-z]{2}):/g, '"$1":'),
  );
  const prefix = src.match(/slugPrefix: '([^']+)'/)[1];
  return states.map((st) => ({ st, slug: `${prefix}-${names[st]}` }));
}

function faqDate() {
  const m = read('lib/content-dates.js').match(/faqDeepDive:\s*'(\d{4}-\d{2}-\d{2})'/);
  if (!m) throw new Error('lib/content-dates.js: faqDeepDive date not found');
  return m[1];
}

// Words that name a place, masked so two pages are compared on what they say, not
// on which state they are about.
function placeWords() {
  const states = JSON.parse(read('data/states.json'));
  const words = new Set(['washington d c', 'district of columbia', 'd c']);
  for (const s of states) {
    words.add(s.name.toLowerCase().replace(/[^a-z ]/g, ' ').replace(/\s+/g, ' ').trim());
    for (const c of s.cities || []) words.add(c.toLowerCase().replace(/[^a-z ]/g, ' ').replace(/\s+/g, ' ').trim());
  }
  return [...words].filter(Boolean).sort((a, b) => b.length - a.length);
}

let PLACES;
function normalize(text) {
  PLACES = PLACES || placeWords();
  let t = ` ${text.toLowerCase().replace(/&[a-z#0-9]+;/g, ' ').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ')} `;
  for (const w of PLACES) t = t.split(` ${w} `).join(' place ');
  return t.replace(/\b\d+\b/g, '#').trim().split(' ');
}

function shingles(text) {
  const w = normalize(text);
  const out = new Set();
  for (let i = 0; i + SHINGLE <= w.length; i++) out.add(w.slice(i, i + SHINGLE).join(' '));
  return out;
}

function similarity(label, texts, maxPair, maxMean) {
  const keys = Object.keys(texts);
  const sets = Object.fromEntries(keys.map((k) => [k, shingles(texts[k])]));
  let sum = 0, n = 0, worst = { v: 0, a: '', b: '' };
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const A = sets[keys[i]], B = sets[keys[j]];
      let inter = 0;
      for (const s of A) if (B.has(s)) inter++;
      const union = A.size + B.size - inter;
      const v = union ? inter / union : 1;
      sum += v; n++;
      if (v > worst.v) worst = { v, a: keys[i], b: keys[j] };
      if (v > maxPair) fail(`${label}: ${keys[i]} and ${keys[j]} share ${(v * 100).toFixed(0)}% of their text (limit ${maxPair * 100}%). One of them has fallen back to shared template text.`);
    }
  }
  const mean = n ? sum / n : 0;
  if (mean > maxMean) fail(`${label}: average overlap between pages is ${(mean * 100).toFixed(0)}% (limit ${maxMean * 100}%).`);
  return { mean, worst };
}

function bannedIn(where, text) {
  for (const [re, what] of BANNED) {
    const m = text.match(re);
    if (m) {
      const i = m.index;
      fail(`${where}: contains ${what}: "...${text.slice(Math.max(0, i - 40), i + 40).replace(/\s+/g, ' ')}..."`);
    }
  }
}

function ownedText(entry) {
  return [entry.lead, entry.law, entry.pharmacy, entry.local, entry.summary, entry.meta,
    ...(entry.faqs || []).flatMap((f) => [f.q, f.a])].filter(Boolean).join(' ');
}

function hash(s) {
  return crypto.createHash('sha256').update(s).digest('hex').slice(0, 16);
}

function fingerprints(data) {
  const out = { _template: hash(read(TEMPLATE)) };
  for (const st of Object.keys(data).sort()) out[st] = hash(JSON.stringify(data[st]));
  return out;
}

function sourceCheck() {
  const pages = faqStates();
  const data = JSON.parse(read(DATA));

  for (const { st } of pages) {
    const e = data[st];
    if (!e) { fail(`${st}: no entry in ${DATA}. The page would not build.`); continue; }
    for (const k of ['lead', 'summary', 'meta']) if (!e[k] || !String(e[k]).trim()) fail(`${st}: missing ${k}.`);
    if (!Array.isArray(e.faqs) || e.faqs.length < 2 || e.faqs.some((f) => !f.q || !f.a)) fail(`${st}: needs at least 2 state FAQs with a question and an answer.`);
    if (!HELD_STATES.includes(st)) {
      if (!e.law && !e.pharmacy) fail(`${st}: no state law or pharmacy text.`);
      const src = Array.isArray(e.sources) ? e.sources : [];
      if (src.length < 2) fail(`${st}: has ${src.length} source(s); needs at least 2.`);
      for (const s of src) if (!s.label || !/^https:\/\/[^\s]+$/.test(s.url || '')) fail(`${st}: source "${s.label || '(no label)'}" needs a label and an https link.`);
    }
  }
  for (const st of Object.keys(data)) if (!pages.some((p) => p.st === st)) fail(`${st}: entry in ${DATA} but no page for that state.`);

  for (const st of Object.keys(data)) bannedIn(st, JSON.stringify(data[st]));
  bannedIn(TEMPLATE, read(TEMPLATE));

  const owned = Object.fromEntries(pages.filter((p) => data[p.st]).map((p) => [p.st, ownedText(data[p.st])]));
  const sim = similarity('State text', owned, MAX_PAIR_OWNED, MAX_MEAN_OWNED);

  // Content changed without a date change.
  const date = faqDate();
  const now = fingerprints(data);
  if (!fs.existsSync(path.join(ROOT, LOCK))) {
    fail(`${LOCK} is missing. Run node scripts/check-uti-faq-pages.js --update-lock.`);
  } else {
    const lock = JSON.parse(read(LOCK));
    const changed = Object.keys(now).filter((k) => now[k] !== lock.fingerprints[k])
      .concat(Object.keys(lock.fingerprints).filter((k) => !(k in now)));
    if (changed.length) {
      const list = changed.map((k) => (k === '_template' ? 'page template' : k)).join(', ');
      if (date <= lock.faqDeepDive) {
        fail(`Content changed (${list}) but faqDeepDive in lib/content-dates.js is still ${date}. Bump it to today's date so the pages and sitemap show the update, then run --update-lock.`);
      } else {
        fail(`Content changed (${list}) and the date moved to ${date}. Run node scripts/check-uti-faq-pages.js --update-lock and commit ${LOCK}.`);
      }
    }
  }
  return { pages: pages.length, sim };
}

function builtCheck() {
  const pages = faqStates();
  const date = faqDate();
  const bodies = {};
  for (const { st, slug } of pages) {
    const file = path.join(ROOT, 'out/faq/deep-dive', slug, 'index.html');
    if (!fs.existsSync(file)) { fail(`${slug}: not built.`); continue; }
    const html = fs.readFileSync(file, 'utf8');
    const start = html.indexOf('<h1');
    const end = html.indexOf('Medically reviewed by Parth Bhavsar, MD. Last updated');
    if (start < 0 || end < start) { fail(`${slug}: page body or review footer not found.`); continue; }
    const body = html.slice(start, end + 80);
    if (!body.includes(`Last updated <!-- -->${date}`) && !body.includes(`Last updated ${date}`)) fail(`${slug}: "Last updated" does not show ${date}.`);
    if (!HELD_STATES.includes(st)) {
      const m = body.match(/>Sources<\/h2>([\s\S]*?)<\/ul>/);
      const links = m ? (m[1].match(/href="https:\/\//g) || []).length : 0;
      if (links < 2) fail(`${slug}: renders ${links} source link(s); needs at least 2.`);
    }
    const text = body.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
    bannedIn(slug, `${title} ${desc} ${text}`);
    bodies[st] = text;
  }
  const sim = similarity('Rendered pages', bodies, MAX_PAIR_RENDERED, MAX_MEAN_RENDERED);
  return { pages: Object.keys(bodies).length, sim };
}

function updateLock() {
  const data = JSON.parse(read(DATA));
  const date = faqDate();
  const now = fingerprints(data);
  const lockPath = path.join(ROOT, LOCK);
  if (fs.existsSync(lockPath)) {
    const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
    const changed = Object.keys(now).some((k) => now[k] !== lock.fingerprints[k]);
    if (changed && date <= lock.faqDeepDive) {
      console.error(`Content changed but faqDeepDive is still ${date}. Bump it in lib/content-dates.js first.`);
      process.exit(1);
    }
  }
  fs.writeFileSync(lockPath, `${JSON.stringify({ faqDeepDive: date, fingerprints: now }, null, 1)}\n`);
  console.log(`Wrote ${LOCK} for ${Object.keys(now).length - 1} states at ${date}.`);
}

if (MODE === 'lock') {
  updateLock();
} else {
  const r = MODE === 'built' ? builtCheck() : sourceCheck();
  const label = MODE === 'built' ? 'rendered' : 'source';
  if (problems.length) {
    console.error(`UTI FAQ page check (${label}) FAILED with ${problems.length} problem(s):`);
    for (const p of problems) console.error(`  - ${p}`);
    process.exit(1);
  }
  console.log(`UTI FAQ page check (${label}) passed: ${r.pages} pages, average overlap ${(r.sim.mean * 100).toFixed(1)}%, closest pair ${r.sim.worst.a}/${r.sim.worst.b} at ${(r.sim.worst.v * 100).toFixed(1)}%.`);
}
