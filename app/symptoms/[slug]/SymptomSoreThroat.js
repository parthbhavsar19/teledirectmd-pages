/**
 * SymptomSoreThroat.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Sore Throat That Won't Go Away
 * Slug:    /symptoms/sore-throat/
 * ICD-10:  J02.9 — Acute pharyngitis, unspecified
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/sore-throat/';
const PAGE_TITLE = `Sore Throat That Won't Go Away — Causes, When It's Strep | TeleDirectMD`;
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
    generic: `amoxicillin`,
    brand: `Amoxil`,
    form: `oral capsule, suspension`,
    drugClass: `aminopenicillin antibiotic`,
    dose: `500 mg PO BID × 10 days`,
    price: `$5–$21`,
    priceUrl: `https://www.goodrx.com/amoxicillin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, rash; rash develops in mononucleosis.`,
  },
  {
    generic: `penicillin V potassium`,
    brand: `Veetids`,
    form: `oral tablet, suspension`,
    drugClass: `penicillin antibiotic`,
    dose: `500 mg PO BID × 10 days`,
    price: `$2–$26`,
    priceUrl: `https://www.goodrx.com/penicillin-v-potassium`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, allergic reaction.`,
  },
  {
    generic: `cephalexin`,
    brand: `Keflex`,
    form: `oral capsule, suspension`,
    drugClass: `first-generation cephalosporin`,
    dose: `500 mg PO BID × 10 days`,
    price: `$8–$37`,
    priceUrl: `https://www.goodrx.com/cephalexin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, rash; cross-reactivity with penicillin allergy is low (~2%).`,
  },
  {
    generic: `azithromycin`,
    brand: `Zithromax (Z-Pak)`,
    form: `oral tablet`,
    drugClass: `macrolide antibiotic`,
    dose: `500 mg day 1, then 250 mg daily × 4 days`,
    price: `$6–$35`,
    priceUrl: `https://www.goodrx.com/azithromycin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, QT prolongation; rising macrolide resistance in GAS.`,
  },
  {
    generic: `ibuprofen`,
    brand: `Advil, Motrin`,
    form: `oral tablet`,
    drugClass: `NSAID`,
    dose: `400 mg PO every 6h PRN`,
    price: `$2–$13`,
    priceUrl: `https://www.goodrx.com/ibuprofen`,
    priceLabel: `GoodRx`,
    sideEffects: `GI upset, kidney effects with long-term use; avoid in CKD or peptic ulcer.`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `What could be causing my sore throat that won't go away?`,
    answerPlain: `A persistent sore throat can be caused by viral pharyngitis (the most common cause, ~85% of cases), Group A streptococcal (strep) infection, infectious mononucleosis (EBV), post-nasal drip from allergies or sinusitis, or gastroesophageal reflux (GERD-related laryngitis). Less commonly, a peritonsillar abscess, epiglottitis, or — rarely — a malignancy can present with persistent throat symptoms. A physician evaluation helps determine which cause is most likely based on your specific symptom pattern.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A persistent sore throat can be caused by viral pharyngitis (the most common cause, ~85% of cases), Group A streptococcal (strep) infection, infectious mononucleosis (EBV), post-nasal drip from allergies or sinusitis, or gastroesophageal reflux (GERD-related laryngitis). Less commonly, a peritonsillar abscess, epiglottitis, or — rarely — a malignancy can present with persistent throat symptoms. A physician evaluation helps determine which cause is most likely based on your specific symptom pattern.` }} />
    ),
  },
  {
    question: `When should I see a doctor for a sore throat?`,
    answerPlain: `See a physician if your sore throat lasts longer than 7 days, you have fever above 101°F, you notice white patches or exudate on the tonsils, you have tender swollen lymph nodes in the neck, or swallowing is painful. Per IDSA guidelines, these features raise the probability of strep infection and warrant clinical evaluation. A $79 TeleDirectMD video evaluation is appropriate for adults in California with these symptoms who do not have emergency features.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a physician if your sore throat lasts longer than 7 days, you have fever above 101°F, you notice white patches or exudate on the tonsils, you have tender swollen lymph nodes in the neck, or swallowing is painful. Per IDSA guidelines, these features raise the probability of strep infection and warrant clinical evaluation. A $79 TeleDirectMD video evaluation is appropriate for adults in California with these symptoms who do not have emergency features.` }} />
    ),
  },
  {
    question: `When is a sore throat an emergency?`,
    answerPlain: `Call 911 or go to the ER immediately if you have drooling or inability to swallow your own saliva, stridor (noisy high-pitched breathing), a muffled or "hot potato" voice, severe one-sided throat swelling with uvula deviation, inability to open your mouth fully, or neck stiffness with high fever. These features suggest peritonsillar abscess, epiglottitis, or Ludwig's angina — all require emergency in-person care.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Call 911 or go to the ER immediately if you have drooling or inability to swallow your own saliva, stridor (noisy high-pitched breathing), a muffled or "hot potato" voice, severe one-sided throat swelling with uvula deviation, inability to open your mouth fully, or neck stiffness with high fever. These features suggest peritonsillar abscess, epiglottitis, or Ludwig's angina — all require emergency in-person care.` }} />
    ),
  },
  {
    question: `How long is too long to have a sore throat before seeing a doctor?`,
    answerPlain: `Most viral sore throats resolve within 7–10 days without treatment per CDC guidance. A sore throat lasting longer than 7 days, or one that worsens after initial improvement, warrants evaluation regardless of other symptoms. New severe sore throat in an immunocompromised adult or a patient aged &gt;65 should be evaluated promptly even if duration is short.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most viral sore throats resolve within 7–10 days without treatment per CDC guidance. A sore throat lasting longer than 7 days, or one that worsens after initial improvement, warrants evaluation regardless of other symptoms. New severe sore throat in an immunocompromised adult or a patient aged &gt;65 should be evaluated promptly even if duration is short.` }} />
    ),
  },
  {
    question: `Can a virtual doctor evaluate a sore throat?`,
    answerPlain: `Yes — for most adult sore throat presentations without emergency features, a telehealth video evaluation is appropriate and effective. A physician uses the Centor/McIsaac clinical decision criteria (fever, exudate, lymph node tenderness, absence of cough) to assess strep probability. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for pharyngitis. TeleDirectMD provides $79 California evaluations for adults 18+.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — for most adult sore throat presentations without emergency features, a telehealth video evaluation is appropriate and effective. A physician uses the Centor/McIsaac clinical decision criteria (fever, exudate, lymph node tenderness, absence of cough) to assess strep probability. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for pharyngitis. TeleDirectMD provides $79 California evaluations for adults 18+.` }} />
    ),
  },
  {
    question: `What will the doctor do for a sore throat at TeleDirectMD?`,
    answerPlain: `The physician takes a structured history and applies Centor/McIsaac criteria to assess strep probability. For high-probability strep, a physician may prescribe amoxicillin or penicillin V per IDSA first-line guidelines. For low-probability strep or viral pharyngitis, supportive care guidance is provided. If features of mononucleosis are present, lab referral is arranged. This is a physician evaluation — not a predetermined treatment plan. If your doctor diagnoses strep throat, our sore throat treatment page explains full antibiotic treatment details.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The physician takes a structured history and applies Centor/McIsaac criteria to assess strep probability. For high-probability strep, a physician may prescribe amoxicillin or penicillin V per IDSA first-line guidelines. For low-probability strep or viral pharyngitis, supportive care guidance is provided. If features of mononucleosis are present, lab referral is arranged. This is a physician evaluation — not a predetermined treatment plan. If your doctor diagnoses strep throat, our <a href="/sore-throat-treatment-online/">sore throat treatment page</a> explains full antibiotic treatment details.` }} />
    ),
  },
  {
    question: `Will I get a prescription if I have a sore throat?`,
    answerPlain: `A prescription is not guaranteed — it depends on the clinical evaluation. Per IDSA guidelines, antibiotics are appropriate only when strep infection is likely (Centor score 3–4) or confirmed. Viral pharyngitis (the cause in ~85% of adult cases) does not benefit from antibiotics and a prescription will not be written. Prescribing antibiotics when not indicated causes harm through resistance and side effects.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A prescription is not guaranteed — it depends on the clinical evaluation. Per IDSA guidelines, antibiotics are appropriate only when strep infection is likely (Centor score 3–4) or confirmed. Viral pharyngitis (the cause in ~85% of adult cases) does not benefit from antibiotics and a prescription will not be written. Prescribing antibiotics when not indicated causes harm through resistance and side effects.` }} />
    ),
  },
  {
    question: `Is a sore throat something I can manage at home?`,
    answerPlain: `Mild sore throat without fever, exudate, or swollen lymph nodes can often be managed at home for 48–72 hours with salt-water gargles (1/2 tsp salt in 8 oz warm water 3–4 times daily), ibuprofen or acetaminophen on a scheduled basis, throat lozenges, cool fluids, and rest. Per CDC guidance, most viral pharyngitis resolves in 7–10 days with supportive care alone. Seek evaluation if symptoms worsen or persist beyond 7 days.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Mild sore throat without fever, exudate, or swollen lymph nodes can often be managed at home for 48–72 hours with salt-water gargles (1/2 tsp salt in 8 oz warm water 3–4 times daily), ibuprofen or acetaminophen on a scheduled basis, throat lozenges, cool fluids, and rest. Per CDC guidance, most viral pharyngitis resolves in 7–10 days with supportive care alone. Seek evaluation if symptoms worsen or persist beyond 7 days.` }} />
    ),
  },
  {
    question: `Does insurance cover a TeleDirectMD visit for sore throat?`,
    answerPlain: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription antibiotic costs are separate; amoxicillin is typically $5–$21 at GoodRx pricing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription antibiotic costs are separate; amoxicillin is typically $5–$21 at GoodRx pricing.` }} />
    ),
  },
  {
    question: `How fast can I be seen for a sore throat?`,
    answerPlain: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.` }} />
    ),
  },
  {
    question: `What if I need an in-person visit for my sore throat?`,
    answerPlain: `If emergency features are identified during the evaluation — drooling, stridor, muffled voice, severe one-sided swelling, or inability to open the mouth — you will be directed to the ER. For suspected peritonsillar abscess requiring drainage, or recurrent strep warranting ENT evaluation, you will be referred at no additional charge with clear instructions.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If emergency features are identified during the evaluation — drooling, stridor, muffled voice, severe one-sided swelling, or inability to open the mouth — you will be directed to the ER. For suspected peritonsillar abscess requiring drainage, or recurrent strep warranting ENT evaluation, you will be referred at no additional charge with clear instructions.` }} />
    ),
  },
  {
    question: `How is a sore throat different from mono or a peritonsillar abscess?`,
    answerPlain: `Viral pharyngitis and strep throat both cause throat pain and may include fever and swollen lymph nodes, but they typically present symmetrically and resolve within 1–2 weeks. Mononucleosis (EBV) causes severe fatigue, posterior cervical lymphadenopathy, and throat symptoms lasting 2–4 weeks, most commonly in adults aged 15–25. A peritonsillar abscess causes severe one-sided throat pain, muffled voice, trismus, and uvula deviation — it is a surgical emergency requiring in-person drainage, not telehealth.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Viral pharyngitis and strep throat both cause throat pain and may include fever and swollen lymph nodes, but they typically present symmetrically and resolve within 1–2 weeks. Mononucleosis (EBV) causes severe fatigue, posterior cervical lymphadenopathy, and throat symptoms lasting 2–4 weeks, most commonly in adults aged 15–25. A peritonsillar abscess causes severe one-sided throat pain, muffled voice, trismus, and uvula deviation — it is a surgical emergency requiring in-person drainage, not telehealth.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/ear-pain-treatment-online/', label: 'Ear Pain Treatment Online' },
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
    description: `Sore throat lasting 5+ days is often viral pharyngitis, strep, mononucleosis, or postnasal drip. $79 California video evaluation by board-certified Family Medicine physician.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Acute Pharyngitis (Sore Throat)',
      alternateName: ['Pharyngitis', 'Acute Pharyngitis', 'Throat Pain'],
      code: { '@type': 'MedicalCode', code: 'J02.9', codingSystem: 'ICD-10-CM' },
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
        '#sym-sore-throat-opening',
        '#sym-sore-throat-opening p',
        '.tdmd-sym__byline',
        '#sym-sore-throat-faq',
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
    name: `How to Get a Sore Throat Evaluation Online`,
    description: `Three steps to receive a physician evaluation for sore throat symptoms from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select sore throat on teledirectmd.com. Self pay $79. No referral needed. Same-day visits often available for California adults.`, url: `https://teledirectmd.com/symptoms/sore-throat/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews throat appearance, fever, lymph nodes, and Centor criteria to distinguish strep from viral causes. Emergency features result in ER referral.`, url: `https://teledirectmd.com/symptoms/sore-throat/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your evaluation results and plan`, text: `Antibiotic prescribed if strep evaluation is positive, or supportive care guidance if viral etiology is more probable. Referral if indicated.`, url: `https://teledirectmd.com/symptoms/sore-throat/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Sore Throat That Won't Go Away`, item: PAGE_URL },
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
export default function SymptomSoreThroat() {
  const schemas = buildSchemas();
  const pid = 'sym-sore-throat';

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
            <span aria-current="page">Sore Throat That Won't Go Away</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Sore Throat That Won't Go Away — What Might Be Causing It?` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Throat pain persisting beyond a few days? A $79 California video evaluation can help identify whether it could be strep, viral, mono, or something else — and when to see a doctor.
                </p>
                <p>
                  A sore throat that lingers or keeps getting worse can have several different causes. Most cases in adults are viral and self-limiting, but some — including strep throat, mononucleosis, or a peritonsillar abscess — require specific evaluation and treatment. TeleDirectMD provides same-day physician evaluation for California adults experiencing persistent sore throat via secure video visit. Self-pay is $79 with no insurance required.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J02.9 — Acute pharyngitis, unspecified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>What a TeleDirectMD Evaluation Includes</h2>
                  <ul>
                    <li>Centor/McIsaac strep probability assessment</li>
                    <li>Emergency feature screening</li>
                    <li>Differential assessment of possible causes</li>
                    <li>e-Prescription to your pharmacy if appropriate</li>
                    <li>Clear follow-up instructions</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. If you have drooling, stridor, a muffled voice, or severe one-sided throat swelling, seek emergency care immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `When should you see a doctor for a sore throat that won't go away? A physician evaluation is appropriate if throat pain persists beyond 7 days, is accompanied by fever above 101°F, white patches on the tonsils, or tender neck lymph nodes — all features that raise the probability of strep throat or another treatable cause. Approximately 85–90% of adult sore throats are viral and self-limiting, but Group A Streptococcus (10–15% of cases), mononucleosis, or a post-nasal drip condition could be the cause. TeleDirectMD provides $79 same-day California video evaluation for adults experiencing persistent sore throat, with a board-certified Family Medicine physician applying IDSA clinical decision criteria to guide next steps.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; see the medication table below for GoodRx estimates. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow clinical guidelines from the CDC, AAFP, and IDSA. Every visit includes red-flag screening, a structured symptom history, and clear follow-up instructions.
            </p>
          </div>
        </section>

        {/* ─── 3) WHAT MIGHT BE CAUSING THIS ──────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-causes`}>
          <div className="tdmd-container">
            <h2>What Might Be Causing a Sore Throat That Won't Go Away?</h2>
            <p>A physician would evaluate for the following causes based on your symptom pattern, duration, fever, and associated findings:</p>

            <h3>Common and usually self-limiting</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Viral pharyngitis:</strong> The most common cause of sore throat in adults (approximately 85–90% of cases), caused by rhinovirus, adenovirus, influenza, coronavirus, or SARS-CoV-2. Typically presents with cough, runny nose, and mild-to-moderate throat pain without exudate. Resolves in 7–10 days without antibiotics per CDC guidance. Antibiotics are not indicated.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Post-nasal drip / allergic pharyngitis:</strong> Mucus dripping down the back of the throat from allergies or sinusitis can cause chronic low-grade sore throat and throat-clearing. A physician would evaluate for this when sore throat is persistent, low-grade, and associated with nasal congestion or morning hoarseness without fever.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Dry air / environmental irritants:</strong> Cold dry air, smoke, or vocal overuse can irritate the throat. This cause is typically mild and responds to humidification and fluids.` }} />
            </ul>

            <h3>Common and requiring evaluation or treatment</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Group A streptococcal (strep) pharyngitis:</strong> Bacterial sore throat caused by Group A Streptococcus, occurring in approximately 10–15% of adult sore throat cases. A physician would evaluate for strep using Centor/McIsaac criteria: fever, tonsillar exudate, tender anterior lymph nodes, and absence of cough. Per IDSA guidelines, high-probability cases warrant antibiotic treatment with amoxicillin or penicillin V to prevent complications. If your doctor diagnoses strep throat, our <a href="/sore-throat-treatment-online/">sore throat treatment page</a> explains antibiotic options and what to expect.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>GERD-related laryngitis / reflux pharyngitis:</strong> Acid reflux can cause chronic sore throat, morning hoarseness, and throat clearing without fever. A physician would consider this when sore throat is persistent without other infection features and is associated with heartburn, sour taste, or worsening after meals.` }} />
            </ul>

            <h3>Less common but requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Infectious mononucleosis (EBV):</strong> Severe viral pharyngitis with marked fatigue, posterior cervical lymphadenopathy, and prolonged throat symptoms (2–4 weeks). Most common in adults aged 15–25. A physician would evaluate for mono when fatigue is prominent, posterior neck lymph nodes are enlarged, and symptoms have lasted more than 10 days. Lab referral for monospot or EBV serology is appropriate.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Peritonsillar abscess:</strong> A pus collection between the tonsil and the pharyngeal muscle — a surgical emergency. Features include severe one-sided throat pain, muffled "hot potato" voice, trismus (limited mouth opening), and uvula deviation. This requires immediate ER evaluation and in-person drainage, not telehealth.` }} />
            </ul>

            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Not sure what is causing your sore throat? Book a $79 evaluation</p>
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
              <li dangerouslySetInnerHTML={{ __html: `<strong>Drooling or inability to swallow your own saliva</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Stridor (high-pitched noisy breathing when inhaling)</strong> — possible epiglottitis; call 911` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Muffled "hot potato" voice with severe one-sided throat swelling</strong> — possible peritonsillar abscess; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Trismus — inability to open your mouth more than 2 fingers wide</strong> — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Uvula deviation to one side</strong> — possible peritonsillar abscess; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>High fever (&gt;103°F) with severe neck stiffness</strong> — rule out meningitis; ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Tongue or facial swelling</strong> — possible angioedema or Ludwig's angina; call 911` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Inability to keep down liquids</strong> — dehydration risk; ER or urgent care` }} />
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
            <p>For mild sore throat without fever, exudate, or swollen lymph nodes, evidence-based home measures are appropriate to try for 48–72 hours before seeking a physician evaluation. Per CDC guidance:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Salt-water gargles</strong> — 1/2 teaspoon table salt dissolved in 8 oz warm water, gargled 3–4 times daily. Reduces throat pain and helps remove debris and irritants.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Ibuprofen or acetaminophen on a scheduled basis</strong> — for the first 48 hours, take on a schedule rather than waiting for peak pain. Ibuprofen 400 mg every 6 hours with food; acetaminophen 500–1000 mg every 6 hours.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Throat lozenges with menthol or benzocaine</strong> — provide temporary local anesthesia and symptom relief.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Hydration with cool or warm fluids</strong> — both temperatures can soothe. Popsicles, broth, and herbal teas help. Avoid alcohol.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Cool-mist humidifier</strong> — helps with dry environments that worsen throat irritation.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Rest voice</strong> — limit talking and avoid whispering (which strains the vocal cords more than speaking at normal volume).` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Honey (1–2 teaspoons or in tea)</strong> — small-trial evidence from Cochrane review suggests modest soothing effect. Do not give honey to children under 1 year of age.` }} />
            </ul>
            <p>If these measures do not improve your sore throat within 48–72 hours, or if fever develops or worsens, seek physician evaluation promptly.</p>
          </div>
        </section>

        {/* ─── 6) WHEN TO BOOK A VISIT ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-when-to-book`}>
          <div className="tdmd-container">
            <h2>When to Book a TeleDirectMD Visit</h2>
            <p>A $79 California video evaluation is appropriate for sore throat when:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Symptoms persist &gt;7 days or worsen after initial improvement` }} />
              <li dangerouslySetInnerHTML={{ __html: `Fever above 101°F develops or persists beyond 24 hours` }} />
              <li dangerouslySetInnerHTML={{ __html: `White patches or exudate visible on the tonsils` }} />
              <li dangerouslySetInnerHTML={{ __html: `Tender lymph nodes palpable in the front of the neck` }} />
              <li dangerouslySetInnerHTML={{ __html: `You have risk factors: immunocompromised, age &gt;65, pregnancy, or diabetes` }} />
              <li dangerouslySetInnerHTML={{ __html: `Prior history of strep throat and classic features are present` }} />
              <li dangerouslySetInnerHTML={{ __html: `You need a prescription sent to your pharmacy without leaving home` }} />
            </ul>
            <p>
              TeleDirectMD accepts Aetna, UnitedHealthcare, and Blue Cross Blue Shield commercial plans. Self-pay is $79 flat — no subscription, no hidden fees. California telehealth visits are authorized under Business and Professions Code 2290.5.
            </p>
            <h3>What Happens in a TeleDirectMD Evaluation</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Book your visit</strong> at book.teledirectmd.com — select a same-day or next-day time slot. No referral required.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>15-minute secure video visit</strong> with a board-certified Family Medicine physician. The doctor assesses Centor/McIsaac criteria, screens for emergency features, and reviews your symptom history.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Evaluation results and plan:</strong> If strep throat is the most likely diagnosis, a physician may prescribe amoxicillin or penicillin V electronically to your local pharmacy per IDSA guidelines. If viral pharyngitis is more likely, supportive care guidance is provided. If your doctor diagnoses strep throat, see our <a href="/sore-throat-treatment-online/">sore throat treatment page</a> for full treatment details.` }} />
            </ol>
            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Book a $79 California evaluation for sore throat symptoms</p>
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
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video evaluation — symptom assessment, differential review, and e-prescription if appropriate. Prescription medication costs are separate.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Evaluation</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified Family Medicine physician</li>
                  <li>Red-flag screening &amp;amp; Centor triage</li>
                  <li>Differential assessment of possible causes</li>
                  <li>e-Prescription to your pharmacy (when appropriate)</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical sore throat visit cost comparison">
                <h3>Typical Sore Throat Visit Cost</h3>
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

        {/* ─── 8) MEDICATION TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Medications If Strep Throat Is Diagnosed</h2>
            <p>
              If a physician evaluates your sore throat and determines strep pharyngitis is the most likely cause, the following evidence-based medications may be prescribed per IDSA guidelines. The physician selects the most appropriate agent based on your allergy history, kidney function, and drug interactions. GoodRx prices retrieved May 2026.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Strep throat medication options">
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
                <td><strong>amoxicillin</strong> <span className="tdmd-sym__med-brand">(Amoxil)</span></td>
                <td>oral capsule, suspension</td>
                <td>aminopenicillin antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg PO BID × 10 days` }} />
                <td><a href="https://www.goodrx.com/amoxicillin" target="_blank" rel="noopener">$5–$21</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, rash; rash develops in mononucleosis.` }} />
              </tr>
              <tr>
                <td><strong>penicillin V potassium</strong> <span className="tdmd-sym__med-brand">(Veetids)</span></td>
                <td>oral tablet, suspension</td>
                <td>penicillin antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg PO BID × 10 days` }} />
                <td><a href="https://www.goodrx.com/penicillin-v-potassium" target="_blank" rel="noopener">$2–$26</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, allergic reaction.` }} />
              </tr>
              <tr>
                <td><strong>cephalexin</strong> <span className="tdmd-sym__med-brand">(Keflex)</span></td>
                <td>oral capsule, suspension</td>
                <td>first-generation cephalosporin</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg PO BID × 10 days` }} />
                <td><a href="https://www.goodrx.com/cephalexin" target="_blank" rel="noopener">$8–$37</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Preferred for non-anaphylactic penicillin allergy; cross-reactivity ~2%.` }} />
              </tr>
              <tr>
                <td><strong>azithromycin</strong> <span className="tdmd-sym__med-brand">(Zithromax (Z-Pak))</span></td>
                <td>oral tablet</td>
                <td>macrolide antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg day 1, then 250 mg daily × 4 days` }} />
                <td><a href="https://www.goodrx.com/azithromycin" target="_blank" rel="noopener">$6–$35</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Reserved for true beta-lactam allergy; rising macrolide resistance in GAS.` }} />
              </tr>
              <tr>
                <td><strong>ibuprofen</strong> <span className="tdmd-sym__med-brand">(Advil, Motrin)</span></td>
                <td>oral tablet</td>
                <td>NSAID</td>
                <td dangerouslySetInnerHTML={{ __html: `400 mg PO every 6h PRN` }} />
                <td><a href="https://www.goodrx.com/ibuprofen" target="_blank" rel="noopener">$2–$13</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Supportive care for pain and fever; avoid in CKD or peptic ulcer.` }} />
              </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> Do not start any prescription medication without a clinical evaluation. The appropriate choice depends on your individual history, allergies, comorbidities, and current medications — all assessed by the physician at your visit. TeleDirectMD does not prescribe controlled substances.
            </p>
          </div>
        </section>

        {/* ─── 9) CTA STRIP ────────────────────────────────────────────────── */}
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

        {/* ─── 10) FAQ ACCORDION ───────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle={`Frequently Asked Questions — Sore Throat That Won't Go Away`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to get your sore throat evaluated?</h3>
                <p>Book a same-day $79 California video visit. Board-certified Family Medicine &amp;middot; MD-only care.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                <a href="/sore-throat-treatment-online/" className="tdmd-btn tdmd-btn-outline">Sore Throat Treatment Details</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11) RELATED CONDITIONS ──────────────────────────────────────── */}
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

        {/* ─── 12) RELATED RESOURCE LINKS ─────────────────────────────────── */}
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

        {/* ─── 13) REFERENCES ──────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/" rel="noopener" target="_blank">IDSA — Streptococcal Pharyngitis Clinical Practice Guideline</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2016/0815/p241.html" rel="noopener" target="_blank">AAFP — Sore Throat: Diagnosis and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/group-a-strep/pharyngitis/index.html" rel="noopener" target="_blank">CDC — Sore Throat / Group A Strep</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=amoxicillin" rel="noopener" target="_blank">FDA DailyMed — Amoxicillin</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&amp;sectionNum=2290.5." rel="noopener" target="_blank">California B&amp;P Code 2290.5 — Telehealth</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Infectious Disease Resources</a>. Retrieved May 23, 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 14) MEDICAL DISCLAIMER ─────────────────────────────────────── */}
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
