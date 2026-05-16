import InsuranceClient from './InsuranceClient';
import { getAggregateRating, getReviewBlock } from '../../lib/review-schema';

export const metadata = {
  title: 'Insurance & Pricing | TeleDirectMD',
  description: 'TeleDirectMD now accepts select commercial insurance plans from Aetna, Blue Cross Blue Shield, and UnitedHealthcare in growing number of states. Check your coverage or book a flat-fee $49 self-pay visit.',
  alternates: { canonical: 'https://teledirectmd.com/insurance' },
  openGraph: {
    title: 'Insurance & Pricing | TeleDirectMD',
    description: 'Now accepting select insurance plans. Check if your plan is covered or book a $49 self-pay video visit.',
    url: 'https://teledirectmd.com/insurance',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

const INSURANCE_FAQS = [
  { q: 'Does TeleDirectMD accept insurance?', a: 'Yes. TeleDirectMD accepts select commercial plans from Aetna, Blue Cross Blue Shield, and UnitedHealthcare in a growing list of states. If your plan is not in-network, you can still see a board-certified physician for a flat $49 self-pay video visit.' },
  { q: 'Which insurance plans does TeleDirectMD accept?', a: 'Currently accepted insurers include Aetna (AZ, CA, CO, FL, GA, IL, MI, MN, OH, PA, TN), Blue Cross Blue Shield (select plans in FL, GA, IL, PA, TX), and UnitedHealthcare (CO, GA, IL, MN, NC, NJ, OH, PA, TN, WA). Coverage is expanding to additional states and plans.' },
  { q: 'How much does a self-pay video visit cost?', a: 'A self-pay TeleDirectMD video visit is a flat $49. This includes the physician consultation, any clinically appropriate prescriptions sent to your pharmacy, and a brief work or school excuse note when medically appropriate. HSA and FSA cards are accepted.' },
  { q: 'What if my insurance plan is not in-network?', a: 'If your specific plan is not in-network with TeleDirectMD, you can still book as a self-pay patient for a flat $49 fee. You may also submit an out-of-network claim to your insurer for partial reimbursement — contact your plan to ask about out-of-network telehealth benefits.' },
  { q: 'Does TeleDirectMD accept Medicaid?', a: 'No. TeleDirectMD does not currently accept any state Medicaid plans (including managed Medicaid products like Aetna Better Health or UnitedHealthcare Community Plan). Patients with Medicaid can book as self-pay for $49.' },
  { q: 'Will my insurance cover the full visit?', a: 'Coverage depends on your specific plan. Most commercial telehealth visits are subject to your standard copay, coinsurance, or deductible. Contact your insurer using the member services number on your card to verify your telehealth benefits before booking.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://teledirectmd.com/insurance#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com/' },
        { '@type': 'ListItem', position: 2, name: 'Insurance & Pricing', item: 'https://teledirectmd.com/insurance/' },
      ],
    },
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://teledirectmd.com/insurance#webpage',
      url: 'https://teledirectmd.com/insurance/',
      name: 'Insurance & Pricing | TeleDirectMD',
      description: 'TeleDirectMD accepts select Aetna, Blue Cross Blue Shield, and UnitedHealthcare commercial plans in growing list of states. Flat $49 self-pay also available.',
      inLanguage: 'en-US',
      breadcrumb: { '@id': 'https://teledirectmd.com/insurance#breadcrumbs' },
      about: { '@id': 'https://teledirectmd.com/#organization' },
      publisher: { '@id': 'https://teledirectmd.com/#organization' },
      lastReviewed: new Date().toISOString().split('T')[0],
      reviewedBy: { '@id': 'https://teledirectmd.com/#physician' },
      specialty: ['Family Medicine', 'Urgent Care', 'Telemedicine'],
      audience: { '@type': 'MedicalAudience', audienceType: 'Patient', suggestedMinAge: 18 },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.tdmd-insurance-summary', '.tdmd-faq-a'],
      },
    },
    {
      '@type': 'MedicalOrganization',
      '@id': 'https://teledirectmd.com/#organization',
      name: 'TeleDirectMD',
      url: 'https://teledirectmd.com',
      logo: 'https://teledirectmd.com/logo.webp',
      telephone: '+1-678-956-1855',
      email: 'contact@teledirectmd.com',
      description: 'Physician-led telemedicine practice accepting select Aetna, BCBS, and UnitedHealthcare commercial plans across a growing list of states. $49 flat-fee self-pay also available.',
      medicalSpecialty: ['Family Medicine', 'Urgent Care', 'Telemedicine'],
      priceRange: '$49',
      paymentAccepted: ['Credit Card', 'Debit Card', 'HSA', 'FSA', 'Aetna', 'Blue Cross Blue Shield', 'UnitedHealthcare'],
      currenciesAccepted: 'USD',
      aggregateRating: getAggregateRating(),
    },
    {
      '@type': 'Physician',
      '@id': 'https://teledirectmd.com/#physician',
      name: 'Parth Bhavsar, MD',
      url: 'https://teledirectmd.com/about',
      identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' },
      medicalSpecialty: 'Family Medicine',
      worksFor: { '@id': 'https://teledirectmd.com/#organization' },
      ...getReviewBlock(),
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://teledirectmd.com/insurance#faqpage',
      mainEntity: INSURANCE_FAQS.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function InsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsuranceClient />
    </>
  );
}
