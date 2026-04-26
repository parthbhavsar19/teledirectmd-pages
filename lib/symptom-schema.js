// Shared JSON-LD builder for /symptoms/[slug]/ pages.
// Emits a deep @graph with Symptom + MedicalCondition[] + Drug[] +
// Article + FAQPage + HowTo + MedicalWebPage + Physician + MedicalOrganization
// + BreadcrumbList. E-E-A-T fields aligned with the gold-standard condition
// page schema (lib/cost-compare-schema.js).
//
// NPI is the verified value 1104323203 (Parth Bhavsar, MD — NPPES). If this
// file ever drifts back to the prior incorrect value, the build-time grep
// in CI fails.

import { getAggregateRating, getReviewBlock } from './review-schema';
import { SYMPTOM_PUBLISHED, SYMPTOM_LAST_REVIEWED } from './symptom-pages-config';

const BASE_URL = 'https://teledirectmd.com';
const NPI = '1104323203';

const STATE_ABBRS = ['AL','AZ','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NC','ND','OH','OK','PA','SC','SD','TN','TX','UT','WA','WV','WI','WY'];

const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '113 S. Perry Street, Suite 206 #5077',
  addressLocality: 'Lawrenceville',
  addressRegion: 'GA',
  postalCode: '30046',
  addressCountry: 'US',
};

const AUTHOR_PERSON = {
  '@type': 'Person',
  name: 'Parth Bhavsar, MD',
  identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: NPI },
  jobTitle: 'Board-certified Family Medicine physician, Founder',
  url: `${BASE_URL}/about/`,
  alumniOf: { '@type': 'EducationalOrganization', name: 'University of Mississippi Medical Center' },
  worksFor: {
    '@type': 'MedicalOrganization',
    name: 'TeleDirectMD',
    url: BASE_URL,
    address: POSTAL_ADDRESS,
  },
};

const REVIEWED_BY_PERSON = {
  '@type': 'Person',
  name: 'Parth Bhavsar, MD',
  identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: NPI },
  jobTitle: 'Board-certified Family Medicine physician',
  url: `${BASE_URL}/about/`,
};

const PUBLISHER_ORG = {
  '@type': 'MedicalOrganization',
  name: 'TeleDirectMD',
  url: `${BASE_URL}/`,
  logo: `${BASE_URL}/assets/brand/teledirectmd-logo.png`,
  address: POSTAL_ADDRESS,
};

function buildMedicalOrganization() {
  return {
    '@type': 'MedicalOrganization',
    '@id': `${BASE_URL}#org`,
    name: 'TeleDirectMD',
    url: BASE_URL,
    logo: `${BASE_URL}/assets/brand/teledirectmd-logo.png`,
    telephone: '+1-678-956-1855',
    email: 'contact@teledirectmd.com',
    address: POSTAL_ADDRESS,
    medicalSpecialty: 'GeneralPractice',
    availableService: { '@type': 'MedicalTherapy', name: 'Telehealth Consultations' },
    areaServed: STATE_ABBRS,
    aggregateRating: getAggregateRating(),
  };
}

function buildPhysicianNode() {
  return {
    '@type': 'Physician',
    '@id': `${BASE_URL}/about#physician`,
    name: 'Parth Bhavsar, MD',
    medicalSpecialty: 'FamilyMedicine',
    identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: NPI },
    alumniOf: { '@type': 'EducationalOrganization', name: 'University of Mississippi Medical Center' },
    worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD' },
    address: POSTAL_ADDRESS,
    licensedIn: STATE_ABBRS,
    ...getReviewBlock(),
  };
}

/**
 * Build the JSON-LD @graph for a /symptoms/[slug]/ page.
 *
 * Inputs are the deep per-symptom content from lib/symptom-pages-config.js.
 */
export function buildSymptomJsonLd({
  pageUrl,
  symptomName,
  altNames = [],
  anatomy,
  treatment,
  conditionName,
  conditionUrl,
  // Deep schema additions:
  differentials = [],          // [{ name, description }]
  medications = [],            // [{ generic, brand, dosageForm }]
  riskFactors = [],            // [string]
  typicalTests = [],           // [string]
  // Page-level:
  headline,
  description,
  breadcrumb,
  faqs,
  today,
}) {
  const breadcrumbList = {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumbs`,
    itemListElement: breadcrumb.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.item,
    })),
  };

  const article = {
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline,
    description,
    url: pageUrl,
    datePublished: SYMPTOM_PUBLISHED,
    dateModified: today || SYMPTOM_LAST_REVIEWED,
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    mainEntityOfPage: pageUrl,
    image: `${BASE_URL}/assets/brand/teledirectmd-logo.png`,
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const howTo = {
    '@type': 'HowTo',
    '@id': `${pageUrl}#howto`,
    name: 'How to Decide Whether to Use Telehealth, Urgent Care, or the ER for This Symptom',
    description: 'A 4-step decision flow patients can use before booking a visit.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Check the red-flag list',
        text: 'If any red-flag sign listed on the page applies, skip telehealth and go to in-person urgent care or the ER.' },
      { '@type': 'HowToStep', position: 2, name: 'Match the symptom pattern',
        text: 'Compare your symptom timeline and accompanying signs to the differential-diagnosis section. If your pattern fits an outpatient cause, telehealth is appropriate.' },
      { '@type': 'HowToStep', position: 3, name: 'Book a $49 video visit',
        text: 'Book at teledirectmd.com/book-online. Most visits take 10–15 minutes; prescriptions go to your pharmacy of choice.' },
      { '@type': 'HowToStep', position: 4, name: 'Follow the care plan',
        text: 'Take the prescribed medication as directed and follow the return-precautions list. Contact us within 48–72 hours if symptoms have not improved.' },
    ],
  };

  const conditionId = `${conditionUrl}#condition`;

  const symptomNode = {
    '@type': 'MedicalSignOrSymptom',
    '@id': `${pageUrl}#symptom`,
    name: symptomName,
    alternateName: altNames,
    associatedAnatomy: { '@type': 'AnatomicalStructure', name: anatomy },
    possibleTreatment: { '@type': 'MedicalTherapy', name: treatment },
    riskFactor: riskFactors.map((r) => ({ '@type': 'MedicalRiskFactor', name: r })),
    typicalTest: typicalTests.map((t) => ({ '@type': 'MedicalTest', name: t })),
    possibleCondition: differentials.map((d) => ({
      '@type': 'MedicalCondition',
      name: d.name,
      description: d.description,
    })),
    signOrSymptomOf: {
      '@type': 'MedicalCondition',
      '@id': conditionId,
      name: conditionName,
      url: conditionUrl,
    },
  };

  // Separate MedicalCondition nodes for each differential (helps Google
  // and AI engines pick up the entity graph).
  const conditionNodes = differentials.map((d, i) => ({
    '@type': 'MedicalCondition',
    '@id': `${pageUrl}#condition-${i + 1}`,
    name: d.name,
    description: d.description,
    signOrSymptom: { '@id': `${pageUrl}#symptom` },
  }));

  // Drug nodes — schema.org/Drug for medications likely to be discussed
  // / prescribed for the routed condition.
  const drugNodes = medications.map((m, i) => ({
    '@type': 'Drug',
    '@id': `${pageUrl}#drug-${i + 1}`,
    name: m.brand || m.generic,
    nonProprietaryName: m.generic,
    proprietaryName: m.brand || undefined,
    dosageForm: m.dosageForm || 'oral tablet',
    drugClass: m.drugClass || undefined,
  }));

  const medicalWebPage = {
    '@type': 'MedicalWebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: headline,
    description,
    inLanguage: 'en-US',
    isFamilyFriendly: true,
    datePublished: SYMPTOM_PUBLISHED,
    dateModified: today || SYMPTOM_LAST_REVIEWED,
    lastReviewed: SYMPTOM_LAST_REVIEWED,
    reviewedBy: REVIEWED_BY_PERSON,
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    breadcrumb: { '@id': `${pageUrl}#breadcrumbs` },
    about: { '@id': `${pageUrl}#symptom` },
    mainEntity: { '@id': `${pageUrl}#symptom` },
    audience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      requiredMinAge: 18,
    },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.tdmd-hero h1', '.tdmd-answer-block', '.tdmd-faq-question'],
    },
    aggregateRating: getAggregateRating(),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbList,
      buildMedicalOrganization(),
      buildPhysicianNode(),
      symptomNode,
      ...conditionNodes,
      ...drugNodes,
      article,
      faqPage,
      howTo,
      medicalWebPage,
    ],
  };
}
