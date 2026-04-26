// /compare/[competitor]/ — dynamic route for the 6 head-to-head pages.
// Content lives in lib/compare-pages-config.js. Structure mirrors the
// 23-section gold standard in app/who-we-serve/[segment]/InternationalVisitorsPage.js
// (and the cost-pages dynamic route added in the prior PR).

import {
  COMPARE_PAGES,
  COMPARE_PAGE_SLUGS,
  COMPARE_RELATED,
  LAST_VERIFIED,
  getCompareTableRows,
} from '../../../lib/compare-pages-config';
import { COST_PAGES } from '../../../lib/cost-pages-config';
import { getAggregateRating, getReviewBlock, AGGREGATE_RATING_VALUE, TOTAL_REVIEW_COUNT } from '../../../lib/review-schema';

const STATE_ABBRS = ['AL','AZ','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NC','ND','OH','OK','PA','SC','SD','TN','TX','UT','WA','WV','WI','WY'];
const STATE_LIST = [
  ['AL','Alabama'],['AZ','Arizona'],['CA','California'],['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],['FL','Florida'],['GA','Georgia'],['HI','Hawaii'],['ID','Idaho'],['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],['KS','Kansas'],['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],['MO','Missouri'],['MT','Montana'],['NE','Nebraska'],['NV','Nevada'],['NH','New Hampshire'],['NJ','New Jersey'],['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],['OK','Oklahoma'],['PA','Pennsylvania'],['SC','South Carolina'],['SD','South Dakota'],['TN','Tennessee'],['TX','Texas'],['UT','Utah'],['WA','Washington'],['WV','West Virginia'],['WI','Wisconsin'],['WY','Wyoming'],
];

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
  const today = new Date().toISOString().split('T')[0];
  const pid = cfg.pid;
  const related = COMPARE_RELATED[competitor] || { compare: [], cost: [] };
  const tableRows = getCompareTableRows(competitor);

  // ── JSON-LD: BreadcrumbList + MedicalOrganization + Physician + Article + FAQPage + HowTo + ItemList + MedicalWebPage
  const physicianBlock = {
    '@type': 'Physician',
    '@id': `${baseUrl}/about#physician`,
    name: 'Parth Bhavsar, MD',
    medicalSpecialty: 'FamilyMedicine',
    identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: '1245687134' },
    alumniOf: { '@type': 'EducationalOrganization', name: 'University of Mississippi Medical Center' },
    worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD' },
    licensedIn: STATE_ABBRS,
    ...getReviewBlock(),
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',                item: `${baseUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Platform Comparisons', item: `${baseUrl}/compare/teledirectmd-vs-teladoc/` },
          { '@type': 'ListItem', position: 3, name: cfg.breadcrumb,         item: pageUrl },
        ],
      },
      {
        '@type': 'MedicalOrganization',
        '@id': `${baseUrl}#org`,
        name: 'TeleDirectMD',
        url: baseUrl,
        logo: `${baseUrl}/assets/brand/teledirectmd-logo.png`,
        telephone: '+1-678-956-1855',
        medicalSpecialty: 'GeneralPractice',
        availableService: { '@type': 'MedicalTherapy', name: 'Telehealth Consultations' },
        areaServed: STATE_ABBRS,
        aggregateRating: getAggregateRating(),
      },
      physicianBlock,
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: cfg.h1,
        description: cfg.metaDescription,
        url: pageUrl,
        datePublished: '2026-04-26',
        dateModified: today,
        author: { '@id': `${baseUrl}/about#physician` },
        publisher: { '@id': `${baseUrl}#org` },
        mainEntityOfPage: pageUrl,
      },
      {
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
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: cfg.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      {
        '@type': 'HowTo',
        '@id': `${pageUrl}#howto`,
        name: 'How to Get a TeleDirectMD Visit',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Book online',          text: 'Book a same-day visit at teledirectmd.com/book-online for $49 flat. No insurance required.' },
          { '@type': 'HowToStep', position: 2, name: 'Connect by video',     text: 'Connect with Dr. Parth Bhavsar, MD by secure video. Most visits take 10–15 minutes.' },
          { '@type': 'HowToStep', position: 3, name: 'Get treated',          text: 'Receive a diagnosis, e-prescription to your pharmacy of choice, and a written visit summary.' },
        ],
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: cfg.metaTitle,
        description: cfg.metaDescription,
        datePublished: '2026-04-26',
        dateModified: today,
        author: { '@id': `${baseUrl}/about#physician` },
        publisher: { '@id': `${baseUrl}#org` },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.tdmd-hero h1', '.tdmd-answer-block', '.tdmd-faq-question'] },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1) Breadcrumb */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/compare/teledirectmd-vs-teladoc/">Compare</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">{cfg.breadcrumb}</span>
        </div>
      </nav>

      {/* 2) Answer Block */}
      <div
        className="tdmd-answer-block"
        data-speakable="true"
        style={{ background: '#EAF7F8', borderLeft: '4px solid #006B73', padding: '1rem 1.25rem', margin: '0', lineHeight: 1.6 }}
      >
        <div className="tdmd-container">
          <p style={{ margin: 0, fontWeight: 700, color: '#003E52', fontSize: '1.05rem' }}>{cfg.answerLead}</p>
          <p style={{ margin: '0.35rem 0 0', color: '#003E52', fontSize: '0.97rem' }} dangerouslySetInnerHTML={{ __html: cfg.answerBody }} />
        </div>
      </div>

      {/* 3) Hero */}
      <section className="tdmd-hero" id={`${pid}-hero`}>
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1 data-speakable="true">{cfg.h1}</h1>
              <p className="tdmd-hero-sub" data-speakable="true">{cfg.heroSub}</p>
              <p dangerouslySetInnerHTML={{ __html: cfg.heroIntro }} />

              <ul className="tdmd-hero-benefits">
                {cfg.heroBenefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>

              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Start a $49 Visit With an MD</a>
                <a href="/insurance/" className="tdmd-btn tdmd-btn-outline">Use Insurance</a>
              </div>

              <p className="tdmd-reviewed">
                Comparison guide last updated {today}. Last verified against {cfg.competitorName} official pricing on {LAST_VERIFIED}. Reviewed by{' '}
                <a className="tdmd-author-link" href="/about" aria-label="About Parth Bhavsar, MD">Parth Bhavsar, MD</a>{' '}— Board-Certified Family Medicine · NPI 1245687134 · LegitScript Certified · HIPAA-Compliant.
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

      {/* 4) The 10-row head-to-head comparison table — money block */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-table`}>
        <div className="tdmd-container" data-speakable="true">
          <h2>TeleDirectMD vs. {cfg.competitorName} — Side-by-Side</h2>
          <p style={{ margin: '0.25rem 0 1rem', color: 'var(--tdmd-muted)' }}>
            10 dimensions, head-to-head. Every {cfg.competitorName} claim links to its source. Verified against {cfg.competitorName} official materials on {LAST_VERIFIED}.
          </p>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr><th>Feature</th><th>TeleDirectMD</th><th>{cfg.competitorName}</th></tr>
              </thead>
              <tbody>
                {tableRows.map((r, i) => (
                  <tr key={i}>
                    <td><strong>{r.dim}</strong></td>
                    <td>{r.tdmd}</td>
                    <td>
                      {r.comp}
                      {r.compSrc ? (
                        <> · <a href={r.compSrc} target="_blank" rel="nofollow noopener">source</a></>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="tdmd-comparison-note" style={{ marginTop: '1rem' }}>
            All {cfg.competitorName} pricing and feature claims sourced from {cfg.competitorName} public materials and third-party reviews; see the References section for full citations.
          </p>
        </div>
      </section>

      {/* 5) Where TeleDirectMD wins / Where competitor wins — honesty block */}
      <section className="tdmd-section" id={`${pid}-honesty`}>
        <div className="tdmd-container" data-speakable="true">
          <h2>Where Each Platform Wins</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>Where TeleDirectMD wins</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                {cfg.tdmdWins.map((w, i) => (
                  <li key={i}>
                    <strong>{w.headline}.</strong> <span dangerouslySetInnerHTML={{ __html: w.detail }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>Where {cfg.competitorName} wins</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                {cfg.competitorWins.map((w, i) => (
                  <li key={i}>
                    <strong>{w.headline}.</strong> <span dangerouslySetInnerHTML={{ __html: w.detail }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Pricing deep-dive */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-pricing`}>
        <div className="tdmd-container">
          <h2>{cfg.pricingDive.title}</h2>
          {cfg.pricingDive.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>

      {/* 7) Provider quality deep-dive */}
      <section className="tdmd-section" id={`${pid}-providers`}>
        <div className="tdmd-container">
          <h2>{cfg.providerDive.title}</h2>
          {cfg.providerDive.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>

      {/* 8) State coverage */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-states`}>
        <div className="tdmd-container">
          <h2>State Coverage: TeleDirectMD vs. {cfg.competitorName}</h2>
          <p>
            TeleDirectMD is licensed in <strong>41 states</strong>. {cfg.competitorName} state coverage is listed in the comparison table above (with source). If your state isn\'t on the TeleDirectMD list below, {cfg.competitorName} or another platform may be a better fit.
          </p>
          <div className="tdmd-other-states-grid">
            {STATE_LIST.map(([abbr, name]) => (
              <a key={abbr} href={`/${name.toLowerCase().replace(/\s+/g, '-')}/`} className="tdmd-other-state-link">{name}</a>
            ))}
          </div>
        </div>
      </section>

      {/* 9) Prescription handling deep-dive */}
      <section className="tdmd-section" id={`${pid}-rx`}>
        <div className="tdmd-container">
          <h2>{cfg.rxDive.title}</h2>
          {cfg.rxDive.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>

      {/* 10) Trust block */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-trust`}>
        <div className="tdmd-container">
          <h2>Why TeleDirectMD: A Real Doctor, Not an Algorithm</h2>
          <p>
            When you visit TeleDirectMD, you see <a href="/about" style={{ fontWeight: 700, color: 'var(--tdmd-navy)' }}>Dr. Parth Bhavsar, MD</a> — a board-certified Family Medicine physician licensed in 41 states. Not a panel of rotating providers, not a physician assistant, not a chatbot.
          </p>
          <ul className="tdmd-hero-benefits">
            <li>Board-certified Family Medicine — University of Mississippi Medical Center</li>
            <li>NPI <strong>1245687134</strong> — verifiable in the NPPES NPI Registry</li>
            <li>{AGGREGATE_RATING_VALUE} ★ across {TOTAL_REVIEW_COUNT} verified reviews (Google, Zocdoc, WebMD, Healthgrades)</li>
            <li>LegitScript-certified telehealth practice</li>
            <li>HIPAA-compliant platform — encrypted video, secure records, no data resale</li>
            <li>In-network with Aetna, BCBS, and UnitedHealthcare in select states</li>
          </ul>
        </div>
      </section>

      {/* 11) AggregateRating callout */}
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

      {/* 12) Conditions we treat related-links */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-conditions`}>
        <div className="tdmd-container">
          <h2>Conditions Commonly Treated at the $49 Visit</h2>
          <p>The same flat $49 visit covers any of these adult conditions:</p>
          <div className="tdmd-related-grid">
            <a href="/uti-treatment-online/"             className="tdmd-related-card"><span className="tdmd-related-title">UTI Treatment</span><span className="tdmd-related-desc">$49 visit + $6–$14 antibiotic</span></a>
            <a href="/sinus-infection-treatment-online/" className="tdmd-related-card"><span className="tdmd-related-title">Sinus Infection</span><span className="tdmd-related-desc">$49 visit + $9–$20 antibiotic if indicated</span></a>
            <a href="/sore-throat-treatment-online/"     className="tdmd-related-card"><span className="tdmd-related-title">Sore Throat / Strep</span><span className="tdmd-related-desc">$49 visit + $9 amoxicillin if positive</span></a>
            <a href="/pink-eye-treatment-online/"        className="tdmd-related-card"><span className="tdmd-related-title">Pink Eye</span><span className="tdmd-related-desc">$49 visit + eye-drop prescription</span></a>
            <a href="/hypertension-refills-online/"      className="tdmd-related-card"><span className="tdmd-related-title">Blood Pressure Refills</span><span className="tdmd-related-desc">$49 visit + $4–$12 lisinopril/metoprolol</span></a>
            <a href="/asthma-refills-online/"            className="tdmd-related-card"><span className="tdmd-related-title">Asthma Refills</span><span className="tdmd-related-desc">$49 visit + $20–$25 albuterol</span></a>
          </div>
          <div className="tdmd-related-cta" style={{ marginTop: '1rem' }}>
            <a href="/what-we-treat/" className="tdmd-btn tdmd-btn-outline">View all 60 conditions we treat</a>
          </div>
        </div>
      </section>

      {/* 13) Insurance accepted module */}
      <section className="tdmd-section" id={`${pid}-insurance`}>
        <div className="tdmd-container" data-speakable="true">
          <h2>Insurance Accepted (Select States)</h2>
          <p>TeleDirectMD is in-network with three major insurers. Your standard telehealth copay applies in place of the $49 self-pay fee.</p>
          <div className="tdmd-related-grid">
            <a href="/insurance/aetna/"                   className="tdmd-related-card"><span className="tdmd-related-title">Aetna</span><span className="tdmd-related-desc">In-network in 10 states</span></a>
            <a href="/insurance/blue-cross-blue-shield/"  className="tdmd-related-card"><span className="tdmd-related-title">Blue Cross Blue Shield</span><span className="tdmd-related-desc">In-network in 5 states</span></a>
            <a href="/insurance/united-healthcare/"        className="tdmd-related-card"><span className="tdmd-related-title">UnitedHealthcare</span><span className="tdmd-related-desc">In-network in 11 states</span></a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.92rem', color: 'var(--tdmd-muted)' }}>
            Don\'t see your plan? <a href="/insurance/" style={{ color: 'var(--tdmd-teal)', fontWeight: 600 }}>View all insurance options</a> or book the flat $49 self-pay visit.
          </p>
        </div>
      </section>

      {/* 14) Real patient scenarios */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-scenarios`}>
        <div className="tdmd-container">
          <h2>Real Patient Scenarios</h2>
          <div className="tdmd-grid tdmd-grid-2">
            {cfg.scenarios.map((s, i) => (
              <div key={i} className="tdmd-card tdmd-card-good">
                <h3>{s.name}</h3>
                <p>{s.story}</p>
                <p style={{ fontWeight: 700, color: 'var(--tdmd-teal)' }}>{s.save}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15) Cross-links to other compare pages + master cost page */}
      <section className="tdmd-section" id={`${pid}-cross-links`}>
        <div className="tdmd-container">
          <h2>Compare TeleDirectMD to Other Telehealth Platforms</h2>
          <div className="tdmd-related-grid">
            {COMPARE_PAGE_SLUGS.filter((s) => s !== competitor).map((s) => {
              const c = COMPARE_PAGES[s];
              return (
                <a key={s} href={`/compare/${s}/`} className="tdmd-related-card">
                  <span className="tdmd-related-title">TeleDirectMD vs. {c.competitorName}</span>
                  <span className="tdmd-related-desc">{c.metaDescription.slice(0, 110)}…</span>
                </a>
              );
            })}
          </div>

          <div className="tdmd-inline-links" style={{ marginTop: '1.5rem' }}>
            <h3>Related Cost Guides</h3>
            <p className="tdmd-link-cloud">
              <a href="/cost/online-doctor-visit-cost/">How Much Does an Online Doctor Visit Cost in 2026?</a>
              {related.cost.filter((s) => s !== 'online-doctor-visit-cost').map((s) => {
                const c = COST_PAGES[s];
                if (!c) return null;
                return (
                  <span key={s}>{' · '}<a href={`/cost/${s}/`}>{c.breadcrumb}</a></span>
                );
              })}
            </p>
          </div>
        </div>
      </section>

      {/* 16) How It Works */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-how`}>
        <div className="tdmd-container">
          <h2>How a $49 TeleDirectMD Visit Works</h2>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Book online</h3>
                <p>Pick a same-day or next-available appointment at <a href="/book-online">teledirectmd.com/book-online</a>. Pay $49 at checkout (or use HSA/FSA, or apply your in-network insurance).</p>
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
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Start a $49 Visit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17) Decision guide */}
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

      {/* 18) Who fits which platform */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-who-for`}>
        <div className="tdmd-container">
          <h2>Who Fits Which Platform</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>Choose TeleDirectMD if…</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                {cfg.whoFor.tdmd.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>Choose {cfg.competitorName} if…</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                {cfg.whoFor.competitor.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 19) Pricing reinforcement */}
      <section className="tdmd-section" id={`${pid}-price-card`}>
        <div className="tdmd-container">
          <h2>$49 Flat. HSA / FSA Accepted.</h2>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card">
              <div className="tdmd-price-big">$49</div>
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
              <h3>Cash-Pay Cost vs. {cfg.competitorName}</h3>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>TeleDirectMD</span><span>$49</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill tdmd-bar-fill-tdmd" style={{ '--w': 49 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>{cfg.competitorName}</span><span>{cfg.competitor.urgentCare}</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 100 }} /></div>
              </div>
              <p className="tdmd-price-footnote">
                {cfg.competitorName} pricing per <a href={cfg.competitor.urgentCareSrc} target="_blank" rel="nofollow noopener">source</a>. TeleDirectMD published flat rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 20) FAQ */}
      <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
        <div className="tdmd-container">
          <h2>Frequently Asked Questions — TeleDirectMD vs. {cfg.competitorName}</h2>
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

      {/* 21) Final CTA */}
      <section className="tdmd-section" id={`${pid}-final-cta`}>
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>$49. Live MD video. 41 states. Same-day evenings & weekends.</h3>
              <p>If TeleDirectMD fits your situation per the comparison above, book a visit in under two minutes.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Start a $49 Visit With an MD</a>
              <a href="/insurance/" className="tdmd-btn tdmd-btn-outline">Use Insurance</a>
            </div>
          </div>
        </div>
      </section>

      {/* 22) References */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-references`}>
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            {cfg.references.map((r, i) => (
              <li key={i}><a href={r.url} target="_blank" rel="nofollow noopener">{r.label}</a></li>
            ))}
          </ul>
        </div>
      </section>

      {/* 23) Disclaimer + last-verified stamp */}
      <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
        <div className="tdmd-container">
          <h2>Disclaimer & Verification</h2>
          <p>
            This page is an informational comparison between TeleDirectMD and <strong>{cfg.competitorName}</strong>. It is not affiliated with, endorsed by, or sponsored by {cfg.competitorName}. All {cfg.competitorName} pricing, feature, and coverage claims are sourced from {cfg.competitorName}\'s public materials and third-party reviews; see the References section for citations. Pricing and features change — always verify current rates on the {cfg.competitorName} website (<a href={cfg.competitorUrl} target="_blank" rel="nofollow noopener">{cfg.competitorUrl}</a>) before booking.
          </p>
          <p>
            <strong>Comparison guide last updated {today}. Last verified against {cfg.competitorName} official pricing on {LAST_VERIFIED}.</strong> TeleDirectMD provides telehealth services for non-emergency conditions in adults 18+ physically located in one of our 41 licensed states at the time of the visit. We do not prescribe controlled substances. If you are experiencing a medical emergency, call 911 immediately.
          </p>
        </div>
      </section>
    </>
  );
}
