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

// ─── /cost/ + /compare/ rollout helpers (PR 3 of cost-and-compare sprint) ───
// These connect the existing condition / state / insurance / who-we-serve
// page templates to the new pages added in PR #4 (/cost/*) and PR #5 (/compare/*).

// Master cost page — every existing page-family gets a link here.
export const MASTER_COST_PAGE = '/cost/online-doctor-visit-cost/';

// Map national condition slug → the matching condition cost page when one exists.
// Used by the "What does this cost?" module on national + state×condition pages.
const CONDITION_TO_COST_PAGE = {
  'uti-treatment-online':            'uti-treatment-cost',
  'sinus-infection-treatment-online':'sinus-infection-treatment-cost',
  'sore-throat-treatment-online':    'sore-throat-treatment-cost',
  // Note: 'strep-throat' is mapped to 'sore-throat-treatment-online' on this site
  // (see SITE_TO_INSURANCE_CONDITION above), so the slug above already covers strep.
};

// Returns { url, title, isCondition } where isCondition=true means we have a
// condition-specific cost page; false means fall back to the master.
export function getCostPageLinkForCondition(conditionSlug) {
  const specific = CONDITION_TO_COST_PAGE[conditionSlug];
  if (specific) {
    return {
      url: `/cost/${specific}/`,
      title: 'See the full cost breakdown',
      isCondition: true,
    };
  }
  return {
    url: MASTER_COST_PAGE,
    title: 'See how telehealth pricing compares to in-person visits',
    isCondition: false,
  };
}

// The 6 compare pages, in display order. Used to render the
// "Compare to other telehealth providers" 6-card grid on insurance hubs
// and the smaller "Compare TeleDirectMD" linkrow on condition pages.
export const COMPARE_PAGES_INDEX = [
  { slug: 'teledirectmd-vs-teladoc',           competitor: 'Teladoc',          tagline: '$49 flat vs. Teladoc $89/visit; named MD vs. mixed MD/NP/PA panel.' },
  { slug: 'teledirectmd-vs-mdlive',            competitor: 'MDLIVE',           tagline: '$49 flat vs. MDLIVE $85; 41 states vs. 50 + Puerto Rico.' },
  { slug: 'teledirectmd-vs-amwell',            competitor: 'Amwell',           tagline: '$49 flat vs. Amwell $79; Amwell has 55+ insurance plans.' },
  { slug: 'teledirectmd-vs-doctor-on-demand',  competitor: 'Doctor on Demand', tagline: '$49 flat vs. $99/visit; Doctor on Demand accepts Medicare Part B.' },
  { slug: 'teledirectmd-vs-sesame',            competitor: 'Sesame Care',      tagline: 'Predictable $49 flat vs. provider-set $29–$37+; Sesame takes no insurance.' },
  { slug: 'teledirectmd-vs-k-health',          competitor: 'K Health',         tagline: 'Live MD video at $49 vs. K Health text-based AI triage from $35.' },
];

// Default high-volume comparison link surfaced on every condition page.
export const DEFAULT_COMPARE_PAGE = COMPARE_PAGES_INDEX[0]; // Teladoc

// Top-condition → most-relevant compare-page mapping (used by section E in PR 3 spec).
const CONDITION_TO_TOP_COMPARE = {
  'uti-treatment-online':            'teledirectmd-vs-teladoc',
  'sinus-infection-treatment-online':'teledirectmd-vs-mdlive',
  'sore-throat-treatment-online':    'teledirectmd-vs-mdlive',
  'pink-eye-treatment-online':       'teledirectmd-vs-amwell',
  'ear-pain-treatment-online':       'teledirectmd-vs-amwell',
  'asthma-refills-online':           'teledirectmd-vs-doctor-on-demand',
  'hypertension-refills-online':     'teledirectmd-vs-doctor-on-demand',
  'acid-reflux-refills-online':      'teledirectmd-vs-doctor-on-demand',
  'influenza-treatment-online':      'teledirectmd-vs-teladoc',
  'yeast-infection-treatment-online':'teledirectmd-vs-amwell',
};

export function getTopComparePageForCondition(conditionSlug) {
  const slug = CONDITION_TO_TOP_COMPARE[conditionSlug];
  if (!slug) return null;
  return COMPARE_PAGES_INDEX.find((c) => c.slug === slug) || null;
}
