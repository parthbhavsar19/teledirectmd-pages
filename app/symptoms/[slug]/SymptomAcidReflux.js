/**
 * SymptomAcidReflux.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Heartburn and Regurgitation (Acid Reflux)
 * Slug:    /symptoms/acid-reflux/
 * ICD-10:  K21.0 — Gastro-esophageal reflux disease with esophagitis
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/acid-reflux/';
const PAGE_TITLE = `Heartburn and Regurgitation — What Could Be Causing It? | TeleDirectMD`;
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
    generic: `Omeprazole`,
    brand: `Prilosec`,
    form: `Oral capsule`,
    drugClass: `Proton pump inhibitor`,
    dose: `20 mg daily 30–60 min before breakfast × 8 weeks`,
    price: `$8–$22`,
    priceUrl: `https://www.goodrx.com/omeprazole-otc`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, diarrhea; long-term: bone density, B12, magnesium`,
  },
  {
    generic: `Pantoprazole`,
    brand: `Protonix`,
    form: `Oral tablet`,
    drugClass: `Proton pump inhibitor`,
    dose: `40 mg daily before breakfast × 8 weeks`,
    price: `$6–$27`,
    priceUrl: `https://www.goodrx.com/pantoprazole`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, diarrhea; same long-term concerns as omeprazole`,
  },
  {
    generic: `Esomeprazole`,
    brand: `Nexium`,
    form: `Oral capsule`,
    drugClass: `Proton pump inhibitor`,
    dose: `20–40 mg daily before breakfast`,
    price: `$9–$76`,
    priceUrl: `https://www.goodrx.com/esomeprazole`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, GI upset`,
  },
  {
    generic: `Famotidine`,
    brand: `Pepcid`,
    form: `Oral tablet`,
    drugClass: `H2 receptor antagonist`,
    dose: `20–40 mg twice daily`,
    price: `$2–$89`,
    priceUrl: `https://www.goodrx.com/famotidine`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, dizziness; renal dose adjustment`,
  },
  {
    generic: `Calcium carbonate`,
    brand: `Tums`,
    form: `Oral chewable`,
    drugClass: `Antacid`,
    dose: `500–1000 mg PRN heartburn`,
    price: `$5–$8`,
    priceUrl: `https://www.goodrx.com/calcium-carbonate`,
    priceLabel: `GoodRx`,
    sideEffects: `Constipation, hypercalcemia at high doses`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `What could be causing my heartburn and regurgitation symptoms?`,
    answerPlain: `Heartburn and regurgitation are most commonly caused by gastroesophageal reflux disease (GERD), where stomach acid flows back into the esophagus. Other possible causes include functional dyspepsia, H. pylori gastritis, a hiatal hernia, or — importantly — cardiac chest pain, which can mimic heartburn. A physician evaluation helps determine which cause is most likely for your specific pattern of symptoms.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Heartburn and regurgitation are most commonly caused by gastroesophageal reflux disease (GERD), where stomach acid flows back into the esophagus. Other possible causes include functional dyspepsia, H. pylori gastritis, a hiatal hernia, or — importantly — cardiac chest pain, which can mimic heartburn. A physician evaluation helps determine which cause is most likely for your specific pattern of symptoms.` }} />
    ),
  },
  {
    question: `When should I see a doctor for heartburn and regurgitation?`,
    answerPlain: `See a physician if heartburn occurs 2 or more days per week, persists despite over-the-counter antacids for 2 weeks, is accompanied by difficulty swallowing, causes nighttime awakening, or if you have lost weight unintentionally. A $79 TeleDirectMD video evaluation can help determine the likely cause and whether a proton pump inhibitor trial is appropriate under California B&P 2290.5 telehealth law.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a physician if heartburn occurs 2 or more days per week, persists despite over-the-counter antacids for 2 weeks, is accompanied by difficulty swallowing, causes nighttime awakening, or if you have lost weight unintentionally. A $79 TeleDirectMD video evaluation can help determine the likely cause and whether a proton pump inhibitor trial is appropriate under California B&amp;P 2290.5 telehealth law.` }} />
    ),
  },
  {
    question: `When is heartburn or chest burning an emergency?`,
    answerPlain: `Seek ER care immediately if your chest discomfort is pressure or squeezing rather than burning, comes on with exertion, radiates to your arm or jaw, is accompanied by sweating or shortness of breath, or if you vomit blood or notice black tarry stools. These features suggest a cardiac or GI emergency, not reflux.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Seek ER care immediately if your chest discomfort is pressure or squeezing rather than burning, comes on with exertion, radiates to your arm or jaw, is accompanied by sweating or shortness of breath, or if you vomit blood or notice black tarry stools. These features suggest a cardiac or GI emergency, not reflux.` }} />
    ),
  },
  {
    question: `How long is too long to have heartburn before seeing a doctor?`,
    answerPlain: `Heartburn occurring more than twice a week for 2 weeks without improvement on OTC antacids warrants evaluation. New-onset heartburn after age 50, or any heartburn with alarm features (difficulty swallowing, weight loss, bleeding), should be evaluated promptly regardless of duration. Per AAFP guidelines, persistent GERD warrants a structured assessment before starting a PPI course.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Heartburn occurring more than twice a week for 2 weeks without improvement on OTC antacids warrants evaluation. New-onset heartburn after age 50, or any heartburn with alarm features (difficulty swallowing, weight loss, bleeding), should be evaluated promptly regardless of duration. Per AAFP guidelines, persistent GERD warrants a structured assessment before starting a PPI course.` }} />
    ),
  },
  {
    question: `Can a virtual doctor evaluate heartburn and regurgitation?`,
    answerPlain: `Yes — for typical heartburn and regurgitation without alarm features, a telehealth video visit is appropriate and endorsed by ACG and AAFP guidelines. California Business and Professions Code 2290.5 explicitly permits telehealth evaluation and prescription for conditions like GERD. A physician takes a structured history, screens for cardiac and alarm-feature red flags, and if appropriate, initiates treatment.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — for typical heartburn and regurgitation without alarm features, a telehealth video visit is appropriate and endorsed by ACG and AAFP guidelines. California Business and Professions Code 2290.5 explicitly permits telehealth evaluation and prescription for conditions like GERD. A physician takes a structured history, screens for cardiac and alarm-feature red flags, and if appropriate, initiates treatment.` }} />
    ),
  },
  {
    question: `What will the doctor do for heartburn at TeleDirectMD?`,
    answerPlain: `The physician takes a structured history of your heartburn and regurgitation pattern, asks about alarm features (dysphagia, weight loss, bleeding), reviews your medication list for drug-induced causes, and screens for cardiac risk factors. If the evaluation supports GERD, a physician may initiate an 8-week proton pump inhibitor trial per ACG guidelines, along with lifestyle guidance. This is an evaluation — not a predetermined treatment.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The physician takes a structured history of your heartburn and regurgitation pattern, asks about alarm features (dysphagia, weight loss, bleeding), reviews your medication list for drug-induced causes, and screens for cardiac risk factors. If the evaluation supports GERD, a physician may initiate an 8-week proton pump inhibitor trial per ACG guidelines, along with lifestyle guidance. This is an evaluation — not a predetermined treatment.` }} />
    ),
  },
  {
    question: `Will I get a prescription if I have heartburn symptoms?`,
    answerPlain: `A prescription is not guaranteed — it depends on the clinical evaluation. If a physician determines typical GERD is the most likely cause and no alarm features are present, an 8-week PPI (such as omeprazole or pantoprazole) may be prescribed. If cardiac or other serious causes cannot be ruled out via telehealth, you will be referred for in-person evaluation at no additional charge.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A prescription is not guaranteed — it depends on the clinical evaluation. If a physician determines typical GERD is the most likely cause and no alarm features are present, an 8-week PPI (such as omeprazole or pantoprazole) may be prescribed. If cardiac or other serious causes cannot be ruled out via telehealth, you will be referred for in-person evaluation at no additional charge.` }} />
    ),
  },
  {
    question: `Is heartburn and regurgitation something I can manage at home?`,
    answerPlain: `Mild occasional heartburn can often be managed with OTC antacids and lifestyle changes: elevating the head of bed 6–8 inches, avoiding meals within 3 hours of bedtime, limiting trigger foods (coffee, alcohol, chocolate, fatty meals), and losing weight if BMI is above 25. Per NIDDK guidance, these measures can reduce symptom frequency but are not sufficient for frequent or severe GERD.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Mild occasional heartburn can often be managed with OTC antacids and lifestyle changes: elevating the head of bed 6–8 inches, avoiding meals within 3 hours of bedtime, limiting trigger foods (coffee, alcohol, chocolate, fatty meals), and losing weight if BMI is above 25. Per NIDDK guidance, these measures can reduce symptom frequency but are not sufficient for frequent or severe GERD.` }} />
    ),
  },
  {
    question: `Does insurance cover the TeleDirectMD visit for heartburn?`,
    answerPlain: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription medication costs are separate and vary by pharmacy; GoodRx can reduce OTC PPI costs to $8–$27.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription medication costs are separate and vary by pharmacy; GoodRx can reduce OTC PPI costs to $8–$27.` }} />
    ),
  },
  {
    question: `How fast can I be seen for heartburn symptoms?`,
    answerPlain: `Same-day $79 video visits are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Same-day $79 video visits are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required.` }} />
    ),
  },
  {
    question: `What if I need an in-person visit for my heartburn?`,
    answerPlain: `If alarm features are identified during the evaluation — such as difficulty swallowing, unintentional weight loss, GI bleeding, or failure of 8 weeks of appropriate PPI therapy — a physician will recommend in-person evaluation and, where appropriate, GI referral for upper endoscopy. You will be advised clearly and referred at no additional charge.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If alarm features are identified during the evaluation — such as difficulty swallowing, unintentional weight loss, GI bleeding, or failure of 8 weeks of appropriate PPI therapy — a physician will recommend in-person evaluation and, where appropriate, GI referral for upper endoscopy. You will be advised clearly and referred at no additional charge.` }} />
    ),
  },
  {
    question: `How is heartburn different from chest pain caused by the heart?`,
    answerPlain: `Heartburn typically produces a burning sensation behind the breastbone, often after meals or when lying down, sometimes with a sour taste in the mouth. Cardiac chest pain is more often described as pressure, squeezing, or tightness; it may be triggered by exertion and can radiate to the arm or jaw. Sweating and shortness of breath accompanying chest discomfort are red flags for a cardiac cause. If you are uncertain, go to the ER — do not try to self-diagnose the difference.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Heartburn typically produces a burning sensation behind the breastbone, often after meals or when lying down, sometimes with a sour taste in the mouth. Cardiac chest pain is more often described as pressure, squeezing, or tightness; it may be triggered by exertion and can radiate to the arm or jaw. Sweating and shortness of breath accompanying chest discomfort are red flags for a cardiac cause. If you are uncertain, go to the ER — do not try to self-diagnose the difference.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/uti-treatment-online/', label: 'UTI Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/asthma-refills-online/', label: 'Asthma Inhaler Refills Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Burning chest pain, regurgitation, sour taste? Most acid reflux responds to lifestyle change + omeprazole/pantoprazole. $79 telehealth evaluation, California adults.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Gastroesophageal Reflux Disease (GERD)',
      alternateName: ['Heartburn', 'GERD', 'Gastroesophageal Reflux Disease', 'Pyrosis'],
      code: { '@type': 'MedicalCode', code: 'K21.0', codingSystem: 'ICD-10-CM' },
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
        '#sym-acid-reflux-opening',
        '#sym-acid-reflux-opening p',
        '.tdmd-sym__byline',
        '#sym-acid-reflux-faq',
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
    name: `How to Get a Heartburn and Regurgitation Evaluation Online`,
    description: `Three steps to receive a physician evaluation for heartburn and regurgitation symptoms from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your $79 video visit`, text: `Select acid reflux / heartburn on teledirectmd.com. No referral needed. Self pay $79. Same-day visits often available for California adults.`, url: `https://teledirectmd.com/symptoms/acid-reflux/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `The physician reviews your heartburn and regurgitation pattern, alarm features, medications, and cardiac risk factors. Red-flag screening is performed before any prescription.`, url: `https://teledirectmd.com/symptoms/acid-reflux/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your evaluation results and, if appropriate, a prescription`, text: `If evaluation supports GERD, an 8-week PPI prescription plus lifestyle guidance may be sent to your pharmacy. If in-person workup is needed, you will be referred.`, url: `https://teledirectmd.com/symptoms/acid-reflux/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Acid Reflux`, item: PAGE_URL },
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
export default function SymptomAcidReflux() {
  const schemas = buildSchemas();
  const pid = 'sym-acid-reflux';

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
            <span aria-current="page">Acid Reflux</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Heartburn and Regurgitation — What Might Be Causing It?` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Experiencing burning chest discomfort or a sour taste rising into your throat? A $79 California video evaluation can help identify the cause and determine the right next step.
                </p>
                <p>
                  Heartburn and regurgitation are among the most common digestive symptoms in adults, but they can have several different causes — some self-limiting, some requiring treatment, and a few that warrant immediate attention. TeleDirectMD provides same-day physician evaluation for California adults experiencing these symptoms via secure video visit. Self-pay is $79 with no insurance required.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> K21.0 — Gastro-esophageal reflux disease with esophagitis (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>What a TeleDirectMD Evaluation Includes</h2>
                  <ul>
                    <li>Structured symptom history and triage</li>
                    <li>Red-flag and cardiac screening</li>
                    <li>Differential assessment of possible causes</li>
                    <li>e-Prescription to your pharmacy if appropriate</li>
                    <li>Clear follow-up instructions</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. If you have crushing chest pain, difficulty swallowing, vomiting blood, or rapidly worsening symptoms, seek emergency care immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `When should you see a doctor for heartburn and regurgitation? If burning chest discomfort or a sour taste in the mouth occurs more than twice a week, wakes you at night, or persists despite two weeks of over-the-counter antacids, a physician evaluation is the right next step. Heartburn-and-regurgitation symptoms could be caused by GERD, functional dyspepsia, H. pylori infection, or — critically — cardiac disease. TeleDirectMD provides $79 same-day California video evaluation for adults experiencing heartburn and regurgitation, with a board-certified Family Medicine physician screening for alarm features and cardiac risk factors before any treatment decision is made.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; see the medication table below for GoodRx estimates. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow clinical guidelines from the ACG, AAFP, and NIDDK. Every visit includes red-flag screening, a structured symptom history, a differential assessment, and clear follow-up instructions.
            </p>
          </div>
        </section>

        {/* ─── 3) WHAT MIGHT BE CAUSING THIS ──────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-causes`}>
          <div className="tdmd-container">
            <h2>What Might Be Causing Heartburn and Regurgitation?</h2>
            <p>Heartburn and regurgitation can have several different causes. A physician would evaluate for the following possibilities based on your symptom pattern, risk factors, and history:</p>

            <h3>Common and usually self-limiting</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Dietary trigger reflux:</strong> Fatty meals, coffee, alcohol, chocolate, and carbonated drinks can temporarily relax the lower esophageal sphincter, allowing acid to rise into the esophagus. This type of heartburn is often intermittent and tied to specific foods. Most adults can manage it with dietary modification and OTC antacids.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Positional reflux:</strong> Lying flat or bending over after meals can cause acid to reflux due to gravity. Heartburn that appears mainly at night or after large meals, with no other alarm features, is often positional in origin.` }} />
            </ul>

            <h3>Common and requiring evaluation or treatment</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Gastroesophageal reflux disease (GERD):</strong> GERD affects approximately 20% of U.S. adults and occurs when the lower esophageal sphincter is chronically weakened, allowing repeated acid reflux. A physician would evaluate for GERD when heartburn occurs &gt;2 days per week, regurgitation is present, or symptoms disrupt sleep. Per ACG and AAFP guidelines, an 8-week proton pump inhibitor trial is first-line treatment. If your doctor diagnoses GERD, our <a href="/what-we-treat">conditions page</a> explains available treatment options.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Functional dyspepsia:</strong> Upper-abdominal discomfort, early satiety, or postprandial fullness without a clear structural cause. A physician would consider this when heartburn is accompanied by bloating or upper-abdominal pain without classic regurgitation. H. pylori testing may be recommended per AAFP guidelines.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>H. pylori gastritis or peptic ulcer:</strong> Helicobacter pylori infection can cause burning epigastric pain that may be confused with GERD. A physician would evaluate for this when symptoms are atypical for GERD, do not respond to PPI, or when there is a history of peptic ulcer disease. Non-invasive stool antigen or breath testing is available.` }} />
            </ul>

            <h3>Less common but requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Cardiac chest pain (angina / ACS):</strong> This is the most important condition to distinguish from heartburn. Coronary artery disease can produce chest discomfort that mimics GERD. A physician would specifically screen for cardiac features: pressure or squeezing quality, exertional onset, radiation to the arm or jaw, sweating, and shortness of breath. Any of these features requires ER evaluation, not telehealth.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Eosinophilic esophagitis (EoE):</strong> An allergic-mediated inflammatory condition of the esophagus causing heartburn and dysphagia, particularly in patients with atopy. A physician would consider EoE when symptoms do not respond to 8 weeks of appropriate PPI therapy; GI referral for endoscopy is needed.` }} />
            </ul>

            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Not sure what is causing your heartburn? Book a $79 evaluation</p>
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Crushing, pressure-like, or squeezing chest pain</strong> — possible cardiac event; call 911` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Chest pain radiating to the arm, jaw, or back</strong> — possible ACS; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Chest pain with sweating, nausea, or shortness of breath</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Difficulty swallowing or food sticking in the throat</strong> — needs endoscopy` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Vomiting blood or coffee-ground material</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Black tarry stools or bright red blood per rectum</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Unintentional weight loss &gt;5% body weight</strong> — needs in-person workup` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Age &gt;50 with new-onset heartburn or regurgitation symptoms</strong> — lower threshold for endoscopy` }} />
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
            <p>For mild, infrequent heartburn without alarm features, evidence-based home measures can reduce symptom frequency before or while awaiting a physician visit. Per NIDDK and AAFP guidance:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Elevate the head of bed 6–8 inches</strong> using blocks under the bedposts (not extra pillows) — reduces nocturnal reflux by using gravity to keep acid in the stomach.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Avoid eating within 3 hours of bedtime</strong> — allows gastric emptying before lying flat.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Eat smaller, more frequent meals</strong> rather than large meals that increase gastric pressure.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Identify and limit personal trigger foods</strong> — common triggers include coffee, alcohol, chocolate, peppermint, fatty foods, and carbonated drinks. Keep a food diary for 1–2 weeks.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Lose weight if BMI is &gt;25</strong> — weight loss of 10% has been shown to reduce GERD symptom frequency by &gt;40% per NEJM review data. This is the single highest-yield lifestyle change.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Stop smoking</strong> — nicotine relaxes the lower esophageal sphincter, worsening reflux.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OTC antacids (calcium carbonate, famotidine)</strong> — appropriate for occasional breakthrough symptoms. Not adequate for frequent heartburn occurring &ge;2 days per week.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Sleep on your left side</strong> — anatomically reduces reflux compared to right-side sleeping.` }} />
            </ul>
            <p>If these measures do not control your symptoms within 2 weeks, or if heartburn occurs &ge;2 days per week, a physician evaluation is appropriate.</p>
          </div>
        </section>

        {/* ─── 6) WHEN TO BOOK A VISIT ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-when-to-book`}>
          <div className="tdmd-container">
            <h2>When to Book a TeleDirectMD Visit</h2>
            <p>A $79 California video evaluation is appropriate for heartburn and regurgitation when:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Symptoms occur &gt;2 days per week for &gt;2 weeks despite OTC antacids` }} />
              <li dangerouslySetInnerHTML={{ __html: `Heartburn wakes you from sleep` }} />
              <li dangerouslySetInnerHTML={{ __html: `You have regurgitation of food or sour liquid multiple times per week` }} />
              <li dangerouslySetInnerHTML={{ __html: `You need an 8-week PPI prescription trial per ACG guidelines` }} />
              <li dangerouslySetInnerHTML={{ __html: `You have risk factors such as obesity, pregnancy, or age &gt;40 with new symptoms` }} />
              <li dangerouslySetInnerHTML={{ __html: `You are immunocompromised or have diabetes and notice worsening GI symptoms` }} />
              <li dangerouslySetInnerHTML={{ __html: `You need a refill of an established GERD medication` }} />
            </ul>
            <p>
              TeleDirectMD accepts Aetna, UnitedHealthcare, and Blue Cross Blue Shield commercial plans. Self-pay is $79 flat — no subscription, no hidden fees. California telehealth visits are authorized under Business and Professions Code 2290.5.
            </p>
            <h3>What Happens in a TeleDirectMD Evaluation</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Book your visit</strong> at book.teledirectmd.com — select a same-day or next-day time slot. No referral required.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>15-minute secure video visit</strong> with a board-certified Family Medicine physician. The doctor reviews your heartburn and regurgitation pattern, screens for alarm features and cardiac risk, and reviews your medication list.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Evaluation results and plan:</strong> If GERD is the most likely diagnosis and no red flags are present, a physician may prescribe an 8-week PPI (e.g., omeprazole or pantoprazole) electronically to your local pharmacy. If in-person workup is needed, you will be referred with clear instructions.` }} />
            </ol>
            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Book a $79 California evaluation for heartburn and regurgitation</p>
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
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video evaluation — symptom assessment, differential review, and e-prescription if appropriate. Prescription medication costs are separate.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Evaluation</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified Family Medicine physician</li>
                  <li>Red-flag screening &amp;amp; triage</li>
                  <li>Differential assessment of possible causes</li>
                  <li>e-Prescription to your pharmacy (when appropriate)</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical heartburn visit cost comparison">
                <h3>Typical Heartburn Visit Cost</h3>
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

        {/* ─── 8) MEDICATION TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Commonly Prescribed Medications for GERD</h2>
            <p>
              If a physician evaluates your heartburn and regurgitation and determines that GERD is the most likely cause without alarm features, the following evidence-based medications may be prescribed. The physician selects the most appropriate agent based on your history, allergies, kidney function, and drug interactions. GoodRx prices retrieved May 2026.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="GERD medication options">
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
                <td><strong>Omeprazole</strong> <span className="tdmd-sym__med-brand">(Prilosec)</span></td>
                <td>Oral capsule</td>
                <td>Proton pump inhibitor</td>
                <td dangerouslySetInnerHTML={{ __html: `20 mg daily 30–60 min before breakfast × 8 weeks` }} />
                <td><a href="https://www.goodrx.com/omeprazole-otc" target="_blank" rel="noopener">$8–$22</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, diarrhea; long-term: bone density, B12, magnesium` }} />
              </tr>
              <tr>
                <td><strong>Pantoprazole</strong> <span className="tdmd-sym__med-brand">(Protonix)</span></td>
                <td>Oral tablet</td>
                <td>Proton pump inhibitor</td>
                <td dangerouslySetInnerHTML={{ __html: `40 mg daily before breakfast × 8 weeks` }} />
                <td><a href="https://www.goodrx.com/pantoprazole" target="_blank" rel="noopener">$6–$27</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, diarrhea; fewer drug interactions than omeprazole` }} />
              </tr>
              <tr>
                <td><strong>Esomeprazole</strong> <span className="tdmd-sym__med-brand">(Nexium)</span></td>
                <td>Oral capsule</td>
                <td>Proton pump inhibitor</td>
                <td dangerouslySetInnerHTML={{ __html: `20–40 mg daily before breakfast` }} />
                <td><a href="https://www.goodrx.com/esomeprazole" target="_blank" rel="noopener">$9–$76</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, GI upset` }} />
              </tr>
              <tr>
                <td><strong>Famotidine</strong> <span className="tdmd-sym__med-brand">(Pepcid)</span></td>
                <td>Oral tablet</td>
                <td>H2 receptor antagonist</td>
                <td dangerouslySetInnerHTML={{ __html: `20–40 mg twice daily` }} />
                <td><a href="https://www.goodrx.com/famotidine" target="_blank" rel="noopener">$2–$89</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, dizziness; renal dose adjustment needed` }} />
              </tr>
              <tr>
                <td><strong>Calcium carbonate</strong> <span className="tdmd-sym__med-brand">(Tums)</span></td>
                <td>Oral chewable</td>
                <td>Antacid</td>
                <td dangerouslySetInnerHTML={{ __html: `500–1000 mg PRN heartburn` }} />
                <td><a href="https://www.goodrx.com/calcium-carbonate" target="_blank" rel="noopener">$5–$8</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Constipation, hypercalcemia at high doses; for breakthrough symptoms only` }} />
              </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> Do not start any prescription medication without a clinical evaluation. The appropriate choice depends on your individual history, allergies, comorbidities, and current medications — all assessed by the physician at your visit. TeleDirectMD does not prescribe controlled substances.
            </p>
          </div>
        </section>

        {/* ─── 9) CTA STRIP ────────────────────────────────────────────────── */}
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

        {/* ─── 10) FAQ ACCORDION ───────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle={`Frequently Asked Questions — Heartburn and Regurgitation`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to get your heartburn symptoms evaluated?</h3>
                <p>Book a same-day $79 California video visit. Board-certified Family Medicine &amp;middot; MD-only care.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11) RELATED CONDITIONS ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-conditions`}>
          <div className="tdmd-container">
            <h2>Related Conditions We Treat Online</h2>
            <p>These condition pages cover related symptoms or treatments that may be relevant to your evaluation.</p>
            <div className="tdmd-sym__sibling-grid">
              {RELATED_CONDITIONS.map((s) => (
                <a key={s.slug} className="tdmd-sym__sibling" href={s.slug}>
                  <span className="tdmd-sym__sibling-label">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 12) RELATED RESOURCE LINKS ─────────────────────────────────── */}
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

        {/* ─── 13) REFERENCES ──────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://gi.org/guideline/diagnosis-and-management-of-gastroesophageal-reflux-disease/" rel="noopener" target="_blank">ACG Clinical Guideline: Diagnosis and Management of GERD</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2010/0501/p1278.html" rel="noopener" target="_blank">AAFP — Diagnosis and Management of GERD</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults" rel="noopener" target="_blank">NIDDK — Acid Reflux (GER &amp; GERD) in Adults</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.gastrojournal.org/article/S0016-5085(22)00718-7/fulltext" rel="noopener" target="_blank">AGA — GERD Best Practice Advice</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/antibiotic-use/index.html" rel="noopener" target="_blank">CDC — Antibiotic Use &amp; Stewardship</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&amp;sectionNum=2290.5." rel="noopener" target="_blank">California B&amp;P Code 2290.5 — Telehealth</a>. Retrieved May 23, 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 14) MEDICAL DISCLAIMER ─────────────────────────────────────── */}
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
