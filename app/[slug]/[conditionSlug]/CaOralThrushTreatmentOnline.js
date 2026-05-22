/**
 * CaOralThrushTreatmentOnline.js — production California × Oral Thrush (Oral Candidiasis) condition page (v3)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'oral-thrush-treatment-online'.
 *
 * Matches v3 CA UTI template: inline opener paragraph (no CitableSummaryBlock),
 * hero, CA regulatory block (exact reuse), epidemiology block, clinical content,
 * vertical bar chart cost section, CA payor table, medications, dual-path block,
 * FAQ accordion (12 Q/A), JSON-LD schemas (MedicalWebPage + FAQPage + Physician
 * + HowTo + BreadcrumbList + SpeakableSpecification — NEVER QAPage).
 *
 * Authority: Infectious Diseases Society of America (IDSA) — Candidiasis Guideline
 * Guideline: IDSA Clinical Practice Guideline for the Management of Candidiasis (2016; referenced in 2024 updates)
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

const PAGE_URL = 'https://teledirectmd.com/ca/oral-thrush-treatment-online/';
const PAGE_TITLE = 'Oral Thrush Treatment Online in California | TeleDirectMD';
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
    id: 'ca-oral-thrush-treatment-online-faq-0',
    question: 'Can I get oral thrush treatment online in California?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 permits California-licensed physicians to deliver care via synchronous video telehealth. TeleDirectMD physicians are licensed in California and follow IDSA candidiasis guidelines for oral thrush management. Adults 18+ in California with white oral plaques consistent with thrush can book a same-day video visit — the physician assesses lesions on camera and prescribes nystatin oral suspension or fluconazole when appropriate. Self pay is $79; Aetna is in-network as of April 30, 2026.
      </p>
    ),
  },
  {
    id: 'ca-oral-thrush-treatment-online-faq-1',
    question: 'What does oral thrush look like and how is it recognized?',
    answer: (
      <p>
        Oral thrush presents as creamy white, curd-like plaques on the tongue, inner cheeks, the roof of the mouth, or the back of the throat. The plaques can be wiped off (unlike geographic tongue, which cannot), revealing a red or bleeding surface underneath. Patients often describe a burning sensation, altered taste, or difficulty eating. Risk factors include recent antibiotic use, inhaled corticosteroid use (without rinsing the mouth afterward), denture wearing, immunosuppression, diabetes, or cancer treatment.
      </p>
    ),
  },
  {
    id: 'ca-oral-thrush-treatment-online-faq-2',
    question: 'What antifungal medications treat oral thrush, and what do they cost in California?',
    answer: (
      <p>
        Per IDSA candidiasis guideline, first-line treatment options include: nystatin oral suspension 100,000 units/mL (swish and swallow four times daily for 7–14 days; generic ~$15–$30 with GoodRx) for uncomplicated cases; or fluconazole 100–200 mg daily for 7–14 days (~$10–$20 generic with GoodRx) for immunocompromised patients or when nystatin fails. Prescription costs at pharmacy are separate from the TeleDirectMD visit fee ($79).
      </p>
    ),
  },
  {
    id: 'ca-oral-thrush-treatment-online-faq-3',
    question: 'Does California require an in-person visit before telehealth?',
    answer: (
      <p>
        No. California B&P Code §2290.5 does not require a prior in-person visit. A California-licensed physician can evaluate oral thrush through a synchronous video visit. The physician asks you to show the inside of your mouth on camera to assess the appearance and extent of plaques.
      </p>
    ),
  },
  {
    id: 'ca-oral-thrush-treatment-online-faq-4',
    question: 'When is oral thrush dangerous and when should I go to the ER in California?',
    answer: (
      <p>
        Seek urgent in-person care if you have difficulty swallowing or a sensation of food sticking in the chest — this may indicate esophageal candidiasis, which requires systemic antifungal therapy and endoscopic confirmation. Oral thrush in a person not on immunosuppressants, antibiotics, or corticosteroids may indicate undiagnosed immunodeficiency (HIV, cancer, diabetes) and warrants in-person evaluation for underlying cause.
      </p>
    ),
  },
  {
    id: 'ca-oral-thrush-treatment-online-faq-5',
    question: 'Is my Aetna plan in California in-network with TeleDirectMD?',
    answer: (
      <p>
        Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. Verify current in-network status directly with Aetna before your visit. Self pay is $79 regardless of insurance status.
      </p>
    ),
  },
  {
    id: 'ca-oral-thrush-treatment-online-faq-6',
    question: 'Is UnitedHealthcare in-network with TeleDirectMD in California?',
    answer: (
      <p>
        UnitedHealthcare Commercial was approved for California effective May 29, 2026, covering commercial plans and Medicare Advantage. Excludes Medi-Cal, Individual Exchange, and Navigate/Charter/Core plan types. Verify your specific plan eligibility with UHC before booking.
      </p>
    ),
  },
  {
    id: 'ca-oral-thrush-treatment-online-faq-7',
    question: 'Will Medi-Cal cover my TeleDirectMD visit for oral thrush?',
    answer: (
      <p>
        TeleDirectMD is not currently enrolled as a Medi-Cal provider. If you have Medi-Cal, you can use the $79 self-pay rate or find a Medi-Cal-enrolled telehealth provider through your managed care plan or California DHCS at dhcs.ca.gov. Medi-Cal's HIV/AIDS programs through CDPH may provide additional resources for HIV-positive Californians with oral candidiasis.
      </p>
    ),
  },
  {
    id: 'ca-oral-thrush-treatment-online-faq-8',
    question: 'How can I prevent oral thrush from recurring?',
    answer: (
      <p>
        Prevention strategies depend on the underlying cause: For inhaled corticosteroid users — rinse the mouth thoroughly with water after every dose; use a spacer device. For denture wearers — remove dentures at night, clean thoroughly, soak in antiseptic solution. For antibiotic recipients — probiotic use during and after antibiotics may reduce Candida overgrowth (evidence is moderate). For immunocompromised patients — discuss prophylactic antifungal therapy with your physician. For patients with diabetes — optimize blood glucose control, as hyperglycemia promotes Candida growth.
      </p>
    ),
  },
  {
    id: 'ca-oral-thrush-treatment-online-faq-9',
    question: 'Does California\'s AB 744 telehealth parity law apply to oral thrush visits?',
    answer: (
      <p>
        California AB 744 (2019) requires commercial health plans to reimburse telehealth services on the same basis as in-person services. Parity applies when the provider is already in-network with your specific plan. Currently, Aetna (active April 30, 2026) and UnitedHealthcare Commercial (active May 29, 2026) are in-network in California for TeleDirectMD.
      </p>
    ),
  },
  {
    id: 'ca-oral-thrush-treatment-online-faq-10',
    question: 'How quickly will my antifungal prescription reach a California pharmacy?',
    answer: (
      <p>
        California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022). If an antifungal medication is appropriate, TeleDirectMD sends an e-prescription electronically to your chosen California pharmacy during or after your visit. Most California pharmacies fill within one to four hours.
      </p>
    ),
  },
  {
    id: 'ca-oral-thrush-treatment-online-faq-11',
    question: 'Does oral thrush require lab testing before treatment?',
    answer: (
      <p>
        In most cases, clinical diagnosis is sufficient for straightforward presentations — white plaques wiped off a red base in a patient with clear risk factors. Per IDSA candidiasis guideline, empiric treatment is appropriate without culture for typical presentations. Culture or KOH preparation testing is indicated when the diagnosis is uncertain, when there is no response to standard treatment, or in immunocompromised patients where species identification and antifungal sensitivity may guide therapy.
      </p>
    ),
  },
];

const SCHEMAS = [{"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Oral Thrush Treatment Online in California | TeleDirectMD", "url": "https://teledirectmd.com/ca/oral-thrush-treatment-online/", "description": "Oral thrush treatment online for California adults. IDSA candidiasis guideline-based evaluation. Board-certified Family Medicine MD. Antifungal prescriptions. Self pay $79. Aetna in-network. Same-day visits.", "datePublished": "2026-05-20", "dateModified": "2026-05-20", "inLanguage": "en-US", "about": {"@type": "MedicalCondition", "name": "Oral Thrush (Oral Candidiasis)", "code": {"@type": "MedicalCode", "code": "B37.0", "codingSystem": "ICD-10-CM"}}, "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient", "geographicArea": {"@type": "AdministrativeArea", "name": "California"}}, "reviewedBy": {"@type": "Physician", "@id": "https://teledirectmd.com/about/#physician-parth-bhavsar", "name": "Parth Bhavsar, MD", "identifier": {"@type": "PropertyValue", "propertyID": "NPI", "value": "1104323203"}, "medicalSpecialty": "Family Medicine", "hasCredential": [{"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Doctor of Medicine (MD)"}, {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Board Certification \u2014 American Board of Family Medicine"}], "licensedIn": "California", "worksFor": {"@type": "MedicalOrganization", "name": "TeleDirectMD", "url": "https://teledirectmd.com"}, "sameAs": ["https://npiregistry.cms.hhs.gov/provider-view/1104323203", "https://teledirectmd.com/about/"]}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#ca-oral-thrush-treatment-online-opening", "#ca-oral-thrush-treatment-online-opening p", ".tdmd-ca-oral-thrush-treatment-online__byline", "#ca-oral-thrush-treatment-online-faq"]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I get oral thrush treatment online in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 permits California-licensed physicians to deliver care via synchronous video telehealth. TeleDirectMD physicians are licensed in California and follow IDSA candidiasis guidelines for oral thrush management. Adults 18+ in California with white oral plaques consistent with thrush can book a same-day video visit \u2014 the physician assesses lesions on camera and prescribes nystatin oral suspension or fluconazole when appropriate. Self pay is $79; Aetna is in-network as of April 30, 2026."}}, {"@type": "Question", "name": "What does oral thrush look like and how is it recognized?", "acceptedAnswer": {"@type": "Answer", "text": "Oral thrush presents as creamy white, curd-like plaques on the tongue, inner cheeks, the roof of the mouth, or the back of the throat. The plaques can be wiped off (unlike geographic tongue, which cannot), revealing a red or bleeding surface underneath. Patients often describe a burning sensation, altered taste, or difficulty eating. Risk factors include recent antibiotic use, inhaled corticosteroid use (without rinsing the mouth afterward), denture wearing, immunosuppression, diabetes, or cancer treatment."}}, {"@type": "Question", "name": "What antifungal medications treat oral thrush, and what do they cost in California?", "acceptedAnswer": {"@type": "Answer", "text": "Per IDSA candidiasis guideline, first-line treatment options include: nystatin oral suspension 100,000 units/mL (swish and swallow four times daily for 7\u201314 days; generic ~$15\u2013$30 with GoodRx) for uncomplicated cases; or fluconazole 100\u2013200 mg daily for 7\u201314 days (~$10\u2013$20 generic with GoodRx) for immunocompromised patients or when nystatin fails. Prescription costs at pharmacy are separate from the TeleDirectMD visit fee ($79)."}}, {"@type": "Question", "name": "Does California require an in-person visit before telehealth?", "acceptedAnswer": {"@type": "Answer", "text": "No. California B&P Code \u00a72290.5 does not require a prior in-person visit. A California-licensed physician can evaluate oral thrush through a synchronous video visit. The physician asks you to show the inside of your mouth on camera to assess the appearance and extent of plaques."}}, {"@type": "Question", "name": "When is oral thrush dangerous and when should I go to the ER in California?", "acceptedAnswer": {"@type": "Answer", "text": "Seek urgent in-person care if you have difficulty swallowing or a sensation of food sticking in the chest \u2014 this may indicate esophageal candidiasis, which requires systemic antifungal therapy and endoscopic confirmation. Oral thrush in a person not on immunosuppressants, antibiotics, or corticosteroids may indicate undiagnosed immunodeficiency (HIV, cancer, diabetes) and warrants in-person evaluation for underlying cause."}}, {"@type": "Question", "name": "Is my Aetna plan in California in-network with TeleDirectMD?", "acceptedAnswer": {"@type": "Answer", "text": "Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. Verify current in-network status directly with Aetna before your visit. Self pay is $79 regardless of insurance status."}}, {"@type": "Question", "name": "Is UnitedHealthcare in-network with TeleDirectMD in California?", "acceptedAnswer": {"@type": "Answer", "text": "UnitedHealthcare Commercial was approved for California effective May 29, 2026, covering commercial plans and Medicare Advantage. Excludes Medi-Cal, Individual Exchange, and Navigate/Charter/Core plan types. Verify your specific plan eligibility with UHC before booking."}}, {"@type": "Question", "name": "Will Medi-Cal cover my TeleDirectMD visit for oral thrush?", "acceptedAnswer": {"@type": "Answer", "text": "TeleDirectMD is not currently enrolled as a Medi-Cal provider. If you have Medi-Cal, you can use the $79 self-pay rate or find a Medi-Cal-enrolled telehealth provider through your managed care plan or California DHCS at dhcs.ca.gov. Medi-Cal's HIV/AIDS programs through CDPH may provide additional resources for HIV-positive Californians with oral candidiasis."}}, {"@type": "Question", "name": "How can I prevent oral thrush from recurring?", "acceptedAnswer": {"@type": "Answer", "text": "Prevention strategies depend on the underlying cause: For inhaled corticosteroid users \u2014 rinse the mouth thoroughly with water after every dose; use a spacer device. For denture wearers \u2014 remove dentures at night, clean thoroughly, soak in antiseptic solution. For antibiotic recipients \u2014 probiotic use during and after antibiotics may reduce Candida overgrowth (evidence is moderate). For immunocompromised patients \u2014 discuss prophylactic antifungal therapy with your physician. For patients with diabetes \u2014 optimize blood glucose control, as hyperglycemia promotes Candida growth."}}, {"@type": "Question", "name": "Does California's AB 744 telehealth parity law apply to oral thrush visits?", "acceptedAnswer": {"@type": "Answer", "text": "California AB 744 (2019) requires commercial health plans to reimburse telehealth services on the same basis as in-person services. Parity applies when the provider is already in-network with your specific plan. Currently, Aetna (active April 30, 2026) and UnitedHealthcare Commercial (active May 29, 2026) are in-network in California for TeleDirectMD."}}, {"@type": "Question", "name": "How quickly will my antifungal prescription reach a California pharmacy?", "acceptedAnswer": {"@type": "Answer", "text": "California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022). If an antifungal medication is appropriate, TeleDirectMD sends an e-prescription electronically to your chosen California pharmacy during or after your visit. Most California pharmacies fill within one to four hours."}}, {"@type": "Question", "name": "Does oral thrush require lab testing before treatment?", "acceptedAnswer": {"@type": "Answer", "text": "In most cases, clinical diagnosis is sufficient for straightforward presentations \u2014 white plaques wiped off a red base in a patient with clear risk factors. Per IDSA candidiasis guideline, empiric treatment is appropriate without culture for typical presentations. Culture or KOH preparation testing is indicated when the diagnosis is uncertain, when there is no response to standard treatment, or in immunocompromised patients where species identification and antifungal sensitivity may guide therapy."}}]}, {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Get Oral Thrush Treatment Online in California", "description": "Three steps to receive oral thrush treatment evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.", "totalTime": "PT30M", "estimatedCost": {"@type": "MonetaryAmount", "currency": "USD", "value": "79"}, "step": [{"@type": "HowToStep", "position": 1, "name": "Book your video visit", "text": "Visit teledirectmd.com and select California Oral Thrush (Oral Candidiasis) treatment. No referral needed. Self pay $79. Many visits available same day.", "url": "https://teledirectmd.com/book-online"}, {"@type": "HowToStep", "position": 2, "name": "See a California-licensed MD by secure video", "text": "Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your symptoms, history, and red-flag screening. Consent per CA B&P Section 2290.5 confirmed.", "url": "https://teledirectmd.com/ca/oral-thrush-treatment-online/"}, {"@type": "HowToStep", "position": 3, "name": "Receive your treatment plan and e-prescription", "text": "If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit.", "url": "https://teledirectmd.com/ca/oral-thrush-treatment-online/"}]}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "TeleDirectMD", "item": "https://teledirectmd.com"}, {"@type": "ListItem", "position": 2, "name": "California", "item": "https://teledirectmd.com/ca/"}, {"@type": "ListItem", "position": 3, "name": "Oral Thrush Treatment Online in California", "item": "https://teledirectmd.com/ca/oral-thrush-treatment-online/"}]}];

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

export default function CaOralThrushTreatmentOnline() {
  const pid = 'ca-oral-thrush-treatment-online';

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
            <span aria-current="page">Oral Thrush Treatment Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Oral Thrush Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · MD-only · CA B&P §2290.5 compliant.
                </p>
                <p>
                  Oral Thrush (Oral Candidiasis) is a condition commonly evaluated and, when appropriate, treated via telehealth. TeleDirectMD uses a safety-first approach, screening for red-flag symptoms that require in-person or emergency care before determining whether treatment by video visit is appropriate. This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas.
                </p>

                {/* v3: Inline opener paragraph — replaces CitableSummaryBlock */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can I get oral thrush treatment online in California?</strong> Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and are held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. Self pay is $79. <a href="/insurance/">Aetna is in-network</a> as of April 30, 2026; UnitedHealthcare Commercial approved May 29, 2026.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> B37.0 (Candidal stomatitis / oral thrush); actual code assigned at visit</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Oral Thrush (Oral Candidiasis) Care in California</h2>
                  <ul>
                    <li>Fast evaluation for oral thrush treatment symptoms</li>
                    <li>Red-flag screening for serious complications requiring in-person care</li>
                    <li>Guideline-based treatment per Infectious Diseases Society of America (IDSA) — Candidiasis Guideline</li>
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
            <h2>Oral Thrush Treatment Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these apply to you:</strong></p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>White plaques or patches inside the mouth, on the tongue or inner cheeks, that can be wiped off</li>
                  <li>Associated with recent antibiotic use, inhaled corticosteroid use, or known immunosuppression</li>
                  <li>No difficulty swallowing (if swallowing is affected, esophageal involvement must be ruled out)</li>
                  <li>Able to describe and show oral lesions via video camera</li>
                  <li>Seeking nystatin oral suspension or fluconazole prescription</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&#10007; Seek In-Person or Emergency Care If</h3>
                <ul>
                  <li>Difficulty swallowing or painful swallowing suggesting esophageal candidiasis (needs upper endoscopy and systemic treatment)</li>
                  <li>Oral thrush in a patient who is HIV-positive with unknown or low CD4 count and no prior HIV workup</li>
                  <li>Oral thrush in a patient not on immunosuppressants or antibiotics — may indicate undiagnosed immunodeficiency</li>
                  <li>No improvement after 7–14 days of antifungal therapy (possible azole-resistant Candida)</li>
                  <li>Severe oral pain with inability to eat or drink</li>
                  <li>Signs of systemic candidiasis — fever, hypotension (rare but serious)</li>
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
            <h2>California Telehealth Law and Your Oral Thrush Treatment Visit</h2>

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

            <h3>Are oral thrush treatment medications controlled substances under California law?</h3>
            <p>
              Antifungal medications prescribed for oral thrush — nystatin, fluconazole — are not controlled substances and can be prescribed via California telehealth without restriction. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Oral Thrush Treatment Works in California</h2>
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
            <h2>How Common Is Oral Thrush (Oral Candidiasis) in California?</h2>
            <p>
              Oral candidiasis (thrush) is most common in immunocompromised individuals, denture wearers, patients on inhaled corticosteroids, and those who have recently completed antibiotic therapy. California has a large immunocompromised population including approximately 100,000 Californians living with HIV, per CDPH HIV/AIDS statistics — HIV-associated oral candidiasis remains a significant clinical concern statewide. Oral thrush is also common in California breast-cancer patients undergoing chemotherapy and in older adults in long-term care settings. — <a href="https://www.cdph.ca.gov/Programs/CID/DOA/Pages/OA_HIVandAIDS_Information.aspx" rel="noopener" target="_blank">CDPH — HIV/AIDS in California</a>.
            </p>
            <p>
              Clinical guidance for oral thrush treatment is provided by <a href="https://www.idsociety.org/practice-guideline/candidiasis/" rel="noopener" target="_blank">Infectious Diseases Society of America (IDSA) — Candidiasis Guideline</a> through the IDSA Clinical Practice Guideline for the Management of Candidiasis (2016; referenced in 2024 updates). TeleDirectMD follows these guidelines on every patient visit.
            </p>
            <h3>What causes oral thrush (oral candidiasis) and who is most at risk in California?</h3>
            <p>
              Oral Thrush (Oral Candidiasis) affects California adults across all demographics, though certain populations face higher risk based on the specific condition. The physician reviews your individual risk factors at each visit. Telehealth is appropriate for adults 18 and older with mild to moderate presentations who do not have red-flag symptoms requiring immediate in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Oral Thrush Treatment Cost &amp; Insurance in California</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Oral Thrush (Oral Candidiasis) cost comparison">
                <h3>Typical Oral Thrush (Oral Candidiasis) Visit Cost in California</h3>
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
            <h2>Oral Thrush Treatment Medication Options and Costs in California</h2>
            <p>
              Medications for oral thrush treatment are selected based on current guidelines from <a href="https://www.idsociety.org/practice-guideline/candidiasis/" rel="noopener" target="_blank">Infectious Diseases Society of America (IDSA) — Candidiasis Guideline</a>, patient history, allergies, and relevant contraindications assessed at the visit. GoodRx-verified pricing is shown below.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Oral Thrush Treatment medication options and GoodRx prices">
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
                    <td><strong>Nystatin oral suspension 100,000 units/mL</strong> · First-line</td>
                    <td>4–6 mL (400,000–600,000 units) swish and swallow four times daily × 7–14 days</td>
                    <td><a href="https://www.goodrx.com/nystatin-oral" target="_blank" rel="noopener">~$15–$30 generic with GoodRx</a></td>
                    <td>First-line for uncomplicated oral candidiasis per IDSA candidiasis guideline. Swish around mouth for at least 1 minute before swallowing. Minimal systemic absorption.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Fluconazole 100 mg</strong> · First-line</td>
                    <td>200 mg loading dose, then 100 mg daily × 7–14 days</td>
                    <td><a href="https://www.goodrx.com/fluconazole" target="_blank" rel="noopener">~$10–$20 generic with GoodRx</a></td>
                    <td>First-line systemic antifungal per IDSA guideline — preferred for immunocompromised patients or when nystatin fails. Extensive drug interactions (azole class). Check for CYP2C9/CYP3A4 drug interactions.</td>
                  </tr>
                  <tr>
                    <td><strong>Clotrimazole troches 10 mg</strong></td>
                    <td>Dissolve slowly in mouth five times daily × 7–14 days</td>
                    <td><a href="https://www.goodrx.com/clotrimazole-lozenge" target="_blank" rel="noopener">~$20–$40 generic with GoodRx</a></td>
                    <td>Alternative topical antifungal per IDSA guideline. Requires frequent dosing. Good option when systemic absorption of fluconazole is undesirable.</td>
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
            <p>For most adults with mild to moderate oral thrush treatment without red-flag symptoms, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below to determine the right care pathway for you.</p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>White plaques or patches inside the mouth, on the tongue or inner cheeks, that can be wiped off</li>
                  <li>Associated with recent antibiotic use, inhaled corticosteroid use, or known immunosuppression</li>
                  <li>No difficulty swallowing (if swallowing is affected, esophageal involvement must be ruled out)</li>
                  <li>Able to describe and show oral lesions via video camera</li>
                  <li>Seeking nystatin oral suspension or fluconazole prescription</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&rarr; Use in-person care if</h3>
                <ul>
                  <li>Difficulty swallowing or painful swallowing suggesting esophageal candidiasis (needs upper endoscopy and systemic treatment)</li>
                  <li>Oral thrush in a patient who is HIV-positive with unknown or low CD4 count and no prior HIV workup</li>
                  <li>Oral thrush in a patient not on immunosuppressants or antibiotics — may indicate undiagnosed immunodeficiency</li>
                  <li>No improvement after 7–14 days of antifungal therapy (possible azole-resistant Candida)</li>
                  <li>Severe oral pain with inability to eat or drink</li>
                  <li>Signs of systemic candidiasis — fever, hypotension (rare but serious)</li>
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
              sectionTitle="Frequently Asked Questions — Oral Thrush Treatment in California"
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
              <a key="sore-throat-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/sore-throat-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Sore Throat Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Oral candidiasis causes mouth and throat pain — important differential for throat symptoms.</span>
                </a>
              <a key="mastitis-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/mastitis-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Mastitis Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Nipple candidiasis in breastfeeding mothers often co-occurs with infant oral thrush.</span>
                </a>
              <a key="dental-pain-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/dental-pain-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Dental Pain Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Oral candidiasis causes mouth pain that can be confused with dental pain.</span>
                </a>
              <a key="impetigo-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/impetigo-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Impetigo Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Angular cheilitis (candidal) can co-occur with perioral skin infections.</span>
                </a>
              <a key="cellulitis-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/cellulitis-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Cellulitis Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Immunocompromised patients who get oral thrush are also at risk for other infections.</span>
                </a>
              <a key="online-doctor-visits" className="tdmd-ca-uti__sibling" href="/ca/online-doctor-visits/">
                  <span className="tdmd-ca-uti__sibling-label">All Online Doctor Visits in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">General CA telehealth hub for any condition we treat.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ──────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/oral-thrush-treatment-online/">Oral Thrush (Oral Candidiasis) national condition page</a>. Use the links below to explore insurance details, book a visit, or review other conditions.</p>
            <div className="tdmd-ca-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/oral-thrush-treatment-online/">National Oral Thrush (Oral Candidiasis) page</a>
              <a href="/health-guides/">Oral Thrush (Oral Candidiasis) health guides</a>
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
              <li><a href="https://www.cdph.ca.gov/Programs/CID/DOA/Pages/OA_HIVandAIDS_Information.aspx" rel="noopener" target="_blank">CDPH — HIV/AIDS in California. Retrieved May 2026.</a></li>
              <li><a href="https://www.idsociety.org/practice-guideline/candidiasis/" rel="noopener" target="_blank">IDSA — Clinical Practice Guideline for Candidiasis (2016). Retrieved May 2026.</a></li>
              <li><a href="https://www.cdc.gov/fungal/diseases/candidiasis/thrush.html" rel="noopener" target="_blank">CDC — Oral Candidiasis (Thrush). Retrieved May 2026.</a></li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2014/0801/p188.html" rel="noopener" target="_blank">AAFP — Oral Candidiasis: An Overview. Retrieved May 2026.</a></li>
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

        <WhatDoesThisCostBlock conditionSlug="oral-thrush-treatment-online" conditionName="Oral Thrush Treatment" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="oral-thrush-treatment-online" />
        <CommonSymptomsBlock conditionSlug="oral-thrush-treatment-online" conditionName="Oral Thrush Treatment" />
      </div>
    </>
  );
}
