import StartGateClient from './StartGateClient';

export const metadata = {
  title: 'Start Pediatric Intake — TeleDirectMD',
  description:
    'Quick eligibility check before starting your pediatric telehealth intake with TeleDirectMD. Ages 3–17, licensed in 43 states + DC.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://teledirectmd.com/start' },
  openGraph: {
    title: 'Start Pediatric Intake — TeleDirectMD',
    description:
      'Quick eligibility check before starting your pediatric telehealth intake.',
    url: 'https://teledirectmd.com/start',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Start Pediatric Intake — TeleDirectMD',
    description:
      'Quick eligibility check before starting your pediatric telehealth intake.',
  },
};

export default function StartPage() {
  return <StartGateClient />;
}
