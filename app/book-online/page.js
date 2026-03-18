import { getStates } from '../../lib/get-data';
import BookOnlinePage from './BookOnlinePage';

export async function generateMetadata() {
  const baseUrl = 'https://teledirectmd.com';
  const title = 'Book a $49 MD Video Visit — TeleDirectMD';
  const description = 'Schedule a same-day telehealth visit with a board-certified physician. $49 flat fee, no insurance required. Licensed in 40+ states.';
  const pageUrl = `${baseUrl}/book-online`;

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
      images: [{ url: `${baseUrl}/assets/social/tdmd-book-online-og.png`, alt: 'Book a TeleDirectMD video visit' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/assets/social/tdmd-book-online-og.png`],
    },
    alternates: { canonical: pageUrl },
  };
}

export default async function BookOnlineServerPage() {
  const states = getStates();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'TeleDirectMD',
    url: 'https://teledirectmd.com/book-online',
    description: 'Schedule a same-day telehealth visit with a board-certified physician. $49 flat fee, no insurance required.',
    medicalSpecialty: 'PrimaryCare',
    priceRange: '$49',
    currenciesAccepted: 'USD',
    availableService: {
      '@type': 'MedicalProcedure',
      name: 'Telehealth Video Visit',
      procedureType: 'Noninvasive',
      howPerformed: 'Secure video consultation with a licensed physician',
    },
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
      <BookOnlinePage states={states} />
    </>
  );
}
