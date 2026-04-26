// /use-case/[slug]/ — dynamic route for use-case landing pages.
// Content lives in lib/use-case-pages-config.js. Structure mirrors the
// 23-section gold standard in app/who-we-serve/[segment]/InternationalVisitorsPage.js
// (and the cost + compare dynamic routes added in prior PRs).

import {
  USE_CASE_PAGES,
  USE_CASE_PAGE_SLUGS,
  USE_CASE_RELATED,
  USE_CASE_LAST_VERIFIED,
} from '../../../lib/use-case-pages-config';
import { COST_PAGES } from '../../../lib/cost-pages-config';
import { COMPARE_PAGES } from '../../../lib/compare-pages-config';
import { AGGREGATE_RATING_VALUE, TOTAL_REVIEW_COUNT } from '../../../lib/review-schema';
import { buildCostCompareJsonLd } from '../../../lib/cost-compare-schema';

const STATE_LIST = [
  ['AL','Alabama'],['AZ','Arizona'],['CA','California'],['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],['FL','Florida'],['GA','Georgia'],['HI','Hawaii'],['ID','Idaho'],['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],['KS','Kansas'],['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],['MO','Missouri'],['MT','Montana'],['NE','Nebraska'],['NV','Nevada'],['NH','New Hampshire'],['NJ','New Jersey'],['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],['OK','Oklahoma'],['PA','Pennsylvania'],['SC','South Carolina'],['SD','South Dakota'],['TN','Tennessee'],['TX','Texas'],['UT','Utah'],['WA','Washington'],['WV','West Virginia'],['WI','Wisconsin'],['WY','Wyoming'],
];

export async function generateStaticParams() {
  return USE_CASE_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cfg = USE_CASE_PAGES[slug];
  if (!cfg) return {};
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/use-case/${slug}/`;
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

export default async function UseCasePage({ params }) {
  const { slug } = await params;
  const cfg = USE_CASE_PAGES[slug];
  if (!cfg) return null;

  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/use-case/${slug}/`;
  const today = new Date().toISOString().split('T')[0];
  const pid = cfg.pid;
  const related = USE_CASE_RELATED[slug] || { useCases: [], cost: [], compare: [] };

  const itemList = cfg.itemListSteps && cfg.itemListSteps.length
    ? {
        '@type': 'HowTo',
        '@id': `${pageUrl}#howto`,
        name: cfg.h1,
        description: cfg.metaDescription,
        step: cfg.itemListSteps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.head,
          text: s.body,
        })),
      }
    : null;

  const jsonLd = buildCostCompareJsonLd({
    pageUrl,
    headline: cfg.h1,
    description: cfg.metaDescription,
    breadcrumb: [
      { name: 'Home',         item: `${baseUrl}/` },
      { name: 'Use Cases',    item: `${baseUrl}/use-case/${cfg.slug}/` },
      { name: cfg.breadcrumb, item: pageUrl },
    ],
    faqs: cfg.faqs,
    today,
    itemList,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1) Breadcrumb */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/what-we-treat/">Use Cases</a>
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
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">{cfg.primaryCta || 'Start a $49 Visit With an MD'}</a>
                <a href="/insurance/" className="tdmd-btn tdmd-btn-outline">Use Insurance</a>
              </div>

              <p className="tdmd-reviewed">
                Last updated {today}. Sources verified on {USE_CASE_LAST_VERIFIED}. Reviewed by{' '}
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

      {/* 4) "What you get / What's included" — money block */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-included`}>
        <div className="tdmd-container" data-speakable="true">
          <h2>{cfg.includedTitle || 'What\u2019s Included'}</h2>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr><th>Item</th><th>Detail</th><th>Source</th></tr>
              </thead>
              <tbody>
                {cfg.includedRows.map((r, i) => (
                  <tr key={i}>
                    <td><strong>{r.item}</strong></td>
                    <td dangerouslySetInnerHTML={{ __html: r.detail }} />
                    <td>{r.src ? (<a href={r.src} target="_blank" rel="nofollow noopener">source</a>) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5) When this fits / When it doesn't — honesty block */}
      <section className="tdmd-section" id={`${pid}-fit`}>
        <div className="tdmd-container" data-speakable="true">
          <h2>When This Fits — and When It Doesn\u2019t</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>{cfg.fits.goodTitle || 'Good fit'}</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                {cfg.fits.good.map((b, i) => (
                  <li key={i}><span dangerouslySetInnerHTML={{ __html: b }} /></li>
                ))}
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>{cfg.fits.badTitle || 'Not a fit'}</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                {cfg.fits.bad.map((b, i) => (
                  <li key={i}><span dangerouslySetInnerHTML={{ __html: b }} /></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Step-by-step (HowTo) */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-howto`}>
        <div className="tdmd-container">
          <h2>{cfg.howtoTitle || 'How It Works'}</h2>
          <div className="tdmd-decision-flow">
            {cfg.itemListSteps.map((s, i) => (
              <div key={i} className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">{i + 1}</div>
                <div className="tdmd-decision-content">
                  <h3>{s.head}</h3>
                  <p dangerouslySetInnerHTML={{ __html: s.body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7) Deep-dive paragraphs */}
      <section className="tdmd-section" id={`${pid}-deepdive`}>
        <div className="tdmd-container">
          <h2>{cfg.deepDive.title}</h2>
          {cfg.deepDive.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>

      {/* 8) State coverage */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-states`}>
        <div className="tdmd-container">
          <h2>States Where TeleDirectMD Can Help</h2>
          <p>
            TeleDirectMD is licensed in <strong>41 states</strong>. You must be physically located in a covered state at the time of the visit. If your state isn\u2019t below, see <a href="/states-we-serve/">all states we serve</a>.
          </p>
          <div className="tdmd-other-states-grid">
            {STATE_LIST.map(([abbr, name]) => (
              <a key={abbr} href={`/${name.toLowerCase().replace(/\s+/g, '-')}/`} className="tdmd-other-state-link">{name}</a>
            ))}
          </div>
        </div>
      </section>

      {/* 9) Required information / Documentation */}
      <section className="tdmd-section" id={`${pid}-docs`}>
        <div className="tdmd-container">
          <h2>{cfg.docsTitle || 'What You\u2019ll Need'}</h2>
          <ul className="tdmd-hero-benefits">
            {cfg.docs.map((d, i) => (
              <li key={i}><span dangerouslySetInnerHTML={{ __html: d }} /></li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10) Trust block */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-trust`}>
        <div className="tdmd-container">
          <h2>Why TeleDirectMD: A Real Doctor, Not an Algorithm</h2>
          <p>
            Every visit is with <a href="/about" style={{ fontWeight: 700, color: 'var(--tdmd-navy)' }}>Dr. Parth Bhavsar, MD</a> — a board-certified Family Medicine physician licensed in 41 states. Not a panel of rotating providers, not a physician assistant, not a chatbot.
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

      {/* 11) Patient ratings */}
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

      {/* 12) Conditions cross-link */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-conditions`}>
        <div className="tdmd-container">
          <h2>Common Conditions Treated at the $49 Visit</h2>
          <p>The same flat $49 visit covers any of these adult conditions:</p>
          <div className="tdmd-related-grid">
            <a href="/uti-treatment-online/"             className="tdmd-related-card"><span className="tdmd-related-title">UTI Treatment</span><span className="tdmd-related-desc">$49 visit + $5\u2013$16 antibiotic</span></a>
            <a href="/sinus-infection-treatment-online/" className="tdmd-related-card"><span className="tdmd-related-title">Sinus Infection</span><span className="tdmd-related-desc">$49 visit + $9\u2013$20 antibiotic if indicated</span></a>
            <a href="/sore-throat-treatment-online/"     className="tdmd-related-card"><span className="tdmd-related-title">Sore Throat / Strep</span><span className="tdmd-related-desc">$49 visit + $9\u2013$18 amoxicillin if positive</span></a>
            <a href="/hypertension-refills-online/"      className="tdmd-related-card"><span className="tdmd-related-title">Blood Pressure Refills</span><span className="tdmd-related-desc">$49 visit + $2\u2013$16 lisinopril</span></a>
            <a href="/asthma-refills-online/"            className="tdmd-related-card"><span className="tdmd-related-title">Asthma Refills</span><span className="tdmd-related-desc">$49 visit + $19\u2013$24 albuterol</span></a>
            <a href="/birth-control-refills-online/"     className="tdmd-related-card"><span className="tdmd-related-title">Birth Control Refills</span><span className="tdmd-related-desc">$49 visit + $5\u2013$30 generic</span></a>
          </div>
          <div className="tdmd-related-cta" style={{ marginTop: '1rem' }}>
            <a href="/what-we-treat/" className="tdmd-btn tdmd-btn-outline">View all 60 conditions we treat</a>
          </div>
        </div>
      </section>

      {/* 13) Insurance accepted */}
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
            Don\u2019t see your plan? <a href="/insurance/" style={{ color: 'var(--tdmd-teal)', fontWeight: 600 }}>View all insurance options</a> or book the flat $49 self-pay visit.
          </p>
        </div>
      </section>

      {/* 14) Cross-links: sibling use cases + cost guides + a compare page */}
      <section className="tdmd-section" id={`${pid}-cross-links`}>
        <div className="tdmd-container">
          <h2>Related Pages</h2>
          {related.useCases?.length ? (
            <>
              <h3>Other Use Cases</h3>
              <div className="tdmd-related-grid">
                {related.useCases.map((s) => {
                  const c = USE_CASE_PAGES[s];
                  if (!c) return null;
                  return (
                    <a key={s} href={`/use-case/${s}/`} className="tdmd-related-card">
                      <span className="tdmd-related-title">{c.breadcrumb}</span>
                      <span className="tdmd-related-desc">{c.metaDescription.slice(0, 110)}\u2026</span>
                    </a>
                  );
                })}
              </div>
            </>
          ) : null}

          <div className="tdmd-inline-links" style={{ marginTop: '1.5rem' }}>
            <h3>Related Cost Guides</h3>
            <p className="tdmd-link-cloud">
              <a href="/cost/online-doctor-visit-cost/">How Much Does an Online Doctor Visit Cost in 2026?</a>
              {related.cost?.filter((s) => s !== 'online-doctor-visit-cost').map((s) => {
                const c = COST_PAGES[s];
                if (!c) return null;
                return (
                  <span key={s}>{' \u00b7 '}<a href={`/cost/${s}/`}>{c.breadcrumb}</a></span>
                );
              })}
            </p>
          </div>

          {related.compare?.length ? (
            <div className="tdmd-inline-links" style={{ marginTop: '1.5rem' }}>
              <h3>Compare Telehealth Platforms</h3>
              <p className="tdmd-link-cloud">
                {related.compare.map((s, i) => {
                  const c = COMPARE_PAGES[s];
                  if (!c) return null;
                  return (
                    <span key={s}>{i > 0 ? ' \u00b7 ' : ''}<a href={`/compare/${s}/`}>TeleDirectMD vs. {c.competitorName}</a></span>
                  );
                })}
              </p>
            </div>
          ) : null}
        </div>
      </section>

      {/* 15) Pricing reinforcement */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-price-card`}>
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
                <li>Receipt suitable for reimbursement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 16) FAQ */}
      <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
        <div className="tdmd-container">
          <h2>{cfg.faqTitle || 'Frequently Asked Questions'}</h2>
          <div className="tdmd-faq-list" role="list">
            {cfg.faqs.map((f, i) => (
              <details key={i} className="tdmd-faq-item" role="listitem">
                <summary className="tdmd-faq-question" data-speakable="true">{f.question}</summary>
                <div className="tdmd-faq-answer"><p dangerouslySetInnerHTML={{ __html: f.answer }} /></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 17) Final CTA */}
      <section className="tdmd-section" id={`${pid}-final-cta`}>
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>$49. Live MD video. 41 states. Same-day evenings & weekends.</h3>
              <p>{cfg.finalCtaSub || 'Book a visit in under two minutes.'}</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">{cfg.primaryCta || 'Start a $49 Visit With an MD'}</a>
              <a href="/insurance/" className="tdmd-btn tdmd-btn-outline">Use Insurance</a>
            </div>
          </div>
        </div>
      </section>

      {/* 18) References */}
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

      {/* 19) Disclaimer + last-verified stamp */}
      <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
        <div className="tdmd-container">
          <h2>Disclaimer & Verification</h2>
          <p dangerouslySetInnerHTML={{ __html: cfg.disclaimer || 'This page is for informational purposes only and is not medical advice. TeleDirectMD provides telehealth services for non-emergency conditions in adults 18+ physically located in one of our 41 licensed states at the time of the visit. We do not prescribe controlled substances. If you are experiencing a medical emergency, call 911 immediately.' }} />
          <p>
            <strong>Page last updated {today}. Sources verified on {USE_CASE_LAST_VERIFIED}.</strong> Pricing and policies cited from third parties change frequently — confirm with the source directly before relying on it.
          </p>
        </div>
      </section>
    </>
  );
}
