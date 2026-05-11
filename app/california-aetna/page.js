import CaliforniaAetnaClient from './CaliforniaAetnaClient';

export const metadata = {
  title: 'Aetna Telehealth in California — Same-Day Online Doctor Visit | TeleDirectMD',
  description:
    'Use your Aetna commercial plan for a same-day online doctor visit in California. In-network with Aetna across Los Angeles, San Francisco, San Diego, San Jose, and Sacramento. Board-certified MD, $49 self-pay alternative, no app required.',
  alternates: { canonical: 'https://teledirectmd.com/california-aetna' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Aetna Telehealth in California — Same-Day Online Doctor Visit',
    description:
      'In-network with Aetna commercial plans in California. Board-certified physician Dr. Parth Bhavsar, MD. Effective April 30, 2026.',
    url: 'https://teledirectmd.com/california-aetna',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aetna Telehealth in California — Same-Day Online Doctor Visit',
    description:
      'TeleDirectMD is in-network with Aetna in California. Same-day video visits with Dr. Parth Bhavsar, MD.',
  },
  other: {
    'article:published_time': '2026-05-11T00:00:00Z',
    'article:modified_time': '2026-05-11T00:00:00Z',
    'last-reviewed': '2026-05-11',
    'medical-reviewer': 'Parth Bhavsar, MD',
  },
};

export default function CaliforniaAetnaPage() {
  return <CaliforniaAetnaClient />;
}
