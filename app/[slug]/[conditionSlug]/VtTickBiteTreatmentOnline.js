/**
 * VtTickBiteTreatmentOnline.js — production Vermont × Tick Bite / Lyme prevention page (v1)
 *
 * URL: /vt/tick-bite-treatment-online/
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'vt' and
 * conditionSlug === 'tick-bite-treatment-online'.
 *
 * Marquee deep-content VT page. Vermont carries the highest US Lyme disease
 * incidence, so this is the highest-impact AI-visibility page in the VT cohort.
 *
 * Authority: AAN/ACR/IDSA 2020 Lyme Disease Guidelines (Lantos et al, CID),
 * Vermont Department of Health tick surveillance (2018–2022), CDC Lyme MMWR.
 *
 * Hard rules respected:
 *   • FAQPage only — never QAPage.
 *   • Physician NPI 1104323203 + Vermont Medical License #042.0040345-COMP visible.
 *   • Vermont cash-pay only — no payer assertions, no insurance-acceptance JSON-LD.
 *   • No first-person prescribing language. No controlled substances.
 *   • Adults 18+ only.
 *   • Doxycycline dosing matches IDSA 2020 exactly (PEP single 200 mg; early Lyme 100 mg BID x14d).
 *   • No unverified Vermont EEE human-case claim (accuracy flag in research).
 */

import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/vt/tick-bite-treatment-online/';
const PAGE_TITLE = 'Tick Bite Treatment & Lyme Prevention Online in Vermont | TeleDirectMD';
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
    question: 'Should I save the tick after I remove it?',
    answerPlain:
      'Yes. Drop the removed tick into a sealed zip bag or a small container, and shoot a close-up photo with a coin or ruler next to it for scale. Two facts decide whether you qualify for preventive doxycycline: what kind of tick it was, and roughly how engorged it looks. A clear photo lets the visit physician judge species and feeding state on camera. Do not crush it, smear it with anything, or flush it — preserve it intact until the visit.',
    answer: (
      <p>
        Yes. Drop the removed tick into a sealed zip bag or a small container, and shoot a close-up photo with a coin or ruler next to it for scale. Two facts decide whether you qualify for preventive doxycycline: what kind of tick it was, and roughly how engorged it looks. A clear photo lets the visit physician judge species and feeding state on camera. Do not crush it, smear it with anything, or flush it &mdash; preserve it intact until the visit.
      </p>
    ),
  },
  {
    question: 'How long does a tick need to be attached before it can pass on Lyme disease?',
    answerPlain:
      'For Lyme disease specifically, the bacterium Borrelia burgdorferi usually needs the tick attached for at least 36 hours before it transmits, which is one reason the IDSA prophylaxis window is built around that figure. That is not true of every tick-borne germ. Powassan virus, carried by the same black-legged tick, can move into a person in as little as 15 minutes of attachment — a completely different and far more urgent situation. Knowing your tick species and your attachment time is therefore central to the visit.',
    answer: (
      <p>
        For Lyme disease specifically, the bacterium <em>Borrelia burgdorferi</em> usually needs the tick attached for at least 36 hours before it transmits, which is one reason the <a href="https://www.idsociety.org/practice-guideline/lyme-disease/" rel="noopener" target="_blank">IDSA prophylaxis window</a> is built around that figure. That is not true of every tick-borne germ. Powassan virus, carried by the same black-legged tick, can move into a person in as little as 15 minutes of attachment &mdash; a completely different and far more urgent situation. Knowing your tick species and your attachment time is therefore central to the visit.
      </p>
    ),
  },
  {
    question: 'Can I get a preventive doxycycline prescription in Vermont without an in-person visit?',
    answerPlain:
      'Yes, when all four IDSA criteria are satisfied and a physician confirms them. Under 18 V.S.A. Chapter 219 a Vermont-licensed physician may open care over synchronous video and e-prescribe non-controlled drugs without a prior office visit. Post-exposure prophylaxis is appropriate only if the tick was a black-legged tick (Ixodes scapularis), it was attached about 36 hours or more, doxycycline can start within 72 hours of removal, and the bite happened in a high-infection area. Vermont meets that last condition almost statewide, so the practical bottleneck is usually your tick photo and your removal timestamp, not the geography.',
    answer: (
      <p>
        Yes, when all four IDSA criteria are satisfied and a physician confirms them. Under <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a> a Vermont-licensed physician may open care over synchronous video and e-prescribe non-controlled drugs without a prior office visit. Post-exposure prophylaxis is appropriate only if the tick was a black-legged tick (<em>Ixodes scapularis</em>), it was attached about 36 hours or more, doxycycline can start within 72 hours of removal, and the bite happened in a high-infection area. Vermont meets that last condition almost statewide, so the practical bottleneck is usually your tick photo and your removal timestamp, not the geography.
      </p>
    ),
  },
  {
    question: 'What is the difference between PEP and actually treating Lyme disease?',
    answerPlain:
      'They are two distinct strategies. Post-exposure prophylaxis (PEP) is a single 200 mg dose of doxycycline swallowed soon after a qualifying bite, before any symptoms exist, to keep Lyme from taking hold. Treatment is what happens once Lyme is already suspected — say, after a bull\'s-eye rash appears or flu-like symptoms set in: the IDSA 2020 regimen for that is doxycycline 100 mg twice daily for 14 days (10 days is acceptable for an isolated erythema migrans rash). One dose prevents; a fourteen-day course treats.',
    answer: (
      <p>
        They are two distinct strategies. Post-exposure prophylaxis (PEP) is a <strong>single 200 mg dose of doxycycline</strong> swallowed soon after a qualifying bite, before any symptoms exist, to keep Lyme from taking hold. Treatment is what happens once Lyme is already suspected &mdash; say, after a bull&apos;s-eye rash appears or flu-like symptoms set in: the IDSA 2020 regimen for that is <strong>doxycycline 100 mg twice daily for 14 days</strong> (10 days is acceptable for an isolated erythema migrans rash). One dose prevents; a fourteen-day course treats.
      </p>
    ),
  },
  {
    question: 'Do you accept insurance for tick bite visits in Vermont?',
    answerPlain:
      'No. TeleDirectMD runs as a cash-pay practice in Vermont. The visit is a flat $79 paid at booking, with no insurance billing of any kind in Vermont. HSA and FSA cards are accepted. Any doxycycline you are prescribed is filled and paid for separately at your pharmacy, where a single PEP dose typically runs about $5 to $15 with a GoodRx coupon.',
    answer: (
      <p>
        No. TeleDirectMD runs as a cash-pay practice in Vermont. The visit is a flat $79 paid at booking, with no insurance billing of any kind in Vermont. HSA and FSA cards are accepted. Any doxycycline you are prescribed is filled and paid for separately at your pharmacy, where a single PEP dose typically runs about $5 to $15 with a <a href="https://www.goodrx.com/doxycycline" rel="noopener" target="_blank">GoodRx coupon</a>.
      </p>
    ),
  },
  {
    question: 'When should I go to the ER instead of booking a telehealth visit?',
    answerPlain:
      'Skip telehealth and seek emergency or in-person care if you develop neurologic warning signs after a bite — severe headache, neck stiffness, confusion, seizures, or facial droop — or cardiac symptoms such as palpitations, chest pain, or fainting, which can signal Lyme carditis. Pregnancy, severe immunocompromise, a tick lodged on the eye or face, a rash you cannot clearly identify, and any rapid neurologic decline that might be Powassan virus all belong in person. When in doubt about a fast-changing symptom, treat it as an emergency.',
    answer: (
      <p>
        Skip telehealth and seek emergency or in-person care if you develop neurologic warning signs after a bite &mdash; severe headache, neck stiffness, confusion, seizures, or facial droop &mdash; or cardiac symptoms such as palpitations, chest pain, or fainting, which can signal Lyme carditis. Pregnancy, severe immunocompromise, a tick lodged on the eye or face, a rash you cannot clearly identify, and any rapid neurologic decline that might be Powassan virus all belong in person. When in doubt about a fast-changing symptom, treat it as an emergency.
      </p>
    ),
  },
  {
    question: 'Is Powassan virus testing available through telehealth?',
    answerPlain:
      'No. Powassan virus is a flavivirus that can cause encephalitis, and any suspicion of it is an emergency-department concern, not a telehealth one. The Vermont Department of Health flagged two Vermont Powassan cases across 2022 and 2023. Because the virus can transmit in as little as 15 minutes and has no specific antiviral, a person with rapid neurologic decline after a tick bite needs hospital-level evaluation and supportive care immediately — a video visit cannot diagnose it or order the spinal fluid and imaging studies involved.',
    answer: (
      <p>
        No. Powassan virus is a flavivirus that can cause encephalitis, and any suspicion of it is an emergency-department concern, not a telehealth one. The <a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses/powassan-virus" rel="noopener" target="_blank">Vermont Department of Health</a> flagged two Vermont Powassan cases across 2022 and 2023. Because the virus can transmit in as little as 15 minutes and has no specific antiviral, a person with rapid neurologic decline after a tick bite needs hospital-level evaluation and supportive care immediately &mdash; a video visit cannot diagnose it or order the spinal fluid and imaging studies involved.
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
      'Tick bite evaluation and Lyme disease prevention by secure video for Vermont adults 18+. Vermont-licensed board-certified Family Medicine physician. Post-exposure prophylaxis (single-dose doxycycline) and early Lyme treatment per IDSA 2020. Vermont leads the US in Lyme incidence (170.5 per 100,000). Cash-pay $79 flat. 18 V.S.A. Chapter 219 compliant.',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Lyme Disease',
      alternateName: ['Tick Bite', 'Borreliosis', 'Erythema Migrans', 'Tick-Borne Illness'],
      code: { '@type': 'MedicalCode', code: 'A69.20', codingSystem: 'ICD-10-CM' },
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
        '#vt-tick-bite-treatment-online-opening',
        '#vt-tick-bite-treatment-online-opening p',
        '.tdmd-vt-cond__byline',
        '#vt-tick-bite-treatment-online-faq',
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
    name: 'What to Do Right After a Tick Bite in Vermont',
    description:
      'Five steps to take immediately after finding an attached tick, ending with a video visit to determine whether single-dose doxycycline prophylaxis applies.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Remove the tick correctly', text: 'Grasp the tick with fine-tipped tweezers as close to the skin as possible and pull straight up with steady pressure. Do not twist, and do not apply heat, petroleum jelly, nail polish, or a lit match.' },
      { '@type': 'HowToStep', position: 2, name: 'Save the tick', text: 'Seal the tick in a zip bag or container and photograph it next to a coin or ruler for scale, so species and engorgement can be judged on camera.' },
      { '@type': 'HowToStep', position: 3, name: 'Clean the bite', text: 'Wash the bite area and your hands with rubbing alcohol or soap and water.' },
      { '@type': 'HowToStep', position: 4, name: 'Write down the removal time', text: 'Record the date and time you removed the tick. The 72-hour prophylaxis clock starts at removal, so this timestamp decides eligibility.' },
      { '@type': 'HowToStep', position: 5, name: 'Book a TeleDirectMD video visit', text: 'Reserve a same-day visit with a Vermont-licensed physician who reviews the tick photo, attachment history, and timing to determine whether single-dose doxycycline prophylaxis applies. Self pay $79.', url: 'https://teledirectmd.com/book-online' },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Vermont', item: 'https://teledirectmd.com/vt/' },
      { '@type': 'ListItem', position: 3, name: 'Tick Bite Treatment & Lyme Prevention in Vermont', item: PAGE_URL },
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
.tdmd-vt-cond .tdmd-vt-cond__stat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:0.85rem;margin-top:1rem;}
.tdmd-vt-cond .tdmd-vt-cond__stat{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-left:5px solid #B45309;border-radius:14px;padding:1rem 1.15rem;}
.tdmd-vt-cond .tdmd-vt-cond__stat-num{font-size:1.7rem;font-weight:800;color:#92400E;line-height:1.1;}
.tdmd-vt-cond .tdmd-vt-cond__stat-cap{font-size:0.86rem;color:var(--tdmd-muted);margin-top:0.25rem;}
.tdmd-vt-cond .tdmd-vt-cond__checklist{counter-reset:tickstep;list-style:none;padding:0;margin:1rem 0 0;}
.tdmd-vt-cond .tdmd-vt-cond__checklist li{counter-increment:tickstep;position:relative;padding:0.85rem 1rem 0.85rem 3rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;margin-bottom:0.6rem;line-height:1.55;}
.tdmd-vt-cond .tdmd-vt-cond__checklist li::before{content:counter(tickstep);position:absolute;left:0.85rem;top:0.85rem;width:1.6rem;height:1.6rem;border-radius:50%;background:var(--tdmd-teal);color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;font-size:0.9rem;}
.tdmd-vt-cond .tdmd-vt-cond__checklist li strong{color:var(--tdmd-navy);}
.tdmd-vt-cond .tdmd-vt-cond__pep{background:linear-gradient(90deg,#E6F4EA,transparent);border:1px solid var(--tdmd-border);border-left:5px solid #2E7D52;border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.3rem;margin-top:1rem;}
.tdmd-vt-cond .tdmd-vt-cond__pep h3{margin:0 0 0.5rem;color:#1B5E3A;}
.tdmd-vt-cond .tdmd-vt-cond__pep ol{margin:0;padding-left:1.2rem;line-height:1.6;}
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
.tdmd-vt-cond .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.tdmd-vt-cond .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.tdmd-vt-cond .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.tdmd-vt-cond .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.tdmd-vt-cond .tdmd-vt-cond__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.tdmd-vt-cond .tdmd-vt-cond__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.tdmd-vt-cond .tdmd-vt-cond__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
`;

export default function VtTickBiteTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'vt-tick-bite-treatment-online';
  const vtTowns = ['Burlington', 'Winooski', 'Middlebury', 'Rutland', 'Vergennes', 'Montpelier', 'Brattleboro', 'St. Albans'];

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
            <span aria-current="page">Tick Bite Treatment & Lyme Prevention Online</span>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Tick Bite Treatment &amp; Lyme Disease Prevention in Vermont (Online)</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  Same-day tick-photo review &amp; PEP eligibility check for Vermont adults 18+ · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant
                </p>
                <p>
                  Pull a tick off your skin in Vermont and you are doing so in the highest-risk tick environment in the continental United States. The action that matters most happens in the first three days: if the tick was a black-legged tick, was attached long enough, and you act within 72 hours, a single dose of doxycycline can stop Lyme disease before it starts. A video visit lets a Vermont-licensed physician review your tick photo, weigh the IDSA criteria, and send that dose to your pharmacy the same day &mdash; no waiting room, no scheduling delay. This page serves adults located anywhere in Vermont, from {vtTowns.join(', ')}, to the most remote Green Mountain hollows.
                </p>

                {/* inline opener — mirrors FAQ_ITEMS PEP answer */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can a Vermont-licensed physician prescribe preventive doxycycline by video?</strong> Yes &mdash; when all four IDSA criteria are met. Under <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a>, a Vermont-licensed physician may open a new patient relationship and e-prescribe non-controlled medication over synchronous video, held to the standard of care set by the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. Post-exposure prophylaxis is a single 200 mg dose of doxycycline for qualifying adults 18+. Self pay is $79.
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
                      NPI {PHYSICIAN.npi} · Vermont Medical License #{PHYSICIAN.licenseNumber} (<a href="https://secure.professionals.healthvermont.gov/PROD/PORTAL/PRLicenseSearch/SearchPage" rel="noopener" target="_blank">verify</a>) · Last reviewed June 4, 2026
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-why-vt`}>Why this matters in Vermont</a></li>
                  <li><a href={`#${pid}-now`}>What to do right now after a bite</a></li>
                  <li><a href={`#${pid}-pep`}>Single-dose doxycycline (PEP)</a></li>
                  <li><a href={`#${pid}-treat`}>When early Lyme needs treatment</a></li>
                  <li><a href={`#${pid}-escalate`}>When to skip telehealth</a></li>
                  <li><a href={`#${pid}-cost`}>What TeleDirectMD provides &amp; cost</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                  <li>MD-only tick-photo review and PEP eligibility decision</li>
                  <li>Single-dose doxycycline e-prescribed when IDSA criteria are met</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/vt/" className="tdmd-btn tdmd-btn-outline">Explore Vermont Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> A69.20 (Lyme disease, unspecified); Z20.818 (contact/exposure to tick); final coding depends on the exam</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Tick-Bite Care in Vermont</h2>
                  <ul>
                    <li>Tick photo and engorgement review on camera</li>
                    <li>IDSA post-exposure prophylaxis eligibility determination</li>
                    <li>Single-dose doxycycline e-prescription when criteria are met</li>
                    <li>Early Lyme treatment when a rash or symptoms appear</li>
                    <li>Clear referral pathway to urgent care or the ED when needed</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. Seek in-person or emergency care now for severe headache, neck stiffness, confusion, seizures, palpitations, chest pain, fainting, a tick on the eye or face, pregnancy, or severe immunocompromise. TeleDirectMD does not prescribe controlled substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY VERMONT (DEEP DATA BLOCK) ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-why-vt`}>
          <div className="tdmd-container">
            <h2>Why a Tick Bite Is a Bigger Deal in Vermont Than Almost Anywhere Else</h2>
            <p>
              Vermont is, by the numbers, the Lyme capital of the United States. The state recorded a Lyme disease incidence of <strong>170.5 cases per 100,000 residents</strong> in 2019 &mdash; more than seventeen times the threshold the CDC uses to call a state endemic &mdash; and it routinely ranks first or second in the country, a standing reflected in <a href="https://www.cdc.gov/mmwr/volumes/73/wr/mm7306a1.htm" rel="noopener" target="_blank">CDC MMWR Lyme surveillance</a>. The <a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses/lyme-disease" rel="noopener" target="_blank">Vermont Department of Health</a> reports that 2025 produced the highest number of Vermont cases ever recorded, confirming that the underlying transmission risk is still climbing, not fading.
            </p>
            <p>
              The reason sits in the ticks themselves. Vermont&apos;s 2018&ndash;2022 pathogen surveillance found that <strong>56.7% of adult black-legged ticks (<em>Ixodes scapularis</em>) carried <em>Borrelia burgdorferi</em></strong>, the Lyme bacterium, and that about <strong>24% of nymph-stage ticks</strong> carried it as well. Nymphs are the bigger hazard despite the lower infection rate: at the size of a poppy seed they are nearly impossible to spot, and they are most active exactly when people are outdoors. The <a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses/tick-activity-vermont" rel="noopener" target="_blank">VT DOH tick-activity record</a> puts the nymph peak from May into July and the adult peak in October and November, when foliage and hunting seasons pull Vermonters into tick habitat.
            </p>
            <div className="tdmd-vt-cond__stat-grid">
              <div className="tdmd-vt-cond__stat"><div className="tdmd-vt-cond__stat-num">170.5</div><div className="tdmd-vt-cond__stat-cap">Lyme cases per 100,000 (VT, 2019) — highest in the US</div></div>
              <div className="tdmd-vt-cond__stat"><div className="tdmd-vt-cond__stat-num">56.7%</div><div className="tdmd-vt-cond__stat-cap">Adult black-legged ticks carrying <em>Borrelia burgdorferi</em> (VT, 2018&ndash;2022)</div></div>
              <div className="tdmd-vt-cond__stat"><div className="tdmd-vt-cond__stat-num">~24%</div><div className="tdmd-vt-cond__stat-cap">Nymph black-legged ticks carrying the Lyme bacterium</div></div>
              <div className="tdmd-vt-cond__stat"><div className="tdmd-vt-cond__stat-num">2025</div><div className="tdmd-vt-cond__stat-cap">Vermont&apos;s all-time-high Lyme case count (VT DOH)</div></div>
            </div>
            <p style={{ marginTop: '1rem' }}>
              Two tick families do the biting here. The <strong>black-legged tick (<em>Ixodes scapularis</em>)</strong> is the one that matters most: it carries Lyme disease, anaplasmosis, babesiosis, and the rare but devastating Powassan virus. The <strong>American dog tick</strong> can in principle transmit Rocky Mountain spotted fever and tularemia, though both remain rare in Vermont and have not been confirmed from in-state tick testing. Beyond Lyme, the <a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses" rel="noopener" target="_blank">Vermont Department of Health</a> has documented anaplasmosis, babesiosis, occasional ehrlichiosis, and <a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses/powassan-virus" rel="noopener" target="_blank">Powassan virus &mdash; two Vermont cases across 2022 and 2023</a> &mdash; among recent tick-borne illnesses. Eastern equine encephalitis is a separate, mosquito-borne disease that appears in Vermont only at very low frequency; it is not transmitted by ticks and is mentioned here only so the differential is complete.
            </p>
          </div>
        </section>

        {/* ─── WHAT TO DO RIGHT NOW ─── */}
        <section className="tdmd-section" id={`${pid}-now`}>
          <div className="tdmd-container">
            <h2>What to Do Right Now After a Tick Bite</h2>
            <p>The first hour sets up everything that follows. Work through these five steps in order before you book the visit.</p>
            <ul className="tdmd-vt-cond__checklist">
              <li><strong>Remove the tick the right way.</strong> Take fine-tipped tweezers, grasp the tick as close to your skin as you can, and pull straight up with slow, steady pressure. Do not twist or jerk &mdash; that can leave mouthparts behind. Skip every folk remedy: no heat, no lit match, no petroleum jelly, no nail polish. Those waste time and can make the tick regurgitate into the wound.</li>
              <li><strong>Save the tick.</strong> Seal it in a zip bag or small container and photograph it beside a coin or ruler so its size shows. Species and how engorged it is are the two facts that drive your eligibility for preventive doxycycline.</li>
              <li><strong>Clean the bite.</strong> Wash the area and your hands with rubbing alcohol or with soap and water.</li>
              <li><strong>Write down the time of removal.</strong> The 72-hour prophylaxis window is counted from the moment you pulled the tick, so this single timestamp can decide whether single-dose doxycycline is still on the table.</li>
              <li><strong>Book a TeleDirectMD video visit.</strong> If you think the prophylaxis criteria in the next section may apply, reserve a same-day visit. The physician reviews your tick photo and timing and makes the call.</li>
            </ul>
          </div>
        </section>

        {/* ─── PEP ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-pep`}>
          <div className="tdmd-container">
            <h2>Single-Dose Doxycycline (PEP): When Prevention Applies</h2>
            <p>
              Post-exposure prophylaxis is the strategy that makes a tick bite in Vermont worth treating fast. The <a href="https://www.idsociety.org/practice-guideline/lyme-disease/" rel="noopener" target="_blank">2020 IDSA, AAN, and ACR Lyme disease guidelines</a> (Lantos et al, <em>Clinical Infectious Diseases</em>) support a single preventive dose of doxycycline only when <strong>all four</strong> of the following are true:
            </p>
            <div className="tdmd-vt-cond__pep">
              <h3>The four IDSA prophylaxis criteria</h3>
              <ol>
                <li>The tick is identified as a black-legged / deer tick (<em>Ixodes scapularis</em>).</li>
                <li>The tick is estimated to have been attached for <strong>36 hours or longer</strong>, judged from how engorged it looks or from your own exposure history.</li>
                <li>Doxycycline can be started <strong>within 72 hours</strong> of removing the tick.</li>
                <li>The bite happened where local <em>Ixodes</em> ticks carry <em>Borrelia</em> at a rate of <strong>20% or higher</strong> &mdash; a bar Vermont clears in nearly every county.</li>
              </ol>
            </div>
            <p style={{ marginTop: '1rem' }}>
              When those line up, the regimen is <strong>doxycycline 200 mg by mouth as a single dose</strong> for non-pregnant adults 18 and older. That is the whole course &mdash; one dose, not a daily run. Doxycycline is avoided in pregnancy, so pregnant patients need a different plan made in person. At most Vermont pharmacies the single PEP dose costs roughly <a href="https://www.goodrx.com/doxycycline" rel="noopener" target="_blank">$5 to $15 with a GoodRx coupon</a>, paid separately from the $79 visit fee. If even one criterion is missing &mdash; the tick was not <em>Ixodes</em>, it was barely attached, or more than 72 hours have passed &mdash; the guideline favors watchful waiting rather than a dose that would not help, with a 30-day watch for any rash or symptoms.
            </p>
          </div>
        </section>

        {/* ─── EARLY LYME TREATMENT ─── */}
        <section className="tdmd-section" id={`${pid}-treat`}>
          <div className="tdmd-container">
            <h2>When Early Lyme Needs Treatment, Not Just Prevention</h2>
            <p>
              Prevention and treatment are different jobs. If symptoms have already appeared, you are past prophylaxis and into treatment. Two patterns prompt empirical therapy:
            </p>
            <ul>
              <li><strong>An erythema migrans rash</strong> &mdash; the expanding, often bull&apos;s-eye lesion that grows past 5 cm and shows up days to a few weeks after a bite. It may or may not have the classic concentric rings; what defines it is the steady outward expansion from the bite site.</li>
              <li><strong>Flu-like illness within 30 days of a possible Vermont tick exposure</strong> &mdash; fever, fatigue, headache, and aching joints or muscles during tick season, with or without a visible rash.</li>
            </ul>
            <p>
              For these, the IDSA 2020 regimen is <strong>doxycycline 100 mg by mouth twice daily for 14 days</strong>, with a 10-day course acceptable for an isolated erythema migrans rash. This is a fundamentally different prescription from the single 200 mg prophylaxis dose, and the physician decides which fits your presentation. Because the early-Lyme rash can be confused with other expanding or banded skin findings, it helps to compare it against the dermatomal, blistering pattern of zoster &mdash; our <a href="/vt/shingles-treatment-online/">Vermont shingles page</a> walks through that rash differential in detail.
            </p>
          </div>
        </section>

        {/* ─── ESCALATE (SAFETY) ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-escalate`}>
          <div className="tdmd-container">
            <h2>When Telehealth Is Not Enough — Go In Person</h2>
            <p>A video visit is the right tool for clean prophylaxis decisions and uncomplicated early Lyme. The situations below need hands-on evaluation, testing, or emergency care that telehealth cannot deliver.</p>
            <div className="tdmd-vt-cond__dual">
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--good">
                <h3>&#10003; A video visit usually fits</h3>
                <ul>
                  <li>Adult 18+, located in Vermont, not pregnant</li>
                  <li>A removed tick you can photograph, with a known removal time</li>
                  <li>Weighing single-dose prophylaxis inside the 72-hour window</li>
                  <li>A clear, expanding bull&apos;s-eye rash with tick-exposure history</li>
                  <li>Mild flu-like symptoms after a Vermont tick bite, no red flags</li>
                </ul>
              </div>
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--alert">
                <h3>&#10007; Go in person or to the ED</h3>
                <ul>
                  <li>Suspected disseminated Lyme: palpitations, chest pain, or dizziness (carditis); severe headache or neck stiffness (meningitis); a swollen, painful large joint (late arthritis)</li>
                  <li>Possible Powassan virus: rapid neurologic decline, confusion, seizures &mdash; an emergency, since it can transmit in as little as 15 minutes</li>
                  <li>Pregnancy (doxycycline is contraindicated) or severe immunocompromise</li>
                  <li>An atypical rash that needs a clinician&apos;s eyes, or a tick attached to the face or eye area</li>
                  <li>A bite site contaminated by an animal bite</li>
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If any red flag applies, seek urgent or emergency care now. TeleDirectMD is not built for disseminated Lyme or Powassan virus.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHAT TDMD PROVIDES + COST ─── */}
        <section className="tdmd-section" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>What TeleDirectMD Provides — and What It Costs</h2>
            <p>A single $79 video visit with a Vermont-licensed family medicine physician covers the full tick-bite workflow:</p>
            <ul>
              <li>Same-day video visit with a Vermont-licensed physician (Vermont Medical License #042.0040345-COMP &mdash; <a href="https://secure.professionals.healthvermont.gov/PROD/PORTAL/PRLicenseSearch/SearchPage" rel="noopener" target="_blank">verify via the VT Board</a>)</li>
              <li>Tick photo review and a clear post-exposure prophylaxis eligibility decision</li>
              <li>Single-dose doxycycline e-prescription to your Vermont pharmacy when the four IDSA criteria are met</li>
              <li>Empirical early-Lyme treatment when a bull&apos;s-eye rash or constitutional symptoms are present</li>
              <li>A referral pathway to in-person urgent care or the emergency department when escalation criteria apply</li>
            </ul>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Vermont-licensed MD video evaluation</li>
                  <li>Tick-photo review and PEP eligibility decision</li>
                  <li>e-Prescription to your VT pharmacy (when appropriate)</li>
                  <li>Escalation guidance and referral pathway</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical tick-bite visit cost comparison">
                <h3>Typical Tick-Bite Visit Cost in Vermont</h3>
                <p className="tdmd-price-caption">Ranges Vermonters commonly see. Actual cost varies by setting and town.</p>
                <div className="tdmd-vbars" role="list" aria-label="Cost comparison bars">
                  {[
                    { name: 'TeleDirectMD video visit', value: '$79', heightPct: 16, isTdmd: true },
                    { name: 'Other telehealth', value: '$75–$150', heightPct: 24 },
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

        {/* ─── CTA STRIP ─── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-vt-cond__cta-strip" role="complementary">
              <div>
                <p>Pulled a tick today? See a Vermont-licensed MD now — adults 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · The 72-hour window is ticking</small>
              </div>
              <a className="tdmd-vt-cond__cta-btn" href="/book-online" rel="noopener">Book Now &rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Tick Bites & Lyme Prevention in Vermont"
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />
            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Inside the 72-hour window?</h3>
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
            <p>When the rash or the symptoms point somewhere other than a tick bite, these Vermont pages may help.</p>
            <div className="tdmd-vt-cond__sibling-grid">
              <a className="tdmd-vt-cond__sibling" href="/vt/shingles-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Shingles Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">The rash differential: dermatomal blisters versus the expanding bull&apos;s-eye of early Lyme.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/sinus-infection-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Sinus Infection Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Another common cause of fever and headache to sort from a tick-borne illness.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/sore-throat-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Sore Throat Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Constitutional symptoms overlap; fatigue and aches can point either way.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/online-doctor-visits/">
                <span className="tdmd-vt-cond__sibling-label">All Online Doctor Visits in VT</span>
                <span className="tdmd-vt-cond__sibling-why">The general Vermont telehealth hub for everything we treat.</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── PILLAR LINKS ─── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page connects the <a href="/vt/">Vermont state hub</a> with our broader condition library. Use the links below to read more or book.</p>
            <div className="tdmd-vt-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/vt/shingles-treatment-online/">VT shingles (rash differential)</a>
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
              <li><a href="https://www.cdc.gov/mmwr/volumes/73/wr/mm7306a1.htm" rel="noopener" target="_blank">CDC MMWR — Lyme Disease Surveillance, United States</a>. Retrieved June 2026.</li>
              <li><a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses" rel="noopener" target="_blank">Vermont Department of Health — Tick-Bite Illnesses</a>. Retrieved June 2026.</li>
              <li><a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses/lyme-disease" rel="noopener" target="_blank">Vermont Department of Health — Lyme Disease (170.5 per 100,000; 2025 record)</a>. Retrieved June 2026.</li>
              <li><a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses/tick-activity-vermont" rel="noopener" target="_blank">Vermont Department of Health — Tick Activity in Vermont (2018–2022 pathogen surveillance; 56.7% adult / 24% nymph infection)</a>. Retrieved June 2026.</li>
              <li><a href="https://www.healthvermont.gov/disease-control/tick-bite-illnesses/powassan-virus" rel="noopener" target="_blank">Vermont Department of Health — Powassan Virus (2 Vermont cases, 2022–2023)</a>. Retrieved June 2026.</li>
              <li><a href="https://www.idsociety.org/practice-guideline/lyme-disease/" rel="noopener" target="_blank">IDSA/AAN/ACR 2020 Guidelines for the Prevention, Diagnosis and Treatment of Lyme Disease (Lantos et al, Clinical Infectious Diseases)</a>. Retrieved June 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=doxycycline" rel="noopener" target="_blank">FDA / DailyMed — Doxycycline prescribing information</a>. Retrieved June 2026.</li>
              <li><a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219 (Vermont telemedicine statute)</a>. Retrieved June 2026.</li>
              <li><a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. Retrieved June 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── DISCLAIMER ─── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is educational and is not individualized medical advice. A physician-patient relationship begins only when a video visit starts and consent is documented under 18 V.S.A. Chapter 219. A Vermont-licensed, board-certified physician makes prophylaxis and treatment decisions from the tick photo, attachment history, and symptoms presented at the visit. No prevention or treatment is guaranteed to be fully effective. For severe headache, neck stiffness, confusion, seizures, palpitations, chest pain, fainting, a rapidly worsening course that could be Powassan virus, pregnancy, or a tick on the eye or face, seek in-person or emergency care immediately.</p>
            <p>TeleDirectMD does not prescribe controlled substances in any state. Pharmacy prices reflect GoodRx national coupon pricing retrieved May 2026; actual costs in Vermont vary.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug="tick-bite-treatment-online" conditionName="Tick Bite Treatment" stateName="Vermont" />
        <CompareTeleDirectMDLinkRow conditionSlug="tick-bite-treatment-online" />
        <CommonSymptomsBlock conditionSlug="tick-bite-treatment-online" conditionName="Tick Bite Treatment" />
      </div>
    </>
  );
}
