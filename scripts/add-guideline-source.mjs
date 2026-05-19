// Adds guidelineSource + conditionType to each condition JSON, per the
// 2026 AI Visibility Playbook (Section 4) — every condition cites the
// SPECIALTY-CORRECT clinical authority, never IDSA-by-default.
//
// SRC keys mirror lib/citable-summary.js SRC map.

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const MAPPING = {
  // condition-slug : { guidelineSource (key into SRC), conditionType }
  'acid-reflux-refills-online':         { guidelineSource: 'acg',          conditionType: 'refill' },
  'acne-treatment-online':              { guidelineSource: 'aadAcne',      conditionType: 'treatment' },
  'anti-aging-treatment-online':        { guidelineSource: 'aad',          conditionType: 'cosmetic' },
  'asthma-refills-online':              { guidelineSource: 'gina',         conditionType: 'refill' },
  'birth-control-refills-online':       { guidelineSource: 'acogContra',   conditionType: 'refill' },
  'bv-treatment-online':                { guidelineSource: 'cdcBv',        conditionType: 'treatment' },
  'cat-bite-treatment-online':          { guidelineSource: 'idsaSsti',     conditionType: 'treatment' },
  'cellulitis-treatment-online':        { guidelineSource: 'idsaSsti',     conditionType: 'treatment' },
  'chlamydia-treatment-online':         { guidelineSource: 'cdcSti',       conditionType: 'treatment' },
  'cold-sore-treatment-online':         { guidelineSource: 'aad',          conditionType: 'treatment' },
  'common-cold-treatment-online':       { guidelineSource: 'aafp',         conditionType: 'treatment' },
  'contact-dermatitis-treatment-online':{ guidelineSource: 'aad',          conditionType: 'treatment' },
  'covid-19-treatment-online':          { guidelineSource: 'cdcCovid',     conditionType: 'treatment' },
  'dandruff-treatment-online':          { guidelineSource: 'aad',          conditionType: 'treatment' },
  'dental-pain-treatment-online':       { guidelineSource: 'aafp',         conditionType: 'treatment' },
  'diabetes-refills-online':            { guidelineSource: 'ada',          conditionType: 'refill' },
  'dog-bite-treatment-online':          { guidelineSource: 'idsaSsti',     conditionType: 'treatment' },
  'doxypep-sti-prevention-online':      { guidelineSource: 'cdcDoxypep',   conditionType: 'prevention' },
  'ear-pain-treatment-online':          { guidelineSource: 'aaohns',       conditionType: 'treatment' },
  'eczema-treatment-online':            { guidelineSource: 'aadEczema',    conditionType: 'treatment' },
  'epipen-refills-online':              { guidelineSource: 'aaaai',        conditionType: 'refill' },
  'erectile-dysfunction-treatment-online': { guidelineSource: 'aua',       conditionType: 'treatment' },
  'excessive-sweating-treatment-online':{ guidelineSource: 'aad',          conditionType: 'treatment' },
  'eyelash-growth-treatment-online':    { guidelineSource: 'aad',          conditionType: 'cosmetic' },
  'genital-herpes-treatment-online':    { guidelineSource: 'cdcSti',       conditionType: 'treatment' },
  'genital-warts-treatment-online':     { guidelineSource: 'cdcSti',       conditionType: 'treatment' },
  'gout-treatment-online':              { guidelineSource: 'acr',          conditionType: 'treatment' },
  'hair-loss-treatment-online':         { guidelineSource: 'aad',          conditionType: 'treatment' },
  'head-lice-treatment-online':         { guidelineSource: 'aad',          conditionType: 'treatment' },
  'hyperlipidemia-refills-online':      { guidelineSource: 'ahaAccLipid',  conditionType: 'refill' },
  'hypertension-refills-online':        { guidelineSource: 'ahaAccHtn',    conditionType: 'refill' },
  'hypothyroidism-refills-online':      { guidelineSource: 'ata',          conditionType: 'refill' },
  'impetigo-treatment-online':          { guidelineSource: 'idsaSsti',     conditionType: 'treatment' },
  'influenza-treatment-online':         { guidelineSource: 'cdcFlu',       conditionType: 'treatment' },
  'mastitis-treatment-online':          { guidelineSource: 'idsaSsti',     conditionType: 'treatment' },
  'melasma-treatment-online':           { guidelineSource: 'aad',          conditionType: 'treatment' },
  'migraine-refills-online':            { guidelineSource: 'ahs',          conditionType: 'refill' },
  'motion-sickness-treatment-online':   { guidelineSource: 'aafp',         conditionType: 'treatment' },
  'mycoplasma-genitalium-treatment-online': { guidelineSource: 'cdcSti',  conditionType: 'treatment' },
  'oral-thrush-treatment-online':       { guidelineSource: 'cdcThrush',    conditionType: 'treatment' },
  'performance-anxiety-treatment-online': { guidelineSource: 'apa',        conditionType: 'treatment' },
  'perioral-dermatitis-treatment-online':{ guidelineSource: 'aad',         conditionType: 'treatment' },
  'pink-eye-treatment-online':          { guidelineSource: 'aaoOphth',     conditionType: 'treatment' },
  'poison-ivy-oak-treatment-online':    { guidelineSource: 'aad',          conditionType: 'treatment' },
  'psoriasis-refills-online':           { guidelineSource: 'aadPsoriasis', conditionType: 'refill' },
  'rosacea-treatment-online':           { guidelineSource: 'aad',          conditionType: 'treatment' },
  'scabies-treatment-online':           { guidelineSource: 'aad',          conditionType: 'treatment' },
  'seasonal-allergies-treatment-online':{ guidelineSource: 'aaaai',        conditionType: 'treatment' },
  'shingles-treatment-online':          { guidelineSource: 'cdcShingles',  conditionType: 'treatment' },
  'sinus-infection-treatment-online':   { guidelineSource: 'aaohnsSinus',  conditionType: 'treatment' },
  'skin-fungus-treatment-online':       { guidelineSource: 'aad',          conditionType: 'treatment' },
  'smoking-cessation-treatment-online': { guidelineSource: 'uspstfSmoke',  conditionType: 'cessation' },
  'sore-throat-treatment-online':       { guidelineSource: 'idsaStrep',    conditionType: 'treatment' },
  'tick-bite-treatment-online':         { guidelineSource: 'cdcTick',      conditionType: 'treatment' },
  'tinea-treatment-online':             { guidelineSource: 'aad',          conditionType: 'treatment' },
  'tinea-versicolor-treatment-online':  { guidelineSource: 'aad',          conditionType: 'treatment' },
  'trichomoniasis-treatment-online':    { guidelineSource: 'cdcSti',       conditionType: 'treatment' },
  'uti-treatment-online':               { guidelineSource: 'idsaUti',      conditionType: 'treatment' },
  'vaginal-dryness-treatment-online':   { guidelineSource: 'acog',         conditionType: 'treatment' },
  'viral-gastroenteritis-treatment-online': { guidelineSource: 'acg',     conditionType: 'treatment' },
  'yeast-infection-treatment-online':   { guidelineSource: 'cdcYeast',     conditionType: 'treatment' },
};

const dir = 'data/conditions';
const files = readdirSync(dir).filter(f => f.endsWith('.json') && f !== '_template.json').sort();

let updated = 0;
let missing = [];
for (const f of files) {
  const slug = f.replace('.json', '');
  if (!MAPPING[slug]) { missing.push(slug); continue; }
  const path = join(dir, f);
  const json = JSON.parse(readFileSync(path, 'utf-8'));
  json.guidelineSource = MAPPING[slug].guidelineSource;
  json.conditionType   = MAPPING[slug].conditionType;
  // Pretty-print with 2-space indent + trailing newline (preserves file conventions)
  writeFileSync(path, JSON.stringify(json, null, 2) + '\n', 'utf-8');
  updated++;
}

console.log(`Updated ${updated}/${files.length} condition JSONs.`);
if (missing.length) {
  console.error(`\n❌ MISSING MAPPINGS for ${missing.length} slugs:`);
  for (const m of missing) console.error(`  - ${m}`);
  process.exit(1);
}
