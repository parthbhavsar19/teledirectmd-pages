/**
 * SymptomCysticAcne.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Cystic Acne
 * Slug:    /symptoms/cystic-acne/
 * ICD-10:  L70.0 — Acne vulgaris (cystic)
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/cystic-acne/';
const PAGE_TITLE = `Persistent Pimples & Cystic Acne — When to Get Real Treatment | TeleDirectMD`;
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
    generic: `tretinoin`,
    brand: `Retin-A, Altreno`,
    form: `topical cream/gel`,
    drugClass: `topical retinoid`,
    dose: `Pea-sized nightly`,
    price: `$29–$93`,
    priceUrl: `https://www.goodrx.com/retin-a`,
    priceLabel: `GoodRx`,
    sideEffects: `Initial dryness/peeling, photosensitivity; pregnancy contraindicated.`,
  },
  {
    generic: `doxycycline hyclate`,
    brand: `Vibramycin, Doryx`,
    form: `oral capsule`,
    drugClass: `tetracycline`,
    dose: `100 mg BID × 12 weeks`,
    price: `$5–$80`,
    priceUrl: `https://www.goodrx.com/doxycycline-hyclate`,
    priceLabel: `GoodRx`,
    sideEffects: `Photosensitivity, GI upset, esophagitis; pregnancy contraindicated.`,
  },
  {
    generic: `spironolactone`,
    brand: `Aldactone`,
    form: `oral tablet`,
    drugClass: `anti-androgen`,
    dose: `50–100 mg daily`,
    price: `$6–$29`,
    priceUrl: `https://www.goodrx.com/spironolactone`,
    priceLabel: `GoodRx`,
    sideEffects: `Hyperkalemia, breast tenderness, menstrual irregularity; pregnancy contraindicated.`,
  },
  {
    generic: `clindamycin-benzoyl peroxide`,
    brand: `BenzaClin, Onexton`,
    form: `topical gel`,
    drugClass: `antibiotic + benzoyl peroxide combination`,
    dose: `Apply morning`,
    price: `$32–$45`,
    priceUrl: `https://www.goodrx.com/clindamycin-benzoyl-peroxide`,
    priceLabel: `GoodRx`,
    sideEffects: `Skin dryness; bleaches fabrics.`,
  },
  {
    generic: `adapalene-benzoyl peroxide`,
    brand: `Epiduo, Epiduo Forte`,
    form: `topical gel`,
    drugClass: `retinoid + BP combination`,
    dose: `Apply nightly`,
    price: `$23–$328`,
    priceUrl: `https://www.goodrx.com/adapalene-benzoyl-peroxide`,
    priceLabel: `GoodRx`,
    sideEffects: `Initial irritation, photosensitivity; bleaches fabrics.`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `How is cystic acne different from regular pimples?`,
    answerPlain: `Cystic acne is deep, painful, often-scarring nodules beneath the skin. Regular acne is surface whiteheads, blackheads, or small inflammatory bumps. Cystic acne usually requires combination prescription therapy and has a high scar rate without treatment.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Cystic acne is deep, painful, often-scarring nodules beneath the skin. Regular acne is surface whiteheads, blackheads, or small inflammatory bumps. Cystic acne usually requires combination prescription therapy and has a high scar rate without treatment.` }} />
    ),
  },
  {
    question: `Can telehealth treat cystic acne?`,
    answerPlain: `Yes for moderate cases — tretinoin + oral antibiotic + sometimes spironolactone. Severe scarring nodulocystic acne needs in-person dermatology for isotretinoin (Accutane), which requires monthly labs and the iPLEDGE program.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes for moderate cases — tretinoin + oral antibiotic + sometimes spironolactone. Severe scarring nodulocystic acne needs in-person dermatology for isotretinoin (Accutane), which requires monthly labs and the iPLEDGE program.` }} />
    ),
  },
  {
    question: `How long does cystic acne treatment take to work?`,
    answerPlain: `Tretinoin: 6–12 weeks for visible improvement. Doxycycline: 4–8 weeks. Spironolactone: 8–16 weeks. Most patients see meaningful improvement at 12 weeks and continue therapy for 6+ months.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Tretinoin: 6–12 weeks for visible improvement. Doxycycline: 4–8 weeks. Spironolactone: 8–16 weeks. Most patients see meaningful improvement at 12 weeks and continue therapy for 6+ months.` }} />
    ),
  },
  {
    question: `What\'s the strongest acne medication?`,
    answerPlain: `Isotretinoin (Accutane) — clears severe acne in 80%+ of patients in 4–6 months with long-term remission. Requires in-person dermatology with monthly bloodwork, pregnancy testing, and iPLEDGE registration. Not prescribed via telehealth.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Isotretinoin (Accutane) — clears severe acne in 80%+ of patients in 4–6 months with long-term remission. Requires in-person dermatology with monthly bloodwork, pregnancy testing, and iPLEDGE registration. Not prescribed via telehealth.` }} />
    ),
  },
  {
    question: `Can hormonal acne in women be treated online?`,
    answerPlain: `Yes. Spironolactone is appropriate for adult women with hormonal pattern (jawline, monthly flares) and no contraindications. Baseline potassium and creatinine ordered through a local lab. Combined OCPs are another option.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes. Spironolactone is appropriate for adult women with hormonal pattern (jawline, monthly flares) and no contraindications. Baseline potassium and creatinine ordered through a local lab. Combined OCPs are another option.` }} />
    ),
  },
  {
    question: `Does insurance cover acne treatment?`,
    answerPlain: `Most generics are cheaper with GoodRx than insurance copays. Tretinoin: $24–$70. Doxycycline: $15. Spironolactone: $10–$30. Visit: $79 cash or in-network with Aetna/BCBS/UHC.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most generics are cheaper with GoodRx than insurance copays. Tretinoin: $24–$70. Doxycycline: $15. Spironolactone: $10–$30. Visit: $79 cash or in-network with Aetna/BCBS/UHC.` }} />
    ),
  },
  {
    question: `Do I need to take antibiotics forever?`,
    answerPlain: `No. Oral antibiotics for acne are typically used for 12 weeks then tapered to topical-only maintenance. Long-term continuous antibiotic use is avoided due to resistance and gut microbiome effects.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No. Oral antibiotics for acne are typically used for 12 weeks then tapered to topical-only maintenance. Long-term continuous antibiotic use is avoided due to resistance and gut microbiome effects.` }} />
    ),
  },
  {
    question: `Can cystic acne come back after treatment?`,
    answerPlain: `Yes — acne is chronic. Most patients need ongoing topical retinoid (tretinoin or adapalene) maintenance to prevent recurrence. Stopping all therapy too early is the most common cause of relapse. Isotretinoin offers ~80% long-term remission.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — acne is chronic. Most patients need ongoing topical retinoid (tretinoin or adapalene) maintenance to prevent recurrence. Stopping all therapy too early is the most common cause of relapse. Isotretinoin offers ~80% long-term remission.` }} />
    ),
  },
  {
    question: `Should I be tested for PCOS if I have hormonal acne?`,
    answerPlain: `If hormonal acne coexists with irregular periods, hirsutism, weight gain, or infertility, evaluation for PCOS is reasonable: total/free testosterone, DHEA-S, LH/FSH, fasting glucose. Ovarian ultrasound at gynecology if labs suggest PCOS.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If hormonal acne coexists with irregular periods, hirsutism, weight gain, or infertility, evaluation for PCOS is reasonable: total/free testosterone, DHEA-S, LH/FSH, fasting glucose. Ovarian ultrasound at gynecology if labs suggest PCOS.` }} />
    ),
  },
  {
    question: `Are cortisone injections useful for individual cysts?`,
    answerPlain: `Yes — intralesional triamcinolone (2.5–5 mg/mL, 0.1 mL) can resolve a painful cyst in 24–72 hours. Done in-person at a derm or family medicine office. Telehealth can refer for the procedure.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — intralesional triamcinolone (2.5–5 mg/mL, 0.1 mL) can resolve a painful cyst in 24–72 hours. Done in-person at a derm or family medicine office. Telehealth can refer for the procedure.` }} />
    ),
  },
  {
    question: `Will dietary changes (no dairy, low-glycemic) clear my acne?`,
    answerPlain: `Diet has a modest effect: high-glycemic-load diets and skim milk are associated with worse acne in susceptible patients per AAD evidence reviews. Whey protein worsens acne in some. Low-glycemic diet may help; effect is small compared to topical and oral therapy.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Diet has a modest effect: high-glycemic-load diets and skim milk are associated with worse acne in susceptible patients per AAD evidence reviews. Whey protein worsens acne in some. Low-glycemic diet may help; effect is small compared to topical and oral therapy.` }} />
    ),
  },
  {
    question: `Is microneedling, blue-light, or chemical peel useful?`,
    answerPlain: `Adjunctive at best. Light therapy and chemical peels offer modest benefit. Microneedling is for scar treatment, not active acne. Don't substitute these for evidence-based topical and oral therapy.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Adjunctive at best. Light therapy and chemical peels offer modest benefit. Microneedling is for scar treatment, not active acne. Don't substitute these for evidence-based topical and oral therapy.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/acne-treatment-online/', label: 'Acne Treatment Online' },
  { slug: '/birth-control-refills-online/', label: 'Birth Control Refills Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
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
    description: `Pimples that don't respond to OTC for 8+ weeks usually need prescription tretinoin, oral antibiotics, or hormonal therapy. $79 telehealth visit.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Cystic / Nodulocystic Acne',
      alternateName: ['Nodulocystic Acne', 'Hormonal Acne', 'Cystic Acne', 'Acne Vulgaris Cystica'],
      code: { '@type': 'MedicalCode', code: 'L70.0', codingSystem: 'ICD-10-CM' },
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
        '#sym-cystic-acne-opening',
        '#sym-cystic-acne-opening p',
        '.tdmd-sym__byline',
        '#sym-cystic-acne-faq',
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
    name: `How to Get Cystic Acne Treatment Online`,
    description: `Three steps to receive cystic acne evaluation and prescription treatment from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select cystic acne on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/cystic-acne/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews acne severity, hormonal triggers, prior treatments, and suitability for oral antibiotics or spironolactone.`, url: `https://teledirectmd.com/symptoms/cystic-acne/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your prescription treatment plan`, text: `Oral antibiotic, topical retinoid, or hormonal agent prescribed as appropriate. Isotretinoin referral if indicated.`, url: `https://teledirectmd.com/symptoms/cystic-acne/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Cystic Acne`, item: PAGE_URL },
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
export default function SymptomCysticAcne() {
  const schemas = buildSchemas();
  const pid = 'sym-cystic-acne';

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
            <span aria-current="page">Cystic Acne</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Pimples That Won't Go Away — Could It Be Cystic or Hormonal Acne?` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Cystic Acne — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Cystic Acne is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> L70.0 — Acne vulgaris (cystic) (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Cystic Acne Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Cystic or nodulocystic acne involves deep, inflamed, painful nodules and cysts that can cause permanent scarring if untreated. It frequently has hormonal triggers — androgens stimulate sebaceous glands — and often requires prescription treatment with oral antibiotics, topical retinoids, spironolactone (for women), or isotretinoin. TeleDirectMD evaluates and prescribes for $79; severe isotretinoin candidates are referred for in-person iPLEDGE management.` }} />
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
            <h2>Cystic Acne Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adult age 18+ in one of 41 licensed states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Mild, moderate, or early-severe acne` }} />
              <li dangerouslySetInnerHTML={{ __html: `Not pregnant or actively trying to conceive` }} />
              <li dangerouslySetInnerHTML={{ __html: `No history of severe drug reaction to retinoids or tetracyclines` }} />
              <li dangerouslySetInnerHTML={{ __html: `Able to upload clear photos before/during visit` }} />
              <li dangerouslySetInnerHTML={{ __html: `Willing to commit to 12 weeks of consistent therapy` }} />
              <li dangerouslySetInnerHTML={{ __html: `No active eczema, rosacea, or perioral dermatitis flare on the same area` }} />
              <li dangerouslySetInnerHTML={{ __html: `Have a pharmacy where prescriptions can be sent` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Severe scarring nodulocystic acne — needs in-person derm and likely isotretinoin` }} />
              <li dangerouslySetInnerHTML={{ __html: `Pregnancy — most acne meds teratogenic` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acne fulminans (rare; severe systemic features) — urgent in-person derm` }} />
              <li dangerouslySetInnerHTML={{ __html: `Hidradenitis suppurativa — different disease` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acne unresponsive to 12+ weeks of well-conducted prescription therapy` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe drug allergy precluding standard topical/oral therapy` }} />
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
            <h2>How Cystic Acne Treatment Works Online</h2>
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
            <h2>What Causes Cystic Acne? Differential Diagnosis</h2>
            <p>Not all cystic acne is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cystic Acne differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Hormonal female cystic acne` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Adult women, jawline distribution, premenstrual flares. Often coexists with hirsutism or oligomenorrhea (consider PCOS).` }} />
                <td dangerouslySetInnerHTML={{ __html: `~50% of adult women with persistent acne` }} />
                <td dangerouslySetInnerHTML={{ __html: `Jawline/chin lesions; monthly cyclical flare; resistant to topical-only therapy.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — spironolactone after labs.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Moderate inflammatory acne` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Papules and pustules with occasional nodules. Antibiotic-responsive.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~40% of presenting cases` }} />
                <td dangerouslySetInnerHTML={{ __html: `Red papules + pustules; mild scarring possible; cheeks and forehead.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — tretinoin + oral doxycycline × 12 weeks.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Severe nodulocystic acne` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Deep painful nodules and cysts; substantial risk of scarring. Indicated for isotretinoin.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~10–15% of acne presentations` }} />
                <td dangerouslySetInnerHTML={{ __html: `Deep tender nodules &gt; 5 mm; fluctuant cysts; persistent erythema; scarring forming.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Initial telehealth + referral to in-person dermatology for isotretinoin.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Acne fulminans / acne conglobata` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Rare severe forms. Acne fulminans has fever, malaise, joint pain. Acne conglobata has draining sinus tracts.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Rare` }} />
                <td dangerouslySetInnerHTML={{ __html: `Systemic features; abscess-like tracts; severe scarring.` }} />
                <td dangerouslySetInnerHTML={{ __html: `In-person dermatology + possible hospitalization for acne fulminans.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Hidradenitis suppurativa` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Different disease entirely — recurrent painful abscesses in armpits, groin, under breasts. Sometimes mistaken for severe acne.` }} />
                <td dangerouslySetInnerHTML={{ __html: `1% of population` }} />
                <td dangerouslySetInnerHTML={{ __html: `Abscesses in skin folds (axilla, groin, perineum); sinus tracts; not face.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth screening + dermatology referral.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Cystic Acne Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Cystic Acne cost comparison">
                <h3>Typical Cystic Acne Visit Cost</h3>
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
            <h2>Cystic Acne Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for cystic acne. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cystic Acne medication options">
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
                <td><strong>tretinoin</strong> <span className="tdmd-sym__med-brand">(Retin-A, Altreno)</span></td>
                <td>topical cream/gel</td>
                <td>topical retinoid</td>
                <td dangerouslySetInnerHTML={{ __html: `Pea-sized nightly` }} />
                <td><a href="https://www.goodrx.com/retin-a" target="_blank" rel="noopener">$29–$93</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Initial dryness/peeling, photosensitivity; pregnancy contraindicated.` }} />
              </tr>
              <tr>
                <td><strong>doxycycline hyclate</strong> <span className="tdmd-sym__med-brand">(Vibramycin, Doryx)</span></td>
                <td>oral capsule</td>
                <td>tetracycline</td>
                <td dangerouslySetInnerHTML={{ __html: `100 mg BID × 12 weeks` }} />
                <td><a href="https://www.goodrx.com/doxycycline-hyclate" target="_blank" rel="noopener">$5–$80</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Photosensitivity, GI upset, esophagitis; pregnancy contraindicated.` }} />
              </tr>
              <tr>
                <td><strong>spironolactone</strong> <span className="tdmd-sym__med-brand">(Aldactone)</span></td>
                <td>oral tablet</td>
                <td>anti-androgen</td>
                <td dangerouslySetInnerHTML={{ __html: `50–100 mg daily` }} />
                <td><a href="https://www.goodrx.com/spironolactone" target="_blank" rel="noopener">$6–$29</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Hyperkalemia, breast tenderness, menstrual irregularity; pregnancy contraindicated.` }} />
              </tr>
              <tr>
                <td><strong>clindamycin-benzoyl peroxide</strong> <span className="tdmd-sym__med-brand">(BenzaClin, Onexton)</span></td>
                <td>topical gel</td>
                <td>antibiotic + benzoyl peroxide combination</td>
                <td dangerouslySetInnerHTML={{ __html: `Apply morning` }} />
                <td><a href="https://www.goodrx.com/clindamycin-benzoyl-peroxide" target="_blank" rel="noopener">$32–$45</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Skin dryness; bleaches fabrics.` }} />
              </tr>
              <tr>
                <td><strong>adapalene-benzoyl peroxide</strong> <span className="tdmd-sym__med-brand">(Epiduo, Epiduo Forte)</span></td>
                <td>topical gel</td>
                <td>retinoid + BP combination</td>
                <td dangerouslySetInnerHTML={{ __html: `Apply nightly` }} />
                <td><a href="https://www.goodrx.com/adapalene-benzoyl-peroxide" target="_blank" rel="noopener">$23–$328</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Initial irritation, photosensitivity; bleaches fabrics.` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `Sudden severe cystic acne in an adult with no prior history — rule out hormonal (PCOS, androgen excess), medication trigger (lithium, anabolic steroids, corticosteroids), or rare endocrine cause` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acne with fever, joint pain, or malaise (acne fulminans) — needs urgent dermatology` }} />
              <li dangerouslySetInnerHTML={{ __html: `Drainage with surrounding cellulitis or abscess — may need in-person incision/drainage` }} />
              <li dangerouslySetInnerHTML={{ __html: `Significant scarring already forming — accelerate to in-person dermatology for isotretinoin` }} />
              <li dangerouslySetInnerHTML={{ __html: `Suspected hidradenitis suppurativa (axilla/groin abscesses) — different disease pathway` }} />
              <li dangerouslySetInnerHTML={{ __html: `Pregnancy with severe acne — most acne medications are teratogenic` }} />
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
            <h2>What to Expect: Cystic Acne Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cystic Acne recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Week 1–2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Initial irritation from retinoid common — dryness, peeling. Use every other night, add moisturizer. May see transient 'purge' (deeper lesions surfacing).` }} />
              </tr>
              <tr>
                <td><strong>Week 4–6</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Skin tolerating retinoid; daily use established. Mild reduction in new lesions. Existing lesions still healing.` }} />
              </tr>
              <tr>
                <td><strong>Week 8–12</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `First clearly visible improvement. New lesion formation reduced 30–50%. Inflammatory lesions resolving.` }} />
              </tr>
              <tr>
                <td><strong>Month 4–6</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Antibiotic responders: significant clearing. Time to taper antibiotic to topical-only maintenance. Non-responders: escalate to spironolactone (women) or in-person derm.` }} />
              </tr>
              <tr>
                <td><strong>Maintenance (long-term)</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Acne is chronic — most patients need ongoing topical retinoid maintenance. Stopping too early is the leading cause of relapse.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Cystic Acne</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Gentle non-comedogenic cleanser twice daily — no scrubbing.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Non-comedogenic moisturizer morning and night.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Daily broad-spectrum SPF 30+ — non-negotiable on retinoids.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't pick, pop, or squeeze lesions — drives scarring.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Change pillowcases twice weekly; clean phone screen daily.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't share makeup; clean brushes weekly; replace every 3 months.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Use 'non-comedogenic' or 'oil-free' makeup, sunscreen, moisturizer.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid over-exfoliating — at most a gentle chemical exfoliant 1–2 times weekly.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Limit triggers: whey protein, comedogenic hair products, chronic friction.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Take photos every 4 weeks to track progress objectively.` }} />
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
              sectionTitle={`Frequently Asked Questions — Cystic Acne`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your cystic acne visit.</p>
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
              <li><a href="https://www.aad.org/member/clinical-quality/guidelines/acne" rel="noopener" target="_blank">AAD — Acne Clinical Guidelines</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2021/0801/p157.html" rel="noopener" target="_blank">AAFP — Acne Vulgaris: Diagnosis and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMcp2105382" rel="noopener" target="_blank">NEJM — Acne Vulgaris Review</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=doxycycline" rel="noopener" target="_blank">FDA DailyMed — Doxycycline</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/spironolactone" rel="noopener" target="_blank">GoodRx — Spironolactone Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Dermatology Resources</a>. Retrieved May 23, 2026.</li>
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
