/**
 * VtHyperlipidemiaRefillsOnline.js — production Vermont × Hyperlipidemia (High Cholesterol) Refills condition page
 *
 * VT Pilot 2 (generated 2026-06-08). Rendered by app/[slug]/[conditionSlug]/page.js
 * when slug === 'vt' and conditionSlug === 'hyperlipidemia-refills-online'.
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
const PAGE_URL = "https://teledirectmd.com/vt/hyperlipidemia-refills-online/";
const PAGE_TITLE = "Hyperlipidemia (High Cholesterol) Refills Online in Vermont | TeleDirectMD";
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
  { name: "Atorvastatin 10/20/40/80 mg", regimen: "10–80 mg once daily", price: "~$4–$15/month GoodRx (generic)", priceHref: "https://www.goodrx.com/atorvastatin", firstLine: true, notes: "Preferred high-intensity statin (40–80 mg); strongest evidence base; most commonly prescribed." },
  { name: "Rosuvastatin 5/10/20/40 mg", regimen: "5–40 mg once daily", price: "~$8–$20/month GoodRx (generic)", priceHref: "https://www.goodrx.com/rosuvastatin", firstLine: true, notes: "High-intensity at 20–40 mg; low myopathy risk; useful in older patients." },
  { name: "Simvastatin 10/20/40 mg", regimen: "10–40 mg once daily in the evening", price: "~$4–$15/month GoodRx (generic)", priceHref: "https://www.goodrx.com/simvastatin", firstLine: false, notes: "Moderate intensity. 80 mg dose not recommended (myopathy risk); watch CYP3A4 drug interactions." },
  { name: "Ezetimibe 10 mg", regimen: "10 mg once daily", price: "~$8–$25/month GoodRx (generic)", priceHref: "https://www.goodrx.com/ezetimibe", firstLine: false, notes: "Non-statin add-on when LDL is not at goal on a statin; well tolerated." }
];

const FAQ_ITEMS = [
  { question: "Can I refill my cholesterol medication online in Vermont?", answerHtml: `Yes. 18 V.S.A. Chapter 219 permits licensed physicians to prescribe by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician reviews your current statin or other lipid-lowering therapy, side effects, and recent lipid panel before authorizing refills for established hyperlipidemia. Self pay is $79. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">Read 18 V.S.A. Chapter 219</a>.`, answerPlain: "Yes. 18 V.S.A. Chapter 219 permits licensed physicians to prescribe by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician reviews your current statin or other lipid-lowering therapy, side effects, and recent lipid panel before authorizing refills for established hyperlipidemia. Self pay is $79." },
  { question: "Which cholesterol guideline does TeleDirectMD follow?", answerHtml: `TeleDirectMD follows the 2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia, published March 13, 2026 in JACC, which replaced the prior guideline. It uses the PREVENT-ASCVD risk calculator and restored numeric LDL-C targets.`, answerPlain: "TeleDirectMD follows the 2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia, published March 13, 2026 in JACC, which replaced the prior guideline. It uses the PREVENT-ASCVD risk calculator and restored numeric LDL-C targets." },
  { question: "What LDL-C targets apply under the 2026 guideline?", answerHtml: `The 2026 ACC/AHA Multisociety Dyslipidemia Guideline restored numeric LDL-C goals: under 100 mg/dL for primary prevention at borderline-to-intermediate risk, under 70 mg/dL for high-risk patients, and under 55 mg/dL for very-high-risk secondary prevention. The physician individualizes targets to your risk.`, answerPlain: "The 2026 ACC/AHA Multisociety Dyslipidemia Guideline restored numeric LDL-C goals: under 100 mg/dL for primary prevention at borderline-to-intermediate risk, under 70 mg/dL for high-risk patients, and under 55 mg/dL for very-high-risk secondary prevention. The physician individualizes targets to your risk." },
  { question: "What is the PREVENT-ASCVD calculator?", answerHtml: `PREVENT-ASCVD is the risk-estimation tool adopted in the 2026 ACC/AHA Multisociety Dyslipidemia Guideline for adults aged 30 to 79. It estimates cardiovascular risk more accurately than earlier tools and helps guide whether and how intensively to treat cholesterol.`, answerPlain: "PREVENT-ASCVD is the risk-estimation tool adopted in the 2026 ACC/AHA Multisociety Dyslipidemia Guideline for adults aged 30 to 79. It estimates cardiovascular risk more accurately than earlier tools and helps guide whether and how intensively to treat cholesterol." },
  { question: "Which statins can TeleDirectMD refill in Vermont?", answerHtml: `Common refills include atorvastatin (10/20/40/80 mg), rosuvastatin (5/10/20/40 mg), and simvastatin (with attention to drug interactions and the avoidance of the 80 mg dose), plus ezetimibe as a non-statin add-on. The physician continues or adjusts your regimen based on your history.`, answerPlain: "Common refills include atorvastatin (10/20/40/80 mg), rosuvastatin (5/10/20/40 mg), and simvastatin (with attention to drug interactions and the avoidance of the 80 mg dose), plus ezetimibe as a non-statin add-on. The physician continues or adjusts your regimen based on your history." },
  { question: "Who should be on a statin per USPSTF?", answerHtml: `The USPSTF 2022 recommendation gives a Grade B recommendation to prescribe a statin for adults aged 40 to 75 with at least one cardiovascular risk factor and a 10-year ASCVD risk of 10% or more. This remains current alongside the 2026 ACC/AHA Multisociety Dyslipidemia Guideline.`, answerPlain: "The USPSTF 2022 recommendation gives a Grade B recommendation to prescribe a statin for adults aged 40 to 75 with at least one cardiovascular risk factor and a 10-year ASCVD risk of 10% or more. This remains current alongside the 2026 ACC/AHA Multisociety Dyslipidemia Guideline." },
  { question: "Do I need lab work for a cholesterol refill?", answerHtml: `Lipid monitoring is the patient&apos;s responsibility in this cash-pay model. The physician may recommend a lipid panel every 3 to 12 months at LabCorp, Quest, or a Vermont hospital lab. If your labs are overdue, repeat testing may be recommended as a condition of continued refills.`, answerPlain: "Lipid monitoring is the patient’s responsibility in this cash-pay model. The physician may recommend a lipid panel every 3 to 12 months at LabCorp, Quest, or a Vermont hospital lab. If your labs are overdue, repeat testing may be recommended as a condition of continued refills." },
  { question: "Can thyroid problems raise my cholesterol?", answerHtml: `Yes. Untreated hypothyroidism raises LDL cholesterol by reducing LDL-receptor activity in the liver. If your cholesterol has been hard to control, checking thyroid function is worthwhile — see our Vermont hypothyroidism refills page. <a href="/vt/hypothyroidism-refills-online/">Vermont hypothyroidism refills page</a>.`, answerPlain: "Yes. Untreated hypothyroidism raises LDL cholesterol by reducing LDL-receptor activity in the liver. If your cholesterol has been hard to control, checking thyroid function is worthwhile — see our Vermont hypothyroidism refills page." },
  { question: "Do you accept insurance in Vermont?", answerHtml: `TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont.`, answerPlain: "TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont." }
];

const VT_SIBLINGS = [
  { slug: "hypertension-refills-online", label: "Hypertension Refills in VT", why: "High blood pressure and high cholesterol are frequently co-managed." },
  { slug: "hypothyroidism-refills-online", label: "Hypothyroidism Refills in VT", why: "Untreated hypothyroidism is a secondary cause of high cholesterol." },
  { slug: "diabetes-refills-online", label: "Diabetes Refills in VT", why: "Diabetes and dyslipidemia commonly occur together." },
  { slug: "acid-reflux-refills-online", label: "Acid Reflux Refills in VT", why: "Common chronic-condition comorbidity in the same patient population." },
  { slug: "migraine-refills-online", label: "Migraine Refills in VT", why: "Another chronic refill we manage by telehealth." },
];

const REFERENCES = [
  { t: "2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia (JACC)", u: "https://pubmed.ncbi.nlm.nih.gov/41824590/" },
  { t: "ACC/AHA — 2026 Dyslipidemia Guideline Announcement", u: "https://newsroom.heart.org/news/accaha-issue-updated-guideline-for-managing-lipids-cholesterol" },
  { t: "USPSTF — Statin Use in Adults for Primary Prevention (2022)", u: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/statin-use-in-adults-preventive-medication" },
  { t: "VT DOH — Cardiovascular Disease Data", u: "https://www.healthvermont.gov/stats/data-reporting-topic/cardiovascular-disease-data" },
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
    description: "Refill statins and cholesterol medications online in Vermont. Board-certified Family Medicine MD. Care aligned with the 2026 ACC/AHA Multisociety Dyslipidemia Guideline and the PREVENT-ASCVD calculator. Cash-pay only at $79 flat.",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: "Hyperlipidemia Refills",
      alternateName: ["High Cholesterol","Dyslipidemia","Statin Refills"],
      code: { '@type': 'MedicalCode', code: "E78.5", codingSystem: 'ICD-10-CM' },
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
      cssSelector: ['#vt-hyperlipidemia-refills-online-opening', '#vt-hyperlipidemia-refills-online-opening p', '.vt-hyperlipidemia-refills-online__byline', '#vt-hyperlipidemia-refills-online-faq'],
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
    name: "How to Get Hyperlipidemia (High Cholesterol) Refills Online in Vermont",
    description: "Three steps to receive hyperlipidemia (high cholesterol) refills care from a Vermont-licensed board-certified physician by secure video visit.",
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select Vermont Hyperlipidemia (High Cholesterol) Refills. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
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
      { '@type': 'ListItem', position: 3, name: "Hyperlipidemia (High Cholesterol) Refills Online in Vermont", item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

// ────────────────────────────────────────────────────────────────────────────
// VT page-specific styles — scoped to .vt-hyperlipidemia-refills-online
// ────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
.vt-hyperlipidemia-refills-online{color:var(--tdmd-text);}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__byline-name{font-weight:700;color:var(--tdmd-navy);}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__cta-strip .vt-hyperlipidemia-refills-online__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__cta-strip .vt-hyperlipidemia-refills-online__cta-btn:hover{background:#FFF6F2;color:var(--tdmd-accent);}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__dual-card--good{border-left:5px solid #2E7D52;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__dual{grid-template-columns:minmax(0,1fr);}}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
:root[data-theme="dark"] .vt-hyperlipidemia-refills-online .vt-hyperlipidemia-refills-online__med-firstline{background:linear-gradient(90deg,#1a2e22,transparent);}
.vt-hyperlipidemia-refills-online .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.vt-hyperlipidemia-refills-online .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.vt-hyperlipidemia-refills-online .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.vt-hyperlipidemia-refills-online .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
`;

// ────────────────────────────────────────────────────────────────────────────
// Main page
// ────────────────────────────────────────────────────────────────────────────
export default function VtHyperlipidemiaRefillsOnline() {
  const schemas = buildSchemas();
  const pid = "vt-hyperlipidemia-refills-online";
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

      <div className="vt-hyperlipidemia-refills-online">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Hyperlipidemia (High Cholesterol) Refills Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Hyperlipidemia (High Cholesterol) Refills Online in Vermont</h1>
                <p className="tdmd-hero-sub" data-speakable="true">Vermont adults 18+ · Secure video visit · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant · 2026 ACC/AHA Multisociety Dyslipidemia Guideline</p>
                <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD provides evidence-based high-cholesterol medication refills by secure video visit for Vermont adults with an established diagnosis. A Vermont-licensed board-certified Family Medicine physician reviews your current statin or other lipid-lowering therapy, asks about side effects, considers your most recent lipid panel when available, and continues your regimen when it remains appropriate. Care follows the 2026 ACC/AHA Multisociety Dyslipidemia Guideline, which restored numeric LDL-C targets and adopted the PREVENT-ASCVD risk calculator. This page is for adults located in Vermont, including {CITIES}, and surrounding areas.`.replace('{CITIES}', vtCities.join(', ')) }} />

                {/* Visible byline (E-E-A-T) */}
                <div className="vt-hyperlipidemia-refills-online__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="vt-hyperlipidemia-refills-online__byline-text">
                    <span className="vt-hyperlipidemia-refills-online__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="vt-hyperlipidemia-refills-online__byline-meta">
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> E78.5 (Hyperlipidemia, unspecified) — final coding depends on clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online Cholesterol Refills in Vermont</h2>
                  <ul>
                    <li>Board-certified Family Medicine MD — Vermont-licensed</li>
                    <li>Aligned with the 2026 ACC/AHA Multisociety Dyslipidemia Guideline</li>
                    <li>Statin and ezetimibe refills for established hyperlipidemia</li>
                    <li>e-Prescriptions sent to your VT pharmacy electronically</li>
                    <li>Guidance on lipid-panel monitoring and lifestyle</li>
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
              <p dangerouslySetInnerHTML={{ __html: `In Vermont — the second-oldest state by median age, with about 64.8% of residents living in rural areas — cardiovascular disease is the leading cause of death and affects more than 42,000 Vermonters each year, according to Vermont Department of Health data. Refilling a cholesterol medication should not require a long rural drive. Vermont adults with established hyperlipidemia can refill statins and other lipid-lowering therapy by secure video visit through TeleDirectMD, consistent with 18 V.S.A. Chapter 219. Care follows the 2026 ACC/AHA Multisociety Dyslipidemia Guideline (published March 13, 2026 in JACC), which uses the PREVENT-ASCVD calculator and restored LDL-C targets of under 100 mg/dL for primary prevention, under 70 mg/dL for high-risk patients, and under 55 mg/dL for very-high-risk secondary prevention. Self pay is $79.` }} />
            </div>
          </div>
        </section>

        {/* ─── 3) ELIGIBILITY CHECKLIST ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Hyperlipidemia (High Cholesterol) Refills Telehealth Eligibility Checklist for Vermont</h2>
            <p><strong>You are likely a good fit for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="vt-hyperlipidemia-refills-online__dual">
              <div className="vt-hyperlipidemia-refills-online__dual-card vt-hyperlipidemia-refills-online__dual-card--good">
                <h3>✓ You Are a Good Fit If</h3>
                <ul>
              <li>You are 18 years or older and located in Vermont at the time of the visit</li>
              <li>You have an established diagnosis of high cholesterol with prior lab work</li>
              <li>You are on a stable statin or other lipid-lowering therapy you wish to continue</li>
              <li>You are tolerating your current medication without significant side effects</li>
              <li>You can obtain a lipid panel at a local Vermont lab when recommended</li>
                </ul>
              </div>
              <div className="vt-hyperlipidemia-refills-online__dual-card vt-hyperlipidemia-refills-online__dual-card--alert">
                <h3>✗ Telehealth May Not Be Right If</h3>
                <ul>
              <li>You have a brand-new diagnosis requiring a full workup (refer to a PCP)</li>
              <li>Your LDL-C is at or above 190 mg/dL (possible familial hypercholesterolemia)</li>
              <li>You have significant statin side effects such as severe muscle pain or abnormal liver/CK labs</li>
              <li>You need to start a brand-new statin without baseline labs or risk assessment</li>
              <li>You require complex multi-drug therapy or injectable PCSK9 inhibitors</li>
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
            <h2>Vermont Telehealth Law and Your Hyperlipidemia (High Cholesterol) Refills Visit</h2>

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
            <h2 itemProp="name">How Online Hyperlipidemia (High Cholesterol) Refills Works in Vermont</h2>
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
            <h2>Hyperlipidemia (High Cholesterol) Refills Cost &amp; Insurance in Vermont</h2>
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
                <h3>Typical Hyperlipidemia (High Cholesterol) Refills Visit Cost in Vermont</h3>
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
            <h2>Vermont Cholesterol Care Under the 2026 Dyslipidemia Guideline</h2>
            <p dangerouslySetInnerHTML={{ __html: `Cardiovascular disease is Vermont's leading cause of death and affects more than 42,000 Vermonters annually, per the <a href="https://www.healthvermont.gov/stats/data-reporting-topic/cardiovascular-disease-data" rel="noopener" target="_blank">Vermont Department of Health cardiovascular disease data</a>. With roughly 64.8% of residents in nonmetro areas (<a href="https://www.ruralhealthinfo.org/states/vermont" rel="noopener" target="_blank">Rural Health Information Hub</a>) and an older population, untreated or under-treated high cholesterol is a meaningful burden, and rural pharmacy and primary-care access gaps make consistent refills harder to maintain.` }} />
            <p dangerouslySetInnerHTML={{ __html: `The <a href="https://newsroom.heart.org/news/accaha-issue-updated-guideline-for-managing-lipids-cholesterol" rel="noopener" target="_blank">2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia</a>, published March 13, 2026 in JACC, guides current care. It adopts the PREVENT-ASCVD risk equations for adults aged 30 to 79, which correct earlier overestimation of risk, and it restored numeric LDL-C goals: under 100 mg/dL for primary prevention at borderline-to-intermediate risk, under 70 mg/dL for high risk (10-year ASCVD risk of 10% or more), and under 55 mg/dL for very-high-risk secondary prevention. Statins remain first-line, with ezetimibe and other non-statin agents added when statins alone fall short, and the guideline now recommends measuring Lp(a) at least once in adulthood.` }} />
            <p dangerouslySetInnerHTML={{ __html: `The <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/statin-use-in-adults-preventive-medication" rel="noopener" target="_blank">U.S. Preventive Services Task Force (USPSTF) 2022 recommendation</a> remains current: a Grade B recommendation to prescribe a statin for adults aged 40 to 75 with at least one cardiovascular risk factor and a 10-year ASCVD risk of 10% or more. TeleDirectMD's hyperlipidemia service is a refill model for patients with an established diagnosis and prior labs — not a new-diagnosis workup. Lipid monitoring is the patient's responsibility: the physician may recommend a lipid panel every 3 to 12 months at LabCorp, Quest, or a Vermont hospital lab. Because untreated hypothyroidism raises LDL by reducing LDL-receptor activity, persistently hard-to-control cholesterol may warrant checking thyroid function — see our <a href="/vt/hypothyroidism-refills-online/">Vermont hypothyroidism refills page</a>.` }} />
          </div>
        </section>

        {/* ─── 8) MEDICATIONS TABLE ─── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Cholesterol Medication Options and Pricing in Vermont</h2>
            <p dangerouslySetInnerHTML={{ __html: `The options below reflect the 2026 ACC/AHA Multisociety Dyslipidemia Guideline. All are non-controlled and prescribable by Vermont telehealth. GoodRx prices retrieved May 2026; actual cost varies by Vermont pharmacy. Prescription costs are separate from the $79 visit fee.` }} />
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Hyperlipidemia (High Cholesterol) Refills medication options and prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Lipid-lowering options per the 2026 ACC/AHA Multisociety Dyslipidemia Guideline. GoodRx prices retrieved May 2026. Prescription costs are separate from the visit fee.
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
                    <tr key={med.name} className={med.firstLine ? 'vt-hyperlipidemia-refills-online__med-firstline' : ''}>
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
            <div className="vt-hyperlipidemia-refills-online__dual">
              <div className="vt-hyperlipidemia-refills-online__dual-card vt-hyperlipidemia-refills-online__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
              <li>Established hyperlipidemia with a prior diagnosis and labs</li>
              <li>Stable on current therapy and tolerating it well</li>
              <li>Seeking a refill and monitoring review</li>
              <li>Adult 18+, located in Vermont</li>
              <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                </ul>
              </div>
              <div className="vt-hyperlipidemia-refills-online__dual-card vt-hyperlipidemia-refills-online__dual-card--alert">
                <h3>→ When Cholesterol Care Needs In-Person Evaluation</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Primary care:</strong> New diagnosis, full risk workup, or starting a first statin` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>In-person eval:</strong> Severe muscle pain, abnormal liver enzymes, or elevated CK on a statin` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Cardiology / lipid clinic:</strong> LDL-C ≥190 mg/dL, familial hypercholesterolemia, or PCSK9-inhibitor therapy` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong><a href="https://portal.healthconnect.vermont.gov/" rel="noopener" target="_blank">Vermont Health Connect</a>:</strong> Find primary care providers and coverage options` }} />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) CTA STRIP ─── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="vt-hyperlipidemia-refills-online__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — Vermont adults, 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · No ER wait</small>
              </div>
              <a className="vt-hyperlipidemia-refills-online__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 11) FAQ (Premium Style A accordion) ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Hyperlipidemia (High Cholesterol) Refills in Vermont"
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
            <div className="vt-hyperlipidemia-refills-online__sibling-grid">
              {VT_SIBLINGS.map((s) => (
                <a key={s.slug} className="vt-hyperlipidemia-refills-online__sibling" href={`/vt/${s.slug}/`}>
                  <span className="vt-hyperlipidemia-refills-online__sibling-label">{s.label}</span>
                  <span className="vt-hyperlipidemia-refills-online__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 13) PILLAR / SPOKE LINKS ─── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of two pillars: the <a href="/vt/">Vermont state hub</a> and the <a href="/hyperlipidemia-refills-online/">national hyperlipidemia page</a>. Use the links below to book a visit or explore more.</p>
            <div className="vt-hyperlipidemia-refills-online__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/hyperlipidemia-refills-online/">National Hyperlipidemia (High Cholesterol) Refills page</a>
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
