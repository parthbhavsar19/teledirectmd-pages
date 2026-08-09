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
}

main();
