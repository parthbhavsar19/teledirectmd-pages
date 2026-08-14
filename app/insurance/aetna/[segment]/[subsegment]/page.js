import { STATE_NAMES, INSURANCE_CONDITIONS } from '../../../../../data/insurance/insuranceConfig';
import { AETNA_CA_CONDITION_DETAILS, AETNA_CA_CONDITION_SLUGS } from '../../../../../data/insurance/aetna-ca-conditions';
import InsuranceStateConditionClient from '../../../components/InsuranceStateConditionClient';

// Aetna state slugs → code (alphabetical — keep in sync with INSURERS.aetna.states in data/insurance/insuranceConfig.js)
const STATE_SLUGS = {
  arizona: 'AZ',
  california: 'CA',
  colorado: 'CO',
  florida: 'FL',
  georgia: 'GA',
  illinois: 'IL',
  louisiana: 'LA',
  michigan: 'MI',
  minnesota: 'MN',
  'north-carolina': 'NC',
  ohio: 'OH',
  pennsylvania: 'PA',
  tennessee: 'TN',
};
const CONDITION_SLUGS = Object.keys(INSURANCE_CONDITIONS);

// California-only expansion: 50 additional conditions live only at
// /insurance/aetna/california/{slug}/. Authored in aetna-ca-conditions.js.
// These do NOT appear under any other Aetna state, BCBS, or UHC route.
function isCAExpansionCondition(slug) {
  return Boolean(AETNA_CA_CONDITION_DETAILS[slug]);
}

export async function generateStaticParams() {
  const params = [];
  for (const stateSlug of Object.keys(STATE_SLUGS)) {
    for (const condSlug of CONDITION_SLUGS) {
      params.push({ segment: stateSlug, subsegment: condSlug });
    }
  }
  // CA-only expansion conditions — emit only for california.
  for (const condSlug of AETNA_CA_CONDITION_SLUGS) {
    if (AETNA_CA_CONDITION_DETAILS[condSlug]) {
      params.push({ segment: 'california', subsegment: condSlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { segment, subsegment } = await params;
  const stateCode = STATE_SLUGS[segment];
  if (!stateCode) return {};
  const stateName = STATE_NAMES[stateCode];

  // Base 10 conditions — use INSURANCE_CONDITIONS
  const baseCond = INSURANCE_CONDITIONS[subsegment];
  // CA-only expansion — use AETNA_CA_CONDITION_DETAILS
  const caCond = segment === 'california' ? AETNA_CA_CONDITION_DETAILS[subsegment] : null;
  const cond = caCond || baseCond;
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
  if (!stateCode) return null;

  // CA-only expansion path — only valid when state is california
  const isCAOnly = segment === 'california' && isCAExpansionCondition(subsegment);
  const isBaseCondition = Boolean(INSURANCE_CONDITIONS[subsegment]);

  if (!isCAOnly && !isBaseCondition) return null;

  return (
    <InsuranceStateConditionClient
      insurerSlug="aetna"
      stateSlug={segment}
      conditionSlug={subsegment}
      caExpansion={isCAOnly}
    />
  );
}
