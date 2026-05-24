/**
 * SymptomBurningUrination.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Burning Urination (Dysuria)
 * Slug:    /symptoms/burning-urination/
 * ICD-10:  R30.0 — Dysuria
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/burning-urination/';
const PAGE_TITLE = `Burning Urination — What Might Be Causing It and When to See a Doctor | TeleDirectMD`;
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
    generic: `nitrofurantoin monohydrate/macrocrystals`,
    brand: `Macrobid`,
    form: `Oral capsule`,
    drugClass: `Nitrofuran antibiotic`,
    dose: `100 mg PO BID × 5–7 days (uncomplicated UTI in women)`,
    price: `$15–$45`,
    priceUrl: `https://www.goodrx.com/nitrofurantoin`,
    priceLabel: `GoodRx`,
    sideEffects: `Nausea, headache; take with food; avoid in eGFR &lt;45`,
  },
  {
    generic: `trimethoprim-sulfamethoxazole`,
    brand: `Bactrim DS`,
    form: `Oral tablet`,
    drugClass: `Sulfonamide antibiotic`,
    dose: `160/800 mg PO BID × 3 days (uncomplicated UTI in women)`,
    price: `$8–$25`,
    priceUrl: `https://www.goodrx.com/trimethoprim-sulfamethoxazole`,
    priceLabel: `GoodRx`,
    sideEffects: `Photosensitivity, rash; avoid if sulfa allergy`,
  },
  {
    generic: `phenazopyridine HCl`,
    brand: `Pyridium`,
    form: `Oral tablet`,
    drugClass: `Urinary analgesic (OTC)`,
    dose: `200 mg PO TID × up to 2 days for symptomatic relief only`,
    price: `$8–$18`,
    priceUrl: `https://www.goodrx.com/phenazopyridine`,
    priceLabel: `GoodRx`,
    sideEffects: `Orange discoloration of urine and tears; does not treat infection`,
  },
  {
    generic: `fosfomycin trometamol`,
    brand: `Monurol`,
    form: `Oral granule sachet`,
    drugClass: `Phosphonic acid antibiotic`,
    dose: `3 g single oral dose (uncomplicated UTI in women)`,
    price: `$45–$90`,
    priceUrl: `https://www.goodrx.com/fosfomycin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, nausea; single-dose convenience`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `What could be causing burning urination?`,
    answerPlain: `Burning or painful urination (dysuria) is most commonly caused by an uncomplicated urinary tract infection (UTI) — bacterial infection of the bladder most prevalent in women. Other causes include sexually transmitted infections (chlamydia, gonorrhea, trichomoniasis), urethritis, interstitial cystitis, vaginal yeast infection (which can cause external dysuria), urinary stones, or urethral irritation from hygiene products. A physician evaluation with urinalysis determines the likely cause and appropriate management.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Burning or painful urination (dysuria) is most commonly caused by an uncomplicated urinary tract infection (UTI) — bacterial infection of the bladder most prevalent in women. Other causes include sexually transmitted infections (chlamydia, gonorrhea, trichomoniasis), urethritis, interstitial cystitis, vaginal yeast infection (which can cause external dysuria), urinary stones, or urethral irritation from hygiene products. A physician evaluation with urinalysis determines the likely cause and appropriate management.` }} />
    ),
  },
  {
    question: `When should I see a doctor for burning urination?`,
    answerPlain: `See a physician promptly if burning urination is accompanied by increased urinary frequency, urgency, or cloudy/foul-smelling urine — these symptoms suggest a UTI requiring antibiotic evaluation. Dysuria in men should always be evaluated by a physician, as UTIs in men may indicate an underlying structural abnormality or prostate involvement. In women, a same-day $79 telehealth evaluation can assess symptoms, guide a urine test, and prescribe antibiotics if a UTI is confirmed.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a physician promptly if burning urination is accompanied by increased urinary frequency, urgency, or cloudy/foul-smelling urine — these symptoms suggest a UTI requiring antibiotic evaluation. Dysuria in men should always be evaluated by a physician, as UTIs in men may indicate an underlying structural abnormality or prostate involvement. In women, a same-day $79 telehealth evaluation can assess symptoms, guide a urine test, and prescribe antibiotics if a UTI is confirmed.` }} />
    ),
  },
  {
    question: `When is burning urination an emergency?`,
    answerPlain: `Call 911 or go to the ER immediately if burning urination is accompanied by high fever (&gt;39°C / 102.2°F), severe flank or back pain (possible kidney infection or renal stone), rigors (uncontrollable shaking chills), nausea and vomiting preventing oral fluids, or altered mental status — these signs suggest pyelonephritis (kidney infection) or urosepsis, which require IV antibiotics and in-person evaluation.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Call 911 or go to the ER immediately if burning urination is accompanied by high fever (&gt;39°C / 102.2°F), severe flank or back pain (possible kidney infection or renal stone), rigors (uncontrollable shaking chills), nausea and vomiting preventing oral fluids, or altered mental status — these signs suggest pyelonephritis (kidney infection) or urosepsis, which require IV antibiotics and in-person evaluation.` }} />
    ),
  },
  {
    question: `How long is too long to have burning urination before seeing a doctor?`,
    answerPlain: `Burning urination should be evaluated the same day or next day in most cases. UTIs can ascend to the kidneys (pyelonephritis) if left untreated, and STIs causing dysuria require prompt evaluation and partner notification. Do not wait longer than 24–48 hours if symptoms are accompanied by fever, back pain, or urinary frequency. For women with a prior history of uncomplicated UTIs and classic symptoms, a same-day $79 evaluation is appropriate.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Burning urination should be evaluated the same day or next day in most cases. UTIs can ascend to the kidneys (pyelonephritis) if left untreated, and STIs causing dysuria require prompt evaluation and partner notification. Do not wait longer than 24–48 hours if symptoms are accompanied by fever, back pain, or urinary frequency. For women with a prior history of uncomplicated UTIs and classic symptoms, a same-day $79 evaluation is appropriate.` }} />
    ),
  },
  {
    question: `Can a virtual doctor evaluate burning urination?`,
    answerPlain: `Yes — uncomplicated UTI evaluation is one of the most common telehealth use cases. A physician can assess symptoms, review history, and order a urine culture at a local lab if appropriate. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for conditions including uncomplicated UTI. TeleDirectMD provides $79 California video evaluations for adults 18+. Men with dysuria and patients with fever or back pain may require in-person evaluation.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — uncomplicated UTI evaluation is one of the most common telehealth use cases. A physician can assess symptoms, review history, and order a urine culture at a local lab if appropriate. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for conditions including uncomplicated UTI. TeleDirectMD provides $79 California video evaluations for adults 18+. Men with dysuria and patients with fever or back pain may require in-person evaluation.` }} />
    ),
  },
  {
    question: `What will the doctor do for burning urination at TeleDirectMD?`,
    answerPlain: `The physician evaluates symptom onset, severity, character (internal vs. external burning), urinary frequency and urgency, discharge, fever, flank pain, sexual history, prior UTI history, and current medications. Based on the evaluation, a physician may prescribe a first-line antibiotic (nitrofurantoin or TMP-SMX for uncomplicated UTI in women per IDSA guidelines), order a urine culture at a local lab, or refer for STI testing if clinically indicated. This is an evaluation — prescribing depends on clinical findings.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The physician evaluates symptom onset, severity, character (internal vs. external burning), urinary frequency and urgency, discharge, fever, flank pain, sexual history, prior UTI history, and current medications. Based on the evaluation, a physician may prescribe a first-line antibiotic (nitrofurantoin or TMP-SMX for uncomplicated UTI in women per IDSA guidelines), order a urine culture at a local lab, or refer for STI testing if clinically indicated. This is an evaluation — prescribing depends on clinical findings.` }} />
    ),
  },
  {
    question: `Will I get a prescription for burning urination?`,
    answerPlain: `A prescription depends on the evaluation. If symptoms and history are consistent with uncomplicated UTI in a non-pregnant adult woman without red flags, a physician may prescribe nitrofurantoin, TMP-SMX, or fosfomycin per IDSA guidelines. If an STI is suspected, appropriate testing will be ordered and treatment coordinated based on results. Phenazopyridine (OTC urinary analgesic) may be recommended for symptomatic relief while awaiting results or antibiotic effect.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A prescription depends on the evaluation. If symptoms and history are consistent with uncomplicated UTI in a non-pregnant adult woman without red flags, a physician may prescribe nitrofurantoin, TMP-SMX, or fosfomycin per IDSA guidelines. If an STI is suspected, appropriate testing will be ordered and treatment coordinated based on results. Phenazopyridine (OTC urinary analgesic) may be recommended for symptomatic relief while awaiting results or antibiotic effect.` }} />
    ),
  },
  {
    question: `Is burning urination something I can manage at home?`,
    answerPlain: `Unlike many other symptoms, burning urination typically requires antibiotic treatment if it is caused by a UTI — home management alone is not sufficient. While waiting for your evaluation, increase water intake to dilute urine and reduce irritation, use OTC phenazopyridine (Pyridium, AZO) for temporary pain relief (note: this turns urine orange and does not treat the infection), and avoid caffeine and alcohol. Do not delay evaluation — untreated UTIs can progress to kidney infections.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Unlike many other symptoms, burning urination typically requires antibiotic treatment if it is caused by a UTI — home management alone is not sufficient. While waiting for your evaluation, increase water intake to dilute urine and reduce irritation, use OTC phenazopyridine (Pyridium, AZO) for temporary pain relief (note: this turns urine orange and does not treat the infection), and avoid caffeine and alcohol. Do not delay evaluation — untreated UTIs can progress to kidney infections.` }} />
    ),
  },
  {
    question: `Does insurance cover a TeleDirectMD visit for burning urination?`,
    answerPlain: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription antibiotic costs are separate; generic nitrofurantoin is typically $15–$45 and TMP-SMX is $8–$25 at GoodRx pricing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription antibiotic costs are separate; generic nitrofurantoin is typically $15–$45 and TMP-SMX is $8–$25 at GoodRx pricing.` }} />
    ),
  },
  {
    question: `How fast can I be seen for burning urination?`,
    answerPlain: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes. Given that UTIs benefit from prompt treatment, same-day evaluation is recommended.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes. Given that UTIs benefit from prompt treatment, same-day evaluation is recommended.` }} />
    ),
  },
  {
    question: `What if I need an in-person visit for burning urination?`,
    answerPlain: `In-person evaluation is recommended for dysuria with high fever, flank pain, or vomiting (possible pyelonephritis requiring IV antibiotics), dysuria in men (which may indicate prostatitis or structural issues), recurrent UTIs (&gt;3 per year in women) warranting urology evaluation, or suspected STI requiring physical exam and in-office testing. You will be referred with clear instructions at no additional charge.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `In-person evaluation is recommended for dysuria with high fever, flank pain, or vomiting (possible pyelonephritis requiring IV antibiotics), dysuria in men (which may indicate prostatitis or structural issues), recurrent UTIs (&gt;3 per year in women) warranting urology evaluation, or suspected STI requiring physical exam and in-office testing. You will be referred with clear instructions at no additional charge.` }} />
    ),
  },
  {
    question: `How is burning urination from a UTI different from an STI?`,
    answerPlain: `UTI (cystitis) typically causes burning with urination, urinary frequency, urgency, and cloudy or foul-smelling urine; it begins acutely, often after sexual activity or catheter use, and urine culture grows gram-negative bacteria. STIs (chlamydia, gonorrhea, trichomoniasis) also cause dysuria but often with urethral or vaginal discharge, and may produce milder urinary symptoms; urine or swab testing is needed to confirm. Distinguishing these conditions requires a physician evaluation — treatment with an antibiotic appropriate for UTI will not adequately treat an STI.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `UTI (cystitis) typically causes burning with urination, urinary frequency, urgency, and cloudy or foul-smelling urine; it begins acutely, often after sexual activity or catheter use, and urine culture grows gram-negative bacteria. STIs (chlamydia, gonorrhea, trichomoniasis) also cause dysuria but often with urethral or vaginal discharge, and may produce milder urinary symptoms; urine or swab testing is needed to confirm. Distinguishing these conditions requires a physician evaluation — treatment with an antibiotic appropriate for UTI will not adequately treat an STI.` }} />
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
    description: `Burning urination evaluation online. Determine likely cause — UTI, STI, urethritis, or other — and whether antibiotic treatment is needed. $79 California video evaluation by board-certified Family Medicine physician.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Dysuria',
      alternateName: ['Burning Urination', 'Painful Urination', 'Urinary Burning', 'Dysuria'],
      code: { '@type': 'MedicalCode', code: 'R30.0', codingSystem: 'ICD-10-CM' },
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
        '#sym-burning-urination-opening',
        '#sym-burning-urination-opening p',
        '.tdmd-sym__byline',
        '#sym-burning-urination-faq',
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
    name: `How to Get a Burning Urination Evaluation Online`,
    description: `Three steps to receive a physician evaluation for burning urination from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your $79 video visit`, text: `Select burning urination on teledirectmd.com. Self pay $79. No referral needed. Same-day visits often available for California adults.`, url: `https://teledirectmd.com/symptoms/burning-urination/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician evaluates symptoms, history, and determines whether UTI, STI, or another cause is most likely, ordering a urine culture or STI testing if appropriate.`, url: `https://teledirectmd.com/symptoms/burning-urination/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your evaluation results and plan`, text: `Antibiotic prescription provided if UTI is confirmed. Lab order for urine culture or STI testing if warranted. Referral for in-person evaluation if red flags are present.`, url: `https://teledirectmd.com/symptoms/burning-urination/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Burning Urination`, item: PAGE_URL },
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
export default function SymptomBurningUrination() {
  const schemas = buildSchemas();
  const pid = 'sym-burning-urination';

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
            <span aria-current="page">Burning Urination</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Burning Urination — What Might Be Causing It and When to See a Doctor` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Experiencing painful or burning urination? A $79 California evaluation can identify the likely cause — UTI, STI, or another condition — and determine whether antibiotic treatment is the right next step.
                </p>
                <p>
                  Burning or painful urination (dysuria) should not be ignored or managed with symptomatic relief alone. While an uncomplicated UTI is the most common cause in women, the same symptom can arise from sexually transmitted infections, urethral inflammation, or other conditions that require different treatments. TeleDirectMD provides same-day physician evaluation for California adults via secure video visit. Self-pay is $79 with no insurance required.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> R30.0 — Dysuria (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>What a TeleDirectMD Evaluation Includes</h2>
                  <ul>
                    <li>Dysuria cause assessment (UTI vs. STI vs. other)</li>
                    <li>Urine culture lab order if appropriate</li>
                    <li>Antibiotic prescription if UTI is confirmed</li>
                    <li>STI testing referral if clinically indicated</li>
                    <li>Red-flag screening and in-person referral if needed</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. Men with dysuria and patients with fever or back pain may require in-person evaluation. TeleDirectMD is not an emergency service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `When should you see a doctor for burning urination? A physician evaluation is appropriate as soon as possible — same-day or next-day — when dysuria is accompanied by urinary frequency, urgency, or cloudy urine suggesting a UTI, when discharge is present suggesting an STI, or when back pain or fever suggest kidney involvement. Burning urination could be caused by an uncomplicated UTI, sexually transmitted infection, urethritis, vaginal yeast infection, or interstitial cystitis — and the correct treatment depends on an accurate diagnosis. TeleDirectMD provides $79 same-day California video evaluation for adults with burning urination, with a board-certified Family Medicine physician assessing the most likely cause and prescribing appropriately.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription antibiotic costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow IDSA and AAFP clinical guidelines. California telehealth visits are authorized under Business and Professions Code 2290.5.
            </p>
          </div>
        </section>

        {/* ─── 3) WHAT MIGHT BE CAUSING THIS ──────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-causes`}>
          <div className="tdmd-container">
            <h2>What Might Be Causing Burning Urination?</h2>
            <p>A physician would evaluate for the following causes based on your symptom pattern, sexual history, urinary character, and associated findings:</p>

            <h3>Common and requiring same-day evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Uncomplicated urinary tract infection (cystitis):</strong> Bacterial infection of the bladder causing dysuria, frequency, urgency, and often cloudy or malodorous urine. Escherichia coli accounts for approximately 80% of cases per IDSA data. Most common in women due to shorter urethra. A physician would evaluate for UTI when symptoms began acutely and include frequency and urgency alongside burning. See our <a href="/uti-treatment-online/">UTI treatment page</a> if a UTI is diagnosed.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Sexually transmitted infections (chlamydia, gonorrhea, trichomoniasis):</strong> STIs are a significant cause of dysuria in sexually active adults. Chlamydia trachomatis and Neisseria gonorrhoeae cause urethritis with dysuria and often discharge; trichomoniasis causes dysuria with malodorous vaginal or urethral discharge. Per CDC surveillance data, chlamydia is the most commonly reported STI in the US. A physician would evaluate for STI when dysuria is accompanied by discharge or when a new sexual partner is involved.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Vaginal yeast infection (vulvovaginal candidiasis):</strong> Candida overgrowth causing external dysuria (burning on vulvar contact with urine) with vaginal itching, thick white discharge, and erythema. Common after antibiotic use or in immunocompromised patients. A physician would evaluate for yeast infection when burning is external rather than internal and accompanied by characteristic discharge and itching.` }} />
            </ul>

            <h3>Less common but requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Pyelonephritis (kidney infection):</strong> UTI ascending to the kidney causing dysuria plus flank or back pain, high fever, chills, and nausea. Requires in-person evaluation and systemic antibiotics — often IV for severe cases. A physician would screen for pyelonephritis at every dysuria evaluation using the presence of fever and costovertebral angle tenderness.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Interstitial cystitis (IC) / bladder pain syndrome:</strong> Chronic condition causing recurring bladder pressure, pelvic pain, and urinary urgency without bacterial infection; urine culture is typically negative. Per AUA guidelines, IC affects primarily women and requires specialist urology evaluation. A physician would consider IC when recurrent dysuria symptoms occur without positive urine cultures.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Urethral irritation from products:</strong> Soaps, hygiene sprays, douches, spermicides, and bubble baths can cause urethral irritation and dysuria without infection. A physician would consider this cause when dysuria began after a new product exposure, there is no discharge or systemic symptoms, and urinalysis is negative.` }} />
            </ul>

            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Burning when you urinate? Book a same-day $79 evaluation</p>
                <small>Board-certified Family Medicine physician &amp;middot; California &amp;middot; Prompt evaluation recommended</small>
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
                <li dangerouslySetInnerHTML={{ __html: `<strong>High fever (&gt;39°C / 102.2°F) with burning urination</strong> — possible pyelonephritis or urosepsis; go to ER` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Severe flank or back pain on one side</strong> — possible kidney infection or renal stone; urgent in-person evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Rigors (uncontrollable shaking chills) with urinary symptoms</strong> — possible bacteremia; ER evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Nausea and vomiting preventing oral fluids or medications</strong> — IV antibiotics may be needed; in-person evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Inability to urinate despite urge</strong> — possible urinary retention; urgent in-person evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Blood in urine (gross hematuria) with significant pain</strong> — possible renal stone or serious pathology; urgent evaluation` }} />
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 5) SELF-CARE TO TRY FIRST ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-self-care`}>
          <div className="tdmd-container">
            <h2>Self-Care While Awaiting Evaluation</h2>
            <p>Unlike many symptom types, burning urination due to UTI or STI requires prescription antibiotic evaluation and should not be solely managed at home. The following measures can reduce discomfort while awaiting your $79 evaluation:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Increase water intake</strong> — drink 8–10 glasses of water daily to dilute urine and help flush bacteria from the bladder; dilute urine causes less burning on urination.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OTC phenazopyridine (AZO, Pyridium) 200 mg three times daily</strong> — urinary analgesic that reduces burning sensation. Note: this is not an antibiotic and does not treat the underlying infection. Turns urine and tears orange; do not use for more than 2 days.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Avoid caffeine, alcohol, and citrus</strong> — these irritate the bladder mucosa and worsen burning symptoms.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Avoid potential irritant hygiene products</strong> — discontinue any new soaps, sprays, or douches until evaluated.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Do not self-treat with prior antibiotic courses</strong> — bacterial resistance patterns change, and using an old prescription may not treat current bacteria adequately.` }} />
            </ul>
            <p>Book a physician evaluation promptly — UTIs can progress to kidney infections if untreated, and STIs require specific antibiotic therapy and partner notification.</p>
          </div>
        </section>

        {/* ─── 6) WHEN TO BOOK A VISIT ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-when-to-book`}>
          <div className="tdmd-container">
            <h2>When to Book a TeleDirectMD Visit</h2>
            <p>A $79 California video evaluation is appropriate for burning urination when:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Burning or painful urination has been present for &gt;24 hours` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms include frequency or urgency suggesting UTI` }} />
              <li dangerouslySetInnerHTML={{ __html: `Discharge is present suggesting possible STI` }} />
              <li dangerouslySetInnerHTML={{ __html: `You are a woman with a prior history of uncomplicated UTIs and recognize the pattern` }} />
              <li dangerouslySetInnerHTML={{ __html: `OTC phenazopyridine is not adequately controlling symptoms` }} />
              <li dangerouslySetInnerHTML={{ __html: `You are immunocompromised, pregnant, or &gt;65 years old with urinary symptoms` }} />
            </ul>
            <h3>What Happens in a TeleDirectMD Evaluation</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Book your visit</strong> at book.teledirectmd.com — select a same-day or next-day time slot. No referral required.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>15-minute secure video visit</strong> with a board-certified Family Medicine physician. The doctor evaluates symptom character, onset, urinary habits, sexual history, prior UTI or STI history, and current medications.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Evaluation results and plan:</strong> Antibiotic prescription for UTI if clinically indicated per IDSA guidelines. Urine culture lab order for complex cases. STI testing referral if indicated. In-person referral with clear instructions for red-flag cases.` }} />
            </ol>
            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Book a $79 California evaluation for burning urination</p>
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
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video evaluation. Prescription antibiotic costs are separate.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Evaluation</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified Family Medicine physician</li>
                  <li>Dysuria cause assessment</li>
                  <li>Antibiotic prescription if UTI confirmed</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical UTI visit cost comparison">
                <h3>Typical UTI Visit Cost</h3>
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
              sectionTitle={`Frequently Asked Questions — Burning Urination`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to get your burning urination evaluated?</h3>
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
              <li><a href="https://www.idsociety.org/practice-guideline/urinary-tract-infection-uti/" rel="noopener" target="_blank">IDSA — Guidelines for UTI Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/std/treatment-guidelines/default.htm" rel="noopener" target="_blank">CDC — Sexually Transmitted Infections Treatment Guidelines</a>. Retrieved May 23, 2026.</li>
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
              If you have red-flag symptoms such as high fever with urinary symptoms, severe flank pain, or inability to urinate, seek urgent in-person or emergency care immediately — do not use TeleDirectMD. The $79 visit fee covers the physician evaluation only; prescription medication costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
