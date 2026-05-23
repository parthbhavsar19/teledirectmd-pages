/**
 * SymptomAcneBreakout.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Acne Breakout
 * Slug:    /symptoms/acne-breakout/
 * ICD-10:  L70.0 — Acne vulgaris
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/acne-breakout/';
const PAGE_TITLE = `How to Get Rid of Acne Fast — Prescription vs. OTC | TeleDirectMD`;
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
    generic: `tretinoin cream/gel`,
    brand: `Retin-A, Altreno, Atralin`,
    form: `topical cream/gel`,
    drugClass: `topical retinoid`,
    dose: `Pea-sized amount nightly`,
    price: `$29–$288`,
    priceUrl: `https://www.goodrx.com/tretinoin`,
    priceLabel: `GoodRx`,
    sideEffects: `Initial dryness, peeling, redness, photosensitivity; pregnancy contraindicated.`,
  },
  {
    generic: `adapalene`,
    brand: `Differin`,
    form: `topical gel`,
    drugClass: `topical retinoid`,
    dose: `Pea-sized amount nightly`,
    price: `$13–$83`,
    priceUrl: `https://www.goodrx.com/adapalene`,
    priceLabel: `GoodRx`,
    sideEffects: `Initial irritation; photosensitivity; pregnancy category C.`,
  },
  {
    generic: `clindamycin phosphate`,
    brand: `Cleocin-T, ClindaMax`,
    form: `topical solution / gel / lotion`,
    drugClass: `topical lincosamide antibiotic`,
    dose: `Apply twice daily`,
    price: `$14–$24`,
    priceUrl: `https://www.goodrx.com/clindamycin`,
    priceLabel: `GoodRx`,
    sideEffects: `Skin dryness; rare C. difficile colitis. Always pair with benzoyl peroxide.`,
  },
  {
    generic: `doxycycline hyclate`,
    brand: `Vibramycin, Doryx`,
    form: `oral capsule/tablet`,
    drugClass: `tetracycline antibiotic`,
    dose: `100 mg PO BID × 12 weeks`,
    price: `$5–$80`,
    priceUrl: `https://www.goodrx.com/doxycycline-hyclate`,
    priceLabel: `GoodRx`,
    sideEffects: `Photosensitivity, GI upset, esophagitis (take with full glass of water and stay upright); contraindicated in pregnancy.`,
  },
  {
    generic: `spironolactone`,
    brand: `Aldactone`,
    form: `oral tablet`,
    drugClass: `potassium-sparing diuretic / anti-androgen`,
    dose: `50–100 mg PO daily`,
    price: `$9–$16`,
    priceUrl: `https://www.goodrx.com/spironolactone`,
    priceLabel: `GoodRx`,
    sideEffects: `Hyperkalemia, breast tenderness, menstrual irregularity, dizziness. Monitor K+ and creatinine. Contraindicated in pregnancy.`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `How fast can prescription acne treatment work?`,
    answerPlain: `Topical tretinoin: visible improvement in 6–12 weeks. Oral doxycycline: 4–8 weeks for inflammatory lesions. Spironolactone: 8–16 weeks. Isotretinoin: 4–6 months for full clearance. There is no overnight fix; setting realistic expectations is part of every visit.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Topical tretinoin: visible improvement in 6–12 weeks. Oral doxycycline: 4–8 weeks for inflammatory lesions. Spironolactone: 8–16 weeks. Isotretinoin: 4–6 months for full clearance. There is no overnight fix; setting realistic expectations is part of every visit.` }} />
    ),
  },
  {
    question: `Can I get a tretinoin prescription online?`,
    answerPlain: `Yes. TeleDirectMD's $79 visit covers tretinoin 0.025% to 0.1% for chronic acne. Generic tretinoin runs (see medication table). Brand-name Retin-A, Altreno, or Atralin can run $200+ even with insurance. Most patients use generic cream successfully.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes. TeleDirectMD's $79 visit covers tretinoin 0.025% to 0.1% for chronic acne. Generic tretinoin runs (see medication table). Brand-name Retin-A, Altreno, or Atralin can run $200+ even with insurance. Most patients use generic cream successfully.` }} />
    ),
  },
  {
    question: `What\'s the difference between OTC and prescription retinoids?`,
    answerPlain: `OTC adapalene 0.1% (Differin Gel) is genuinely effective and cheaper than most prescriptions ($13). Prescription tretinoin and adapalene 0.3% are stronger and faster but require a prescription. For mild acne, OTC adapalene is a reasonable first choice.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `OTC adapalene 0.1% (Differin Gel) is genuinely effective and cheaper than most prescriptions ($13). Prescription tretinoin and adapalene 0.3% are stronger and faster but require a prescription. For mild acne, OTC adapalene is a reasonable first choice.` }} />
    ),
  },
  {
    question: `Does benzoyl peroxide bleach fabrics?`,
    answerPlain: `Yes — benzoyl peroxide oxidizes dyes and will bleach colored sheets, pillowcases, towels, and shirts. Use white cotton bedding while on benzoyl peroxide and let it dry fully before bed.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — benzoyl peroxide oxidizes dyes and will bleach colored sheets, pillowcases, towels, and shirts. Use white cotton bedding while on benzoyl peroxide and let it dry fully before bed.` }} />
    ),
  },
  {
    question: `Are oral antibiotics safe to take long-term for acne?`,
    answerPlain: `Oral antibiotics for acne are typically used for 12 weeks and should not exceed 3–4 months without re-evaluation. Long-term courses drive antibiotic resistance and gut-microbiome disruption. Always pair with topical retinoid + benzoyl peroxide to reduce resistance.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Oral antibiotics for acne are typically used for 12 weeks and should not exceed 3–4 months without re-evaluation. Long-term courses drive antibiotic resistance and gut-microbiome disruption. Always pair with topical retinoid + benzoyl peroxide to reduce resistance.` }} />
    ),
  },
  {
    question: `Will telehealth treat hormonal acne in women?`,
    answerPlain: `Yes. Spironolactone is appropriate for adult women with a hormonal pattern (jawline distribution, premenstrual flares) and no contraindications. Baseline potassium and creatinine labs are ordered through a local lab. Combined oral contraceptives are another option.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes. Spironolactone is appropriate for adult women with a hormonal pattern (jawline distribution, premenstrual flares) and no contraindications. Baseline potassium and creatinine labs are ordered through a local lab. Combined oral contraceptives are another option.` }} />
    ),
  },
  {
    question: `How much does prescription acne treatment cost?`,
    answerPlain: `$79 for the TeleDirectMD visit. Generic tretinoin: $24–$70/month. Generic doxycycline: $15/month. Spironolactone: $10–$30/month. Most patients on combinations spend (see medication table) — far less than a single in-person derm visit.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `$79 for the TeleDirectMD visit. Generic tretinoin: $24–$70/month. Generic doxycycline: $15/month. Spironolactone: $10–$30/month. Most patients on combinations spend (see medication table) — far less than a single in-person derm visit.` }} />
    ),
  },
  {
    question: `When should I see a dermatologist instead of telehealth?`,
    answerPlain: `If you have cystic or scarring acne, treatment-resistant moderate acne after 12+ weeks of well-conducted prescription therapy, or you are a candidate for isotretinoin. Isotretinoin requires in-person derm with monthly bloodwork and the iPLEDGE program.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If you have cystic or scarring acne, treatment-resistant moderate acne after 12+ weeks of well-conducted prescription therapy, or you are a candidate for isotretinoin. Isotretinoin requires in-person derm with monthly bloodwork and the iPLEDGE program.` }} />
    ),
  },
  {
    question: `Can stress cause acne breakouts?`,
    answerPlain: `Indirectly, yes. Stress raises cortisol and androgens, which can trigger sebum production and inflammatory flares. Managing sleep and stress helps but is not a substitute for medical therapy in moderate-to-severe acne.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Indirectly, yes. Stress raises cortisol and androgens, which can trigger sebum production and inflammatory flares. Managing sleep and stress helps but is not a substitute for medical therapy in moderate-to-severe acne.` }} />
    ),
  },
  {
    question: `Does diet affect acne?`,
    answerPlain: `High-glycemic-load diets and skim milk have moderate evidence for triggering acne in susceptible patients per AAD guidelines. Whey protein supplements often worsen acne. Low-glycemic diet may help; the effect is modest compared to topical and oral therapy.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `High-glycemic-load diets and skim milk have moderate evidence for triggering acne in susceptible patients per AAD guidelines. Whey protein supplements often worsen acne. Low-glycemic diet may help; the effect is modest compared to topical and oral therapy.` }} />
    ),
  },
  {
    question: `Will my acne come back after I stop treatment?`,
    answerPlain: `Acne is chronic; most patients need ongoing topical retinoid (tretinoin or adapalene) for maintenance to prevent recurrence. Stopping all therapy too early is the leading cause of relapse. Isotretinoin offers ~80% long-term remission.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Acne is chronic; most patients need ongoing topical retinoid (tretinoin or adapalene) for maintenance to prevent recurrence. Stopping all therapy too early is the leading cause of relapse. Isotretinoin offers ~80% long-term remission.` }} />
    ),
  },
  {
    question: `Can I get a same-day acne prescription?`,
    answerPlain: `Yes. Most patients booking before 6 PM get a same-day prescription sent to their pharmacy. Photos uploaded with the booking speed the visit. Refills for stable acne therapy are routine $79 visits.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes. Most patients booking before 6 PM get a same-day prescription sent to their pharmacy. Photos uploaded with the booking speed the visit. Refills for stable acne therapy are routine $79 visits.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/acne-treatment-online/', label: 'Acne Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/birth-control-refills-online/', label: 'Birth Control Refills Online' },
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
    description: `Bad acne breakouts respond best to prescription tretinoin, topical clindamycin, or oral doxycycline. $79 telehealth visit; same-day Rx. 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Acne Vulgaris',
      alternateName: ['Acne Vulgaris', 'Pimples', 'Breakout', 'Comedonal Acne'],
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
        '#sym-acne-breakout-opening',
        '#sym-acne-breakout-opening p',
        '.tdmd-sym__byline',
        '#sym-acne-breakout-faq',
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
    name: `How to Get Acne Treatment Online`,
    description: `Three steps to receive personalized acne evaluation and prescription from a board-certified family medicine physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select acne treatment on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/acne-breakout/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews acne type, severity, prior treatments, and skin history. Photos of affected areas reviewed.`, url: `https://teledirectmd.com/symptoms/acne-breakout/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your prescription and skincare plan`, text: `Topical retinoid, antibiotic, or oral medication prescribed as appropriate, along with a personalized skincare routine.`, url: `https://teledirectmd.com/symptoms/acne-breakout/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Acne Breakout`, item: PAGE_URL },
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
export default function SymptomAcneBreakout() {
  const schemas = buildSchemas();
  const pid = 'sym-acne-breakout';

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
            <span aria-current="page">Acne Breakout</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `How to Get Rid of an Acne Breakout — What a Family Doctor Actually Prescribes` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Acne Breakout — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Acne Breakout is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> L70.0 — Acne vulgaris (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Acne Breakout Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Acne occurs when excess sebum, dead skin cells, and bacteria (Propionibacterium acnes) block follicles, producing comedones, papules, pustules, and sometimes nodules. TeleDirectMD can evaluate acne type and severity by video, review prior treatments and skin sensitivities, and prescribe topical retinoids, antibiotics, or oral agents for $79. Clear follow-up skin-care guidance is provided with every visit.` }} />
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
            <h2>Acne Breakout Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adult age 18 or older located in one of 41 licensed states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Mild, moderate, or early severe acne` }} />
              <li dangerouslySetInnerHTML={{ __html: `Not pregnant and not actively trying to conceive (tretinoin and tetracyclines are contraindicated; spironolactone is teratogenic)` }} />
              <li dangerouslySetInnerHTML={{ __html: `No history of severe drug allergy to retinoids or tetracyclines` }} />
              <li dangerouslySetInnerHTML={{ __html: `Able to upload clear photos of affected areas before or during the visit` }} />
              <li dangerouslySetInnerHTML={{ __html: `Willing to commit to 8–12 weeks of consistent therapy` }} />
              <li dangerouslySetInnerHTML={{ __html: `No active eczema, rosacea, or perioral dermatitis flare on the same area` }} />
              <li dangerouslySetInnerHTML={{ __html: `Have a pharmacy where prescriptions can be sent` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Severe nodulocystic or scarring acne — needs in-person dermatology and likely isotretinoin` }} />
              <li dangerouslySetInnerHTML={{ __html: `Pregnant or actively trying to conceive — most acne medications are teratogenic` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acne fulminans (rare; severe systemic symptoms with skin)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Hidradenitis suppurativa — different disease, derm required` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acne not responding to 12+ weeks of well-conducted prescription therapy` }} />
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
            <h2>How Acne Breakout Treatment Works Online</h2>
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
            <h2>What Causes Acne Breakout? Differential Diagnosis</h2>
            <p>Not all acne breakout is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Acne Breakout differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Comedonal acne (mild)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Predominantly whiteheads and blackheads with few inflammatory papules. T-zone distribution.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Most common acne presentation in adolescents` }} />
                <td dangerouslySetInnerHTML={{ __html: `Open and closed comedones; minimal redness; minimal pain.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — topical adapalene + benzoyl peroxide; OTC adequate for many.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Inflammatory papulopustular acne (moderate)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Red papules and pustules predominate. Often coexists with comedones.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~40% of acne cases seek care` }} />
                <td dangerouslySetInnerHTML={{ __html: `Red bumps and pustules; tender; predominantly cheeks, chin.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — tretinoin + topical clindamycin or BP; oral doxycycline if severe.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Nodular / cystic acne (severe)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Deep, painful, often-scarring nodules and cysts under the skin. High risk of permanent scarring.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~10–15% of acne presentations` }} />
                <td dangerouslySetInnerHTML={{ __html: `Deep, painful nodules; cysts; often jawline and cheeks; scars from prior lesions.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth for initial workup; refer to in-person dermatology for isotretinoin.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Hormonal female acne` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Adult-onset acne in women with jawline distribution and monthly flares. Often coexists with hirsutism or irregular periods.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~50% of adult women with acne` }} />
                <td dangerouslySetInnerHTML={{ __html: `Jawline / chin distribution; flares 1 week before menses; resistant to topical-only therapy.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — spironolactone after labs; topical retinoid; consider combined OCP.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Acne mimickers` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Rosacea, perioral dermatitis, folliculitis, and pseudofolliculitis barbae can look like acne but require different treatment.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common misdiagnosis` }} />
                <td dangerouslySetInnerHTML={{ __html: `Rosacea: flushing, central face, no comedones. Perioral dermatitis: papules around mouth/nose, often after topical steroid use.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — diagnosis-specific therapy; some require ivermectin or different antibiotics.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Acne Breakout Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Acne Breakout cost comparison">
                <h3>Typical Acne Breakout Visit Cost</h3>
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
            <h2>Acne Breakout Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for acne breakout. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Acne Breakout medication options">
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
                <td><strong>tretinoin cream/gel</strong> <span className="tdmd-sym__med-brand">(Retin-A, Altreno, Atralin)</span></td>
                <td>topical cream/gel</td>
                <td>topical retinoid</td>
                <td dangerouslySetInnerHTML={{ __html: `Pea-sized amount nightly` }} />
                <td><a href="https://www.goodrx.com/tretinoin" target="_blank" rel="noopener">$29–$288</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Initial dryness, peeling, redness, photosensitivity; pregnancy contraindicated.` }} />
              </tr>
              <tr>
                <td><strong>adapalene</strong> <span className="tdmd-sym__med-brand">(Differin)</span></td>
                <td>topical gel</td>
                <td>topical retinoid</td>
                <td dangerouslySetInnerHTML={{ __html: `Pea-sized amount nightly` }} />
                <td><a href="https://www.goodrx.com/adapalene" target="_blank" rel="noopener">$13–$83</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Initial irritation; photosensitivity; pregnancy category C.` }} />
              </tr>
              <tr>
                <td><strong>clindamycin phosphate</strong> <span className="tdmd-sym__med-brand">(Cleocin-T, ClindaMax)</span></td>
                <td>topical solution / gel / lotion</td>
                <td>topical lincosamide antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `Apply twice daily` }} />
                <td><a href="https://www.goodrx.com/clindamycin" target="_blank" rel="noopener">$14–$24</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Skin dryness; rare C. difficile colitis. Always pair with benzoyl peroxide.` }} />
              </tr>
              <tr>
                <td><strong>doxycycline hyclate</strong> <span className="tdmd-sym__med-brand">(Vibramycin, Doryx)</span></td>
                <td>oral capsule/tablet</td>
                <td>tetracycline antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `100 mg PO BID × 12 weeks` }} />
                <td><a href="https://www.goodrx.com/doxycycline-hyclate" target="_blank" rel="noopener">$5–$80</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Photosensitivity, GI upset, esophagitis (take with full glass of water and stay upright); contraindicated in pregnancy.` }} />
              </tr>
              <tr>
                <td><strong>spironolactone</strong> <span className="tdmd-sym__med-brand">(Aldactone)</span></td>
                <td>oral tablet</td>
                <td>potassium-sparing diuretic / anti-androgen</td>
                <td dangerouslySetInnerHTML={{ __html: `50–100 mg PO daily` }} />
                <td><a href="https://www.goodrx.com/spironolactone" target="_blank" rel="noopener">$9–$16</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Hyperkalemia, breast tenderness, menstrual irregularity, dizziness. Monitor K+ and creatinine. Contraindicated in pregnancy.` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `Sudden severe cystic acne in an adult with no prior history — rule out hormonal cause (PCOS, androgen excess), medication trigger (steroids, lithium), or rare endocrine tumor` }} />
              <li dangerouslySetInnerHTML={{ __html: `Painful nodules with fever, malaise, or arthritis — consider acne fulminans (rare)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acne with significant scarring already forming — accelerate to isotretinoin via in-person dermatology` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acne suspicious for gram-negative folliculitis after long-term antibiotics` }} />
              <li dangerouslySetInnerHTML={{ __html: `Hidradenitis suppurativa (deep abscesses in armpits, groin) — different disease requiring derm` }} />
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
            <h2>What to Expect: Acne Breakout Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Acne Breakout recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Week 1–2 of treatment</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Initial irritation common with topical retinoids — dryness, peeling, redness. Use only every other night and apply moisturizer afterward. No visible acne improvement yet — sometimes a transient 'purge' (deeper lesions surfacing).` }} />
              </tr>
              <tr>
                <td><strong>Week 4–6</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Skin tolerating retinoid; daily use established. Mild reduction in new lesion formation. Existing lesions still healing.` }} />
              </tr>
              <tr>
                <td><strong>Week 8–12</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `First clearly visible improvement on photographs. Existing inflammatory lesions resolving; new lesion formation reduced 30–50%.` }} />
              </tr>
              <tr>
                <td><strong>Month 4–6</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `For oral antibiotic responders: significant clearing. Time to taper antibiotic and continue topical therapy alone. For non-responders, consider escalation to spironolactone (women) or in-person derm for isotretinoin.` }} />
              </tr>
              <tr>
                <td><strong>Maintenance</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Acne is chronic — most patients need ongoing topical retinoid (tretinoin or adapalene) to prevent recurrence. Stopping treatment too early is the leading cause of relapse.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Acne Breakout</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Wash face twice daily with a gentle non-comedogenic cleanser (Cetaphil, CeraVe Foaming, Vanicream). No scrubbing.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Apply non-comedogenic moisturizer morning and night — even oily skin needs it, especially while on retinoids.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Daily broad-spectrum SPF 30+ sunscreen — non-negotiable on retinoids and oral antibiotics.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid picking, popping, or squeezing lesions — drives scarring and post-inflammatory hyperpigmentation.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Change pillowcases twice weekly; clean phone screen daily.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't share makeup; replace makeup brushes every 3 months and clean weekly.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Use 'non-comedogenic' or 'oil-free' makeup, sunscreen, and moisturizers.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't over-exfoliate — at most a gentle chemical exfoliant 1–2 times per week.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Limit known triggers if you notice them: whey protein supplements, some hair pomades, chronic friction (helmets, masks).` }} />
              <li dangerouslySetInnerHTML={{ __html: `Take photos every 4 weeks to track progress objectively — month-to-month change is hard to see in the mirror.` }} />
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
              sectionTitle={`Frequently Asked Questions — Acne Breakout`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your acne breakout visit.</p>
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
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tretinoin+topical" rel="noopener" target="_blank">FDA DailyMed — Tretinoin Topical</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/tretinoin" rel="noopener" target="_blank">GoodRx — Tretinoin Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMcp2105382" rel="noopener" target="_blank">NEJM — Acne Vulgaris: Review</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/antibiotic-use/index.html" rel="noopener" target="_blank">CDC — Antibiotic Stewardship</a>. Retrieved May 23, 2026.</li>
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
