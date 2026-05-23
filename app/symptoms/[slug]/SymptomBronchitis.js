/**
 * SymptomBronchitis.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Bronchitis
 * Slug:    /symptoms/bronchitis/
 * ICD-10:  J40 — Bronchitis, not specified as acute or chronic
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/bronchitis/';
const PAGE_TITLE = `Bronchitis Symptoms: When a Chest Cold Needs a Doctor | TeleDirectMD`;
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
    generic: `Dextromethorphan`,
    brand: `Delsym, Robitussin DM`,
    form: `Oral liquid/tablet`,
    drugClass: `Centrally acting cough suppressant`,
    dose: `30 mg every 6–8 hours`,
    price: `$10–$15`,
    priceUrl: `https://www.goodrx.com/dextromethorphan`,
    priceLabel: `GoodRx`,
    sideEffects: `Drowsiness, dizziness; avoid with MAOIs/SSRIs at high doses`,
  },
  {
    generic: `Benzonatate`,
    brand: `Tessalon Perles`,
    form: `Oral capsule`,
    drugClass: `Peripheral cough suppressant`,
    dose: `100–200 mg three times daily`,
    price: `$7–$23`,
    priceUrl: `https://www.goodrx.com/benzonatate`,
    priceLabel: `GoodRx`,
    sideEffects: `Numbness if chewed (DO NOT chew); sedation`,
  },
  {
    generic: `Albuterol HFA`,
    brand: `ProAir, Ventolin`,
    form: `Metered-dose inhaler`,
    drugClass: `Short-acting beta-2 agonist`,
    dose: `2 puffs every 4–6 hours as needed`,
    price: `$19–$59`,
    priceUrl: `https://www.goodrx.com/albuterol`,
    priceLabel: `GoodRx`,
    sideEffects: `Tremor, jitteriness, tachycardia`,
  },
  {
    generic: `Prednisone`,
    brand: `Deltasone`,
    form: `Oral tablet`,
    drugClass: `Systemic corticosteroid`,
    dose: `40 mg daily × 5 days (asthma flare with bronchitis)`,
    price: `$6–$20`,
    priceUrl: `https://www.goodrx.com/prednisone`,
    priceLabel: `GoodRx`,
    sideEffects: `Insomnia, mood changes, blood-sugar elevation`,
  },
  {
    generic: `Azithromycin`,
    brand: `Zithromax`,
    form: `Oral tablet (Z-Pak)`,
    drugClass: `Macrolide antibiotic`,
    dose: `500 mg day 1, then 250 mg days 2–5 (only if pertussis suspected)`,
    price: `$6–$35`,
    priceUrl: `https://www.goodrx.com/azithromycin`,
    priceLabel: `GoodRx`,
    sideEffects: `GI upset, QT prolongation`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Do I need antibiotics for bronchitis?`,
    answerPlain: `For uncomplicated viral acute bronchitis, no. Cochrane meta-analyses and CDC guidance are clear: antibiotics offer minimal benefit (about a half-day shorter cough) and cause 24% more side effects. We follow stewardship — antibiotics are reserved for pertussis or pneumonia, not viral bronchitis.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `For uncomplicated viral acute bronchitis, no. Cochrane meta-analyses and CDC guidance are clear: antibiotics offer minimal benefit (about a half-day shorter cough) and cause 24% more side effects. We follow stewardship — antibiotics are reserved for pertussis or pneumonia, not viral bronchitis.` }} />
    ),
  },
  {
    question: `How long does bronchitis last?`,
    answerPlain: `Median cough duration is 18 days, and 25% of patients still cough at 4 weeks. Symptoms beyond 8 weeks are defined as chronic cough and warrant further workup.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Median cough duration is 18 days, and 25% of patients still cough at 4 weeks. Symptoms beyond 8 weeks are defined as chronic cough and warrant further workup.` }} />
    ),
  },
  {
    question: `How do I know if it\'s pneumonia instead?`,
    answerPlain: `Pneumonia red flags: high fever (>39°C lasting &gt;3 days), pleuritic chest pain, shortness of breath at rest, hypoxia (SpO2 <94%), confusion, or appearing very ill. If any of these, in-person evaluation with a chest X-ray is needed.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Pneumonia red flags: high fever (&gt;39°C lasting &gt;3 days), pleuritic chest pain, shortness of breath at rest, hypoxia (SpO2 &lt;94%), confusion, or appearing very ill. If any of these, in-person evaluation with a chest X-ray is needed.` }} />
    ),
  },
  {
    question: `Why is my mucus yellow/green if it\'s not bacterial?`,
    answerPlain: `Mucus color reflects white blood cells, not bacteria specifically. Both viral and bacterial respiratory infections produce yellow-green mucus. Color alone is not a reason to prescribe antibiotics.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Mucus color reflects white blood cells, not bacteria specifically. Both viral and bacterial respiratory infections produce yellow-green mucus. Color alone is not a reason to prescribe antibiotics.` }} />
    ),
  },
  {
    question: `Can a telehealth doctor prescribe an inhaler?`,
    answerPlain: `Yes — albuterol is a non-controlled medication. Dr. Bhavsar can prescribe an albuterol inhaler when wheeze, chest tightness, or asthma history are present. We can also start a short oral steroid course for asthma exacerbations.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — albuterol is a non-controlled medication. Dr. Bhavsar can prescribe an albuterol inhaler when wheeze, chest tightness, or asthma history are present. We can also start a short oral steroid course for asthma exacerbations.` }} />
    ),
  },
  {
    question: `What\'s the difference between bronchitis and a cold?`,
    answerPlain: `A cold is upper respiratory (runny nose, sore throat, sneezing). Bronchitis involves lower-airway inflammation — productive cough, chest tightness, soreness with coughing. A cold can progress into bronchitis as the virus moves down the airways.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A cold is upper respiratory (runny nose, sore throat, sneezing). Bronchitis involves lower-airway inflammation — productive cough, chest tightness, soreness with coughing. A cold can progress into bronchitis as the virus moves down the airways.` }} />
    ),
  },
  {
    question: `Should I get a chest X-ray?`,
    answerPlain: `Not for uncomplicated bronchitis. Indications for chest X-ray: high fever, abnormal vital signs, focal lung findings, hemoptysis, or cough >8 weeks. Your visit will tell you whether you meet criteria.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Not for uncomplicated bronchitis. Indications for chest X-ray: high fever, abnormal vital signs, focal lung findings, hemoptysis, or cough &gt;8 weeks. Your visit will tell you whether you meet criteria.` }} />
    ),
  },
  {
    question: `Can I exercise with bronchitis?`,
    answerPlain: `Mild low-impact exercise (walking) is fine if you have no fever and feel up to it. Avoid intense exertion and outdoor cold-air exercise while coughing — both worsen airway inflammation. Expect reduced exercise tolerance for 2–3 weeks.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Mild low-impact exercise (walking) is fine if you have no fever and feel up to it. Avoid intense exertion and outdoor cold-air exercise while coughing — both worsen airway inflammation. Expect reduced exercise tolerance for 2–3 weeks.` }} />
    ),
  },
  {
    question: `Is it safe to fly with bronchitis?`,
    answerPlain: `Yes, if you have no fever, no shortness of breath at rest, and SpO2 ≥94%. Stay hydrated and bring cough drops. If you have any wheeze or shortness of breath, get cleared first.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes, if you have no fever, no shortness of breath at rest, and SpO2 &ge;94%. Stay hydrated and bring cough drops. If you have any wheeze or shortness of breath, get cleared first.` }} />
    ),
  },
  {
    question: `What\'s chronic bronchitis vs. acute bronchitis?`,
    answerPlain: `Acute is the short illness most people mean (1–3 weeks of cough). Chronic bronchitis is a form of COPD: productive cough most days for 3+ months in 2 consecutive years, almost always linked to smoking. Chronic needs spirometry and ongoing care.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Acute is the short illness most people mean (1–3 weeks of cough). Chronic bronchitis is a form of COPD: productive cough most days for 3+ months in 2 consecutive years, almost always linked to smoking. Chronic needs spirometry and ongoing care.` }} />
    ),
  },
  {
    question: `Does smoking make bronchitis worse?`,
    answerPlain: `Yes — significantly. Smokers have longer, more severe symptoms, more secondary bacterial infection, and higher risk of progression to chronic bronchitis. Stop completely while symptomatic; this is also the highest-yield time to quit for good.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — significantly. Smokers have longer, more severe symptoms, more secondary bacterial infection, and higher risk of progression to chronic bronchitis. Stop completely while symptomatic; this is also the highest-yield time to quit for good.` }} />
    ),
  },
  {
    question: `Can I take cough syrup with my other medications?`,
    answerPlain: `Most over-the-counter cough syrups are safe but can interact with antidepressants (especially MAOIs and high-dose SSRIs with dextromethorphan), sedatives, and alcohol. Always tell us your full med list — we'll flag interactions.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most over-the-counter cough syrups are safe but can interact with antidepressants (especially MAOIs and high-dose SSRIs with dextromethorphan), sedatives, and alcohol. Always tell us your full med list — we'll flag interactions.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/asthma-refills-online/', label: 'Asthma Inhaler Refills Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/seasonal-allergies-treatment-online/', label: 'Seasonal Allergies Treatment Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Productive cough lasting 2–3 weeks with chest tightness is usually viral acute bronchitis — antibiotics rarely help. $79 telehealth visit rules out pneumonia and asthma flare.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Acute Bronchitis',
      alternateName: ['Acute Bronchitis', 'Chest Cold', 'Tracheobronchitis'],
      code: { '@type': 'MedicalCode', code: 'J40', codingSystem: 'ICD-10-CM' },
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
        '#sym-bronchitis-opening',
        '#sym-bronchitis-opening p',
        '.tdmd-sym__byline',
        '#sym-bronchitis-faq',
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
    name: `How to Get Bronchitis Treatment Online`,
    description: `Three steps to receive acute bronchitis evaluation and treatment from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select bronchitis on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/bronchitis/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews cough duration, sputum character, fever history, oxygen status, and screens for pneumonia red flags.`, url: `https://teledirectmd.com/symptoms/bronchitis/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your treatment plan`, text: `Inhaled bronchodilator, cough suppressant, or steroid prescribed as appropriate. Antibiotics only when bacterial infection is likely.`, url: `https://teledirectmd.com/symptoms/bronchitis/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Bronchitis`, item: PAGE_URL },
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
export default function SymptomBronchitis() {
  const schemas = buildSchemas();
  const pid = 'sym-bronchitis';

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
            <span aria-current="page">Bronchitis</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Chest Cold That Won't Quit — Bronchitis vs. Pneumonia` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Bronchitis — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Bronchitis is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J40 — Bronchitis, not specified as acute or chronic (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Bronchitis Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Acute bronchitis is an inflammatory condition of the large airways (trachea and bronchi) typically following a viral upper respiratory infection, causing a productive or dry cough lasting 1–3 weeks. Because 95%+ of cases are viral, antibiotics are <em>not</em> recommended per CDC and AAFP guidelines unless there is strong suspicion of bacterial pneumonia. TeleDirectMD evaluates and treats acute bronchitis for $79, prescribing bronchodilators and antitussives when appropriate.` }} />
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
            <h2>Bronchitis Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adults 18+ in our 41 states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Productive or dry cough 1–6 weeks` }} />
              <li dangerouslySetInnerHTML={{ __html: `No high fever, no severe shortness of breath` }} />
              <li dangerouslySetInnerHTML={{ __html: `Stable vital signs (if you can check them)` }} />
              <li dangerouslySetInnerHTML={{ __html: `No prior history of frequent pneumonia` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want guidance on whether antibiotics or in-person are needed` }} />
              <li dangerouslySetInnerHTML={{ __html: `Asthma history with current chest tightness needing assessment` }} />
              <li dangerouslySetInnerHTML={{ __html: `Need work/school note while symptomatic` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Severe shortness of breath at rest — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `SpO2 &lt;94% — in-person evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Hemoptysis (blood in sputum) — urgent in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Suspected pneumonia (high fever + chest pain + ill appearance) — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe immunocompromise — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cough &gt;8 weeks — needs in-person and possibly imaging` }} />
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
            <h2>How Bronchitis Treatment Works Online</h2>
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
            <h2>What Causes Bronchitis? Differential Diagnosis</h2>
            <p>Not all bronchitis is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Bronchitis differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Acute viral bronchitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Self-limited viral inflammation of large airways.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~95% of acute bronchitis cases` }} />
                <td dangerouslySetInnerHTML={{ __html: `Productive cough 1–3 weeks (median 18 days), low-grade fever early, chest soreness from coughing` }} />
                <td dangerouslySetInnerHTML={{ __html: `Symptom control (dextromethorphan, honey, fluids); no antibiotic` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Community-acquired pneumonia` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Bacterial or atypical infection of lung parenchyma.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~5% of patients with cough plus fever` }} />
                <td dangerouslySetInnerHTML={{ __html: `High fever, pleuritic chest pain, tachypnea, hypoxia, focal exam findings, ill appearance` }} />
                <td dangerouslySetInnerHTML={{ __html: `Chest X-ray; antibiotics (amoxicillin or doxycycline) — usually in-person` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Asthma exacerbation` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Reversible bronchoconstriction often triggered by viral URI.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common — accounts for many "bronchitis" presentations` }} />
                <td dangerouslySetInnerHTML={{ __html: `Wheeze, chest tightness, nighttime cough, history of asthma or atopy, response to albuterol` }} />
                <td dangerouslySetInnerHTML={{ __html: `Albuterol inhaler + 5-day oral prednisone if moderate-severe` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Pertussis (whooping cough)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Bordetella pertussis infection causing prolonged paroxysmal cough.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Underdiagnosed in adults — consider if cough &gt;2 weeks` }} />
                <td dangerouslySetInnerHTML={{ __html: `Paroxysms of coughing, post-tussive vomit, inspiratory whoop (often absent in adults)` }} />
                <td dangerouslySetInnerHTML={{ __html: `Macrolide antibiotic (azithromycin); public health reporting` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Post-infectious cough` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Persistent airway hyperreactivity after a viral URI.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Up to 25% of post-URI cases` }} />
                <td dangerouslySetInnerHTML={{ __html: `Dry, tickly cough lasting 3–8 weeks after a cold` }} />
                <td dangerouslySetInnerHTML={{ __html: `Inhaled steroid trial; cough suppressant; reassurance` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Bronchitis Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Bronchitis cost comparison">
                <h3>Typical Bronchitis Visit Cost</h3>
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
            <h2>Bronchitis Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for bronchitis. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Bronchitis medication options">
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
                <td><strong>Dextromethorphan</strong> <span className="tdmd-sym__med-brand">(Delsym, Robitussin DM)</span></td>
                <td>Oral liquid/tablet</td>
                <td>Centrally acting cough suppressant</td>
                <td dangerouslySetInnerHTML={{ __html: `30 mg every 6–8 hours` }} />
                <td><a href="https://www.goodrx.com/dextromethorphan" target="_blank" rel="noopener">$10–$15</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Drowsiness, dizziness; avoid with MAOIs/SSRIs at high doses` }} />
              </tr>
              <tr>
                <td><strong>Benzonatate</strong> <span className="tdmd-sym__med-brand">(Tessalon Perles)</span></td>
                <td>Oral capsule</td>
                <td>Peripheral cough suppressant</td>
                <td dangerouslySetInnerHTML={{ __html: `100–200 mg three times daily` }} />
                <td><a href="https://www.goodrx.com/benzonatate" target="_blank" rel="noopener">$7–$23</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Numbness if chewed (DO NOT chew); sedation` }} />
              </tr>
              <tr>
                <td><strong>Albuterol HFA</strong> <span className="tdmd-sym__med-brand">(ProAir, Ventolin)</span></td>
                <td>Metered-dose inhaler</td>
                <td>Short-acting beta-2 agonist</td>
                <td dangerouslySetInnerHTML={{ __html: `2 puffs every 4–6 hours as needed` }} />
                <td><a href="https://www.goodrx.com/albuterol" target="_blank" rel="noopener">$19–$59</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Tremor, jitteriness, tachycardia` }} />
              </tr>
              <tr>
                <td><strong>Prednisone</strong> <span className="tdmd-sym__med-brand">(Deltasone)</span></td>
                <td>Oral tablet</td>
                <td>Systemic corticosteroid</td>
                <td dangerouslySetInnerHTML={{ __html: `40 mg daily × 5 days (asthma flare with bronchitis)` }} />
                <td><a href="https://www.goodrx.com/prednisone" target="_blank" rel="noopener">$6–$20</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Insomnia, mood changes, blood-sugar elevation` }} />
              </tr>
              <tr>
                <td><strong>Azithromycin</strong> <span className="tdmd-sym__med-brand">(Zithromax)</span></td>
                <td>Oral tablet (Z-Pak)</td>
                <td>Macrolide antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg day 1, then 250 mg days 2–5 (only if pertussis suspected)` }} />
                <td><a href="https://www.goodrx.com/azithromycin" target="_blank" rel="noopener">$6–$35</a></td>
                <td dangerouslySetInnerHTML={{ __html: `GI upset, QT prolongation` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Shortness of breath at rest</strong> or SpO2 &lt;94% — possible pneumonia or PE` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Chest pain with breathing</strong> (pleuritic) — possible pneumonia/PE` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Coughing up blood</strong> — needs in-person evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>High fever &gt;39°C lasting &gt;3 days</strong> — possible pneumonia` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Confusion or new lethargy</strong> — sepsis risk` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Cough &gt;8 weeks</strong> — chronic cough workup needed` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Unilateral leg swelling with cough</strong> — rule out PE in ER` }} />
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
            <h2>What to Expect: Bronchitis Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Bronchitis recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Week 1</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Symptoms often peak — cough may worsen briefly. Fever should resolve within 3–5 days.` }} />
              </tr>
              <tr>
                <td><strong>Week 2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Cough beginning to improve. Sputum clearer. Energy returning.` }} />
              </tr>
              <tr>
                <td><strong>Week 3</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Cough largely resolved in 75% of patients. Some residual tickly cough is normal.` }} />
              </tr>
              <tr>
                <td><strong>Week 4–6</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Up to 25% have post-infectious cough this long — usually responds to short inhaled-steroid trial.` }} />
              </tr>
              <tr>
                <td><strong>Beyond 8 weeks</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Defined as chronic cough — needs further workup (chest X-ray, asthma evaluation, GERD assessment).` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Bronchitis</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Hydrate aggressively — 2–3 liters water daily thins mucus` }} />
              <li dangerouslySetInnerHTML={{ __html: `Honey 1–2 teaspoons at bedtime (adults and children &gt;1 year)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cool-mist humidifier in bedroom (clean weekly to prevent mold)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Steam inhalation from hot showers 2× daily` }} />
              <li dangerouslySetInnerHTML={{ __html: `Sleep with head elevated to reduce nighttime cough` }} />
              <li dangerouslySetInnerHTML={{ __html: `Stop smoking and avoid all secondhand smoke — single biggest factor` }} />
              <li dangerouslySetInnerHTML={{ __html: `Throat lozenges with menthol to soothe cough reflex` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid cold air exposure and exercise outdoors in cold weather while symptomatic` }} />
              <li dangerouslySetInnerHTML={{ __html: `Take ibuprofen for chest-wall soreness from coughing` }} />
              <li dangerouslySetInnerHTML={{ __html: `Limit alcohol — dehydrates and worsens cough` }} />
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
              sectionTitle={`Frequently Asked Questions — Bronchitis`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your bronchitis visit.</p>
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
              <li><a href="https://www.cdc.gov/antibiotic-use/clinicians/acute-bronchitis.html" rel="noopener" target="_blank">CDC — Acute Bronchitis Antibiotic Guidance</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2016/1001/p560.html" rel="noopener" target="_blank">AAFP — Acute Bronchitis: Diagnosis and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://journal.chestnet.org/article/S0012-3692(17)33126-5/fulltext" rel="noopener" target="_blank">CHEST — Cough Guidelines</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=albuterol+hfa" rel="noopener" target="_blank">FDA DailyMed — Albuterol HFA</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/albuterol" rel="noopener" target="_blank">GoodRx — Albuterol Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Respiratory Conditions in Family Medicine</a>. Retrieved May 23, 2026.</li>
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
