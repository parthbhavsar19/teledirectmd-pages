/**
 * CaTickBiteTreatmentOnline.js — production California × Tick Bite condition page (v3)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'tick-bite-treatment-online'.
 *
 * Matches v3 CA UTI template: inline opener paragraph (no CitableSummaryBlock),
 * hero, CA regulatory block (exact reuse), epidemiology block, clinical content,
 * vertical bar chart cost section, CA payor table, medications, dual-path block,
 * FAQ accordion (12 Q/A), JSON-LD schemas (MedicalWebPage + FAQPage + Physician
 * + HowTo + BreadcrumbList + SpeakableSpecification — NEVER QAPage).
 *
 * Authority: AAFP
 * Guideline: IDSA/AAN/ACR Lyme Disease Guidelines 2020 + CDC Tick Bite Guidance
 *
 * Hard rules respected:
 *   • No QAPage schema — FAQPage only.
 *   • Inline opener (not CitableSummaryBlock) — v3 pattern.
 *   • Physician NPI 1104323203 visible in byline.
 *   • No first-person prescribing language.
 *   • Only Notion-verified CA payors.
 *   • All prices verified via GoodRx URL citations.
 *   • TeleDirectMD is 18+ adults only (noted where relevant).
 */

import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/ca/tick-bite-treatment-online/';
const PAGE_TITLE = 'Tick Bite (Lyme Prophylaxis and Evaluation) Online in California | TeleDirectMD';
const DATE_PUBLISHED = '2026-05-20';
const DATE_MODIFIED = '2026-05-20';
const LAST_REVIEWED = '2026-05-20';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  licenseState: 'California',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about',
};

const CA_PAYORS = [
  { name: 'Aetna', status: 'Active', effective: 'April 30, 2026', inNetwork: true,
    notes: 'Commercial plans. In-network as of April 30, 2026. Verify plan eligibility with Aetna before booking.' },
  { name: 'UnitedHealthcare Commercial', status: 'Approved', effective: 'May 29, 2026', inNetwork: true,
    notes: 'Covers UHC Commercial and Medicare Advantage. Excludes Medi-Cal, Individual Exchange, and Navigate/Charter/Core plan types.' },
  { name: 'Anthem Blue Cross', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Enrollment pending. Self pay ($79) available.' },
  { name: 'Cigna', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Pending — Telehealth Only review in progress. Self pay ($79) available.' },
  { name: 'Kaiser Permanente', status: 'Closed system', effective: '—', inNetwork: false,
    notes: 'Kaiser is a closed health system. Use Kaiser telehealth at kp.org. TeleDirectMD self pay is available but Kaiser will not reimburse out-of-network visits.' },
  { name: 'Medi-Cal', status: 'Not enrolled', effective: '—', inNetwork: false,
    notes: 'TeleDirectMD is not currently a Medi-Cal rendering provider. Find Medi-Cal telehealth providers via your managed care plan or dhcs.ca.gov.' },
];

const FAQ_ITEMS = [
  {
    id: 'ca-tick-bite-treatment-online-faq-0',
    question: 'Can I get tick bite treatment online in California?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 permits California-licensed physicians to evaluate tick bites and prescribe Lyme prophylaxis by secure video visit. TeleDirectMD physicians follow IDSA 2020 Lyme Disease Guidelines. Single-dose doxycycline 200 mg is appropriate when all five IDSA criteria are met: Ixodes tick identified, attached ≥36 hours, prophylaxis startable within 72 hours, local Lyme rate ≥20%, and doxycycline not contraindicated. Go to the ED for suspected Rocky Mountain spotted fever, tick paralysis, Lyme carditis, or neurological Lyme. Self pay is $79.
      </p>
    ),
  },
  {
    id: 'ca-tick-bite-treatment-online-faq-1',
    question: 'What are the IDSA criteria for Lyme disease prophylaxis after a tick bite?',
    answer: (
      <p>
        IDSA 2020 Lyme Disease Guidelines recommend single-dose doxycycline 200 mg prophylaxis only when ALL five criteria are met: (1) the attached tick is identified as Ixodes scapularis (deer tick) or Ixodes pacificus (western black-legged tick — California's primary Lyme vector), (2) the tick was attached for ≥36 hours (engorged appearance or known attachment duration), (3) prophylaxis can be started within 72 hours of tick removal, (4) local Lyme disease rate is ≥20% (applicable to California's North Coast high-risk counties), and (5) doxycycline is not contraindicated. If any criterion is not met, prophylaxis is not recommended.
      </p>
    ),
  },
  {
    id: 'ca-tick-bite-treatment-online-faq-2',
    question: 'How common is Lyme disease in California?',
    answer: (
      <p>
        California is a lower-endemic Lyme state compared to northeastern states. CDPH Tick-Borne Disease Surveillance reports approximately 100–300 confirmed Lyme cases annually in California. The highest-risk California counties are in the North Coast (Humboldt, Mendocino, Trinity) and Bay Area foothills (Marin, Santa Cruz, San Mateo), where Ixodes pacificus tick infection rates range from 1–10% depending on the area. CDC surveillance confirms California's Lyme rate is significantly lower than Connecticut, New York, or New Jersey, but meaningful exposure risk exists in endemic California habitats.
      </p>
    ),
  },
  {
    id: 'ca-tick-bite-treatment-online-faq-3',
    question: 'Does California require an in-person visit for tick bite evaluation?',
    answer: (
      <p>
        No. California B&P Code §2290.5 does not require a prior in-person visit. Tick bite evaluation — determining IDSA prophylaxis criteria, assessing for erythema migrans, and evaluating systemic symptoms — is appropriately conducted by video. High-acuity presentations (suspected RMSF, tick paralysis, Lyme carditis, neurological Lyme) require in-person or emergency evaluation.
      </p>
    ),
  },
  {
    id: 'ca-tick-bite-treatment-online-faq-4',
    question: 'When does a tick bite require emergency care?',
    answer: (
      <p>
        Go to the ER for: suspected Rocky Mountain spotted fever — fever, severe headache, and petechial rash 2–5 days after tick bite (fatal if not treated rapidly); tick paralysis — ascending paralysis after tick attachment; Lyme carditis — palpitations, lightheadedness, or syncope; neurological Lyme — severe headache, facial palsy, confusion. Early Lyme with only erythema migrans and no systemic symptoms is appropriate for telehealth management.
      </p>
    ),
  },
  {
    id: 'ca-tick-bite-treatment-online-faq-5',
    question: 'Is Aetna in-network for tick bite treatment at TeleDirectMD in California?',
    answer: (
      <p>
        Yes. Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. UnitedHealthcare Commercial is approved effective May 29, 2026. Self pay is $79.
      </p>
    ),
  },
  {
    id: 'ca-tick-bite-treatment-online-faq-6',
    question: 'What is the cost of tick bite treatment in California?',
    answer: (
      <p>
        TeleDirectMD charges $79 self-pay for a complete MD video visit. Single-dose doxycycline 200 mg (Lyme prophylaxis) costs ~$5–$15 for 2 tablets with GoodRx. Full-course doxycycline 100 mg twice daily × 14–21 days costs ~$12–$25 with GoodRx. Urgent care tick bite visits in California typically cost $150–$300.
      </p>
    ),
  },
  {
    id: 'ca-tick-bite-treatment-online-faq-7',
    question: 'Does California\'s AB 744 parity law cover tick bite telehealth?',
    answer: (
      <p>
        Yes, for in-network commercial plans. California AB 744 (2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services. Aetna and UHC Commercial are in-network for TeleDirectMD in California.
      </p>
    ),
  },
  {
    id: 'ca-tick-bite-treatment-online-faq-8',
    question: 'How do I remove a tick safely in California?',
    answer: (
      <p>
        CDC recommends: use fine-tipped tweezers to grasp the tick as close to the skin surface as possible; pull upward with steady, even pressure — do not twist or jerk (this can cause parts to break off in the skin); avoid crushing the tick body. After removal: clean the bite area with rubbing alcohol or soap and water; dispose of the tick by submersing in alcohol, placing in a sealed bag, or flushing down the toilet. Do not use petroleum jelly, heat, or nail polish — these methods are ineffective.
      </p>
    ),
  },
  {
    id: 'ca-tick-bite-treatment-online-faq-9',
    question: 'What are the symptoms of Lyme disease to watch for after a tick bite in California?',
    answer: (
      <p>
        The hallmark early Lyme symptom is erythema migrans (EM) — an expanding red rash that may have a bull's-eye appearance, appearing 3–30 days after the bite at or near the attachment site. Not all EM rashes have a bull's-eye; some are uniformly red. Other early symptoms include fatigue, fever, headache, muscle and joint aches. Later Lyme without treatment can cause arthritis, facial palsy, palpitations, and neurological symptoms. Monitor for 30 days after tick removal.
      </p>
    ),
  },
  {
    id: 'ca-tick-bite-treatment-online-faq-10',
    question: 'Which California counties have the highest Lyme disease risk?',
    answer: (
      <p>
        CDPH Tick-Borne Disease Surveillance identifies the highest Lyme disease risk in California's North Coast counties (Humboldt, Mendocino, Trinity, Del Norte) where Ixodes pacificus density is highest and tick infection rates are 1–10%. The Bay Area foothills (Marin County — Point Reyes, Mount Tamalpais; Santa Cruz; San Mateo) are also moderate-risk. Southern California and the Central Valley have lower but non-zero risk. TeleDirectMD physicians evaluate the specific California county of exposure when assessing Lyme prophylaxis criteria.
      </p>
    ),
  },
  {
    id: 'ca-tick-bite-treatment-online-faq-11',
    question: 'Will my tick bite prescription be sent electronically to a California pharmacy?',
    answer: (
      <p>
        Yes. California AB 2789 (effective January 1, 2022) requires all prescriptions to be issued electronically. TeleDirectMD sends e-prescriptions to your chosen California pharmacy — CVS, Walgreens, Rite Aid, Walmart, Safeway — during or after your visit.
      </p>
    ),
  },
];

const SCHEMAS = [{"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Tick Bite (Lyme Prophylaxis and Evaluation) Online in California | TeleDirectMD", "url": "https://teledirectmd.com/ca/tick-bite-treatment-online/", "description": "Tick bite evaluation and Lyme disease prophylaxis online for California adults. Board-certified Family Medicine MD. IDSA 2020 guideline-based. Self pay $79. Aetna in-network. Same-day video visits.", "datePublished": "2026-05-20", "dateModified": "2026-05-20", "inLanguage": "en-US", "about": {"@type": "MedicalCondition", "name": "Tick Bite", "code": {"@type": "MedicalCode", "code": "W57.XXXA", "codingSystem": "ICD-10-CM"}}, "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient", "geographicArea": {"@type": "AdministrativeArea", "name": "California"}}, "reviewedBy": {"@type": "Physician", "@id": "https://teledirectmd.com/about/#physician-parth-bhavsar", "name": "Parth Bhavsar, MD", "identifier": {"@type": "PropertyValue", "propertyID": "NPI", "value": "1104323203"}, "medicalSpecialty": "Family Medicine", "hasCredential": [{"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Doctor of Medicine (MD)"}, {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Board Certification \u2014 American Board of Family Medicine"}], "licensedIn": "California", "worksFor": {"@type": "MedicalOrganization", "name": "TeleDirectMD", "url": "https://teledirectmd.com"}, "sameAs": ["https://npiregistry.cms.hhs.gov/provider-view/1104323203", "https://teledirectmd.com/about/"]}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#ca-tick-bite-treatment-online-opening", "#ca-tick-bite-treatment-online-opening p", ".tdmd-ca-tick-bite-treatment-online__byline", "#ca-tick-bite-treatment-online-faq"]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I get tick bite treatment online in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 permits California-licensed physicians to evaluate tick bites and prescribe Lyme prophylaxis by secure video visit. TeleDirectMD physicians follow IDSA 2020 Lyme Disease Guidelines. Single-dose doxycycline 200 mg is appropriate when all five IDSA criteria are met: Ixodes tick identified, attached \u226536 hours, prophylaxis startable within 72 hours, local Lyme rate \u226520%, and doxycycline not contraindicated. Go to the ED for suspected Rocky Mountain spotted fever, tick paralysis, Lyme carditis, or neurological Lyme. Self pay is $79."}}, {"@type": "Question", "name": "What are the IDSA criteria for Lyme disease prophylaxis after a tick bite?", "acceptedAnswer": {"@type": "Answer", "text": "IDSA 2020 Lyme Disease Guidelines recommend single-dose doxycycline 200 mg prophylaxis only when ALL five criteria are met: (1) the attached tick is identified as Ixodes scapularis (deer tick) or Ixodes pacificus (western black-legged tick \u2014 California's primary Lyme vector), (2) the tick was attached for \u226536 hours (engorged appearance or known attachment duration), (3) prophylaxis can be started within 72 hours of tick removal, (4) local Lyme disease rate is \u226520% (applicable to California's North Coast high-risk counties), and (5) doxycycline is not contraindicated. If any criterion is not met, prophylaxis is not recommended."}}, {"@type": "Question", "name": "How common is Lyme disease in California?", "acceptedAnswer": {"@type": "Answer", "text": "California is a lower-endemic Lyme state compared to northeastern states. CDPH Tick-Borne Disease Surveillance reports approximately 100\u2013300 confirmed Lyme cases annually in California. The highest-risk California counties are in the North Coast (Humboldt, Mendocino, Trinity) and Bay Area foothills (Marin, Santa Cruz, San Mateo), where Ixodes pacificus tick infection rates range from 1\u201310% depending on the area. CDC surveillance confirms California's Lyme rate is significantly lower than Connecticut, New York, or New Jersey, but meaningful exposure risk exists in endemic California habitats."}}, {"@type": "Question", "name": "Does California require an in-person visit for tick bite evaluation?", "acceptedAnswer": {"@type": "Answer", "text": "No. California B&P Code \u00a72290.5 does not require a prior in-person visit. Tick bite evaluation \u2014 determining IDSA prophylaxis criteria, assessing for erythema migrans, and evaluating systemic symptoms \u2014 is appropriately conducted by video. High-acuity presentations (suspected RMSF, tick paralysis, Lyme carditis, neurological Lyme) require in-person or emergency evaluation."}}, {"@type": "Question", "name": "When does a tick bite require emergency care?", "acceptedAnswer": {"@type": "Answer", "text": "Go to the ER for: suspected Rocky Mountain spotted fever \u2014 fever, severe headache, and petechial rash 2\u20135 days after tick bite (fatal if not treated rapidly); tick paralysis \u2014 ascending paralysis after tick attachment; Lyme carditis \u2014 palpitations, lightheadedness, or syncope; neurological Lyme \u2014 severe headache, facial palsy, confusion. Early Lyme with only erythema migrans and no systemic symptoms is appropriate for telehealth management."}}, {"@type": "Question", "name": "Is Aetna in-network for tick bite treatment at TeleDirectMD in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. UnitedHealthcare Commercial is approved effective May 29, 2026. Self pay is $79."}}, {"@type": "Question", "name": "What is the cost of tick bite treatment in California?", "acceptedAnswer": {"@type": "Answer", "text": "TeleDirectMD charges $79 self-pay for a complete MD video visit. Single-dose doxycycline 200 mg (Lyme prophylaxis) costs ~$5\u2013$15 for 2 tablets with GoodRx. Full-course doxycycline 100 mg twice daily \u00d7 14\u201321 days costs ~$12\u2013$25 with GoodRx. Urgent care tick bite visits in California typically cost $150\u2013$300."}}, {"@type": "Question", "name": "Does California's AB 744 parity law cover tick bite telehealth?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, for in-network commercial plans. California AB 744 (2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services. Aetna and UHC Commercial are in-network for TeleDirectMD in California."}}, {"@type": "Question", "name": "How do I remove a tick safely in California?", "acceptedAnswer": {"@type": "Answer", "text": "CDC recommends: use fine-tipped tweezers to grasp the tick as close to the skin surface as possible; pull upward with steady, even pressure \u2014 do not twist or jerk (this can cause parts to break off in the skin); avoid crushing the tick body. After removal: clean the bite area with rubbing alcohol or soap and water; dispose of the tick by submersing in alcohol, placing in a sealed bag, or flushing down the toilet. Do not use petroleum jelly, heat, or nail polish \u2014 these methods are ineffective."}}, {"@type": "Question", "name": "What are the symptoms of Lyme disease to watch for after a tick bite in California?", "acceptedAnswer": {"@type": "Answer", "text": "The hallmark early Lyme symptom is erythema migrans (EM) \u2014 an expanding red rash that may have a bull's-eye appearance, appearing 3\u201330 days after the bite at or near the attachment site. Not all EM rashes have a bull's-eye; some are uniformly red. Other early symptoms include fatigue, fever, headache, muscle and joint aches. Later Lyme without treatment can cause arthritis, facial palsy, palpitations, and neurological symptoms. Monitor for 30 days after tick removal."}}, {"@type": "Question", "name": "Which California counties have the highest Lyme disease risk?", "acceptedAnswer": {"@type": "Answer", "text": "CDPH Tick-Borne Disease Surveillance identifies the highest Lyme disease risk in California's North Coast counties (Humboldt, Mendocino, Trinity, Del Norte) where Ixodes pacificus density is highest and tick infection rates are 1\u201310%. The Bay Area foothills (Marin County \u2014 Point Reyes, Mount Tamalpais; Santa Cruz; San Mateo) are also moderate-risk. Southern California and the Central Valley have lower but non-zero risk. TeleDirectMD physicians evaluate the specific California county of exposure when assessing Lyme prophylaxis criteria."}}, {"@type": "Question", "name": "Will my tick bite prescription be sent electronically to a California pharmacy?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California AB 2789 (effective January 1, 2022) requires all prescriptions to be issued electronically. TeleDirectMD sends e-prescriptions to your chosen California pharmacy \u2014 CVS, Walgreens, Rite Aid, Walmart, Safeway \u2014 during or after your visit."}}]}, {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Get Tick Bite (Lyme Prophylaxis and Evaluation) Online in California", "description": "Three steps to receive tick bite (lyme prophylaxis and evaluation) evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.", "totalTime": "PT30M", "estimatedCost": {"@type": "MonetaryAmount", "currency": "USD", "value": "79"}, "step": [{"@type": "HowToStep", "position": 1, "name": "Book your video visit", "text": "Visit teledirectmd.com and select California Tick Bite treatment. No referral needed. Self pay $79. Many visits available same day.", "url": "https://teledirectmd.com/book-online"}, {"@type": "HowToStep", "position": 2, "name": "See a California-licensed MD by secure video", "text": "Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your symptoms, history, and red-flag screening. Consent per CA B&P Section 2290.5 confirmed.", "url": "https://teledirectmd.com/ca/tick-bite-treatment-online/"}, {"@type": "HowToStep", "position": 3, "name": "Receive your treatment plan and e-prescription", "text": "If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit.", "url": "https://teledirectmd.com/ca/tick-bite-treatment-online/"}]}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "TeleDirectMD", "item": "https://teledirectmd.com"}, {"@type": "ListItem", "position": 2, "name": "California", "item": "https://teledirectmd.com/ca/"}, {"@type": "ListItem", "position": 3, "name": "Tick Bite (Lyme Prophylaxis and Evaluation) Online in California", "item": "https://teledirectmd.com/ca/tick-bite-treatment-online/"}]}];

const PAGE_CSS = `
.tdmd-ca-cond{color:var(--tdmd-text);}
.tdmd-ca-cond .tdmd-ca-cond__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.tdmd-ca-cond .tdmd-ca-cond__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.tdmd-ca-cond .tdmd-ca-cond__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.tdmd-ca-cond .tdmd-ca-cond__byline-name{font-weight:700;color:var(--tdmd-navy);}
.tdmd-ca-cond .tdmd-ca-cond__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.tdmd-ca-cond .tdmd-ca-cond__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.tdmd-ca-cond .tdmd-ca-cond__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.tdmd-ca-cond .tdmd-ca-cond__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.tdmd-ca-cond .tdmd-ca-cond__dual-card--good{border-left:5px solid #2E7D52;}
.tdmd-ca-cond .tdmd-ca-cond__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.tdmd-ca-cond .tdmd-ca-cond__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.tdmd-ca-cond .tdmd-ca-cond__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.tdmd-ca-cond .tdmd-ca-cond__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.tdmd-ca-cond .tdmd-ca-cond__dual{grid-template-columns:minmax(0,1fr);}}
.tdmd-ca-cond .tdmd-ca-cond__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.tdmd-ca-cond .tdmd-ca-cond__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.tdmd-ca-cond .tdmd-ca-cond__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.tdmd-ca-cond .tdmd-ca-cond__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.tdmd-ca-cond .tdmd-ca-cond__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.tdmd-ca-cond .tdmd-ca-cond__payor-pill{display:inline-block;padding:0.15rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;letter-spacing:0.02em;}
.tdmd-ca-cond .tdmd-ca-cond__payor-pill--good{background:#E6F4EA;color:#1F6B36;}
.tdmd-ca-cond .tdmd-ca-cond__payor-pill--pending{background:#FEF3C7;color:#7A5A09;}
.tdmd-ca-cond .tdmd-ca-cond__payor-pill--none{background:#FEE2E2;color:#8A1F1F;}
.tdmd-ca-cond .tdmd-ca-cond__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
.tdmd-ca-cond .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.tdmd-ca-cond .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.tdmd-ca-cond .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.tdmd-ca-cond .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
.tdmd-ca-cond .tdmd-ca-cond__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.tdmd-ca-cond .tdmd-ca-cond__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.tdmd-ca-cond .tdmd-ca-cond__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.tdmd-ca-cond .tdmd-ca-cond__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.tdmd-ca-cond .tdmd-ca-cond__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.tdmd-ca-cond .tdmd-ca-cond__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
`;

export default function CaTickBiteTreatmentOnline() {
  const pid = 'ca-tick-bite-treatment-online';

  return (
    <>
      {/* JSON-LD schemas */}
      {SCHEMAS.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className="tdmd-ca-cond">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/ca/">California</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Tick Bite (Lyme Prophylaxis and Evaluation) Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Tick Bite Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · IDSA 2020 Lyme Disease Guidelines + CDC tick bite guidance · CA B&P §2290.5 compliant.
                </p>
                <p>
                  Tick Bite is a condition commonly evaluated and, when appropriate, treated via telehealth. TeleDirectMD uses a safety-first approach, screening for red-flag symptoms that require in-person or emergency care before determining whether treatment by video visit is appropriate. This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas.
                </p>

                {/* v3: Inline opener paragraph — replaces CitableSummaryBlock */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can I get tick bite (lyme prophylaxis and evaluation) online in California?</strong> Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and are held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. Self pay is $79. <a href="/insurance/">Aetna is in-network</a> as of April 30, 2026; UnitedHealthcare Commercial approved May 29, 2026.
                  </p>
                </div>

                {/* Visible byline (E-E-A-T) */}
                <div className="tdmd-ca-cond__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="tdmd-ca-cond__byline-text">
                    <span className="tdmd-ca-cond__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="tdmd-ca-cond__byline-meta">
                      NPI {PHYSICIAN.npi} &middot; Licensed in {PHYSICIAN.licenseState} &middot; Last reviewed 
                      <time dateTime={LAST_REVIEWED}>May 20, 2026</time>
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-eligibility`}>Eligibility checklist</a></li>
                  <li><a href={`#${pid}-ca-law`}>California telehealth law</a></li>
                  <li><a href={`#${pid}-epidemiology`}>California epidemiology</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; insurance</a></li>
                  <li><a href={`#${pid}-medications`}>Medication options</a></li>
                  <li><a href={`#${pid}-dual-path`}>Telehealth vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>Self pay $79 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Aetna in-network (effective April 30, 2026)</li>
                  <li>UnitedHealthcare Commercial approved (effective May 29, 2026)</li>
                  <li>Licensed telehealth care for adults 18+ located in California at time of visit</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> W57.XXXA (Bitten or stung by nonvenomous insect and other nonvenomous arthropods, initial encounter)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Tick Bite Care in California</h2>
                  <ul>
                    <li>Fast evaluation for tick bite (lyme prophylaxis and evaluation) symptoms</li>
                    <li>Red-flag screening for serious complications requiring in-person care</li>
                    <li>Guideline-based treatment per AAFP</li>
                    <li>e-Prescriptions to your CA pharmacy under AB 2789</li>
                    <li>Clear follow-up steps and prevention guidance</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. Go to urgent care or the ER for severe symptoms, systemic illness, or any red-flag signs described on this page. TeleDirectMD does not prescribe controlled substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) ELIGIBILITY CHECKLIST ─────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Tick Bite (Lyme Prophylaxis and Evaluation) Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these apply to you:</strong></p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Tick bite evaluation — tick identified, attached &lt;36 hours, no erythema migrans, no systemic symptoms</li>
                  <li>Single-dose doxycycline prophylaxis when all 5 IDSA criteria are met</li>
                  <li>Small erythema migrans rash (&lt;5 cm, no systemic symptoms) — 14-day doxycycline course</li>
                  <li>Post-exposure guidance after tick removal when prophylaxis criteria are not met</li>
                  <li>Follow-up monitoring for tick bite without systemic symptoms</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&#10007; Seek In-Person or Emergency Care If</h3>
                <ul>
                  <li>Suspected tick paralysis — ascending paralysis, difficulty walking after tick attachment — go to the ED</li>
                  <li>Suspected Rocky Mountain spotted fever — fever, severe headache, rash 3–5 days after tick bite — fatal if untreated without appropriate antibiotics — go to the ED</li>
                  <li>Lyme carditis — palpitations, lightheadedness, syncope after tick bite — go to the ED</li>
                  <li>Neurological Lyme — facial palsy, severe headache, meningitis symptoms after tick bite — go to the ED</li>
                  <li>Erythema migrans expanding &gt;5 cm with systemic symptoms (fever, fatigue, arthralgias) — in-person evaluation or urgent care</li>
                  <li>Suspected tick-borne encephalitis or severe systemic illness — go to the ED</li>
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If you have red-flag symptoms, seek urgent in-person care or emergency care immediately. TeleDirectMD is not appropriate for complex or severe cases.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3) CALIFORNIA TELEHEALTH LAW ─────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and Your Tick Bite (Lyme Prophylaxis and Evaluation) Visit</h2>

            <h3>Does California require an in-person visit before telehealth?</h3>
            <p>
              No. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — does not require a prior in-person visit before receiving telehealth services. Before delivering care, the physician must obtain the patient&apos;s verbal or written consent for telehealth and document it — which TeleDirectMD does at the start of every visit.
            </p>

            <h3>What standard of care applies to California telehealth physicians?</h3>
            <p>
              The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> is explicit: &ldquo;The standard of care is the same whether the patient is seen in-person, through telehealth or other methods of electronically enabled health care.&rdquo; Physicians must be licensed in California to provide telehealth to California patients — a requirement TeleDirectMD satisfies. See our <a href="/about/">Dr. Bhavsar bio</a> for credential details.
            </p>

            <h3>Does California insurance parity law cover telehealth visits?</h3>
            <p>
              Yes, for commercial plans. California Assembly Bill 744 (2019), codified in <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code &sect;10123.85</a>, requires commercial health plans to reimburse telehealth services on the same basis as comparable in-person services. Plans cannot require face-to-face contact as a condition of reimbursement, and copays for telehealth cannot exceed those for equivalent in-person visits. These parity provisions apply to contracts issued, amended, or renewed after January 1, 2021. AB 744 parity does not apply to Medi-Cal managed care plans or Medicare.
            </p>

            <h3>Are tick bite (lyme prophylaxis and evaluation) medications controlled substances under California law?</h3>
            <p>
              Doxycycline (single-dose prophylaxis or treatment course) is not a controlled substance. It can be prescribed via California telehealth and transmitted electronically to any California pharmacy under Assembly Bill 2789. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Tick Bite (Lyme Prophylaxis and Evaluation) Works in California</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book your video visit</h3>
                  <p>No referral needed. Self pay $79. Many visits available same day. Note your symptom onset, prior episodes, allergies, and current medications before the visit.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>See a California-licensed MD by secure video</h3>
                  <p>The physician reviews your symptoms, history, and risk factors. Telehealth consent under CA B&amp;P &sect;2290.5 is obtained and documented. Red-flag screening determines whether telehealth is appropriate for your presentation.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Receive your treatment plan and e-prescription</h3>
                  <p>If medication is clinically appropriate, a California-compliant e-prescription is sent to your chosen California pharmacy during or after the visit. You receive clear follow-up instructions regardless of treatment choice, including when to seek in-person care.</p>
                  <div className="tdmd-decision-cta">
                    <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5) CALIFORNIA EPIDEMIOLOGY ──────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-epidemiology`}>
          <div className="tdmd-container">
            <h2>How Common Is Tick Bite in California?</h2>
            <p>
              California is an endemic state for tick-borne diseases. The California Department of Public Health (CDPH) Tick-Borne Disease Section reports approximately 100–300 confirmed Lyme disease cases annually in California, with Ixodes pacificus (western black-legged tick) as the primary Lyme vector. The highest-risk California counties are in the North Coast (Humboldt, Mendocino, Trinity) and Bay Area foothills (Marin, Santa Cruz, San Mateo). CDPH also tracks Rocky Mountain spotted fever, ehrlichiosis, and anaplasmosis in California. — <a href="https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/TickBorneDiseases.aspx" rel="noopener" target="_blank">CDPH — Tick-Borne Disease Section</a>.
            </p>
            <p>
              Clinical guidance for tick bite (lyme prophylaxis and evaluation) is provided by <a href="https://www.idsociety.org/practice-guideline/lyme-disease/" rel="noopener" target="_blank">AAFP</a> through the IDSA/AAN/ACR Lyme Disease Guidelines 2020 + CDC Tick Bite Guidance. TeleDirectMD follows these guidelines on every patient visit.
            </p>
            <h3>What causes tick bite and who is most at risk in California?</h3>
            <p>
              Tick Bite affects California adults across all demographics, though certain populations face higher risk based on the specific condition. The physician reviews your individual risk factors at each visit. Telehealth is appropriate for adults 18 and older with mild to moderate presentations who do not have red-flag symptoms requiring immediate in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Tick Bite (Lyme Prophylaxis and Evaluation) Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit, including evaluation, treatment plan, and e-prescription. Patients with in-network insurance pay their plan&apos;s telehealth copay instead. The table below reflects current TeleDirectMD payor enrollment for California.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Red-flag screening &amp; structured triage</li>
                  <li>e-Prescription to your CA pharmacy (when appropriate)</li>
                  <li>Follow-up instructions &amp; prevention guidance</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical Tick Bite cost comparison">
                <h3>Typical Tick Bite Visit Cost in California</h3>
                <p className="tdmd-price-caption">Common ranges Californians see before insurance. Actual costs vary by setting and city.</p>
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
                <p className="tdmd-price-footnote">Comparison reflects typical California metro pricing. Actual costs vary.</p>
              </div>
            </div>

            <h3 style={{ marginTop: '1.75rem' }}>California Payor Status — TeleDirectMD</h3>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="TeleDirectMD California payor status">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Source: TeleDirectMD payor enrollment records, refreshed May 20, 2026. Verify current in-network status with your insurer before booking.
                </caption>
                <thead>
                  <tr>
                    <th>Insurer</th>
                    <th>Status</th>
                    <th>Effective</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {CA_PAYORS.map((p) => {
                    const pillClass = p.inNetwork
                      ? 'tdmd-ca-cond__payor-pill tdmd-ca-cond__payor-pill--good'
                      : (p.status === 'Pending' || p.status === 'Approved')
                        ? 'tdmd-ca-cond__payor-pill tdmd-ca-cond__payor-pill--pending'
                        : 'tdmd-ca-cond__payor-pill tdmd-ca-cond__payor-pill--none';
                    const pillLabel = p.inNetwork ? '&#10003; In-Network' : p.status;
                    return (
                      <tr key={p.name}>
                        <td><strong>{p.name}</strong></td>
                        <td><span className={pillClass} dangerouslySetInnerHTML={{ __html: pillLabel }} /></td>
                        <td>{p.effective}</td>
                        <td>{p.notes}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '1rem' }}>
              View all <a href="/insurance">insurance options</a> or <a href="/book-online">book a $79 self-pay visit</a>.
            </p>
          </div>
        </section>

        {/* ─── 7) MEDICATIONS TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Tick Bite (Lyme Prophylaxis and Evaluation) Medication Options and Costs in California</h2>
            <p>
              Medications for tick bite (lyme prophylaxis and evaluation) are selected based on current guidelines from <a href="https://www.idsociety.org/practice-guideline/lyme-disease/" rel="noopener" target="_blank">AAFP</a>, patient history, allergies, and relevant contraindications assessed at the visit. GoodRx-verified pricing is shown below.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Tick Bite (Lyme Prophylaxis and Evaluation) medication options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx prices retrieved May 2026 from goodrx.com. National coupon prices; actual cost varies by pharmacy. Prescription costs are separate from the TeleDirectMD visit fee.
                </caption>
                <thead>
                  <tr>
                    <th>Medication</th>
                    <th>Typical Regimen</th>
                    <th>GoodRx Price (May 2026)</th>
                    <th>Key Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Doxycycline 200 mg single dose (Lyme prophylaxis)</strong> · First-line</td>
                    <td>200 mg single oral dose — take with food; must be given within 72 hours of tick removal</td>
                    <td><a href="https://www.goodrx.com/doxycycline" target="_blank" rel="noopener">~$5–$15 / 2 tablets</a></td>
                    <td>IDSA-recommended single-dose prophylaxis for Lyme disease. Five criteria must ALL be met: (1) Ixodes tick identified, (2) attached ≥36 hours, (3) within 72 hours of removal, (4) local Lyme rate ≥20%, (5) doxycycline not contraindicated. Not for use in pregnancy or children under 8. Not effective against non-Ixodes ticks.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Doxycycline 100 mg twice daily × 14–21 days (early Lyme treatment)</strong> · First-line</td>
                    <td>100 mg twice daily × 14–21 days — if erythema migrans (EM rash) present</td>
                    <td><a href="https://www.goodrx.com/doxycycline" target="_blank" rel="noopener">~$12–$25 / 30 tabs</a></td>
                    <td>For early Lyme disease with erythema migrans rash — requires visible EM rash or serologic confirmation. Erythema migrans diagnosis with rash may be appropriate for telehealth; systemic Lyme (cardiac, neurological) requires in-person evaluation.</td>
                  </tr>
                  <tr>
                    <td><strong>Amoxicillin 500 mg TID × 14–21 days (early Lyme — doxycycline-intolerant)</strong></td>
                    <td>500 mg three times daily × 14–21 days</td>
                    <td><a href="https://www.goodrx.com/amoxicillin" target="_blank" rel="noopener">~$10–$20 / 42 caps GoodRx (generic)</a></td>
                    <td>Alternative for early Lyme when doxycycline contraindicated (pregnancy, age &lt;8). Covers Borrelia burgdorferi per IDSA 2020. Not for Lyme prophylaxis (single-dose protocol is doxycycline only). Penicillin allergy: use cefuroxime 500 mg BID x14–21d.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> The choice of medication depends on your medical history, allergies, drug interactions, and clinical factors assessed by the physician at the visit. Do not start any prescription medication without a clinical evaluation.
            </p>
          </div>
        </section>

        {/* ─── 8) DUAL-PATH BLOCK ───────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>TeleDirectMD vs. In-Person Care: Which Is Right for You?</h2>
            <p>For most adults with mild to moderate tick bite (lyme prophylaxis and evaluation) without red-flag symptoms, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below to determine the right care pathway for you.</p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Tick bite evaluation — tick identified, attached &lt;36 hours, no erythema migrans, no systemic symptoms</li>
                  <li>Single-dose doxycycline prophylaxis when all 5 IDSA criteria are met</li>
                  <li>Small erythema migrans rash (&lt;5 cm, no systemic symptoms) — 14-day doxycycline course</li>
                  <li>Post-exposure guidance after tick removal when prophylaxis criteria are not met</li>
                  <li>Follow-up monitoring for tick bite without systemic symptoms</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&rarr; Use in-person care if</h3>
                <ul>
                  <li>Suspected tick paralysis — ascending paralysis, difficulty walking after tick attachment — go to the ED</li>
                  <li>Suspected Rocky Mountain spotted fever — fever, severe headache, rash 3–5 days after tick bite — fatal if untreated without appropriate antibiotics — go to the ED</li>
                  <li>Lyme carditis — palpitations, lightheadedness, syncope after tick bite — go to the ED</li>
                  <li>Neurological Lyme — facial palsy, severe headache, meningitis symptoms after tick bite — go to the ED</li>
                  <li>Erythema migrans expanding &gt;5 cm with systemic symptoms (fever, fatigue, arthralgias) — in-person evaluation or urgent care</li>
                  <li>Suspected tick-borne encephalitis or severe systemic illness — go to the ED</li>
                </ul>
                <ul>
                  <li><strong>ER / 911:</strong> Any life-threatening symptom — difficulty breathing, chest pain, severe confusion, signs of sepsis</li>
                  <li><strong>Urgent care:</strong> Moderate symptoms needing physical exam or testing TeleDirectMD cannot perform</li>
                  <li><strong>Primary care:</strong> Chronic management, recurrent episodes, specialist referral needs</li>
                  <li><strong><a href="https://www.211ca.org" rel="noopener" target="_blank">California 211</a>:</strong> Find local clinics and health resources</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9) CTA STRIP ─────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-ca-cond__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — California adults, 18+</p>
                <small>Self pay $79 &middot; Aetna in-network &middot; UHC Commercial approved May 2026 &middot; No ER wait</small>
              </div>
              <a className="tdmd-ca-cond__cta-btn" href="/book-online" rel="noopener">Book Now &rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 10) FAQ (Premium Style A accordion) ─────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Tick Bite (Lyme Prophylaxis and Evaluation) in California"
              items={FAQ_ITEMS}
            />
            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to see a California-licensed MD?</h3>
                <p>Book a same-day video visit. Self pay $79 &middot; Aetna in-network &middot; UHC Commercial approved.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11) RELATED CA CONDITIONS (siblings) ────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other California Conditions We Treat</h2>
            <p>These California condition pages can help when symptoms overlap or when you want to explore another California telehealth visit from TeleDirectMD.</p>
            <div className="tdmd-ca-cond__sibling-grid">
              <a key="dog-bite-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/dog-bite-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Dog Bite Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Animal and vector-borne exposure risks in California outdoors.</span>
                </a>
              <a key="cat-bite-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/cat-bite-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Cat Bite Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Animal bite and vector-borne disease evaluation.</span>
                </a>
              <a key="scabies-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/scabies-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Scabies Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Ectoparasite — intense itch after outdoor/animal exposure.</span>
                </a>
              <a key="head-lice-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/head-lice-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Head Lice Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Another ectoparasite managed by telehealth.</span>
                </a>
              <a key="poison-ivy-oak-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/poison-ivy-oak-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Poison Ivy/Oak Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Trail and outdoor exposures — common co-occurrence with tick bites.</span>
                </a>
              <a key="eczema-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/eczema-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Eczema Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Post-bite inflammatory skin reaction.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ──────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/tick-bite-treatment-online/">Tick Bite national condition page</a>. Use the links below to explore insurance details, book a visit, or review other conditions.</p>
            <div className="tdmd-ca-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/tick-bite-treatment-online/">National Tick Bite page</a>
              <a href="/health-guides/">Tick Bite health guides</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/book-online">Book Online</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/insurance">Insurance</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>
        </section>

        {/* ─── 13) REFERENCES ───────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://www.idsociety.org/practice-guideline/lyme-disease/" rel="noopener" target="_blank">IDSA/AAN/ACR Lyme Disease Guidelines 2020. Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.cdc.gov/lyme/index.html" rel="noopener" target="_blank">CDC — Lyme Disease. Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/InfectiousDiseases/LymeDisease.aspx" rel="noopener" target="_blank">CDPH — Lyme Disease Data. Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/TickBorneDiseases.aspx" rel="noopener" target="_blank">CDPH — Tick-Borne Diseases. Retrieved 2026-05-22.</a></li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California B&P Code §2290.5. Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.mbc.ca.gov/Licensees/Telehealth.aspx" rel="noopener" target="_blank">Medical Board of California — Telehealth. Retrieved 2026-05-22.</a></li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 (AB 744). Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.goodrx.com/doxycycline" rel="noopener" target="_blank">GoodRx — Doxycycline. Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.cdc.gov/lyme/stats/surveillance.html" rel="noopener" target="_blank">CDC — Lyme Disease Surveillance. Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.mbc.ca.gov/Licensees/Prescriptions/Electronic_Prescribing.aspx" rel="noopener" target="_blank">Medical Board of California — AB 2789. Retrieved 2026-05-22.</a></li>
            </ol>
          </div>
        </section>

        {/* ─── 14) DISCLAIMER ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes and is not a substitute for individualized medical advice. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and consent is documented under California B&amp;P &sect;2290.5. Treatment decisions are made by a California-licensed board-certified physician based on the clinical history at the time of the visit. If you have red-flag symptoms — severe pain, high fever, difficulty breathing, rapidly spreading infection, signs of sepsis, or worsening symptoms — seek urgent in-person care or call 911 immediately.</p>
            <p>TeleDirectMD does not prescribe controlled substances in any state. The price information on this page reflects GoodRx national coupon pricing retrieved May 2026; actual prescription costs at California pharmacies vary. Insurance status is current as of May 20, 2026; verify with your insurer before booking.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug="tick-bite-treatment-online" conditionName="Tick Bite (Lyme Prophylaxis and Evaluation)" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="tick-bite-treatment-online" />
        <CommonSymptomsBlock conditionSlug="tick-bite-treatment-online" conditionName="Tick Bite (Lyme Prophylaxis and Evaluation)" />
      </div>
    </>
  );
}
