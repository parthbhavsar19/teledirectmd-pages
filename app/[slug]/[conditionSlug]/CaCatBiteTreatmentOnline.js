/**
 * CaCatBiteTreatmentOnline.js — production California × Cat Bite condition page (v3)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'cat-bite-treatment-online'.
 *
 * Matches v3 CA UTI template: inline opener paragraph (no CitableSummaryBlock),
 * hero, CA regulatory block (exact reuse), epidemiology block, clinical content,
 * vertical bar chart cost section, CA payor table, medications, dual-path block,
 * FAQ accordion (12 Q/A), JSON-LD schemas (MedicalWebPage + FAQPage + Physician
 * + HowTo + BreadcrumbList + SpeakableSpecification — NEVER QAPage).
 *
 * Authority: AAFP
 * Guideline: CDC Animal Bite Guidelines + IDSA Skin and Soft Tissue Infection Guidelines
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

const PAGE_URL = 'https://teledirectmd.com/ca/cat-bite-treatment-online/';
const PAGE_TITLE = 'Cat Bite (Infection Prevention and Wound Care) Online in California | TeleDirectMD';
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
    id: 'ca-cat-bite-treatment-online-faq-0',
    question: 'Can I get cat bite treatment online in California?',
    answer: (
      <p>
        Yes — for telehealth-appropriate presentations. California Business and Professions Code Section 2290.5 permits California-licensed physicians to evaluate cat bite wounds and prescribe prophylactic antibiotics via secure video visit. TeleDirectMD physicians follow CDC and IDSA guidelines, prescribing amoxicillin-clavulanate targeting Pasteurella multocida. Go to the ED for: any hand bite, facial bites, suspected rabies exposure, or signs of rapidly progressive infection. Cat hand bites require emergency evaluation — do not delay. Self pay is $79.
      </p>
    ),
  },
  {
    id: 'ca-cat-bite-treatment-online-faq-1',
    question: 'Why are cat bites more dangerous than dog bites?',
    answer: (
      <p>
        Cat bites carry higher infection rates (30–80%) than dog bites (5–20%) per IDSA data, for two reasons. First, cats have narrow, sharp teeth that create deep puncture wounds depositing bacteria into tendon sheaths and joint spaces — structures with poor blood supply that are difficult to irrigate. Second, Pasteurella multocida — the primary cat bite pathogen — grows extremely rapidly in these poorly vascularized structures. Hand cat bites can cause septic arthritis, flexor tenosynovitis, and osteomyelitis within 24 hours.
      </p>
    ),
  },
  {
    id: 'ca-cat-bite-treatment-online-faq-2',
    question: 'What is the first-line antibiotic for cat bites?',
    answer: (
      <p>
        Amoxicillin-clavulanate (Augmentin) 875/125 mg twice daily for 5–7 days is the first-line antibiotic for cat bites per IDSA guidelines. It covers Pasteurella multocida (the primary pathogen), anaerobes, streptococci, and staphylococci. Unlike dog bites, cat bites more broadly meet prophylaxis indications — nearly all puncture wounds from cats should receive prophylactic antibiotics. For penicillin-allergic patients, doxycycline + metronidazole is the alternative.
      </p>
    ),
  },
  {
    id: 'ca-cat-bite-treatment-online-faq-3',
    question: 'When does a cat bite require emergency care in California?',
    answer: (
      <p>
        Go to the ED immediately for: any cat bite on the hand (risk of tenosynovitis, septic arthritis), facial bites in children, signs of rapidly progressive infection within 24–48 hours (Pasteurella moves fast), immunocompromised patients with any cat bite, suspected rabies exposure (stray, unvaccinated, or wild cat), or significant puncture wounds requiring irrigation or exploration. CDPH directs rabies post-exposure prophylaxis to the ED — it cannot be initiated by telehealth.
      </p>
    ),
  },
  {
    id: 'ca-cat-bite-treatment-online-faq-4',
    question: 'What is the rabies risk from cat bites in California?',
    answer: (
      <p>
        CDPH Rabies Surveillance data confirms California's primary rabies reservoir is bats, not domestic cats. However, outdoor cats and stray cats can be exposed to rabid bats or skunks. A bite from a known indoor vaccinated cat has extremely low rabies risk. Bites from stray, unvaccinated, or outdoor cats in areas with wildlife rabies require assessment — CDPH instructs reporting biting animals to local health departments.
      </p>
    ),
  },
  {
    id: 'ca-cat-bite-treatment-online-faq-5',
    question: 'How common are cat bites in California?',
    answer: (
      <p>
        Cat bites account for 10–15% of all animal bite injuries in the U.S. per CDC data. With approximately 7 million pet cats in California, cat bites represent a significant injury burden. CDPH Rabies Surveillance tracks cat bites statewide. The high infection rate (30–80% per IDSA) makes cat bites a disproportionately large share of animal bite-related infections and hospitalizations.
      </p>
    ),
  },
  {
    id: 'ca-cat-bite-treatment-online-faq-6',
    question: 'Is Aetna in-network for cat bite treatment at TeleDirectMD in California?',
    answer: (
      <p>
        Yes. Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. UnitedHealthcare Commercial is approved effective May 29, 2026. Self pay is $79.
      </p>
    ),
  },
  {
    id: 'ca-cat-bite-treatment-online-faq-7',
    question: 'What is the cost of cat bite treatment in California?',
    answer: (
      <p>
        TeleDirectMD charges $79 self-pay for a complete MD video visit. Generic amoxicillin-clavulanate 875/125 mg costs ~$15–$35 for a 5-day course with GoodRx. Cat bite ED visits — common for hand bites requiring IV antibiotics, irrigation, and surgery — can cost $1,500–$10,000+ in California hospitals.
      </p>
    ),
  },
  {
    id: 'ca-cat-bite-treatment-online-faq-8',
    question: 'Does California\'s AB 744 parity law cover cat bite telehealth?',
    answer: (
      <p>
        Yes, for in-network commercial plans. California AB 744 (2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services. Aetna and UHC Commercial are in-network for TeleDirectMD in California.
      </p>
    ),
  },
  {
    id: 'ca-cat-bite-treatment-online-faq-9',
    question: 'What should I do immediately after a cat bite?',
    answer: (
      <p>
        Immediate steps per CDC and IDSA: wash the wound vigorously with soap and water for at least 5 minutes to flush bacteria from puncture tracks; apply gentle pressure to control bleeding; cover with a clean bandage. Immediately identify the cat's vaccination and indoor/outdoor status. Seek in-person care for any hand or facial bite. Call California animal control for stray cats. Telehealth is appropriate for minor limb/trunk bites in healthy adults after first-aid — given the high infection risk, most cat bites warrant prophylactic antibiotics.
      </p>
    ),
  },
  {
    id: 'ca-cat-bite-treatment-online-faq-10',
    question: 'Will my cat bite antibiotic prescription be sent electronically to a California pharmacy?',
    answer: (
      <p>
        Yes. California AB 2789 (effective January 1, 2022) requires all prescriptions to be issued electronically. TeleDirectMD sends e-prescriptions to your chosen California pharmacy — CVS, Walgreens, Rite Aid, Walmart, Safeway — during or after your visit.
      </p>
    ),
  },
  {
    id: 'ca-cat-bite-treatment-online-faq-11',
    question: 'Do all cat bites need antibiotics?',
    answer: (
      <p>
        IDSA guidelines broadly recommend antibiotic prophylaxis for nearly all cat bite puncture wounds, given the 30–80% infection rate. Unlike dog bites where minor abrasions in healthy adults may not require prophylaxis, the high Pasteurella infection risk from cat puncture wounds means most cat bites meeting the telehealth criteria should receive amoxicillin-clavulanate. The exception is purely superficial scratches without skin penetration.
      </p>
    ),
  },
];

const SCHEMAS = [{"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Cat Bite (Infection Prevention and Wound Care) Online in California | TeleDirectMD", "url": "https://teledirectmd.com/ca/cat-bite-treatment-online/", "description": "Cat bite antibiotic prophylaxis online for California adults. Board-certified Family Medicine MD. CDC + IDSA guideline-based. Self pay $79. Aetna in-network. Same-day video visits. Amoxicillin-clavulanate.", "datePublished": "2026-05-20", "dateModified": "2026-05-20", "inLanguage": "en-US", "about": {"@type": "MedicalCondition", "name": "Cat Bite", "code": {"@type": "MedicalCode", "code": "W55.01XA", "codingSystem": "ICD-10-CM"}}, "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient", "geographicArea": {"@type": "AdministrativeArea", "name": "California"}}, "reviewedBy": {"@type": "Physician", "@id": "https://teledirectmd.com/about/#physician-parth-bhavsar", "name": "Parth Bhavsar, MD", "identifier": {"@type": "PropertyValue", "propertyID": "NPI", "value": "1104323203"}, "medicalSpecialty": "Family Medicine", "hasCredential": [{"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Doctor of Medicine (MD)"}, {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Board Certification \u2014 American Board of Family Medicine"}], "licensedIn": "California", "worksFor": {"@type": "MedicalOrganization", "name": "TeleDirectMD", "url": "https://teledirectmd.com"}, "sameAs": ["https://npiregistry.cms.hhs.gov/provider-view/1104323203", "https://teledirectmd.com/about/"]}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#ca-cat-bite-treatment-online-opening", "#ca-cat-bite-treatment-online-opening p", ".tdmd-ca-cat-bite-treatment-online__byline", "#ca-cat-bite-treatment-online-faq"]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I get cat bite treatment online in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes \u2014 for telehealth-appropriate presentations. California Business and Professions Code Section 2290.5 permits California-licensed physicians to evaluate cat bite wounds and prescribe prophylactic antibiotics via secure video visit. TeleDirectMD physicians follow CDC and IDSA guidelines, prescribing amoxicillin-clavulanate targeting Pasteurella multocida. Go to the ED for: any hand bite, facial bites, suspected rabies exposure, or signs of rapidly progressive infection. Cat hand bites require emergency evaluation \u2014 do not delay. Self pay is $79."}}, {"@type": "Question", "name": "Why are cat bites more dangerous than dog bites?", "acceptedAnswer": {"@type": "Answer", "text": "Cat bites carry higher infection rates (30\u201380%) than dog bites (5\u201320%) per IDSA data, for two reasons. First, cats have narrow, sharp teeth that create deep puncture wounds depositing bacteria into tendon sheaths and joint spaces \u2014 structures with poor blood supply that are difficult to irrigate. Second, Pasteurella multocida \u2014 the primary cat bite pathogen \u2014 grows extremely rapidly in these poorly vascularized structures. Hand cat bites can cause septic arthritis, flexor tenosynovitis, and osteomyelitis within 24 hours."}}, {"@type": "Question", "name": "What is the first-line antibiotic for cat bites?", "acceptedAnswer": {"@type": "Answer", "text": "Amoxicillin-clavulanate (Augmentin) 875/125 mg twice daily for 5\u20137 days is the first-line antibiotic for cat bites per IDSA guidelines. It covers Pasteurella multocida (the primary pathogen), anaerobes, streptococci, and staphylococci. Unlike dog bites, cat bites more broadly meet prophylaxis indications \u2014 nearly all puncture wounds from cats should receive prophylactic antibiotics. For penicillin-allergic patients, doxycycline + metronidazole is the alternative."}}, {"@type": "Question", "name": "When does a cat bite require emergency care in California?", "acceptedAnswer": {"@type": "Answer", "text": "Go to the ED immediately for: any cat bite on the hand (risk of tenosynovitis, septic arthritis), facial bites in children, signs of rapidly progressive infection within 24\u201348 hours (Pasteurella moves fast), immunocompromised patients with any cat bite, suspected rabies exposure (stray, unvaccinated, or wild cat), or significant puncture wounds requiring irrigation or exploration. CDPH directs rabies post-exposure prophylaxis to the ED \u2014 it cannot be initiated by telehealth."}}, {"@type": "Question", "name": "What is the rabies risk from cat bites in California?", "acceptedAnswer": {"@type": "Answer", "text": "CDPH Rabies Surveillance data confirms California's primary rabies reservoir is bats, not domestic cats. However, outdoor cats and stray cats can be exposed to rabid bats or skunks. A bite from a known indoor vaccinated cat has extremely low rabies risk. Bites from stray, unvaccinated, or outdoor cats in areas with wildlife rabies require assessment \u2014 CDPH instructs reporting biting animals to local health departments."}}, {"@type": "Question", "name": "How common are cat bites in California?", "acceptedAnswer": {"@type": "Answer", "text": "Cat bites account for 10\u201315% of all animal bite injuries in the U.S. per CDC data. With approximately 7 million pet cats in California, cat bites represent a significant injury burden. CDPH Rabies Surveillance tracks cat bites statewide. The high infection rate (30\u201380% per IDSA) makes cat bites a disproportionately large share of animal bite-related infections and hospitalizations."}}, {"@type": "Question", "name": "Is Aetna in-network for cat bite treatment at TeleDirectMD in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. UnitedHealthcare Commercial is approved effective May 29, 2026. Self pay is $79."}}, {"@type": "Question", "name": "What is the cost of cat bite treatment in California?", "acceptedAnswer": {"@type": "Answer", "text": "TeleDirectMD charges $79 self-pay for a complete MD video visit. Generic amoxicillin-clavulanate 875/125 mg costs ~$15\u2013$35 for a 5-day course with GoodRx. Cat bite ED visits \u2014 common for hand bites requiring IV antibiotics, irrigation, and surgery \u2014 can cost $1,500\u2013$10,000+ in California hospitals."}}, {"@type": "Question", "name": "Does California's AB 744 parity law cover cat bite telehealth?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, for in-network commercial plans. California AB 744 (2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services. Aetna and UHC Commercial are in-network for TeleDirectMD in California."}}, {"@type": "Question", "name": "What should I do immediately after a cat bite?", "acceptedAnswer": {"@type": "Answer", "text": "Immediate steps per CDC and IDSA: wash the wound vigorously with soap and water for at least 5 minutes to flush bacteria from puncture tracks; apply gentle pressure to control bleeding; cover with a clean bandage. Immediately identify the cat's vaccination and indoor/outdoor status. Seek in-person care for any hand or facial bite. Call California animal control for stray cats. Telehealth is appropriate for minor limb/trunk bites in healthy adults after first-aid \u2014 given the high infection risk, most cat bites warrant prophylactic antibiotics."}}, {"@type": "Question", "name": "Will my cat bite antibiotic prescription be sent electronically to a California pharmacy?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California AB 2789 (effective January 1, 2022) requires all prescriptions to be issued electronically. TeleDirectMD sends e-prescriptions to your chosen California pharmacy \u2014 CVS, Walgreens, Rite Aid, Walmart, Safeway \u2014 during or after your visit."}}, {"@type": "Question", "name": "Do all cat bites need antibiotics?", "acceptedAnswer": {"@type": "Answer", "text": "IDSA guidelines broadly recommend antibiotic prophylaxis for nearly all cat bite puncture wounds, given the 30\u201380% infection rate. Unlike dog bites where minor abrasions in healthy adults may not require prophylaxis, the high Pasteurella infection risk from cat puncture wounds means most cat bites meeting the telehealth criteria should receive amoxicillin-clavulanate. The exception is purely superficial scratches without skin penetration."}}]}, {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Get Cat Bite (Infection Prevention and Wound Care) Online in California", "description": "Three steps to receive cat bite (infection prevention and wound care) evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.", "totalTime": "PT30M", "estimatedCost": {"@type": "MonetaryAmount", "currency": "USD", "value": "79"}, "step": [{"@type": "HowToStep", "position": 1, "name": "Book your video visit", "text": "Visit teledirectmd.com and select California Cat Bite treatment. No referral needed. Self pay $79. Many visits available same day.", "url": "https://teledirectmd.com/book-online"}, {"@type": "HowToStep", "position": 2, "name": "See a California-licensed MD by secure video", "text": "Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your symptoms, history, and red-flag screening. Consent per CA B&P Section 2290.5 confirmed.", "url": "https://teledirectmd.com/ca/cat-bite-treatment-online/"}, {"@type": "HowToStep", "position": 3, "name": "Receive your treatment plan and e-prescription", "text": "If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit.", "url": "https://teledirectmd.com/ca/cat-bite-treatment-online/"}]}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "TeleDirectMD", "item": "https://teledirectmd.com"}, {"@type": "ListItem", "position": 2, "name": "California", "item": "https://teledirectmd.com/ca/"}, {"@type": "ListItem", "position": 3, "name": "Cat Bite (Infection Prevention and Wound Care) Online in California", "item": "https://teledirectmd.com/ca/cat-bite-treatment-online/"}]}];

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

export default function CaCatBiteTreatmentOnline() {
  const pid = 'ca-cat-bite-treatment-online';

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
            <span aria-current="page">Cat Bite (Infection Prevention and Wound Care) Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Cat Bite Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · CDC + IDSA guideline-based cat bite infection prevention · CA B&P §2290.5 compliant.
                </p>
                <p>
                  Cat Bite is a condition commonly evaluated and, when appropriate, treated via telehealth. TeleDirectMD uses a safety-first approach, screening for red-flag symptoms that require in-person or emergency care before determining whether treatment by video visit is appropriate. This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas.
                </p>

                {/* v3: Inline opener paragraph — replaces CitableSummaryBlock */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can I get cat bite (infection prevention and wound care) online in California?</strong> Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and are held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. Self pay is $79. <a href="/insurance/">Aetna is in-network</a> as of April 30, 2026; UnitedHealthcare Commercial approved May 29, 2026.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> W55.01XA (Bitten by cat, initial encounter)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Cat Bite Care in California</h2>
                  <ul>
                    <li>Fast evaluation for cat bite (infection prevention and wound care) symptoms</li>
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
            <h2>Cat Bite (Infection Prevention and Wound Care) Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these apply to you:</strong></p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Minor cat bite scratch or superficial puncture on limb or trunk (NOT hand, face)</li>
                  <li>Known indoor cat, current on vaccines, minor wound already cleaned</li>
                  <li>Non-immunocompromised adult with no signs of rapidly progressive infection</li>
                  <li>Prophylactic antibiotic prescription for low-risk cat bite wound</li>
                  <li>Cat bite occurring &gt;24 hours ago without signs of infection requiring antibiotic guidance</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&#10007; Seek In-Person or Emergency Care If</h3>
                <ul>
                  <li>Any cat bite on the hand — high risk of septic arthritis, tenosynovitis, and osteomyelitis from Pasteurella multocida penetrating tendon sheaths — go to the ED immediately</li>
                  <li>Facial cat bites — especially in children — go to the ED</li>
                  <li>Signs of established infection within 24–48 hours (rapid-onset pain, swelling, warmth, purulent discharge) — Pasteurella infections progress rapidly — go to the ED</li>
                  <li>Suspected rabies exposure — stray, unvaccinated, or wild cat — CDPH directs rabies PEP evaluation to the ED</li>
                  <li>Immunocompromised patient — higher risk of systemic Pasteurella infection — go to the ED</li>
                  <li>Tetanus vaccination not current — booster needed in-person</li>
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
            <h2>California Telehealth Law and Your Cat Bite (Infection Prevention and Wound Care) Visit</h2>

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

            <h3>Are cat bite (infection prevention and wound care) medications controlled substances under California law?</h3>
            <p>
              Amoxicillin-clavulanate (Augmentin), doxycycline, and metronidazole are not controlled substances. They can be prescribed via California telehealth and transmitted electronically to any California pharmacy under Assembly Bill 2789. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Cat Bite (Infection Prevention and Wound Care) Works in California</h2>
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
            <h2>How Common Is Cat Bite in California?</h2>
            <p>
              Cat bites account for approximately 10–15% of all animal bite injuries in the United States, with higher infection rates than dog bites — approximately 30–80% of cat bites become infected compared to 5–20% of dog bites, according to IDSA guidelines. The California Department of Public Health (CDPH) Rabies Surveillance Program tracks cat bites alongside dog bites as potential rabies exposures. California is home to approximately 7 million pet cats. — <a href="https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/Rabies.aspx" rel="noopener" target="_blank">CDPH — Rabies Surveillance Program</a>.
            </p>
            <p>
              Clinical guidance for cat bite (infection prevention and wound care) is provided by <a href="https://www.cdc.gov/healthypets/pets/cats.html" rel="noopener" target="_blank">AAFP</a> through the CDC Animal Bite Guidelines + IDSA Skin and Soft Tissue Infection Guidelines. TeleDirectMD follows these guidelines on every patient visit.
            </p>
            <h3>What causes cat bite and who is most at risk in California?</h3>
            <p>
              Cat Bite affects California adults across all demographics, though certain populations face higher risk based on the specific condition. The physician reviews your individual risk factors at each visit. Telehealth is appropriate for adults 18 and older with mild to moderate presentations who do not have red-flag symptoms requiring immediate in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Cat Bite (Infection Prevention and Wound Care) Cost &amp; Insurance in California</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Cat Bite cost comparison">
                <h3>Typical Cat Bite Visit Cost in California</h3>
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
            <h2>Cat Bite (Infection Prevention and Wound Care) Medication Options and Costs in California</h2>
            <p>
              Medications for cat bite (infection prevention and wound care) are selected based on current guidelines from <a href="https://www.cdc.gov/healthypets/pets/cats.html" rel="noopener" target="_blank">AAFP</a>, patient history, allergies, and relevant contraindications assessed at the visit. GoodRx-verified pricing is shown below.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cat Bite (Infection Prevention and Wound Care) medication options and GoodRx prices">
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
                    <td><strong>Amoxicillin-clavulanate (Augmentin) 875/125 mg</strong> · First-line</td>
                    <td>875 mg twice daily × 5 days (prophylaxis) or 7 days (early infection)</td>
                    <td><a href="https://www.goodrx.com/amoxicillin-clavulanate" target="_blank" rel="noopener">~$15–$35 / 20 tablets</a></td>
                    <td>First-line for cat bite per IDSA. Covers Pasteurella multocida (primary cat bite pathogen), anaerobes, and streptococci. Cat bites have higher infection risk than dog bites — prophylaxis more broadly indicated. Begin within 8–12 hours.</td>
                  </tr>
                  <tr>
                    <td><strong>Doxycycline 100 mg + metronidazole 500 mg (penicillin-allergic)</strong></td>
                    <td>Doxycycline 100 mg twice daily + metronidazole 500 mg three times daily × 5–7 days</td>
                    <td><a href="https://www.goodrx.com/doxycycline" target="_blank" rel="noopener">~$20–$35 combined</a></td>
                    <td>Second-line for penicillin-allergic patients per IDSA. Doxycycline covers Pasteurella; metronidazole covers anaerobes. Not for use in pregnancy.</td>
                  </tr>
                  <tr>
                    <td><strong>TMP-SMX DS + metronidazole (pregnancy/doxycycline-intolerant)</strong></td>
                    <td>TMP-SMX DS (160/800 mg) twice daily + metronidazole 500 mg three times daily × 5–7 days</td>
                    <td><a href="https://www.goodrx.com/trimethoprim-sulfamethoxazole" target="_blank" rel="noopener">~$10–$20 combined GoodRx</a></td>
                    <td>Alternative for patients who cannot use doxycycline. Not for use in first trimester pregnancy or near term. TMP-SMX alone may not cover all anaerobes — metronidazole added per IDSA guidance.</td>
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
            <p>For most adults with mild to moderate cat bite (infection prevention and wound care) without red-flag symptoms, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below to determine the right care pathway for you.</p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Minor cat bite scratch or superficial puncture on limb or trunk (NOT hand, face)</li>
                  <li>Known indoor cat, current on vaccines, minor wound already cleaned</li>
                  <li>Non-immunocompromised adult with no signs of rapidly progressive infection</li>
                  <li>Prophylactic antibiotic prescription for low-risk cat bite wound</li>
                  <li>Cat bite occurring &gt;24 hours ago without signs of infection requiring antibiotic guidance</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&rarr; Use in-person care if</h3>
                <ul>
                  <li>Any cat bite on the hand — high risk of septic arthritis, tenosynovitis, and osteomyelitis from Pasteurella multocida penetrating tendon sheaths — go to the ED immediately</li>
                  <li>Facial cat bites — especially in children — go to the ED</li>
                  <li>Signs of established infection within 24–48 hours (rapid-onset pain, swelling, warmth, purulent discharge) — Pasteurella infections progress rapidly — go to the ED</li>
                  <li>Suspected rabies exposure — stray, unvaccinated, or wild cat — CDPH directs rabies PEP evaluation to the ED</li>
                  <li>Immunocompromised patient — higher risk of systemic Pasteurella infection — go to the ED</li>
                  <li>Tetanus vaccination not current — booster needed in-person</li>
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
              sectionTitle="Frequently Asked Questions — Cat Bite (Infection Prevention and Wound Care) in California"
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
                  <span className="tdmd-ca-uti__sibling-why">Dog bites — similar prophylaxis approach.</span>
                </a>
              <a key="tick-bite-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/tick-bite-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Tick Bite Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Vector-borne and animal-transmitted disease risk.</span>
                </a>
              <a key="cellulitis-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/cellulitis-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Cellulitis Treatment Online in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Cat bite wound infection — cellulitis presentation.</span>
                </a>
              <a key="scabies-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/scabies-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Scabies Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Animal-transmitted skin conditions.</span>
                </a>
              <a key="tinea-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/tinea-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Tinea Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Animal-transmitted skin infections — ringworm from cats.</span>
                </a>
              <a key="poison-ivy-oak-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/poison-ivy-oak-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Poison Ivy/Oak Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Outdoor exposures — skin conditions after outdoor activity.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ──────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/cat-bite-treatment-online/">Cat Bite national condition page</a>. Use the links below to explore insurance details, book a visit, or review other conditions.</p>
            <div className="tdmd-ca-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/cat-bite-treatment-online/">National Cat Bite page</a>
              <a href="/health-guides/">Cat Bite health guides</a>
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
              <li><a href="https://www.cdc.gov/healthypets/pets/cats.html" rel="noopener" target="_blank">CDC — Cats and Healthy People. Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/" rel="noopener" target="_blank">IDSA — Skin and Soft Tissue Infection Guidelines. Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/Rabies.aspx" rel="noopener" target="_blank">CDPH — Rabies Surveillance. Retrieved 2026-05-22.</a></li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California B&P Code §2290.5. Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.mbc.ca.gov/Licensees/Telehealth.aspx" rel="noopener" target="_blank">Medical Board of California — Telehealth. Retrieved 2026-05-22.</a></li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 (AB 744). Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.goodrx.com/amoxicillin-clavulanate" rel="noopener" target="_blank">GoodRx — Amoxicillin-Clavulanate. Retrieved 2026-05-22.</a></li>
              <li><a href="https://www.goodrx.com/doxycycline" rel="noopener" target="_blank">GoodRx — Doxycycline. Retrieved 2026-05-22.</a></li>
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

        <WhatDoesThisCostBlock conditionSlug="cat-bite-treatment-online" conditionName="Cat Bite (Infection Prevention and Wound Care)" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="cat-bite-treatment-online" />
        <CommonSymptomsBlock conditionSlug="cat-bite-treatment-online" conditionName="Cat Bite (Infection Prevention and Wound Care)" />
      </div>
    </>
  );
}
