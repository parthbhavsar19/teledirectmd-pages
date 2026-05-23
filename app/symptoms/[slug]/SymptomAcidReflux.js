/**
 * SymptomAcidReflux.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Acid Reflux
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
 *   • Literal < and > in JSX text escaped as < >
 *   • Medically reviewed by Parth Bhavsar, MD — Updated May 23, 2026
 *
 * Generated: 2026-05-23. DO NOT edit manually — regenerate from config.
 */

import FaqAccordion from '../../components/FaqAccordion';

// ─── Page constants ────────────────────────────────────────────────────────────
const PAGE_URL = 'https://teledirectmd.com/symptoms/acid-reflux/';
const PAGE_TITLE = `Acid Reflux Treatment Online — PPI Prescription | TeleDirectMD`;
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
    question: `Can a telehealth doctor prescribe omeprazole or pantoprazole?`,
    answerPlain: `Yes — these are non-controlled medications. Dr. Bhavsar can prescribe an 8-week PPI trial after a focused history that screens for cardiac and alarm-feature red flags. ACG and AAFP guidelines support this approach.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — these are non-controlled medications. Dr. Bhavsar can prescribe an 8-week PPI trial after a focused history that screens for cardiac and alarm-feature red flags. ACG and AAFP guidelines support this approach.` }} />
    ),
  },
  {
    question: `How long should I take a PPI?`,
    answerPlain: `For uncomplicated GERD, 8 weeks at standard dose, then taper to lowest effective dose or switch to H2 blocker. Long-term daily PPI use is appropriate for severe esophagitis or Barrett's esophagus, but otherwise on-demand or low-dose maintenance is preferred.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `For uncomplicated GERD, 8 weeks at standard dose, then taper to lowest effective dose or switch to H2 blocker. Long-term daily PPI use is appropriate for severe esophagitis or Barrett's esophagus, but otherwise on-demand or low-dose maintenance is preferred.` }} />
    ),
  },
  {
    question: `Are PPIs safe long-term?`,
    answerPlain: `Generally yes when used appropriately. Long-term concerns include modest increased risk of bone fractures, B12 deficiency, magnesium deficiency, and C. diff infection. The relative risks are small but real — that's why we recommend stepping down to lowest effective dose.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Generally yes when used appropriately. Long-term concerns include modest increased risk of bone fractures, B12 deficiency, magnesium deficiency, and C. diff infection. The relative risks are small but real — that's why we recommend stepping down to lowest effective dose.` }} />
    ),
  },
  {
    question: `What\'s the difference between omeprazole and pantoprazole?`,
    answerPlain: `Both are equally effective for typical GERD. Pantoprazole has fewer drug interactions (preferred if you take clopidogrel, methotrexate, or atazanavir). Omeprazole is the cheapest and most studied. Choice often comes down to insurance coverage.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Both are equally effective for typical GERD. Pantoprazole has fewer drug interactions (preferred if you take clopidogrel, methotrexate, or atazanavir). Omeprazole is the cheapest and most studied. Choice often comes down to insurance coverage.` }} />
    ),
  },
  {
    question: `Should I take my PPI with food or empty stomach?`,
    answerPlain: `30–60 minutes BEFORE breakfast, on an empty stomach. PPIs need to be present in your blood when proton pumps are activated by the meal. Taking with food reduces effectiveness ~50%.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `30–60 minutes BEFORE breakfast, on an empty stomach. PPIs need to be present in your blood when proton pumps are activated by the meal. Taking with food reduces effectiveness ~50%.` }} />
    ),
  },
  {
    question: `Why does my chest burn at night?`,
    answerPlain: `Lying flat removes gravity's help in keeping acid down. Solutions: elevate head of bed 6–8 inches (blocks under bedposts, NOT pillows), don't eat within 3 hours of bed, sleep on your left side, and lose weight if applicable.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Lying flat removes gravity's help in keeping acid down. Solutions: elevate head of bed 6–8 inches (blocks under bedposts, NOT pillows), don't eat within 3 hours of bed, sleep on your left side, and lose weight if applicable.` }} />
    ),
  },
  {
    question: `Can heartburn be a heart attack?`,
    answerPlain: `Yes — cardiac chest pain can mimic GERD. Red flags: pressure/squeezing rather than burning, exertional onset, radiation to arm/jaw, sweating, shortness of breath. Any of these — go to ER, don't try to wait it out.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — cardiac chest pain can mimic GERD. Red flags: pressure/squeezing rather than burning, exertional onset, radiation to arm/jaw, sweating, shortness of breath. Any of these — go to ER, don't try to wait it out.` }} />
    ),
  },
  {
    question: `Do I need an endoscopy?`,
    answerPlain: `Not for typical uncomplicated GERD responding to PPI. Endoscopy is indicated for alarm features (dysphagia, weight loss, bleeding, anemia, persistent vomiting), failure of 8-week PPI trial, or new-onset symptoms after age 50.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Not for typical uncomplicated GERD responding to PPI. Endoscopy is indicated for alarm features (dysphagia, weight loss, bleeding, anemia, persistent vomiting), failure of 8-week PPI trial, or new-onset symptoms after age 50.` }} />
    ),
  },
  {
    question: `Can I drink coffee with GERD?`,
    answerPlain: `Coffee is a common trigger but tolerance varies. Try eliminating for 2 weeks; if symptoms improve, you have your answer. Some find low-acid or cold-brew coffee more tolerable. Avoid drinking coffee within 3 hours of bed.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Coffee is a common trigger but tolerance varies. Try eliminating for 2 weeks; if symptoms improve, you have your answer. Some find low-acid or cold-brew coffee more tolerable. Avoid drinking coffee within 3 hours of bed.` }} />
    ),
  },
  {
    question: `Will losing weight cure my GERD?`,
    answerPlain: `For many people, yes — significantly. A 2016 New England Journal of Medicine review found weight loss of just 10% reduced GERD symptoms by 40%+. Losing weight is the single highest-yield lifestyle change.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `For many people, yes — significantly. A 2016 New England Journal of Medicine review found weight loss of just 10% reduced GERD symptoms by 40%+. Losing weight is the single highest-yield lifestyle change.` }} />
    ),
  },
  {
    question: `What about H. pylori — should I be tested?`,
    answerPlain: `H. pylori testing is recommended for: dyspepsia not responding to PPI, history of peptic ulcer, family history of gastric cancer, long-term PPI use, or suspected MALT lymphoma. Not routine for typical GERD. Stool antigen or breath testing is non-invasive.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `H. pylori testing is recommended for: dyspepsia not responding to PPI, history of peptic ulcer, family history of gastric cancer, long-term PPI use, or suspected MALT lymphoma. Not routine for typical GERD. Stool antigen or breath testing is non-invasive.` }} />
    ),
  },
  {
    question: `Are antacids enough?`,
    answerPlain: `For occasional mild heartburn, yes. For typical GERD (symptoms ≥2 days/week), antacids alone are inadequate — H2 blockers or PPIs are needed. Antacids are useful as PRN add-ons for breakthrough symptoms.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `For occasional mild heartburn, yes. For typical GERD (symptoms &ge;2 days/week), antacids alone are inadequate — H2 blockers or PPIs are needed. Antacids are useful as PRN add-ons for breakthrough symptoms.` }} />
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
    description: `Burning chest pain, regurgitation, sour taste? Most acid reflux responds to lifestyle change + omeprazole/pantoprazole. $79 telehealth, prescription same day in 41 states.`,
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
    name: `How to Get Acid Reflux Treatment Online`,
    description: `Three steps to receive GERD evaluation and PPI prescription from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select acid reflux / GERD on teledirectmd.com. No referral needed. Self pay $79. Same-day visits often available.`, url: `https://teledirectmd.com/symptoms/acid-reflux/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `The physician reviews your symptom pattern, alarm features, medications, and cardiac risk factors. Red-flag screening performed before any prescription.`, url: `https://teledirectmd.com/symptoms/acid-reflux/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your treatment plan and e-prescription`, text: `If appropriate, an 8-week PPI prescription (omeprazole, pantoprazole) plus lifestyle guidance sent to your pharmacy.`, url: `https://teledirectmd.com/symptoms/acid-reflux/` }
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
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Acid Reflux & Heartburn — Same-Day PPI Prescription Online` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Acid Reflux — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Acid Reflux is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> K21.0 — Gastro-esophageal reflux disease with esophagitis (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Acid Reflux Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Burning chest discomfort after meals, sour taste in the mouth, or the sensation of acid rising into the throat is the classic presentation of <strong>gastroesophageal reflux disease (GERD)</strong>. Per ACG and AAFP guidelines, an 8-week proton pump inhibitor trial plus lifestyle modification is first-line and can be initiated through a $79 telehealth visit. TeleDirectMD screens carefully for cardiac and alarm-feature red flags before prescribing — crushing or exertional chest pain goes to the ER, not telehealth.` }} />
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
            <h2>Acid Reflux Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adults 18+ in our 41 states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Classic heartburn / regurgitation pattern` }} />
              <li dangerouslySetInnerHTML={{ __html: `No alarm features (dysphagia, weight loss, GI bleeding)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms &lt;5 years duration without prior workup` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want PPI 8-week trial` }} />
              <li dangerouslySetInnerHTML={{ __html: `Need refill of established GERD medication` }} />
              <li dangerouslySetInnerHTML={{ __html: `Open to lifestyle change recommendations` }} />
              <li dangerouslySetInnerHTML={{ __html: `Already had endoscopy and need maintenance therapy` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Chest pain suggestive of cardiac origin — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Difficulty swallowing or food impaction — needs endoscopy` }} />
              <li dangerouslySetInnerHTML={{ __html: `Hematemesis, melena, or hematochezia — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Unintentional weight loss — needs workup` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms unresolved after 8+ weeks of appropriate PPI — endoscopy` }} />
              <li dangerouslySetInnerHTML={{ __html: `Age &gt;50 with new alarm features — in-person workup` }} />
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
            <h2>How Acid Reflux Treatment Works Online</h2>
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
            <h2>What Causes Acid Reflux? Differential Diagnosis</h2>
            <p>Not all acid reflux is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Acid Reflux differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `GERD (acid reflux)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Lower esophageal sphincter dysfunction allowing acid reflux.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~20% of US adults` }} />
                <td dangerouslySetInnerHTML={{ __html: `Heartburn after meals, regurgitation, sour taste, worse lying down` }} />
                <td dangerouslySetInnerHTML={{ __html: `PPI 8-week trial + lifestyle (weight loss, head elevation, avoid trigger foods)` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Functional dyspepsia` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Upper-abdominal symptoms without structural cause.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~10–15% adults` }} />
                <td dangerouslySetInnerHTML={{ __html: `Postprandial fullness, early satiety, epigastric pain without classic heartburn` }} />
                <td dangerouslySetInnerHTML={{ __html: `PPI trial + dietary modification; consider H. pylori test` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `H. pylori-related gastritis or ulcer` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Gastric or duodenal infection causing inflammation/ulcer.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~10–15% in US` }} />
                <td dangerouslySetInnerHTML={{ __html: `Burning epigastric pain, may be relieved by food (duodenal) or worsened (gastric)` }} />
                <td dangerouslySetInnerHTML={{ __html: `H. pylori test (stool antigen or breath); triple/quadruple therapy if positive` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Cardiac chest pain` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Coronary artery disease — angina or acute coronary syndrome.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Critical to rule out` }} />
                <td dangerouslySetInnerHTML={{ __html: `Pressure/squeezing rather than burning, exertional, radiates to arm/jaw, sweating, SOB` }} />
                <td dangerouslySetInnerHTML={{ __html: `ER immediately if suspected` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Eosinophilic esophagitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Allergic-mediated esophageal inflammation.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Increasingly recognized` }} />
                <td dangerouslySetInnerHTML={{ __html: `Dysphagia, food impaction, history of atopy, poor PPI response` }} />
                <td dangerouslySetInnerHTML={{ __html: `GI referral for endoscopy with biopsies` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Acid Reflux Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Acid Reflux cost comparison">
                <h3>Typical Acid Reflux Visit Cost</h3>
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
            <h2>Acid Reflux Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for acid reflux. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Acid Reflux medication options">
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
                <td dangerouslySetInnerHTML={{ __html: `Headache, diarrhea; same long-term concerns as omeprazole` }} />
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
                <td dangerouslySetInnerHTML={{ __html: `Headache, dizziness; renal dose adjustment` }} />
              </tr>
              <tr>
                <td><strong>Calcium carbonate</strong> <span className="tdmd-sym__med-brand">(Tums)</span></td>
                <td>Oral chewable</td>
                <td>Antacid</td>
                <td dangerouslySetInnerHTML={{ __html: `500–1000 mg PRN heartburn` }} />
                <td><a href="https://www.goodrx.com/calcium-carbonate" target="_blank" rel="noopener">$5–$8</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Constipation, hypercalcemia at high doses` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Crushing chest pain, exertional pain, or pain radiating to arm/jaw</strong> — possible cardiac event; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Difficulty swallowing or food sticking</strong> — needs endoscopy` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Vomiting blood or coffee-ground material</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Black tarry stools or bright red blood</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Unintentional weight loss &gt;5%</strong> — needs workup` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Persistent vomiting</strong> — in-person evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Symptoms unresolved after 8 weeks of PPI</strong> — endoscopy referral` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Age &gt;50 with new-onset symptoms</strong> — endoscopy threshold lower` }} />
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
            <h2>What to Expect: Acid Reflux Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Acid Reflux recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Day 1–3</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Begin PPI before breakfast and lifestyle changes. Symptoms may not improve immediately — PPI takes 3–5 days for peak effect.` }} />
              </tr>
              <tr>
                <td><strong>Week 1–2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Heartburn frequency and severity should decrease 50%+. Use antacids PRN for breakthrough.` }} />
              </tr>
              <tr>
                <td><strong>Week 4</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Most patients are symptom-free. If not, dose may be doubled or timing reviewed.` }} />
              </tr>
              <tr>
                <td><strong>Week 8</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Reassess: if symptom-free, taper to lowest effective dose. If still symptomatic, GI referral for endoscopy.` }} />
              </tr>
              <tr>
                <td><strong>Long-term</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `On-demand PPI use (only when symptomatic) is preferred over chronic daily use to minimize long-term risks.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Acid Reflux</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Elevate head of bed 6–8 inches with blocks (pillows alone don't work)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid lying down within 3 hours of eating` }} />
              <li dangerouslySetInnerHTML={{ __html: `Eat smaller, more frequent meals` }} />
              <li dangerouslySetInnerHTML={{ __html: `Lose weight if BMI &gt;25 — single most effective lifestyle change` }} />
              <li dangerouslySetInnerHTML={{ __html: `Keep a food diary to identify personal triggers` }} />
              <li dangerouslySetInnerHTML={{ __html: `Limit coffee, alcohol, chocolate, peppermint, and carbonated drinks` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid tight-fitting clothes around the abdomen` }} />
              <li dangerouslySetInnerHTML={{ __html: `Stop smoking — nicotine relaxes the LES` }} />
              <li dangerouslySetInnerHTML={{ __html: `Chew sugar-free gum after meals (increases saliva, neutralizes acid)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Sleep on left side (anatomically reduces reflux vs. right side)` }} />
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
              sectionTitle={`Frequently Asked Questions — Acid Reflux`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your acid reflux visit.</p>
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
              <li><a href="https://gi.org/guideline/diagnosis-and-management-of-gastroesophageal-reflux-disease/" rel="noopener" target="_blank">ACG Clinical Guideline: Diagnosis and Management of GERD</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2010/0501/p1278.html" rel="noopener" target="_blank">AAFP — Diagnosis and Management of GERD (2010)</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults" rel="noopener" target="_blank">NIDDK — Acid Reflux (GER &amp; GERD) in Adults</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.gastrojournal.org/article/S0016-5085(22)00718-7/fulltext" rel="noopener" target="_blank">AGA — GERD Best Practice Advice</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/omeprazole" rel="noopener" target="_blank">GoodRx — Omeprazole Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/antibiotic-use/index.html" rel="noopener" target="_blank">CDC — Antibiotic Use &amp; Stewardship</a>. Retrieved May 23, 2026.</li>
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
