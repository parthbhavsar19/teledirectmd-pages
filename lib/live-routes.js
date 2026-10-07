// Which state × condition pages exist, and which URLs vercel.json retires.
//
// Server-side only (it imports vercel.json). Used by the route gate
// (generateStaticParams), the sitemap and the "other states" link modules, so
// all three agree. Before this existed, the pilot map was copied into three
// files and the link modules linked every state to every condition, which
// produced thousands of links to pages that were never built.

import vercelConfig from '../vercel.json';
import { getInsurerStateSlugs } from '../data/insurance/insuranceConfig';
import insurerStatePages from '../data/insurance/insurer-state-pages.json';

// VT pilot cohort (2026-06-04): restrict /vt/ static generation to the 10 hand-crafted
// condition pages — the other ~50 slugs are not staged and must NOT fall through to the
// generic template (would emit scaled templated content, the April 2026 deindex trap).
// Vermont, Virginia, and Alaska share the same demand-gated pilot cohort. Only these
// condition slugs generate and enter the sitemap; every other state-condition route stays
// unpublished. Alaska is cash-pay only and receives state-specific compliance content from
// data/state-templates/ak.json.
// Alaska diverges from VT/VA. The AK cohort was originally copied verbatim from
// Vermont's slug list for consistency, not chosen from Alaska demand. Google Ads
// volume for Alaska (geo 21132) showed the mismatch: the five conditions removed
// below draw 10-30 searches/mo in-state, while eczema (390/mo), hair loss
// (590/mo, $15.64 CPC), psoriasis (260/mo, $21.19 CPC) and gout (170/mo) had no
// page at all. Uncovered measurable demand (3,070/mo) exceeded covered (1,730/mo).
//
// VT and VA keep the original set — their pages are indexed and must not change.
//
// NOT included: strep throat, which is the largest single term in Alaska at
// 1,000/mo. There is no strep condition in data/conditions/; it is folded into
// sore-throat-treatment-online, which itself draws only 30/mo. That naming
// mismatch is national, not Alaskan, and needs its own decision.
export const VT_VA_PILOT_CONDITIONS = new Set([
  'uti-treatment-online', 'yeast-infection-treatment-online', 'bv-treatment-online',
  'cold-sore-treatment-online', 'seasonal-allergies-treatment-online', 'hypertension-refills-online',
  'pink-eye-treatment-online', 'shingles-treatment-online', 'sinus-infection-treatment-online',
  'sore-throat-treatment-online', 'tick-bite-treatment-online', 'influenza-treatment-online',
  'common-cold-treatment-online', 'ear-pain-treatment-online', 'hyperlipidemia-refills-online',
  'hypothyroidism-refills-online', 'chlamydia-treatment-online', 'doxypep-sti-prevention-online',
  'acne-treatment-online', 'cellulitis-treatment-online',
]);

// Removed vs VT/VA: common-cold (10/mo), seasonal-allergies (20/mo),
// doxypep (30/mo), hyperlipidemia (30/mo, and 0 clicks in 90d across all 40
// states that publish it), influenza (50/mo, 2 clicks nationally).
// Added: eczema, hair-loss, psoriasis, gout.
export const AK_PILOT_CONDITIONS = new Set([
  'uti-treatment-online', 'yeast-infection-treatment-online', 'bv-treatment-online',
  'cold-sore-treatment-online', 'hypertension-refills-online',
  'pink-eye-treatment-online', 'shingles-treatment-online', 'sinus-infection-treatment-online',
  'sore-throat-treatment-online', 'tick-bite-treatment-online',
  'ear-pain-treatment-online',
  'hypothyroidism-refills-online', 'chlamydia-treatment-online',
  'acne-treatment-online', 'cellulitis-treatment-online',
  'eczema-treatment-online', 'hair-loss-treatment-online',
  'psoriasis-refills-online', 'gout-treatment-online',
]);

export const PILOT_COHORT_BY_STATE = {
  vt: VT_VA_PILOT_CONDITIONS,
  va: VT_VA_PILOT_CONDITIONS,
  ak: AK_PILOT_CONDITIONS,
};

// Does the route gate build /{stateSlug}/{conditionSlug}/ ?
export function stateHasCondition(stateSlug, conditionSlug) {
  const cohort = PILOT_COHORT_BY_STATE[stateSlug];
  return !cohort || cohort.has(conditionSlug);
}

// Routes ahead of `handle: filesystem` win over built pages. A 410 or a
// redirect there means a built page at that path is never served.
const RETIRING_ROUTES = (() => {
  const out = [];
  for (const r of vercelConfig.routes || []) {
    if (r.handle === 'filesystem') break;
    if (!r.src || r.continue) continue;
    const status = Number(r.status || 0);
    if (status === 410 || (status >= 300 && status < 400)) {
      out.push(new RegExp(`^${r.src.replace(/^\^/, '').replace(/\$$/, '')}$`));
    }
  }
  return out;
})();

// True when vercel.json retires or redirects this path before the build output.
export function isRetiredPath(path) {
  const p = path.endsWith('/') ? path : `${path}/`;
  const bare = p.slice(0, -1);
  return RETIRING_ROUTES.some((re) => re.test(p) || re.test(bare));
}

// The live URL for a state × condition page, or null if it is not served.
export function stateConditionHref(stateSlug, conditionSlug) {
  if (!stateHasCondition(stateSlug, conditionSlug)) return null;
  const href = `/${stateSlug}/${conditionSlug}/`;
  return isRetiredPath(href) ? null : href;
}

// Insurer x state pages that are built and listed in the sitemap (full state
// names, as the hub routes use). Internal links to /insurance/{insurer}/{state}/
// only point at these, so links and sitemap cannot disagree.
export const INSURER_STATES = {
  ...Object.fromEntries(
    Object.entries(insurerStatePages).filter(([k]) => !k.startsWith('_'))
  ),
  // Curative state pages are config-driven: enabling a state in CURATIVE_STATES
  // adds it here, to the route's generateStaticParams, and to the sitemap at once.
  curative: getInsurerStateSlugs('curative'),
};

