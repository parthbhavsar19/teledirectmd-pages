import { getStates, getConditionSlugs } from '../lib/get-data';
import { INSURERS, INSURANCE_CONDITIONS } from '../data/insurance/insuranceConfig';
import { COST_PAGE_SLUGS } from '../lib/cost-pages-config';
import { COMPARE_PAGE_SLUGS } from '../lib/compare-pages-config';
import { SYMPTOM_PAGE_SLUGS } from '../lib/symptom-pages-config';
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
];

// Who We Serve segments (8 pages)
const WWS_SEGMENTS = [
  'uninsured-affordable-care', 'truck-drivers', 'travel-nurses', 'small-business-owners',
  'remote-workers', 'military-families', 'international-visitors', 'early-retirees',
  'college-students',
];

// Insurer state slugs (full state names used by hub routes)
const INSURER_STATES = {
  aetna: ['arizona','colorado','florida','georgia','illinois','michigan','minnesota','ohio','pennsylvania','tennessee'],
  'blue-cross-blue-shield': ['florida','georgia','illinois','pennsylvania','texas'],
  'united-healthcare': ['colorado','georgia','illinois','minnesota','north-carolina','new-jersey','ohio','oklahoma','pennsylvania','tennessee','washington'],
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
  const states = getStates();
  const conditionSlugs = getConditionSlugs();
  for (const state of states) {
    urls.push(url(`/${state.slug}/`, 0.9, 'weekly'));
    urls.push(url(`/${state.slug}/online-doctor-visits/`, 0.7, 'monthly'));
    for (const cond of conditionSlugs) {
      urls.push(url(`/${state.slug}/${cond}/`, 0.8, 'weekly'));
    }
  }

  // 4) National condition pages (/{condition}/)
  for (const cond of conditionSlugs) {
    urls.push(url(`/${cond}/`, 0.8, 'weekly'));
  }

  // 5) Insurance hubs (/insurance/{insurer}/)
  for (const insurerSlug of Object.keys(INSURERS)) {
    urls.push(url(`/insurance/${insurerSlug}/`, 0.95, 'weekly'));
  }

  // 6) Insurer × state pages (/insurance/{insurer}/{state}/)
  for (const [insurerSlug, stateList] of Object.entries(INSURER_STATES)) {
    for (const stateSlug of stateList) {
      urls.push(url(`/insurance/${insurerSlug}/${stateSlug}/`, 0.9, 'weekly'));
    }
  }

  // 7) Insurer × condition national pages (/insurance/{insurer}/{condition}/) — 30 pages
  const insuranceConditionSlugs = Object.keys(INSURANCE_CONDITIONS);
  for (const insurerSlug of Object.keys(INSURERS)) {
    for (const condSlug of insuranceConditionSlugs) {
      urls.push(url(`/insurance/${insurerSlug}/${condSlug}/`, 0.85, 'weekly'));
    }
  }

  // 8) Insurer × state × condition triple-matrix pages — the biggest bucket
  for (const [insurerSlug, stateList] of Object.entries(INSURER_STATES)) {
    for (const stateSlug of stateList) {
      for (const condSlug of insuranceConditionSlugs) {
        urls.push(url(`/insurance/${insurerSlug}/${stateSlug}/${condSlug}/`, 0.8, 'weekly'));
      }
    }
  }

  // 9) Cost-comparison pages (/cost/{slug}/)
  for (const slug of COST_PAGE_SLUGS) {
    urls.push(url(`/cost/${slug}/`, 0.8, 'monthly'));
  }

  // 10) Platform-comparison pages (/compare/{competitor}/)
  for (const slug of COMPARE_PAGE_SLUGS) {
    urls.push(url(`/compare/${slug}/`, 0.8, 'monthly'));
  }

  // 11) Symptom-led landing pages (/symptoms/{slug}/)
  for (const slug of SYMPTOM_PAGE_SLUGS) {
    urls.push(url(`/symptoms/${slug}/`, 0.75, 'monthly'));
  }

  // 12) Use-case landing pages (/use-case/{slug}/)
  for (const slug of USE_CASE_PAGE_SLUGS) {
    urls.push(url(`/use-case/${slug}/`, 0.8, 'monthly'));
  }

  return urls;
}
