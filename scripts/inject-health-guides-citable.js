#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// inject-health-guides-citable.js
//
// Injects citableSummary block + QAPage schema into each /public/health-guides
// /{slug}/index.html using authored summaries from data/health-guides-citable.json.
//
// Run via `node scripts/inject-health-guides-citable.js` from the project root.
// Idempotent — running multiple times produces the same output (existing block
// is detected and replaced).
//
// Triggered automatically before `next build` via package.json prebuild hook.
// ─────────────────────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');

const GUIDES_DIR = path.join(__dirname, '..', 'public', 'health-guides');
const DATA_PATH = path.join(__dirname, '..', 'data', 'health-guides-citable.json');
const NPI = '1104323203';
const DOCTOR = 'Parth Bhavsar, MD';
const TODAY = '2026-05-18';

const MARKER_START = '<!-- tdmd:citable-summary-start -->';
const MARKER_END = '<!-- tdmd:citable-summary-end -->';

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function stripHtml(s) {
  return String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

function renderBlock(slug, entry) {
  const pageUrl = `https://teledirectmd.com/health-guides/${slug}/`;
  const qaSchema = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    'mainEntity': {
      '@type': 'Question',
      'name': entry.question,
      'datePublished': TODAY,
      'author': {
        '@type': 'Person',
        'name': DOCTOR,
        'identifier': { '@type': 'PropertyValue', 'name': 'NPI', 'value': NPI },
      },
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': stripHtml(entry.answerHtml),
        'dateCreated': TODAY,
        'author': { '@type': 'Person', 'name': DOCTOR },
        'url': pageUrl,
      },
    },
  };
  const css = [
    'background:#FFFFFF',
    'border:1px solid #C2E0E5',
    'border-radius:8px',
    'padding:1.1rem 1.4rem',
    'margin:1.25rem auto',
    'max-width:980px',
    'line-height:1.65',
    'box-shadow:0 1px 2px rgba(0,0,0,0.03)',
  ].join(';');
  return `${MARKER_START}
<section class="tdmd-citable-summary" id="citable-summary-${slug}" data-speakable="true" itemscope itemtype="https://schema.org/Question" style="${css}">
  <h2 itemprop="name" style="margin:0 0 0.5rem;font-size:1.05rem;font-weight:700;color:#003E52;">${escapeHtml(entry.question)}</h2>
  <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
    <div itemprop="text" style="margin:0;color:#0A2438;font-size:0.97rem;">${entry.answerHtml}</div>
  </div>
</section>
<script type="application/ld+json">${JSON.stringify(qaSchema)}</script>
${MARKER_END}`;
}

function injectIntoFile(slug, entry) {
  const filePath = path.join(GUIDES_DIR, slug, 'index.html');
  if (!fs.existsSync(filePath)) return { slug, status: 'missing' };
  let html = fs.readFileSync(filePath, 'utf8');

  const block = renderBlock(slug, entry);

  // Idempotent: if a block exists, replace it. Otherwise insert after </header>.
  if (html.includes(MARKER_START)) {
    const re = new RegExp(MARKER_START + '[\\s\\S]*?' + MARKER_END, 'g');
    html = html.replace(re, block);
  } else {
    // Insert after the first </header> closing tag of the article-header
    const headerCloseRegex = /(<\/header>)/;
    if (!headerCloseRegex.test(html)) return { slug, status: 'no-header' };
    html = html.replace(headerCloseRegex, `$1\n${block}`);
  }

  fs.writeFileSync(filePath, html);
  return { slug, status: 'ok' };
}

function main() {
  if (!fs.existsSync(DATA_PATH)) {
    console.error(`[health-guides-citable] data file missing: ${DATA_PATH}`);
    console.error('  Skipping injection (this is fine for early builds).');
    process.exit(0);
  }
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  const slugs = Object.keys(data);
  console.log(`[health-guides-citable] injecting into ${slugs.length} guides...`);
  let ok = 0, missing = 0, noHeader = 0;
  for (const slug of slugs) {
    const result = injectIntoFile(slug, data[slug]);
    if (result.status === 'ok') ok++;
    else if (result.status === 'missing') { missing++; console.warn(`  missing: ${slug}`); }
    else if (result.status === 'no-header') { noHeader++; console.warn(`  no <header>: ${slug}`); }
  }
  console.log(`[health-guides-citable] ok=${ok} missing=${missing} no-header=${noHeader}`);
}

main();
