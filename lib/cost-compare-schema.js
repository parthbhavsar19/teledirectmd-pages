// Shared JSON-LD builder for /cost/* and /compare/* pages.
// Emits the @graph used by both dynamic routes.
//
// E-E-A-T fields required for YMYL pages — every page produced through
// this helper carries:
//   - MedicalOrganization with PostalAddress
//   - Article with explicit author (Person + NPI) and publisher
//   - MedicalWebPage with lastReviewed (Date) and reviewedBy (Person + NPI)
//
// Author / reviewedBy are inlined (not @id references) so validators that
// don't dereference @ids still see the required fields.

import { getAggregateRating, getReviewBlock } from './review-schema';

const BASE_URL = 'https://teledirectmd.com';

// 2-letter abbreviations for the 41 licensed states.
const STATE_ABBRS = ['AL','AZ','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NC','ND','OH','OK','PA','SC','SD','TN','TX','UT','WA','WV','WI','WY'];

// Build-time constants.
// LAST_REVIEWED is the explicit reviewedBy / lastReviewed date for cost +
// compare pages. Bump it whenever a sweep is performed (and re-deploy).
export const COST_COMPARE_PUBLISHED = '2026-04-26';
export const COST_COMPARE_LAST_REVIEWED = '2026-04-26';

// Canonical inline blocks. Inlined (not @id references) so validators that
// don't dereference @ids still see the required fields.

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
  identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: '1104323203' },
  jobTitle: 'Board-certified physician, Founder',
  url: `${BASE_URL}/about/`,
};

const REVIEWED_BY_PERSON = {
  '@type': 'Person',
  name: 'Parth Bhavsar, MD',
  identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: '1104323203' },
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
    identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: '1104323203' },
    alumniOf: { '@type': 'EducationalOrganization', name: 'University of Mississippi Medical Center' },
    worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD' },
    licensedIn: STATE_ABBRS,
    ...getReviewBlock(),
  };
}

/**
 * Build the JSON-LD @graph for a /cost/[slug]/ or /compare/[competitor]/ page.
 *
 * @param {object} args
 * @param {string} args.kind            - 'cost' or 'compare'
 * @param {string} args.pageUrl         - canonical URL, includes trailing slash
 * @param {string} args.headline        - H1 text → Article.headline + MedicalWebPage.name
 * @param {string} args.description     - meta description
 * @param {Array}  args.breadcrumb      - [{ name, item }, ...]
 * @param {Array}  args.faqs            - [{ question, answer }, ...]
 * @param {string} args.today           - ISO build-time date (used for dateModified)
 * @param {object} [args.itemList]      - optional ItemList block (compare pages)
 * @param {object} [args.howTo]         - optional HowTo override; default is the
 *                                        standard 3-step "book a $49 visit" flow
 * @param {object} [args.medicalCondition]
 *        Optional MedicalCondition node — pass { name: 'Streptococcal pharyngitis',
 *        code: { code:'J02.0', codingSystem:'ICD-10' }, alternateName: 'Strep throat' }
 * @param {object} [args.service]
 *        Optional Service + Offer node — pass { name, serviceType, price, priceCurrency }
 *        defaults to the $49 telehealth visit Offer.
 * @param {object} [args.procedure]
 *        Optional MedicalProcedure node — pass { name, procedureType, howPerformed }
 * @returns {object} ready-to-stringify JSON-LD @graph object
 */
export function buildCostCompareJsonLd({
  pageUrl,
  headline,
  description,
  breadcrumb,
  faqs,
  today,
  itemList,
  howTo,
  medicalCondition,
  service,
  procedure,
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
    datePublished: COST_COMPARE_PUBLISHED,
    dateModified: today || COST_COMPARE_LAST_REVIEWED,
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

  const defaultHowTo = {
    '@type': 'HowTo',
    '@id': `${pageUrl}#howto`,
    name: 'How to Get a TeleDirectMD Visit',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book online',          text: 'Book a same-day visit at teledirectmd.com/book-online for $49 flat. No insurance required.' },
      { '@type': 'HowToStep', position: 2, name: 'Connect by video',     text: 'Connect with Dr. Parth Bhavsar, MD by secure video. Most visits take 10–15 minutes.' },
      { '@type': 'HowToStep', position: 3, name: 'Get treated',          text: 'Receive a diagnosis, e-prescription to your pharmacy of choice, and a written visit summary.' },
    ],
  };

  const medicalWebPage = {
    '@type': 'MedicalWebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: headline,
    description,
    datePublished: COST_COMPARE_PUBLISHED,
    dateModified: today || COST_COMPARE_LAST_REVIEWED,
    lastReviewed: COST_COMPARE_LAST_REVIEWED,
    reviewedBy: REVIEWED_BY_PERSON,
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    breadcrumb: { '@id': `${pageUrl}#breadcrumbs` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.tdmd-hero h1', '.tdmd-answer-block', '.tdmd-faq-question'],
    },
  };

  // Default Service+Offer node (the $49 telehealth visit). Pages can override
  // with their own service config (e.g. travel-prescription Service).
  const serviceNode = {
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: (service && service.name) || 'TeleDirectMD $49 Telehealth Visit',
    serviceType: (service && service.serviceType) || 'Telehealth medical consultation',
    provider: { '@id': `${BASE_URL}#org` },
    areaServed: STATE_ABBRS,
    offers: {
      '@type': 'Offer',
      price: (service && service.price) || '49',
      priceCurrency: (service && service.priceCurrency) || 'USD',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/book-online`,
      priceValidUntil: '2026-12-31',
    },
  };

  const graph = [
    breadcrumbList,
    buildMedicalOrganization(),
    buildPhysicianNode(),
    article,
    faqPage,
    howTo || defaultHowTo,
    medicalWebPage,
    serviceNode,
  ];

  if (medicalCondition) {
    graph.push({
      '@type': 'MedicalCondition',
      '@id': `${pageUrl}#condition`,
      name: medicalCondition.name,
      ...(medicalCondition.alternateName ? { alternateName: medicalCondition.alternateName } : {}),
      ...(medicalCondition.code
        ? {
            code: {
              '@type': 'MedicalCode',
              code: medicalCondition.code.code,
              codingSystem: medicalCondition.code.codingSystem || 'ICD-10',
            },
          }
        : {}),
      ...(medicalCondition.signOrSymptom
        ? { signOrSymptom: medicalCondition.signOrSymptom.map((s) => ({ '@type': 'MedicalSymptom', name: s })) }
        : {}),
      ...(medicalCondition.possibleTreatment
        ? { possibleTreatment: { '@type': 'MedicalTherapy', name: medicalCondition.possibleTreatment } }
        : {}),
    });
  }

  if (procedure) {
    graph.push({
      '@type': 'MedicalProcedure',
      '@id': `${pageUrl}#procedure`,
      name: procedure.name,
      procedureType: procedure.procedureType || 'NoninvasiveProcedure',
      ...(procedure.howPerformed ? { howPerformed: procedure.howPerformed } : {}),
      ...(procedure.preparation ? { preparation: procedure.preparation } : {}),
      ...(procedure.followup ? { followup: procedure.followup } : {}),
    });
  }

  // Compare pages slot an ItemList in front of the FAQPage. We splice it
  // into a stable position so node ordering is consistent across pages.
  if (itemList) {
    graph.splice(5, 0, itemList);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
