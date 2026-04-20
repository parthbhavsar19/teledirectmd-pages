import { STATE_NAMES, INSURANCE_CONDITIONS, INSURERS } from '../../../../data/insurance/insuranceConfig';
import UHCStateClient from '../components/UHCStateClient';
import InsuranceConditionClient from '../../components/InsuranceConditionClient';

const insurer = INSURERS['united-healthcare'];

// All valid UHC state slugs → state code
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
  const stateParams = Object.keys(STATE_SLUGS).map(s => ({ segment: s }));
  const conditionParams = CONDITION_SLUGS.map(c => ({ segment: c }));
  return [...stateParams, ...conditionParams];
}

export async function generateMetadata({ params }) {
  const { segment } = await params;
  if (STATE_SLUGS[segment]) {
    const stateName = STATE_NAMES[STATE_SLUGS[segment]];
    return {
      title: `Online Doctor That Accepts UnitedHealthcare in ${stateName} | TeleDirectMD`,
      description: `TeleDirectMD is in-network with UnitedHealthcare in ${stateName}. Board-certified physician. Same-day video visits for UTI, sinus infection, asthma refills & more. Your UHC copay applies.`,
      alternates: { canonical: `https://teledirectmd.com/insurance/united-healthcare/${segment}` },
      openGraph: {
        title: `Online Doctor That Accepts UnitedHealthcare in ${stateName} | TeleDirectMD`,
        url: `https://teledirectmd.com/insurance/united-healthcare/${segment}`,
        siteName: 'TeleDirectMD',
        type: 'website',
      },
    };
  }
  const cond = INSURANCE_CONDITIONS[segment];
  if (cond) {
    return {
      title: `Does UnitedHealthcare Cover ${cond.displayName} Telemedicine? | TeleDirectMD`,
      description: `Yes — UHC commercial plans cover ${cond.name} telehealth visits. TeleDirectMD is in-network with UnitedHealthcare in 11 states. Board-certified physician. Same-day video visits.`,
      alternates: { canonical: `https://teledirectmd.com/insurance/united-healthcare/${segment}` },
      openGraph: {
        title: `Does UnitedHealthcare Cover ${cond.displayName} Telemedicine? | TeleDirectMD`,
        url: `https://teledirectmd.com/insurance/united-healthcare/${segment}`,
        siteName: 'TeleDirectMD',
        type: 'website',
      },
    };
  }
  return {};
}

export default async function UHCSegmentPage({ params }) {
  const { segment } = await params;
  if (STATE_SLUGS[segment]) {
    return <UHCStateClient stateSlug={segment} />;
  }
  if (INSURANCE_CONDITIONS[segment]) {
    return <InsuranceConditionClient insurerSlug="united-healthcare" conditionSlug={segment} />;
  }
  return null;
}
