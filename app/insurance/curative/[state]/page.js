import { CURATIVE_STATES, getCurativeStateCodes, INSURERS } from '../../../../data/insurance/insuranceConfig';
import { getCurativeStateContent } from '../../../../lib/curative-content';
import CurativeStateClient from '../components/CurativeStateClient';

// Enabling a state is a config-only change: add it to CURATIVE_STATES with
// enabled: true and the route, metadata, and sitemap all pick it up.
export function generateStaticParams() {
  return getCurativeStateCodes().map((code) => ({ state: CURATIVE_STATES[code].slug }));
}

function codeForSlug(slug) {
  return getCurativeStateCodes().find((c) => CURATIVE_STATES[c].slug === slug) || null;
}

export function generateMetadata({ params }) {
  const code = codeForSlug(params.state);
  const content = code ? getCurativeStateContent(code) : null;
  if (!content) return { title: INSURERS.curative.metaTitle };
  const url = `https://teledirectmd.com/insurance/curative/${content.slug}/`;
  const title = `Doctors That Take Curative Insurance in ${content.name} | TeleDirectMD`;
  const credential = content.license.isTelehealthRegistration
    ? `telehealth provider registration ${content.license.number}`
    : `medical license ${content.license.number}`;
  const description = `TeleDirectMD is in-network with Curative Commercial PPO, EPO, and self-funded plans in ${content.name}, effective ${content.effectiveDate}. Visits are with Parth Bhavsar, MD, ${content.name} ${credential}. Members who have completed their Baseline Visit pay $0. $79 flat self-pay always available.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'TeleDirectMD', type: 'website' },
  };
}

export default function CurativeStatePage({ params }) {
  const code = codeForSlug(params.state);
  const content = code ? getCurativeStateContent(code) : null;
  if (!content) return null;
  return <CurativeStateClient content={content} />;
}
