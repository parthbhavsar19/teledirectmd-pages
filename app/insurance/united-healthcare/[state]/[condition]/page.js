import InsuranceStateConditionClient from '../../../components/InsuranceStateConditionClient';
import { INSURANCE_CONDITIONS, STATE_NAMES } from '../../../../../data/insurance/insuranceConfig';

const UHC_STATE_SLUGS = ["colorado","georgia","illinois","minnesota","north-carolina","new-jersey","ohio","oklahoma","pennsylvania","tennessee","washington"];

export async function generateStaticParams() {
  const conditions = Object.keys(INSURANCE_CONDITIONS);
  return UHC_STATE_SLUGS.flatMap(state => conditions.map(condition => ({ state, condition })));
}

export async function generateMetadata({ params }) {
  const { state, condition } = await params;
  const stateNameMap = { colorado:"Colorado", georgia:"Georgia", illinois:"Illinois", minnesota:"Minnesota", "north-carolina":"North Carolina", "new-jersey":"New Jersey", ohio:"Ohio", oklahoma:"Oklahoma", pennsylvania:"Pennsylvania", tennessee:"Tennessee", washington:"Washington" };
  const stateName = stateNameMap[state] || state;
  const cond = INSURANCE_CONDITIONS[condition];
  if (!cond) return {};
  return {
    title: `${cond.displayName} Treatment with UnitedHealthcare in ${stateName} | TeleDirectMD`,
    description: `UnitedHealthcare covers ${cond.name} telemedicine in ${stateName}. TeleDirectMD is in-network with UHC in ${stateName}. Same-day video visit. Board-certified physician.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/united-healthcare/${state}/${condition}` },
    openGraph: { title: `${cond.displayName} Treatment with UHC in ${stateName} | TeleDirectMD`, url: `https://teledirectmd.com/insurance/united-healthcare/${state}/${condition}`, siteName:'TeleDirectMD', type:'website' },
  };
}

export default async function UHCStateConditionPage({ params }) {
  const { state, condition } = await params;
  return <InsuranceStateConditionClient insurerSlug="united-healthcare" stateSlug={state} conditionSlug={condition} />;
}
