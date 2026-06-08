import FloridaBlueHubClient from './FloridaBlueHubClient';

export const metadata = {
  title: 'Online Doctor That Accepts Florida Blue | TeleDirectMD',
  description: 'TeleDirectMD is in-network with Florida Blue (BCBS of Florida) for commercial plans. Board-certified, Florida-registered telehealth physician. Same-day video visits for UTI, sinus infection, hypertension, hyperlipidemia & more. $79 self-pay also available.',
  alternates: { canonical: 'https://teledirectmd.com/insurance/florida-blue' },
  openGraph: {
    title: 'Online Doctor That Accepts Florida Blue | TeleDirectMD',
    description: 'In-network with Florida Blue commercial plans. Telehealth visits for Floridians with Dr. Parth Bhavsar, MD (Registration #TPME5921 under Fla. Stat. § 456.47(4)).',
    url: 'https://teledirectmd.com/insurance/florida-blue',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
  // FL: A3 verify-link via metadata.other — placement 3 of 3.
  other: { 'fl-telehealth-registry': 'https://flhealthsource.gov/telehealth/' },
};

export default function FloridaBluePage() {
  return <FloridaBlueHubClient />;
}
