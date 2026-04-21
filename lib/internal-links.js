// ─── Internal linking helpers ───
// Builds cross-link modules across the site so that LLMs / Google discover
// the full entity graph: conditions ↔ states ↔ insurers.
// Keep in sync with data/insurance/insuranceConfig.js

import { INSURERS, INSURANCE_CONDITIONS, STATE_NAMES } from '../data/insurance/insuranceConfig';

// Map actual site slugs (e.g. "uti-treatment-online") to insurance condition slugs.
// Actual site URL pattern is /{state}/{condition-treatment-online}
// Keep this aligned with data/conditions/*.json files.
const SITE_TO_INSURANCE_CONDITION = {
  'uti-treatment-online': 'uti-treatment',
  'sinus-infection-treatment-online': 'sinus-infection',
  'strep-throat-treatment-online': 'strep-throat',
  'pink-eye-treatment-online': 'pink-eye',
  'ear-pain-treatment-online': 'ear-infection',
  'asthma-refills-online': 'asthma-refill',
  'hypertension-refills-online': 'hypertension-refill',
  'acid-reflux-refills-online': 'acid-reflux',
  'influenza-treatment-online': 'flu-treatment',
  'yeast-infection-treatment-online': 'yeast-infection',
};

// Reverse map: insurance condition slug → actual site slug
const INSURANCE_TO_SITE_CONDITION = {
  'uti-treatment': 'uti-treatment-online',
  'sinus-infection': 'sinus-infection-treatment-online',
  'strep-throat': 'sore-throat-treatment-online',
  'pink-eye': 'pink-eye-treatment-online',
  'ear-infection': 'ear-pain-treatment-online',
  'asthma-refill': 'asthma-refills-online',
  'hypertension-refill': 'hypertension-refills-online',
  'acid-reflux': 'acid-reflux-refills-online',
  'flu-treatment': 'influenza-treatment-online',
  'yeast-infection': 'yeast-infection-treatment-online',
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
  const insCondSlug = SITE_TO_INSURANCE_CONDITION[nationalConditionSlug];
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

// Returns the actual site condition slug from an insurance condition slug
// e.g. 'uti-treatment' -> 'uti-treatment-online'
export function getNationalConditionSlug(insuranceConditionSlug) {
  return INSURANCE_TO_SITE_CONDITION[insuranceConditionSlug] || null;
}

// Returns top N conditions we cover as insurance pages, for link modules
export function getTopInsuranceConditions(limit = 6) {
  return Object.values(INSURANCE_CONDITIONS).slice(0, limit).map((c) => ({
    slug: c.slug,
    name: c.name,
    nationalSlug: getNationalConditionSlug(c.slug),
  }));
}

// Returns the actual site slug for a common condition keyword (for hardcoded state-client links)
export function getSiteSlugForConditionKeyword(keyword) {
  const map = {
    'uti': 'uti-treatment-online',
    'sinus-infection': 'sinus-infection-treatment-online',
    'strep-throat': 'sore-throat-treatment-online',
    'flu': 'influenza-treatment-online',
    'pink-eye': 'pink-eye-treatment-online',
    'ear-infection': 'ear-pain-treatment-online',
  };
  return map[keyword] || null;
}
