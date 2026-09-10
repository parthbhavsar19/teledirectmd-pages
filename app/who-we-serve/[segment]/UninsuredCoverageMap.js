// Coverage map for the Uninsured & Affordable Care page.
//
// Built from the site's own path data (lib/us-map-paths.js, viewBox 0 0 960 600)
// and coloured from data/states.json, so a state launch recolours the map with
// no edit here. Server-rendered — there is nothing interactive about it.

import US_STATE_PATHS from '../../../lib/us-map-paths';

const COVERED = '#14706B';
const DC = '#E85D3C';
const NOT_COVERED = '#D9D4CA';

export default function UninsuredCoverageMap({ servedAbbrs, label }) {
  const served = new Set(servedAbbrs);

  return (
    <svg viewBox="0 0 960 600" role="img" aria-label={label}>
      {Object.keys(US_STATE_PATHS).map((abbr) => (
        <path
          key={abbr}
          d={US_STATE_PATHS[abbr]}
          fill={!served.has(abbr) ? NOT_COVERED : abbr === 'DC' ? DC : COVERED}
          stroke="#FFFFFF"
          strokeWidth={1.5}
        />
      ))}
    </svg>
  );
}
