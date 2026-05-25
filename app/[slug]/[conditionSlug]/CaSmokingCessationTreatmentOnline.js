/**
 * CaSmokingCessationTreatmentOnline.js — production California × Smoking Cessation condition page (v3)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'smoking-cessation-treatment-online'.
 *
 * Matches v3 CA UTI template: inline opener paragraph (no CitableSummaryBlock),
 * hero, CA regulatory block (exact reuse), epidemiology block, clinical content,
 * vertical bar chart cost section, CA payor table, medications, dual-path block,
 * FAQ accordion (12 Q/A), JSON-LD schemas (MedicalWebPage + FAQPage + Physician
 * + HowTo + BreadcrumbList + SpeakableSpecification — NEVER QAPage).
 *
 * Authority: USPSTF
 * Guideline: USPSTF 2021 Grade A Recommendation — Tobacco Use Cessation in Adults + CDC Clinical Practice Guideline for Treating Tobacco Use and Dependence
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

const PAGE_URL = 'https://teledirectmd.com/ca/smoking-cessation-treatment-online/';
const PAGE_TITLE = 'Tobacco Use Disorder — Smoking Cessation Treatment Online in California | TeleDirectMD';
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
    id: 'ca-smoking-cessation-treatment-online-faq-0',
    question: 'Can I get smoking cessation treatment online in California?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to provide counseling and prescribe cessation medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD's California-licensed board-certified Family Medicine physician reviews your smoking history, prior quit attempts, nicotine dependence level, and medical history before prescribing a personalized cessation regimen. The USPSTF 2021 Grade A recommendation supports cessation counseling and medication for all adults who smoke. Self pay is $79; Aetna is in-network effective April 30, 2026.
      </p>
    ),
  },
  {
    id: 'ca-smoking-cessation-treatment-online-faq-1',
    question: 'What smoking cessation medications can TeleDirectMD prescribe in California?',
    answer: (
      <p>
        TeleDirectMD prescribes all FDA-approved first-line cessation pharmacotherapies: varenicline (generic Chantix — most effective single agent); bupropion SR 150 mg (also FDA-approved for depression — useful for comorbid mood disorders); and can prescribe nicotine replacement therapy (NRT) — patches, gum, lozenge — though OTC NRT is available without a prescription. Combination therapy (varenicline + NRT, or bupropion + NRT) may be prescribed for highly nicotine-dependent patients.
      </p>
    ),
  },
  {
    id: 'ca-smoking-cessation-treatment-online-faq-2',
    question: 'What is the California Smokers\' Helpline and how does it complement TeleDirectMD?',
    answer: (
      <p>
        The California Smokers' Helpline (1-800-NO-BUTTS) is a free, CDPH-funded telephone counseling service available 7 days a week in English, Spanish, Cantonese, Mandarin, Korean, and Vietnamese. It is funded through the California Tobacco Control Program, established by Proposition 99 in 1988. The physician refers all cessation patients to the Quitline — behavioral counseling combined with pharmacotherapy is more effective than either alone per USPSTF 2021. Telehealth prescribing from TeleDirectMD and Quitline counseling work synergistically.
      </p>
    ),
  },
  {
    id: 'ca-smoking-cessation-treatment-online-faq-3',
    question: 'Is varenicline (generic Chantix) safe and is the boxed warning still in effect?',
    answer: (
      <p>
        Yes, varenicline is safe. The FDA removed the boxed warning for neuropsychiatric adverse effects from varenicline in 2016 after the EAGLES trial — a large randomized controlled trial — found no statistically significant increase in serious neuropsychiatric events in patients taking varenicline compared to NRT or placebo, even in patients with psychiatric history. The physician still screens for depression, suicidal ideation history, and significant psychiatric illness before prescribing, and advises patients to report mood changes. Generic varenicline costs approximately $80–$150 per month with a GoodRx coupon.
      </p>
    ),
  },
  {
    id: 'ca-smoking-cessation-treatment-online-faq-4',
    question: 'What is the smoking rate in California and what does the Tobacco Control Program do?',
    answer: (
      <p>
        California has one of the lowest adult smoking rates in the United States at approximately 8.7% — compared to the national average of 11.5% — due to decades of investment by the California Tobacco Control Program (CTCP), established in 1989 as the first state tobacco control program funded by cigarette tax revenue (Proposition 99). The CDPH estimates that CTCP has prevented approximately 1.3 million tobacco-related deaths in California since 1988. Despite this success, approximately 2.8 million California adults still smoke.
      </p>
    ),
  },
  {
    id: 'ca-smoking-cessation-treatment-online-faq-5',
    question: 'How effective is varenicline compared to nicotine replacement therapy?',
    answer: (
      <p>
        Varenicline is the most effective single pharmacotherapy for smoking cessation per Cochrane meta-analysis: approximately 3× more effective than placebo at 12 months; 1.5× more effective than bupropion; and 1.7× more effective than single nicotine replacement therapy. Combination NRT (nicotine patch + gum or lozenge) is more effective than single NRT alone. Combining pharmacotherapy with behavioral counseling (via the California Smokers' Helpline or a counselor) further improves quit rates by approximately 40%.
      </p>
    ),
  },
  {
    id: 'ca-smoking-cessation-treatment-online-faq-6',
    question: 'Does California Medi-Cal cover smoking cessation treatment?',
    answer: (
      <p>
        Yes. Medi-Cal covers tobacco cessation counseling and FDA-approved cessation medications — including varenicline, bupropion, and NRT — for enrolled beneficiaries under the ACA tobacco cessation benefit. However, TeleDirectMD is not currently enrolled as a Medi-Cal provider. Medi-Cal members can use the $79 self-pay rate at TeleDirectMD or seek cessation treatment from a Medi-Cal-enrolled primary care physician. The free California Smokers' Helpline (1-800-NO-BUTTS) is available to all Californians regardless of insurance status.
      </p>
    ),
  },
  {
    id: 'ca-smoking-cessation-treatment-online-faq-7',
    question: 'What is the California menthol cigarette ban and why does it matter?',
    answer: (
      <p>
        California Senate Bill 793 (2022, upheld by courts) banned the sale of menthol cigarettes and flavored tobacco products in California — a public health measure targeting the disproportionate use of menthol cigarettes by Black Californians. Menthol cigarettes are more addictive and associated with higher nicotine dependence. California is the first large U.S. state to enact and defend a statewide menthol ban. This may affect some patients' smoking patterns — the physician discusses behavioral aspects of cessation, including switching product patterns during the transition to quitting.
      </p>
    ),
  },
  {
    id: 'ca-smoking-cessation-treatment-online-faq-8',
    question: 'Is nicotine replacement therapy (NRT) available without a prescription in California?',
    answer: (
      <p>
        Yes. Nicotine patches (7 mg, 14 mg, 21 mg), nicotine gum (2 mg, 4 mg), and nicotine lozenges are available over the counter at California pharmacies (CVS, Walgreens, Walmart, Rite Aid, Costco) without a prescription. OTC NRT is effective — particularly combination NRT (patch + gum or lozenge) — for patients who prefer not to use prescription medications. The physician can prescribe NRT for insurance coverage under California commercial plans that cover cessation benefits without cost-sharing per ACA requirements.
      </p>
    ),
  },
  {
    id: 'ca-smoking-cessation-treatment-online-faq-9',
    question: 'What is combination nicotine replacement therapy?',
    answer: (
      <p>
        Combination NRT uses a long-acting nicotine formulation (patch 21 mg/day) together with a short-acting formulation (gum 4 mg or lozenge 4 mg as needed for breakthrough cravings). The 2022 Cochrane review on NRT confirms that combination NRT is significantly more effective than single-form NRT. The physician may recommend the patch for 24-hour baseline nicotine delivery plus gum or lozenge for situational cravings triggered by specific activities, social settings, or stress.
      </p>
    ),
  },
  {
    id: 'ca-smoking-cessation-treatment-online-faq-10',
    question: 'Does California law require insurance coverage for smoking cessation treatment?',
    answer: (
      <p>
        Yes. Under the Affordable Care Act, all non-grandfathered commercial health plans in California must cover tobacco cessation counseling and FDA-approved cessation medications without cost-sharing (no copay, no deductible for cessation services). California Assembly Bill 744 telehealth parity applies — plans must cover telehealth cessation visits on the same basis as in-person. Aetna commercial is in-network with TeleDirectMD in California effective April 30, 2026; UnitedHealthcare Commercial effective May 29, 2026. Verify your specific plan's cessation benefit before booking. Self pay is $79.
      </p>
    ),
  },
  {
    id: 'ca-smoking-cessation-treatment-online-faq-11',
    question: 'How does wildfire smoke affect smoking cessation in California?',
    answer: (
      <p>
        California's wildfire smoke contains many of the same toxic chemicals as cigarette smoke — formaldehyde, acrolein, benzene, and particulate matter — providing a California-specific motivational context for quitting. The physician points out that smokers who are also exposed to wildfire smoke face compounded lung and cardiovascular damage risk. Additionally, wildfire smoke can trigger nicotine cravings in smokers who use cigarettes as a coping mechanism during stress — the physician discusses smoke-related stress coping strategies as part of behavioral cessation counseling.
      </p>
    ),
  },
];

const SCHEMAS = [{"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Tobacco Use Disorder \u2014 Smoking Cessation Treatment Online in California | TeleDirectMD", "url": "https://teledirectmd.com/ca/smoking-cessation-treatment-online/", "description": "Smoking cessation treatment online for California adults. Board-certified Family Medicine MD. USPSTF Grade A + CDC guideline-based. Self pay $79. Aetna in-network. Varenicline, bupropion, NRT. Same-day video visits.", "datePublished": "2026-05-20", "dateModified": "2026-05-20", "inLanguage": "en-US", "about": {"@type": "MedicalCondition", "name": "Smoking Cessation", "code": {"@type": "MedicalCode", "code": "F17.210", "codingSystem": "ICD-10-CM"}}, "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient", "geographicArea": {"@type": "AdministrativeArea", "name": "California"}}, "reviewedBy": {"@type": "Physician", "@id": "https://teledirectmd.com/about/#physician-parth-bhavsar", "name": "Parth Bhavsar, MD", "identifier": {"@type": "PropertyValue", "propertyID": "NPI", "value": "1104323203"}, "medicalSpecialty": "Family Medicine", "hasCredential": [{"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Doctor of Medicine (MD)"}, {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Board Certification \u2014 American Board of Family Medicine"}], "licensedIn": "California", "worksFor": {"@type": "MedicalOrganization", "name": "TeleDirectMD", "url": "https://teledirectmd.com"}, "sameAs": ["https://npiregistry.cms.hhs.gov/provider-view/1104323203", "https://teledirectmd.com/about/"]}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#ca-smoking-cessation-treatment-online-opening", "#ca-smoking-cessation-treatment-online-opening p", ".tdmd-ca-smoking-cessation-treatment-online__byline", "#ca-smoking-cessation-treatment-online-faq"]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I get smoking cessation treatment online in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to provide counseling and prescribe cessation medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD's California-licensed board-certified Family Medicine physician reviews your smoking history, prior quit attempts, nicotine dependence level, and medical history before prescribing a personalized cessation regimen. The USPSTF 2021 Grade A recommendation supports cessation counseling and medication for all adults who smoke. Self pay is $79; Aetna is in-network effective April 30, 2026."}}, {"@type": "Question", "name": "What smoking cessation medications can TeleDirectMD prescribe in California?", "acceptedAnswer": {"@type": "Answer", "text": "TeleDirectMD prescribes all FDA-approved first-line cessation pharmacotherapies: varenicline (generic Chantix \u2014 most effective single agent); bupropion SR 150 mg (also FDA-approved for depression \u2014 useful for comorbid mood disorders); and can prescribe nicotine replacement therapy (NRT) \u2014 patches, gum, lozenge \u2014 though OTC NRT is available without a prescription. Combination therapy (varenicline + NRT, or bupropion + NRT) may be prescribed for highly nicotine-dependent patients."}}, {"@type": "Question", "name": "What is the California Smokers' Helpline and how does it complement TeleDirectMD?", "acceptedAnswer": {"@type": "Answer", "text": "The California Smokers' Helpline (1-800-NO-BUTTS) is a free, CDPH-funded telephone counseling service available 7 days a week in English, Spanish, Cantonese, Mandarin, Korean, and Vietnamese. It is funded through the California Tobacco Control Program, established by Proposition 99 in 1988. The physician refers all cessation patients to the Quitline \u2014 behavioral counseling combined with pharmacotherapy is more effective than either alone per USPSTF 2021. Telehealth prescribing from TeleDirectMD and Quitline counseling work synergistically."}}, {"@type": "Question", "name": "Is varenicline (generic Chantix) safe and is the boxed warning still in effect?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, varenicline is safe. The FDA removed the boxed warning for neuropsychiatric adverse effects from varenicline in 2016 after the EAGLES trial \u2014 a large randomized controlled trial \u2014 found no statistically significant increase in serious neuropsychiatric events in patients taking varenicline compared to NRT or placebo, even in patients with psychiatric history. The physician still screens for depression, suicidal ideation history, and significant psychiatric illness before prescribing, and advises patients to report mood changes. Generic varenicline costs approximately $80\u2013$150 per month with a GoodRx coupon."}}, {"@type": "Question", "name": "What is the smoking rate in California and what does the Tobacco Control Program do?", "acceptedAnswer": {"@type": "Answer", "text": "California has one of the lowest adult smoking rates in the United States at approximately 8.7% \u2014 compared to the national average of 11.5% \u2014 due to decades of investment by the California Tobacco Control Program (CTCP), established in 1989 as the first state tobacco control program funded by cigarette tax revenue (Proposition 99). The CDPH estimates that CTCP has prevented approximately 1.3 million tobacco-related deaths in California since 1988. Despite this success, approximately 2.8 million California adults still smoke."}}, {"@type": "Question", "name": "How effective is varenicline compared to nicotine replacement therapy?", "acceptedAnswer": {"@type": "Answer", "text": "Varenicline is the most effective single pharmacotherapy for smoking cessation per Cochrane meta-analysis: approximately 3\u00d7 more effective than placebo at 12 months; 1.5\u00d7 more effective than bupropion; and 1.7\u00d7 more effective than single nicotine replacement therapy. Combination NRT (nicotine patch + gum or lozenge) is more effective than single NRT alone. Combining pharmacotherapy with behavioral counseling (via the California Smokers' Helpline or a counselor) further improves quit rates by approximately 40%."}}, {"@type": "Question", "name": "Does California Medi-Cal cover smoking cessation treatment?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Medi-Cal covers tobacco cessation counseling and FDA-approved cessation medications \u2014 including varenicline, bupropion, and NRT \u2014 for enrolled beneficiaries under the ACA tobacco cessation benefit. However, TeleDirectMD is not currently enrolled as a Medi-Cal provider. Medi-Cal members can use the $79 self-pay rate at TeleDirectMD or seek cessation treatment from a Medi-Cal-enrolled primary care physician. The free California Smokers' Helpline (1-800-NO-BUTTS) is available to all Californians regardless of insurance status."}}, {"@type": "Question", "name": "What is the California menthol cigarette ban and why does it matter?", "acceptedAnswer": {"@type": "Answer", "text": "California Senate Bill 793 (2022, upheld by courts) banned the sale of menthol cigarettes and flavored tobacco products in California \u2014 a public health measure targeting the disproportionate use of menthol cigarettes by Black Californians. Menthol cigarettes are more addictive and associated with higher nicotine dependence. California is the first large U.S. state to enact and defend a statewide menthol ban. This may affect some patients' smoking patterns \u2014 the physician discusses behavioral aspects of cessation, including switching product patterns during the transition to quitting."}}, {"@type": "Question", "name": "Is nicotine replacement therapy (NRT) available without a prescription in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Nicotine patches (7 mg, 14 mg, 21 mg), nicotine gum (2 mg, 4 mg), and nicotine lozenges are available over the counter at California pharmacies (CVS, Walgreens, Walmart, Rite Aid, Costco) without a prescription. OTC NRT is effective \u2014 particularly combination NRT (patch + gum or lozenge) \u2014 for patients who prefer not to use prescription medications. The physician can prescribe NRT for insurance coverage under California commercial plans that cover cessation benefits without cost-sharing per ACA requirements."}}, {"@type": "Question", "name": "What is combination nicotine replacement therapy?", "acceptedAnswer": {"@type": "Answer", "text": "Combination NRT uses a long-acting nicotine formulation (patch 21 mg/day) together with a short-acting formulation (gum 4 mg or lozenge 4 mg as needed for breakthrough cravings). The 2022 Cochrane review on NRT confirms that combination NRT is significantly more effective than single-form NRT. The physician may recommend the patch for 24-hour baseline nicotine delivery plus gum or lozenge for situational cravings triggered by specific activities, social settings, or stress."}}, {"@type": "Question", "name": "Does California law require insurance coverage for smoking cessation treatment?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Under the Affordable Care Act, all non-grandfathered commercial health plans in California must cover tobacco cessation counseling and FDA-approved cessation medications without cost-sharing (no copay, no deductible for cessation services). California Assembly Bill 744 telehealth parity applies \u2014 plans must cover telehealth cessation visits on the same basis as in-person. Aetna commercial is in-network with TeleDirectMD in California effective April 30, 2026; UnitedHealthcare Commercial effective May 29, 2026. Verify your specific plan's cessation benefit before booking. Self pay is $79."}}, {"@type": "Question", "name": "How does wildfire smoke affect smoking cessation in California?", "acceptedAnswer": {"@type": "Answer", "text": "California's wildfire smoke contains many of the same toxic chemicals as cigarette smoke \u2014 formaldehyde, acrolein, benzene, and particulate matter \u2014 providing a California-specific motivational context for quitting. The physician points out that smokers who are also exposed to wildfire smoke face compounded lung and cardiovascular damage risk. Additionally, wildfire smoke can trigger nicotine cravings in smokers who use cigarettes as a coping mechanism during stress \u2014 the physician discusses smoke-related stress coping strategies as part of behavioral cessation counseling."}}]}, {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Get Tobacco Use Disorder \u2014 Smoking Cessation Treatment Online in California", "description": "Three steps to receive tobacco use disorder \u2014 smoking cessation treatment evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.", "totalTime": "PT30M", "estimatedCost": {"@type": "MonetaryAmount", "currency": "USD", "value": "79"}, "step": [{"@type": "HowToStep", "position": 1, "name": "Book your video visit", "text": "Visit teledirectmd.com and select California Smoking Cessation treatment. No referral needed. Self pay $79. Many visits available same day.", "url": "https://teledirectmd.com/book-online"}, {"@type": "HowToStep", "position": 2, "name": "See a California-licensed MD by secure video", "text": "Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your symptoms, history, and red-flag screening. Consent per CA B&P Section 2290.5 confirmed.", "url": "https://teledirectmd.com/ca/smoking-cessation-treatment-online/"}, {"@type": "HowToStep", "position": 3, "name": "Receive your treatment plan and e-prescription", "text": "If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit.", "url": "https://teledirectmd.com/ca/smoking-cessation-treatment-online/"}]}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "TeleDirectMD", "item": "https://teledirectmd.com"}, {"@type": "ListItem", "position": 2, "name": "California", "item": "https://teledirectmd.com/ca/"}, {"@type": "ListItem", "position": 3, "name": "Tobacco Use Disorder \u2014 Smoking Cessation Treatment Online in California", "item": "https://teledirectmd.com/ca/smoking-cessation-treatment-online/"}]}];

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

export default function CaSmokingCessationTreatmentOnline() {
  const pid = 'ca-smoking-cessation-treatment-online';

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
            <span aria-current="page">Tobacco Use Disorder — Smoking Cessation Treatment Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Smoking Cessation Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · USPSTF Grade A + CDC guideline-based smoking cessation · CA B&P §2290.5 compliant.
                </p>
                <p>
                  Smoking Cessation is a condition commonly evaluated and, when appropriate, treated via telehealth. TeleDirectMD uses a safety-first approach, screening for red-flag symptoms that require in-person or emergency care before determining whether treatment by video visit is appropriate. This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas.
                </p>

                {/* v3: Inline opener paragraph — replaces CitableSummaryBlock */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can I get tobacco use disorder — smoking cessation treatment online in California?</strong> Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and are held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. Self pay is $79. <a href="/insurance/">Aetna is in-network</a> as of April 30, 2026; UnitedHealthcare Commercial approved May 29, 2026.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> F17.210 (Nicotine dependence, cigarettes, uncomplicated); Z87.891 (Personal history of nicotine dependence) — final coding per clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Smoking Cessation Care in California</h2>
                  <ul>
                    <li>Fast evaluation for tobacco use disorder — smoking cessation treatment symptoms</li>
                    <li>Red-flag screening for serious complications requiring in-person care</li>
                    <li>Guideline-based treatment per USPSTF</li>
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
            <h2>Tobacco Use Disorder — Smoking Cessation Treatment Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these apply to you:</strong></p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Current cigarette smoker or recent quitter seeking pharmacotherapy support</li>
                  <li>Motivated to quit or seeking medication to support a planned quit attempt</li>
                  <li>No active severe psychiatric symptoms or recent seizure history</li>
                  <li>USPSTF Grade A recommendation applies to all adults who smoke</li>
                  <li>Free California Smokers' Helpline (1-800-NO-BUTTS) referral provided at every visit</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&#10007; Seek In-Person or Emergency Care If</h3>
                <ul>
                  <li>Active chest pain, shortness of breath, or hemoptysis — ER evaluation before cessation visit</li>
                  <li>New diagnosis of lung cancer, COPD, or cardiovascular disease requiring specialist management — coordinate with specialist before starting cessation pharmacotherapy</li>
                  <li>Severe active psychiatric symptoms (suicidal ideation, psychosis) — psychiatric evaluation before prescribing varenicline or bupropion</li>
                  <li>Seizure history — bupropion is contraindicated in seizure disorder and eating disorders</li>
                  <li>Pregnancy — tobacco cessation in pregnancy requires obstetric co-management; USPSTF recommends behavioral interventions first</li>
                  <li>E-cigarette or vape use as only tobacco product — physician discusses cessation options for nicotine vaping</li>
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
            <h2>California Telehealth Law and Your Tobacco Use Disorder — Smoking Cessation Treatment Visit</h2>

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

            <h3>Are tobacco use disorder — smoking cessation treatment medications controlled substances under California law?</h3>
            <p>
              Varenicline (Chantix/generic), bupropion SR (Wellbutrin SR/Zyban/generic), and nicotine replacement therapy (patch, gum, lozenge) are not controlled substances. They can be prescribed via California telehealth and transmitted electronically to any California pharmacy under Assembly Bill 2789. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Tobacco Use Disorder — Smoking Cessation Treatment Works in California</h2>
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
            <h2>How Common Is Smoking Cessation in California?</h2>
            <p>
              California has one of the lowest adult smoking rates in the U.S. at approximately 8.7% — below the national average of 11.5% — due to decades of investment by the California Tobacco Control Program (CTCP), established in 1989 as the first state tobacco control program funded by cigarette tax revenue. Despite the low rate, approximately 2.8 million California adults still smoke. Tobacco use remains elevated among: Native American and Alaska Native Californians (19.4%), multiracial adults (15.1%), LGBTQ+ individuals (19.3%), and adults living below the federal poverty level (18.7%) per CHIS 2023. — <a href="https://www.cdph.ca.gov/Programs/CCDPHP/DCDIC/CTCB/Pages/CaliforniaTobaccoControlProgram.aspx" rel="noopener" target="_blank">California Tobacco Control Program (CTCP) — CDPH</a>.
            </p>
            <p>
              Clinical guidance for tobacco use disorder — smoking cessation treatment is provided by <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/tobacco-use-in-adults-and-pregnant-women-counseling-and-interventions" rel="noopener" target="_blank">USPSTF</a> through the USPSTF 2021 Grade A Recommendation — Tobacco Use Cessation in Adults + CDC Clinical Practice Guideline for Treating Tobacco Use and Dependence. TeleDirectMD follows these guidelines on every patient visit.
            </p>
            <h3>What causes smoking cessation and who is most at risk in California?</h3>
            <p>
              Smoking Cessation affects California adults across all demographics, though certain populations face higher risk based on the specific condition. The physician reviews your individual risk factors at each visit. Telehealth is appropriate for adults 18 and older with mild to moderate presentations who do not have red-flag symptoms requiring immediate in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Tobacco Use Disorder — Smoking Cessation Treatment Cost &amp; Insurance in California</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Smoking Cessation cost comparison">
                <h3>Typical Smoking Cessation Visit Cost in California</h3>
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
            <h2>Tobacco Use Disorder — Smoking Cessation Treatment Medication Options and Costs in California</h2>
            <p>
              Medications for tobacco use disorder — smoking cessation treatment are selected based on current guidelines from <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/tobacco-use-in-adults-and-pregnant-women-counseling-and-interventions" rel="noopener" target="_blank">USPSTF</a>, patient history, allergies, and relevant contraindications assessed at the visit. GoodRx-verified pricing is shown below.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Tobacco Use Disorder — Smoking Cessation Treatment medication options and GoodRx prices">
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
                    <td><strong>Varenicline 0.5/1 mg (generic Chantix)</strong> · First-line</td>
                    <td>0.5 mg QD × 3 days → 0.5 mg BID × 4 days → 1 mg BID × 12 weeks; set quit date at week 1–2</td>
                    <td><a href="https://www.goodrx.com/varenicline" target="_blank" rel="noopener">~$80–$150/month GoodRx (generic)</a></td>
                    <td>Most effective single pharmacotherapy per Cochrane meta-analysis (3× placebo, 1.7× NRT). FDA removed boxed warning for neuropsychiatric effects in 2016 after EAGLES trial. Physician screens for depression history.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Bupropion SR 150 mg (generic Wellbutrin SR / Zyban)</strong> · First-line</td>
                    <td>150 mg QD × 3 days → 150 mg BID × 7–12 weeks; start 1–2 weeks before quit date</td>
                    <td><a href="https://www.goodrx.com/bupropion" target="_blank" rel="noopener">~$15–$40/month GoodRx (generic)</a></td>
                    <td>Good option when comorbid depression is present. Contraindicated in seizure disorder and eating disorders. Lower efficacy than varenicline but well-tolerated.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Nicotine patch 21/14/7 mg (generic, Nicoderm CQ)</strong> · First-line</td>
                    <td>21 mg/day × 6 weeks → 14 mg/day × 2 weeks → 7 mg/day × 2 weeks (for smokers of ≥10 cigarettes/day)</td>
                    <td><a href="https://www.goodrx.com/nicotine-patch" target="_blank" rel="noopener">~$30–$50 / 14-patch supply OTC</a></td>
                    <td>Long-acting NRT. Available OTC. Physician can prescribe for insurance coverage. Pair with short-acting NRT (gum or lozenge) for breakthrough cravings — combination NRT is more effective than single NRT per Cochrane 2022.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Nicotine gum 2/4 mg (generic, Nicorette)</strong> · First-line</td>
                    <td>1 piece q1–2h initially; 4 mg for heavier smokers (&gt;25 cigarettes/day); chew-and-park technique</td>
                    <td><a href="https://www.goodrx.com/nicotine-gum" target="_blank" rel="noopener">~$40–$70 / 170 pieces OTC</a></td>
                    <td>Available OTC. Short-acting NRT for breakthrough cravings. Pair with nicotine patch for combination NRT. Chew slowly until 'peppery' taste, then park between cheek and gum.</td>
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
            <p>For most adults with mild to moderate tobacco use disorder — smoking cessation treatment without red-flag symptoms, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below to determine the right care pathway for you.</p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Current cigarette smoker or recent quitter seeking pharmacotherapy support</li>
                  <li>Motivated to quit or seeking medication to support a planned quit attempt</li>
                  <li>No active severe psychiatric symptoms or recent seizure history</li>
                  <li>USPSTF Grade A recommendation applies to all adults who smoke</li>
                  <li>Free California Smokers' Helpline (1-800-NO-BUTTS) referral provided at every visit</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&rarr; Use in-person care if</h3>
                <ul>
                  <li>Active chest pain, shortness of breath, or hemoptysis — ER evaluation before cessation visit</li>
                  <li>New diagnosis of lung cancer, COPD, or cardiovascular disease requiring specialist management — coordinate with specialist before starting cessation pharmacotherapy</li>
                  <li>Severe active psychiatric symptoms (suicidal ideation, psychosis) — psychiatric evaluation before prescribing varenicline or bupropion</li>
                  <li>Seizure history — bupropion is contraindicated in seizure disorder and eating disorders</li>
                  <li>Pregnancy — tobacco cessation in pregnancy requires obstetric co-management; USPSTF recommends behavioral interventions first</li>
                  <li>E-cigarette or vape use as only tobacco product — physician discusses cessation options for nicotine vaping</li>
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
              sectionTitle="Frequently Asked Questions — Tobacco Use Disorder — Smoking Cessation Treatment in California"
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
                  <span className="tdmd-ca-uti__sibling-why">Smoking is the single most modifiable asthma trigger — cessation is core management.</span>
                </a>
              <a key="acid-reflux-refills-online" className="tdmd-ca-uti__sibling" href="/ca/acid-reflux-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Acid Reflux Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Nicotine relaxes the lower esophageal sphincter — smoking worsens GERD.</span>
                </a>
              <a key="migraine-refills-online" className="tdmd-ca-uti__sibling" href="/ca/migraine-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Migraine Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Smoking is a migraine trigger — cessation reduces headache frequency.</span>
                </a>
              <a key="anti-aging-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/anti-aging-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Anti-Aging Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Smoking accelerates photoaging — cessation is the most impactful lifestyle anti-aging intervention.</span>
                </a>
              <a key="hypertension-refills-online" className="tdmd-ca-uti__sibling" href="/ca/hypertension-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Hypertension Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Smoking increases cardiovascular risk on top of hypertension — cessation is critical.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ──────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/smoking-cessation-treatment-online/">Smoking Cessation national condition page</a>. Use the links below to explore insurance details, book a visit, or review other conditions.</p>
            <div className="tdmd-ca-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/smoking-cessation-treatment-online/">National Smoking Cessation page</a>
              <a href="/health-guides/">Smoking Cessation health guides</a>
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
              <li><a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/tobacco-use-in-adults-and-pregnant-women-counseling-and-interventions" rel="noopener" target="_blank">USPSTF — Tobacco Use Cessation in Adults (2021 Grade A)</a></li>
              <li><a href="https://www.cdc.gov/tobacco/data_statistics/index.htm" rel="noopener" target="_blank">CDC — Smoking and Tobacco Use Data</a></li>
              <li><a href="https://www.cdph.ca.gov/Programs/CCDPHP/DCDIC/CTCB/Pages/CaliforniaTobaccoControlProgram.aspx" rel="noopener" target="_blank">California Tobacco Control Program (CTCP) — CDPH</a></li>
              <li><a href="https://ask.chis.ucla.edu/" rel="noopener" target="_blank">California Health Interview Survey (CHIS) 2023 — Tobacco Data</a></li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202120220SB793" rel="noopener" target="_blank">California SB 793 — Menthol Cigarette Ban</a></li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 — Telehealth Parity (AB 744)</a></li>
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

        <WhatDoesThisCostBlock conditionSlug="smoking-cessation-treatment-online" conditionName="Tobacco Use Disorder — Smoking Cessation Treatment" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="smoking-cessation-treatment-online" />
        <CommonSymptomsBlock conditionSlug="smoking-cessation-treatment-online" conditionName="Tobacco Use Disorder — Smoking Cessation Treatment" />
      </div>
    </>
  );
}
