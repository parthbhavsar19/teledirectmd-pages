import InsuranceClient from './InsuranceClient';

export const metadata = {
  title: 'Insurance & Pricing | TeleDirectMD',
  description: 'TeleDirectMD now accepts select commercial insurance plans from Aetna, Blue Cross Blue Shield, and UnitedHealthcare in growing number of states. Check your coverage or book a flat-fee $49 self-pay visit.',
  alternates: { canonical: 'https://teledirectmd.com/insurance' },
  openGraph: {
    title: 'Insurance & Pricing | TeleDirectMD',
    description: 'Now accepting select insurance plans. Check if your plan is covered or book a $49 self-pay video visit.',
    url: 'https://teledirectmd.com/insurance',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

export default function InsurancePage() {
  return <InsuranceClient />;
}
