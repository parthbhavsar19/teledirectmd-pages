/**
 * SymptomErectileDysfunction.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Erectile Dysfunction
 * Slug:    /symptoms/erectile-dysfunction/
 * ICD-10:  N52.9 — Male erectile dysfunction, unspecified
 *
 * v3 standard: inline opener, vertical cost bars (tdmd-vbar), FaqAccordion (12 items),
 * 4 JSON-LD schemas (MedicalWebPage + FAQPage + HowTo + BreadcrumbList), NPI 1104323203.
 *
 * Hard rules:
 *   • $79 only — price must not be under-quoted
 *   • FAQPage schema only (no QA variant)
 *   • No CitableSummaryBlock import
 *   • NPI 1104323203 in Physician schema
 *   • Literal < and > in JSX text escaped as < >
 *   • Medically reviewed by Parth Bhavsar, MD — Updated May 23, 2026
 *
 * Generated: 2026-05-23. DO NOT edit manually — regenerate from config.
 */

import FaqAccordion from '../../components/FaqAccordion';

// ─── Page constants ────────────────────────────────────────────────────────────
const PAGE_URL = 'https://teledirectmd.com/symptoms/erectile-dysfunction/';
const PAGE_TITLE = `ED Treatment Online — Viagra, Cialis Generic Rx | TeleDirectMD`;
const DATE_PUBLISHED = '2026-05-23';
const DATE_MODIFIED = '2026-05-23';
const LAST_REVIEWED = '2026-05-23';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about',
};

// ─── Vertical cost comparison bars ────────────────────────────────────────────
const COST_BARS = [
  { name: 'TeleDirectMD', value: '$79', heightPct: 16, isTdmd: true },
  { name: 'Retail Clinic', value: '$139', heightPct: 28 },
  { name: 'Urgent Care', value: '$200', heightPct: 40 },
  { name: 'ER Visit', value: '$2,715', heightPct: 100 },
];

// ─── Medications ───────────────────────────────────────────────────────────────
const MEDICATIONS = [
  {
    generic: `Sildenafil`,
    brand: `Viagra`,
    form: `Oral tablet`,
    drugClass: `PDE5 inhibitor`,
    dose: `50 mg 30–60 min before sex; range 25–100 mg`,
    price: `$5–$147`,
    priceUrl: `https://www.goodrx.com/sildenafil`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, flushing, nasal congestion, blue-tinted vision; avoid with nitrates`,
  },
  {
    generic: `Tadalafil`,
    brand: `Cialis`,
    form: `Oral tablet`,
    drugClass: `PDE5 inhibitor`,
    dose: `10 mg before sex (range 5–20 mg) OR 2.5–5 mg daily`,
    price: `$5–$147`,
    priceUrl: `https://www.goodrx.com/sildenafil`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, back pain, nasal congestion; avoid with nitrates`,
  },
  {
    generic: `Vardenafil`,
    brand: `Levitra`,
    form: `Oral tablet`,
    drugClass: `PDE5 inhibitor`,
    dose: `10 mg 30–60 min before sex; range 5–20 mg`,
    price: `$5–$147`,
    priceUrl: `https://www.goodrx.com/sildenafil`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, flushing; avoid with QT-prolonging meds`,
  },
  {
    generic: `Avanafil`,
    brand: `Stendra`,
    form: `Oral tablet`,
    drugClass: `PDE5 inhibitor`,
    dose: `100 mg 15 min before sex; range 50–200 mg`,
    price: `$5–$147`,
    priceUrl: `https://www.goodrx.com/sildenafil`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, flushing; faster onset, fewer visual changes`,
  },
  {
    generic: `Bupropion (if ED from SSRI)`,
    brand: `Wellbutrin`,
    form: `Oral tablet`,
    drugClass: `NDRI antidepressant`,
    dose: `150 mg daily, may add to or replace SSRI`,
    price: `$5–$147`,
    priceUrl: `https://www.goodrx.com/sildenafil`,
    priceLabel: `GoodRx`,
    sideEffects: `Insomnia, dry mouth; lowers seizure threshold`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Is ED a sign of heart disease?`,
    answerPlain: `Often yes — vasculogenic ED reflects endothelial dysfunction throughout the body. Studies show ED can precede heart attack or stroke by 3–5 years. We use the visit to flag CV risk factors and recommend appropriate workup.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Often yes — vasculogenic ED reflects endothelial dysfunction throughout the body. Studies show ED can precede heart attack or stroke by 3–5 years. We use the visit to flag CV risk factors and recommend appropriate workup.` }} />
    ),
  },
  {
    question: `Can a telehealth doctor prescribe Viagra or Cialis?`,
    answerPlain: `Yes — sildenafil and tadalafil are non-controlled medications. Dr. Bhavsar can prescribe them after a focused history and cardiovascular risk assessment, in line with AUA guidelines. The prescription is sent the same day.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — sildenafil and tadalafil are non-controlled medications. Dr. Bhavsar can prescribe them after a focused history and cardiovascular risk assessment, in line with AUA guidelines. The prescription is sent the same day.` }} />
    ),
  },
  {
    question: `How much does generic sildenafil cost?`,
    answerPlain: `Generic sildenafil is now $0.50–(see medication table) coupon at most pharmacies — about 10–20× cheaper than brand-name Viagra. Tadalafil generic is $0.80–$3 per pill. We send the prescription anywhere you choose.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Generic sildenafil is now $0.50–(see medication table) coupon at most pharmacies — about 10–20× cheaper than brand-name Viagra. Tadalafil generic is $0.80–$3 per pill. We send the prescription anywhere you choose.` }} />
    ),
  },
  {
    question: `What\'s the difference between Viagra and Cialis?`,
    answerPlain: `Sildenafil (Viagra): on-demand, lasts 4–6 hours, take on empty stomach. Tadalafil (Cialis): on-demand option lasts 24–36 hours ("weekend pill") OR daily low-dose for spontaneity. Both have ~70% response rate. Choice depends on lifestyle preference.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Sildenafil (Viagra): on-demand, lasts 4–6 hours, take on empty stomach. Tadalafil (Cialis): on-demand option lasts 24–36 hours ("weekend pill") OR daily low-dose for spontaneity. Both have ~70% response rate. Choice depends on lifestyle preference.` }} />
    ),
  },
  {
    question: `Can I take sildenafil if I\'m on blood pressure medication?`,
    answerPlain: `Most BP medications are compatible (ACE inhibitors, ARBs, calcium channel blockers, diuretics). The exception is nitrates (nitroglycerin, isosorbide) — absolute contraindication. Alpha-blockers (tamsulosin) need spaced timing. We screen all your meds.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most BP medications are compatible (ACE inhibitors, ARBs, calcium channel blockers, diuretics). The exception is nitrates (nitroglycerin, isosorbide) — absolute contraindication. Alpha-blockers (tamsulosin) need spaced timing. We screen all your meds.` }} />
    ),
  },
  {
    question: `Do I need a blood test before getting an ED prescription?`,
    answerPlain: `Not for typical PDE5 prescribing — AUA endorses telehealth prescribing after focused history. We may suggest testosterone testing if low libido and fatigue are present, but that doesn't delay your initial prescription.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Not for typical PDE5 prescribing — AUA endorses telehealth prescribing after focused history. We may suggest testosterone testing if low libido and fatigue are present, but that doesn't delay your initial prescription.` }} />
    ),
  },
  {
    question: `How long does sildenafil take to work?`,
    answerPlain: `30–60 minutes on an empty stomach. High-fat meals delay absorption by up to 60 minutes. Effect lasts 4–6 hours. Sexual stimulation is still required for erection.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `30–60 minutes on an empty stomach. High-fat meals delay absorption by up to 60 minutes. Effect lasts 4–6 hours. Sexual stimulation is still required for erection.` }} />
    ),
  },
  {
    question: `What if Viagra doesn\'t work the first time?`,
    answerPlain: `~70% respond to first attempt at proper dose. Try at least 4 attempts at proper dose (50 mg sildenafil or 10 mg tadalafil) before declaring failure. Many non-responders need dose increase or switch to a different PDE5 inhibitor.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `~70% respond to first attempt at proper dose. Try at least 4 attempts at proper dose (50 mg sildenafil or 10 mg tadalafil) before declaring failure. Many non-responders need dose increase or switch to a different PDE5 inhibitor.` }} />
    ),
  },
  {
    question: `Are PDE5 inhibitors safe long-term?`,
    answerPlain: `Yes — over 25 years of safety data. No evidence of long-term harm with appropriate use. Daily tadalafil is FDA-approved for chronic use. Common side effects are mild and self-limited.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — over 25 years of safety data. No evidence of long-term harm with appropriate use. Daily tadalafil is FDA-approved for chronic use. Common side effects are mild and self-limited.` }} />
    ),
  },
  {
    question: `Can ED be reversed with lifestyle changes?`,
    answerPlain: `Yes — weight loss, smoking cessation, exercise, and Mediterranean diet improve ED in 30–40% of men in trials, sometimes restoring spontaneous function. These compound with medication for best results.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — weight loss, smoking cessation, exercise, and Mediterranean diet improve ED in 30–40% of men in trials, sometimes restoring spontaneous function. These compound with medication for best results.` }} />
    ),
  },
  {
    question: `What about testosterone replacement?`,
    answerPlain: `TRT is appropriate only for men with confirmed low testosterone (two morning total T levels <300 ng/dL) AND symptoms (low libido, fatigue, mood). It's not a routine ED treatment. Side effects include erythrocytosis, infertility, and possible CV risk; needs in-person monitoring.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TRT is appropriate only for men with confirmed low testosterone (two morning total T levels &lt;300 ng/dL) AND symptoms (low libido, fatigue, mood). It's not a routine ED treatment. Side effects include erythrocytosis, infertility, and possible CV risk; needs in-person monitoring.` }} />
    ),
  },
  {
    question: `Can I get vacuum devices or injections through telehealth?`,
    answerPlain: `Vacuum devices (VEDs) are available OTC and we can recommend reputable ones. Intracavernosal injections (alprostadil, Trimix) require in-person urology training and are reserved for PDE5 non-responders.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Vacuum devices (VEDs) are available OTC and we can recommend reputable ones. Intracavernosal injections (alprostadil, Trimix) require in-person urology training and are reserved for PDE5 non-responders.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/erectile-dysfunction-treatment-online/', label: 'Erectile Dysfunction Treatment Online' },
  { slug: '/birth-control-refills-online/', label: 'Birth Control Refills Online' },
  { slug: '/uti-treatment-online/', label: 'UTI Treatment Online' },
  { slug: '/migraine-refills-online/', label: 'Migraine Refills Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Trouble getting or keeping an erection? Generic sildenafil from $0.50/pill, tadalafil daily option. $79 telehealth, real doctor, prescription same day in 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Erectile Dysfunction',
      alternateName: ['ED', 'Impotence', 'Male Sexual Dysfunction'],
      code: { '@type': 'MedicalCode', code: 'N52.9', codingSystem: 'ICD-10-CM' },
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      geographicArea: { '@type': 'AdministrativeArea', name: 'United States' },
    },
    reviewedBy: {
      '@type': 'Physician',
      '@id': 'https://teledirectmd.com/about/#physician-parth-bhavsar',
      name: PHYSICIAN.name,
      identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: PHYSICIAN.npi },
      medicalSpecialty: PHYSICIAN.specialty,
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Doctor of Medicine (MD)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Board Certification — American Board of Family Medicine' },
      ],
      worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD', url: 'https://teledirectmd.com' },
      sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203', 'https://teledirectmd.com/about/'],
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '#sym-erectile-dysfunction-opening',
        '#sym-erectile-dysfunction-opening p',
        '.tdmd-sym__byline',
        '#sym-erectile-dysfunction-faq',
      ],
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answerPlain || '' },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Get ED Treatment Online`,
    description: `Three steps to receive erectile dysfunction evaluation and PDE5 inhibitor prescription from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select erectile dysfunction on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/erectile-dysfunction/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews cardiovascular status, medications, and contraindications before prescribing PDE5 inhibitors.`, url: `https://teledirectmd.com/symptoms/erectile-dysfunction/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your prescription`, text: `Sildenafil or tadalafil prescribed and sent to your pharmacy same day if appropriate.`, url: `https://teledirectmd.com/symptoms/erectile-dysfunction/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Erectile Dysfunction`, item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

// ─── Page-scoped CSS ───────────────────────────────────────────────────────────
const PAGE_CSS = `
.tdmd-sym { color: var(--tdmd-text); }
.tdmd-sym .tdmd-sym__byline { display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px); }
.tdmd-sym .tdmd-sym__byline img { width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff; }
.tdmd-sym .tdmd-sym__byline-text { display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45; }
.tdmd-sym .tdmd-sym__byline-name { font-weight:700;color:var(--tdmd-navy); }
.tdmd-sym .tdmd-sym__byline-meta { color:var(--tdmd-muted);font-size:0.85rem; }
.tdmd-sym .tdmd-sym__byline a { color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px; }
.tdmd-sym .tdmd-sym__opener { margin:1.5rem 0 0.5rem; }
.tdmd-sym .tdmd-sym__opener p { margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text); }
.tdmd-sym .tdmd-sym__opener p strong { color:var(--tdmd-navy); }
.tdmd-sym .tdmd-sym__opener p a { color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600; }
.tdmd-sym .tdmd-sym__dual { display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem; }
.tdmd-sym .tdmd-sym__dual-card { background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow); }
.tdmd-sym .tdmd-sym__dual-card--good { border-left:5px solid #2E7D52; }
.tdmd-sym .tdmd-sym__dual-card--alert { border-left:5px solid var(--tdmd-accent); }
.tdmd-sym .tdmd-sym__dual-card h3 { margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy); }
.tdmd-sym .tdmd-sym__dual-card ul { margin:0;padding-left:1.1rem;line-height:1.55; }
.tdmd-sym .tdmd-sym__dual-card li { margin:0.25rem 0; }
@media (max-width:720px) { .tdmd-sym .tdmd-sym__dual { grid-template-columns:minmax(0,1fr); } }
.tdmd-sym .tdmd-sym__cta-strip { display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow); }
.tdmd-sym .tdmd-sym__cta-strip p { margin:0;font-size:1.05rem;font-weight:700; }
.tdmd-sym .tdmd-sym__cta-strip small { display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem; }
.tdmd-sym .tdmd-sym__cta-btn { background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap; }
.tdmd-sym .tdmd-sym__cta-btn:hover { background:#FFF6F2;color:var(--tdmd-accent); }
.tdmd-sym .tdmd-sym__sibling-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:0.85rem;margin-top:1rem; }
.tdmd-sym .tdmd-sym__sibling { display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s; }
.tdmd-sym .tdmd-sym__sibling:hover { border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow); }
.tdmd-sym .tdmd-sym__sibling-label { font-weight:700;color:var(--tdmd-navy); }
.tdmd-sym .tdmd-sym__related-links { display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem; }
.tdmd-sym .tdmd-sym__related-links a { color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px; }
`;

// ─── Component ─────────────────────────────────────────────────────────────────
export default function SymptomErectileDysfunction() {
  const schemas = buildSchemas();
  const pid = 'sym-erectile-dysfunction';

  return (
    <>
      {/* JSON-LD schemas */}
      {schemas.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className="tdmd-sym">
        {/* ─── Breadcrumb ─────────────────────────────────────────────────── */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/symptoms/">Symptoms</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Erectile Dysfunction</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Erectile Dysfunction — Online Sildenafil & Tadalafil Same Day` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Erectile Dysfunction — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Erectile Dysfunction is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
                </p>

                {/* Physician byline (E-E-A-T) */}
                <div className="tdmd-sym__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="tdmd-sym__byline-text">
                    <span className="tdmd-sym__byline-name">
                      Medically reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="tdmd-sym__byline-meta">
                      NPI {PHYSICIAN.npi} &amp;middot; Updated May 23, 2026
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-opening`}>Overview</a></li>
                  <li><a href={`#${pid}-eligibility`}>Eligibility checklist</a></li>
                  <li><a href={`#${pid}-differentials`}>Differential diagnosis</a></li>
                  <li><a href={`#${pid}-cost`}>Cost comparison</a></li>
                  <li><a href={`#${pid}-medications`}>Medications</a></li>
                  <li><a href={`#${pid}-red-flags`}>Red flags</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>Self pay $79 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Same-day visits available in 41 states</li>
                  <li>Board-certified Family Medicine physician</li>
                  <li>e-Prescription to your pharmacy when appropriate</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> N52.9 — Male erectile dysfunction, unspecified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Erectile Dysfunction Care</h2>
                  <ul>
                    <li>Fast evaluation and treatment plan</li>
                    <li>Safety screening before any prescription</li>
                    <li>Guideline-based medication choices</li>
                    <li>e-Prescription to your pharmacy</li>
                    <li>Follow-up guidance and red-flag instructions</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. If you have severe symptoms, difficulty breathing, chest pain, high fever, or rapidly worsening condition, seek urgent in-person or emergency care immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `Erectile dysfunction affects approximately 30 million American men and is one of the most treatable conditions in adult male health. PDE5 inhibitors (sildenafil, tadalafil) are first-line therapy per AUA guidelines, with high response rates in men without contraindications. TeleDirectMD screens for cardiovascular contraindications and nitrate use before prescribing, providing same-day sildenafil or tadalafil prescriptions for $79.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; see the medication table below for GoodRx estimates. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow clinical guidelines from the CDC, AAFP, and relevant specialty societies. Every visit includes red-flag screening, a structured history, a treatment plan, and clear follow-up instructions.
            </p>
          </div>
        </section>

        {/* ─── 3) ELIGIBILITY CHECKLIST ─────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Erectile Dysfunction Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Men 18+ in our 41 states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Persistent difficulty achieving or maintaining erection` }} />
              <li dangerouslySetInnerHTML={{ __html: `No nitrate use` }} />
              <li dangerouslySetInnerHTML={{ __html: `No recent (&lt;6 month) heart attack or stroke` }} />
              <li dangerouslySetInnerHTML={{ __html: `No severe heart failure (NYHA III–IV)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want generic sildenafil or tadalafil prescription` }} />
              <li dangerouslySetInnerHTML={{ __html: `Comfortable with telehealth-based CV risk assessment` }} />
              <li dangerouslySetInnerHTML={{ __html: `Need same-day discreet prescription` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Currently using nitrates (any form) — absolute contraindication` }} />
              <li dangerouslySetInnerHTML={{ __html: `Heart attack, stroke, or unstable angina in past 6 months` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe heart failure (NYHA III–IV)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe hypotension or uncontrolled hypertension` }} />
              <li dangerouslySetInnerHTML={{ __html: `Suspected Peyronie's disease — urology referral` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe liver disease (Child-Pugh C)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Concurrent ritonavir or other strong CYP3A4 inhibitor without dose adjustment` }} />
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If you have red-flag symptoms, seek urgent in-person or emergency care immediately. TeleDirectMD is not appropriate for severe or complex cases.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-how-it-works`}>
          <div className="tdmd-container">
            <h2>How Erectile Dysfunction Treatment Works Online</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book your $79 video visit</h3>
                  <p>No insurance required. No referral needed. Many visits available same day in 41 states. Have your symptom timeline and current medication list ready.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>See a board-certified MD by secure video</h3>
                  <p>The physician takes a structured medical history, performs a targeted virtual exam, screens for red flags, and applies current clinical guidelines. If in-person care is needed, you&apos;ll be redirected at no charge.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Get your treatment plan and, if appropriate, a prescription</h3>
                  <p>If medication is clinically appropriate, an e-prescription is sent to your chosen pharmacy during or after the visit. Clear follow-up instructions and red-flag criteria are provided regardless of treatment choice.</p>
                  <div className="tdmd-decision-cta">
                    <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5) DIFFERENTIAL DIAGNOSIS ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-differentials`}>
          <div className="tdmd-container">
            <h2>What Causes Erectile Dysfunction? Differential Diagnosis</h2>
            <p>Not all erectile dysfunction is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Erectile Dysfunction differential diagnosis">
                <thead>
                  <tr>
                    <th>Condition</th>
                    <th>Description</th>
                    <th>Prevalence</th>
                    <th>Key Features</th>
                    <th>Next Step</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Vasculogenic ED` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Endothelial dysfunction reducing penile blood flow.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~70% of ED cases` }} />
                <td dangerouslySetInnerHTML={{ __html: `Gradual onset over months-years, age &gt;40, CV risk factors, normal libido` }} />
                <td dangerouslySetInnerHTML={{ __html: `PDE5 inhibitor + CV risk reduction` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Psychogenic ED` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Performance anxiety, depression, relationship stress.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~20% of cases (more common &lt;40)` }} />
                <td dangerouslySetInnerHTML={{ __html: `Sudden onset, situational (good with masturbation, poor with partner), preserved morning erections` }} />
                <td dangerouslySetInnerHTML={{ __html: `PDE5 trial + counseling/CBT; treat depression if present` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Hypogonadism (low testosterone)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Insufficient testosterone production.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~5–10% of ED cases` }} />
                <td dangerouslySetInnerHTML={{ __html: `Low libido, fatigue, mood changes, reduced muscle mass` }} />
                <td dangerouslySetInnerHTML={{ __html: `Morning total testosterone × 2; if low, endocrine workup` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Medication-induced ED` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Side effect from antidepressants, beta-blockers, finasteride, antihistamines.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~25% of men on multiple meds` }} />
                <td dangerouslySetInnerHTML={{ __html: `Onset coincides with new medication start` }} />
                <td dangerouslySetInnerHTML={{ __html: `Review meds; substitute when possible (e.g., bupropion vs SSRI)` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Neurogenic ED` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Nerve damage from diabetes, prostate surgery, spinal cord injury, MS.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Variable` }} />
                <td dangerouslySetInnerHTML={{ __html: `Poor response to oral PDE5; numbness or other neuro symptoms` }} />
                <td dangerouslySetInnerHTML={{ __html: `Specialist (urology); intracavernosal injection or vacuum device` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Erectile Dysfunction Treatment Cost Comparison</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit — evaluation, treatment plan, and e-prescription included. The chart below shows how that compares to typical out-of-pocket costs at other settings. Prescription medication costs are separate.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Red-flag screening &amp;amp; structured triage</li>
                  <li>e-Prescription to your pharmacy (when appropriate)</li>
                  <li>Follow-up instructions &amp;amp; prevention guidance</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical Erectile Dysfunction cost comparison">
                <h3>Typical Erectile Dysfunction Visit Cost</h3>
                <p className="tdmd-price-caption">Typical out-of-pocket costs before insurance. Actual costs vary by location and plan. ER average per Mira Health 2025 data.</p>
                <div className="tdmd-vbars" role="list" aria-label="Cost comparison bars">
                  {COST_BARS.map((bar, i) => (
                    <div key={i} className="tdmd-vbar" role="listitem" aria-label={`${bar.name}: ${bar.value}`}>
                      <span className="tdmd-vbar__value">{bar.value}</span>
                      <div
                        className={`tdmd-vbar__fill${bar.isTdmd ? ' tdmd-vbar__fill--tdmd' : ''}`}
                        style={{ height: `${bar.heightPct}%` }}
                        aria-hidden="true"
                      />
                      <span className={`tdmd-vbar__label${bar.isTdmd ? ' tdmd-vbar__label--tdmd' : ''}`}>{bar.name}</span>
                    </div>
                  ))}
                </div>
                <p className="tdmd-price-footnote">
                  TeleDirectMD $79 · Retail Clinic $139 · Urgent Care $200 · ER $2,715 avg.
                  Source: Mira Health cost benchmarks, Feb 2025. Actual costs vary by setting, location, and insurance.
                </p>
              </div>
            </div>

            <p style={{ marginTop: '1rem' }}>
              For more detail, see <a href="/what-we-treat">all conditions we treat</a> or view our <a href="/faq">FAQ page</a> for common billing questions. TeleDirectMD does not bill insurance for self-pay visits.
            </p>
          </div>
        </section>

        {/* ─── 7) MEDICATION TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Erectile Dysfunction Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for erectile dysfunction. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Erectile Dysfunction medication options">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx prices retrieved May 2026. Prescription costs are separate from the $79 TeleDirectMD visit fee. Actual pharmacy costs vary.
                </caption>
                <thead>
                  <tr>
                    <th>Medication</th>
                    <th>Form</th>
                    <th>Drug Class</th>
                    <th>Typical Dose</th>
                    <th>GoodRx Price</th>
                    <th>Key Considerations</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Sildenafil</strong> <span className="tdmd-sym__med-brand">(Viagra)</span></td>
                <td>Oral tablet</td>
                <td>PDE5 inhibitor</td>
                <td dangerouslySetInnerHTML={{ __html: `50 mg 30–60 min before sex; range 25–100 mg` }} />
                <td><a href="https://www.goodrx.com/sildenafil" target="_blank" rel="noopener">$5–$147</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, flushing, nasal congestion, blue-tinted vision; avoid with nitrates` }} />
              </tr>
              <tr>
                <td><strong>Tadalafil</strong> <span className="tdmd-sym__med-brand">(Cialis)</span></td>
                <td>Oral tablet</td>
                <td>PDE5 inhibitor</td>
                <td dangerouslySetInnerHTML={{ __html: `10 mg before sex (range 5–20 mg) OR 2.5–5 mg daily` }} />
                <td><a href="https://www.goodrx.com/sildenafil" target="_blank" rel="noopener">$5–$147</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, back pain, nasal congestion; avoid with nitrates` }} />
              </tr>
              <tr>
                <td><strong>Vardenafil</strong> <span className="tdmd-sym__med-brand">(Levitra)</span></td>
                <td>Oral tablet</td>
                <td>PDE5 inhibitor</td>
                <td dangerouslySetInnerHTML={{ __html: `10 mg 30–60 min before sex; range 5–20 mg` }} />
                <td><a href="https://www.goodrx.com/sildenafil" target="_blank" rel="noopener">$5–$147</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, flushing; avoid with QT-prolonging meds` }} />
              </tr>
              <tr>
                <td><strong>Avanafil</strong> <span className="tdmd-sym__med-brand">(Stendra)</span></td>
                <td>Oral tablet</td>
                <td>PDE5 inhibitor</td>
                <td dangerouslySetInnerHTML={{ __html: `100 mg 15 min before sex; range 50–200 mg` }} />
                <td><a href="https://www.goodrx.com/sildenafil" target="_blank" rel="noopener">$5–$147</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, flushing; faster onset, fewer visual changes` }} />
              </tr>
              <tr>
                <td><strong>Bupropion (if ED from SSRI)</strong> <span className="tdmd-sym__med-brand">(Wellbutrin)</span></td>
                <td>Oral tablet</td>
                <td>NDRI antidepressant</td>
                <td dangerouslySetInnerHTML={{ __html: `150 mg daily, may add to or replace SSRI` }} />
                <td><a href="https://www.goodrx.com/sildenafil" target="_blank" rel="noopener">$5–$147</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Insomnia, dry mouth; lowers seizure threshold` }} />
              </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> Do not start any prescription medication without a clinical evaluation. The appropriate choice depends on your individual history, allergies, comorbidities, and current medications — all assessed by the physician at your visit. TeleDirectMD does not prescribe controlled substances.
            </p>
          </div>
        </section>

        {/* ─── 8) RED FLAGS ────────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-red-flags`}>
          <div className="tdmd-container">
            <h2>Red Flags — When to Seek Emergency or Urgent In-Person Care</h2>
            <p>
              TeleDirectMD is not appropriate for severe or complex presentations. The following symptoms require immediate in-person or emergency evaluation. Do not use telehealth if any of the following apply:
            </p>
            <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert" style={{ marginTop: '0.75rem' }}>
              <h3>Seek Urgent / Emergency Care Immediately If</h3>
              <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Currently using nitrates</strong> (nitroglycerin) — PDE5 inhibitors absolutely contraindicated` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Recent heart attack, stroke, or unstable angina</strong> — needs cardiology clearance` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe heart failure</strong> — needs cardiology clearance` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Painful or curved erection</strong> — possible Peyronie's disease; urology referral` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Priapism history</strong> (erection &gt;4 hours) — needs urology` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Sudden vision or hearing loss</strong> on PDE5 — stop drug, ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe liver or kidney impairment</strong> — dose adjustment needed` }} />
              </ul>
            </div>
            <p style={{ marginTop: '1rem' }}>
              Call 911 or go to your nearest emergency room for any life-threatening symptoms. For non-emergency in-person needs, <a href="https://findahealthcenter.hrsa.gov/" rel="noopener" target="_blank">HRSA Health Center Finder</a> can locate a low-cost clinic near you.
            </p>
          </div>
        </section>

        {/* ─── 9) RECOVERY TIMELINE ────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-recovery`}>
          <div className="tdmd-container">
            <h2>What to Expect: Erectile Dysfunction Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Erectile Dysfunction recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>First dose</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Take on empty stomach 30–60 minutes before planned sex. Sexual stimulation still required for erection.` }} />
              </tr>
              <tr>
                <td><strong>After 4 attempts</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `If no benefit, dose may be doubled (e.g., 50→100 mg sildenafil). Most non-responders haven't tried optimal dose.` }} />
              </tr>
              <tr>
                <td><strong>After 8 attempts at max dose</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `If still no response, switch to a different PDE5 inhibitor — some men respond to one but not another.` }} />
              </tr>
              <tr>
                <td><strong>Month 2–3</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Lifestyle changes (exercise, weight loss, no smoking) compound the benefit of medication.` }} />
              </tr>
              <tr>
                <td><strong>Long-term</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Daily tadalafil is an option for spontaneity. Annual cardiovascular review recommended — ED predicts CV events.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Erectile Dysfunction</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Quit smoking — single highest-impact lifestyle change` }} />
              <li dangerouslySetInnerHTML={{ __html: `Aerobic exercise 150 minutes per week (improves erections in trials)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Mediterranean-style diet (vegetables, fish, olive oil)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Weight loss if BMI &gt;27 — every kg helps` }} />
              <li dangerouslySetInnerHTML={{ __html: `Limit alcohol to 1–2 drinks (more worsens ED)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Pelvic floor (Kegel) exercises — moderate evidence` }} />
              <li dangerouslySetInnerHTML={{ __html: `Sleep 7–9 hours nightly; treat sleep apnea if suspected` }} />
              <li dangerouslySetInnerHTML={{ __html: `Manage stress — performance anxiety is a major contributor` }} />
              <li dangerouslySetInnerHTML={{ __html: `Open communication with partner reduces psychogenic component` }} />
              <li dangerouslySetInnerHTML={{ __html: `Time medication with meals — avoid high-fat meal with sildenafil` }} />
            </ul>
          </div>
        </section>

        {/* ─── 11) CTA STRIP ────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-sym__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — adults 18+ in 41 states</p>
                <small>Self pay $79 &amp;middot; MD-only care &amp;middot; No ER wait &amp;middot; e-Prescription same day</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="/book-online" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 12) FAQ ACCORDION ───────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle={`Frequently Asked Questions — Erectile Dysfunction`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to see a board-certified MD?</h3>
                <p>Book a same-day video visit. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 13) RELATED CONDITIONS ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-conditions`}>
          <div className="tdmd-container">
            <h2>Related Conditions We Treat Online</h2>
            <p>These condition pages cover related symptoms or treatments that may be relevant to your erectile dysfunction visit.</p>
            <div className="tdmd-sym__sibling-grid">
              {RELATED_CONDITIONS.map((s) => (
                <a key={s.slug} className="tdmd-sym__sibling" href={s.slug}>
                  <span className="tdmd-sym__sibling-label">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 14) RELATED RESOURCE LINKS ─────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <div className="tdmd-sym__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/symptoms/">All Symptoms</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/book-online">Book Online</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/faq">FAQ</a>
              <a href="/insurance">Insurance</a>
            </div>
          </div>
        </section>

        {/* ─── 15) REFERENCES ──────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://www.auanet.org/guidelines-and-quality/guidelines/erectile-dysfunction-guideline" rel="noopener" target="_blank">AUA — Erectile Dysfunction Clinical Guideline (2018, amended 2022)</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2016/1001/p537.html" rel="noopener" target="_blank">AAFP — Erectile Dysfunction: Diagnosis and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sildenafil" rel="noopener" target="_blank">FDA DailyMed — Sildenafil</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tadalafil" rel="noopener" target="_blank">FDA DailyMed — Tadalafil</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/sildenafil" rel="noopener" target="_blank">GoodRx — Sildenafil Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Men's Health Resources</a>. Retrieved May 23, 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 16) MEDICAL DISCLAIMER ─────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>
              This page is for informational purposes only and is not a substitute for individualized medical advice, diagnosis, or treatment. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and documented. Treatment decisions are made by a board-certified physician based on the clinical history presented at the time of the visit.
            </p>
            <p>
              If you have red-flag or emergency symptoms, seek urgent in-person or emergency care immediately — do not use TeleDirectMD. The $79 visit fee covers the physician evaluation only; prescription medication costs are separate and vary by pharmacy. GoodRx price estimates are retrieved May 2026 and are subject to change. Insurance information on this page is current as of May 23, 2026; verify with your insurer before booking. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
