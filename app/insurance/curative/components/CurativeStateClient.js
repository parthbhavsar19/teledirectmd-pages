'use client';
import { B, INSURERS, COPAY_DATA, STATE_PLAN_DETAILS } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, Breadcrumb, InsuranceDisclaimer, AnswerBlock, CopayCard, CommissionerLink } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../../lib/review-schema';
import { CitableSummaryBlock } from '../../../components/CitableSummary';
import { citableSummaryToJsonLd } from '../../../../lib/citable-summary';
import MedicaidExclusion from '../../../components/MedicaidExclusion';

const curative = INSURERS.curative;
const cColor = curative.color;

// State-differentiated copy lives here, keyed by state code, so enabling a new
// Curative state in CURATIVE_STATES only requires adding its narrative block.
const STATE_COPY = {
  GA: {
    conditionPrefix: '/ga/',
    intro:
      'Georgia is TeleDirectMD’s home state and the first state activated under the Curative agreement. Parth Bhavsar, MD is board-certified in Family Medicine, licensed to practice in Georgia, and sees Georgia patients by secure video for the same everyday problems you would take to a primary care or urgent care office.',
    networkPara:
      'Georgia members reach the network through Curative’s Cigna Healthcare PPO wrap network arrangement. TeleDirectMD participates through a direct contract with Curative, so your visit is processed as in-network care rather than as an out-of-network claim. The agreement took effect July 7, 2026, and credentialing was confirmed active on July 24, 2026.',
    localPara:
      'Because the visit is virtual, there is no drive into Midtown Atlanta traffic and no waiting room. Georgia patients from Atlanta, Savannah, Augusta, Columbus, Macon, and Athens, as well as rural counties without a nearby urgent care, connect from home or from work. Prescriptions are routed electronically to your local pharmacy, including CVS, Walgreens, Publix, Kroger, and Walmart locations across the state.',
    faqs: [
      {
        q: 'Which doctors take Curative insurance in Georgia?',
        a: 'TeleDirectMD is in-network with Curative in Georgia for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD, a board-certified Family Medicine physician licensed in Georgia (NPI 1104323203). Appointments are virtual and usually available the same day.',
      },
      {
        q: 'How do Georgia Curative members access the TeleDirectMD network?',
        a: 'Georgia members access the network through Curative’s Cigna Healthcare PPO wrap network arrangement. TeleDirectMD holds a direct contract with Curative, effective July 7, 2026, so your virtual visit is billed as in-network care. You do not need a referral.',
      },
      {
        q: 'What will a Georgia Curative member pay for a video visit?',
        a: 'Curative members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including this visit. Members who have not completed the Baseline Visit pay toward their plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. A flat $79 self-pay visit is also available if you prefer not to use insurance.',
      },
      {
        q: 'Is Parth Bhavsar, MD licensed in Georgia?',
        a: 'Yes. Dr. Bhavsar holds an active Georgia medical license and is board-certified in Family Medicine. Georgia is TeleDirectMD’s home state, and Georgia telehealth rules allow a licensed physician to evaluate and prescribe for established and new adult patients by real-time video when clinically appropriate.',
      },
      {
        q: 'What can a Georgia Curative member be treated for online?',
        a: 'Common adult conditions such as urinary tract infections, sinus infections, sore throat, ear pain, pink eye, flu, cold sores, rashes, and seasonal allergies, plus refills for hypertension, hyperlipidemia, and hypothyroidism. If your symptoms need an in-person exam, imaging, or emergency care, we will say so during the visit and point you to the right Georgia facility.',
      },
      {
        q: 'Does TeleDirectMD accept Georgia Medicaid or Medicare plans through Curative?',
        a: 'No. The Curative agreement covers Commercial PPO, EPO, and self-funded plans only. TeleDirectMD is not in-network with Georgia Medicaid, Managed Medicaid, PeachCare for Kids (CHIP), or Medicare-Medicaid plans, and does not bill them in any state. The $79 flat self-pay visit remains available.',
      },
    ],
  },
  CA: {
    conditionPrefix: '/ca/',
    intro:
      'California is the largest of the states activated under the Curative agreement. Parth Bhavsar, MD is board-certified in Family Medicine, licensed in California, and treats California members by secure video for the everyday problems that otherwise mean a half day at an urgent care in Los Angeles or the Bay Area.',
    networkPara:
      'California members are covered under TeleDirectMD’s direct contract with Curative for Commercial PPO, EPO, and self-funded plans, effective July 7, 2026. The visit is submitted as in-network care, not as an out-of-network claim, and no referral is required.',
    localPara:
      'Members connect from Los Angeles, San Diego, San Jose, San Francisco, Fresno, and Sacramento, and from Central Valley and far northern counties where the nearest in-network office visit can be an hour away. Prescriptions are sent electronically to CVS, Walgreens, Rite Aid, Safeway, and Walmart pharmacies statewide.',
    faqs: [
      {
        q: 'Which doctors take Curative insurance in California?',
        a: 'TeleDirectMD is in-network with Curative in California for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD, a board-certified Family Medicine physician licensed in California (NPI 1104323203), and are usually available the same day.',
      },
      {
        q: 'What will a California Curative member pay for a video visit?',
        a: 'Curative members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, which includes this visit. Members who have not completed the Baseline Visit pay toward their plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. A flat $79 self-pay visit is available if you would rather not use insurance.',
      },
      {
        q: 'Does California telehealth law allow a video visit to count as a full visit?',
        a: 'Yes. California’s Telehealth Advancement Act (Business and Professions Code Section 2290.5) permits a licensed physician to evaluate and prescribe by real-time video, and the Medical Board of California applies the same standard of care that governs an in-person visit.',
      },
      {
        q: 'Does the Curative contract include anything specific to California?',
        a: 'Yes. California is one of the jurisdictions with its own regulatory addendum attached to the Curative provider agreement, so the plan is written to meet California-specific requirements for insured members alongside the national contract terms.',
      },
      {
        q: 'Does TeleDirectMD accept Medi-Cal or Medicare plans through Curative?',
        a: 'No. The Curative agreement covers Commercial PPO, EPO, and self-funded plans only. TeleDirectMD is not in-network with Medi-Cal, Managed Medi-Cal, CHIP, or Medicare-Medicaid plans, and does not bill them in any state. The $79 flat self-pay visit remains available.',
      },
    ],
  },
  DC: {
    conditionPrefix: '/dc/',
    intro:
      'District of Columbia members are covered under the Curative agreement, and visits are with Parth Bhavsar, MD, board-certified in Family Medicine and licensed in the District. A video visit fits around a workday downtown rather than replacing one.',
    networkPara:
      'The District is covered by TeleDirectMD’s direct contract with Curative for Commercial PPO, EPO, and self-funded plans, effective July 7, 2026. Visits bill as in-network care at the contracted rate, with no referral needed.',
    localPara:
      'Members join from Capitol Hill, Georgetown, Dupont Circle, Columbia Heights, Foggy Bottom, and Brookland, including commuters who live in the District but work irregular hours. Prescriptions route electronically to CVS, Walgreens, Rite Aid, Giant Food, and Walmart pharmacies across the District.',
    faqs: [
      {
        q: 'Which doctors take Curative insurance in Washington, D.C.?',
        a: 'TeleDirectMD is in-network with Curative in the District of Columbia for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD (NPI 1104323203), board-certified in Family Medicine and licensed in the District.',
      },
      {
        q: 'What will a District of Columbia Curative member pay?',
        a: 'Members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including this visit. Without the Baseline Visit, the visit applies to your plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. The flat $79 self-pay option is always available.',
      },
      {
        q: 'Can a D.C. physician start care by telehealth?',
        a: 'Yes. D.C. Code Section 3-1201.05 allows a physician-patient relationship to be established through telehealth, and the D.C. Board of Medicine requires an adequate evaluation before prescribing, at the same standard of care as an in-person encounter.',
      },
      {
        q: 'Is there a District-specific part of the Curative contract?',
        a: 'Yes. A District of Columbia regulatory addendum sits alongside the national Curative provider agreement, so District-specific requirements for insured members are built into the contract that covers your visit.',
      },
      {
        q: 'Does TeleDirectMD bill D.C. Medicaid or Alliance plans through Curative?',
        a: 'No. The Curative agreement is limited to Commercial PPO, EPO, and self-funded plans. TeleDirectMD is not in-network with D.C. Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plans, and does not bill them in any state. Self-pay is $79 flat.',
      },
    ],
  },
  FL: {
    conditionPrefix: '/fl/',
    intro:
      'Florida members are covered under the Curative agreement, with visits handled by Parth Bhavsar, MD, board-certified in Family Medicine and licensed in Florida. Same-day video visits cover the routine adult problems that fill Florida urgent care waiting rooms.',
    networkPara:
      'Florida is covered by TeleDirectMD’s direct contract with Curative for Commercial PPO, EPO, and self-funded plans, effective July 7, 2026, so a video visit processes as in-network care rather than an out-of-network claim.',
    localPara:
      'Members connect from Jacksonville, Miami, Tampa, Orlando, St. Petersburg, and Fort Lauderdale, and from Panhandle and inland counties where driving to an in-network office is the main obstacle. Prescriptions go electronically to CVS, Walgreens, Publix, Winn-Dixie, and Walmart pharmacies.',
    faqs: [
      {
        q: 'Which doctors take Curative insurance in Florida?',
        a: 'TeleDirectMD is in-network with Curative in Florida for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD (NPI 1104323203), board-certified in Family Medicine and licensed in Florida, usually same day.',
      },
      {
        q: 'What will a Florida Curative member pay for a video visit?',
        a: 'Members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including this visit. Members who have not completed it pay toward their plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. A flat $79 self-pay visit is also available.',
      },
      {
        q: 'Does Florida law allow prescribing after a video visit?',
        a: 'Yes. Florida Statute 456.47 lets a registered telehealth provider establish a patient relationship and prescribe by video for adult conditions, subject to the prevailing standard of care. Controlled substances are outside what TeleDirectMD prescribes.',
      },
      {
        q: 'Is Florida covered by a state addendum in the Curative contract?',
        a: 'Yes. Florida has a dedicated regulatory addendum in the Curative provider agreement, meaning the plan meets Florida-specific requirements for insured members in addition to the national contract terms.',
      },
      {
        q: 'Does TeleDirectMD accept Florida Medicaid or Medicare plans through Curative?',
        a: 'No. The Curative agreement covers Commercial PPO, EPO, and self-funded plans only. TeleDirectMD is not in-network with Florida Medicaid, Managed Medicaid, Florida KidCare (CHIP), or Medicare-Medicaid plans, in any state. The $79 flat self-pay visit remains available.',
      },
    ],
  },
  IN: {
    conditionPrefix: '/in/',
    intro:
      'Indiana members are covered under the Curative agreement. Parth Bhavsar, MD is board-certified in Family Medicine and licensed in Indiana, and sees Indiana members by secure video for common adult conditions and stable medication refills.',
    networkPara:
      'Indiana is covered by TeleDirectMD’s direct contract with Curative for Commercial PPO, EPO, and self-funded plans, effective July 7, 2026. Benefits and any remaining deductible are verified before the visit, and the claim is filed as in-network care.',
    localPara:
      'Members join from Indianapolis, Fort Wayne, Evansville, South Bend, Carmel, and Bloomington, as well as smaller counties where the nearest urgent care closes in the early evening. Prescriptions are routed electronically to CVS, Walgreens, Kroger, Meijer, and Walmart pharmacies.',
    faqs: [
      {
        q: 'Which doctors take Curative insurance in Indiana?',
        a: 'TeleDirectMD is in-network with Curative in Indiana for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD (NPI 1104323203), board-certified in Family Medicine and licensed in Indiana.',
      },
      {
        q: 'What will an Indiana Curative member pay?',
        a: 'Members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including this visit. Otherwise the visit applies to your plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. Self-pay is a flat $79.',
      },
      {
        q: 'Does Indiana allow a new patient relationship to start by telehealth?',
        a: 'Yes. Indiana Code 25-1-9.5 permits a licensed provider to establish a provider-patient relationship through telehealth, with prescribing authority consistent with in-person standards of care.',
      },
      {
        q: 'Does the Curative agreement address Indiana specifically?',
        a: 'Yes. The provider agreement includes an Indiana regulatory addendum, so the plan is written to satisfy Indiana-specific requirements for insured members.',
      },
      {
        q: 'Does TeleDirectMD accept Indiana Medicaid or HIP plans through Curative?',
        a: 'No. Coverage is limited to Commercial PPO, EPO, and self-funded plans. TeleDirectMD is not in-network with Indiana Medicaid, the Healthy Indiana Plan, CHIP, or Medicare-Medicaid plans, and does not bill them in any state. The $79 self-pay visit is still available.',
      },
    ],
  },
  LA: {
    conditionPrefix: '/la/',
    intro:
      'Louisiana members are covered under the Curative agreement, with visits handled by Parth Bhavsar, MD, board-certified in Family Medicine and licensed in Louisiana. Video visits suit the routine problems that would otherwise mean an after-hours clinic trip.',
    networkPara:
      'Louisiana is covered by TeleDirectMD’s direct contract with Curative for Commercial PPO, EPO, and self-funded plans, effective July 7, 2026, billed at the contracted in-network rate.',
    localPara:
      'Members connect from New Orleans, Baton Rouge, Shreveport, Lafayette, Lake Charles, and Monroe, including parishes where storm season and long drives make a scheduled office visit unreliable. Prescriptions go electronically to CVS, Walgreens, Winn-Dixie, Brookshire’s, and Walmart pharmacies.',
    faqs: [
      {
        q: 'Which doctors take Curative insurance in Louisiana?',
        a: 'TeleDirectMD is in-network with Curative in Louisiana for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD (NPI 1104323203), board-certified in Family Medicine and licensed in Louisiana.',
      },
      {
        q: 'What will a Louisiana Curative member pay for a video visit?',
        a: 'Members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including this visit. Members who have not completed it pay toward their plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. A flat $79 self-pay visit is available.',
      },
      {
        q: 'What does Louisiana require of a telemedicine visit?',
        a: 'Louisiana Revised Statutes Title 37, Section 1271.1 permits telemedicine by a licensed practitioner, and the Louisiana State Board of Medical Examiners requires the same standard of care and documentation as in-person treatment.',
      },
      {
        q: 'Is Louisiana an addendum state under the Curative contract?',
        a: 'Yes. Louisiana is one of the addendum jurisdictions under the Curative provider agreement, so Louisiana-specific requirements for insured members are incorporated into the contract behind your visit.',
      },
      {
        q: 'Does TeleDirectMD accept Louisiana Medicaid or Healthy Louisiana plans through Curative?',
        a: 'No. The Curative agreement covers Commercial PPO, EPO, and self-funded plans only. TeleDirectMD is not in-network with Louisiana Medicaid, Healthy Louisiana managed care, LaCHIP, or Medicare-Medicaid plans, in any state. Self-pay is $79 flat.',
      },
    ],
  },
  MD: {
    conditionPrefix: '/md/',
    intro:
      'Maryland members are covered under the Curative agreement. Parth Bhavsar, MD is board-certified in Family Medicine and licensed in Maryland, and treats Maryland members by secure video, usually the same day.',
    networkPara:
      'Maryland is covered by TeleDirectMD’s direct contract with Curative for Commercial PPO, EPO, and self-funded plans, effective July 7, 2026. No referral is required, and the visit is filed as in-network care.',
    localPara:
      'Members join from Baltimore, Columbia, Silver Spring, Frederick, Germantown, and Waldorf, including commuters in the Washington and Baltimore corridors who cannot give up a workday for a clinic visit. Prescriptions route electronically to CVS, Walgreens, Rite Aid, Giant Food, and Walmart pharmacies.',
    faqs: [
      {
        q: 'Which doctors take Curative insurance in Maryland?',
        a: 'TeleDirectMD is in-network with Curative in Maryland for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD (NPI 1104323203), board-certified in Family Medicine and licensed in Maryland.',
      },
      {
        q: 'What will a Maryland Curative member pay?',
        a: 'Members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including this visit. Without it, the visit applies to your plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. The flat $79 self-pay rate is always available.',
      },
      {
        q: 'Does Maryland treat a telehealth visit the same as an office visit?',
        a: 'Maryland Health-General Article Section 19-319 supports forming a bona fide patient relationship through interactive audio and video, and Maryland requires telehealth coverage parity for services that would be covered in person.',
      },
      {
        q: 'Does the Curative contract include a Maryland addendum?',
        a: 'Yes. The provider agreement attaches a Maryland regulatory addendum, so the plan meets Maryland-specific requirements for insured members on top of the national terms.',
      },
      {
        q: 'Does TeleDirectMD accept Maryland Medicaid or HealthChoice plans through Curative?',
        a: 'No. The agreement covers Commercial PPO, EPO, and self-funded plans only. TeleDirectMD is not in-network with Maryland Medicaid, HealthChoice managed care, CHIP, or Medicare-Medicaid plans, and does not bill them in any state. Self-pay is $79 flat.',
      },
    ],
  },
  OH: {
    conditionPrefix: '/oh/',
    intro:
      'Ohio members are covered under the Curative agreement, with visits handled by Parth Bhavsar, MD, board-certified in Family Medicine and licensed in Ohio. Video visits cover the everyday adult conditions and stable refills that do not need hands-on examination.',
    networkPara:
      'Ohio is covered by TeleDirectMD’s direct contract with Curative for Commercial PPO, EPO, and self-funded plans, effective July 7, 2026, and the visit is processed as in-network care.',
    localPara:
      'Members connect from Columbus, Cleveland, Cincinnati, Toledo, Akron, and Dayton, and from Appalachian counties where primary care appointments run weeks out. Prescriptions are sent electronically to CVS, Walgreens, Kroger, Giant Eagle, and Walmart pharmacies.',
    faqs: [
      {
        q: 'Which doctors take Curative insurance in Ohio?',
        a: 'TeleDirectMD is in-network with Curative in Ohio for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD (NPI 1104323203), board-certified in Family Medicine and licensed in Ohio.',
      },
      {
        q: 'What will an Ohio Curative member pay for a video visit?',
        a: 'Members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including this visit. Members who have not completed it pay toward their plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. A flat $79 self-pay visit is available.',
      },
      {
        q: 'What does Ohio require for telehealth prescribing?',
        a: 'Ohio Revised Code Section 4743.09 authorizes telehealth care, and the State Medical Board of Ohio applies the same standard of care, prescribing rules, and documentation standards that apply to in-person practice.',
      },
      {
        q: 'Is there an Ohio-specific piece of the Curative contract?',
        a: 'Yes. Ohio carries its own regulatory addendum within the Curative provider agreement, which means the plan is written to meet Ohio-specific requirements for insured members.',
      },
      {
        q: 'Does TeleDirectMD accept Ohio Medicaid or Medicare plans through Curative?',
        a: 'No. The Curative agreement covers Commercial PPO, EPO, and self-funded plans only. TeleDirectMD is not in-network with Ohio Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plans, in any state. The $79 flat self-pay visit remains available.',
      },
    ],
  },
  TX: {
    conditionPrefix: '/tx/',
    intro:
      'Texas is the largest activated state by member volume under the Curative agreement, and Curative is a Texas-founded plan. Parth Bhavsar, MD is board-certified in Family Medicine, licensed in Texas, and sees Texas members by secure video for the same problems handled at a primary care or urgent care office.',
    networkPara:
      'Texas members are covered under TeleDirectMD’s direct contract with Curative for Commercial PPO, EPO, and self-funded plans, effective July 7, 2026, so the visit is billed as in-network care rather than an out-of-network claim.',
    localPara:
      'Members connect from Houston, San Antonio, Dallas, Austin, Fort Worth, and El Paso, and from West Texas and Rio Grande Valley counties where the nearest in-network clinic can be a long drive. Prescriptions are routed electronically to CVS, Walgreens, H-E-B, Kroger, and Walmart pharmacies statewide.',
    faqs: [
      {
        q: 'Which doctors take Curative insurance in Texas?',
        a: 'TeleDirectMD is in-network with Curative in Texas for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD, a board-certified Family Medicine physician licensed in Texas (NPI 1104323203), usually available the same day.',
      },
      {
        q: 'What will a Texas Curative member pay for a video visit?',
        a: 'Curative members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, which includes this visit. Members who have not completed the Baseline Visit pay toward their plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. A flat $79 self-pay visit is available either way.',
      },
      {
        q: 'Does Texas require an in-person visit first?',
        a: 'No. Texas Occupations Code Chapter 111 and Senate Bill 1107 removed the prior in-person visit requirement, so a physician-patient relationship can be established by video under the same standard of care as an office visit.',
      },
      {
        q: 'Is Texas an addendum state under the Curative contract?',
        a: 'Yes. Texas is one of the addendum jurisdictions in the Curative provider agreement, so Texas-specific requirements for insured members are folded into the contract that covers your visit.',
      },
      {
        q: 'Does TeleDirectMD accept Texas Medicaid or STAR plans through Curative?',
        a: 'No. The Curative agreement covers Commercial PPO, EPO, and self-funded plans only. TeleDirectMD is not in-network with Texas Medicaid, STAR or STAR+PLUS managed care, CHIP, or Medicare-Medicaid plans, and does not bill them in any state. The $79 flat self-pay visit remains available.',
      },
    ],
  },
};

const CONDITIONS = [
  { slug: 'uti-treatment-online', label: 'UTI (Urinary Tract Infection)' },
  { slug: 'sinus-infection-treatment-online', label: 'Sinus Infection' },
  { slug: 'sore-throat-treatment-online', label: 'Sore Throat' },
  { slug: 'ear-pain-treatment-online', label: 'Ear Infection and Ear Pain' },
  { slug: 'pink-eye-treatment-online', label: 'Pink Eye (Conjunctivitis)' },
  { slug: 'influenza-treatment-online', label: 'Flu and Influenza' },
  { slug: 'yeast-infection-treatment-online', label: 'Yeast Infection' },
  { slug: 'bv-treatment-online', label: 'BV (Bacterial Vaginosis)' },
  { slug: 'shingles-treatment-online', label: 'Shingles' },
  { slug: 'seasonal-allergies-treatment-online', label: 'Seasonal Allergies' },
  { slug: 'hypertension-refills-online', label: 'Hypertension Refills' },
  { slug: 'hyperlipidemia-refills-online', label: 'Hyperlipidemia Refills' },
];

export default function CurativeStateClient({ state }) {
  const copy = STATE_COPY[state.code];
  const planDetail = STATE_PLAN_DETAILS.curative?.[state.code];
  const copay = COPAY_DATA.curative?.[state.code];
  const pageUrl = `https://teledirectmd.com/insurance/curative/${state.slug}/`;

  const capsule = `Yes. TeleDirectMD is in-network with Curative Commercial PPO, EPO, and self-funded plans in ${state.name}, effective ${state.effectiveDate}. ${state.name} members who have completed their annual Baseline Visit typically pay $0 for a same-day video visit with Parth Bhavsar, MD. A flat $79 self-pay option is always available.`;

  const citableSummary = {
    question: `Which doctors take Curative insurance in ${state.name}?`,
    answerHtml:
      `TeleDirectMD is in-network with Curative in ${state.name} for Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), and PPO Max), effective ${state.effectiveDate}. ` +
      `Visits are with Parth Bhavsar, MD (NPI 1104323203), board-certified in Family Medicine and licensed in ${state.name}. ` +
      `${state.networkAccessNote} ${state.addendumNote} ` +
      'Curative members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including virtual visits; members who have not completed it are subject to their plan deductible. ' +
      'TeleDirectMD is not in-network with Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plans. Self-pay alternative: $79 flat, HSA and FSA eligible.',
    answerText: '',
    emitAs: 'QAPage',
  };
  citableSummary.answerText = citableSummary.answerHtml.replace(/<[^>]+>/g, '');
  const citableJsonLd = citableSummaryToJsonLd(citableSummary, { pageUrl });

  const faqs = copy?.faqs || [];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': `${pageUrl}#business`,
        'name': `TeleDirectMD Curative coverage in ${state.name}`,
        'url': pageUrl,
        'areaServed': { '@type': 'AdministrativeArea', 'name': state.name },
        'aggregateRating': getAggregateRating(),
        'acceptedInsurance': (planDetail?.plans || []).map((p) => ({
          '@type': 'HealthInsurancePlan',
          'name': p.name,
          'description': `Curative ${p.productType} plan, in-network with TeleDirectMD in ${state.name}.`,
          'validFrom': planDetail.effectiveDateISO,
        })),
      },
      {
        '@type': 'Physician',
        '@id': `${pageUrl}#physician`,
        'name': 'Parth Bhavsar, MD',
        'medicalSpecialty': 'Family Medicine',
        'identifier': [{ '@type': 'PropertyValue', 'name': 'NPI', 'value': '1104323203' }],
        'areaServed': { '@type': 'AdministrativeArea', 'name': state.name },
        'sameAs': ['https://npiregistry.cms.hhs.gov/provider-view/1104323203'],
        ...getReviewBlock(),
      },
      ...(faqs.length > 0 ? [{
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        'mainEntity': faqs.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': { '@type': 'Answer', 'text': f.a.replace(/<[^>]+>/g, '') },
        })),
      }] : []),
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        'url': pageUrl,
        'name': `Doctors That Take Curative Insurance in ${state.name} | TeleDirectMD`,
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['[data-speakable]'] },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://teledirectmd.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Insurance', 'item': 'https://teledirectmd.com/insurance' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Curative', 'item': 'https://teledirectmd.com/insurance/curative/' },
          { '@type': 'ListItem', 'position': 4, 'name': state.name, 'item': pageUrl },
        ],
      },
    ],
  };

  const customSteps = [
    { icon: <Ico.Cal c={B.teal} s={24} />, title: 'Confirm plan and Baseline', desc: `Your Curative card should show a Commercial PPO, EPO, or self-funded plan. Baseline Visit completion is what unlocks $0 in-network cost sharing.` },
    { icon: <Ico.Check c={B.teal} s={24} />, title: 'Benefits verified', desc: `We confirm your Curative benefits and any remaining deductible before your ${state.name} video visit.` },
    { icon: <Ico.Video c={B.teal} s={24} />, title: 'Video visit and prescription', desc: `Same-day video with Parth Bhavsar, MD, licensed in ${state.name}. Any prescription goes electronically to your local pharmacy.` },
  ];

  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CitableSummaryBlock summary={citableSummary} jsonLd={citableJsonLd} idSuffix={`curative-${state.slug}`} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Insurance', href: '/insurance' }, { label: 'Curative', href: '/insurance/curative/' }, { label: state.name }]} />

      {/* HERO */}
      <div style={{ background: `linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding: '56px 24px 64px', position: 'relative', overflow: 'hidden', marginTop: 16 }}>
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 100, padding: '8px 16px', marginBottom: 24, border: '1px solid rgba(255,255,255,0.12)' }}>
            <Ico.Shield c={cColor} s={16} />
            <span style={{ fontFamily: B.fb, fontSize: 13, fontWeight: 600, color: '#8FD3EE', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Curative In-Network in {state.name}</span>
          </div>
          <h1 style={{ fontFamily: B.fd, fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: B.white, lineHeight: 1.15, margin: '0 0 16px' }}>
            Doctors That Take Curative Insurance in {state.name}
          </h1>
          <p data-speakable="true" style={{ fontFamily: B.fb, fontSize: 'clamp(16px, 2.5vw, 19px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '0 0 28px', maxWidth: 620 }}>
            Same-day video visits with Parth Bhavsar, MD, licensed in {state.name}, in-network with Curative Commercial PPO, EPO, and self-funded plans since {state.effectiveDate}.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              <Ico.Cal c={B.white} s={18} /> Book a {state.name} visit
            </a>
            <a href="/insurance/curative/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 24px', background: 'rgba(255,255,255,0.1)', color: B.white, borderRadius: B.rs, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              All Curative coverage
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 880, margin: '0 auto', padding: '32px 24px 0' }}>
        {/* AI ANSWER CAPSULE */}
        <AnswerBlock
          question={`Does TeleDirectMD accept Curative insurance in ${state.name}?`}
          answer={capsule}
          color={B.teal}
        />

        {/* STATE CONTEXT */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 12px' }}>Curative coverage for {state.name} members</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>{copy?.intro}</p>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>{copy?.networkPara}</p>
          <p style={{ fontSize: 15, color: B.text, margin: 0, lineHeight: 1.75 }}>{copy?.localPara}</p>
        </section>

        {/* NETWORK ACCESS CALLOUT */}
        <div style={{ background: curative.colorLight, border: `1px solid ${cColor}33`, borderRadius: B.r, padding: '20px 24px', marginBottom: 40, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <Ico.Shield c={cColor} s={22} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: B.navy, marginBottom: 6 }}>How {state.name} members reach the network</div>
            <p style={{ fontSize: 14, color: B.text, margin: 0, lineHeight: 1.65 }}>
              {state.networkAccessNote}
              {state.credentialingConfirmed ? ` Credentialing was confirmed active on ${state.credentialingConfirmed}.` : ''}
            </p>
          </div>
        </div>

        {/* STATE REGULATORY ADDENDUM + LICENSURE */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 12px' }}>{state.name} regulatory addendum and licensure</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>{state.addendumNote}</p>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>{state.telehealthNote}</p>
          <p style={{ fontSize: 15, color: B.text, margin: 0, lineHeight: 1.75 }}>{state.licenseNote}</p>
        </section>

        {/* CONTRACTED PLANS */}
        {planDetail && (
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>Contracted Curative plans in {state.name}</h2>
            <p style={{ fontSize: 14, color: B.text, margin: '0 0 16px', lineHeight: 1.6 }}>
              Participating networks effective {planDetail.effectiveDate}: {planDetail.productLines.join(', ')}.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10, marginBottom: 16 }}>
              {planDetail.plans.map((p) => (
                <div key={p.name} style={{ background: B.white, border: `1px solid ${cColor}22`, borderLeft: `3px solid ${cColor}`, borderRadius: B.r, padding: '12px 14px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: B.navy }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: B.text }}>{p.productType}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: B.text, margin: 0, lineHeight: 1.6 }}>
              Not contracted: {planDetail.excludedLines.join(', ')}. If your plan falls outside the contracted networks, the flat $79 self-pay visit is still available.
            </p>
          </section>
        )}

        {/* COST */}
        <CopayCard insurerName="Curative" stateName={state.name} copayData={copay} insurerColor={cColor} />

        <section style={{ marginBottom: 40, background: B.white, border: `1px solid ${cColor}22`, borderRadius: B.r, padding: '24px 28px', boxShadow: B.shadow }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 12px' }}>The Baseline Visit decides your cost</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>
            Curative members who complete the annual Baseline Visit within 120 days of their plan start date have <strong>$0 copays, $0 deductible, and 0% coinsurance</strong> for in-network care, which includes a video visit with TeleDirectMD in {state.name}.
          </p>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>
            If the Baseline Visit is not complete, your plan deductible applies (for example, $5,000 individual and $10,000 family on the EPO product). Confirm your status with Curative before booking.
          </p>
          <p style={{ fontSize: 15, color: B.text, margin: 0, lineHeight: 1.75 }}>
            You can also skip insurance entirely: TeleDirectMD self-pay is a flat <strong>$79</strong> per video visit, HSA and FSA eligible, with no claim filed.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 20px' }}>Using your Curative plan in {state.name}</h2>
          <HowItWorksSteps insurerName="Curative" customSteps={customSteps} />
        </section>

        {/* CONDITIONS */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>What {state.name} Curative members can be treated for</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 20px', lineHeight: 1.6 }}>Each link opens the {state.name} clinical page for that condition, with treatment detail and local pharmacy information.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
            {CONDITIONS.map((c) => (
              <a key={c.slug} href={`${copy?.conditionPrefix || '/'}${c.slug}/`}
                style={{ display: 'block', background: B.white, border: `1px solid ${cColor}22`, borderLeft: `3px solid ${cColor}`, borderRadius: B.r, padding: '12px 14px', textDecoration: 'none', fontSize: 14, fontWeight: 600, color: B.navy }}>
                {c.label}
              </a>
            ))}
          </div>
        </section>

        {/* Sitewide Medicaid + D-SNP exclusion */}
        <MedicaidExclusion headingLevel="h2" idSuffix={`curative-${state.slug}`} />

        {/* FAQ */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 24px' }}>Curative in {state.name}: questions members ask</h2>
          {faqs.map((f, i) => (
            <FAQ key={i} question={f.q} answer={f.a} />
          ))}
        </section>

        <BookCTA
          insurerName="Curative"
          tagline={`Curative Commercial PPO, EPO, and self-funded plans in ${state.name}, verified before your video visit.`}
          subtagline="Or pay $79 flat self-pay (HSA and FSA eligible), with no claim and no copay surprises."
        />

        <CommissionerLink stateCode={state.code} stateName={state.name} />

        <div style={{ marginBottom: 48 }}>
          <InsuranceDisclaimer payerNote={`Curative network status in ${state.name} reflects our Commercial PPO, EPO, and self-funded contract effective ${state.effectiveDate}. Cost sharing depends on your plan and on whether your annual Baseline Visit is complete. Verify benefits with Curative before your visit.`} />
        </div>
      </div>
    </div>
  );
}
