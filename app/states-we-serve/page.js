import { getStates } from '../../lib/get-data';
import StatesWeServePage from './StatesWeServePage';

export async function generateMetadata() {
  const baseUrl = 'https://teledirectmd.com';
  const title = 'States We Serve — TeleDirectMD Telehealth Coverage';
  const description = 'TeleDirectMD is licensed in 40+ U.S. states. Find your state, confirm your location, and book a $49 same-day video visit with a board-certified physician.';
  const pageUrl = `${baseUrl}/states-we-serve`;

  return {
    title,
    description,
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'website',
      siteName: 'TeleDirectMD',
      locale: 'en_US',
      title,
      description,
      url: pageUrl,
      images: [{ url: `${baseUrl}/assets/social/tdmd-states-we-serve-og.png`, alt: 'TeleDirectMD telehealth coverage across the US' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/assets/social/tdmd-states-we-serve-og.png`],
    },
    alternates: { canonical: pageUrl },
  };
}

export default async function StatesWeServeServerPage() {
  const states = getStates();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'TeleDirectMD',
    url: 'https://teledirectmd.com/states-we-serve',
    description: 'TeleDirectMD is licensed in 40+ U.S. states. Same-day video visits with a board-certified physician for $49.',
    medicalSpecialty: 'PrimaryCare',
    priceRange: '$49',
    areaServed: states.map((s) => ({
      '@type': 'State',
      name: s.name,
    })),
    physician: {
      '@type': 'Physician',
      name: 'Parth Bhavsar, MD',
      medicalSpecialty: 'PrimaryCare',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StatesWeServePage states={states} />
    </>
  );
}
