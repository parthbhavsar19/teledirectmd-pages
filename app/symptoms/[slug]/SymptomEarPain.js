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
 *   • Literal < and > in JSX text escaped as &lt; &gt;
 *   • Medically reviewed by Parth Bhavsar, MD — Updated May 23, 2026
 *
 * Generated: 2026-05-23. DO NOT edit manually — regenerate from config.
 */

import FaqAccordion from '../../components/FaqAccordion';

// ─── Page constants ────────────────────────────────────────────────────────────
const PAGE_URL = 'https://teledirectmd.com/symptoms/ear-pain/';
const PAGE_TITLE = `Ear Pain — What Might Be Causing It? When to See a Doctor | TeleDirectMD`;
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
    form: `Otic drops`,
    drugClass: `Fluoroquinolone antibiotic`,
    dose: `5 drops in affected ear twice daily × 10 days (AOM with perforation or otitis externa)`,
    price: `$15–$60`,
    priceUrl: `https://www.goodrx.com/ofloxacin`,
    priceLabel: `GoodRx`,
    sideEffects: `Ear irritation; minimal systemic absorption`,
  },
  {
    generic: `Amoxicillin`,
    brand: `Amoxil`,
    form: `Oral capsule`,
    drugClass: `Aminopenicillin antibiotic`,
    dose: `500 mg PO TID × 5–10 days (AOM)`,
    price: `$5–$21`,
    priceUrl: `https://www.goodrx.com/amoxicillin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, rash`,
  },
  {
    generic: `Amoxicillin-clavulanate`,
    brand: `Augmentin`,
    form: `Oral tablet`,
    drugClass: `Beta-lactam/beta-lactamase inhibitor`,
    dose: `875/125 mg PO BID × 5–7 days`,
    price: `$15–$70`,
    priceUrl: `https://www.goodrx.com/amoxicillin-clavulanate`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, nausea; use for amoxicillin-resistant AOM`,
  },
  {
    generic: `Ibuprofen`,
    brand: `Advil, Motrin`,
    form: `Oral tablet`,
    drugClass: `NSAID`,
    dose: `400–600 mg PO every 6h PRN pain`,
    price: `$2–$13`,
    priceUrl: `https://www.goodrx.com/ibuprofen`,
    priceLabel: `GoodRx`,
    sideEffects: `GI upset; avoid in CKD or peptic ulcer`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `What could be causing my ear pain?`,
    answerPlain: `Ear pain can be caused by acute otitis media (middle ear infection), otitis externa (swimmer's ear), eustachian tube dysfunction, TMJ disorder, referred dental pain, or — less commonly — mastoiditis or a foreign body. A physician evaluation helps determine the most likely cause based on your symptom pattern, onset, and associated features such as fever, hearing changes, or discharge.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Ear pain can be caused by acute otitis media (middle ear infection), otitis externa (swimmer's ear), eustachian tube dysfunction, TMJ disorder, referred dental pain, or — less commonly — mastoiditis or a foreign body. A physician evaluation helps determine the most likely cause based on your symptom pattern, onset, and associated features such as fever, hearing changes, or discharge.` }} />
    ),
  },
  {
    question: `When should I see a doctor for ear pain?`,
    answerPlain: `See a physician if ear pain is severe, persists more than 48–72 hours, is accompanied by fever above 101°F, you notice drainage from the ear canal, hearing has decreased significantly, or there is swelling or redness behind the ear. Per AAFP guidelines, adults with these features benefit from clinical evaluation. A $79 TeleDirectMD video evaluation is appropriate for California adults without emergency features.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a physician if ear pain is severe, persists more than 48–72 hours, is accompanied by fever above 101°F, you notice drainage from the ear canal, hearing has decreased significantly, or there is swelling or redness behind the ear. Per AAFP guidelines, adults with these features benefit from clinical evaluation. A $79 TeleDirectMD video evaluation is appropriate for California adults without emergency features.` }} />
    ),
  },
  {
    question: `When is ear pain an emergency?`,
    answerPlain: `Go to the ER if you have redness, swelling, or tenderness over the mastoid bone behind the ear (possible mastoiditis), high fever with severe ear pain and neck stiffness (consider meningitis), sudden loss of hearing, facial weakness or paralysis on the same side as the ear pain, or severe dizziness with nausea and vomiting (possible labyrinthitis or serious inner ear event).`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Go to the ER if you have redness, swelling, or tenderness over the mastoid bone behind the ear (possible mastoiditis), high fever with severe ear pain and neck stiffness (consider meningitis), sudden loss of hearing, facial weakness or paralysis on the same side as the ear pain, or severe dizziness with nausea and vomiting (possible labyrinthitis or serious inner ear event).` }} />
    ),
  },
  {
    question: `How long is too long to have ear pain before seeing a doctor?`,
    answerPlain: `Mild ear discomfort from eustachian tube dysfunction or a cold can improve within 48–72 hours with supportive care. If ear pain persists beyond 72 hours, worsens despite analgesics, or is accompanied by fever or discharge, a physician evaluation is warranted. In adults over 65 or immunocompromised patients, evaluation is appropriate earlier given higher risk of complications.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Mild ear discomfort from eustachian tube dysfunction or a cold can improve within 48–72 hours with supportive care. If ear pain persists beyond 72 hours, worsens despite analgesics, or is accompanied by fever or discharge, a physician evaluation is warranted. In adults over 65 or immunocompromised patients, evaluation is appropriate earlier given higher risk of complications.` }} />
    ),
  },
  {
    question: `Can a virtual doctor evaluate ear pain?`,
    answerPlain: `Yes — for typical ear pain presentations without emergency features, a telehealth evaluation is appropriate and effective for most adults. A physician assesses the probability of AOM versus otitis externa versus referred pain based on symptom history, exposure history (recent water exposure, upper respiratory illness, dental pain), and any visible changes you can describe or show on camera. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for ear infections.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — for typical ear pain presentations without emergency features, a telehealth evaluation is appropriate and effective for most adults. A physician assesses the probability of AOM versus otitis externa versus referred pain based on symptom history, exposure history (recent water exposure, upper respiratory illness, dental pain), and any visible changes you can describe or show on camera. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for ear infections.` }} />
    ),
  },
  {
    question: `What will the doctor do for ear pain at TeleDirectMD?`,
    answerPlain: `The physician takes a structured history covering onset, severity, fever, hearing changes, discharge, water exposure, and recent upper respiratory illness. Based on the evaluation, a physician assesses which cause — AOM, otitis externa, eustachian dysfunction, TMJ, or referred pain — is most likely. If an ear infection is the most likely diagnosis, our ear pain treatment page explains antibiotic options in detail. This is a physician evaluation, not a predetermined prescription.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The physician takes a structured history covering onset, severity, fever, hearing changes, discharge, water exposure, and recent upper respiratory illness. Based on the evaluation, a physician assesses which cause — AOM, otitis externa, eustachian dysfunction, TMJ, or referred pain — is most likely. If an ear infection is the most likely diagnosis, our <a href="/ear-pain-treatment-online/">ear pain treatment page</a> explains antibiotic options in detail. This is a physician evaluation, not a predetermined prescription.` }} />
    ),
  },
  {
    question: `Will I get a prescription for ear pain?`,
    answerPlain: `A prescription depends on the evaluation. If acute otitis media or otitis externa is the most likely diagnosis and meets clinical criteria, a physician may prescribe appropriate antibiotic therapy. For eustachian tube dysfunction or mild AOM in adults, watchful waiting with analgesics may be recommended first per AAFP guidelines. TeleDirectMD does not prescribe antibiotics unless a clinical indication is established.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A prescription depends on the evaluation. If acute otitis media or otitis externa is the most likely diagnosis and meets clinical criteria, a physician may prescribe appropriate antibiotic therapy. For eustachian tube dysfunction or mild AOM in adults, watchful waiting with analgesics may be recommended first per AAFP guidelines. TeleDirectMD does not prescribe antibiotics unless a clinical indication is established.` }} />
    ),
  },
  {
    question: `Is ear pain something I can manage at home?`,
    answerPlain: `Mild ear pain without fever, discharge, or hearing loss can be managed initially with ibuprofen or acetaminophen for pain relief, warm compress applied to the outer ear, and nasal saline irrigation if congestion is contributing to eustachian tube dysfunction. Keep water out of the ear canal. If symptoms persist beyond 48–72 hours or worsen, seek evaluation.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Mild ear pain without fever, discharge, or hearing loss can be managed initially with ibuprofen or acetaminophen for pain relief, warm compress applied to the outer ear, and nasal saline irrigation if congestion is contributing to eustachian tube dysfunction. Keep water out of the ear canal. If symptoms persist beyond 48–72 hours or worsen, seek evaluation.` }} />
    ),
  },
  {
    question: `Does insurance cover a TeleDirectMD visit for ear pain?`,
    answerPlain: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription antibiotic costs are separate and vary by pharmacy.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription antibiotic costs are separate and vary by pharmacy.` }} />
    ),
  },
  {
    question: `How fast can I be seen for ear pain?`,
    answerPlain: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.` }} />
    ),
  },
  {
    question: `What if I need an in-person visit for my ear pain?`,
    answerPlain: `If mastoiditis, facial nerve involvement, severe dizziness, or foreign body is suspected, you will be directed to the ER or urgent care for in-person examination with an otoscope. For recurrent ear infections warranting ENT evaluation, you will be referred with clear guidance. No additional charge for the referral.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If mastoiditis, facial nerve involvement, severe dizziness, or foreign body is suspected, you will be directed to the ER or urgent care for in-person examination with an otoscope. For recurrent ear infections warranting ENT evaluation, you will be referred with clear guidance. No additional charge for the referral.` }} />
    ),
  },
  {
    question: `How is an ear infection different from swimmer's ear or TMJ?`,
    answerPlain: `Acute otitis media (middle ear infection) causes deep-seated ear pain, often follows an upper respiratory illness, and may include fever and muffled hearing. Swimmer's ear (otitis externa) causes pain with movement of the outer ear or when touching the tragus, with a history of water exposure; the ear canal may be red and swollen. TMJ disorder causes jaw joint pain that radiates to the ear — it is worse with chewing and there is tenderness over the jaw joint. A physician's evaluation helps distinguish these causes.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Acute otitis media (middle ear infection) causes deep-seated ear pain, often follows an upper respiratory illness, and may include fever and muffled hearing. Swimmer's ear (otitis externa) causes pain with movement of the outer ear or when touching the tragus, with a history of water exposure; the ear canal may be red and swollen. TMJ disorder causes jaw joint pain that radiates to the ear — it is worse with chewing and there is tenderness over the jaw joint. A physician's evaluation helps distinguish these causes.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/ear-pain-treatment-online/', label: 'Ear Pain Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
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
    description: `Ear pain could be AOM, otitis externa, eustachian dysfunction, TMJ, or referred dental pain. $79 California video evaluation by board-certified Family Medicine physician.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Ear Pain (Otalgia)',
      alternateName: ['Otalgia', 'Ear Ache', 'Otitis Media', 'Ear Infection'],
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
    name: `How to Get an Ear Pain Evaluation Online`,
    description: `Three steps to receive a physician evaluation for ear pain from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your $79 video visit`, text: `Select ear pain on teledirectmd.com. Self pay $79. No referral needed. Same-day visits often available for California adults.`, url: `https://teledirectmd.com/symptoms/ear-pain/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews ear pain history, fever, discharge, water exposure, and recent URIs to assess likely cause and triage appropriately.`, url: `https://teledirectmd.com/symptoms/ear-pain/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your evaluation results and plan`, text: `Antibiotic prescribed if ear infection is the most likely diagnosis. Referral provided if in-person examination or ENT evaluation is needed.`, url: `https://teledirectmd.com/symptoms/ear-pain/` }
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
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Ear Pain — What Might Be Causing It and When to See a Doctor` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Ear pain could be an infection, swimmer's ear, eustachian tube problem, or referred pain from your jaw or teeth. A $79 California evaluation helps identify the cause and the right next step.
                </p>
                <p>
                  Ear pain in adults can have several different causes — and choosing the right approach depends on which one is most likely. TeleDirectMD provides same-day physician evaluation for California adults experiencing ear pain via secure video visit, triaging between causes that can be managed remotely and those that require in-person or emergency care. Self-pay is $79 with no insurance required.
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
                  <li><a href={`#${pid}-causes`}>What might be causing this?</a></li>
                  <li><a href={`#${pid}-red-flags`}>Red flags</a></li>
                  <li><a href={`#${pid}-self-care`}>Self-care to try first</a></li>
                  <li><a href={`#${pid}-when-to-book`}>When to book a visit</a></li>
                  <li><a href={`#${pid}-cost`}>Cost comparison</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>Self pay $79 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Same-day evaluations available in California</li>
                  <li>Board-certified Family Medicine physician</li>
                  <li>e-Prescription to your pharmacy when appropriate</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a $79 California Evaluation</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> H66.90 — Otitis media, unspecified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>What a TeleDirectMD Evaluation Includes</h2>
                  <ul>
                    <li>Structured ear pain symptom triage</li>
                    <li>AOM vs. otitis externa vs. referred pain assessment</li>
                    <li>Red-flag and emergency feature screening</li>
                    <li>e-Prescription to your pharmacy if appropriate</li>
                    <li>Clear follow-up and referral instructions</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. If you have mastoid swelling, facial paralysis, or sudden hearing loss, seek emergency care immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `When should you see a doctor for ear pain? Ear pain that persists beyond 48–72 hours, is accompanied by fever, discharge from the ear canal, or a significant change in hearing warrants a physician evaluation. Ear pain could be caused by acute otitis media (middle ear infection), otitis externa (swimmer's ear), eustachian tube dysfunction, TMJ disorder, or referred pain from dental disease. TeleDirectMD provides $79 same-day California video evaluation for adults experiencing ear pain, with a board-certified Family Medicine physician triaging the most likely cause and directing appropriate next steps — including referral when in-person examination is needed.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow clinical guidelines from the AAFP and AAO-HNS. Every visit includes red-flag screening, a structured symptom history, and clear follow-up instructions.
            </p>
          </div>
        </section>

        {/* ─── 3) WHAT MIGHT BE CAUSING THIS ──────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-causes`}>
          <div className="tdmd-container">
            <h2>What Might Be Causing Ear Pain?</h2>
            <p>A physician would evaluate for the following causes based on your symptom pattern, associated features, and exposure history:</p>

            <h3>Common and often self-limiting</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Eustachian tube dysfunction:</strong> The eustachian tube connects the middle ear to the back of the throat. When blocked — often during a cold, allergy, or sinus infection — pressure builds in the middle ear, causing aching or a full sensation. A physician would evaluate for this when ear pain follows an upper respiratory illness without fever or discharge. Often improves with nasal decongestants and time.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Referred dental pain:</strong> Dental disease (tooth abscess, impacted wisdom tooth) can cause pain that radiates to the ear on the same side. A physician would consider this when ear pain is accompanied by jaw pain, tooth pain, or dental sensitivity and there are no signs of ear infection.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>TMJ (temporomandibular joint) disorder:</strong> Inflammation or dysfunction of the jaw joint can produce ear pain, especially with chewing or mouth opening. Tenderness directly over the jaw joint in front of the ear is a distinguishing feature.` }} />
            </ul>

            <h3>Common and requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Acute otitis media (AOM — middle ear infection):</strong> Bacterial or viral infection of the middle ear, typically following an upper respiratory illness. Causes deep, throbbing ear pain, often with fever and a sensation of muffled hearing. A physician would evaluate for AOM and, if appropriate, prescribe antibiotics. If your doctor diagnoses an ear infection, our <a href="/ear-pain-treatment-online/">ear pain treatment page</a> covers antibiotic options and expected recovery.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Otitis externa (swimmer's ear):</strong> Infection of the outer ear canal, typically from water exposure or skin trauma. Causes pain when the tragus (the bump in front of the ear canal) is pressed or when the outer ear is pulled. The ear canal may be red, swollen, and have discharge. A physician would evaluate for this with a history of recent swimming or humid environment exposure.` }} />
            </ul>

            <h3>Less common but serious — requires evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Mastoiditis:</strong> Infection spreading to the mastoid bone behind the ear — a complication of untreated AOM. Features include redness, swelling, and tenderness directly over the mastoid prominence behind the ear, with high fever. This requires ER evaluation and IV antibiotics.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Herpes zoster oticus (Ramsay Hunt syndrome):</strong> Reactivation of varicella-zoster virus in the ear can cause severe ear pain, a vesicular rash in the ear canal, and facial weakness. This requires prompt antiviral treatment and in-person evaluation.` }} />
            </ul>

            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Not sure what is causing your ear pain? Book a $79 evaluation</p>
                <small>Board-certified Family Medicine physician &amp;middot; California &amp;middot; Same-day available</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="/book-online" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 4) RED FLAGS ────────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-red-flags`}>
          <div className="tdmd-container">
            <h2>Red Flags — When to Call 911 or Go to the ER</h2>
            <p>
              Do not use TeleDirectMD if any of the following apply. These symptoms require immediate emergency evaluation:
            </p>
            <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert" style={{ marginTop: '0.75rem' }}>
              <h3>Seek Emergency Care Immediately If You Have</h3>
              <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Swelling, redness, or tenderness over the mastoid bone behind the ear</strong> — possible mastoiditis; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Facial weakness or paralysis on the same side as the ear pain</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Sudden complete hearing loss</strong> — sudden sensorineural hearing loss; ER within 24–48 hours` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Severe vertigo with nausea, vomiting, and inability to walk</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>High fever (&gt;103°F) with ear pain and stiff neck</strong> — consider meningitis; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Vesicular (blister-like) rash visible in or around the ear canal</strong> — possible Ramsay Hunt syndrome; urgent evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Blood or clear fluid draining from the ear following head trauma</strong> — ER` }} />
              </ul>
            </div>
            <p style={{ marginTop: '1rem' }}>
              Call 911 or go to your nearest emergency room for any life-threatening symptoms. For non-emergency in-person needs, <a href="https://findahealthcenter.hrsa.gov/" rel="noopener" target="_blank">HRSA Health Center Finder</a> can locate a low-cost clinic near you.
            </p>
          </div>
        </section>

        {/* ─── 5) SELF-CARE TO TRY FIRST ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-self-care`}>
          <div className="tdmd-container">
            <h2>Self-Care to Try First</h2>
            <p>For mild ear pain without fever, discharge, or hearing loss, the following measures may help while awaiting evaluation:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Ibuprofen or acetaminophen</strong> — for pain relief. Ibuprofen 400 mg every 6 hours with food; acetaminophen 500–1000 mg every 6 hours.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Warm compress</strong> — a warm (not hot) cloth or heating pad on the outer ear for 10–15 minutes can reduce pain.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Nasal saline irrigation</strong> — if eustachian tube dysfunction from congestion is suspected, nasal saline spray can improve drainage.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Keep water out of the ear</strong> — especially if swimmer's ear is suspected. Use a cotton ball with petroleum jelly when showering.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Avoid inserting objects into the ear canal</strong> — do not use cotton swabs, which can worsen otitis externa and push debris deeper.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Swallowing or yawning</strong> — can help equalize pressure in the eustachian tube if fullness or pressure is the main symptom.` }} />
            </ul>
            <p>If ear pain worsens, fever develops, or symptoms do not improve within 48–72 hours, book a physician evaluation.</p>
          </div>
        </section>

        {/* ─── 6) WHEN TO BOOK A VISIT ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-when-to-book`}>
          <div className="tdmd-container">
            <h2>When to Book a TeleDirectMD Visit</h2>
            <p>A $79 California video evaluation is appropriate for ear pain when:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Pain persists &gt;48–72 hours or worsens despite analgesics` }} />
              <li dangerouslySetInnerHTML={{ __html: `Fever above 101°F is present or develops` }} />
              <li dangerouslySetInnerHTML={{ __html: `Discharge (clear or purulent) is visible in or from the ear canal` }} />
              <li dangerouslySetInnerHTML={{ __html: `Hearing feels muffled or decreased on the affected side` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recent water exposure (swimming pool, ocean, river) suggests swimmer's ear` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recent URI followed by ear pressure and pain` }} />
              <li dangerouslySetInnerHTML={{ __html: `You are immunocompromised, pregnant, or age &gt;65 with any ear pain` }} />
            </ul>
            <p>
              TeleDirectMD accepts Aetna, UnitedHealthcare, and Blue Cross Blue Shield commercial plans. Self-pay is $79 flat — no subscription, no hidden fees. California telehealth visits are authorized under Business and Professions Code 2290.5.
            </p>
            <h3>What Happens in a TeleDirectMD Evaluation</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Book your visit</strong> at book.teledirectmd.com — select a same-day or next-day time slot. No referral required.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>15-minute secure video visit</strong> with a board-certified Family Medicine physician. The doctor reviews your ear pain history, fever, discharge, water exposure, and hearing changes to assess the most likely cause.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Evaluation results and plan:</strong> If an ear infection is the most likely diagnosis, a physician may prescribe antibiotic therapy electronically to your local pharmacy. If your doctor diagnoses an ear infection, see our <a href="/ear-pain-treatment-online/">ear pain treatment page</a> for full treatment details. If in-person examination is needed, you will be referred with clear instructions.` }} />
            </ol>
            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Book a $79 California evaluation for ear pain</p>
                <small>Same-day visits available &amp;middot; Board-certified Family Medicine &amp;middot; e-Prescription same day</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="https://book.teledirectmd.com" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 7) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Evaluation Cost Comparison</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video evaluation — symptom assessment, differential triage, and e-prescription if appropriate. Prescription medication costs are separate.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Evaluation</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified Family Medicine physician</li>
                  <li>Ear pain triage and cause assessment</li>
                  <li>Red-flag and emergency screening</li>
                  <li>e-Prescription to your pharmacy (when appropriate)</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical ear pain visit cost comparison">
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
          </div>
        </section>

        {/* ─── 8) CTA STRIP ────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-sym__cta-strip" role="complementary">
              <div>
                <p>Book a same-day California evaluation — adults 18+ &amp;middot; $79 self-pay</p>
                <small>Board-certified Family Medicine &amp;middot; MD-only care &amp;middot; e-Prescription same day</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="/book-online" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 9) FAQ ACCORDION ───────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle={`Frequently Asked Questions — Ear Pain`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to get your ear pain evaluated?</h3>
                <p>Book a same-day $79 California video visit. Board-certified Family Medicine &amp;middot; MD-only care.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                <a href="/ear-pain-treatment-online/" className="tdmd-btn tdmd-btn-outline">Ear Pain Treatment Details</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) RELATED CONDITIONS ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-conditions`}>
          <div className="tdmd-container">
            <h2>Related Conditions We Treat Online</h2>
            <p>These condition pages cover related symptoms or treatments that may be relevant to your evaluation.</p>
            <div className="tdmd-sym__sibling-grid">
              {RELATED_CONDITIONS.map((s) => (
                <a key={s.slug} className="tdmd-sym__sibling" href={s.slug}>
                  <span className="tdmd-sym__sibling-label">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11) RELATED RESOURCE LINKS ─────────────────────────────────── */}
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

        {/* ─── 12) REFERENCES ──────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://www.aafp.org/pubs/afp/issues/2012/0201/p254.html" rel="noopener" target="_blank">AAFP — Acute Otitis Media: Diagnosis and Management</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/antibiotic-use/ear-infection.html" rel="noopener" target="_blank">CDC — Ear Infection and Antibiotic Use</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/" rel="noopener" target="_blank">AAO-HNS — Clinical Practice Guidelines: Otitis Media with Effusion</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&amp;sectionNum=2290.5." rel="noopener" target="_blank">California B&amp;P Code 2290.5 — Telehealth</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Board Certification Standards</a>. Retrieved May 23, 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 13) MEDICAL DISCLAIMER ─────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>
              This page is for informational purposes only and is not a substitute for individualized medical advice, diagnosis, or treatment. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and documented. Treatment decisions are made by a board-certified physician based on the clinical history presented at the time of the visit.
            </p>
            <p>
              If you have red-flag or emergency symptoms, seek urgent in-person or emergency care immediately — do not use TeleDirectMD. The $79 visit fee covers the physician evaluation only; prescription medication costs are separate and vary by pharmacy. Insurance information on this page is current as of May 23, 2026; verify with your insurer before booking. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
