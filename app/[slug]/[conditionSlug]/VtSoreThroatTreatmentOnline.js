/**
 * VtSoreThroatTreatmentOnline.js — production Vermont × Sore Throat / Strep page (v4)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'vt' and
 * conditionSlug === 'sore-throat-treatment-online'.
 *
 * v4 reship — AI-visibility upgrade (physician schema w/ VT license + areaServed,
 * visible license-number byline, fresh dates) plus a distinct Vermont lead angle:
 * adult workplace and school-calendar transmission in a small-population state,
 * with Centor/McIsaac scoring driving cash-pay decisions.
 *
 * Hard rules: FAQPage only; NPI 1104323203 visible; cash-pay only, no payer
 * assertions; no first-person prescribing; adults 18+; no controlled substances.
 */

import FaqAccordion from '../../components/FaqAccordion';
import { VtNationalStyle } from '../../components/VtNationalChrome';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/vt/sore-throat-treatment-online/';
const PAGE_TITLE = 'Sore Throat & Strep Treatment Online in Vermont | TeleDirectMD';
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
    question: 'Can a sore throat really be assessed by video when strep needs a swab?',
    answerPlain:
      'Yes, with an important caveat about testing. A Vermont-licensed physician can take a careful history over video, look at the throat on camera, and apply the Centor and McIsaac scoring tools that clinicians use to estimate the odds of group A strep in adults. What telehealth cannot do is run a rapid strep test or throat culture, which require an in-person swab. So the visit ends one of two ways: a low score points to a viral cause and supportive care, while a higher score means the physician either prescribes empirically when the history strongly supports strep, or directs you to an in-person swab before antibiotics. The score, not a guess, drives the decision. Self pay is $79.',
    answer: (
      <p>
        Yes, with an important caveat about testing. A Vermont-licensed physician can take a careful history over video, look at the throat on camera, and apply the Centor and McIsaac scoring tools that clinicians use to estimate the odds of group A strep in adults. What telehealth cannot do is run a rapid strep test or throat culture, which require an in-person swab. So the visit ends one of two ways: a low score points to a viral cause and supportive care, while a higher score means the physician either prescribes empirically when the history strongly supports strep, or directs you to an in-person swab before antibiotics. The score, not a guess, drives the decision. Self pay is $79.
      </p>
    ),
  },
  {
    question: 'Why does an adult strep case carry extra weight in Vermont?',
    answerPlain:
      'Vermont is a small, tightly connected state of roughly 647,000 people, and the people most likely to seek care for a sore throat — teachers, daycare and childcare workers, nurses, and other front-line staff — sit at the center of dense contact networks. When one of them carries untreated group A strep into a classroom, a childcare room, or a care setting, the chain of onward transmission reaches more vulnerable people than the same case would in a large anonymous metro. That is why prompt, accurate sorting of strep from a viral sore throat matters more here, both for the individual and for the small community around them.',
    answer: (
      <p>
        Vermont is a small, tightly connected state of roughly 647,000 people, and the people most likely to seek care for a sore throat &mdash; teachers, daycare and childcare workers, nurses, and other front-line staff &mdash; sit at the center of dense contact networks. When one of them carries untreated group A strep into a classroom, a childcare room, or a care setting, the chain of onward transmission reaches more vulnerable people than the same case would in a large anonymous metro. That is why prompt, accurate sorting of strep from a viral sore throat matters more here, both for the individual and for the small community around them.
      </p>
    ),
  },
  {
    question: 'What are the Centor and McIsaac criteria, and how are they used for adults?',
    answerPlain:
      'The Centor criteria award one point each for fever, tonsillar exudate (pus on the tonsils), tender swollen lymph nodes at the front of the neck, and absence of cough. The McIsaac modification adds an age adjustment; for adults 18 and older there is no added point, and for ages 45 and up one point is subtracted. A low total (0 to 1) makes strep unlikely and favors supportive care without testing. A middle score may warrant an in-person swab. A high total (3 or more) raises the probability enough that the physician either treats empirically when the history fits or sends you for an in-person test. The tool is built for adults paying out of pocket because it tells you when a test or an antibiotic is actually worth it.',
    answer: (
      <p>
        The Centor criteria award one point each for fever, tonsillar exudate (pus on the tonsils), tender swollen lymph nodes at the front of the neck, and absence of cough. The McIsaac modification adds an age adjustment; for adults 18 and older there is no added point, and for ages 45 and up one point is subtracted. A low total (0 to 1) makes strep unlikely and favors supportive care without testing. A middle score may warrant an in-person swab. A high total (3 or more) raises the probability enough that the physician either treats empirically when the history fits or sends you for an in-person test, consistent with <a href="https://www.idsociety.org/practice-guideline/strep-throat/" rel="noopener" target="_blank">IDSA guidance</a>. The tool is built for adults paying out of pocket because it tells you when a test or an antibiotic is actually worth it.
      </p>
    ),
  },
  {
    question: 'If I score high, will I just get antibiotics, or do I still need a swab?',
    answerPlain:
      'It depends on the history. With three or more Centor points and a story that fits strep — sudden sore throat, fever, pus on the tonsils, tender neck nodes, no cough — a physician may reasonably prescribe a first-line antibiotic empirically. When the picture is less clear, the more careful path is an in-person rapid strep test or culture before committing to antibiotics, because most sore throats are viral and antibiotics do nothing for those. The physician makes that call with you, weighing your symptoms, your contacts, and the stewardship principle of not treating viral illness.',
    answer: (
      <p>
        It depends on the history. With three or more Centor points and a story that fits strep &mdash; sudden sore throat, fever, pus on the tonsils, tender neck nodes, no cough &mdash; a physician may reasonably prescribe a first-line antibiotic empirically. When the picture is less clear, the more careful path is an in-person rapid strep test or culture before committing to antibiotics, because most sore throats are viral and antibiotics do nothing for those. The physician makes that call with you, weighing your symptoms, your contacts, and the stewardship principle of not treating viral illness.
      </p>
    ),
  },
  {
    question: 'Which antibiotics treat strep, and how are they dosed?',
    answerPlain:
      'For confirmed or strongly suspected group A strep, penicillin V 500 mg by mouth twice or three times daily for 10 days is the classic first-line choice, and amoxicillin 500 mg by mouth twice daily for 10 days is an equally accepted option that many adults find easier to take. For a penicillin allergy, cephalexin 500 mg by mouth twice daily for 10 days works when the allergy is not severe, and azithromycin (500 mg on day one, then 250 mg daily for four more days) is a last-line reserve given rising macrolide resistance. None is a controlled substance, so all are prescribable through Vermont telehealth.',
    answer: (
      <p>
        For confirmed or strongly suspected group A strep, <strong>penicillin V 500 mg by mouth two to three times daily for 10 days</strong> is the classic first-line choice, and <strong>amoxicillin 500 mg by mouth twice daily for 10 days</strong> is an equally accepted option many adults find easier to take. For a penicillin allergy, <strong>cephalexin 500 mg by mouth twice daily for 10 days</strong> works when the allergy is not severe, and <strong>azithromycin (500 mg on day one, then 250 mg daily for four more days)</strong> is a last-line reserve given rising macrolide resistance. None is a controlled substance, so all are prescribable through Vermont telehealth.
      </p>
    ),
  },
  {
    question: 'When is a sore throat an emergency in Vermont?',
    answerPlain:
      'Seek emergency care right away for trouble breathing, trouble swallowing your own saliva, a muffled hot-potato voice, drooling, a stiff neck, or swelling that pushes one tonsil toward the midline. Those can signal a deep-throat or airway problem such as a peritonsillar abscess or epiglottitis, which a video visit cannot manage. A Vermont emergency department is the right setting for any of these.',
    answer: (
      <p>
        Seek emergency care right away for trouble breathing, trouble swallowing your own saliva, a muffled &ldquo;hot-potato&rdquo; voice, drooling, a stiff neck, or swelling that pushes one tonsil toward the midline. Those can signal a deep-throat or airway problem such as a peritonsillar abscess or epiglottitis, which a video visit cannot manage. A Vermont emergency department is the right setting for any of these.
      </p>
    ),
  },
  {
    question: 'Does the school calendar change when sore throats show up in Vermont?',
    answerPlain:
      'It does. Group A strep tracks the school year, with adult cases rising once classrooms refill in the fall and through the winter months, then easing over summer break. Because so many Vermont adults work in or live with someone in a school or childcare setting, the household-and-classroom rhythm pulls adult sore-throat visits along with it. Knowing where you sit in that calendar — and who you have been around — helps the physician judge how likely strep is before any test or prescription.',
    answer: (
      <p>
        It does. Group A strep tracks the school year, with adult cases rising once classrooms refill in the fall and through the winter months, then easing over summer break. Because so many Vermont adults work in or live with someone in a school or childcare setting, the household-and-classroom rhythm pulls adult sore-throat visits along with it. Knowing where you sit in that calendar &mdash; and who you have been around &mdash; helps the physician judge how likely strep is before any test or prescription.
      </p>
    ),
  },
  {
    question: 'Can a Vermont physician treat me without an office visit first?',
    answerPlain:
      'Yes. Under 18 V.S.A. Chapter 219, a Vermont-licensed physician may begin care and prescribe non-controlled medication over synchronous video with no preceding in-person appointment, recording telehealth consent at the start of the visit. The physician applies Centor and McIsaac scoring, looks at the throat on camera, and either treats, refers for an in-person swab, or recommends supportive care.',
    answer: (
      <p>
        Yes. Under <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a>, a Vermont-licensed physician may begin care and prescribe non-controlled medication over synchronous video with no preceding in-person appointment, recording telehealth consent at the start of the visit. The physician applies Centor and McIsaac scoring, looks at the throat on camera, and either treats, refers for an in-person swab, or recommends supportive care.
      </p>
    ),
  },
  {
    question: 'How fast does an antibiotic reach my Vermont pharmacy?',
    answerPlain:
      'Vermont permits electronic prescribing of non-controlled medications with no e-prescribing mandate. When an antibiotic is appropriate, the order goes electronically to the Vermont pharmacy you name during or just after the visit, and most fill within one to four hours.',
    answer: (
      <p>
        Vermont permits electronic prescribing of non-controlled medications with no e-prescribing mandate, per the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. When an antibiotic is appropriate, the order goes electronically to the Vermont pharmacy you name during or just after the visit, and most fill within one to four hours.
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
      'Sore throat and strep evaluation by secure video for Vermont adults 18+. Board-certified Family Medicine physician licensed in Vermont. Centor/McIsaac scoring, antibiotic stewardship, dosing for penicillin V, amoxicillin, cephalexin, azithromycin. Cash-pay $79 flat. 18 V.S.A. Chapter 219 compliant.',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Pharyngitis (Sore Throat / Strep Throat)',
      alternateName: ['Sore Throat', 'Strep Throat', 'Streptococcal Pharyngitis', 'Group A Strep'],
      code: { '@type': 'MedicalCode', code: 'J02.9', codingSystem: 'ICD-10-CM' },
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
        '#vt-sore-throat-treatment-online-opening',
        '#vt-sore-throat-treatment-online-opening p',
        '.tdmd-vt-cond__byline',
        '#vt-sore-throat-treatment-online-faq',
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
    name: 'How to Get Sore Throat Treatment Online in Vermont',
    description:
      'Three steps for a Vermont-licensed board-certified physician to score your strep probability, then treat, refer for a swab, or recommend supportive care.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book and gather your details', text: 'Reserve a same-day slot and note your fever, whether you have a cough, neck tenderness, and recent contacts in schools or childcare. Self pay $79.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'Score it with a Vermont-licensed MD', text: 'A board-certified Family Medicine physician licensed in Vermont applies Centor and McIsaac scoring and views the throat on camera. Consent is documented under 18 V.S.A. Chapter 219.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Treat, swab, or soothe', text: 'A low score means supportive care; a high score means an empiric antibiotic when the history fits, or a referral for an in-person rapid strep test. Any prescription is e-sent to your Vermont pharmacy.', url: PAGE_URL },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Vermont', item: 'https://teledirectmd.com/vt/' },
      { '@type': 'ListItem', position: 3, name: 'Sore Throat Treatment Online in Vermont', item: PAGE_URL },
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
.tdmd-vt-cond .tdmd-vt-cond__centor{background:var(--tdmd-bg-soft,#f6f8fa);border:1px solid var(--tdmd-border);border-left:5px solid #1D4ED8;border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.3rem;margin-top:1rem;}
.tdmd-vt-cond .tdmd-vt-cond__centor h3{color:#1E3A8A;margin-top:0.6rem;}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.tdmd-vt-cond .tdmd-vt-cond__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.tdmd-vt-cond .tdmd-vt-cond__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.tdmd-vt-cond .tdmd-vt-cond__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
`;

export default function VtSoreThroatTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'vt-sore-throat-treatment-online';
  const vtTowns = ['Burlington', 'Essex Junction', 'Winooski', 'Rutland', 'Montpelier', 'St. Albans', 'Hartford', 'Bennington'];

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

      <div className="tdmd-vt-cond tdmd-natl">
        <VtNationalStyle />
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Sore Throat Treatment Online</span>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Sore Throat &amp; Strep Treatment Online in Vermont</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  Centor-scored adult assessment · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant
                </p>
                <p>
                  A sore throat is one of the most common reasons adults book a same-day visit, and the central question is always the same: is this the viral kind that needs only comfort care, or group A strep that needs an antibiotic? In a state as small and connected as Vermont &mdash; about 647,000 people, with teachers, childcare workers, and health staff at the hub of every contact network &mdash; getting that answer right has consequences beyond the patient. This video visit uses the Centor and McIsaac scoring tools to estimate strep probability and decide, in cash-pay terms, whether a test or an antibiotic is worth it. This page serves adults located anywhere in Vermont, from {vtTowns.join(', ')}, to the smaller towns around them.
                </p>

                {/* v4 inline opener — mirrors FAQ_ITEMS[0] */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can a sore throat be assessed by video when strep needs a swab?</strong> Yes, with a caveat. Under <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a>, a Vermont-licensed physician &mdash; held to the same standard of care as in person by the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> &mdash; can take a history, view the throat on camera, and apply Centor and McIsaac scoring. Telehealth cannot run a swab, so a high score leads to either an empiric antibiotic when the history fits or a referral for an in-person rapid strep test. Self pay is $79.
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
                  <li><a href={`#${pid}-centor`}>Centor / McIsaac scoring &amp; Vermont transmission</a></li>
                  <li><a href={`#${pid}-vt-law`}>Vermont telehealth law</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; payment</a></li>
                  <li><a href={`#${pid}-medications`}>Antibiotic options</a></li>
                  <li><a href={`#${pid}-dual-path`}>Video vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                  <li>MD-only care using Centor/McIsaac scoring</li>
                  <li>Clear path to test, treat, or soothe — no guesswork</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit, $79</a>
                  <a href="/vt/" className="tdmd-btn tdmd-btn-outline">Explore Vermont Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J02.9 (acute pharyngitis, unspecified); final coding depends on the exam</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Sore Throat Care in Vermont</h2>
                  <ul>
                    <li>Centor / McIsaac scoring to estimate strep probability</li>
                    <li>On-camera throat review and contact history</li>
                    <li>Empiric antibiotic or in-person swab referral by score</li>
                    <li>e-Prescription to your Vermont pharmacy when warranted</li>
                    <li>Comfort-care plan for the common viral sore throat</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. Seek emergency care now for trouble breathing or swallowing saliva, drooling, a muffled voice, or one-sided throat swelling. TeleDirectMD does not prescribe controlled substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ELIGIBILITY ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Who Can Use a Vermont Sore Throat Video Visit</h2>
            <p><strong>A video visit usually fits when every line on the left holds:</strong></p>
            <div className="tdmd-vt-cond__dual">
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--good">
                <h3>&#10003; Good candidate</h3>
                <ul>
                  <li>Adult 18 or older, physically in Vermont during the visit</li>
                  <li>Sore throat with or without fever, able to swallow normally</li>
                  <li>Can describe cough, neck tenderness, and recent contacts</li>
                  <li>No trouble breathing or drooling</li>
                  <li>No one-sided throat swelling or muffled voice</li>
                  <li>Willing to get an in-person swab if the score calls for it</li>
                </ul>
              </div>
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--alert">
                <h3>&#10007; Needs in-person or emergency care</h3>
                <ul>
                  <li>Trouble breathing or swallowing your own saliva</li>
                  <li>Drooling or a muffled &ldquo;hot-potato&rdquo; voice</li>
                  <li>Swelling pushing one tonsil toward the midline</li>
                  <li>Stiff neck with high fever</li>
                  <li>Severe one-sided pain that keeps worsening</li>
                  <li>Significant immunosuppression</li>
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If any red flag applies, seek emergency care now. TeleDirectMD is not appropriate for airway or deep-throat infections.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CENTOR / TRANSMISSION BLOCK (UNIQUE) ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-centor`}>
          <div className="tdmd-container">
            <h2>Scoring Strep, and Why a Vermont Case Travels Further</h2>
            <p>
              The reason a sore throat needs more than a glance is that most are viral, yet a meaningful minority are group A strep that benefits from antibiotics. Clinicians settle that question with the Centor criteria and its McIsaac age modification &mdash; a simple point system that turns a fuzzy judgment into a number you can act on, which is exactly what an adult paying cash wants before agreeing to a test or a prescription.
            </p>
            <div className="tdmd-vt-cond__centor">
              <h3>The Centor / McIsaac points (adult, 18+)</h3>
              <ul style={{ margin: '0.4rem 0 0', paddingLeft: '1.2rem', lineHeight: 1.6 }}>
                <li><strong>+1</strong> Fever (history of, or measured)</li>
                <li><strong>+1</strong> Tonsillar exudate (pus on the tonsils)</li>
                <li><strong>+1</strong> Tender, swollen anterior cervical lymph nodes</li>
                <li><strong>+1</strong> Absence of cough</li>
                <li><strong>Age modifier:</strong> no change for ages 18&ndash;44; subtract 1 for ages 45 and older</li>
              </ul>
              <p style={{ margin: '0.6rem 0 0' }}>
                <strong>0&ndash;1 points:</strong> strep unlikely; supportive care, no test. <strong>2 points:</strong> consider an in-person swab. <strong>3 or more points:</strong> high enough probability that the physician treats empirically when the history fits, or refers for an in-person rapid strep test.
              </p>
            </div>
            <p>
              Telehealth has one hard limit worth saying plainly: a rapid strep test or throat culture cannot be done over video, because both need a physical swab. So the score sets the path. A low score ends the visit with comfort care and a clear return marker. A high score, paired with a story that fits strep &mdash; sudden onset, fever, pus on the tonsils, tender neck nodes, no cough &mdash; lets the physician prescribe a first-line antibiotic empirically, or send you for an in-person swab when the picture is less certain. The decision is shared and it is grounded in the number.
            </p>
            <p>
              Vermont gives that decision extra weight. With roughly 647,000 residents and tightly woven communities, the adults who present with sore throats are disproportionately teachers, daycare and childcare workers, and health-care staff &mdash; people whose days are spent inside dense contact networks. An untreated strep case in that role seeds onward transmission to classrooms, childcare rooms, and care settings in a way a single case in a large anonymous metro rarely does. Group A strep also follows the school calendar, climbing through the fall and winter as classrooms fill and easing over summer, so a Vermont adult&apos;s exposure often runs straight through the household-school connection. Treating the right cases promptly &mdash; and not treating the viral ones &mdash; protects both the patient and the small community around them.
            </p>
          </div>
        </section>

        {/* ─── VT TELEHEALTH LAW ─── */}
        <section className="tdmd-section" id={`${pid}-vt-law`}>
          <div className="tdmd-container">
            <h2>How Vermont Law Frames Your Sore Throat Visit</h2>

            <h3>Is a prior office visit required first?</h3>
            <p>
              No. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a> lets a Vermont-licensed physician start care and prescribe over video without any preceding in-person appointment. Verbal or written telehealth consent is captured and recorded as the visit opens.
            </p>

            <h3>What standard does the treating physician owe you?</h3>
            <p>
              Under the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>, the standard of care is identical across in-person and telehealth encounters, and a Vermont license is required to treat patients in the state. Dr. Bhavsar holds Vermont Medical License #042.0040345-COMP from the Board. <a href="https://secure.professionals.healthvermont.gov/PROD/PORTAL/PRLicenseSearch/SearchPage" rel="noopener" target="_blank">Verify the license</a> · <a href="/about/">Dr. Bhavsar&apos;s bio</a>.
            </p>

            <h3>Are strep antibiotics controlled in Vermont?</h3>
            <p>
              No. Penicillin V, amoxicillin, cephalexin, and azithromycin are not controlled substances, so each is prescribable through Vermont telehealth and may be e-sent to any Vermont pharmacy. Vermont allows e-prescribing of non-controlled drugs with no mandate, per the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> and consistent with <a href="https://legislature.vermont.gov/statutes/fullchapter/26/023" rel="noopener" target="_blank">26 V.S.A. Chapter 23</a>. TeleDirectMD prescribes no controlled substances anywhere.
            </p>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">Three Steps, Driven by the Score</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book and gather your details</h3>
                  <p>Reserve a same-day slot and have your fever reading, whether you have a cough, any neck tenderness, and recent school or childcare contacts ready to share. Those feed straight into the score.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>Score it with a Vermont-licensed MD</h3>
                  <p>The physician applies Centor and McIsaac scoring, views your throat on camera, and documents consent under 18 V.S.A. Chapter 219 before recommending a path.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Treat, swab, or soothe</h3>
                  <p>A low score means comfort care; a high score means an empiric antibiotic when the history fits, or a referral for an in-person rapid strep test. Any prescription is e-sent to your Vermont pharmacy with clear instructions.</p>
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
            <h2>What a Vermont Sore Throat Visit Costs</h2>
            <p>A full MD video visit &mdash; scoring, plan, and any e-prescription &mdash; is a flat <strong>$79</strong> self-pay. Vermont visits are cash-pay only with no insurance billing. The fee is paid at booking; any antibiotic is filled separately at your pharmacy. If the score sends you for an in-person swab, that test is billed by the testing site.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video assessment</li>
                  <li>Centor / McIsaac strep scoring</li>
                  <li>e-Prescription to your VT pharmacy (when warranted)</li>
                  <li>Comfort-care plan and return markers</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical sore throat cost comparison">
                <h3>Typical Sore Throat Visit Cost in Vermont</h3>
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
            <h2>Strep Antibiotic Options and Dosing</h2>
            <p>
              Antibiotics are reserved for confirmed or strongly suspected group A strep, never for a viral sore throat. Each option below is non-controlled and prescribable through Vermont telehealth; the physician sets the final agent by your allergies and history, guided by <a href="https://www.idsociety.org/practice-guideline/strep-throat/" rel="noopener" target="_blank">IDSA strep-throat guidelines</a> and <a href="https://www.cdc.gov/group-a-strep/about/strep-throat.html" rel="noopener" target="_blank">CDC group A strep information</a>.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Strep antibiotic options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx national coupon prices retrieved May 2026 from goodrx.com; actual cost varies by pharmacy. Prescription costs are separate from the $79 visit fee.
                </caption>
                <thead>
                  <tr>
                    <th>Antibiotic</th>
                    <th>Dosing schedule</th>
                    <th>GoodRx price (May 2026)</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tdmd-vt-cond__med-firstline">
                    <td><strong>Penicillin V 500 mg</strong> · First-line</td>
                    <td>500 mg PO two to three times daily &times; 10 days</td>
                    <td><a href="https://www.goodrx.com/penicillin-v-potassium" target="_blank" rel="noopener">~$10–$20 generic</a></td>
                    <td>Classic first-line for group A strep; narrow spectrum supports stewardship.</td>
                  </tr>
                  <tr className="tdmd-vt-cond__med-firstline">
                    <td><strong>Amoxicillin 500 mg</strong> · First-line</td>
                    <td>500 mg PO twice daily &times; 10 days</td>
                    <td><a href="https://www.goodrx.com/amoxicillin" target="_blank" rel="noopener">~$10–$20 generic</a></td>
                    <td>Equally accepted first-line; simpler dosing many adults prefer.</td>
                  </tr>
                  <tr>
                    <td><strong>Cephalexin 500 mg</strong> (non-severe PCN allergy)</td>
                    <td>500 mg PO twice daily &times; 10 days</td>
                    <td><a href="https://www.goodrx.com/cephalexin" target="_blank" rel="noopener">~$10–$25 generic</a></td>
                    <td>Option for a non-severe penicillin allergy; avoid with anaphylaxis history.</td>
                  </tr>
                  <tr>
                    <td><strong>Azithromycin</strong> (last-line reserve)</td>
                    <td>500 mg PO day 1, then 250 mg daily &times; 4 days</td>
                    <td><a href="https://www.goodrx.com/azithromycin" target="_blank" rel="noopener">~$10–$25 generic</a></td>
                    <td>Reserved for severe penicillin allergy; rising macrolide resistance limits routine use.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> the choice depends on your allergies, interactions, and whether strep is confirmed or strongly suspected, as judged at the visit. Do not start an antibiotic without a clinical evaluation.
            </p>
          </div>
        </section>

        {/* ─── DUAL PATH ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>Video Visit or In-Person? A Quick Sort</h2>
            <p>Most sore throats sort cleanly by video. Airway and deep-throat warning signs belong in person, immediately.</p>
            <div className="tdmd-vt-cond__dual">
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--good">
                <h3>&#10003; Reach for telehealth when</h3>
                <ul>
                  <li>Sore throat you can describe, swallowing normally</li>
                  <li>You can report fever, cough, and neck tenderness</li>
                  <li>No airway or one-sided-swelling warning signs</li>
                  <li>Open to an in-person swab if the score calls for it</li>
                  <li>Adult 18+, located in Vermont, paying $79 cash</li>
                </ul>
              </div>
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--alert">
                <h3>&rarr; Choose in-person care when</h3>
                <ul>
                  <li><strong>Emergency / 911:</strong> trouble breathing, drooling, can&apos;t swallow saliva</li>
                  <li><strong>Urgent care or ED:</strong> one-sided swelling, muffled voice, possible abscess</li>
                  <li><strong>In-person swab:</strong> a Centor score that calls for rapid strep testing</li>
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
                <p>Sore throat going around your school or workplace? See a Vermont MD today</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · Centor-scored decisions</small>
              </div>
              <a className="tdmd-vt-cond__cta-btn" href="/book-online" rel="noopener">Book Now &rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Sore Throat &amp; Strep Treatment in Vermont"
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />
            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Throat killing you and unsure if it&apos;s strep?</h3>
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
            <p>When the sore throat sits alongside congestion, cough, or oral symptoms, these Vermont pages can help.</p>
            <div className="tdmd-vt-cond__sibling-grid">
              <a className="tdmd-vt-cond__sibling" href="/vt/sinus-infection-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Sinus Infection Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Postnasal drip from sinusitis is a frequent non-strep cause of sore throat.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/common-cold-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Common Cold Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">A cough plus runny nose points away from strep and toward a viral cold.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/influenza-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Influenza Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Flu can bring a sore throat with fever and body aches during the winter season.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/oral-thrush-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Oral Thrush Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">White patches in the mouth can be thrush rather than strep exudate.</span>
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
            <p>This page links the <a href="/vt/">Vermont state hub</a> with the <a href="/sore-throat-treatment-online/">national sore throat condition page</a>. Use the links below to read more or book.</p>
            <div className="tdmd-vt-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/sore-throat-treatment-online/">National sore throat page</a>
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
              <li><a href="https://www.idsociety.org/practice-guideline/strep-throat/" rel="noopener" target="_blank">IDSA — Clinical Practice Guideline for Group A Streptococcal Pharyngitis (2012, current)</a>. Retrieved June 2026.</li>
              <li><a href="https://www.cdc.gov/group-a-strep/about/strep-throat.html" rel="noopener" target="_blank">CDC — Strep Throat (Group A Strep) Information</a>. Retrieved June 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── DISCLAIMER ─── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is educational and is not individualized medical advice. A physician-patient relationship begins only when a video visit starts and consent is documented under 18 V.S.A. Chapter 219. A Vermont-licensed, board-certified physician makes treatment decisions from the history and Centor score at the visit. Rapid strep testing and culture require an in-person swab. For trouble breathing or swallowing, drooling, a muffled voice, or one-sided throat swelling, seek emergency care immediately.</p>
            <p>TeleDirectMD does not prescribe controlled substances in any state. Prices reflect GoodRx national coupon pricing retrieved May 2026; actual pharmacy costs in Vermont vary.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug="sore-throat-treatment-online" conditionName="Sore Throat Treatment" stateName="Vermont" />
        <CompareTeleDirectMDLinkRow conditionSlug="sore-throat-treatment-online" />
        <CommonSymptomsBlock conditionSlug="sore-throat-treatment-online" conditionName="Sore Throat Treatment" />
      </div>
    </>
  );
}
