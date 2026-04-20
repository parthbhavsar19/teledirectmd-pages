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
    title: `Does UnitedHealthcare Cover ${cond.displayName} Telemedicine? | TeleDirectMD`,
    description: `Yes — UHC commercial plans cover ${cond.name} telehealth visits. TeleDirectMD is in-network with UHC in 11 states. Board-certified physician. Same-day video visits.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/united-healthcare/${condition}` },
    openGraph: { title: `Does UHC Cover ${cond.displayName} Telemedicine? | TeleDirectMD`, url: `https://teledirectmd.com/insurance/united-healthcare/${condition}`, siteName:'TeleDirectMD', type:'website' },
  };
}

export default async function UHCConditionPage({ params }) {
  const { condition } = await params;
  return <InsuranceConditionClient insurerSlug="united-healthcare" conditionSlug={condition} />;
}
