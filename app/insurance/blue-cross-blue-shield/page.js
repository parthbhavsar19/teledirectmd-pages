import BCBSHubClient from './BCBSHubClient';

export const metadata = {
  title: 'Online Doctor That Accepts Blue Cross Blue Shield | TeleDirectMD',
  description: 'TeleDirectMD accepts Blue Cross Blue Shield plans in FL, GA, IL, PA & TX. Board-certified physician. Same-day video visits for UTI, sinus infection, hypertension & more.',
  alternates: { canonical: 'https://teledirectmd.com/insurance/blue-cross-blue-shield' },
  openGraph: {
    title: 'Online Doctor That Accepts Blue Cross Blue Shield | TeleDirectMD',
    description: 'In-network with BCBS affiliates in Florida, Georgia, Illinois, Pennsylvania, and Texas.',
    url: 'https://teledirectmd.com/insurance/blue-cross-blue-shield',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

export default function BCBSPage() {
  return <BCBSHubClient />;
}
