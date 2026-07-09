// /cost/[slug]/ — dynamic route that renders any of the 5 cost pages.
// Content lives in lib/cost-pages-config.js. Structure mirrors the
// 23-section gold standard in app/who-we-serve/[segment]/InternationalVisitorsPage.js.

import { COST_PAGES, COST_PAGE_SLUGS, COST_RELATED_LINKS } from '../../../lib/cost-pages-config';
import UtiAntibioticsPage from '../../components/UtiAntibioticsPage';
import CostPageRedesign from '../../components/CostPageRedesign';
import { COMPARE_PAGES } from '../../../lib/compare-pages-config';
import { AGGREGATE_RATING_VALUE, TOTAL_REVIEW_COUNT } from '../../../lib/review-schema';
import { buildCostCompareJsonLd, buildCostComparisonAggregateOffer } from '../../../lib/cost-compare-schema';
import { SYMPTOM_PAGES } from '../../../lib/symptom-pages-config';
import { getPayerFamilyStateCount } from '../../../lib/insurance-data';

// Map cost-page slug → symptom-page slugs that surface this cost guide.
// The master /cost/online-doctor-visit-cost/ surfaces a sample of high-volume
// symptoms that lead patients to the master cost question.
const COST_PAGE_TO_SYMPTOMS = {
  'online-doctor-visit-cost':       ['burning-urination', 'sinus-pressure', 'sore-throat', 'persistent-cough', 'allergy-symptoms', 'acid-reflux'],
  'uti-treatment-cost':             ['burning-urination'],
  'uti-antibiotics-cost':           ['burning-urination'],
  'sinus-infection-treatment-cost': ['sinus-pressure', 'sinus-infection'],
  'sore-throat-treatment-cost':     ['sore-throat', 'strep-throat'],
  'online-prescription-cost':       ['acid-reflux', 'asthma', 'birth-control'],
};

const STATE_LIST = [
  ['AL','Alabama'],['AZ','Arizona'],['CA','California'],['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],['FL','Florida'],['GA','Georgia'],['HI','Hawaii'],['ID','Idaho'],['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],['KS','Kansas'],['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],['MO','Missouri'],['MT','Montana'],['NE','Nebraska'],['NV','Nevada'],['NH','New Hampshire'],['NJ','New Jersey'],['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],['OK','Oklahoma'],['PA','Pennsylvania'],['SC','South Carolina'],['SD','South Dakota'],['TN','Tennessee'],['TX','Texas'],['UT','Utah'],['WA','Washington'],['WV','West Virginia'],['WI','Wisconsin'],['WY','Wyoming'],
];

export async function generateStaticParams() {
  return COST_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cfg = COST_PAGES[slug];
  if (!cfg) return {};
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/cost/${slug}/`;
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

export default async function CostPage({ params }) {
  const { slug } = await params;
  const cfg = COST_PAGES[slug];
  if (!cfg) return null;

  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/cost/${slug}/`;
  const today = new Date().toISOString().split('T')[0];
  const pid = cfg.pid;
  const related = COST_RELATED_LINKS[slug] || { relatedCost: [], relatedCompare: [] };

  // ── JSON-LD: built via shared helper to keep E-E-A-T fields consistent
  // across cost + compare pages (author, publisher, address, lastReviewed,
  // reviewedBy). See lib/cost-compare-schema.js.
  const jsonLd = buildCostCompareJsonLd({
    pageUrl,
    headline: cfg.h1,
    description: cfg.metaDescription,
    breadcrumb: [
      { name: 'Home',              item: `${baseUrl}/` },
      { name: 'Cost Comparisons',  item: `${baseUrl}/cost/online-doctor-visit-cost/` },
      { name: cfg.breadcrumb,      item: pageUrl },
    ],
    faqs: cfg.faqs,
    today,
    medicalCondition: cfg.medicalCondition,
    service: cfg.service,
    procedure: cfg.procedure,
  });

  // ── AI-visibility FAQPage schema. Emits a standalone Question/Answer pair
  //    using the cfg.citableSummary field so AI extractors (ChatGPT, Perplexity,
  //    Gemini, Claude) see a structured, dated, source-named answer to the
  //    canonical cost query. Uses FAQPage (author-written) per Google policy —
  //    QAPage is for forum/UGC content, not editorial copy.
  const conditionLabel = cfg.breadcrumb.replace(/ Cost$/i, '').replace(/ Treatment Cost$/i, ' treatment').toLowerCase();
  const qaJsonLd = cfg.citableSummary ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'datePublished': today,
    'dateModified': today,
    'author': { '@type': 'Physician', 'name': 'Parth Bhavsar, MD', 'sameAs': 'https://npiregistry.cms.hhs.gov/provider-view/1104323203' },
    'mainEntity': [{
      '@type': 'Question',
      'name': `How much does ${conditionLabel} cost in 2026?`,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': cfg.citableSummary.replace(/<[^>]+>/g, ''), // strip inline HTML for the plain-text schema field
      },
    }],
  } : null;

  // ── AggregateOffer schema for cost-comparison pages. Opt-in per slug via
  //    cfg.costComparisonOffers. AI engines (Perplexity, ChatGPT) preferentially
  //    cite structured price comparison data when answering "how much does X cost"
  //    queries. The visible HTML on the page already contains this comparison;
  //    this just makes it machine-readable for AI extraction.
  const aggregateOfferJsonLd = buildCostComparisonAggregateOffer({
    pageUrl,
    headline: cfg.h1,
    costComparisonOffers: cfg.costComparisonOffers,
    conditionLabel,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {qaJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(qaJsonLd) }} />
      )}
      {aggregateOfferJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferJsonLd) }} />
      )}

      {/* 1) Breadcrumb */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/cost/online-doctor-visit-cost/">Cost</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">{cfg.breadcrumb}</span>
        </div>
      </nav>

      {/* UTI antibiotics: fully custom-designed page (schema above still applies).
           Renders its own body and skips the shared bland template below. */}
      {slug === 'uti-antibiotics-cost' && <UtiAntibioticsPage price="79" />}

      {/* Redesigned cost page (Fraunces + DM Sans design system). Default for
           every cost slug except the bespoke uti-antibiotics-cost page above. */}
      {slug !== 'uti-antibiotics-cost' && (
        <CostPageRedesign
          cfg={cfg}
          relatedCost={(related.relatedCost || []).map((s) => (COST_PAGES[s] ? { url: `/cost/${s}/`, title: COST_PAGES[s].h1 || COST_PAGES[s].breadcrumb } : null)).filter(Boolean)}
          comparePages={(related.relatedCompare || []).map((s) => (COMPARE_PAGES[s] ? { url: `/compare/${s}/`, title: (COMPARE_PAGES[s].h1 || COMPARE_PAGES[s].breadcrumb || s) } : null)).filter(Boolean)}
        />
      )}
      {false && (
      <>

      {/* 2) Answer Block */}
      {/* (standard template body begins) */}
      <div className="tdmd-answer-block" data-speakable="true" style={{
        background: '#EAF7F8', borderLeft: '4px solid #006B73',
        padding: '1rem 1.25rem', margin: '0', lineHeight: 1.6,
      }}>
        <div className="tdmd-container">
          <p style={{ margin: 0, fontWeight: 700, color: '#003E52', fontSize: '1.05rem' }}>{cfg.answerLead}</p>
          <p style={{ margin: '0.35rem 0 0', color: '#003E52', fontSize: '0.97rem' }} dangerouslySetInnerHTML={{ __html: cfg.answerBody }} />
        </div>
      </div>

      {/* 2b) Citable Summary — AI-extractor-targeted Q&A block.
           Rendered as a visible editorial Question/Answer pair for ChatGPT,
           Perplexity, Gemini, Claude. The text is self-contained, dated, and
           source-named so it can be quoted verbatim. Also mirrored by the
           FAQPage JSON-LD block above. Microdata itemProp attributes removed
           per 2026-05-19 cloaking-risk audit — JSON-LD is the canonical schema. */}
      {cfg.citableSummary && (
        <section
          className="tdmd-citable-summary"
          id={`${pid}-citable-summary`}
          data-speakable="true"
          style={{
            background: '#FFFFFF',
            border: '1px solid #C2E0E5',
            borderRadius: 8,
            padding: '1.25rem 1.5rem',
            margin: '1rem auto',
            maxWidth: 'var(--tdmd-container-max, 1200px)',
            lineHeight: 1.65,
          }}
        >
          <h2
            style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', fontWeight: 700, color: '#003E52' }}
          >
            {`How much does ${cfg.breadcrumb.replace(/ Cost$/i, '').replace(/ Treatment Cost$/i,' treatment').toLowerCase()} cost in 2026?`}
          </h2>
          <div
            style={{ margin: 0, color: '#0A2438', fontSize: '0.97rem' }}
            dangerouslySetInnerHTML={{ __html: cfg.citableSummary }}
          />
          <div style={{ marginTop: '0.75rem', paddingTop: '0.6rem', borderTop: '1px solid #E6F0F2', fontSize: '0.82rem', color: '#456676', fontStyle: 'italic' }}>
            {`Medically reviewed by Parth Bhavsar, MD — Updated ${new Date(today).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
          </div>
        </section>
      )}

      {/* 3) Hero (standard cost-page hero) */}
      <section className="tdmd-hero" id={`${pid}-hero`}>
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1 data-speakable="true">{cfg.h1}</h1>
              <p className="tdmd-hero-sub" data-speakable="true">{cfg.heroSub}</p>
              <p>{cfg.heroIntro}</p>

              <ul className="tdmd-hero-benefits">
                {cfg.heroBenefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>

              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
              </div>

              <p className="tdmd-reviewed">
                Cost comparison last updated {today}. Reviewed by{' '}
                <a className="tdmd-author-link" href="/about" aria-label="About Parth Bhavsar, MD">Parth Bhavsar, MD</a>{' '}— Board-Certified Family Medicine · NPI 1104323203 · LegitScript Certified · HIPAA-Compliant.
              </p>
            </div>

            <div className="tdmd-hero-side">
              <div className="tdmd-hero-card">
                <h2>{cfg.heroCardTitle}</h2>
                <ul>{cfg.heroCardItems.map((it, i) => <li key={i}>{it}</li>)}</ul>
                <p className="tdmd-hero-note">
                  {AGGREGATE_RATING_VALUE} ★ from {TOTAL_REVIEW_COUNT} verified patient reviews across Google, Zocdoc, WebMD, and Healthgrades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) The "Money" Comparison Table — page hero */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost-table`}>
        <div className="tdmd-container" data-speakable="true">
          <h2>{cfg.costTable.title}</h2>
          <p style={{ margin: '0.25rem 0 1rem', color: 'var(--tdmd-muted)' }}>{cfg.costTable.caption}</p>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr><th>Setting</th><th>Typical Cost (Cash-Pay)</th><th>What's Included</th></tr>
              </thead>
              <tbody>
                {cfg.costTable.rows.map((r, i) => (
                  <tr key={i}>
                    <td><strong>{r.setting}</strong></td>
                    <td>{r.cost}</td>
                    <td>
                      {r.includes}
                      {r.sourceUrl ? (
                        <> · <a href={r.sourceUrl} target="_blank" rel="nofollow noopener">{r.source}</a></>
                      ) : r.source ? <> · {r.source}</> : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="tdmd-comparison-note" style={{ marginTop: '1rem' }}>
            Prices reflect 2025–2026 cash-pay/uninsured figures. Actual costs vary by geography, facility, and services rendered. See the References section for full source citations.
          </p>
        </div>
      </section>

      {/* 5) Educational gap section */}
      <section className="tdmd-section" id={`${pid}-gap`}>
        <div className="tdmd-container">
          <h2>{cfg.educationalGap.title}</h2>
          {cfg.educationalGap.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>

      {/* 6) Trust / Why TeleDirectMD */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-trust`}>
        <div className="tdmd-container">
          <h2>Why TeleDirectMD: A Real Doctor, Not an Algorithm</h2>
          <p>
            When you visit TeleDirectMD, you see <a href="/about" style={{ fontWeight: 700, color: 'var(--tdmd-navy)' }}>Dr. Parth Bhavsar, MD</a> — a board-certified Family Medicine physician licensed in 43 states. Not a panel of rotating providers, not a physician assistant, not a chatbot.
          </p>
          <ul className="tdmd-hero-benefits">
            <li>Board-certified Family Medicine — University of Mississippi Medical Center</li>
            <li>NPI <strong>1104323203</strong> — verifiable in the NPPES NPI Registry</li>
            <li>{AGGREGATE_RATING_VALUE} ★ across {TOTAL_REVIEW_COUNT} verified reviews (Google, Zocdoc, WebMD, Healthgrades)</li>
            <li>LegitScript-certified telehealth practice</li>
            <li>HIPAA-compliant platform — encrypted video, secure records, no data resale</li>
            <li>In-network with Aetna, BCBS, and UnitedHealthcare in select states</li>
          </ul>
        </div>
      </section>

      {/* 7) AggregateRating callout — schema is emitted; this is a visible reinforcement */}
      <section className="tdmd-section" id={`${pid}-rating`}>
        <div className="tdmd-container">
          <h2>Patient Reviews — {AGGREGATE_RATING_VALUE} / 5 Across {TOTAL_REVIEW_COUNT} Verified Reviews</h2>
          <p>Verified patient ratings of Dr. Parth Bhavsar, MD aggregated from independent third-party review platforms:</p>
          <ul>
            <li><a href="https://share.google/I01V6IEqvDtZb9CM2" rel="nofollow noopener" target="_blank">Google — 5.0</a></li>
            <li><a href="https://www.zocdoc.com/doctor/parth-bhavsar-md-652258" rel="nofollow noopener" target="_blank">Zocdoc — 5.0</a></li>
            <li><a href="https://doctor.webmd.com/doctor/parth-bhavsar-e293ceba-555d-466e-ab94-d82e02d268db-overview" rel="nofollow noopener" target="_blank">WebMD — 5.0</a></li>
            <li><a href="https://www.healthgrades.com/physician/dr-parth-bhavsar-xynq9m7" rel="nofollow noopener" target="_blank">Healthgrades — 5.0</a></li>
          </ul>
        </div>
      </section>

      {/* 8) States grid — 43 states */}
      <section className="tdmd-section" id={`${pid}-states`}>
        <div className="tdmd-container">
          <h2>Available in 43 States</h2>
          <p>{cfg.stateDeepLinkConditionSlug
            ? `The flat $79 ${conditionLabel} visit is available in every state where Dr. Bhavsar is licensed. Get state-specific pricing and book directly:`
            : 'The flat $79 rate applies in every state where Dr. Bhavsar is licensed. Select your state:'}</p>
          <div className="tdmd-other-states-grid">
            {STATE_LIST.map(([abbr, name]) => {
              const stateAbbr = abbr.toLowerCase();
              const stateHubSlug = name.toLowerCase().replace(/\s+/g, '-');
              const href = cfg.stateDeepLinkConditionSlug
                ? `/${stateAbbr}/${cfg.stateDeepLinkConditionSlug}/`
                : `/${stateHubSlug}/`;
              return (
                <a key={abbr} href={href} className="tdmd-other-state-link">{name}</a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9) Conditions we treat — related links */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-conditions`}>
        <div className="tdmd-container">
          <h2>Conditions Commonly Treated at the $79 Visit</h2>
          <p>The same flat $79 visit covers any of these adult conditions:</p>
          <div className="tdmd-related-grid">
            <a href="/uti-treatment-online/" className="tdmd-related-card"><span className="tdmd-related-title">UTI Treatment</span><span className="tdmd-related-desc">$79 visit + $6–$14 antibiotic</span></a>
            <a href="/sinus-infection-treatment-online/" className="tdmd-related-card"><span className="tdmd-related-title">Sinus Infection</span><span className="tdmd-related-desc">$79 visit + $9–$20 antibiotic if indicated</span></a>
            <a href="/sore-throat-treatment-online/" className="tdmd-related-card"><span className="tdmd-related-title">Sore Throat / Strep</span><span className="tdmd-related-desc">$79 visit + $9 amoxicillin if positive</span></a>
            <a href="/pink-eye-treatment-online/" className="tdmd-related-card"><span className="tdmd-related-title">Pink Eye</span><span className="tdmd-related-desc">$79 visit + eye-drop prescription</span></a>
            <a href="/hypertension-refills-online/" className="tdmd-related-card"><span className="tdmd-related-title">Blood Pressure Refills</span><span className="tdmd-related-desc">$79 visit + $4–$12 lisinopril/metoprolol</span></a>
            <a href="/asthma-refills-online/" className="tdmd-related-card"><span className="tdmd-related-title">Asthma Refills</span><span className="tdmd-related-desc">$79 visit + $20–$25 albuterol</span></a>
            <a href="/acid-reflux-refills-online/" className="tdmd-related-card"><span className="tdmd-related-title">Acid Reflux / GERD</span><span className="tdmd-related-desc">$79 visit + $4–$12 omeprazole</span></a>
            <a href="/influenza-treatment-online/" className="tdmd-related-card"><span className="tdmd-related-title">Flu / Influenza</span><span className="tdmd-related-desc">$79 visit + Tamiflu when indicated</span></a>
          </div>
          <div className="tdmd-related-cta" style={{ marginTop: '1rem' }}>
            <a href="/what-we-treat/" className="tdmd-btn tdmd-btn-outline">View all 60 conditions we treat</a>
          </div>
        </div>
      </section>

      {/* 10) Insurance accepted module */}
      <section className="tdmd-section" id={`${pid}-insurance`}>
        <div className="tdmd-container" data-speakable="true">
          <h2>Insurance Accepted (Select States)</h2>
          <p>TeleDirectMD is in-network with three major insurers. Your standard telehealth copay applies in place of the $79 self-pay fee.</p>
          <div className="tdmd-related-grid">
            <a href="/insurance/aetna/" className="tdmd-related-card"><span className="tdmd-related-title">Aetna</span><span className="tdmd-related-desc">{`In-network in ${getPayerFamilyStateCount('aetna')} states`}</span></a>
            <a href="/insurance/blue-cross-blue-shield/" className="tdmd-related-card"><span className="tdmd-related-title">Blue Cross Blue Shield</span><span className="tdmd-related-desc">{`In-network in ${getPayerFamilyStateCount('bcbs')} states`}</span></a>
            <a href="/insurance/united-healthcare/" className="tdmd-related-card"><span className="tdmd-related-title">UnitedHealthcare</span><span className="tdmd-related-desc">{`In-network in ${getPayerFamilyStateCount('uhc')} states`}</span></a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.92rem', color: 'var(--tdmd-muted)' }}>
            Don't see your plan? <a href="/insurance/" style={{ color: 'var(--tdmd-teal)', fontWeight: 600 }}>View all insurance options</a> or book the flat $79 self-pay visit.
          </p>
        </div>
      </section>

      {/* 11) Pricing reinforcement */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-pricing`}>
        <div className="tdmd-container">
          <h2>$79 Flat. HSA / FSA Accepted.</h2>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card">
              <div className="tdmd-price-big">$79</div>
              <div className="tdmd-price-sub">One flat fee covers your entire visit</div>
              <ul className="tdmd-price-includes">
                <li>Board-certified MD video consultation</li>
                <li>E-prescription to any US pharmacy</li>
                <li>HSA / FSA-eligible</li>
                <li>No facility fees, no surprise billing</li>
                <li>Receipt suitable for travel-insurance reimbursement</li>
              </ul>
            </div>
            <div className="tdmd-price-chart" role="group" aria-label="Cost comparison">
              <h3>Cash-Pay Cost vs. Other Settings</h3>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>TeleDirectMD</span><span>$79</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill tdmd-bar-fill-tdmd" style={{ '--w': 5 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Telehealth avg.</span><span>$40–$100</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 9 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Retail clinic</span><span>$99–$139</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 13 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Urgent care</span><span>$150–$280</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 28 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Emergency room</span><span>~$2,715</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 100 }} /></div>
              </div>
              <p className="tdmd-price-footnote">Sources: <a href="https://www.talktomira.com/post/how-much-does-an-er-visit-cost" rel="nofollow noopener">Mira Health 2025</a>; <a href="https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance" rel="nofollow noopener">GoodRx 2024</a>; <a href="https://www.cvs.com/minuteclinic/services/price-lists" rel="nofollow noopener">CVS MinuteClinic 2024</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12) How It Works */}
      <section className="tdmd-section" id={`${pid}-how`}>
        <div className="tdmd-container">
          <h2>How a $79 TeleDirectMD Visit Works</h2>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Book online</h3>
                <p>Pick a same-day or next-available appointment at <a href="/book-online">teledirectmd.com/book-online</a>. Pay $79 at checkout (or use HSA/FSA, or apply your in-network insurance).</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Connect by video</h3>
                <p>At your appointment time, click the link to start a secure video visit with Dr. Bhavsar. No app download. Most visits take 10–15 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Get treated, fill the script</h3>
                <p>Receive a diagnosis, a written visit summary, and an e-prescription routed to your pharmacy of choice — usually within 30 minutes of the visit.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a $79 Visit Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional condition rollup */}
      {cfg.conditionRollup && (
        <section className="tdmd-section" id={`${pid}-rollup`}>
          <div className="tdmd-container">
            <h2>{cfg.conditionRollup.title}</h2>
            <p style={{ color: 'var(--tdmd-muted)' }}>{cfg.conditionRollup.caption}</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table">
                <thead><tr><th>Condition</th><th>Telehealth Total</th><th>Urgent Care Total</th><th>ER (uninsured)</th></tr></thead>
                <tbody>
                  {cfg.conditionRollup.rows.map((r, i) => (
                    <tr key={i}>
                      <td><strong>{r.condition}</strong></td>
                      <td>{r.telehealth}</td>
                      <td>{r.urgentCare}</td>
                      <td>{r.er}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 15) Optional platform comparison table */}
      {cfg.platformTable && (
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-platforms`}>
          <div className="tdmd-container">
            <h2>{cfg.platformTable.title}</h2>
            <p style={{ color: 'var(--tdmd-muted)' }}>{cfg.platformTable.caption}</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table">
                <thead><tr><th>Platform</th><th>Cash-Pay Price</th><th>States</th><th>MD-Only?</th><th>Source</th></tr></thead>
                <tbody>
                  {cfg.platformTable.rows.map((r, i) => (
                    <tr key={i}>
                      <td><strong>{r.platform}</strong></td>
                      <td>{r.price}</td>
                      <td>{r.states}</td>
                      <td>{r.mdOnly}</td>
                      <td>{r.sourceUrl ? <a href={r.sourceUrl} target="_blank" rel="nofollow noopener">{r.source}</a> : r.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 16) Who we help */}
      <section className="tdmd-section" id={`${pid}-who-we-help`}>
        <div className="tdmd-container">
          <h2>{cfg.whoWeHelp.title}</h2>
          <div className="tdmd-grid tdmd-grid-2">
            {cfg.whoWeHelp.groups.map((g, i) => (
              <div key={i} className="tdmd-card tdmd-card-good">
                <h3>{g.label}</h3>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17) Telehealth-appropriate vs in-person */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-appropriate`}>
        <div className="tdmd-container">
          <h2>{cfg.appropriateBlock.title}</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>Good fit for telehealth</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                {cfg.appropriateBlock.goodFor.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>Better seen in person</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                {cfg.appropriateBlock.notFor.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 18) Decision guide */}
      <section className="tdmd-section" id={`${pid}-decision`}>
        <div className="tdmd-container">
          <h2>{cfg.decisionGuide.title}</h2>
          <div className="tdmd-decision-flow">
            {cfg.decisionGuide.steps.map((step, i) => (
              <div key={i} className={`tdmd-decision-step${step.good ? ' tdmd-decision-step-good' : ''}`}>
                <div className="tdmd-decision-number">{step.num}</div>
                <div className="tdmd-decision-content">
                  <h3>{step.head}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 19) Medications table */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-medications`}>
        <div className="tdmd-container">
          <h2>{cfg.medicationsTable.title}</h2>
          <p style={{ color: 'var(--tdmd-muted)' }}>{cfg.medicationsTable.caption}</p>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead><tr><th>Medication</th><th>Cash-Pay Price (with GoodRx)</th><th>Source</th></tr></thead>
              <tbody>
                {cfg.medicationsTable.rows.map((r, i) => (
                  <tr key={i}>
                    <td><strong>{r.drug}</strong></td>
                    <td>{r.cost}</td>
                    <td><a href={r.sourceUrl} target="_blank" rel="nofollow noopener">GoodRx</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 20) Home-care / cost-stretching tips */}
      <section className="tdmd-section" id={`${pid}-home-care`}>
        <div className="tdmd-container">
          <h2>{cfg.homeCare.title}</h2>
          <ul className="tdmd-checklist tdmd-checklist--good">
            {cfg.homeCare.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </section>

      {/* 21) When NOT to use */}
      <section className="tdmd-section" id={`${pid}-when-not`}>
        <div className="tdmd-container">
          <h2>{cfg.whenNotToUse.title}</h2>
          <ul className="tdmd-checklist tdmd-checklist--alert">
            {cfg.whenNotToUse.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </section>

      {/* 22) FAQ */}
      <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
        <div className="tdmd-container">
          <h2>Frequently Asked Questions</h2>
          <div className="tdmd-faq-list" role="list">
            {cfg.faqs.map((f, i) => (
              <details key={i} className="tdmd-faq-item" role="listitem">
                <summary className="tdmd-faq-question" data-speakable="true">{f.question}</summary>
                <div className="tdmd-faq-answer"><p>{f.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 22b) Symptom guides that lead here — back-links to /symptoms/* */}
      {(COST_PAGE_TO_SYMPTOMS[slug] || []).length > 0 && (
        <section className="tdmd-section" id={`${pid}-symptom-back-links`}>
          <div className="tdmd-container" data-speakable="true">
            <h2>Symptom Guides That Lead to This Cost Question</h2>
            <p>Patients usually arrive at a cost question via a symptom search. These symptom guides cover the questions and route to the same care plan:</p>
            <div className="tdmd-related-grid">
              {(COST_PAGE_TO_SYMPTOMS[slug] || []).map((s) => {
                const r = SYMPTOM_PAGES[s];
                if (!r) return null;
                return (
                  <a key={s} href={`/symptoms/${s}/`} className="tdmd-related-card">
                    <span className="tdmd-related-title">{r.breadcrumb}</span>
                    <span className="tdmd-related-desc">"{r.query}"</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 23) Cross-links to sibling cost guides + platform comparisons + final CTA */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cross-links`}>
        <div className="tdmd-container">
          <h2>Related Cost Guides</h2>
          <div className="tdmd-related-grid">
            {related.relatedCost.map((s) => {
              const r = COST_PAGES[s];
              if (!r) return null;
              return (
                <a key={s} href={`/cost/${s}/`} className="tdmd-related-card">
                  <span className="tdmd-related-title">{r.breadcrumb}</span>
                  <span className="tdmd-related-desc">{r.metaDescription.slice(0, 110)}…</span>
                </a>
              );
            })}
          </div>

          <h2 style={{ marginTop: '2rem' }}>Compare TeleDirectMD to Other Telehealth Platforms</h2>
          <p>Side-by-side comparisons with verified 2026 cash-pay pricing and inline source citations on every claim:</p>
          <div className="tdmd-related-grid">
            {related.relatedCompare.map((s) => {
              const c = COMPARE_PAGES[s];
              if (!c) return null;
              return (
                <a key={s} href={`/compare/${s}/`} className="tdmd-related-card">
                  <span className="tdmd-related-title">TeleDirectMD vs. {c.competitorName}</span>
                  <span className="tdmd-related-desc">{c.metaDescription.slice(0, 110)}…</span>
                </a>
              );
            })}
          </div>

          <div className="tdmd-bottom-cta" style={{ marginTop: '1.5rem' }}>
            <div className="tdmd-bottom-cta-copy">
              <h3>Stop guessing. Book a $79 visit and know your cost upfront.</h3>
              <p>Same-day. No insurance required. HSA/FSA accepted. 43 states. Last verified {today}.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Start a $79 Visit</a>
              <a href="/insurance/" className="tdmd-btn tdmd-btn-outline">Use Insurance</a>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="tdmd-section" id={`${pid}-references`}>
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            {cfg.references.map((r, i) => (
              <li key={i}><a href={r.url} target="_blank" rel="nofollow noopener">{r.label}</a></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
        <div className="tdmd-container">
          <h2>Medical Disclaimer & Pricing Caveats</h2>
          <p>
            Cost figures on this page reflect 2025–2026 cash-pay/uninsured averages or ranges from public sources (KFF, Mira Health, GoodRx, Penn Medicine, CVS MinuteClinic, BetterCare). Actual costs vary by geography, facility, and services rendered. This page is informational only and does not constitute medical advice or a guarantee of pricing. TeleDirectMD provides telehealth services for non-emergency conditions in adults 18+ physically located in one of our 43 licensed states at the time of the visit. We do not prescribe controlled substances. If you are experiencing a medical emergency, call 911 immediately.
          </p>
        </div>
      </section>
      </>
      )}
    </>
  );
}
