import PediatricsHubClient from './PediatricsHubClient';

export const metadata = {
  title: 'Pediatric Telehealth in 41 States + DC | Ages 5-17 | TeleDirectMD',
  description:
    'MD-only pediatric telehealth for children ages 5-17 in 41 states plus DC. Parent consent required. $79 self-pay. Physician-owned, stewardship-led.',
  alternates: { canonical: 'https://teledirectmd.com/pediatrics/' },
  openGraph: {
    title: 'Pediatric Telehealth in 41 States + DC | Ages 5-17 | TeleDirectMD',
    description:
      'MD-only pediatric telehealth for children ages 5-17 in 41 states plus DC. Parent consent required. $79 self-pay.',
    url: 'https://teledirectmd.com/pediatrics/',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

const baseUrl = 'https://teledirectmd.com';
const lastReviewed = '2026-06-21';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${baseUrl}/pediatrics/`,
      url: `${baseUrl}/pediatrics/`,
      name: 'Pediatric Telehealth in 41 States + DC | Ages 5-17',
      lastReviewed,
      author: { '@id': `${baseUrl}/#parth-bhavsar-md` },
      reviewedBy: { '@id': `${baseUrl}/#parth-bhavsar-md` },
      provider: { '@id': `${baseUrl}/#org` },
      specialty: 'Pediatrics',
      mainEntity: { '@id': `${baseUrl}/pediatrics/#faq` },
    },
    {
      '@type': 'MedicalOrganization',
      '@id': `${baseUrl}/#org`,
      name: 'TeleDirectMD',
      medicalSpecialty: 'Pediatrics',
      url: baseUrl,
      areaServed: 'US (41 states + DC)',
      founder: { '@id': `${baseUrl}/#parth-bhavsar-md` },
    },
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#parth-bhavsar-md`,
      name: 'Parth Bhavsar, MD',
      honorificSuffix: 'MD',
      jobTitle: 'Physician',
      memberOf: { '@type': 'MedicalOrganization', name: 'TeleDirectMD' },
      identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: '1104323203' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${baseUrl}/pediatrics/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does TeleDirectMD treat in children?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TeleDirectMD treats eight pediatric conditions by MD-only video visit: teen acne (ages 12-17), and pink eye, head lice, asthma and allergic rhinitis refills, impetigo, eczema, ringworm, and contact dermatitis (all ages 5-17). A parent or legal guardian must be present. Self-pay is $79, available in 41 states plus Washington, DC.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the youngest age TeleDirectMD treats?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Age 5 for every pediatric condition, and age 12 for acne. TeleDirectMD does not treat children under age 5 for any condition, and any infant under 3 months with a fever needs emergency care, not telehealth.',
          },
        },
        {
          '@type': 'Question',
          name: "Does a parent have to be present for a child's visit?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. A parent or legal guardian must be present for the entire visit and provide consent for every TeleDirectMD pediatric visit, for children ages 5-17. The guardian's identity is verified, and the child must be physically located in one of the 41 states plus Washington, DC where TeleDirectMD is licensed at the time of the visit.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does TeleDirectMD prescribe controlled substances or treat ADHD or mental health?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. TeleDirectMD does not prescribe controlled substances, does not treat ADHD, and does not diagnose or treat mental health conditions in children. It also does not prescribe isotretinoin (Accutane) for acne or make new asthma diagnoses. These exclusions apply to all children ages 5-17 across the 41 states plus Washington, DC.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a pediatric visit cost at TeleDirectMD?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A pediatric video visit at TeleDirectMD costs $79 self-pay, with no insurance required, for children ages 5-17. TeleDirectMD is in-network with Aetna, select Blue Cross Blue Shield plans, and UnitedHealthcare where applicable, but is not in-network with any Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plan in any state.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the doctors actual physicians?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every TeleDirectMD pediatric visit is conducted by a licensed physician (MD). No nurse practitioners or physician assistants treat children at TeleDirectMD. The practice is physician-owned and led by Parth Bhavsar, MD, and operates only in states where its physicians hold active licensure, currently 41 states plus Washington, DC.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Pediatrics', item: `${baseUrl}/pediatrics/` },
      ],
    },
  ],
};

const conditions = [
  { slug: 'teen-acne-treatment-online', name: 'Teen Acne', ages: '12 to 17', icd10: 'L70.0 (acne vulgaris)', desc: 'Mild-to-moderate comedonal and inflammatory acne, managed with topical therapy.' },
  { slug: 'pediatric-pink-eye-treatment-online', name: 'Pediatric Pink Eye', ages: '5 to 17', icd10: 'H10.9, H10.33 (conjunctivitis)', desc: 'Viral, allergic, and bacterial conjunctivitis evaluated by MD video exam.' },
  { slug: 'pediatric-head-lice-treatment-online', name: 'Head Lice', ages: '5 to 17', icd10: 'B85.0 (pediculosis capitis)', desc: 'Head lice confirmed by video, with first-line permethrin guidance.' },
  { slug: 'pediatric-asthma-allergy-refills-online', name: 'Asthma & Allergy Refills', ages: '5 to 17', icd10: 'J45.909, J30.9', desc: 'Refills for established, stable asthma and allergic rhinitis. No new diagnoses.' },
  { slug: 'pediatric-impetigo-treatment-online', name: 'Impetigo', ages: '5 to 17', icd10: 'L01.00 (impetigo)', desc: 'Limited impetigo treated topical-first, per IDSA guidance.' },
  { slug: 'pediatric-eczema-treatment-online', name: 'Eczema', ages: '5 to 17', icd10: 'L20.9 (atopic dermatitis)', desc: 'Mild-to-moderate atopic dermatitis with emollient-first, topical therapy.' },
  { slug: 'pediatric-ringworm-treatment-online', name: 'Ringworm', ages: '5 to 17', icd10: 'B35.4 (tinea corporis)', desc: 'Body ringworm treated with topical antifungals. Scalp ringworm referred.' },
  { slug: 'pediatric-contact-dermatitis-treatment-online', name: 'Contact Dermatitis', ages: '5 to 17', icd10: 'L25.9 (contact dermatitis)', desc: 'Limited contact dermatitis, including poison ivy, with site-matched topical steroids.' },
];

export default function PediatricsHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PediatricsHubClient conditions={conditions} lastReviewed={lastReviewed} />
    </>
  );
}
