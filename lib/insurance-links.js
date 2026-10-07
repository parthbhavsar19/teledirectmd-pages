// Client-safe check for internal /insurance/* links.
//
// Returns the live href (with trailing slash) or null when the target is
// retired, redirected or never built, so link modules can drop the link or
// fall back to a parent page. Data comes from lib/insurance-dead-paths.js,
// generated in prebuild from vercel.json and the insurer routes.

import { DEAD_INSURANCE_PATHS, BUILT_INSURER_STATES } from './insurance-dead-paths';

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
  const [, root, insurer, seg] = bare.split('/');
  if (root === 'insurance' && seg && STATE_NAME_SLUGS.has(seg)) {
    const built = BUILT_INSURER_STATES[insurer];
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
