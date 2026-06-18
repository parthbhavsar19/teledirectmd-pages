import InsuranceClient from './InsuranceClient';
import { getAggregateRating, getReviewBlock } from '../../lib/review-schema';
import { CitableSummaryBlock } from '../components/CitableSummary';
import { summarizeInsuranceHub, citableSummaryToJsonLd } from '../../lib/citable-summary';

export const metadata = {
  title: 'Insurance & Pricing | TeleDirectMD',
  description: 'TeleDirectMD now accepts select commercial insurance plans from Aetna, Blue Cross Blue Shield, and UnitedHealthcare in growing number of states. Check your coverage or book a flat-fee $79 self-pay visit.',
  alternates: { canonical: 'https://teledirectmd.com/insurance' },
  openGraph: {
    title: 'Insurance & Pricing | TeleDirectMD',
    description: 'Now accepting select insurance plans. Check if your plan is covered or book a $79 self-pay video visit.',
    url: 'https://teledirectmd.com/insurance',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

const INSURANCE_FAQS = [
  { q: 'Does TeleDirectMD accept insurance?', a: 'Yes. TeleDirectMD is in-network with Aetna, Blue Cross Blue Shield affiliates (Florida Blue, Anthem, Highmark, BCBS-IL, BCBS-TX), and UnitedHealthcare across 17 states. We accept PPO, HMO, EPO, POS, and Medicare Advantage plans (with state-specific exclusions). Use the coverage checker above to confirm your specific state, payer, and plan type. If your plan is not in-network, you can still see a board-certified physician for a flat $79 self-pay video visit.' },
  { q: 'Which insurance plans does TeleDirectMD accept?', a: 'TeleDirectMD accepts PPO, HMO, EPO, POS, and Medicare Advantage plans from Aetna, Blue Cross Blue Shield affiliates, and UnitedHealthcare, with coverage varying by state. State-specific exclusions apply (for example, Aetna California excludes HMO and QPOS plans; UnitedHealthcare in Illinois, Minnesota, and Texas covers commercial plans only and not Medicare Advantage). Use the coverage checker above for your exact state and plan.' },
  { q: 'Does TeleDirectMD accept Medicaid or Managed Medicaid?', a: 'No. TeleDirectMD is not in-network with any Medicaid program, Managed Medicaid plan, CHIP, Medicare-Medicaid (MME), or Dual Special Needs Plan (D-SNP) in any state we serve. If your only coverage is Medicaid, Managed Medicaid, or a Medicaid-Medicare dual plan, our visits cannot be billed to your plan — you can still book a visit at our $79 self-pay rate, which is HSA/FSA eligible.' },
  { q: 'How much does a self-pay video visit cost?', a: 'A self-pay TeleDirectMD video visit is a flat $79. This includes the physician consultation, any clinically appropriate prescriptions sent to your pharmacy, and a brief work or school excuse note when medically appropriate. HSA and FSA cards are accepted.' },
  { q: 'What if my insurance plan is not in-network?', a: 'If your specific plan is not in-network with TeleDirectMD, you can still book as a self-pay patient for a flat $79 fee. You may also submit an out-of-network claim to your insurer for partial reimbursement — contact your plan to ask about out-of-network telehealth benefits.' },
  { q: 'Will my insurance cover the full visit?', a: 'Coverage depends on your specific plan. Most commercial telehealth visits are subject to your standard copay, coinsurance, or deductible. We verify your benefits before your visit. You can also contact your insurer using the member services number on your card to verify your telehealth benefits before booking.' },
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
      description: 'TeleDirectMD accepts select Aetna, Blue Cross Blue Shield, and UnitedHealthcare commercial plans in growing list of states. Flat $79 self-pay also available.',
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
      description: 'Physician-led telemedicine practice accepting select Aetna, BCBS, and UnitedHealthcare commercial plans across a growing list of states. $79 flat-fee self-pay also available.',
      medicalSpecialty: ['Family Medicine', 'Urgent Care', 'Telemedicine'],
      priceRange: '$79',
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
  const citableSummary_AI = summarizeInsuranceHub();
  const citableJsonLd_AI = citableSummaryToJsonLd(citableSummary_AI, { pageUrl: 'https://teledirectmd.com/insurance/' });

  return (
    <>
      <CitableSummaryBlock summary={citableSummary_AI} jsonLd={citableJsonLd_AI} idSuffix="ins-hub" visualMode="hidden" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsuranceClient />
    </>
  );
}
