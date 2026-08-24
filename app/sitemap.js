import fs from 'fs';
import path from 'path';
import { getStates, getConditionSlugs } from '../lib/get-data';
import { INSURERS, INSURANCE_CONDITIONS, getInsurerStateSlugs } from '../data/insurance/insuranceConfig';
import { AETNA_CA_CONDITION_DETAILS } from '../data/insurance/aetna-ca-conditions';
import { isRetiredInsuranceUrl } from '../data/insurance/retired-urls';
import { COST_PAGE_SLUGS } from '../lib/cost-pages-config';
import { COMPARE_PAGE_SLUGS } from '../lib/compare-pages-config';
// SYMPTOM_PAGE_SLUGS import removed 2026-07-18 — standalone /symptoms/* URLs retired.
import { USE_CASE_PAGE_SLUGS } from '../lib/use-case-pages-config';

const SITE = 'https://teledirectmd.com';

// Static top-level routes
const STATIC_ROUTES = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: '/what-we-treat', priority: 0.9, changefreq: 'weekly' },
  { path: '/who-we-serve', priority: 0.8, changefreq: 'monthly' },
  { path: '/states-we-serve', priority: 0.9, changefreq: 'weekly' },
  { path: '/insurance', priority: 0.95, changefreq: 'weekly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  { path: '/media-mentions', priority: 0.6, changefreq: 'monthly' },
  { path: '/about', priority: 0.6, changefreq: 'monthly' },
  { path: '/reviews', priority: 0.7, changefreq: 'weekly' },
  // 2026-05-23: Employer + Broker pages
  { path: '/employers', priority: 0.9, changefreq: 'weekly' },
  { path: '/employers/brokers', priority: 0.8, changefreq: 'weekly' },
  // 2026-05-23: Gated PDF lead magnet landing page
  { path: '/employers/brief', priority: 0.8, changefreq: 'monthly' },
  // 2026-05-23: Industry-specific employer pages
  { path: '/employers/trucking', priority: 0.85, changefreq: 'monthly' },
  { path: '/employers/restaurants', priority: 0.85, changefreq: 'monthly' },
  { path: '/employers/home-care', priority: 0.85, changefreq: 'monthly' },
  { path: '/employers/construction', priority: 0.85, changefreq: 'monthly' },
  { path: '/employers/cleaning', priority: 0.85, changefreq: 'monthly' },
  // 2026-05-23: 5 hub pages added to repair orphan-parent breadcrumb violations
  // (each was previously HTTP 404 while child pages declared them as parents
  // in BreadcrumbList JSON-LD). See /home/user/workspace/insurance_cleanup for
  // related Q1 2026 deindex audit context.
  // 2026-07-18: /symptoms hub removed — entire cluster retired, 301s in vercel.json
  { path: '/compare', priority: 0.85, changefreq: 'weekly' },
  { path: '/cost', priority: 0.85, changefreq: 'weekly' },
  { path: '/faq/deep-dive', priority: 0.75, changefreq: 'monthly' },
  { path: '/news', priority: 0.7, changefreq: 'weekly' },
  // Aetna California rollout — May 2026
  { path: '/california-aetna', priority: 0.9, changefreq: 'weekly' },
  { path: '/california/telehealth-urgent-care-aetna', priority: 0.85, changefreq: 'weekly' },
  { path: '/news/aetna-california-may-2026', priority: 0.7, changefreq: 'monthly' },
  // Florida Blue dedicated hub — June 2026 (single-state BCBS licensee)
  { path: '/insurance/florida-blue', priority: 0.95, changefreq: 'weekly' },
  // Alaska rural telemedicine package — August 2026
  // (Alaska wildfire health guide auto-enumerated from public/health-guides/)
  { path: '/partners/tribal-health-alaska', priority: 0.7, changefreq: 'monthly' },
  { path: '/clinical-evidence', priority: 0.75, changefreq: 'monthly' },
  { path: '/clinical-evidence/rural-telemedicine-alaska', priority: 0.8, changefreq: 'monthly' },
];

// Who We Serve segments (10 pages)
const WWS_SEGMENTS = [
  'uninsured-affordable-care', 'truck-drivers', 'travel-nurses', 'small-business-owners',
  'remote-workers', 'military-families', 'international-visitors', 'early-retirees',
  'college-students', 'hdhp-hsa-holders',
];

// Insurer state slugs (full state names used by hub routes)
const INSURER_STATES = {
  aetna: ['arizona','california','colorado','florida','georgia','illinois','michigan','minnesota','ohio','pennsylvania','tennessee'],
  'blue-cross-blue-shield': ['florida','georgia','illinois','pennsylvania','texas'],
  'united-healthcare': ['colorado','georgia','illinois','minnesota','north-carolina','new-jersey','ohio','pennsylvania','tennessee','washington'],
  // Curative state pages are config-driven: enabling a state in CURATIVE_STATES
  // adds it here, to the route's generateStaticParams, and to the sitemap at once.
  curative: getInsurerStateSlugs('curative'),
};

function url(path, priority = 0.7, changefreq = 'monthly') {
  return {
    url: `${SITE}${path}`,
    lastModified: new Date(),
    changeFrequency: changefreq,
    priority,
  };
}

export default function sitemap() {
  const urls = [];

  // 1) Static top-level pages
  for (const r of STATIC_ROUTES) urls.push(url(r.path, r.priority, r.changefreq));

  // 2) Who We Serve segments
  for (const seg of WWS_SEGMENTS) urls.push(url(`/who-we-serve/${seg}`, 0.7, 'monthly'));

  // 3) State landing pages + condition×state pages (/{state}/, /{state}/{condition}/)
  // VT pilot cohort (2026-06-04): Vermont is a new-state launch limited to 10 hand-crafted
  // condition pages. Do NOT emit /vt/<every-condition>/ — only the 10 pilot URLs are surgical-
  // routed; the rest would fall through to the generic template and trigger Google's
  // scaled-content classifier (the April 2026 deindex pattern).
// NATIONAL-ONLY conditions (2026-06-14): travel-medicine and altitude-sickness are
  // single, unique national pages. Do NOT emit /{state}/<these>/ — they have no per-state
  // clinical differentiation, so 42 templated state variants each would re-create the exact
  // near-duplicate cluster that drove the May 2026 deindex. Only the national /{cond}/ URLs
  // are submitted; the state-prefixed variants still render (routing) but are kept out of the
  // sitemap until the Delaware-canary recovery validates the deep-content state template.
  const NATIONAL_ONLY_CONDITIONS = new Set([
    'travel-medicine-treatment-online',
    'altitude-sickness-treatment-online',
    'malaria-prophylaxis-treatment-online',
    'travelers-diarrhea-treatment-online',
  ]);
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
const VT_VA_PILOT_CONDITIONS = new Set([
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
const AK_PILOT_CONDITIONS = new Set([
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

// Keep this map identical across app/[slug]/StateLandingPage.js,
// app/[slug]/[conditionSlug]/page.js and app/sitemap.js. A mismatch between the
// route gate and the sitemap gate emits sitemap URLs with no page behind them.
const PILOT_COHORT_BY_STATE = {
  vt: VT_VA_PILOT_CONDITIONS,
  va: VT_VA_PILOT_CONDITIONS,
  ak: AK_PILOT_CONDITIONS,
};
  const states = getStates();
  const conditionSlugs = getConditionSlugs();
  for (const state of states) {
    urls.push(url(`/${state.slug}/`, 0.9, 'weekly'));
    // 2026-08-12: online-doctor-visits pages retired site-wide (301 to state hub,
    // see vercel.json). They were 90-94% Jaccard-similar across states — the same
    // duplication signature behind the May 2026 deindexing event — and every hub
    // outperformed its own online-doctor-visits page in Search Console.
    for (const cond of conditionSlugs) {
      // National-only conditions: never emit a state-prefixed variant
      if (NATIONAL_ONLY_CONDITIONS.has(cond)) continue;
      const pilotCohort = PILOT_COHORT_BY_STATE[state.slug];
      if (pilotCohort && !pilotCohort.has(cond)) continue;
      urls.push(url(`/${state.slug}/${cond}/`, 0.8, 'weekly'));
    }
  }

  // 4) National condition pages (/{condition}/)
  for (const cond of conditionSlugs) {
    urls.push(url(`/${cond}/`, 0.8, 'weekly'));
  }

  // 5) Insurance hubs (/insurance/{insurer}/)
  for (const insurerSlug of Object.keys(INSURERS)) {
    const p = `/insurance/${insurerSlug}/`;
    if (!isRetiredInsuranceUrl(p)) urls.push(url(p, 0.95, 'weekly'));
  }

  // 6) Insurer × state pages (/insurance/{insurer}/{state}/)
  for (const [insurerSlug, stateList] of Object.entries(INSURER_STATES)) {
    for (const stateSlug of stateList) {
      const p = `/insurance/${insurerSlug}/${stateSlug}/`;
      if (!isRetiredInsuranceUrl(p)) urls.push(url(p, 0.9, 'weekly'));
    }
  }

  // 7) Insurer × condition national pages (/insurance/{insurer}/{condition}/) — 30 pages
  const insuranceConditionSlugs = Object.keys(INSURANCE_CONDITIONS);
  // Insurers flagged conditionMatrix: false have hub + state pages only, so the
  // insurer x condition and insurer x state x condition URLs do not exist for them.
  const hasConditionMatrix = (slug) => INSURERS[slug]?.conditionMatrix !== false;
  for (const insurerSlug of Object.keys(INSURERS)) {
    if (!hasConditionMatrix(insurerSlug)) continue;
    for (const condSlug of insuranceConditionSlugs) {
      const p = `/insurance/${insurerSlug}/${condSlug}/`;
      if (!isRetiredInsuranceUrl(p)) urls.push(url(p, 0.85, 'weekly'));
    }
  }

  // 8) Insurer × state × condition triple-matrix pages — the biggest bucket
  for (const [insurerSlug, stateList] of Object.entries(INSURER_STATES)) {
    if (!hasConditionMatrix(insurerSlug)) continue;
    for (const stateSlug of stateList) {
      for (const condSlug of insuranceConditionSlugs) {
        const p = `/insurance/${insurerSlug}/${stateSlug}/${condSlug}/`;
        if (!isRetiredInsuranceUrl(p)) urls.push(url(p, 0.8, 'weekly'));
      }
    }
  }

  // 8b) Aetna × California expansion conditions — 50 new pages (May 17, 2026)
  //     Scoped to California only. Each entry in AETNA_CA_CONDITION_DETAILS has
  //     no overlap with INSURANCE_CONDITIONS so we never double-list.
  const baseCondSet = new Set(insuranceConditionSlugs);
  for (const condSlug of Object.keys(AETNA_CA_CONDITION_DETAILS)) {
    if (baseCondSet.has(condSlug)) continue; // safety guard against accidental overlap
    const p = `/insurance/aetna/california/${condSlug}/`;
    if (!isRetiredInsuranceUrl(p)) urls.push(url(p, 0.85, 'weekly'));
  }

  // 9) Cost-comparison pages (/cost/{slug}/)
  for (const slug of COST_PAGE_SLUGS) {
    urls.push(url(`/cost/${slug}/`, 0.8, 'monthly'));
  }

  // 10) Platform-comparison pages (/compare/{competitor}/)
  for (const slug of COMPARE_PAGE_SLUGS) {
    urls.push(url(`/compare/${slug}/`, 0.8, 'monthly'));
  }

  // 11) Symptom-led landing pages — REMOVED 2026-07-18
  // Entire /symptoms/* cluster retired. All slugs now 301 via vercel.json to
  // the winning sibling (mostly /cost/* and /health-guides/*).

  // 12) Use-case landing pages (/use-case/{slug}/)
  for (const slug of USE_CASE_PAGE_SLUGS) {
    urls.push(url(`/use-case/${slug}/`, 0.8, 'monthly'));
  }

  // 13) Health guides (/health-guides/{slug}/)
  //     Served as static HTML from /public/health-guides/{slug}/index.html.
  //     Auto-discovered at build time so new guides are listed without
  //     having to edit this file.
  try {
    const guidesRoot = path.join(process.cwd(), 'public', 'health-guides');
    const entries = fs.readdirSync(guidesRoot, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      const indexPath = path.join(guidesRoot, e.name, 'index.html');
      if (fs.existsSync(indexPath)) {
        urls.push(url(`/health-guides/${e.name}/`, 0.85, 'monthly'));
      }
    }
  } catch (err) {
    console.warn('[sitemap] could not enumerate /public/health-guides:', err.message);
  }

  return urls;
}
