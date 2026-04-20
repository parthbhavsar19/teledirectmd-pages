import AetnaStateClient from './AetnaStateClient';
import { STATE_NAMES } from '../../../../data/insurance/insuranceConfig';

const AETNA_STATES = ["arizona","colorado","florida","georgia","illinois","michigan","minnesota","ohio","pennsylvania","tennessee"];
const STATE_CODE_MAP = { arizona:"AZ", colorado:"CO", florida:"FL", georgia:"GA", illinois:"IL", michigan:"MI", minnesota:"MN", ohio:"OH", pennsylvania:"PA", tennessee:"TN" };

export async function generateStaticParams() {
  return AETNA_STATES.map(state => ({ state }));
}

export async function generateMetadata({ params }) {
  const { state } = await params;
  const stateCode = STATE_CODE_MAP[state];
  const stateName = STATE_NAMES[stateCode] || state;
  return {
    title: `Online Doctor That Accepts Aetna in ${stateName} | TeleDirectMD`,
    description: `TeleDirectMD is in-network with Aetna commercial plans in ${stateName}. Board-certified physician. Same-day video visits for UTI, sinus infection, asthma refills & more. Your Aetna copay applies.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/aetna/${state}` },
    openGraph: {
      title: `Online Doctor That Accepts Aetna in ${stateName} | TeleDirectMD`,
      description: `In-network with Aetna in ${stateName}. Board-certified physician. Same-day video visits.`,
      url: `https://teledirectmd.com/insurance/aetna/${state}`,
      siteName: 'TeleDirectMD',
      type: 'website',
    },
  };
}

export default async function AetnaStatePage({ params }) {
  const { state } = await params;
  return <AetnaStateClient stateSlug={state} />;
}
