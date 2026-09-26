import AnthemCaliforniaAnnouncement from './AnthemCaliforniaAnnouncement';

const URL = 'https://teledirectmd.com/news/anthem-blue-cross-california-september-2026';

export const metadata = {
  title: 'TeleDirectMD Now In-Network with Anthem Blue Cross in California | Announcement',
  description:
    'TeleDirectMD is now in-network with Anthem Blue Cross PPO, Indemnity, and Medicare PPO plans in California, effective September 23, 2026. Same-day video visits with board-certified physician Dr. Parth Bhavsar, MD.',
  alternates: { canonical: URL },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  authors: [{ name: 'TeleDirectMD' }],
  openGraph: {
    type: 'article',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'TeleDirectMD Now In-Network with Anthem Blue Cross in California',
    description: 'Anthem Blue Cross PPO, Indemnity, and Medicare PPO members in California can now book in-network video visits, effective September 23, 2026.',
    url: URL,
    publishedTime: '2026-09-26T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeleDirectMD Now In-Network with Anthem Blue Cross in California',
    description: 'In-network video visits for Anthem Blue Cross PPO, Indemnity, and Medicare PPO members in California.',
  },
  other: {
    'article:published_time': '2026-09-26T00:00:00Z',
    'article:modified_time': '2026-09-26T00:00:00Z',
    'last-reviewed': '2026-09-26',
    'medical-reviewer': 'Parth Bhavsar, MD',
  },
};

export default function Page() {
  return <AnthemCaliforniaAnnouncement />;
}
