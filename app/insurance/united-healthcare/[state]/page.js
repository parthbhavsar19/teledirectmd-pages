import UHCStateClient from './UHCStateClient';
import { STATE_NAMES } from '../../../../data/insurance/insuranceConfig';

const UHC_STATES = ["colorado","georgia","illinois","minnesota","north-carolina","new-jersey","ohio","oklahoma","pennsylvania","tennessee","washington"];
const STATE_CODE_MAP = { colorado:"CO", georgia:"GA", illinois:"IL", minnesota:"MN", "north-carolina":"NC", "new-jersey":"NJ", ohio:"OH", oklahoma:"OK", pennsylvania:"PA", tennessee:"TN", washington:"WA" };

export async function generateStaticParams() {
  return UHC_STATES.map(state => ({ state }));
}

export async function generateMetadata({ params }) {
  const { state } = await params;
  const stateCode = STATE_CODE_MAP[state];
  const stateName = STATE_NAMES[stateCode] || state;
  return {
    title: `Online Doctor That Accepts UnitedHealthcare in ${stateName} | TeleDirectMD`,
    description: `TeleDirectMD is in-network with UnitedHealthcare commercial plans in ${stateName}. Board-certified physician. Same-day video visits for UTI, sinus infection, hypertension refills & more.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/united-healthcare/${state}` },
    openGraph: {
      title: `Online Doctor That Accepts UnitedHealthcare in ${stateName} | TeleDirectMD`,
      description: `UHC in-network in ${stateName}. Board-certified physician. Same-day video visits.`,
      url: `https://teledirectmd.com/insurance/united-healthcare/${state}`,
      siteName: 'TeleDirectMD',
      type: 'website',
    },
  };
}

export default async function UHCStatePage({ params }) {
  const { state } = await params;
  return <UHCStateClient stateSlug={state} />;
}
