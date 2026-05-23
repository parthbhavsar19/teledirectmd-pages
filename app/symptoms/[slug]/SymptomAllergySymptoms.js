/**
 * SymptomAllergySymptoms.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Itchy Eyes and Runny Nose
 * Slug:    /symptoms/allergy-symptoms/
 * ICD-10:  J30.1 — Allergic rhinitis due to pollen
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/allergy-symptoms/';
const PAGE_TITLE = `Itchy Eyes & Runny Nose — Allergies vs. Cold | TeleDirectMD`;
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
    generic: `fluticasone propionate nasal`,
    brand: `Flonase`,
    form: `nasal spray`,
    drugClass: `intranasal corticosteroid`,
    dose: `1–2 sprays each nostril daily`,
    price: `$16–$27`,
    priceUrl: `https://www.goodrx.com/fluticasone-propionate-non-prescription`,
    priceLabel: `GoodRx`,
    sideEffects: `Nasal dryness, occasional epistaxis, rare nasal septal perforation.`,
  },
  {
    generic: `cetirizine`,
    brand: `Zyrtec`,
    form: `oral tablet`,
    drugClass: `second-generation antihistamine`,
    dose: `10 mg PO daily`,
    price: `$2–$10`,
    priceUrl: `https://www.goodrx.com/cetirizine`,
    priceLabel: `GoodRx`,
    sideEffects: `Mild sedation in 5–10%, dry mouth.`,
  },
  {
    generic: `levocetirizine`,
    brand: `Xyzal`,
    form: `oral tablet`,
    drugClass: `second-generation antihistamine`,
    dose: `5 mg PO daily evening`,
    price: `$3–$71`,
    priceUrl: `https://www.goodrx.com/levocetirizine`,
    priceLabel: `GoodRx`,
    sideEffects: `Mild sedation, dry mouth; less than cetirizine for some patients.`,
  },
  {
    generic: `olopatadine ophthalmic`,
    brand: `Pataday, Patanol`,
    form: `ophthalmic solution`,
    drugClass: `antihistamine / mast-cell stabilizer eye drop`,
    dose: `1 drop each eye twice daily (0.1%) or once daily (0.7%)`,
    price: `$8–$20`,
    priceUrl: `https://www.goodrx.com/olopatadine`,
    priceLabel: `GoodRx`,
    sideEffects: `Transient stinging on instillation, dry eye.`,
  },
  {
    generic: `azelastine-fluticasone`,
    brand: `Dymista`,
    form: `nasal spray`,
    drugClass: `combination antihistamine + corticosteroid`,
    dose: `1 spray each nostril BID`,
    price: `$37–$165`,
    priceUrl: `https://www.goodrx.com/azelastine-fluticasone`,
    priceLabel: `GoodRx`,
    sideEffects: `Bitter taste, headache, mild epistaxis.`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `How can I tell if it\'s allergies or a cold?`,
    answerPlain: `Allergies: itchy eyes/nose, clear runny nose, no fever, often longer than 7–10 days, often worse outdoors or in specific environments. Colds: scratchy throat first, possible low-grade fever, body aches, resolves in 7–10 days. Itching is the most reliable allergy clue.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Allergies: itchy eyes/nose, clear runny nose, no fever, often longer than 7–10 days, often worse outdoors or in specific environments. Colds: scratchy throat first, possible low-grade fever, body aches, resolves in 7–10 days. Itching is the most reliable allergy clue.` }} />
    ),
  },
  {
    question: `Can a doctor prescribe allergy medication online?`,
    answerPlain: `Yes. TeleDirectMD's $79 visit covers prescription antihistamines (levocetirizine, fexofenadine), nasal steroids (fluticasone, mometasone, Dymista), and antihistamine eye drops. Most generics are (see medication table).`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes. TeleDirectMD's $79 visit covers prescription antihistamines (levocetirizine, fexofenadine), nasal steroids (fluticasone, mometasone, Dymista), and antihistamine eye drops. Most generics are (see medication table).` }} />
    ),
  },
  {
    question: `Are nasal steroids better than antihistamines?`,
    answerPlain: `For moderate-to-severe allergic rhinitis, nasal steroids (fluticasone, mometasone) are usually more effective than oral antihistamines per ARIA guidelines. They take 2–4 days to reach full effect. Antihistamines work within hours and add benefit when used together.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `For moderate-to-severe allergic rhinitis, nasal steroids (fluticasone, mometasone) are usually more effective than oral antihistamines per ARIA guidelines. They take 2–4 days to reach full effect. Antihistamines work within hours and add benefit when used together.` }} />
    ),
  },
  {
    question: `Are OTC allergy medications enough?`,
    answerPlain: `For mild seasonal allergies, often yes — loratadine, cetirizine, OTC fluticasone (Flonase). For moderate-to-severe symptoms or symptoms that have not responded after 2 weeks, prescription strength or combination therapy works better.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `For mild seasonal allergies, often yes — loratadine, cetirizine, OTC fluticasone (Flonase). For moderate-to-severe symptoms or symptoms that have not responded after 2 weeks, prescription strength or combination therapy works better.` }} />
    ),
  },
  {
    question: `How much does an allergy telehealth visit cost?`,
    answerPlain: `$79 for the visit. Add low-cost generic prescriptions (see medication table); total typically $54–$74. Compare to $150–$280 cash-pay urgent care or $300+ for an allergist visit.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `$79 for the visit. Add low-cost generic prescriptions (see medication table); total typically $54–$74. Compare to $150–$280 cash-pay urgent care or $300+ for an allergist visit.` }} />
    ),
  },
  {
    question: `When should I see an allergist instead of telehealth?`,
    answerPlain: `See an allergist if symptoms have not responded to combined nasal steroid + antihistamine after 2–4 weeks of consistent use, if you want allergy testing to identify specific triggers, or if you are considering immunotherapy (allergy shots or sublingual tablets).`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See an allergist if symptoms have not responded to combined nasal steroid + antihistamine after 2–4 weeks of consistent use, if you want allergy testing to identify specific triggers, or if you are considering immunotherapy (allergy shots or sublingual tablets).` }} />
    ),
  },
  {
    question: `Can allergies cause asthma symptoms?`,
    answerPlain: `Yes. Allergic asthma is common — exposure to pollen, dust mite, or pet dander triggers wheezing and shortness of breath. The visit will evaluate and treat both conditions; allergic asthma usually responds well to inhaled steroids plus the antihistamine/nasal-steroid combination.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes. Allergic asthma is common — exposure to pollen, dust mite, or pet dander triggers wheezing and shortness of breath. The visit will evaluate and treat both conditions; allergic asthma usually responds well to inhaled steroids plus the antihistamine/nasal-steroid combination.` }} />
    ),
  },
  {
    question: `Do I need to know what I\'m allergic to before treatment?`,
    answerPlain: `No. Treatment is symptom-based and works regardless of which trigger is causing symptoms. Identifying specific allergens (testing) helps with avoidance and immunotherapy, but the medications work either way.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No. Treatment is symptom-based and works regardless of which trigger is causing symptoms. Identifying specific allergens (testing) helps with avoidance and immunotherapy, but the medications work either way.` }} />
    ),
  },
  {
    question: `Are first-generation antihistamines (Benadryl) okay to use?`,
    answerPlain: `Discouraged for routine allergy management — diphenhydramine is sedating, has anticholinergic effects, impairs reaction time and learning, and is associated with increased dementia risk in older adults per Beers Criteria. Use second-generation antihistamines instead.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Discouraged for routine allergy management — diphenhydramine is sedating, has anticholinergic effects, impairs reaction time and learning, and is associated with increased dementia risk in older adults per Beers Criteria. Use second-generation antihistamines instead.` }} />
    ),
  },
  {
    question: `Can I take Sudafed (pseudoephedrine) for allergies?`,
    answerPlain: `Pseudoephedrine relieves congestion but doesn't treat the underlying allergic inflammation. It can raise blood pressure, cause insomnia, and worsen prostate-related urinary symptoms. Use sparingly; nasal steroid is the better long-term answer.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Pseudoephedrine relieves congestion but doesn't treat the underlying allergic inflammation. It can raise blood pressure, cause insomnia, and worsen prostate-related urinary symptoms. Use sparingly; nasal steroid is the better long-term answer.` }} />
    ),
  },
  {
    question: `What is the difference between Zyrtec, Claritin, and Allegra?`,
    answerPlain: `All are second-generation antihistamines. Cetirizine (Zyrtec) is most potent but has the highest rate of mild sedation (~10%). Loratadine (Claritin) is least sedating but slightly less effective. Fexofenadine (Allegra) is non-sedating and avoids food interactions but should be taken away from juice.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `All are second-generation antihistamines. Cetirizine (Zyrtec) is most potent but has the highest rate of mild sedation (~10%). Loratadine (Claritin) is least sedating but slightly less effective. Fexofenadine (Allegra) is non-sedating and avoids food interactions but should be taken away from juice.` }} />
    ),
  },
  {
    question: `How do I prevent rebound congestion from nasal sprays?`,
    answerPlain: `Avoid OTC decongestant nasal sprays (oxymetazoline, Afrin) for more than 3 consecutive days — longer use causes rhinitis medicamentosa. Steroid sprays (Flonase, Nasacort) and saline are safe for daily long-term use.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Avoid OTC decongestant nasal sprays (oxymetazoline, Afrin) for more than 3 consecutive days — longer use causes rhinitis medicamentosa. Steroid sprays (Flonase, Nasacort) and saline are safe for daily long-term use.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/seasonal-allergies-treatment-online/', label: 'Seasonal Allergies Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/asthma-refills-online/', label: 'Asthma Inhaler Refills Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/pink-eye-treatment-online/', label: 'Pink Eye Treatment Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Itchy eyes + runny nose without fever is usually allergic rhinitis. Prescription antihistamines, nasal steroids, and eye drops via $79 telehealth visit. 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Allergic Rhinitis / Seasonal Allergies',
      alternateName: ['Allergic Rhinitis', 'Hay Fever', 'Seasonal Allergies', 'Pollinosis'],
      code: { '@type': 'MedicalCode', code: 'J30.1', codingSystem: 'ICD-10-CM' },
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
        '#sym-allergy-opening',
        '#sym-allergy-opening p',
        '.tdmd-sym__byline',
        '#sym-allergy-faq',
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
    name: `How to Get Allergy Treatment Online`,
    description: `Three steps to receive seasonal allergy evaluation and prescription antihistamine or nasal spray.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select allergy symptoms on teledirectmd.com. Self pay $79. Same-day visits often available.`, url: `https://teledirectmd.com/symptoms/allergy-symptoms/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews symptom pattern, triggers, prior medications, and rules out infection.`, url: `https://teledirectmd.com/symptoms/allergy-symptoms/` },
      { '@type': 'HowToStep', position: 3, name: `Receive prescription antihistamine or nasal steroid`, text: `Prescription-strength antihistamines, intranasal steroids, or combination therapy sent to your pharmacy.`, url: `https://teledirectmd.com/symptoms/allergy-symptoms/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Itchy Eyes and Runny Nose`, item: PAGE_URL },
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
export default function SymptomAllergySymptoms() {
  const schemas = buildSchemas();
  const pid = 'sym-allergy';

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
            <span aria-current="page">Itchy Eyes and Runny Nose</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Itchy Eyes and Runny Nose — Is It Allergies, a Cold, or Something Else?` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Itchy Eyes and Runny Nose — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Itchy Eyes and Runny Nose is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J30.1 — Allergic rhinitis due to pollen (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Itchy Eyes and Runny Nose Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Runny nose, sneezing, itchy watery eyes, and nasal congestion that track with seasons or specific exposures are hallmarks of <strong>allergic rhinitis</strong> — the most common chronic condition in American adults, affecting 10–30% per AAD estimates. A $79 TeleDirectMD video visit distinguishes allergy from viral URI, prescribes prescription-strength intranasal corticosteroids or antihistamines, and sets up a long-term allergy management plan.` }} />
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
            <h2>Itchy Eyes and Runny Nose Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adult age 18 or older located in one of 41 licensed states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms consistent with allergic rhinitis or allergic conjunctivitis` }} />
              <li dangerouslySetInnerHTML={{ __html: `No wheezing or shortness of breath` }} />
              <li dangerouslySetInnerHTML={{ __html: `No fever above 101°F` }} />
              <li dangerouslySetInnerHTML={{ __html: `No purulent eye discharge or severe eye pain` }} />
              <li dangerouslySetInnerHTML={{ __html: `Have not had recent severe anaphylactic reaction requiring epinephrine` }} />
              <li dangerouslySetInnerHTML={{ __html: `Willing to commit to daily preventive therapy if needed` }} />
              <li dangerouslySetInnerHTML={{ __html: `Have a pharmacy where prescriptions can be sent` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Anaphylaxis (call 911) or recurrent severe allergic reactions — needs allergist and EpiPen` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acute asthma exacerbation with significant breathing difficulty — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe one-sided eye pain or vision changes — needs in-person ophthalmology` }} />
              <li dangerouslySetInnerHTML={{ __html: `Suspected bacterial conjunctivitis with purulent discharge — different treatment path` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms not responding to standard therapy after 2+ weeks — refer to allergist` }} />
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
            <h2>How Itchy Eyes and Runny Nose Treatment Works Online</h2>
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
            <h2>What Causes Itchy Eyes and Runny Nose? Differential Diagnosis</h2>
            <p>Not all itchy eyes and runny nose is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Itchy Eyes and Runny Nose differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Seasonal allergic rhinitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Spring/fall flares from tree, grass, or weed pollen. Symptoms predictable by season.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~20% of US adults` }} />
                <td dangerouslySetInnerHTML={{ __html: `Clear rhinorrhea, sneezing, itchy eyes/nose; seasonal pattern; outdoor trigger.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — intranasal steroid + antihistamine.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Perennial allergic rhinitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Year-round symptoms from indoor allergens — dust mites, pet dander, mold, cockroach.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~10% of US adults` }} />
                <td dangerouslySetInnerHTML={{ __html: `Year-round; worse in bedroom; pet exposure correlation.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — daily intranasal steroid; allergen avoidance counseling; consider allergist for testing.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Vasomotor (non-allergic) rhinitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Non-IgE-mediated rhinitis triggered by temperature change, odors, alcohol, or hormonal changes.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common in adults &gt; 30` }} />
                <td dangerouslySetInnerHTML={{ __html: `Clear runny nose without itching; triggered by cold air, perfume, spicy food.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — intranasal ipratropium or steroid.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Viral upper respiratory infection (cold)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Self-limited viral illness lasting 7–10 days. Sometimes confused with allergies.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Adults: 2–3 colds/year average` }} />
                <td dangerouslySetInnerHTML={{ __html: `Sore throat first, then runny nose; possible low-grade fever; body aches; resolves in 7–10 days.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth or supportive care; antibiotics not indicated.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Allergic conjunctivitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `IgE-mediated eye-only allergy. Often coexists with rhinitis.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~30% of patients with allergic rhinitis` }} />
                <td dangerouslySetInnerHTML={{ __html: `Itchy, watery, red eyes; bilateral; no purulent discharge.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — antihistamine eye drops + oral antihistamine.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Itchy Eyes and Runny Nose Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Itchy Eyes and Runny Nose cost comparison">
                <h3>Typical Itchy Eyes and Runny Nose Visit Cost</h3>
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
            <h2>Itchy Eyes and Runny Nose Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for itchy eyes and runny nose. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Itchy Eyes and Runny Nose medication options">
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
                <td><strong>fluticasone propionate nasal</strong> <span className="tdmd-sym__med-brand">(Flonase)</span></td>
                <td>nasal spray</td>
                <td>intranasal corticosteroid</td>
                <td dangerouslySetInnerHTML={{ __html: `1–2 sprays each nostril daily` }} />
                <td><a href="https://www.goodrx.com/fluticasone-propionate-non-prescription" target="_blank" rel="noopener">$16–$27</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Nasal dryness, occasional epistaxis, rare nasal septal perforation.` }} />
              </tr>
              <tr>
                <td><strong>cetirizine</strong> <span className="tdmd-sym__med-brand">(Zyrtec)</span></td>
                <td>oral tablet</td>
                <td>second-generation antihistamine</td>
                <td dangerouslySetInnerHTML={{ __html: `10 mg PO daily` }} />
                <td><a href="https://www.goodrx.com/cetirizine" target="_blank" rel="noopener">$2–$10</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Mild sedation in 5–10%, dry mouth.` }} />
              </tr>
              <tr>
                <td><strong>levocetirizine</strong> <span className="tdmd-sym__med-brand">(Xyzal)</span></td>
                <td>oral tablet</td>
                <td>second-generation antihistamine</td>
                <td dangerouslySetInnerHTML={{ __html: `5 mg PO daily evening` }} />
                <td><a href="https://www.goodrx.com/levocetirizine" target="_blank" rel="noopener">$3–$71</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Mild sedation, dry mouth; less than cetirizine for some patients.` }} />
              </tr>
              <tr>
                <td><strong>olopatadine ophthalmic</strong> <span className="tdmd-sym__med-brand">(Pataday, Patanol)</span></td>
                <td>ophthalmic solution</td>
                <td>antihistamine / mast-cell stabilizer eye drop</td>
                <td dangerouslySetInnerHTML={{ __html: `1 drop each eye twice daily (0.1%) or once daily (0.7%)` }} />
                <td><a href="https://www.goodrx.com/olopatadine" target="_blank" rel="noopener">$8–$20</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Transient stinging on instillation, dry eye.` }} />
              </tr>
              <tr>
                <td><strong>azelastine-fluticasone</strong> <span className="tdmd-sym__med-brand">(Dymista)</span></td>
                <td>nasal spray</td>
                <td>combination antihistamine + corticosteroid</td>
                <td dangerouslySetInnerHTML={{ __html: `1 spray each nostril BID` }} />
                <td><a href="https://www.goodrx.com/azelastine-fluticasone" target="_blank" rel="noopener">$37–$165</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Bitter taste, headache, mild epistaxis.` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `Wheezing, shortness of breath, or chest tightness — concurrent asthma exacerbation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe facial swelling, throat tightness, or hives — anaphylaxis (call 911)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe one-sided eye pain or vision change — not allergic; could be acute angle-closure glaucoma or uveitis` }} />
              <li dangerouslySetInnerHTML={{ __html: `High fever (&gt; 101°F) — suggests infection, not allergy` }} />
              <li dangerouslySetInnerHTML={{ __html: `Purulent (yellow-green) eye discharge that mats lashes shut — bacterial conjunctivitis` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms not responding to combined nasal steroid + antihistamine for 2+ weeks despite adherence` }} />
              <li dangerouslySetInnerHTML={{ __html: `Allergic reaction with stridor or dysphagia — emergency` }} />
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
            <h2>What to Expect: Itchy Eyes and Runny Nose Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Itchy Eyes and Runny Nose recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Day 1–3</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Antihistamines provide rapid (1–2 hour) relief. Nasal steroids not yet at full effect. Eye drops give immediate relief on application.` }} />
              </tr>
              <tr>
                <td><strong>Day 4–7</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Nasal steroid reaching full effect. Significant reduction in congestion, post-nasal drip, and rhinorrhea. Continue daily through allergy season.` }} />
              </tr>
              <tr>
                <td><strong>Week 2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Most patients well-controlled. If still symptomatic, consider adding a combination spray (azelastine-fluticasone) or escalating antihistamine.` }} />
              </tr>
              <tr>
                <td><strong>Seasonal pattern</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `For seasonal allergic rhinitis, start treatment 1–2 weeks before peak season for prophylaxis. Continue through season; can taper afterward.` }} />
              </tr>
              <tr>
                <td><strong>Beyond 2 weeks of optimal therapy</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Persistent uncontrolled symptoms — refer to allergist for skin testing and consideration of immunotherapy.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Itchy Eyes and Runny Nose</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Run a HEPA air purifier in the bedroom; change filters per manufacturer schedule.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Use dust-mite-proof encasings on mattresses and pillows.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Wash bedding weekly in hot (130°F+) water.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Shower and change clothes after coming indoors during pollen season.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Keep windows closed and run AC during peak pollen hours (early morning).` }} />
              <li dangerouslySetInnerHTML={{ __html: `Wear sunglasses outdoors to reduce eye-pollen contact.` }} />
              <li dangerouslySetInnerHTML={{ __html: `If pet-allergic: keep pets out of the bedroom; bathe pets weekly; HEPA filter in shared spaces.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Saline nasal rinses 1–2 times daily during peak season — Neti pot or NeilMed sinus rinse with distilled water only.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Track local pollen counts (pollen.com or weather apps) and time outdoor activities accordingly.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid first-generation antihistamines (diphenhydramine, hydroxyzine) — sedating and anticholinergic; use second-generation instead.` }} />
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
              sectionTitle={`Frequently Asked Questions — Itchy Eyes and Runny Nose`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your itchy eyes and runny nose visit.</p>
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
              <li><a href="https://www.aafp.org/pubs/afp/issues/2015/0815/p297.html" rel="noopener" target="_blank">AAFP — Allergic Rhinitis: Diagnosis and Management</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis" rel="noopener" target="_blank">AAD — Atopic Dermatitis / Allergic Conditions</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/nchs/fastats/allergies.htm" rel="noopener" target="_blank">CDC — Allergies Overview</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://acaai.org/allergies/allergic-rhinitis/" rel="noopener" target="_blank">ACAAI — Allergic Rhinitis Patient Education</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=fluticasone+nasal" rel="noopener" target="_blank">FDA DailyMed — Fluticasone Nasal</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/fluticasone-nasal" rel="noopener" target="_blank">GoodRx — Fluticasone Nasal Pricing</a>. Retrieved May 23, 2026.</li>
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
