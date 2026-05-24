/**
 * SymptomMigraine.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Severe Recurring Headache (Migraine)
 * Slug:    /symptoms/migraine/
 * ICD-10:  G43.909 — Migraine, unspecified, not intractable, without status migrainosus
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/migraine/';
const PAGE_TITLE = `Severe Recurring Headache — What Might Be Causing It? | TeleDirectMD`;
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
    generic: `Sumatriptan`,
    brand: `Imitrex`,
    form: `Oral tablet`,
    drugClass: `Triptan (serotonin agonist)`,
    dose: `50–100 mg PO at onset; may repeat in 2h (max 200 mg/day)`,
    price: `$12–$85`,
    priceUrl: `https://www.goodrx.com/sumatriptan`,
    priceLabel: `GoodRx`,
    sideEffects: `Tingling, flushing, chest pressure; contraindicated in CAD, uncontrolled HTN`,
  },
  {
    generic: `Rizatriptan`,
    brand: `Maxalt`,
    form: `Oral tablet, ODT`,
    drugClass: `Triptan`,
    dose: `10 mg PO at onset; may repeat in 2h (max 30 mg/day)`,
    price: `$15–$180`,
    priceUrl: `https://www.goodrx.com/rizatriptan`,
    priceLabel: `GoodRx`,
    sideEffects: `Dizziness, somnolence, chest pressure`,
  },
  {
    generic: `Naproxen sodium`,
    brand: `Aleve`,
    form: `Oral tablet`,
    drugClass: `NSAID`,
    dose: `500 mg PO at onset; may repeat in 6–8h`,
    price: `$3–$15`,
    priceUrl: `https://www.goodrx.com/naproxen`,
    priceLabel: `GoodRx`,
    sideEffects: `GI upset; avoid in CKD, peptic ulcer, or anticoagulant use`,
  },
  {
    generic: `Topiramate`,
    brand: `Topamax`,
    form: `Oral tablet`,
    drugClass: `Migraine prophylaxis — antiepileptic`,
    dose: `25–100 mg PO daily (titrated slowly)`,
    price: `$10–$60`,
    priceUrl: `https://www.goodrx.com/topiramate`,
    priceLabel: `GoodRx`,
    sideEffects: `Cognitive slowing, paresthesia, weight loss; contraindicated in pregnancy`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `What could be causing my severe recurring headache?`,
    answerPlain: `Severe recurring headache can be caused by migraine (the most common diagnosis for recurrent severe headache), tension-type headache, cluster headache, cervicogenic headache, or medication overuse headache. Rarely, recurring severe headache may have a secondary cause such as a brain tumor, arteriovenous malformation, or hypertensive crisis. A physician evaluation helps determine the most likely type based on your pattern, associated symptoms (aura, nausea, photophobia), and triggers.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Severe recurring headache can be caused by migraine (the most common diagnosis for recurrent severe headache), tension-type headache, cluster headache, cervicogenic headache, or medication overuse headache. Rarely, recurring severe headache may have a secondary cause such as a brain tumor, arteriovenous malformation, or hypertensive crisis. A physician evaluation helps determine the most likely type based on your pattern, associated symptoms (aura, nausea, photophobia), and triggers.` }} />
    ),
  },
  {
    question: `When should I see a doctor for a severe recurring headache?`,
    answerPlain: `See a physician if your headaches are new or have changed in character, occur more than 4 times per month, significantly limit daily activities, require frequent use of OTC pain relievers (more than 10 days per month), or are accompanied by neurological symptoms. Per AAN and AAFP guidelines, recurrent severe headache warrants a structured evaluation to diagnose the headache type and determine appropriate preventive or abortive therapy. A $79 TeleDirectMD video evaluation is appropriate for California adults without emergency features.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a physician if your headaches are new or have changed in character, occur more than 4 times per month, significantly limit daily activities, require frequent use of OTC pain relievers (more than 10 days per month), or are accompanied by neurological symptoms. Per AAN and AAFP guidelines, recurrent severe headache warrants a structured evaluation to diagnose the headache type and determine appropriate preventive or abortive therapy. A $79 TeleDirectMD video evaluation is appropriate for California adults without emergency features.` }} />
    ),
  },
  {
    question: `When is a severe headache an emergency?`,
    answerPlain: `Call 911 or go to the ER immediately for any headache described as the "worst headache of your life" (possible subarachnoid hemorrhage), a sudden thunderclap onset reaching maximum intensity within seconds, headache with fever and stiff neck (possible meningitis), headache with neurological changes (weakness, slurred speech, vision loss, confusion), headache following head trauma, or new severe headache in someone over 50 with no prior history.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Call 911 or go to the ER immediately for any headache described as the "worst headache of your life" (possible subarachnoid hemorrhage), a sudden thunderclap onset reaching maximum intensity within seconds, headache with fever and stiff neck (possible meningitis), headache with neurological changes (weakness, slurred speech, vision loss, confusion), headache following head trauma, or new severe headache in someone over 50 with no prior history.` }} />
    ),
  },
  {
    question: `How long is too long to have recurring headaches before seeing a doctor?`,
    answerPlain: `Any headache pattern recurring more than 2–4 times per month and interfering with daily activities warrants a physician evaluation. Medication overuse headache (rebound headache) can develop if OTC analgesics are used more than 10–15 days per month — this requires a specific management plan from a physician. New headaches persisting more than 3 days or worsening over time should be evaluated promptly.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Any headache pattern recurring more than 2–4 times per month and interfering with daily activities warrants a physician evaluation. Medication overuse headache (rebound headache) can develop if OTC analgesics are used more than 10–15 days per month — this requires a specific management plan from a physician. New headaches persisting more than 3 days or worsening over time should be evaluated promptly.` }} />
    ),
  },
  {
    question: `Can a virtual doctor evaluate severe recurring headaches?`,
    answerPlain: `Yes — for adults with a clear recurrent headache pattern without emergency features, a telehealth evaluation is appropriate and effective. A physician uses validated tools (POUND criteria, ID Migraine screener) to assess whether migraine or another headache type is most likely. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for headache disorders. TeleDirectMD provides $79 California evaluations for adults 18+.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — for adults with a clear recurrent headache pattern without emergency features, a telehealth evaluation is appropriate and effective. A physician uses validated tools (POUND criteria, ID Migraine screener) to assess whether migraine or another headache type is most likely. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for headache disorders. TeleDirectMD provides $79 California evaluations for adults 18+.` }} />
    ),
  },
  {
    question: `What will the doctor do for recurring headaches at TeleDirectMD?`,
    answerPlain: `The physician takes a structured headache history covering character, location, duration, frequency, associated symptoms (nausea, photophobia, phonophobia, aura), triggers, and current medication use. Based on this evaluation, the physician assesses whether migraine, tension-type, cluster, or medication overuse headache is most likely — and determines whether abortive therapy (triptan) or preventive therapy is indicated. This is an evaluation, not a predetermined prescription.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The physician takes a structured headache history covering character, location, duration, frequency, associated symptoms (nausea, photophobia, phonophobia, aura), triggers, and current medication use. Based on this evaluation, the physician assesses whether migraine, tension-type, cluster, or medication overuse headache is most likely — and determines whether abortive therapy (triptan) or preventive therapy is indicated. This is an evaluation, not a predetermined prescription.` }} />
    ),
  },
  {
    question: `Will I get a prescription for recurring headaches?`,
    answerPlain: `A prescription depends on the evaluation. If migraine is the most likely diagnosis and triptans are not contraindicated, a physician may prescribe an abortive triptan (such as sumatriptan or rizatriptan) per AAN/AAFP guidelines. If headaches are frequent (4+ per month), preventive therapy (topiramate, amitriptyline, propranolol) may be initiated or referred to neurology. Triptans are contraindicated in cardiovascular disease and uncontrolled hypertension — these will be screened.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A prescription depends on the evaluation. If migraine is the most likely diagnosis and triptans are not contraindicated, a physician may prescribe an abortive triptan (such as sumatriptan or rizatriptan) per AAN/AAFP guidelines. If headaches are frequent (4+ per month), preventive therapy (topiramate, amitriptyline, propranolol) may be initiated or referred to neurology. Triptans are contraindicated in cardiovascular disease and uncontrolled hypertension — these will be screened.` }} />
    ),
  },
  {
    question: `Is a severe recurring headache something I can manage at home?`,
    answerPlain: `For infrequent (less than 4 per month) moderate headaches, OTC treatment with ibuprofen 400–600 mg or naproxen 500 mg at onset is appropriate per AAFP. Resting in a dark, quiet room, applying cold packs, and staying hydrated can help. For migraines with identified triggers, a headache diary helps identify and avoid them. Do not use OTC analgesics more than 10–15 days per month — this can cause medication overuse headache.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `For infrequent (less than 4 per month) moderate headaches, OTC treatment with ibuprofen 400–600 mg or naproxen 500 mg at onset is appropriate per AAFP. Resting in a dark, quiet room, applying cold packs, and staying hydrated can help. For migraines with identified triggers, a headache diary helps identify and avoid them. Do not use OTC analgesics more than 10–15 days per month — this can cause medication overuse headache.` }} />
    ),
  },
  {
    question: `Does insurance cover a TeleDirectMD visit for recurring headaches?`,
    answerPlain: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate; sumatriptan is often $12–$85 at GoodRx pricing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate; sumatriptan is often $12–$85 at GoodRx pricing.` }} />
    ),
  },
  {
    question: `How fast can I be seen for a severe recurring headache?`,
    answerPlain: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.` }} />
    ),
  },
  {
    question: `What if I need an in-person visit for my recurring headaches?`,
    answerPlain: `If emergency headache features are identified — thunderclap onset, neurological changes, fever with neck stiffness — you will be directed to the ER immediately. If neuroimaging is needed to evaluate a new headache pattern in someone over 50 or with atypical features, you will be referred for in-person evaluation with clear instructions. Neurology referral is recommended for complex or refractory migraine.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If emergency headache features are identified — thunderclap onset, neurological changes, fever with neck stiffness — you will be directed to the ER immediately. If neuroimaging is needed to evaluate a new headache pattern in someone over 50 or with atypical features, you will be referred for in-person evaluation with clear instructions. Neurology referral is recommended for complex or refractory migraine.` }} />
    ),
  },
  {
    question: `How is migraine different from tension headache or cluster headache?`,
    answerPlain: `Migraine typically causes moderate-to-severe unilateral pulsating headache lasting 4–72 hours, with nausea, vomiting, and sensitivity to light and sound; it may be preceded by aura (visual, sensory, or speech changes). Tension-type headache is bilateral, described as pressing or tightening (not pulsating), mild-to-moderate in severity, without nausea or light/sound sensitivity. Cluster headache causes severe unilateral orbital pain lasting 15–180 minutes, occurring in cluster periods with ipsilateral tearing, nasal congestion, and ptosis. A physician's evaluation helps distinguish these headache types.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Migraine typically causes moderate-to-severe unilateral pulsating headache lasting 4–72 hours, with nausea, vomiting, and sensitivity to light and sound; it may be preceded by aura (visual, sensory, or speech changes). Tension-type headache is bilateral, described as pressing or tightening (not pulsating), mild-to-moderate in severity, without nausea or light/sound sensitivity. Cluster headache causes severe unilateral orbital pain lasting 15–180 minutes, occurring in cluster periods with ipsilateral tearing, nasal congestion, and ptosis. A physician's evaluation helps distinguish these headache types.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/uti-treatment-online/', label: 'UTI Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
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
    description: `Severe recurring headache may be migraine, tension, cluster, or medication overuse headache. $79 California video evaluation to identify the cause and determine appropriate treatment.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Migraine Headache',
      alternateName: ['Migraine', 'Severe Headache', 'Recurring Headache', 'Migraine Disorder'],
      code: { '@type': 'MedicalCode', code: 'G43.909', codingSystem: 'ICD-10-CM' },
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
        '#sym-migraine-opening',
        '#sym-migraine-opening p',
        '.tdmd-sym__byline',
        '#sym-migraine-faq',
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
    name: `How to Get a Severe Recurring Headache Evaluation Online`,
    description: `Three steps to receive a physician evaluation for severe recurring headache symptoms from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your $79 video visit`, text: `Select migraine/headache on teledirectmd.com. Self pay $79. No referral needed. Same-day visits often available for California adults.`, url: `https://teledirectmd.com/symptoms/migraine/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews headache pattern, associated symptoms, triggers, and medication history to assess headache type and triage appropriately.`, url: `https://teledirectmd.com/symptoms/migraine/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your evaluation results and plan`, text: `Abortive or preventive prescription provided if clinically indicated. Referral for neuroimaging or neurology if atypical features are present.`, url: `https://teledirectmd.com/symptoms/migraine/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Migraine`, item: PAGE_URL },
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
export default function SymptomMigraine() {
  const schemas = buildSchemas();
  const pid = 'sym-migraine';

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
            <span aria-current="page">Migraine</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Severe Recurring Headache — What Might Be Causing It?` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Experiencing debilitating headaches that keep coming back? Migraine is the most common diagnosis, but tension, cluster, and medication overuse headache are also possibilities. A $79 California evaluation helps determine the cause and the right next step.
                </p>
                <p>
                  Severe recurring headache can significantly impact quality of life, but not all recurring headaches are migraines. TeleDirectMD provides same-day physician evaluation for California adults experiencing severe recurring headache via secure video visit, with a board-certified Family Medicine physician performing a structured headache assessment and determining whether abortive, preventive, or other therapy is appropriate. Self-pay is $79 with no insurance required.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> G43.909 — Migraine, unspecified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>What a TeleDirectMD Evaluation Includes</h2>
                  <ul>
                    <li>Structured headache type assessment</li>
                    <li>Emergency feature and red-flag screening</li>
                    <li>Abortive and preventive therapy evaluation</li>
                    <li>e-Prescription to your pharmacy if appropriate</li>
                    <li>Clear follow-up and referral instructions</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. If you have a sudden "worst headache of your life," neurological changes, or fever with neck stiffness, seek emergency care immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `When should you see a doctor for severe recurring headache? A physician evaluation is appropriate when headaches occur more than 4 times per month, significantly limit daily activities, require frequent OTC pain relievers, or include neurological symptoms such as visual aura, tingling, or speech changes. Severe recurring headache could be migraine, tension-type headache, cluster headache, or medication overuse headache — and each type has different optimal treatment. TeleDirectMD provides $79 same-day California video evaluation for adults experiencing severe recurring headache, with a board-certified Family Medicine physician performing a structured assessment to identify the most likely headache type and determine appropriate care.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow clinical guidelines from the AAN and AAFP. Every visit includes red-flag screening, a structured symptom history, and clear follow-up instructions.
            </p>
          </div>
        </section>

        {/* ─── 3) WHAT MIGHT BE CAUSING THIS ──────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-causes`}>
          <div className="tdmd-container">
            <h2>What Might Be Causing Severe Recurring Headache?</h2>
            <p>A physician would evaluate for the following causes based on your headache character, location, duration, associated symptoms, and triggers:</p>

            <h3>Common primary headache disorders</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Migraine:</strong> The most common cause of recurrent severe headache in adults, affecting approximately 12% of the population. Migraine causes moderate-to-severe unilateral or bilateral throbbing headache lasting 4–72 hours, typically accompanied by nausea, vomiting, photophobia, and phonophobia. About one-third of migraineurs experience aura (visual, sensory, or speech changes) before the headache. A physician would evaluate for migraine using validated criteria and may prescribe triptan abortive therapy or preventive treatment.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Tension-type headache:</strong> The most common headache type overall, but usually mild-to-moderate and bilateral with a pressing or tightening (not throbbing) quality. Tension headache does not typically cause nausea or sensitivity to light and sound. A physician would evaluate for tension-type when these features are present and migraine criteria are not met. OTC NSAIDs are first-line.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Medication overuse headache (rebound headache):</strong> Using OTC analgesics more than 10–15 days per month can paradoxically worsen headache frequency and severity over time. A physician would evaluate for this when headaches are daily or near-daily and the patient uses frequent pain relievers. Treatment requires a supervised medication withdrawal plan.` }} />
            </ul>

            <h3>Less common but requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Cluster headache:</strong> Rare but extremely severe unilateral headache around or behind the eye, lasting 15–180 minutes and occurring in clusters (multiple times per day for weeks to months). Associated with ipsilateral lacrimation, nasal congestion, and ptosis. Distinct from migraine; requires specific treatment (high-flow oxygen, sumatriptan injection, verapamil prophylaxis).` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Hormonal/menstrual migraine:</strong> Migraine triggered by hormonal fluctuations around menstruation or associated with hormonal contraceptive use. A physician would evaluate for this in women with menstrual cycle-linked severe recurring headache.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Secondary headache causes (requiring referral):</strong> Intracranial hypertension, brain tumor, arteriovenous malformation, chronic sinusitis, or cervicogenic headache can all cause recurrent head pain. A physician would refer for imaging if the headache pattern is progressive, worsening, or associated with neurological changes.` }} />
            </ul>

            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Not sure what is causing your recurring headache? Book a $79 evaluation</p>
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
              Do not use TeleDirectMD if any of the following apply. These headache features require immediate emergency evaluation:
            </p>
            <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert" style={{ marginTop: '0.75rem' }}>
              <h3>Seek Emergency Care Immediately If You Have</h3>
              <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>"Worst headache of your life"</strong> — possible subarachnoid hemorrhage; call 911` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Thunderclap headache (maximum intensity within seconds)</strong> — ER immediately` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Headache with fever and stiff neck</strong> — possible meningitis; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Headache with new neurological symptoms</strong> (weakness, slurred speech, vision loss, confusion) — call 911` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Headache following head trauma or loss of consciousness</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>New severe headache in someone over 50 with no prior headache history</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Progressive worsening headache over days to weeks</strong> — in-person evaluation; possible intracranial hypertension` }} />
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
            <p>For infrequent (less than 4 per month) moderate headaches without emergency features, per AAFP guidance:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Ibuprofen 400–600 mg at headache onset</strong> — take at the first sign of a headache, before it reaches maximum intensity. Take with food and water.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Rest in a dark, quiet room</strong> — minimizes sensory input that worsens migraine; most effective in the first 30 minutes of onset.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Cold pack on the forehead or base of skull</strong> — can reduce migraine pain via vasoconstriction.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Hydration</strong> — dehydration is a common headache trigger; drink 2–3 large glasses of water at onset.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Headache diary</strong> — track triggers (sleep, food, hormones, stress, weather), duration, severity, and response to treatment over 2–4 weeks to inform the physician evaluation.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Avoid analgesic overuse</strong> — do not use OTC pain relievers more than 10–15 days per month; exceeding this causes medication overuse headache.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Sleep hygiene and stress management</strong> — irregular sleep and high stress are among the most common modifiable migraine triggers.` }} />
            </ul>
            <p>If OTC measures are inadequate, headaches recur more than 4 times per month, or they significantly impair daily function, book a physician evaluation for prescription abortive or preventive therapy.</p>
          </div>
        </section>

        {/* ─── 6) WHEN TO BOOK A VISIT ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-when-to-book`}>
          <div className="tdmd-container">
            <h2>When to Book a TeleDirectMD Visit</h2>
            <p>A $79 California video evaluation is appropriate for severe recurring headache when:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Headaches occur &gt;4 times per month` }} />
              <li dangerouslySetInnerHTML={{ __html: `OTC analgesics are inadequate or taken &gt;10 days per month` }} />
              <li dangerouslySetInnerHTML={{ __html: `Headaches significantly limit work, school, or daily activities` }} />
              <li dangerouslySetInnerHTML={{ __html: `You need a prescription abortive medication (triptan) evaluated` }} />
              <li dangerouslySetInnerHTML={{ __html: `You have aura (visual disturbance, tingling, speech changes) with headaches` }} />
              <li dangerouslySetInnerHTML={{ __html: `You are pregnant or postpartum and experiencing recurrent severe headache` }} />
              <li dangerouslySetInnerHTML={{ __html: `You have risk factors: hypertension, cardiovascular disease, or migraine with aura (affects triptan candidacy)` }} />
            </ul>
            <h3>What Happens in a TeleDirectMD Evaluation</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Book your visit</strong> at book.teledirectmd.com — select a same-day or next-day time slot. No referral required.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>15-minute secure video visit</strong> with a board-certified Family Medicine physician. The doctor reviews your headache character, frequency, associated symptoms, triggers, and prior treatments.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Evaluation results and plan:</strong> If migraine is the most likely diagnosis and triptans are not contraindicated, a physician may prescribe a triptan (sumatriptan or rizatriptan) electronically to your local pharmacy. Preventive therapy or neurology referral may be recommended if appropriate.` }} />
            </ol>
            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Book a $79 California evaluation for severe recurring headache</p>
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
                  <li>Structured headache type assessment</li>
                  <li>Red-flag and emergency screening</li>
                  <li>e-Prescription to your pharmacy (when appropriate)</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical headache visit cost comparison">
                <h3>Typical Headache Visit Cost</h3>
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
              sectionTitle={`Frequently Asked Questions — Severe Recurring Headache`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to get your recurring headaches evaluated?</h3>
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
              <li><a href="https://www.aafp.org/pubs/afp/issues/2006/0201/p480.html" rel="noopener" target="_blank">AAFP — Diagnosis and Treatment of Migraine</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aan.com/Guidelines/home/GetGuidelineContent/706" rel="noopener" target="_blank">AAN — Migraine Prevention in Adults Clinical Practice Guideline</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/nchs/fastats/headaches.htm" rel="noopener" target="_blank">CDC — Headache Statistics</a>. Retrieved May 23, 2026.</li>
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
              If you have red-flag or emergency symptoms, seek urgent in-person or emergency care immediately — do not use TeleDirectMD. The $79 visit fee covers the physician evaluation only; prescription medication costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
