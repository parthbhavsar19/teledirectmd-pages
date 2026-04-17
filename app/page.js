import HomepageClient from './HomepageClient';

export const metadata = {
  title: 'TeleDirectMD | $49 Online Doctor Visits — Board-Certified Telehealth',
  description:
    'See a board-certified family medicine doctor from home for just $49. No insurance needed. Treat 60+ conditions including urgent care, skin issues, STIs, and chronic refills. Licensed in 41 states + DC.',
  alternates: { canonical: 'https://teledirectmd.com/' },
  openGraph: {
    title: 'TeleDirectMD | $49 Online Doctor Visits',
    description:
      'Board-certified telehealth for $49. Urgent care, skin conditions, sexual health, chronic medication refills, and more — from the comfort of home.',
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
    title: 'TeleDirectMD | $49 Online Doctor Visits',
    description:
      'Board-certified telehealth for $49. No insurance needed. 60+ conditions treated across 41 states + DC.',
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
        'TeleDirectMD is a physician-led telehealth practice providing $49 flat-fee virtual visits with a board-certified family medicine doctor across 41 states and DC.',
      telephone: '678-956-1855',
      email: 'contact@teledirectmd.com',
      priceRange: '$49',
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
      ],
      sameAs: [
        'https://instagram.com/teledirectmd',
        'https://facebook.com/teledirectmd',
        'https://youtube.com/@teledirectmd',
        'https://linkedin.com/company/teledirectmd',
      ],
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
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MD', name: 'Doctor of Medicine' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Board Certification', name: 'Board-Certified Family Medicine' },
      ],
      identifier: {
        '@type': 'PropertyValue',
        name: 'NPI',
        value: '1104323203',
      },
      worksFor: {
        '@id': 'https://teledirectmd.com/#organization',
      },
      sameAs: [
        'https://www.zocdoc.com/doctor/parth-bhavsar-md-614140',
        'https://doctor.webmd.com/doctor/parth-bhavsar-e293ceba-555d-466e-ab94-d82e02d268db-overview',
        'https://www.healthgrades.com/physician/dr-parth-bhavsar-xynq9m7',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://teledirectmd.com/',
      url: 'https://teledirectmd.com/',
      name: 'TeleDirectMD | $49 Online Doctor Visits — Board-Certified Telehealth',
      description:
        'See a board-certified family medicine doctor from home for just $49. No insurance needed. Treat 60+ conditions across 40+ states.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://teledirectmd.com/#website',
        url: 'https://teledirectmd.com',
        name: 'TeleDirectMD',
      },
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
