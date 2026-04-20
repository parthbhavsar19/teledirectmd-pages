import { STATE_NAMES, INSURANCE_CONDITIONS } from '../../../../../data/insurance/insuranceConfig';
import InsuranceStateConditionClient from '../../../components/InsuranceStateConditionClient';

// Aetna state slugs → code
const STATE_SLUGS = {
  arizona: 'AZ',
  colorado: 'CO',
  florida: 'FL',
  georgia: 'GA',
  illinois: 'IL',
  michigan: 'MI',
  minnesota: 'MN',
  ohio: 'OH',
  pennsylvania: 'PA',
  tennessee: 'TN',
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
    title: `${cond.displayName} Treatment Covered by Aetna in ${stateName} | TeleDirectMD`,
    description: `Aetna covers ${cond.name} telehealth visits in ${stateName}. TeleDirectMD is in-network with Aetna in ${stateName}. Board-certified physician (NPI: 1104323203). Same-day video visit — your Aetna copay applies.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/aetna/${segment}/${subsegment}` },
    openGraph: {
      title: `${cond.displayName} Treatment Covered by Aetna in ${stateName} | TeleDirectMD`,
      url: `https://teledirectmd.com/insurance/aetna/${segment}/${subsegment}`,
      siteName: 'TeleDirectMD',
      type: 'website',
    },
  };
}

export default async function AetnaStateConditionPage({ params }) {
  const { segment, subsegment } = await params;
  const stateCode = STATE_SLUGS[segment];
  if (!stateCode || !INSURANCE_CONDITIONS[subsegment]) return null;
  return (
    <InsuranceStateConditionClient
      insurerSlug="aetna"
      stateSlug={segment}
      conditionSlug={subsegment}
    />
  );
}
