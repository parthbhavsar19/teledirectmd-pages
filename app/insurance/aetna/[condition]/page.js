import InsuranceConditionClient from '../../components/InsuranceConditionClient';
import { INSURANCE_CONDITIONS } from '../../../../data/insurance/insuranceConfig';

export async function generateStaticParams() {
  return Object.keys(INSURANCE_CONDITIONS).map(condition => ({ condition }));
}

export async function generateMetadata({ params }) {
  const { condition } = await params;
  const cond = INSURANCE_CONDITIONS[condition];
  if (!cond) return {};
  return {
    title: `Does Aetna Cover ${cond.displayName} Telemedicine? | TeleDirectMD`,
    description: `Yes — Aetna commercial plans cover ${cond.name} telehealth visits. TeleDirectMD is in-network with Aetna in 10 states. Board-certified physician. Same-day video visits.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/aetna/${condition}` },
    openGraph: { title: `Does Aetna Cover ${cond.displayName} Telemedicine? | TeleDirectMD`, url: `https://teledirectmd.com/insurance/aetna/${condition}`, siteName:'TeleDirectMD', type:'website' },
  };
}

export default async function AetnaConditionPage({ params }) {
  const { condition } = await params;
  return <InsuranceConditionClient insurerSlug="aetna" conditionSlug={condition} />;
}
