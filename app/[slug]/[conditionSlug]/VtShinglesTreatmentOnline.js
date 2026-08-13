/**
 * VtShinglesTreatmentOnline.js — production Vermont × Shingles (Herpes Zoster) condition page (v4)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'vt' and
 * conditionSlug === 'shingles-treatment-online'.
 *
 * v4 reship — AI-visibility upgrade (physician schema w/ VT license + areaServed,
 * visible license-number byline, fresh dates) AND a substantially differentiated
 * Vermont lead angle: older-demographics shingles burden + the tick-borne-illness
 * rash differential that no other VT condition page can use.
 *
 * Hard rules respected:
 *   • FAQPage only — never QAPage.
 *   • Physician NPI 1104323203 visible in byline + schema.
 *   • Vermont cash-pay only — no payer assertions, no insurance-acceptance JSON-LD.
 *   • No first-person prescribing language. No controlled substances.
 *   • Adults 18+ only.
 */

import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/vt/shingles-treatment-online/';
const PAGE_TITLE = 'Shingles Treatment Online in Vermont | TeleDirectMD';
const DATE_PUBLISHED = '2026-06-04';
const DATE_MODIFIED = '2026-06-04';
const LAST_REVIEWED = '2026-06-04';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  licenseState: 'Vermont',
  licenseNumber: '042.0040345-COMP',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about',
};

const FAQ_ITEMS = [
  {
    question: 'Can a Vermont-licensed physician treat shingles by video?',
    answerPlain:
      'Yes. Under 18 V.S.A. Chapter 219, a Vermont-licensed physician may begin a new patient relationship and prescribe non-controlled antivirals over synchronous video without any prior office visit. An adult 18 or older sitting anywhere in Vermont can show the rash on camera, describe when the pain began, and — when the presentation fits classic dermatomal zoster — receive a same-day antiviral plan. Because the benefit of antivirals shrinks the longer you wait, removing the scheduling delay of an office appointment is the single most useful thing telehealth does for this condition. The self-pay fee is $79.',
    answer: (
      <p>
        Yes. Under <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a>, a Vermont-licensed physician may begin a new patient relationship and prescribe non-controlled antivirals over synchronous video without any prior office visit. An adult 18 or older sitting anywhere in Vermont can show the rash on camera, describe when the pain began, and &mdash; when the presentation fits classic dermatomal zoster &mdash; receive a same-day antiviral plan. Because the benefit of antivirals shrinks the longer you wait, removing the scheduling delay of an office appointment is the single most useful thing telehealth does for this condition. The self-pay fee is $79.
      </p>
    ),
  },
  {
    question: 'Why does Vermont see so much shingles relative to the national rate?',
    answerPlain:
      'Two reasons stack on top of each other. First, zoster reactivation climbs steeply after age 50, and Vermont carries the second-oldest median age of any state (roughly 42 to 43 years per US Census estimates), so a larger fraction of Vermonters sit in the high-risk band than the country as a whole. Second, the lifetime chance of an episode is about one in three for everyone. Put those together and a Vermont primary-care panel will surface zoster more often than a younger Sun Belt panel would. The Shingrix vaccine, recommended by CDC ACIP for all adults 50 and older, is the lever that pushes against the demographic headwind.',
    answer: (
      <p>
        Two reasons stack on top of each other. First, zoster reactivation climbs steeply after age 50, and Vermont carries the second-oldest median age of any state (roughly 42 to 43 years per US Census estimates), so a larger fraction of Vermonters sit in the high-risk band than the country as a whole. Second, the lifetime chance of an episode is about one in three for everyone. Put those together and a Vermont primary-care panel will surface zoster more often than a younger Sun Belt panel would. The Shingrix vaccine, recommended by <a href="https://www.cdc.gov/shingles/hcp/clinical-overview/index.html" rel="noopener" target="_blank">CDC ACIP</a> for all adults 50 and older, is the lever that pushes against the demographic headwind.
      </p>
    ),
  },
  {
    question: 'I have a rash. How do I know it is shingles and not a tick-borne illness?',
    answerPlain:
      'You often cannot tell on your own, and in Vermont that matters more than almost anywhere else. Vermont reports one of the highest Lyme disease rates in the country (170.5 cases per 100,000 in 2019, regularly ranking first or second per CDC MMWR). The erythema migrans rash of early Lyme, and the systemic picture of other tick-borne infections, can be confused with the early, pre-blister phase of zoster. The distinguishing clue: classic shingles is a one-sided, band-like cluster of blisters that does not cross the midline and is usually NOT accompanied by fever or joint pain. A rash paired with fever, headache, fatigue, migrating joint pain, or a known tick bite points away from simple shingles and toward an in-person work-up. The visit physician screens for exactly this before settling on an antiviral.',
    answer: (
      <p>
        You often cannot tell on your own, and in Vermont that matters more than almost anywhere else. Vermont reports one of the highest Lyme disease rates in the country (170.5 cases per 100,000 in 2019, regularly ranking first or second per <a href="https://www.cdc.gov/mmwr/volumes/73/wr/mm7306a1.htm" rel="noopener" target="_blank">CDC MMWR</a>). The erythema migrans rash of early Lyme, and the systemic picture of other tick-borne infections, can be confused with the early, pre-blister phase of zoster. The distinguishing clue: classic shingles is a one-sided, band-like cluster of blisters that does not cross the midline and is usually <em>not</em> accompanied by fever or joint pain. A rash paired with fever, headache, fatigue, migrating joint pain, or a known tick bite points away from simple shingles and toward an in-person work-up. The visit physician screens for exactly this before settling on an antiviral.
      </p>
    ),
  },
  {
    question: 'What is the 72-hour window, and what happens if I miss it?',
    answerPlain:
      'Antivirals work best when swallowed within 72 hours of the first blister. Inside that window they shorten the run of new lesions, speed crusting, blunt acute nerve pain, and cut the odds of postherpetic neuralgia — the lingering nerve pain that can outlast the rash by months. Past 72 hours the physician still weighs treatment, because new blisters, eye involvement, or significant pain can justify starting antivirals later. Missing the window is a reason to act faster, not to skip care.',
    answer: (
      <p>
        Antivirals work best when swallowed within 72 hours of the first blister. Inside that window they shorten the run of new lesions, speed crusting, blunt acute nerve pain, and cut the odds of postherpetic neuralgia &mdash; the lingering nerve pain that can outlast the rash by months. Past 72 hours the physician still weighs treatment, because new blisters, eye involvement, or significant pain can justify starting antivirals later. Missing the window is a reason to act faster, not to skip care.
      </p>
    ),
  },
  {
    question: 'Which antiviral will I be prescribed, and how is it dosed?',
    answerPlain:
      'Three oral antivirals are first-line and none is a controlled substance, so all three are fully prescribable through Vermont telehealth: valacyclovir 1 g by mouth three times daily for 7 days; acyclovir 800 mg by mouth five times daily for 7 days; and famciclovir 500 mg by mouth three times daily for 7 days. Valacyclovir is frequently chosen for its simpler three-times-daily schedule and good absorption. Kidney function and other medications shape the final choice, which the physician makes at the visit.',
    answer: (
      <p>
        Three oral antivirals are first-line and none is a controlled substance, so all three are fully prescribable through Vermont telehealth: <strong>valacyclovir 1 g by mouth three times daily for 7 days</strong>; <strong>acyclovir 800 mg by mouth five times daily for 7 days</strong>; and <strong>famciclovir 500 mg by mouth three times daily for 7 days</strong>. Valacyclovir is frequently chosen for its simpler three-times-daily schedule and good absorption. Kidney function and other medications shape the final choice, which the physician makes at the visit.
      </p>
    ),
  },
  {
    question: 'When does a shingles rash become an emergency?',
    answerPlain:
      'Go to in-person or emergency care right away if the rash sits on or near an eye or the tip of the nose (herpes zoster ophthalmicus, which threatens sight), if you have ear-canal blisters with facial droop (Ramsay Hunt syndrome), if blisters spread well beyond a single band (disseminated zoster), or if you are significantly immunocompromised from HIV, chemotherapy, or a transplant. High fever with stiff neck or confusion also warrants emergency evaluation. TeleDirectMD is not built for these presentations and will direct you to the right setting.',
    answer: (
      <p>
        Go to in-person or emergency care right away if the rash sits on or near an eye or the tip of the nose (herpes zoster ophthalmicus, which threatens sight), if you have ear-canal blisters with facial droop (Ramsay Hunt syndrome), if blisters spread well beyond a single band (disseminated zoster), or if you are significantly immunocompromised from HIV, chemotherapy, or a transplant. High fever with stiff neck or confusion also warrants emergency evaluation. TeleDirectMD is not built for these presentations and will direct you to the right setting.
      </p>
    ),
  },
  {
    question: 'Is the Shingrix vaccine still worth it after I have had shingles?',
    answerPlain:
      'Yes. An episode does not give lasting immunity, and recurrence happens. CDC ACIP recommends Shingrix for adults 50 and older, including those with a prior episode, given as two doses two to six months apart. Time the vaccine after the active rash has healed; ask your pharmacist or primary-care physician about scheduling. Most Vermont pharmacies stock it.',
    answer: (
      <p>
        Yes. An episode does not give lasting immunity, and recurrence happens. <a href="https://www.cdc.gov/shingles/hcp/clinical-overview/index.html" rel="noopener" target="_blank">CDC ACIP</a> recommends Shingrix for adults 50 and older, including those with a prior episode, given as two doses two to six months apart. Time the vaccine after the active rash has healed; ask your pharmacist or primary-care physician about scheduling. Most Vermont pharmacies stock it.
      </p>
    ),
  },
  {
    question: 'Can I give shingles to someone else?',
    answerPlain:
      'Not as shingles. The reactivated virus cannot hand someone else a case of shingles. It can, however, give chickenpox to a person who has never had varicella or its vaccine, through direct contact with open blisters. Once every blister has crusted, you are no longer contagious. While blisters are weeping, keep distance from newborns, pregnant people without chickenpox immunity, and anyone immunocompromised.',
    answer: (
      <p>
        Not as shingles. The reactivated virus cannot hand someone else a case of shingles. It can, however, give chickenpox to a person who has never had varicella or its vaccine, through direct contact with open blisters. Once every blister has crusted, you are no longer contagious. While blisters are weeping, keep distance from newborns, pregnant people without chickenpox immunity, and anyone immunocompromised.
      </p>
    ),
  },
  {
    question: 'How fast does the prescription reach my Vermont pharmacy?',
    answerPlain:
      'Vermont allows electronic prescribing of non-controlled medications with no e-prescribing mandate. When an antiviral is appropriate, the order is sent electronically to the Vermont pharmacy you name during or just after the visit, and most fill within one to four hours. For shingles, call the pharmacy ahead to confirm the antiviral is in stock so you can start dosing the same day.',
    answer: (
      <p>
        Vermont allows electronic prescribing of non-controlled medications with no e-prescribing mandate, per the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. When an antiviral is appropriate, the order is sent electronically to the Vermont pharmacy you name during or just after the visit, and most fill within one to four hours. For shingles, call the pharmacy ahead to confirm the antiviral is in stock so you can start dosing the same day.
      </p>
    ),
  },
];

function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description:
      'Shingles (herpes zoster) treatment by secure video for Vermont adults 18+. Board-certified Family Medicine physician licensed in Vermont. Early oral antivirals (valacyclovir, acyclovir, famciclovir). Tick-borne-illness rash screening. Cash-pay $79 flat. 18 V.S.A. Chapter 219 compliant.',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Shingles (Herpes Zoster)',
      alternateName: ['Herpes Zoster', 'Zoster', 'Shingles'],
      code: { '@type': 'MedicalCode', code: 'B02.9', codingSystem: 'ICD-10-CM' },
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
      cssSelector: [
        '#vt-shingles-treatment-online-opening',
        '#vt-shingles-treatment-online-opening p',
        '.tdmd-vt-cond__byline',
        '#vt-shingles-treatment-online-faq',
      ],
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
    name: 'How to Get Shingles Treatment Online in Vermont',
    description:
      'Three steps to have a Vermont-licensed board-certified physician evaluate a suspected shingles rash and, when appropriate, send early antiviral therapy to your pharmacy.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book and photograph the rash', text: 'Reserve a same-day video slot, note the hour the first blister appeared, and have good lighting ready to show the affected area. Self pay $79.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'Show the rash to a Vermont-licensed MD', text: 'A board-certified Family Medicine physician licensed in Vermont reviews the rash pattern, pain timeline, and tick-exposure history, then screens for eye involvement, dissemination, and tick-borne mimics. Consent is documented under 18 V.S.A. Chapter 219.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Start antivirals the same day', text: 'When zoster fits the picture, an oral antiviral is e-prescribed to your Vermont pharmacy with dosing and pain-management guidance, plus clear instructions on when to escalate to in-person care.', url: PAGE_URL },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Vermont', item: 'https://teledirectmd.com/vt/' },
      { '@type': 'ListItem', position: 3, name: 'Shingles Treatment Online in Vermont', item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

const PAGE_CSS = `
.tdmd-vt-cond{color:var(--tdmd-text);}
.tdmd-vt-cond .tdmd-vt-cond__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.tdmd-vt-cond .tdmd-vt-cond__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.tdmd-vt-cond .tdmd-vt-cond__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.tdmd-vt-cond .tdmd-vt-cond__byline-name{font-weight:700;color:var(--tdmd-navy);}
.tdmd-vt-cond .tdmd-vt-cond__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.tdmd-vt-cond .tdmd-vt-cond__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.tdmd-vt-cond .tdmd-vt-cond__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.tdmd-vt-cond .tdmd-vt-cond__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.tdmd-vt-cond .tdmd-vt-cond__dual-card--good{border-left:5px solid #2E7D52;}
.tdmd-vt-cond .tdmd-vt-cond__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.tdmd-vt-cond .tdmd-vt-cond__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.tdmd-vt-cond .tdmd-vt-cond__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.tdmd-vt-cond .tdmd-vt-cond__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.tdmd-vt-cond .tdmd-vt-cond__dual{grid-template-columns:minmax(0,1fr);}}
.tdmd-vt-cond .tdmd-vt-cond__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.tdmd-vt-cond .tdmd-vt-cond__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.tdmd-vt-cond .tdmd-vt-cond__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.tdmd-vt-cond .tdmd-vt-cond__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.tdmd-vt-cond .tdmd-vt-cond__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.tdmd-vt-cond .tdmd-vt-cond__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
.tdmd-vt-cond .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.tdmd-vt-cond .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.tdmd-vt-cond .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.tdmd-vt-cond .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
.tdmd-vt-cond .tdmd-vt-cond__tick{background:var(--tdmd-bg-soft,#f6f8fa);border:1px solid var(--tdmd-border);border-left:5px solid #B45309;border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.3rem;margin-top:1rem;}
.tdmd-vt-cond .tdmd-vt-cond__tick h3{color:#92400E;margin-top:0.6rem;}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.tdmd-vt-cond .tdmd-vt-cond__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.tdmd-vt-cond .tdmd-vt-cond__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.tdmd-vt-cond .tdmd-vt-cond__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
`;

export default function VtShinglesTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'vt-shingles-treatment-online';
  const vtTowns = ['Burlington', 'Colchester', 'Bennington', 'Middlebury', 'St. Johnsbury', 'Springfield', 'Hartford', 'Morristown'];

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

      <div className="tdmd-vt-cond">
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Shingles Treatment Online</span>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Shingles (Herpes Zoster) Treatment Online in Vermont</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  Same-day antiviral evaluation for Vermont adults 18+ · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant
                </p>
                <p>
                  Shingles announces itself with a one-sided, burning, band-like rash that follows a single nerve root. The clock matters: oral antivirals deliver the most benefit when started within roughly 72 hours of the first blister. For Vermonters &mdash; who live in the second-oldest state in the nation and inside the country&apos;s heaviest tick-borne-disease zone &mdash; a video visit does two things at once: it compresses the time to treatment, and it puts a physician&apos;s eyes on a rash that could plausibly be something other than zoster. This page serves adults located anywhere in Vermont, from {vtTowns.join(', ')}, to the smallest hill towns.
                </p>

                {/* v4 inline opener — mirrors FAQ_ITEMS[0] */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can a Vermont-licensed physician treat shingles by video?</strong> Yes. Under <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a>, a Vermont-licensed physician may open a new patient relationship and prescribe non-controlled antivirals over synchronous video with no prior office visit, held to the same standard of care set by the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. An adult 18 or older anywhere in Vermont can show the rash on camera and, when the presentation fits dermatomal zoster, receive a same-day antiviral plan. Self pay is $79.
                  </p>
                </div>

                {/* Visible byline with license number */}
                <div className="tdmd-vt-cond__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="tdmd-vt-cond__byline-text">
                    <span className="tdmd-vt-cond__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty} (American Board of Family Medicine)
                    </span>
                    <span className="tdmd-vt-cond__byline-meta">
                      NPI {PHYSICIAN.npi} · Vermont Medical License #{PHYSICIAN.licenseNumber} (<a href="https://secure.professionals.healthvermont.gov/PROD/PORTAL/PRLicenseSearch/SearchPage" rel="noopener" target="_blank">verify</a>) · Last reviewed{' '}
                      <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-eligibility`}>Eligibility checklist</a></li>
                  <li><a href={`#${pid}-tick`}>Rash differential: shingles vs. tick-borne illness</a></li>
                  <li><a href={`#${pid}-vt-law`}>Vermont telehealth law</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; payment</a></li>
                  <li><a href={`#${pid}-medications`}>Antiviral options</a></li>
                  <li><a href={`#${pid}-dual-path`}>Video vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                  <li>MD-only care reviewing the rash on camera</li>
                  <li>Tick-borne-illness rash screening built into every visit</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/vt/" className="tdmd-btn tdmd-btn-outline">Explore Vermont Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> B02.9 (zoster without complications); final coding depends on the exam</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Shingles Care in Vermont</h2>
                  <ul>
                    <li>Rapid review of a suspected dermatomal rash on camera</li>
                    <li>Screening for eye involvement, dissemination, and tick-borne mimics</li>
                    <li>First-line oral antivirals when the picture fits zoster</li>
                    <li>e-Prescription to your Vermont pharmacy electronically</li>
                    <li>Pain-management and postherpetic-neuralgia guidance</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. Seek in-person or emergency care now for a rash near the eye, ear-canal blisters with facial droop, spreading lesions, severe immunocompromise, or high fever with confusion. TeleDirectMD does not prescribe controlled substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ELIGIBILITY ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Who Can Use a Vermont Shingles Video Visit</h2>
            <p><strong>A video visit usually fits when every line on the left is true:</strong></p>
            <div className="tdmd-vt-cond__dual">
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--good">
                <h3>&#10003; Good candidate</h3>
                <ul>
                  <li>Adult 18 or older, physically in Vermont during the visit</li>
                  <li>One-sided, band-like cluster of blisters tracking a single nerve</li>
                  <li>Burning or tingling pain that began on the same side, often before the rash</li>
                  <li>Rash on the trunk, back, abdomen, or a limb — clear of the eye and ear</li>
                  <li>No fever, migrating joint pain, or recent tick bite suggesting another cause</li>
                  <li>Not significantly immunocompromised; no spreading lesions</li>
                </ul>
              </div>
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--alert">
                <h3>&#10007; Needs in-person or emergency care</h3>
                <ul>
                  <li>Rash on or near an eye, or on the nose tip (Hutchinson&apos;s sign)</li>
                  <li>Ear-canal blisters with facial weakness (Ramsay Hunt syndrome)</li>
                  <li>Lesions spreading past one dermatome (disseminated zoster)</li>
                  <li>HIV, active chemotherapy, or transplant immunosuppression</li>
                  <li>High fever with neck stiffness or confusion</li>
                  <li>Rash plus fever, headache, fatigue, or joint pain after tick exposure</li>
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If any red flag applies, go to urgent or emergency care now. TeleDirectMD is not appropriate for complicated or severe zoster.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TICK-BORNE DIFFERENTIAL (UNIQUE VT BLOCK) ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-tick`}>
          <div className="tdmd-container">
            <h2>Why Vermont Patients Should Pay Close Attention to a New Rash</h2>
            <p>
              Most states can treat a suspected shingles rash as, almost always, shingles. Vermont cannot afford that shortcut. The state sits at the center of the Northeast&apos;s tick-borne-disease belt, and a rash here carries a wider differential than it would in much of the country. That is why every TeleDirectMD shingles visit begins by separating classic dermatomal zoster from the tick-borne illnesses that can imitate its earliest, pre-blister phase.
            </p>
            <p>
              The scale of Vermont&apos;s tick exposure is hard to overstate. The state reported a Lyme disease rate of 170.5 cases per 100,000 residents in 2019 and consistently ranks first or second nationally, a standing reaffirmed in <a href="https://www.cdc.gov/mmwr/volumes/73/wr/mm7306a1.htm" rel="noopener" target="_blank">CDC MMWR Lyme surveillance data</a>. Early Lyme can produce an expanding erythema migrans rash and a systemic syndrome of fever, fatigue, headache, and migrating joint pain &mdash; a constellation that overlaps with the prodrome some patients describe before zoster blisters erupt. Lyme can also cause facial palsy and nerve-root pain that, taken in isolation, might be mistaken for the neuralgia of zoster.
            </p>
            <p>
              Timing sharpens the concern. The <a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses" rel="noopener" target="_blank">Vermont Department of Health tick-bite-illness program</a> notes that exposure peaks twice a year: April through June, when nymph-stage ticks (the hardest to spot and the most likely to transmit infection) are active, and again from October into November, when adult ticks come out alongside hunting season. Ticks bite in any stretch of above-freezing weather, so the window is effectively year-round. Two rarer but serious pathogens widen the picture further: <a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses/powassan-virus" rel="noopener" target="_blank">Powassan virus</a>, which produced two Vermont cases across 2022 and 2023 and can cause encephalitis, and the mosquito-borne <a href="https://www.healthvermont.gov/disease-control/mosquito-borne-diseases/eastern-equine-encephalitis" rel="noopener" target="_blank">Eastern equine encephalitis</a>, a low-frequency but neurologically severe Vermont mosquito-borne disease that the state monitors through annual surveillance.
            </p>
            <p>
              The practical rule the visit physician applies is simple. A clean, one-sided band of blisters that does not cross the body&apos;s midline, without fever or joint pain, reads as zoster and can be treated by video. A rash carrying systemic baggage &mdash; fever, headache, fatigue, joint pain, or a recent tick bite &mdash; is a stop sign: it warrants in-person evaluation and the testing that telehealth cannot provide, so a tick-borne illness is not missed while a wrong diagnosis is treated. This screen protects Vermont patients precisely because their baseline tick risk is so high.
            </p>
            <div className="tdmd-vt-cond__tick">
              <h3>Bottom line for a Vermont rash</h3>
              <p style={{ margin: 0 }}>
                Shingles is treated by video when the rash is the classic one-sided band with nerve pain and no systemic illness. When fever, joint pain, fatigue, or tick exposure ride along with the rash, the physician routes you to in-person care to rule out Lyme and other tick-borne infections first.
              </p>
            </div>
          </div>
        </section>

        {/* ─── VT TELEHEALTH LAW ─── */}
        <section className="tdmd-section" id={`${pid}-vt-law`}>
          <div className="tdmd-container">
            <h2>How Vermont Law Frames Your Shingles Visit</h2>

            <h3>Is a prior office visit required first?</h3>
            <p>
              No. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a> lets a Vermont-licensed physician establish care and prescribe over video without any preceding in-person appointment. The physician must capture verbal or written telehealth consent and record it, which happens at the top of each TeleDirectMD encounter.
            </p>

            <h3>What standard does the treating physician owe you?</h3>
            <p>
              The <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> holds that the standard of care does not change between an in-person and a telehealth encounter. The physician must carry a Vermont license to treat patients located in Vermont. Dr. Bhavsar holds Vermont Medical License #042.0040345-COMP from the Board. <a href="https://secure.professionals.healthvermont.gov/PROD/PORTAL/PRLicenseSearch/SearchPage" rel="noopener" target="_blank">Verify the license</a> · <a href="/about/">Dr. Bhavsar&apos;s bio</a>.
            </p>

            <h3>Are shingles antivirals controlled in Vermont?</h3>
            <p>
              No. Valacyclovir, acyclovir, and famciclovir are not controlled substances and may be prescribed through Vermont telehealth without added restriction, then transmitted electronically to any Vermont pharmacy. Vermont permits e-prescribing of non-controlled drugs and imposes no e-prescribing mandate, per the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> and consistent with <a href="https://legislature.vermont.gov/statutes/fullchapter/26/023" rel="noopener" target="_blank">26 V.S.A. Chapter 23</a>. TeleDirectMD prescribes no controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">The Three Steps, Built Around the 72-Hour Window</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book and photograph the rash</h3>
                  <p>Reserve a same-day slot and note the hour your first blister surfaced. Have good lighting ready so the physician can see the rash clearly. Jot down any tick exposure, prior episodes, allergies, and current medications.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>Show it to a Vermont-licensed MD</h3>
                  <p>The physician studies the rash distribution, the pain timeline, and your exposure history, then runs the eye, ear, dissemination, and tick-borne screens. Telehealth consent under 18 V.S.A. Chapter 219 is recorded before any plan is made.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Start antivirals the same day</h3>
                  <p>When zoster fits, an oral antiviral is e-prescribed to your chosen Vermont pharmacy with dosing and pain guidance. You leave with written instructions on when to escalate if the rash spreads or new symptoms appear.</p>
                  <div className="tdmd-decision-cta">
                    <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COST ─── */}
        <section className="tdmd-section" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>What a Vermont Shingles Visit Costs</h2>
            <p>A complete MD video visit &mdash; evaluation, plan, and e-prescription &mdash; is a flat <strong>$79</strong> self-pay. Vermont visits are cash-pay only with no insurance billing. You pay the fee at booking; antiviral costs are filled separately at your pharmacy.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Red-flag and tick-borne screening</li>
                  <li>e-Prescription to your VT pharmacy (when appropriate)</li>
                  <li>Pain-management and prevention guidance</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical shingles cost comparison">
                <h3>Typical Shingles Visit Cost in Vermont</h3>
                <p className="tdmd-price-caption">Ranges Vermonters commonly see. Actual cost varies by setting and town.</p>
                <div className="tdmd-vbars" role="list" aria-label="Cost comparison bars">
                  {[
                    { name: 'TeleDirectMD video visit', value: '$79', heightPct: 16, isTdmd: true },
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
                <p className="tdmd-price-footnote">Comparison reflects typical Vermont pricing. Actual costs vary.</p>
              </div>
            </div>

            <div className="tdmd-cashpay-note">
              <p><strong>$79 visit fee. Prescription costs filled separately at your pharmacy.</strong> No insurance billing in Vermont &mdash; transparent flat pricing. HSA and FSA cards are accepted.</p>
            </div>
          </div>
        </section>

        {/* ─── MEDICATIONS ─── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>First-Line Antiviral Options and Dosing</h2>
            <p>
              All three first-line antivirals for herpes zoster are non-controlled and fully prescribable through Vermont telehealth. The physician matches the agent to your kidney function, drug list, and how recently the rash began, guided by <a href="https://www.cdc.gov/shingles/hcp/clinical-overview/index.html" rel="noopener" target="_blank">CDC clinical resources</a> and <a href="https://www.aad.org/public/diseases/a-z/shingles-overview" rel="noopener" target="_blank">American Academy of Dermatology guidance</a>.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Shingles antiviral options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx national coupon prices retrieved May 2026 from goodrx.com; actual cost varies by pharmacy. Prescription costs are separate from the $79 visit fee.
                </caption>
                <thead>
                  <tr>
                    <th>Antiviral</th>
                    <th>Dosing schedule</th>
                    <th>GoodRx price (May 2026)</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tdmd-vt-cond__med-firstline">
                    <td><strong>Valacyclovir 1 g</strong> · First-line</td>
                    <td>1 g PO three times daily &times; 7 days, started within 72h of rash onset</td>
                    <td><a href="https://www.goodrx.com/valacyclovir" target="_blank" rel="noopener">~$20–$35 generic</a></td>
                    <td>Often preferred for its simple three-times-daily schedule and strong absorption.</td>
                  </tr>
                  <tr className="tdmd-vt-cond__med-firstline">
                    <td><strong>Acyclovir 800 mg</strong> · First-line</td>
                    <td>800 mg PO five times daily &times; 7 days</td>
                    <td><a href="https://www.goodrx.com/acyclovir" target="_blank" rel="noopener">~$15–$25 generic</a></td>
                    <td>Lowest-cost option; the five-times-daily schedule can make adherence harder.</td>
                  </tr>
                  <tr className="tdmd-vt-cond__med-firstline">
                    <td><strong>Famciclovir 500 mg</strong> · First-line</td>
                    <td>500 mg PO three times daily &times; 7 days</td>
                    <td><a href="https://www.goodrx.com/famciclovir" target="_blank" rel="noopener">~$30–$50 generic</a></td>
                    <td>Clinically equivalent to valacyclovir with the same convenient dosing.</td>
                  </tr>
                  <tr>
                    <td><strong>Gabapentin 300 mg</strong> (nerve-pain adjunct)</td>
                    <td>300 mg PO three times daily, titrated by the physician</td>
                    <td><a href="https://www.goodrx.com/gabapentin" target="_blank" rel="noopener">~$15–$25 generic</a></td>
                    <td>Considered for acute pain and postherpetic-neuralgia risk; not a controlled substance in Vermont.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> the final choice rests on your history, allergies, interactions, and kidney function as judged at the visit. Do not start any prescription antiviral without a clinical evaluation.
            </p>
          </div>
        </section>

        {/* ─── DUAL PATH ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>Video Visit or In-Person? A Quick Sort</h2>
            <p>A clean, uncomplicated zoster rash treats well by video, especially when speed to antiviral matters. Complications and tick-borne overlap belong in person.</p>
            <div className="tdmd-vt-cond__dual">
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--good">
                <h3>&#10003; Reach for telehealth when</h3>
                <ul>
                  <li>One-sided band of blisters with nerve pain, no systemic illness</li>
                  <li>Rash on the trunk or a limb, clear of eye and ear</li>
                  <li>Within the early treatment window and wanting to act fast</li>
                  <li>No tick-exposure red flags, no immunosuppression</li>
                  <li>Adult 18+, located in Vermont, paying $79 cash</li>
                </ul>
              </div>
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--alert">
                <h3>&rarr; Choose in-person care when</h3>
                <ul>
                  <li><strong>Emergency / 911:</strong> eye involvement, stiff neck with fever, signs of sepsis</li>
                  <li><strong>Urgent care or ED:</strong> spreading lesions, Ramsay Hunt signs, severe pain needing exam</li>
                  <li><strong>Primary care or ID:</strong> immunocompromise, recurrent or atypical episodes</li>
                  <li><strong>Tick-borne work-up:</strong> rash with fever, joint pain, or recent bite</li>
                  <li><strong><a href="https://vermont211.org" rel="noopener" target="_blank">Vermont 211</a>:</strong> finding nearby clinics and resources</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA STRIP ─── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-vt-cond__cta-strip" role="complementary">
              <div>
                <p>See a Vermont-licensed MD today — adults 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · Start antivirals fast</small>
              </div>
              <a className="tdmd-vt-cond__cta-btn" href="/book-online" rel="noopener">Book Now &rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Shingles Treatment in Vermont"
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />
            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Caught a one-sided rash early?</h3>
                <p>Book a same-day video visit. Cash-pay $79 flat. No insurance billing in Vermont.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SIBLINGS ─── */}
        <section className="tdmd-section" id={`${pid}-related-vt`}>
          <div className="tdmd-container">
            <h2>Other Vermont Conditions We Treat</h2>
            <p>When the rash or the differential points elsewhere, these Vermont pages may help.</p>
            <div className="tdmd-vt-cond__sibling-grid">
              <a className="tdmd-vt-cond__sibling" href="/vt/cellulitis-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Cellulitis Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Pre-blister zoster can look like cellulitis; the right call avoids the wrong antibiotic.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/cold-sore-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Cold Sore Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Another herpesvirus answering to the same family of antivirals.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/pink-eye-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Pink Eye Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Eye redness near a facial rash needs the zoster-ophthalmicus question answered.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/sinus-infection-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Sinus Infection Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Facial pain has many sources; trigeminal zoster is one to rule in or out.</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── PILLAR LINKS ─── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page links the <a href="/vt/">Vermont state hub</a> with the <a href="/shingles-treatment-online/">national shingles condition page</a>. Use the links below to read more or book.</p>
            <div className="tdmd-vt-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/shingles-treatment-online/">National shingles page</a>
              <a href="/health-guides/">Health guides</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/book-online">Book Online</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>
        </section>

        {/* ─── REFERENCES ─── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219 (Vermont telemedicine statute)</a>. Retrieved June 2026.</li>
              <li><a href="https://legislature.vermont.gov/statutes/fullchapter/26/023" rel="noopener" target="_blank">26 V.S.A. Chapter 23 (Vermont Medical Practice Act)</a>. Retrieved June 2026.</li>
              <li><a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. Retrieved June 2026.</li>
              <li><a href="https://www.cdc.gov/mmwr/volumes/73/wr/mm7306a1.htm" rel="noopener" target="_blank">CDC MMWR — Lyme Disease Surveillance, United States</a>. Retrieved June 2026.</li>
              <li><a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses" rel="noopener" target="_blank">Vermont Department of Health — Tick-Bite Illnesses</a>. Retrieved June 2026.</li>
              <li><a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses/powassan-virus" rel="noopener" target="_blank">Vermont Department of Health — Powassan Virus</a>. Retrieved June 2026.</li>
              <li><a href="https://www.healthvermont.gov/disease-control/mosquito-borne-diseases/eastern-equine-encephalitis" rel="noopener" target="_blank">Vermont Department of Health — Eastern Equine Encephalitis</a>. Retrieved June 2026.</li>
              <li><a href="https://www.cdc.gov/shingles/hcp/clinical-overview/index.html" rel="noopener" target="_blank">CDC — Shingles (Herpes Zoster) Clinical Overview, including ACIP Shingrix recommendation</a>. Retrieved June 2026.</li>
              <li><a href="https://www.aad.org/public/diseases/a-z/shingles-overview" rel="noopener" target="_blank">American Academy of Dermatology — Shingles Overview</a>. Retrieved June 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── DISCLAIMER ─── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is educational and is not individualized medical advice. A physician-patient relationship begins only when a video visit starts and consent is documented under 18 V.S.A. Chapter 219. A Vermont-licensed, board-certified physician makes treatment decisions from the history and rash shown at the visit. For a rash near the eye, spreading lesions, facial weakness, high fever with confusion, or a rash with systemic symptoms after tick exposure, seek in-person or emergency care immediately.</p>
            <p>TeleDirectMD does not prescribe controlled substances in any state. Prices reflect GoodRx national coupon pricing retrieved May 2026; actual pharmacy costs in Vermont vary.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug="shingles-treatment-online" conditionName="Shingles Treatment" stateName="Vermont" />
        <CompareTeleDirectMDLinkRow conditionSlug="shingles-treatment-online" />
        <CommonSymptomsBlock conditionSlug="shingles-treatment-online" conditionName="Shingles Treatment" />
      </div>
    </>
  );
}
