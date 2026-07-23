/**
 * VtCommonColdTreatmentOnline.js — production Vermont × Common Cold condition page
 *
 * VT Pilot 2 (generated 2026-06-08). Rendered by app/[slug]/[conditionSlug]/page.js
 * when slug === 'vt' and conditionSlug === 'common-cold-treatment-online'.
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
const PAGE_URL = "https://teledirectmd.com/vt/common-cold-treatment-online/";
const PAGE_TITLE = "Common Cold Treatment Online in Vermont | TeleDirectMD";
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
  { name: "Saline nasal irrigation / spray", regimen: "As needed for congestion", price: "Available OTC", priceHref: null, firstLine: true, notes: "Reduces congestion and can shorten symptom duration. Safe and well-tolerated." },
  { name: "Pseudoephedrine (decongestant)", regimen: "Per OTC label, adults", price: "Available OTC (pharmacy counter)", priceHref: null, firstLine: true, notes: "Modest benefit for nasal congestion. Caution with hypertension, heart disease, or insomnia." },
  { name: "Guaifenesin (expectorant)", regimen: "Per OTC label", price: "Available OTC", priceHref: null, firstLine: false, notes: "Loosens mucus; modest evidence; reasonable for productive-feeling cough." },
  { name: "Oxymetazoline nasal spray", regimen: "Per label, limit to 3 days", price: "Available OTC", priceHref: null, firstLine: false, notes: "Rapid decongestant; do not exceed 3 days to avoid rebound congestion." },
  { name: "Zinc lozenges", regimen: "Started within 24 hours of onset", price: "Available OTC", priceHref: null, firstLine: false, notes: "May modestly reduce duration; evidence is modest. Antibiotics are not used for a cold." }
];

const FAQ_ITEMS = [
  { question: "Do colds need antibiotics?", answerHtml: `No. The common cold is caused by viruses, so antibiotics provide no benefit and add side-effect and resistance risk. Supportive care — rest, fluids, saline irrigation, and OTC symptom relief — is the appropriate approach per CDC guidance. The value of a visit is confirming the diagnosis and ruling out a bacterial complication.`, answerPlain: "No. The common cold is caused by viruses, so antibiotics provide no benefit and add side-effect and resistance risk. Supportive care — rest, fluids, saline irrigation, and OTC symptom relief — is the appropriate approach per CDC guidance. The value of a visit is confirming the diagnosis and ruling out a bacterial complication." },
  { question: "Can I see a doctor online for a cold in Vermont?", answerHtml: `Yes. 18 V.S.A. Chapter 219 permits licensed physicians to provide care by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician can confirm your cold is viral, recommend supportive care, and screen for complications. Adults 18+ located in Vermont can book a same-day visit for $79. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">Read 18 V.S.A. Chapter 219</a>.`, answerPlain: "Yes. 18 V.S.A. Chapter 219 permits licensed physicians to provide care by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician can confirm your cold is viral, recommend supportive care, and screen for complications. Adults 18+ located in Vermont can book a same-day visit for $79." },
  { question: "When is Vermont cold season?", answerHtml: `Vermont&apos;s cold season runs roughly October through April — about seven months. Transmission peaks with the school year, the holidays, prolonged winter indoor crowding, and the December-to-March ski season at resorts like Killington, Stowe, and Sugarbush.`, answerPlain: "Vermont’s cold season runs roughly October through April — about seven months. Transmission peaks with the school year, the holidays, prolonged winter indoor crowding, and the December-to-March ski season at resorts like Killington, Stowe, and Sugarbush." },
  { question: "How do I know if it is a cold or the flu?", answerHtml: `A cold builds gradually and is dominated by nasal symptoms with little or no fever. The flu comes on abruptly with high fever, body aches, and severe fatigue. If your illness was sudden and feverish, see our Vermont influenza page, where antiviral timing matters. <a href="/vt/influenza-treatment-online/">Vermont influenza page</a>.`, answerPlain: "A cold builds gradually and is dominated by nasal symptoms with little or no fever. The flu comes on abruptly with high fever, body aches, and severe fatigue. If your illness was sudden and feverish, see our Vermont influenza page, where antiviral timing matters." },
  { question: "When does a cold become a sinus infection?", answerHtml: `Suspect a bacterial sinus infection when symptoms last beyond 10 days without improvement, or when you improve and then a second wave of fever and facial pressure returns. See our Vermont sinus infection page if that matches your course. <a href="/vt/sinus-infection-treatment-online/">Vermont sinus infection page</a>.`, answerPlain: "Suspect a bacterial sinus infection when symptoms last beyond 10 days without improvement, or when you improve and then a second wave of fever and facial pressure returns. See our Vermont sinus infection page if that matches your course." },
  { question: "What supportive care actually works for a cold?", answerHtml: `Saline nasal irrigation, short-term decongestants such as pseudoephedrine, guaifenesin to loosen mucus, and limiting oxymetazoline spray to three days are evidence-based. Zinc lozenges started within 24 hours and honey for cough are reasonable comfort measures. The physician tailors advice to your symptoms and medications.`, answerPlain: "Saline nasal irrigation, short-term decongestants such as pseudoephedrine, guaifenesin to loosen mucus, and limiting oxymetazoline spray to three days are evidence-based. Zinc lozenges started within 24 hours and honey for cough are reasonable comfort measures. The physician tailors advice to your symptoms and medications." },
  { question: "When should a cold prompt in-person care?", answerHtml: `Seek in-person or emergency care for shortness of breath, wheezing, chest pain, a high fever with productive cough, or symptoms that are severe or rapidly worsening. TeleDirectMD is appropriate for typical, uncomplicated colds in adults.`, answerPlain: "Seek in-person or emergency care for shortness of breath, wheezing, chest pain, a high fever with productive cough, or symptoms that are severe or rapidly worsening. TeleDirectMD is appropriate for typical, uncomplicated colds in adults." },
  { question: "What does a cold visit cost in Vermont?", answerHtml: `The video visit is a flat $79 cash-pay fee with no insurance billing in Vermont. The fee covers the physician&apos;s evaluation, reassurance, and supportive-care plan — not a prescription, since antibiotics are not used for a cold. Any OTC products are purchased separately.`, answerPlain: "The video visit is a flat $79 cash-pay fee with no insurance billing in Vermont. The fee covers the physician’s evaluation, reassurance, and supportive-care plan — not a prescription, since antibiotics are not used for a cold. Any OTC products are purchased separately." },
  { question: "Do you accept insurance in Vermont?", answerHtml: `TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. HSA and FSA cards are accepted. There is no insurance billing in Vermont — straightforward, transparent pricing.`, answerPlain: "TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. HSA and FSA cards are accepted. There is no insurance billing in Vermont — straightforward, transparent pricing." }
];

const VT_SIBLINGS = [
  { slug: "influenza-treatment-online", label: "Influenza Treatment in VT", why: "Sudden, feverish illness where antiviral timing matters." },
  { slug: "sinus-infection-treatment-online", label: "Sinus Infection Treatment in VT", why: "The most common escalation when a cold runs past 10 days." },
  { slug: "sore-throat-treatment-online", label: "Sore Throat Treatment in VT", why: "Severe sore throat with fever may be strep, not a cold." },
  { slug: "ear-pain-treatment-online", label: "Ear Pain Treatment in VT", why: "Adult ear infections often follow a cold." },
  { slug: "seasonal-allergies-treatment-online", label: "Seasonal Allergies Treatment in VT", why: "Allergic rhinitis can mimic a lingering cold." },
  { slug: "online-doctor-visits", label: "All Online Doctor Visits in VT", why: "General VT telehealth hub for any condition we treat." }
];

const REFERENCES = [
  { t: "NIAID — Common Cold", u: "https://www.niaid.nih.gov/diseases-conditions/common-cold" },
  { t: "CDC — Common Colds: Protect Yourself and Others", u: "https://www.cdc.gov/antibiotic-use/colds.html" },
  { t: "AAFP — Treatment of the Common Cold", u: "https://www.aafp.org/afp/2012/1015/p724.html" },
  { t: "VT DOH — Respiratory Illness Activity in Vermont", u: "https://www.healthvermont.gov/disease-control/respiratory-illnesses/respiratory-illness-activity-vermont" }
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
    description: "Common cold (viral URI) evaluation by secure video visit for Vermont adults. Supportive-care guidance, screening for bacterial complications, and clear education that colds do not need antibiotics. Cash-pay only at $79 flat.",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: "Common Cold",
      alternateName: ["Viral Upper Respiratory Infection","URI","Acute Nasopharyngitis","Head Cold"],
      code: { '@type': 'MedicalCode', code: "J00", codingSystem: 'ICD-10-CM' },
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
      cssSelector: ['#vt-common-cold-treatment-online-opening', '#vt-common-cold-treatment-online-opening p', '.vt-common-cold-treatment-online__byline', '#vt-common-cold-treatment-online-faq'],
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
    name: "How to Get Common Cold Online in Vermont",
    description: "Three steps to receive common cold care from a Vermont-licensed board-certified physician by secure video visit.",
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select Vermont Common Cold. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
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
      { '@type': 'ListItem', position: 3, name: "Common Cold Treatment Online in Vermont", item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

// ────────────────────────────────────────────────────────────────────────────
// VT page-specific styles — scoped to .vt-common-cold-treatment-online
// ────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
.vt-common-cold-treatment-online{color:var(--tdmd-text);}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__byline-name{font-weight:700;color:var(--tdmd-navy);}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__cta-strip .vt-common-cold-treatment-online__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__cta-strip .vt-common-cold-treatment-online__cta-btn:hover{background:#FFF6F2;color:var(--tdmd-accent);}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__dual-card--good{border-left:5px solid #2E7D52;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.vt-common-cold-treatment-online .vt-common-cold-treatment-online__dual{grid-template-columns:minmax(0,1fr);}}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-common-cold-treatment-online .vt-common-cold-treatment-online__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
:root[data-theme="dark"] .vt-common-cold-treatment-online .vt-common-cold-treatment-online__med-firstline{background:linear-gradient(90deg,#1a2e22,transparent);}
.vt-common-cold-treatment-online .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.vt-common-cold-treatment-online .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.vt-common-cold-treatment-online .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.vt-common-cold-treatment-online .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
`;

// ────────────────────────────────────────────────────────────────────────────
// Main page
// ────────────────────────────────────────────────────────────────────────────
export default function VtCommonColdTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = "vt-common-cold-treatment-online";
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

      <div className="vt-common-cold-treatment-online tdmd-natl">
        <VtNationalStyle />
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Common Cold Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Common Cold Treatment Online in Vermont</h1>
                <p className="tdmd-hero-sub" data-speakable="true">Vermont adult care by secure video visit · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant · NIAID + CDC + AAFP guided</p>
                <p dangerouslySetInnerHTML={{ __html: `The common cold is a viral upper respiratory infection that builds gradually over a day or two, dominated by nasal congestion, a runny or stuffy nose, sneezing, a scratchy throat, and a mild cough — usually with little or no fever. Most colds are caused by rhinoviruses and resolve on their own within seven to ten days. The most important clinical message is simple: a cold does not need antibiotics. The value of a TeleDirectMD visit is to confirm that your symptoms are viral, rule out a bacterial complication that would change management, and recommend the supportive care that genuinely helps. This page is for adults located in Vermont, including {CITIES}, and surrounding areas. If you would rather not drive on icy roads for reassurance and a clear plan, a video visit gets you an answer from home.`.replace('{CITIES}', vtCities.join(', ')) }} />

                {/* Visible byline (E-E-A-T) */}
                <div className="vt-common-cold-treatment-online__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="vt-common-cold-treatment-online__byline-text">
                    <span className="vt-common-cold-treatment-online__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="vt-common-cold-treatment-online__byline-meta">
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J00 (Acute nasopharyngitis / common cold) — final coding depends on clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Cold Care in Vermont</h2>
                  <ul>
                    <li>Confirmation that your symptoms are a viral cold, not something more</li>
                    <li>Screening for bacterial sinusitis, strep, and lower-respiratory complications</li>
                    <li>Evidence-based supportive-care and OTC guidance</li>
                    <li>Clear advice on when antibiotics are — and are not — appropriate</li>
                    <li>Guidance on when to escalate to in-person care</li>
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
              <p dangerouslySetInnerHTML={{ __html: `Vermont's common cold season runs roughly October through April — about seven months shaped by the state's northern New England winters, prolonged indoor crowding, and the December-to-March ski season at resorts like Killington, Stowe, and Sugarbush, where packed lodges and chairlifts spread respiratory viruses quickly. Adults typically get two to four colds a year, and the illness is a clinical diagnosis requiring no lab test. A TeleDirectMD video visit, consistent with 18 V.S.A. Chapter 219, lets a Vermont-licensed board-certified Family Medicine physician confirm a viral cold, screen for bacterial complications, and recommend supportive care. Antibiotics are not indicated for a cold. Self pay is $79.` }} />
            </div>
          </div>
        </section>

        {/* ─── 3) ELIGIBILITY CHECKLIST ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Common Cold Telehealth Eligibility Checklist for Vermont</h2>
            <p><strong>You are likely a good fit for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="vt-common-cold-treatment-online__dual">
              <div className="vt-common-cold-treatment-online__dual-card vt-common-cold-treatment-online__dual-card--good">
                <h3>✓ You Are a Good Fit If</h3>
                <ul>
              <li>You are 18 years or older and located in Vermont at the time of the visit</li>
              <li>You have gradual nasal congestion, runny nose, sneezing, scratchy throat, and mild cough</li>
              <li>You have little or no fever and feel generally functional</li>
              <li>You want confirmation it is viral and a clear supportive-care plan</li>
              <li>Your symptoms are not severe and have lasted fewer than 10 days</li>
                </ul>
              </div>
              <div className="vt-common-cold-treatment-online__dual-card vt-common-cold-treatment-online__dual-card--alert">
                <h3>✗ Telehealth May Not Be Right If</h3>
                <ul>
              <li>You have shortness of breath, wheezing, or chest pain</li>
              <li>You have a high fever (over 39°C / 102°F) or a sudden severe onset suggesting flu</li>
              <li>Your symptoms have lasted more than 10 days or worsened after improving (possible sinusitis)</li>
              <li>You have a severe sore throat with white patches and fever (possible strep)</li>
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
            <h2>Vermont Telehealth Law and Your Common Cold Visit</h2>

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
            <h2 itemProp="name">How Online Common Cold Works in Vermont</h2>
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
            <h2>Common Cold Cost &amp; Insurance in Vermont</h2>
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
                <h3>Typical Common Cold Visit Cost in Vermont</h3>
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
            <h2>Why Vermont Colds Rarely Need Antibiotics — and When They Do</h2>
            <p dangerouslySetInnerHTML={{ __html: `More than 200 rhinovirus types, plus seasonal coronaviruses, RSV, parainfluenza, and metapneumovirus, cause the common cold, according to the <a href="https://www.niaid.nih.gov/diseases-conditions/common-cold" rel="noopener" target="_blank">National Institute of Allergy and Infectious Diseases (NIAID)</a>. Because these are viruses, antibiotics provide no benefit and carry real downsides — side effects and antibiotic resistance. The <a href="https://www.cdc.gov/antibiotic-use/colds.html" rel="noopener" target="_blank">CDC</a> is explicit that colds should be managed with supportive care, not antibiotics.` }} />
            <p dangerouslySetInnerHTML={{ __html: `Evidence-based supportive care, summarized in <a href="https://www.aafp.org/afp/2012/1015/p724.html" rel="noopener" target="_blank">AAFP guidance on the common cold</a>, includes saline nasal irrigation, short-term decongestants such as pseudoephedrine, and guaifenesin to loosen mucus; oxymetazoline nasal spray should be limited to three days to avoid rebound congestion. Zinc lozenges started within 24 hours and honey for cough soothing are reasonable comfort measures. The physician tailors recommendations to your symptoms and other medications.` }} />
            <p dangerouslySetInnerHTML={{ __html: `A cold occasionally crosses into bacterial territory, and that is what the visit screens for. Suspect a bacterial sinus infection if symptoms last beyond 10 days without improvement, or if you improve and then a "second wave" of fever and facial pressure returns; review our <a href="/vt/sinus-infection-treatment-online/">Vermont sinus infection page</a>. A predominant sore throat with fever, tonsillar exudate, and tender neck nodes may be strep — see our <a href="/vt/sore-throat-treatment-online/">Vermont sore throat page</a>. Productive cough with chest pain or wheezing and shortness of breath needs in-person evaluation. A sudden, severe, feverish onset points to influenza instead — see our <a href="/vt/influenza-treatment-online/">Vermont influenza page</a>.` }} />
          </div>
        </section>

        {/* ─── 8) MEDICATIONS TABLE ─── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Common Cold Supportive Care in Vermont (No Antibiotics)</h2>
            <p dangerouslySetInnerHTML={{ __html: `The supportive-care options below are over-the-counter and are recommended for symptom relief only — a cold resolves on its own. Antibiotics are deliberately omitted because they are not indicated for a viral cold per <a href="https://www.cdc.gov/antibiotic-use/colds.html" rel="noopener" target="_blank">CDC guidance</a>. Product costs are separate from the $79 visit fee.` }} />
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Common Cold medication options and prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Over-the-counter supportive-care options for the common cold. No antibiotics — colds are viral. Costs vary by Vermont pharmacy.
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
                    <tr key={med.name} className={med.firstLine ? 'vt-common-cold-treatment-online__med-firstline' : ''}>
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
            <div className="vt-common-cold-treatment-online__dual">
              <div className="vt-common-cold-treatment-online__dual-card vt-common-cold-treatment-online__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
              <li>Gradual, mild congestion, runny nose, and scratchy throat</li>
              <li>Little or no fever; you feel generally functional</li>
              <li>Symptoms present fewer than 10 days</li>
              <li>Adult 18+, located in Vermont</li>
              <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                </ul>
              </div>
              <div className="vt-common-cold-treatment-online__dual-card vt-common-cold-treatment-online__dual-card--alert">
                <h3>→ When a Cold Needs In-Person Care or a Different Page</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>ER / 911:</strong> Shortness of breath, chest pain, or bluish lips` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Urgent care:</strong> High fever with productive cough or wheezing` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Sinus infection page:</strong> Symptoms beyond 10 days or fever returning after improvement` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Sore throat page:</strong> Severe sore throat with exudate and fever (possible strep)` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong><a href="https://vermont211.org" rel="noopener" target="_blank">Vermont 211</a>:</strong> Find local clinics and resources` }} />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) CTA STRIP ─── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="vt-common-cold-treatment-online__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — Vermont adults, 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · No ER wait</small>
              </div>
              <a className="vt-common-cold-treatment-online__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 11) FAQ (Premium Style A accordion) ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Common Cold in Vermont"
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
            <div className="vt-common-cold-treatment-online__sibling-grid">
              {VT_SIBLINGS.map((s) => (
                <a key={s.slug} className="vt-common-cold-treatment-online__sibling" href={`/vt/${s.slug}/`}>
                  <span className="vt-common-cold-treatment-online__sibling-label">{s.label}</span>
                  <span className="vt-common-cold-treatment-online__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 13) PILLAR / SPOKE LINKS ─── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of two pillars: the <a href="/vt/">Vermont state hub</a> and the <a href="/common-cold-treatment-online/">national common cold page</a>. Use the links below to book a visit or explore more.</p>
            <div className="vt-common-cold-treatment-online__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/common-cold-treatment-online/">National Common Cold page</a>
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
        <WhatDoesThisCostBlock conditionSlug="common-cold-treatment-online" conditionName="Common Cold" stateName="Vermont" />
        <CompareTeleDirectMDLinkRow conditionSlug="common-cold-treatment-online" />
        <CommonSymptomsBlock conditionSlug="common-cold-treatment-online" conditionName="Common Cold" />
      </div>
    </>
  );
}
