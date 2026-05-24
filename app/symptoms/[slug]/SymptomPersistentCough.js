/**
 * SymptomPersistentCough.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Persistent Cough
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
 *   • Literal < and > in JSX text escaped as &lt; &gt;
 *   • Medically reviewed by Parth Bhavsar, MD — Updated May 23, 2026
 *
 * Generated: 2026-05-23. DO NOT edit manually — regenerate from config.
 */

import FaqAccordion from '../../components/FaqAccordion';

// ─── Page constants ────────────────────────────────────────────────────────────
const PAGE_URL = 'https://teledirectmd.com/symptoms/persistent-cough/';
const PAGE_TITLE = `Persistent Cough — What Might Be Causing It and When to See a Doctor | TeleDirectMD`;
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
    generic: `benzonatate`,
    brand: `Tessalon Perles`,
    form: `Oral capsule`,
    drugClass: `Non-opioid antitussive`,
    dose: `100–200 mg PO TID as needed; do not chew or crush`,
    price: `$15–$40`,
    priceUrl: `https://www.goodrx.com/benzonatate`,
    priceLabel: `GoodRx`,
    sideEffects: `Sedation, dizziness; do not chew (risk of oral anesthesia and choking)`,
  },
  {
    generic: `fluticasone propionate nasal spray`,
    brand: `Flonase`,
    form: `Nasal spray`,
    drugClass: `Intranasal corticosteroid`,
    dose: `2 sprays per nostril once daily (for postnasal-drip-related cough)`,
    price: `$15–$40`,
    priceUrl: `https://www.goodrx.com/fluticasone-nasal`,
    priceLabel: `GoodRx`,
    sideEffects: `Nasal dryness, epistaxis; systemic absorption minimal at standard doses`,
  },
  {
    generic: `albuterol sulfate inhaler`,
    brand: `ProAir, Ventolin`,
    form: `Metered-dose inhaler`,
    drugClass: `Short-acting beta-2 agonist (SABA)`,
    dose: `2 puffs q4–6h as needed for cough-variant asthma`,
    price: `$30–$75`,
    priceUrl: `https://www.goodrx.com/albuterol`,
    priceLabel: `GoodRx`,
    sideEffects: `Tachycardia, tremor, hypokalemia at high doses`,
  },
  {
    generic: `omeprazole`,
    brand: `Prilosec`,
    form: `Oral delayed-release capsule`,
    drugClass: `Proton pump inhibitor`,
    dose: `20 mg PO once daily before breakfast × 8 weeks (for GERD-related cough)`,
    price: `$10–$30`,
    priceUrl: `https://www.goodrx.com/omeprazole`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, GI discomfort; long-term use: monitor for magnesium levels and C. diff risk`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `What could be causing a persistent cough?`,
    answerPlain: `A persistent cough lasting more than 3 weeks has three leading causes in non-smokers: postnasal drip (upper airway cough syndrome), cough-variant asthma, and gastroesophageal reflux disease (GERD) — together accounting for approximately 90% of cases per ACCP guidelines. Other causes include ACE inhibitor medication side effects, post-viral cough after a respiratory illness, chronic bronchitis (in smokers), pertussis (whooping cough), or less commonly, more serious lung conditions. A physician evaluation determines the most likely cause based on symptom character, timing, and associated features.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A persistent cough lasting more than 3 weeks has three leading causes in non-smokers: postnasal drip (upper airway cough syndrome), cough-variant asthma, and gastroesophageal reflux disease (GERD) — together accounting for approximately 90% of cases per ACCP guidelines. Other causes include ACE inhibitor medication side effects, post-viral cough after a respiratory illness, chronic bronchitis (in smokers), pertussis (whooping cough), or less commonly, more serious lung conditions. A physician evaluation determines the most likely cause based on symptom character, timing, and associated features.` }} />
    ),
  },
  {
    question: `When should I see a doctor for a persistent cough?`,
    answerPlain: `See a physician if a cough has persisted for more than 3 weeks, is disrupting sleep or daily activities, produces colored sputum (yellow, green, or blood-tinged), is accompanied by fever, or occurs in a current or former smoker. Per AAFP guidance, cough persisting beyond 8 weeks (chronic cough) requires systematic physician evaluation to identify and address the underlying cause. A $79 TeleDirectMD evaluation is appropriate for persistent cough without red-flag symptoms.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a physician if a cough has persisted for more than 3 weeks, is disrupting sleep or daily activities, produces colored sputum (yellow, green, or blood-tinged), is accompanied by fever, or occurs in a current or former smoker. Per AAFP guidance, cough persisting beyond 8 weeks (chronic cough) requires systematic physician evaluation to identify and address the underlying cause. A $79 TeleDirectMD evaluation is appropriate for persistent cough without red-flag symptoms.` }} />
    ),
  },
  {
    question: `When is a persistent cough an emergency?`,
    answerPlain: `Call 911 or go to the ER immediately if a cough is accompanied by: difficulty breathing or shortness of breath at rest, coughing up blood (hemoptysis) in significant quantity, chest pain, rapid heart rate, high fever (&gt;39°C / 102.2°F) with chills suggesting pneumonia, or cyanosis (bluish lip or fingertip color). These findings may indicate pulmonary embolism, pneumonia, or another serious cardiopulmonary condition requiring emergency evaluation.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Call 911 or go to the ER immediately if a cough is accompanied by: difficulty breathing or shortness of breath at rest, coughing up blood (hemoptysis) in significant quantity, chest pain, rapid heart rate, high fever (&gt;39°C / 102.2°F) with chills suggesting pneumonia, or cyanosis (bluish lip or fingertip color). These findings may indicate pulmonary embolism, pneumonia, or another serious cardiopulmonary condition requiring emergency evaluation.` }} />
    ),
  },
  {
    question: `How long is too long to have a cough before seeing a doctor?`,
    answerPlain: `A cough lasting more than 3 weeks (subacute cough) warrants physician evaluation to assess for post-infectious, allergic, or other causes. A cough lasting more than 8 weeks (chronic cough) by definition requires a thorough clinical evaluation. Per ACCP cough guidelines, most chronic coughs in non-smokers are caused by an identifiable and treatable condition — a physician evaluation with systematic assessment can identify the cause in the majority of cases.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A cough lasting more than 3 weeks (subacute cough) warrants physician evaluation to assess for post-infectious, allergic, or other causes. A cough lasting more than 8 weeks (chronic cough) by definition requires a thorough clinical evaluation. Per ACCP cough guidelines, most chronic coughs in non-smokers are caused by an identifiable and treatable condition — a physician evaluation with systematic assessment can identify the cause in the majority of cases.` }} />
    ),
  },
  {
    question: `Can a virtual doctor evaluate a persistent cough?`,
    answerPlain: `Yes — a physician can evaluate cough character (dry vs. productive), timing, triggers, associated symptoms, medication history, smoking history, and comorbidities via video visit to identify the most likely cause. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for conditions including cough-variant asthma, GERD, allergic rhinitis, and post-viral cough. TeleDirectMD provides $79 California video evaluations for adults 18+. Patients with hemoptysis, severe shortness of breath, or fever need in-person or emergency evaluation.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — a physician can evaluate cough character (dry vs. productive), timing, triggers, associated symptoms, medication history, smoking history, and comorbidities via video visit to identify the most likely cause. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for conditions including cough-variant asthma, GERD, allergic rhinitis, and post-viral cough. TeleDirectMD provides $79 California video evaluations for adults 18+. Patients with hemoptysis, severe shortness of breath, or fever need in-person or emergency evaluation.` }} />
    ),
  },
  {
    question: `What will the doctor do for a persistent cough at TeleDirectMD?`,
    answerPlain: `The physician evaluates cough duration, character (dry, productive, nocturnal, postprandial), triggers, associated symptoms (nasal drip, heartburn, wheezing), medication list (especially ACE inhibitors), smoking history, and prior respiratory conditions. Based on the evaluation, the physician may prescribe an intranasal corticosteroid (for postnasal drip), a PPI (for GERD-related cough), an inhaled bronchodilator or steroid (for cough-variant asthma), or an antitussive. A chest X-ray referral will be provided if structural pathology is suspected.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The physician evaluates cough duration, character (dry, productive, nocturnal, postprandial), triggers, associated symptoms (nasal drip, heartburn, wheezing), medication list (especially ACE inhibitors), smoking history, and prior respiratory conditions. Based on the evaluation, the physician may prescribe an intranasal corticosteroid (for postnasal drip), a PPI (for GERD-related cough), an inhaled bronchodilator or steroid (for cough-variant asthma), or an antitussive. A chest X-ray referral will be provided if structural pathology is suspected.` }} />
    ),
  },
  {
    question: `Will I get a prescription for a persistent cough?`,
    answerPlain: `A prescription depends on the evaluation findings. If the cough pattern is consistent with a specific treatable cause — postnasal drip (intranasal corticosteroid or antihistamine), GERD (PPI), or cough-variant asthma (inhaled bronchodilator or corticosteroid) — targeted prescription therapy will be provided. If a post-viral cough is present without a treatable underlying cause, a cough suppressant such as benzonatate may be prescribed for symptomatic relief. Antibiotics are not prescribed for viral coughs.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A prescription depends on the evaluation findings. If the cough pattern is consistent with a specific treatable cause — postnasal drip (intranasal corticosteroid or antihistamine), GERD (PPI), or cough-variant asthma (inhaled bronchodilator or corticosteroid) — targeted prescription therapy will be provided. If a post-viral cough is present without a treatable underlying cause, a cough suppressant such as benzonatate may be prescribed for symptomatic relief. Antibiotics are not prescribed for viral coughs.` }} />
    ),
  },
  {
    question: `Is a persistent cough something I can manage at home?`,
    answerPlain: `Mild acute cough following a recent cold (subacute post-viral cough) can often be managed with increased hydration, honey (1 tsp in warm water — evidence-supported per CDC), saline nasal rinse to reduce postnasal drip, OTC dextromethorphan or guaifenesin, and sleeping with head slightly elevated. OTC intranasal corticosteroids (Flonase) can help if postnasal drip is contributing. However, if cough persists beyond 3 weeks or is accompanied by concerning features, a physician evaluation is appropriate.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Mild acute cough following a recent cold (subacute post-viral cough) can often be managed with increased hydration, honey (1 tsp in warm water — evidence-supported per CDC), saline nasal rinse to reduce postnasal drip, OTC dextromethorphan or guaifenesin, and sleeping with head slightly elevated. OTC intranasal corticosteroids (Flonase) can help if postnasal drip is contributing. However, if cough persists beyond 3 weeks or is accompanied by concerning features, a physician evaluation is appropriate.` }} />
    ),
  },
  {
    question: `Does insurance cover a TeleDirectMD visit for a persistent cough?`,
    answerPlain: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; generic benzonatate is typically $15–$40 and generic omeprazole is $10–$30 at GoodRx pricing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; generic benzonatate is typically $15–$40 and generic omeprazole is $10–$30 at GoodRx pricing.` }} />
    ),
  },
  {
    question: `How fast can I be seen for a persistent cough?`,
    answerPlain: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.` }} />
    ),
  },
  {
    question: `What if I need an in-person visit for my persistent cough?`,
    answerPlain: `In-person evaluation is recommended when persistent cough is accompanied by hemoptysis, significant unexplained weight loss, or a smoking history of &gt;20 pack-years (requiring chest imaging to screen for lung cancer per USPSTF guidelines), when spirometry is needed to confirm asthma or COPD, or when physical exam findings suggest pneumonia or other structural lung pathology. A referral with clear instructions will be provided at no additional charge.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `In-person evaluation is recommended when persistent cough is accompanied by hemoptysis, significant unexplained weight loss, or a smoking history of &gt;20 pack-years (requiring chest imaging to screen for lung cancer per USPSTF guidelines), when spirometry is needed to confirm asthma or COPD, or when physical exam findings suggest pneumonia or other structural lung pathology. A referral with clear instructions will be provided at no additional charge.` }} />
    ),
  },
  {
    question: `How is a persistent cough different from a cough with bronchitis?`,
    answerPlain: `Acute bronchitis produces a wet, productive cough with mucus lasting 1–3 weeks, typically following a viral upper respiratory infection; it is usually self-limiting and does not require antibiotics. A persistent cough lasting more than 3–8 weeks that outlasts an acute illness suggests a subacute or chronic cause — postnasal drip, cough-variant asthma, GERD, or a post-infectious airway hypersensitivity syndrome. Chronic bronchitis (a form of COPD) is defined as productive cough for at least 3 months per year for 2 consecutive years, primarily in smokers. A physician evaluation determines which pattern is present.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Acute bronchitis produces a wet, productive cough with mucus lasting 1–3 weeks, typically following a viral upper respiratory infection; it is usually self-limiting and does not require antibiotics. A persistent cough lasting more than 3–8 weeks that outlasts an acute illness suggests a subacute or chronic cause — postnasal drip, cough-variant asthma, GERD, or a post-infectious airway hypersensitivity syndrome. Chronic bronchitis (a form of COPD) is defined as productive cough for at least 3 months per year for 2 consecutive years, primarily in smokers. A physician evaluation determines which pattern is present.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/asthma-refills-online/', label: 'Asthma Inhaler Refills Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/uti-treatment-online/', label: 'UTI Treatment Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Persistent cough evaluation online. Determine likely cause — postnasal drip, cough-variant asthma, GERD, or other — and whether prescription treatment is needed. $79 California video evaluation by board-certified Family Medicine physician.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Persistent Cough',
      alternateName: ['Chronic Cough', 'Persistent Cough', 'Subacute Cough', 'Cough'],
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
        '#sym-persistent-cough-opening',
        '#sym-persistent-cough-opening p',
        '.tdmd-sym__byline',
        '#sym-persistent-cough-faq',
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
    name: `How to Get a Persistent Cough Evaluation Online`,
    description: `Three steps to receive a physician evaluation for persistent cough from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your $79 video visit`, text: `Select persistent cough on teledirectmd.com. Self pay $79. No referral needed. Same-day visits often available for California adults.`, url: `https://teledirectmd.com/symptoms/persistent-cough/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician evaluates cough character, duration, triggers, associated symptoms, medication history, and smoking history to identify the most likely cause.`, url: `https://teledirectmd.com/symptoms/persistent-cough/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your evaluation results and plan`, text: `Targeted prescription therapy provided based on identified cause (postnasal drip, asthma, GERD). Chest X-ray or specialist referral if structural pathology is suspected.`, url: `https://teledirectmd.com/symptoms/persistent-cough/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Persistent Cough`, item: PAGE_URL },
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
  const pid = 'sym-persistent-cough';

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
            <span aria-current="page">Persistent Cough</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Persistent Cough — What Might Be Causing It and When to See a Doctor` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Has your cough lasted more than 3 weeks? A $79 California evaluation can identify the likely cause — postnasal drip, cough-variant asthma, GERD, or another condition — and determine whether prescription treatment is the right next step.
                </p>
                <p>
                  A persistent cough that outlasts a cold or respiratory illness is one of the most common reasons adults see a physician. In most non-smokers, it has a specific, treatable cause — but identifying that cause requires a systematic physician evaluation of cough character, timing, and associated symptoms. TeleDirectMD provides same-day physician evaluation for California adults via secure video visit. Self-pay is $79 with no insurance required.
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
                  <li><a href={`#${pid}-causes`}>What might be causing this?</a></li>
                  <li><a href={`#${pid}-red-flags`}>Red flags</a></li>
                  <li><a href={`#${pid}-self-care`}>Self-care to try first</a></li>
                  <li><a href={`#${pid}-when-to-book`}>When to book a visit</a></li>
                  <li><a href={`#${pid}-cost`}>Cost comparison</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>Self pay $79 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Same-day evaluations available in California</li>
                  <li>Board-certified Family Medicine physician</li>
                  <li>e-Prescription to your pharmacy when appropriate</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a $79 California Evaluation</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> R05.9 — Cough, unspecified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>What a TeleDirectMD Evaluation Includes</h2>
                  <ul>
                    <li>Cough pattern, duration, and trigger assessment</li>
                    <li>Postnasal drip, asthma, and GERD differentiation</li>
                    <li>Prescription targeted therapy if appropriate</li>
                    <li>Medication list review (ACE inhibitor check)</li>
                    <li>Chest X-ray or specialist referral if indicated</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. Hemoptysis, severe shortness of breath, or high fever require in-person or emergency evaluation. TeleDirectMD is not an emergency service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `When should you see a doctor for a persistent cough? A physician evaluation is appropriate when a cough has lasted more than 3 weeks, is disrupting sleep or daily activities, is producing colored or blood-tinged sputum, or is accompanied by fever or significant shortness of breath. A persistent cough could be caused by postnasal drip, cough-variant asthma, gastroesophageal reflux disease (GERD), ACE inhibitor medication effect, or a post-viral airway hypersensitivity — and the most effective management depends on identifying the correct cause. TeleDirectMD provides $79 same-day California video evaluation for adults with persistent cough, with a board-certified Family Medicine physician systematically assessing the likely cause and prescribing targeted therapy.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow ACCP and AAFP cough guidelines. California telehealth visits are authorized under Business and Professions Code 2290.5.
            </p>
          </div>
        </section>

        {/* ─── 3) WHAT MIGHT BE CAUSING THIS ──────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-causes`}>
          <div className="tdmd-container">
            <h2>What Might Be Causing a Persistent Cough?</h2>
            <p>A physician would evaluate for the following causes based on cough character, timing, triggers, associated symptoms, and medical history:</p>

            <h3>Common causes in non-smokers</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Upper airway cough syndrome (postnasal drip):</strong> The most common cause of chronic cough, arising from allergic rhinitis, non-allergic rhinitis, or sinusitis causing postnasal secretions that trigger the laryngeal cough reflex. Symptoms include a sensation of mucus dripping down the throat, nasal congestion, and a cough that is often worse at night or upon waking. A physician would evaluate for this cause when nasal symptoms accompany the cough and intranasal corticosteroid use provides partial relief.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Cough-variant asthma:</strong> A form of asthma in which dry, nonproductive cough — rather than classic wheezing or shortness of breath — is the predominant symptom. Cough often worsens with exercise, cold air, allergens, or at night. Per AAFP guidelines, a trial of inhaled bronchodilator or corticosteroid therapy can be both diagnostic and therapeutic. A physician would evaluate for cough-variant asthma when cough is dry, episodic, and triggered by specific exposures.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Gastroesophageal reflux disease (GERD):</strong> Acid reflux can trigger a chronic dry cough through microaspiration or vagal nerve stimulation, often without classic heartburn. GERD-related cough is typically worse after meals, when lying down, and at night. A physician would evaluate for GERD-related cough when classic reflux symptoms are absent but cough is postprandial or nocturnal, and an empiric PPI trial may be both diagnostic and therapeutic.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>ACE inhibitor-induced cough:</strong> Angiotensin-converting enzyme inhibitors (lisinopril, enalapril, ramipril) cause a persistent dry, tickling cough in 5–20% of users due to bradykinin accumulation in the airway. Onset can occur weeks to months after starting the medication. A physician would identify ACE inhibitor use as the cause and recommend switching to an ARB, which does not cause this side effect.` }} />
            </ul>

            <h3>Less common but requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Pertussis (whooping cough):</strong> Bordetella pertussis infection causes a prolonged paroxysmal cough with inspiratory "whoop," post-tussive vomiting, and night-time predominance lasting weeks to months. Pertussis immunity wanes after childhood vaccination; adults require Tdap booster per CDC recommendations. A physician would evaluate for pertussis when cough is paroxysmal, prolonged, and accompanied by post-cough vomiting.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Post-viral airway hypersensitivity:</strong> After a respiratory viral infection, airway sensory nerves can remain hypersensitive for weeks, producing a persistent dry cough (often called "post-viral cough" or "post-COVID cough"). Typically self-limiting over 2–8 weeks but can be distressing and disruptive to sleep.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Chronic sinusitis:</strong> Recurrent or persistent sinus inflammation causing postnasal drainage and cough without adequate response to standard rhinitis treatment. May require imaging (CT sinuses) and ENT evaluation. A physician would evaluate for this when standard postnasal drip treatment is inadequate and sinus pressure or facial pain accompanies the cough.` }} />
            </ul>

            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Cough lasting more than 3 weeks? Book a $79 evaluation</p>
                <small>Board-certified Family Medicine physician &amp;middot; California &amp;middot; Same-day available</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="/book-online" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 4) RED FLAGS ────────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-red-flags`}>
          <div className="tdmd-container">
            <h2>Red Flags — When to Call 911 or Go to the ER</h2>
            <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert" style={{ marginTop: '0.75rem' }}>
              <h3>Seek Emergency Care Immediately If You Have</h3>
              <ul>
                <li dangerouslySetInnerHTML={{ __html: `<strong>Coughing up significant blood (hemoptysis)</strong> — possible pulmonary embolism, lung cancer, or active infection; ER evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Difficulty breathing or shortness of breath at rest</strong> — possible pneumonia, pulmonary embolism, or severe asthma; call 911` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>High fever (&gt;39°C / 102.2°F) with productive cough and chills</strong> — possible pneumonia; urgent in-person or ER evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Chest pain with cough, especially pleuritic (worse with breathing)</strong> — possible pneumonia, pulmonary embolism, or pericarditis; ER evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Cyanosis (bluish lips or fingertips)</strong> — severe hypoxia; call 911 immediately` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Significant unintentional weight loss with persistent cough</strong> — in a smoker, possible lung malignancy; urgent in-person evaluation` }} />
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 5) SELF-CARE TO TRY FIRST ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-self-care`}>
          <div className="tdmd-container">
            <h2>Self-Care to Try First</h2>
            <p>For subacute post-viral cough (recently following a cold or respiratory illness) without red-flag symptoms, the following measures are evidence-based per CDC and AAFP guidance:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Honey (1 teaspoon in warm water or tea)</strong> — evidence-supported antitussive with anti-inflammatory properties per CDC. Do not give honey to children under 12 months.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Increase fluid intake</strong> — staying well-hydrated keeps airway secretions thin and easier to clear.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OTC intranasal corticosteroid spray</strong> — if postnasal drip is contributing, fluticasone (Flonase) 2 sprays per nostril daily; takes several days for full effect.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Saline nasal irrigation</strong> — NeilMed twice daily to reduce postnasal drainage and airway irritation.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Sleep with head elevated 30 degrees</strong> — reduces postnasal drip and nocturnal GERD-related cough.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Avoid known cough triggers</strong> — smoke, strong fragrances, cold dry air; use a humidifier if indoor air is dry.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OTC guaifenesin (Mucinex)</strong> — can thin mucus in productive cough; ensure adequate hydration for effectiveness.` }} />
            </ul>
            <p>If cough persists beyond 3 weeks despite these measures, or is accompanied by any concerning features, a physician evaluation is appropriate.</p>
          </div>
        </section>

        {/* ─── 6) WHEN TO BOOK A VISIT ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-when-to-book`}>
          <div className="tdmd-container">
            <h2>When to Book a TeleDirectMD Visit</h2>
            <p>A $79 California video evaluation is appropriate for persistent cough when:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Cough has persisted for &gt;3 weeks` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cough is significantly disrupting sleep or daily activities` }} />
              <li dangerouslySetInnerHTML={{ __html: `You are taking an ACE inhibitor (lisinopril, enalapril, ramipril) and developed cough after starting it` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cough is associated with heartburn, regurgitation, or postnasal drip` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cough is dry and triggered by exercise, cold air, or allergens (possible cough-variant asthma)` }} />
              <li dangerouslySetInnerHTML={{ __html: `You are immunocompromised, a current or former smoker, or &gt;65 years old with a new persistent cough` }} />
            </ul>
            <h3>What Happens in a TeleDirectMD Evaluation</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Book your visit</strong> at book.teledirectmd.com — select a same-day or next-day time slot. No referral required.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>15-minute secure video visit</strong> with a board-certified Family Medicine physician. The doctor evaluates cough duration, character, triggers, associated symptoms, medication list, smoking history, and comorbid conditions.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Evaluation results and plan:</strong> Targeted prescription therapy provided based on identified cause. ACE inhibitor switching guidance if applicable. Chest imaging or specialist referral for suspected structural pathology.` }} />
            </ol>
            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Book a $79 California evaluation for persistent cough</p>
                <small>Same-day visits available &amp;middot; Board-certified Family Medicine &amp;middot; e-Prescription same day</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="https://book.teledirectmd.com" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 7) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Evaluation Cost Comparison</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video evaluation. Prescription medication costs are separate.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Evaluation</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified Family Medicine physician</li>
                  <li>Persistent cough cause assessment</li>
                  <li>Targeted prescription therapy if appropriate</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical cough visit cost comparison">
                <h3>Typical Persistent Cough Visit Cost</h3>
                <p className="tdmd-price-caption">Typical out-of-pocket costs before insurance. Actual costs vary by location and plan.</p>
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
                  Source: Mira Health cost benchmarks, Feb 2025.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8) CTA STRIP ────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-sym__cta-strip" role="complementary">
              <div>
                <p>Book a same-day California evaluation — adults 18+ &amp;middot; $79 self-pay</p>
                <small>Board-certified Family Medicine &amp;middot; MD-only care &amp;middot; e-Prescription same day</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="/book-online" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 9) FAQ ACCORDION ───────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle={`Frequently Asked Questions — Persistent Cough`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to get your persistent cough evaluated?</h3>
                <p>Book a same-day $79 California video visit. Board-certified Family Medicine &amp;middot; MD-only care.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) RELATED CONDITIONS ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-conditions`}>
          <div className="tdmd-container">
            <h2>Related Conditions We Treat Online</h2>
            <div className="tdmd-sym__sibling-grid">
              {RELATED_CONDITIONS.map((s) => (
                <a key={s.slug} className="tdmd-sym__sibling" href={s.slug}>
                  <span className="tdmd-sym__sibling-label">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11) RELATED RESOURCE LINKS ─────────────────────────────────── */}
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

        {/* ─── 12) REFERENCES ──────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://www.aafp.org/pubs/afp/issues/2011/0701/p61.html" rel="noopener" target="_blank">AAFP — Chronic Cough: Diagnosis and Management</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/pertussis/clinical/index.html" rel="noopener" target="_blank">CDC — Pertussis (Whooping Cough): Clinical Features</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&amp;sectionNum=2290.5." rel="noopener" target="_blank">California B&amp;P Code 2290.5 — Telehealth</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Board Certification Standards</a>. Retrieved May 23, 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 13) MEDICAL DISCLAIMER ─────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>
              This page is for informational purposes only and is not a substitute for individualized medical advice, diagnosis, or treatment. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and documented. Treatment decisions are made by a board-certified physician based on the clinical history presented at the time of the visit.
            </p>
            <p>
              If you have red-flag symptoms such as hemoptysis, significant shortness of breath, or high fever with chest pain, seek urgent in-person or emergency care immediately — do not use TeleDirectMD. The $79 visit fee covers the physician evaluation only; prescription medication costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
