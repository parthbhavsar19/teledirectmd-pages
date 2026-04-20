import BCBSStateClient from './BCBSStateClient';
import { STATE_NAMES } from '../../../../data/insurance/insuranceConfig';

const BCBS_STATES = ["florida","georgia","illinois","pennsylvania","texas"];
const STATE_CODE_MAP = { florida:"FL", georgia:"GA", illinois:"IL", pennsylvania:"PA", texas:"TX" };

export async function generateStaticParams() {
  return BCBS_STATES.map(state => ({ state }));
}

export async function generateMetadata({ params }) {
  const { state } = await params;
  const stateCode = STATE_CODE_MAP[state];
  const stateName = STATE_NAMES[stateCode] || state;
  const affiliates = { FL:"Florida Blue", GA:"Anthem Blue Cross Blue Shield", IL:"Blue Cross Blue Shield of Illinois", PA:"Highmark Blue Cross Blue Shield", TX:"Blue Cross Blue Shield of Texas" };
  const affiliate = affiliates[stateCode] || "Blue Cross Blue Shield";
  return {
    title: `Online Doctor That Accepts ${affiliate} | TeleDirectMD`,
    description: `TeleDirectMD is in-network with ${affiliate} in ${stateName}. Board-certified physician. Same-day video visits for UTI, sinus infection, asthma refills & more.`,
    alternates: { canonical: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${state}` },
    openGraph: {
      title: `Online Doctor That Accepts ${affiliate} | TeleDirectMD`,
      description: `In-network with ${affiliate} in ${stateName}. Same-day video visits with board-certified physician.`,
      url: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${state}`,
      siteName: 'TeleDirectMD',
      type: 'website',
    },
  };
}

export default async function BCBSStatePage({ params }) {
  const { state } = await params;
  return <BCBSStateClient stateSlug={state} />;
}
