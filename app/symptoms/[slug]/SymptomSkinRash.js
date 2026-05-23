/**
 * SymptomSkinRash.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Skin Rash
 * Slug:    /symptoms/skin-rash/
 * ICD-10:  L25.9 — Unspecified contact dermatitis, unspecified cause
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/skin-rash/';
const PAGE_TITLE = `Skin Rash Treatment Online — Same-Day Rx | TeleDirectMD`;
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
    generic: `Triamcinolone 0.1%`,
    brand: `Kenalog`,
    form: `Topical cream/ointment`,
    drugClass: `Medium-potency topical corticosteroid`,
    dose: `Apply BID × 1–2 weeks`,
    price: `$5–$25`,
    priceUrl: `https://www.goodrx.com/kenalog`,
    priceLabel: `GoodRx`,
    sideEffects: `Skin thinning with prolonged use; avoid face/groin`,
  },
  {
    generic: `Hydrocortisone 1–2.5%`,
    brand: `Cortizone`,
    form: `Topical cream`,
    drugClass: `Low-potency topical corticosteroid`,
    dose: `Apply BID × 1–2 weeks`,
    price: `$4–$11`,
    priceUrl: `https://www.goodrx.com/hydrocortisone`,
    priceLabel: `GoodRx`,
    sideEffects: `Minimal at low potency; suitable for face/groin`,
  },
  {
    generic: `Clobetasol 0.05%`,
    brand: `Temovate`,
    form: `Topical cream/ointment`,
    drugClass: `Super-high-potency topical corticosteroid`,
    dose: `Apply BID × max 2 weeks`,
    price: `$11–$251`,
    priceUrl: `https://www.goodrx.com/clobetasol`,
    priceLabel: `GoodRx`,
    sideEffects: `Skin thinning; use only on body, short courses`,
  },
  {
    generic: `Terbinafine`,
    brand: `Lamisil`,
    form: `Topical cream / oral`,
    drugClass: `Antifungal`,
    dose: `Apply 1% cream BID × 2–4 weeks; oral 250 mg daily for 2–6 weeks for severe`,
    price: `$6–$64`,
    priceUrl: `https://www.goodrx.com/terbinafine`,
    priceLabel: `GoodRx`,
    sideEffects: `Local irritation (cream); LFT elevation (oral)`,
  },
  {
    generic: `Cetirizine`,
    brand: `Zyrtec`,
    form: `Oral tablet`,
    drugClass: `Second-generation antihistamine`,
    dose: `10 mg once daily; up to 40 mg/day for chronic urticaria`,
    price: `$2–$10`,
    priceUrl: `https://www.goodrx.com/cetirizine`,
    priceLabel: `GoodRx`,
    sideEffects: `Mild drowsiness; dry mouth`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Can a telehealth doctor prescribe medication for a rash?`,
    answerPlain: `Yes — for most uncomplicated rashes. Dr. Bhavsar reviews your photos and history to identify the pattern and prescribe appropriate topical or oral medication. Same-day prescription typical.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — for most uncomplicated rashes. Dr. Bhavsar reviews your photos and history to identify the pattern and prescribe appropriate topical or oral medication. Same-day prescription typical.` }} />
    ),
  },
  {
    question: `What kind of photos should I upload?`,
    answerPlain: `At least 2: one wide shot showing the distribution (where on body), one close-up showing morphology (texture, color, vesicles, scale). Use natural light, avoid flash glare. Include a measuring reference (coin, ruler) if helpful.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `At least 2: one wide shot showing the distribution (where on body), one close-up showing morphology (texture, color, vesicles, scale). Use natural light, avoid flash glare. Include a measuring reference (coin, ruler) if helpful.` }} />
    ),
  },
  {
    question: `Is hydrocortisone enough or do I need a prescription steroid?`,
    answerPlain: `OTC hydrocortisone 1% works for mild dermatitis, especially on the face. Body areas with significant inflammation usually need prescription-strength triamcinolone 0.1%. We'll match potency to severity and location.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `OTC hydrocortisone 1% works for mild dermatitis, especially on the face. Body areas with significant inflammation usually need prescription-strength triamcinolone 0.1%. We'll match potency to severity and location.` }} />
    ),
  },
  {
    question: `How do I know if it\'s contact dermatitis vs. eczema?`,
    answerPlain: `Contact dermatitis: clear trigger, often linear or geometric, typically resolves with trigger avoidance. Eczema: chronic relapsing, flexural areas, history of allergies/asthma, often family history. We use photos and history to distinguish.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Contact dermatitis: clear trigger, often linear or geometric, typically resolves with trigger avoidance. Eczema: chronic relapsing, flexural areas, history of allergies/asthma, often family history. We use photos and history to distinguish.` }} />
    ),
  },
  {
    question: `What if my rash is from a medication?`,
    answerPlain: `Stop the suspected medication if possible (after talking with us if it's prescribed). Mild morbilliform drug rashes resolve with stopping the drug + topical steroid + antihistamine. SEVERE features (mucosal involvement, blistering, fever) need ER.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Stop the suspected medication if possible (after talking with us if it's prescribed). Mild morbilliform drug rashes resolve with stopping the drug + topical steroid + antihistamine. SEVERE features (mucosal involvement, blistering, fever) need ER.` }} />
    ),
  },
  {
    question: `Is it ringworm or eczema?`,
    answerPlain: `Ringworm (tinea): annular (ring-shaped) with central clearing and active scaly border. Eczema: poorly defined, on flexural areas, no central clearing. KOH prep can confirm in person if uncertain — but usually photo + history is enough.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Ringworm (tinea): annular (ring-shaped) with central clearing and active scaly border. Eczema: poorly defined, on flexural areas, no central clearing. KOH prep can confirm in person if uncertain — but usually photo + history is enough.` }} />
    ),
  },
  {
    question: `Why do I keep getting eczema flares?`,
    answerPlain: `Common triggers: dry skin (especially winter), hot showers, fragrances, harsh soaps, wool/synthetic fabrics, stress, sweat, food allergies (in some). Daily moisturizer is the foundation of prevention.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Common triggers: dry skin (especially winter), hot showers, fragrances, harsh soaps, wool/synthetic fabrics, stress, sweat, food allergies (in some). Daily moisturizer is the foundation of prevention.` }} />
    ),
  },
  {
    question: `Do I need a biopsy?`,
    answerPlain: `Not for most rashes. Biopsies are reserved for atypical, persistent, or concerning lesions, suspected drug reactions with systemic features, suspected vasculitis, or possible skin cancer. We refer to dermatology if biopsy is appropriate.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Not for most rashes. Biopsies are reserved for atypical, persistent, or concerning lesions, suspected drug reactions with systemic features, suspected vasculitis, or possible skin cancer. We refer to dermatology if biopsy is appropriate.` }} />
    ),
  },
  {
    question: `How long until my rash gets better?`,
    answerPlain: `Contact dermatitis: 7–14 days with treatment + trigger avoidance. Tinea: 2–4 weeks of topical antifungal. Eczema flare: 5–14 days with topical steroid; chronic management is daily moisturizer. Urticaria: minutes to days.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Contact dermatitis: 7–14 days with treatment + trigger avoidance. Tinea: 2–4 weeks of topical antifungal. Eczema flare: 5–14 days with topical steroid; chronic management is daily moisturizer. Urticaria: minutes to days.` }} />
    ),
  },
  {
    question: `Can I use my partner\'s prescription cream?`,
    answerPlain: `Not recommended — different rashes need different treatments. Steroid creams worsen fungal infections; antifungals don't help eczema. Get an accurate diagnosis first.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Not recommended — different rashes need different treatments. Steroid creams worsen fungal infections; antifungals don't help eczema. Get an accurate diagnosis first.` }} />
    ),
  },
  {
    question: `What if my rash is spreading?`,
    answerPlain: `If spreading rapidly with fever, blisters, or systemic symptoms, that's a red flag — go to in-person care. Slow spread of contact dermatitis from oils tracking around (poison-ivy) is normal but the rash itself doesn't transfer person-to-person.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If spreading rapidly with fever, blisters, or systemic symptoms, that's a red flag — go to in-person care. Slow spread of contact dermatitis from oils tracking around (poison-ivy) is normal but the rash itself doesn't transfer person-to-person.` }} />
    ),
  },
  {
    question: `Is the rash contagious?`,
    answerPlain: `Most rashes (contact dermatitis, eczema, drug rashes) are NOT contagious. Tinea (ringworm), scabies, impetigo, and some viral exanthems ARE contagious. We identify which type your rash is.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most rashes (contact dermatitis, eczema, drug rashes) are NOT contagious. Tinea (ringworm), scabies, impetigo, and some viral exanthems ARE contagious. We identify which type your rash is.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/contact-dermatitis-treatment-online/', label: 'Contact Dermatitis Treatment Online' },
  { slug: '/acne-treatment-online/', label: 'Acne Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/seasonal-allergies-treatment-online/', label: 'Seasonal Allergies Treatment Online' },
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
    description: `Itchy red rash from contact, eczema, allergies, or fungal infection? $79 video visit, photo evaluation, prescription same day in 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Contact Dermatitis / Skin Rash',
      alternateName: ['Contact Dermatitis', 'Eczematous Rash', 'Dermatitis', 'Urticaria'],
      code: { '@type': 'MedicalCode', code: 'L25.9', codingSystem: 'ICD-10-CM' },
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
        '#sym-skin-rash-opening',
        '#sym-skin-rash-opening p',
        '.tdmd-sym__byline',
        '#sym-skin-rash-faq',
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
    name: `How to Get Skin Rash Treatment Online`,
    description: `Three steps to receive rash evaluation and prescription treatment from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select skin rash on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/skin-rash/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews rash appearance via photos, distribution, timeline, and potential triggers or allergens.`, url: `https://teledirectmd.com/symptoms/skin-rash/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your treatment plan`, text: `Topical corticosteroid, oral antihistamine, or other targeted treatment prescribed based on rash type.`, url: `https://teledirectmd.com/symptoms/skin-rash/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Skin Rash`, item: PAGE_URL },
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
export default function SymptomSkinRash() {
  const schemas = buildSchemas();
  const pid = 'sym-skin-rash';

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
            <span aria-current="page">Skin Rash</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Itchy or Red Rash — Same-Day Telehealth Treatment` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Skin Rash — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Skin Rash is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> L25.9 — Unspecified contact dermatitis, unspecified cause (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Skin Rash Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `A new skin rash can range from mild contact dermatitis to a more serious systemic condition. TeleDirectMD uses photo-based video evaluation to assess rash morphology, distribution, timeline, and associated symptoms, prescribing topical corticosteroids, oral antihistamines, or antifungals as appropriate for $79. Rashes with fever, rapid spread, blistering, mucous membrane involvement, or difficulty breathing require immediate in-person or ER care.` }} />
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
            <h2>Skin Rash Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adults and children in our 41 states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Localized rash with photo upload available` }} />
              <li dangerouslySetInnerHTML={{ __html: `No fever, no mucosal involvement, no systemic illness` }} />
              <li dangerouslySetInnerHTML={{ __html: `Rash &lt;2 weeks duration without spreading rapidly` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want guidance on OTC vs. prescription options` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recurrent eczema or contact dermatitis flare` }} />
              <li dangerouslySetInnerHTML={{ __html: `Suspected fungal infection` }} />
              <li dangerouslySetInnerHTML={{ __html: `Allergic reaction without anaphylaxis signs` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Anaphylaxis (breathing difficulty, throat swelling) — ER NOW` }} />
              <li dangerouslySetInnerHTML={{ __html: `Stevens-Johnson signs (mucosal lesions) — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cellulitis with fever or systemic signs — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Petechiae/purpura — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe blistering covering large body area — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Whole-body rash 1–2 weeks after new medication — in-person evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Rash in immunocompromised patient with concerns — in-person` }} />
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
            <h2>How Skin Rash Treatment Works Online</h2>
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
            <h2>What Causes Skin Rash? Differential Diagnosis</h2>
            <p>Not all skin rash is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Skin Rash differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Allergic contact dermatitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Type IV hypersensitivity to allergens (nickel, poison ivy, fragrance, etc.).` }} />
                <td dangerouslySetInnerHTML={{ __html: `Very common` }} />
                <td dangerouslySetInnerHTML={{ __html: `Linear or geometric pattern, intense itch, vesicles in acute phase, identifiable trigger` }} />
                <td dangerouslySetInnerHTML={{ __html: `Identify and stop trigger; topical steroid (triamcinolone 0.1%); oral antihistamine` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Atopic dermatitis (eczema)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Chronic relapsing inflammatory skin disease.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~10–15% of adults, ~15–20% of children` }} />
                <td dangerouslySetInnerHTML={{ __html: `Flexural distribution (elbows, knees), dry itchy skin, chronic relapsing, atopic history` }} />
                <td dangerouslySetInnerHTML={{ __html: `Daily emollient + topical steroid for flares; trigger avoidance` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Tinea (fungal infection)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Dermatophyte infection of skin (corporis, cruris, pedis).` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common` }} />
                <td dangerouslySetInnerHTML={{ __html: `Annular scaly red patches with central clearing, may have advancing border` }} />
                <td dangerouslySetInnerHTML={{ __html: `Topical antifungal (clotrimazole, terbinafine) × 2–4 weeks; oral if extensive` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Urticaria (hives)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `IgE-mediated or non-allergic mast cell activation.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~20% of population at some point` }} />
                <td dangerouslySetInnerHTML={{ __html: `Wheals (raised pink-white plaques) lasting &lt;24 hours each, intense itch, may migrate` }} />
                <td dangerouslySetInnerHTML={{ __html: `Cetirizine 10–20 mg daily; identify trigger; epinephrine if angioedema/anaphylaxis` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Drug reaction` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Cutaneous adverse reaction to medication.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~2–5% of new medication starts` }} />
                <td dangerouslySetInnerHTML={{ __html: `Symmetric morbilliform rash 7–14 days after starting drug, often itchy` }} />
                <td dangerouslySetInnerHTML={{ __html: `Stop offending drug; supportive; topical steroid; in-person if mucosal/systemic` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Skin Rash Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Skin Rash cost comparison">
                <h3>Typical Skin Rash Visit Cost</h3>
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
            <h2>Skin Rash Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for skin rash. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Skin Rash medication options">
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
                <td><strong>Triamcinolone 0.1%</strong> <span className="tdmd-sym__med-brand">(Kenalog)</span></td>
                <td>Topical cream/ointment</td>
                <td>Medium-potency topical corticosteroid</td>
                <td dangerouslySetInnerHTML={{ __html: `Apply BID × 1–2 weeks` }} />
                <td><a href="https://www.goodrx.com/kenalog" target="_blank" rel="noopener">$5–$25</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Skin thinning with prolonged use; avoid face/groin` }} />
              </tr>
              <tr>
                <td><strong>Hydrocortisone 1–2.5%</strong> <span className="tdmd-sym__med-brand">(Cortizone)</span></td>
                <td>Topical cream</td>
                <td>Low-potency topical corticosteroid</td>
                <td dangerouslySetInnerHTML={{ __html: `Apply BID × 1–2 weeks` }} />
                <td><a href="https://www.goodrx.com/hydrocortisone" target="_blank" rel="noopener">$4–$11</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Minimal at low potency; suitable for face/groin` }} />
              </tr>
              <tr>
                <td><strong>Clobetasol 0.05%</strong> <span className="tdmd-sym__med-brand">(Temovate)</span></td>
                <td>Topical cream/ointment</td>
                <td>Super-high-potency topical corticosteroid</td>
                <td dangerouslySetInnerHTML={{ __html: `Apply BID × max 2 weeks` }} />
                <td><a href="https://www.goodrx.com/clobetasol" target="_blank" rel="noopener">$11–$251</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Skin thinning; use only on body, short courses` }} />
              </tr>
              <tr>
                <td><strong>Terbinafine</strong> <span className="tdmd-sym__med-brand">(Lamisil)</span></td>
                <td>Topical cream / oral</td>
                <td>Antifungal</td>
                <td dangerouslySetInnerHTML={{ __html: `Apply 1% cream BID × 2–4 weeks; oral 250 mg daily for 2–6 weeks for severe` }} />
                <td><a href="https://www.goodrx.com/terbinafine" target="_blank" rel="noopener">$6–$64</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Local irritation (cream); LFT elevation (oral)` }} />
              </tr>
              <tr>
                <td><strong>Cetirizine</strong> <span className="tdmd-sym__med-brand">(Zyrtec)</span></td>
                <td>Oral tablet</td>
                <td>Second-generation antihistamine</td>
                <td dangerouslySetInnerHTML={{ __html: `10 mg once daily; up to 40 mg/day for chronic urticaria` }} />
                <td><a href="https://www.goodrx.com/cetirizine" target="_blank" rel="noopener">$2–$10</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Mild drowsiness; dry mouth` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Rash with fever, mucosal lesions (mouth, eyes, genitals)</strong> — possible Stevens-Johnson syndrome; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Expanding painful red area with fever</strong> — cellulitis or necrotizing infection; in-person urgent` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Petechiae/purpura that don't blanch</strong> — possible meningococcemia, vasculitis; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Rash with breathing difficulty or facial/throat swelling</strong> — anaphylaxis; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Blisters covering large area</strong> — burn, severe drug reaction; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Painful purple/black necrotic skin</strong> — necrotizing fasciitis; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Whole-body rash with new medication 1–2 weeks ago</strong> — possible severe drug reaction (DRESS, SJS)` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Rash in pregnancy with fever</strong> — needs urgent evaluation` }} />
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
            <h2>What to Expect: Skin Rash Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Skin Rash recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Day 1–3</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Itch begins to decrease with treatment. Avoid the trigger (if known).` }} />
              </tr>
              <tr>
                <td><strong>Week 1</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Most contact dermatitis 50%+ resolved with topical steroid + trigger avoidance.` }} />
              </tr>
              <tr>
                <td><strong>Week 2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Tinea typically clearing with topical antifungal; complete the full 4-week course to prevent relapse.` }} />
              </tr>
              <tr>
                <td><strong>Week 4</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Eczema flare resolved with consistent steroid + maintenance moisturizer.` }} />
              </tr>
              <tr>
                <td><strong>Long-term</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Eczema is chronic — daily moisturizer + intermittent steroid for flares is the foundation. Identify and avoid triggers.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Skin Rash</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Identify and avoid the trigger (food, soap, plant, jewelry, fabric)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cool compresses 15 min × 3 daily for itch and inflammation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Lukewarm (not hot) showers and gentle fragrance-free cleanser` }} />
              <li dangerouslySetInnerHTML={{ __html: `Pat dry; apply moisturizer within 3 minutes of bath` }} />
              <li dangerouslySetInnerHTML={{ __html: `Apply prescribed topical medication first, then moisturizer on top` }} />
              <li dangerouslySetInnerHTML={{ __html: `Use thick moisturizers (CeraVe, Cetaphil cream, Vanicream)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Wear loose 100% cotton clothing while symptomatic` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid scratching — keep nails short, consider cotton gloves at night` }} />
              <li dangerouslySetInnerHTML={{ __html: `Oatmeal baths (Aveeno colloidal) for widespread itch` }} />
              <li dangerouslySetInnerHTML={{ __html: `Take antihistamines before bed to reduce night-time scratching` }} />
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
              sectionTitle={`Frequently Asked Questions — Skin Rash`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your skin rash visit.</p>
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
              <li><a href="https://www.aad.org/member/clinical-quality/guidelines/contact-dermatitis" rel="noopener" target="_blank">AAD — Contact Dermatitis Clinical Guidelines</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2012/0815/p356.html" rel="noopener" target="_blank">AAFP — Dermatitis: Diagnosis and Management</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/niosh/topics/skin/default.html" rel="noopener" target="_blank">CDC — Dermatological Conditions Overview</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=triamcinolone+topical" rel="noopener" target="_blank">FDA DailyMed — Triamcinolone Topical</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/triamcinolone-topical" rel="noopener" target="_blank">GoodRx — Topical Steroid Pricing</a>. Retrieved May 23, 2026.</li>
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
