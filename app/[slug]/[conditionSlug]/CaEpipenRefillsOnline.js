/**
 * CaEpipenRefillsOnline.js — production California × EpiPen Refills condition page (v3)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'epipen-refills-online'.
 *
 * Matches v3 CA UTI template: inline opener paragraph (no CitableSummaryBlock),
 * hero, CA regulatory block (exact reuse), epidemiology block, clinical content,
 * vertical bar chart cost section, CA payor table, medications, dual-path block,
 * FAQ accordion (12 Q/A), JSON-LD schemas (MedicalWebPage + FAQPage + Physician
 * + HowTo + BreadcrumbList + SpeakableSpecification — NEVER QAPage).
 *
 * Authority: AAAAI
 * Guideline: AAAAI/ACAAI Joint Task Force Anaphylaxis Practice Parameters 2023 Update
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

const PAGE_URL = 'https://teledirectmd.com/ca/epipen-refills-online/';
const PAGE_TITLE = 'Anaphylaxis — Epinephrine Auto-Injector (EpiPen) Refills Online in California | TeleDirectMD';
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
    id: 'ca-epipen-refills-online-faq-0',
    question: 'Can I refill my EpiPen online in California?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth. TeleDirectMD's California-licensed board-certified Family Medicine physician reviews your anaphylaxis trigger history, reaction severity documentation, avoidance strategies, and current auto-injector status before prescribing an epinephrine auto-injector 2-pack with an updated written emergency action plan. Self pay is $79; Aetna is in-network effective April 30, 2026.
      </p>
    ),
  },
  {
    id: 'ca-epipen-refills-online-faq-1',
    question: 'Why does TeleDirectMD prescribe a 2-pack of epinephrine auto-injectors?',
    answer: (
      <p>
        AAAAI and ACAAI anaphylaxis practice parameters recommend prescribing epinephrine auto-injectors in 2-packs as the standard of care. A second dose may be needed in two situations: (1) biphasic anaphylaxis — symptoms return 1–72 hours after initial resolution without re-exposure, occurring in approximately 20% of anaphylaxis cases; and (2) incorrect administration of the first device. Both devices should be carried by the patient at all times — leaving one device at home is not recommended.
      </p>
    ),
  },
  {
    id: 'ca-epipen-refills-online-faq-2',
    question: 'What is included in the emergency action plan I receive with my EpiPen refill?',
    answer: (
      <p>
        Every TeleDirectMD epinephrine refill visit includes a written emergency action plan containing: a list of your specific anaphylaxis triggers, how to recognize mild allergic reaction versus anaphylaxis, instructions to use epinephrine immediately at first sign of anaphylaxis (do not wait), correct injection technique (outer mid-thigh, hold 3 seconds, massage), instructions to call 911 immediately after using epinephrine regardless of symptom improvement, second-dose instructions, adjunctive antihistamine use (NOT a substitute), and allergist follow-up recommendation. The plan can be shared with schools, workplaces, and family members.
      </p>
    ),
  },
  {
    id: 'ca-epipen-refills-online-faq-3',
    question: 'What is the difference between EpiPen and generic epinephrine auto-injectors?',
    answer: (
      <p>
        EpiPen (Pfizer) is the brand-name epinephrine auto-injector at 0.3 mg (adults) or 0.15 mg (pediatric). FDA-approved generics — including Adrenaclick, Symjepi, and generic epinephrine auto-injectors — contain the same 0.3 mg epinephrine dose and are considered therapeutically equivalent. The injection mechanism, shape, and activation steps differ between devices. The physician recommends practicing with a trainer device to ensure correct use during an emergency. Generic devices cost approximately $120–$200 per 2-pack with GoodRx, compared to $650–$750 list for brand EpiPen.
      </p>
    ),
  },
  {
    id: 'ca-epipen-refills-online-faq-4',
    question: 'Can an antihistamine like Benadryl treat anaphylaxis instead of epinephrine?',
    answer: (
      <p>
        No. This is a critical safety point. Antihistamines (diphenhydramine/Benadryl, cetirizine/Zyrtec) treat only the histamine-mediated symptoms of allergic reactions — hives, itching, sneezing. They do NOT treat anaphylaxis-defining symptoms including airway swelling, bronchospasm, hypotension, or cardiovascular collapse. Using an antihistamine instead of epinephrine during anaphylaxis is dangerous and delays life-saving treatment. Epinephrine must always be used first; antihistamines are adjunctive only.
      </p>
    ),
  },
  {
    id: 'ca-epipen-refills-online-faq-5',
    question: 'How common is anaphylaxis in California?',
    answer: (
      <p>
        Anaphylaxis accounts for approximately 30,000 emergency department visits and 1,500 deaths annually nationwide per CDC and AAAAI data. California's diverse food culture — including high use of shellfish, peanuts, tree nuts, and sesame in Asian, Mexican, and Middle Eastern cuisines — creates significant food anaphylaxis exposure. Insect venom anaphylaxis is the second most common trigger, particularly among agricultural workers in the Central Valley and outdoor recreation enthusiasts. The California Department of Public Health tracks anaphylaxis-related ER visits, which have increased approximately 3% annually over the past decade.
      </p>
    ),
  },
  {
    id: 'ca-epipen-refills-online-faq-6',
    question: 'What are the triggers I should avoid if I have a history of anaphylaxis?',
    answer: (
      <p>
        Trigger avoidance is the cornerstone of anaphylaxis management. Common anaphylaxis triggers in California include: food allergens (peanut, tree nuts, shellfish, fish, sesame, milk, egg, wheat — the FDA major allergen list); insect venom (bee, wasp, yellow jacket, hornet); medications (penicillin, aspirin/NSAIDs, iodinated contrast, muscle relaxants); latex; and exercise-induced anaphylaxis. The physician reviews your specific trigger list at every refill visit and provides California-specific avoidance resources, including allergy-friendly restaurant guidance in major California cities.
      </p>
    ),
  },
  {
    id: 'ca-epipen-refills-online-faq-7',
    question: 'Does California Medi-Cal cover EpiPen or epinephrine auto-injectors?',
    answer: (
      <p>
        Medi-Cal covers epinephrine auto-injectors, including brand-name EpiPen and generic equivalents, with prior authorization or quantity limits under some managed care plans. California AB 1780 (2021) also requires health plans to cover prescribed epinephrine auto-injectors without step therapy requirements for documented anaphylaxis. However, TeleDirectMD is not enrolled as a Medi-Cal provider — Medi-Cal members can use the $79 self-pay rate or seek care from a Medi-Cal-enrolled allergist or primary care physician.
      </p>
    ),
  },
  {
    id: 'ca-epipen-refills-online-faq-8',
    question: 'When does anaphylaxis require going to the ER instead of refilling online?',
    answer: (
      <p>
        If you are currently experiencing an allergic reaction or anaphylaxis, do not call TeleDirectMD — use your epinephrine auto-injector immediately and call 911. Epinephrine refills are for patients with a documented anaphylaxis history who are not currently in a reaction. After any epinephrine use for anaphylaxis, hospital observation for at least 4–6 hours is required due to biphasic anaphylaxis risk, even if symptoms resolve. The TeleDirectMD refill service is for preparing your anaphylaxis emergency kit — not for treating active reactions.
      </p>
    ),
  },
  {
    id: 'ca-epipen-refills-online-faq-9',
    question: 'What should I do if my EpiPen is expired?',
    answer: (
      <p>
        An expired EpiPen may still retain some effectiveness and should be used in an anaphylaxis emergency if no current device is available — use it and call 911. However, expired devices lose potency over time and may not deliver the full dose needed to treat anaphylaxis. The physician reviews your auto-injector expiration date at every refill visit and typically authorizes a refill 2–3 months before expiration so you always have a current device. California pharmacies (CVS, Walgreens, Walmart, Rite Aid, Costco) stock epinephrine auto-injectors in most locations.
      </p>
    ),
  },
  {
    id: 'ca-epipen-refills-online-faq-10',
    question: 'Does California insurance cover epinephrine auto-injectors prescribed by TeleDirectMD?',
    answer: (
      <p>
        California Assembly Bill 1780 (2021) requires commercial health plans to cover prescribed epinephrine auto-injectors without step therapy requirements for patients with documented anaphylaxis. California AB 744 parity law requires commercial plans to reimburse telehealth prescriptions on the same basis as in-person prescriptions. Aetna commercial is in-network with TeleDirectMD in California effective April 30, 2026; UnitedHealthcare Commercial effective May 29, 2026. Verify your specific plan's prior authorization requirements before booking.
      </p>
    ),
  },
  {
    id: 'ca-epipen-refills-online-faq-11',
    question: 'Can TeleDirectMD prescribe epinephrine for a child in California?',
    answer: (
      <p>
        TeleDirectMD treats adults 18 years of age and older only. Epinephrine auto-injector prescribing for children under 18 — including EpiPen Jr 0.15 mg for children weighing 15–30 kg — requires a pediatrician or pediatric allergist. Parents of children with anaphylaxis history who need EpiPen Jr refills should consult their child's pediatrician or a pediatric allergist. California pediatric allergy resources are available through the AAAAI Find an Allergist directory at aaaai.org. Self pay for TeleDirectMD adult visits is $79.
      </p>
    ),
  },
];

const SCHEMAS = [{"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Anaphylaxis \u2014 Epinephrine Auto-Injector (EpiPen) Refills Online in California | TeleDirectMD", "url": "https://teledirectmd.com/ca/epipen-refills-online/", "description": "EpiPen (epinephrine auto-injector) refills online for California adults. Board-certified Family Medicine MD. AAAAI/ACAAI guideline-based. Self pay $79. Aetna in-network. 2-pack with emergency action plan. Same-day video visits.", "datePublished": "2026-05-20", "dateModified": "2026-05-20", "inLanguage": "en-US", "about": {"@type": "MedicalCondition", "name": "EpiPen Refills", "code": {"@type": "MedicalCode", "code": "T78.2XXA", "codingSystem": "ICD-10-CM"}}, "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient", "geographicArea": {"@type": "AdministrativeArea", "name": "California"}}, "reviewedBy": {"@type": "Physician", "@id": "https://teledirectmd.com/about/#physician-parth-bhavsar", "name": "Parth Bhavsar, MD", "identifier": {"@type": "PropertyValue", "propertyID": "NPI", "value": "1104323203"}, "medicalSpecialty": "Family Medicine", "hasCredential": [{"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Doctor of Medicine (MD)"}, {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Board Certification \u2014 American Board of Family Medicine"}], "licensedIn": "California", "worksFor": {"@type": "MedicalOrganization", "name": "TeleDirectMD", "url": "https://teledirectmd.com"}, "sameAs": ["https://npiregistry.cms.hhs.gov/provider-view/1104323203", "https://teledirectmd.com/about/"]}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#ca-epipen-refills-online-opening", "#ca-epipen-refills-online-opening p", ".tdmd-ca-epipen-refills-online__byline", "#ca-epipen-refills-online-faq"]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I refill my EpiPen online in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth. TeleDirectMD's California-licensed board-certified Family Medicine physician reviews your anaphylaxis trigger history, reaction severity documentation, avoidance strategies, and current auto-injector status before prescribing an epinephrine auto-injector 2-pack with an updated written emergency action plan. Self pay is $79; Aetna is in-network effective April 30, 2026."}}, {"@type": "Question", "name": "Why does TeleDirectMD prescribe a 2-pack of epinephrine auto-injectors?", "acceptedAnswer": {"@type": "Answer", "text": "AAAAI and ACAAI anaphylaxis practice parameters recommend prescribing epinephrine auto-injectors in 2-packs as the standard of care. A second dose may be needed in two situations: (1) biphasic anaphylaxis \u2014 symptoms return 1\u201372 hours after initial resolution without re-exposure, occurring in approximately 20% of anaphylaxis cases; and (2) incorrect administration of the first device. Both devices should be carried by the patient at all times \u2014 leaving one device at home is not recommended."}}, {"@type": "Question", "name": "What is included in the emergency action plan I receive with my EpiPen refill?", "acceptedAnswer": {"@type": "Answer", "text": "Every TeleDirectMD epinephrine refill visit includes a written emergency action plan containing: a list of your specific anaphylaxis triggers, how to recognize mild allergic reaction versus anaphylaxis, instructions to use epinephrine immediately at first sign of anaphylaxis (do not wait), correct injection technique (outer mid-thigh, hold 3 seconds, massage), instructions to call 911 immediately after using epinephrine regardless of symptom improvement, second-dose instructions, adjunctive antihistamine use (NOT a substitute), and allergist follow-up recommendation. The plan can be shared with schools, workplaces, and family members."}}, {"@type": "Question", "name": "What is the difference between EpiPen and generic epinephrine auto-injectors?", "acceptedAnswer": {"@type": "Answer", "text": "EpiPen (Pfizer) is the brand-name epinephrine auto-injector at 0.3 mg (adults) or 0.15 mg (pediatric). FDA-approved generics \u2014 including Adrenaclick, Symjepi, and generic epinephrine auto-injectors \u2014 contain the same 0.3 mg epinephrine dose and are considered therapeutically equivalent. The injection mechanism, shape, and activation steps differ between devices. The physician recommends practicing with a trainer device to ensure correct use during an emergency. Generic devices cost approximately $120\u2013$200 per 2-pack with GoodRx, compared to $650\u2013$750 list for brand EpiPen."}}, {"@type": "Question", "name": "Can an antihistamine like Benadryl treat anaphylaxis instead of epinephrine?", "acceptedAnswer": {"@type": "Answer", "text": "No. This is a critical safety point. Antihistamines (diphenhydramine/Benadryl, cetirizine/Zyrtec) treat only the histamine-mediated symptoms of allergic reactions \u2014 hives, itching, sneezing. They do NOT treat anaphylaxis-defining symptoms including airway swelling, bronchospasm, hypotension, or cardiovascular collapse. Using an antihistamine instead of epinephrine during anaphylaxis is dangerous and delays life-saving treatment. Epinephrine must always be used first; antihistamines are adjunctive only."}}, {"@type": "Question", "name": "How common is anaphylaxis in California?", "acceptedAnswer": {"@type": "Answer", "text": "Anaphylaxis accounts for approximately 30,000 emergency department visits and 1,500 deaths annually nationwide per CDC and AAAAI data. California's diverse food culture \u2014 including high use of shellfish, peanuts, tree nuts, and sesame in Asian, Mexican, and Middle Eastern cuisines \u2014 creates significant food anaphylaxis exposure. Insect venom anaphylaxis is the second most common trigger, particularly among agricultural workers in the Central Valley and outdoor recreation enthusiasts. The California Department of Public Health tracks anaphylaxis-related ER visits, which have increased approximately 3% annually over the past decade."}}, {"@type": "Question", "name": "What are the triggers I should avoid if I have a history of anaphylaxis?", "acceptedAnswer": {"@type": "Answer", "text": "Trigger avoidance is the cornerstone of anaphylaxis management. Common anaphylaxis triggers in California include: food allergens (peanut, tree nuts, shellfish, fish, sesame, milk, egg, wheat \u2014 the FDA major allergen list); insect venom (bee, wasp, yellow jacket, hornet); medications (penicillin, aspirin/NSAIDs, iodinated contrast, muscle relaxants); latex; and exercise-induced anaphylaxis. The physician reviews your specific trigger list at every refill visit and provides California-specific avoidance resources, including allergy-friendly restaurant guidance in major California cities."}}, {"@type": "Question", "name": "Does California Medi-Cal cover EpiPen or epinephrine auto-injectors?", "acceptedAnswer": {"@type": "Answer", "text": "Medi-Cal covers epinephrine auto-injectors, including brand-name EpiPen and generic equivalents, with prior authorization or quantity limits under some managed care plans. California AB 1780 (2021) also requires health plans to cover prescribed epinephrine auto-injectors without step therapy requirements for documented anaphylaxis. However, TeleDirectMD is not enrolled as a Medi-Cal provider \u2014 Medi-Cal members can use the $79 self-pay rate or seek care from a Medi-Cal-enrolled allergist or primary care physician."}}, {"@type": "Question", "name": "When does anaphylaxis require going to the ER instead of refilling online?", "acceptedAnswer": {"@type": "Answer", "text": "If you are currently experiencing an allergic reaction or anaphylaxis, do not call TeleDirectMD \u2014 use your epinephrine auto-injector immediately and call 911. Epinephrine refills are for patients with a documented anaphylaxis history who are not currently in a reaction. After any epinephrine use for anaphylaxis, hospital observation for at least 4\u20136 hours is required due to biphasic anaphylaxis risk, even if symptoms resolve. The TeleDirectMD refill service is for preparing your anaphylaxis emergency kit \u2014 not for treating active reactions."}}, {"@type": "Question", "name": "What should I do if my EpiPen is expired?", "acceptedAnswer": {"@type": "Answer", "text": "An expired EpiPen may still retain some effectiveness and should be used in an anaphylaxis emergency if no current device is available \u2014 use it and call 911. However, expired devices lose potency over time and may not deliver the full dose needed to treat anaphylaxis. The physician reviews your auto-injector expiration date at every refill visit and typically authorizes a refill 2\u20133 months before expiration so you always have a current device. California pharmacies (CVS, Walgreens, Walmart, Rite Aid, Costco) stock epinephrine auto-injectors in most locations."}}, {"@type": "Question", "name": "Does California insurance cover epinephrine auto-injectors prescribed by TeleDirectMD?", "acceptedAnswer": {"@type": "Answer", "text": "California Assembly Bill 1780 (2021) requires commercial health plans to cover prescribed epinephrine auto-injectors without step therapy requirements for patients with documented anaphylaxis. California AB 744 parity law requires commercial plans to reimburse telehealth prescriptions on the same basis as in-person prescriptions. Aetna commercial is in-network with TeleDirectMD in California effective April 30, 2026; UnitedHealthcare Commercial effective May 29, 2026. Verify your specific plan's prior authorization requirements before booking."}}, {"@type": "Question", "name": "Can TeleDirectMD prescribe epinephrine for a child in California?", "acceptedAnswer": {"@type": "Answer", "text": "TeleDirectMD treats adults 18 years of age and older only. Epinephrine auto-injector prescribing for children under 18 \u2014 including EpiPen Jr 0.15 mg for children weighing 15\u201330 kg \u2014 requires a pediatrician or pediatric allergist. Parents of children with anaphylaxis history who need EpiPen Jr refills should consult their child's pediatrician or a pediatric allergist. California pediatric allergy resources are available through the AAAAI Find an Allergist directory at aaaai.org. Self pay for TeleDirectMD adult visits is $79."}}]}, {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Get Anaphylaxis \u2014 Epinephrine Auto-Injector (EpiPen) Refills Online in California", "description": "Three steps to receive anaphylaxis \u2014 epinephrine auto-injector (epipen) refills evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.", "totalTime": "PT30M", "estimatedCost": {"@type": "MonetaryAmount", "currency": "USD", "value": "79"}, "step": [{"@type": "HowToStep", "position": 1, "name": "Book your video visit", "text": "Visit teledirectmd.com and select California EpiPen Refills treatment. No referral needed. Self pay $79. Many visits available same day.", "url": "https://teledirectmd.com/book-online"}, {"@type": "HowToStep", "position": 2, "name": "See a California-licensed MD by secure video", "text": "Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your symptoms, history, and red-flag screening. Consent per CA B&P Section 2290.5 confirmed.", "url": "https://teledirectmd.com/ca/epipen-refills-online/"}, {"@type": "HowToStep", "position": 3, "name": "Receive your treatment plan and e-prescription", "text": "If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit.", "url": "https://teledirectmd.com/ca/epipen-refills-online/"}]}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "TeleDirectMD", "item": "https://teledirectmd.com"}, {"@type": "ListItem", "position": 2, "name": "California", "item": "https://teledirectmd.com/ca/"}, {"@type": "ListItem", "position": 3, "name": "Anaphylaxis \u2014 Epinephrine Auto-Injector (EpiPen) Refills Online in California", "item": "https://teledirectmd.com/ca/epipen-refills-online/"}]}];

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

export default function CaEpipenRefillsOnline() {
  const pid = 'ca-epipen-refills-online';

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
            <span aria-current="page">Anaphylaxis — Epinephrine Auto-Injector (EpiPen) Refills Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">EpiPen Refills Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · AAAAI/ACAAI 2023 anaphylaxis guideline-based EpiPen refills · CA B&P §2290.5 compliant.
                </p>
                <p>
                  EpiPen Refills is a condition commonly evaluated and, when appropriate, treated via telehealth. TeleDirectMD uses a safety-first approach, screening for red-flag symptoms that require in-person or emergency care before determining whether treatment by video visit is appropriate. This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas.
                </p>

                {/* v3: Inline opener paragraph — replaces CitableSummaryBlock */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can I get anaphylaxis — epinephrine auto-injector (epipen) refills online in California?</strong> Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and are held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. Self pay is $79. <a href="/insurance/">Aetna is in-network</a> as of April 30, 2026; UnitedHealthcare Commercial approved May 29, 2026.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> T78.2XXA (Anaphylaxis — for active anaphylaxis); relevant allergy/anaphylaxis history ICD codes used per clinical context</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only EpiPen Refills Care in California</h2>
                  <ul>
                    <li>Fast evaluation for anaphylaxis — epinephrine auto-injector (epipen) refills symptoms</li>
                    <li>Red-flag screening for serious complications requiring in-person care</li>
                    <li>Guideline-based treatment per AAAAI</li>
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
            <h2>Anaphylaxis — Epinephrine Auto-Injector (EpiPen) Refills Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these apply to you:</strong></p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Documented history of anaphylaxis or severe allergic reaction — seeking auto-injector refill</li>
                  <li>Current auto-injector expiring within 3 months or already expired</li>
                  <li>Seeking updated emergency action plan with trigger review</li>
                  <li>Review of avoidance strategies and anaphylaxis recognition</li>
                  <li>Established patient not currently in a reaction</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&#10007; Seek In-Person or Emergency Care If</h3>
                <ul>
                  <li>Active anaphylaxis — use your epinephrine auto-injector immediately and call 911 — do not call TeleDirectMD</li>
                  <li>Any epinephrine use for anaphylaxis — go to the ER for 4–6 hour biphasic anaphylaxis observation even if symptoms resolve</li>
                  <li>Biphasic anaphylaxis — symptoms return 1–72 hours after initial resolution — go to the ER</li>
                  <li>New onset anaphylaxis without prior allergy workup — allergist evaluation required</li>
                  <li>Anaphylaxis with cardiovascular collapse (hypotension, loss of consciousness) — call 911</li>
                  <li>Beta-blocker use with anaphylaxis history — epinephrine may be less effective; glucagon may be needed — ER evaluation required</li>
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
            <h2>California Telehealth Law and Your Anaphylaxis — Epinephrine Auto-Injector (EpiPen) Refills Visit</h2>

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

            <h3>Are anaphylaxis — epinephrine auto-injector (epipen) refills medications controlled substances under California law?</h3>
            <p>
              Epinephrine auto-injectors (EpiPen, Auvi-Q, generic epinephrine) are not controlled substances. They can be prescribed via California telehealth and transmitted electronically to any California pharmacy under Assembly Bill 2789. Every refill includes a written emergency action plan. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Anaphylaxis — Epinephrine Auto-Injector (EpiPen) Refills Works in California</h2>
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
            <h2>How Common Is EpiPen Refills in California?</h2>
            <p>
              Anaphylaxis accounts for approximately 30,000 emergency department visits and 1,500 deaths annually in the United States per CDC and AAAAI data. California's diverse food culture — including heavy use of shellfish, peanuts, tree nuts, and sesame in Asian, Mexican, and Middle Eastern cuisines — creates significant food anaphylaxis exposure. The California Department of Public Health (CDPH) tracks anaphylaxis-related ER visits, which have increased approximately 3% annually over the past decade. California AB 1780 (2021) requires commercial health plans to cover prescribed epinephrine auto-injectors without step therapy requirements for documented anaphylaxis. — <a href="https://www.cdc.gov/niosh/topics/animalsafetyandhealth/anaphylaxis.html" rel="noopener" target="_blank">CDC — Anaphylaxis and Severe Allergic Reactions</a>.
            </p>
            <p>
              Clinical guidance for anaphylaxis — epinephrine auto-injector (epipen) refills is provided by <a href="https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/anaphylaxis" rel="noopener" target="_blank">AAAAI</a> through the AAAAI/ACAAI Joint Task Force Anaphylaxis Practice Parameters 2023 Update. TeleDirectMD follows these guidelines on every patient visit.
            </p>
            <h3>What causes epipen refills and who is most at risk in California?</h3>
            <p>
              EpiPen Refills affects California adults across all demographics, though certain populations face higher risk based on the specific condition. The physician reviews your individual risk factors at each visit. Telehealth is appropriate for adults 18 and older with mild to moderate presentations who do not have red-flag symptoms requiring immediate in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Anaphylaxis — Epinephrine Auto-Injector (EpiPen) Refills Cost &amp; Insurance in California</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical EpiPen Refills cost comparison">
                <h3>Typical EpiPen Refills Visit Cost in California</h3>
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
            <h2>Anaphylaxis — Epinephrine Auto-Injector (EpiPen) Refills Medication Options and Costs in California</h2>
            <p>
              Medications for anaphylaxis — epinephrine auto-injector (epipen) refills are selected based on current guidelines from <a href="https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/anaphylaxis" rel="noopener" target="_blank">AAAAI</a>, patient history, allergies, and relevant contraindications assessed at the visit. GoodRx-verified pricing is shown below.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Anaphylaxis — Epinephrine Auto-Injector (EpiPen) Refills medication options and GoodRx prices">
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
                    <td><strong>EpiPen 0.3 mg auto-injector — 2-pack (brand Pfizer)</strong> · First-line</td>
                    <td>0.3 mg IM into outer mid-thigh at first sign of anaphylaxis; second dose if needed in 5–15 min; call 911 immediately after use</td>
                    <td><a href="https://www.goodrx.com/epipen" target="_blank" rel="noopener">~$140–$200 per 2-pack with GoodRx coupon (list price ~$650–$750)</a></td>
                    <td>2-pack is the AAAAI/ACAAI standard of care — carry both at all times. Pfizer savings programs available. Every refill includes updated emergency action plan.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Generic epinephrine auto-injector 0.3 mg (Adrenaclick, Symjepi) — 2-pack</strong> · First-line</td>
                    <td>0.3 mg IM into outer mid-thigh; same dosing as EpiPen</td>
                    <td><a href="https://www.goodrx.com/epinephrine-auto-injector" target="_blank" rel="noopener">~$120–$200 per 2-pack GoodRx</a></td>
                    <td>FDA-approved generic; same 0.3 mg epinephrine dose. Injection mechanism differs from EpiPen — physician recommends practicing with trainer device before travel.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Auvi-Q (epinephrine) 0.3 mg auto-injector — 2-pack</strong> · First-line</td>
                    <td>0.3 mg IM; device provides audio injection instructions — useful for first-time users</td>
                    <td><a href="https://www.goodrx.com/auvi-q" target="_blank" rel="noopener">~$200–$400 per 2-pack GoodRx; manufacturer access program available</a></td>
                    <td>Compact design with built-in audio guidance. Manufacturer patient assistance program provides free Auvi-Q to eligible uninsured patients. Not available as generic.</td>
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
            <p>For most adults with mild to moderate anaphylaxis — epinephrine auto-injector (epipen) refills without red-flag symptoms, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below to determine the right care pathway for you.</p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Documented history of anaphylaxis or severe allergic reaction — seeking auto-injector refill</li>
                  <li>Current auto-injector expiring within 3 months or already expired</li>
                  <li>Seeking updated emergency action plan with trigger review</li>
                  <li>Review of avoidance strategies and anaphylaxis recognition</li>
                  <li>Established patient not currently in a reaction</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&rarr; Use in-person care if</h3>
                <ul>
                  <li>Active anaphylaxis — use your epinephrine auto-injector immediately and call 911 — do not call TeleDirectMD</li>
                  <li>Any epinephrine use for anaphylaxis — go to the ER for 4–6 hour biphasic anaphylaxis observation even if symptoms resolve</li>
                  <li>Biphasic anaphylaxis — symptoms return 1–72 hours after initial resolution — go to the ER</li>
                  <li>New onset anaphylaxis without prior allergy workup — allergist evaluation required</li>
                  <li>Anaphylaxis with cardiovascular collapse (hypotension, loss of consciousness) — call 911</li>
                  <li>Beta-blocker use with anaphylaxis history — epinephrine may be less effective; glucagon may be needed — ER evaluation required</li>
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
              sectionTitle="Frequently Asked Questions — Anaphylaxis — Epinephrine Auto-Injector (EpiPen) Refills in California"
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
              <a key="asthma-refills-online" className="tdmd-ca-uti__sibling" href="/ca/asthma-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Asthma Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Allergic asthma frequently co-occurs with anaphylaxis risk — similar immune mechanism.</span>
                </a>
              <a key="seasonal-allergies-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/seasonal-allergies-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Seasonal Allergies in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Allergic disease spectrum — anaphylaxis patients often have multiple allergic conditions.</span>
                </a>
              <a key="hypertension-refills-online" className="tdmd-ca-uti__sibling" href="/ca/hypertension-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Hypertension Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Beta-blockers reduce epinephrine efficacy in anaphylaxis — drug interaction counseling.</span>
                </a>
              <a key="migraine-refills-online" className="tdmd-ca-uti__sibling" href="/ca/migraine-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Migraine Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Propranolol (migraine preventive) can blunt epinephrine response in anaphylaxis.</span>
                </a>
              <a key="hair-loss-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/hair-loss-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Hair Loss Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Finasteride hypersensitivity (rare) — allergy documentation context.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ──────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/epipen-refills-online/">EpiPen Refills national condition page</a>. Use the links below to explore insurance details, book a visit, or review other conditions.</p>
            <div className="tdmd-ca-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/epipen-refills-online/">National EpiPen Refills page</a>
              <a href="/health-guides/">EpiPen Refills health guides</a>
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
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5 — Telehealth Advancement Act</a></li>
              <li><a href="https://www.mbc.ca.gov/Licensees/Telehealth/" rel="noopener" target="_blank">Medical Board of California — Telehealth Resources</a></li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 — Telehealth Parity (AB 744)</a></li>
              <li><a href="https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/anaphylaxis" rel="noopener" target="_blank">AAAAI — Anaphylaxis Practice Parameters 2023</a></li>
              <li><a href="https://acaai.org/allergies/anaphylaxis/" rel="noopener" target="_blank">ACAAI — Anaphylaxis Overview</a></li>
              <li><a href="https://www.cdc.gov/niosh/topics/animalsafetyandhealth/anaphylaxis.html" rel="noopener" target="_blank">CDC — Anaphylaxis and Severe Allergic Reactions</a></li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202120220AB1780" rel="noopener" target="_blank">California AB 1780 (2021) — Epinephrine Auto-Injector Coverage</a></li>
              <li><a href="https://www.dhcs.ca.gov/provgovpart/Pages/Telehealth.aspx" rel="noopener" target="_blank">California DHCS — Telehealth FAQ</a></li>
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

        <WhatDoesThisCostBlock conditionSlug="epipen-refills-online" conditionName="Anaphylaxis — Epinephrine Auto-Injector (EpiPen) Refills" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="epipen-refills-online" />
        <CommonSymptomsBlock conditionSlug="epipen-refills-online" conditionName="Anaphylaxis — Epinephrine Auto-Injector (EpiPen) Refills" />
      </div>
    </>
  );
}
