import InsuranceStateConditionClient from '../../../components/InsuranceStateConditionClient';
import { INSURANCE_CONDITIONS, STATE_NAMES } from '../../../../../data/insurance/insuranceConfig';

const AETNA_STATE_SLUGS = ["arizona","colorado","florida","georgia","illinois","michigan","minnesota","ohio","pennsylvania","tennessee"];
const STATE_CODE_MAP = { arizona:"AZ", colorado:"CO", florida:"FL", georgia:"GA", illinois:"IL", michigan:"MI", minnesota:"MN", ohio:"OH", pennsylvania:"PA", tennessee:"TN" };

export async function generateStaticParams() {
  const conditions = Object.keys(INSURANCE_CONDITIONS);
  return AETNA_STATE_SLUGS.flatMap(state => conditions.map(condition => ({ state, condition })));
}

export async function generateMetadata({ params }) {
  const { state, condition } = await params;
  const stateCode = STATE_CODE_MAP[state];
  const stateName = STATE_NAMES[stateCode] || state;
  const cond = INSURANCE_CONDITIONS[condition];
  if (!cond) return {};
  return {
    title: `${cond.displayName} Treatment with Aetna in ${stateName} | TeleDirectMD`,
    description: `Aetna covers ${cond.name} telemedicine in ${stateName}. TeleDirectMD is in-network with Aetna in ${stateName}. Same-day video visit with board-certified physician. Your Aetna copay applies.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/aetna/${state}/${condition}` },
    openGraph: { title: `${cond.displayName} Treatment with Aetna in ${stateName} | TeleDirectMD`, url: `https://teledirectmd.com/insurance/aetna/${state}/${condition}`, siteName:'TeleDirectMD', type:'website' },
  };
}

export default async function AetnaStateConditionPage({ params }) {
  const { state, condition } = await params;
  return <InsuranceStateConditionClient insurerSlug="aetna" stateSlug={state} conditionSlug={condition} />;
}
