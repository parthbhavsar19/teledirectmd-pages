import { STATE_NAMES, INSURANCE_CONDITIONS } from '../../../../../data/insurance/insuranceConfig';
import InsuranceStateConditionClient from '../../../components/InsuranceStateConditionClient';

// BCBS state slugs → code
const STATE_SLUGS = {
  florida: 'FL',
  georgia: 'GA',
  illinois: 'IL',
  pennsylvania: 'PA',
  texas: 'TX',
};
const CONDITION_SLUGS = Object.keys(INSURANCE_CONDITIONS);

export async function generateStaticParams() {
  const params = [];
  for (const stateSlug of Object.keys(STATE_SLUGS)) {
    for (const condSlug of CONDITION_SLUGS) {
      params.push({ segment: stateSlug, subsegment: condSlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { segment, subsegment } = await params;
  const stateCode = STATE_SLUGS[segment];
  if (!stateCode) return {};
  const stateName = STATE_NAMES[stateCode];
  const cond = INSURANCE_CONDITIONS[subsegment];
  if (!cond) return {};
  return {
    title: `${cond.displayName} Treatment Covered by BCBS in ${stateName} | TeleDirectMD`,
    description: `Blue Cross Blue Shield covers ${cond.name} telehealth visits in ${stateName}. TeleDirectMD is in-network with BCBS in ${stateName}. Board-certified physician (NPI: 1104323203). Same-day video visit — your BCBS copay applies.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${segment}/${subsegment}` },
    openGraph: {
      title: `${cond.displayName} Treatment Covered by BCBS in ${stateName} | TeleDirectMD`,
      url: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${segment}/${subsegment}`,
      siteName: 'TeleDirectMD',
      type: 'website',
    },
  };
}

export default async function BCBSStateConditionPage({ params }) {
  const { segment, subsegment } = await params;
  const stateCode = STATE_SLUGS[segment];
  if (!stateCode || !INSURANCE_CONDITIONS[subsegment]) return null;
  return (
    <InsuranceStateConditionClient
      insurerSlug="blue-cross-blue-shield"
      stateSlug={segment}
      conditionSlug={subsegment}
    />
  );
}
