/**
 * VtPinkEyeTreatmentOnline.js — production Vermont × Pink Eye / Conjunctivitis page (v4)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'vt' and
 * conditionSlug === 'pink-eye-treatment-online'.
 *
 * v4 reship — AI-visibility upgrade (physician schema w/ VT license + areaServed,
 * visible license-number byline, fresh dates) plus a distinct Vermont lead angle:
 * outdoor-recreation conjunctivitis triggers (allergic and irritant) and the
 * viral / bacterial / allergic / irritant differential that drives whether a
 * drop, an ointment, an antihistamine, or an in-person eye exam is the answer.
 *
 * Hard rules: FAQPage only; NPI 1104323203 visible; cash-pay only, no payer
 * assertions; no first-person prescribing; adults 18+; no controlled substances.
 * Contact-lens red eye = telehealth stop, in-person referral.
 */

import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/vt/pink-eye-treatment-online/';
const PAGE_TITLE = 'Pink Eye (Conjunctivitis) Treatment Online in Vermont | TeleDirectMD';
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
    question: 'Can a Vermont physician sort out what kind of pink eye I have over video?',
    answerPlain:
      'In most cases, yes. The job of a pink-eye visit is to separate four very different causes — viral, bacterial, allergic, and irritant — because each one calls for a different plan, and three of the four need no antibiotic at all. A Vermont-licensed physician can do that on camera by looking at the redness pattern, the type of discharge, whether one eye or both are involved, and what you were doing before it started. The one situation that telehealth cannot safely handle is a contact-lens wearer with a red, painful eye, which can mean a corneal ulcer and needs an in-person eye exam the same day. Self pay is $79.',
    answer: (
      <p>
        In most cases, yes. The job of a pink-eye visit is to separate four very different causes &mdash; viral, bacterial, allergic, and irritant &mdash; because each one calls for a different plan, and three of the four need no antibiotic at all. A Vermont-licensed physician can do that on camera by looking at the redness pattern, the type of discharge, whether one eye or both are involved, and what you were doing before it started. The one situation that telehealth cannot safely handle is a contact-lens wearer with a red, painful eye, which can mean a corneal ulcer and needs an in-person eye exam the same day. Self pay is $79.
      </p>
    ),
  },
  {
    question: 'Why does Vermont outdoor recreation make pink eye so common here?',
    answerPlain:
      'Vermont life happens outside — hiking, camping, mountain biking, lakeside summers, and a long ski season — and each of those puts the surface of the eye in contact with things that inflame it. Pine and tree pollen in spring and summer drive allergic conjunctivitis. Lake and pond water, sunscreen runoff, sweat, trail dust, and chlorine are classic irritants. Wood smoke from campfires, sugaring fires, and woodstoves is another irritant that turns eyes red and watery. None of these is an infection, so none needs an antibiotic; the right answer is removing the trigger and, for allergy, an antihistamine drop. Knowing the exposure is half of sorting out the cause.',
    answer: (
      <p>
        Vermont life happens outside &mdash; hiking, camping, mountain biking, lakeside summers, and a long ski season &mdash; and each of those puts the surface of the eye in contact with things that inflame it. Pine and tree pollen in spring and summer drive allergic conjunctivitis. Lake and pond water, sunscreen runoff, sweat, trail dust, and chlorine are classic irritants. Wood smoke from campfires, sugaring fires, and woodstoves is another irritant that turns eyes red and watery. None of these is an infection, so none needs an antibiotic; the right answer is removing the trigger and, for allergy, an antihistamine drop. Knowing the exposure is half of sorting out the cause.
      </p>
    ),
  },
  {
    question: 'How do I tell viral, bacterial, allergic, and irritant pink eye apart?',
    answerPlain:
      'A few clues separate them. Viral conjunctivitis is the most common kind, usually watery, often starting in one eye then spreading to the other, frequently alongside a cold — and it needs no antibiotic. Bacterial conjunctivitis tends to produce thick yellow or green discharge that mats the lashes and may stick the eyelids shut, and it is the one type that sometimes needs an antibiotic drop or ointment. Allergic conjunctivitis is almost always both eyes, intensely itchy, watery, and seasonal, and responds to antihistamine drops rather than antibiotics. Irritant conjunctivitis follows a clear exposure — smoke, chlorine, dust, a chemical — and clears once the eye is flushed and the trigger is gone. The physician weighs all of these together rather than relying on any single sign.',
    answer: (
      <p>
        A few clues separate them. <strong>Viral</strong> conjunctivitis is the most common kind, usually watery, often starting in one eye then spreading to the other, frequently alongside a cold &mdash; and it needs no antibiotic. <strong>Bacterial</strong> conjunctivitis tends to produce thick yellow or green discharge that mats the lashes and may stick the eyelids shut, and it is the one type that sometimes needs an antibiotic drop or ointment. <strong>Allergic</strong> conjunctivitis is almost always both eyes, intensely itchy, watery, and seasonal, and responds to antihistamine drops rather than antibiotics. <strong>Irritant</strong> conjunctivitis follows a clear exposure &mdash; smoke, chlorine, dust, a chemical &mdash; and clears once the eye is flushed and the trigger is gone. The physician weighs all of these together, consistent with <a href="https://www.aao.org/eye-health/diseases/pink-eye-conjunctivitis" rel="noopener" target="_blank">American Academy of Ophthalmology guidance</a>, rather than relying on any single sign.
      </p>
    ),
  },
  {
    question: 'I wear contact lenses and my eye is red — can I still do a video visit?',
    answerPlain:
      'This is the one pink-eye scenario where the safe answer is no. A red, painful eye in a contact-lens wearer can mean a corneal ulcer or microbial keratitis — a sight-threatening infection of the cornea that needs a slit-lamp exam, staining, and sometimes a culture that only an in-person eye provider can do. A video camera cannot rule that out. If you wear contacts and your eye is red, painful, light-sensitive, or your vision has changed, stop wearing the lenses, keep the lens and case for the provider, and get an in-person eye exam the same day rather than booking a video visit. The physician will redirect you there regardless, so going straight to in-person care saves time.',
    answer: (
      <p>
        This is the one pink-eye scenario where the safe answer is no. A red, painful eye in a contact-lens wearer can mean a <strong>corneal ulcer or microbial keratitis</strong> &mdash; a sight-threatening infection of the cornea that needs a slit-lamp exam, staining, and sometimes a culture that only an in-person eye provider can do. A video camera cannot rule that out. If you wear contacts and your eye is red, painful, light-sensitive, or your vision has changed, stop wearing the lenses, keep the lens and case for the provider, and get an in-person eye exam the same day rather than booking a video visit. The physician will redirect you there regardless, so going straight to in-person care saves time.
      </p>
    ),
  },
  {
    question: 'Which medications treat pink eye, and how are they dosed?',
    answerPlain:
      'It depends entirely on the cause. For bacterial conjunctivitis the physician may prescribe erythromycin ophthalmic ointment applied to the eye about four times daily, polymyxin B–trimethoprim drops one drop every three to six hours, or azithromycin ophthalmic drops one drop twice daily for the first two days then once daily. For allergic conjunctivitis, antihistamine drops such as olopatadine once or twice daily or ketotifen twice daily relieve the itch and redness — no antibiotic involved. Viral and irritant conjunctivitis need supportive care only: cool compresses, lubricating artificial tears, and removing the trigger. None of these is a controlled substance, so any that is appropriate can be e-prescribed through Vermont telehealth.',
    answer: (
      <p>
        It depends entirely on the cause. For <strong>bacterial</strong> conjunctivitis the physician may prescribe <strong>erythromycin ophthalmic ointment</strong> applied about four times daily, <strong>polymyxin B&ndash;trimethoprim drops</strong> one drop every three to six hours, or <strong>azithromycin ophthalmic drops</strong> one drop twice daily for two days then once daily. For <strong>allergic</strong> conjunctivitis, antihistamine drops such as <strong>olopatadine once or twice daily</strong> or <strong>ketotifen twice daily</strong> relieve the itch and redness &mdash; no antibiotic involved. Viral and irritant conjunctivitis need supportive care only: cool compresses, lubricating artificial tears, and removing the trigger. None of these is a controlled substance, so any that is appropriate can be e-prescribed through Vermont telehealth.
      </p>
    ),
  },
  {
    question: 'When is a red eye an emergency rather than simple pink eye?',
    answerPlain:
      'Seek same-day in-person or emergency eye care for moderate or severe eye pain, vision loss or blurring that does not clear with a blink, marked light sensitivity, a red eye after an injury or a chemical splash, or anything stuck on or in the eye. Those features point to problems a camera cannot evaluate — a corneal abrasion or ulcer, a foreign body, acute glaucoma, or uveitis. Ordinary pink eye is uncomfortable and gritty but not severely painful and does not steal your vision, which is why the painful, vision-changing red eye always belongs in person.',
    answer: (
      <p>
        Seek same-day in-person or emergency eye care for moderate or severe eye pain, vision loss or blurring that does not clear with a blink, marked light sensitivity, a red eye after an injury or a chemical splash, or anything stuck on or in the eye. Those features point to problems a camera cannot evaluate &mdash; a corneal abrasion or ulcer, a foreign body, acute glaucoma, or uveitis. Ordinary pink eye is uncomfortable and gritty but not severely painful and does not steal your vision, which is why the painful, vision-changing red eye always belongs in person.
      </p>
    ),
  },
  {
    question: 'Is pink eye contagious, and how long should I stay home in Vermont?',
    answerPlain:
      'Viral and bacterial conjunctivitis are both contagious; allergic and irritant types are not. Viral pink eye spreads readily through hand-to-eye contact and shared towels, which matters in close Vermont households, classrooms, and workplaces. Wash hands often, do not share towels or pillowcases, and skip the contacts and eye makeup until it clears. Many people are no longer contagious once a bacterial case has had a full day of antibiotic drops or once a viral case stops producing discharge, but the physician will give you a specific return-to-work or return-to-school marker based on the cause.',
    answer: (
      <p>
        Viral and bacterial conjunctivitis are both contagious; allergic and irritant types are not. Viral pink eye spreads readily through hand-to-eye contact and shared towels, which matters in close Vermont households, classrooms, and workplaces, as the <a href="https://www.cdc.gov/conjunctivitis/about/index.html" rel="noopener" target="_blank">CDC notes</a>. Wash hands often, do not share towels or pillowcases, and skip the contacts and eye makeup until it clears. Many people are no longer contagious once a bacterial case has had a full day of antibiotic drops or once a viral case stops producing discharge, but the physician will give you a specific return-to-work or return-to-school marker based on the cause.
      </p>
    ),
  },
  {
    question: 'Can a Vermont physician treat me without seeing me in the office first?',
    answerPlain:
      'Yes. Under 18 V.S.A. Chapter 219, a Vermont-licensed physician may begin care and prescribe non-controlled medication over synchronous video with no preceding in-person appointment, recording telehealth consent at the start of the visit. The physician examines the eye on camera, sorts the cause, and either prescribes, recommends supportive care, or refers you for an in-person eye exam when warranted.',
    answer: (
      <p>
        Yes. Under <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a>, a Vermont-licensed physician may begin care and prescribe non-controlled medication over synchronous video with no preceding in-person appointment, recording telehealth consent at the start of the visit. The physician examines the eye on camera, sorts the cause, and either prescribes, recommends supportive care, or refers you for an in-person eye exam when warranted.
      </p>
    ),
  },
  {
    question: 'How fast does an eye drop or ointment reach my Vermont pharmacy?',
    answerPlain:
      'Vermont permits electronic prescribing of non-controlled medications with no e-prescribing mandate. When a drop or ointment is appropriate, the order goes electronically to the Vermont pharmacy you name during or just after the visit, and most fill within one to four hours.',
    answer: (
      <p>
        Vermont permits electronic prescribing of non-controlled medications with no e-prescribing mandate, per the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. When a drop or ointment is appropriate, the order goes electronically to the Vermont pharmacy you name during or just after the visit, and most fill within one to four hours.
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
      'Pink eye and conjunctivitis evaluation by secure video for Vermont adults 18+. Board-certified Family Medicine physician licensed in Vermont. Viral, bacterial, allergic, and irritant differential; dosing for erythromycin ointment, polymyxin-trimethoprim, azithromycin drops, olopatadine, ketotifen. Contact-lens red eye referred in person. Cash-pay $79 flat. 18 V.S.A. Chapter 219 compliant.',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: LAST_REVIEWED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Conjunctivitis (Pink Eye)',
      alternateName: ['Pink Eye', 'Conjunctivitis', 'Viral Conjunctivitis', 'Bacterial Conjunctivitis', 'Allergic Conjunctivitis'],
      code: { '@type': 'MedicalCode', code: 'H10.9', codingSystem: 'ICD-10-CM' },
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
        '#vt-pink-eye-treatment-online-opening',
        '#vt-pink-eye-treatment-online-opening p',
        '.tdmd-vt-cond__byline',
        '#vt-pink-eye-treatment-online-faq',
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
    name: 'How to Get Pink Eye Treatment Online in Vermont',
    description:
      'Three steps for a Vermont-licensed board-certified physician to sort the cause of your pink eye, then treat, recommend supportive care, or refer for an in-person eye exam.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book and note your exposures', text: 'Reserve a same-day slot and note when it started, one eye or both, the type of discharge, whether you wear contacts, and any recent pollen, smoke, lake, or chemical exposure. Self pay $79.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'Get examined by a Vermont-licensed MD', text: 'A board-certified Family Medicine physician licensed in Vermont reviews the eye on camera and sorts viral, bacterial, allergic, or irritant cause. Consent is documented under 18 V.S.A. Chapter 219.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Treat, soothe, or refer', text: 'Bacterial cases may get an antibiotic drop or ointment; allergic cases an antihistamine drop; viral and irritant cases supportive care. A contact-lens red eye or any vision-threatening sign is referred for an in-person eye exam.', url: PAGE_URL },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Vermont', item: 'https://teledirectmd.com/vt/' },
      { '@type': 'ListItem', position: 3, name: 'Pink Eye Treatment Online in Vermont', item: PAGE_URL },
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
.tdmd-vt-cond .tdmd-vt-cond__differ{margin-top:1rem;overflow-x:auto;}
.tdmd-vt-cond .tdmd-vt-cond__differ table{width:100%;border-collapse:collapse;font-size:0.92rem;}
.tdmd-vt-cond .tdmd-vt-cond__differ th,.tdmd-vt-cond .tdmd-vt-cond__differ td{border:1px solid var(--tdmd-border);padding:0.6rem 0.75rem;text-align:left;vertical-align:top;}
.tdmd-vt-cond .tdmd-vt-cond__differ thead th{background:var(--tdmd-navy);color:#fff;}
.tdmd-vt-cond .tdmd-vt-cond__differ tbody th{background:var(--tdmd-bg-soft,#f6f8fa);color:var(--tdmd-navy);}
.tdmd-vt-cond .tdmd-vt-cond__outdoor{background:var(--tdmd-bg-soft,#f4f8f4);border:1px solid var(--tdmd-border);border-left:5px solid #2E7D52;border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.3rem;margin-top:1rem;}
.tdmd-vt-cond .tdmd-vt-cond__outdoor h3{color:#1f5135;margin-top:0.6rem;}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.tdmd-vt-cond .tdmd-vt-cond__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.tdmd-vt-cond .tdmd-vt-cond__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.tdmd-vt-cond .tdmd-vt-cond__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.tdmd-vt-cond .tdmd-vt-cond__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
`;

export default function VtPinkEyeTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'vt-pink-eye-treatment-online';
  const vtTowns = ['Burlington', 'South Burlington', 'Colchester', 'Rutland', 'Barre', 'Middlebury', 'Brattleboro', 'Stowe'];

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
            <span aria-current="page">Pink Eye Treatment Online</span>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Pink Eye (Conjunctivitis) Treatment Online in Vermont</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  Four-cause differential · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant
                </p>
                <p>
                  &ldquo;Pink eye&rdquo; is really four different conditions wearing one name, and telling them apart is the whole point of the visit. Most red, watery eyes are viral or allergic and need no antibiotic; a smaller share are bacterial; and many a Vermont case turns out to be plain irritation from the outdoor life this state is built around &mdash; trail dust, lake water, pine pollen, sunscreen runoff, campfire and woodstove smoke. A Vermont-licensed physician sorts the cause on camera and matches the plan to it. The one firm exception: a contact-lens wearer with a red, painful eye needs an in-person exam, not a video visit. This page serves adults located anywhere in Vermont, from {vtTowns.join(', ')}, to the smaller towns between them.
                </p>

                {/* v4 inline opener — mirrors FAQ_ITEMS[0] */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can a physician sort out my pink eye over video?</strong> In most cases, yes. Under <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a>, a Vermont-licensed physician &mdash; held to the same standard of care as in person by the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> &mdash; can examine the eye on camera and separate viral, bacterial, allergic, and irritant causes, three of which need no antibiotic. The one exception is a contact-lens wearer with a red, painful eye, which needs an in-person exam to rule out a corneal ulcer. Self pay is $79.
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
                  <li><a href={`#${pid}-differential`}>The four causes &amp; Vermont outdoor triggers</a></li>
                  <li><a href={`#${pid}-vt-law`}>Vermont telehealth law</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; payment</a></li>
                  <li><a href={`#${pid}-medications`}>Medication options</a></li>
                  <li><a href={`#${pid}-dual-path`}>Video vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                  <li>MD-only care that sorts the cause before any drop</li>
                  <li>Contact-lens red eye routed straight to in-person care</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/vt/" className="tdmd-btn tdmd-btn-outline">Explore Vermont Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> H10.9 (unspecified conjunctivitis); final coding depends on the exam</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Pink Eye Care in Vermont</h2>
                  <ul>
                    <li>Viral / bacterial / allergic / irritant differential on camera</li>
                    <li>Discharge, redness pattern, and exposure history reviewed</li>
                    <li>Antibiotic drop or ointment only when bacterial</li>
                    <li>Antihistamine drop for the allergic, seasonal eye</li>
                    <li>e-Prescription to your Vermont pharmacy when warranted</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. Contact-lens wearers with a red, painful eye are referred for an in-person exam. TeleDirectMD is not an emergency service. Seek same-day eye care for severe pain, vision loss, light sensitivity, injury, or a chemical splash. TeleDirectMD does not prescribe controlled substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ELIGIBILITY ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Who Can Use a Vermont Pink Eye Video Visit</h2>
            <p><strong>A video visit usually fits when every line on the left holds:</strong></p>
            <div className="tdmd-vt-cond__dual">
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--good">
                <h3>&#10003; Good candidate</h3>
                <ul>
                  <li>Adult 18 or older, physically in Vermont during the visit</li>
                  <li>Red, watery, itchy, or gritty eye without severe pain</li>
                  <li>Vision unchanged — no blurring that a blink won&apos;t clear</li>
                  <li>Can describe the discharge, one eye or both, and recent exposures</li>
                  <li>Not currently wearing contact lenses in the affected eye</li>
                  <li>No injury, chemical splash, or foreign body</li>
                </ul>
              </div>
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--alert">
                <h3>&#10007; Needs in-person or emergency eye care</h3>
                <ul>
                  <li><strong>Contact-lens wearer with a red, painful eye</strong> (corneal ulcer risk)</li>
                  <li>Moderate-to-severe eye pain or marked light sensitivity</li>
                  <li>Vision loss or blurring that does not clear with a blink</li>
                  <li>Red eye after an injury or a chemical splash</li>
                  <li>Something stuck on or in the eye</li>
                  <li>Significant immunosuppression with eye symptoms</li>
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If any of these apply, get an in-person eye exam the same day. A video camera cannot evaluate the cornea.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── DIFFERENTIAL + OUTDOOR BLOCK (UNIQUE) ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-differential`}>
          <div className="tdmd-container">
            <h2>Four Causes, One Red Eye — and Vermont&apos;s Outdoor Triggers</h2>
            <p>
              The reason pink eye deserves a real assessment rather than a reflex antibiotic is that the four causes look superficially alike yet call for opposite plans. Reach for the wrong one and you either feed antibiotic overuse on a viral eye or leave an allergic eye itching for weeks. The table below is the working frame a physician uses on camera; the Vermont twist follows it.
            </p>

            <div className="tdmd-vt-cond__differ" role="group" aria-label="Conjunctivitis differential table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Typical picture</th>
                    <th scope="col">One eye or both</th>
                    <th scope="col">Treatment direction</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Viral</th>
                    <td>Most common; watery, gritty, often with a cold</td>
                    <td>Starts in one, spreads to the other</td>
                    <td>No antibiotic — supportive care, cool compresses</td>
                  </tr>
                  <tr>
                    <th scope="row">Bacterial</th>
                    <td>Thick yellow-green discharge, matted lashes, lids stuck shut</td>
                    <td>Often one, can be both</td>
                    <td>May need an antibiotic drop or ointment</td>
                  </tr>
                  <tr>
                    <th scope="row">Allergic</th>
                    <td>Intense itch, watery, seasonal, often with sneezing</td>
                    <td>Almost always both</td>
                    <td>Antihistamine drops, not antibiotics</td>
                  </tr>
                  <tr>
                    <th scope="row">Irritant</th>
                    <td>Follows smoke, chlorine, dust, sunscreen, or a chemical</td>
                    <td>Whichever was exposed</td>
                    <td>Flush the eye, remove the trigger</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="tdmd-vt-cond__outdoor">
              <h3>Why Vermont&apos;s outdoor calendar fills the irritant and allergic columns</h3>
              <p style={{ margin: '0.4rem 0 0' }}>
                Vermont is a state lived outdoors, and the surface of the eye pays for it. Spring and summer bring waves of tree and pine pollen that drive <strong>allergic</strong> conjunctivitis &mdash; both eyes, itchy, watery, seasonal. Lake and pond swimming, mountain-biking trail dust, sweat dripping under a helmet, sunscreen runoff, and chlorinated pools all act as <strong>irritants</strong>. So does smoke: campfires, late-winter sugaring fires, and woodstoves all redden and water the eyes without any infection behind it. Even the long ski season contributes, with cold wind and glare adding to the irritation. Because so many Vermont red eyes trace back to an exposure rather than a bug, naming what you were doing before it started often points straight at the cause &mdash; and away from an antibiotic you do not need.
              </p>
            </div>

            <p style={{ marginTop: '1rem' }}>
              The single hard stop sits outside the table. A <strong>contact-lens wearer with a red, painful eye</strong> can be developing a corneal ulcer or microbial keratitis, a sight-threatening infection of the cornea that a camera cannot rule out. That patient needs a same-day in-person eye exam with a slit lamp, not a video visit. The physician will redirect there every time, so a lens wearer with a painful red eye should head straight for in-person care.
            </p>
          </div>
        </section>

        {/* ─── VT TELEHEALTH LAW ─── */}
        <section className="tdmd-section" id={`${pid}-vt-law`}>
          <div className="tdmd-container">
            <h2>How Vermont Law Frames Your Pink Eye Visit</h2>

            <h3>Is a prior office visit required first?</h3>
            <p>
              No. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219</a> lets a Vermont-licensed physician start care and prescribe over video without any preceding in-person appointment. Verbal or written telehealth consent is captured and recorded as the visit opens.
            </p>

            <h3>What standard does the treating physician owe you?</h3>
            <p>
              Under the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>, the standard of care is identical across in-person and telehealth encounters, and a Vermont license is required to treat patients in the state. Dr. Bhavsar holds Vermont Medical License #042.0040345-COMP from the Board. <a href="https://secure.professionals.healthvermont.gov/PROD/PORTAL/PRLicenseSearch/SearchPage" rel="noopener" target="_blank">Verify the license</a> · <a href="/about/">Dr. Bhavsar&apos;s bio</a>.
            </p>

            <h3>Are pink eye medications controlled in Vermont?</h3>
            <p>
              No. Erythromycin ointment, polymyxin B&ndash;trimethoprim drops, azithromycin ophthalmic drops, olopatadine, and ketotifen are not controlled substances, so each is prescribable through Vermont telehealth and may be e-sent to any Vermont pharmacy. Vermont allows e-prescribing of non-controlled drugs with no mandate, per the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> and consistent with <a href="https://legislature.vermont.gov/statutes/fullchapter/26/023" rel="noopener" target="_blank">26 V.S.A. Chapter 23</a>. TeleDirectMD prescribes no controlled substances anywhere.
            </p>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">Three Steps to Sort the Cause</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book and note your exposures</h3>
                  <p>Reserve a same-day slot and have ready when it started, one eye or both, the kind of discharge, whether you wear contacts, and any recent pollen, smoke, lake, or chemical exposure. Those details point toward the cause.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>Get examined by a Vermont-licensed MD</h3>
                  <p>The physician reviews the eye on camera, weighs the redness pattern and discharge against your exposures, and documents consent under 18 V.S.A. Chapter 219 before recommending a path.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Treat, soothe, or refer</h3>
                  <p>A bacterial eye may get an antibiotic drop or ointment; an allergic eye an antihistamine drop; viral and irritant eyes supportive care. A contact-lens red eye or any vision-threatening sign is referred for an in-person eye exam. Any prescription is e-sent to your Vermont pharmacy.</p>
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
            <h2>What a Vermont Pink Eye Visit Costs</h2>
            <p>A full MD video visit &mdash; the differential, the plan, and any e-prescription &mdash; is a flat <strong>$79</strong> self-pay. Vermont visits are cash-pay only with no insurance billing. The fee is paid at booking; any drop or ointment is filled separately at your pharmacy. If you are referred for an in-person eye exam, that visit is billed by the eye provider.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video assessment</li>
                  <li>Four-cause conjunctivitis differential</li>
                  <li>e-Prescription to your VT pharmacy (when warranted)</li>
                  <li>Supportive-care plan and return markers</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical pink eye cost comparison">
                <h3>Typical Pink Eye Visit Cost in Vermont</h3>
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
            <h2>Pink Eye Medication Options and Dosing</h2>
            <p>
              Treatment follows the cause, never the symptom alone. Antibiotic drops and ointments are reserved for bacterial conjunctivitis; antihistamine drops handle the allergic eye; viral and irritant eyes need only supportive care. Each option below is non-controlled and prescribable through Vermont telehealth, with the final agent set by your history and the exam, guided by the <a href="https://www.aao.org/eye-health/diseases/pink-eye-conjunctivitis" rel="noopener" target="_blank">American Academy of Ophthalmology</a> and <a href="https://www.cdc.gov/conjunctivitis/about/index.html" rel="noopener" target="_blank">CDC conjunctivitis guidance</a>.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Pink eye medication options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx national coupon prices retrieved May 2026 from goodrx.com; actual cost varies by pharmacy. Prescription costs are separate from the $79 visit fee.
                </caption>
                <thead>
                  <tr>
                    <th>Medication</th>
                    <th>Dosing schedule</th>
                    <th>GoodRx price (May 2026)</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tdmd-vt-cond__med-firstline">
                    <td><strong>Erythromycin ophthalmic ointment</strong> · Bacterial</td>
                    <td>Apply to the eye about four times daily</td>
                    <td><a href="https://www.goodrx.com/erythromycin-ophthalmic" target="_blank" rel="noopener">~$15–$30 generic</a></td>
                    <td>Gentle first-line ointment for bacterial conjunctivitis; can briefly blur vision after applying.</td>
                  </tr>
                  <tr className="tdmd-vt-cond__med-firstline">
                    <td><strong>Polymyxin B–trimethoprim drops</strong> · Bacterial</td>
                    <td>One drop every three to six hours</td>
                    <td><a href="https://www.goodrx.com/polymyxin-b-trimethoprim" target="_blank" rel="noopener">~$15–$30 generic</a></td>
                    <td>Common drop alternative when an ointment is impractical for daytime use.</td>
                  </tr>
                  <tr>
                    <td><strong>Azithromycin ophthalmic drops</strong> · Bacterial</td>
                    <td>One drop twice daily &times; 2 days, then once daily</td>
                    <td><a href="https://www.goodrx.com/azithromycin-ophthalmic" target="_blank" rel="noopener">~$25–$60 generic</a></td>
                    <td>Shorter, simpler schedule that helps adherence; cost runs higher than the others.</td>
                  </tr>
                  <tr>
                    <td><strong>Olopatadine drops</strong> · Allergic</td>
                    <td>One drop once or twice daily</td>
                    <td><a href="https://www.goodrx.com/olopatadine" target="_blank" rel="noopener">~$10–$25 OTC/generic</a></td>
                    <td>Antihistamine / mast-cell stabilizer for the itchy, watery, seasonal eye; no antibiotic.</td>
                  </tr>
                  <tr>
                    <td><strong>Ketotifen drops</strong> · Allergic</td>
                    <td>One drop twice daily</td>
                    <td><a href="https://www.goodrx.com/ketotifen" target="_blank" rel="noopener">~$10–$20 OTC/generic</a></td>
                    <td>Over-the-counter antihistamine drop; useful for recurrent Vermont pollen-season eyes.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> the choice depends on the cause, your allergies, and any contact-lens use, as judged at the visit. Viral and irritant conjunctivitis need no prescription &mdash; cool compresses, artificial tears, and removing the trigger. Do not start a prescription drop without a clinical evaluation.
            </p>
          </div>
        </section>

        {/* ─── DUAL PATH ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>Video Visit or In-Person? A Quick Sort</h2>
            <p>Most pink eye sorts cleanly by video. A painful, vision-changing, or contact-lens red eye belongs in person, the same day.</p>
            <div className="tdmd-vt-cond__dual">
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--good">
                <h3>&#10003; Reach for telehealth when</h3>
                <ul>
                  <li>Red, watery, itchy, or gritty eye without severe pain</li>
                  <li>Vision is unchanged and not light-sensitive</li>
                  <li>You can describe discharge, one eye or both, and exposures</li>
                  <li>Not wearing a contact lens in the affected eye</li>
                  <li>Adult 18+, located in Vermont, paying $79 cash</li>
                </ul>
              </div>
              <div className="tdmd-vt-cond__dual-card tdmd-vt-cond__dual-card--alert">
                <h3>&rarr; Choose in-person care when</h3>
                <ul>
                  <li><strong>Same-day eye exam:</strong> contact-lens wearer with a red, painful eye</li>
                  <li><strong>Urgent / ED:</strong> vision loss, severe pain, or marked light sensitivity</li>
                  <li><strong>Emergency:</strong> chemical splash, injury, or a foreign body in the eye</li>
                  <li><strong><a href="https://vermont211.org" rel="noopener" target="_blank">Vermont 211</a>:</strong> finding nearby eye providers and resources</li>
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
                <p>Woke up with a red, gummy eye? See a Vermont MD today</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · Cause sorted before any drop</small>
              </div>
              <a className="tdmd-vt-cond__cta-btn" href="/book-online" rel="noopener">Book Now &rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Pink Eye (Conjunctivitis) Treatment in Vermont"
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />
            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Red eye and not sure which kind?</h3>
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
            <p>When the red eye comes alongside congestion, sneezing, or other seasonal symptoms, these Vermont pages can help.</p>
            <div className="tdmd-vt-cond__sibling-grid">
              <a className="tdmd-vt-cond__sibling" href="/vt/seasonal-allergies-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Seasonal Allergies Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Itchy, watery eyes with sneezing usually share one cause: Vermont pollen.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/sinus-infection-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Sinus Infection Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Facial pressure plus eye redness can point to sinus involvement rather than infection of the eye.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/cold-sore-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Cold Sore Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Herpes around the eye is a special case the physician screens for during the visit.</span>
              </a>
              <a className="tdmd-vt-cond__sibling" href="/vt/ear-pain-treatment-online/">
                <span className="tdmd-vt-cond__sibling-label">Ear Pain Treatment in VT</span>
                <span className="tdmd-vt-cond__sibling-why">Eye and ear symptoms together often trace back to the same viral cold.</span>
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
            <p>This page links the <a href="/vt/">Vermont state hub</a> with the <a href="/pink-eye-treatment-online/">national pink eye condition page</a>. Use the links below to read more or book.</p>
            <div className="tdmd-vt-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/pink-eye-treatment-online/">National pink eye page</a>
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
              <li><a href="https://www.aao.org/eye-health/diseases/pink-eye-conjunctivitis" rel="noopener" target="_blank">American Academy of Ophthalmology — Pink Eye (Conjunctivitis)</a>. Retrieved June 2026.</li>
              <li><a href="https://www.cdc.gov/conjunctivitis/about/index.html" rel="noopener" target="_blank">CDC — About Conjunctivitis (Pink Eye)</a>. Retrieved June 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── DISCLAIMER ─── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is educational and is not individualized medical advice. A physician-patient relationship begins only when a video visit starts and consent is documented under 18 V.S.A. Chapter 219. A Vermont-licensed, board-certified physician sorts the cause of pink eye from the history and on-camera exam at the visit. A contact-lens wearer with a red, painful eye, or any eye with severe pain, vision loss, light sensitivity, injury, or a chemical splash, needs an in-person eye exam and is referred there.</p>
            <p>TeleDirectMD does not prescribe controlled substances in any state. Prices reflect GoodRx national coupon pricing retrieved May 2026; actual pharmacy costs in Vermont vary.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug="pink-eye-treatment-online" conditionName="Pink Eye Treatment" stateName="Vermont" />
        <CompareTeleDirectMDLinkRow conditionSlug="pink-eye-treatment-online" />
        <CommonSymptomsBlock conditionSlug="pink-eye-treatment-online" conditionName="Pink Eye Treatment" />
      </div>
    </>
  );
}
