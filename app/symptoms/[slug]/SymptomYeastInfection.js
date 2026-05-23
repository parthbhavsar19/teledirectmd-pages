/**
 * SymptomYeastInfection.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Yeast Infection
 * Slug:    /symptoms/yeast-infection/
 * ICD-10:  B37.3 — Candidiasis of vulva and vagina
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/yeast-infection/';
const PAGE_TITLE = `Yeast Infection Treatment Online — Fluconazole Rx in 1 Hour | TeleDirectMD`;
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
    generic: `Fluconazole`,
    brand: `Diflucan`,
    form: `Oral tablet`,
    drugClass: `Triazole antifungal`,
    dose: `150 mg PO single dose; may repeat in 72 hours`,
    price: `$3–$29`,
    priceUrl: `https://www.goodrx.com/fluconazole`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, nausea; avoid in pregnancy`,
  },
  {
    generic: `Miconazole`,
    brand: `Monistat`,
    form: `Vaginal cream/suppository`,
    drugClass: `Topical imidazole antifungal`,
    dose: `1, 3, or 7 day regimens available`,
    price: `$11–$19`,
    priceUrl: `https://www.goodrx.com/monistat-1`,
    priceLabel: `GoodRx`,
    sideEffects: `Local burning, irritation`,
  },
  {
    generic: `Clotrimazole`,
    brand: `Gyne-Lotrimin`,
    form: `Vaginal cream/tablet`,
    drugClass: `Topical imidazole antifungal`,
    dose: `100 mg vaginal × 7 days`,
    price: `$5–$13`,
    priceUrl: `https://www.goodrx.com/clotrimazole-non-prescription/what-is`,
    priceLabel: `GoodRx`,
    sideEffects: `Local burning`,
  },
  {
    generic: `Terconazole`,
    brand: `Terazol`,
    form: `Vaginal cream`,
    drugClass: `Topical triazole antifungal`,
    dose: `0.4% cream × 7 days or 0.8% × 3 days`,
    price: `$9–$45`,
    priceUrl: `https://www.goodrx.com/terconazole`,
    priceLabel: `GoodRx`,
    sideEffects: `Local irritation, headache`,
  },
  {
    generic: `Metronidazole (if BV)`,
    brand: `Flagyl`,
    form: `Oral tablet`,
    drugClass: `Nitroimidazole antibiotic`,
    dose: `500 mg BID × 7 days`,
    price: `$5–$22`,
    priceUrl: `https://www.goodrx.com/metronidazole`,
    priceLabel: `GoodRx`,
    sideEffects: `Metallic taste, GI upset; avoid alcohol`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Can a telehealth doctor prescribe fluconazole?`,
    answerPlain: `Yes — fluconazole (Diflucan) is a non-controlled medication. Dr. Bhavsar can prescribe a single 150 mg oral dose for uncomplicated yeast infections. The prescription is sent to your pharmacy within an hour.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — fluconazole (Diflucan) is a non-controlled medication. Dr. Bhavsar can prescribe a single 150 mg oral dose for uncomplicated yeast infections. The prescription is sent to your pharmacy within an hour.` }} />
    ),
  },
  {
    question: `Should I just buy Monistat over the counter?`,
    answerPlain: `That's reasonable for classic recurrent symptoms you've had before. But about 33% of women who self-diagnose yeast actually have BV, trichomoniasis, or contact dermatitis — those won't respond to Monistat. A $79 telehealth visit lets us confirm and treat correctly the first time.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `That's reasonable for classic recurrent symptoms you've had before. But about 33% of women who self-diagnose yeast actually have BV, trichomoniasis, or contact dermatitis — those won't respond to Monistat. A $79 telehealth visit lets us confirm and treat correctly the first time.` }} />
    ),
  },
  {
    question: `How fast does fluconazole work?`,
    answerPlain: `Most women notice itching and burning improve within 24–48 hours. Full symptom resolution typically by day 5–7. If you're not better at 72 hours, message us — a second dose or different therapy may be needed.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most women notice itching and burning improve within 24–48 hours. Full symptom resolution typically by day 5–7. If you're not better at 72 hours, message us — a second dose or different therapy may be needed.` }} />
    ),
  },
  {
    question: `Is fluconazole safe in pregnancy?`,
    answerPlain: `No — oral fluconazole is avoided in pregnancy due to possible teratogenic effects. CDC and ACOG recommend topical azoles (miconazole or clotrimazole 7-day course) instead. Always tell us if you're pregnant or trying.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No — oral fluconazole is avoided in pregnancy due to possible teratogenic effects. CDC and ACOG recommend topical azoles (miconazole or clotrimazole 7-day course) instead. Always tell us if you're pregnant or trying.` }} />
    ),
  },
  {
    question: `Why do I keep getting yeast infections?`,
    answerPlain: `Common triggers: recent antibiotics, hormonal contraceptives, pregnancy, uncontrolled diabetes, immunosuppression, tight clothing, and frequent douching. If you have ≥4 episodes/year, you have recurrent VVC and need a different plan: culture, longer induction, then 6-month suppression.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Common triggers: recent antibiotics, hormonal contraceptives, pregnancy, uncontrolled diabetes, immunosuppression, tight clothing, and frequent douching. If you have &ge;4 episodes/year, you have recurrent VVC and need a different plan: culture, longer induction, then 6-month suppression.` }} />
    ),
  },
  {
    question: `Can a man get a yeast infection from his partner?`,
    answerPlain: `Rarely — male candidiasis (balanitis) presents as an itchy red rash on the glans. Not considered an STI; treat with topical antifungal. Routine partner treatment is not recommended for typical female VVC, but symptomatic partners should be treated.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Rarely — male candidiasis (balanitis) presents as an itchy red rash on the glans. Not considered an STI; treat with topical antifungal. Routine partner treatment is not recommended for typical female VVC, but symptomatic partners should be treated.` }} />
    ),
  },
  {
    question: `What\'s the difference between yeast and BV?`,
    answerPlain: `Yeast: thick white "cottage cheese" discharge, intense itch, no odor, burning. BV: thin gray-white discharge, fishy odor (especially after sex), mild irritation, no intense itch. The treatments are completely different — that's why getting the diagnosis right matters.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yeast: thick white "cottage cheese" discharge, intense itch, no odor, burning. BV: thin gray-white discharge, fishy odor (especially after sex), mild irritation, no intense itch. The treatments are completely different — that's why getting the diagnosis right matters.` }} />
    ),
  },
  {
    question: `Is yeast an STI?`,
    answerPlain: `No. Candida is part of normal flora; overgrowth happens for non-sexual reasons. However, sexual activity can sometimes trigger flares due to friction, lubricant changes, or microbiome disruption.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No. Candida is part of normal flora; overgrowth happens for non-sexual reasons. However, sexual activity can sometimes trigger flares due to friction, lubricant changes, or microbiome disruption.` }} />
    ),
  },
  {
    question: `Can I have sex with a yeast infection?`,
    answerPlain: `It's not dangerous but usually uncomfortable. Sex can worsen burning and slightly delay healing. Most women prefer to wait until symptoms resolve. If you do have sex, use a non-irritating lubricant.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `It's not dangerous but usually uncomfortable. Sex can worsen burning and slightly delay healing. Most women prefer to wait until symptoms resolve. If you do have sex, use a non-irritating lubricant.` }} />
    ),
  },
  {
    question: `What if symptoms don\'t improve in 3 days?`,
    answerPlain: `Message us. Possibilities: the diagnosis isn't yeast (could be BV, trichomoniasis, or dermatitis); the strain is non-albicans (resistant to single-dose fluconazole); or recurrent VVC requiring induction therapy. We can adjust the plan.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Message us. Possibilities: the diagnosis isn't yeast (could be BV, trichomoniasis, or dermatitis); the strain is non-albicans (resistant to single-dose fluconazole); or recurrent VVC requiring induction therapy. We can adjust the plan.` }} />
    ),
  },
  {
    question: `Are probiotics helpful?`,
    answerPlain: `Modest evidence — Lactobacillus probiotics (oral or vaginal) may reduce recurrence in women with frequent infections. Not a substitute for antifungals during an active infection. Brand quality varies; look for Lactobacillus rhamnosus or L. reuteri strains.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Modest evidence — Lactobacillus probiotics (oral or vaginal) may reduce recurrence in women with frequent infections. Not a substitute for antifungals during an active infection. Brand quality varies; look for Lactobacillus rhamnosus or L. reuteri strains.` }} />
    ),
  },
  {
    question: `Does eating yogurt help?`,
    answerPlain: `Probably not significantly. The strains in most yogurts don't reliably reach the vagina. Targeted Lactobacillus probiotic supplements are more effective if you want to try probiotic prophylaxis.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Probably not significantly. The strains in most yogurts don't reliably reach the vagina. Targeted Lactobacillus probiotic supplements are more effective if you want to try probiotic prophylaxis.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/yeast-infection-treatment-online/', label: 'Yeast Infection Treatment Online' },
  { slug: '/uti-treatment-online/', label: 'UTI Treatment Online' },
  { slug: '/birth-control-refills-online/', label: 'Birth Control Refills Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Itching, thick white discharge, burning? Most uncomplicated yeast infections treat with one fluconazole pill or 1–7 day topical. $79 telehealth visit, prescription same day.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Vulvovaginal Candidiasis (Yeast Infection)',
      alternateName: ['Vulvovaginal Candidiasis', 'Candidal Vaginitis', 'Vaginal Thrush'],
      code: { '@type': 'MedicalCode', code: 'B37.3', codingSystem: 'ICD-10-CM' },
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
        '#sym-yeast-infection-opening',
        '#sym-yeast-infection-opening p',
        '.tdmd-sym__byline',
        '#sym-yeast-infection-faq',
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
    name: `How to Get Yeast Infection Treatment Online`,
    description: `Three steps to receive vaginal yeast infection evaluation and Diflucan prescription from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select yeast infection on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/yeast-infection/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews symptom pattern, discharge characteristics, and screens for complicated infection or alternative diagnosis.`, url: `https://teledirectmd.com/symptoms/yeast-infection/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your prescription`, text: `Fluconazole (Diflucan) 150 mg single dose or multi-day regimen prescribed and sent to your pharmacy same day.`, url: `https://teledirectmd.com/symptoms/yeast-infection/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Yeast Infection`, item: PAGE_URL },
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
export default function SymptomYeastInfection() {
  const schemas = buildSchemas();
  const pid = 'sym-yeast-infection';

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
            <span aria-current="page">Yeast Infection</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Vaginal Yeast Infection — Same-Day Diflucan Online` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Yeast Infection — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Yeast Infection is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> B37.3 — Candidiasis of vulva and vagina (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Yeast Infection Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Vulvovaginal candidiasis (vaginal yeast infection) is caused by Candida albicans in 85–90% of cases, producing itching, thick white "cottage cheese" discharge, and vulvar burning. Uncomplicated infections respond to a single dose of fluconazole (Diflucan) 150 mg orally. TeleDirectMD distinguishes yeast from BV and STI symptoms before prescribing, offering same-day fluconazole prescriptions for $79.` }} />
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
            <h2>Yeast Infection Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Women 18+ in our 41 states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Classic itching + thick white discharge + no odor` }} />
              <li dangerouslySetInnerHTML={{ __html: `First episode or infrequent recurrence` }} />
              <li dangerouslySetInnerHTML={{ __html: `Not pregnant (or willing to use topical-only therapy)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Not currently on warfarin (interaction with fluconazole)` }} />
              <li dangerouslySetInnerHTML={{ __html: `No fever or pelvic pain` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want fast same-day prescription` }} />
              <li dangerouslySetInnerHTML={{ __html: `Need treatment without in-person exam embarrassment` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Pelvic pain, fever, or new abdominal pain — possible PID, needs in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `First-ever vaginal symptoms — recommended to confirm diagnosis in person at least once` }} />
              <li dangerouslySetInnerHTML={{ __html: `Bloody discharge or post-menopausal bleeding — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `4+ infections in a year — needs culture and structured induction` }} />
              <li dangerouslySetInnerHTML={{ __html: `Pregnancy with severe symptoms — OB evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe vulvar lesions or ulcers — in-person exam` }} />
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
            <h2>How Yeast Infection Treatment Works Online</h2>
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
            <h2>What Causes Yeast Infection? Differential Diagnosis</h2>
            <p>Not all yeast infection is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Yeast Infection differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Vulvovaginal candidiasis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Overgrowth of Candida species in the vagina.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~75% of women lifetime` }} />
                <td dangerouslySetInnerHTML={{ __html: `Intense itching, thick white discharge, no odor, burning with urination/sex` }} />
                <td dangerouslySetInnerHTML={{ __html: `Single fluconazole 150 mg PO, or topical clotrimazole/miconazole 1–7 days` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Bacterial vaginosis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Overgrowth of anaerobic bacteria displacing normal lactobacilli.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Most common vaginitis (~30% of women)` }} />
                <td dangerouslySetInnerHTML={{ __html: `Thin gray-white discharge, fishy odor (worse after sex), mild irritation, NO intense itch` }} />
                <td dangerouslySetInnerHTML={{ __html: `Metronidazole 500 mg PO BID × 7 days, or clindamycin cream` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Trichomoniasis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Sexually transmitted protozoan infection.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~3–4 million US cases/year` }} />
                <td dangerouslySetInnerHTML={{ __html: `Frothy yellow-green discharge, strawberry cervix, fishy odor, dyspareunia` }} />
                <td dangerouslySetInnerHTML={{ __html: `Metronidazole 2 g PO single dose; partner treatment; STI screen` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Allergic / contact vulvitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Reaction to soaps, detergents, latex, lubricants, or feminine sprays.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common — often misdiagnosed as yeast` }} />
                <td dangerouslySetInnerHTML={{ __html: `Burning > itching, no discharge, recent product use, redness` }} />
                <td dangerouslySetInnerHTML={{ __html: `Identify and stop trigger; topical hydrocortisone 1% short course` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Atrophic vaginitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Estrogen-deficiency thinning of vaginal tissue (postmenopausal).` }} />
                <td dangerouslySetInnerHTML={{ __html: `~50% of postmenopausal women` }} />
                <td dangerouslySetInnerHTML={{ __html: `Dryness, burning, dyspareunia, light spotting, thin pale tissue` }} />
                <td dangerouslySetInnerHTML={{ __html: `Vaginal estrogen cream or moisturizer` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Yeast Infection Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Yeast Infection cost comparison">
                <h3>Typical Yeast Infection Visit Cost</h3>
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
            <h2>Yeast Infection Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for yeast infection. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Yeast Infection medication options">
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
                <td><strong>Fluconazole</strong> <span className="tdmd-sym__med-brand">(Diflucan)</span></td>
                <td>Oral tablet</td>
                <td>Triazole antifungal</td>
                <td dangerouslySetInnerHTML={{ __html: `150 mg PO single dose; may repeat in 72 hours` }} />
                <td><a href="https://www.goodrx.com/fluconazole" target="_blank" rel="noopener">$3–$29</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, nausea; avoid in pregnancy` }} />
              </tr>
              <tr>
                <td><strong>Miconazole</strong> <span className="tdmd-sym__med-brand">(Monistat)</span></td>
                <td>Vaginal cream/suppository</td>
                <td>Topical imidazole antifungal</td>
                <td dangerouslySetInnerHTML={{ __html: `1, 3, or 7 day regimens available` }} />
                <td><a href="https://www.goodrx.com/monistat-1" target="_blank" rel="noopener">$11–$19</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Local burning, irritation` }} />
              </tr>
              <tr>
                <td><strong>Clotrimazole</strong> <span className="tdmd-sym__med-brand">(Gyne-Lotrimin)</span></td>
                <td>Vaginal cream/tablet</td>
                <td>Topical imidazole antifungal</td>
                <td dangerouslySetInnerHTML={{ __html: `100 mg vaginal × 7 days` }} />
                <td><a href="https://www.goodrx.com/clotrimazole-non-prescription/what-is" target="_blank" rel="noopener">$5–$13</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Local burning` }} />
              </tr>
              <tr>
                <td><strong>Terconazole</strong> <span className="tdmd-sym__med-brand">(Terazol)</span></td>
                <td>Vaginal cream</td>
                <td>Topical triazole antifungal</td>
                <td dangerouslySetInnerHTML={{ __html: `0.4% cream × 7 days or 0.8% × 3 days` }} />
                <td><a href="https://www.goodrx.com/terconazole" target="_blank" rel="noopener">$9–$45</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Local irritation, headache` }} />
              </tr>
              <tr>
                <td><strong>Metronidazole (if BV)</strong> <span className="tdmd-sym__med-brand">(Flagyl)</span></td>
                <td>Oral tablet</td>
                <td>Nitroimidazole antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg BID × 7 days` }} />
                <td><a href="https://www.goodrx.com/metronidazole" target="_blank" rel="noopener">$5–$22</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Metallic taste, GI upset; avoid alcohol` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Pregnancy</strong> — avoid oral fluconazole; use topical only` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Pelvic pain or fever</strong> — possible PID; in-person workup` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Foul odor</strong> — points to BV or trichomoniasis, not yeast` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Bloody discharge</strong> — needs in-person exam` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong&gt;4+ episodes per year</strong> — recurrent VVC; needs culture and induction-maintenance regimen` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe vulvar swelling/ulcers</strong> — in-person exam` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Diabetes uncontrolled</strong> — recurrent yeast often signals high glucose` }} />
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
            <h2>What to Expect: Yeast Infection Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Yeast Infection recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Hours 24–48</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Itching and burning begin to improve. Discharge thins.` }} />
              </tr>
              <tr>
                <td><strong>Day 3</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Most symptoms 70%+ resolved. If not, second fluconazole dose may be added or topical extended.` }} />
              </tr>
              <tr>
                <td><strong>Day 5–7</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Symptoms fully resolve in 80–90% of cases.` }} />
              </tr>
              <tr>
                <td><strong>Week 2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Tissue healing complete. Resume normal activity.` }} />
              </tr>
              <tr>
                <td><strong>3+ episodes in 12 months</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Triggers persistent management — ask about culture-confirmed recurrent VVC plan.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Yeast Infection</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Wear loose, breathable cotton underwear` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid scented soaps, douches, sprays, and bubble baths` }} />
              <li dangerouslySetInnerHTML={{ __html: `Change out of wet swimsuits and workout clothes promptly` }} />
              <li dangerouslySetInnerHTML={{ __html: `Sleep without underwear to allow airflow` }} />
              <li dangerouslySetInnerHTML={{ __html: `Limit refined sugar (some women find it triggers flares)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Probiotic-rich foods (yogurt with live cultures) — modest evidence` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid sex during active infection if it's painful` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cool compresses for itch relief` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't share towels or wash items together with infectious laundry` }} />
              <li dangerouslySetInnerHTML={{ __html: `If diabetic, optimize glucose control — high glucose feeds yeast` }} />
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
              sectionTitle={`Frequently Asked Questions — Yeast Infection`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your yeast infection visit.</p>
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
              <li><a href="https://www.idsociety.org/practice-guideline/vulvovaginal-candidiasis-candida-infections-of-the-female-genital-tract/" rel="noopener" target="_blank">IDSA — Vulvovaginal Candidiasis Guideline</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/05/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG — Vaginitis in Nonpregnant Patients</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/fungal/diseases/candidiasis/genital/index.html" rel="noopener" target="_blank">CDC — Vaginal Candidiasis Overview</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=fluconazole" rel="noopener" target="_blank">FDA DailyMed — Fluconazole</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/fluconazole" rel="noopener" target="_blank">GoodRx — Fluconazole Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Women's Health Resources</a>. Retrieved May 23, 2026.</li>
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
