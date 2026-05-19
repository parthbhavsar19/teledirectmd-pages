// Rewrites pageTitle on each condition JSON to follow the 2026 AI Visibility
// Playbook (§5) clean pattern: "[Condition] Online [Action] in {state} | TeleDirectMD"
// Target length: ~45–65 chars rendered (Google's pixel cap for desktop SERP).
// No pipe-stuffing of synonyms (was HCU-flagged spam in PR #32 audit).
//
// Action word is picked by conditionType so refill pages don't read "Treatment"
// and prevention pages don't read "Treatment".

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const ACTION_BY_TYPE = {
  treatment: 'Online Treatment',
  refill:    'Online Refills',
  prevention:'Online Prevention',
  cessation: 'Online Treatment',
  cosmetic:  'Online Treatment',
  screening: 'Online Screening',
};

// Per-slug overrides where the default pattern would read awkwardly
// (e.g. "STI Prevention Online Prevention", or names that exceed 70 chars).
const OVERRIDES = {
  'doxypep-sti-prevention-online':       'DoxyPEP for STI Prevention Online in {state} | TeleDirectMD',
  'poison-ivy-oak-treatment-online':     'Poison Ivy & Oak Online Treatment in {state} | TeleDirectMD',
  'viral-gastroenteritis-treatment-online': 'Stomach Flu Online Treatment in {state} | TeleDirectMD',
  'mycoplasma-genitalium-treatment-online': 'M. Genitalium Online Treatment in {state} | TeleDirectMD',
  'smoking-cessation-treatment-online':  'Smoking Cessation Online in {state} | TeleDirectMD',
};

function cleanBase(cn) {
  return cn
    .replace(/\s+Medication Refills$/i, '')
    .replace(/\s+Refills$/i, '')
    .replace(/\s+Treatment$/i, '')
    .trim();
}

const dir = 'data/conditions';
const files = readdirSync(dir).filter(f => f.endsWith('.json') && f !== '_template.json').sort();

let updated = 0;
const longTitles = [];

for (const f of files) {
  const slug = f.replace('.json', '');
  const path = join(dir, f);
  const json = JSON.parse(readFileSync(path, 'utf-8'));

  let newTitle;
  if (OVERRIDES[slug]) {
    newTitle = OVERRIDES[slug];
  } else {
    const base = cleanBase(json.conditionName);
    const action = ACTION_BY_TYPE[json.conditionType] || 'Online Treatment';
    newTitle = `${base} ${action} in {state} | TeleDirectMD`;
  }

  // Worst-case rendered length check against the longest state name (13 chars)
  const worst = newTitle.replace('{state}', 'West Virginia');
  if (worst.length > 70) longTitles.push(`${slug}: ${worst.length} chars — ${worst}`);

  json.pageTitle = newTitle;
  writeFileSync(path, JSON.stringify(json, null, 2) + '\n', 'utf-8');
  updated++;
}

console.log(`Updated ${updated}/${files.length} condition pageTitles.`);
if (longTitles.length) {
  console.warn(`\n⚠️  ${longTitles.length} titles still >70 chars worst-case (review):`);
  for (const t of longTitles) console.warn(`  ${t}`);
}
