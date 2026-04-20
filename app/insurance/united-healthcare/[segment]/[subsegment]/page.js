import { STATE_NAMES, INSURANCE_CONDITIONS } from '../../../../../data/insurance/insuranceConfig';
import InsuranceStateConditionClient from '../../../components/InsuranceStateConditionClient';

// UHC state slugs → code
const STATE_SLUGS = {
  colorado: 'CO',
  georgia: 'GA',
  illinois: 'IL',
  minnesota: 'MN',
  'north-carolina': 'NC',
  'new-jersey': 'NJ',
  ohio: 'OH',
  oklahoma: 'OK',
  pennsylvania: 'PA',
  tennessee: 'TN',
  washington: 'WA',
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
    title: `${cond.displayName} Treatment Covered by UHC in ${stateName} | TeleDirectMD`,
    description: `UnitedHealthcare covers ${cond.name} telehealth visits in ${stateName}. TeleDirectMD is in-network with UHC in ${stateName}. Board-certified physician (NPI: 1104323203). Same-day video visit — your UHC copay applies.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/united-healthcare/${segment}/${subsegment}` },
    openGraph: {
      title: `${cond.displayName} Treatment Covered by UHC in ${stateName} | TeleDirectMD`,
      url: `https://teledirectmd.com/insurance/united-healthcare/${segment}/${subsegment}`,
      siteName: 'TeleDirectMD',
      type: 'website',
    },
  };
}

export default async function UHCStateConditionPage({ params }) {
  const { segment, subsegment } = await params;
  const stateCode = STATE_SLUGS[segment];
  if (!stateCode || !INSURANCE_CONDITIONS[subsegment]) return null;
  return (
    <InsuranceStateConditionClient
      insurerSlug="united-healthcare"
      stateSlug={segment}
      conditionSlug={subsegment}
    />
  );
}
