/**
 * SymptomSinusInfection.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Sinus Infection
 * Slug:    /symptoms/sinus-infection/
 * ICD-10:  J01.90 — Acute sinusitis, unspecified
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/sinus-infection/';
const PAGE_TITLE = `Sinus Infection Treatment Online — Antibiotic Rx | TeleDirectMD`;
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
    generic: `Amoxicillin-clavulanate`,
    brand: `Augmentin`,
    form: `Oral tablet`,
    drugClass: `Beta-lactam antibiotic`,
    dose: `875/125 mg BID × 5–7 days`,
    price: `$12–$35`,
    priceUrl: `https://www.goodrx.com/amoxicillin-potassium-clavulanate`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, GI upset`,
  },
  {
    generic: `Doxycycline`,
    brand: `Vibramycin`,
    form: `Oral capsule`,
    drugClass: `Tetracycline antibiotic`,
    dose: `100 mg BID × 5–7 days`,
    price: `$5–$80`,
    priceUrl: `https://www.goodrx.com/doxycycline-hyclate`,
    priceLabel: `GoodRx`,
    sideEffects: `Photosensitivity; avoid in pregnancy`,
  },
  {
    generic: `Levofloxacin`,
    brand: `Levaquin`,
    form: `Oral tablet`,
    drugClass: `Fluoroquinolone antibiotic`,
    dose: `500 mg daily × 5–7 days (if treatment failure)`,
    price: `$8–$148`,
    priceUrl: `https://www.goodrx.com/levofloxacin`,
    priceLabel: `GoodRx`,
    sideEffects: `Tendon rupture, QT prolongation, GI; reserved for failures`,
  },
  {
    generic: `Fluticasone propionate`,
    brand: `Flonase`,
    form: `Nasal spray`,
    drugClass: `Intranasal corticosteroid`,
    dose: `2 sprays each nostril once daily`,
    price: `$16–$27`,
    priceUrl: `https://www.goodrx.com/fluticasone-propionate-non-prescription`,
    priceLabel: `GoodRx`,
    sideEffects: `Nasal dryness, occasional epistaxis`,
  },
  {
    generic: `Pseudoephedrine`,
    brand: `Sudafed`,
    form: `Oral tablet`,
    drugClass: `Sympathomimetic decongestant`,
    dose: `30–60 mg every 4–6 hours, max 3–5 days`,
    price: `$2–$8`,
    priceUrl: `https://www.goodrx.com/pseudoephedrine`,
    priceLabel: `GoodRx`,
    sideEffects: `Insomnia, BP elevation`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Can a telehealth doctor prescribe antibiotics for a sinus infection?`,
    answerPlain: `Yes — when IDSA/AAFP criteria are met. Dr. Bhavsar can prescribe amoxicillin-clavulanate (first-line) or doxycycline (penicillin-allergic). We don't prescribe antibiotics for clearly viral patterns — that's stewardship and protects you from unnecessary side effects.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — when IDSA/AAFP criteria are met. Dr. Bhavsar can prescribe amoxicillin-clavulanate (first-line) or doxycycline (penicillin-allergic). We don't prescribe antibiotics for clearly viral patterns — that's stewardship and protects you from unnecessary side effects.` }} />
    ),
  },
  {
    question: `How long does a sinus infection last?`,
    answerPlain: `Viral sinusitis: peaks day 3–5, resolves by day 10. Bacterial sinusitis treated with appropriate antibiotics: 48–72 hour improvement, full resolution by day 7–10. Symptoms >4 weeks = subacute; >12 weeks = chronic — both warrant further evaluation.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Viral sinusitis: peaks day 3–5, resolves by day 10. Bacterial sinusitis treated with appropriate antibiotics: 48–72 hour improvement, full resolution by day 7–10. Symptoms &gt;4 weeks = subacute; &gt;12 weeks = chronic — both warrant further evaluation.` }} />
    ),
  },
  {
    question: `What\'s the difference between viral and bacterial sinus infection?`,
    answerPlain: `Three IDSA/AAFP criteria for bacterial: symptoms ≥10 days without improvement; severe at onset (fever ≥39°C + purulent discharge × 3–4 days); or double-worsening (improved then got worse). Without one of these, it's almost certainly viral.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Three IDSA/AAFP criteria for bacterial: symptoms &ge;10 days without improvement; severe at onset (fever &ge;39°C + purulent discharge × 3–4 days); or double-worsening (improved then got worse). Without one of these, it's almost certainly viral.` }} />
    ),
  },
  {
    question: `Is the color of mucus a good sign of bacterial infection?`,
    answerPlain: `No. Yellow or green mucus reflects white blood cell presence, which occurs in both viral and bacterial sinusitis. Color alone is NOT a reason to prescribe antibiotics. Pattern and duration matter.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No. Yellow or green mucus reflects white blood cell presence, which occurs in both viral and bacterial sinusitis. Color alone is NOT a reason to prescribe antibiotics. Pattern and duration matter.` }} />
    ),
  },
  {
    question: `Can a sinus infection go away on its own?`,
    answerPlain: `Yes — about 90% of sinus infections are viral and self-resolve within 10 days. Many "bacterial" cases also resolve without antibiotics; AAFP and Cochrane data show modest benefit from antibiotics even in suspected bacterial cases.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — about 90% of sinus infections are viral and self-resolve within 10 days. Many "bacterial" cases also resolve without antibiotics; AAFP and Cochrane data show modest benefit from antibiotics even in suspected bacterial cases.` }} />
    ),
  },
  {
    question: `Do I need a CT scan for sinusitis?`,
    answerPlain: `No — not for uncomplicated acute sinusitis. CT is reserved for chronic sinusitis (>12 weeks), recurrent (4+/year), suspected complications (orbital, intracranial), or pre-surgical planning.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No — not for uncomplicated acute sinusitis. CT is reserved for chronic sinusitis (&gt;12 weeks), recurrent (4+/year), suspected complications (orbital, intracranial), or pre-surgical planning.` }} />
    ),
  },
  {
    question: `What\'s the best home remedy?`,
    answerPlain: `Saline nasal irrigation has the strongest evidence — Cochrane and AAFP support it. Use a Neti pot or squeeze bottle 1–2× daily with distilled or boiled water. Reduces symptoms, improves drainage, and reduces antibiotic use.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Saline nasal irrigation has the strongest evidence — Cochrane and AAFP support it. Use a Neti pot or squeeze bottle 1–2× daily with distilled or boiled water. Reduces symptoms, improves drainage, and reduces antibiotic use.` }} />
    ),
  },
  {
    question: `Are intranasal steroids safe long-term?`,
    answerPlain: `Yes — fluticasone, mometasone, and budesonide are safe for years of daily use. Local side effects (nasal dryness, occasional bleeding) are mild. Systemic absorption is minimal at recommended doses.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — fluticasone, mometasone, and budesonide are safe for years of daily use. Local side effects (nasal dryness, occasional bleeding) are mild. Systemic absorption is minimal at recommended doses.` }} />
    ),
  },
  {
    question: `What if my sinus infection isn\'t getting better on antibiotics?`,
    answerPlain: `Reassess at 72 hours. If no improvement, it suggests resistant bacteria or wrong diagnosis. We typically switch to levofloxacin or moxifloxacin for treatment failure, or refer to ENT for nasal endoscopy and culture.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Reassess at 72 hours. If no improvement, it suggests resistant bacteria or wrong diagnosis. We typically switch to levofloxacin or moxifloxacin for treatment failure, or refer to ENT for nasal endoscopy and culture.` }} />
    ),
  },
  {
    question: `Can I prevent recurrent sinus infections?`,
    answerPlain: `Yes: daily saline irrigation, treat allergic rhinitis aggressively (year-round intranasal steroid), control GERD if reflux affects sinuses, quit smoking, manage humidity, treat dental issues. ENT can identify structural problems (deviated septum, polyps).`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes: daily saline irrigation, treat allergic rhinitis aggressively (year-round intranasal steroid), control GERD if reflux affects sinuses, quit smoking, manage humidity, treat dental issues. ENT can identify structural problems (deviated septum, polyps).` }} />
    ),
  },
  {
    question: `What if I\'m pregnant?`,
    answerPlain: `Saline irrigation, acetaminophen, and intranasal budesonide are safe in pregnancy. Avoid pseudoephedrine in 1st trimester. If antibiotic needed, amoxicillin-clavulanate is generally safe; doxycycline is contraindicated.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Saline irrigation, acetaminophen, and intranasal budesonide are safe in pregnancy. Avoid pseudoephedrine in 1st trimester. If antibiotic needed, amoxicillin-clavulanate is generally safe; doxycycline is contraindicated.` }} />
    ),
  },
  {
    question: `Can sinus infection cause headache?`,
    answerPlain: `Yes — facial pressure and headache are typical. However, ~88% of self-diagnosed "sinus headaches" actually meet migraine criteria. If headache is throbbing with light/sound sensitivity and no infection signs, it may be migraine.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — facial pressure and headache are typical. However, ~88% of self-diagnosed "sinus headaches" actually meet migraine criteria. If headache is throbbing with light/sound sensitivity and no infection signs, it may be migraine.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
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
    description: `Sinus infection lasting 10+ days, double-worsening pattern, or severe symptoms? Same-day antibiotic prescription if criteria met. $79 telehealth, 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Acute Bacterial Sinusitis',
      alternateName: ['Sinusitis', 'Acute Sinusitis', 'Rhinosinusitis'],
      code: { '@type': 'MedicalCode', code: 'J01.90', codingSystem: 'ICD-10-CM' },
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
        '#sym-sinus-infection-opening',
        '#sym-sinus-infection-opening p',
        '.tdmd-sym__byline',
        '#sym-sinus-infection-faq',
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
    name: `How to Get Sinus Infection Treatment Online`,
    description: `Three steps to receive sinusitis evaluation and antibiotic prescription from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select sinus infection on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/sinus-infection/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews symptom duration, purulent discharge, facial pain, and fever to distinguish bacterial from viral sinusitis.`, url: `https://teledirectmd.com/symptoms/sinus-infection/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your treatment plan`, text: `Amoxicillin-clavulanate or doxycycline prescribed if bacterial sinusitis is confirmed, with saline and nasal steroid guidance.`, url: `https://teledirectmd.com/symptoms/sinus-infection/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Sinus Infection`, item: PAGE_URL },
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
export default function SymptomSinusInfection() {
  const schemas = buildSchemas();
  const pid = 'sym-sinus-infection';

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
            <span aria-current="page">Sinus Infection</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Sinus Infection (Sinusitis) — Same-Day Antibiotic Online` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Sinus Infection — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Sinus Infection is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J01.90 — Acute sinusitis, unspecified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Sinus Infection Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Acute bacterial sinusitis (rhinosinusitis) develops when a sinus cavity becomes infected following viral URI, producing purulent nasal discharge, facial pressure or pain, and fever lasting beyond 10 days or worsening after initial improvement. Per IDSA and AAFP guidelines, most sinus infections under 10 days are viral and should not be treated with antibiotics. TeleDirectMD evaluates symptoms and prescribes when bacterial sinusitis is likely, for $79.` }} />
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
            <h2>Sinus Infection Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adults 18+ in our 41 states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Sinus symptoms 7–14 days` }} />
              <li dangerouslySetInnerHTML={{ __html: `Mild-to-moderate severity` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want guidance on antibiotic vs. supportive plan` }} />
              <li dangerouslySetInnerHTML={{ __html: `Fits IDSA/AAFP criteria for bacterial sinusitis` }} />
              <li dangerouslySetInnerHTML={{ __html: `Have tried OTC measures with limited improvement` }} />
              <li dangerouslySetInnerHTML={{ __html: `Need same-day prescription if appropriate` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recurrent sinusitis but currently stable` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Severe vision change or eye swelling — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `High fever with neck stiffness — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms &gt;12 weeks — ENT referral, CT` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe immunocompromise — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Multiple antibiotic course failures — ENT specialist` }} />
              <li dangerouslySetInnerHTML={{ __html: `Suspected complications — ER` }} />
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
            <h2>How Sinus Infection Treatment Works Online</h2>
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
            <h2>What Causes Sinus Infection? Differential Diagnosis</h2>
            <p>Not all sinus infection is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Sinus Infection differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Viral rhinosinusitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Common cold inflammation extending to sinuses.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~90% of acute sinusitis` }} />
                <td dangerouslySetInnerHTML={{ __html: `Symptoms &lt;10 days, peaks day 3–5, resolves by day 10, no double-worsening` }} />
                <td dangerouslySetInnerHTML={{ __html: `Saline + intranasal steroid + analgesics; no antibiotic` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Acute bacterial rhinosinusitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Bacterial superinfection.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~2–10% of cases` }} />
                <td dangerouslySetInnerHTML={{ __html: `Symptoms ≥10 days without improvement, severe at onset (fever ≥39°C + purulent), or double-worsening` }} />
                <td dangerouslySetInnerHTML={{ __html: `Amoxicillin-clavulanate 875/125 mg BID × 5–7 days` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Allergic rhinitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `IgE-mediated nasal inflammation.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~25% adults` }} />
                <td dangerouslySetInnerHTML={{ __html: `Itchy eyes, sneezing, watery discharge, seasonal` }} />
                <td dangerouslySetInnerHTML={{ __html: `Intranasal steroid daily + oral antihistamine` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Migraine with sinus features` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Migraine misdiagnosed as sinus.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~88% of "sinus headaches"` }} />
                <td dangerouslySetInnerHTML={{ __html: `Pulsating pain, photophobia, nausea, recurrent` }} />
                <td dangerouslySetInnerHTML={{ __html: `Triptan trial; preventive evaluation` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Dental abscess (referred)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Upper tooth abscess mimicking maxillary sinus pain.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~10% of unilateral maxillary pain` }} />
                <td dangerouslySetInnerHTML={{ __html: `One-sided cheek pain, tooth pain on tapping, worse with chewing` }} />
                <td dangerouslySetInnerHTML={{ __html: `Dental referral for evaluation` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Sinus Infection Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Sinus Infection cost comparison">
                <h3>Typical Sinus Infection Visit Cost</h3>
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
            <h2>Sinus Infection Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for sinus infection. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Sinus Infection medication options">
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
                <td><strong>Amoxicillin-clavulanate</strong> <span className="tdmd-sym__med-brand">(Augmentin)</span></td>
                <td>Oral tablet</td>
                <td>Beta-lactam antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `875/125 mg BID × 5–7 days` }} />
                <td><a href="https://www.goodrx.com/amoxicillin-potassium-clavulanate" target="_blank" rel="noopener">$12–$35</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, GI upset` }} />
              </tr>
              <tr>
                <td><strong>Doxycycline</strong> <span className="tdmd-sym__med-brand">(Vibramycin)</span></td>
                <td>Oral capsule</td>
                <td>Tetracycline antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `100 mg BID × 5–7 days` }} />
                <td><a href="https://www.goodrx.com/doxycycline-hyclate" target="_blank" rel="noopener">$5–$80</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Photosensitivity; avoid in pregnancy` }} />
              </tr>
              <tr>
                <td><strong>Levofloxacin</strong> <span className="tdmd-sym__med-brand">(Levaquin)</span></td>
                <td>Oral tablet</td>
                <td>Fluoroquinolone antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg daily × 5–7 days (if treatment failure)` }} />
                <td><a href="https://www.goodrx.com/levofloxacin" target="_blank" rel="noopener">$8–$148</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Tendon rupture, QT prolongation, GI; reserved for failures` }} />
              </tr>
              <tr>
                <td><strong>Fluticasone propionate</strong> <span className="tdmd-sym__med-brand">(Flonase)</span></td>
                <td>Nasal spray</td>
                <td>Intranasal corticosteroid</td>
                <td dangerouslySetInnerHTML={{ __html: `2 sprays each nostril once daily` }} />
                <td><a href="https://www.goodrx.com/fluticasone-propionate-non-prescription" target="_blank" rel="noopener">$16–$27</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Nasal dryness, occasional epistaxis` }} />
              </tr>
              <tr>
                <td><strong>Pseudoephedrine</strong> <span className="tdmd-sym__med-brand">(Sudafed)</span></td>
                <td>Oral tablet</td>
                <td>Sympathomimetic decongestant</td>
                <td dangerouslySetInnerHTML={{ __html: `30–60 mg every 4–6 hours, max 3–5 days` }} />
                <td><a href="https://www.goodrx.com/pseudoephedrine" target="_blank" rel="noopener">$2–$8</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Insomnia, BP elevation` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe one-sided eye pain or vision change</strong> — orbital cellulitis; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>High fever with neck stiffness or confusion</strong> — possible intracranial spread` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Eyelid swelling, redness, or proptosis</strong> — orbital complication` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe headache unlike any before</strong> — needs imaging` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Symptoms &gt;12 weeks</strong> — chronic sinusitis; ENT and CT` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong&gt;4+ acute episodes per year</strong> — recurrent acute; ENT evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe immunocompromise</strong> — risk of fungal sinusitis` }} />
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
            <h2>What to Expect: Sinus Infection Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Sinus Infection recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Day 1–2 of antibiotic</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Pain and fever begin to decrease; full improvement should be evident within 48–72 hours.` }} />
              </tr>
              <tr>
                <td><strong>Day 3 of antibiotic</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `If no significant improvement, switch (treatment failure). Otherwise complete the course.` }} />
              </tr>
              <tr>
                <td><strong>Day 5–7</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Symptoms 80%+ resolved; complete full course; continue intranasal steroid 1–2 weeks more.` }} />
              </tr>
              <tr>
                <td><strong>Week 2–4</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Residual mild congestion is normal; saline rinses help.` }} />
              </tr>
              <tr>
                <td><strong>Beyond 4 weeks</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Subacute sinusitis — re-evaluate; consider ENT referral and imaging.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Sinus Infection</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Saline nasal irrigation 1–2× daily with distilled/boiled water` }} />
              <li dangerouslySetInnerHTML={{ __html: `Sleep with head elevated 30–45°` }} />
              <li dangerouslySetInnerHTML={{ __html: `Warm compresses 15 min × 3 daily` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cool-mist humidifier in bedroom` }} />
              <li dangerouslySetInnerHTML={{ __html: `Hydrate aggressively — 2+ liters water daily` }} />
              <li dangerouslySetInnerHTML={{ __html: `Steam inhalation from hot showers 2× daily` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid known allergens and smoke exposure` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't fly with severe symptoms` }} />
              <li dangerouslySetInnerHTML={{ __html: `Limit alcohol while symptomatic` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't use oxymetazoline &gt;3 days — rebound congestion` }} />
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
              sectionTitle={`Frequently Asked Questions — Sinus Infection`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your sinus infection visit.</p>
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
              <li><a href="https://www.idsociety.org/practice-guideline/rhinosinusitis/" rel="noopener" target="_blank">IDSA — Bacterial Rhinosinusitis Clinical Practice Guideline</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2018/0601/p735.html" rel="noopener" target="_blank">AAFP — Acute Rhinosinusitis: Diagnosis and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/antibiotic-use/sinus-infection.html" rel="noopener" target="_blank">CDC — Sinus Infection (Sinusitis) Overview</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=amoxicillin+clavulanate" rel="noopener" target="_blank">FDA DailyMed — Amoxicillin-Clavulanate</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/amoxicillin-clavulanate" rel="noopener" target="_blank">GoodRx — Amoxicillin-Clavulanate Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — ENT &amp; Primary Care Resources</a>. Retrieved May 23, 2026.</li>
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
