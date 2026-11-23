// State silhouette graphic.
//
// Renders the state's own outline from lib/us-map-paths.js (viewBox 0 0 960 600,
// all 51 jurisdictions present). The shared US viewBox would draw the state at
// national scale — tiny and off-centre — so we parse the path's coordinates and
// emit a viewBox cropped to that state's bounding box with a small margin.
//
// This is the only genuinely state-specific graphic available without commissioning
// art: the outline of Alaska is unmistakably Alaska, it costs no new assets, and it
// works for every state automatically.
import US_STATE_PATHS from '../../lib/us-map-paths';

// Absolute M/L/Z path data with "x,y" pairs. Pull every pair and take the extremes.
function boundingBox(d) {
  const nums = d.match(/-?\d+(?:\.\d+)?/g);
  if (!nums || nums.length < 4) return null;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (let i = 0; i + 1 < nums.length; i += 2) {
    const x = parseFloat(nums[i]);
    const y = parseFloat(nums[i + 1]);
    if (Number.isNaN(x) || Number.isNaN(y)) continue;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  if (!Number.isFinite(minX) || maxX <= minX || maxY <= minY) return null;
  return { minX, minY, w: maxX - minX, h: maxY - minY };
}

export default function StateMap({ abbr, name, height = 190, title }) {
  const d = US_STATE_PATHS[(abbr || '').toUpperCase()];
  if (!d) return null;
  const bb = boundingBox(d);
  if (!bb) return null;

  const pad = Math.max(bb.w, bb.h) * 0.06;
  const viewBox = `${bb.minX - pad} ${bb.minY - pad} ${bb.w + pad * 2} ${bb.h + pad * 2}`;
  const label = title || `Outline map of ${name || abbr}`;
  const gid = `tdmd-map-grad-${(abbr || 'xx').toLowerCase()}`;

  return (
    <svg
      viewBox={viewBox}
      height={height}
      role="img"
      aria-label={label}
      style={{ display: 'block', width: '100%', height: 'auto', maxHeight: `${height}px`, overflow: 'visible' }}
    >
      <title>{label}</title>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#065f6b" />
        </linearGradient>
      </defs>
      <path
        d={d}
        fill={`url(#${gid})`}
        stroke="#ffffff"
        strokeWidth={Math.max(bb.w, bb.h) * 0.004}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
