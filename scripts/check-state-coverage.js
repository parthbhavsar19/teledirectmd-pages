#!/usr/bin/env node
/**
 * Guards the enumerated state lists against drift on a state launch.
 *
 * Why this exists: the Alaska launch swept state *counts* ("43 states" ->
 * "44 states") across 60 files, but could not catch lists that enumerate states
 * by NAME, because those contain no number to match on. The FAQ shipped saying
 * "44 U.S. states plus the District of Columbia" directly above a list of 43.
 * The same bug had already shipped for Vermont in June and Virginia in July and
 * gone unnoticed for two months.
 *
 * Two assertions per list:
 *   1. every served state in data/states.json appears
 *   2. no state we do NOT serve appears
 *
 * (2) matters because the inverse bug also shipped: Hawaii was named in
 * "states we do not serve" copy while 62 Hawaii pages were live and ranking.
 *
 * Runs in prebuild, so a miss fails the Vercel build instead of reaching prod.
 * Adding a state? If this fails, add the state to the named file. Do not add an
 * exemption unless the list genuinely should not be exhaustive.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ALL_US = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
  'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

/**
 * Files that must enumerate every served state.
 * `section` scopes the check to one region of the file, so unrelated state
 * mentions elsewhere in the same file do not produce false passes or failures.
 */
const LISTS = [
  { file: 'app/faq/page.js',
    section: /plus the District of Columbia:[\s\S]{0,1600}/ },
  { file: 'app/faq/FAQClient.js',
    section: /Alabama,[\s\S]{0,1600}/ },
  { file: 'app/faq/deep-dive/page.js',
    section: /abbr: 'al'[\s\S]{0,4000}/ },
  { file: 'app/components/UtiAntibioticsPage.js',
    section: /\['Alabama'[\s\S]{0,1600}/ },
  { file: 'app/who-we-serve/[segment]/UninsuredAffordableCarePage.js',
    section: /Alabama,[\s\S]{0,1600}/ },
  { file: 'data/insurance/insuranceConfig.js',
    section: /export const STATE_NAMES = \{[\s\S]*?\};/ },
];

function servedStates() {
  const raw = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/states.json'), 'utf8'));
  return raw
    .map((s) => s.name)
    .filter((n) => n && !/District of Columbia|Washington,? ?D\.?C\.?/i.test(n));
}

function main() {
  const served = servedStates();
  const servedSet = new Set(served);
  const unserved = ALL_US.filter((s) => !servedSet.has(s));
  const problems = [];

  for (const { file, section } of LISTS) {
    const abs = path.join(ROOT, file);
    if (!fs.existsSync(abs)) { problems.push(`${file}: file not found`); continue; }

    const full = fs.readFileSync(abs, 'utf8');
    const m = full.match(section);
    if (!m) { problems.push(`${file}: section pattern did not match — update this script`); continue; }
    const scope = m[0];

    // Longest-first so "West Virginia" is not counted as "Virginia",
    // and "Washington" is not matched inside "Washington DC".
    const ordered = [...ALL_US].sort((a, b) => b.length - a.length);
    const seen = new Set();
    let hay = scope;
    for (const name of ordered) {
      const re = new RegExp(`\\b${name.replace(/ /g, '[ -]')}\\b`);
      if (re.test(hay)) {
        seen.add(name);
        hay = hay.replace(new RegExp(`\\b${name.replace(/ /g, '[ -]')}\\b`, 'g'), '');
      }
    }

    const missing = served.filter((s) => !seen.has(s));
    const wrongly = unserved.filter((s) => seen.has(s));
    if (missing.length) problems.push(`${file}: missing served state(s): ${missing.join(', ')}`);
    if (wrongly.length) problems.push(`${file}: lists state(s) we do not serve: ${wrongly.join(', ')}`);
  }

  if (problems.length) {
    console.error('\n\u2717 State list check failed\n');
    problems.forEach((p) => console.error(`  ${p}`));
    console.error(`\n  Served states (${served.length}) come from data/states.json.`);
    console.error('  Add the missing state to each file above, then rebuild.\n');
    process.exit(1);
  }

  console.log(`\u2713 State lists: ${served.length} served states present in all ${LISTS.length} enumerated lists`);

  // ── Inline-count drift check ──
  // Catches stale TeleDirectMD-attributed counts like "40+ states", "41-state
  // network", "licensed in 43 states" that the enumerated-list check cannot see
  // because there is no name list to compare against. Competitor counts and
  // outside clinical/policy facts ("50 states", Medicaid "41 states + DC") are
  // allowlisted.
  const countProblems = [];

  // Files that legitimately mention non-44 state counts (competitor coverage,
  // clinical scope, CDC/policy stats). Skipped by the inline check.
  const COUNT_ALLOWLIST_PATHS = [
    'lib/compare-pages-config.js',        // competitor coverage claims
    'app/compare/',                       // competitor comparison prose
    'public/health-guides/',              // clinical facts, policy stats
    'data/outbreaks/',                    // CDC outbreak reports
    'scripts/check-state-coverage.js',    // this file (self-reference)
    'SETUP.md',                           // docs
  ];

  // Files that legitimately reference the historical $49 price point
  // (verbatim patient testimonials, the good-faith-estimate price-change note).
  // Everything else that mentions $49 is stale copy and must be fixed.
  const PRICE_ALLOWLIST_PATHS = [
    'data/reviews.json',                  // verbatim patient testimonials from 2025-2026
    'app/HomepageClient.js',              // renders reviews.json verbatim
    'app/good-faith-estimate/',           // historical price-change note
    'lib/cost-pages-config.js',           // unrelated competitor pricing ($49/mo subscription)
    'public/health-guides/',              // any legitimate $49 clinical reference
    'scripts/check-state-coverage.js',    // this file (self-reference)
    'memory/',                            // agent memory dumps if committed
  ];

  // File extensions to scan.
  const COUNT_EXTS = new Set(['.js', '.jsx', '.ts', '.tsx', '.mdx', '.md', '.json']);

  // The forbidden patterns. Each entry: label, regex, and reason.
  // The regex must be TeleDirectMD-attributable — i.e. either not qualified,
  // or explicitly TeleDirectMD-attributed. We keep it conservative on purpose:
  // false negatives are OK, false positives break the build.
  const FORBIDDEN = [
    { label: '40+ states', re: /\b40\+\s*states?\b/i },
    { label: 'TeleDirectMD 41-state / 41 states', re: /\b41[- ]?states?\b|TeleDirectMD['\u2019]?s?\s+4[0-3]\b/i },
    { label: 'Licensed in 4[0-3] states (stale count)', re: /\bLicensed in 4[0-3]\s+states?\b/i },
    { label: 'TeleDirectMD.{0,60}\\b4[0-3]\\s+states', re: /TeleDirectMD[\s\S]{0,80}\b4[0-3]\s+states?\b/i },
  ];

  function walk(dir, out) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') continue;
      const full = path.join(dir, entry.name);
      const rel = path.relative(ROOT, full);
      if (COUNT_ALLOWLIST_PATHS.some((p) => rel.startsWith(p))) continue;
      if (entry.isDirectory()) walk(full, out);
      else if (COUNT_EXTS.has(path.extname(entry.name))) out.push(full);
    }
  }

  const files = [];
  walk(ROOT, files);

  for (const abs of files) {
    const rel = path.relative(ROOT, abs);
    let txt;
    try { txt = fs.readFileSync(abs, 'utf8'); } catch { continue; }
    for (const { label, re } of FORBIDDEN) {
      if (re.test(txt)) {
        // Report every matching line for actionability.
        const lines = txt.split('\n');
        lines.forEach((line, i) => {
          if (re.test(line)) {
            countProblems.push(`${rel}:${i + 1}  [${label}]  ${line.trim().slice(0, 200)}`);
          }
        });
      }
    }
  }

  if (countProblems.length) {
    console.error('\n\u2717 Inline state-count check failed\n');
    countProblems.forEach((p) => console.error(`  ${p}`));
    console.error(`\n  Canonical count is 44 states + DC. Update the phrases above.`);
    console.error('  If a phrase legitimately refers to a competitor or outside stat,');
    console.error('  move it under an allowlisted path or reword.\n');
    process.exit(1);
  }

  console.log(`\u2713 Inline state counts: no stale 40+/41/42/43 phrases in ${files.length} scanned files`);

  // ── Stale $49 pricing check ──
  // The self-pay fee moved from $49 to $79 on 2026-05-23. Any $49 phrase in
  // code that renders on marketing pages is either stale or wrong. Verbatim
  // patient testimonials (with the pre-May-2026 price they actually paid) live
  // in data/reviews.json and are allowlisted.
  const priceProblems = [];
  const priceFiles = [];
  function walkPrice(dir, out) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') continue;
      const full = path.join(dir, entry.name);
      const rel = path.relative(ROOT, full);
      if (PRICE_ALLOWLIST_PATHS.some((p) => rel.startsWith(p))) continue;
      if (entry.isDirectory()) walkPrice(full, out);
      else if (COUNT_EXTS.has(path.extname(entry.name))) out.push(full);
    }
  }
  walkPrice(ROOT, priceFiles);

  // Match literal '$49' as a price token — not part of $499, $4900, etc.
  const DOLLAR_49 = /\$49(?!\d)/;

  for (const abs of priceFiles) {
    const rel = path.relative(ROOT, abs);
    let txt;
    try { txt = fs.readFileSync(abs, 'utf8'); } catch { continue; }
    if (!DOLLAR_49.test(txt)) continue;
    const lines = txt.split('\n');
    lines.forEach((line, i) => {
      if (DOLLAR_49.test(line)) {
        priceProblems.push(`${rel}:${i + 1}  ${line.trim().slice(0, 200)}`);
      }
    });
  }

  if (priceProblems.length) {
    console.error('\n\u2717 Stale $49 pricing check failed\n');
    priceProblems.forEach((p) => console.error(`  ${p}`));
    console.error(`\n  Canonical self-pay price is $79 (effective 2026-05-23).`);
    console.error('  Update the phrases above. If the $49 is a verbatim');
    console.error('  patient testimonial or historical note, move it under an');
    console.error('  allowlisted path.\n');
    process.exit(1);
  }

  console.log(`\u2713 Pricing: no stale $49 phrases in ${priceFiles.length} scanned files`);
}

main();
