// /compare/[competitor]/ — dynamic route for the head-to-head pages.
// Content lives in lib/compare-pages-config.js. Structure mirrors the
// 23-section gold standard in app/who-we-serve/[segment]/InternationalVisitorsPage.js
// (and the cost-pages dynamic route added in the prior PR).

import { contentDate } from '../../../lib/content-dates';
import { getPayerFamilyStateCount } from '../../../lib/insurance-data';
import {
  COMPARE_PAGES,
  COMPARE_PAGE_SLUGS,
  COMPARE_RELATED,
  LAST_VERIFIED,
  getCompareTableRows,
} from '../../../lib/compare-pages-config';
import { COST_PAGES } from '../../../lib/cost-pages-config';
import { AGGREGATE_RATING_VALUE, TOTAL_REVIEW_COUNT } from '../../../lib/review-schema';
import { buildCostCompareJsonLd } from '../../../lib/cost-compare-schema';
import { darkCSS } from '../../../lib/dark-css';
import { CitableSummaryBlock } from '../../components/CitableSummary';
import reviewsData from '../../../data/reviews.json';
import { summarizeCompare, summarizeUseCase, summarizeWhoWeServe, summarizeFaqDeepDive, citableSummaryToJsonLd } from '../../../lib/citable-summary';

// Visual system for the comparison pages: Fraunces headings, DM Sans body,
// navy/teal with brand orange for the primary action. Colors run through the
// --cv-* variables so the dark theme only has to redefine them.
const CMP_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap');
.cmpv{--cv-ink:#0f2a33;--cv-muted:#4f6670;--cv-navy:#063a4a;--cv-teal:#00707a;--cv-teal-soft:#e3f3f4;--cv-line:#dde7ea;--cv-card:#fff;--cv-page:#fff;--cv-tint:#f4f8f8;--cv-us:#f0fafa;--cv-orange:#ff5a36;--cv-on-orange:#1a0b06;--cv-gold:#e8a33d;
  font-family:'DM Sans',system-ui,sans-serif;color:var(--cv-ink);background:var(--cv-page);}
.cmpv h1,.cmpv h2,.cmpv h3{font-family:'Fraunces',Georgia,serif;color:var(--cv-navy);letter-spacing:-0.01em;}
.cmpv a{color:var(--cv-teal);}
.cmpv-wrap{max-width:1120px;margin:0 auto;padding:0 20px;}
.cmpv-narrow{max-width:820px;}
.cmpv-crumbs{font-size:.85rem;padding:14px 0 0;color:var(--cv-muted);}
.cmpv-crumbs .cmpv-wrap{display:flex;gap:8px;flex-wrap:wrap;}
.cmpv-crumbs a{color:var(--cv-muted);}

.cmpv-hero{padding:28px 0 44px;background:radial-gradient(1200px 400px at 85% -10%,rgba(0,112,122,.10),transparent 60%),var(--cv-page);}
.cmpv-eyebrow{display:inline-block;font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--cv-teal);background:var(--cv-teal-soft);padding:6px 12px;border-radius:999px;margin:0 0 16px;}
.cmpv-hero h1{font-size:clamp(2rem,4.4vw,3.1rem);line-height:1.08;font-weight:600;margin:0 0 14px;max-width:18ch;}
.cmpv-lede{font-size:1.15rem;line-height:1.55;color:var(--cv-muted);max-width:62ch;margin:0 0 28px;}

.cmpv-match{display:grid;grid-template-columns:1fr auto 1fr;gap:18px;align-items:stretch;margin:0 0 22px;}
.cmpv-side{background:var(--cv-card);border:1px solid var(--cv-line);border-radius:20px;padding:22px 22px 16px;box-shadow:0 1px 2px rgba(6,58,74,.04),0 12px 32px rgba(6,58,74,.06);}
.cmpv-side--us{border:2px solid var(--cv-teal);background:linear-gradient(180deg,var(--cv-us),var(--cv-card) 55%);position:relative;}
.cmpv-side-head{display:flex;align-items:center;gap:12px;margin-bottom:14px;}
.cmpv-side-head h2{font-size:1.35rem;margin:0;}
.cmpv-side-head p{margin:2px 0 0;font-size:.9rem;color:var(--cv-muted);}
.cmpv-avatar{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid #fff;box-shadow:0 0 0 2px var(--cv-teal);}
.cmpv-mono{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;font-family:'Fraunces',Georgia,serif;font-size:1.5rem;font-weight:600;color:var(--cv-muted);background:var(--cv-tint);border:1px solid var(--cv-line);}
.cmpv-price{font-family:'Fraunces',Georgia,serif;font-size:2.6rem;font-weight:600;color:var(--cv-navy);margin:0 0 12px;line-height:1;}
.cmpv-price span{font-family:'DM Sans',sans-serif;font-size:.95rem;font-weight:500;color:var(--cv-muted);}
.cmpv-price-detail{margin:-6px 0 12px;font-size:.88rem;color:var(--cv-muted);line-height:1.45;}
.cmpv-side dl{margin:0;}
.cmpv-side dl div{display:grid;grid-template-columns:108px 1fr;gap:10px;padding:9px 0;border-top:1px solid var(--cv-line);font-size:.93rem;}
.cmpv-side dt{color:var(--cv-muted);font-weight:500;}
.cmpv-side dd{margin:0;font-weight:600;}
.cmpv-vs{align-self:center;width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:var(--cv-navy);color:#fff;font-family:'Fraunces',Georgia,serif;font-style:italic;font-weight:600;}

.cmpv-answer{background:var(--cv-tint);border-left:4px solid var(--cv-teal);border-radius:0 14px 14px 0;padding:16px 20px;margin:0 0 22px;line-height:1.6;}
.cmpv-answer-lead{margin:0 0 4px;font-weight:700;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cv-teal);}
.cmpv-answer p:last-child{margin:0;}
.cmpv-ctas{display:flex;flex-wrap:wrap;gap:12px;margin:0 0 18px;}
.cmpv-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:999px;font-weight:700;text-decoration:none;font-size:1rem;transition:transform .15s,box-shadow .15s;}
.cmpv-btn--primary{background:var(--cv-orange);color:var(--cv-on-orange) !important;box-shadow:0 10px 24px rgba(255,90,54,.28);}
.cmpv-btn--primary:hover{transform:translateY(-1px);box-shadow:0 14px 30px rgba(255,90,54,.34);}
.cmpv-btn--ghost{border:1.5px solid var(--cv-navy);color:var(--cv-navy) !important;background:transparent;}
.cmpv-btn:focus-visible,.cmpv a:focus-visible,.cmpv summary:focus-visible{outline:3px solid var(--cv-teal);outline-offset:3px;}
.cmpv-byline{display:flex;align-items:center;gap:10px;font-size:.86rem;color:var(--cv-muted);margin:0;}
.cmpv-byline img{width:28px;height:28px;border-radius:50%;flex:none;object-fit:cover;}

.cmpv-jump{position:sticky;top:0;z-index:20;background:color-mix(in srgb,var(--cv-page) 92%,transparent);backdrop-filter:blur(8px);border-top:1px solid var(--cv-line);border-bottom:1px solid var(--cv-line);}
.cmpv-jump .cmpv-wrap{display:flex;gap:6px;overflow-x:auto;padding-top:8px;padding-bottom:8px;scrollbar-width:none;}
.cmpv-jump a{white-space:nowrap;font-size:.9rem;font-weight:600;color:var(--cv-muted);text-decoration:none;padding:7px 14px;border-radius:999px;}
.cmpv-jump a:hover{background:var(--cv-tint);color:var(--cv-navy);}

.cmpv-sec{padding:64px 0;scroll-margin-top:56px;}
.cmpv-sec--tint{background:var(--cv-tint);}
.cmpv-kicker{margin:0 0 8px;font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cv-teal);}
.cmpv-sec h2{font-size:clamp(1.6rem,3vw,2.2rem);line-height:1.15;font-weight:600;margin:0 0 10px;}
.cmpv-sub{color:var(--cv-muted);margin:0 0 26px;max-width:66ch;line-height:1.6;}
.cmpv-h-sm{font-size:1.15rem !important;margin:0 0 12px !important;}

.cmpv-table{border:1px solid var(--cv-line);border-radius:18px;overflow:hidden;background:var(--cv-card);}
.cmpv-row{display:grid;grid-template-columns:1.1fr 1.3fr 1.6fr;}
.cmpv-row > span{padding:14px 18px;border-top:1px solid var(--cv-line);font-size:.95rem;line-height:1.5;}
.cmpv-row--head > span{border-top:0;font-size:.78rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--cv-muted);background:var(--cv-tint);}
.cmpv-row--head .cmpv-col-us{color:var(--cv-teal);}
.cmpv-dim{font-weight:600;color:var(--cv-navy);}
.cmpv-col-us{background:var(--cv-us);font-weight:600;}
.cmpv-src{display:inline-block;margin-left:8px;font-size:.78rem;font-weight:600;padding:1px 8px;border:1px solid var(--cv-line);border-radius:999px;text-decoration:none;}

.cmpv-wins{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
.cmpv-win{background:var(--cv-card);border:1px solid var(--cv-line);border-radius:18px;padding:24px;}
.cmpv-win--us{border-color:var(--cv-teal);box-shadow:0 12px 30px rgba(0,112,122,.08);}
.cmpv-win h3{font-size:1.25rem;margin:0 0 14px;}
.cmpv-win ul{list-style:none;margin:0;padding:0;display:grid;gap:12px;}
.cmpv-win li{position:relative;padding-left:30px;line-height:1.55;}
.cmpv-win li::before{content:"";position:absolute;left:0;top:3px;width:20px;height:20px;border-radius:50%;background:var(--cv-tint) center/12px no-repeat;border:1px solid var(--cv-line);}
.cmpv-win--us li::before{background-color:var(--cv-teal);border-color:var(--cv-teal);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 6.2l2.2 2.2 4.8-4.8' fill='none' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");}
.cmpv-quick-h{font-size:1.15rem;margin:34px 0 12px;}
.cmpv-quick{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.cmpv-quick li{background:var(--cv-card);border:1px solid var(--cv-line);border-radius:14px;padding:14px 16px;display:grid;gap:4px;}
.cmpv-quick-q{font-weight:700;color:var(--cv-navy);}
.cmpv-quick-a{color:var(--cv-muted);font-size:.93rem;}
.cmpv-quick li.is-us{border-left:4px solid var(--cv-teal);}

.cmpv-grid4{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;}
.cmpv-card{background:var(--cv-card);border:1px solid var(--cv-line);border-radius:18px;padding:22px;}
.cmpv-card h3{font-size:1.2rem;margin:10px 0 8px;}
.cmpv-card p{margin:0 0 10px;line-height:1.6;font-size:.96rem;}
.cmpv-badge{display:inline-grid;place-items:center;min-width:40px;height:40px;padding:0 8px;border-radius:12px;background:var(--cv-teal-soft);color:var(--cv-teal);font-weight:700;font-size:.9rem;}
.cmpv-note{font-size:.86rem !important;color:var(--cv-muted);}
.cmpv-pricebar{margin-top:22px;background:var(--cv-card);border:1px solid var(--cv-line);border-radius:18px;padding:20px 22px;}
.cmpv-pricebar-row{display:grid;grid-template-columns:130px 1fr 90px;gap:14px;align-items:center;margin-bottom:12px;font-weight:600;}
.cmpv-pricebar-row strong{text-align:right;color:var(--cv-navy);}
.cmpv-track{height:12px;border-radius:999px;background:var(--cv-tint);overflow:hidden;}
.cmpv-fill{height:100%;border-radius:999px;background:#9db3ba;}
.cmpv-fill--us{background:var(--cv-teal);}

.cmpv-sec--dark{background:linear-gradient(160deg,#032733,#063a4a 60%,#0b5059);color:#e6f2f4;}
.cmpv-sec--dark h2,.cmpv-sec--dark h3{color:#fff;}
.cmpv-sec--dark a{color:#ffd28a;}
.cmpv-sec--dark .cmpv-kicker{color:#7fd6dc;}
.cmpv-doc{display:grid;grid-template-columns:240px 1fr;gap:40px;align-items:center;}
.cmpv-doc-photo{width:240px;height:300px;object-fit:cover;border-radius:22px;box-shadow:0 22px 50px rgba(0,0,0,.35);}
.cmpv-doc-copy p{line-height:1.65;color:#cfe3e7;}
.cmpv-creds{list-style:none;padding:0;margin:16px 0;display:grid;grid-template-columns:1fr 1fr;gap:8px 20px;}
.cmpv-creds li{padding-left:22px;position:relative;color:#e6f2f4;font-weight:500;}
.cmpv-creds li::before{content:"";position:absolute;left:0;top:7px;width:10px;height:10px;border-radius:50%;background:var(--cv-gold);}
.cmpv-rating{font-size:.95rem;}
.cmpv-rating span{color:var(--cv-gold);letter-spacing:2px;margin-right:6px;}
.cmpv-quotes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:40px;}
.cmpv-quote{margin:0;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:20px;}
.cmpv-stars{color:var(--cv-gold);letter-spacing:2px;}
.cmpv-quote blockquote{margin:10px 0 12px;line-height:1.6;color:#eef6f7;font-size:.97rem;}
.cmpv-quote figcaption{font-size:.84rem;color:#9cc3c9;}

.cmpv-steps{list-style:none;margin:0 0 36px;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:18px;counter-reset:s;}
.cmpv-steps li{background:var(--cv-card);border:1px solid var(--cv-line);border-radius:18px;padding:22px;}
.cmpv-steps li > span{display:inline-grid;place-items:center;width:36px;height:36px;border-radius:50%;background:var(--cv-navy);color:#fff;font-weight:700;}
.cmpv-steps h3{font-size:1.15rem;margin:12px 0 6px;}
.cmpv-steps p{margin:0;color:var(--cv-muted);line-height:1.55;font-size:.95rem;}
.cmpv-chips-block h3{font-size:1.05rem;margin:22px 0 10px;}
.cmpv-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;}
.cmpv-chips a{display:inline-flex;align-items:center;min-height:38px;padding:0 14px;border:1px solid var(--cv-line);border-radius:999px;background:var(--cv-card);color:var(--cv-navy);font-weight:600;font-size:.92rem;text-decoration:none;}
.cmpv-chips a:hover{border-color:var(--cv-teal);color:var(--cv-teal);}
.cmpv-chips a.is-more{background:var(--cv-teal-soft);border-color:transparent;color:var(--cv-teal);}

.cmpv-faq details{background:var(--cv-card);border:1px solid var(--cv-line);border-radius:14px;margin-bottom:10px;}
.cmpv-faq summary{cursor:pointer;list-style:none;padding:16px 48px 16px 18px;font-weight:600;color:var(--cv-navy);position:relative;}
.cmpv-faq summary::-webkit-details-marker{display:none;}
.cmpv-faq summary::after{content:"+";position:absolute;right:18px;top:50%;transform:translateY(-50%);font-size:1.3rem;color:var(--cv-teal);}
.cmpv-faq details[open] summary::after{content:"\\2212";}
.cmpv-faq details > div{padding:0 18px 16px;line-height:1.6;color:var(--cv-ink);}
.cmpv-faq details > div p{margin:0;}

.cmpv-cta{padding:56px 0;background:var(--cv-navy);color:#fff;text-align:center;}
.cmpv-cta h2{color:#fff;font-size:clamp(1.7rem,3vw,2.3rem);margin:0 0 8px;}
.cmpv-cta p{color:#cfe3e7;margin:0 0 22px;}
.cmpv-cta .cmpv-ctas{justify-content:center;margin:0;}
.cmpv-cta .cmpv-btn--ghost{border-color:rgba(255,255,255,.6);color:#fff !important;}
.cmpv-sec + .cmpv-sec:not(.cmpv-sec--tint):not(.cmpv-sec--dark){padding-top:24px;}
.cmpv-fine{font-size:.9rem;color:var(--cv-muted);}
.cmpv-fine p{line-height:1.6;}
.cmpv-refs{padding-left:20px;margin:0 0 24px;}
.cmpv-refs li{margin-bottom:6px;}

@media (max-width:860px){
  .cmpv-match{grid-template-columns:1fr;}
  .cmpv-vs{justify-self:center;margin:-8px 0;}
  .cmpv-wins,.cmpv-quick,.cmpv-grid4,.cmpv-steps,.cmpv-quotes{grid-template-columns:1fr;}
  .cmpv-doc{grid-template-columns:1fr;gap:24px;}
  .cmpv-doc-photo{width:240px;height:300px;justify-self:center;}
  .cmpv-sec{padding:44px 0;}
}
@media (max-width:680px){
  .cmpv-row--head{display:none;}
  .cmpv-row{grid-template-columns:1fr 1fr;border-top:1px solid var(--cv-line);}
  .cmpv-row:first-of-type{border-top:0;}
  .cmpv-row > span{border-top:0;padding:10px 14px;}
  .cmpv-dim{grid-column:1 / -1;padding-bottom:2px !important;background:var(--cv-tint);}
  .cmpv-row > span[data-label]::before{content:attr(data-label);display:block;font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--cv-muted);margin-bottom:2px;}
  .cmpv-pricebar-row{grid-template-columns:96px 1fr 72px;gap:10px;font-size:.92rem;}
  .cmpv-side dl div{grid-template-columns:96px 1fr;}
  .cmpv-creds{grid-template-columns:1fr;}
}
${darkCSS(`
  DARK .cmpv{--cv-ink:#e2edf0;--cv-muted:#9fb6bf;--cv-navy:#cfe9f0;--cv-teal:#2bc4cf;--cv-teal-soft:#0f2f35;--cv-line:#2b4652;--cv-card:#122028;--cv-page:#0a171c;--cv-tint:#0f1f24;--cv-us:#0f2a30;}
  DARK .cmpv-vs{background:#2bc4cf;color:#04252b;}
  DARK .cmpv-steps li > span{background:#2bc4cf;color:#04252b;}
  DARK .cmpv-avatar{border-color:#122028;}
  DARK .cmpv-fill{background:#4d6670;}
  DARK .cmpv-cta{background:#06222b;}
  DARK .cmpv-btn--ghost{border-color:#9fb6bf;}
`)}
`;

const LAST_VERIFIED_LABEL = new Date(`${LAST_VERIFIED}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

export async function generateStaticParams() {
  return COMPARE_PAGE_SLUGS.map((slug) => ({ competitor: slug }));
}

export async function generateMetadata({ params }) {
  const { competitor } = await params;
  const cfg = COMPARE_PAGES[competitor];
  if (!cfg) return {};
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/compare/${competitor}/`;
  return {
    title: cfg.metaTitle,
    description: cfg.metaDescription,
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'article',
      siteName: 'TeleDirectMD',
      locale: 'en_US',
      title: cfg.metaTitle,
      description: cfg.metaDescription,
      url: pageUrl,
    },
    alternates: { canonical: pageUrl },
  };
}

export default async function ComparePage({ params }) {
  const { competitor } = await params;
  const cfg = COMPARE_PAGES[competitor];
  if (!cfg) return null;

  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/compare/${competitor}/`;
  const today = contentDate('comparePages');
  const pid = cfg.pid;
  const related = COMPARE_RELATED[competitor] || { compare: [], cost: [] };
  const tableRows = getCompareTableRows(competitor);
  // Bar widths scale to the higher of $79 and the competitor's first listed cash price.
  const compPriceNum = Number((String(cfg.competitor?.urgentCare || '').match(/\$(\d+(?:\.\d+)?)/) || [])[1]) || null;
  const barMax = compPriceNum ? Math.max(79, compPriceNum) : null;
  const barTdmd = barMax ? Math.round((79 / barMax) * 100) : 49;
  const barComp = barMax ? Math.round((compPriceNum / barMax) * 100) : 100;

  // ── JSON-LD: built via shared helper to keep E-E-A-T fields consistent
  // across cost + compare pages (author, publisher, address, lastReviewed,
  // reviewedBy). See lib/cost-compare-schema.js.
  const itemList = {
    '@type': 'ItemList',
    '@id': `${pageUrl}#comparison-table`,
    name: `TeleDirectMD vs. ${cfg.competitorName} — feature comparison`,
    itemListOrder: 'ItemListUnordered',
    numberOfItems: tableRows.length,
    itemListElement: tableRows.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.dim,
      description: `TeleDirectMD: ${r.tdmd}. ${cfg.competitorName}: ${r.comp}.`,
    })),
  };

  const jsonLd = buildCostCompareJsonLd({
    pageUrl,
    headline: cfg.h1,
    description: cfg.metaDescription,
    breadcrumb: [
      { name: 'Home',                  item: `${baseUrl}/` },
      { name: 'Platform Comparisons',  item: `${baseUrl}/compare/teledirectmd-vs-teladoc/` },
      { name: cfg.breadcrumb,          item: pageUrl },
    ],
    faqs: cfg.faqs,
    today,
    itemList,
    medicalCondition: cfg.medicalCondition,
    service: cfg.service,
    procedure: cfg.procedure,
  });

  const citableSummary_AI = summarizeCompare({ competitorName: cfg.competitorName || cfg.competitor?.name || competitor, competitorPriceRange: cfg.competitor?.priceRange, competitorCoverageStates: cfg.competitor?.coverageStates });
  const pageUrl_AI = `https://teledirectmd.com/compare/${competitor}/`;
  const citableJsonLd_AI = citableSummaryToJsonLd(citableSummary_AI, { pageUrl: pageUrl_AI });


  const featuredReviews = (reviewsData.featured || []).slice(0, 3);
  const compPriceRange = (String(cfg.competitor?.urgentCare || '').match(/\$\d+(?:\.\d+)?(?:\s*[–-]\s*\$\d+(?:\.\d+)?)?/) || [])[0] || null;
  const fmtDate = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
  const otherCompares = COMPARE_PAGE_SLUGS.filter((s) => s !== competitor);
  const details = [
    { key: 'pricing', icon: '$', title: cfg.pricingDive.title, paras: cfg.pricingDive.paragraphs,
      foot: 'Visit fees don&apos;t include medication at either service. Any prescription is filled and paid for at your pharmacy. See <a href="/cost/online-prescription-cost/">what a visit plus a generic prescription costs</a>.' },
    { key: 'providers', icon: 'MD', title: cfg.providerDive.title, paras: cfg.providerDive.paragraphs },
    { key: 'rx', icon: 'Rx', title: cfg.rxDive.title, paras: cfg.rxDive.paragraphs },
    { key: 'states', icon: '40+', title: `State coverage`, paras: [
      `TeleDirectMD is licensed in <strong>40+ states</strong>. ${cfg.competitorName}: ${cfg.competitor.states}.`,
      `<a href="/states-we-serve/">Check whether TeleDirectMD serves your state</a>. If it doesn&apos;t, ${cfg.competitorName} or another platform may be a better fit.`,
    ] },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{CMP_CSS}</style>
      <CitableSummaryBlock summary={citableSummary_AI} jsonLd={citableJsonLd_AI} idSuffix={`compare-${competitor}`} />

      <div className="cmpv">
        <nav className="cmpv-crumbs" aria-label="Breadcrumb">
          <div className="cmpv-wrap">
            <a href="/">Home</a><span aria-hidden="true">/</span>
            <a href="/compare/">Compare</a><span aria-hidden="true">/</span>
            <span aria-current="page">{cfg.breadcrumb}</span>
          </div>
        </nav>

        {/* Hero: head-to-head matchup */}
        <header className="cmpv-hero" id={`${pid}-hero`}>
          <div className="cmpv-wrap">
            <p className="cmpv-eyebrow">Head-to-head · Prices checked {LAST_VERIFIED_LABEL}</p>
            <h1 data-speakable="true">{cfg.h1}</h1>
            <p className="cmpv-lede" data-speakable="true">{cfg.heroSub}</p>

            <div className="cmpv-match" role="group" aria-label={`TeleDirectMD versus ${cfg.competitorName} at a glance`}>
              <article className="cmpv-side cmpv-side--us">
                <div className="cmpv-side-head">
                  <img src="/images/bhavsar-avatar.webp" alt="" width="56" height="56" className="cmpv-avatar" />
                  <div>
                    <h2>TeleDirectMD</h2>
                    <p>Dr. Parth Bhavsar, MD</p>
                  </div>
                </div>
                <p className="cmpv-price">$79<span> flat per visit</span></p>
                <dl>
                  <div><dt>Who you see</dt><dd>The same board-certified MD, every visit</dd></div>
                  <div><dt>Insurance</dt><dd>Aetna, BCBS, UnitedHealthcare in select states</dd></div>
                  <div><dt>Coverage</dt><dd>40+ states</dd></div>
                  <div><dt>Membership</dt><dd>None</dd></div>
                </dl>
              </article>
              <div className="cmpv-vs" aria-hidden="true">vs</div>
              <article className="cmpv-side">
                <div className="cmpv-side-head">
                  <span className="cmpv-mono" aria-hidden="true">{cfg.competitorName.slice(0, 1)}</span>
                  <div>
                    <h2>{cfg.competitorName}</h2>
                    <p><a href={cfg.competitorUrl} target="_blank" rel="nofollow noopener">{cfg.competitorUrl.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]}</a></p>
                  </div>
                </div>
                {compPriceRange ? (
                  <p className="cmpv-price">{compPriceRange}<span> per visit</span></p>
                ) : null}
                {String(cfg.competitor.urgentCare).length > (compPriceRange || '').length + 8 ? (
                  <p className="cmpv-price-detail">{cfg.competitor.urgentCare}</p>
                ) : null}
                <dl>
                  <div><dt>Who you see</dt><dd>{cfg.competitor.provider}</dd></div>
                  <div><dt>Insurance</dt><dd>{cfg.competitor.insurance}</dd></div>
                  <div><dt>Coverage</dt><dd>{cfg.competitor.states}</dd></div>
                  <div><dt>Membership</dt><dd>{cfg.competitor.membership}</dd></div>
                </dl>
              </article>
            </div>

            <div className="cmpv-answer tdmd-answer-block" data-speakable="true">
              <p className="cmpv-answer-lead">The short answer</p>
              <p dangerouslySetInnerHTML={{ __html: cfg.answerBody }} />
            </div>

            <div className="cmpv-ctas">
              <a href="/book-online/" className="cmpv-btn cmpv-btn--primary">Start a $79 visit with an MD</a>
              <a href="/insurance/" className="cmpv-btn cmpv-btn--ghost">Use insurance</a>
            </div>
            <p className="cmpv-byline">
              <img src="/images/bhavsar-avatar.webp" alt="" width="28" height="28" />
              <span>Reviewed by <a href="/about/">Parth Bhavsar, MD</a>, Board-Certified Family Medicine. Updated {fmtDate(today)}; {cfg.competitorName} facts verified against official materials and cited sources on {fmtDate(LAST_VERIFIED)}.</span>
            </p>
          </div>
        </header>

        <nav className="cmpv-jump" aria-label="On this page">
          <div className="cmpv-wrap">
            <a href={`#${pid}-table`}>Side by side</a>
            <a href={`#${pid}-choose`}>Which to choose</a>
            <a href={`#${pid}-details`}>Details</a>
            <a href={`#${pid}-doctor`}>The doctor</a>
            <a href={`#${pid}-faq`}>FAQ</a>
          </div>
        </nav>

        {/* Side-by-side table */}
        <section className="cmpv-sec" id={`${pid}-table`}>
          <div className="cmpv-wrap" data-speakable="true">
            <p className="cmpv-kicker">Side by side</p>
            <h2>TeleDirectMD vs. {cfg.competitorName}, point by point</h2>
            <p className="cmpv-sub">Ten things that matter when you pick a telehealth service. Every {cfg.competitorName} claim links to its source.</p>
            <div className="cmpv-table" role="table" aria-label={`TeleDirectMD vs. ${cfg.competitorName} comparison`}>
              <div className="cmpv-row cmpv-row--head" role="row">
                <span role="columnheader">What you&apos;re comparing</span>
                <span role="columnheader" className="cmpv-col-us">TeleDirectMD</span>
                <span role="columnheader">{cfg.competitorName}</span>
              </div>
              {tableRows.map((r, i) => (
                <div className="cmpv-row" role="row" key={i}>
                  <span role="rowheader" className="cmpv-dim">{r.dim}</span>
                  <span role="cell" className="cmpv-col-us" data-label="TeleDirectMD">{r.tdmd}</span>
                  <span role="cell" data-label={cfg.competitorName}>
                    {r.comp}
                    {r.compSrc ? <a className="cmpv-src" href={r.compSrc} target="_blank" rel="nofollow noopener">source</a> : null}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Which to choose: merges the wins, who-for and decision guide */}
        <section className="cmpv-sec cmpv-sec--tint" id={`${pid}-choose`}>
          <div className="cmpv-wrap">
            <p className="cmpv-kicker">Which to choose</p>
            <h2>An honest call: each one wins somewhere</h2>
            <div className="cmpv-wins">
              <div className="cmpv-win cmpv-win--us">
                <h3>Choose TeleDirectMD if</h3>
                <ul>
                  {cfg.tdmdWins.map((w, i) => (
                    <li key={i}><strong>{w.headline}.</strong> <span dangerouslySetInnerHTML={{ __html: w.detail }} /></li>
                  ))}
                </ul>
              </div>
              <div className="cmpv-win">
                <h3>Choose {cfg.competitorName} if</h3>
                <ul>
                  {cfg.competitorWins.map((w, i) => (
                    <li key={i}><strong>{w.headline}.</strong> <span dangerouslySetInnerHTML={{ __html: w.detail }} /></li>
                  ))}
                </ul>
              </div>
            </div>
            <h3 className="cmpv-quick-h">Quick picks</h3>
            <ol className="cmpv-quick">
              {cfg.decisionGuide.steps.map((st, i) => (
                <li key={i} className={st.good ? 'is-us' : ''}>
                  <span className="cmpv-quick-q">{st.head}</span>
                  <span className="cmpv-quick-a">{st.body}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Details grid */}
        <section className="cmpv-sec" id={`${pid}-details`}>
          <div className="cmpv-wrap">
            <p className="cmpv-kicker">The details</p>
            <h2>Price, providers, prescriptions and coverage</h2>
            <div className="cmpv-grid4">
              {details.map((d) => (
                <article className="cmpv-card" key={d.key} id={`${pid}-${d.key}`}>
                  <span className="cmpv-badge" aria-hidden="true">{d.icon}</span>
                  <h3>{d.title}</h3>
                  {d.paras.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
                  {d.foot ? <p className="cmpv-note" dangerouslySetInnerHTML={{ __html: d.foot }} /> : null}
                </article>
              ))}
            </div>
            <div className="cmpv-pricebar" role="group" aria-label="Cash-pay visit price">
              <div className="cmpv-pricebar-row">
                <span>TeleDirectMD</span>
                <div className="cmpv-track"><div className="cmpv-fill cmpv-fill--us" style={{ width: `${barTdmd}%` }} /></div>
                <strong>$79</strong>
              </div>
              <div className="cmpv-pricebar-row">
                <span>{cfg.competitorName}</span>
                <div className="cmpv-track"><div className="cmpv-fill" style={{ width: `${barComp}%` }} /></div>
                <strong>{compPriceNum ? `from $${compPriceNum}` : 'varies'}</strong>
              </div>
              <p className="cmpv-note">Published cash-pay visit price. {cfg.competitorName} per <a href={cfg.competitor.urgentCareSrc} target="_blank" rel="nofollow noopener">source</a>; insured patients may pay a lower copay at either service.</p>
            </div>
          </div>
        </section>

        {/* The doctor + reviews */}
        <section className="cmpv-sec cmpv-sec--dark" id={`${pid}-doctor`}>
          <div className="cmpv-wrap cmpv-doc">
            <img src="/images/bhavsar-portrait.webp" alt="Parth Bhavsar, MD, board-certified family medicine physician" width="240" height="300" className="cmpv-doc-photo" loading="lazy" />
            <div className="cmpv-doc-copy">
              <p className="cmpv-kicker">The doctor you see</p>
              <h2>One physician, not a rotating panel</h2>
              <p>Every TeleDirectMD visit is with <a href="/about/">Dr. Parth Bhavsar, MD</a>, a board-certified family medicine physician licensed in 40+ states. Not a physician assistant, not a chatbot.</p>
              <ul className="cmpv-creds">
                <li>Board-certified, Family Medicine</li>
                <li>NPI 1104323203, verifiable in NPPES</li>
                <li>LegitScript-certified practice</li>
                <li>HIPAA-compliant video and records</li>
              </ul>
              <p className="cmpv-rating"><span aria-hidden="true">★★★★★</span> {AGGREGATE_RATING_VALUE} from {TOTAL_REVIEW_COUNT} verified reviews on{' '}
                <a href="https://share.google/I01V6IEqvDtZb9CM2" rel="nofollow noopener" target="_blank">Google</a>,{' '}
                <a href="https://www.zocdoc.com/doctor/parth-bhavsar-md-652258" rel="nofollow noopener" target="_blank">Zocdoc</a>,{' '}
                <a href="https://doctor.webmd.com/doctor/parth-bhavsar-e293ceba-555d-466e-ab94-d82e02d268db-overview" rel="nofollow noopener" target="_blank">WebMD</a> and{' '}
                <a href="https://www.healthgrades.com/physician/dr-parth-bhavsar-xynq9m7" rel="nofollow noopener" target="_blank">Healthgrades</a>
              </p>
            </div>
          </div>
          <div className="cmpv-wrap cmpv-quotes">
            {featuredReviews.map((r, i) => (
              <figure key={i} className="cmpv-quote">
                <span className="cmpv-stars" aria-label={`${r.rating} out of 5 stars`}>{'★'.repeat(r.rating || 5)}</span>
                <blockquote>{r.text}</blockquote>
                <figcaption>{r.name} · {r.source}{r.date ? ` · ${r.date}` : ''}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="cmpv-sec" id={`${pid}-how`}>
          <div className="cmpv-wrap">
            <p className="cmpv-kicker">How it works</p>
            <h2>A $79 visit in three steps</h2>
            <ol className="cmpv-steps">
              <li><span>1</span><h3>Book online</h3><p>Pick a same-day or next-available time. Pay $79, use HSA/FSA, or apply in-network insurance where accepted.</p></li>
              <li><span>2</span><h3>Video visit</h3><p>Join a secure video visit with Dr. Bhavsar from your phone or computer. No app download.</p></li>
              <li><span>3</span><h3>Treatment plan</h3><p>Get a written summary and, when clinically appropriate, an e-prescription sent to your pharmacy.</p></li>
            </ol>
            <div className="cmpv-chips-block">
              <h3>Commonly treated at the $79 visit</h3>
              <div className="cmpv-chips">
                <a href="/uti-treatment-online/">UTI (adult women)</a>
                <a href="/sinus-infection-treatment-online/">Sinus infection</a>
                <a href="/sore-throat-treatment-online/">Sore throat</a>
                <a href="/pink-eye-treatment-online/">Pink eye</a>
                <a href="/hypertension-refills-online/">Blood pressure refills</a>
                <a href="/asthma-refills-online/">Asthma refills</a>
                <a href="/what-we-treat/" className="is-more">All 60+ conditions</a>
              </div>
              <h3>Insurance accepted in select states</h3>
              <div className="cmpv-chips">
                <a href="/insurance/aetna/">Aetna · {getPayerFamilyStateCount('aetna')} states</a>
                <a href="/insurance/blue-cross-blue-shield/">Blue Cross Blue Shield · {getPayerFamilyStateCount('bcbs')} states</a>
                <a href="/insurance/united-healthcare/">UnitedHealthcare · {getPayerFamilyStateCount('uhc')} states</a>
                <a href="/insurance/" className="is-more">All insurance options</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="cmpv-sec cmpv-sec--tint tdmd-faq" id={`${pid}-faq`}>
          <div className="cmpv-wrap cmpv-narrow">
            <p className="cmpv-kicker">FAQ</p>
            <h2>TeleDirectMD vs. {cfg.competitorName}: common questions</h2>
            <div className="cmpv-faq" role="list">
              {cfg.faqs.map((f, i) => (
                <details key={i} role="listitem">
                  <summary data-speakable="true">{f.question}</summary>
                  <div><p>{f.answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="cmpv-cta" id={`${pid}-final-cta`}>
          <div className="cmpv-wrap">
            <h2>$79, a real MD, same-day.</h2>
            <p>Evenings and weekends in 40+ states. Book in about two minutes.</p>
            <div className="cmpv-ctas">
              <a href="/book-online/" className="cmpv-btn cmpv-btn--primary">Start a $79 visit with an MD</a>
              <a href="/insurance/" className="cmpv-btn cmpv-btn--ghost">Use insurance</a>
            </div>
          </div>
        </section>

        {/* More comparisons */}
        <section className="cmpv-sec" id={`${pid}-cross-links`}>
          <div className="cmpv-wrap">
            <h2 className="cmpv-h-sm">More comparisons</h2>
            <div className="cmpv-chips">
              {otherCompares.map((s) => (
                <a key={s} href={`/compare/${s}/`}>vs. {COMPARE_PAGES[s].competitorName}</a>
              ))}
              <a href="/compare/" className="is-more">All comparisons</a>
            </div>
            <h2 className="cmpv-h-sm">Related cost guides</h2>
            <div className="cmpv-chips">
              <a href="/cost/online-doctor-visit-cost/">Online doctor visit cost</a>
              {related.cost.filter((s) => s !== 'online-doctor-visit-cost').map((s) => {
                const c = COST_PAGES[s];
                if (!c) return null;
                return <a key={s} href={`/cost/${s}/`}>{c.breadcrumb}</a>;
              })}
            </div>
          </div>
        </section>

        {/* References + disclaimer */}
        <section className="cmpv-sec cmpv-fine" id={`${pid}-references`}>
          <div className="cmpv-wrap cmpv-narrow">
            <h2 className="cmpv-h-sm">References</h2>
            <ol className="cmpv-refs">
              {cfg.references.map((r, i) => (
                <li key={i}><a href={r.url} target="_blank" rel="nofollow noopener">{r.label}</a></li>
              ))}
            </ol>
            <h2 className="cmpv-h-sm" id={`${pid}-disclaimer`}>Disclaimer and verification</h2>
            <p>
              This page is an informational comparison between TeleDirectMD and {cfg.competitorName}. It is not affiliated with, endorsed by, or sponsored by {cfg.competitorName}. {cfg.competitorName} pricing, feature, and coverage claims come from {cfg.competitorName}&apos;s public materials and third-party reviews listed above. Prices and features change; check current rates on the {cfg.competitorName} website (<a href={cfg.competitorUrl} target="_blank" rel="nofollow noopener">{cfg.competitorUrl}</a>) before booking.
            </p>
            <p>
              Updated {fmtDate(today)}. {cfg.competitorName} facts verified against official materials and cited sources on {fmtDate(LAST_VERIFIED)}. TeleDirectMD provides telehealth for non-emergency conditions in adults 18+ physically located in one of our 40+ licensed states at the time of the visit. We do not prescribe controlled substances. In an emergency, call 911.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
