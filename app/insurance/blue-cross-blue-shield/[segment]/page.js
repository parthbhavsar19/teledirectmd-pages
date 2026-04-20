import { STATE_NAMES, INSURANCE_CONDITIONS, INSURERS } from '../../../../data/insurance/insuranceConfig';
import BCBSStateClient from '../components/BCBSStateClient';
import InsuranceConditionClient from '../../components/InsuranceConditionClient';

const insurer = INSURERS['blue-cross-blue-shield'];

// All valid BCBS state slugs → state code
const STATE_SLUGS = {
  florida: 'FL',
  georgia: 'GA',
  illinois: 'IL',
  pennsylvania: 'PA',
  texas: 'TX',
};
const CONDITION_SLUGS = Object.keys(INSURANCE_CONDITIONS);

export async function generateStaticParams() {
  const stateParams = Object.keys(STATE_SLUGS).map(s => ({ segment: s }));
  const conditionParams = CONDITION_SLUGS.map(c => ({ segment: c }));
  return [...stateParams, ...conditionParams];
}

export async function generateMetadata({ params }) {
  const { segment } = await params;
  if (STATE_SLUGS[segment]) {
    const stateName = STATE_NAMES[STATE_SLUGS[segment]];
    const affiliateName = insurer.affiliates?.[STATE_SLUGS[segment]] || 'Blue Cross Blue Shield';
    return {
      title: `Online Doctor That Accepts ${affiliateName} in ${stateName} | TeleDirectMD`,
      description: `TeleDirectMD is in-network with ${affiliateName} in ${stateName}. Board-certified physician. Same-day video visits for UTI, sinus infection, asthma refills & more. Your BCBS copay applies.`,
      alternates: { canonical: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${segment}` },
      openGraph: {
        title: `Online Doctor That Accepts ${affiliateName} in ${stateName} | TeleDirectMD`,
        url: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${segment}`,
        siteName: 'TeleDirectMD',
        type: 'website',
      },
    };
  }
  const cond = INSURANCE_CONDITIONS[segment];
  if (cond) {
    return {
      title: `Does Blue Cross Blue Shield Cover ${cond.displayName} Telemedicine? | TeleDirectMD`,
      description: `Yes — BCBS commercial plans cover ${cond.name} telehealth visits. TeleDirectMD is in-network with Blue Cross Blue Shield in 5 states. Board-certified physician. Same-day video visits.`,
      alternates: { canonical: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${segment}` },
      openGraph: {
        title: `Does Blue Cross Blue Shield Cover ${cond.displayName} Telemedicine? | TeleDirectMD`,
        url: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${segment}`,
        siteName: 'TeleDirectMD',
        type: 'website',
      },
    };
  }
  return {};
}

export default async function BCBSSegmentPage({ params }) {
  const { segment } = await params;
  if (STATE_SLUGS[segment]) {
    return <BCBSStateClient stateSlug={segment} />;
  }
  if (INSURANCE_CONDITIONS[segment]) {
    return <InsuranceConditionClient insurerSlug="blue-cross-blue-shield" conditionSlug={segment} />;
  }
  return null;
}
