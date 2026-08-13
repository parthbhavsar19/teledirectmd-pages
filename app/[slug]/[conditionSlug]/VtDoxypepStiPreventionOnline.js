/**
 * VtDoxypepStiPreventionOnline.js — production Vermont × DoxyPEP STI Prevention condition page
 *
 * VT Pilot 2 (generated 2026-06-08). Rendered by app/[slug]/[conditionSlug]/page.js
 * when slug === 'vt' and conditionSlug === 'doxypep-sti-prevention-online'.
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
const PAGE_URL = "https://teledirectmd.com/vt/doxypep-sti-prevention-online/";
const PAGE_TITLE = "DoxyPEP STI Prevention Online in Vermont | TeleDirectMD";
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
  { name: "Doxycycline 100 mg (taken as 200 mg per dose)", regimen: "200 mg by mouth, once, within 72 hours of sex (max 200 mg/24h)", price: "~$10–$25 / supply GoodRx (generic)", priceHref: "https://www.goodrx.com/doxycycline", firstLine: true, notes: "CDC DoxyPEP regimen. Take as soon as possible after sex — ideally within 24 hours, no later than 72. Separate from antacids, calcium, and dairy by ~2 hours." }
];

const FAQ_ITEMS = [
  { question: "What is DoxyPEP, and is it treatment or prevention?", answerHtml: `DoxyPEP is doxycycline post-exposure prophylaxis — a single 200 mg dose of doxycycline taken after sex to prevent bacterial STIs. It is prevention, not treatment for an active infection. If you already have an STI, it should be treated first; DoxyPEP is for reducing the risk of future infection in eligible high-risk individuals.`, answerPlain: "DoxyPEP is doxycycline post-exposure prophylaxis — a single 200 mg dose of doxycycline taken after sex to prevent bacterial STIs. It is prevention, not treatment for an active infection. If you already have an STI, it should be treated first; DoxyPEP is for reducing the risk of future infection in eligible high-risk individuals." },
  { question: "Who is eligible for DoxyPEP in Vermont?", answerHtml: `Per the CDC June 2024 guidelines, DoxyPEP is recommended for gay, bisexual, and other men who have sex with men (MSM) and for transgender women who have had a bacterial STI — chlamydia, gonorrhea, or syphilis — in the past 12 months. A September 2024 update added other gender-diverse people assigned male at birth.`, answerPlain: "Per the CDC June 2024 guidelines, DoxyPEP is recommended for gay, bisexual, and other men who have sex with men (MSM) and for transgender women who have had a bacterial STI — chlamydia, gonorrhea, or syphilis — in the past 12 months. A September 2024 update added other gender-diverse people assigned male at birth." },
  { question: "Can cisgender women take DoxyPEP?", answerHtml: `Cisgender women are NOT in the current CDC recommendation for DoxyPEP. The one randomized trial in cisgender women found no significant reduction in bacterial STIs, so the CDC considers the evidence insufficient. TeleDirectMD prescribes DoxyPEP only within the populations the CDC recommends. <a href="https://www.cdc.gov/mmwr/volumes/73/rr/rr7302a1.htm" rel="noopener" target="_blank">See the CDC guidance</a>.`, answerPlain: "Cisgender women are NOT in the current CDC recommendation for DoxyPEP. The one randomized trial in cisgender women found no significant reduction in bacterial STIs, so the CDC considers the evidence insufficient. TeleDirectMD prescribes DoxyPEP only within the populations the CDC recommends." },
  { question: "How and when do I take DoxyPEP?", answerHtml: `Take doxycycline 200 mg by mouth as a single dose as soon as possible after sex — ideally within 24 hours and no later than 72 hours — with a maximum of 200 mg in any 24-hour period. Separate it from antacids, calcium, and dairy by about two hours to preserve absorption.`, answerPlain: "Take doxycycline 200 mg by mouth as a single dose as soon as possible after sex — ideally within 24 hours and no later than 72 hours — with a maximum of 200 mg in any 24-hour period. Separate it from antacids, calcium, and dairy by about two hours to preserve absorption." },
  { question: "Does DoxyPEP cause antibiotic resistance?", answerHtml: `It can contribute to resistance. In trials, tetracycline-resistant Staphylococcus aureus increased among DoxyPEP users, and 30% of gonococcal isolates in the DoxyPEP arm were tetracycline-resistant versus 11% in the standard-of-care arm. The CDC concluded the benefit outweighs current concerns in high-risk groups but urged ongoing monitoring. The physician discusses this tradeoff at your visit.`, answerPlain: "It can contribute to resistance. In trials, tetracycline-resistant Staphylococcus aureus increased among DoxyPEP users, and 30% of gonococcal isolates in the DoxyPEP arm were tetracycline-resistant versus 11% in the standard-of-care arm. The CDC concluded the benefit outweighs current concerns in high-risk groups but urged ongoing monitoring. The physician discusses this tradeoff at your visit." },
  { question: "Do I still need STI testing on DoxyPEP?", answerHtml: `Yes. The CDC recommends baseline STI testing and retesting every 3 to 6 months at anatomic sites of exposure, plus HIV screening and consideration of HIV PrEP for HIV-negative MSM and transgender women. Testing is best arranged with an LGBTQ+ health provider, your PCP, or a Vermont testing site.`, answerPlain: "Yes. The CDC recommends baseline STI testing and retesting every 3 to 6 months at anatomic sites of exposure, plus HIV screening and consideration of HIV PrEP for HIV-negative MSM and transgender women. Testing is best arranged with an LGBTQ+ health provider, your PCP, or a Vermont testing site." },
  { question: "Is DoxyPEP confidential in Vermont?", answerHtml: `Yes. TeleDirectMD uses HIPAA-compliant secure video, and Vermont&apos;s telehealth law applies the same confidentiality protections to telehealth as to in-person care. For Burlington&apos;s LGBTQ+ community and others with limited local sexual-health specialty access, telehealth offers a discreet, cash-pay way to obtain DoxyPEP.`, answerPlain: "Yes. TeleDirectMD uses HIPAA-compliant secure video, and Vermont’s telehealth law applies the same confidentiality protections to telehealth as to in-person care. For Burlington’s LGBTQ+ community and others with limited local sexual-health specialty access, telehealth offers a discreet, cash-pay way to obtain DoxyPEP." },
  { question: "Do you accept insurance in Vermont?", answerHtml: `TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont.`, answerPlain: "TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont." }
];

const VT_SIBLINGS = [
  { slug: "chlamydia-treatment-online", label: "Chlamydia Treatment in VT", why: "If you have an active infection, treat it first — DoxyPEP prevents future ones." },
  { slug: "bv-treatment-online", label: "BV (Bacterial Vaginosis) Treatment in VT", why: "Part of the same sexual-health cluster." },
  { slug: "yeast-infection-treatment-online", label: "Yeast Infection Treatment in VT", why: "Sexual-health adjacent condition we treat by telehealth." },
  { slug: "uti-treatment-online", label: "UTI Treatment in VT", why: "Genitourinary symptom overlap in the same population." },
  { slug: "birth-control-refills-online", label: "Birth Control Refills in VT", why: "Sexual-health adjacent — managed by the same physician." },
];

const REFERENCES = [
  { t: "CDC — Clinical Guidelines on Doxycycline Postexposure Prophylaxis (MMWR, June 6, 2024)", u: "https://www.cdc.gov/mmwr/volumes/73/rr/rr7302a1.htm" },
  { t: "Luetkemeyer AF et al. — Doxycycline PEP for STI Prevention (DoxyPEP trial, Ann Intern Med 2023)", u: "https://pubmed.ncbi.nlm.nih.gov/37018288/" },
  { t: "ASHA — New CDC Guidelines for Doxy PEP", u: "https://www.ashasexualhealth.org/new-cdc-guidelines-offer-recommendations-on-doxy-pep/" },
  { t: "Vermont Department of Health — Sexually Transmitted Infections", u: "https://www.healthvermont.gov/disease-control/sexually-transmitted-infections" }
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
    description: "DoxyPEP (doxycycline post-exposure prophylaxis) for bacterial STI prevention online in Vermont. Prescribed for eligible MSM and transgender women per the CDC June 2024 guidelines. Cisgender women are NOT in the current CDC recommendation. Cash-pay only at $79 flat.",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: "DoxyPEP (Doxycycline Post-Exposure Prophylaxis)",
      alternateName: ["Doxy-PEP","Doxycycline PEP","Bacterial STI Prevention"],
      code: { '@type': 'MedicalCode', code: "Z29.8", codingSystem: 'ICD-10-CM' },
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
      cssSelector: ['#vt-doxypep-sti-prevention-online-opening', '#vt-doxypep-sti-prevention-online-opening p', '.vt-doxypep-sti-prevention-online__byline', '#vt-doxypep-sti-prevention-online-faq'],
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
    name: "How to Get DoxyPEP STI Prevention Online in Vermont",
    description: "Three steps to receive doxypep sti prevention care from a Vermont-licensed board-certified physician by secure video visit.",
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select Vermont DoxyPEP STI Prevention. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
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
      { '@type': 'ListItem', position: 3, name: "DoxyPEP STI Prevention Online in Vermont", item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

// ────────────────────────────────────────────────────────────────────────────
// VT page-specific styles — scoped to .vt-doxypep-sti-prevention-online
// ────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
.vt-doxypep-sti-prevention-online{color:var(--tdmd-text);}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__byline-name{font-weight:700;color:var(--tdmd-navy);}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__cta-strip .vt-doxypep-sti-prevention-online__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__cta-strip .vt-doxypep-sti-prevention-online__cta-btn:hover{background:#FFF6F2;color:var(--tdmd-accent);}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__dual-card--good{border-left:5px solid #2E7D52;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__dual{grid-template-columns:minmax(0,1fr);}}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
:root[data-theme="dark"] .vt-doxypep-sti-prevention-online .vt-doxypep-sti-prevention-online__med-firstline{background:linear-gradient(90deg,#1a2e22,transparent);}
.vt-doxypep-sti-prevention-online .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.vt-doxypep-sti-prevention-online .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.vt-doxypep-sti-prevention-online .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.vt-doxypep-sti-prevention-online .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
`;

// ────────────────────────────────────────────────────────────────────────────
// Main page
// ────────────────────────────────────────────────────────────────────────────
export default function VtDoxypepStiPreventionOnline() {
  const schemas = buildSchemas();
  const pid = "vt-doxypep-sti-prevention-online";
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

      <div className="vt-doxypep-sti-prevention-online">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">DoxyPEP STI Prevention Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">DoxyPEP STI Prevention Online in Vermont</h1>
                <p className="tdmd-hero-sub" data-speakable="true">Vermont adults 18+ · Secure video visit · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant · CDC June 2024 DoxyPEP Guidelines</p>
                <p dangerouslySetInnerHTML={{ __html: `DoxyPEP is prevention, not treatment. TeleDirectMD provides doxycycline post-exposure prophylaxis (DoxyPEP) by secure video visit for eligible Vermont adults who want to reduce their risk of future bacterial sexually transmitted infections. Per the CDC June 2024 guidelines, DoxyPEP is recommended for gay, bisexual, and other men who have sex with men (MSM) and transgender women with a bacterial STI in the past 12 months; cisgender women are NOT in the current CDC recommendation. A Vermont-licensed board-certified Family Medicine physician confirms eligibility, counsels on dosing and antimicrobial resistance, and prescribes when appropriate. This page is for adults located in Vermont, including {CITIES}, and surrounding areas.`.replace('{CITIES}', vtCities.join(', ')) }} />

                {/* Visible byline (E-E-A-T) */}
                <div className="vt-doxypep-sti-prevention-online__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="vt-doxypep-sti-prevention-online__byline-text">
                    <span className="vt-doxypep-sti-prevention-online__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="vt-doxypep-sti-prevention-online__byline-meta">
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> Z29.8 (Encounter for other specified prophylactic measures) — final coding depends on clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online DoxyPEP Prevention in Vermont</h2>
                  <ul>
                    <li>Board-certified Family Medicine MD — Vermont-licensed</li>
                    <li>Prevention model per CDC June 2024 DoxyPEP guidelines</li>
                    <li>For eligible MSM and transgender women (prior STI in 12 months)</li>
                    <li>Cisgender women: NOT in current CDC recommendation</li>
                    <li>Discreet, cash-pay care — counseling on resistance and monitoring</li>
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
              <p dangerouslySetInnerHTML={{ __html: `DoxyPEP — doxycycline taken after sex to prevent bacterial STIs — is one of the newest tools in sexual-health prevention, formalized by the CDC in June 2024. It is prevention, not treatment for an active infection. The CDC recommends DoxyPEP for gay, bisexual, and other men who have sex with men (MSM) and for transgender women who have had a bacterial STI (chlamydia, gonorrhea, or syphilis) in the prior 12 months. Cisgender women are NOT in the current CDC recommendation, because the one randomized trial in cisgender women showed no significant benefit. Eligible Vermont adults — including Burlington's LGBTQ+ community, which has limited local sexual-health specialty access — can obtain DoxyPEP discreetly by secure video visit through TeleDirectMD, consistent with 18 V.S.A. Chapter 219. Self pay is $79.` }} />
            </div>
          </div>
        </section>

        {/* ─── 3) ELIGIBILITY CHECKLIST ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>DoxyPEP STI Prevention Telehealth Eligibility Checklist for Vermont</h2>
            <p><strong>You are likely a good fit for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="vt-doxypep-sti-prevention-online__dual">
              <div className="vt-doxypep-sti-prevention-online__dual-card vt-doxypep-sti-prevention-online__dual-card--good">
                <h3>✓ You Are a Good Fit If</h3>
                <ul>
              <li>You are 18 years or older and located in Vermont at the time of the visit</li>
              <li>You are a man who has sex with men (MSM) or a transgender woman</li>
              <li>You have had a bacterial STI (chlamydia, gonorrhea, or syphilis) in the past 12 months</li>
              <li>You can arrange baseline and periodic STI testing every 3 to 6 months</li>
              <li>You understand DoxyPEP is prevention, not treatment for an active infection</li>
                </ul>
              </div>
              <div className="vt-doxypep-sti-prevention-online__dual-card vt-doxypep-sti-prevention-online__dual-card--alert">
                <h3>✗ Telehealth May Not Be Right If</h3>
                <ul>
              <li>You are a cisgender woman — DoxyPEP is NOT in the current CDC recommendation for cisgender women</li>
              <li>You do not have a documented bacterial STI in the past 12 months</li>
              <li>You have current STI symptoms — the active infection should be treated first</li>
              <li>You are pregnant or have a doxycycline allergy or contraindication</li>
              <li>You have known HIV that needs coordinated specialty management</li>
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
            <h2>Vermont Telehealth Law and Your DoxyPEP STI Prevention Visit</h2>

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
            <h2 itemProp="name">How Online DoxyPEP STI Prevention Works in Vermont</h2>
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
            <h2>DoxyPEP STI Prevention Cost &amp; Insurance in Vermont</h2>
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
                <h3>Typical DoxyPEP STI Prevention Visit Cost in Vermont</h3>
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
            <h2>DoxyPEP in Vermont: Who Is Eligible Under CDC Guidance</h2>
            <p dangerouslySetInnerHTML={{ __html: `The <a href="https://www.cdc.gov/mmwr/volumes/73/rr/rr7302a1.htm" rel="noopener" target="_blank">CDC Clinical Guidelines on Doxycycline Postexposure Prophylaxis (MMWR, June 6, 2024)</a> recommend DoxyPEP for two groups: gay, bisexual, and other men who have sex with men (MSM), and transgender women, who have had at least one bacterial STI — chlamydia, gonorrhea, or syphilis — diagnosed in the past 12 months. A September 2024 CDC update extended the same framework to other gender-diverse people assigned male at birth who have condomless sex with partners assigned male at birth. The protocol is doxycycline 200 mg taken by mouth as a single dose as soon as possible within 72 hours of oral, vaginal, or anal sex, with no more than 200 mg in any 24-hour period.` }} />
            <p dangerouslySetInnerHTML={{ __html: `Cisgender women are NOT in the current CDC DoxyPEP recommendation. The single randomized trial in this population — 449 cisgender women in Kenya — found no significant reduction in bacterial STIs, so the CDC considers the evidence insufficient and does not recommend DoxyPEP for cisgender women. Cisgender heterosexual men and transgender men are likewise not part of the CDC recommendation because of limited data. TeleDirectMD prescribes DoxyPEP only within the populations the CDC recommends; we will not prescribe it off-guideline simply on request.` }} />
            <p dangerouslySetInnerHTML={{ __html: `Effective prevention requires honest counseling on antimicrobial resistance. In the DoxyPEP trials, tetracycline-resistant <em>Staphylococcus aureus</em> increased among participants taking doxycycline, and 30% of gonococcal isolates in the DoxyPEP arm were tetracycline-resistant compared with 11% in the standard-of-care arm. The CDC concluded the benefit outweighs current resistance concerns in high-risk groups but called for ongoing surveillance, so the physician discusses these tradeoffs at every visit. DoxyPEP also requires baseline STI testing and retesting every 3 to 6 months at anatomic sites of exposure, plus HIV screening and consideration of HIV PrEP for HIV-negative patients — care best coordinated with an LGBTQ+ health provider or Vermont testing site.` }} />
          </div>
        </section>

        {/* ─── 8) MEDICATIONS TABLE ─── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>DoxyPEP Dosing and Pricing in Vermont</h2>
            <p dangerouslySetInnerHTML={{ __html: `DoxyPEP uses a single medication, doxycycline, per the <a href="https://www.cdc.gov/mmwr/volumes/73/rr/rr7302a1.htm" rel="noopener" target="_blank">CDC June 2024 DoxyPEP guidelines</a>. It is non-controlled and prescribable by Vermont telehealth for eligible patients. Cash prices vary by Vermont pharmacy. Prescription costs are separate from the $79 visit fee.` }} />
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="DoxyPEP STI Prevention medication options and prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  DoxyPEP dosing per the CDC June 2024 guidelines. Cash prices vary by Vermont pharmacy. Prescription costs are separate from the visit fee.
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
                    <tr key={med.name} className={med.firstLine ? 'vt-doxypep-sti-prevention-online__med-firstline' : ''}>
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
            <div className="vt-doxypep-sti-prevention-online__dual">
              <div className="vt-doxypep-sti-prevention-online__dual-card vt-doxypep-sti-prevention-online__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
              <li>MSM or transgender woman with a bacterial STI in the past 12 months</li>
              <li>No current STI symptoms (prevention, not treatment)</li>
              <li>Able to arrange STI testing every 3 to 6 months</li>
              <li>Adult 18+, located in Vermont</li>
              <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                </ul>
              </div>
              <div className="vt-doxypep-sti-prevention-online__dual-card vt-doxypep-sti-prevention-online__dual-card--alert">
                <h3>→ When DoxyPEP Is Not Appropriate by Telehealth</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Treat first:</strong> Current STI symptoms — see our <a href="/vt/chlamydia-treatment-online/">Vermont chlamydia treatment page</a> or get tested before starting prevention` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Not eligible per CDC:</strong> Cisgender women are not in the current CDC DoxyPEP recommendation` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>HIV care:</strong> Known HIV infection — coordinate with your HIV provider; ask about HIV PrEP for prevention` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong><a href="https://www.plannedparenthood.org/get-care" rel="noopener" target="_blank">Planned Parenthood Vermont</a>:</strong> STI testing and sexual health, sliding-scale fees` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong><a href="https://www.healthvermont.gov/disease-control/sexually-transmitted-infections" rel="noopener" target="_blank">Vermont Department of Health STI program</a>:</strong> Testing sites and partner services` }} />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) CTA STRIP ─── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="vt-doxypep-sti-prevention-online__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — Vermont adults, 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · No ER wait</small>
              </div>
              <a className="vt-doxypep-sti-prevention-online__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 11) FAQ (Premium Style A accordion) ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — DoxyPEP STI Prevention in Vermont"
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
            <div className="vt-doxypep-sti-prevention-online__sibling-grid">
              {VT_SIBLINGS.map((s) => (
                <a key={s.slug} className="vt-doxypep-sti-prevention-online__sibling" href={`/vt/${s.slug}/`}>
                  <span className="vt-doxypep-sti-prevention-online__sibling-label">{s.label}</span>
                  <span className="vt-doxypep-sti-prevention-online__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 13) PILLAR / SPOKE LINKS ─── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of two pillars: the <a href="/vt/">Vermont state hub</a> and the <a href="/doxypep-sti-prevention-online/">national DoxyPEP page</a>. Use the links below to book a visit or explore more.</p>
            <div className="vt-doxypep-sti-prevention-online__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/doxypep-sti-prevention-online/">National DoxyPEP STI Prevention page</a>
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
        <WhatDoesThisCostBlock conditionSlug="doxypep-sti-prevention-online" conditionName="DoxyPEP STI Prevention" stateName="Vermont" />
        <CompareTeleDirectMDLinkRow conditionSlug="doxypep-sti-prevention-online" />
        <CommonSymptomsBlock conditionSlug="doxypep-sti-prevention-online" conditionName="DoxyPEP STI Prevention" />
      </div>
    </>
  );
}
