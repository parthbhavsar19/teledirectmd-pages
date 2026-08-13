/**
 * VtHypothyroidismRefillsOnline.js — production Vermont × Hypothyroidism Refills condition page
 *
 * VT Pilot 2 (generated 2026-06-08). Rendered by app/[slug]/[conditionSlug]/page.js
 * when slug === 'vt' and conditionSlug === 'hypothyroidism-refills-online'.
 *
 * Hard rules respected:
 *   • MedicalWebPage + FAQPage + HowTo + BreadcrumbList JSON-LD (no QAPage).
 *   • Physician schema includes NPI 1104323203 + Vermont license 042.0040345-COMP.
 *   • Vermont cash-pay only — $79 flat self-pay, no insurance billing, no payer assertions.
 *   • Visible byline + headshot + last-reviewed date (E-E-A-T).
 *   • Parth Bhavsar, MD · Family Medicine · Vermont-licensed.
 */

import FaqAccordion from '../../components/FaqAccordion';

// ────────────────────────────────────────────────────────────────────────────
// Page meta / constants
// ────────────────────────────────────────────────────────────────────────────
const PAGE_URL = "https://teledirectmd.com/vt/hypothyroidism-refills-online/";
const PAGE_TITLE = "Hypothyroidism (Levothyroxine) Refills Online in Vermont | TeleDirectMD";
const DATE_PUBLISHED = '2026-06-08';
const DATE_MODIFIED = '2026-06-08';
const LAST_REVIEWED = '2026-06-08';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  licenseState: 'Vermont',
  licenseNumber: '042.0040345-COMP',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about',
};

const MEDICATIONS = [
  { name: "Levothyroxine 25 / 50 mcg", regimen: "Once daily, empty stomach, 30–60 min before food", price: "~$4–$15/month GoodRx (generic)", priceHref: "https://www.goodrx.com/levothyroxine", firstLine: true, notes: "Lower-dose range; common starting doses in older or cardiac patients. Refills continue an established dose." },
  { name: "Levothyroxine 75 / 88 / 100 mcg", regimen: "Once daily, empty stomach", price: "~$4–$18/month GoodRx (generic)", priceHref: "https://www.goodrx.com/levothyroxine", firstLine: true, notes: "Common maintenance doses. Keep the same brand or generic for consistent TSH control." },
  { name: "Levothyroxine 112 / 125 / 137 / 150 mcg", regimen: "Once daily, empty stomach", price: "~$4–$20/month GoodRx (generic)", priceHref: "https://www.goodrx.com/levothyroxine", firstLine: false, notes: "Higher maintenance range, including some post-thyroidectomy patients. Refilled at the existing stable dose." }
];

const FAQ_ITEMS = [
  { question: "Can I refill levothyroxine online in Vermont?", answerHtml: `Yes. 18 V.S.A. Chapter 219 permits licensed physicians to prescribe by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician reviews your symptom control and recent TSH, confirms a consistent formulation, and continues your stable dose for established hypothyroidism. Self pay is $79. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">Read 18 V.S.A. Chapter 219</a>.`, answerPlain: "Yes. 18 V.S.A. Chapter 219 permits licensed physicians to prescribe by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician reviews your symptom control and recent TSH, confirms a consistent formulation, and continues your stable dose for established hypothyroidism. Self pay is $79." },
  { question: "Which guideline does TeleDirectMD follow for hypothyroidism?", answerHtml: `TeleDirectMD follows American Thyroid Association guidance for the treatment of hypothyroidism, which establishes levothyroxine monotherapy as the standard of care. Although the comprehensive ATA treatment guideline dates to 2014, levothyroxine as standard therapy has not changed and remains the most current comprehensive guidance.`, answerPlain: "TeleDirectMD follows American Thyroid Association guidance for the treatment of hypothyroidism, which establishes levothyroxine monotherapy as the standard of care. Although the comprehensive ATA treatment guideline dates to 2014, levothyroxine as standard therapy has not changed and remains the most current comprehensive guidance." },
  { question: "What TSH target is used?", answerHtml: `For most adults the TSH target is roughly 0.4 to 4.0 mIU/L, sometimes adjusted for age. The physician individualizes the goal and is especially careful to avoid over-treatment in older Vermonters, which can raise the risk of atrial fibrillation and bone loss.`, answerPlain: "For most adults the TSH target is roughly 0.4 to 4.0 mIU/L, sometimes adjusted for age. The physician individualizes the goal and is especially careful to avoid over-treatment in older Vermonters, which can raise the risk of atrial fibrillation and bone loss." },
  { question: "Why is slow titration important in older Vermonters?", answerHtml: `ATA guidance for older patients recommends starting at a lower dose — often 25 to 50 mcg — and titrating slowly to protect heart function and avoid over-treatment. Given Vermont&apos;s older population, this caution matters. TeleDirectMD&apos;s refill model continues an established stable dose rather than starting a titration.`, answerPlain: "ATA guidance for older patients recommends starting at a lower dose — often 25 to 50 mcg — and titrating slowly to protect heart function and avoid over-treatment. Given Vermont’s older population, this caution matters. TeleDirectMD’s refill model continues an established stable dose rather than starting a titration." },
  { question: "How should I take levothyroxine?", answerHtml: `Take levothyroxine on an empty stomach, 30 to 60 minutes before eating, and keep calcium and iron supplements at least four hours apart because they reduce absorption. Stay on the same brand or generic, since switching can shift your TSH.`, answerPlain: "Take levothyroxine on an empty stomach, 30 to 60 minutes before eating, and keep calcium and iron supplements at least four hours apart because they reduce absorption. Stay on the same brand or generic, since switching can shift your TSH." },
  { question: "Do I need lab work for a levothyroxine refill?", answerHtml: `TSH monitoring is the patient&apos;s responsibility between visits — typically every 6 to 12 weeks after a dose change and every 6 to 12 months when stable. Refills assume a TSH within the past 12 months; if it has been longer, the physician will recommend a check at a local Vermont lab.`, answerPlain: "TSH monitoring is the patient’s responsibility between visits — typically every 6 to 12 weeks after a dose change and every 6 to 12 months when stable. Refills assume a TSH within the past 12 months; if it has been longer, the physician will recommend a check at a local Vermont lab." },
  { question: "Can an underactive thyroid raise my cholesterol?", answerHtml: `Yes. Untreated hypothyroidism raises LDL cholesterol by reducing LDL-receptor activity in the liver, so getting thyroid levels in range can improve lipids. See our Vermont hyperlipidemia refills page for cholesterol management. <a href="/vt/hyperlipidemia-refills-online/">Vermont hyperlipidemia refills page</a>.`, answerPlain: "Yes. Untreated hypothyroidism raises LDL cholesterol by reducing LDL-receptor activity in the liver, so getting thyroid levels in range can improve lipids. See our Vermont hyperlipidemia refills page for cholesterol management." },
  { question: "Does TeleDirectMD prescribe Armour Thyroid, NP Thyroid, or natural desiccated thyroid in Vermont?", answerHtml: `No. TeleDirectMD prescribes levothyroxine (or Tirosint) only, per ATA guidelines. We do not prescribe, refill, or transfer Armour Thyroid, NP Thyroid, Nature-Throid, WP Thyroid, any natural desiccated thyroid (NDT) product, or compounded T3/T4 combination therapy under any circumstances. Patients seeking NDT or T3 therapy should follow up with their primary care provider or an endocrinologist.`, answerPlain: "No. TeleDirectMD prescribes levothyroxine (or Tirosint) only, per ATA guidelines. We do not prescribe, refill, or transfer Armour Thyroid, NP Thyroid, Nature-Throid, WP Thyroid, any natural desiccated thyroid (NDT) product, or compounded T3/T4 combination therapy under any circumstances. Patients seeking NDT or T3 therapy should follow up with their primary care provider or an endocrinologist." },
  { question: "When does hypothyroidism need in-person care?", answerHtml: `See a clinician in person for a new diagnosis, a TSH markedly out of range requiring titration, pregnancy, post-thyroid-cancer suppressive therapy, new cardiac symptoms, or rare signs of thyroid storm. TeleDirectMD is appropriate for stable, established hypothyroidism.`, answerPlain: "See a clinician in person for a new diagnosis, a TSH markedly out of range requiring titration, pregnancy, post-thyroid-cancer suppressive therapy, new cardiac symptoms, or rare signs of thyroid storm. TeleDirectMD is appropriate for stable, established hypothyroidism." },
  { question: "Do you accept insurance in Vermont?", answerHtml: `TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont.`, answerPlain: "TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont." }
];

const VT_SIBLINGS = [
  { slug: "hyperlipidemia-refills-online", label: "Hyperlipidemia Refills in VT", why: "Untreated hypothyroidism raises LDL — these are closely linked." },
  { slug: "hypertension-refills-online", label: "Hypertension Refills in VT", why: "Part of the same chronic-refill management for Vermont adults." },
  { slug: "diabetes-refills-online", label: "Diabetes Refills in VT", why: "Common endocrine and metabolic comorbidity." },
  { slug: "acid-reflux-refills-online", label: "Acid Reflux Refills in VT", why: "Another stable chronic refill we manage by telehealth." },
  { slug: "migraine-refills-online", label: "Migraine Refills in VT", why: "Chronic-condition refill in the same population." },
];

const REFERENCES = [
  { t: "ATA — Guidelines for the Treatment of Hypothyroidism (Thyroid, 2014)", u: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4267409/" },
  { t: "American Thyroid Association — Professional Guidelines", u: "https://www.thyroid.org/professionals/ata-professional-guidelines/" },
  { t: "ATA — Thyroid Disease in the Older Patient", u: "https://www.thyroid.org/thyroid-disease-older-patient/" },
  { t: "Rural Health Information Hub — Vermont", u: "https://www.ruralhealthinfo.org/states/vermont" }
];

// ────────────────────────────────────────────────────────────────────────────
// JSON-LD schema (MedicalWebPage + FAQPage + HowTo + BreadcrumbList)
// Anti-cloaking: every Q/A here is also visibly rendered in the FAQ.
// ────────────────────────────────────────────────────────────────────────────
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: "Refill levothyroxine and manage stable hypothyroidism online in Vermont. Board-certified Family Medicine MD. Care aligned with American Thyroid Association guidance and TSH monitoring. Cash-pay only at $79 flat. Levothyroxine only — no Armour, no NP Thyroid, no desiccated thyroid (NDT).",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: "Hypothyroidism Refills",
      alternateName: ["Underactive Thyroid","Levothyroxine Refills","Hypothyroidism"],
      code: { '@type': 'MedicalCode', code: "E03.9", codingSystem: 'ICD-10-CM' },
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      geographicArea: { '@type': 'AdministrativeArea', name: 'Vermont' },
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
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Medical License',
          name: 'Vermont Medical License',
          identifier: '042.0040345-COMP',
          recognizedBy: {
            '@type': 'GovernmentOrganization',
            name: 'Vermont Board of Medical Practice',
            url: 'https://www.healthvermont.gov/systems/board-medical-practice',
          },
        },
      ],
      areaServed: { '@type': 'State', name: 'Vermont' },
      licensedIn: PHYSICIAN.licenseState,
      worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD', url: 'https://teledirectmd.com' },
      sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203', 'https://teledirectmd.com/about/'],
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#vt-hypothyroidism-refills-online-opening', '#vt-hypothyroidism-refills-online-opening p', '.vt-hypothyroidism-refills-online__byline', '#vt-hypothyroidism-refills-online-faq'],
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answerPlain },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "How to Get Hypothyroidism Refills Online in Vermont",
    description: "Three steps to receive hypothyroidism refills care from a Vermont-licensed board-certified physician by secure video visit.",
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select Vermont Hypothyroidism Refills. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'See a Vermont-licensed MD by secure video', text: 'Connect with a board-certified Family Medicine physician licensed in Vermont. The physician reviews your history and performs red-flag screening. Consent per 18 V.S.A. Chapter 219 confirmed.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Receive your plan and, if appropriate, an e-prescription', text: 'If medication is appropriate, a Vermont-compliant e-prescription is sent to your chosen pharmacy during or after the visit. Follow-up instructions provided regardless of treatment choice.', url: PAGE_URL },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Vermont', item: 'https://teledirectmd.com/vt/' },
      { '@type': 'ListItem', position: 3, name: "Hypothyroidism (Levothyroxine) Refills Online in Vermont", item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

// ────────────────────────────────────────────────────────────────────────────
// VT page-specific styles — scoped to .vt-hypothyroidism-refills-online
// ────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
.vt-hypothyroidism-refills-online{color:var(--tdmd-text);}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__byline-name{font-weight:700;color:var(--tdmd-navy);}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__cta-strip .vt-hypothyroidism-refills-online__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__cta-strip .vt-hypothyroidism-refills-online__cta-btn:hover{background:#FFF6F2;color:var(--tdmd-accent);}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__dual-card--good{border-left:5px solid #2E7D52;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__dual{grid-template-columns:minmax(0,1fr);}}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
:root[data-theme="dark"] .vt-hypothyroidism-refills-online .vt-hypothyroidism-refills-online__med-firstline{background:linear-gradient(90deg,#1a2e22,transparent);}
.vt-hypothyroidism-refills-online .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.vt-hypothyroidism-refills-online .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.vt-hypothyroidism-refills-online .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.vt-hypothyroidism-refills-online .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
`;

// ────────────────────────────────────────────────────────────────────────────
// Main page
// ────────────────────────────────────────────────────────────────────────────
export default function VtHypothyroidismRefillsOnline() {
  const schemas = buildSchemas();
  const pid = "vt-hypothyroidism-refills-online";
  const vtCities = ['Burlington', 'South Burlington', 'Rutland', 'Essex Junction', 'Montpelier', 'Barre', 'Winooski', 'St. Albans', 'Newport', 'Brattleboro'];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className="vt-hypothyroidism-refills-online">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Hypothyroidism Refills Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Hypothyroidism (Levothyroxine) Refills Online in Vermont</h1>
                <p className="tdmd-hero-sub" data-speakable="true">Vermont adults 18+ · Secure video visit · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant · ATA + AACE guidance</p>
                <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD provides levothyroxine refills by secure video visit for Vermont adults with stable, established hypothyroidism. A Vermont-licensed board-certified Family Medicine physician reviews your symptom control, screens for signs of over- or under-treatment, confirms you are taking a consistent brand or formulation, and continues your current dose when it remains appropriate. Care follows American Thyroid Association guidance, with levothyroxine as the standard of care and TSH as the primary monitoring marker. TeleDirectMD prescribes levothyroxine (or Tirosint) only and does NOT prescribe, refill, or transfer natural desiccated thyroid (Armour Thyroid, NP Thyroid, Nature-Throid, WP Thyroid), any NDT product, or compounded T3/T4 therapy under any circumstances. This page is for adults located in Vermont, including {CITIES}, and surrounding areas.`.replace('{CITIES}', vtCities.join(', ')) }} />

                {/* Visible byline (E-E-A-T) */}
                <div className="vt-hypothyroidism-refills-online__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="vt-hypothyroidism-refills-online__byline-text">
                    <span className="vt-hypothyroidism-refills-online__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="vt-hypothyroidism-refills-online__byline-meta">
                      NPI {PHYSICIAN.npi} · Vermont Medical License #042.0040345-COMP (<a href="https://secure.professionals.healthvermont.gov/PROD/PORTAL/PRLicenseSearch/SearchPage" rel="noopener" target="_blank">verify</a>) · Last reviewed{' '}
                      <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-eligibility`}>Eligibility checklist</a></li>
                  <li><a href={`#${pid}-vt-law`}>Vermont telehealth law</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; insurance</a></li>
                  <li><a href={`#${pid}-medications`}>Medication options</a></li>
                  <li><a href={`#${pid}-dual-path`}>Telehealth vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Licensed telehealth care for adults located in Vermont at the time of the visit</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/vt/" className="tdmd-btn tdmd-btn-outline">Explore Vermont Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> E03.9 (Hypothyroidism, unspecified) — final coding depends on clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online Levothyroxine Refills in Vermont</h2>
                  <ul>
                    <li>Board-certified Family Medicine MD — Vermont-licensed</li>
                    <li>Aligned with ATA levothyroxine guidance</li>
                    <li>Refills of your existing, stable levothyroxine dose</li>
                    <li>e-Prescriptions sent to your VT pharmacy electronically</li>
                    <li>Guidance on TSH monitoring and consistent administration</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service and does not prescribe controlled substances. If you have severe or rapidly worsening symptoms, high fever, or any emergency warning sign, seek urgent in-person or emergency care now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (citable, speakable) ─── */}
        <section className="tdmd-section" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <div className="tdmd-condition-opener">
              <p dangerouslySetInnerHTML={{ __html: `Hypothyroidism is one of the most common endocrine conditions in adults, and Vermont's demographics concentrate the highest-risk group: women are five to eight times more likely than men to develop an underactive thyroid, prevalence climbs steeply after age 60, and the American Thyroid Association and AACE recommend screening adults over 60 — squarely Vermont's older population. With roughly 64.8% of Vermonters living rural, keeping up with routine refills and TSH checks can be difficult. Vermont adults with stable, established hypothyroidism can refill levothyroxine by secure video visit through TeleDirectMD, consistent with 18 V.S.A. Chapter 219. Self pay is $79.` }} />
            </div>
          </div>
        </section>

        {/* ─── 2b) MEDICATION SCOPE: LEVOTHYROXINE ONLY (NDT exclusion) ─── */}
        <section className="tdmd-section" id={`${pid}-scope`}>
          <div className="tdmd-container">
            <div style={{ background: '#FFF3CD', border: '2px solid #FFC107', borderRadius: 'var(--tdmd-radius,18px)', padding: '1.1rem 1.5rem', marginTop: '1.5rem' }}>
              <h3 style={{ color: '#856404', marginTop: 0 }}>⚠ Medication Scope: Levothyroxine Only</h3>
              <p style={{ color: '#533f03', margin: 0 }}>TeleDirectMD prescribes LEVOTHYROXINE (or Tirosint) ONLY for hypothyroidism management. This service does NOT prescribe, refill, or transfer: Armour Thyroid, NP Thyroid, Nature-Throid, WP Thyroid, any natural desiccated thyroid (NDT) product, liothyronine (Cytomel, generic T3), or any compounded T3/T4 combination therapy — under any circumstances. The ATA guidelines establish levothyroxine monotherapy as the standard of care. Patients seeking NDT or T3 therapy should consult their primary care provider or an endocrinologist.</p>
            </div>
          </div>
        </section>

        {/* ─── 3) ELIGIBILITY CHECKLIST ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Hypothyroidism Refills Telehealth Eligibility Checklist for Vermont</h2>
            <p><strong>You are likely a good fit for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="vt-hypothyroidism-refills-online__dual">
              <div className="vt-hypothyroidism-refills-online__dual-card vt-hypothyroidism-refills-online__dual-card--good">
                <h3>✓ You Are a Good Fit If</h3>
                <ul>
              <li>You are 18 years or older and located in Vermont at the time of the visit</li>
              <li>You have an established diagnosis of hypothyroidism</li>
              <li>You are on a stable levothyroxine dose with no recent significant change</li>
              <li>Your symptoms are controlled without signs of over- or under-treatment</li>
              <li>You can obtain a TSH level at a local Vermont lab when recommended</li>
                </ul>
              </div>
              <div className="vt-hypothyroidism-refills-online__dual-card vt-hypothyroidism-refills-online__dual-card--alert">
                <h3>✗ Telehealth May Not Be Right If</h3>
                <ul>
              <li>You have a brand-new diagnosis needing TSH confirmation, FT4, and antibodies</li>
              <li>You need a significant dose change because your TSH is markedly out of range</li>
              <li>You are pregnant (TSH targets change; OB or endocrinology should manage)</li>
              <li>You are on suppressive therapy after thyroid cancer or thyroidectomy</li>
              <li>You have new cardiac symptoms or signs of thyroid storm (fever, racing heart, confusion)</li>
              <li>You take or want natural desiccated thyroid (Armour Thyroid, NP Thyroid, Nature-Throid, WP Thyroid) or compounded T3/T4 — we do not prescribe or refill NDT products</li>
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If you have red-flag symptoms, seek urgent in-person care or emergency care immediately. TeleDirectMD is not appropriate for complex or severe cases.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4) VERMONT TELEHEALTH LAW ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-vt-law`}>
          <div className="tdmd-container">
            <h2>Vermont Telehealth Law and Your Hypothyroidism Refills Visit</h2>

            <h3>Does Vermont require an in-person visit before telehealth?</h3>
            <p>
              No. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219 (Vermont&apos;s telemedicine statute)</a> does not require a prior in-person visit before receiving telehealth services. Before delivering care, the physician must obtain and document the patient&apos;s verbal or written consent for telehealth — which TeleDirectMD does at the start of every visit.
            </p>

            <h3>What standard of care applies to Vermont telehealth physicians?</h3>
            <p>
              The <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> is explicit: the standard of care is the same whether a patient is seen in person or by telehealth. Physicians must be licensed in Vermont to treat Vermont patients — a requirement TeleDirectMD satisfies. Dr. Bhavsar is a Vermont-licensed, board-certified physician of the American Board of Family Medicine and holds Vermont Medical License #042.0040345-COMP issued by the Vermont Board of Medical Practice. <a href="https://secure.professionals.healthvermont.gov/PROD/PORTAL/PRLicenseSearch/SearchPage" rel="noopener" target="_blank">Verify license</a> · <a href="/about/">Dr. Bhavsar bio</a>.
            </p>

            <h3>Are these medications controlled substances under Vermont law?</h3>
            <p>
              No. The medications used for this condition are not controlled substances and can be prescribed via Vermont telehealth and transmitted electronically to any Vermont pharmacy. Vermont permits electronic prescribing for non-controlled medications, per the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 5) HOW IT WORKS ─── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Hypothyroidism Refills Works in Vermont</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book your video visit</h3>
                  <p>Insurance is not required. No referral needed. Many visits are available same day, depending on scheduling. Before your visit, note when your symptoms started, your history, any allergies, and current medications.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>See a Vermont-licensed MD by secure video</h3>
                  <p>A board-certified Family Medicine physician licensed in Vermont reviews your history and risk factors and performs red-flag screening. Consent under 18 V.S.A. Chapter 219 is obtained and documented before any treatment.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Get a plan and, if appropriate, an e-prescription</h3>
                  <p>If medication is clinically appropriate, a Vermont-compliant e-prescription is sent to your chosen Vermont pharmacy — CVS, Walgreens, Rite Aid, Walmart, or another pharmacy — during or after the visit. You receive clear follow-up steps, including when to seek in-person care.</p>
                  <div className="tdmd-decision-cta">
                    <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Hypothyroidism Refills Cost &amp; Insurance in Vermont</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit, including evaluation, a treatment plan, and an e-prescription when appropriate. Vermont visits are cash-pay only at a flat $79; there is no insurance billing. The $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Red-flag screening &amp; structured triage</li>
                  <li>e-Prescription to your VT pharmacy (when appropriate)</li>
                  <li>Follow-up instructions &amp; guidance</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical cost comparison">
                <h3>Typical Hypothyroidism Refills Visit Cost in Vermont</h3>
                <p className="tdmd-price-caption">Common ranges Vermonters see before insurance. Actual costs vary by setting and city.</p>
                <div className="tdmd-vbars" role="list" aria-label="Cost comparison bars">
                  {[
                    { name: 'TeleDirectMD video visit', value: '$79', heightPct: 13, isTdmd: true },
                    { name: 'Other telehealth', value: '$75–$150', heightPct: 22 },
                    { name: 'Urgent care', value: '$150–$300', heightPct: 45 },
                    { name: 'ER visit', value: '$500–$3,000+', heightPct: 100 },
                  ].map((bar, i) => (
                    <div key={i} className="tdmd-vbar" role="listitem" aria-label={`${bar.name}: ${bar.value}`}>
                      <span className="tdmd-vbar__value">{bar.value}</span>
                      <div className={`tdmd-vbar__fill${bar.isTdmd ? ' tdmd-vbar__fill--tdmd' : ''}`} style={{ height: `${bar.heightPct}%` }} aria-hidden="true" />
                      <span className={`tdmd-vbar__label${bar.isTdmd ? ' tdmd-vbar__label--tdmd' : ''}`}>{bar.name}</span>
                    </div>
                  ))}
                </div>
                <p className="tdmd-price-footnote">Comparison reflects typical Vermont metro pricing. Actual costs vary.</p>
              </div>
            </div>

            <div className="tdmd-cashpay-note">
              <p><strong>$79 visit fee. Prescription costs filled separately at your pharmacy.</strong> No insurance billing in Vermont — straightforward, transparent pricing. Your visit fee is paid at booking. HSA and FSA cards are accepted, and prescriptions may be covered by your pharmacy benefit.</p>
            </div>
          </div>
        </section>

        {/* ─── 7) CLINICAL / EPIDEMIOLOGY ─── */}
        <section className="tdmd-section" id={`${pid}-clinical`}>
          <div className="tdmd-container">
            <h2>Stable Thyroid Refills for Vermont’s Older, Rural Population</h2>
            <p dangerouslySetInnerHTML={{ __html: `Hypothyroidism prevalence rises with age, reaching an estimated 5% to 14% of adults over 65, and women are five to eight times more likely than men to develop it. Vermont's older, heavily rural population — about 64.8% nonmetro per the <a href="https://www.ruralhealthinfo.org/states/vermont" rel="noopener" target="_blank">Rural Health Information Hub</a> — places the state at above-average burden, and the <a href="https://www.thyroid.org/professionals/ata-professional-guidelines/" rel="noopener" target="_blank">American Thyroid Association</a> recommends screening adults over 60. Routine TSH monitoring and refills are exactly the kind of stable, ongoing care that telehealth handles well.` }} />
            <p dangerouslySetInnerHTML={{ __html: `The <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4267409/" rel="noopener" target="_blank">ATA Guidelines for the Treatment of Hypothyroidism</a> establish levothyroxine (LT4) monotherapy as the preparation of choice, citing its efficacy, long track record, favorable side-effect profile, good absorption, and low cost. There is no consistently strong evidence favoring combination LT4/LT3 therapy. TSH is the primary marker of adequate replacement, with a typical target of 0.4 to 4.0 mIU/L for most adults, and steady state is reached about six weeks after any dose change because levothyroxine has a roughly seven-day half-life. Although the comprehensive ATA treatment guideline dates to 2014, levothyroxine monotherapy as the standard of care has not changed, and no newer comprehensive replacement guideline has been published.` }} />
            <p dangerouslySetInnerHTML={{ __html: `Dosing in Vermont's older population calls for caution. ATA guidance for older patients recommends starting lower — often 25 to 50 mcg per day — and titrating slowly every six to eight weeks, to avoid over-treatment that can raise the risk of atrial fibrillation and bone loss. TeleDirectMD's service is a refill model: it continues your existing, stable dose rather than initiating a titration. Levothyroxine should be taken on an empty stomach 30 to 60 minutes before eating, separated from calcium and iron by about four hours. TSH monitoring is the patient's responsibility — typically every 6 to 12 weeks after a dose change and every 6 to 12 months when stable, at a local Vermont lab. Because untreated hypothyroidism raises LDL cholesterol, this condition is closely tied to our <a href="/vt/hyperlipidemia-refills-online/">Vermont hyperlipidemia refills page</a>.` }} />
          </div>
        </section>

        {/* ─── 8) MEDICATIONS TABLE ─── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Levothyroxine Refill Options and Pricing in Vermont</h2>
            <p dangerouslySetInnerHTML={{ __html: `Levothyroxine is the only medication TeleDirectMD refills in this category, consistent with <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4267409/" rel="noopener" target="_blank">ATA guidance</a>. It is non-controlled and prescribable by Vermont telehealth. <strong>TeleDirectMD does NOT prescribe, refill, or transfer natural desiccated thyroid (Armour Thyroid, NP Thyroid, Nature-Throid, WP Thyroid), any NDT product, or compounded T3/T4 therapy under any circumstances.</strong> GoodRx prices retrieved May 2026; actual cost varies by Vermont pharmacy. Prescription costs are separate from the $79 visit fee.` }} />
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Hypothyroidism Refills medication options and prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Levothyroxine dose strengths per ATA guidance. GoodRx prices retrieved May 2026. Prescription costs are separate from the visit fee.
                </caption>
                <thead>
                  <tr>
                    <th>Medication</th>
                    <th>Typical Regimen</th>
                    <th>Approx. Cash Price</th>
                    <th>Key Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  {MEDICATIONS.map((med) => (
                    <tr key={med.name} className={med.firstLine ? 'vt-hypothyroidism-refills-online__med-firstline' : ''}>
                      <td><strong>{med.name}</strong>{med.firstLine ? ' · First-line' : ''}</td>
                      <td>{med.regimen}</td>
                      <td>{med.priceHref ? <a href={med.priceHref} target="_blank" rel="noopener">{med.price}</a> : med.price}</td>
                      <td>{med.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> The choice of medication depends on your history, allergies, kidney and liver function, drug interactions, and pregnancy status, assessed by the physician at the visit. Do not start a prescription medication without a clinical evaluation. No treatment is guaranteed to work for every patient.
            </p>
          </div>
        </section>

        {/* ─── 9) DUAL-PATH BLOCK ─── */}
        <section className="tdmd-section" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>TeleDirectMD vs. In-Person Care: Which Is Right for You?</h2>
            <p>For many mild, uncomplicated cases, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below — and when in doubt, choose in-person care.</p>
            <div className="vt-hypothyroidism-refills-online__dual">
              <div className="vt-hypothyroidism-refills-online__dual-card vt-hypothyroidism-refills-online__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
              <li>Established hypothyroidism on a stable levothyroxine dose</li>
              <li>Symptoms controlled; no recent dose change</li>
              <li>Seeking a refill and monitoring review</li>
              <li>Adult 18+, located in Vermont</li>
              <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                </ul>
              </div>
              <div className="vt-hypothyroidism-refills-online__dual-card vt-hypothyroidism-refills-online__dual-card--alert">
                <h3>→ When Thyroid Care Needs In-Person Evaluation</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>ER:</strong> Signs of thyroid storm — fever, racing heart, confusion` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Primary care:</strong> New diagnosis, or TSH markedly out of range needing titration` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OB / endocrinology:</strong> Pregnancy, or post-thyroid-cancer suppressive therapy` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>In-person eval:</strong> New cardiac symptoms in an older patient on levothyroxine` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong><a href="https://portal.healthconnect.vermont.gov/" rel="noopener" target="_blank">Vermont Health Connect</a>:</strong> Find primary care providers and coverage options` }} />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) CTA STRIP ─── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="vt-hypothyroidism-refills-online__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — Vermont adults, 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · No ER wait</small>
              </div>
              <a className="vt-hypothyroidism-refills-online__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 11) FAQ (Premium Style A accordion) ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Hypothyroidism Refills in Vermont"
              items={FAQ_ITEMS.map((f, i) => ({
                id: `${pid}-faq-${i}`,
                question: f.question,
                answer: <p dangerouslySetInnerHTML={{ __html: f.answerHtml }} />,
              }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to see a Vermont-licensed MD?</h3>
                <p>Book a same-day video visit. Cash-pay $79 flat. No insurance billing in Vermont.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 12) RELATED VT CONDITIONS (siblings) ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-vt`}>
          <div className="tdmd-container">
            <h2>Other Vermont Conditions We Treat</h2>
            <p>These Vermont condition pages may help when symptoms overlap, or when you want to explore another Vermont telehealth visit from TeleDirectMD.</p>
            <div className="vt-hypothyroidism-refills-online__sibling-grid">
              {VT_SIBLINGS.map((s) => (
                <a key={s.slug} className="vt-hypothyroidism-refills-online__sibling" href={`/vt/${s.slug}/`}>
                  <span className="vt-hypothyroidism-refills-online__sibling-label">{s.label}</span>
                  <span className="vt-hypothyroidism-refills-online__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 13) PILLAR / SPOKE LINKS ─── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of two pillars: the <a href="/vt/">Vermont state hub</a> and the <a href="/hypothyroidism-refills-online/">national hypothyroidism page</a>. Use the links below to book a visit or explore more.</p>
            <div className="vt-hypothyroidism-refills-online__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/hypothyroidism-refills-online/">National Hypothyroidism Refills page</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/book-online">Book Online</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>
        </section>

        {/* ─── 14) REFERENCES ─── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              {REFERENCES.map((r) => (
                <li key={r.u}><a href={r.u} rel="noopener" target="_blank">{r.t}</a>. Retrieved June 8, 2026.</li>
              ))}
              <li><a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219 (Vermont&apos;s telemedicine statute)</a>. Retrieved June 8, 2026.</li>
              <li><a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. Retrieved June 8, 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 15) DISCLAIMER ─── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes and is not a substitute for individualized medical advice. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and consent is documented under 18 V.S.A. Chapter 219. Treatment decisions are made by a Vermont-licensed board-certified physician based on the clinical history at the time of the visit. No treatment is guaranteed to be effective for every patient. If you have red-flag or emergency symptoms, seek urgent in-person care immediately.</p>
            <p>TeleDirectMD does not prescribe controlled substances in any state. Price information reflects approximate cash/GoodRx pricing retrieved May 2026; actual prescription costs at Vermont pharmacies vary. The $79 visit fee is separate from prescription costs, which are filled separately at your pharmacy.</p>
          </div>
        </section>

      </div>
    </>
  );
}
