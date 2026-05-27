import { Suspense } from 'react';
import HardStopClient from './HardStopClient';

export const metadata = {
  title: 'Important: Please Review — TeleDirectMD',
  description:
    "Based on the intake responses, telehealth isn't the right setting for this concern. We're directing you to in-person care so your child gets the right help.",
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://teledirectmd.com/hardstop' },
  openGraph: {
    title: 'Important: Please Review — TeleDirectMD',
    description:
      "We're directing you to in-person care so your child gets the right help.",
    url: 'https://teledirectmd.com/hardstop',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Important: Please Review — TeleDirectMD',
    description:
      "We're directing you to in-person care so your child gets the right help.",
  },
};

function LoadingFallback() {
  return (
    <div
      style={{
        background: '#FAF8F3',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:
          'Merriweather, Georgia, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        color: '#4D6470',
        padding: '40px 20px',
        fontSize: 16,
      }}
    >
      Loading…
    </div>
  );
}

export default function HardStopPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HardStopClient />
    </Suspense>
  );
}
