/**
 * CaShinglesTreatmentOnline.js — production California × Shingles (Herpes Zoster) condition page (v3)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'shingles-treatment-online'.
 *
 * Matches v3 CA UTI template: inline opener paragraph (no CitableSummaryBlock),
 * hero, CA regulatory block (exact reuse), epidemiology block, clinical content,
 * vertical bar chart cost section, CA payor table, medications, dual-path block,
 * FAQ accordion (12 Q/A), JSON-LD schemas (MedicalWebPage + FAQPage + Physician
 * + HowTo + BreadcrumbList + SpeakableSpecification — NEVER QAPage).
 *
 * Authority: CDC Advisory Committee on Immunization Practices (ACIP) and CDC Shingles Clinical Resources
 * Guideline: CDC/ACIP Herpes Zoster Clinical Guidelines 2024 and AAD Shingles Management Guidance
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

const PAGE_URL = 'https://teledirectmd.com/ca/shingles-treatment-online/';
const PAGE_TITLE = 'Shingles Treatment Online in California | TeleDirectMD';
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
    id: 'ca-shingles-treatment-online-faq-0',
    question: 'Can I get shingles treatment online in California?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 permits California-licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California. Adults 18+ with classic shingles presentation — unilateral dermatomal rash with burning pain — can book a same-day video visit. Early antiviral treatment (ideally within 72 hours of rash onset) reduces severity and duration of illness and lowers the risk of postherpetic neuralgia. Self pay is $79; Aetna is in-network as of April 30, 2026.
      </p>
    ),
  },
  {
    id: 'ca-shingles-treatment-online-faq-1',
    question: 'Why is starting shingles treatment within 72 hours so important?',
    answer: (
      <p>
        Antiviral medications — valacyclovir, acyclovir, or famciclovir — are most effective when started within 72 hours of the shingles rash first appearing. Per CDC clinical guidelines, early antiviral therapy reduces the duration of new lesion formation, accelerates healing, reduces acute pain severity, and significantly decreases the risk of postherpetic neuralgia (PHN) — a chronic nerve pain syndrome that can persist for months or years after the shingles rash resolves. Book a visit immediately when you notice the characteristic rash.
      </p>
    ),
  },
  {
    id: 'ca-shingles-treatment-online-faq-2',
    question: 'How much does shingles antiviral medication cost in California?',
    answer: (
      <p>
        Generic valacyclovir (Valtrex) 1,000 mg three times daily for 7 days (42 tablets) is available with a GoodRx coupon for approximately $20–$35 at California pharmacies. Acyclovir 800 mg five times daily for 7 days is similarly affordable at ~$15–$25. Famciclovir is approximately $30–$50. Verify current pricing at goodrx.com. Prescription costs at pharmacy are separate from the TeleDirectMD visit fee ($79).
      </p>
    ),
  },
  {
    id: 'ca-shingles-treatment-online-faq-3',
    question: 'What does a shingles rash look like?',
    answer: (
      <p>
        Shingles begins with burning, tingling, or shooting pain along one side of the body in a band-like pattern following a nerve distribution (dermatome) — often before any visible rash. Within 1–5 days, a red rash appears in that same area, quickly developing into clusters of fluid-filled blisters (vesicles). The rash typically affects one side of the body only — trunk, abdomen, back, face, or extremities — and does not cross the midline. The blisters crust over within 7–10 days. Pain can precede the rash by days, which is why early recognition is important.
      </p>
    ),
  },
  {
    id: 'ca-shingles-treatment-online-faq-4',
    question: 'Does California require an in-person visit before telehealth?',
    answer: (
      <p>
        No. California B&P Code §2290.5 does not require a prior in-person visit. A California-licensed physician can evaluate your shingles rash through a synchronous video visit — the patient shows the affected area on camera. This approach is particularly valuable for shingles because time to antiviral treatment is critical, and avoiding delays caused by in-person appointment scheduling can make a meaningful clinical difference.
      </p>
    ),
  },
  {
    id: 'ca-shingles-treatment-online-faq-5',
    question: 'When is shingles dangerous and when should I go to the ER in California?',
    answer: (
      <p>
        Seek emergency care immediately if the shingles rash involves or is near your eye — this is herpes zoster ophthalmicus and can cause permanent vision loss without prompt ophthalmologic treatment. Go to the ER if you have ear pain with vesicles in the ear canal and facial weakness (Ramsay Hunt syndrome) or if you are severely immunocompromised. Any sign of shingles spread beyond the primary dermatomal area (disseminated zoster) also requires urgent in-person evaluation.
      </p>
    ),
  },
  {
    id: 'ca-shingles-treatment-online-faq-6',
    question: 'Is my Aetna plan in California in-network with TeleDirectMD?',
    answer: (
      <p>
        Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. Verify current in-network status directly with Aetna before your visit. Self pay is $79 regardless of insurance status.
      </p>
    ),
  },
  {
    id: 'ca-shingles-treatment-online-faq-7',
    question: 'Will Medi-Cal cover my TeleDirectMD shingles visit?',
    answer: (
      <p>
        TeleDirectMD is not currently enrolled as a Medi-Cal provider. If you have Medi-Cal, you can use the $79 self-pay rate or find a Medi-Cal-enrolled telehealth provider through your managed care plan or California DHCS at dhcs.ca.gov.
      </p>
    ),
  },
  {
    id: 'ca-shingles-treatment-online-faq-8',
    question: 'Should I get the shingles vaccine (Shingrix) after having shingles?',
    answer: (
      <p>
        Yes. CDC ACIP recommends that adults who have had shingles receive the Shingrix vaccine to prevent recurrence — shingles can recur, and vaccination substantially reduces that risk. The CDPH recommends Shingrix for all adults 50 years and older. After recovering from an active episode, ask your primary care physician or pharmacist about Shingrix vaccination timing. Shingrix requires 2 doses 2–6 months apart and is available at most California pharmacies.
      </p>
    ),
  },
  {
    id: 'ca-shingles-treatment-online-faq-9',
    question: 'Is shingles contagious?',
    answer: (
      <p>
        Shingles is not contagious as shingles — a person cannot catch shingles from someone who has it. However, a person who has never had chickenpox or been vaccinated against varicella can contract chickenpox (varicella) from direct contact with active shingles blisters. The virus is only transmissible when blisters are present; once blisters crust over, the person is no longer contagious. Avoid contact with newborns, pregnant women who haven't had chickenpox, and immunocompromised individuals while blisters are active.
      </p>
    ),
  },
  {
    id: 'ca-shingles-treatment-online-faq-10',
    question: 'Does California\'s AB 744 telehealth parity law apply to shingles treatment?',
    answer: (
      <p>
        California AB 744 (2019) requires commercial health plans to reimburse telehealth services on the same basis as in-person services. Parity applies when the provider is already in-network with your specific plan. Currently, Aetna (active April 30, 2026) and UnitedHealthcare Commercial (active May 29, 2026) are in-network in California for TeleDirectMD.
      </p>
    ),
  },
  {
    id: 'ca-shingles-treatment-online-faq-11',
    question: 'How quickly will my antiviral prescription reach a California pharmacy?',
    answer: (
      <p>
        California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022). If antiviral therapy is appropriate, TeleDirectMD sends an e-prescription electronically to your chosen California pharmacy during or after your visit. Most California pharmacies fill within one to four hours. For shingles, starting the antiviral quickly matters — book a visit immediately and call ahead to confirm your pharmacy has the medication in stock.
      </p>
    ),
  },
];

const SCHEMAS = [{"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Shingles Treatment Online in California | TeleDirectMD", "url": "https://teledirectmd.com/ca/shingles-treatment-online/", "description": "Shingles treatment online for California adults. Antiviral prescriptions (valacyclovir). Board-certified Family Medicine MD. Early treatment within 72 hours is critical. Self pay $79. Aetna in-network.", "datePublished": "2026-05-20", "dateModified": "2026-05-20", "inLanguage": "en-US", "about": {"@type": "MedicalCondition", "name": "Shingles (Herpes Zoster)", "code": {"@type": "MedicalCode", "code": "B02.9", "codingSystem": "ICD-10-CM"}}, "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient", "geographicArea": {"@type": "AdministrativeArea", "name": "California"}}, "reviewedBy": {"@type": "Physician", "@id": "https://teledirectmd.com/about/#physician-parth-bhavsar", "name": "Parth Bhavsar, MD", "identifier": {"@type": "PropertyValue", "propertyID": "NPI", "value": "1104323203"}, "medicalSpecialty": "Family Medicine", "hasCredential": [{"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Doctor of Medicine (MD)"}, {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Board Certification \u2014 American Board of Family Medicine"}], "licensedIn": "California", "worksFor": {"@type": "MedicalOrganization", "name": "TeleDirectMD", "url": "https://teledirectmd.com"}, "sameAs": ["https://npiregistry.cms.hhs.gov/provider-view/1104323203", "https://teledirectmd.com/about/"]}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#ca-shingles-treatment-online-opening", "#ca-shingles-treatment-online-opening p", ".tdmd-ca-shingles-treatment-online__byline", "#ca-shingles-treatment-online-faq"]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I get shingles treatment online in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 permits California-licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California. Adults 18+ with classic shingles presentation \u2014 unilateral dermatomal rash with burning pain \u2014 can book a same-day video visit. Early antiviral treatment (ideally within 72 hours of rash onset) reduces severity and duration of illness and lowers the risk of postherpetic neuralgia. Self pay is $79; Aetna is in-network as of April 30, 2026."}}, {"@type": "Question", "name": "Why is starting shingles treatment within 72 hours so important?", "acceptedAnswer": {"@type": "Answer", "text": "Antiviral medications \u2014 valacyclovir, acyclovir, or famciclovir \u2014 are most effective when started within 72 hours of the shingles rash first appearing. Per CDC clinical guidelines, early antiviral therapy reduces the duration of new lesion formation, accelerates healing, reduces acute pain severity, and significantly decreases the risk of postherpetic neuralgia (PHN) \u2014 a chronic nerve pain syndrome that can persist for months or years after the shingles rash resolves. Book a visit immediately when you notice the characteristic rash."}}, {"@type": "Question", "name": "How much does shingles antiviral medication cost in California?", "acceptedAnswer": {"@type": "Answer", "text": "Generic valacyclovir (Valtrex) 1,000 mg three times daily for 7 days (42 tablets) is available with a GoodRx coupon for approximately $20\u2013$35 at California pharmacies. Acyclovir 800 mg five times daily for 7 days is similarly affordable at ~$15\u2013$25. Famciclovir is approximately $30\u2013$50. Verify current pricing at goodrx.com. Prescription costs at pharmacy are separate from the TeleDirectMD visit fee ($79)."}}, {"@type": "Question", "name": "What does a shingles rash look like?", "acceptedAnswer": {"@type": "Answer", "text": "Shingles begins with burning, tingling, or shooting pain along one side of the body in a band-like pattern following a nerve distribution (dermatome) \u2014 often before any visible rash. Within 1\u20135 days, a red rash appears in that same area, quickly developing into clusters of fluid-filled blisters (vesicles). The rash typically affects one side of the body only \u2014 trunk, abdomen, back, face, or extremities \u2014 and does not cross the midline. The blisters crust over within 7\u201310 days. Pain can precede the rash by days, which is why early recognition is important."}}, {"@type": "Question", "name": "Does California require an in-person visit before telehealth?", "acceptedAnswer": {"@type": "Answer", "text": "No. California B&P Code \u00a72290.5 does not require a prior in-person visit. A California-licensed physician can evaluate your shingles rash through a synchronous video visit \u2014 the patient shows the affected area on camera. This approach is particularly valuable for shingles because time to antiviral treatment is critical, and avoiding delays caused by in-person appointment scheduling can make a meaningful clinical difference."}}, {"@type": "Question", "name": "When is shingles dangerous and when should I go to the ER in California?", "acceptedAnswer": {"@type": "Answer", "text": "Seek emergency care immediately if the shingles rash involves or is near your eye \u2014 this is herpes zoster ophthalmicus and can cause permanent vision loss without prompt ophthalmologic treatment. Go to the ER if you have ear pain with vesicles in the ear canal and facial weakness (Ramsay Hunt syndrome) or if you are severely immunocompromised. Any sign of shingles spread beyond the primary dermatomal area (disseminated zoster) also requires urgent in-person evaluation."}}, {"@type": "Question", "name": "Is my Aetna plan in California in-network with TeleDirectMD?", "acceptedAnswer": {"@type": "Answer", "text": "Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. Verify current in-network status directly with Aetna before your visit. Self pay is $79 regardless of insurance status."}}, {"@type": "Question", "name": "Will Medi-Cal cover my TeleDirectMD shingles visit?", "acceptedAnswer": {"@type": "Answer", "text": "TeleDirectMD is not currently enrolled as a Medi-Cal provider. If you have Medi-Cal, you can use the $79 self-pay rate or find a Medi-Cal-enrolled telehealth provider through your managed care plan or California DHCS at dhcs.ca.gov."}}, {"@type": "Question", "name": "Should I get the shingles vaccine (Shingrix) after having shingles?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. CDC ACIP recommends that adults who have had shingles receive the Shingrix vaccine to prevent recurrence \u2014 shingles can recur, and vaccination substantially reduces that risk. The CDPH recommends Shingrix for all adults 50 years and older. After recovering from an active episode, ask your primary care physician or pharmacist about Shingrix vaccination timing. Shingrix requires 2 doses 2\u20136 months apart and is available at most California pharmacies."}}, {"@type": "Question", "name": "Is shingles contagious?", "acceptedAnswer": {"@type": "Answer", "text": "Shingles is not contagious as shingles \u2014 a person cannot catch shingles from someone who has it. However, a person who has never had chickenpox or been vaccinated against varicella can contract chickenpox (varicella) from direct contact with active shingles blisters. The virus is only transmissible when blisters are present; once blisters crust over, the person is no longer contagious. Avoid contact with newborns, pregnant women who haven't had chickenpox, and immunocompromised individuals while blisters are active."}}, {"@type": "Question", "name": "Does California's AB 744 telehealth parity law apply to shingles treatment?", "acceptedAnswer": {"@type": "Answer", "text": "California AB 744 (2019) requires commercial health plans to reimburse telehealth services on the same basis as in-person services. Parity applies when the provider is already in-network with your specific plan. Currently, Aetna (active April 30, 2026) and UnitedHealthcare Commercial (active May 29, 2026) are in-network in California for TeleDirectMD."}}, {"@type": "Question", "name": "How quickly will my antiviral prescription reach a California pharmacy?", "acceptedAnswer": {"@type": "Answer", "text": "California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022). If antiviral therapy is appropriate, TeleDirectMD sends an e-prescription electronically to your chosen California pharmacy during or after your visit. Most California pharmacies fill within one to four hours. For shingles, starting the antiviral quickly matters \u2014 book a visit immediately and call ahead to confirm your pharmacy has the medication in stock."}}]}, {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Get Shingles Treatment Online in California", "description": "Three steps to receive shingles treatment evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.", "totalTime": "PT30M", "estimatedCost": {"@type": "MonetaryAmount", "currency": "USD", "value": "79"}, "step": [{"@type": "HowToStep", "position": 1, "name": "Book your video visit", "text": "Visit teledirectmd.com and select California Shingles (Herpes Zoster) treatment. No referral needed. Self pay $79. Many visits available same day.", "url": "https://teledirectmd.com/book-online"}, {"@type": "HowToStep", "position": 2, "name": "See a California-licensed MD by secure video", "text": "Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your symptoms, history, and red-flag screening. Consent per CA B&P Section 2290.5 confirmed.", "url": "https://teledirectmd.com/ca/shingles-treatment-online/"}, {"@type": "HowToStep", "position": 3, "name": "Receive your treatment plan and e-prescription", "text": "If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit.", "url": "https://teledirectmd.com/ca/shingles-treatment-online/"}]}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "TeleDirectMD", "item": "https://teledirectmd.com"}, {"@type": "ListItem", "position": 2, "name": "California", "item": "https://teledirectmd.com/ca/"}, {"@type": "ListItem", "position": 3, "name": "Shingles Treatment Online in California", "item": "https://teledirectmd.com/ca/shingles-treatment-online/"}]}];

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

export default function CaShinglesTreatmentOnline() {
  const pid = 'ca-shingles-treatment-online';

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
            <span aria-current="page">Shingles Treatment Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Shingles (Herpes Zoster) Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · MD-only · CA B&P §2290.5 compliant.
                </p>
                <p>
                  Shingles (Herpes Zoster) is a condition commonly evaluated and, when appropriate, treated via telehealth. TeleDirectMD uses a safety-first approach, screening for red-flag symptoms that require in-person or emergency care before determining whether treatment by video visit is appropriate. This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas.
                </p>

                {/* v3: Inline opener paragraph — replaces CitableSummaryBlock */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can I get shingles treatment online in California?</strong> Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and are held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. Self pay is $79. <a href="/insurance/">Aetna is in-network</a> as of April 30, 2026; UnitedHealthcare Commercial approved May 29, 2026.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> B02.9 (Zoster without complications); actual code assigned at visit</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Shingles (Herpes Zoster) Care in California</h2>
                  <ul>
                    <li>Fast evaluation for shingles treatment symptoms</li>
                    <li>Red-flag screening for serious complications requiring in-person care</li>
                    <li>Guideline-based treatment per CDC Advisory Committee on Immunization Practices (ACIP) and CDC Shingles Clinical Resources</li>
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
            <h2>Shingles Treatment Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these apply to you:</strong></p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Classic unilateral dermatomal vesicular rash with burning/tingling pain</li>
                  <li>Pain before rash or within the early vesicular phase (ideally within 72 hours of rash onset)</li>
                  <li>Rash on trunk, back, abdomen, or extremities — not involving the eye or ear</li>
                  <li>No signs of dissemination, severe systemic illness, or immunocompromise</li>
                  <li>Pain management guidance needed in addition to antivirals</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&#10007; Seek In-Person or Emergency Care If</h3>
                <ul>
                  <li>Rash involving or near the eye (herpes zoster ophthalmicus — vision-threatening emergency)</li>
                  <li>Ear pain with vesicles in/around the ear canal with facial weakness (Ramsay Hunt syndrome)</li>
                  <li>Severe pain or rash in an immunocompromised patient (HIV, chemotherapy, transplant)</li>
                  <li>Disseminated zoster — lesions spreading beyond the primary dermatome</li>
                  <li>High fever with meningismus (possible zoster encephalitis)</li>
                  <li>Rash on face involving the tip of the nose (Hutchinson's sign — high risk of eye involvement)</li>
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
            <h2>California Telehealth Law and Your Shingles Treatment Visit</h2>

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

            <h3>Are shingles treatment medications controlled substances under California law?</h3>
            <p>
              Antiviral medications used for shingles — valacyclovir, acyclovir, famciclovir — are not controlled substances and can be prescribed via California telehealth without restriction. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Shingles Treatment Works in California</h2>
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
            <h2>How Common Is Shingles (Herpes Zoster) in California?</h2>
            <p>
              Herpes zoster (shingles) affects approximately 1 in 3 Americans during their lifetime, with higher rates in adults over 50 and those who are immunocompromised. California, with approximately 7 million residents over age 60, has a substantial at-risk population. The California Department of Public Health and CDC ACIP recommend the Shingrix (recombinant zoster vaccine) for all adults 50 years and older — the vaccine is over 90% effective at preventing shingles, significantly reducing the burden of postherpetic neuralgia in California. — <a href="https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/Immunization/Shingles.aspx" rel="noopener" target="_blank">CDPH — Shingles (Herpes Zoster) Immunization</a>.
            </p>
            <p>
              Clinical guidance for shingles treatment is provided by <a href="https://www.cdc.gov/shingles/hcp/clinical-overview/index.html" rel="noopener" target="_blank">CDC Advisory Committee on Immunization Practices (ACIP) and CDC Shingles Clinical Resources</a> through the CDC/ACIP Herpes Zoster Clinical Guidelines 2024 and AAD Shingles Management Guidance. TeleDirectMD follows these guidelines on every patient visit.
            </p>
            <h3>What causes shingles (herpes zoster) and who is most at risk in California?</h3>
            <p>
              Shingles (Herpes Zoster) affects California adults across all demographics, though certain populations face higher risk based on the specific condition. The physician reviews your individual risk factors at each visit. Telehealth is appropriate for adults 18 and older with mild to moderate presentations who do not have red-flag symptoms requiring immediate in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Shingles Treatment Cost &amp; Insurance in California</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Shingles (Herpes Zoster) cost comparison">
                <h3>Typical Shingles (Herpes Zoster) Visit Cost in California</h3>
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
            <h2>Shingles Treatment Medication Options and Costs in California</h2>
            <p>
              Medications for shingles treatment are selected based on current guidelines from <a href="https://www.cdc.gov/shingles/hcp/clinical-overview/index.html" rel="noopener" target="_blank">CDC Advisory Committee on Immunization Practices (ACIP) and CDC Shingles Clinical Resources</a>, patient history, allergies, and relevant contraindications assessed at the visit. GoodRx-verified pricing is shown below.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Shingles Treatment medication options and GoodRx prices">
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
                    <td><strong>Valacyclovir (Valtrex) 1000 mg</strong> · First-line</td>
                    <td>1,000 mg three times daily × 7 days</td>
                    <td><a href="https://www.goodrx.com/valacyclovir" target="_blank" rel="noopener">~$20–$35 generic with GoodRx</a></td>
                    <td>Preferred antiviral per CDC/ACIP for herpes zoster. Better bioavailability than acyclovir — three-times daily vs five-times daily dosing. Start as soon as possible, ideally within 72 hours of rash onset.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Acyclovir 800 mg</strong> · First-line</td>
                    <td>800 mg five times daily × 7 days</td>
                    <td><a href="https://www.goodrx.com/acyclovir" target="_blank" rel="noopener">~$15–$25 generic with GoodRx</a></td>
                    <td>Alternative first-line antiviral per CDC. Requires five-times daily dosing which may reduce adherence. Generic widely available at low cost.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Famciclovir 500 mg</strong> · First-line</td>
                    <td>500 mg three times daily × 7 days</td>
                    <td><a href="https://www.goodrx.com/famciclovir" target="_blank" rel="noopener">~$30–$50 generic with GoodRx</a></td>
                    <td>Third first-line antiviral per CDC/AAD. Equivalent clinical efficacy to valacyclovir. Three-times daily dosing.</td>
                  </tr>
                  <tr>
                    <td><strong>Gabapentin 300 mg (for postherpetic neuralgia prevention)</strong></td>
                    <td>300 mg three times daily — dose titrated by physician</td>
                    <td><a href="https://www.goodrx.com/gabapentin" target="_blank" rel="noopener">~$15–$25 generic with GoodRx</a></td>
                    <td>May be prescribed for pain management and postherpetic neuralgia risk reduction — discussion at visit. Gabapentin is not a controlled substance in California (unlike some other states).</td>
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
            <p>For most adults with mild to moderate shingles treatment without red-flag symptoms, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below to determine the right care pathway for you.</p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Classic unilateral dermatomal vesicular rash with burning/tingling pain</li>
                  <li>Pain before rash or within the early vesicular phase (ideally within 72 hours of rash onset)</li>
                  <li>Rash on trunk, back, abdomen, or extremities — not involving the eye or ear</li>
                  <li>No signs of dissemination, severe systemic illness, or immunocompromise</li>
                  <li>Pain management guidance needed in addition to antivirals</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&rarr; Use in-person care if</h3>
                <ul>
                  <li>Rash involving or near the eye (herpes zoster ophthalmicus — vision-threatening emergency)</li>
                  <li>Ear pain with vesicles in/around the ear canal with facial weakness (Ramsay Hunt syndrome)</li>
                  <li>Severe pain or rash in an immunocompromised patient (HIV, chemotherapy, transplant)</li>
                  <li>Disseminated zoster — lesions spreading beyond the primary dermatome</li>
                  <li>High fever with meningismus (possible zoster encephalitis)</li>
                  <li>Rash on face involving the tip of the nose (Hutchinson's sign — high risk of eye involvement)</li>
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
              sectionTitle="Frequently Asked Questions — Shingles Treatment in California"
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
              <a key="cellulitis-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/cellulitis-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Cellulitis Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Early shingles rash (pre-vesicular) can mimic cellulitis — correct identification prevents wrong antibiotic.</span>
                </a>
              <a key="impetigo-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/impetigo-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Impetigo Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Vesicular shingles rash can be confused with impetigo — different treatment entirely.</span>
                </a>
              <a key="ear-pain-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/ear-pain-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Ear Pain Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Ramsay Hunt syndrome (zoster oticus) causes severe ear pain and facial weakness.</span>
                </a>
              <a key="gout-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/gout-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Gout Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Both cause acute localized severe pain — important differential for limb presentations.</span>
                </a>
              <a key="dental-pain-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/dental-pain-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Dental Pain Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Trigeminal zoster causes facial/oral pain mimicking dental pain before rash appears.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ──────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/shingles-treatment-online/">Shingles (Herpes Zoster) national condition page</a>. Use the links below to explore insurance details, book a visit, or review other conditions.</p>
            <div className="tdmd-ca-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/shingles-treatment-online/">National Shingles (Herpes Zoster) page</a>
              <a href="/health-guides/">Shingles (Herpes Zoster) health guides</a>
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
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5 — Telehealth Advancement Act. Retrieved May 2026.</a></li>
              <li><a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California — Telehealth Resources. Retrieved May 2026.</a></li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 — Telehealth Parity (AB 744). Retrieved May 2026.</a></li>
              <li><a href="https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx" rel="noopener" target="_blank">California DHCS — Telehealth FAQ. Retrieved May 2026.</a></li>
              <li><a href="https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/Immunization/Shingles.aspx" rel="noopener" target="_blank">CDPH — Shingles Immunization Information. Retrieved May 2026.</a></li>
              <li><a href="https://www.cdc.gov/shingles/hcp/clinical-overview/index.html" rel="noopener" target="_blank">CDC — Shingles (Herpes Zoster) Clinical Overview. Retrieved May 2026.</a></li>
              <li><a href="https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hzv.html" rel="noopener" target="_blank">CDC — Herpes Zoster Vaccine Information Statement. Retrieved May 2026.</a></li>
              <li><a href="https://www.aad.org/public/diseases/a-z/shingles-overview" rel="noopener" target="_blank">American Academy of Dermatology — Shingles Overview. Retrieved May 2026.</a></li>
              <li><a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California — Electronic Prescribing (AB 2789). Retrieved May 2026.</a></li>
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

        <WhatDoesThisCostBlock conditionSlug="shingles-treatment-online" conditionName="Shingles Treatment" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="shingles-treatment-online" />
        <CommonSymptomsBlock conditionSlug="shingles-treatment-online" conditionName="Shingles Treatment" />
      </div>
    </>
  );
}
