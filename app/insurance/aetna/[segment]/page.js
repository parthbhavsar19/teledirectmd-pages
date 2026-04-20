import { STATE_NAMES, INSURANCE_CONDITIONS, INSURERS } from '../../../../data/insurance/insuranceConfig';
import AetnaStateClient from '../components/AetnaStateClient';
import InsuranceConditionClient from '../../components/InsuranceConditionClient';

const insurer = INSURERS.aetna;

// All valid aetna state slugs
const STATE_SLUGS = {
  arizona:"AZ", colorado:"CO", florida:"FL", georgia:"GA", illinois:"IL",
  michigan:"MI", minnesota:"MN", ohio:"OH", pennsylvania:"PA", tennessee:"TN"
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
      title: `Online Doctor That Accepts Aetna in ${stateName} | TeleDirectMD`,
      description: `TeleDirectMD is in-network with Aetna in ${stateName}. Board-certified physician. Same-day video visits for UTI, sinus infection, asthma refills & more. Your Aetna copay applies.`,
      alternates: { canonical: `https://teledirectmd.com/insurance/aetna/${segment}` },
      openGraph: { title: `Online Doctor That Accepts Aetna in ${stateName} | TeleDirectMD`, url: `https://teledirectmd.com/insurance/aetna/${segment}`, siteName:'TeleDirectMD', type:'website' },
    };
  }
  const cond = INSURANCE_CONDITIONS[segment];
  if (cond) {
    return {
      title: `Does Aetna Cover ${cond.displayName} Telemedicine? | TeleDirectMD`,
      description: `Yes — Aetna commercial plans cover ${cond.name} telehealth visits. TeleDirectMD is in-network with Aetna in 10 states. Board-certified physician. Same-day video visits.`,
      alternates: { canonical: `https://teledirectmd.com/insurance/aetna/${segment}` },
      openGraph: { title: `Does Aetna Cover ${cond.displayName} Telemedicine? | TeleDirectMD`, url: `https://teledirectmd.com/insurance/aetna/${segment}`, siteName:'TeleDirectMD', type:'website' },
    };
  }
  return {};
}

export default async function AetnaSegmentPage({ params }) {
  const { segment } = await params;
  if (STATE_SLUGS[segment]) {
    return <AetnaStateClient stateSlug={segment} />;
  }
  if (INSURANCE_CONDITIONS[segment]) {
    return <InsuranceConditionClient insurerSlug="aetna" conditionSlug={segment} />;
  }
  return null;
}
