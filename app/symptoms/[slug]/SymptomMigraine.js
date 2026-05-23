/**
 * SymptomMigraine.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Migraine
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
 *   • Literal < and > in JSX text escaped as < >
 *   • Medically reviewed by Parth Bhavsar, MD — Updated May 23, 2026
 *
 * Generated: 2026-05-23. DO NOT edit manually — regenerate from config.
 */

import FaqAccordion from '../../components/FaqAccordion';

// ─── Page constants ────────────────────────────────────────────────────────────
const PAGE_URL = 'https://teledirectmd.com/symptoms/migraine/';
const PAGE_TITLE = `Migraine Treatment Online — Sumatriptan Rx Same Day | TeleDirectMD`;
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
    form: `Oral tablet / nasal / SC`,
    drugClass: `5-HT1B/1D agonist (triptan)`,
    dose: `50–100 mg PO at onset; may repeat after 2h`,
    price: `$6–$12`,
    priceUrl: `https://www.goodrx.com/sumatriptan`,
    priceLabel: `GoodRx`,
    sideEffects: `Chest tightness, flushing, paresthesia; avoid in CAD/uncontrolled HTN`,
  },
  {
    generic: `Rizatriptan`,
    brand: `Maxalt`,
    form: `Oral disintegrating tablet`,
    drugClass: `5-HT1B/1D agonist (triptan)`,
    dose: `10 mg ODT at onset; may repeat after 2h`,
    price: `$14–$233`,
    priceUrl: `https://www.goodrx.com/rizatriptan`,
    priceLabel: `GoodRx`,
    sideEffects: `Drowsiness, dizziness; same CV cautions`,
  },
  {
    generic: `Propranolol`,
    brand: `Inderal`,
    form: `Oral tablet`,
    drugClass: `Non-selective beta-blocker`,
    dose: `40 mg BID, titrate to 80–160 mg/day`,
    price: `$6–$28`,
    priceUrl: `https://www.goodrx.com/propranolol`,
    priceLabel: `GoodRx`,
    sideEffects: `Fatigue, bradycardia, sexual dysfunction; avoid in asthma`,
  },
  {
    generic: `Topiramate`,
    brand: `Topamax`,
    form: `Oral tablet`,
    drugClass: `Antiepileptic`,
    dose: `25 mg daily, titrate to 100 mg/day in divided doses`,
    price: `$9–$38`,
    priceUrl: `https://www.goodrx.com/topiramate`,
    priceLabel: `GoodRx`,
    sideEffects: `Cognitive slowing, paresthesia, weight loss, kidney stones`,
  },
  {
    generic: `Amitriptyline`,
    brand: `Elavil`,
    form: `Oral tablet`,
    drugClass: `Tricyclic antidepressant`,
    dose: `10–50 mg at bedtime`,
    price: `$4–$11`,
    priceUrl: `https://www.goodrx.com/amitriptyline`,
    priceLabel: `GoodRx`,
    sideEffects: `Sedation, anticholinergic, weight gain`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Can a telehealth doctor prescribe sumatriptan?`,
    answerPlain: `Yes — sumatriptan and other triptans are non-controlled medications. Dr. Bhavsar can prescribe them after a focused history and screen for cardiovascular contraindications. Same-day prescription typical.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — sumatriptan and other triptans are non-controlled medications. Dr. Bhavsar can prescribe them after a focused history and screen for cardiovascular contraindications. Same-day prescription typical.` }} />
    ),
  },
  {
    question: `How fast do triptans work?`,
    answerPlain: `50–60% of patients have significant relief within 2 hours of oral sumatriptan. Subcutaneous sumatriptan works within 10 minutes; nasal forms within 15–30 minutes. Take at headache onset for best effect — not during aura, not when severe.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `50–60% of patients have significant relief within 2 hours of oral sumatriptan. Subcutaneous sumatriptan works within 10 minutes; nasal forms within 15–30 minutes. Take at headache onset for best effect — not during aura, not when severe.` }} />
    ),
  },
  {
    question: `Can I take a triptan if I also have an SSRI?`,
    answerPlain: `Yes, in most cases. The serotonin syndrome risk from triptan + SSRI/SNRI combinations is very low at usual doses. American Headache Society and FDA reviews support continued combined use; we just monitor for symptoms.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes, in most cases. The serotonin syndrome risk from triptan + SSRI/SNRI combinations is very low at usual doses. American Headache Society and FDA reviews support continued combined use; we just monitor for symptoms.` }} />
    ),
  },
  {
    question: `How often can I take a triptan?`,
    answerPlain: `Maximum 9–10 days of triptan use per month to avoid medication-overuse headache. If you're using triptans more often, you need a preventive medication. We can prescribe one alongside the triptan.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Maximum 9–10 days of triptan use per month to avoid medication-overuse headache. If you're using triptans more often, you need a preventive medication. We can prescribe one alongside the triptan.` }} />
    ),
  },
  {
    question: `What\'s the difference between migraine and tension headache?`,
    answerPlain: `Migraine: unilateral throbbing pulsating, moderate-severe, with nausea/photophobia/phonophobia, worse with activity. Tension: bilateral pressing band-like, mild-moderate, no nausea or photophobia. Treatment differs significantly — that's why diagnosis matters.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Migraine: unilateral throbbing pulsating, moderate-severe, with nausea/photophobia/phonophobia, worse with activity. Tension: bilateral pressing band-like, mild-moderate, no nausea or photophobia. Treatment differs significantly — that's why diagnosis matters.` }} />
    ),
  },
  {
    question: `Should I get an MRI for my migraines?`,
    answerPlain: `Routine imaging is NOT recommended for typical recurrent migraine that meets diagnostic criteria. American Headache Society explicitly says imaging is unnecessary for stable migraine pattern. Imaging is reserved for atypical features or red flags.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Routine imaging is NOT recommended for typical recurrent migraine that meets diagnostic criteria. American Headache Society explicitly says imaging is unnecessary for stable migraine pattern. Imaging is reserved for atypical features or red flags.` }} />
    ),
  },
  {
    question: `What are common migraine triggers?`,
    answerPlain: `Top triggers: stress, sleep changes (too little or too much), skipped meals, dehydration, hormonal changes (menstruation), specific foods (red wine, aged cheese, processed meats), bright lights, weather changes, strong smells. A diary identifies your specific pattern.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Top triggers: stress, sleep changes (too little or too much), skipped meals, dehydration, hormonal changes (menstruation), specific foods (red wine, aged cheese, processed meats), bright lights, weather changes, strong smells. A diary identifies your specific pattern.` }} />
    ),
  },
  {
    question: `Is migraine with aura a stroke risk?`,
    answerPlain: `Yes — migraine with aura roughly doubles stroke risk overall (still low absolute risk). Combined with smoking and combined hormonal contraceptives, the relative risk increases significantly. We screen for these and adjust contraception if needed.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — migraine with aura roughly doubles stroke risk overall (still low absolute risk). Combined with smoking and combined hormonal contraceptives, the relative risk increases significantly. We screen for these and adjust contraception if needed.` }} />
    ),
  },
  {
    question: `Can hormonal birth control trigger migraines?`,
    answerPlain: `For women with migraine with aura, combined hormonal contraceptives (pill, patch, ring) increase stroke risk significantly (CDC MEC Category 4 — avoid). Progestin-only pill, IUD, or non-hormonal options are safer alternatives.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `For women with migraine with aura, combined hormonal contraceptives (pill, patch, ring) increase stroke risk significantly (CDC MEC Category 4 — avoid). Progestin-only pill, IUD, or non-hormonal options are safer alternatives.` }} />
    ),
  },
  {
    question: `What about CGRP antagonists like Aimovig or Nurtec?`,
    answerPlain: `CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab) and oral CGRP antagonists (atogepant, rimegepant) are highly effective for prevention and abortive use. They're typically prescribed after trying generic preventives or by specialists; insurance often requires step-therapy.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab) and oral CGRP antagonists (atogepant, rimegepant) are highly effective for prevention and abortive use. They're typically prescribed after trying generic preventives or by specialists; insurance often requires step-therapy.` }} />
    ),
  },
  {
    question: `Can chronic migraine be cured?`,
    answerPlain: `Migraine cannot be "cured" but can be effectively managed. With abortive + preventive + lifestyle approach, many patients reduce attacks by 70%+ and return to normal function. Some achieve long-term remission.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Migraine cannot be "cured" but can be effectively managed. With abortive + preventive + lifestyle approach, many patients reduce attacks by 70%+ and return to normal function. Some achieve long-term remission.` }} />
    ),
  },
  {
    question: `What if I\'m pregnant?`,
    answerPlain: `Pregnancy changes migraine treatment. Acetaminophen is first-line; avoid NSAIDs after 20 weeks. Triptans are generally avoided though sumatriptan has the most data. Preventives: propranolol or magnesium are options. We work with your OB.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Pregnancy changes migraine treatment. Acetaminophen is first-line; avoid NSAIDs after 20 weeks. Triptans are generally avoided though sumatriptan has the most data. Preventives: propranolol or magnesium are options. We work with your OB.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/migraine-refills-online/', label: 'Migraine Refills Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/asthma-refills-online/', label: 'Asthma Inhaler Refills Online' },
  { slug: '/acid-reflux-refills-online/', label: 'Acid Reflux Refills Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Throbbing one-sided headache with light sensitivity? Most migraines respond to triptans. $79 telehealth visit, sumatriptan or rizatriptan prescription same day in 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Migraine',
      alternateName: ['Migraine Headache', 'Vascular Headache', 'Hemicrania'],
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
    name: `How to Get Migraine Treatment Online`,
    description: `Three steps to receive migraine evaluation and triptan or preventive prescription from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select migraine on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/migraine/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews headache pattern, frequency, aura, disability, and current medication use.`, url: `https://teledirectmd.com/symptoms/migraine/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your prescription`, text: `Triptan, CGRP antagonist, or preventive medication prescribed and sent to your pharmacy same day.`, url: `https://teledirectmd.com/symptoms/migraine/` }
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
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Migraine Headache — Same-Day Triptan or Preventive Rx` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Migraine — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Migraine is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> G43.909 — Migraine, unspecified, not intractable, without status migrainosus (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Migraine Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Migraine is a neurological disorder characterized by recurrent moderate-to-severe unilateral headache with associated nausea, photophobia, and phonophobia, often with an aura phase. Triptans (sumatriptan, rizatriptan) are first-line abortive therapy per AHS/AAN guidelines; CGRP antagonists (rimegepant, ubrogepant) are newer options. TeleDirectMD evaluates migraine pattern, prescribes acute or preventive therapy for $79, and refers complex cases to neurology.` }} />
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
            <h2>Migraine Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adults 18+ in our 41 states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Established migraine pattern or first attack with classic features` }} />
              <li dangerouslySetInnerHTML={{ __html: `No red flag features` }} />
              <li dangerouslySetInnerHTML={{ __html: `Want triptan PRN or preventive prescription` }} />
              <li dangerouslySetInnerHTML={{ __html: `Established patient needing refill` }} />
              <li dangerouslySetInnerHTML={{ __html: `Frequent attacks (&gt;4/month) wanting preventive plan` }} />
              <li dangerouslySetInnerHTML={{ __html: `No cardiovascular contraindications to triptans` }} />
              <li dangerouslySetInnerHTML={{ __html: `Not pregnant (or seeking pregnancy-safe options)` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Sudden thunderclap headache — ER now` }} />
              <li dangerouslySetInnerHTML={{ __html: `New headache after age 50 — needs in-person workup` }} />
              <li dangerouslySetInnerHTML={{ __html: `Headache with focal deficit — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Headache with fever and neck stiffness — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe coronary artery disease (triptan contraindicated)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recent stroke or TIA (triptan contraindicated)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Hemiplegic or basilar migraine (triptan contraindicated; specialist)` }} />
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
            <h2>How Migraine Treatment Works Online</h2>
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
            <h2>What Causes Migraine? Differential Diagnosis</h2>
            <p>Not all migraine is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Migraine differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Migraine without aura` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Recurrent throbbing headache meeting ICHD-3 criteria.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~9% of US adults` }} />
                <td dangerouslySetInnerHTML={{ __html: `Unilateral pulsating, photophobia, nausea, moderate-severe, 4–72 hours` }} />
                <td dangerouslySetInnerHTML={{ __html: `Triptan PRN; preventive if ≥4 attacks/month or disabling` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Migraine with aura` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Migraine preceded by reversible focal neuro symptoms.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~3% of US adults` }} />
                <td dangerouslySetInnerHTML={{ __html: `Visual zigzags or scintillations 20–60 min before headache; reversible` }} />
                <td dangerouslySetInnerHTML={{ __html: `Triptan; avoid combined hormonal contraceptives if aura` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Tension-type headache` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Bilateral pressing band-like headache.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Most common headache type` }} />
                <td dangerouslySetInnerHTML={{ __html: `Bilateral, pressing, mild-moderate, no nausea, no photophobia/phonophobia` }} />
                <td dangerouslySetInnerHTML={{ __html: `NSAIDs PRN; lifestyle (sleep, hydration); preventive amitriptyline if frequent` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Cluster headache` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Severe unilateral periorbital pain in attacks.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Rare but distinct` }} />
                <td dangerouslySetInnerHTML={{ __html: `Excruciating one-sided eye pain, tearing, nasal congestion, restlessness, lasts 15 min–3 hr` }} />
                <td dangerouslySetInnerHTML={{ __html: `100% O2 for abortive; verapamil prevention; specialist referral` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Medication-overuse headache` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Daily headache from analgesic overuse.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Affects ~1–2% adults` }} />
                <td dangerouslySetInnerHTML={{ __html: `Headache ≥15 days/month, frequent NSAID/triptan/opioid use` }} />
                <td dangerouslySetInnerHTML={{ __html: `Withdrawal of overused med; preventive therapy; specialist help` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Migraine Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Migraine cost comparison">
                <h3>Typical Migraine Visit Cost</h3>
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
            <h2>Migraine Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for migraine. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Migraine medication options">
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
                <td><strong>Sumatriptan</strong> <span className="tdmd-sym__med-brand">(Imitrex)</span></td>
                <td>Oral tablet / nasal / SC</td>
                <td>5-HT1B/1D agonist (triptan)</td>
                <td dangerouslySetInnerHTML={{ __html: `50–100 mg PO at onset; may repeat after 2h` }} />
                <td><a href="https://www.goodrx.com/sumatriptan" target="_blank" rel="noopener">$6–$12</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Chest tightness, flushing, paresthesia; avoid in CAD/uncontrolled HTN` }} />
              </tr>
              <tr>
                <td><strong>Rizatriptan</strong> <span className="tdmd-sym__med-brand">(Maxalt)</span></td>
                <td>Oral disintegrating tablet</td>
                <td>5-HT1B/1D agonist (triptan)</td>
                <td dangerouslySetInnerHTML={{ __html: `10 mg ODT at onset; may repeat after 2h` }} />
                <td><a href="https://www.goodrx.com/rizatriptan" target="_blank" rel="noopener">$14–$233</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Drowsiness, dizziness; same CV cautions` }} />
              </tr>
              <tr>
                <td><strong>Propranolol</strong> <span className="tdmd-sym__med-brand">(Inderal)</span></td>
                <td>Oral tablet</td>
                <td>Non-selective beta-blocker</td>
                <td dangerouslySetInnerHTML={{ __html: `40 mg BID, titrate to 80–160 mg/day` }} />
                <td><a href="https://www.goodrx.com/propranolol" target="_blank" rel="noopener">$6–$28</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Fatigue, bradycardia, sexual dysfunction; avoid in asthma` }} />
              </tr>
              <tr>
                <td><strong>Topiramate</strong> <span className="tdmd-sym__med-brand">(Topamax)</span></td>
                <td>Oral tablet</td>
                <td>Antiepileptic</td>
                <td dangerouslySetInnerHTML={{ __html: `25 mg daily, titrate to 100 mg/day in divided doses` }} />
                <td><a href="https://www.goodrx.com/topiramate" target="_blank" rel="noopener">$9–$38</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Cognitive slowing, paresthesia, weight loss, kidney stones` }} />
              </tr>
              <tr>
                <td><strong>Amitriptyline</strong> <span className="tdmd-sym__med-brand">(Elavil)</span></td>
                <td>Oral tablet</td>
                <td>Tricyclic antidepressant</td>
                <td dangerouslySetInnerHTML={{ __html: `10–50 mg at bedtime` }} />
                <td><a href="https://www.goodrx.com/amitriptyline" target="_blank" rel="noopener">$4–$11</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Sedation, anticholinergic, weight gain` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Sudden "thunderclap" onset</strong> (worst headache of life, peaks in seconds) — possible SAH; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>New-onset headache after age 50</strong> — possible GCA, tumor` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Headache with fever and neck stiffness</strong> — possible meningitis; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Focal neurologic deficit not resolving</strong> — possible stroke/TIA` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Confusion, seizure, or syncope</strong> with headache — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Progressively worsening headache over weeks</strong> — needs imaging` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Headache after head trauma</strong> — needs evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Pregnancy with new severe headache</strong> — rule out preeclampsia` }} />
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
            <h2>What to Expect: Migraine Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Migraine recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Hour 0 (attack onset)</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Take triptan as soon as headache begins (not aura). NSAID can be combined for added benefit. Antiemetic if nausea.` }} />
              </tr>
              <tr>
                <td><strong>Hour 1–2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `50–60% of patients have significant relief by 2 hours with triptan.` }} />
              </tr>
              <tr>
                <td><strong>Hour 2 (if needed)</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `May repeat triptan once if headache persists. If still no relief, the episode may need rescue (NSAID + antiemetic).` }} />
              </tr>
              <tr>
                <td><strong>Day 1–2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Postdrome phase — fatigue, mental fog, neck stiffness — common and self-resolving.` }} />
              </tr>
              <tr>
                <td><strong>Long-term</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `With effective abortive + lifestyle changes, expect 50%+ reduction in attack burden. Preventive medication adds another 50% reduction in frequency.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Migraine</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Maintain consistent sleep schedule (same bedtime/wake every day)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Hydrate — aim for 2+ liters water daily` }} />
              <li dangerouslySetInnerHTML={{ __html: `Eat regular meals — skipping meals is a top trigger` }} />
              <li dangerouslySetInnerHTML={{ __html: `Limit caffeine to ≤200 mg daily (and consistent — withdrawal triggers migraine)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Limit alcohol; identify your specific triggers (red wine common)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Track migraines in a diary (app or paper) — identifies patterns` }} />
              <li dangerouslySetInnerHTML={{ __html: `Manage stress with daily relaxation (10 min meditation, deep breathing)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cool compress on forehead and dark quiet room during attack` }} />
              <li dangerouslySetInnerHTML={{ __html: `Regular aerobic exercise 150 min/week reduces frequency` }} />
              <li dangerouslySetInnerHTML={{ __html: `Consider magnesium 400 mg + riboflavin 400 mg + CoQ10 100 mg daily (modest evidence)` }} />
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
              sectionTitle={`Frequently Asked Questions — Migraine`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your migraine visit.</p>
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
              <li><a href="https://headachejournal.onlinelibrary.wiley.com/doi/10.1111/head.13204" rel="noopener" target="_blank">AHS/AAN — Pharmacological Treatment for Episodic Migraine Prevention</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2018/1215/p737.html" rel="noopener" target="_blank">AAFP — Acute Migraine Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/dotw/migraine/index.html" rel="noopener" target="_blank">CDC — Migraine Overview</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sumatriptan" rel="noopener" target="_blank">FDA DailyMed — Sumatriptan</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/sumatriptan" rel="noopener" target="_blank">GoodRx — Sumatriptan Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Neurology Resources</a>. Retrieved May 23, 2026.</li>
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
