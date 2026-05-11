import AetnaCaliforniaAnnouncement from './AetnaCaliforniaAnnouncement';

export const metadata = {
  title: 'TeleDirectMD Now In-Network with Aetna in California — May 2026 | Announcement',
  description:
    'TeleDirectMD is now in-network with Aetna commercial plans in California. Same-day telehealth video visits with board-certified physician Dr. Parth Bhavsar, MD across Los Angeles, San Francisco, San Diego, San Jose, and Sacramento. Effective April 30, 2026.',
  alternates: { canonical: 'https://teledirectmd.com/news/aetna-california-may-2026' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  authors: [{ name: 'TeleDirectMD' }],
  openGraph: {
    type: 'article',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'TeleDirectMD Now In-Network with Aetna in California',
    description:
      'Service expansion announcement: TeleDirectMD is in-network with Aetna commercial plans in California, effective April 30, 2026.',
    url: 'https://teledirectmd.com/news/aetna-california-may-2026',
    publishedTime: '2026-05-11T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeleDirectMD Now In-Network with Aetna in California',
    description: 'Same-day telehealth covered by Aetna commercial plans in California.',
  },
  other: {
    'article:published_time': '2026-05-11T00:00:00Z',
    'article:modified_time': '2026-05-11T00:00:00Z',
    'last-reviewed': '2026-05-11',
    'medical-reviewer': 'Parth Bhavsar, MD',
  },
};

export default function Page() {
  return <AetnaCaliforniaAnnouncement />;
}
