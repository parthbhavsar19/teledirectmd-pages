/**
 * SymptomPersistentCough.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Cough That Won't Go Away
 * Slug:    /symptoms/persistent-cough/
 * ICD-10:  R05.9 — Cough, unspecified
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/persistent-cough/';
const PAGE_TITLE = `Cough That Won't Go Away — Causes, When to See a Doctor | TeleDirectMD`;
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
    generic: `albuterol HFA`,
    brand: `ProAir, Ventolin, Proventil`,
    form: `metered-dose inhaler`,
    drugClass: `short-acting beta-2 agonist`,
    dose: `2 puffs every 4–6h PRN`,
    price: `$19–$81`,
    priceUrl: `https://www.goodrx.com/albuterol`,
    priceLabel: `GoodRx`,
    sideEffects: `Tremor, jitteriness, transient tachycardia.`,
  },
  {
    generic: `fluticasone HFA`,
    brand: `Flovent, Arnuity`,
    form: `metered-dose inhaler`,
    drugClass: `inhaled corticosteroid`,
    dose: `110 mcg 2 puffs BID`,
    price: `$11–$36`,
    priceUrl: `https://www.goodrx.com/fluticasone-propionate-hfa`,
    priceLabel: `GoodRx`,
    sideEffects: `Hoarseness, oral thrush — rinse mouth after use.`,
  },
  {
    generic: `omeprazole`,
    brand: `Prilosec`,
    form: `oral capsule`,
    drugClass: `proton-pump inhibitor`,
    dose: `20 mg BID before meals × 8 weeks`,
    price: `$4–$22`,
    priceUrl: `https://www.goodrx.com/omeprazole`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, abdominal pain; long-term: B12 deficiency, increased fracture risk.`,
  },
  {
    generic: `benzonatate`,
    brand: `Tessalon Perles`,
    form: `oral capsule`,
    drugClass: `peripheral antitussive`,
    dose: `100–200 mg three times daily`,
    price: `$9–$79`,
    priceUrl: `https://www.goodrx.com/benzonatate`,
    priceLabel: `GoodRx`,
    sideEffects: `Drowsiness, dizziness; do not chew (severe oropharyngeal numbness).`,
  },
  {
    generic: `fluticasone nasal`,
    brand: `Flonase`,
    form: `nasal spray`,
    drugClass: `intranasal corticosteroid`,
    dose: `2 sprays each nostril daily`,
    price: `$8–$15 OTC`,
    priceUrl: null,
    priceLabel: ``,
    sideEffects: `Nasal dryness, occasional epistaxis.`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `How long does a normal post-cold cough last?`,
    answerPlain: `Most viral coughs resolve in 7–10 days. A cough lasting 3–8 weeks is called subacute and is usually post-infectious — your airways are still hyperreactive after the virus cleared. Cough beyond 8 weeks is chronic and warrants a structured workup.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most viral coughs resolve in 7–10 days. A cough lasting 3–8 weeks is called subacute and is usually post-infectious — your airways are still hyperreactive after the virus cleared. Cough beyond 8 weeks is chronic and warrants a structured workup.` }} />
    ),
  },
  {
    question: `Is a cough that lasts 3 weeks dangerous?`,
    answerPlain: `Not usually. Most subacute cough (3–8 weeks) is post-infectious and resolves on its own or with a short inhaled-bronchodilator course. Cough lasting more than 8 weeks, or with red flags like blood, weight loss, or shortness of breath, warrants imaging and in-person evaluation.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Not usually. Most subacute cough (3–8 weeks) is post-infectious and resolves on its own or with a short inhaled-bronchodilator course. Cough lasting more than 8 weeks, or with red flags like blood, weight loss, or shortness of breath, warrants imaging and in-person evaluation.` }} />
    ),
  },
  {
    question: `Can a doctor prescribe an inhaler online for cough?`,
    answerPlain: `Yes. TeleDirectMD can prescribe albuterol or fluticasone-based inhalers for post-infectious or cough-variant asthma after a focused video visit. Generic albuterol HFA runs (see medication table); generic fluticasone HFA runs $50–$70.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes. TeleDirectMD can prescribe albuterol or fluticasone-based inhalers for post-infectious or cough-variant asthma after a focused video visit. Generic albuterol HFA runs (see medication table); generic fluticasone HFA runs $50–$70.` }} />
    ),
  },
  {
    question: `Do I need a chest X-ray for a chronic cough?`,
    answerPlain: `Not always. For typical post-infectious cough without red flags, treatment can begin without imaging. A chest X-ray is recommended if you have hemoptysis, weight loss, smoking history with new cough, fever, or symptoms persisting beyond 8 weeks despite empiric therapy.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Not always. For typical post-infectious cough without red flags, treatment can begin without imaging. A chest X-ray is recommended if you have hemoptysis, weight loss, smoking history with new cough, fever, or symptoms persisting beyond 8 weeks despite empiric therapy.` }} />
    ),
  },
  {
    question: `Can GERD really cause a chronic cough?`,
    answerPlain: `Yes — reflux cough is one of the four most common causes of chronic cough in adults per AAFP guidance, accounting for roughly 20% of cases. It is often worse at night or after meals; heartburn is not always present. Treatment is twice-daily omeprazole for 8 weeks plus lifestyle changes.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — reflux cough is one of the four most common causes of chronic cough in adults per AAFP guidance, accounting for roughly 20% of cases. It is often worse at night or after meals; heartburn is not always present. Treatment is twice-daily omeprazole for 8 weeks plus lifestyle changes.` }} />
    ),
  },
  {
    question: `Does TeleDirectMD treat asthma-related cough?`,
    answerPlain: `Yes. Asthma and cough-variant asthma are within scope. Albuterol prescriptions, inhaled steroid trials, and step-up therapy are all available through a $79 video visit. Patients with frequent exacerbations or hospitalizations need in-person pulmonology.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes. Asthma and cough-variant asthma are within scope. Albuterol prescriptions, inhaled steroid trials, and step-up therapy are all available through a $79 video visit. Patients with frequent exacerbations or hospitalizations need in-person pulmonology.` }} />
    ),
  },
  {
    question: `When should I go to the ER for a cough?`,
    answerPlain: `Go to the ER if you are coughing up blood (more than streaks), have severe shortness of breath at rest, chest pain, fever above 102°F lasting 3+ days, blue lips or fingertips, or feel unable to speak full sentences. These suggest pneumonia, pulmonary embolism, or pneumothorax.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Go to the ER if you are coughing up blood (more than streaks), have severe shortness of breath at rest, chest pain, fever above 102°F lasting 3+ days, blue lips or fingertips, or feel unable to speak full sentences. These suggest pneumonia, pulmonary embolism, or pneumothorax.` }} />
    ),
  },
  {
    question: `Could my blood-pressure medication be causing the cough?`,
    answerPlain: `Yes — 5–35% of patients on an ACE inhibitor (lisinopril, enalapril, ramipril, benazepril) develop a dry persistent cough that resolves 1–4 weeks after switching to an ARB like losartan or valsartan. Always discuss with your prescribing clinician before stopping any BP medication.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — 5–35% of patients on an ACE inhibitor (lisinopril, enalapril, ramipril, benazepril) develop a dry persistent cough that resolves 1–4 weeks after switching to an ARB like losartan or valsartan. Always discuss with your prescribing clinician before stopping any BP medication.` }} />
    ),
  },
  {
    question: `How much does a chronic cough visit cost without insurance?`,
    answerPlain: `$79 flat at TeleDirectMD. Compare to $150–$280 cash-pay urgent care or roughly $2,715 average uninsured ER visit per Mira Health 2025 data. Inhaler costs vary by formulation; see medication table.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `$79 flat at TeleDirectMD. Compare to $150–$280 cash-pay urgent care or roughly $2,715 average uninsured ER visit per Mira Health 2025 data. Inhaler costs vary by formulation; see medication table.` }} />
    ),
  },
  {
    question: `Can vaping cause a chronic cough?`,
    answerPlain: `Yes. Vaping causes airway inflammation and bronchitis-like cough; it is a leading reversible cause of chronic cough in adults under 40. EVALI (e-cigarette / vaping-associated lung injury) is a more serious form requiring in-person workup.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes. Vaping causes airway inflammation and bronchitis-like cough; it is a leading reversible cause of chronic cough in adults under 40. EVALI (e-cigarette / vaping-associated lung injury) is a more serious form requiring in-person workup.` }} />
    ),
  },
  {
    question: `Is bronchitis contagious?`,
    answerPlain: `Acute viral bronchitis is contagious for the first 7–10 days, mostly through respiratory droplets. Chronic bronchitis (smoker's cough or COPD-related) is not contagious. The visit will distinguish between them based on symptom timeline and exposure history.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Acute viral bronchitis is contagious for the first 7–10 days, mostly through respiratory droplets. Chronic bronchitis (smoker's cough or COPD-related) is not contagious. The visit will distinguish between them based on symptom timeline and exposure history.` }} />
    ),
  },
  {
    question: `Will a Z-Pak (azithromycin) help my cough?`,
    answerPlain: `Usually not. Most acute cough is viral, and antibiotics are not indicated. AAFP and CDC guidance specifically discourage routine antibiotic use for acute bronchitis. Prescribing antibiotics for a viral cough drives resistance and offers no benefit.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Usually not. Most acute cough is viral, and antibiotics are not indicated. AAFP and CDC guidance specifically discourage routine antibiotic use for acute bronchitis. Prescribing antibiotics for a viral cough drives resistance and offers no benefit.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/asthma-refills-online/', label: 'Asthma Inhaler Refills Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/seasonal-allergies-treatment-online/', label: 'Seasonal Allergies Treatment Online' },
  { slug: '/acid-reflux-refills-online/', label: 'Acid Reflux Refills Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `A cough lasting 3+ weeks is most often post-infectious bronchitis, asthma, GERD, or postnasal drip. $79 telehealth visit; same-day evaluation in 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Subacute / Chronic Cough',
      alternateName: ['Subacute Cough', 'Chronic Cough', 'Post-Viral Cough'],
      code: { '@type': 'MedicalCode', code: 'R05.9', codingSystem: 'ICD-10-CM' },
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
        '#sym-cough-opening',
        '#sym-cough-opening p',
        '.tdmd-sym__byline',
        '#sym-cough-faq',
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
    name: `How to Get Chronic Cough Treatment Online`,
    description: `Three steps to receive subacute cough evaluation and treatment from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select persistent cough on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/persistent-cough/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews cough duration, triggers, medications, and red flags such as hemoptysis or weight loss.`, url: `https://teledirectmd.com/symptoms/persistent-cough/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your treatment plan`, text: `Inhaler, PPI, nasal steroid, or other targeted treatment prescribed based on cough type.`, url: `https://teledirectmd.com/symptoms/persistent-cough/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Cough That Won't Go Away`, item: PAGE_URL },
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
export default function SymptomPersistentCough() {
  const schemas = buildSchemas();
  const pid = 'sym-cough';

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
            <span aria-current="page">Cough That Won't Go Away</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Cough That Won't Go Away — A Family Doctor's Guide to What It Usually Means` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Cough That Won't Go Away — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Cough That Won't Go Away is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> R05.9 — Cough, unspecified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Cough That Won't Go Away Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `A cough lasting 3 or more weeks without improvement is most often <strong>post-infectious bronchitis</strong>, <strong>cough-variant asthma</strong>, <strong>GERD with reflux cough</strong>, or <strong>upper-airway cough syndrome (postnasal drip)</strong> — the four causes accounting for the vast majority of subacute and chronic cough in adult non-smokers per AAFP guidance. A $79 TeleDirectMD video visit distinguishes among them in 10–15 minutes and provides a same-day prescription.` }} />
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
            <h2>Cough That Won't Go Away Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `You are 18 or older and located in one of TeleDirectMD's 41 licensed states at the time of the visit` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cough has lasted 3 weeks or longer without improvement` }} />
              <li dangerouslySetInnerHTML={{ __html: `No hemoptysis (more than streaks)` }} />
              <li dangerouslySetInnerHTML={{ __html: `No severe shortness of breath at rest` }} />
              <li dangerouslySetInnerHTML={{ __html: `No chest pain with the cough` }} />
              <li dangerouslySetInnerHTML={{ __html: `No fever above 102°F lasting more than 3 days` }} />
              <li dangerouslySetInnerHTML={{ __html: `No unintentional weight loss` }} />
              <li dangerouslySetInnerHTML={{ __html: `You can identify the rough timeline of when the cough started and what triggers it` }} />
              <li dangerouslySetInnerHTML={{ __html: `You have a pharmacy where a prescription can be sent` }} />
              <li dangerouslySetInnerHTML={{ __html: `You are not currently using oxygen or have an existing diagnosis of severe COPD with frequent exacerbations` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Coughing up frank blood — needs imaging and possibly bronchoscopy` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cough with severe shortness of breath at rest — emergency or in-person evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Suspected pneumonia (high fever, focal lung exam, hypoxia)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Children under 18 — pediatric cough warrants in-person evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Active or recent TB exposure — public-health workup required` }} />
              <li dangerouslySetInnerHTML={{ __html: `Chronic cough in a smoker over 50 with weight loss — needs imaging first` }} />
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
            <h2>How Cough That Won't Go Away Treatment Works Online</h2>
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
            <h2>What Causes Cough That Won't Go Away? Differential Diagnosis</h2>
            <p>Not all cough that won't go away is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cough That Won't Go Away differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Post-infectious / acute bronchitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Cough lasting 3–8 weeks following a viral URI. Airways remain inflamed and hyperreactive. Resolves on its own or with a short inhaled bronchodilator course.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~30–40% of subacute cough` }} />
                <td dangerouslySetInnerHTML={{ __html: `Recent cold or flu; cough mostly dry or with scant clear sputum; no fever; no wheezing at rest.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — empiric bronchodilator trial appropriate.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Asthma / cough-variant asthma` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Hyperreactive airways causing cough as the primary symptom. Often nocturnal or exercise-triggered. Cough-variant asthma can present with no audible wheeze.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~25% of chronic cough` }} />
                <td dangerouslySetInnerHTML={{ __html: `Worse at night, after exercise, or in cold air; family history of atopy; symptom relief with albuterol.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — empiric inhaled corticosteroid + bronchodilator trial; spirometry if uncertain.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `GERD / reflux cough` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Acid reflux irritates the larynx and triggers a vagal cough reflex. Often worse lying flat or after meals; heartburn is not always present.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~20% of chronic cough` }} />
                <td dangerouslySetInnerHTML={{ __html: `Worse at night or after meals; dry cough; throat clearing; sour taste; hoarseness.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — empiric PPI trial (8 weeks) ± lifestyle change.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Upper-airway cough syndrome (postnasal drip)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Mucus dripping from the nose and sinuses into the throat triggers a chronic clearing-cough. Driven by allergic rhinitis or chronic sinusitis.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~20% of chronic cough` }} />
                <td dangerouslySetInnerHTML={{ __html: `Throat clearing; sensation of mucus in throat; nasal congestion; cough worse on waking.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — intranasal corticosteroid ± oral antihistamine.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `ACE-inhibitor cough` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `A dry, persistent, tickling cough that develops within weeks to months of starting an ACE inhibitor. Resolves 1–4 weeks after switching to an ARB.` }} />
                <td dangerouslySetInnerHTML={{ __html: `5–35% of ACE-inhibitor users` }} />
                <td dangerouslySetInnerHTML={{ __html: `Dry cough; on lisinopril, enalapril, ramipril, or benazepril; no other respiratory symptoms.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — switch to ARB (losartan, valsartan).` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Cough That Won't Go Away Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Cough That Won't Go Away cost comparison">
                <h3>Typical Cough That Won't Go Away Visit Cost</h3>
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
            <h2>Cough That Won't Go Away Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for cough that won't go away. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cough That Won't Go Away medication options">
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
                <td><strong>albuterol HFA</strong> <span className="tdmd-sym__med-brand">(ProAir, Ventolin, Proventil)</span></td>
                <td>metered-dose inhaler</td>
                <td>short-acting beta-2 agonist</td>
                <td dangerouslySetInnerHTML={{ __html: `2 puffs every 4–6h PRN` }} />
                <td><a href="https://www.goodrx.com/albuterol" target="_blank" rel="noopener">$19–$81</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Tremor, jitteriness, transient tachycardia.` }} />
              </tr>
              <tr>
                <td><strong>fluticasone HFA</strong> <span className="tdmd-sym__med-brand">(Flovent, Arnuity)</span></td>
                <td>metered-dose inhaler</td>
                <td>inhaled corticosteroid</td>
                <td dangerouslySetInnerHTML={{ __html: `110 mcg 2 puffs BID` }} />
                <td><a href="https://www.goodrx.com/fluticasone-propionate-hfa" target="_blank" rel="noopener">$11–$36</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Hoarseness, oral thrush — rinse mouth after use.` }} />
              </tr>
              <tr>
                <td><strong>omeprazole</strong> <span className="tdmd-sym__med-brand">(Prilosec)</span></td>
                <td>oral capsule</td>
                <td>proton-pump inhibitor</td>
                <td dangerouslySetInnerHTML={{ __html: `20 mg BID before meals × 8 weeks` }} />
                <td><a href="https://www.goodrx.com/omeprazole" target="_blank" rel="noopener">$4–$22</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, abdominal pain; long-term: B12 deficiency, increased fracture risk.` }} />
              </tr>
              <tr>
                <td><strong>benzonatate</strong> <span className="tdmd-sym__med-brand">(Tessalon Perles)</span></td>
                <td>oral capsule</td>
                <td>peripheral antitussive</td>
                <td dangerouslySetInnerHTML={{ __html: `100–200 mg three times daily` }} />
                <td><a href="https://www.goodrx.com/benzonatate" target="_blank" rel="noopener">$9–$79</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Drowsiness, dizziness; do not chew (severe oropharyngeal numbness).` }} />
              </tr>
              <tr>
                <td><strong>fluticasone nasal</strong> <span className="tdmd-sym__med-brand">(Flonase)</span></td>
                <td>nasal spray</td>
                <td>intranasal corticosteroid</td>
                <td dangerouslySetInnerHTML={{ __html: `2 sprays each nostril daily` }} />
                <td>$8–$15 OTC</td>
                <td dangerouslySetInnerHTML={{ __html: `Nasal dryness, occasional epistaxis.` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `Coughing up blood — more than streaks of blood-tinged sputum (hemoptysis warrants imaging)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe shortness of breath at rest or sudden new shortness of breath` }} />
              <li dangerouslySetInnerHTML={{ __html: `Chest pain or pressure with the cough — suggests cardiac, pulmonary embolism, or pneumothorax` }} />
              <li dangerouslySetInnerHTML={{ __html: `Fever ≥ 102°F (38.9°C) lasting more than 3 days` }} />
              <li dangerouslySetInnerHTML={{ __html: `Unintentional weight loss of more than 10 lb (4.5 kg) over 6 months alongside cough` }} />
              <li dangerouslySetInnerHTML={{ __html: `Drenching night sweats` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cough in a smoker over 50 with a change in cough character or new hemoptysis` }} />
              <li dangerouslySetInnerHTML={{ __html: `Travel from or contact with a TB-endemic area + cough &gt; 3 weeks` }} />
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
            <h2>What to Expect: Cough That Won't Go Away Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cough That Won't Go Away recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Days 1–3 of treatment</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Symptom improvement is uncommon this early. Bronchodilators may give immediate relief if cough-variant asthma is the cause. PPIs and inhaled steroids do not produce noticeable change yet.` }} />
              </tr>
              <tr>
                <td><strong>Week 1–2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Post-infectious cough often improves significantly with bronchodilator therapy. Inhaled steroids start showing benefit. PPI-treated reflux cough may show early reduction in throat clearing.` }} />
              </tr>
              <tr>
                <td><strong>Week 3–4</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Most post-infectious cough has resolved. Asthma-related cough markedly improved on inhaled steroid. Reflux cough showing 30–50% reduction.` }} />
              </tr>
              <tr>
                <td><strong>Week 6–8</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `PPI reflux cough should be 70%+ improved. Persistent cough at this point requires re-evaluation, spirometry, or imaging.` }} />
              </tr>
              <tr>
                <td><strong>Beyond 8 weeks</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Chronic cough that has not responded to empiric trials needs in-person workup with chest X-ray, spirometry, possibly chest CT or referral to pulmonology, ENT, or GI.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Cough That Won't Go Away</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Stay well hydrated — aim for 8 cups of water daily. Hydration thins respiratory secretions.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Honey 1–2 teaspoons at bedtime has small-trial evidence for nighttime cough relief in adults per Cochrane reviews. Do not give honey to children under 1.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Run a cool-mist humidifier in the bedroom at night.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid known triggers: smoke, vaping, perfumes, cold air, dusty environments.` }} />
              <li dangerouslySetInnerHTML={{ __html: `For nocturnal cough, elevate the head of the bed 6 inches with risers (better than pillow stacking — reduces reflux).` }} />
              <li dangerouslySetInnerHTML={{ __html: `For postnasal drip: saline nasal rinses twice daily (Neti pot or NeilMed sinus rinse with distilled water).` }} />
              <li dangerouslySetInnerHTML={{ __html: `Salt-water gargles 3–4 times daily soothe a cough-irritated throat.` }} />
              <li dangerouslySetInnerHTML={{ __html: `If you have asthma, identify and remove indoor allergen exposures (dust mites, pet dander, mold).` }} />
              <li dangerouslySetInnerHTML={{ __html: `For reflux: avoid eating within 3 hours of bedtime, lose 5–10% body weight if relevant, limit alcohol, caffeine, chocolate, mint, and high-fat meals.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Stop smoking and vaping. The single highest-yield intervention for any chronic cough.` }} />
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
              sectionTitle={`Frequently Asked Questions — Cough That Won't Go Away`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your cough that won't go away visit.</p>
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
              <li><a href="https://www.aafp.org/pubs/afp/issues/2017/1101/p575.html" rel="noopener" target="_blank">AAFP — Evaluation of Subacute and Chronic Cough in Adults (2017)</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://journal.chestnet.org/article/S0012-3692(17)33126-5/fulltext" rel="noopener" target="_blank">CHEST — Cough Guidelines (2018)</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/antibiotic-use/clinicians/acute-bronchitis.html" rel="noopener" target="_blank">CDC — Acute Bronchitis Treatment Guidance</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.nhlbi.nih.gov/health-topics/asthma" rel="noopener" target="_blank">NHLBI — Asthma Management Guidelines</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/albuterol" rel="noopener" target="_blank">GoodRx — Albuterol Inhaler Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=benzonatate" rel="noopener" target="_blank">FDA DailyMed — Benzonatate</a>. Retrieved May 23, 2026.</li>
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
