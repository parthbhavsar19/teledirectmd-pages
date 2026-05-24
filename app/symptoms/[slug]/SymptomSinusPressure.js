/**
 * SymptomSinusPressure.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Sinus Pressure
 * Slug:    /symptoms/sinus-pressure/
 * ICD-10:  J32.9 — Chronic sinusitis, unspecified
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/sinus-pressure/';
const PAGE_TITLE = `Sinus Pressure — What Might Be Causing It and When to See a Doctor | TeleDirectMD`;
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
    generic: `amoxicillin-clavulanate`,
    brand: `Augmentin`,
    form: `Oral tablet`,
    drugClass: `Aminopenicillin/beta-lactamase inhibitor antibiotic`,
    dose: `875/125 mg PO BID × 5–7 days (acute bacterial sinusitis)`,
    price: `$15–$55`,
    priceUrl: `https://www.goodrx.com/amoxicillin-clavulanate`,
    priceLabel: `GoodRx`,
    sideEffects: `GI upset, diarrhea; take with food; check penicillin allergy`,
  },
  {
    generic: `fluticasone propionate nasal spray`,
    brand: `Flonase`,
    form: `Nasal spray`,
    drugClass: `Intranasal corticosteroid`,
    dose: `2 sprays per nostril once daily`,
    price: `$15–$40`,
    priceUrl: `https://www.goodrx.com/fluticasone-nasal`,
    priceLabel: `GoodRx`,
    sideEffects: `Nasal dryness, epistaxis; systemic absorption minimal at standard doses`,
  },
  {
    generic: `pseudoephedrine`,
    brand: `Sudafed`,
    form: `Oral tablet (behind pharmacy counter)`,
    drugClass: `Oral decongestant (alpha-adrenergic agonist)`,
    dose: `60 mg PO q4–6h as needed; 120 mg ER q12h (max 240 mg/day)`,
    price: `$10–$25`,
    priceUrl: `https://www.goodrx.com/pseudoephedrine`,
    priceLabel: `GoodRx`,
    sideEffects: `Tachycardia, insomnia, hypertension; avoid in uncontrolled hypertension or heart disease`,
  },
  {
    generic: `oxymetazoline nasal spray`,
    brand: `Afrin`,
    form: `Nasal spray (OTC)`,
    drugClass: `Topical nasal decongestant`,
    dose: `2–3 sprays per nostril q10–12h; maximum 3 days to avoid rebound congestion`,
    price: `$8–$18`,
    priceUrl: `https://www.goodrx.com/oxymetazoline-nasal`,
    priceLabel: `GoodRx`,
    sideEffects: `Rebound congestion (rhinitis medicamentosa) if used &gt;3 days; avoid in pregnancy`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `What could be causing sinus pressure?`,
    answerPlain: `Sinus pressure — a sensation of fullness, pain, or heaviness over the forehead, cheeks, or around the eyes — most commonly arises from a viral upper respiratory infection causing mucosal swelling and sinus ostia obstruction. Other causes include allergic rhinitis, acute bacterial sinusitis, nasal polyps, a deviated nasal septum, dental infection (especially upper molars near the maxillary sinus), or barotrauma. A physician evaluation determines whether the cause is viral (self-limiting), allergic (requiring antihistamine or steroid), or bacterial (requiring antibiotic).`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Sinus pressure — a sensation of fullness, pain, or heaviness over the forehead, cheeks, or around the eyes — most commonly arises from a viral upper respiratory infection causing mucosal swelling and sinus ostia obstruction. Other causes include allergic rhinitis, acute bacterial sinusitis, nasal polyps, a deviated nasal septum, dental infection (especially upper molars near the maxillary sinus), or barotrauma. A physician evaluation determines whether the cause is viral (self-limiting), allergic (requiring antihistamine or steroid), or bacterial (requiring antibiotic).` }} />
    ),
  },
  {
    question: `When should I see a doctor for sinus pressure?`,
    answerPlain: `See a physician if sinus pressure persists beyond 10 days without improvement, worsens after initial improvement (double-worsening pattern), is accompanied by thick discolored nasal discharge and fever — these features suggest acute bacterial sinusitis requiring antibiotic evaluation per IDSA guidelines. A physician evaluation is also appropriate when sinus pressure is recurrent (more than 4 episodes per year), severely impacts quality of life, or does not respond to OTC decongestants and nasal saline.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a physician if sinus pressure persists beyond 10 days without improvement, worsens after initial improvement (double-worsening pattern), is accompanied by thick discolored nasal discharge and fever — these features suggest acute bacterial sinusitis requiring antibiotic evaluation per IDSA guidelines. A physician evaluation is also appropriate when sinus pressure is recurrent (more than 4 episodes per year), severely impacts quality of life, or does not respond to OTC decongestants and nasal saline.` }} />
    ),
  },
  {
    question: `When is sinus pressure an emergency?`,
    answerPlain: `Call 911 or go to the ER immediately if sinus pressure is accompanied by: severe headache with stiff neck or photophobia (possible meningitis), sudden vision changes or eye swelling and proptosis (possible orbital cellulitis), high fever (&gt;39°C / 102.2°F) with altered mental status or severe headache, or soft swelling over the forehead suggesting Pott's puffy tumor (osteomyelitis of the frontal bone). These are rare but serious complications of sinusitis requiring emergency evaluation.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Call 911 or go to the ER immediately if sinus pressure is accompanied by: severe headache with stiff neck or photophobia (possible meningitis), sudden vision changes or eye swelling and proptosis (possible orbital cellulitis), high fever (&gt;39°C / 102.2°F) with altered mental status or severe headache, or soft swelling over the forehead suggesting Pott's puffy tumor (osteomyelitis of the frontal bone). These are rare but serious complications of sinusitis requiring emergency evaluation.` }} />
    ),
  },
  {
    question: `How long is too long to have sinus pressure before seeing a doctor?`,
    answerPlain: `Sinus pressure lasting up to 10 days following a cold is typically viral and self-limiting — antibiotics are not recommended during this period per IDSA and AAFP guidelines. Sinus pressure persisting beyond 10 days without improvement, or that worsens after initial improvement, meets criteria for possible acute bacterial sinusitis and warrants physician evaluation. Recurrent sinus pressure occurring more than 4 times per year also warrants evaluation for underlying allergic rhinitis or nasal polyps.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Sinus pressure lasting up to 10 days following a cold is typically viral and self-limiting — antibiotics are not recommended during this period per IDSA and AAFP guidelines. Sinus pressure persisting beyond 10 days without improvement, or that worsens after initial improvement, meets criteria for possible acute bacterial sinusitis and warrants physician evaluation. Recurrent sinus pressure occurring more than 4 times per year also warrants evaluation for underlying allergic rhinitis or nasal polyps.` }} />
    ),
  },
  {
    question: `Can a virtual doctor evaluate sinus pressure?`,
    answerPlain: `Yes — physician evaluation of sinus pressure via telehealth is appropriate and effective for the majority of presentations. A physician can assess symptom duration, character, the presence of the double-worsening pattern, associated fever, and nasal discharge color to determine whether criteria for acute bacterial sinusitis are met. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for sinusitis. TeleDirectMD provides $79 California video evaluations for adults 18+.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — physician evaluation of sinus pressure via telehealth is appropriate and effective for the majority of presentations. A physician can assess symptom duration, character, the presence of the double-worsening pattern, associated fever, and nasal discharge color to determine whether criteria for acute bacterial sinusitis are met. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for sinusitis. TeleDirectMD provides $79 California video evaluations for adults 18+.` }} />
    ),
  },
  {
    question: `What will the doctor do for sinus pressure at TeleDirectMD?`,
    answerPlain: `The physician evaluates symptom duration, character (viral vs. bacterial features), pain location (frontal, maxillary, ethmoid), nasal discharge color, fever, prior sinusitis history, allergies, dental history, and response to OTC treatment. Based on the evaluation, a physician may prescribe amoxicillin-clavulanate or an alternative antibiotic for acute bacterial sinusitis per IDSA criteria, or prescribe an intranasal corticosteroid for allergic sinusitis. This is an evaluation — prescribing depends on whether bacterial criteria are met.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The physician evaluates symptom duration, character (viral vs. bacterial features), pain location (frontal, maxillary, ethmoid), nasal discharge color, fever, prior sinusitis history, allergies, dental history, and response to OTC treatment. Based on the evaluation, a physician may prescribe amoxicillin-clavulanate or an alternative antibiotic for acute bacterial sinusitis per IDSA criteria, or prescribe an intranasal corticosteroid for allergic sinusitis. This is an evaluation — prescribing depends on whether bacterial criteria are met.` }} />
    ),
  },
  {
    question: `Will I get a prescription for sinus pressure?`,
    answerPlain: `Antibiotics are prescribed only when acute bacterial sinusitis criteria are met per IDSA guidelines: symptoms persisting &gt;10 days without improvement, double-worsening pattern, or severe symptoms (fever &gt;39°C, unilateral facial pain). Most sinus pressure from viral URIs or allergic rhinitis does not require antibiotics. An intranasal corticosteroid prescription may be provided for allergic or inflammatory sinusitis. If bacterial sinusitis is present, first-line therapy is amoxicillin-clavulanate.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Antibiotics are prescribed only when acute bacterial sinusitis criteria are met per IDSA guidelines: symptoms persisting &gt;10 days without improvement, double-worsening pattern, or severe symptoms (fever &gt;39°C, unilateral facial pain). Most sinus pressure from viral URIs or allergic rhinitis does not require antibiotics. An intranasal corticosteroid prescription may be provided for allergic or inflammatory sinusitis. If bacterial sinusitis is present, first-line therapy is amoxicillin-clavulanate.` }} />
    ),
  },
  {
    question: `Is sinus pressure something I can manage at home?`,
    answerPlain: `Viral sinusitis causing sinus pressure (the most common cause) is self-limiting and responds well to home management: saline nasal irrigation (NeilMed twice daily), OTC pseudoephedrine or oxymetazoline for short-term decongestant relief (do not use oxymetazoline for more than 3 days), steam inhalation, adequate hydration, and ibuprofen or acetaminophen for pain. OTC intranasal corticosteroid (Flonase) can help reduce mucosal swelling. If symptoms persist beyond 10 days or worsen, physician evaluation is appropriate.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Viral sinusitis causing sinus pressure (the most common cause) is self-limiting and responds well to home management: saline nasal irrigation (NeilMed twice daily), OTC pseudoephedrine or oxymetazoline for short-term decongestant relief (do not use oxymetazoline for more than 3 days), steam inhalation, adequate hydration, and ibuprofen or acetaminophen for pain. OTC intranasal corticosteroid (Flonase) can help reduce mucosal swelling. If symptoms persist beyond 10 days or worsen, physician evaluation is appropriate.` }} />
    ),
  },
  {
    question: `Does insurance cover a TeleDirectMD visit for sinus pressure?`,
    answerPlain: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription antibiotic costs are separate; generic amoxicillin-clavulanate is typically $15–$55 and OTC fluticasone nasal spray is $15–$40 at GoodRx pricing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription antibiotic costs are separate; generic amoxicillin-clavulanate is typically $15–$55 and OTC fluticasone nasal spray is $15–$40 at GoodRx pricing.` }} />
    ),
  },
  {
    question: `How fast can I be seen for sinus pressure?`,
    answerPlain: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.` }} />
    ),
  },
  {
    question: `What if I need an in-person visit for sinus pressure?`,
    answerPlain: `In-person evaluation or ENT referral is appropriate when sinus symptoms recur frequently (&gt;4 episodes per year) suggesting chronic sinusitis, nasal polyps, or anatomic obstruction; when CT sinuses imaging is needed; when orbital or intracranial complications are suspected (eye swelling, severe headache, altered mental status); or when severe facial pain or swelling is present. A referral with clear instructions will be provided at no additional charge.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `In-person evaluation or ENT referral is appropriate when sinus symptoms recur frequently (&gt;4 episodes per year) suggesting chronic sinusitis, nasal polyps, or anatomic obstruction; when CT sinuses imaging is needed; when orbital or intracranial complications are suspected (eye swelling, severe headache, altered mental status); or when severe facial pain or swelling is present. A referral with clear instructions will be provided at no additional charge.` }} />
    ),
  },
  {
    question: `How is sinus pressure different from a sinus headache or migraine?`,
    answerPlain: `True sinus pressure from sinusitis involves facial fullness or pain over the cheeks, forehead, or around the eyes, and is accompanied by nasal congestion and discharge. A "sinus headache" without nasal symptoms or discharge is more likely a migraine or tension headache — studies show that most self-diagnosed sinus headaches meet migraine criteria. Migraine can also cause facial pain through trigeminal nerve pathways. A physician evaluation helps distinguish these conditions, as treatment differs substantially.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `True sinus pressure from sinusitis involves facial fullness or pain over the cheeks, forehead, or around the eyes, and is accompanied by nasal congestion and discharge. A "sinus headache" without nasal symptoms or discharge is more likely a migraine or tension headache — studies show that most self-diagnosed sinus headaches meet migraine criteria. Migraine can also cause facial pain through trigeminal nerve pathways. A physician evaluation helps distinguish these conditions, as treatment differs substantially.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/asthma-refills-online/', label: 'Asthma Inhaler Refills Online' },
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
    description: `Sinus pressure evaluation online. Determine likely cause — viral sinusitis, allergic sinusitis, or acute bacterial sinusitis — and whether antibiotic treatment is needed. $79 California video evaluation by board-certified Family Medicine physician.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Sinusitis',
      alternateName: ['Sinus Pressure', 'Sinus Congestion', 'Sinus Pain', 'Sinusitis'],
      code: { '@type': 'MedicalCode', code: 'J32.9', codingSystem: 'ICD-10-CM' },
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
        '#sym-sinus-pressure-opening',
        '#sym-sinus-pressure-opening p',
        '.tdmd-sym__byline',
        '#sym-sinus-pressure-faq',
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
    name: `How to Get a Sinus Pressure Evaluation Online`,
    description: `Three steps to receive a physician evaluation for sinus pressure from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your $79 video visit`, text: `Select sinus pressure on teledirectmd.com. Self pay $79. No referral needed. Same-day visits often available for California adults.`, url: `https://teledirectmd.com/symptoms/sinus-pressure/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician evaluates symptom duration, discharge character, fever, and double-worsening pattern to determine if bacterial criteria are met and whether antibiotic is appropriate.`, url: `https://teledirectmd.com/symptoms/sinus-pressure/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your evaluation results and plan`, text: `Antibiotic prescription for bacterial sinusitis if IDSA criteria are met. Intranasal corticosteroid for allergic sinusitis. ENT referral for recurrent or complicated cases.`, url: `https://teledirectmd.com/symptoms/sinus-pressure/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Sinus Pressure`, item: PAGE_URL },
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
export default function SymptomSinusPressure() {
  const schemas = buildSchemas();
  const pid = 'sym-sinus-pressure';

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
            <span aria-current="page">Sinus Pressure</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Sinus Pressure — What Might Be Causing It and When to See a Doctor` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Experiencing facial pressure, congestion, or heaviness around your eyes and forehead? A $79 California evaluation can determine whether the cause is viral, allergic, or bacterial — and whether an antibiotic is actually needed.
                </p>
                <p>
                  Sinus pressure is one of the most common reasons adults seek medical evaluation, but not all sinus pressure requires antibiotics. Most cases are viral and self-limiting; antibiotic therapy is appropriate only when specific bacterial criteria are met. A physician evaluation prevents unnecessary antibiotic use while ensuring bacterial sinusitis is properly treated. TeleDirectMD provides same-day physician evaluation for California adults via secure video visit. Self-pay is $79 with no insurance required.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J32.9 — Chronic sinusitis, unspecified / J01.90 — Acute sinusitis, unspecified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>What a TeleDirectMD Evaluation Includes</h2>
                  <ul>
                    <li>Viral vs. bacterial sinusitis differentiation</li>
                    <li>IDSA-criteria antibiotic assessment</li>
                    <li>Intranasal corticosteroid if allergic component</li>
                    <li>Decongestant and saline irrigation guidance</li>
                    <li>ENT or imaging referral for recurrent/complex cases</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. Eye swelling, severe headache, or altered mental status with sinus symptoms require emergency evaluation. TeleDirectMD is not an emergency service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `When should you see a doctor for sinus pressure? A physician evaluation is appropriate when sinus pressure has persisted beyond 10 days without improvement, worsens after initial improvement (double-worsening), is accompanied by thick discolored nasal discharge and fever, or recurs more than 4 times per year. Sinus pressure could be caused by viral upper respiratory infection (most common, self-limiting), allergic rhinitis, acute bacterial sinusitis, nasal polyps, or a dental source — and only bacterial sinusitis requires antibiotic therapy. TeleDirectMD provides $79 same-day California video evaluation for adults with sinus pressure, with a board-certified Family Medicine physician applying evidence-based IDSA criteria to determine whether antibiotic treatment is needed.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow IDSA and AAFP sinusitis guidelines. California telehealth visits are authorized under Business and Professions Code 2290.5.
            </p>
          </div>
        </section>

        {/* ─── 3) WHAT MIGHT BE CAUSING THIS ──────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-causes`}>
          <div className="tdmd-container">
            <h2>What Might Be Causing Sinus Pressure?</h2>
            <p>A physician would evaluate for the following causes based on symptom duration, discharge character, fever pattern, timing, and associated history:</p>

            <h3>Common and self-limiting</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Viral acute sinusitis (viral rhinosinusitis):</strong> The most common cause of sinus pressure, occurring as part of or following a viral upper respiratory infection. Mucosal edema causes sinus ostia obstruction and pressure sensation. Per IDSA guidelines, the vast majority of acute sinusitis episodes are viral, typically resolve within 7–10 days, and do not require antibiotics. A physician would identify viral sinusitis when symptoms began acutely with a cold and are improving within the first 10 days.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Allergic rhinosinusitis:</strong> Allergic inflammation of the nasal and sinus mucosa from pollen, dust mites, or pet dander producing sinus pressure, nasal congestion, and postnasal drip in a seasonal or perennial pattern. Recurs predictably each allergy season. A physician would evaluate for this cause when sinus pressure correlates with allergen exposure and responds to antihistamines or intranasal corticosteroids.` }} />
            </ul>

            <h3>Common and requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Acute bacterial sinusitis:</strong> Secondary bacterial infection of the sinus cavities following viral sinusitis or allergic inflammation, most commonly caused by Streptococcus pneumoniae or Haemophilus influenzae. Per IDSA diagnostic criteria, bacterial sinusitis is suggested by: symptom duration &gt;10 days without improvement, severe symptoms (fever &gt;39°C, unilateral facial pain/swelling), or double-worsening after initial improvement. Requires antibiotic therapy. See our <a href="/sinus-infection-treatment-online/">sinus infection treatment page</a> if a sinus infection is diagnosed.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Dental infection extending to maxillary sinus:</strong> Upper molar periapical abscesses can extend into the maxillary sinus, causing unilateral maxillary sinus pressure with facial pain. A physician would evaluate for dental source when sinus pressure is predominantly unilateral, maxillary, and accompanied by dental pain or recent dental procedure.` }} />
            </ul>

            <h3>Less common but requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Nasal polyps:</strong> Benign mucosal growths in the nasal and sinus cavities causing persistent bilateral obstruction, reduced sense of smell, and recurrent sinus pressure. Associated with aspirin-exacerbated respiratory disease and chronic sinusitis. A physician would evaluate for polyps when sinus pressure is chronic, bilateral, and associated with hyposmia and poor response to antihistamines.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Barotrauma sinusitis:</strong> Sudden pressure change (air travel, diving, altitude change) causing mucosal injury and sinus pressure. Typically self-limiting. A physician would evaluate for this cause when sinus pressure began immediately following a flight or diving activity.` }} />
            </ul>

            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Sinus pressure beyond 10 days? Book a $79 evaluation</p>
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
            <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert" style={{ marginTop: '0.75rem' }}>
              <h3>Seek Emergency Care Immediately If You Have</h3>
              <ul>
                <li dangerouslySetInnerHTML={{ __html: `<strong>Severe headache with stiff neck or light sensitivity (photophobia)</strong> — possible meningitis; call 911` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Eye swelling, proptosis (eye bulging), or double vision</strong> — possible orbital cellulitis or abscess; ER evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>High fever (&gt;39°C / 102.2°F) with confusion or altered mental status</strong> — possible intracranial complication; call 911` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Forehead swelling or doughy forehead edema</strong> — possible Pott's puffy tumor (frontal osteomyelitis); ER evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Severe unilateral facial swelling extending beyond the sinus region</strong> — possible spreading cellulitis; urgent in-person evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Vision changes or loss of vision</strong> — possible orbital or intracranial extension; call 911` }} />
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 5) SELF-CARE TO TRY FIRST ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-self-care`}>
          <div className="tdmd-container">
            <h2>Self-Care to Try First</h2>
            <p>For sinus pressure within the first 10 days of a viral respiratory illness, the following evidence-based home measures per IDSA and AAFP guidance may reduce symptoms:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Saline nasal irrigation twice daily</strong> — NeilMed sinus rinse or neti pot with sterile saline; flushes mucus and allergens from sinus passages and reduces mucosal edema. Most evidence-supported non-pharmacologic measure.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OTC intranasal corticosteroid</strong> — fluticasone (Flonase) 2 sprays per nostril daily reduces sinus mucosal inflammation; takes several days for full effect.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Short-term oral decongestant</strong> — pseudoephedrine 60 mg every 4–6 hours as needed for nasal congestion relief; avoid in uncontrolled hypertension or heart disease.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OTC oxymetazoline nasal spray</strong> — Afrin 2–3 sprays per nostril twice daily for no more than 3 days to avoid rebound congestion (rhinitis medicamentosa).` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Steam inhalation or warm compress</strong> — applied over the affected sinus area for 5–10 minutes several times daily to promote sinus drainage.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Adequate hydration and rest</strong> — helps thin sinus secretions and supports immune recovery.` }} />
            </ul>
            <p>If symptoms do not improve within 10 days, or worsen after initial improvement, book a physician evaluation to assess for bacterial sinusitis.</p>
          </div>
        </section>

        {/* ─── 6) WHEN TO BOOK A VISIT ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-when-to-book`}>
          <div className="tdmd-container">
            <h2>When to Book a TeleDirectMD Visit</h2>
            <p>A $79 California video evaluation is appropriate for sinus pressure when:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Sinus pressure has persisted for &gt;10 days without improvement` }} />
              <li dangerouslySetInnerHTML={{ __html: `Symptoms worsened after initial improvement (double-worsening pattern)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Thick yellow-green discharge with fever (&gt;38.5°C) is present` }} />
              <li dangerouslySetInnerHTML={{ __html: `OTC decongestants and saline have not adequately controlled symptoms` }} />
              <li dangerouslySetInnerHTML={{ __html: `Sinus pressure recurs more than 4 times per year` }} />
              <li dangerouslySetInnerHTML={{ __html: `You are immunocompromised or &gt;65 years old with persistent sinus symptoms` }} />
            </ul>
            <h3>What Happens in a TeleDirectMD Evaluation</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Book your visit</strong> at book.teledirectmd.com — select a same-day or next-day time slot. No referral required.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>15-minute secure video visit</strong> with a board-certified Family Medicine physician. The doctor evaluates symptom duration, discharge character, fever, double-worsening pattern, allergies, dental history, and prior sinusitis episodes.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Evaluation results and plan:</strong> Antibiotic prescription for bacterial sinusitis if IDSA criteria are met. Intranasal corticosteroid for allergic component. ENT or imaging referral for recurrent or complicated cases.` }} />
            </ol>
            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Book a $79 California evaluation for sinus pressure</p>
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
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video evaluation. Prescription medication costs are separate.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Evaluation</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified Family Medicine physician</li>
                  <li>Sinus pressure cause assessment</li>
                  <li>Antibiotic prescription if bacterial criteria met</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical sinusitis visit cost comparison">
                <h3>Typical Sinusitis Visit Cost</h3>
                <p className="tdmd-price-caption">Typical out-of-pocket costs before insurance. Actual costs vary by location and plan.</p>
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
                  Source: Mira Health cost benchmarks, Feb 2025.
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
              sectionTitle={`Frequently Asked Questions — Sinus Pressure`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to get your sinus pressure evaluated?</h3>
                <p>Book a same-day $79 California video visit. Board-certified Family Medicine &amp;middot; MD-only care.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) RELATED CONDITIONS ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-conditions`}>
          <div className="tdmd-container">
            <h2>Related Conditions We Treat Online</h2>
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
              <li><a href="https://www.idsociety.org/practice-guideline/sinusitis/" rel="noopener" target="_blank">IDSA — Clinical Practice Guideline for Acute Bacterial Rhinosinusitis</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2011/0215/p420.html" rel="noopener" target="_blank">AAFP — Diagnosis and Treatment of Acute Sinusitis</a>. Retrieved May 23, 2026.</li>
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
              If you have red-flag symptoms such as neck stiffness with headache, eye swelling, or altered mental status, seek emergency care immediately — do not use TeleDirectMD. The $79 visit fee covers the physician evaluation only; prescription medication costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
