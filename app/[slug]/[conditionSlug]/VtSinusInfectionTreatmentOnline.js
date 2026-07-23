/**
 * VtSinusInfectionTreatmentOnline.js — production Vermont × Sinus Infection (Sinusitis) page (v4)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'vt' and
 * conditionSlug === 'sinus-infection-treatment-online'.
 *
 * v4 reship — AI-visibility upgrade (physician schema w/ VT license + areaServed,
 * visible license-number byline, fresh dates) plus a distinct Vermont lead angle:
 * the long northern-New-England respiratory-virus season and the sugaring-season
 * sinus-pressure pattern that no other VT condition page can claim.
 *
 * Hard rules: FAQPage only; NPI 1104323203 visible; cash-pay only, no payer
 * assertions; no first-person prescribing; adults 18+; no controlled substances.
 */

import FaqAccordion from '../../components/FaqAccordion';
import { VtNationalStyle } from '../../components/VtNationalChrome';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/vt/sinus-infection-treatment-online/';
const PAGE_TITLE = 'Sinus Infection Treatment Online in Vermont | TeleDirectMD';
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
    question: 'Will my Vermont sinus infection actually need an antibiotic?',
    answerPlain:
      'Most likely not. The large majority of sinus infections are viral and clear on their own with saline rinses, decongestants, and time. Antibiotics help only the smaller share that turn bacterial, which the physician suspects when symptoms run past about 10 days without improvement, when they improve and then worsen again (the double-sickening pattern), or when high fever and severe facial pain arrive together early. The video visit exists to draw that line carefully, not to hand out an antibiotic by default. When the picture is clearly viral, you leave with a symptom-relief plan and a clear marker for when to come back.',
    answer: (
      <p>
        Most likely not. The large majority of sinus infections are viral and clear on their own with saline rinses, decongestants, and time. Antibiotics help only the smaller share that turn bacterial, which the physician suspects when symptoms run past about 10 days without improvement, when they improve and then worsen again (the &ldquo;double-sickening&rdquo; pattern), or when high fever and severe facial pain arrive together early. The video visit exists to draw that line carefully, not to hand out an antibiotic by default. When the picture is clearly viral, you leave with a symptom-relief plan and a clear marker for when to come back.
      </p>
    ),
  },
  {
    question: 'Why do sinus complaints spike in Vermont during sugaring season?',
    answerPlain:
      'Late February into April is maple sugaring season across Vermont, and patients reliably report more sinus pressure in those weeks. Two things drive it. Sap shacks and evaporators put woodsmoke and steam into the air around anyone tending a boil, and smoke is a known irritant to inflamed nasal passages. On top of that, the same stretch brings wild day-to-night temperature swings that thicken mucus and stall sinus drainage. The result is a season of congestion and facial pressure that often feels like an infection but is frequently irritant-driven inflammation riding on the tail end of the winter virus season.',
    answer: (
      <p>
        Late February into April is maple sugaring season across Vermont, and patients reliably report more sinus pressure in those weeks. Two things drive it. Sap shacks and evaporators put woodsmoke and steam into the air around anyone tending a boil, and smoke is a known irritant to inflamed nasal passages. On top of that, the same stretch brings wild day-to-night temperature swings that thicken mucus and stall sinus drainage. The result is a season of congestion and facial pressure that often feels like an infection but is frequently irritant-driven inflammation riding on the tail end of the winter virus season.
      </p>
    ),
  },
  {
    question: 'How long does Vermont sinus season last?',
    answerPlain:
      'Longer than in most of the country. The northern New England respiratory-virus season runs roughly October through April, stretching at both ends compared with southern states. Bacterial sinusitis, when it occurs, tends to follow a viral upper-respiratory infection and clusters from December through March. Knowing the calendar helps the physician weigh whether your timeline fits a lingering viral course or has crossed into bacterial territory.',
    answer: (
      <p>
        Longer than in most of the country. The northern New England respiratory-virus season runs roughly October through April, stretching at both ends compared with southern states, consistent with <a href="https://www.healthvermont.gov/disease-control/respiratory-illness" rel="noopener" target="_blank">Vermont Department of Health respiratory-illness surveillance</a>. Bacterial sinusitis, when it occurs, tends to follow a viral upper-respiratory infection and clusters from December through March. Knowing the calendar helps the physician weigh whether your timeline fits a lingering viral course or has crossed into bacterial territory.
      </p>
    ),
  },
  {
    question: 'Which antibiotics are used for bacterial sinusitis, and how are they dosed?',
    answerPlain:
      'When the picture is bacterial, first-line choices are amoxicillin 500 mg by mouth three times daily for 5 to 7 days, or amoxicillin-clavulanate 875/125 mg by mouth twice daily for 5 to 7 days when more coverage is warranted. For a penicillin allergy, doxycycline 100 mg by mouth twice daily for 5 to 7 days is a common alternative. None is a controlled substance, so all are prescribable through Vermont telehealth. The physician sets the final agent and length based on your allergies, history, and severity.',
    answer: (
      <p>
        When the picture is bacterial, first-line choices are <strong>amoxicillin 500 mg by mouth three times daily for 5 to 7 days</strong>, or <strong>amoxicillin-clavulanate 875/125 mg by mouth twice daily for 5 to 7 days</strong> when broader coverage is warranted. For a penicillin allergy, <strong>doxycycline 100 mg by mouth twice daily for 5 to 7 days</strong> is a common alternative. None is a controlled substance, so all are prescribable through Vermont telehealth. The physician sets the final agent and length based on your allergies, history, and severity.
      </p>
    ),
  },
  {
    question: 'When should I skip the video visit and go to a Vermont urgent care or ER?',
    answerPlain:
      'Get in-person care promptly for swelling or redness around an eye, vision changes or double vision, a severe headache with neck stiffness, confusion, or a high fever that will not break. Those can signal a complication spreading beyond the sinuses and need an exam and imaging that telehealth cannot provide. Persistent severe facial pain that keeps worsening despite a few days of care also warrants an in-person look. A Vermont urgent care or emergency department is the right setting for any of these.',
    answer: (
      <p>
        Get in-person care promptly for swelling or redness around an eye, vision changes or double vision, a severe headache with neck stiffness, confusion, or a high fever that will not break. Those can signal a complication spreading beyond the sinuses and need an exam and imaging that telehealth cannot provide. Persistent severe facial pain that keeps worsening despite a few days of care also warrants an in-person look. A Vermont urgent care or emergency department is the right setting for any of these.
      </p>
    ),
  },
  {
    question: 'Can a Vermont-licensed physician treat sinusitis without an office visit first?',
    answerPlain:
      'Yes. Under 18 V.S.A. Chapter 219, a Vermont-licensed physician may establish care and prescribe non-controlled medication over synchronous video with no preceding in-person visit. Consent for telehealth is captured and documented at the start of the encounter. The physician reviews your symptom timeline, examines what is visible on camera, and decides between symptom care and an antibiotic. Self pay is $79.',
    answer: (
      <p>
        Yes. Under <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a>, a Vermont-licensed physician may establish care and prescribe non-controlled medication over synchronous video with no preceding in-person visit. Consent for telehealth is captured and documented at the start of the encounter. The physician reviews your symptom timeline, examines what is visible on camera, and decides between symptom care and an antibiotic. Self pay is $79.
      </p>
    ),
  },
  {
    question: 'What actually helps a viral sinus infection while it runs its course?',
    answerPlain:
      'Saline irrigation or spray to flush and thin mucus, a short course of an oral or topical decongestant (kept to a few days for nasal sprays to avoid rebound congestion), warm compresses over the cheeks and brow, steam, hydration, and rest. An intranasal steroid spray can ease inflammation. Over-the-counter pain relievers handle the facial ache. The physician walks through which of these fit you and flags the exact symptoms that should prompt a follow-up.',
    answer: (
      <p>
        Saline irrigation or spray to flush and thin mucus, a short course of an oral or topical decongestant (kept to a few days for nasal sprays to avoid rebound congestion), warm compresses over the cheeks and brow, steam, hydration, and rest. An intranasal steroid spray can ease inflammation. Over-the-counter pain relievers handle the facial ache. The physician walks through which of these fit you and flags the exact symptoms that should prompt a follow-up.
      </p>
    ),
  },
  {
    question: 'How quickly does a prescription reach a Vermont pharmacy?',
    answerPlain:
      'Vermont permits electronic prescribing of non-controlled medications and imposes no e-prescribing mandate. If an antibiotic is appropriate, the order goes electronically to the Vermont pharmacy you choose during or right after the visit, and most fill within one to four hours.',
    answer: (
      <p>
        Vermont permits electronic prescribing of non-controlled medications and imposes no e-prescribing mandate, per the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. If an antibiotic is appropriate, the order goes electronically to the Vermont pharmacy you choose during or right after the visit, and most fill within one to four hours.
      </p>
    ),
  },
  {
    question: 'Does cash-pay sinus care cost less than insured options in Vermont?',
    answerPlain:
      'Often, yes, especially for the uninsured or anyone on a high-deductible plan. The TeleDirectMD visit is a flat $79 with no insurance billing in Vermont. There is no claim, no copay surprise, and no facility fee. You pay the fee at booking; any antibiotic is filled separately at your pharmacy and may be covered by a pharmacy benefit.',
    answer: (
      <p>
        Often, yes, especially for the uninsured or anyone on a high-deductible plan. The TeleDirectMD visit is a flat $79 with no insurance billing in Vermont. There is no claim, no copay surprise, and no facility fee. You pay the fee at booking; any antibiotic is filled separately at your pharmacy and may be covered by a pharmacy benefit.
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
      'Sinus infection (sinusitis) treatment by secure video for Vermont adults 18+. Board-certified Family Medicine physician licensed in Vermont. Careful viral-vs-bacterial assessment, antibiotic stewardship, dosing for amoxicillin and alternatives. Cash-pay $79 flat. 18 V.S.A. Chapter 219 compliant.',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Sinusitis (Sinus Infection)',
      alternateName: ['Sinus Infection', 'Rhinosinusitis', 'Acute Bacterial Sinusitis'],
      code: { '@type': 'MedicalCode', code: 'J01.90', codingSystem: 'ICD-10-CM' },
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
        '#vt-sinus-infection-treatment-online-opening',
        '#vt-sinus-infection-treatment-online-opening p',
        '.tdmd-vt-cond__byline',
        '#vt-sinus-infection-treatment-online-faq',
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
    name: 'How to Get Sinus Infection Treatment Online in Vermont',
    description:
      'Three steps to have a Vermont-licensed board-certified physician sort viral from bacterial sinusitis and prescribe only when an antibiotic is warranted.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book and map your timeline', text: 'Reserve a same-day slot and note day one of symptoms, whether they improved and relapsed, your peak fever, and any sugaring-shack or woodsmoke exposure. Self pay $79.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'Talk it through with a Vermont-licensed MD', text: 'A board-certified Family Medicine physician licensed in Vermont weighs your timeline against the viral-vs-bacterial criteria and reviews what is visible on camera. Consent is documented under 18 V.S.A. Chapter 219.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Get the right plan', text: 'Most patients leave with a symptom-relief plan and a return marker. When the picture is bacterial, an antibiotic is e-prescribed to your Vermont pharmacy with dosing and escalation guidance.', url: PAGE_URL },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Vermont', item: 'https://teledirectmd.com/vt/' },
      { '@type': 'ListItem', position: 3, name: 'Sinus Infection Treatment Online in Vermont', item: PAGE_URL },
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
.tdmd-vt-cond .tdmd-vt-cond__season{background:var(--tdmd-bg-soft,#f6f8fa);border:1px solid var(--tdmd-border);border-left:5px solid #C2410C;border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.3rem;margin-top:1rem;}
.tdmd-vt-cond .tdmd-vt-cond__season h3{color:#9A3412;margin-top:0.6rem;}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.tdmd-vt-cond .tdmd-vt-cond__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.tdmd-vt-cond .tdmd-vt-cond__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.tdmd-vt-cond .tdmd-vt-cond__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
`;

export default function VtSinusInfectionTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'vt-sinus-infection-treatment-online';
  const vtTowns = ['Burlington', 'Rutland', 'Montpelier', 'Barre', 'St. Albans', 'Brattleboro', 'Newport', 'Vergennes'];

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
            <span aria-current="page">Sinus Infection Treatment Online</span>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Sinus Infection (Sinusitis) Treatment Online in Vermont</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  Viral-vs-bacterial assessment for Vermont adults 18+ · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant
                </p>
                <p>
                  Vermont&apos;s respiratory calendar is long. The northern New England virus season runs from October clear into April, and the sinus-pressure complaints that trail it stretch even further &mdash; right into the late-winter weeks when sap shacks are boiling and the thermometer swings forty degrees between dawn and dusk. Most sinus infections in that window are viral and will clear without an antibiotic. The job of this video visit is to tell the lingering viral course apart from the smaller share that has turned bacterial, then treat each appropriately. This page serves adults located anywhere in Vermont, from {vtTowns.join(', ')}, to the rural towns in between.
                </p>

                {/* v4 inline opener — mirrors FAQ_ITEMS[0] */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Will my Vermont sinus infection actually need an antibiotic?</strong> Probably not. Under <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a>, a Vermont-licensed physician &mdash; held to the same standard of care as in person by the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> &mdash; reviews your symptom timeline by video and reserves antibiotics for the bacterial minority. When the picture is viral, you leave with a symptom-relief plan and a clear return marker. Self pay is $79.
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
                  <li><a href={`#${pid}-season`}>Vermont&apos;s sinus calendar &amp; sugaring season</a></li>
                  <li><a href={`#${pid}-vt-law`}>Vermont telehealth law</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; payment</a></li>
                  <li><a href={`#${pid}-medications`}>Antibiotic options</a></li>
                  <li><a href={`#${pid}-dual-path`}>Video vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                  <li>MD-only care, with antibiotic stewardship front and center</li>
                  <li>Timeline-based viral-vs-bacterial assessment</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit, $79</a>
                  <a href="/vt/" className="tdmd-btn tdmd-btn-outline">Explore Vermont Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J01.90 (acute sinusitis, unspecified); final coding depends on the exam</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Sinusitis Care in Vermont</h2>
                  <ul>
                    <li>Symptom-timeline review to gauge viral vs bacterial</li>
                    <li>Antibiotic stewardship — no antibiotic when none is needed</li>
                    <li>Symptom-relief plan for the common viral course</li>
                    <li>e-Prescription to your Vermont pharmacy when warranted</li>
                    <li>Clear return markers and escalation guidance</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. Seek in-person or emergency care now for eye swelling, vision changes, severe headache with neck stiffness, or confusion. TeleDirectMD does not prescribe controlled substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ELIGIBILITY ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Who Can Use a Vermont Sinusitis Video Visit</h2>
            <p><strong>A video visit usually fits when every line on the left holds:</strong></p>
            <div className="tdmd-vt-cond__dual">
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--good">
                <h3>&#10003; Good candidate</h3>
                <ul>
                  <li>Adult 18 or older, physically in Vermont during the visit</li>
                  <li>Facial pressure, nasal congestion, postnasal drip, or thick discharge</li>
                  <li>A clear sense of when symptoms started and how they have tracked</li>
                  <li>No swelling or redness around an eye</li>
                  <li>No severe headache with neck stiffness, vision change, or confusion</li>
                  <li>Not severely immunocompromised</li>
                </ul>
              </div>
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--alert">
                <h3>&#10007; Needs in-person or emergency care</h3>
                <ul>
                  <li>Swelling, redness, or bulging around an eye</li>
                  <li>Double vision or any change in eyesight</li>
                  <li>Severe headache with stiff neck or confusion</li>
                  <li>High fever that will not break</li>
                  <li>Facial pain that keeps worsening despite a few days of care</li>
                  <li>Significant immunosuppression</li>
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If any red flag applies, go to a Vermont urgent care or emergency department now. TeleDirectMD is not appropriate for complicated sinusitis.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── VT SEASON BLOCK (UNIQUE) ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-season`}>
          <div className="tdmd-container">
            <h2>Vermont&apos;s Sinus Calendar: A Longer Season With a Sugaring Twist</h2>
            <p>
              Sinus infections are not evenly spread across the year, and in Vermont the curve has its own shape. The respiratory-virus season here runs roughly October through April &mdash; longer at both ends than in much of the country &mdash; which is the backdrop for most of the sinus complaints the practice sees. Bacterial sinusitis, when it does occur, almost always rides in on the back of a viral upper-respiratory infection and clusters from December through March, in line with <a href="https://www.healthvermont.gov/disease-control/respiratory-illness" rel="noopener" target="_blank">Vermont Department of Health respiratory-illness surveillance</a>.
            </p>
            <p>
              Then comes the part of the calendar unique to this state. Maple sugaring season opens in late February and runs into April, and through those weeks patients describe a reliable uptick in sinus pressure and congestion. The cause is rarely a fresh infection. Sap shacks and evaporators put woodsmoke and steam into the air around anyone tending a boil, and smoke is a well-recognized irritant to nasal and sinus tissue that is already inflamed from a winter cold. Layer on the dramatic day-to-night temperature swings of a Vermont mud-season afternoon &mdash; warm enough to run the sap, freezing again by dark &mdash; and mucus thickens while drainage stalls. The net effect feels like an infection but is frequently irritant inflammation tacked onto the tail of the virus season.
            </p>
            <p>
              That distinction changes the plan. When a sugaring-season patient describes pressure that flares around the boil and eases away from it, with a symptom timeline that never crossed the bacterial threshold, the right answer is irritant avoidance, saline irrigation, and symptom care &mdash; not an antibiotic. The visit physician asks specifically about woodsmoke and shack time for exactly this reason.
            </p>
            <p>
              The escalation rule is the same all year but worth stating in Vermont terms. Symptoms that persist severe past about 10 days without improvement, a second wave of fever after you started feeling better, or facial pain that keeps worsening should move from a video visit to in-person evaluation at a Vermont urgent care or emergency department, where an exam and imaging are available. Those patterns are what separate a complicated course from the ordinary one.
            </p>
            <div className="tdmd-vt-cond__season">
              <h3>Bottom line for a Vermont sinus complaint</h3>
              <p style={{ margin: 0 }}>
                During the October-to-April virus season, most sinus infections are viral and clear with symptom care. Through sugaring season, smoke and temperature swings add irritant pressure that mimics infection. Bacterial sinusitis is the minority &mdash; flagged by a 10-day-plus course, a second fever, or worsening facial pain &mdash; and that minority gets the antibiotic.
              </p>
            </div>
          </div>
        </section>

        {/* ─── VT TELEHEALTH LAW ─── */}
        <section className="tdmd-section" id={`${pid}-vt-law`}>
          <div className="tdmd-container">
            <h2>How Vermont Law Frames Your Sinusitis Visit</h2>

            <h3>Is a prior office visit required first?</h3>
            <p>
              No. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a> permits a Vermont-licensed physician to start care and prescribe over video with no preceding in-person appointment. The physician records verbal or written telehealth consent at the start of every encounter.
            </p>

            <h3>What standard does the treating physician owe you?</h3>
            <p>
              The <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> sets a single standard of care across in-person and telehealth visits alike. A Vermont license is required to treat patients located in Vermont. Dr. Bhavsar holds Vermont Medical License #042.0040345-COMP from the Board. <a href="https://secure.professionals.healthvermont.gov/PROD/PORTAL/PRLicenseSearch/SearchPage" rel="noopener" target="_blank">Verify the license</a> · <a href="/about/">Dr. Bhavsar&apos;s bio</a>.
            </p>

            <h3>Are sinusitis antibiotics controlled in Vermont?</h3>
            <p>
              No. Amoxicillin, amoxicillin-clavulanate, and doxycycline are not controlled substances, so each can be prescribed through Vermont telehealth and sent electronically to any Vermont pharmacy. Vermont allows e-prescribing of non-controlled drugs with no mandate, per the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> and consistent with <a href="https://legislature.vermont.gov/statutes/fullchapter/26/023" rel="noopener" target="_blank">26 V.S.A. Chapter 23</a>. TeleDirectMD prescribes no controlled substances anywhere.
            </p>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">Three Steps, Anchored on Your Symptom Timeline</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book and map your timeline</h3>
                  <p>Reserve a same-day slot and write down day one of symptoms, whether you improved and then relapsed, your highest fever, and any sugaring-shack or woodsmoke exposure. That timeline does most of the diagnostic work.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>Talk it through with a Vermont-licensed MD</h3>
                  <p>The physician compares your course against the viral-versus-bacterial criteria, reviews what is visible on camera, and documents consent under 18 V.S.A. Chapter 219 before settling on a plan.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Get the right plan</h3>
                  <p>Most patients leave with a symptom-relief plan and a clear return marker. When the course is bacterial, an antibiotic is e-prescribed to your Vermont pharmacy with dosing and escalation guidance.</p>
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
            <h2>What a Vermont Sinusitis Visit Costs</h2>
            <p>A full MD video visit &mdash; assessment, plan, and any e-prescription &mdash; is a flat <strong>$79</strong> self-pay. Vermont visits are cash-pay only with no insurance billing. The fee is paid at booking; any antibiotic is filled separately at your pharmacy.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video assessment</li>
                  <li>Viral-vs-bacterial timeline review</li>
                  <li>e-Prescription to your VT pharmacy (when warranted)</li>
                  <li>Symptom-relief plan and return markers</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical sinusitis cost comparison">
                <h3>Typical Sinus Visit Cost in Vermont</h3>
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
            <h2>Antibiotic Options and Dosing (When Bacterial)</h2>
            <p>
              Antibiotics enter the plan only when the course points to bacterial sinusitis. Each option below is non-controlled and prescribable through Vermont telehealth; the physician sets the final agent and length by your allergies, history, and severity, guided by <a href="https://www.cdc.gov/sinus-infection/about/index.html" rel="noopener" target="_blank">CDC sinus-infection guidance</a>.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Sinusitis antibiotic options and GoodRx prices">
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
                    <td><strong>Amoxicillin 500 mg</strong> · First-line</td>
                    <td>500 mg PO three times daily &times; 5–7 days</td>
                    <td><a href="https://www.goodrx.com/amoxicillin" target="_blank" rel="noopener">~$10–$20 generic</a></td>
                    <td>First-line for uncomplicated acute bacterial sinusitis when no penicillin allergy.</td>
                  </tr>
                  <tr className="tdmd-vt-cond__med-firstline">
                    <td><strong>Amoxicillin-clavulanate 875/125 mg</strong> · First-line</td>
                    <td>875/125 mg PO twice daily &times; 5–7 days</td>
                    <td><a href="https://www.goodrx.com/amoxicillin-clavulanate" target="_blank" rel="noopener">~$15–$30 generic</a></td>
                    <td>Preferred when broader coverage is warranted (e.g., recent antibiotics, higher-risk features).</td>
                  </tr>
                  <tr>
                    <td><strong>Doxycycline 100 mg</strong> (penicillin allergy)</td>
                    <td>100 mg PO twice daily &times; 5–7 days</td>
                    <td><a href="https://www.goodrx.com/doxycycline-hyclate" target="_blank" rel="noopener">~$10–$25 generic</a></td>
                    <td>Common alternative for a documented penicillin allergy. Avoid in pregnancy.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> the choice and length depend on your allergies, interactions, and severity as judged at the visit. Do not start an antibiotic without a clinical evaluation.
            </p>
          </div>
        </section>

        {/* ─── DUAL PATH ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>Video Visit or In-Person? A Quick Sort</h2>
            <p>A typical sinus course handles well by video. Complications around the eye or brain belong in person, immediately.</p>
            <div className="tdmd-vt-cond__dual">
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--good">
                <h3>&#10003; Reach for telehealth when</h3>
                <ul>
                  <li>Facial pressure, congestion, drip, or thick discharge</li>
                  <li>A clear symptom timeline you can describe</li>
                  <li>No eye swelling, vision change, or neurological signs</li>
                  <li>Not severely immunocompromised</li>
                  <li>Adult 18+, located in Vermont, paying $79 cash</li>
                </ul>
              </div>
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--alert">
                <h3>&rarr; Choose in-person care when</h3>
                <ul>
                  <li><strong>Emergency / 911:</strong> eye swelling, vision change, stiff neck with fever, confusion</li>
                  <li><strong>Urgent care or ED:</strong> worsening facial pain, exam or imaging needed</li>
                  <li><strong>Primary care or ENT:</strong> recurrent or chronic sinusitis, structural questions</li>
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
                <p>Winter cold turned into sinus pressure? See a Vermont MD today</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · Antibiotics only when needed</small>
              </div>
              <a className="tdmd-vt-cond__cta-btn" href="/book-online" rel="noopener">Book Now &rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Sinus Infection Treatment in Vermont"
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />
            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Stuffed up for over a week?</h3>
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
            <p>When the complaint shifts from the sinuses to the throat, chest, or ears, these Vermont pages can help.</p>
            <div className="tdmd-vt-cond__sibling-grid">
              <a className="tdmd-vt-cond__sibling" href="/vt/sore-throat-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Sore Throat Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Postnasal drip and sinus infection often arrive with a sore throat.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/cough-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Cough Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">A lingering post-viral cough commonly tags along after a sinus course.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/ear-pain-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Ear Pain Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Sinus congestion and ear pressure share plumbing and often overlap.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/seasonal-allergies-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Seasonal Allergies Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Spring pollen can drive sinus pressure that imitates infection.</span>
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
            <p>This page links the <a href="/vt/">Vermont state hub</a> with the <a href="/sinus-infection-treatment-online/">national sinus infection condition page</a>. Use the links below to read more or book.</p>
            <div className="tdmd-vt-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/sinus-infection-treatment-online/">National sinus infection page</a>
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
              <li><a href="https://www.healthvermont.gov/disease-control/respiratory-illness" rel="noopener" target="_blank">Vermont Department of Health — Respiratory Illness Surveillance</a>. Retrieved June 2026.</li>
              <li><a href="https://www.cdc.gov/sinus-infection/about/index.html" rel="noopener" target="_blank">CDC — Sinus Infection (Sinusitis) Basics</a>. Retrieved June 2026.</li>
              <li><a href="https://www.cdc.gov/antibiotic-use/sinus-infection.html" rel="noopener" target="_blank">CDC — Antibiotic Use and Sinus Infections</a>. Retrieved June 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── DISCLAIMER ─── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is educational and is not individualized medical advice. A physician-patient relationship begins only when a video visit starts and consent is documented under 18 V.S.A. Chapter 219. A Vermont-licensed, board-certified physician makes treatment decisions from the history given at the visit. For eye swelling, vision change, severe headache with neck stiffness, confusion, or worsening facial pain, seek in-person or emergency care immediately.</p>
            <p>TeleDirectMD does not prescribe controlled substances in any state. Prices reflect GoodRx national coupon pricing retrieved May 2026; actual pharmacy costs in Vermont vary.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug="sinus-infection-treatment-online" conditionName="Sinus Infection Treatment" stateName="Vermont" />
        <CompareTeleDirectMDLinkRow conditionSlug="sinus-infection-treatment-online" />
        <CommonSymptomsBlock conditionSlug="sinus-infection-treatment-online" conditionName="Sinus Infection Treatment" />
      </div>
    </>
  );
}
