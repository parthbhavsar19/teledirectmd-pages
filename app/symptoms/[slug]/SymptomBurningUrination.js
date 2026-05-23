/**
 * SymptomBurningUrination.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Burning When You Pee
 * Slug:    /symptoms/burning-urination/
 * ICD-10:  N39.0 — Urinary tract infection, site not specified
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/burning-urination/';
const PAGE_TITLE = `Burning When You Pee — UTI Symptoms, Treatment, Cost | TeleDirectMD`;
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
    generic: `nitrofurantoin monohydrate / macrocrystals`,
    brand: `Macrobid`,
    form: `oral capsule`,
    drugClass: `nitrofuran antibiotic`,
    dose: `100 mg PO BID × 5 days`,
    price: `$6–$35`,
    priceUrl: `https://www.goodrx.com/nitrofurantoin-mono-macro`,
    priceLabel: `GoodRx`,
    sideEffects: `GI upset; avoid in CrCl < 30 (ineffective and risk pulmonary toxicity).`,
  },
  {
    generic: `trimethoprim-sulfamethoxazole`,
    brand: `Bactrim DS, Septra DS`,
    form: `oral tablet`,
    drugClass: `sulfa antibiotic`,
    dose: `1 DS tab PO BID × 3 days`,
    price: `$2–$13`,
    priceUrl: `https://www.goodrx.com/septra`,
    priceLabel: `GoodRx`,
    sideEffects: `Sulfa rash; hyperkalemia; check creatinine; avoid in pregnancy at term.`,
  },
  {
    generic: `fosfomycin`,
    brand: `Monurol`,
    form: `oral granules (single dose)`,
    drugClass: `phosphonic-acid antibiotic`,
    dose: `3 g PO × 1 dose`,
    price: `$33–$99`,
    priceUrl: `https://www.goodrx.com/fosfomycin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, nausea; convenient single dose.`,
  },
  {
    generic: `cephalexin`,
    brand: `Keflex`,
    form: `oral capsule`,
    drugClass: `first-generation cephalosporin`,
    dose: `500 mg PO BID × 5–7 days`,
    price: `$8–$37`,
    priceUrl: `https://www.goodrx.com/cephalexin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea; mild rash; ~2% cross-reactivity with severe penicillin allergy.`,
  },
  {
    generic: `phenazopyridine`,
    brand: `AZO Standard, Pyridium`,
    form: `oral tablet`,
    drugClass: `urinary analgesic`,
    dose: `100–200 mg PO TID × 1–2 days`,
    price: `$3–$37`,
    priceUrl: `https://www.goodrx.com/phenazopyridine`,
    priceLabel: `GoodRx`,
    sideEffects: `Orange-red urine and contact lens staining; not an antibiotic; max 2 days.`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Is burning when I pee always a UTI?`,
    answerPlain: `Most commonly yes in adult women with classic symptoms (dysuria + frequency + urgency, no discharge), but it can also be yeast infection, STI, atrophic vaginitis, kidney stone, or interstitial cystitis. The visit history and symptom pattern distinguish them.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most commonly yes in adult women with classic symptoms (dysuria + frequency + urgency, no discharge), but it can also be yeast infection, STI, atrophic vaginitis, kidney stone, or interstitial cystitis. The visit history and symptom pattern distinguish them.` }} />
    ),
  },
  {
    question: `Can I treat a UTI without seeing a doctor?`,
    answerPlain: `No — UTIs require a prescription antibiotic. Cranberry juice and OTC phenazopyridine (AZO) only relieve symptoms. They do not treat the infection. Untreated UTIs can ascend to the kidneys and cause pyelonephritis or sepsis.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No — UTIs require a prescription antibiotic. Cranberry juice and OTC phenazopyridine (AZO) only relieve symptoms. They do not treat the infection. Untreated UTIs can ascend to the kidneys and cause pyelonephritis or sepsis.` }} />
    ),
  },
  {
    question: `Does TeleDirectMD prescribe antibiotics for UTI?`,
    answerPlain: `Yes. For uncomplicated lower UTI in adult, non-pregnant women, antibiotics like nitrofurantoin or Bactrim DS are prescribed empirically after a $79 video visit. Same-day to your pharmacy of choice.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes. For uncomplicated lower UTI in adult, non-pregnant women, antibiotics like nitrofurantoin or Bactrim DS are prescribed empirically after a $79 video visit. Same-day to your pharmacy of choice.` }} />
    ),
  },
  {
    question: `Is a urine test required for UTI treatment?`,
    answerPlain: `Not for an uncomplicated lower UTI in adult, non-pregnant women per IDSA guidelines. Empiric treatment is standard. Tests are ordered for recurrent UTI, complicated infection, atypical symptoms, or treatment failure.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Not for an uncomplicated lower UTI in adult, non-pregnant women per IDSA guidelines. Empiric treatment is standard. Tests are ordered for recurrent UTI, complicated infection, atypical symptoms, or treatment failure.` }} />
    ),
  },
  {
    question: `How much does UTI treatment cost online?`,
    answerPlain: `Total $80–$145: $79 visit + low-cost generic antibiotics (see medication table). Compare to $160–$320 urgent care and $1,200–$3,000+ ER per BetterCare 2025.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Total $80–$145: $79 visit + low-cost generic antibiotics (see medication table). Compare to $160–$320 urgent care and $1,200–$3,000+ ER per BetterCare 2025.` }} />
    ),
  },
  {
    question: `When should I go to the ER for a UTI?`,
    answerPlain: `Go to the ER if you have fever, chills, flank or back pain, vomiting, blood in urine, are pregnant, are severely immunocompromised, or have recurrent UTI within 4 weeks. These suggest kidney involvement or complicated infection.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Go to the ER if you have fever, chills, flank or back pain, vomiting, blood in urine, are pregnant, are severely immunocompromised, or have recurrent UTI within 4 weeks. These suggest kidney involvement or complicated infection.` }} />
    ),
  },
  {
    question: `Can men have UTIs treated by telehealth?`,
    answerPlain: `Generally no. UTI in men is uncommon and almost always warrants an in-person workup with urinalysis, culture, and prostate exam to rule out prostatitis. We will redirect to urgent care or your PCP.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Generally no. UTI in men is uncommon and almost always warrants an in-person workup with urinalysis, culture, and prostate exam to rule out prostatitis. We will redirect to urgent care or your PCP.` }} />
    ),
  },
  {
    question: `What if my UTI symptoms don\'t improve in 48 hours?`,
    answerPlain: `Contact us within 48–72 hours if symptoms persist. We will either change antibiotics (some bacteria are resistant — especially to Bactrim in many regions) or refer for in-person urinalysis and culture to identify the pathogen.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Contact us within 48–72 hours if symptoms persist. We will either change antibiotics (some bacteria are resistant — especially to Bactrim in many regions) or refer for in-person urinalysis and culture to identify the pathogen.` }} />
    ),
  },
  {
    question: `Why does my urine look orange after taking AZO?`,
    answerPlain: `Phenazopyridine (AZO) is a urinary analgesic dye. It turns urine bright orange-red and can stain contact lenses. The discoloration is harmless and resolves within 24–48 hours after stopping. Do not use phenazopyridine for more than 2 days.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Phenazopyridine (AZO) is a urinary analgesic dye. It turns urine bright orange-red and can stain contact lenses. The discoloration is harmless and resolves within 24–48 hours after stopping. Do not use phenazopyridine for more than 2 days.` }} />
    ),
  },
  {
    question: `Are recurrent UTIs treatable through telehealth?`,
    answerPlain: `The first acute episode is — but recurrent UTIs (≥2 in 6 months or ≥3 in 12 months) need urinalysis with culture, identification of the trigger pattern (post-coital, postmenopausal), and a structured prevention plan. Most prevention strategies can be set up via telehealth after initial cultures.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The first acute episode is — but recurrent UTIs (&ge;2 in 6 months or &ge;3 in 12 months) need urinalysis with culture, identification of the trigger pattern (post-coital, postmenopausal), and a structured prevention plan. Most prevention strategies can be set up via telehealth after initial cultures.` }} />
    ),
  },
  {
    question: `Is sex causing my UTIs?`,
    answerPlain: `Sexual activity is the strongest UTI risk factor in pre-menopausal women — friction promotes bacterial entry into the urethra. Post-coital voiding within 30 minutes reduces recurrence. Avoiding spermicidal contraception also helps. Post-coital prophylactic antibiotic is an option for severe recurrence.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Sexual activity is the strongest UTI risk factor in pre-menopausal women — friction promotes bacterial entry into the urethra. Post-coital voiding within 30 minutes reduces recurrence. Avoiding spermicidal contraception also helps. Post-coital prophylactic antibiotic is an option for severe recurrence.` }} />
    ),
  },
  {
    question: `Can I get a UTI from holding my pee?`,
    answerPlain: `Possibly — bacterial multiplication in stagnant urine is a risk factor. Urinate when you feel the urge, especially after intercourse. Hydration and regular voiding help prevent UTI.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Possibly — bacterial multiplication in stagnant urine is a risk factor. Urinate when you feel the urge, especially after intercourse. Hydration and regular voiding help prevent UTI.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/uti-treatment-online/', label: 'UTI Treatment Online' },
  { slug: '/yeast-infection-treatment-online/', label: 'Yeast Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/birth-control-refills-online/', label: 'Birth Control Refills Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Burning urination is most often a UTI in women. Telehealth visit + antibiotic = $80–$145 total. Same-day Rx in 41 states. No urinalysis required for uncomplicated cases.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Urinary Tract Infection (UTI) / Dysuria',
      alternateName: ['Dysuria', 'UTI', 'Urinary Tract Infection', 'Bladder Infection'],
      code: { '@type': 'MedicalCode', code: 'N39.0', codingSystem: 'ICD-10-CM' },
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
    name: `How to Get UTI Treatment Online`,
    description: `Three steps to receive UTI evaluation and antibiotic prescription from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select burning urination / UTI on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/burning-urination/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician screens for uncomplicated cystitis vs. red flags (fever, flank pain, pregnancy). Structured triage before prescribing.`, url: `https://teledirectmd.com/symptoms/burning-urination/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your antibiotic prescription`, text: `If appropriate, first-line antibiotic (nitrofurantoin, fosfomycin) sent to your pharmacy same day.`, url: `https://teledirectmd.com/symptoms/burning-urination/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Burning When You Pee`, item: PAGE_URL },
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
            <span aria-current="page">Burning When You Pee</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Burning When You Pee — A Family Doctor's Guide to UTIs and What Else Could Be Going On` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Burning When You Pee — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Burning When You Pee is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> N39.0 — Urinary tract infection, site not specified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Burning When You Pee Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Burning with urination, urinary frequency, and urgency without fever or flank pain are the hallmark symptoms of uncomplicated lower urinary tract infection (cystitis). TeleDirectMD uses a safety-first approach — every visit screens for red flags including fever, flank pain, pregnancy, catheter use, and immunosuppression before determining whether video-visit treatment is appropriate. Self-pay is $79; first-line antibiotics follow IDSA stewardship guidelines.` }} />
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
            <h2>Burning When You Pee Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adult, non-pregnant woman age 18 or older` }} />
              <li dangerouslySetInnerHTML={{ __html: `Located in one of the 41 licensed states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms ≤ 7 days of dysuria, frequency, urgency` }} />
              <li dangerouslySetInnerHTML={{ __html: `No fever, flank pain, or vomiting` }} />
              <li dangerouslySetInnerHTML={{ __html: `No vaginal discharge or vulvar itching` }} />
              <li dangerouslySetInnerHTML={{ __html: `Not pregnant and not actively trying to conceive` }} />
              <li dangerouslySetInnerHTML={{ __html: `Not immunocompromised` }} />
              <li dangerouslySetInnerHTML={{ __html: `Have a pharmacy where the antibiotic can be sent` }} />
              <li dangerouslySetInnerHTML={{ __html: `First UTI or first UTI in the past 4 weeks (recurrent UTIs need additional workup)` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Pregnancy with UTI — needs in-person urinalysis and culture (asymptomatic bacteriuria still treated in pregnancy)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Fever, flank pain, vomiting — pyelonephritis suspected; ER or in-person urgent care` }} />
              <li dangerouslySetInnerHTML={{ __html: `Visible blood in urine — needs imaging and possibly urology` }} />
              <li dangerouslySetInnerHTML={{ __html: `Male patient — UTI in men is uncommon; needs in-person workup` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recurrent UTI (≥3 in 12 months or ≥2 in 6 months) — needs cultures and possibly imaging` }} />
              <li dangerouslySetInnerHTML={{ __html: `Indwelling catheter or recent urinary instrumentation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severely immunocompromised patient` }} />
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
            <h2>How Burning When You Pee Treatment Works Online</h2>
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
            <h2>What Causes Burning When You Pee? Differential Diagnosis</h2>
            <p>Not all burning when you pee is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Burning When You Pee differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Uncomplicated bladder infection (cystitis)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Lower UTI in non-pregnant adult women. Treated empirically without urinalysis per IDSA.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~50% of women have ≥1 UTI in lifetime; 12% per year for 18–24-year-olds` }} />
                <td dangerouslySetInnerHTML={{ __html: `Dysuria + frequency + urgency + suprapubic discomfort; no fever; no flank pain.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — empiric nitrofurantoin or Bactrim × 5 days.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Pyelonephritis (kidney infection)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Upper UTI involving kidneys. Higher morbidity than cystitis. Some cases need IV antibiotics.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~250,000 cases/year in US` }} />
                <td dangerouslySetInnerHTML={{ __html: `Flank pain + fever &gt; 38°C + nausea/vomiting + costovertebral angle tenderness; can have dysuria too.` }} />
                <td dangerouslySetInnerHTML={{ __html: `ER or in-person urgent care — needs urinalysis, culture, possibly imaging.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Vulvovaginal candidiasis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Yeast infection causing burning with urination as urine touches inflamed vulvar skin.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~75% of women have ≥1 episode lifetime` }} />
                <td dangerouslySetInnerHTML={{ __html: `Itching + thick white discharge + vulvar erythema; no urinary urgency or frequency.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — fluconazole 150 mg PO or topical antifungal.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `STI urethritis (chlamydia, gonorrhea)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Sexually transmitted urethritis can mimic UTI. Important to consider in sexually active women, especially with new partner or recent unprotected sex.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~1.6 million chlamydia cases/year in US` }} />
                <td dangerouslySetInnerHTML={{ __html: `Dysuria + pelvic pain + abnormal discharge ± post-coital bleeding. Often no urinary frequency.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth + lab referral for NAAT testing of cervix/urine.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Interstitial cystitis / bladder pain syndrome` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Chronic non-infectious bladder pain syndrome. Cultures negative.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Up to 12% of women experience symptoms` }} />
                <td dangerouslySetInnerHTML={{ __html: `Chronic pelvic pain + frequency + urgency without infection on cultures.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth screening; urology referral for confirmation and management.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `UTI in men` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Uncommon under age 50. When present, almost always complicated and warrants workup.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~12% lifetime risk in men` }} />
                <td dangerouslySetInnerHTML={{ __html: `Same urinary symptoms; often with prostatitis features (perineal pain, fever).` }} />
                <td dangerouslySetInnerHTML={{ __html: `In-person evaluation with urinalysis, culture, prostate exam.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Burning When You Pee Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Burning When You Pee cost comparison">
                <h3>Typical Burning When You Pee Visit Cost</h3>
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
            <h2>Burning When You Pee Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for burning when you pee. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Burning When You Pee medication options">
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
                <td><strong>nitrofurantoin monohydrate / macrocrystals</strong> <span className="tdmd-sym__med-brand">(Macrobid)</span></td>
                <td>oral capsule</td>
                <td>nitrofuran antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `100 mg PO BID × 5 days` }} />
                <td><a href="https://www.goodrx.com/nitrofurantoin-mono-macro" target="_blank" rel="noopener">$6–$35</a></td>
                <td dangerouslySetInnerHTML={{ __html: `GI upset; avoid in CrCl &lt; 30 (ineffective and risk pulmonary toxicity).` }} />
              </tr>
              <tr>
                <td><strong>trimethoprim-sulfamethoxazole</strong> <span className="tdmd-sym__med-brand">(Bactrim DS, Septra DS)</span></td>
                <td>oral tablet</td>
                <td>sulfa antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `1 DS tab PO BID × 3 days` }} />
                <td><a href="https://www.goodrx.com/septra" target="_blank" rel="noopener">$2–$13</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Sulfa rash; hyperkalemia; check creatinine; avoid in pregnancy at term.` }} />
              </tr>
              <tr>
                <td><strong>fosfomycin</strong> <span className="tdmd-sym__med-brand">(Monurol)</span></td>
                <td>oral granules (single dose)</td>
                <td>phosphonic-acid antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `3 g PO × 1 dose` }} />
                <td><a href="https://www.goodrx.com/fosfomycin" target="_blank" rel="noopener">$33–$99</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, nausea; convenient single dose.` }} />
              </tr>
              <tr>
                <td><strong>cephalexin</strong> <span className="tdmd-sym__med-brand">(Keflex)</span></td>
                <td>oral capsule</td>
                <td>first-generation cephalosporin</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg PO BID × 5–7 days` }} />
                <td><a href="https://www.goodrx.com/cephalexin" target="_blank" rel="noopener">$8–$37</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea; mild rash; ~2% cross-reactivity with severe penicillin allergy.` }} />
              </tr>
              <tr>
                <td><strong>phenazopyridine</strong> <span className="tdmd-sym__med-brand">(AZO Standard, Pyridium)</span></td>
                <td>oral tablet</td>
                <td>urinary analgesic</td>
                <td dangerouslySetInnerHTML={{ __html: `100–200 mg PO TID × 1–2 days` }} />
                <td><a href="https://www.goodrx.com/phenazopyridine" target="_blank" rel="noopener">$3–$37</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Orange-red urine and contact lens staining; not an antibiotic; max 2 days.` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `Fever ≥ 38°C (100.4°F), chills, flank pain, or costovertebral angle tenderness — pyelonephritis` }} />
              <li dangerouslySetInnerHTML={{ __html: `Nausea / vomiting with urinary symptoms` }} />
              <li dangerouslySetInnerHTML={{ __html: `Visible blood in urine (gross hematuria)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Pregnancy with any UTI symptoms — urinalysis and culture-confirmed treatment required (asymptomatic bacteriuria treated in pregnancy)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recurrent UTI within the past 4 weeks (≥2 in 6 months or ≥3 in 12 months)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Male patient with UTI symptoms — uncommon; warrants in-person workup` }} />
              <li dangerouslySetInnerHTML={{ __html: `Indwelling catheter or recent urinary instrumentation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Diabetes with poor glycemic control` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severely immunocompromised (chemotherapy, transplant, advanced HIV)` }} />
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
            <h2>What to Expect: Burning When You Pee Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Burning When You Pee recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>First 24 hours of antibiotics</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Most patients feel symptomatic improvement within 24 hours of starting nitrofurantoin or Bactrim. Phenazopyridine helps with the burning sensation independently.` }} />
              </tr>
              <tr>
                <td><strong>Day 2–3</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Burning, frequency, and urgency continue improving rapidly. Phenazopyridine can be stopped after 2 days.` }} />
              </tr>
              <tr>
                <td><strong>Day 5</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `End of nitrofurantoin course. Symptoms should be fully resolved or nearly so. Persistent symptoms warrant urinalysis and culture for resistance.` }} />
              </tr>
              <tr>
                <td><strong>Week 1–2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `If symptoms recurred or never resolved, telehealth follow-up. Urine culture orders, possible alternative antibiotic, or referral for further workup.` }} />
              </tr>
              <tr>
                <td><strong>Recurrent UTI follow-up</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Two or more UTIs in 6 months, or three or more in 12 months — get post-treatment culture, identify pattern (post-coital, postmenopausal), and start prevention strategy. Possibly refer to urology for imaging or cystoscopy.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Burning When You Pee</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Increase water intake to 2–3 liters daily during and after the infection.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Empty the bladder fully each time; double-void if helpful.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Urinate after sexual intercourse (post-coital voiding has good prevention evidence).` }} />
              <li dangerouslySetInnerHTML={{ __html: `Wipe front to back after using the toilet.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid bubble baths, scented feminine washes, and douches.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Switch from spermicidal contraception (diaphragm, spermicide-coated condoms) — these increase UTI risk.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cotton underwear; avoid prolonged time in wet swimsuits or workout clothes.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Phenazopyridine (AZO) for symptom relief in the first 1–2 days only — not a substitute for antibiotic.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cranberry products have weak evidence; not a treatment but possibly modest prevention benefit.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Postmenopausal women: discuss vaginal estrogen with your clinician — strong evidence for recurrent-UTI prevention.` }} />
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
              sectionTitle={`Frequently Asked Questions — Burning When You Pee`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your burning when you pee visit.</p>
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
              <li><a href="https://www.idsociety.org/practice-guideline/urinary-tract-infections-in-women/" rel="noopener" target="_blank">IDSA Guideline — Acute Uncomplicated Cystitis in Women</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.auanet.org/guidelines-and-quality/guidelines/recurrent-uti" rel="noopener" target="_blank">AUA/CUA/SUFU — Recurrent UTI Guideline (2024)</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/01/treatment-of-urinary-tract-infections-in-nonpregnant-women" rel="noopener" target="_blank">ACOG — Treatment of UTIs in Nonpregnant Women</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/uti/about/index.html" rel="noopener" target="_blank">CDC — UTI Overview</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/nitrofurantoin" rel="noopener" target="_blank">GoodRx — Nitrofurantoin Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nitrofurantoin" rel="noopener" target="_blank">FDA DailyMed — Nitrofurantoin</a>. Retrieved May 23, 2026.</li>
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
