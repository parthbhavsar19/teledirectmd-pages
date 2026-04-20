import UHCHubClient from './UHCHubClient';

export const metadata = {
  title: 'Online Doctor That Accepts UnitedHealthcare | TeleDirectMD',
  description: 'TeleDirectMD accepts UnitedHealthcare commercial plans in 11 states. Board-certified physician. Same-day video visits for UTI, sinus infection, hypertension refills & more.',
  alternates: { canonical: 'https://teledirectmd.com/insurance/united-healthcare' },
  openGraph: {
    title: 'Online Doctor That Accepts UnitedHealthcare | TeleDirectMD',
    description: 'In-network with UHC in CO, GA, IL, MN, NC, NJ, OH, OK, PA, TN, WA. Board-certified physician.',
    url: 'https://teledirectmd.com/insurance/united-healthcare',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

export default function UHCPage() {
  return <UHCHubClient />;
}
