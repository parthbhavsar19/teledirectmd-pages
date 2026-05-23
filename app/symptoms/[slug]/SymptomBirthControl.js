/**
 * SymptomBirthControl.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Birth Control
 * Slug:    /symptoms/birth-control/
 * ICD-10:  Z30.011 — Encounter for initial prescription of contraceptive pills
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/birth-control/';
const PAGE_TITLE = `Birth Control Online — Pill, Patch, Ring Rx Same Day | TeleDirectMD`;
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
    generic: `Levonorgestrel / Ethinyl estradiol`,
    brand: `Aviane, Lessina`,
    form: `Oral tablet (28-day pack)`,
    drugClass: `Combined oral contraceptive`,
    dose: `1 tablet daily, same time`,
    price: `$15–$68`,
    priceUrl: `https://www.goodrx.com/aviane`,
    priceLabel: `GoodRx`,
    sideEffects: `Breakthrough bleeding, breast tenderness, nausea (early); minor VTE risk increase`,
  },
  {
    generic: `Norethindrone`,
    brand: `Camila, Errin`,
    form: `Oral tablet`,
    drugClass: `Progestin-only pill`,
    dose: `0.35 mg daily, same time (3-hour window)`,
    price: `$4–$28`,
    priceUrl: `https://www.goodrx.com/norethindrone`,
    priceLabel: `GoodRx`,
    sideEffects: `Irregular bleeding, headache; safe with breastfeeding`,
  },
  {
    generic: `Norelgestromin / Ethinyl estradiol`,
    brand: `Xulane`,
    form: `Transdermal patch`,
    drugClass: `Combined hormonal contraception`,
    dose: `1 patch weekly × 3 weeks, off 1 week`,
    price: `$8–$28`,
    priceUrl: `https://www.goodrx.com/camila`,
    priceLabel: `GoodRx`,
    sideEffects: `Skin irritation, breast tenderness; reduced efficacy if BMI >30`,
  },
  {
    generic: `Etonogestrel / Ethinyl estradiol`,
    brand: `NuvaRing`,
    form: `Vaginal ring`,
    drugClass: `Combined hormonal contraception`,
    dose: `1 ring inserted, left for 21 days, removed for 7`,
    price: `$45–$199`,
    priceUrl: `https://www.goodrx.com/nuvaring`,
    priceLabel: `GoodRx`,
    sideEffects: `Vaginal discharge, irritation; same general profile as pills`,
  },
  {
    generic: `Drospirenone`,
    brand: `Slynd`,
    form: `Oral tablet`,
    drugClass: `Progestin-only pill`,
    dose: `4 mg daily; 24-hour missed-dose window`,
    price: `$196–$233`,
    priceUrl: `https://www.goodrx.com/slynd`,
    priceLabel: `GoodRx`,
    sideEffects: `Acne, breast pain; safer for breastfeeding women, smokers >35`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Can a telehealth doctor prescribe birth control?`,
    answerPlain: `Yes — comprehensive ACOG and CDC guidance supports telehealth-based contraceptive prescribing. Dr. Bhavsar uses CDC US MEC to screen for contraindications and prescribes the appropriate method. Same-day prescription typical.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — comprehensive ACOG and CDC guidance supports telehealth-based contraceptive prescribing. Dr. Bhavsar uses CDC US MEC to screen for contraindications and prescribes the appropriate method. Same-day prescription typical.` }} />
    ),
  },
  {
    question: `Do I need a pelvic exam to get the pill?`,
    answerPlain: `No. ACOG, CDC, and AAFP all explicitly state that pelvic exams are NOT required for prescribing oral contraceptives or other hormonal methods. Blood pressure check and history are sufficient.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No. ACOG, CDC, and AAFP all explicitly state that pelvic exams are NOT required for prescribing oral contraceptives or other hormonal methods. Blood pressure check and history are sufficient.` }} />
    ),
  },
  {
    question: `Which pill is best?`,
    answerPlain: `For most women, generic levonorgestrel/ethinyl estradiol (e.g., Aviane, Lessina) is first-line — well-studied, affordable, effective. We may suggest different progestins for specific concerns (e.g., drospirenone-containing pills for acne/PMS).`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `For most women, generic levonorgestrel/ethinyl estradiol (e.g., Aviane, Lessina) is first-line — well-studied, affordable, effective. We may suggest different progestins for specific concerns (e.g., drospirenone-containing pills for acne/PMS).` }} />
    ),
  },
  {
    question: `Is the patch or ring better than the pill?`,
    answerPlain: `All three are highly effective when used correctly. The patch (weekly) and ring (3 weeks in / 1 out) are options for women who prefer not to take a daily pill. Patch is less effective if BMI >30; ring may have fewer breakthrough bleeding episodes.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `All three are highly effective when used correctly. The patch (weekly) and ring (3 weeks in / 1 out) are options for women who prefer not to take a daily pill. Patch is less effective if BMI &gt;30; ring may have fewer breakthrough bleeding episodes.` }} />
    ),
  },
  {
    question: `Can I get birth control if I\'m a smoker?`,
    answerPlain: `Yes, but: smokers age <35 can use combined hormonal contraception. Smokers ≥35 should NOT use combined hormonal (CDC MEC Cat 4 — VTE/stroke risk). Progestin-only methods (mini-pill, hormonal IUD, implant) are safe for any smoker.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes, but: smokers age &lt;35 can use combined hormonal contraception. Smokers &ge;35 should NOT use combined hormonal (CDC MEC Cat 4 — VTE/stroke risk). Progestin-only methods (mini-pill, hormonal IUD, implant) are safe for any smoker.` }} />
    ),
  },
  {
    question: `What if I have migraines?`,
    answerPlain: `Migraines WITHOUT aura: combined hormonal is generally OK with monitoring. Migraines WITH aura: combined hormonal is contraindicated (CDC MEC Cat 4 — stroke risk). Progestin-only methods are safe and effective alternatives.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Migraines WITHOUT aura: combined hormonal is generally OK with monitoring. Migraines WITH aura: combined hormonal is contraindicated (CDC MEC Cat 4 — stroke risk). Progestin-only methods are safe and effective alternatives.` }} />
    ),
  },
  {
    question: `Will birth control help my acne?`,
    answerPlain: `Yes — combined hormonal contraceptives (especially those with drospirenone or norgestimate) significantly reduce acne. Multiple combined pills are FDA-approved for moderate acne. Improvement typically visible in 3 months.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — combined hormonal contraceptives (especially those with drospirenone or norgestimate) significantly reduce acne. Multiple combined pills are FDA-approved for moderate acne. Improvement typically visible in 3 months.` }} />
    ),
  },
  {
    question: `Will I gain weight on the pill?`,
    answerPlain: `Most studies show NO significant weight gain with combined oral contraceptives. Some progestin-only methods (especially Depo-Provera injection) can cause weight gain in some women. We'll discuss if this is a concern.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most studies show NO significant weight gain with combined oral contraceptives. Some progestin-only methods (especially Depo-Provera injection) can cause weight gain in some women. We'll discuss if this is a concern.` }} />
    ),
  },
  {
    question: `Can I skip my period on birth control?`,
    answerPlain: `Yes — extended-cycle pills (Seasonique, Loseasonique) are designed for periods every 3 months. Standard pills can also be used continuously by skipping the placebo week. Safe and well-studied.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — extended-cycle pills (Seasonique, Loseasonique) are designed for periods every 3 months. Standard pills can also be used continuously by skipping the placebo week. Safe and well-studied.` }} />
    ),
  },
  {
    question: `How quickly does birth control start working?`,
    answerPlain: `Combined pills started on day 1 of period: immediately effective. Started any other day: use backup method for 7 days. Progestin-only pills: backup for 48 hours. Same applies to patch and ring.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Combined pills started on day 1 of period: immediately effective. Started any other day: use backup method for 7 days. Progestin-only pills: backup for 48 hours. Same applies to patch and ring.` }} />
    ),
  },
  {
    question: `What if I miss a pill?`,
    answerPlain: `For combined pills: take it as soon as remembered. If >24 hours late, take immediately and continue normal schedule + backup for 7 days. Progestin-only: 3-hour window for older POPs; 24-hour window for drospirenone (Slynd). Detailed instructions provided in your pill pack.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `For combined pills: take it as soon as remembered. If &gt;24 hours late, take immediately and continue normal schedule + backup for 7 days. Progestin-only: 3-hour window for older POPs; 24-hour window for drospirenone (Slynd). Detailed instructions provided in your pill pack.` }} />
    ),
  },
  {
    question: `Can I get an IUD through telehealth?`,
    answerPlain: `We can do the consultation, MEC screening, and prescription, then refer you to a local clinic for placement. We also bridge with another method until placement. Insertion itself requires in-person visit.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `We can do the consultation, MEC screening, and prescription, then refer you to a local clinic for placement. We also bridge with another method until placement. Insertion itself requires in-person visit.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/birth-control-refills-online/', label: 'Birth Control Refills Online' },
  { slug: '/uti-treatment-online/', label: 'UTI Treatment Online' },
  { slug: '/yeast-infection-treatment-online/', label: 'Yeast Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/acne-treatment-online/', label: 'Acne Treatment Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Get a same-day birth control prescription via $79 telehealth — pill, patch, or ring. CDC MEC-screened, sent to your pharmacy in 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Oral Contraceptive / Birth Control',
      alternateName: ['Oral Contraceptives', 'Combined Oral Contraceptive Pill', 'OCP'],
      code: { '@type': 'MedicalCode', code: 'Z30.011', codingSystem: 'ICD-10-CM' },
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
        '#sym-birth-control-opening',
        '#sym-birth-control-opening p',
        '.tdmd-sym__byline',
        '#sym-birth-control-faq',
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
    name: `How to Get Birth Control Pills Online`,
    description: `Three steps to receive an oral contraceptive prescription from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select birth control on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/birth-control/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews medical history, contraindications (blood clots, migraine with aura, smoking, hypertension), and contraceptive goals.`, url: `https://teledirectmd.com/symptoms/birth-control/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your birth control prescription`, text: `Combined oral contraceptive or progestin-only pill prescribed and sent to your pharmacy same day.`, url: `https://teledirectmd.com/symptoms/birth-control/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Birth Control`, item: PAGE_URL },
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
export default function SymptomBirthControl() {
  const schemas = buildSchemas();
  const pid = 'sym-birth-control';

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
            <span aria-current="page">Birth Control</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Birth Control Pills — Online Prescription Same Day` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Birth Control — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Birth Control is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> Z30.011 — Encounter for initial prescription of contraceptive pills (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Birth Control Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Oral contraceptive pills are among the most effective reversible contraceptive methods, with perfect-use failure rates under 1% per ACOG data. TeleDirectMD can prescribe combined oral contraceptives (COCs) or progestin-only pills after a structured contraindication screen for $79, with same-day e-prescription to your pharmacy. Absolute contraindications — active DVT/PE, history of stroke, migraine with aura in smokers over 35, uncontrolled hypertension — are screened at every visit.` }} />
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
            <h2>Birth Control Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Women 18+ in our 41 states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Healthy, no MEC Category 4 contraindications` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want to start, switch, or refill birth control` }} />
              <li dangerouslySetInnerHTML={{ __html: `BP &lt;140/90 (or controlled with medication)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Refilling current method on a regular cycle` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want acne, cycle regulation, or PMDD benefits` }} />
              <li dangerouslySetInnerHTML={{ __html: `Postpartum &gt;6 weeks (CHC) or any time (POP/LARC)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Need same-day prescription — ran out, traveling, etc.` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Active migraine with aura (combined hormonal — but progestin-only OK)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Smoker age ≥35 (combined hormonal — but progestin-only OK)` }} />
              <li dangerouslySetInnerHTML={{ __html: `History of DVT/PE/stroke (combined hormonal — but progestin-only OK)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Uncontrolled hypertension (&gt;160/100) — needs in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Active breast cancer — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe liver disease — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Postmenopausal or new abnormal bleeding — needs in-person workup` }} />
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
            <h2>How Birth Control Treatment Works Online</h2>
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
            <h2>What Causes Birth Control? Differential Diagnosis</h2>
            <p>Not all birth control is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Birth Control differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Combined hormonal contraception (CHC)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Estrogen + progestin pill, patch, or ring.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~25% of US women on contraception` }} />
                <td dangerouslySetInnerHTML={{ __html: `Cycle regulation, acne benefit, ~99% effective with perfect use` }} />
                <td dangerouslySetInnerHTML={{ __html: `Screen MEC; prescribe pill (e.g., levonorgestrel/EE), patch (Xulane), or ring (NuvaRing)` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Progestin-only pill (POP)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Norethindrone or drospirenone-only pill.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Used when CHC contraindicated` }} />
                <td dangerouslySetInnerHTML={{ __html: `Safe with breastfeeding, migraine with aura, smokers &gt;35` }} />
                <td dangerouslySetInnerHTML={{ __html: `Take same time daily (3-hour window for most POPs); drospirenone has 24-hour window` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Long-acting reversible contraception (LARC)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `IUD or implant — most effective methods.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~12% of US contraceptive users (growing)` }} />
                <td dangerouslySetInnerHTML={{ __html: `Hormonal IUD (Mirena, Kyleena), copper IUD (Paragard), implant (Nexplanon)` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth can refer for placement; counseling and prescription pre-visit` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Emergency contraception` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Levonorgestrel (Plan B) or ulipristal (Ella) for post-coital prevention.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Used by ~25% of women at some point` }} />
                <td dangerouslySetInnerHTML={{ __html: `Most effective within 72 hours (LNG) or 120 hours (UPA)` }} />
                <td dangerouslySetInnerHTML={{ __html: `Levonorgestrel 1.5 mg (OTC) or ulipristal 30 mg (Rx)` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Cycle dysregulation requiring evaluation` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Abnormal bleeding patterns suggesting underlying pathology.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common reason for visit` }} />
                <td dangerouslySetInnerHTML={{ __html: `Heavy menstrual bleeding, intermenstrual bleeding, prolonged irregular cycles, postmenopausal bleeding` }} />
                <td dangerouslySetInnerHTML={{ __html: `In-person evaluation; possible ultrasound; labs (TSH, prolactin, CBC)` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Birth Control Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Birth Control cost comparison">
                <h3>Typical Birth Control Visit Cost</h3>
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
            <h2>Birth Control Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for birth control. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Birth Control medication options">
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
                <td><strong>Levonorgestrel / Ethinyl estradiol</strong> <span className="tdmd-sym__med-brand">(Aviane, Lessina)</span></td>
                <td>Oral tablet (28-day pack)</td>
                <td>Combined oral contraceptive</td>
                <td dangerouslySetInnerHTML={{ __html: `1 tablet daily, same time` }} />
                <td><a href="https://www.goodrx.com/aviane" target="_blank" rel="noopener">$15–$68</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Breakthrough bleeding, breast tenderness, nausea (early); minor VTE risk increase` }} />
              </tr>
              <tr>
                <td><strong>Norethindrone</strong> <span className="tdmd-sym__med-brand">(Camila, Errin)</span></td>
                <td>Oral tablet</td>
                <td>Progestin-only pill</td>
                <td dangerouslySetInnerHTML={{ __html: `0.35 mg daily, same time (3-hour window)` }} />
                <td><a href="https://www.goodrx.com/norethindrone" target="_blank" rel="noopener">$4–$28</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Irregular bleeding, headache; safe with breastfeeding` }} />
              </tr>
              <tr>
                <td><strong>Norelgestromin / Ethinyl estradiol</strong> <span className="tdmd-sym__med-brand">(Xulane)</span></td>
                <td>Transdermal patch</td>
                <td>Combined hormonal contraception</td>
                <td dangerouslySetInnerHTML={{ __html: `1 patch weekly × 3 weeks, off 1 week` }} />
                <td><a href="https://www.goodrx.com/camila" target="_blank" rel="noopener">$8–$28</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Skin irritation, breast tenderness; reduced efficacy if BMI &gt;30` }} />
              </tr>
              <tr>
                <td><strong>Etonogestrel / Ethinyl estradiol</strong> <span className="tdmd-sym__med-brand">(NuvaRing)</span></td>
                <td>Vaginal ring</td>
                <td>Combined hormonal contraception</td>
                <td dangerouslySetInnerHTML={{ __html: `1 ring inserted, left for 21 days, removed for 7` }} />
                <td><a href="https://www.goodrx.com/nuvaring" target="_blank" rel="noopener">$45–$199</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Vaginal discharge, irritation; same general profile as pills` }} />
              </tr>
              <tr>
                <td><strong>Drospirenone</strong> <span className="tdmd-sym__med-brand">(Slynd)</span></td>
                <td>Oral tablet</td>
                <td>Progestin-only pill</td>
                <td dangerouslySetInnerHTML={{ __html: `4 mg daily; 24-hour missed-dose window` }} />
                <td><a href="https://www.goodrx.com/slynd" target="_blank" rel="noopener">$196–$233</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Acne, breast pain; safer for breastfeeding women, smokers &gt;35` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Migraine with aura</strong> — combined estrogen contraindicated (CDC MEC Cat 4); use progestin-only` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Smoker age ≥35</strong> — combined estrogen contraindicated; use progestin-only` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>History of DVT, PE, or stroke</strong> — combined estrogen contraindicated` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Uncontrolled hypertension (&gt;160/100)</strong> — combined estrogen contraindicated` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Active liver disease</strong> — review with provider` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Breast cancer (current)</strong> — hormonal contraception contraindicated` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Postmenopausal bleeding or new heavy abnormal bleeding</strong> — needs evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Pregnancy possibility</strong> — confirm before prescribing` }} />
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
            <h2>What to Expect: Birth Control Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Birth Control recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Week 1</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Begin pill on day 1 of cycle (or with backup method 7 days). Some breakthrough bleeding is normal.` }} />
              </tr>
              <tr>
                <td><strong>Month 1</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Most side effects (breakthrough bleeding, breast tenderness, nausea) peak early and resolve.` }} />
              </tr>
              <tr>
                <td><strong>Month 3</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Full effects established; cycles regulate. Reassess if bothersome side effects persist.` }} />
              </tr>
              <tr>
                <td><strong>Annual</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Reassess BP, migraine, smoking, weight; recheck MEC category. Switch method if needed.` }} />
              </tr>
              <tr>
                <td><strong>Discontinuation</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Fertility returns within 1–3 months for most; can take longer for depot injection (up to 9 months).` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Birth Control</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Take pill at the same time every day (set a phone alarm)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Use backup method (condoms) for first 7 days when starting CHC` }} />
              <li dangerouslySetInnerHTML={{ __html: `If you miss a pill, follow specific instructions (provided per pill type)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Keep a backup pack of pills in case of refill delay` }} />
              <li dangerouslySetInnerHTML={{ __html: `Track BP at home if you have one (target &lt;130/80)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't smoke if on combined hormonal — major VTE risk` }} />
              <li dangerouslySetInnerHTML={{ __html: `Watch for warning signs: severe headache, chest pain, leg pain/swelling, vision change` }} />
              <li dangerouslySetInnerHTML={{ __html: `Note any new migraine aura — switch to progestin-only` }} />
              <li dangerouslySetInnerHTML={{ __html: `Use condoms for STI protection (pills don't protect against STIs)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't combine with St. John's wort (reduces efficacy)` }} />
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
              sectionTitle={`Frequently Asked Questions — Birth Control`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your birth control visit.</p>
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
              <li><a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2019/01/combined-hormonal-contraceptives" rel="noopener" target="_blank">ACOG Practice Bulletin — Combined Hormonal Contraceptives</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/reproductivehealth/contraception/mmwr/mec/summary.html" rel="noopener" target="_blank">CDC — US Medical Eligibility Criteria for Contraceptive Use</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2010/0115/p205.html" rel="noopener" target="_blank">AAFP — Contraception Overview</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ethinyl+estradiol+levonorgestrel" rel="noopener" target="_blank">FDA DailyMed — Combined Oral Contraceptives</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/condition/birth-control" rel="noopener" target="_blank">GoodRx — Birth Control Pill Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.plannedparenthood.org/learn/birth-control/birth-control-pill" rel="noopener" target="_blank">Planned Parenthood — Birth Control Methods</a>. Retrieved May 23, 2026.</li>
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
