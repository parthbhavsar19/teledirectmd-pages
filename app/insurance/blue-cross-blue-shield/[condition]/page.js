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
    title: `Does Blue Cross Blue Shield Cover ${cond.displayName} Telemedicine? | TeleDirectMD`,
    description: `Yes — BCBS plans cover ${cond.name} telehealth visits. TeleDirectMD is in-network with BCBS in FL, GA, IL, PA, TX. Board-certified physician. Same-day video visits.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${condition}` },
    openGraph: { title: `Does BCBS Cover ${cond.displayName} Telemedicine? | TeleDirectMD`, url: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${condition}`, siteName:'TeleDirectMD', type:'website' },
  };
}

export default async function BCBSConditionPage({ params }) {
  const { condition } = await params;
  return <InsuranceConditionClient insurerSlug="blue-cross-blue-shield" conditionSlug={condition} />;
}
