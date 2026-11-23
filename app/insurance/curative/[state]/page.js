import { CURATIVE_STATES, getCurativeStateCodes, INSURERS } from '../../../../data/insurance/insuranceConfig';
import CurativeStateClient from '../components/CurativeStateClient';

// Enabling a state is a config-only change: add it to CURATIVE_STATES with
// enabled: true and the route, metadata, and sitemap all pick it up.
export function generateStaticParams() {
  return getCurativeStateCodes().map((code) => ({ state: CURATIVE_STATES[code].slug }));
}

function findStateBySlug(slug) {
  const code = getCurativeStateCodes().find((c) => CURATIVE_STATES[c].slug === slug);
  return code ? { code, ...CURATIVE_STATES[code] } : null;
}

export function generateMetadata({ params }) {
  const st = findStateBySlug(params.state);
  if (!st) return { title: INSURERS.curative.metaTitle };
  const url = `https://teledirectmd.com/insurance/curative/${st.slug}/`;
  const title = `Doctors That Take Curative Insurance in ${st.name} | TeleDirectMD`;
  const description = `TeleDirectMD is in-network with Curative Commercial PPO, EPO, and self-funded plans in ${st.name}, effective ${st.effectiveDate}. ${st.name} members who have completed their Baseline Visit typically pay $0 for a video visit. $79 flat self-pay always available.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'TeleDirectMD', type: 'website' },
  };
}

export default function CurativeStatePage({ params }) {
  const st = findStateBySlug(params.state);
  if (!st) return null;
  return <CurativeStateClient state={st} />;
}
