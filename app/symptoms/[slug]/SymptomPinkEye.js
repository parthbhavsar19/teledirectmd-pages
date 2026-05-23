/**
 * SymptomPinkEye.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Pink Eye
 * Slug:    /symptoms/pink-eye/
 * ICD-10:  H10.30 — Unspecified acute conjunctivitis, unspecified eye
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/pink-eye/';
const PAGE_TITLE = `Pink Eye Treatment Online — Antibiotic Eye Drops Rx | TeleDirectMD`;
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
    generic: `Polymyxin B / Trimethoprim`,
    brand: `Polytrim`,
    form: `Ophthalmic drops`,
    drugClass: `Topical antibiotic combination`,
    dose: `1 drop every 4–6 hours × 5–7 days`,
    price: `$5–$12`,
    priceUrl: `https://www.goodrx.com/polymyxin-b-trimethoprim`,
    priceLabel: `GoodRx`,
    sideEffects: `Local burning, itching`,
  },
  {
    generic: `Erythromycin`,
    brand: `Ilotycin`,
    form: `Ophthalmic ointment`,
    drugClass: `Topical macrolide antibiotic`,
    dose: `Apply 4 times daily × 5–7 days`,
    price: `$4–$12`,
    priceUrl: `https://www.goodrx.com/erythromycin`,
    priceLabel: `GoodRx`,
    sideEffects: `Temporary blurry vision after application`,
  },
  {
    generic: `Ofloxacin`,
    brand: `Ocuflox`,
    form: `Ophthalmic drops`,
    drugClass: `Topical fluoroquinolone`,
    dose: `1–2 drops every 2–4 hours initially, then 4 times daily × 5–7 days`,
    price: `$5–$15`,
    priceUrl: `https://www.goodrx.com/ocuflox`,
    priceLabel: `GoodRx`,
    sideEffects: `Burning, blurred vision`,
  },
  {
    generic: `Olopatadine`,
    brand: `Pataday`,
    form: `Ophthalmic drops`,
    drugClass: `Antihistamine / mast cell stabilizer`,
    dose: `1 drop daily (0.2%) or twice daily (0.1%)`,
    price: `$3–$38`,
    priceUrl: `https://www.goodrx.com/olopatadine`,
    priceLabel: `GoodRx`,
    sideEffects: `Mild burning, headache`,
  },
  {
    generic: `Ketotifen`,
    brand: `Zaditor, Alaway`,
    form: `Ophthalmic drops`,
    drugClass: `Antihistamine / mast cell stabilizer`,
    dose: `1 drop twice daily`,
    price: `$3–$13`,
    priceUrl: `https://www.goodrx.com/ketotifen`,
    priceLabel: `GoodRx`,
    sideEffects: `Mild burning, dry eye`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Can a telehealth doctor prescribe antibiotic eye drops?`,
    answerPlain: `Yes — for typical bacterial conjunctivitis with no red flags. Dr. Bhavsar can prescribe polymyxin/trimethoprim, erythromycin, or ofloxacin via video visit. Contact lens wearers with red eye need in-person evaluation due to keratitis risk.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — for typical bacterial conjunctivitis with no red flags. Dr. Bhavsar can prescribe polymyxin/trimethoprim, erythromycin, or ofloxacin via video visit. Contact lens wearers with red eye need in-person evaluation due to keratitis risk.` }} />
    ),
  },
  {
    question: `How do I know if my pink eye is viral or bacterial?`,
    answerPlain: `Bacterial: thick yellow-green pus, lids matted shut on waking, often unilateral. Viral: watery discharge, often with cold symptoms, frequently spreads from one eye to the other. Allergic: bilateral, intensely itchy, often seasonal. We make this distinction on video visit.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Bacterial: thick yellow-green pus, lids matted shut on waking, often unilateral. Viral: watery discharge, often with cold symptoms, frequently spreads from one eye to the other. Allergic: bilateral, intensely itchy, often seasonal. We make this distinction on video visit.` }} />
    ),
  },
  {
    question: `How contagious is pink eye?`,
    answerPlain: `Viral conjunctivitis is highly contagious — spread by hand-to-eye contact and shared surfaces for up to 2 weeks. Bacterial is contagious until 24 hours after starting antibiotic drops. Strict hand hygiene and not sharing towels/pillows are the cornerstones of preventing spread.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Viral conjunctivitis is highly contagious — spread by hand-to-eye contact and shared surfaces for up to 2 weeks. Bacterial is contagious until 24 hours after starting antibiotic drops. Strict hand hygiene and not sharing towels/pillows are the cornerstones of preventing spread.` }} />
    ),
  },
  {
    question: `How long until I can return to work or school?`,
    answerPlain: `Bacterial: typically 24 hours after starting antibiotic drops. Viral: until eye discharge has resolved (usually 5–7 days). Many workplaces and schools have specific policies — we provide a return note when needed.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Bacterial: typically 24 hours after starting antibiotic drops. Viral: until eye discharge has resolved (usually 5–7 days). Many workplaces and schools have specific policies — we provide a return note when needed.` }} />
    ),
  },
  {
    question: `Should I throw away my eye makeup?`,
    answerPlain: `Yes — discard and replace any mascara, eyeliner, or eyeshadow used during the infection. Bacteria and viruses contaminate makeup and can re-infect you or others.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — discard and replace any mascara, eyeliner, or eyeshadow used during the infection. Bacteria and viruses contaminate makeup and can re-infect you or others.` }} />
    ),
  },
  {
    question: `Can I wear my contacts during pink eye?`,
    answerPlain: `No — remove immediately and wear glasses until the eye is fully recovered (at least 1 week post-symptom resolution). Discard the lenses worn just before/during the infection. Contact lens-related red eye warrants in-person evaluation due to keratitis risk.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No — remove immediately and wear glasses until the eye is fully recovered (at least 1 week post-symptom resolution). Discard the lenses worn just before/during the infection. Contact lens-related red eye warrants in-person evaluation due to keratitis risk.` }} />
    ),
  },
  {
    question: `Will pink eye cause permanent damage?`,
    answerPlain: `Uncomplicated viral, bacterial, and allergic conjunctivitis don't cause permanent damage. Complications occur with: bacterial keratitis (especially in contact lens wearers), herpes simplex eye infection, and untreated severe bacterial cases. Vision changes, severe pain, or photophobia warrant in-person care.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Uncomplicated viral, bacterial, and allergic conjunctivitis don't cause permanent damage. Complications occur with: bacterial keratitis (especially in contact lens wearers), herpes simplex eye infection, and untreated severe bacterial cases. Vision changes, severe pain, or photophobia warrant in-person care.` }} />
    ),
  },
  {
    question: `Why does only one eye have pink eye?`,
    answerPlain: `Bacterial conjunctivitis often starts in one eye. Viral can be unilateral initially but typically spreads to both within 1–2 days via auto-inoculation (hand contact). Allergic is almost always bilateral from the start.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Bacterial conjunctivitis often starts in one eye. Viral can be unilateral initially but typically spreads to both within 1–2 days via auto-inoculation (hand contact). Allergic is almost always bilateral from the start.` }} />
    ),
  },
  {
    question: `Can I use breast milk or honey for pink eye?`,
    answerPlain: `No — these home remedies are not evidence-based and can introduce additional infection. Stick to artificial tears, cool compresses, and hand hygiene for viral cases; use prescribed drops for bacterial cases.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No — these home remedies are not evidence-based and can introduce additional infection. Stick to artificial tears, cool compresses, and hand hygiene for viral cases; use prescribed drops for bacterial cases.` }} />
    ),
  },
  {
    question: `Is over-the-counter Visine helpful?`,
    answerPlain: `No — Visine and similar redness-reducer drops temporarily constrict blood vessels but don't treat the underlying cause and can cause rebound redness. Use artificial tears (preservative-free) for comfort instead.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No — Visine and similar redness-reducer drops temporarily constrict blood vessels but don't treat the underlying cause and can cause rebound redness. Use artificial tears (preservative-free) for comfort instead.` }} />
    ),
  },
  {
    question: `My child has pink eye — how do I prevent the rest of the family from getting it?`,
    answerPlain: `Strict hand hygiene; separate towels, pillowcases, and washcloths; clean toys with disinfectant; replace eye makeup; keep child out of pools and away from siblings' faces. Wash bedding daily during the active infection.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Strict hand hygiene; separate towels, pillowcases, and washcloths; clean toys with disinfectant; replace eye makeup; keep child out of pools and away from siblings' faces. Wash bedding daily during the active infection.` }} />
    ),
  },
  {
    question: `Are antibiotic drops always needed?`,
    answerPlain: `No — most pink eye is viral and doesn't need antibiotics. AAFP and AAO recommend antibiotic drops only for clear bacterial pattern. Inappropriate antibiotic use can cause local irritation, allergic reaction, and resistance. Watchful waiting + supportive care is appropriate for many cases.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No — most pink eye is viral and doesn't need antibiotics. AAFP and AAO recommend antibiotic drops only for clear bacterial pattern. Inappropriate antibiotic use can cause local irritation, allergic reaction, and resistance. Watchful waiting + supportive care is appropriate for many cases.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/pink-eye-treatment-online/', label: 'Pink Eye Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/seasonal-allergies-treatment-online/', label: 'Seasonal Allergies Treatment Online' },
  { slug: '/ear-pain-treatment-online/', label: 'Ear Pain Treatment Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Red, watery, sticky eye? Most pink eye is viral and self-limited; bacterial cases need antibiotic drops. $79 telehealth visit, prescription same day in 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Conjunctivitis (Pink Eye)',
      alternateName: ['Conjunctivitis', 'Viral Conjunctivitis', 'Bacterial Conjunctivitis', 'Red Eye'],
      code: { '@type': 'MedicalCode', code: 'H10.30', codingSystem: 'ICD-10-CM' },
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
        '#sym-pink-eye-opening',
        '#sym-pink-eye-opening p',
        '.tdmd-sym__byline',
        '#sym-pink-eye-faq',
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
    name: `How to Get Pink Eye Treatment Online`,
    description: `Three steps to receive conjunctivitis evaluation and antibiotic drops prescription from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select pink eye on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/pink-eye/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews eye discharge character, bilateral vs unilateral, and viral vs bacterial features.`, url: `https://teledirectmd.com/symptoms/pink-eye/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your prescription eye drops`, text: `Antibiotic eye drops (ofloxacin, tobramycin) or anti-allergy drops prescribed and sent to your pharmacy same day.`, url: `https://teledirectmd.com/symptoms/pink-eye/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Pink Eye`, item: PAGE_URL },
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
export default function SymptomPinkEye() {
  const schemas = buildSchemas();
  const pid = 'sym-pink-eye';

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
            <span aria-current="page">Pink Eye</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Pink Eye (Conjunctivitis) — Same-Day Antibiotic Drops Online` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Pink Eye — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Pink Eye is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> H10.30 — Unspecified acute conjunctivitis, unspecified eye (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Pink Eye Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Acute conjunctivitis (pink eye) presents with red, irritated eyes, discharge, and often crusting. Bacterial conjunctivitis produces mucopurulent discharge and responds to antibiotic eye drops; viral conjunctivitis is self-limited and more contagious. TeleDirectMD evaluates photo submissions and symptom history to distinguish bacterial from viral etiology and prescribes antibiotic drops (ofloxacin, tobramycin) when indicated for $79.` }} />
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
            <h2>Pink Eye Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adults and children (with parent) in our 41 states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Red eye with discharge, no vision change` }} />
              <li dangerouslySetInnerHTML={{ __html: `No severe pain, no photophobia` }} />
              <li dangerouslySetInnerHTML={{ __html: `Not a contact lens wearer with active redness` }} />
              <li dangerouslySetInnerHTML={{ __html: `No recent eye trauma` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms &lt;2 weeks` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want guidance on viral vs. bacterial pattern` }} />
              <li dangerouslySetInnerHTML={{ __html: `Need work/school exclusion note` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Vision change, blurring, or vision loss — needs in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe pain or marked photophobia — needs in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Contact lens wearer with red eye — needs in-person same day (keratitis risk)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recent eye trauma or chemical splash — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Suspected herpes (vesicular lesions on lid) — ophthalmology` }} />
              <li dangerouslySetInnerHTML={{ __html: `Marked eyelid swelling, redness, or fever — possible orbital cellulitis — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Newborns (&lt;28 days) — ophthalmology / pediatrics` }} />
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
            <h2>How Pink Eye Treatment Works Online</h2>
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
            <h2>What Causes Pink Eye? Differential Diagnosis</h2>
            <p>Not all pink eye is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Pink Eye differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Viral conjunctivitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Adenoviral conjunctivitis (most common).` }} />
                <td dangerouslySetInnerHTML={{ __html: `~80% of acute conjunctivitis` }} />
                <td dangerouslySetInnerHTML={{ __html: `Watery discharge, gritty/burning sensation, often spreads to second eye, frequent associated URI` }} />
                <td dangerouslySetInnerHTML={{ __html: `Supportive: cool compresses, artificial tears, hand hygiene; resolves 1–2 weeks` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Bacterial conjunctivitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `S. aureus, S. pneumoniae, H. influenzae infection.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~15% of cases (more common in children)` }} />
                <td dangerouslySetInnerHTML={{ __html: `Thick yellow-green purulent discharge, lids matted shut on waking, unilateral often` }} />
                <td dangerouslySetInnerHTML={{ __html: `Erythromycin or polymyxin/trimethoprim drops × 5–7 days` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Allergic conjunctivitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `IgE-mediated allergic response.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~25% US adults seasonally` }} />
                <td dangerouslySetInnerHTML={{ __html: `Bilateral itching, watery discharge, nasal symptoms, seasonal pattern` }} />
                <td dangerouslySetInnerHTML={{ __html: `Olopatadine or ketotifen antihistamine drops; oral antihistamine` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Iritis / uveitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Inflammation of inner eye structures.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Uncommon but vision-threatening` }} />
                <td dangerouslySetInnerHTML={{ __html: `Severe pain, photophobia, blurred vision, perilimbal redness` }} />
                <td dangerouslySetInnerHTML={{ __html: `Urgent ophthalmology referral; topical steroids only under specialist` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Corneal abrasion / foreign body` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Mechanical injury to corneal surface.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common` }} />
                <td dangerouslySetInnerHTML={{ __html: `Sharp pain, foreign-body sensation, history of injury or contact lens, fluorescein uptake` }} />
                <td dangerouslySetInnerHTML={{ __html: `In-person fluorescein exam; antibiotic drops; foreign body removal` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Pink Eye Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Pink Eye cost comparison">
                <h3>Typical Pink Eye Visit Cost</h3>
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
            <h2>Pink Eye Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for pink eye. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Pink Eye medication options">
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
                <td><strong>Polymyxin B / Trimethoprim</strong> <span className="tdmd-sym__med-brand">(Polytrim)</span></td>
                <td>Ophthalmic drops</td>
                <td>Topical antibiotic combination</td>
                <td dangerouslySetInnerHTML={{ __html: `1 drop every 4–6 hours × 5–7 days` }} />
                <td><a href="https://www.goodrx.com/polymyxin-b-trimethoprim" target="_blank" rel="noopener">$5–$12</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Local burning, itching` }} />
              </tr>
              <tr>
                <td><strong>Erythromycin</strong> <span className="tdmd-sym__med-brand">(Ilotycin)</span></td>
                <td>Ophthalmic ointment</td>
                <td>Topical macrolide antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `Apply 4 times daily × 5–7 days` }} />
                <td><a href="https://www.goodrx.com/erythromycin" target="_blank" rel="noopener">$4–$12</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Temporary blurry vision after application` }} />
              </tr>
              <tr>
                <td><strong>Ofloxacin</strong> <span className="tdmd-sym__med-brand">(Ocuflox)</span></td>
                <td>Ophthalmic drops</td>
                <td>Topical fluoroquinolone</td>
                <td dangerouslySetInnerHTML={{ __html: `1–2 drops every 2–4 hours initially, then 4 times daily × 5–7 days` }} />
                <td><a href="https://www.goodrx.com/ocuflox" target="_blank" rel="noopener">$5–$15</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Burning, blurred vision` }} />
              </tr>
              <tr>
                <td><strong>Olopatadine</strong> <span className="tdmd-sym__med-brand">(Pataday)</span></td>
                <td>Ophthalmic drops</td>
                <td>Antihistamine / mast cell stabilizer</td>
                <td dangerouslySetInnerHTML={{ __html: `1 drop daily (0.2%) or twice daily (0.1%)` }} />
                <td><a href="https://www.goodrx.com/olopatadine" target="_blank" rel="noopener">$3–$38</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Mild burning, headache` }} />
              </tr>
              <tr>
                <td><strong>Ketotifen</strong> <span className="tdmd-sym__med-brand">(Zaditor, Alaway)</span></td>
                <td>Ophthalmic drops</td>
                <td>Antihistamine / mast cell stabilizer</td>
                <td dangerouslySetInnerHTML={{ __html: `1 drop twice daily` }} />
                <td><a href="https://www.goodrx.com/ketotifen" target="_blank" rel="noopener">$3–$13</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Mild burning, dry eye` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Vision change or blurring not relieved by blinking</strong> — possible iritis, keratitis` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe eye pain</strong> — possible iritis, glaucoma, keratitis` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Photophobia (severe light sensitivity)</strong> — iritis, keratitis` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Contact lens wearer with red eye</strong> — possible bacterial keratitis (sight-threatening, ER)` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Foreign body sensation that won't wash out</strong> — possible corneal abrasion or embedded body` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Recent eye trauma or chemical exposure</strong> — emergent care` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Pupil irregular or non-reactive</strong> — emergent` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Marked eyelid swelling or proptosis</strong> — possible orbital cellulitis` }} />
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
            <h2>What to Expect: Pink Eye Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Pink Eye recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Day 1–2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Bacterial: discharge improves with first 2 days of antibiotic. Viral: may worsen before improving over the first week.` }} />
              </tr>
              <tr>
                <td><strong>Day 3–5</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Bacterial cases largely resolved on antibiotic. Viral still active.` }} />
              </tr>
              <tr>
                <td><strong>Week 1</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Viral conjunctivitis usually improving — redness fading.` }} />
              </tr>
              <tr>
                <td><strong>Week 2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Most viral cases fully resolved. Some adenoviral subtypes can take 2–3 weeks.` }} />
              </tr>
              <tr>
                <td><strong>Beyond 2 weeks</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `If still symptomatic, in-person ophthalmology evaluation recommended.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Pink Eye</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Cool compresses 4× daily for 5–10 minutes` }} />
              <li dangerouslySetInnerHTML={{ __html: `Artificial tears (preservative-free) 4–6× daily for comfort` }} />
              <li dangerouslySetInnerHTML={{ __html: `Wash hands before and after touching the eye` }} />
              <li dangerouslySetInnerHTML={{ __html: `Use separate towels and pillowcases — change daily` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't share eye makeup; replace mascara/eyeliner used while sick` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't wear contact lenses until fully resolved` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't wear eye makeup until fully resolved` }} />
              <li dangerouslySetInnerHTML={{ __html: `Stay home from school/work until 24 hours of antibiotic if bacterial; until eye-discharge resolved if viral` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid touching/rubbing the eye` }} />
              <li dangerouslySetInnerHTML={{ __html: `Disinfect frequently touched surfaces (phone, doorknobs)` }} />
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
              sectionTitle={`Frequently Asked Questions — Pink Eye`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your pink eye visit.</p>
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
              <li><a href="https://www.aao.org/education/clinical-statement/conjunctivitis-preferred-practice-pattern" rel="noopener" target="_blank">AAO — Conjunctivitis Clinical Practice Guideline</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2010/0615/p1437.html" rel="noopener" target="_blank">AAFP — Acute Conjunctivitis: Diagnosis and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/conjunctivitis/about/index.html" rel="noopener" target="_blank">CDC — Pink Eye (Conjunctivitis) Overview</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ofloxacin+ophthalmic" rel="noopener" target="_blank">FDA DailyMed — Ofloxacin Ophthalmic</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/ofloxacin-ophthalmic" rel="noopener" target="_blank">GoodRx — Antibiotic Eye Drop Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Ophthalmology &amp; Primary Care Resources</a>. Retrieved May 23, 2026.</li>
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
