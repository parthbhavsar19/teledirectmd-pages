/**
 * SymptomColdSore.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Cold Sore
 * Slug:    /symptoms/cold-sore/
 * ICD-10:  B00.1 — Herpesviral vesicular dermatitis — oral herpes simplex
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/cold-sore/';
const PAGE_TITLE = `Cold Sore Treatment Online — Valacyclovir Rx Same Day | TeleDirectMD`;
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
    generic: `Valacyclovir`,
    brand: `Valtrex`,
    form: `Oral tablet`,
    drugClass: `Antiviral (prodrug of acyclovir)`,
    dose: `2 g BID × 1 day (recurrent); 500 mg daily (suppression)`,
    price: `$19–$57`,
    priceUrl: `https://www.goodrx.com/valacyclovir`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, nausea; rare TTP/HUS in immunocompromised`,
  },
  {
    generic: `Acyclovir`,
    brand: `Zovirax`,
    form: `Oral capsule/cream`,
    drugClass: `Antiviral`,
    dose: `400 mg 5×/day × 5 days, or 5% cream every 2 hours`,
    price: `$5–$28`,
    priceUrl: `https://www.goodrx.com/acyclovir`,
    priceLabel: `GoodRx`,
    sideEffects: `GI upset, headache; rare renal impairment`,
  },
  {
    generic: `Famciclovir`,
    brand: `Famvir`,
    form: `Oral tablet`,
    drugClass: `Antiviral`,
    dose: `1500 mg single dose at first tingle`,
    price: `$20–$90`,
    priceUrl: `https://www.goodrx.com/famciclovir`,
    priceLabel: `GoodRx`,
    sideEffects: `Headache, nausea`,
  },
  {
    generic: `Penciclovir`,
    brand: `Denavir`,
    form: `Topical cream`,
    drugClass: `Topical antiviral`,
    dose: `Apply every 2 hours while awake × 4 days`,
    price: `$141–$779`,
    priceUrl: `https://www.goodrx.com/penciclovir`,
    priceLabel: `GoodRx`,
    sideEffects: `Local irritation`,
  },
  {
    generic: `Docosanol`,
    brand: `Abreva`,
    form: `Topical cream`,
    drugClass: `Antiviral OTC`,
    dose: `Apply 5 times daily until healed`,
    price: `$13–$21`,
    priceUrl: `https://www.goodrx.com/docosanol`,
    priceLabel: `GoodRx`,
    sideEffects: `Mild local irritation`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Can a telehealth doctor prescribe valacyclovir?`,
    answerPlain: `Yes — valacyclovir (Valtrex) and acyclovir are non-controlled medications. Dr. Bhavsar can prescribe them at first symptoms; same-day prescription is typical. Single-day valacyclovir is the most convenient regimen.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — valacyclovir (Valtrex) and acyclovir are non-controlled medications. Dr. Bhavsar can prescribe them at first symptoms; same-day prescription is typical. Single-day valacyclovir is the most convenient regimen.` }} />
    ),
  },
  {
    question: `How fast do cold sore antivirals work?`,
    answerPlain: `Best within 48 hours of first tingle — they can abort the outbreak entirely or significantly shorten its course. Started later, they still help reduce duration by 1–2 days. The single-day valacyclovir regimen has equivalent efficacy to longer courses.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Best within 48 hours of first tingle — they can abort the outbreak entirely or significantly shorten its course. Started later, they still help reduce duration by 1–2 days. The single-day valacyclovir regimen has equivalent efficacy to longer courses.` }} />
    ),
  },
  {
    question: `Are cold sores contagious?`,
    answerPlain: `Yes — highly contagious during active outbreaks (tingling through full healing). Asymptomatic viral shedding also occurs. Avoid kissing, oral sex, and sharing items during outbreaks. Wash hands after touching the area.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — highly contagious during active outbreaks (tingling through full healing). Asymptomatic viral shedding also occurs. Avoid kissing, oral sex, and sharing items during outbreaks. Wash hands after touching the area.` }} />
    ),
  },
  {
    question: `Will I always have cold sores?`,
    answerPlain: `HSV-1 lives in your nerve ganglia for life — there's no cure. However, frequency typically decreases with age and effective suppressive therapy can reduce outbreaks by 75%+. Many people achieve very long lesion-free periods.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `HSV-1 lives in your nerve ganglia for life — there's no cure. However, frequency typically decreases with age and effective suppressive therapy can reduce outbreaks by 75%+. Many people achieve very long lesion-free periods.` }} />
    ),
  },
  {
    question: `What triggers cold sores?`,
    answerPlain: `Most common triggers: sun (UV) exposure, stress, illness, fever, hormonal changes (menstruation), fatigue, immunosuppression, and trauma to the lip. Daily SPF lip balm and stress management are highest-yield prevention.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most common triggers: sun (UV) exposure, stress, illness, fever, hormonal changes (menstruation), fatigue, immunosuppression, and trauma to the lip. Daily SPF lip balm and stress management are highest-yield prevention.` }} />
    ),
  },
  {
    question: `Should I take daily antivirals?`,
    answerPlain: `Daily suppressive therapy makes sense if you have ≥6 outbreaks per year, severe outbreaks affecting work/life, or specific high-risk situations (immunocompromise, pregnancy near term). Reduces frequency ~75%.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Daily suppressive therapy makes sense if you have &ge;6 outbreaks per year, severe outbreaks affecting work/life, or specific high-risk situations (immunocompromise, pregnancy near term). Reduces frequency ~75%.` }} />
    ),
  },
  {
    question: `Can I get HSV-1 from my partner?`,
    answerPlain: `Yes — HSV-1 transmits through skin contact and saliva. Most adults already carry HSV-1 from childhood. Genital HSV-1 (from oral sex during an outbreak) is increasingly common. Use barriers and avoid oral sex during outbreaks.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — HSV-1 transmits through skin contact and saliva. Most adults already carry HSV-1 from childhood. Genital HSV-1 (from oral sex during an outbreak) is increasingly common. Use barriers and avoid oral sex during outbreaks.` }} />
    ),
  },
  {
    question: `Is Abreva (docosanol) effective?`,
    answerPlain: `Modestly. OTC docosanol shortens outbreaks by about 1 day if used at first tingle. It's better than nothing but less effective than oral valacyclovir. Best as adjunct, not replacement.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Modestly. OTC docosanol shortens outbreaks by about 1 day if used at first tingle. It's better than nothing but less effective than oral valacyclovir. Best as adjunct, not replacement.` }} />
    ),
  },
  {
    question: `Does lysine really help?`,
    answerPlain: `Modest evidence. L-lysine (1000 mg daily) may reduce outbreak frequency in some studies — not a substitute for antivirals during active outbreaks but reasonable preventive add-on.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Modest evidence. L-lysine (1000 mg daily) may reduce outbreak frequency in some studies — not a substitute for antivirals during active outbreaks but reasonable preventive add-on.` }} />
    ),
  },
  {
    question: `Can children get prescribed valacyclovir?`,
    answerPlain: `Yes — valacyclovir is approved for children ≥12. Dose adjusted for younger children using acyclovir. Primary HSV gingivostomatitis in young children can be severe and may need urgent in-person care.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — valacyclovir is approved for children &ge;12. Dose adjusted for younger children using acyclovir. Primary HSV gingivostomatitis in young children can be severe and may need urgent in-person care.` }} />
    ),
  },
  {
    question: `What if I\'m pregnant?`,
    answerPlain: `Acyclovir and valacyclovir are considered low-risk in pregnancy and used routinely. If you have frequent outbreaks, daily suppression starting at week 36 reduces neonatal HSV exposure. Consult your OB.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Acyclovir and valacyclovir are considered low-risk in pregnancy and used routinely. If you have frequent outbreaks, daily suppression starting at week 36 reduces neonatal HSV exposure. Consult your OB.` }} />
    ),
  },
  {
    question: `Can I use cold sore medication for genital herpes?`,
    answerPlain: `Yes — acyclovir, valacyclovir, and famciclovir all treat genital HSV (HSV-2 and oral HSV-1 transmitted to genitals). Doses differ. Genital herpes warrants its own dedicated visit and STI screening.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — acyclovir, valacyclovir, and famciclovir all treat genital HSV (HSV-2 and oral HSV-1 transmitted to genitals). Doses differ. Genital herpes warrants its own dedicated visit and STI screening.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/cold-sore-treatment-online/', label: 'Cold Sore Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/uti-treatment-online/', label: 'UTI Treatment Online' },
  { slug: '/acne-treatment-online/', label: 'Acne Treatment Online' },
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
    description: `Tingling lip, blister forming? Antivirals work best within 48 hours. Same-day valacyclovir or acyclovir prescription via $79 telehealth visit in 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Oral Herpes Simplex (Cold Sore)',
      alternateName: ['Oral Herpes', 'HSV-1', 'Herpes Labialis', 'Fever Blister'],
      code: { '@type': 'MedicalCode', code: 'B00.1', codingSystem: 'ICD-10-CM' },
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
        '#sym-cold-sore-opening',
        '#sym-cold-sore-opening p',
        '.tdmd-sym__byline',
        '#sym-cold-sore-faq',
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
    name: `How to Get Cold Sore Treatment Online`,
    description: `Three steps to receive oral herpes evaluation and valacyclovir prescription from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select cold sore on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/cold-sore/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews lesion appearance, outbreak frequency, and immunocompromised status.`, url: `https://teledirectmd.com/symptoms/cold-sore/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your antiviral prescription`, text: `Valacyclovir or acyclovir prescribed and sent to your pharmacy, often same day as symptom onset.`, url: `https://teledirectmd.com/symptoms/cold-sore/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Cold Sore`, item: PAGE_URL },
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
export default function SymptomColdSore() {
  const schemas = buildSchemas();
  const pid = 'sym-cold-sore';

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
            <span aria-current="page">Cold Sore</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Cold Sore (Oral Herpes) — Same-Day Valacyclovir Online` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Cold Sore — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Cold Sore is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> B00.1 — Herpesviral vesicular dermatitis — oral herpes simplex (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Cold Sore Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Cold sores (oral herpes simplex virus type 1) cause recurrent painful blisters or ulcers on or around the lips, typically preceded by a 24-hour tingling or burning prodrome. Starting antiviral therapy (valacyclovir 2 g twice daily for 1 day) during the prodrome phase shortens the outbreak by 1–2 days per IDSA guidelines. TeleDirectMD prescribes valacyclovir or acyclovir for $79 — early treatment gives the best results.` }} />
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
            <h2>Cold Sore Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adults and children (with parent) in our 41 states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recurrent cold sore — recognize the prodrome` }} />
              <li dangerouslySetInnerHTML={{ __html: `First-ever cold sore not severe (no fever, can eat/drink)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want same-day antiviral` }} />
              <li dangerouslySetInnerHTML={{ __html: `Frequent recurrences (≥6/year) — daily suppression option` }} />
              <li dangerouslySetInnerHTML={{ __html: `Pre-trip prophylaxis (sun exposure, ski trip)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Pre-procedure (laser, dental work)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Need work note if lesion visible` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Eye involvement — ophthalmology emergent` }} />
              <li dangerouslySetInnerHTML={{ __html: `Eczema herpeticum — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severely immunocompromised — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Newborn exposed or sick — urgent pediatric` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe primary outbreak with dehydration — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Lesion &gt;2 weeks unresolved — in-person evaluation` }} />
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
            <h2>How Cold Sore Treatment Works Online</h2>
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
            <h2>What Causes Cold Sore? Differential Diagnosis</h2>
            <p>Not all cold sore is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cold Sore differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Herpes labialis (HSV-1)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Reactivation of HSV-1 on the lip.` }} />
                <td dangerouslySetInnerHTML={{ __html: `30–50% of adults have recurrent outbreaks` }} />
                <td dangerouslySetInnerHTML={{ __html: `Prodromal tingle, vesicle cluster on vermilion border, crusting, 7–10 day course` }} />
                <td dangerouslySetInnerHTML={{ __html: `Valacyclovir 2 g BID × 1 day at first tingle; or acyclovir 400 mg 5×/day × 5 days` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Angular cheilitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Inflammation at corners of mouth, often candidal or bacterial.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common in elderly and immunocompromised` }} />
                <td dangerouslySetInnerHTML={{ __html: `Cracked, red, fissured corners of mouth, no vesicles` }} />
                <td dangerouslySetInnerHTML={{ __html: `Topical antifungal/antibacterial; address nutritional deficiencies` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Aphthous ulcer (canker sore)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Non-infectious oral ulcer inside the mouth.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Affects 20% of population` }} />
                <td dangerouslySetInnerHTML={{ __html: `Round/oval ulcer with yellow base on inner cheek/tongue, NO outer lip lesions` }} />
                <td dangerouslySetInnerHTML={{ __html: `Topical analgesics; usually self-resolves 1–2 weeks` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Impetigo` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Bacterial skin infection (S. aureus, Strep).` }} />
                <td dangerouslySetInnerHTML={{ __html: `More common in children` }} />
                <td dangerouslySetInnerHTML={{ __html: `Honey-colored crusts, often around nose and mouth, can spread` }} />
                <td dangerouslySetInnerHTML={{ __html: `Mupirocin ointment or oral cephalexin` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Contact dermatitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Allergic/irritant reaction to lip products.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common` }} />
                <td dangerouslySetInnerHTML={{ __html: `Bilateral redness/scaling, no vesicle clusters, recent product change` }} />
                <td dangerouslySetInnerHTML={{ __html: `Stop trigger; topical hydrocortisone 1%` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Cold Sore Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Cold Sore cost comparison">
                <h3>Typical Cold Sore Visit Cost</h3>
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
            <h2>Cold Sore Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for cold sore. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cold Sore medication options">
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
                <td><strong>Valacyclovir</strong> <span className="tdmd-sym__med-brand">(Valtrex)</span></td>
                <td>Oral tablet</td>
                <td>Antiviral (prodrug of acyclovir)</td>
                <td dangerouslySetInnerHTML={{ __html: `2 g BID × 1 day (recurrent); 500 mg daily (suppression)` }} />
                <td><a href="https://www.goodrx.com/valacyclovir" target="_blank" rel="noopener">$19–$57</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, nausea; rare TTP/HUS in immunocompromised` }} />
              </tr>
              <tr>
                <td><strong>Acyclovir</strong> <span className="tdmd-sym__med-brand">(Zovirax)</span></td>
                <td>Oral capsule/cream</td>
                <td>Antiviral</td>
                <td dangerouslySetInnerHTML={{ __html: `400 mg 5×/day × 5 days, or 5% cream every 2 hours` }} />
                <td><a href="https://www.goodrx.com/acyclovir" target="_blank" rel="noopener">$5–$28</a></td>
                <td dangerouslySetInnerHTML={{ __html: `GI upset, headache; rare renal impairment` }} />
              </tr>
              <tr>
                <td><strong>Famciclovir</strong> <span className="tdmd-sym__med-brand">(Famvir)</span></td>
                <td>Oral tablet</td>
                <td>Antiviral</td>
                <td dangerouslySetInnerHTML={{ __html: `1500 mg single dose at first tingle` }} />
                <td><a href="https://www.goodrx.com/famciclovir" target="_blank" rel="noopener">$20–$90</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Headache, nausea` }} />
              </tr>
              <tr>
                <td><strong>Penciclovir</strong> <span className="tdmd-sym__med-brand">(Denavir)</span></td>
                <td>Topical cream</td>
                <td>Topical antiviral</td>
                <td dangerouslySetInnerHTML={{ __html: `Apply every 2 hours while awake × 4 days` }} />
                <td><a href="https://www.goodrx.com/penciclovir" target="_blank" rel="noopener">$141–$779</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Local irritation` }} />
              </tr>
              <tr>
                <td><strong>Docosanol</strong> <span className="tdmd-sym__med-brand">(Abreva)</span></td>
                <td>Topical cream</td>
                <td>Antiviral OTC</td>
                <td dangerouslySetInnerHTML={{ __html: `Apply 5 times daily until healed` }} />
                <td><a href="https://www.goodrx.com/docosanol" target="_blank" rel="noopener">$13–$21</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Mild local irritation` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Eye involvement</strong> (lesions near eye, eye pain, or vision change) — possible herpetic keratitis; ER/ophthalmology` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe outbreak with fever and lymphadenopathy in a child</strong> — primary HSV gingivostomatitis, may need hospitalization` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Outbreak in eczema patient (eczema herpeticum)</strong> — emergent` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Outbreak in immunocompromised patient</strong> — needs higher-dose IV/systemic therapy` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Lesions persist &gt;2 weeks</strong> — atypical, needs evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Bacterial superinfection</strong> (worsening pain, pus, spreading redness)` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Newborn exposure</strong> — risk of neonatal herpes (urgent)` }} />
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
            <h2>What to Expect: Cold Sore Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cold Sore recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Hours 0–24 (prodrome)</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Take antiviral immediately at first tingle — best chance to abort or shorten outbreak.` }} />
              </tr>
              <tr>
                <td><strong>Day 1–2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Vesicle formation reduced or aborted with prompt antiviral; pain peaks.` }} />
              </tr>
              <tr>
                <td><strong>Day 3–4</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Ulceration phase — keep clean and dry; avoid touching.` }} />
              </tr>
              <tr>
                <td><strong>Day 5–7</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Crusting and healing. Most treated outbreaks fully healed by day 7.` }} />
              </tr>
              <tr>
                <td><strong>Long-term</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `With daily suppression, frequency drops ~75%. Reassess annually.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Cold Sore</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Take antiviral at first tingle — don't wait for blister` }} />
              <li dangerouslySetInnerHTML={{ __html: `Apply SPF 30+ lip balm year-round (UV is a major trigger)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid touching the lesion; wash hands if you do` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't share utensils, towels, lip balm, or razors during outbreak` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid kissing during active lesions` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cool compresses for pain relief` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid spicy/acidic foods during ulcer phase` }} />
              <li dangerouslySetInnerHTML={{ __html: `Get adequate sleep — fatigue triggers outbreaks` }} />
              <li dangerouslySetInnerHTML={{ __html: `Manage stress — significant trigger for many` }} />
              <li dangerouslySetInnerHTML={{ __html: `Lysine 1000 mg daily — modest evidence for prevention` }} />
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
              sectionTitle={`Frequently Asked Questions — Cold Sore`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your cold sore visit.</p>
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
              <li><a href="https://www.idsociety.org/practice-guideline/herpes-simplex-virus/" rel="noopener" target="_blank">IDSA — Herpes Simplex Virus Infection Guidelines</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/std/herpes/stdfact-herpes.htm" rel="noopener" target="_blank">CDC — Oral Herpes / HSV-1</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2010/1201/p1394.html" rel="noopener" target="_blank">AAFP — Herpes Labialis Management</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=valacyclovir" rel="noopener" target="_blank">FDA DailyMed — Valacyclovir</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/valacyclovir" rel="noopener" target="_blank">GoodRx — Valacyclovir Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Dermatology / Infectious Disease Board Resources</a>. Retrieved May 23, 2026.</li>
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
