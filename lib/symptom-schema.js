// Shared JSON-LD builder for /symptoms/[slug]/ pages.
// Mirrors lib/cost-compare-schema.js (E-E-A-T fields stay aligned with PR #7
// fixes) and adds a Symptom node referencing the routed MedicalCondition.

import { getAggregateRating, getReviewBlock } from './review-schema';
import { SYMPTOM_PUBLISHED, SYMPTOM_LAST_REVIEWED } from './symptom-pages-config';

const BASE_URL = 'https://teledirectmd.com';

const STATE_ABBRS = ['AL','AZ','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NC','ND','OH','OK','PA','SC','SD','TN','TX','UT','WA','WV','WI','WY'];

// Same canonical inline blocks used by cost & compare pages — duplicated
// here intentionally so the helpers don't grow circular imports. If the
// values ever drift, both files lint-fail at build.

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
  identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: '1245687134' },
  jobTitle: 'Board-certified physician, Founder',
  url: `${BASE_URL}/about/`,
};

const REVIEWED_BY_PERSON = {
  '@type': 'Person',
  name: 'Parth Bhavsar, MD',
  identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: '1245687134' },
};

const PUBLISHER_ORG = {
  '@type': 'MedicalOrganization',
  name: 'TeleDirectMD',
  url: `${BASE_URL}/`,
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
    identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: '1245687134' },
    alumniOf: { '@type': 'EducationalOrganization', name: 'University of Mississippi Medical Center' },
    worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD' },
    licensedIn: STATE_ABBRS,
    ...getReviewBlock(),
  };
}

/**
 * Build the JSON-LD @graph for a /symptoms/[slug]/ page.
 *
 * @param {object} args
 * @param {string} args.pageUrl       canonical URL with trailing slash
 * @param {string} args.symptomName   patient-language name (e.g. "Burning when urinating")
 * @param {Array}  args.altNames      alternate names (e.g. ["Dysuria"])
 * @param {string} args.anatomy       associatedAnatomy.name
 * @param {string} args.treatment     possibleTreatment.name
 * @param {string} args.conditionName signOrSymptomOf MedicalCondition name
 * @param {string} args.conditionUrl  fully-qualified URL of routed condition page
 * @param {string} args.headline      H1 → Article.headline + MedicalWebPage.name
 * @param {string} args.description   meta description
 * @param {Array}  args.breadcrumb    [{ name, item }, ...]
 * @param {Array}  args.faqs          [{ question, answer }, ...]
 * @param {string} args.today         ISO build-time date
 */
export function buildSymptomJsonLd({
  pageUrl,
  symptomName,
  altNames = [],
  anatomy,
  treatment,
  conditionName,
  conditionUrl,
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
    name: 'How a $49 TeleDirectMD Visit for This Symptom Works',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book online',          text: 'Book a same-day visit at teledirectmd.com/book-online for $49 flat. No insurance required.' },
      { '@type': 'HowToStep', position: 2, name: 'Connect by video',     text: 'Connect with Dr. Parth Bhavsar, MD by secure video. Most visits take 10–15 minutes.' },
      { '@type': 'HowToStep', position: 3, name: 'Get treated',          text: 'Receive a focused diagnosis, e-prescription to your pharmacy of choice, and a written visit summary with return precautions.' },
    ],
  };

  // The Symptom node — the new addition vs. cost / compare pages. Points
  // back to the routed MedicalCondition entity via signOrSymptomOf.
  const conditionId = `${conditionUrl}#condition`;
  const symptomNode = {
    '@type': 'Symptom',
    '@id': `${pageUrl}#symptom`,
    name: symptomName,
    alternateName: altNames,
    associatedAnatomy: { '@type': 'AnatomicalStructure', name: anatomy },
    possibleTreatment: { '@type': 'MedicalTherapy', name: treatment },
    signOrSymptomOf: {
      '@type': 'MedicalCondition',
      '@id': conditionId,
      name: conditionName,
      url: conditionUrl,
    },
  };

  const medicalWebPage = {
    '@type': 'MedicalWebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: headline,
    description,
    datePublished: SYMPTOM_PUBLISHED,
    dateModified: today || SYMPTOM_LAST_REVIEWED,
    lastReviewed: SYMPTOM_LAST_REVIEWED,
    reviewedBy: REVIEWED_BY_PERSON,
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    breadcrumb: { '@id': `${pageUrl}#breadcrumbs` },
    about: { '@id': `${pageUrl}#symptom` },
    mainEntity: { '@id': `${pageUrl}#symptom` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.tdmd-hero h1', '.tdmd-answer-block', '.tdmd-faq-question'],
    },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbList,
      buildMedicalOrganization(),
      buildPhysicianNode(),
      symptomNode,
      article,
      faqPage,
      howTo,
      medicalWebPage,
    ],
  };
}
