// Client-safe check for internal /insurance/* links.
//
// Returns the live href (with trailing slash) or null when the target is
// retired, redirected or never built, so link modules can drop the link or
// fall back to a parent page. Data comes from lib/insurance-dead-paths.js,
// generated in prebuild from vercel.json and the insurer routes.

import { DEAD_INSURANCE_PATHS, BUILT_INSURER_STATES, BUILT_INSURER_STATE_CONDITIONS } from './insurance-dead-paths';
import { INSURANCE_CONDITIONS } from '../data/insurance/insuranceConfig';

const STATE_NAME_SLUGS = new Set([
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
  'delaware', 'district-of-columbia', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois',
  'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland',
  'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana',
  'nebraska', 'nevada', 'new-hampshire', 'new-jersey', 'new-mexico', 'new-york',
  'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania',
  'rhode-island', 'south-carolina', 'south-dakota', 'tennessee', 'texas', 'utah',
  'vermont', 'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming',
]);

export function insuranceHref(path) {
  const bare = path.replace(/\/+$/, '');
  if (DEAD_INSURANCE_PATHS.has(bare)) return null;
  const parts = bare.split('/');
  const [, root, insurer, seg] = parts;
  if (root === 'insurance' && seg && STATE_NAME_SLUGS.has(seg)) {
    const built = BUILT_INSURER_STATES[insurer];
    if (built && !built.includes(seg)) return null;
  }
  // /insurance/{insurer}/{condition}/ is only built for INSURANCE_CONDITIONS keys
  // (the [segment] routes' generateStaticParams).
  if (root === 'insurance' && parts.length === 4 && BUILT_INSURER_STATES[insurer]
      && !STATE_NAME_SLUGS.has(seg) && !INSURANCE_CONDITIONS[seg]) return null;
  // /insurance/{insurer}/{state}/{condition}/ uses its own state list.
  if (root === 'insurance' && parts.length === 5 && STATE_NAME_SLUGS.has(seg)) {
    const built = BUILT_INSURER_STATE_CONDITIONS[insurer];
    if (built && !built.includes(seg)) return null;
  }
  return `${bare}/`;
}

// Like insuranceHref, but falls back to the closest live parent page.
export function insuranceHrefOrParent(path) {
  let p = path.replace(/\/+$/, '');
  while (p.split('/').length > 2) {
    const href = insuranceHref(p);
    if (href) return href;
    p = p.slice(0, p.lastIndexOf('/'));
  }
  return '/insurance/';
}
