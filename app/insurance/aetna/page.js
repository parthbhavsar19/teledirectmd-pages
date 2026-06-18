import AetnaHubClient from './AetnaHubClient';

export const metadata = {
  title: 'Online Doctor That Accepts Aetna Insurance | TeleDirectMD',
  description: 'TeleDirectMD accepts Aetna PPO, HMO, EPO, POS, and Medicare Advantage plans in 13 states. Board-certified physician. Same-day video visits for UTI, sinus infection, asthma, hypertension & more. Check your state.',
  alternates: { canonical: 'https://teledirectmd.com/insurance/aetna' },
  openGraph: {
    title: 'Online Doctor That Accepts Aetna Insurance | TeleDirectMD',
    description: 'In-network with Aetna in AZ, CA, CO, FL, GA, IL, MI, MN, OH, and TN. Board-certified physician. Same-day video visits.',
    url: 'https://teledirectmd.com/insurance/aetna',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

export default function AetnaPage() {
  return <AetnaHubClient />;
}
