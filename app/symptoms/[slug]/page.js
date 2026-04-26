// /symptoms/[slug]/ — dynamic route for the 20 symptom-led landing pages.
// Content lives in lib/symptom-pages-config.js. Schema via lib/symptom-schema.js.
// Structure mirrors the 23-section gold-standard pattern from
// app/who-we-serve/[segment]/InternationalVisitorsPage.js, adapted for a
// symptom-first narrative.

import {
  SYMPTOM_PAGES,
  SYMPTOM_PAGE_SLUGS,
  SYMPTOM_TO_CONDITION,
  SYMPTOM_TO_COST_PAGE,
} from '../../../lib/symptom-pages-config';
import { buildSymptomJsonLd } from '../../../lib/symptom-schema';
import { COST_PAGES } from '../../../lib/cost-pages-config';
import { AGGREGATE_RATING_VALUE, TOTAL_REVIEW_COUNT } from '../../../lib/review-schema';

const STATE_LIST = [
  ['AL','Alabama'],['AZ','Arizona'],['CA','California'],['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],['FL','Florida'],['GA','Georgia'],['HI','Hawaii'],['ID','Idaho'],['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],['KS','Kansas'],['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],['MO','Missouri'],['MT','Montana'],['NE','Nebraska'],['NV','Nevada'],['NH','New Hampshire'],['NJ','New Jersey'],['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],['OK','Oklahoma'],['PA','Pennsylvania'],['SC','South Carolina'],['SD','South Dakota'],['TN','Tennessee'],['TX','Texas'],['UT','Utah'],['WA','Washington'],['WV','West Virginia'],['WI','Wisconsin'],['WY','Wyoming'],
];

const BASE_URL = 'https://teledirectmd.com';
const MASTER_COST_PAGE = '/cost/online-doctor-visit-cost/';
const DEFAULT_COMPARE_PAGE = { slug: 'teledirectmd-vs-teladoc', competitor: 'Teladoc' };

export async function generateStaticParams() {
  return SYMPTOM_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cfg = SYMPTOM_PAGES[slug];
  if (!cfg) return {};
  const pageUrl = `${BASE_URL}/symptoms/${slug}/`;
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

export default async function SymptomPage({ params }) {
  const { slug } = await params;
  const cfg = SYMPTOM_PAGES[slug];
  if (!cfg) return null;

  const pageUrl = `${BASE_URL}/symptoms/${slug}/`;
  const today = new Date().toISOString().split('T')[0];
  const pid = cfg.pid;

  const conditionSlug = SYMPTOM_TO_CONDITION[slug];
  const conditionUrl = `${BASE_URL}/${conditionSlug}/`;

  const costPageSlug = SYMPTOM_TO_COST_PAGE[slug];
  const costPageUrl = costPageSlug ? `/cost/${costPageSlug}/` : MASTER_COST_PAGE;
  const costPageLabel = costPageSlug ? COST_PAGES[costPageSlug].breadcrumb : 'Online Doctor Visit Cost';

  // ── JSON-LD via shared helper (E-E-A-T fields stay aligned with PR #7).
  const jsonLd = buildSymptomJsonLd({
    pageUrl,
    symptomName: cfg.breadcrumb,
    altNames: cfg.symptomDef.altNames,
    anatomy: cfg.symptomDef.anatomy,
    treatment: cfg.symptomDef.treatment,
    conditionName: cfg.symptomDef.conditionDisplayName,
    conditionUrl,
    headline: cfg.h1,
    description: cfg.metaDescription,
    breadcrumb: [
      { name: 'Home',                 item: `${BASE_URL}/` },
      { name: 'Symptoms',             item: `${BASE_URL}/symptoms/burning-urination/` },
      { name: cfg.breadcrumb,         item: pageUrl },
    ],
    faqs: cfg.faqs,
    today,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1) Breadcrumb */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/symptoms/burning-urination/">Symptoms</a>
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
              <p style={{ fontSize: '0.95rem', color: 'var(--tdmd-muted)', margin: '0 0 0.5rem' }}>
                Based on the search query: <em>"{cfg.query}"</em>
              </p>
              <h1 data-speakable="true">{cfg.h1}</h1>
              <p className="tdmd-hero-sub" data-speakable="true">
                Talk to a board-certified MD by video — typically a 10-minute visit, with a treatment plan and any prescription routed to your pharmacy of choice.
              </p>
              <p>
                This page is informational guidance, not a diagnosis. If your symptoms match a clear pattern below, you can start a $49 video visit; if any of the red-flag signs apply, see in-person care or call 911.
              </p>

              <ul className="tdmd-hero-benefits">
                <li>$49 flat — board-certified MD video visit, prescription same-day if appropriate</li>
                <li>41 states — same-day, evenings & weekends</li>
                <li>HSA / FSA accepted; in-network with Aetna, BCBS, UnitedHealthcare</li>
                <li>Routes you to in-person urgent care or the ER if your symptoms warrant it</li>
              </ul>

              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Talk to a Doctor — $49</a>
                <a href={conditionUrl} className="tdmd-btn tdmd-btn-outline">{cfg.symptomDef.conditionDisplayName} treatment page →</a>
              </div>

              <p className="tdmd-reviewed">
                Last reviewed on {today} by{' '}
                <a className="tdmd-author-link" href="/about" aria-label="About Parth Bhavsar, MD">Parth Bhavsar, MD</a>{' '}— Board-Certified Family Medicine · NPI 1104323203 · LegitScript Certified · HIPAA-Compliant.
              </p>
            </div>

            <div className="tdmd-hero-side">
              <div className="tdmd-hero-card">
                <h2>Quick Facts</h2>
                <ul>
                  <li><strong>What this usually is:</strong> {cfg.symptomDef.conditionDisplayName}</li>
                  <li><strong>Treatment:</strong> {cfg.symptomDef.treatment}</li>
                  <li><strong>Visit cost:</strong> $49 flat at TeleDirectMD</li>
                  <li><strong>Time to prescription:</strong> ~30 minutes after booking</li>
                  <li><strong>States:</strong> 41 (board-certified MD)</li>
                </ul>
                <p className="tdmd-hero-note">
                  {AGGREGATE_RATING_VALUE} ★ from {TOTAL_REVIEW_COUNT} verified patient reviews on Google, Zocdoc, WebMD, and Healthgrades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) What this symptom usually means */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-meaning`}>
        <div className="tdmd-container" data-speakable="true">
          <h2>What This Symptom Usually Means</h2>
          {cfg.whatThisMeans.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>

      {/* 5) When to seek care immediately — RED FLAGS */}
      <section className="tdmd-section" id={`${pid}-red-flags`}>
        <div className="tdmd-container">
          <h2>When to Seek Care Immediately</h2>
          <p>If any of the following apply, <strong>this page is not the right care path</strong> — go to urgent care or the ER, or call 911 if symptoms are severe.</p>
          <div className="tdmd-card tdmd-card-alert">
            <ul className="tdmd-checklist tdmd-checklist--alert">
              {cfg.redFlags.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* 6) How telehealth diagnoses this */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-how-telehealth`}>
        <div className="tdmd-container">
          <h2>How a TeleDirectMD Visit Handles This</h2>
          <ul className="tdmd-checklist tdmd-checklist--good">
            {cfg.howTelehealthHelps.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      </section>

      {/* 7) Cost callout — primary cost-page link */}
      <section className="tdmd-section" id={`${pid}-cost-cta`}>
        <div className="tdmd-container" data-speakable="true">
          <h2>What does treatment cost?</h2>
          <p>
            A $49 telehealth visit is the cheapest legitimate care setting for this kind of symptom. {costPageSlug
              ? `For a full breakdown of treatment cost — visit + medication + tests — see our cost guide.`
              : `For a full breakdown comparing telehealth, urgent care, retail clinics, and ER pricing for an online doctor visit, see our master cost guide.`}
          </p>
          <div className="tdmd-related-cta" style={{ marginTop: '0.75rem' }}>
            <a href={costPageUrl} className="tdmd-btn tdmd-btn-primary">{costPageLabel} →</a>
          </div>
        </div>
      </section>

      {/* 8) Trust */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-trust`}>
        <div className="tdmd-container">
          <h2>Why TeleDirectMD: A Real Doctor, Not an Algorithm</h2>
          <p>
            When you visit TeleDirectMD, you see <a href="/about" style={{ fontWeight: 700, color: 'var(--tdmd-navy)' }}>Dr. Parth Bhavsar, MD</a> — a board-certified Family Medicine physician licensed in 41 states. Not a panel of rotating providers, not a physician assistant, not a chatbot.
          </p>
          <ul className="tdmd-hero-benefits">
            <li>Board-certified Family Medicine — University of Mississippi Medical Center</li>
            <li>NPI <strong>1104323203</strong> — verifiable in the NPPES NPI Registry</li>
            <li>{AGGREGATE_RATING_VALUE} ★ across {TOTAL_REVIEW_COUNT} verified reviews (Google, Zocdoc, WebMD, Healthgrades)</li>
            <li>LegitScript-certified telehealth practice</li>
            <li>HIPAA-compliant platform — encrypted video, secure records, no data resale</li>
          </ul>
        </div>
      </section>

      {/* 9) AggregateRating callout (schema is emitted; this is visible reinforcement) */}
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

      {/* 10) State coverage */}
      <section className="tdmd-section" id={`${pid}-states`}>
        <div className="tdmd-container">
          <h2>Available in 41 States</h2>
          <p>The flat $49 rate applies in every state where Dr. Bhavsar is licensed. Select your state for a state-specific page:</p>
          <div className="tdmd-other-states-grid">
            {STATE_LIST.map(([abbr, name]) => (
              <a key={abbr} href={`/${name.toLowerCase().replace(/\s+/g, '-')}/`} className="tdmd-other-state-link">{name}</a>
            ))}
          </div>
        </div>
      </section>

      {/* 11) Conditions we treat — related-links */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-conditions`}>
        <div className="tdmd-container">
          <h2>Conditions Commonly Treated at the $49 Visit</h2>
          <p>The same flat $49 visit covers these adult conditions:</p>
          <div className="tdmd-related-grid">
            <a href="/uti-treatment-online/"             className="tdmd-related-card"><span className="tdmd-related-title">UTI Treatment</span><span className="tdmd-related-desc">$49 visit + $6–$14 antibiotic</span></a>
            <a href="/sinus-infection-treatment-online/" className="tdmd-related-card"><span className="tdmd-related-title">Sinus Infection</span><span className="tdmd-related-desc">$49 visit + $9–$20 antibiotic if indicated</span></a>
            <a href="/sore-throat-treatment-online/"     className="tdmd-related-card"><span className="tdmd-related-title">Sore Throat / Strep</span><span className="tdmd-related-desc">$49 visit + $9 amoxicillin if positive</span></a>
            <a href="/pink-eye-treatment-online/"        className="tdmd-related-card"><span className="tdmd-related-title">Pink Eye</span><span className="tdmd-related-desc">$49 visit + eye-drop prescription</span></a>
            <a href="/asthma-refills-online/"            className="tdmd-related-card"><span className="tdmd-related-title">Asthma Refills</span><span className="tdmd-related-desc">$49 visit + $20–$25 albuterol</span></a>
            <a href="/acid-reflux-refills-online/"       className="tdmd-related-card"><span className="tdmd-related-title">Acid Reflux / GERD</span><span className="tdmd-related-desc">$49 visit + $4–$12 omeprazole</span></a>
          </div>
          <div className="tdmd-related-cta" style={{ marginTop: '1rem' }}>
            <a href="/what-we-treat/" className="tdmd-btn tdmd-btn-outline">View all 60 conditions we treat</a>
          </div>
        </div>
      </section>

      {/* 12) Related symptoms — 3-card grid */}
      <section className="tdmd-section" id={`${pid}-related-symptoms`}>
        <div className="tdmd-container">
          <h2>Related Symptoms Patients Often Search</h2>
          <div className="tdmd-related-grid">
            {cfg.relatedSymptoms.map((s) => {
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

      {/* 13) Real patient scenarios */}
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

      {/* 14) FAQ */}
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

      {/* 15) Insurance + cash-pay reinforcement */}
      <section className="tdmd-section" id={`${pid}-insurance`}>
        <div className="tdmd-container" data-speakable="true">
          <h2>$49 Cash-Pay or In-Network with Aetna, BCBS, UHC</h2>
          <p>The $49 flat rate applies to all 41 states. If you have insurance, TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states — your standard telehealth copay applies in place of the $49.</p>
          <div className="tdmd-related-grid">
            <a href="/insurance/aetna/"                   className="tdmd-related-card"><span className="tdmd-related-title">Aetna</span><span className="tdmd-related-desc">In-network in 10 states</span></a>
            <a href="/insurance/blue-cross-blue-shield/"  className="tdmd-related-card"><span className="tdmd-related-title">Blue Cross Blue Shield</span><span className="tdmd-related-desc">In-network in 5 states</span></a>
            <a href="/insurance/united-healthcare/"        className="tdmd-related-card"><span className="tdmd-related-title">UnitedHealthcare</span><span className="tdmd-related-desc">In-network in 11 states</span></a>
          </div>
        </div>
      </section>

      {/* 16) Cross-links to master cost page + one compare page */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cross-links`}>
        <div className="tdmd-container">
          <h2>Cost & Platform Comparisons</h2>
          <div className="tdmd-related-grid">
            <a href={MASTER_COST_PAGE} className="tdmd-related-card">
              <span className="tdmd-related-title">How Much Does an Online Doctor Visit Cost?</span>
              <span className="tdmd-related-desc">$49 vs. $150–$280 urgent care vs. ~$2,715 ER, with sources.</span>
            </a>
            <a href={`/compare/${DEFAULT_COMPARE_PAGE.slug}/`} className="tdmd-related-card">
              <span className="tdmd-related-title">TeleDirectMD vs. {DEFAULT_COMPARE_PAGE.competitor}</span>
              <span className="tdmd-related-desc">Side-by-side comparison with verified 2026 cash-pay pricing.</span>
            </a>
          </div>
        </div>
      </section>

      {/* 17) Symptom + condition narrative bridge */}
      <section className="tdmd-section" id={`${pid}-bridge`}>
        <div className="tdmd-container">
          <h2>From Symptom to Treatment Plan</h2>
          <p>
            Most patients searching <em>"{cfg.query}"</em> are looking for two things: <strong>what this is</strong> and <strong>how to get treated quickly</strong>. The visit covers both — a focused history with a board-certified MD, a clear diagnosis or working diagnosis, and a prescription routed to your pharmacy of choice when one is appropriate.
          </p>
          <p>
            The <a href={conditionUrl} style={{ color: 'var(--tdmd-teal)', fontWeight: 600 }}>{cfg.symptomDef.conditionDisplayName} treatment page</a> covers the full clinical picture for the routed condition — what we treat, what we don\'t, eligibility, medications, and references. Use the symptom page to decide whether a $49 visit is the right next step.
          </p>
        </div>
      </section>

      {/* 18) The healthcare-access gap (anchor narrative for E-E-A-T) */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-context`}>
        <div className="tdmd-container">
          <h2>Why a $49 Visit Matters Here</h2>
          <p>
            In 2024, <a href="https://www.kff.org/uninsured/key-facts-about-the-uninsured-population/" rel="nofollow noopener" target="_blank">26.7 million Americans under 65 were uninsured</a> per KFF, and <strong>38.6% of uninsured adults reported delaying or skipping needed care due to cost</strong>. For symptoms like the one this page covers — non-emergency, treatable with a focused visit and a generic prescription — a $49 telehealth visit is often the lowest-friction path to actually getting treated.
          </p>
          <p>
            A 2024 <a href="https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits" rel="nofollow noopener" target="_blank">Penn Medicine / JAMA Network Open study</a> of 160,000+ visits found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong> — about 5× cheaper. For appropriate conditions, the savings come without any clinical compromise.
          </p>
        </div>
      </section>

      {/* 19) Solution / what to do next */}
      <section className="tdmd-section" id={`${pid}-solution`}>
        <div className="tdmd-container">
          <h2>What To Do Next</h2>
          <ol style={{ lineHeight: 1.7, paddingLeft: '1.25rem' }}>
            <li><strong>Check the red-flag list above.</strong> If any apply, this page is not the right care path — go to in-person urgent care or the ER.</li>
            <li><strong>If symptoms match the patterns described</strong>, book a $49 video visit. Most appointments take 10–15 minutes.</li>
            <li><strong>If a prescription is appropriate</strong>, it\'s sent to your pharmacy of choice — usually within 30 minutes of the visit ending.</li>
            <li><strong>If the visit determines a different care path is needed</strong> (lab work, in-person exam, specialist referral), you\'ll receive clear next steps. No charge for the misroute.</li>
          </ol>
        </div>
      </section>

      {/* 20) References */}
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

      {/* 21) Final CTA */}
      <section className="tdmd-section" id={`${pid}-final-cta`}>
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>Ready to talk to a doctor? $49 flat. No insurance required.</h3>
              <p>Same-day, evenings & weekends. Board-certified MD. 41 states. Last reviewed {today}.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Talk to a Doctor — $49</a>
              <a href={conditionUrl} className="tdmd-btn tdmd-btn-outline">{cfg.symptomDef.conditionDisplayName} →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 22) Disclaimer + Last reviewed stamp */}
      <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
        <div className="tdmd-container">
          <h2>Medical Disclaimer</h2>
          <p>
            This page is informational and is not a diagnosis or substitute for medical care. <strong>Last reviewed {today} by Parth Bhavsar, MD (NPI 1104323203), board-certified Family Medicine.</strong> Telehealth services are for non-emergency conditions in adults 18+ physically located in one of TeleDirectMD\'s 41 licensed states at the time of the visit. We do not prescribe controlled substances. If you are experiencing a medical emergency — including any of the red-flag scenarios above — call 911 or go to the nearest emergency room.
          </p>
        </div>
      </section>
    </>
  );
}
