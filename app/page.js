import HomepageClient from './HomepageClient';
import { getAggregateRating, getReviewBlock } from '../lib/review-schema';

export const metadata = {
  title: 'TeleDirectMD | $79 Online Doctor Visits — Board-Certified Telehealth',
  description:
    'See a board-certified family medicine doctor from home for just $79. No insurance needed. Treat 60+ conditions including urgent care, skin issues, STIs, and chronic refills. Licensed in 43 states + DC.',
  alternates: { canonical: 'https://teledirectmd.com/' },
  openGraph: {
    title: 'TeleDirectMD | $79 Online Doctor Visits',
    description:
      'Board-certified telehealth for $79. Urgent care, skin conditions, sexual health, chronic medication refills, and more — from the comfort of home.',
    url: 'https://teledirectmd.com/',
    siteName: 'TeleDirectMD',
    type: 'website',
    images: [
      {
        url: 'https://teledirectmd.com/images/dr-parth-bhavsar.jpg',
        width: 500,
        height: 600,
        alt: 'Dr. Parth Bhavsar, MD — TeleDirectMD Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeleDirectMD | $79 Online Doctor Visits',
    description:
      'Board-certified telehealth for $79. No insurance needed. 60+ conditions treated across 43 states + DC.',
    images: ['https://teledirectmd.com/images/dr-parth-bhavsar.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'MedicalBusiness'],
      '@id': 'https://teledirectmd.com/#organization',
      name: 'TeleDirectMD',
      url: 'https://teledirectmd.com',
      logo: 'https://teledirectmd.com/logo.webp',
      image: 'https://teledirectmd.com/images/dr-parth-bhavsar.jpg',
      description:
        'TeleDirectMD is a physician-led telehealth practice providing $79 flat-fee virtual visits with a board-certified family medicine doctor across 43 states and DC.',
      telephone: '678-956-1855',
      email: 'contact@teledirectmd.com',
      priceRange: '$79',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Insurance (select states)',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      medicalSpecialty: 'Family Medicine',
      availableService: [
        {
          '@type': 'MedicalProcedure',
          name: 'Virtual Urgent Care',
          description: 'Same-day treatment for common illnesses and infections via video visit.',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Chronic Medication Refills',
          description: 'Convenient prescription renewals for ongoing conditions.',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Skin Condition Treatment',
          description: 'Expert telehealth consults for acne, eczema, rosacea, and other skin concerns.',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Travel Medicine',
          description: 'Pre-travel video visits for altitude sickness prevention (acetazolamide), malaria prophylaxis, travelers diarrhea standby antibiotics, and motion sickness. Non-controlled medications only.',
        },
      ],
      sameAs: [
        'https://instagram.com/teledirectmd',
        'https://facebook.com/teledirectmd',
        'https://youtube.com/@teledirectmd',
        'https://linkedin.com/company/teledirectmd',
      ],
      aggregateRating: getAggregateRating(),
    },
    {
      '@type': 'Physician',
      '@id': 'https://teledirectmd.com/#physician',
      name: 'Dr. Parth Bhavsar',
      givenName: 'Parth',
      familyName: 'Bhavsar',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'MD',
      image: 'https://teledirectmd.com/images/dr-parth-bhavsar.jpg',
      url: 'https://teledirectmd.com/about',
      description:
        'Board-certified family medicine physician and founder of TeleDirectMD. Completed residency at the University of Mississippi Medical Center.',
      medicalSpecialty: 'Family Medicine',
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Smt. N.H.L. Municipal Medical College',
          alternateName: 'NHL Municipal Medical College',
          address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
        },
        {
          '@type': 'EducationalOrganization',
          name: 'University of Mississippi Medical Center',
          alternateName: 'UMMC',
          department: 'Family Medicine Residency',
          address: { '@type': 'PostalAddress', addressLocality: 'Jackson', addressRegion: 'MS', addressCountry: 'US' },
        },
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
          credentialCategory: 'degree',
          educationalLevel: 'Medical Degree',
          recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Smt. N.H.L. Municipal Medical College' },
          dateCreated: '2014',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Family Medicine Residency',
          credentialCategory: 'residency',
          educationalLevel: 'Postgraduate Medical Training',
          recognizedBy: { '@type': 'EducationalOrganization', name: 'University of Mississippi Medical Center' },
          validFrom: '2018-07-01',
          dateCreated: '2021-06-30',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Board Certification in Family Medicine',
          credentialCategory: 'board certification',
          educationalLevel: 'Specialty Board Certification',
          recognizedBy: { '@type': 'Organization', name: 'American Board of Family Medicine', url: 'https://www.theabfm.org' },
        },
      ],
      memberOf: [
        { '@type': 'Organization', name: 'American Academy of Family Physicians', url: 'https://www.aafp.org' },
        { '@type': 'Organization', name: 'American Medical Association', url: 'https://www.ama-assn.org' },
      ],
      knowsLanguage: ['English', 'Hindi', 'Gujarati', 'Urdu'],
      identifier: {
        '@type': 'PropertyValue',
        name: 'NPI',
        value: '1104323203',
      },
      worksFor: {
        '@id': 'https://teledirectmd.com/#organization',
      },
      sameAs: [
        'https://npiregistry.cms.hhs.gov/provider-view/1104323203',
        'https://www.zocdoc.com/doctor/parth-bhavsar-md-652258',
        'https://www.doximity.com/pub/parth-bhavsar-md',
        'https://www.linkedin.com/in/parth-bhavsar-md-0527143a6',
        'https://doctor.webmd.com/doctor/parth-bhavsar-e293ceba-555d-466e-ab94-d82e02d268db-overview',
        'https://www.healthgrades.com/physician/dr-parth-bhavsar-xynq9m7',
      ],
      ...getReviewBlock(),
    },
    {
      '@type': 'WebPage',
      '@id': 'https://teledirectmd.com/',
      url: 'https://teledirectmd.com/',
      name: 'TeleDirectMD | $79 Online Doctor Visits — Board-Certified Telehealth',
      description:
        'See a board-certified family medicine doctor from home for just $79. No insurance needed. Treat 60+ conditions across 40+ states.',
      isPartOf: { '@id': 'https://teledirectmd.com/#website' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://teledirectmd.com/#website',
      url: 'https://teledirectmd.com/',
      name: 'TeleDirectMD',
      description: 'Physician-led telehealth platform offering $79 board-certified online doctor visits in 43 US states + DC.',
      publisher: { '@id': 'https://teledirectmd.com/#organization' },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://teledirectmd.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'HowTo',
      '@id': 'https://teledirectmd.com/#howto-book-visit',
      name: 'How to Book a TeleDirectMD Online Doctor Visit',
      description: 'Three steps to see Dr. Parth Bhavsar, MD by video for $79 (cash-pay) or your insurance copay (Aetna, Blue Cross Blue Shield, United Healthcare in participating states).',
      totalTime: 'PT5M',
      supply: [
        { '@type': 'HowToSupply', name: 'A device with a camera (phone, tablet, or computer)' },
        { '@type': 'HowToSupply', name: 'A valid government-issued ID' },
        { '@type': 'HowToSupply', name: 'Insurance card OR a payment method ($79 cash-pay)' },
      ],
      tool: [
        { '@type': 'HowToTool', name: 'TeleDirectMD secure video-visit platform' },
      ],
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Book your visit online',
          text: 'Visit teledirectmd.com/book-online, pick a same-day appointment slot, and complete the brief intake form covering your symptoms and medication history. Booking takes about 60 seconds.',
          url: 'https://teledirectmd.com/book-online',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Join your video visit with Dr. Parth Bhavsar, MD',
          text: 'At your appointment time, join the secure HIPAA-compliant video call. Dr. Bhavsar (NPI: 1104323203) will review your history, evaluate your symptoms, and decide on an appropriate treatment plan. Visits typically last 10–15 minutes.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Receive your prescription',
          text: 'If clinically appropriate, your prescription is sent electronically to your pharmacy within minutes of the visit. Visit summaries are delivered by email. Insurance claims (if applicable) are submitted electronically using CPT codes 99213/99214.',
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomepageClient />
    </>
  );
}
