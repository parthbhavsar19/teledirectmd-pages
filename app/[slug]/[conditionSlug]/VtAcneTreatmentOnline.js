/**
 * VtAcneTreatmentOnline.js — production Vermont × Acne Treatment condition page
 *
 * VT Pilot 2 (generated 2026-06-08). Rendered by app/[slug]/[conditionSlug]/page.js
 * when slug === 'vt' and conditionSlug === 'acne-treatment-online'.
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
const PAGE_URL = "https://teledirectmd.com/vt/acne-treatment-online/";
const PAGE_TITLE = "Acne Treatment Online in Vermont | TeleDirectMD";
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
  { name: "Adapalene 0.1% / 0.3% (topical retinoid)", regimen: "Thin layer to affected skin once daily at night", price: "~$10–$30 / tube GoodRx (generic); 0.1% also OTC", priceHref: "https://www.goodrx.com/adapalene", firstLine: true, notes: "Foundational topical retinoid. Start every other night to limit irritation; use sunscreen. Pairs well with benzoyl peroxide." },
  { name: "Tretinoin 0.025% / 0.05% (topical retinoid)", regimen: "Pea-sized amount at night to dry skin", price: "~$20–$45 / tube GoodRx (generic)", priceHref: "https://www.goodrx.com/tretinoin", firstLine: true, notes: "Effective topical retinoid; avoid in pregnancy. Expect a few weeks before improvement." },
  { name: "Clindamycin 1% + benzoyl peroxide (topical)", regimen: "Apply to affected areas once or twice daily", price: "~$20–$60 / tube GoodRx (generic)", priceHref: "https://www.goodrx.com/clindamycin-benzoyl-peroxide", firstLine: true, notes: "Topical antibiotic always combined with benzoyl peroxide to limit resistance, per the AAD 2024 guideline." },
  { name: "Doxycycline 50 / 100 mg (oral antibiotic)", regimen: "50–100 mg once or twice daily, typically 3–6 months", price: "~$10–$25 / month GoodRx (generic)", priceHref: "https://www.goodrx.com/doxycycline", firstLine: false, notes: "For moderate inflammatory acne, short-term and combined with a topical retinoid or benzoyl peroxide. Avoid in pregnancy; photosensitivity." },
  { name: "Spironolactone 50–200 mg (hormonal, adult women)", regimen: "50–200 mg daily", price: "~$10–$30 / month GoodRx (generic)", priceHref: "https://www.goodrx.com/spironolactone", firstLine: false, notes: "Oral hormonal option for adult-female jawline/chin acne. Not for use in pregnancy; the physician reviews suitability." }
];

const FAQ_ITEMS = [
  { question: "Can I get acne treatment online in Vermont?", answerHtml: `Yes. 18 V.S.A. Chapter 219 permits licensed physicians to prescribe by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician assesses your skin on camera and prescribes an evidence-based regimen electronically to your Vermont pharmacy for mild-to-moderate acne. Self pay is $79. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">Read 18 V.S.A. Chapter 219</a>.`, answerPlain: "Yes. 18 V.S.A. Chapter 219 permits licensed physicians to prescribe by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician assesses your skin on camera and prescribes an evidence-based regimen electronically to your Vermont pharmacy for mild-to-moderate acne. Self pay is $79." },
  { question: "Which acne guideline does TeleDirectMD follow?", answerHtml: `TeleDirectMD follows the 2024 American Academy of Dermatology guideline for the management of acne vulgaris, published in the Journal of the American Academy of Dermatology in May 2024. It frames treatment around topical retinoids, benzoyl peroxide, antibiotics combined with benzoyl peroxide, and hormonal therapy.`, answerPlain: "TeleDirectMD follows the 2024 American Academy of Dermatology guideline for the management of acne vulgaris, published in the Journal of the American Academy of Dermatology in May 2024. It frames treatment around topical retinoids, benzoyl peroxide, antibiotics combined with benzoyl peroxide, and hormonal therapy." },
  { question: "What is the first-line treatment for mild acne?", answerHtml: `A topical retinoid such as adapalene or tretinoin is foundational, often combined with benzoyl peroxide. Benzoyl peroxide lowers bacteria and limits antibiotic resistance, which is why topical antibiotics like clindamycin are always paired with it rather than used alone.`, answerPlain: "A topical retinoid such as adapalene or tretinoin is foundational, often combined with benzoyl peroxide. Benzoyl peroxide lowers bacteria and limits antibiotic resistance, which is why topical antibiotics like clindamycin are always paired with it rather than used alone." },
  { question: "Can I get spironolactone for hormonal acne?", answerHtml: `Yes, for eligible adult women. The AAD 2024 guideline supports spironolactone (commonly 50 to 200 mg daily) for hormonal acne — typically jawline and chin flares that worsen premenstrually. Spironolactone is not used in pregnancy; the physician reviews your suitability before prescribing.`, answerPlain: "Yes, for eligible adult women. The AAD 2024 guideline supports spironolactone (commonly 50 to 200 mg daily) for hormonal acne — typically jawline and chin flares that worsen premenstrually. Spironolactone is not used in pregnancy; the physician reviews your suitability before prescribing." },
  { question: "Why are oral antibiotics combined with other treatments?", answerHtml: `Oral antibiotics such as doxycycline are used short-term for moderate inflammatory acne — generally 3 to 6 months — and combined with a topical retinoid or benzoyl peroxide to improve results and limit antibiotic resistance, per the AAD 2024 guideline.`, answerPlain: "Oral antibiotics such as doxycycline are used short-term for moderate inflammatory acne — generally 3 to 6 months — and combined with a topical retinoid or benzoyl peroxide to improve results and limit antibiotic resistance, per the AAD 2024 guideline." },
  { question: "Can TeleDirectMD prescribe Accutane (isotretinoin)?", answerHtml: `No. Isotretinoin requires the federally mandated iPLEDGE program, in-person evaluation, and laboratory monitoring that fall outside TeleDirectMD&apos;s telehealth scope. Severe, scarring, or nodulocystic acne should be managed by an in-person dermatologist.`, answerPlain: "No. Isotretinoin requires the federally mandated iPLEDGE program, in-person evaluation, and laboratory monitoring that fall outside TeleDirectMD’s telehealth scope. Severe, scarring, or nodulocystic acne should be managed by an in-person dermatologist." },
  { question: "How long until acne treatment works?", answerHtml: `Most acne regimens take several weeks to show improvement, and skin can briefly worsen before it gets better. Consistency matters. The physician sets expectations and a follow-up plan so the regimen can be adjusted if needed.`, answerPlain: "Most acne regimens take several weeks to show improvement, and skin can briefly worsen before it gets better. Consistency matters. The physician sets expectations and a follow-up plan so the regimen can be adjusted if needed." },
  { question: "Do you accept insurance in Vermont?", answerHtml: `TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont.`, answerPlain: "TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont." }
];

const VT_SIBLINGS = [
  { slug: "cold-sore-treatment-online", label: "Cold Sore Treatment in VT", why: "Another common skin/facial condition we treat by video." },
  { slug: "shingles-treatment-online", label: "Shingles Treatment in VT", why: "Skin-condition cluster — different cause, similar video workflow." },
  { slug: "cellulitis-treatment-online", label: "Cellulitis Treatment in VT", why: "A skin infection that needs antibiotics — part of our skin cluster." },
  { slug: "tick-bite-treatment-online", label: "Tick Bite & Lyme Prevention in VT", why: "Skin and outdoor-exposure cluster for Vermonters." },
  { slug: "pink-eye-treatment-online", label: "Pink Eye Treatment in VT", why: "Another fast, visible condition managed by video." },
  { slug: "online-doctor-visits", label: "All Online Doctor Visits in VT", why: "General VT telehealth hub for any condition we treat." }
];

const REFERENCES = [
  { t: "AAD — Guidelines of Care for the Management of Acne Vulgaris (2024)", u: "https://www.aad.org/member/clinical-quality/guidelines/acne" },
  { t: "JAAD — 2024 AAD Acne Management Guideline (PubMed)", u: "https://pubmed.ncbi.nlm.nih.gov/38300170/" },
  { t: "University of Vermont — Facts & Figures", u: "https://www.uvm.edu/" }
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
    description: "Online acne treatment for Vermont adults by secure video visit. Topical retinoids, benzoyl peroxide, topical and oral antibiotics, and spironolactone for hormonal acne, aligned with the 2024 American Academy of Dermatology guideline. Cash-pay only at $79 flat.",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: "Acne Vulgaris",
      alternateName: ["Acne","Hormonal Acne","Adult Acne"],
      code: { '@type': 'MedicalCode', code: "L70.0", codingSystem: 'ICD-10-CM' },
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
      cssSelector: ['#vt-acne-treatment-online-opening', '#vt-acne-treatment-online-opening p', '.vt-acne-treatment-online__byline', '#vt-acne-treatment-online-faq'],
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
    name: "How to Get Acne Treatment Online in Vermont",
    description: "Three steps to receive acne treatment care from a Vermont-licensed board-certified physician by secure video visit.",
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select Vermont Acne Treatment. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
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
      { '@type': 'ListItem', position: 3, name: "Acne Treatment Online in Vermont", item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

// ────────────────────────────────────────────────────────────────────────────
// VT page-specific styles — scoped to .vt-acne-treatment-online
// ────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
.vt-acne-treatment-online{color:var(--tdmd-text);}
.vt-acne-treatment-online .vt-acne-treatment-online__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.vt-acne-treatment-online .vt-acne-treatment-online__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.vt-acne-treatment-online .vt-acne-treatment-online__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.vt-acne-treatment-online .vt-acne-treatment-online__byline-name{font-weight:700;color:var(--tdmd-navy);}
.vt-acne-treatment-online .vt-acne-treatment-online__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.vt-acne-treatment-online .vt-acne-treatment-online__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-acne-treatment-online .vt-acne-treatment-online__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.vt-acne-treatment-online .vt-acne-treatment-online__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.vt-acne-treatment-online .vt-acne-treatment-online__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.vt-acne-treatment-online .vt-acne-treatment-online__cta-strip .vt-acne-treatment-online__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.vt-acne-treatment-online .vt-acne-treatment-online__cta-strip .vt-acne-treatment-online__cta-btn:hover{background:#FFF6F2;color:var(--tdmd-accent);}
.vt-acne-treatment-online .vt-acne-treatment-online__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.vt-acne-treatment-online .vt-acne-treatment-online__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.vt-acne-treatment-online .vt-acne-treatment-online__dual-card--good{border-left:5px solid #2E7D52;}
.vt-acne-treatment-online .vt-acne-treatment-online__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.vt-acne-treatment-online .vt-acne-treatment-online__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.vt-acne-treatment-online .vt-acne-treatment-online__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.vt-acne-treatment-online .vt-acne-treatment-online__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.vt-acne-treatment-online .vt-acne-treatment-online__dual{grid-template-columns:minmax(0,1fr);}}
.vt-acne-treatment-online .vt-acne-treatment-online__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.vt-acne-treatment-online .vt-acne-treatment-online__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.vt-acne-treatment-online .vt-acne-treatment-online__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.vt-acne-treatment-online .vt-acne-treatment-online__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.vt-acne-treatment-online .vt-acne-treatment-online__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.vt-acne-treatment-online .vt-acne-treatment-online__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.vt-acne-treatment-online .vt-acne-treatment-online__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-acne-treatment-online .vt-acne-treatment-online__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
:root[data-theme="dark"] .vt-acne-treatment-online .vt-acne-treatment-online__med-firstline{background:linear-gradient(90deg,#1a2e22,transparent);}
.vt-acne-treatment-online .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.vt-acne-treatment-online .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.vt-acne-treatment-online .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.vt-acne-treatment-online .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
`;

// ────────────────────────────────────────────────────────────────────────────
// Main page
// ────────────────────────────────────────────────────────────────────────────
export default function VtAcneTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = "vt-acne-treatment-online";
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

      <div className="vt-acne-treatment-online tdmd-natl">
        <VtNationalStyle />
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Acne Treatment Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Acne Treatment Online in Vermont</h1>
                <p className="tdmd-hero-sub" data-speakable="true">Vermont adults 18+ · Secure video visit · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant · AAD 2024 acne guideline</p>
                <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD provides acne treatment by secure video visit for Vermont adults with mild-to-moderate acne. A Vermont-licensed board-certified Family Medicine physician reviews your skin on camera, asks about your routine and prior treatments, and builds a regimen — topical retinoids, benzoyl peroxide, topical or oral antibiotics, or hormonal therapy such as spironolactone for adult women. Care follows the 2024 American Academy of Dermatology acne guideline. This page is for adults located in Vermont, including {CITIES}, and surrounding areas.`.replace('{CITIES}', vtCities.join(', ')) }} />

                {/* Visible byline (E-E-A-T) */}
                <div className="vt-acne-treatment-online__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="vt-acne-treatment-online__byline-text">
                    <span className="vt-acne-treatment-online__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="vt-acne-treatment-online__byline-meta">
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> L70.0 (Acne vulgaris) — final coding depends on clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online Acne Care in Vermont</h2>
                  <ul>
                    <li>Board-certified Family Medicine MD — Vermont-licensed</li>
                    <li>Regimens aligned with the 2024 AAD acne guideline</li>
                    <li>Topical retinoids, benzoyl peroxide, and combination therapy</li>
                    <li>Spironolactone for adult-female hormonal acne when appropriate</li>
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
              <p dangerouslySetInnerHTML={{ __html: `Acne is the most common skin condition in the United States, and it is far from a teenage-only problem — adult acne, especially hormonal acne in women, is increasingly common. Vermont's roughly 35,000 to 40,000 college students, including about 14,000 at the University of Vermont in Burlington, are a core acne population, and rural Vermonters often face long drives and long waits to see a dermatologist. Mild-to-moderate acne responds well to topical and oral regimens that can be managed by video. Vermont adults can start or adjust acne treatment by secure video visit through TeleDirectMD, consistent with 18 V.S.A. Chapter 219. Care follows the 2024 American Academy of Dermatology acne guideline. Self pay is $79.` }} />
            </div>
          </div>
        </section>

        {/* ─── 3) ELIGIBILITY CHECKLIST ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Acne Treatment Telehealth Eligibility Checklist for Vermont</h2>
            <p><strong>You are likely a good fit for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="vt-acne-treatment-online__dual">
              <div className="vt-acne-treatment-online__dual-card vt-acne-treatment-online__dual-card--good">
                <h3>✓ You Are a Good Fit If</h3>
                <ul>
              <li>You are 18 years or older and located in Vermont at the time of the visit</li>
              <li>You have mild-to-moderate acne (comedones, papules, or pustules)</li>
              <li>You can show the affected skin clearly on camera</li>
              <li>You are not pregnant, or you understand which options are pregnancy-safe</li>
              <li>You are looking to start or adjust a topical or oral regimen</li>
                </ul>
              </div>
              <div className="vt-acne-treatment-online__dual-card vt-acne-treatment-online__dual-card--alert">
                <h3>✗ Telehealth May Not Be Right If</h3>
                <ul>
              <li>You have severe nodulocystic or scarring acne likely needing isotretinoin</li>
              <li>You may be a candidate for isotretinoin (requires in-person dermatology and iPLEDGE)</li>
              <li>You have a sudden severe flare with fever or joint pain (possible acne fulminans)</li>
              <li>You are pregnant and need a tailored, pregnancy-safe dermatology plan</li>
              <li>Your skin findings are atypical and may not be acne at all</li>
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
            <h2>Vermont Telehealth Law and Your Acne Treatment Visit</h2>

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
            <h2 itemProp="name">How Online Acne Treatment Works in Vermont</h2>
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
            <h2>Acne Treatment Cost &amp; Insurance in Vermont</h2>
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
                <h3>Typical Acne Treatment Visit Cost in Vermont</h3>
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
            <h2>Acne in Vermont: Care Aligned With the 2024 AAD Guideline</h2>
            <p dangerouslySetInnerHTML={{ __html: `Acne vulgaris is the most common dermatologic condition in the United States and affects adults as well as adolescents; adult-onset and persistent hormonal acne in women is a growing share of cases. Vermont's student population — about 35,000 to 40,000 across the state's colleges, with roughly 14,000 at the <a href="https://www.uvm.edu/" rel="noopener" target="_blank">University of Vermont</a> in Burlington — concentrates a classic acne demographic, and the state's rural geography means dermatology access can involve long travel and multi-month waits. Mild-to-moderate acne is well suited to telehealth because the physician can assess lesion type and severity on camera and start an evidence-based regimen the same day.` }} />
            <p dangerouslySetInnerHTML={{ __html: `The <a href="https://www.aad.org/member/clinical-quality/guidelines/acne" rel="noopener" target="_blank">2024 American Academy of Dermatology guideline for the management of acne vulgaris</a> (published in JAAD, May 2024) frames treatment around topical and systemic options. Topical retinoids such as adapalene and tretinoin are foundational; benzoyl peroxide reduces bacteria and limits antibiotic resistance; and topical antibiotics like clindamycin should always be paired with benzoyl peroxide rather than used alone. For moderate inflammatory acne, oral antibiotics such as doxycycline or minocycline are used short-term — generally 3 to 6 months — and also combined with benzoyl peroxide or a retinoid to protect against resistance.` }} />
            <p dangerouslySetInnerHTML={{ __html: `For adult women with hormonal acne — flares along the jawline and chin, often premenstrual — the guideline supports spironolactone (commonly 50 to 200 mg daily) as an effective oral option, and combined oral contraceptives are another hormonal route. TeleDirectMD manages mild-to-moderate acne with these regimens. Severe, scarring, or nodulocystic acne, and anyone who may need isotretinoin, requires in-person dermatology because isotretinoin involves the federally mandated iPLEDGE program and laboratory monitoring that fall outside TeleDirectMD's scope.` }} />
          </div>
        </section>

        {/* ─── 8) MEDICATIONS TABLE ─── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Acne Treatment Options and Pricing in Vermont</h2>
            <p dangerouslySetInnerHTML={{ __html: `The options below reflect the <a href="https://www.aad.org/member/clinical-quality/guidelines/acne" rel="noopener" target="_blank">2024 AAD acne guideline</a>. All are non-controlled and prescribable by Vermont telehealth. Cash prices vary by Vermont pharmacy. Prescription costs are separate from the $79 visit fee.` }} />
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Acne Treatment medication options and prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Acne regimens per the 2024 AAD guideline. Cash prices vary by Vermont pharmacy. Prescription costs are separate from the visit fee.
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
                    <tr key={med.name} className={med.firstLine ? 'vt-acne-treatment-online__med-firstline' : ''}>
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
            <div className="vt-acne-treatment-online__dual">
              <div className="vt-acne-treatment-online__dual-card vt-acne-treatment-online__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
              <li>Mild-to-moderate acne you can show on camera</li>
              <li>Looking to start or adjust topical or oral therapy</li>
              <li>No features suggesting a need for isotretinoin</li>
              <li>Adult 18+, located in Vermont</li>
              <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                </ul>
              </div>
              <div className="vt-acne-treatment-online__dual-card vt-acne-treatment-online__dual-card--alert">
                <h3>→ When Acne Needs In-Person Dermatology</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Dermatology:</strong> Severe nodulocystic or scarring acne, or possible isotretinoin candidacy (iPLEDGE program)` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Urgent eval:</strong> Sudden severe flare with fever or joint pain (possible acne fulminans)` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OB / dermatology:</strong> Pregnancy needing a tailored, pregnancy-safe plan` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>In-person eval:</strong> Atypical skin findings that may not be acne` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong><a href="https://portal.healthconnect.vermont.gov/" rel="noopener" target="_blank">Vermont Health Connect</a>:</strong> Find dermatology and primary care options` }} />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) CTA STRIP ─── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="vt-acne-treatment-online__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — Vermont adults, 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · No ER wait</small>
              </div>
              <a className="vt-acne-treatment-online__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 11) FAQ (Premium Style A accordion) ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Acne Treatment in Vermont"
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
            <div className="vt-acne-treatment-online__sibling-grid">
              {VT_SIBLINGS.map((s) => (
                <a key={s.slug} className="vt-acne-treatment-online__sibling" href={`/vt/${s.slug}/`}>
                  <span className="vt-acne-treatment-online__sibling-label">{s.label}</span>
                  <span className="vt-acne-treatment-online__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 13) PILLAR / SPOKE LINKS ─── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of two pillars: the <a href="/vt/">Vermont state hub</a> and the <a href="/acne-treatment-online/">national acne page</a>. Use the links below to book a visit or explore more.</p>
            <div className="vt-acne-treatment-online__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/acne-treatment-online/">National Acne Treatment page</a>
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
        <WhatDoesThisCostBlock conditionSlug="acne-treatment-online" conditionName="Acne Treatment" stateName="Vermont" />
        <CompareTeleDirectMDLinkRow conditionSlug="acne-treatment-online" />
        <CommonSymptomsBlock conditionSlug="acne-treatment-online" conditionName="Acne Treatment" />
      </div>
    </>
  );
}
