/**
 * VtEarPainTreatmentOnline.js — production Vermont × Ear Pain (AOM & Swimmer’s Ear) condition page
 *
 * VT Pilot 2 (generated 2026-06-08). Rendered by app/[slug]/[conditionSlug]/page.js
 * when slug === 'vt' and conditionSlug === 'ear-pain-treatment-online'.
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
const PAGE_URL = "https://teledirectmd.com/vt/ear-pain-treatment-online/";
const PAGE_TITLE = "Ear Pain & Ear Infection Treatment Online in Vermont | TeleDirectMD";
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
  { name: "Amoxicillin 500/875 mg (for AOM)", regimen: "875 mg twice daily × 10 days (or 500 mg three times daily)", price: "~$10–$20 cash (generic)", priceHref: null, firstLine: true, notes: "First-line for adult middle-ear infection without recent antibiotic exposure." },
  { name: "Amoxicillin-clavulanate (Augmentin) 875/125 mg (for AOM)", regimen: "1 tablet twice daily × 10 days", price: "~$15–$40 cash (generic)", priceHref: null, firstLine: true, notes: "Preferred if amoxicillin used in the prior 30 days or broader coverage needed." },
  { name: "Ciprofloxacin-dexamethasone (CiproDex) otic drops (for swimmer’s ear)", regimen: "4 drops in the affected ear twice daily × 7 days", price: "Varies; brand/generic", priceHref: null, firstLine: true, notes: "Preferred for AOE; antibiotic + steroid; safe if the eardrum is perforated or status is unknown." },
  { name: "Ofloxacin 0.3% otic solution (for swimmer’s ear)", regimen: "5 drops in the affected ear twice daily × 7 days", price: "Varies; generic", priceHref: null, firstLine: true, notes: "Quinolone drop; safe with eardrum perforation. Alternative to CiproDex." },
  { name: "Cephalexin 500 mg (PCN-allergy AOM option)", regimen: "500 mg four times daily × 10 days", price: "~$10–$20 cash (generic)", priceHref: null, firstLine: false, notes: "For mild penicillin-allergy history when treating a middle-ear infection." }
];

const FAQ_ITEMS = [
  { question: "Can I get ear infection treatment online in Vermont?", answerHtml: `Yes. 18 V.S.A. Chapter 219 permits licensed physicians to provide care by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician can evaluate adult ear pain, distinguish a middle-ear infection from swimmer&apos;s ear, screen for red flags, and prescribe when appropriate. Adults 18+ located in Vermont can book a same-day visit for $79. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">Read 18 V.S.A. Chapter 219</a>.`, answerPlain: "Yes. 18 V.S.A. Chapter 219 permits licensed physicians to provide care by synchronous video without a prior in-person visit. A Vermont-licensed board-certified Family Medicine physician can evaluate adult ear pain, distinguish a middle-ear infection from swimmer’s ear, screen for red flags, and prescribe when appropriate. Adults 18+ located in Vermont can book a same-day visit for $79." },
  { question: "How do I know if it is a middle-ear infection or swimmer’s ear?", answerHtml: `A middle-ear infection (AOM) usually follows a cold and brings fullness and muffled hearing. Swimmer&apos;s ear (AOE) follows water exposure and is marked by tragal tenderness — pain when you press the small flap at the front of the ear — without hearing loss. The physician uses your history and symptom pattern to tell them apart.`, answerPlain: "A middle-ear infection (AOM) usually follows a cold and brings fullness and muffled hearing. Swimmer’s ear (AOE) follows water exposure and is marked by tragal tenderness — pain when you press the small flap at the front of the ear — without hearing loss. The physician uses your history and symptom pattern to tell them apart." },
  { question: "What is the treatment for swimmer’s ear?", answerHtml: `Swimmer&apos;s ear is treated with antibiotic ear drops, not oral antibiotics, per AAO-HNS guidance. TeleDirectMD prefers CiproDex or ofloxacin drops because both are safe even if the eardrum is perforated — important when eardrum status cannot be confirmed by video.`, answerPlain: "Swimmer’s ear is treated with antibiotic ear drops, not oral antibiotics, per AAO-HNS guidance. TeleDirectMD prefers CiproDex or ofloxacin drops because both are safe even if the eardrum is perforated — important when eardrum status cannot be confirmed by video." },
  { question: "What antibiotic treats an adult middle-ear infection?", answerHtml: `First-line is amoxicillin; amoxicillin-clavulanate (Augmentin) is preferred if you have used amoxicillin in the prior 30 days or need broader coverage. Cephalexin is an option for mild penicillin allergy. The physician selects based on your history and allergies.`, answerPlain: "First-line is amoxicillin; amoxicillin-clavulanate (Augmentin) is preferred if you have used amoxicillin in the prior 30 days or need broader coverage. Cephalexin is an option for mild penicillin allergy. The physician selects based on your history and allergies." },
  { question: "Why is swimmer’s ear common in Vermont?", answerHtml: `Lake Champlain — the sixth-largest freshwater lake in the U.S. — and smaller waters like Willoughby and Memphremagog draw heavy summer swimming. Warm July and August water and prolonged immersion irritate the ear canal, clustering swimmer&apos;s ear from June through August.`, answerPlain: "Lake Champlain — the sixth-largest freshwater lake in the U.S. — and smaller waters like Willoughby and Memphremagog draw heavy summer swimming. Warm July and August water and prolonged immersion irritate the ear canal, clustering swimmer’s ear from June through August." },
  { question: "When should ear pain be seen in person?", answerHtml: `Seek in-person or emergency care for sudden pain relief with drainage (possible rupture), vertigo or facial weakness, swelling or redness behind the ear (possible mastoiditis), severe pain beyond 72 hours, or any severe ear infection in a diabetic or immunocompromised adult.`, answerPlain: "Seek in-person or emergency care for sudden pain relief with drainage (possible rupture), vertigo or facial weakness, swelling or redness behind the ear (possible mastoiditis), severe pain beyond 72 hours, or any severe ear infection in a diabetic or immunocompromised adult." },
  { question: "Are ear infection medications controlled substances?", answerHtml: `No. Amoxicillin, Augmentin, cephalexin, CiproDex, and ofloxacin drops are not controlled substances and can be e-prescribed to any Vermont pharmacy. TeleDirectMD does not prescribe controlled substances in any state.`, answerPlain: "No. Amoxicillin, Augmentin, cephalexin, CiproDex, and ofloxacin drops are not controlled substances and can be e-prescribed to any Vermont pharmacy. TeleDirectMD does not prescribe controlled substances in any state." },
  { question: "What does an ear pain visit cost in Vermont?", answerHtml: `The video visit is a flat $79 cash-pay fee with no insurance billing in Vermont. Prescription costs are filled separately at your pharmacy. For straightforward adult ear pain, this avoids a weeks-long ENT wait or a long drive to urgent care.`, answerPlain: "The video visit is a flat $79 cash-pay fee with no insurance billing in Vermont. Prescription costs are filled separately at your pharmacy. For straightforward adult ear pain, this avoids a weeks-long ENT wait or a long drive to urgent care." },
  { question: "Do you accept insurance in Vermont?", answerHtml: `TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. HSA and FSA cards are accepted. There is no insurance billing in Vermont.`, answerPlain: "TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. HSA and FSA cards are accepted. There is no insurance billing in Vermont." }
];

const VT_SIBLINGS = [
  { slug: "sinus-infection-treatment-online", label: "Sinus Infection Treatment in VT", why: "Ear and sinus infections often co-occur in the winter respiratory season." },
  { slug: "common-cold-treatment-online", label: "Common Cold Treatment in VT", why: "Colds are the leading trigger for adult middle-ear infections." },
  { slug: "influenza-treatment-online", label: "Influenza Treatment in VT", why: "Flu can precede a secondary ear infection." },
  { slug: "sore-throat-treatment-online", label: "Sore Throat Treatment in VT", why: "Shared upper-respiratory differential with ear pain." },
  { slug: "pink-eye-treatment-online", label: "Pink Eye Treatment in VT", why: "Conjunctivitis can accompany ear infection in some viral illnesses." },
  { slug: "online-doctor-visits", label: "All Online Doctor Visits in VT", why: "General VT telehealth hub for any condition we treat." }
];

const REFERENCES = [
  { t: "AAO-HNS — Clinical Practice Guideline: Acute Otitis Externa (2014 Update)", u: "https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/aoe/" },
  { t: "AAFP — Otitis Media: Diagnosis and Treatment", u: "https://www.aafp.org/afp/2013/1001/p435" },
  { t: "AAO-HNS — Otitis Media with Effusion (Update)", u: "https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/ome/" }
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
    description: "Adult ear pain evaluation by secure video visit for Vermont adults — middle ear infection (AOM) and swimmer’s ear (otitis externa). Guideline-based oral antibiotics or ear drops when appropriate. Cash-pay only at $79 flat.",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: "Ear Pain",
      alternateName: ["Otalgia","Acute Otitis Media","Middle Ear Infection","Otitis Externa","Swimmer’s Ear"],
      code: { '@type': 'MedicalCode', code: "H66.90", codingSystem: 'ICD-10-CM' },
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
      cssSelector: ['#vt-ear-pain-treatment-online-opening', '#vt-ear-pain-treatment-online-opening p', '.vt-ear-pain-treatment-online__byline', '#vt-ear-pain-treatment-online-faq'],
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
    name: "How to Get Ear Pain (AOM & Swimmer’s Ear) Online in Vermont",
    description: "Three steps to receive ear pain (aom & swimmer’s ear) care from a Vermont-licensed board-certified physician by secure video visit.",
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select Vermont Ear Pain (AOM & Swimmer’s Ear). No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
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
      { '@type': 'ListItem', position: 3, name: "Ear Pain Treatment Online in Vermont (Ear Infection & Swimmer’s Ear)", item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

// ────────────────────────────────────────────────────────────────────────────
// VT page-specific styles — scoped to .vt-ear-pain-treatment-online
// ────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
.vt-ear-pain-treatment-online{color:var(--tdmd-text);}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__byline-name{font-weight:700;color:var(--tdmd-navy);}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__cta-strip .vt-ear-pain-treatment-online__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__cta-strip .vt-ear-pain-treatment-online__cta-btn:hover{background:#FFF6F2;color:var(--tdmd-accent);}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__dual-card--good{border-left:5px solid #2E7D52;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__dual{grid-template-columns:minmax(0,1fr);}}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
:root[data-theme="dark"] .vt-ear-pain-treatment-online .vt-ear-pain-treatment-online__med-firstline{background:linear-gradient(90deg,#1a2e22,transparent);}
.vt-ear-pain-treatment-online .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.vt-ear-pain-treatment-online .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.vt-ear-pain-treatment-online .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.vt-ear-pain-treatment-online .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
`;

// ────────────────────────────────────────────────────────────────────────────
// Main page
// ────────────────────────────────────────────────────────────────────────────
export default function VtEarPainTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = "vt-ear-pain-treatment-online";
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

      <div className="vt-ear-pain-treatment-online tdmd-natl">
        <VtNationalStyle />
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Ear Pain (AOM & Swimmer’s Ear) Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Ear Pain Treatment Online in Vermont (Ear Infection & Swimmer’s Ear)</h1>
                <p className="tdmd-hero-sub" data-speakable="true">Vermont adult care by secure video visit · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant · AAO-HNS + AAFP guided</p>
                <p dangerouslySetInnerHTML={{ __html: `Adult ear pain usually comes from one of two conditions, and telling them apart drives the right treatment. Acute otitis media (AOM) is a middle-ear infection behind the eardrum, typically following a cold and causing fullness, muffled hearing, and pain. Acute otitis externa (AOE), or swimmer's ear, is an infection of the ear canal itself, marked by itching that progresses to pain and, characteristically, tenderness when the outer ear is tugged. TeleDirectMD screens for the warning signs that require in-person evaluation, then prescribes oral antibiotics for AOM or antibiotic ear drops for swimmer's ear when appropriate. This page is for adults located in Vermont, including {CITIES}, and surrounding areas, where an ENT referral can mean a weeks-long wait for otherwise straightforward ear pain.`.replace('{CITIES}', vtCities.join(', ')) }} />

                {/* Visible byline (E-E-A-T) */}
                <div className="vt-ear-pain-treatment-online__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="vt-ear-pain-treatment-online__byline-text">
                    <span className="vt-ear-pain-treatment-online__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="vt-ear-pain-treatment-online__byline-meta">
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> H66.90 (Otitis media) / H60.339 (Otitis externa) — final coding depends on clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Ear Pain Care in Vermont</h2>
                  <ul>
                    <li>Helps distinguish a middle-ear infection from swimmer’s ear</li>
                    <li>Red-flag screening for rupture, vertigo, and mastoiditis</li>
                    <li>Oral antibiotics for AOM when appropriate</li>
                    <li>Antibiotic ear drops (CiproDex or ofloxacin) for swimmer’s ear</li>
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
              <p dangerouslySetInnerHTML={{ __html: `Vermont's two ear-pain seasons are seasonal mirror images. Swimmer's ear clusters June through August around Lake Champlain — the sixth-largest freshwater lake in the country — and at smaller waters like Willoughby and Memphremagog, where warm summer water and prolonged swimming irritate the ear canal. Middle-ear infections cluster October through April, when the state's long cold-and-flu season leaves the eustachian tube congested and prone to secondary bacterial infection. Through TeleDirectMD, a Vermont-licensed board-certified Family Medicine physician can evaluate adult ear pain by secure video visit, consistent with 18 V.S.A. Chapter 219, distinguish the two conditions, and prescribe the right treatment when appropriate. Self pay is $79.` }} />
            </div>
          </div>
        </section>

        {/* ─── 3) ELIGIBILITY CHECKLIST ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Ear Pain (AOM & Swimmer’s Ear) Telehealth Eligibility Checklist for Vermont</h2>
            <p><strong>You are likely a good fit for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="vt-ear-pain-treatment-online__dual">
              <div className="vt-ear-pain-treatment-online__dual-card vt-ear-pain-treatment-online__dual-card--good">
                <h3>✓ You Are a Good Fit If</h3>
                <ul>
              <li>You are 18 years or older and located in Vermont at the time of the visit</li>
              <li>You have ear pain after a recent cold (suggesting AOM) or after swimming (suggesting swimmer’s ear)</li>
              <li>Your pain is manageable and has lasted fewer than 72 hours</li>
              <li>You do not have drainage from a suspected ruptured eardrum</li>
              <li>You are not significantly immunocompromised or a poorly controlled diabetic</li>
                </ul>
              </div>
              <div className="vt-ear-pain-treatment-online__dual-card vt-ear-pain-treatment-online__dual-card--alert">
                <h3>✗ Telehealth May Not Be Right If</h3>
                <ul>
              <li>You had sudden pain relief followed by drainage (possible eardrum rupture)</li>
              <li>You have vertigo, dizziness, or facial weakness</li>
              <li>You have swelling/redness behind the ear (possible mastoiditis)</li>
              <li>You have severe pain lasting more than 72 hours or high fever</li>
              <li>You are immunocompromised or diabetic with a severe ear-canal infection</li>
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
            <h2>Vermont Telehealth Law and Your Ear Pain (AOM & Swimmer’s Ear) Visit</h2>

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
            <h2 itemProp="name">How Online Ear Pain (AOM & Swimmer’s Ear) Works in Vermont</h2>
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
            <h2>Ear Pain (AOM & Swimmer’s Ear) Cost &amp; Insurance in Vermont</h2>
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
                <h3>Typical Ear Pain (AOM & Swimmer’s Ear) Visit Cost in Vermont</h3>
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
            <h2>Middle-Ear Infection vs. Swimmer’s Ear: How Vermont Care Differs</h2>
            <p dangerouslySetInnerHTML={{ __html: `Acute otitis media (AOM) in adults usually follows one to three days of cold or flu symptoms, then brings ear pain, a sense of fullness or pressure, and reduced hearing in the affected ear. Per <a href="https://www.aafp.org/afp/2013/1001/p435" rel="noopener" target="_blank">AAFP guidance on otitis media</a>, antibiotic principles in adults mirror those in children, and adult AOM generally warrants antibiotic treatment. First-line therapy is amoxicillin, escalating to amoxicillin-clavulanate (Augmentin) when there has been recent antibiotic use or when broader coverage is needed. The eardrum cannot be examined over video, so the physician relies on the symptom pattern and screens carefully for complications.` }} />
            <p dangerouslySetInnerHTML={{ __html: `Acute otitis externa (AOE), or swimmer's ear, infects the ear canal and is recognized by tragal tenderness — pain when the small flap at the front of the ear is pressed — usually after recent water exposure, without the hearing loss or fever of a middle-ear infection. Per the <a href="https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/aoe/" rel="noopener" target="_blank">American Academy of Otolaryngology–Head and Neck Surgery (AAO-HNS) clinical practice guideline on acute otitis externa</a>, topical antibiotic ear drops are first-line, not oral antibiotics. TeleDirectMD prefers CiproDex (ciprofloxacin-dexamethasone) or ofloxacin drops, because both are safe even if the eardrum is perforated — important when eardrum integrity cannot be confirmed by video. Ototoxic drops such as neomycin-containing Cortisporin are avoided when eardrum status is uncertain.` }} />
            <p dangerouslySetInnerHTML={{ __html: `Some ear complaints need an in-person exam regardless. Sudden pain relief with ear drainage suggests a ruptured eardrum; vertigo, facial weakness, or swelling and redness behind the ear can signal serious complications such as mastoiditis. Severe pain lasting beyond 72 hours, or any significant ear infection in an immunocompromised or diabetic adult — a setting where necrotizing (malignant) otitis externa is a risk — should be evaluated in person. Vermonters can prevent swimmer's ear by drying the ears after swimming and avoiding cotton swabs in the canal. The 2014 AAO-HNS guideline remains the current authoritative standard, as no newer guideline has been published.` }} />
          </div>
        </section>

        {/* ─── 8) MEDICATIONS TABLE ─── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Ear Pain (AOM & Swimmer’s Ear) Options and Medication Costs in Vermont</h2>
            <p dangerouslySetInnerHTML={{ __html: `The options below follow <a href="https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/aoe/" rel="noopener" target="_blank">AAO-HNS 2014 guidance for otitis externa</a> and <a href="https://www.aafp.org/afp/2013/1001/p435" rel="noopener" target="_blank">AAFP guidance for otitis media</a>. All are non-controlled and prescribable by Vermont telehealth. Prescription costs are separate from the $79 visit fee.` }} />
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Ear Pain (AOM & Swimmer’s Ear) medication options and prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Ear infection and swimmer’s ear options per AAO-HNS and AAFP guidance. Cash prices vary by Vermont pharmacy. Prescription costs are separate from the visit fee.
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
                    <tr key={med.name} className={med.firstLine ? 'vt-ear-pain-treatment-online__med-firstline' : ''}>
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
            <div className="vt-ear-pain-treatment-online__dual">
              <div className="vt-ear-pain-treatment-online__dual-card vt-ear-pain-treatment-online__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
              <li>Ear pain after a cold (AOM) or after swimming (swimmer’s ear)</li>
              <li>No drainage, vertigo, facial weakness, or swelling behind the ear</li>
              <li>Pain present fewer than 72 hours and manageable</li>
              <li>Adult 18+, located in Vermont</li>
              <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                </ul>
              </div>
              <div className="vt-ear-pain-treatment-online__dual-card vt-ear-pain-treatment-online__dual-card--alert">
                <h3>→ When Ear Pain Needs In-Person or Emergency Care</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>ER:</strong> Swelling/redness behind the ear, facial weakness, or high fever with severe pain` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Urgent care / ENT:</strong> Suspected ruptured eardrum with drainage, or vertigo` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>In-person required:</strong> Severe pain over 72 hours, or any severe ear infection in a diabetic or immunocompromised adult` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong><a href="https://vermont211.org" rel="noopener" target="_blank">Vermont 211</a>:</strong> Find local clinics and resources` }} />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) CTA STRIP ─── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="vt-ear-pain-treatment-online__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — Vermont adults, 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · No ER wait</small>
              </div>
              <a className="vt-ear-pain-treatment-online__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 11) FAQ (Premium Style A accordion) ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Ear Pain (AOM & Swimmer’s Ear) in Vermont"
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
            <div className="vt-ear-pain-treatment-online__sibling-grid">
              {VT_SIBLINGS.map((s) => (
                <a key={s.slug} className="vt-ear-pain-treatment-online__sibling" href={`/vt/${s.slug}/`}>
                  <span className="vt-ear-pain-treatment-online__sibling-label">{s.label}</span>
                  <span className="vt-ear-pain-treatment-online__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 13) PILLAR / SPOKE LINKS ─── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of two pillars: the <a href="/vt/">Vermont state hub</a> and the <a href="/ear-pain-treatment-online/">national ear pain page</a>. Use the links below to book a visit or explore more.</p>
            <div className="vt-ear-pain-treatment-online__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/ear-pain-treatment-online/">National Ear Pain (AOM & Swimmer’s Ear) page</a>
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
        <WhatDoesThisCostBlock conditionSlug="ear-pain-treatment-online" conditionName="Ear Pain (AOM & Swimmer’s Ear)" stateName="Vermont" />
        <CompareTeleDirectMDLinkRow conditionSlug="ear-pain-treatment-online" />
        <CommonSymptomsBlock conditionSlug="ear-pain-treatment-online" conditionName="Ear Pain (AOM & Swimmer’s Ear)" />
      </div>
    </>
  );
}
