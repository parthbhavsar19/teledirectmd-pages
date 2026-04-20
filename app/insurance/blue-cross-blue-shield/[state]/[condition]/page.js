import InsuranceStateConditionClient from '../../../components/InsuranceStateConditionClient';
import { INSURANCE_CONDITIONS, STATE_NAMES } from '../../../../../data/insurance/insuranceConfig';

const BCBS_STATE_SLUGS = ["florida","georgia","illinois","pennsylvania","texas"];
const STATE_CODE_MAP = { florida:"FL", georgia:"GA", illinois:"IL", pennsylvania:"PA", texas:"TX" };
const AFFILIATES = { FL:"Florida Blue", GA:"Anthem Blue Cross Blue Shield", IL:"Blue Cross Blue Shield of Illinois", PA:"Highmark Blue Cross Blue Shield", TX:"Blue Cross Blue Shield of Texas" };

export async function generateStaticParams() {
  const conditions = Object.keys(INSURANCE_CONDITIONS);
  return BCBS_STATE_SLUGS.flatMap(state => conditions.map(condition => ({ state, condition })));
}

export async function generateMetadata({ params }) {
  const { state, condition } = await params;
  const stateCode = STATE_CODE_MAP[state];
  const stateName = STATE_NAMES[stateCode] || state;
  const affiliate = AFFILIATES[stateCode] || "Blue Cross Blue Shield";
  const cond = INSURANCE_CONDITIONS[condition];
  if (!cond) return {};
  return {
    title: `${cond.displayName} Treatment with ${affiliate} | TeleDirectMD`,
    description: `${affiliate} covers ${cond.name} telemedicine in ${stateName}. TeleDirectMD is in-network. Same-day video visit with board-certified physician. Your BCBS copay applies.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${state}/${condition}` },
    openGraph: { title: `${cond.displayName} Treatment with ${affiliate} | TeleDirectMD`, url: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${state}/${condition}`, siteName:'TeleDirectMD', type:'website' },
  };
}

export default async function BCBSStateConditionPage({ params }) {
  const { state, condition } = await params;
  return <InsuranceStateConditionClient insurerSlug="blue-cross-blue-shield" stateSlug={state} conditionSlug={condition} />;
}
