/**
 * SymptomEarPain.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Ear Pain
 * Slug:    /symptoms/ear-pain/
 * ICD-10:  H66.90 — Otitis media, unspecified, unspecified ear
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/ear-pain/';
const PAGE_TITLE = `Ear Pain Treatment Online — Adult Ear Infection Rx | TeleDirectMD`;
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
    generic: `Ofloxacin`,
    brand: `Floxin Otic`,
    form: `Ear drops`,
    drugClass: `Topical fluoroquinolone`,
    dose: `5 drops in affected ear twice daily × 7 days`,
    price: `$20–$155`,
    priceUrl: `https://www.goodrx.com/floxin`,
    priceLabel: `GoodRx`,
    sideEffects: `Local irritation, taste changes`,
  },
  {
    generic: `Ciprofloxacin / Dexamethasone`,
    brand: `Ciprodex`,
    form: `Ear drops`,
    drugClass: `Topical fluoroquinolone + steroid`,
    dose: `4 drops in affected ear twice daily × 7 days`,
    price: `$55–$211`,
    priceUrl: `https://www.goodrx.com/ciprofloxacin-dexamethasone`,
    priceLabel: `GoodRx`,
    sideEffects: `Local irritation; faster pain relief due to steroid`,
  },
  {
    generic: `Amoxicillin`,
    brand: `Amoxil`,
    form: `Oral capsule/suspension`,
    drugClass: `Beta-lactam antibiotic`,
    dose: `1 g three times daily × 7 days for adult AOM`,
    price: `$4–$16`,
    priceUrl: `https://www.goodrx.com/amoxicillin`,
    priceLabel: `GoodRx`,
    sideEffects: `GI upset, rash, diarrhea`,
  },
  {
    generic: `Amoxicillin-clavulanate`,
    brand: `Augmentin`,
    form: `Oral tablet`,
    drugClass: `Beta-lactam + beta-lactamase inhibitor`,
    dose: `875/125 mg BID × 7 days`,
    price: `(see medication table)`,
    priceUrl: null,
    priceLabel: ``,
    sideEffects: `Diarrhea, GI upset`,
  },
  {
    generic: `Pseudoephedrine`,
    brand: `Sudafed`,
    form: `Oral tablet`,
    drugClass: `Decongestant`,
    dose: `60 mg every 4–6 hours × 3–5 days`,
    price: `$6–$7`,
    priceUrl: `https://www.goodrx.com/pseudoephedrine`,
    priceLabel: `GoodRx`,
    sideEffects: `Insomnia, BP elevation`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Can a telehealth doctor prescribe ear drops?`,
    answerPlain: `Yes — ofloxacin and ciprofloxacin/dexamethasone otic drops are non-controlled medications. Dr. Bhavsar can prescribe them after a focused history and video exam for typical otitis externa.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — ofloxacin and ciprofloxacin/dexamethasone otic drops are non-controlled medications. Dr. Bhavsar can prescribe them after a focused history and video exam for typical otitis externa.` }} />
    ),
  },
  {
    question: `How do I know if it\'s swimmer\'s ear or middle ear infection?`,
    answerPlain: `Otitis externa (swimmer's ear): pain WORSE with tugging on the ear or pushing the tragus; recent water exposure. Acute otitis media: deep ear pain, fullness, hearing reduction, often after a cold; pulling the ear doesn't make it worse.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Otitis externa (swimmer's ear): pain WORSE with tugging on the ear or pushing the tragus; recent water exposure. Acute otitis media: deep ear pain, fullness, hearing reduction, often after a cold; pulling the ear doesn't make it worse.` }} />
    ),
  },
  {
    question: `Do adults with ear infections need antibiotics?`,
    answerPlain: `Otitis externa: yes — antibiotic drops are first-line. Acute otitis media in adults: many cases are viral or self-resolve; antibiotics are recommended for moderate-severe pain, fever >39°C, or symptoms not improving in 48 hours. We follow AAFP guidance.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Otitis externa: yes — antibiotic drops are first-line. Acute otitis media in adults: many cases are viral or self-resolve; antibiotics are recommended for moderate-severe pain, fever &gt;39°C, or symptoms not improving in 48 hours. We follow AAFP guidance.` }} />
    ),
  },
  {
    question: `How fast do ear drops work?`,
    answerPlain: `Ciprodex (with steroid) typically reduces pain within 24 hours. Plain antibiotic drops (ofloxacin) take 2–3 days for noticeable improvement. Complete the full course (7 days) even if symptoms resolve early.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Ciprodex (with steroid) typically reduces pain within 24 hours. Plain antibiotic drops (ofloxacin) take 2–3 days for noticeable improvement. Complete the full course (7 days) even if symptoms resolve early.` }} />
    ),
  },
  {
    question: `Why does my ear hurt after a cold?`,
    answerPlain: `Most likely eustachian tube dysfunction. The cold inflames the tube connecting your middle ear to the back of your throat, preventing pressure equalization. Decongestant + intranasal steroid helps. Resolves over 1–2 weeks usually.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most likely eustachian tube dysfunction. The cold inflames the tube connecting your middle ear to the back of your throat, preventing pressure equalization. Decongestant + intranasal steroid helps. Resolves over 1–2 weeks usually.` }} />
    ),
  },
  {
    question: `Can I fly with ear pain?`,
    answerPlain: `Flying with active ear infection or significant ETD can be very painful and rarely cause eardrum perforation. If you must fly, use pseudoephedrine 30 min before takeoff/landing and chew gum. Avoid flying if severe pain or fever.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Flying with active ear infection or significant ETD can be very painful and rarely cause eardrum perforation. If you must fly, use pseudoephedrine 30 min before takeoff/landing and chew gum. Avoid flying if severe pain or fever.` }} />
    ),
  },
  {
    question: `Is it safe to use Q-tips?`,
    answerPlain: `No — Q-tips push wax deeper, damage canal skin, and increase otitis externa risk. The ear is self-cleaning. If wax causes problems, use carbamide peroxide drops or have it removed in-office.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No — Q-tips push wax deeper, damage canal skin, and increase otitis externa risk. The ear is self-cleaning. If wax causes problems, use carbamide peroxide drops or have it removed in-office.` }} />
    ),
  },
  {
    question: `What if my ear is draining fluid?`,
    answerPlain: `Clear or yellow drainage often indicates a perforated eardrum (often from middle ear infection) or otitis externa. Don't put cotton in the ear. We can prescribe appropriate drops; some perforations need ENT follow-up.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Clear or yellow drainage often indicates a perforated eardrum (often from middle ear infection) or otitis externa. Don't put cotton in the ear. We can prescribe appropriate drops; some perforations need ENT follow-up.` }} />
    ),
  },
  {
    question: `Should I get a hearing test?`,
    answerPlain: `Routine hearing tests are not needed for typical ear infections. Hearing tests are warranted for: hearing loss persisting >4 weeks after infection, sudden hearing loss (urgent), or recurrent ear infections.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Routine hearing tests are not needed for typical ear infections. Hearing tests are warranted for: hearing loss persisting &gt;4 weeks after infection, sudden hearing loss (urgent), or recurrent ear infections.` }} />
    ),
  },
  {
    question: `Can ear pain be referred from somewhere else?`,
    answerPlain: `Yes — "referred otalgia" is common. Sources include teeth (especially upper molars), TMJ disorder, throat (tonsillitis, even cancer), and cervical spine. If your ear exam is normal, we look elsewhere.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — "referred otalgia" is common. Sources include teeth (especially upper molars), TMJ disorder, throat (tonsillitis, even cancer), and cervical spine. If your ear exam is normal, we look elsewhere.` }} />
    ),
  },
  {
    question: `How do I prevent swimmer\'s ear?`,
    answerPlain: `Dry ears thoroughly after swimming (towel + tilt head); use 50/50 alcohol/white vinegar drops after swimming if prone; wear earplugs while swimming; avoid Q-tips; treat skin conditions like eczema in the canal.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Dry ears thoroughly after swimming (towel + tilt head); use 50/50 alcohol/white vinegar drops after swimming if prone; wear earplugs while swimming; avoid Q-tips; treat skin conditions like eczema in the canal.` }} />
    ),
  },
  {
    question: `What if my child has ear pain?`,
    answerPlain: `Children under 2 are best evaluated in person — exam findings drive treatment decisions. For children 2+, telehealth can be appropriate for typical mild cases with parental input and clear escalation criteria.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Children under 2 are best evaluated in person — exam findings drive treatment decisions. For children 2+, telehealth can be appropriate for typical mild cases with parental input and clear escalation criteria.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/ear-pain-treatment-online/', label: 'Ear Pain Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/seasonal-allergies-treatment-online/', label: 'Seasonal Allergies Treatment Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Adult ear pain, fullness, or hearing change? Get evaluated for middle/outer ear infection or eustachian tube issue. $79 telehealth, prescription same day in 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Otitis Media / Ear Infection',
      alternateName: ['Otalgia', 'Earache', 'Otitis Media', 'Ear Infection'],
      code: { '@type': 'MedicalCode', code: 'H66.90', codingSystem: 'ICD-10-CM' },
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
        '#sym-ear-pain-opening',
        '#sym-ear-pain-opening p',
        '.tdmd-sym__byline',
        '#sym-ear-pain-faq',
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
    name: `How to Get Ear Infection Treatment Online`,
    description: `Three steps to receive ear pain evaluation and antibiotic prescription from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select ear pain on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/ear-pain/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews onset, severity, drainage, hearing change, and screens for complications.`, url: `https://teledirectmd.com/symptoms/ear-pain/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your treatment plan`, text: `Antibiotic drops or oral antibiotic prescribed if bacterial infection is confirmed, with pain management guidance.`, url: `https://teledirectmd.com/symptoms/ear-pain/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Ear Pain`, item: PAGE_URL },
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
export default function SymptomEarPain() {
  const schemas = buildSchemas();
  const pid = 'sym-ear-pain';

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
            <span aria-current="page">Ear Pain</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Ear Pain — Same-Day Telehealth for Ear Infection` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Ear Pain — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Ear Pain is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> H66.90 — Otitis media, unspecified, unspecified ear (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Ear Pain Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Ear pain (otalgia) most commonly results from acute otitis media (middle ear infection), otitis externa (swimmer's ear), or eustachian tube dysfunction — all conditions frequently manageable via telehealth. TeleDirectMD evaluates your symptom pattern, assesses drainage and hearing change, and prescribes antibiotic drops or oral antibiotics when bacterial infection is likely, for $79. Severe pain, facial droop, high fever, or mastoid tenderness require in-person or ER evaluation.` }} />
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
            <h2>Ear Pain Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adults and adolescents in our 41 states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Ear pain, fullness, or hearing reduction` }} />
              <li dangerouslySetInnerHTML={{ __html: `No red flag features` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recent water exposure (otitis externa) or cold (ETD/AOM)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want guidance on antibiotics vs. supportive care` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recurrent eustachian tube dysfunction needing refill` }} />
              <li dangerouslySetInnerHTML={{ __html: `Pain manageable while awaiting plan` }} />
              <li dangerouslySetInnerHTML={{ __html: `Need work/school note` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Sudden hearing loss — urgent ENT (≤72 hours for steroids)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe vertigo — in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Facial weakness — needs in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Fever with neck stiffness — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Mastoid swelling/tenderness behind ear — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Children under 2 — pediatric in-person preferred` }} />
              <li dangerouslySetInnerHTML={{ __html: `Suspected foreign body — in-person removal` }} />
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
            <h2>How Ear Pain Treatment Works Online</h2>
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
            <h2>What Causes Ear Pain? Differential Diagnosis</h2>
            <p>Not all ear pain is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Ear Pain differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Otitis externa` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Bacterial infection of ear canal (often Pseudomonas or Staph).` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common — peaks in summer` }} />
                <td dangerouslySetInnerHTML={{ __html: `Pain worse with tragus pressure or pinna pull, canal swelling, recent water exposure` }} />
                <td dangerouslySetInnerHTML={{ __html: `Ofloxacin or ciprofloxacin/dexamethasone otic drops × 7 days; keep ear dry` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Acute otitis media` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Middle-ear bacterial or viral infection.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Less common in adults than children` }} />
                <td dangerouslySetInnerHTML={{ __html: `Deep ear pain, fullness, hearing reduction, often after URI` }} />
                <td dangerouslySetInnerHTML={{ __html: `Amoxicillin 1 g TID × 7 days, or watchful waiting if mild; analgesics` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Eustachian tube dysfunction` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Inability to equalize middle-ear pressure.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Very common after URI` }} />
                <td dangerouslySetInnerHTML={{ __html: `Fullness, popping, mild pain, recent cold or flight` }} />
                <td dangerouslySetInnerHTML={{ __html: `Decongestant + intranasal steroid; Valsalva; usually self-resolves 1–2 weeks` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Cerumen impaction` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Hardened earwax causing pressure.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~5% adults yearly` }} />
                <td dangerouslySetInnerHTML={{ __html: `Fullness, hearing reduction, mild pain, no inflammation` }} />
                <td dangerouslySetInnerHTML={{ __html: `Carbamide peroxide drops; in-office irrigation if persistent` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Referred pain (TMJ, dental, throat)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Pain perceived in ear from neighboring structures.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common` }} />
                <td dangerouslySetInnerHTML={{ __html: `Normal ear exam, pain with chewing/jaw/swallowing` }} />
                <td dangerouslySetInnerHTML={{ __html: `Treat underlying cause (dental visit, TMJ care, strep evaluation)` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Ear Pain Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Ear Pain cost comparison">
                <h3>Typical Ear Pain Visit Cost</h3>
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
            <h2>Ear Pain Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for ear pain. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Ear Pain medication options">
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
                <td><strong>Ofloxacin</strong> <span className="tdmd-sym__med-brand">(Floxin Otic)</span></td>
                <td>Ear drops</td>
                <td>Topical fluoroquinolone</td>
                <td dangerouslySetInnerHTML={{ __html: `5 drops in affected ear twice daily × 7 days` }} />
                <td><a href="https://www.goodrx.com/floxin" target="_blank" rel="noopener">$20–$155</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Local irritation, taste changes` }} />
              </tr>
              <tr>
                <td><strong>Ciprofloxacin / Dexamethasone</strong> <span className="tdmd-sym__med-brand">(Ciprodex)</span></td>
                <td>Ear drops</td>
                <td>Topical fluoroquinolone + steroid</td>
                <td dangerouslySetInnerHTML={{ __html: `4 drops in affected ear twice daily × 7 days` }} />
                <td><a href="https://www.goodrx.com/ciprofloxacin-dexamethasone" target="_blank" rel="noopener">$55–$211</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Local irritation; faster pain relief due to steroid` }} />
              </tr>
              <tr>
                <td><strong>Amoxicillin</strong> <span className="tdmd-sym__med-brand">(Amoxil)</span></td>
                <td>Oral capsule/suspension</td>
                <td>Beta-lactam antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `1 g three times daily × 7 days for adult AOM` }} />
                <td><a href="https://www.goodrx.com/amoxicillin" target="_blank" rel="noopener">$4–$16</a></td>
                <td dangerouslySetInnerHTML={{ __html: `GI upset, rash, diarrhea` }} />
              </tr>
              <tr>
                <td><strong>Amoxicillin-clavulanate</strong> <span className="tdmd-sym__med-brand">(Augmentin)</span></td>
                <td>Oral tablet</td>
                <td>Beta-lactam + beta-lactamase inhibitor</td>
                <td dangerouslySetInnerHTML={{ __html: `875/125 mg BID × 7 days` }} />
                <td>(see medication table)</td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, GI upset` }} />
              </tr>
              <tr>
                <td><strong>Pseudoephedrine</strong> <span className="tdmd-sym__med-brand">(Sudafed)</span></td>
                <td>Oral tablet</td>
                <td>Decongestant</td>
                <td dangerouslySetInnerHTML={{ __html: `60 mg every 4–6 hours × 3–5 days` }} />
                <td><a href="https://www.goodrx.com/pseudoephedrine" target="_blank" rel="noopener">$6–$7</a></td>
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Sudden hearing loss</strong> — emergency; ENT within 72 hours for systemic steroids` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe vertigo with hearing loss</strong> — possible labyrinthitis; in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Facial weakness or asymmetry</strong> — possible Bell's palsy or Ramsay-Hunt; in-person` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Fever with severe headache or neck stiffness</strong> — meningitis risk; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Mastoid swelling/redness behind the ear</strong> — possible mastoiditis; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Foul-smelling discharge with hearing loss in chronic case</strong> — cholesteatoma; ENT` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe vertigo with vomiting</strong> — vestibular neuritis vs. central cause` }} />
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
            <h2>What to Expect: Ear Pain Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Ear Pain recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Day 1–2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Pain begins to decrease with appropriate treatment. Otitis externa drops with steroid (Ciprodex) typically fastest pain relief.` }} />
              </tr>
              <tr>
                <td><strong>Day 3–5</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Most pain resolved; complete the full antibiotic course even if better.` }} />
              </tr>
              <tr>
                <td><strong>Day 7</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Treatment course complete; hearing typically restored. ETD may take longer.` }} />
              </tr>
              <tr>
                <td><strong>Week 2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Eustachian tube dysfunction usually fully resolved by now.` }} />
              </tr>
              <tr>
                <td><strong>Beyond 4 weeks</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Persistent symptoms warrant ENT referral — possible chronic otitis media, eustachian tube dysfunction, or cholesteatoma.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Ear Pain</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Keep ear dry during otitis externa treatment (cotton ball + petroleum jelly in shower)` }} />
              <li dangerouslySetInnerHTML={{ __html: `No swimming until cleared` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't use Q-tips — they push wax in and damage canal lining` }} />
              <li dangerouslySetInnerHTML={{ __html: `Warm compress 15 minutes 3× daily for pain` }} />
              <li dangerouslySetInnerHTML={{ __html: `Sleep with affected ear up if possible` }} />
              <li dangerouslySetInnerHTML={{ __html: `Stay hydrated and elevate head for ETD` }} />
              <li dangerouslySetInnerHTML={{ __html: `For ETD: try Valsalva maneuver (pinch nose, gently blow) and yawning` }} />
              <li dangerouslySetInnerHTML={{ __html: `Chew gum during altitude changes` }} />
              <li dangerouslySetInnerHTML={{ __html: `Avoid loud noise exposure during recovery` }} />
              <li dangerouslySetInnerHTML={{ __html: `Don't fly if severe symptoms — use decongestant 30 min before flight if needed` }} />
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
              sectionTitle={`Frequently Asked Questions — Ear Pain`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your ear pain visit.</p>
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
              <li><a href="https://www.aafp.org/pubs/afp/issues/2014/0201/p153.html" rel="noopener" target="_blank">AAP/AAFP — Otitis Media Clinical Practice Guideline</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/antibiotic-use/ear-infection.html" rel="noopener" target="_blank">CDC — Ear Infection Overview</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2012/1101/p771.html" rel="noopener" target="_blank">AAFP — Otitis Externa Management</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ofloxacin+otic" rel="noopener" target="_blank">FDA DailyMed — Ofloxacin Otic</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/ofloxacin-otic" rel="noopener" target="_blank">GoodRx — Ear Drop Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Otolaryngology Resources</a>. Retrieved May 23, 2026.</li>
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
