import TelehealthUrgentCareAetnaClient from './TelehealthUrgentCareAetnaClient';

export const metadata = {
  title: 'California Telehealth Urgent Care That Accepts Aetna — Same-Day Online MD | TeleDirectMD',
  description:
    'California Aetna members: same-day telehealth urgent care for UTI, sinus infection, asthma refills, hypertension refills, pink eye, strep throat, and more. In-network with Aetna commercial plans. Board-certified physician. $49 self-pay alternative.',
  alternates: { canonical: 'https://teledirectmd.com/california/telehealth-urgent-care-aetna' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'California Telehealth Urgent Care That Accepts Aetna',
    description:
      'Same-day virtual urgent care for California Aetna members. Board-certified physician Dr. Parth Bhavsar, MD.',
    url: 'https://teledirectmd.com/california/telehealth-urgent-care-aetna',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'California Telehealth Urgent Care That Accepts Aetna',
    description: 'In-network with Aetna commercial plans in California. Same-day video visits.',
  },
};

export default function Page() {
  return <TelehealthUrgentCareAetnaClient />;
}
