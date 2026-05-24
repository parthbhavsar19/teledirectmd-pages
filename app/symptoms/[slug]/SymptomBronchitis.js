/**
 * SymptomBronchitis.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Chest Cough with Mucus (Bronchitis)
 * Slug:    /symptoms/bronchitis/
 * ICD-10:  J20.9 — Acute bronchitis, unspecified
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/bronchitis/';
const PAGE_TITLE = `Chest Cough with Mucus — What Could Be Causing It? | TeleDirectMD`;
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
    generic: `Albuterol inhaler`,
    brand: `ProAir, Ventolin`,
    form: `Metered-dose inhaler`,
    drugClass: `Short-acting beta-2 agonist (SABA)`,
    dose: `2 puffs every 4–6 hours PRN cough/wheeze`,
    price: `$25–$75`,
    priceUrl: `https://www.goodrx.com/albuterol`,
    priceLabel: `GoodRx`,
    sideEffects: `Tremor, tachycardia`,
  },
  {
    generic: `Benzonatate`,
    brand: `Tessalon Perles`,
    form: `Oral capsule`,
    drugClass: `Non-narcotic antitussive`,
    dose: `100–200 mg PO TID PRN cough`,
    price: `$8–$35`,
    priceUrl: `https://www.goodrx.com/benzonatate`,
    priceLabel: `GoodRx`,
    sideEffects: `Sedation, dizziness; do not chew capsules`,
  },
  {
    generic: `Guaifenesin`,
    brand: `Mucinex`,
    form: `Oral tablet, extended release`,
    drugClass: `Expectorant`,
    dose: `600–1200 mg PO every 12h with full glass of water`,
    price: `$5–$18`,
    priceUrl: `https://www.goodrx.com/guaifenesin`,
    priceLabel: `GoodRx`,
    sideEffects: `Nausea at high doses; stay well-hydrated`,
  },
  {
    generic: `Azithromycin`,
    brand: `Zithromax (Z-Pak)`,
    form: `Oral tablet`,
    drugClass: `Macrolide antibiotic`,
    dose: `500 mg day 1, then 250 mg daily × 4 days (only if bacterial cause suspected)`,
    price: `$6–$35`,
    priceUrl: `https://www.goodrx.com/azithromycin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, QT prolongation; not indicated for viral bronchitis`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `What could be causing my chest cough with mucus?`,
    answerPlain: `A chest cough producing mucus can be caused by acute bronchitis (viral in approximately 90% of cases), post-viral cough, asthma exacerbation, pertussis (whooping cough), pneumonia, or — less commonly — a foreign body or lung cancer. A physician evaluation helps determine the most likely cause based on your symptom pattern, fever, duration, and associated features such as wheezing or shortness of breath.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A chest cough producing mucus can be caused by acute bronchitis (viral in approximately 90% of cases), post-viral cough, asthma exacerbation, pertussis (whooping cough), pneumonia, or — less commonly — a foreign body or lung cancer. A physician evaluation helps determine the most likely cause based on your symptom pattern, fever, duration, and associated features such as wheezing or shortness of breath.` }} />
    ),
  },
  {
    question: `When should I see a doctor for a chest cough with mucus?`,
    answerPlain: `See a physician if your chest cough with mucus persists more than 3 weeks, is accompanied by fever above 101°F for more than 3 days, you cough up blood, you have shortness of breath at rest, or you experience chest pain. Per CDC and AAFP guidelines, these features may indicate a complication requiring evaluation. A $79 TeleDirectMD video evaluation is appropriate for California adults experiencing these symptoms without emergency features.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a physician if your chest cough with mucus persists more than 3 weeks, is accompanied by fever above 101°F for more than 3 days, you cough up blood, you have shortness of breath at rest, or you experience chest pain. Per CDC and AAFP guidelines, these features may indicate a complication requiring evaluation. A $79 TeleDirectMD video evaluation is appropriate for California adults experiencing these symptoms without emergency features.` }} />
    ),
  },
  {
    question: `When is a chest cough with mucus an emergency?`,
    answerPlain: `Call 911 or go to the ER if you have coughing up blood or blood-tinged sputum, shortness of breath at rest or with minimal exertion, chest pain with breathing, rapid breathing rate (more than 30 breaths per minute), high fever (above 103°F) with shaking chills, lips or fingernails turning blue (cyanosis), or altered mental status. These features suggest pneumonia, pulmonary embolism, or respiratory failure.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Call 911 or go to the ER if you have coughing up blood or blood-tinged sputum, shortness of breath at rest or with minimal exertion, chest pain with breathing, rapid breathing rate (more than 30 breaths per minute), high fever (above 103°F) with shaking chills, lips or fingernails turning blue (cyanosis), or altered mental status. These features suggest pneumonia, pulmonary embolism, or respiratory failure.` }} />
    ),
  },
  {
    question: `How long is too long for a chest cough before seeing a doctor?`,
    answerPlain: `Acute viral bronchitis commonly causes a cough that persists 3–8 weeks even after other symptoms resolve — per AAFP guidance, this post-viral cough is normal and does not require antibiotics. A cough lasting more than 8 weeks is classified as chronic and warrants evaluation for asthma, GERD-related cough, post-nasal drip, or other causes. Cough in a smoker or former smoker lasting more than 3 weeks should also be evaluated.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Acute viral bronchitis commonly causes a cough that persists 3–8 weeks even after other symptoms resolve — per AAFP guidance, this post-viral cough is normal and does not require antibiotics. A cough lasting more than 8 weeks is classified as chronic and warrants evaluation for asthma, GERD-related cough, post-nasal drip, or other causes. Cough in a smoker or former smoker lasting more than 3 weeks should also be evaluated.` }} />
    ),
  },
  {
    question: `Can a virtual doctor evaluate a chest cough with mucus?`,
    answerPlain: `Yes — for most adults with chest cough without emergency features, a telehealth evaluation is appropriate. A physician assesses your cough pattern, duration, fever, sputum characteristics, and respiratory symptoms to determine the most likely cause. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for respiratory conditions. TeleDirectMD provides $79 California evaluations for adults 18+.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — for most adults with chest cough without emergency features, a telehealth evaluation is appropriate. A physician assesses your cough pattern, duration, fever, sputum characteristics, and respiratory symptoms to determine the most likely cause. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for respiratory conditions. TeleDirectMD provides $79 California evaluations for adults 18+.` }} />
    ),
  },
  {
    question: `What will the doctor do for a chest cough at TeleDirectMD?`,
    answerPlain: `The physician takes a structured history of your chest cough with mucus, reviewing duration, fever pattern, sputum color and amount, wheezing, shortness of breath, and risk factors for pneumonia. Based on the evaluation, the physician determines whether acute bronchitis, asthma, pneumonia, pertussis, or another cause is most likely. This is an evaluation — not a predetermined treatment. Antibiotics will only be prescribed if a bacterial cause is clinically indicated.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The physician takes a structured history of your chest cough with mucus, reviewing duration, fever pattern, sputum color and amount, wheezing, shortness of breath, and risk factors for pneumonia. Based on the evaluation, the physician determines whether acute bronchitis, asthma, pneumonia, pertussis, or another cause is most likely. This is an evaluation — not a predetermined treatment. Antibiotics will only be prescribed if a bacterial cause is clinically indicated.` }} />
    ),
  },
  {
    question: `Will I get a prescription for a chest cough with mucus?`,
    answerPlain: `A prescription depends on the evaluation. Approximately 90% of acute bronchitis cases are viral, and antibiotics are not indicated and will not be prescribed per CDC antibiotic stewardship guidelines. If an inhaled bronchodilator (such as albuterol) would help with associated wheezing, that may be prescribed. If bacterial pneumonia or pertussis is suspected based on clinical features, appropriate antibiotic therapy may be prescribed.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A prescription depends on the evaluation. Approximately 90% of acute bronchitis cases are viral, and antibiotics are not indicated and will not be prescribed per CDC antibiotic stewardship guidelines. If an inhaled bronchodilator (such as albuterol) would help with associated wheezing, that may be prescribed. If bacterial pneumonia or pertussis is suspected based on clinical features, appropriate antibiotic therapy may be prescribed.` }} />
    ),
  },
  {
    question: `Is a chest cough with mucus something I can manage at home?`,
    answerPlain: `Mild acute bronchitis without fever, without shortness of breath, and with symptom duration under 3 weeks can often be managed with hydration, honey (1–2 tsp in tea per Cochrane review evidence), humidification, and OTC guaifenesin (Mucinex) to thin secretions. Rest and avoiding irritants (smoke, cold air) reduce symptom severity. Antibiotics do not shorten the duration of viral bronchitis.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Mild acute bronchitis without fever, without shortness of breath, and with symptom duration under 3 weeks can often be managed with hydration, honey (1–2 tsp in tea per Cochrane review evidence), humidification, and OTC guaifenesin (Mucinex) to thin secretions. Rest and avoiding irritants (smoke, cold air) reduce symptom severity. Antibiotics do not shorten the duration of viral bronchitis.` }} />
    ),
  },
  {
    question: `Does insurance cover a TeleDirectMD visit for a chest cough?`,
    answerPlain: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy.` }} />
    ),
  },
  {
    question: `How fast can I be seen for a chest cough with mucus?`,
    answerPlain: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.` }} />
    ),
  },
  {
    question: `What if I need an in-person visit for my chest cough?`,
    answerPlain: `If features suggesting pneumonia (fever, shaking chills, rapid breathing), pertussis (paroxysmal coughing fits, post-cough vomiting), or an acute asthma exacerbation requiring nebulizer treatment are identified, you will be referred for in-person care or directed to the ER. A chest X-ray cannot be obtained via telehealth; if one is clinically indicated, you will receive a referral at no additional charge.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If features suggesting pneumonia (fever, shaking chills, rapid breathing), pertussis (paroxysmal coughing fits, post-cough vomiting), or an acute asthma exacerbation requiring nebulizer treatment are identified, you will be referred for in-person care or directed to the ER. A chest X-ray cannot be obtained via telehealth; if one is clinically indicated, you will receive a referral at no additional charge.` }} />
    ),
  },
  {
    question: `How is bronchitis different from pneumonia or asthma?`,
    answerPlain: `Acute bronchitis (chest cough with mucus) causes inflammation of the bronchial tubes without infection of the lung tissue itself. Pneumonia infects the alveoli (air sacs) and typically presents with higher fever, shaking chills, rapid breathing, and a more systemically ill appearance. Asthma causes airway inflammation with bronchospasm — producing wheezing, chest tightness, and shortness of breath triggered by allergens, exercise, or irritants. A physician's evaluation helps distinguish these conditions.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Acute bronchitis (chest cough with mucus) causes inflammation of the bronchial tubes without infection of the lung tissue itself. Pneumonia infects the alveoli (air sacs) and typically presents with higher fever, shaking chills, rapid breathing, and a more systemically ill appearance. Asthma causes airway inflammation with bronchospasm — producing wheezing, chest tightness, and shortness of breath triggered by allergens, exercise, or irritants. A physician's evaluation helps distinguish these conditions.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/asthma-refills-online/', label: 'Asthma Inhaler Refills Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
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
    description: `Chest cough with mucus may be acute bronchitis, asthma, pertussis, or pneumonia. $79 California video evaluation to identify the cause and determine appropriate treatment.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Acute Bronchitis',
      alternateName: ['Chest Cough', 'Productive Cough', 'Acute Bronchitis', 'Viral Bronchitis'],
      code: { '@type': 'MedicalCode', code: 'J20.9', codingSystem: 'ICD-10-CM' },
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
    name: `How to Get a Chest Cough with Mucus Evaluation Online`,
    description: `Three steps to receive a physician evaluation for chest cough with mucus from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your $79 video visit`, text: `Select bronchitis/chest cough on teledirectmd.com. Self pay $79. No referral needed. Same-day visits often available for California adults.`, url: `https://teledirectmd.com/symptoms/bronchitis/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews cough duration, fever, sputum, wheezing, and respiratory symptoms to assess cause and triage appropriately.`, url: `https://teledirectmd.com/symptoms/bronchitis/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your evaluation results and plan`, text: `Prescription provided if clinically indicated. Referral to in-person or ER care if pneumonia or emergency features are suspected.`, url: `https://teledirectmd.com/symptoms/bronchitis/` }
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
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Chest Cough with Mucus — What Might Be Causing It?` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  A deep, productive chest cough with mucus could be acute bronchitis, asthma, pertussis, pneumonia, or a post-viral cough. A $79 California evaluation helps identify the cause and the right next step.
                </p>
                <p>
                  Chest cough with mucus is one of the most common reasons adults seek medical care, but the causes range from self-limiting viral bronchitis (which does not require antibiotics) to serious conditions like pneumonia or pertussis. TeleDirectMD provides same-day physician evaluation for California adults experiencing chest cough via secure video visit. Self-pay is $79 with no insurance required.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J20.9 — Acute bronchitis, unspecified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>What a TeleDirectMD Evaluation Includes</h2>
                  <ul>
                    <li>Structured chest cough triage and cause assessment</li>
                    <li>Pneumonia and emergency feature screening</li>
                    <li>Antibiotic stewardship (antibiotics only when indicated)</li>
                    <li>e-Prescription to your pharmacy if appropriate</li>
                    <li>Clear follow-up and referral instructions</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. If you have shortness of breath at rest, coughing blood, or rapid breathing, seek emergency care immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `When should you see a doctor for chest cough with mucus? Most cases of chest cough with mucus in otherwise healthy adults are caused by viral acute bronchitis and resolve without antibiotics. However, if cough persists beyond 3 weeks, is accompanied by high fever or shaking chills, produces blood-tinged sputum, or causes shortness of breath, a physician evaluation is the right step. Bronchitis is one possible diagnosis — others include asthma exacerbation, pertussis (whooping cough), post-viral cough, or pneumonia. TeleDirectMD provides $79 same-day California video evaluation for adults with chest cough, with a board-certified Family Medicine physician assessing the most likely cause and directing appropriate care.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow clinical guidelines from the CDC, AAFP, and IDSA. Every visit includes red-flag screening, a structured symptom history, and clear follow-up instructions.
            </p>
          </div>
        </section>

        {/* ─── 3) WHAT MIGHT BE CAUSING THIS ──────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-causes`}>
          <div className="tdmd-container">
            <h2>What Might Be Causing Chest Cough with Mucus?</h2>
            <p>A physician would evaluate for the following causes based on your symptom pattern, duration, fever, and associated respiratory features:</p>

            <h3>Common and usually self-limiting</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Acute viral bronchitis:</strong> Inflammation of the bronchial tubes caused by a virus — rhinovirus, influenza, RSV, coronavirus, or adenovirus. This is the most common cause of chest cough with mucus, accounting for approximately 90% of cases in adults. The cough typically lasts 3–8 weeks even after other symptoms resolve. Antibiotics are not indicated and do not shorten duration per CDC and AAFP guidance.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Post-viral cough (post-infectious hypersensitivity):</strong> After a viral respiratory illness, airways can remain transiently hypersensitive for weeks. The cough is often dry, irritating, and triggered by cold air, talking, or exercise. It resolves spontaneously; a physician may prescribe a short-course inhaled bronchodilator if associated with wheezing.` }} />
            </ul>

            <h3>Common and requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Asthma exacerbation:</strong> Asthma can present with a productive chest cough with mucus, particularly in patients with known or undiagnosed asthma. A physician would evaluate for asthma when chest cough is recurrent, associated with wheezing, worsens with exercise or cold air, or has an atopic history. A short-acting bronchodilator (albuterol) is typically first-line.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Pertussis (whooping cough):</strong> Bacterial infection caused by Bordetella pertussis. Despite vaccine protection, pertussis occurs in adults and can present as a severe paroxysmal cough lasting 6–10 weeks, sometimes with post-cough vomiting or a characteristic "whoop." A physician would evaluate for pertussis in adults with prolonged paroxysmal coughing fits, especially if household contacts are unvaccinated.` }} />
            </ul>

            <h3>Less common but requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Pneumonia (community-acquired):</strong> Infection of the lung tissue itself — typically bacterial (Streptococcus pneumoniae, Mycoplasma, Legionella). Causes chest cough with mucus but is distinguished by higher fever, shaking chills, rapid breathing, and a more systemically ill appearance. A physician would evaluate for pneumonia and order imaging if clinically indicated; some cases can be managed with oral antibiotics.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>GERD-related cough:</strong> Acid reflux can trigger a chronic non-productive or productive chest cough through vagal nerve stimulation. A physician would consider this when chest cough is chronic (lasting &gt;8 weeks), is worse after meals or at night, and is associated with heartburn or regurgitation.` }} />
            </ul>

            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Not sure what is causing your chest cough? Book a $79 evaluation</p>
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
            <p>
              Do not use TeleDirectMD if any of the following apply. These symptoms require immediate emergency evaluation:
            </p>
            <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert" style={{ marginTop: '0.75rem' }}>
              <h3>Seek Emergency Care Immediately If You Have</h3>
              <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Shortness of breath at rest or with minimal activity</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Coughing up blood or blood-tinged sputum (hemoptysis)</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Rapid breathing rate (&gt;30 breaths per minute)</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>High fever (&gt;103°F) with shaking chills</strong> — possible pneumonia; ER or urgent evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Lips, fingernails, or skin turning blue (cyanosis)</strong> — call 911` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe chest pain worsening with breathing</strong> — possible pleuritis or pneumothorax; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Altered mental status, confusion, or extreme drowsiness</strong> — call 911` }} />
              </ul>
            </div>
            <p style={{ marginTop: '1rem' }}>
              Call 911 or go to your nearest emergency room for any life-threatening symptoms. For non-emergency in-person needs, <a href="https://findahealthcenter.hrsa.gov/" rel="noopener" target="_blank">HRSA Health Center Finder</a> can locate a low-cost clinic near you.
            </p>
          </div>
        </section>

        {/* ─── 5) SELF-CARE TO TRY FIRST ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-self-care`}>
          <div className="tdmd-container">
            <h2>Self-Care to Try First</h2>
            <p>For mild acute bronchitis without emergency features, the following evidence-based home measures can reduce symptom severity per CDC and AAFP guidance:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Stay well hydrated</strong> — adequate fluids thin bronchial secretions and ease expectoration. Aim for 8+ cups of water per day.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OTC guaifenesin (Mucinex 600 mg every 12 hours)</strong> — expectorant that thins mucus. Take with a full glass of water.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Honey (1–2 tsp in warm tea)</strong> — Cochrane review evidence supports modest cough suppression in adults. Do not give to children under 1 year.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Cool-mist humidifier</strong> — adds moisture to inhaled air, reducing airway irritation.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Avoid smoking and secondhand smoke</strong> — irritants worsen bronchial inflammation and prolong cough duration.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Rest and limit exertion</strong> — allows the immune system to clear the viral infection.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Ibuprofen or acetaminophen</strong> — for fever and chest soreness from repeated coughing.` }} />
            </ul>
            <p>Antibiotics do not shorten the duration of viral bronchitis and should not be requested or taken. If chest cough persists beyond 3 weeks, worsens, or is accompanied by fever, book a physician evaluation.</p>
          </div>
        </section>

        {/* ─── 6) WHEN TO BOOK A VISIT ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-when-to-book`}>
          <div className="tdmd-container">
            <h2>When to Book a TeleDirectMD Visit</h2>
            <p>A $79 California video evaluation is appropriate for chest cough with mucus when:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Cough persists &gt;3 weeks or worsens after initial improvement` }} />
              <li dangerouslySetInnerHTML={{ __html: `Fever above 101°F persists beyond 3 days` }} />
              <li dangerouslySetInnerHTML={{ __html: `Yellow, green, or brown sputum (may indicate bacterial superinfection)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Wheezing or audible wheeze with coughing` }} />
              <li dangerouslySetInnerHTML={{ __html: `You have risk factors: immunocompromised, COPD, asthma, diabetes, or age &gt;65` }} />
              <li dangerouslySetInnerHTML={{ __html: `Paroxysmal coughing fits suggestive of pertussis` }} />
              <li dangerouslySetInnerHTML={{ __html: `You need a prescription (bronchodilator or antibiotic) to be evaluated clinically` }} />
            </ul>
            <h3>What Happens in a TeleDirectMD Evaluation</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Book your visit</strong> at book.teledirectmd.com — select a same-day or next-day time slot. No referral required.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>15-minute secure video visit</strong> with a board-certified Family Medicine physician. The doctor reviews your chest cough pattern, fever, sputum, wheezing, and respiratory symptoms to assess the most likely cause.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Evaluation results and plan:</strong> Prescription provided only if clinically indicated (e.g., albuterol for wheezing, antibiotic for confirmed or highly suspected bacterial infection). Referral for chest X-ray or in-person care if pneumonia features are present.` }} />
            </ol>
            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Book a $79 California evaluation for chest cough with mucus</p>
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
                  <li>Chest cough triage and cause assessment</li>
                  <li>Antibiotic stewardship — prescribe only when indicated</li>
                  <li>e-Prescription to your pharmacy (when appropriate)</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical chest cough visit cost comparison">
                <h3>Typical Chest Cough Visit Cost</h3>
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
              sectionTitle={`Frequently Asked Questions — Chest Cough with Mucus`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to get your chest cough evaluated?</h3>
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
              <li><a href="https://www.cdc.gov/antibiotic-use/bronchitis.html" rel="noopener" target="_blank">CDC — Chest Cold (Acute Bronchitis) and Antibiotic Use</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2016/0715/p131.html" rel="noopener" target="_blank">AAFP — Acute Bronchitis: Management and Antibiotic Stewardship</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/pertussis/index.html" rel="noopener" target="_blank">CDC — Pertussis (Whooping Cough)</a>. Retrieved May 23, 2026.</li>
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
              If you have red-flag or emergency symptoms, seek urgent in-person or emergency care immediately — do not use TeleDirectMD. The $79 visit fee covers the physician evaluation only; prescription medication costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
