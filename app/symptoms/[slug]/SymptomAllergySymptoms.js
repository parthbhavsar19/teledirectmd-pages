/**
 * SymptomAllergySymptoms.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Allergy Symptoms
 * Slug:    /symptoms/allergy-symptoms/
 * ICD-10:  J30.9 — Allergic rhinitis, unspecified
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/allergy-symptoms/';
const PAGE_TITLE = `Allergy Symptoms — What Might Be Causing Them and When to See a Doctor | TeleDirectMD`;
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
    generic: `cetirizine`,
    brand: `Zyrtec`,
    form: `Oral tablet`,
    drugClass: `Second-generation antihistamine`,
    dose: `10 mg PO once daily`,
    price: `$8–$25`,
    priceUrl: `https://www.goodrx.com/cetirizine`,
    priceLabel: `GoodRx`,
    sideEffects: `Mild sedation, dry mouth; less sedating than first-generation antihistamines`,
  },
  {
    generic: `fluticasone propionate nasal spray`,
    brand: `Flonase`,
    form: `Nasal spray`,
    drugClass: `Intranasal corticosteroid`,
    dose: `2 sprays per nostril once daily; reduce to 1 spray after symptom control`,
    price: `$15–$40`,
    priceUrl: `https://www.goodrx.com/fluticasone-nasal`,
    priceLabel: `GoodRx`,
    sideEffects: `Nasal dryness, epistaxis; systemic absorption minimal at standard doses`,
  },
  {
    generic: `montelukast`,
    brand: `Singulair`,
    form: `Oral tablet`,
    drugClass: `Leukotriene receptor antagonist`,
    dose: `10 mg PO once daily in the evening`,
    price: `$12–$45`,
    priceUrl: `https://www.goodrx.com/montelukast`,
    priceLabel: `GoodRx`,
    sideEffects: `FDA black-box warning for neuropsychiatric events; discuss risks with physician`,
  },
  {
    generic: `loratadine`,
    brand: `Claritin`,
    form: `Oral tablet`,
    drugClass: `Second-generation antihistamine`,
    dose: `10 mg PO once daily`,
    price: `$8–$20`,
    priceUrl: `https://www.goodrx.com/loratadine`,
    priceLabel: `GoodRx`,
    sideEffects: `Non-sedating at standard doses; headache in some patients`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `What could be causing my allergy symptoms?`,
    answerPlain: `Allergy symptoms — sneezing, nasal congestion, runny nose, itchy or watery eyes, and postnasal drip — are most commonly caused by allergic rhinitis triggered by airborne allergens: tree, grass, or weed pollen (seasonal); pet dander; dust mites; or mold (perennial). However, similar symptoms can result from non-allergic rhinitis, viral upper respiratory infections, sinus infections, or medication side effects. A physician evaluation helps distinguish allergic from non-allergic causes and guides appropriate management.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Allergy symptoms — sneezing, nasal congestion, runny nose, itchy or watery eyes, and postnasal drip — are most commonly caused by allergic rhinitis triggered by airborne allergens: tree, grass, or weed pollen (seasonal); pet dander; dust mites; or mold (perennial). However, similar symptoms can result from non-allergic rhinitis, viral upper respiratory infections, sinus infections, or medication side effects. A physician evaluation helps distinguish allergic from non-allergic causes and guides appropriate management.` }} />
    ),
  },
  {
    question: `When should I see a doctor for allergy symptoms?`,
    answerPlain: `See a physician if OTC antihistamines and nasal saline have not adequately controlled symptoms after 2–4 weeks, symptoms significantly impair sleep or daily function, you develop facial pain or pressure suggesting a secondary sinus infection, or symptoms occur year-round rather than seasonally. Per AAFP guidance, intranasal corticosteroids (such as fluticasone) are the most effective first-line treatment for moderate-to-severe allergic rhinitis and require physician evaluation to optimize.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a physician if OTC antihistamines and nasal saline have not adequately controlled symptoms after 2–4 weeks, symptoms significantly impair sleep or daily function, you develop facial pain or pressure suggesting a secondary sinus infection, or symptoms occur year-round rather than seasonally. Per AAFP guidance, intranasal corticosteroids (such as fluticasone) are the most effective first-line treatment for moderate-to-severe allergic rhinitis and require physician evaluation to optimize.` }} />
    ),
  },
  {
    question: `When are allergy symptoms an emergency?`,
    answerPlain: `Typical seasonal allergy symptoms are not emergencies. Call 911 or go to the ER immediately if you develop throat tightening, difficulty breathing, swelling of the lips or tongue, hives spreading rapidly, or dizziness after allergen exposure — these signs suggest anaphylaxis, a life-threatening allergic reaction. If you have a known severe allergy and carry an epinephrine auto-injector, use it and call 911.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Typical seasonal allergy symptoms are not emergencies. Call 911 or go to the ER immediately if you develop throat tightening, difficulty breathing, swelling of the lips or tongue, hives spreading rapidly, or dizziness after allergen exposure — these signs suggest anaphylaxis, a life-threatening allergic reaction. If you have a known severe allergy and carry an epinephrine auto-injector, use it and call 911.` }} />
    ),
  },
  {
    question: `How long is too long to have allergy symptoms before seeing a doctor?`,
    answerPlain: `If allergy symptoms persist despite 2–4 weeks of consistent OTC antihistamine use, or if they recur every season and significantly affect your quality of life, a physician evaluation is appropriate. Persistent untreated allergic rhinitis can contribute to secondary sinus infections, sleep disruption, and worsening asthma in those who have it. Early prescription management with intranasal corticosteroids often provides substantially better control than OTC antihistamines alone.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If allergy symptoms persist despite 2–4 weeks of consistent OTC antihistamine use, or if they recur every season and significantly affect your quality of life, a physician evaluation is appropriate. Persistent untreated allergic rhinitis can contribute to secondary sinus infections, sleep disruption, and worsening asthma in those who have it. Early prescription management with intranasal corticosteroids often provides substantially better control than OTC antihistamines alone.` }} />
    ),
  },
  {
    question: `Can a virtual doctor evaluate allergy symptoms?`,
    answerPlain: `Yes — allergic rhinitis and related allergy symptoms are highly suitable for telehealth evaluation. A physician can review symptom pattern, triggers, timing, prior treatments, and comorbidities via video visit to distinguish allergic rhinitis from sinusitis, viral URI, or non-allergic rhinitis. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for conditions including allergic rhinitis. TeleDirectMD provides $79 California video evaluations for adults 18+.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — allergic rhinitis and related allergy symptoms are highly suitable for telehealth evaluation. A physician can review symptom pattern, triggers, timing, prior treatments, and comorbidities via video visit to distinguish allergic rhinitis from sinusitis, viral URI, or non-allergic rhinitis. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for conditions including allergic rhinitis. TeleDirectMD provides $79 California video evaluations for adults 18+.` }} />
    ),
  },
  {
    question: `What will the doctor do for allergy symptoms at TeleDirectMD?`,
    answerPlain: `The physician evaluates symptom pattern (seasonal vs. perennial), predominant symptoms (nasal vs. ocular vs. cutaneous), known triggers, prior allergy testing results, current medications, and any comorbid asthma. Based on the evaluation, a physician may prescribe an intranasal corticosteroid (fluticasone, mometasone), adjust antihistamine therapy, prescribe a leukotriene antagonist (montelukast), or refer for allergy testing or immunotherapy if appropriate. This is an evaluation — treatment depends on the clinical findings.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The physician evaluates symptom pattern (seasonal vs. perennial), predominant symptoms (nasal vs. ocular vs. cutaneous), known triggers, prior allergy testing results, current medications, and any comorbid asthma. Based on the evaluation, a physician may prescribe an intranasal corticosteroid (fluticasone, mometasone), adjust antihistamine therapy, prescribe a leukotriene antagonist (montelukast), or refer for allergy testing or immunotherapy if appropriate. This is an evaluation — treatment depends on the clinical findings.` }} />
    ),
  },
  {
    question: `Will I get a prescription for my allergy symptoms?`,
    answerPlain: `A prescription depends on the evaluation findings. If moderate-to-severe allergic rhinitis not controlled by OTC antihistamines is identified, a physician may prescribe an intranasal corticosteroid (most effective first-line per AAFP guidelines). For mild intermittent symptoms controlled by OTC cetirizine or loratadine, prescription therapy may not be necessary, but optimization guidance will be provided. Montelukast (Singulair) carries an FDA black-box warning for neuropsychiatric effects and will be discussed with appropriate informed consent.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A prescription depends on the evaluation findings. If moderate-to-severe allergic rhinitis not controlled by OTC antihistamines is identified, a physician may prescribe an intranasal corticosteroid (most effective first-line per AAFP guidelines). For mild intermittent symptoms controlled by OTC cetirizine or loratadine, prescription therapy may not be necessary, but optimization guidance will be provided. Montelukast (Singulair) carries an FDA black-box warning for neuropsychiatric effects and will be discussed with appropriate informed consent.` }} />
    ),
  },
  {
    question: `Is allergy symptoms something I can manage at home?`,
    answerPlain: `Mild seasonal allergy symptoms can often be managed with consistent OTC second-generation antihistamines (cetirizine 10 mg or loratadine 10 mg once daily), OTC fluticasone or budesonide nasal spray (now available without a prescription), saline nasal irrigation, and allergen avoidance. Per AAFP and ACAAI guidance, intranasal corticosteroids available OTC (Flonase, Rhinocort) are first-line for nasal symptoms. Use them consistently — they require several days of regular use to reach full effect.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Mild seasonal allergy symptoms can often be managed with consistent OTC second-generation antihistamines (cetirizine 10 mg or loratadine 10 mg once daily), OTC fluticasone or budesonide nasal spray (now available without a prescription), saline nasal irrigation, and allergen avoidance. Per AAFP and ACAAI guidance, intranasal corticosteroids available OTC (Flonase, Rhinocort) are first-line for nasal symptoms. Use them consistently — they require several days of regular use to reach full effect.` }} />
    ),
  },
  {
    question: `Does insurance cover a TeleDirectMD visit for allergy symptoms?`,
    answerPlain: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; OTC fluticasone nasal spray is typically $15–$40, and generic cetirizine is $8–$25 at GoodRx pricing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; OTC fluticasone nasal spray is typically $15–$40, and generic cetirizine is $8–$25 at GoodRx pricing.` }} />
    ),
  },
  {
    question: `How fast can I be seen for allergy symptoms?`,
    answerPlain: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.` }} />
    ),
  },
  {
    question: `What if I need an in-person visit for my allergy symptoms?`,
    answerPlain: `If allergy testing (skin prick testing or specific IgE blood testing) is needed to identify exact triggers, or if allergen immunotherapy (allergy shots or sublingual tablets) is warranted, you will be referred to an allergist or otolaryngologist for in-person evaluation. Allergy symptoms complicated by significant asthma, nasal polyps, or chronic sinusitis also benefit from specialist evaluation. A referral with clear instructions will be provided at no additional charge.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If allergy testing (skin prick testing or specific IgE blood testing) is needed to identify exact triggers, or if allergen immunotherapy (allergy shots or sublingual tablets) is warranted, you will be referred to an allergist or otolaryngologist for in-person evaluation. Allergy symptoms complicated by significant asthma, nasal polyps, or chronic sinusitis also benefit from specialist evaluation. A referral with clear instructions will be provided at no additional charge.` }} />
    ),
  },
  {
    question: `How are allergy symptoms different from a cold or sinus infection?`,
    answerPlain: `Allergic rhinitis typically produces clear, watery nasal discharge, sneezing, and itchy eyes without fever; symptoms correlate with allergen exposure (pollen season, pet contact). A cold (viral URI) causes similar nasal symptoms but often with sore throat and low-grade fever, and typically resolves in 7–10 days. Acute bacterial sinusitis features thick discolored nasal discharge, facial pain or pressure, and fever persisting beyond 10 days. A physician evaluation helps distinguish these conditions, as treatments differ substantially.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Allergic rhinitis typically produces clear, watery nasal discharge, sneezing, and itchy eyes without fever; symptoms correlate with allergen exposure (pollen season, pet contact). A cold (viral URI) causes similar nasal symptoms but often with sore throat and low-grade fever, and typically resolves in 7–10 days. Acute bacterial sinusitis features thick discolored nasal discharge, facial pain or pressure, and fever persisting beyond 10 days. A physician evaluation helps distinguish these conditions, as treatments differ substantially.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/asthma-refills-online/', label: 'Asthma Inhaler Refills Online' },
  { slug: '/uti-treatment-online/', label: 'UTI Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Allergy symptoms evaluation online. Determine likely cause — allergic rhinitis, sinusitis, or viral URI — and whether prescription treatment is needed. $79 California video evaluation by board-certified Family Medicine physician.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Allergic Rhinitis',
      alternateName: ['Allergy Symptoms', 'Seasonal Allergies', 'Hay Fever', 'Allergic Rhinoconjunctivitis'],
      code: { '@type': 'MedicalCode', code: 'J30.9', codingSystem: 'ICD-10-CM' },
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
        '#sym-allergy-symptoms-opening',
        '#sym-allergy-symptoms-opening p',
        '.tdmd-sym__byline',
        '#sym-allergy-symptoms-faq',
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
    name: `How to Get an Allergy Symptoms Evaluation Online`,
    description: `Three steps to receive a physician evaluation for allergy symptoms from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your $79 video visit`, text: `Select allergy symptoms on teledirectmd.com. Self pay $79. No referral needed. Same-day visits often available for California adults.`, url: `https://teledirectmd.com/symptoms/allergy-symptoms/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician evaluates symptom pattern, triggers, prior treatments, and comorbidities to determine the cause and appropriate management.`, url: `https://teledirectmd.com/symptoms/allergy-symptoms/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your evaluation results and plan`, text: `Prescription intranasal corticosteroid or adjusted antihistamine therapy provided if appropriate. Allergy specialist referral for testing or immunotherapy if warranted.`, url: `https://teledirectmd.com/symptoms/allergy-symptoms/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Allergy Symptoms`, item: PAGE_URL },
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
export default function SymptomAllergySymptoms() {
  const schemas = buildSchemas();
  const pid = 'sym-allergy-symptoms';

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
            <span aria-current="page">Allergy Symptoms</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Allergy Symptoms — What Might Be Causing Them and When to See a Doctor` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Experiencing sneezing, nasal congestion, itchy eyes, or postnasal drip? A $79 California evaluation can identify the likely cause and determine whether prescription management is the right next step.
                </p>
                <p>
                  Allergy symptoms range from mild seasonal sneezing to year-round nasal congestion that disrupts sleep and daily life. The same symptoms can have multiple causes — allergic rhinitis, a viral cold, or a developing sinus infection — and the right treatment depends on an accurate evaluation. TeleDirectMD provides same-day physician evaluation for California adults via secure video visit. Self-pay is $79 with no insurance required.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J30.9 — Allergic rhinitis, unspecified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>What a TeleDirectMD Evaluation Includes</h2>
                  <ul>
                    <li>Symptom pattern and trigger review</li>
                    <li>Allergic vs. non-allergic rhinitis differentiation</li>
                    <li>Prescription intranasal corticosteroid if appropriate</li>
                    <li>Antihistamine optimization guidance</li>
                    <li>Allergy specialist referral if testing or immunotherapy is warranted</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. For severe allergic reactions or anaphylaxis history, discuss epi-pen management with your physician. TeleDirectMD is not an emergency service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `When should you see a doctor for allergy symptoms? A physician evaluation is appropriate when sneezing, nasal congestion, runny nose, or itchy eyes have not adequately responded to OTC antihistamines and nasal saline after 2–4 weeks of consistent use, when symptoms significantly disrupt sleep or daily function, or when facial pain suggests a secondary sinus infection. Allergy symptoms could be caused by seasonal or perennial allergic rhinitis, viral upper respiratory infection, non-allergic rhinitis, or acute sinusitis — and the most effective management depends on identifying the correct underlying pattern. TeleDirectMD provides $79 same-day California video evaluation for adults with allergy symptoms, with a board-certified Family Medicine physician assessing the likely cause and determining appropriate prescription therapy.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow clinical guidelines from the AAFP and ACAAI. Every visit includes a structured symptom and history assessment. California telehealth visits are authorized under Business and Professions Code 2290.5.
            </p>
          </div>
        </section>

        {/* ─── 3) WHAT MIGHT BE CAUSING THIS ──────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-causes`}>
          <div className="tdmd-container">
            <h2>What Might Be Causing Allergy Symptoms?</h2>
            <p>A physician would evaluate for the following causes based on your symptom pattern, timing, triggers, and history:</p>

            <h3>Common and self-limiting</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Viral upper respiratory infection (common cold):</strong> The most frequent cause of acute nasal congestion, runny nose, and sneezing. Caused by rhinovirus and other respiratory viruses. Symptoms typically resolve in 7–10 days without antibiotics. A physician would evaluate for viral URI when symptoms began acutely and include sore throat or low-grade fever alongside nasal symptoms.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Environmental irritant rhinitis:</strong> Non-allergic rhinitis triggered by smoke, strong odors, temperature changes, or dry air — without true IgE-mediated allergy. Symptoms mirror allergic rhinitis but do not respond to antihistamines. A physician would consider this pattern when nasal symptoms occur in specific environments without seasonal correlation.` }} />
            </ul>

            <h3>Common and requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Seasonal allergic rhinitis (hay fever):</strong> IgE-mediated hypersensitivity to tree pollen (spring), grass pollen (late spring–summer), or weed pollen (fall) producing sneezing, clear rhinorrhea, nasal pruritus, and conjunctivitis. Per AAFP data, allergic rhinitis affects approximately 20–30% of US adults. A physician would evaluate for seasonal allergic rhinitis when symptoms recur predictably each year during specific pollen seasons.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Perennial allergic rhinitis:</strong> Year-round IgE-mediated allergy most commonly triggered by indoor allergens — dust mites, pet dander (cat, dog), cockroach antigen, or indoor mold. Symptoms are present throughout the year with possible seasonal worsening. A physician would evaluate for perennial allergic rhinitis when nasal symptoms persist year-round and worsen with indoor allergen exposure.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Acute bacterial sinusitis:</strong> Bacterial secondary infection following viral URI or allergic inflammation, producing thick yellow-green nasal discharge, facial pressure, and fever persisting beyond 10 days or worsening after initial improvement. Per IDSA guidelines, antibiotics are indicated for acute bacterial sinusitis meeting specific criteria. A physician would evaluate whether sinus infection criteria are met. See our <a href="/sinus-infection-treatment-online/">sinus infection treatment page</a> for more on this diagnosis.` }} />
            </ul>

            <h3>Less common but requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Nasal polyps:</strong> Benign, non-cancerous mucosal growths in the nasal passages causing persistent congestion, reduced sense of smell, and postnasal drip unresponsive to antihistamines. Often associated with chronic sinusitis and aspirin sensitivity. A physician would evaluate for polyps when nasal congestion is unilateral, persistent, or associated with hyposmia.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Vasomotor (non-allergic) rhinitis:</strong> Chronic nasal congestion and rhinorrhea triggered by weather changes, exercise, alcohol, spicy food, or emotional stimuli — without IgE-mediated allergy or infection. Antihistamines are less effective; intranasal ipratropium is often used. A physician would evaluate for this pattern when allergy testing is negative and symptoms lack a clear seasonal pattern.` }} />
            </ul>

            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Not getting relief from OTC allergy medicines? Book a $79 evaluation</p>
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
                <li dangerouslySetInnerHTML={{ __html: `<strong>Throat tightening, difficulty swallowing, or voice changes</strong> — possible anaphylaxis or angioedema; call 911` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Difficulty breathing, wheezing, or chest tightness after allergen exposure</strong> — possible anaphylaxis or severe asthma exacerbation; call 911` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Rapidly spreading hives, facial or lip swelling, or tongue swelling</strong> — anaphylaxis; use epinephrine auto-injector if available, call 911` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Dizziness, lightheadedness, or loss of consciousness after allergen exposure</strong> — anaphylactic shock; call 911` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>High fever (&gt;39°C / 102.2°F) with severe facial pain and headache</strong> — possible complicated sinusitis; urgent in-person evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Vision changes, swelling around the eye, or severe unilateral eye redness</strong> — possible orbital cellulitis; urgent in-person or ER evaluation` }} />
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 5) SELF-CARE TO TRY FIRST ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-self-care`}>
          <div className="tdmd-container">
            <h2>Self-Care to Try First</h2>
            <p>For mild-to-moderate seasonal allergy symptoms, the following measures are evidence-based per AAFP and ACAAI guidance:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>OTC intranasal corticosteroid spray daily</strong> — fluticasone propionate (Flonase) or budesonide (Rhinocort) 2 sprays per nostril once daily. Now available without a prescription. Per AAFP, intranasal corticosteroids are first-line for moderate-to-severe allergic rhinitis. Requires several days of consistent use to reach full effect.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Second-generation antihistamine daily</strong> — cetirizine 10 mg or loratadine 10 mg once daily. Less sedating than diphenhydramine (Benadryl). Take consistently during allergy season rather than only when symptomatic.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Saline nasal irrigation</strong> — NeilMed or neti pot twice daily flushes allergens and reduces mucosal inflammation. Most effective when used regularly alongside medication.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Allergen avoidance measures</strong> — keep windows closed during high pollen days, shower after outdoor activity, use HEPA air filters indoors, encase mattresses and pillows in allergen-proof covers for dust mite allergy.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OTC antihistamine eye drops</strong> — ketotifen (Zaditor) 1 drop per eye twice daily for allergic conjunctivitis providing itching and tearing relief.` }} />
            </ul>
            <p>If these measures do not adequately control symptoms after 2–4 weeks, or symptoms are significantly disrupting sleep, a physician evaluation for prescription optimization is appropriate.</p>
          </div>
        </section>

        {/* ─── 6) WHEN TO BOOK A VISIT ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-when-to-book`}>
          <div className="tdmd-container">
            <h2>When to Book a TeleDirectMD Visit</h2>
            <p>A $79 California video evaluation is appropriate for allergy symptoms when:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `OTC antihistamines and nasal saline have not adequately controlled symptoms after 2–4 weeks` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms significantly impair sleep or daily function` }} />
              <li dangerouslySetInnerHTML={{ __html: `Facial pain or pressure develops, suggesting a secondary sinus infection` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms occur year-round rather than seasonally, suggesting perennial allergic rhinitis` }} />
              <li dangerouslySetInnerHTML={{ __html: `You have comorbid asthma and allergy symptoms are worsening asthma control` }} />
              <li dangerouslySetInnerHTML={{ __html: `You are &gt;65 years old or immunocompromised and symptoms are prolonged` }} />
            </ul>
            <h3>What Happens in a TeleDirectMD Evaluation</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Book your visit</strong> at book.teledirectmd.com — select a same-day or next-day time slot. No referral required.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>15-minute secure video visit</strong> with a board-certified Family Medicine physician. The doctor evaluates symptom pattern, triggers, timing, prior treatments, and any comorbidities such as asthma.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Evaluation results and plan:</strong> Prescription intranasal corticosteroid (if not controlled by OTC products), antihistamine optimization, or allergy specialist referral for testing or immunotherapy provided if appropriate.` }} />
            </ol>
            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Book a $79 California evaluation for allergy symptoms</p>
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
                  <li>Allergy symptom cause assessment</li>
                  <li>Prescription intranasal corticosteroid if appropriate</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical allergy visit cost comparison">
                <h3>Typical Allergy Visit Cost</h3>
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
              sectionTitle={`Frequently Asked Questions — Allergy Symptoms`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to get your allergy symptoms evaluated?</h3>
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
              <li><a href="https://www.aafp.org/pubs/afp/issues/2015/1101/p835.html" rel="noopener" target="_blank">AAFP — Allergic Rhinitis: Diagnosis and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/nchs/fastats/allergies.htm" rel="noopener" target="_blank">CDC NCHS — Allergies and Hay Fever</a>. Retrieved May 23, 2026.</li>
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
              If you have red-flag or emergency symptoms such as throat tightening, difficulty breathing, or rapidly spreading hives, call 911 immediately — do not use TeleDirectMD. The $79 visit fee covers the physician evaluation only; prescription medication costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
