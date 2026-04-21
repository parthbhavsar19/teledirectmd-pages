// ─── Internal linking helpers ───
// Builds cross-link modules across the site so that LLMs / Google discover
// the full entity graph: conditions ↔ states ↔ insurers.
// Keep in sync with data/insurance/insuranceConfig.js

import { INSURERS, INSURANCE_CONDITIONS, STATE_NAMES } from '../data/insurance/insuranceConfig';

// Map national condition slugs (e.g. "uti") to the insurance condition slugs (e.g. "uti-treatment")
// used in the triple-matrix /insurance/{insurer}/{state}/{condition} URLs.
const NATIONAL_TO_INSURANCE_CONDITION = {
  'uti': 'uti-treatment',
  'urinary-tract-infection': 'uti-treatment',
  'sinus-infection': 'sinus-infection',
  'sinusitis': 'sinus-infection',
  'strep-throat': 'strep-throat',
  'pink-eye': 'pink-eye',
  'conjunctivitis': 'pink-eye',
  'ear-infection': 'ear-infection',
  'asthma': 'asthma-refill',
  'asthma-refill': 'asthma-refill',
  'hypertension': 'hypertension-refill',
  'high-blood-pressure': 'hypertension-refill',
  'hypertension-refill': 'hypertension-refill',
  'acid-reflux': 'acid-reflux',
  'gerd': 'acid-reflux',
  'flu': 'flu-treatment',
  'influenza': 'flu-treatment',
  'flu-treatment': 'flu-treatment',
  'yeast-infection': 'yeast-infection',
};

// Reverse map: insurance condition slug → national condition slug
const INSURANCE_TO_NATIONAL_CONDITION = {
  'uti-treatment': 'uti',
  'sinus-infection': 'sinus-infection',
  'strep-throat': 'strep-throat',
  'pink-eye': 'pink-eye',
  'ear-infection': 'ear-infection',
  'asthma-refill': 'asthma',
  'hypertension-refill': 'hypertension',
  'acid-reflux': 'gerd',
  'flu-treatment': 'flu',
  'yeast-infection': 'yeast-infection',
};

// Returns list of insurers that cover a given state abbreviation.
// Each entry: { slug, name, url }
export function getInsurersForState(stateAbbr) {
  if (!stateAbbr) return [];
  const abbr = stateAbbr.toUpperCase();
  const stateSlug = (STATE_NAMES[abbr] || '').toLowerCase().replace(/\s+/g, '-');
  if (!stateSlug) return [];
  const results = [];
  Object.values(INSURERS).forEach((ins) => {
    if (ins.states && ins.states.includes(abbr)) {
      results.push({
        slug: ins.slug,
        name: ins.name,
        url: `/insurance/${ins.slug}/${stateSlug}`,
      });
    }
  });
  return results;
}

// Returns triple-matrix URL for a given insurer+state+condition if that combo exists.
// Returns null if the combo is not built.
export function getTripleMatrixUrl(insurerSlug, stateAbbr, nationalConditionSlug) {
  const insurer = INSURERS[insurerSlug];
  if (!insurer) return null;
  if (!insurer.states.includes(stateAbbr.toUpperCase())) return null;
  const insCondSlug = NATIONAL_TO_INSURANCE_CONDITION[nationalConditionSlug];
  if (!insCondSlug) return null;
  // Verify insurance condition is in the INSURANCE_CONDITIONS list
  const cond = INSURANCE_CONDITIONS[insCondSlug];
  if (!cond) return null;
  const stateSlug = (STATE_NAMES[stateAbbr.toUpperCase()] || '').toLowerCase().replace(/\s+/g, '-');
  if (!stateSlug) return null;
  return `/insurance/${insurerSlug}/${stateSlug}/${insCondSlug}`;
}

// Returns list of insurance cross-links for a given condition×state page.
// Each entry: { insurerName, insurerSlug, tripleMatrixUrl, insurerStateUrl }
export function getInsuranceLinksForConditionState(nationalConditionSlug, stateAbbr) {
  const insurers = getInsurersForState(stateAbbr);
  return insurers.map((ins) => ({
    insurerName: ins.name,
    insurerSlug: ins.slug,
    insurerStateUrl: ins.url,
    tripleMatrixUrl: getTripleMatrixUrl(ins.slug, stateAbbr, nationalConditionSlug),
  }));
}

// Returns the national condition page slug from an insurance condition slug
export function getNationalConditionSlug(insuranceConditionSlug) {
  return INSURANCE_TO_NATIONAL_CONDITION[insuranceConditionSlug] || null;
}

// Returns top N conditions we cover as insurance pages, for link modules
export function getTopInsuranceConditions(limit = 6) {
  return Object.values(INSURANCE_CONDITIONS).slice(0, limit).map((c) => ({
    slug: c.slug,
    name: c.name,
    nationalSlug: getNationalConditionSlug(c.slug),
  }));
}
