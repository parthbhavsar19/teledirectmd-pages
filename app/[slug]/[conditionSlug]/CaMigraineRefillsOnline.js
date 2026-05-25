/**
 * CaMigraineRefillsOnline.js — production California × Migraine Refills condition page (v3)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'migraine-refills-online'.
 *
 * Matches v3 CA UTI template: inline opener paragraph (no CitableSummaryBlock),
 * hero, CA regulatory block (exact reuse), epidemiology block, clinical content,
 * vertical bar chart cost section, CA payor table, medications, dual-path block,
 * FAQ accordion (12 Q/A), JSON-LD schemas (MedicalWebPage + FAQPage + Physician
 * + HowTo + BreadcrumbList + SpeakableSpecification — NEVER QAPage).
 *
 * Authority: AHS
 * Guideline: AAN Guideline for the Prevention of Episodic Migraine + American Headache Society Evidence-Based Guidelines
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

const PAGE_URL = 'https://teledirectmd.com/ca/migraine-refills-online/';
const PAGE_TITLE = 'Migraine (Refills for Established Patients) Online in California | TeleDirectMD';
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
    id: 'ca-migraine-refills-online-faq-0',
    question: 'Can I refill my migraine medications online in California?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth. TeleDirectMD's California-licensed board-certified Family Medicine physician reviews your headache frequency, MIDAS or HIT-6 disability score, abortive medication response history, and medication overuse pattern before authorizing refills for established migraine. Triptans, gepants, antiemetics, and most preventive agents are in scope. Self pay is $79; Aetna is in-network effective April 30, 2026.
      </p>
    ),
  },
  {
    id: 'ca-migraine-refills-online-faq-1',
    question: 'What migraine medications can TeleDirectMD refill in California?',
    answer: (
      <p>
        TeleDirectMD refills established migraine abortive medications including triptans (sumatriptan, rizatriptan, eletriptan, naratriptan, zolmitriptan, almotriptan) and gepants (ubrogepant, rimegepant), antiemetics (metoclopramide, ondansetron), and preventive agents including beta-blockers (propranolol, metoprolol), tricyclic antidepressants (amitriptyline), antiepileptics (topiramate), SNRIs (venlafaxine), and CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab) for patients already on established therapy.
      </p>
    ),
  },
  {
    id: 'ca-migraine-refills-online-faq-2',
    question: 'What is medication overuse headache (MOH) and how does it affect my refill?',
    answer: (
      <p>
        Medication overuse headache (MOH), also called rebound headache, occurs when pain-relieving medications are used too frequently — triptans or ergotamines on ≥10 days/month, analgesics on ≥15 days/month — for more than 3 months. MOH transforms episodic migraine into chronic daily headache. The TeleDirectMD physician reviews your rescue medication use frequency at every visit. If MOH is suspected, the physician will discuss a withdrawal and prevention protocol rather than simply refilling high-frequency abortive medications.
      </p>
    ),
  },
  {
    id: 'ca-migraine-refills-online-faq-3',
    question: 'When should migraine require emergency care instead of TeleDirectMD?',
    answer: (
      <p>
        Seek emergency care immediately for: thunderclap headache (worst headache of your life, sudden onset), headache with fever and neck stiffness (possible meningitis), headache with new focal neurologic deficits (weakness, vision loss, speech difficulty), headache after head trauma, or new headache in adults over 50. Severe status migrainosus lasting more than 72 hours also warrants urgent evaluation. These red-flag headaches require imaging or lumbar puncture that cannot be evaluated by video visit.
      </p>
    ),
  },
  {
    id: 'ca-migraine-refills-online-faq-4',
    question: 'What is the difference between abortive and preventive migraine therapy?',
    answer: (
      <p>
        Abortive (acute) therapy treats an active migraine attack — triptans, gepants, NSAIDs, and antiemetics taken at onset of headache. Preventive (prophylactic) therapy is taken daily to reduce attack frequency, severity, and duration. Preventive therapy is indicated when attacks occur ≥4 days/month with disability, ≥8 days/month regardless of disability, or when acute medications are failing or overused. The AAN and American Headache Society recommend preventive therapy for these patients.
      </p>
    ),
  },
  {
    id: 'ca-migraine-refills-online-faq-5',
    question: 'How much do triptan medications cost in California with GoodRx?',
    answer: (
      <p>
        Generic triptan pricing with GoodRx coupons at California pharmacies (May 2026): generic sumatriptan 100 mg (9 tablets) approximately $20–$50; generic rizatriptan 10 mg (9 tablets) approximately $25–$60; generic eletriptan 40 mg (6 tablets) approximately $30–$80; generic naratriptan 2.5 mg (9 tablets) approximately $20–$40. New CGRP antagonist gepants (ubrogepant, rimegepant) remain expensive at $700–$1,100 for a 10-tablet supply — manufacturer savings programs and prior authorization assistance are available. Prescription cost is separate from the $79 TeleDirectMD visit fee.
      </p>
    ),
  },
  {
    id: 'ca-migraine-refills-online-faq-6',
    question: 'What preventive medications are available for migraine in California?',
    answer: (
      <p>
        Evidence-based preventive options per AAN Level A/B evidence include: propranolol ER 60–240 mg/day (Level A — also useful for comorbid hypertension), topiramate 25–100 mg BID (Level A — cognitive side effects; kidney stone risk in California's relatively dehydrated population), amitriptyline 10–75 mg at bedtime (Level B — also treats insomnia), valproate 500–1500 mg/day (Level A — teratogenic, avoid in women of childbearing potential), and venlafaxine 75–150 mg/day (Level B). CGRP monoclonal antibodies are Level A per AHS 2022 and represent first-line preventive therapy for episodic migraine with frequent attacks.
      </p>
    ),
  },
  {
    id: 'ca-migraine-refills-online-faq-7',
    question: 'Does California telehealth law allow migraine prescriptions without an in-person visit?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 does not require a prior in-person visit for telehealth prescribing of non-controlled medications. Triptans, gepants, antiemetics, and migraine preventives are not controlled substances and can be prescribed via a California video visit. The Medical Board of California holds telehealth physicians to the same standard of care as in-person physicians — which TeleDirectMD satisfies by conducting a thorough headache history and red-flag screening at every visit.
      </p>
    ),
  },
  {
    id: 'ca-migraine-refills-online-faq-8',
    question: 'Are CGRP monoclonal antibodies (Aimovig, Ajovy, Emgality) available through TeleDirectMD?',
    answer: (
      <p>
        TeleDirectMD can refill established CGRP monoclonal antibody therapy (erenumab/Aimovig, fremanezumab/Ajovy, galcanezumab/Emgality) for patients already on a stable regimen with documented response. These agents require prior authorization from most California health plans. New starts for CGRP mAbs — particularly when several other preventives have not yet been tried — may benefit from neurologist or headache specialist consultation to document step therapy requirements.
      </p>
    ),
  },
  {
    id: 'ca-migraine-refills-online-faq-9',
    question: 'What is TeleDirectMD\'s approach to triptan prescribing in California?',
    answer: (
      <p>
        The physician reviews triptan suitability at every visit, including: cardiovascular risk factors (triptans are contraindicated in uncontrolled hypertension, known coronary artery disease, stroke history, hemiplegic migraine, or basilar migraine), medication overuse pattern, triptan response history (which triptan formulation works best), and concomitant serotonergic medications (serotonin syndrome risk). Gepants (ubrogepant, rimegepant) are an alternative for patients with cardiovascular contraindications to triptans.
      </p>
    ),
  },
  {
    id: 'ca-migraine-refills-online-faq-10',
    question: 'Will California insurance plans cover my migraine refill visit?',
    answer: (
      <p>
        California Assembly Bill 744 (2019) requires commercial health plans to reimburse telehealth visits on the same basis as in-person visits. Aetna commercial plans are active in California as of April 30, 2026; UnitedHealthcare Commercial is approved effective May 29, 2026. Anthem Blue Cross and Cigna are pending. Prior authorization for CGRP mAbs may require additional documentation beyond the telehealth visit — the physician assists with prior auth documentation.
      </p>
    ),
  },
  {
    id: 'ca-migraine-refills-online-faq-11',
    question: 'What should I expect at a migraine refill video visit with TeleDirectMD?',
    answer: (
      <p>
        The physician reviews: headache frequency (days/month), severity, duration, associated symptoms, disability impact (MIDAS or HIT-6 questionnaire), current abortive medication use frequency and response, preventive medication adherence and side effects, red-flag symptom screening, and any new neurological symptoms since the last visit. Based on this review, the physician authorizes refills, considers step-up or step-down of therapy, and provides written follow-up instructions including when to seek emergency care. Self pay is $79; Aetna is in-network.
      </p>
    ),
  },
];

const SCHEMAS = [{"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Migraine (Refills for Established Patients) Online in California | TeleDirectMD", "url": "https://teledirectmd.com/ca/migraine-refills-online/", "description": "Migraine medication refills online for California adults. Board-certified Family Medicine MD. AAN + AHS guideline-based. Self pay $79. Aetna in-network. Triptans, gepants, preventives. Same-day video visits.", "datePublished": "2026-05-20", "dateModified": "2026-05-20", "inLanguage": "en-US", "about": {"@type": "MedicalCondition", "name": "Migraine Refills", "code": {"@type": "MedicalCode", "code": "G43.909", "codingSystem": "ICD-10-CM"}}, "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient", "geographicArea": {"@type": "AdministrativeArea", "name": "California"}}, "reviewedBy": {"@type": "Physician", "@id": "https://teledirectmd.com/about/#physician-parth-bhavsar", "name": "Parth Bhavsar, MD", "identifier": {"@type": "PropertyValue", "propertyID": "NPI", "value": "1104323203"}, "medicalSpecialty": "Family Medicine", "hasCredential": [{"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Doctor of Medicine (MD)"}, {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Board Certification \u2014 American Board of Family Medicine"}], "licensedIn": "California", "worksFor": {"@type": "MedicalOrganization", "name": "TeleDirectMD", "url": "https://teledirectmd.com"}, "sameAs": ["https://npiregistry.cms.hhs.gov/provider-view/1104323203", "https://teledirectmd.com/about/"]}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#ca-migraine-refills-online-opening", "#ca-migraine-refills-online-opening p", ".tdmd-ca-migraine-refills-online__byline", "#ca-migraine-refills-online-faq"]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I refill my migraine medications online in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth. TeleDirectMD's California-licensed board-certified Family Medicine physician reviews your headache frequency, MIDAS or HIT-6 disability score, abortive medication response history, and medication overuse pattern before authorizing refills for established migraine. Triptans, gepants, antiemetics, and most preventive agents are in scope. Self pay is $79; Aetna is in-network effective April 30, 2026."}}, {"@type": "Question", "name": "What migraine medications can TeleDirectMD refill in California?", "acceptedAnswer": {"@type": "Answer", "text": "TeleDirectMD refills established migraine abortive medications including triptans (sumatriptan, rizatriptan, eletriptan, naratriptan, zolmitriptan, almotriptan) and gepants (ubrogepant, rimegepant), antiemetics (metoclopramide, ondansetron), and preventive agents including beta-blockers (propranolol, metoprolol), tricyclic antidepressants (amitriptyline), antiepileptics (topiramate), SNRIs (venlafaxine), and CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab) for patients already on established therapy."}}, {"@type": "Question", "name": "What is medication overuse headache (MOH) and how does it affect my refill?", "acceptedAnswer": {"@type": "Answer", "text": "Medication overuse headache (MOH), also called rebound headache, occurs when pain-relieving medications are used too frequently \u2014 triptans or ergotamines on \u226510 days/month, analgesics on \u226515 days/month \u2014 for more than 3 months. MOH transforms episodic migraine into chronic daily headache. The TeleDirectMD physician reviews your rescue medication use frequency at every visit. If MOH is suspected, the physician will discuss a withdrawal and prevention protocol rather than simply refilling high-frequency abortive medications."}}, {"@type": "Question", "name": "When should migraine require emergency care instead of TeleDirectMD?", "acceptedAnswer": {"@type": "Answer", "text": "Seek emergency care immediately for: thunderclap headache (worst headache of your life, sudden onset), headache with fever and neck stiffness (possible meningitis), headache with new focal neurologic deficits (weakness, vision loss, speech difficulty), headache after head trauma, or new headache in adults over 50. Severe status migrainosus lasting more than 72 hours also warrants urgent evaluation. These red-flag headaches require imaging or lumbar puncture that cannot be evaluated by video visit."}}, {"@type": "Question", "name": "What is the difference between abortive and preventive migraine therapy?", "acceptedAnswer": {"@type": "Answer", "text": "Abortive (acute) therapy treats an active migraine attack \u2014 triptans, gepants, NSAIDs, and antiemetics taken at onset of headache. Preventive (prophylactic) therapy is taken daily to reduce attack frequency, severity, and duration. Preventive therapy is indicated when attacks occur \u22654 days/month with disability, \u22658 days/month regardless of disability, or when acute medications are failing or overused. The AAN and American Headache Society recommend preventive therapy for these patients."}}, {"@type": "Question", "name": "How much do triptan medications cost in California with GoodRx?", "acceptedAnswer": {"@type": "Answer", "text": "Generic triptan pricing with GoodRx coupons at California pharmacies (May 2026): generic sumatriptan 100 mg (9 tablets) approximately $20\u2013$50; generic rizatriptan 10 mg (9 tablets) approximately $25\u2013$60; generic eletriptan 40 mg (6 tablets) approximately $30\u2013$80; generic naratriptan 2.5 mg (9 tablets) approximately $20\u2013$40. New CGRP antagonist gepants (ubrogepant, rimegepant) remain expensive at $700\u2013$1,100 for a 10-tablet supply \u2014 manufacturer savings programs and prior authorization assistance are available. Prescription cost is separate from the $79 TeleDirectMD visit fee."}}, {"@type": "Question", "name": "What preventive medications are available for migraine in California?", "acceptedAnswer": {"@type": "Answer", "text": "Evidence-based preventive options per AAN Level A/B evidence include: propranolol ER 60\u2013240 mg/day (Level A \u2014 also useful for comorbid hypertension), topiramate 25\u2013100 mg BID (Level A \u2014 cognitive side effects; kidney stone risk in California's relatively dehydrated population), amitriptyline 10\u201375 mg at bedtime (Level B \u2014 also treats insomnia), valproate 500\u20131500 mg/day (Level A \u2014 teratogenic, avoid in women of childbearing potential), and venlafaxine 75\u2013150 mg/day (Level B). CGRP monoclonal antibodies are Level A per AHS 2022 and represent first-line preventive therapy for episodic migraine with frequent attacks."}}, {"@type": "Question", "name": "Does California telehealth law allow migraine prescriptions without an in-person visit?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 does not require a prior in-person visit for telehealth prescribing of non-controlled medications. Triptans, gepants, antiemetics, and migraine preventives are not controlled substances and can be prescribed via a California video visit. The Medical Board of California holds telehealth physicians to the same standard of care as in-person physicians \u2014 which TeleDirectMD satisfies by conducting a thorough headache history and red-flag screening at every visit."}}, {"@type": "Question", "name": "Are CGRP monoclonal antibodies (Aimovig, Ajovy, Emgality) available through TeleDirectMD?", "acceptedAnswer": {"@type": "Answer", "text": "TeleDirectMD can refill established CGRP monoclonal antibody therapy (erenumab/Aimovig, fremanezumab/Ajovy, galcanezumab/Emgality) for patients already on a stable regimen with documented response. These agents require prior authorization from most California health plans. New starts for CGRP mAbs \u2014 particularly when several other preventives have not yet been tried \u2014 may benefit from neurologist or headache specialist consultation to document step therapy requirements."}}, {"@type": "Question", "name": "What is TeleDirectMD's approach to triptan prescribing in California?", "acceptedAnswer": {"@type": "Answer", "text": "The physician reviews triptan suitability at every visit, including: cardiovascular risk factors (triptans are contraindicated in uncontrolled hypertension, known coronary artery disease, stroke history, hemiplegic migraine, or basilar migraine), medication overuse pattern, triptan response history (which triptan formulation works best), and concomitant serotonergic medications (serotonin syndrome risk). Gepants (ubrogepant, rimegepant) are an alternative for patients with cardiovascular contraindications to triptans."}}, {"@type": "Question", "name": "Will California insurance plans cover my migraine refill visit?", "acceptedAnswer": {"@type": "Answer", "text": "California Assembly Bill 744 (2019) requires commercial health plans to reimburse telehealth visits on the same basis as in-person visits. Aetna commercial plans are active in California as of April 30, 2026; UnitedHealthcare Commercial is approved effective May 29, 2026. Anthem Blue Cross and Cigna are pending. Prior authorization for CGRP mAbs may require additional documentation beyond the telehealth visit \u2014 the physician assists with prior auth documentation."}}, {"@type": "Question", "name": "What should I expect at a migraine refill video visit with TeleDirectMD?", "acceptedAnswer": {"@type": "Answer", "text": "The physician reviews: headache frequency (days/month), severity, duration, associated symptoms, disability impact (MIDAS or HIT-6 questionnaire), current abortive medication use frequency and response, preventive medication adherence and side effects, red-flag symptom screening, and any new neurological symptoms since the last visit. Based on this review, the physician authorizes refills, considers step-up or step-down of therapy, and provides written follow-up instructions including when to seek emergency care. Self pay is $79; Aetna is in-network."}}]}, {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Get Migraine (Refills for Established Patients) Online in California", "description": "Three steps to receive migraine (refills for established patients) evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.", "totalTime": "PT30M", "estimatedCost": {"@type": "MonetaryAmount", "currency": "USD", "value": "79"}, "step": [{"@type": "HowToStep", "position": 1, "name": "Book your video visit", "text": "Visit teledirectmd.com and select California Migraine Refills treatment. No referral needed. Self pay $79. Many visits available same day.", "url": "https://teledirectmd.com/book-online"}, {"@type": "HowToStep", "position": 2, "name": "See a California-licensed MD by secure video", "text": "Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your symptoms, history, and red-flag screening. Consent per CA B&P Section 2290.5 confirmed.", "url": "https://teledirectmd.com/ca/migraine-refills-online/"}, {"@type": "HowToStep", "position": 3, "name": "Receive your treatment plan and e-prescription", "text": "If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit.", "url": "https://teledirectmd.com/ca/migraine-refills-online/"}]}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "TeleDirectMD", "item": "https://teledirectmd.com"}, {"@type": "ListItem", "position": 2, "name": "California", "item": "https://teledirectmd.com/ca/"}, {"@type": "ListItem", "position": 3, "name": "Migraine (Refills for Established Patients) Online in California", "item": "https://teledirectmd.com/ca/migraine-refills-online/"}]}];

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

export default function CaMigraineRefillsOnline() {
  const pid = 'ca-migraine-refills-online';

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
            <span aria-current="page">Migraine (Refills for Established Patients) Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Migraine Refills Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · AAN + American Headache Society guideline-based migraine refills · CA B&P §2290.5 compliant.
                </p>
                <p>
                  Migraine Refills is a condition commonly evaluated and, when appropriate, treated via telehealth. TeleDirectMD uses a safety-first approach, screening for red-flag symptoms that require in-person or emergency care before determining whether treatment by video visit is appropriate. This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas.
                </p>

                {/* v3: Inline opener paragraph — replaces CitableSummaryBlock */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can I get migraine (refills for established patients) online in California?</strong> Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and are held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. Self pay is $79. <a href="/insurance/">Aetna is in-network</a> as of April 30, 2026; UnitedHealthcare Commercial approved May 29, 2026.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> G43.909 (Migraine, unspecified, without mention of status migrainosus — final coding per clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Migraine Refills Care in California</h2>
                  <ul>
                    <li>Fast evaluation for migraine (refills for established patients) symptoms</li>
                    <li>Red-flag screening for serious complications requiring in-person care</li>
                    <li>Guideline-based treatment per AHS</li>
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
            <h2>Migraine (Refills for Established Patients) Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these apply to you:</strong></p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Established migraine with prior diagnosis — seeking refills of established abortive or preventive therapy</li>
                  <li>Stable on current regimen — no new red-flag headache symptoms</li>
                  <li>MIDAS or HIT-6 assessment appropriate; history reviewable by video</li>
                  <li>Seeking triptan, gepant, antiemetic, or migraine preventive refill</li>
                  <li>Monitoring of preventive therapy response, side effects, or dose adjustment</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&#10007; Seek In-Person or Emergency Care If</h3>
                <ul>
                  <li>Thunderclap headache (worst headache of your life, sudden onset) — possible subarachnoid hemorrhage — call 911 immediately</li>
                  <li>Headache with fever and neck stiffness — possible meningitis — go to the ER</li>
                  <li>Headache with new focal neurologic deficits (weakness, vision loss, speech difficulty) — possible stroke — call 911</li>
                  <li>Headache after head trauma — possible intracranial hemorrhage — go to the ER</li>
                  <li>New headache in adults over 50 without prior migraine history — possible space-occupying lesion — in-person evaluation</li>
                  <li>Status migrainosus lasting more than 72 hours — go to the ER for IV treatment</li>
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
            <h2>California Telehealth Law and Your Migraine (Refills for Established Patients) Visit</h2>

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

            <h3>Are migraine (refills for established patients) medications controlled substances under California law?</h3>
            <p>
              Triptans, gepants, antiemetics, and migraine preventives (propranolol, topiramate, amitriptyline, venlafaxine, CGRP monoclonal antibodies) are not controlled substances. They can be prescribed via California telehealth and transmitted electronically to any California pharmacy under Assembly Bill 2789. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Migraine (Refills for Established Patients) Works in California</h2>
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
            <h2>How Common Is Migraine Refills in California?</h2>
            <p>
              Migraine affects approximately 12% of the U.S. population — approximately 39 million Americans — with California estimated at approximately 3.3 million migraine sufferers. Women experience migraine at nearly 3× the rate of men (18% vs. 6%), per American Migraine Foundation and AAN data. Migraine is the second leading cause of disability globally per the Global Burden of Disease study 2019. The American Migraine Foundation estimates that migraine costs more than $36 billion annually in the U.S. through healthcare costs and lost productivity. — <a href="https://americanmigrainefoundation.org/resource-library/understanding-migraine/migraine-statistics/" rel="noopener" target="_blank">American Migraine Foundation — Migraine Statistics</a>.
            </p>
            <p>
              Clinical guidance for migraine (refills for established patients) is provided by <a href="https://americanheadachesociety.org/resources/clinical-resources/" rel="noopener" target="_blank">AHS</a> through the AAN Guideline for the Prevention of Episodic Migraine + American Headache Society Evidence-Based Guidelines. TeleDirectMD follows these guidelines on every patient visit.
            </p>
            <h3>What causes migraine refills and who is most at risk in California?</h3>
            <p>
              Migraine Refills affects California adults across all demographics, though certain populations face higher risk based on the specific condition. The physician reviews your individual risk factors at each visit. Telehealth is appropriate for adults 18 and older with mild to moderate presentations who do not have red-flag symptoms requiring immediate in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Migraine (Refills for Established Patients) Cost &amp; Insurance in California</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Migraine Refills cost comparison">
                <h3>Typical Migraine Refills Visit Cost in California</h3>
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
            <h2>Migraine (Refills for Established Patients) Medication Options and Costs in California</h2>
            <p>
              Medications for migraine (refills for established patients) are selected based on current guidelines from <a href="https://americanheadachesociety.org/resources/clinical-resources/" rel="noopener" target="_blank">AHS</a>, patient history, allergies, and relevant contraindications assessed at the visit. GoodRx-verified pricing is shown below.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Migraine (Refills for Established Patients) medication options and GoodRx prices">
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
                    <td><strong>Sumatriptan 50–100 mg oral (generic Imitrex)</strong> · First-line</td>
                    <td>50–100 mg at migraine onset; may repeat in 2 hours if partial response; max 200 mg/day</td>
                    <td><a href="https://www.goodrx.com/sumatriptan" target="_blank" rel="noopener">~$20–$50 / 9 tablets GoodRx (generic)</a></td>
                    <td>First-line abortive per AHS. Most widely used triptan. Contraindicated in uncontrolled hypertension, coronary artery disease, stroke, hemiplegic or basilar migraine. Review cardiovascular risk factors.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Rizatriptan 10 mg ODT (generic Maxalt-MLT)</strong> · First-line</td>
                    <td>10 mg at migraine onset; may repeat in 2 hours; max 30 mg/day</td>
                    <td><a href="https://www.goodrx.com/rizatriptan" target="_blank" rel="noopener">~$25–$60 / 9 tablets GoodRx (generic)</a></td>
                    <td>Fast-acting ODT formulation — useful when nausea limits oral swallowing. Same cardiovascular contraindications as sumatriptan. Dose reduce with propranolol co-administration.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Propranolol ER 60–240 mg/day (migraine prevention)</strong> · First-line</td>
                    <td>60–80 mg once daily initially; titrate to response (target: 50% reduction in headache days)</td>
                    <td><a href="https://www.goodrx.com/propranolol-er" target="_blank" rel="noopener">~$20–$40/month GoodRx (generic)</a></td>
                    <td>Level A evidence for migraine prevention per AAN. Useful for comorbid hypertension. Contraindicated in asthma, bradycardia, decompensated heart failure, Raynaud's.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Topiramate 25–100 mg BID (migraine prevention)</strong> · First-line</td>
                    <td>25 mg once daily initially; titrate weekly by 25 mg up to 50–100 mg BID</td>
                    <td><a href="https://www.goodrx.com/topiramate" target="_blank" rel="noopener">~$15–$40/month GoodRx (generic)</a></td>
                    <td>Level A evidence for migraine prevention per AAN. Cognitive side effects (word-finding difficulty) and kidney stone risk. Monitor serum bicarbonate. Teratogenic — avoid in women of childbearing potential without contraception.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Ubrogepant 50–100 mg (Ubrelvy — gepant abortive)</strong> · First-line</td>
                    <td>50–100 mg at migraine onset; may repeat 2 hours later; max 200 mg/day</td>
                    <td><a href="https://www.goodrx.com/ubrogepant" target="_blank" rel="noopener">~$700–$1,100 / 10 tablets brand; manufacturer copay card available</a></td>
                    <td>CGRP receptor antagonist — alternative to triptans for cardiovascular-contraindicated patients. Avoid with strong CYP3A4 inhibitors/inducers. No cardiovascular contraindications like triptans.</td>
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
            <p>For most adults with mild to moderate migraine (refills for established patients) without red-flag symptoms, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below to determine the right care pathway for you.</p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Established migraine with prior diagnosis — seeking refills of established abortive or preventive therapy</li>
                  <li>Stable on current regimen — no new red-flag headache symptoms</li>
                  <li>MIDAS or HIT-6 assessment appropriate; history reviewable by video</li>
                  <li>Seeking triptan, gepant, antiemetic, or migraine preventive refill</li>
                  <li>Monitoring of preventive therapy response, side effects, or dose adjustment</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&rarr; Use in-person care if</h3>
                <ul>
                  <li>Thunderclap headache (worst headache of your life, sudden onset) — possible subarachnoid hemorrhage — call 911 immediately</li>
                  <li>Headache with fever and neck stiffness — possible meningitis — go to the ER</li>
                  <li>Headache with new focal neurologic deficits (weakness, vision loss, speech difficulty) — possible stroke — call 911</li>
                  <li>Headache after head trauma — possible intracranial hemorrhage — go to the ER</li>
                  <li>New headache in adults over 50 without prior migraine history — possible space-occupying lesion — in-person evaluation</li>
                  <li>Status migrainosus lasting more than 72 hours — go to the ER for IV treatment</li>
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
              sectionTitle="Frequently Asked Questions — Migraine (Refills for Established Patients) in California"
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
              <a key="hypertension-refills-online" className="tdmd-ca-uti__sibling" href="/ca/hypertension-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Hypertension Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Propranolol treats both HTN and migraine prevention — co-managed.</span>
                </a>
              <a key="anti-aging-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/anti-aging-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Anti-Aging Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Botulinum toxin is FDA-approved for chronic migraine prevention.</span>
                </a>
              <a key="seasonal-allergies-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/seasonal-allergies-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Seasonal Allergies in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Allergic rhinitis can trigger migraine — nasal congestion and migraine overlap.</span>
                </a>
              <a key="acid-reflux-refills-online" className="tdmd-ca-uti__sibling" href="/ca/acid-reflux-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Acid Reflux Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">GI symptoms and nausea overlap with migraine — common comorbidity.</span>
                </a>
              <a key="smoking-cessation-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/smoking-cessation-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Smoking Cessation in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Smoking is a migraine trigger — cessation reduces headache frequency.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ──────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/migraine-refills-online/">Migraine Refills national condition page</a>. Use the links below to explore insurance details, book a visit, or review other conditions.</p>
            <div className="tdmd-ca-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/migraine-refills-online/">National Migraine Refills page</a>
              <a href="/health-guides/">Migraine Refills health guides</a>
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
              <li><a href="https://americanmigrainefoundation.org/resource-library/understanding-migraine/migraine-statistics/" rel="noopener" target="_blank">American Migraine Foundation — Prevalence and Burden of Migraine</a></li>
              <li><a href="https://americanheadachesociety.org/resources/clinical-resources/" rel="noopener" target="_blank">American Headache Society — Evidence-Based Guidelines</a></li>
              <li><a href="https://n.neurology.org/content/78/17/1337" rel="noopener" target="_blank">AAN Guideline for the Prevention of Episodic Migraine</a></li>
              <li><a href="https://headachejournal.onlinelibrary.wiley.com/doi/10.1111/head.14366" rel="noopener" target="_blank">AHS Position Statement on Integrating CGRP Mechanisms into Migraine Treatment</a></li>
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

        <WhatDoesThisCostBlock conditionSlug="migraine-refills-online" conditionName="Migraine (Refills for Established Patients)" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="migraine-refills-online" />
        <CommonSymptomsBlock conditionSlug="migraine-refills-online" conditionName="Migraine (Refills for Established Patients)" />
      </div>
    </>
  );
}
