/**
 * VtCellulitisTreatmentOnline.js — production Vermont × Cellulitis Treatment condition page
 *
 * VT Pilot 2 (generated 2026-06-08). Rendered by app/[slug]/[conditionSlug]/page.js
 * when slug === 'vt' and conditionSlug === 'cellulitis-treatment-online'.
 *
 * Hard rules respected:
 *   • MedicalWebPage + FAQPage + HowTo + BreadcrumbList JSON-LD (no QAPage).
 *   • Physician schema includes NPI 1104323203 + Vermont license 042.0040345-COMP.
 *   • Vermont cash-pay only — $79 flat self-pay, no insurance billing, no payer assertions.
 *   • Visible byline + headshot + last-reviewed date (E-E-A-T).
 *   • Parth Bhavsar, MD · Family Medicine · Vermont-licensed.
 */

import FaqAccordion from '../../components/FaqAccordion';
import { VtNationalStyle } from '../../components/VtNationalChrome';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

// ────────────────────────────────────────────────────────────────────────────
// Page meta / constants
// ────────────────────────────────────────────────────────────────────────────
const PAGE_URL = "https://teledirectmd.com/vt/cellulitis-treatment-online/";
const PAGE_TITLE = "Cellulitis Treatment Online in Vermont | TeleDirectMD";
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
  { name: "Cephalexin 500 mg", regimen: "500 mg four times daily × 5–7 days", price: "~$10–$25 / course GoodRx (generic)", priceHref: "https://www.goodrx.com/cephalexin", firstLine: true, notes: "First-line for non-purulent cellulitis (covers streptococci and MSSA). Avoid if there is a true penicillin/cephalosporin allergy." },
  { name: "Dicloxacillin 500 mg", regimen: "500 mg four times daily × 5–7 days", price: "~$15–$35 / course GoodRx (generic)", priceHref: "https://www.goodrx.com/dicloxacillin", firstLine: true, notes: "Alternative beta-lactam for non-purulent cellulitis. Take on an empty stomach." },
  { name: "Clindamycin 300–450 mg", regimen: "300–450 mg three times daily × 5–7 days", price: "~$15–$40 / course GoodRx (generic)", priceHref: "https://www.goodrx.com/clindamycin", firstLine: false, notes: "Option for penicillin allergy; also covers some MRSA. Watch for diarrhea (C. difficile risk)." },
  { name: "Trimethoprim-sulfamethoxazole or doxycycline (if MRSA suspected)", regimen: "TMP-SMX DS twice daily, or doxycycline 100 mg twice daily × 5–7 days", price: "~$8–$25 / course GoodRx (generic)", priceHref: "https://www.goodrx.com/sulfamethoxazole-trimethoprim", firstLine: false, notes: "Used when MRSA is a concern (e.g., purulence, prior MRSA). Doxycycline avoided in pregnancy." },
  { name: "Amoxicillin-clavulanate 875/125 mg (animal/cat bite)", regimen: "875/125 mg twice daily × 5–7 days", price: "~$15–$40 / course GoodRx (generic)", priceHref: "https://www.goodrx.com/amoxicillin-clavulanate", firstLine: false, notes: "Covers Pasteurella from animal and cat bites. Bite wounds may need in-person wound care." }
];

const FAQ_ITEMS = [
  { question: "Can I get cellulitis treatment online in Vermont?", answerHtml: `For mild, uncomplicated cellulitis, often yes. 18 V.S.A. Chapter 219 permits licensed physicians to prescribe by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician evaluates the area on camera, screens for red flags, and prescribes oral antibiotics when the infection is mild (Eron Class I). Anything more serious is directed to in-person care. Self pay is $79. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">Read 18 V.S.A. Chapter 219</a>.`, answerPlain: "For mild, uncomplicated cellulitis, often yes. 18 V.S.A. Chapter 219 permits licensed physicians to prescribe by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician evaluates the area on camera, screens for red flags, and prescribes oral antibiotics when the infection is mild (Eron Class I). Anything more serious is directed to in-person care. Self pay is $79." },
  { question: "When is cellulitis an emergency?", answerHtml: `Seek emergency care for severe pain out of proportion to the appearance, dusky or blistering skin, high fever, or rapid spread — these can signal a necrotizing infection. Go to urgent care for red streaks (lymphangitis), an abscess or pus, or feeling systemically ill. Cellulitis on the face or eye, the hand, or a diabetic foot also needs in-person care.`, answerPlain: "Seek emergency care for severe pain out of proportion to the appearance, dusky or blistering skin, high fever, or rapid spread — these can signal a necrotizing infection. Go to urgent care for red streaks (lymphangitis), an abscess or pus, or feeling systemically ill. Cellulitis on the face or eye, the hand, or a diabetic foot also needs in-person care." },
  { question: "How is cellulitis different from a Lyme rash or shingles?", answerHtml: `Cellulitis is a bacterial infection that expands as a warm, tender, ill-defined red area. Early Lyme disease causes an expanding, often target-shaped rash from a tick bite that is usually not warm or tender. Shingles causes a painful, blistering rash confined to one dermatome on one side of the body. The physician distinguishes these by history, appearance, and distribution. <a href="/vt/tick-bite-treatment-online/">Vermont tick bite and Lyme prevention page</a>.`, answerPlain: "Cellulitis is a bacterial infection that expands as a warm, tender, ill-defined red area. Early Lyme disease causes an expanding, often target-shaped rash from a tick bite that is usually not warm or tender. Shingles causes a painful, blistering rash confined to one dermatome on one side of the body. The physician distinguishes these by history, appearance, and distribution." },
  { question: "What antibiotics treat mild cellulitis?", answerHtml: `Non-purulent cellulitis is usually treated with a beta-lactam such as cephalexin or dicloxacillin. Clindamycin is an option for penicillin allergy. If MRSA is a concern, trimethoprim-sulfamethoxazole or doxycycline may be used, and animal or cat bites warrant amoxicillin-clavulanate to cover Pasteurella, per IDSA SSTI guidance.`, answerPlain: "Non-purulent cellulitis is usually treated with a beta-lactam such as cephalexin or dicloxacillin. Clindamycin is an option for penicillin allergy. If MRSA is a concern, trimethoprim-sulfamethoxazole or doxycycline may be used, and animal or cat bites warrant amoxicillin-clavulanate to cover Pasteurella, per IDSA SSTI guidance." },
  { question: "Why does Vermont see cellulitis from outdoor activity?", answerHtml: `Hiking the Long Trail and Appalachian Trail, gardening and farming, dock splinters around Lake Champlain, and minor animal bites all create small skin breaks where bacteria can enter. Early care for a clean, minor wound and prompt attention to a developing red, warm area help prevent cellulitis from worsening.`, answerPlain: "Hiking the Long Trail and Appalachian Trail, gardening and farming, dock splinters around Lake Champlain, and minor animal bites all create small skin breaks where bacteria can enter. Early care for a clean, minor wound and prompt attention to a developing red, warm area help prevent cellulitis from worsening." },
  { question: "Why do you ask me to mark the border of the redness?", answerHtml: `Marking the edge of the red area with a pen lets you and the physician see whether the infection is improving or spreading. If the redness expands beyond the mark, develops streaks, or you develop fever, that is a sign to seek in-person care promptly. It is a simple safety check that makes telehealth treatment of mild cellulitis safer.`, answerPlain: "Marking the edge of the red area with a pen lets you and the physician see whether the infection is improving or spreading. If the redness expands beyond the mark, develops streaks, or you develop fever, that is a sign to seek in-person care promptly. It is a simple safety check that makes telehealth treatment of mild cellulitis safer." },
  { question: "How fast should mild cellulitis improve on antibiotics?", answerHtml: `Mild cellulitis usually begins to improve within 24 to 48 hours of starting the right antibiotic, with less redness, warmth, and tenderness. If it is not improving, worsening, or you develop fever or spreading streaks, seek in-person care because you may need a different antibiotic or IV treatment.`, answerPlain: "Mild cellulitis usually begins to improve within 24 to 48 hours of starting the right antibiotic, with less redness, warmth, and tenderness. If it is not improving, worsening, or you develop fever or spreading streaks, seek in-person care because you may need a different antibiotic or IV treatment." },
  { question: "Do you accept insurance in Vermont?", answerHtml: `TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont.`, answerPlain: "TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont." }
];

const VT_SIBLINGS = [
  { slug: "tick-bite-treatment-online", label: "Tick Bite & Lyme Prevention in VT", why: "A Lyme rash from a tick bite can be mistaken for cellulitis." },
  { slug: "shingles-treatment-online", label: "Shingles Treatment in VT", why: "A painful dermatomal rash to distinguish from a spreading skin infection." },
  { slug: "acne-treatment-online", label: "Acne Treatment in VT", why: "Part of our skin-condition cluster managed by video." },
  { slug: "cold-sore-treatment-online", label: "Cold Sore Treatment in VT", why: "Another skin/facial condition treated by telehealth." },
  { slug: "uti-treatment-online", label: "UTI Treatment in VT", why: "Another common antibiotic-driven outpatient infection." },
  { slug: "online-doctor-visits", label: "All Online Doctor Visits in VT", why: "General VT telehealth hub for any condition we treat." }
];

const REFERENCES = [
  { t: "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections (2014)", u: "https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/" },
  { t: "IDSA SSTI Guideline (PubMed)", u: "https://pubmed.ncbi.nlm.nih.gov/24973422/" },
  { t: "AAFP — Cellulitis and Skin and Soft Tissue Infections", u: "https://www.aafp.org/pubs/afp/issues/2021/0501/p544.html" },
  { t: "Vermont 211 — Find Local Health Resources", u: "https://vermont211.org" }
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
    description: "Online evaluation of mild, uncomplicated cellulitis for Vermont adults by secure video visit. Guideline-based oral antibiotics for Eron Class I skin infection per IDSA guidance, with clear red-flag triage. Cash-pay only at $79 flat.",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: "Cellulitis",
      alternateName: ["Skin Infection","Non-Purulent Cellulitis","Soft Tissue Infection"],
      code: { '@type': 'MedicalCode', code: "L03.90", codingSystem: 'ICD-10-CM' },
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
      cssSelector: ['#vt-cellulitis-treatment-online-opening', '#vt-cellulitis-treatment-online-opening p', '.vt-cellulitis-treatment-online__byline', '#vt-cellulitis-treatment-online-faq'],
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
    name: "How to Get Cellulitis Treatment Online in Vermont",
    description: "Three steps to receive cellulitis treatment care from a Vermont-licensed board-certified physician by secure video visit.",
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select Vermont Cellulitis Treatment. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
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
      { '@type': 'ListItem', position: 3, name: "Cellulitis Treatment Online in Vermont (Mild, Non-Purulent Skin Infection)", item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

// ────────────────────────────────────────────────────────────────────────────
// VT page-specific styles — scoped to .vt-cellulitis-treatment-online
// ────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
.vt-cellulitis-treatment-online{color:var(--tdmd-text);}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__byline-name{font-weight:700;color:var(--tdmd-navy);}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__cta-strip .vt-cellulitis-treatment-online__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__cta-strip .vt-cellulitis-treatment-online__cta-btn:hover{background:#FFF6F2;color:var(--tdmd-accent);}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__dual-card--good{border-left:5px solid #2E7D52;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__dual{grid-template-columns:minmax(0,1fr);}}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
:root[data-theme="dark"] .vt-cellulitis-treatment-online .vt-cellulitis-treatment-online__med-firstline{background:linear-gradient(90deg,#1a2e22,transparent);}
.vt-cellulitis-treatment-online .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.vt-cellulitis-treatment-online .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.vt-cellulitis-treatment-online .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.vt-cellulitis-treatment-online .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
`;

// ────────────────────────────────────────────────────────────────────────────
// Main page
// ────────────────────────────────────────────────────────────────────────────
export default function VtCellulitisTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = "vt-cellulitis-treatment-online";
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

      <div className="vt-cellulitis-treatment-online tdmd-natl">
        <VtNationalStyle />
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Cellulitis Treatment Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Cellulitis Treatment Online in Vermont (Mild, Non-Purulent Skin Infection)</h1>
                <p className="tdmd-hero-sub" data-speakable="true">Vermont adults 18+ · Secure video visit · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant · IDSA 2014 SSTI guidance</p>
                <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD provides video evaluation of mild, uncomplicated cellulitis for Vermont adults — a localized, non-purulent skin infection without signs of serious illness. A Vermont-licensed board-certified Family Medicine physician reviews the area on camera, screens carefully for red flags, and prescribes guideline-based oral antibiotics when the presentation is mild (Eron Class I). Cellulitis can worsen quickly, so safe telehealth care depends on rigorous triage; anything beyond a mild, stable infection is directed to in-person care. This page is for adults located in Vermont, including {CITIES}, and surrounding areas.`.replace('{CITIES}', vtCities.join(', ')) }} />

                {/* Visible byline (E-E-A-T) */}
                <div className="vt-cellulitis-treatment-online__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="vt-cellulitis-treatment-online__byline-text">
                    <span className="vt-cellulitis-treatment-online__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="vt-cellulitis-treatment-online__byline-meta">
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
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit, $79</a>
                  <a href="/vt/" className="tdmd-btn tdmd-btn-outline">Explore Vermont Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> L03.90 (Cellulitis, unspecified) — final coding depends on clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online Cellulitis Evaluation in Vermont</h2>
                  <ul>
                    <li>Board-certified Family Medicine MD — Vermont-licensed</li>
                    <li>Mild, non-purulent cellulitis only (Eron Class I)</li>
                    <li>Guideline-based oral antibiotics per IDSA SSTI guidance</li>
                    <li>Careful red-flag screening with marked-border follow-up</li>
                    <li>e-Prescriptions sent to your VT pharmacy electronically</li>
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
              <p dangerouslySetInnerHTML={{ __html: `Vermont's outdoor culture — hiking the Long Trail and Appalachian Trail, gardening and farming, dock splinters along Lake Champlain, and minor scrapes, animal bites, or tick-bite sites — creates frequent small breaks in the skin where cellulitis can take hold. Mild, early cellulitis is a localized area of warm, red, tender skin without pus, fever, or spreading streaks, and it can often be started on oral antibiotics. Because cellulitis can progress quickly, TeleDirectMD treats only mild, stable cases (Eron Class I) and triages anything more serious to in-person care. Vermont adults can be evaluated by secure video visit through TeleDirectMD, consistent with 18 V.S.A. Chapter 219. Self pay is $79.` }} />
            </div>
          </div>
        </section>

        {/* ─── 3) ELIGIBILITY CHECKLIST ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Cellulitis Treatment Telehealth Eligibility Checklist for Vermont</h2>
            <p><strong>You are likely a good fit for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="vt-cellulitis-treatment-online__dual">
              <div className="vt-cellulitis-treatment-online__dual-card vt-cellulitis-treatment-online__dual-card--good">
                <h3>✓ You Are a Good Fit If</h3>
                <ul>
              <li>You are 18 years or older and located in Vermont at the time of the visit</li>
              <li>You have a small, localized area of warm, red, tender skin (mild cellulitis)</li>
              <li>You have no fever, chills, or feeling of being systemically unwell</li>
              <li>There are no red streaks spreading from the area and no pus or abscess</li>
              <li>You can show the area on camera and mark its border to monitor for spread</li>
                </ul>
              </div>
              <div className="vt-cellulitis-treatment-online__dual-card vt-cellulitis-treatment-online__dual-card--alert">
                <h3>✗ Telehealth May Not Be Right If</h3>
                <ul>
              <li>You have fever, chills, rapid heart rate, or feel systemically ill</li>
              <li>The redness is spreading quickly, has red streaks (lymphangitis), or there is an abscess or pus</li>
              <li>The infection involves the face/eye area, hand, or a diabetic foot, or you are immunocompromised</li>
              <li>There is severe pain out of proportion, dusky skin, or blistering (possible necrotizing infection — emergency)</li>
              <li>You have a large or deep animal-bite wound needing in-person wound care</li>
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
            <h2>Vermont Telehealth Law and Your Cellulitis Treatment Visit</h2>

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
            <h2 itemProp="name">How Online Cellulitis Treatment Works in Vermont</h2>
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
            <h2>Cellulitis Treatment Cost &amp; Insurance in Vermont</h2>
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
                <h3>Typical Cellulitis Treatment Visit Cost in Vermont</h3>
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
            <h2>Cellulitis in Vermont: Mild Skin Infection vs. Look-Alikes</h2>
            <p dangerouslySetInnerHTML={{ __html: `Cellulitis is a common bacterial infection of the skin and underlying soft tissue, usually caused by streptococci or <em>Staphylococcus aureus</em> entering through a break in the skin. In Vermont, those breaks frequently come from outdoor recreation — hiking blisters and scrapes on the Long Trail and Appalachian Trail, gardening and farm work, splinters from docks and barns around Lake Champlain, and minor animal or insect bites. Early, mild cellulitis appears as a localized patch of warm, red, tender skin with a poorly defined border, without pus, fever, or red streaking. The <a href="https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/" rel="noopener" target="_blank">IDSA 2014 practice guideline for skin and soft tissue infections</a> classifies mild, uncomplicated infection in a patient without systemic signs as Eron Class I — the only category appropriate for outpatient oral therapy and telehealth.` }} />
            <p dangerouslySetInnerHTML={{ __html: `Telling cellulitis apart from look-alikes is the core clinical task, and Vermont's tick exposure makes this especially important. Cellulitis is a bacterial infection that expands as a warm, tender, ill-defined red area and is not confined to a single nerve band. The expanding, often target-shaped rash of early Lyme disease (erythema migrans) spreads outward from a tick-bite site and is usually not warm or tender the way cellulitis is — see our <a href="/vt/tick-bite-treatment-online/">Vermont tick bite and Lyme prevention page</a>. Shingles produces a painful, blistering rash confined to one dermatome on one side of the body — see our <a href="/vt/shingles-treatment-online/">Vermont shingles treatment page</a>. The physician uses history, appearance, and distribution to distinguish these and avoid mistreating one for another.` }} />
            <p dangerouslySetInnerHTML={{ __html: `Treatment of mild cellulitis is a short course of oral antibiotics, with the choice driven by whether methicillin-resistant <em>S. aureus</em> (MRSA) is a concern and by any penicillin allergy, per <a href="https://www.aafp.org/pubs/afp/issues/2021/0501/p544.html" rel="noopener" target="_blank">AAFP's review of IDSA SSTI guidance</a>. Non-purulent cellulitis is usually treated with a beta-lactam such as cephalexin; clindamycin is an option for penicillin allergy; and animal or cat bites warrant amoxicillin-clavulanate to cover Pasteurella. A safe telehealth visit includes asking you to mark the border of the redness so you can watch for spread, and clear instructions to seek in-person care urgently if the area expands, develops streaks, or you develop fever.` }} />
          </div>
        </section>

        {/* ─── 8) MEDICATIONS TABLE ─── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Cellulitis Treatment Options and Pricing in Vermont</h2>
            <p dangerouslySetInnerHTML={{ __html: `The options below follow <a href="https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/" rel="noopener" target="_blank">IDSA SSTI guidance</a> for mild, non-purulent cellulitis. All are non-controlled and prescribable by Vermont telehealth. Cash prices vary by Vermont pharmacy. Prescription costs are separate from the $79 visit fee.` }} />
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cellulitis Treatment medication options and prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Oral antibiotics for mild cellulitis per IDSA SSTI guidance. Cash prices vary by Vermont pharmacy. Prescription costs are separate from the visit fee.
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
                    <tr key={med.name} className={med.firstLine ? 'vt-cellulitis-treatment-online__med-firstline' : ''}>
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
            <div className="vt-cellulitis-treatment-online__dual">
              <div className="vt-cellulitis-treatment-online__dual-card vt-cellulitis-treatment-online__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
              <li>Small, localized, mild cellulitis with no systemic symptoms</li>
              <li>No spreading streaks, pus, or abscess</li>
              <li>Able to show and mark the border on camera</li>
              <li>Adult 18+, located in Vermont</li>
              <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                </ul>
              </div>
              <div className="vt-cellulitis-treatment-online__dual-card vt-cellulitis-treatment-online__dual-card--alert">
                <h3>→ When a Skin Infection Is an Emergency</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>ER / 911:</strong> Severe pain out of proportion, dusky or blistering skin, high fever — possible necrotizing infection` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Urgent care:</strong> Rapidly spreading redness, red streaks (lymphangitis), abscess or pus, or feeling systemically ill` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>In-person eval:</strong> Face/eye, hand, or diabetic-foot involvement, or if you are immunocompromised` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Wound care:</strong> Large or deep animal-bite wounds` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong><a href="https://vermont211.org" rel="noopener" target="_blank">Vermont 211</a>:</strong> Find local urgent care and clinics` }} />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) CTA STRIP ─── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="vt-cellulitis-treatment-online__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — Vermont adults, 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · No ER wait</small>
              </div>
              <a className="vt-cellulitis-treatment-online__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 11) FAQ (Premium Style A accordion) ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Cellulitis Treatment in Vermont"
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
            <div className="vt-cellulitis-treatment-online__sibling-grid">
              {VT_SIBLINGS.map((s) => (
                <a key={s.slug} className="vt-cellulitis-treatment-online__sibling" href={`/vt/${s.slug}/`}>
                  <span className="vt-cellulitis-treatment-online__sibling-label">{s.label}</span>
                  <span className="vt-cellulitis-treatment-online__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 13) PILLAR / SPOKE LINKS ─── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of two pillars: the <a href="/vt/">Vermont state hub</a> and the <a href="/cellulitis-treatment-online/">national cellulitis page</a>. Use the links below to book a visit or explore more.</p>
            <div className="vt-cellulitis-treatment-online__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/cellulitis-treatment-online/">National Cellulitis Treatment page</a>
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

        {/* Standard cost-compare / symptoms back-links (consistent with the rest of the system) */}
        <WhatDoesThisCostBlock conditionSlug="cellulitis-treatment-online" conditionName="Cellulitis Treatment" stateName="Vermont" />
        <CompareTeleDirectMDLinkRow conditionSlug="cellulitis-treatment-online" />
        <CommonSymptomsBlock conditionSlug="cellulitis-treatment-online" conditionName="Cellulitis Treatment" />
      </div>
    </>
  );
}
