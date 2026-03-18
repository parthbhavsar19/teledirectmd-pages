'use client';

import { useState, useCallback } from 'react';

/* Simplified US state SVG paths — viewBox 0 0 960 600 */
const STATE_PATHS = {
  AL: "M628,425 L628,468 L625,488 L632,489 L632,494 L618,495 L614,470 L610,468 L610,425Z",
  AK: "M161,485 L183,485 L183,510 L195,510 L195,530 L175,540 L161,540 L145,530 L130,525 L118,510 L110,500 L100,495 L95,485 L100,478 L115,478 L125,480 L140,478 L150,480Z",
  AZ: "M205,410 L275,410 L275,490 L240,505 L205,505Z",
  AR: "M555,420 L605,420 L605,465 L555,465Z",
  CA: "M120,285 L140,285 L155,300 L170,320 L185,350 L195,380 L195,430 L190,460 L175,475 L160,480 L145,470 L130,450 L115,420 L108,385 L108,350 L110,320Z",
  CO: "M280,295 L360,295 L360,355 L280,355Z",
  CT: "M852,195 L880,185 L885,205 L860,215 L852,210Z",
  DE: "M820,290 L835,280 L840,300 L830,310 L820,305Z",
  FL: "M640,480 L680,470 L720,485 L730,500 L725,530 L700,560 L680,565 L660,555 L645,530 L635,505 L630,495Z",
  GA: "M640,410 L680,400 L690,430 L690,470 L680,470 L640,480 L630,475 L628,425Z",
  HI: "M260,530 L280,525 L295,530 L305,540 L295,550 L275,555 L260,548Z",
  ID: "M210,165 L240,155 L250,180 L250,260 L230,280 L210,280 L200,250 L200,200Z",
  IL: "M590,255 L610,255 L615,270 L615,330 L605,370 L590,375 L580,355 L580,290Z",
  IN: "M615,270 L645,270 L645,360 L615,365 L615,330Z",
  IA: "M510,240 L580,240 L585,250 L585,290 L510,290Z",
  KS: "M390,335 L500,335 L500,385 L390,385Z",
  KY: "M605,345 L680,330 L700,340 L700,365 L665,375 L610,380 L605,370Z",
  LA: "M555,465 L600,465 L610,468 L610,505 L600,520 L575,525 L560,510 L555,490Z",
  ME: "M870,100 L890,85 L900,100 L900,160 L885,175 L870,170 L865,140Z",
  MD: "M770,280 L820,270 L830,280 L835,300 L820,305 L800,310 L780,305 L770,295Z",
  MA: "M860,180 L900,175 L905,185 L895,195 L860,200Z",
  MI: "M600,155 L620,145 L640,155 L655,175 L660,205 L650,230 L640,245 L620,250 L610,240 L615,220 L610,195 L600,175Z",
  MN: "M480,115 L540,115 L545,135 L545,215 L510,230 L480,230 L475,175Z",
  MS: "M590,420 L610,415 L610,425 L610,468 L600,465 L590,465 L580,460 L575,430Z",
  MO: "M510,320 L575,315 L585,340 L585,390 L555,405 L510,405 L500,385Z",
  MT: "M245,105 L360,105 L365,170 L340,175 L280,175 L250,170 L240,155Z",
  NE: "M370,270 L500,265 L500,315 L390,320 L370,310Z",
  NV: "M175,250 L210,240 L215,280 L215,370 L195,380 L175,360Z",
  NH: "M865,120 L875,110 L880,130 L878,170 L870,175 L862,155Z",
  NJ: "M830,230 L845,220 L850,240 L845,270 L835,280 L825,270Z",
  NM: "M275,395 L360,395 L360,490 L275,490Z",
  NY: "M780,150 L830,135 L855,155 L860,180 L850,200 L835,215 L820,225 L800,230 L780,220 L770,200Z",
  NC: "M680,355 L770,340 L790,350 L790,370 L770,380 L720,390 L680,395Z",
  ND: "M380,115 L475,115 L475,175 L380,175Z",
  OH: "M650,260 L690,250 L700,270 L700,330 L680,340 L650,340 L645,305Z",
  OK: "M380,385 L500,385 L505,405 L505,430 L455,445 L390,445 L380,430Z",
  OR: "M120,150 L195,140 L210,165 L200,200 L175,220 L145,230 L120,215Z",
  PA: "M730,230 L800,220 L815,230 L820,265 L770,280 L730,275Z",
  RI: "M875,200 L885,195 L888,208 L880,215 L875,210Z",
  SC: "M680,395 L720,385 L740,395 L740,420 L720,430 L695,430 L680,420Z",
  SD: "M380,175 L475,175 L480,230 L475,240 L380,245Z",
  TN: "M600,370 L700,355 L710,370 L700,390 L680,395 L600,410Z",
  TX: "M360,420 L390,395 L390,445 L455,445 L505,430 L530,450 L540,490 L530,540 L500,565 L460,575 L420,555 L390,530 L370,505 L360,475Z",
  UT: "M230,280 L280,275 L285,295 L285,375 L240,380 L215,370 L215,310Z",
  VT: "M850,120 L862,115 L865,140 L862,165 L850,170 L845,150Z",
  VA: "M700,310 L770,295 L800,300 L805,315 L795,340 L770,345 L700,355 L695,340Z",
  WA: "M130,80 L200,75 L210,100 L210,145 L195,150 L160,155 L130,145Z",
  WV: "M720,295 L740,285 L755,300 L750,330 L735,345 L715,340 L710,320Z",
  WI: "M540,135 L580,130 L595,150 L600,185 L595,220 L585,240 L545,240 L540,215Z",
  WY: "M275,195 L360,190 L365,260 L280,265Z",
  DC: "M793,302 L800,298 L803,305 L797,308Z"
};

const STATE_LABELS = {
  AL:{x:620,y:455}, AK:{x:147,y:510}, AZ:{x:240,y:455}, AR:{x:580,y:442},
  CA:{x:145,y:380}, CO:{x:320,y:325}, CT:{x:867,y:200}, DE:{x:833,y:295},
  FL:{x:672,y:520}, GA:{x:660,y:440}, HI:{x:278,y:540}, ID:{x:225,y:220},
  IL:{x:597,y:315}, IN:{x:630,y:315}, IA:{x:547,y:265}, KS:{x:445,y:360},
  KY:{x:652,y:355}, LA:{x:582,y:490}, ME:{x:882,y:130}, MD:{x:800,y:290},
  MA:{x:878,y:188}, MI:{x:630,y:200}, MN:{x:512,y:170}, MS:{x:597,y:445},
  MO:{x:545,y:360}, MT:{x:303,y:140}, NE:{x:435,y:290}, NV:{x:195,y:310},
  NH:{x:873,y:145}, NJ:{x:838,y:252}, NM:{x:317,y:442}, NY:{x:810,y:180},
  NC:{x:733,y:368}, ND:{x:427,y:145}, OH:{x:675,y:295}, OK:{x:447,y:415},
  OR:{x:158,y:180}, PA:{x:775,y:250}, RI:{x:882,y:205}, SC:{x:712,y:410},
  SD:{x:427,y:210}, TN:{x:650,y:385}, TX:{x:440,y:490}, UT:{x:250,y:330},
  VT:{x:855,y:142}, VA:{x:748,y:325}, WA:{x:170,y:112}, WV:{x:733,y:315},
  WI:{x:567,y:185}, WY:{x:318,y:228}, DC:{x:812,y:310}
};

export default function USMap({ states, onStateClick, selectedState }) {
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const licensedAbbrs = new Set(states.map((s) => s.abbr));
  const stateNameMap = {};
  states.forEach((s) => { stateNameMap[s.abbr] = s.name; });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.closest('svg')?.getBoundingClientRect();
    if (rect) {
      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top - 10 });
    }
  }, []);

  const allStates = Object.keys(STATE_PATHS);
  /* Full US state names for non-licensed states tooltip */
  const allStateNames = {
    AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',
    CT:'Connecticut',DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',
    IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',
    ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',MS:'Mississippi',
    MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',NJ:'New Jersey',
    NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',
    OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',
    TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',
    WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',DC:'Washington DC'
  };

  return (
    <div className="tdmd-us-map">
      <div className="tdmd-us-map-legend">
        <span className="tdmd-us-map-legend-item tdmd-us-map-legend-licensed">Licensed</span>
        <span className="tdmd-us-map-legend-item tdmd-us-map-legend-not">Not licensed</span>
      </div>

      <div style={{ position: 'relative' }}>
        <svg
          viewBox="0 0 960 600"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="US state map showing TeleDirectMD licensed states"
          style={{ width: '100%', height: 'auto' }}
        >
          {allStates.map((abbr) => {
            const isLicensed = licensedAbbrs.has(abbr);
            const isHovered = hoveredState === abbr;
            const isSelected = selectedState === abbr;

            let fill = '#e0e7ea';
            if (isLicensed) {
              fill = isSelected ? '#004d54' : isHovered ? '#005a62' : 'rgba(0,107,115,0.85)';
            }

            return (
              <path
                key={abbr}
                d={STATE_PATHS[abbr]}
                data-abbr={abbr}
                fill={fill}
                stroke="#ffffff"
                strokeWidth="1.5"
                style={{ cursor: isLicensed ? 'pointer' : 'default', transition: 'fill 0.15s' }}
                onMouseEnter={() => setHoveredState(abbr)}
                onMouseLeave={() => setHoveredState(null)}
                onMouseMove={handleMouseMove}
                onClick={() => {
                  if (isLicensed && onStateClick) onStateClick(abbr);
                }}
                role={isLicensed ? 'button' : undefined}
                tabIndex={isLicensed ? 0 : undefined}
                aria-label={`${allStateNames[abbr]}${isLicensed ? ' — licensed' : ' — not licensed'}`}
                onKeyDown={(e) => {
                  if (isLicensed && (e.key === 'Enter' || e.key === ' ') && onStateClick) {
                    e.preventDefault();
                    onStateClick(abbr);
                  }
                }}
              />
            );
          })}

          {/* State abbreviation labels */}
          {allStates.map((abbr) => {
            const pos = STATE_LABELS[abbr];
            if (!pos) return null;
            const isLicensed = licensedAbbrs.has(abbr);
            /* Skip labels for very small states to avoid clutter */
            if (['DC', 'RI', 'DE', 'CT'].includes(abbr)) return null;
            return (
              <text
                key={`lbl-${abbr}`}
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill={isLicensed ? '#ffffff' : '#8a9aa0'}
                fontSize="11"
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
                style={{ pointerEvents: 'none' }}
              >
                {abbr}
              </text>
            );
          })}
        </svg>

        {hoveredState && (
          <div
            className="tdmd-us-map-tooltip"
            style={{ left: tooltipPos.x, top: tooltipPos.y }}
          >
            {allStateNames[hoveredState] || hoveredState}
            {licensedAbbrs.has(hoveredState) ? '' : ' (not licensed)'}
          </div>
        )}
      </div>
    </div>
  );
}
