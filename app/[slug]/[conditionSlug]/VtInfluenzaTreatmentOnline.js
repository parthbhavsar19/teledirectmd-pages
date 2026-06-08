/**
 * VtInfluenzaTreatmentOnline.js — production Vermont × Influenza (Flu) condition page
 *
 * VT Pilot 2 (generated 2026-06-08). Rendered by app/[slug]/[conditionSlug]/page.js
 * when slug === 'vt' and conditionSlug === 'influenza-treatment-online'.
 *
 * Hard rules respected:
 *   • MedicalWebPage + FAQPage + HowTo + BreadcrumbList JSON-LD (no QAPage).
 *   • Physician schema includes NPI 1104323203 + Vermont license 042.0040345-COMP.
 *   • Vermont cash-pay only — $79 flat self-pay, no insurance billing, no payer assertions.
 *   • Visible byline + headshot + last-reviewed date (E-E-A-T).
 *   • Parth Bhavsar, MD · Family Medicine · Vermont-licensed.
 */

import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

// ────────────────────────────────────────────────────────────────────────────
// Page meta / constants
// ────────────────────────────────────────────────────────────────────────────
const PAGE_URL = "https://teledirectmd.com/vt/influenza-treatment-online/";
const PAGE_TITLE = "Influenza (Flu) Treatment Online in Vermont | TeleDirectMD";
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
  { name: "Oseltamivir (Tamiflu) 75 mg", regimen: "75 mg by mouth twice daily × 5 days, started within 48 hours of onset", price: "~$30–$55 cash (generic)", priceHref: null, firstLine: true, notes: "First-line and most commonly used. Most effective within 48 hours; still indicated beyond 48 hours for high-risk patients." },
  { name: "Baloxavir marboxil (Xofluza) 40–80 mg", regimen: "Single oral dose (weight-based)", price: "Varies; brand only", priceHref: null, firstLine: true, notes: "Convenient single-dose alternative; cap-dependent endonuclease inhibitor. Not for pregnancy or breastfeeding." },
  { name: "Zanamivir (Relenza)", regimen: "2 inhalations twice daily × 5 days", price: "Varies", priceHref: null, firstLine: false, notes: "Inhaled; avoid in asthma or COPD due to bronchospasm risk." },
  { name: "Oseltamivir post-exposure prophylaxis", regimen: "75 mg once daily × 10 days after exposure", price: "~$30–$55 cash (generic)", priceHref: null, firstLine: false, notes: "For high-risk close contacts of a confirmed case when clinically appropriate." }
];

const FAQ_ITEMS = [
  { question: "Can I get flu treatment online in Vermont?", answerHtml: `Yes. 18 V.S.A. Chapter 219 (Vermont&apos;s telemedicine statute) permits licensed physicians to deliver care via synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician can evaluate flu symptoms, screen for red flags, and prescribe an antiviral when appropriate. Adults 18+ located in Vermont can book a same-day video visit. Self pay is $79. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">Read 18 V.S.A. Chapter 219</a>.`, answerPlain: "Yes. 18 V.S.A. Chapter 219 (Vermont’s telemedicine statute) permits licensed physicians to deliver care via synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician can evaluate flu symptoms, screen for red flags, and prescribe an antiviral when appropriate. Adults 18+ located in Vermont can book a same-day video visit. Self pay is $79." },
  { question: "Why does the 48-hour window matter for Tamiflu?", answerHtml: `Oseltamivir (Tamiflu) and other antivirals work best when started within 48 hours of the first flu symptom in otherwise healthy adults, per CDC and ACIP guidance. After 48 hours the benefit drops for healthy adults, though high-risk patients may still be treated. Because the clock starts at symptom onset, a same-day telehealth visit can preserve that window.`, answerPlain: "Oseltamivir (Tamiflu) and other antivirals work best when started within 48 hours of the first flu symptom in otherwise healthy adults, per CDC and ACIP guidance. After 48 hours the benefit drops for healthy adults, though high-risk patients may still be treated. Because the clock starts at symptom onset, a same-day telehealth visit can preserve that window." },
  { question: "When is Vermont flu season?", answerHtml: `Vermont&apos;s influenza season typically runs October through April — about seven months. The state sits in CDC ILINet Region 1, where the influenza-like illness baseline is roughly 2.2%, and activity usually peaks December through February, occasionally into March.`, answerPlain: "Vermont’s influenza season typically runs October through April — about seven months. The state sits in CDC ILINet Region 1, where the influenza-like illness baseline is roughly 2.2%, and activity usually peaks December through February, occasionally into March." },
  { question: "How is the flu different from a common cold?", answerHtml: `Flu comes on abruptly with high fever, prominent body aches, headache, and debilitating fatigue. A common cold develops gradually and is dominated by nasal congestion and a scratchy throat, with little or no fever. If your illness was gradual and mild, our Vermont common cold page is the better fit.`, answerPlain: "Flu comes on abruptly with high fever, prominent body aches, headache, and debilitating fatigue. A common cold develops gradually and is dominated by nasal congestion and a scratchy throat, with little or no fever. If your illness was gradual and mild, our Vermont common cold page is the better fit." },
  { question: "What does flu treatment cost in Vermont?", answerHtml: `The TeleDirectMD video visit is a flat $79 cash-pay fee with no insurance billing in Vermont. Generic oseltamivir typically runs about $30 to $55 cash at Vermont pharmacies. The visit fee is paid at booking and prescription costs are filled separately at your pharmacy.`, answerPlain: "The TeleDirectMD video visit is a flat $79 cash-pay fee with no insurance billing in Vermont. Generic oseltamivir typically runs about $30 to $55 cash at Vermont pharmacies. The visit fee is paid at booking and prescription costs are filled separately at your pharmacy." },
  { question: "When should I go to the ER for the flu?", answerHtml: `Seek emergency care for trouble breathing, rapid breathing, bluish lips or face, chest pain, persistent dizziness or confusion, seizures, severe weakness, or a pulse-oximeter reading below 94%. Do not use TeleDirectMD if any of these red flags are present.`, answerPlain: "Seek emergency care for trouble breathing, rapid breathing, bluish lips or face, chest pain, persistent dizziness or confusion, seizures, severe weakness, or a pulse-oximeter reading below 94%. Do not use TeleDirectMD if any of these red flags are present." },
  { question: "Can the flu turn into a sinus infection?", answerHtml: `Yes. Influenza can be followed by a secondary bacterial sinus infection, often signaled by symptoms returning after initial improvement or congestion persisting beyond 10 days. See our Vermont sinus infection page if that describes your course. <a href="/vt/sinus-infection-treatment-online/">Vermont sinus infection page</a>.`, answerPlain: "Yes. Influenza can be followed by a secondary bacterial sinus infection, often signaled by symptoms returning after initial improvement or congestion persisting beyond 10 days. See our Vermont sinus infection page if that describes your course." },
  { question: "Are flu antivirals controlled substances in Vermont?", answerHtml: `No. Oseltamivir, baloxavir, and zanamivir are not controlled substances and can be e-prescribed to any Vermont pharmacy. TeleDirectMD does not prescribe controlled substances in any state.`, answerPlain: "No. Oseltamivir, baloxavir, and zanamivir are not controlled substances and can be e-prescribed to any Vermont pharmacy. TeleDirectMD does not prescribe controlled substances in any state." },
  { question: "Do you accept insurance in Vermont?", answerHtml: `TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont.`, answerPlain: "TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont." }
];

const VT_SIBLINGS = [
  { slug: "common-cold-treatment-online", label: "Common Cold Treatment in VT", why: "Gradual, mild, nasal-dominant illness — the key flu differential." },
  { slug: "sinus-infection-treatment-online", label: "Sinus Infection Treatment in VT", why: "Common secondary bacterial complication after the flu." },
  { slug: "sore-throat-treatment-online", label: "Sore Throat Treatment in VT", why: "Pharyngitis frequently accompanies influenza." },
  { slug: "ear-pain-treatment-online", label: "Ear Pain Treatment in VT", why: "Adult ear infection often follows a viral respiratory illness." },
  { slug: "cellulitis-treatment-online", label: "Cellulitis Treatment in VT", why: "Another antibiotic-driven outpatient infection we treat." },
  { slug: "online-doctor-visits", label: "All Online Doctor Visits in VT", why: "General VT telehealth hub for any condition we treat." }
];

const REFERENCES = [
  { t: "VT DOH — Respiratory Illness Activity in Vermont (FluView VT)", u: "https://www.healthvermont.gov/disease-control/respiratory-illnesses/respiratory-illness-activity-vermont" },
  { t: "CDC FluView — Flu Season Overview", u: "https://www.cdc.gov/flu/about/season.html" },
  { t: "CDC — Influenza Antiviral Medications (ACIP)", u: "https://www.cdc.gov/flu/treatment/index.html" },
  { t: "IDSA — Clinical Practice Guideline for Influenza", u: "https://www.idsociety.org/practice-guideline/influenza/" }
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
    description: "Flu treatment by secure video visit for Vermont adults. Board-certified Family Medicine physician. Antiviral (Tamiflu) prescribing within the 48-hour window when appropriate. Cash-pay only at $79 flat.",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: "Influenza",
      alternateName: ["Flu","Seasonal Influenza","Influenza A","Influenza B"],
      code: { '@type': 'MedicalCode', code: "J11.1", codingSystem: 'ICD-10-CM' },
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
      cssSelector: ['#vt-influenza-treatment-online-opening', '#vt-influenza-treatment-online-opening p', '.vt-influenza-treatment-online__byline', '#vt-influenza-treatment-online-faq'],
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
    name: "How to Get Influenza (Flu) Online in Vermont",
    description: "Three steps to receive influenza (flu) care from a Vermont-licensed board-certified physician by secure video visit.",
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select Vermont Influenza (Flu). No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
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
      { '@type': 'ListItem', position: 3, name: "Influenza (Flu) Treatment Online in Vermont", item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

// ────────────────────────────────────────────────────────────────────────────
// VT page-specific styles — scoped to .vt-influenza-treatment-online
// ────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
.vt-influenza-treatment-online{color:var(--tdmd-text);}
.vt-influenza-treatment-online .vt-influenza-treatment-online__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.vt-influenza-treatment-online .vt-influenza-treatment-online__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__byline-name{font-weight:700;color:var(--tdmd-navy);}
.vt-influenza-treatment-online .vt-influenza-treatment-online__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.vt-influenza-treatment-online .vt-influenza-treatment-online__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__cta-strip .vt-influenza-treatment-online__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__cta-strip .vt-influenza-treatment-online__cta-btn:hover{background:#FFF6F2;color:var(--tdmd-accent);}
.vt-influenza-treatment-online .vt-influenza-treatment-online__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.vt-influenza-treatment-online .vt-influenza-treatment-online__dual-card--good{border-left:5px solid #2E7D52;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.vt-influenza-treatment-online .vt-influenza-treatment-online__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.vt-influenza-treatment-online .vt-influenza-treatment-online__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.vt-influenza-treatment-online .vt-influenza-treatment-online__dual{grid-template-columns:minmax(0,1fr);}}
.vt-influenza-treatment-online .vt-influenza-treatment-online__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.vt-influenza-treatment-online .vt-influenza-treatment-online__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.vt-influenza-treatment-online .vt-influenza-treatment-online__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.vt-influenza-treatment-online .vt-influenza-treatment-online__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-influenza-treatment-online .vt-influenza-treatment-online__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
:root[data-theme="dark"] .vt-influenza-treatment-online .vt-influenza-treatment-online__med-firstline{background:linear-gradient(90deg,#1a2e22,transparent);}
.vt-influenza-treatment-online .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.vt-influenza-treatment-online .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.vt-influenza-treatment-online .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.vt-influenza-treatment-online .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
`;

// ────────────────────────────────────────────────────────────────────────────
// Main page
// ────────────────────────────────────────────────────────────────────────────
export default function VtInfluenzaTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = "vt-influenza-treatment-online";
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

      <div className="vt-influenza-treatment-online">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Influenza (Flu) Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Influenza (Flu) Treatment Online in Vermont</h1>
                <p className="tdmd-hero-sub" data-speakable="true">Vermont adult care by secure video visit · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant · CDC + IDSA + ACIP guided</p>
                <p dangerouslySetInnerHTML={{ __html: `Influenza, commonly called the flu, often arrives abruptly with high fever, body aches, headache, dry cough, and overwhelming fatigue — a sharper, more sudden picture than a common cold. The single most time-sensitive fact in flu care is the antiviral window: oseltamivir (Tamiflu) and other antivirals work best when started within 48 hours of symptom onset. TeleDirectMD uses a safety-first telehealth approach that screens for respiratory distress, low oxygen readings, dehydration, and high-risk conditions before deciding whether antiviral treatment by video visit is appropriate. Adults with breathing difficulty, confusion, or suspected pneumonia are directed to urgent in-person care. This page is for adults located in Vermont, including {CITIES}, and surrounding areas. For Vermont's largely rural population, a same-day video visit can save a snowy drive while the 48-hour clock is still running.`.replace('{CITIES}', vtCities.join(', ')) }} />

                {/* Visible byline (E-E-A-T) */}
                <div className="vt-influenza-treatment-online__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="vt-influenza-treatment-online__byline-text">
                    <span className="vt-influenza-treatment-online__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="vt-influenza-treatment-online__byline-meta">
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J11.1 (Influenza with respiratory manifestations) — final coding depends on clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Flu Care in Vermont</h2>
                  <ul>
                    <li>Fast evaluation when flu symptoms hit suddenly</li>
                    <li>Red-flag screening for breathing difficulty and pneumonia</li>
                    <li>Antiviral prescribing inside the 48-hour window when appropriate</li>
                    <li>e-Prescriptions sent to your VT pharmacy electronically</li>
                    <li>Clear guidance on rest, fluids, fever control, and when to escalate</li>
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
              <p dangerouslySetInnerHTML={{ __html: `Vermont's influenza season typically runs October through April — roughly seven months of cold-weather illness risk in northern New England. The state sits in CDC ILINet Region 1, where the influenza-like illness baseline is about 2.2% for the season, and activity usually peaks December through February. Vermont adults with a sudden onset of fever, body aches, cough, and exhaustion can be evaluated by secure video visit through TeleDirectMD, consistent with 18 V.S.A. Chapter 219. Because antivirals such as oseltamivir (Tamiflu) are most effective within 48 hours of symptom onset, a Vermont-licensed board-certified Family Medicine physician screens for that window and for red flags before prescribing. Self pay is $79.` }} />
            </div>
          </div>
        </section>

        {/* ─── 3) ELIGIBILITY CHECKLIST ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Influenza (Flu) Telehealth Eligibility Checklist for Vermont</h2>
            <p><strong>You are likely a good fit for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="vt-influenza-treatment-online__dual">
              <div className="vt-influenza-treatment-online__dual-card vt-influenza-treatment-online__dual-card--good">
                <h3>✓ You Are a Good Fit If</h3>
                <ul>
              <li>You are 18 years or older and located in Vermont at the time of the visit</li>
              <li>You have a sudden onset of fever, body aches, cough, headache, and fatigue consistent with flu</li>
              <li>You are within 48 hours of symptom onset, or you are high-risk and want timely evaluation</li>
              <li>You can breathe comfortably and keep fluids down</li>
              <li>You do not have chest pain, confusion, or bluish lips/face</li>
                </ul>
              </div>
              <div className="vt-influenza-treatment-online__dual-card vt-influenza-treatment-online__dual-card--alert">
                <h3>✗ Telehealth May Not Be Right If</h3>
                <ul>
              <li>You have shortness of breath, rapid breathing, wheezing, or a pulse-oximeter reading below 94%</li>
              <li>You are dehydrated and cannot keep fluids down</li>
              <li>You have confusion, extreme lethargy, or fainting</li>
              <li>You have chest pain or signs of a secondary bacterial pneumonia (new fever after improving, purulent sputum)</li>
              <li>You are an infant or child — this service is adults 18+ only</li>
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
            <h2>Vermont Telehealth Law and Your Influenza (Flu) Visit</h2>

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
            <h2 itemProp="name">How Online Influenza (Flu) Works in Vermont</h2>
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
            <h2>Influenza (Flu) Cost &amp; Insurance in Vermont</h2>
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
                <h3>Typical Influenza (Flu) Visit Cost in Vermont</h3>
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
            <h2>Vermont Influenza Season and the 48-Hour Antiviral Window</h2>
            <p dangerouslySetInnerHTML={{ __html: `The <a href="https://www.healthvermont.gov/disease-control/respiratory-illnesses/respiratory-illness-activity-vermont" rel="noopener" target="_blank">Vermont Department of Health respiratory illness surveillance program</a> tracks influenza through emergency-department visits for influenza-like illness, wastewater monitoring for influenza A, strain testing, and end-of-season reports. Per <a href="https://www.cdc.gov/flu/about/season.html" rel="noopener" target="_blank">CDC FluView</a>, national flu activity has peaked most often in February over four decades of data, with December and January next most common. Vermont's cold, mountainous climate tends to sustain a slightly longer indoor-transmission season.` }} />
            <p dangerouslySetInnerHTML={{ __html: `The 48-hour antiviral window is the defining clinical fact in flu care. Oseltamivir (Tamiflu) and other antivirals shorten illness most when started within 48 hours of the first symptom in otherwise healthy adults. For high-risk patients — adults 65 and older, those with asthma, COPD, heart disease, diabetes, kidney or liver disease, or immunosuppression, and people who are pregnant — treatment is still indicated even beyond 48 hours per <a href="https://www.cdc.gov/flu/treatment/index.html" rel="noopener" target="_blank">CDC and ACIP antiviral guidance</a>. Vermont's older median age makes this high-risk group especially relevant.` }} />
            <p dangerouslySetInnerHTML={{ __html: `For cost-conscious Vermonters, generic oseltamivir runs roughly $30 to $55 cash at major Vermont pharmacies, so a $79 video visit plus the antiviral is comparable to or less than an uninsured rural urgent-care trip after a long drive. The flu differs from the common cold in onset and severity: flu is abrupt with high fever and prominent muscle aches, while a cold is gradual and predominantly nasal. If your symptoms began gradually and are mild, review our <a href="/vt/common-cold-treatment-online/">Vermont common cold page</a> instead.` }} />
          </div>
        </section>

        {/* ─── 8) MEDICATIONS TABLE ─── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Influenza (Flu) Options and Medication Costs in Vermont</h2>
            <p dangerouslySetInnerHTML={{ __html: `The antiviral options below follow <a href="https://www.cdc.gov/flu/treatment/index.html" rel="noopener" target="_blank">CDC and ACIP influenza antiviral guidance</a> and the <a href="https://www.idsociety.org/practice-guideline/influenza/" rel="noopener" target="_blank">IDSA influenza guideline</a>. All are non-controlled and prescribable by Vermont telehealth. Prescription costs are separate from the $79 visit fee.` }} />
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Influenza (Flu) medication options and prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Antiviral options per CDC/ACIP and IDSA influenza guidance. Cash prices vary by Vermont pharmacy. Prescription costs are separate from the visit fee.
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
                    <tr key={med.name} className={med.firstLine ? 'vt-influenza-treatment-online__med-firstline' : ''}>
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
            <div className="vt-influenza-treatment-online__dual">
              <div className="vt-influenza-treatment-online__dual-card vt-influenza-treatment-online__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
              <li>Sudden fever, body aches, cough, and fatigue within the 48-hour window</li>
              <li>Breathing comfortably with oxygen readings at or above 94%</li>
              <li>Able to stay hydrated at home</li>
              <li>Adult 18+, located in Vermont</li>
              <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                </ul>
              </div>
              <div className="vt-influenza-treatment-online__dual-card vt-influenza-treatment-online__dual-card--alert">
                <h3>→ When Flu Needs In-Person or Emergency Care</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>ER / 911:</strong> Trouble breathing, bluish lips, chest pain, confusion, or fainting` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Urgent care:</strong> Dehydration, inability to keep fluids down, oxygen below 94%` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>In-person eval:</strong> Suspected secondary pneumonia — new fever after initial improvement with purulent cough` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong><a href="https://vermont211.org" rel="noopener" target="_blank">Vermont 211</a>:</strong> Find local clinics and resources` }} />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) CTA STRIP ─── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="vt-influenza-treatment-online__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — Vermont adults, 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · No ER wait</small>
              </div>
              <a className="vt-influenza-treatment-online__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 11) FAQ (Premium Style A accordion) ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Influenza (Flu) in Vermont"
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
            <div className="vt-influenza-treatment-online__sibling-grid">
              {VT_SIBLINGS.map((s) => (
                <a key={s.slug} className="vt-influenza-treatment-online__sibling" href={`/vt/${s.slug}/`}>
                  <span className="vt-influenza-treatment-online__sibling-label">{s.label}</span>
                  <span className="vt-influenza-treatment-online__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 13) PILLAR / SPOKE LINKS ─── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of two pillars: the <a href="/vt/">Vermont state hub</a> and the <a href="/influenza-treatment-online/">national influenza page</a>. Use the links below to book a visit or explore more.</p>
            <div className="vt-influenza-treatment-online__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/influenza-treatment-online/">National Influenza (Flu) page</a>
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
        <WhatDoesThisCostBlock conditionSlug="influenza-treatment-online" conditionName="Influenza (Flu)" stateName="Vermont" />
        <CompareTeleDirectMDLinkRow conditionSlug="influenza-treatment-online" />
        <CommonSymptomsBlock conditionSlug="influenza-treatment-online" conditionName="Influenza (Flu)" />
      </div>
    </>
  );
}
