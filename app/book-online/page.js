import { getStates } from '../../lib/get-data';
import { insuranceByState } from '../../lib/insurance-data';
import { GATE_MARKUP, GATE_SCRIPT } from './gateSource';
import BookingGateClient from './BookingGateClient';

// Display-name overrides for the booking picker only, so patients recognize
// their card. Coverage data itself comes from lib/insurance-data.js.
const BOOKING_LABELS = {
  'Allina Health | Aetna': 'Aetna (Allina Health | Aetna)',
};

function buildStateInsurance() {
  const out = {};
  for (const [abbr, rows] of Object.entries(insuranceByState)) {
    const active = rows.filter((r) => (r.status || 'active') === 'active');
    if (!active.length) continue;
    out[abbr] = active.map((r) => ({
      name: BOOKING_LABELS[r.displayName] || r.displayName,
      plans: String(r.plans || '').replace(/\s*\u2014\s*/g, ' - '),
    }));
  }
  return out;
}

const LICENSED = getStates().map((s) => s.abbr.toUpperCase()).sort().join(',');
const MARKUP = GATE_MARKUP.replace('__LICENSED__', LICENSED);
const SCRIPT = GATE_SCRIPT.replace('__STATE_INSURANCE__', JSON.stringify(buildStateInsurance()));

// Dark mode: the site toggles html[data-theme="dark"], and falls back to the
// OS setting when no choice is stored. Mirror both, like the other pages.
const DARK_RULES = [
  ['.tdmd-book-wrap', 'background:#0b171b'],
  ['#tdmdStateGate', '--sg-teal:#2bc4cf;--sg-navy:#a0d8e8;--sg-ink:#e2edf0;--sg-ink2:rgba(226,237,240,.80);--sg-ink3:#8fa8b2;--sg-line:rgba(255,255,255,.09);--sg-line-strong:rgba(255,255,255,.20);--sg-tint:#172a33;--sg-map-ins:#2a9aa2;--sg-map-ins-hover:#35b3bb;--sg-map-self:#2b4952;--sg-map-self-hover:#385d67;background:#122028;box-shadow:0 1px 2px rgba(0,0,0,.4),0 24px 56px -20px rgba(0,0,0,.6);color-scheme:dark'],
  ['#tdmdStateGate .sg-num', 'background:#122028'],
  ['#tdmdStateGate .sg-select', 'background:#0f1f24;color:var(--sg-ink)'],
  ['#tdmdStateGate .sg-select option', 'background:#0f1f24;color:#e2edf0'],
  ['#tdmdStateGate .sg-pay', 'background:#0f1f24'],
  ['#tdmdStateGate .sg-pay:has(input:checked)', 'background:rgba(43,196,207,.08);box-shadow:0 0 0 3px rgba(43,196,207,.18)'],
  ['#tdmdStateGate .sg-pay.is-disabled', 'background:var(--sg-tint)'],
  ['#tdmdStateGate .sg-radio', 'background:#0f1f24;border-color:rgba(255,255,255,.35)'],
  ['#tdmdStateGate .sg-pay:has(input:checked) .sg-radio', 'border-color:var(--sg-teal)'],
  ['#tdmdStateGate .sg-check input', 'background-color:#0f1f24;border-color:rgba(255,255,255,.40)'],
  ['#tdmdStateGate .sg-check input:checked', 'background-color:var(--sg-teal);border-color:var(--sg-teal)'],
  ['#tdmdStateGate .sg-payer input', 'background:#0f1f24;border-color:rgba(255,255,255,.40)'],
  ['#tdmdStateGate .sg-payer input:checked', 'border-color:var(--sg-teal)'],
  ['#tdmdStateGate .sg-payer:has(input:checked)', 'background:rgba(43,196,207,.08)'],
  ['#tdmdStateGate .sg-state', 'stroke:#122028'],
  ['#tdmdStateGate #tdmdHatch rect', 'fill:#1a2c33'],
  ['#tdmdStateGate #tdmdHatch line', 'stroke:#2f444c'],
  ['#tdmdStateGate .sg-swatch--no', 'background:repeating-linear-gradient(45deg,#1a2c33 0 2px,#2f444c 2px 3.5px)'],
  ['#tdmdStateGate .sg-tip', 'background:#1e3340'],
  ['#tdmdStateGate .sg-icon--no', 'color:#ff8a6e'],
  ['#tdmdStateGate .sg-cta:disabled', 'background:#1e3340;color:var(--sg-ink3)'],
];
const DARK_BODY = DARK_RULES.map(([sel, decl]) => `ROOT ${sel}{${decl}}`).join('\n');
const DARK_CSS =
  DARK_BODY.replace(/ROOT /g, ':root[data-theme="dark"] ') +
  '\n@media (prefers-color-scheme:dark){' +
  DARK_BODY.replace(/ROOT /g, ':root:not([data-theme="light"]) ') +
  '}';

const PAGE_CSS = `.tdmd-book-wrap{background:#EEF4F5;padding:clamp(16px,4vw,48px) clamp(10px,2vw,16px)}
.tdmd-mobile-sticky-bar{display:none !important}
@media (max-width:900px){#tdmdStateGate .sg-grid{grid-template-columns:minmax(0,1fr)}}
@media (max-width:480px){#tdmdStateGate .sg-cta{font-size:15px}}`;

export const metadata = {
  title: '$79 video visits with a board-certified MD | Weekends, evening hours available | No insurance needed | TeleDirectMD',
  description:
    'Skip the waiting room and book your TeleDirectMD video visit in minutes. Connect directly with a board-certified physician for urgent care or medication refills. Flat $79 fee or use your insurance, prescriptions sent to your pharmacy.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://teledirectmd.com/book-online' },
};

export default function BookOnlinePage() {
  return (
    <div className="tdmd-book-wrap">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
      />
      {/* The site-wide mobile "Book Now" bar points to this page; hide it here.
          Keep the long insurance CTA on one line on small phones. */}
      <style dangerouslySetInnerHTML={{ __html: DARK_CSS }} />
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: MARKUP }} />
      <BookingGateClient script={SCRIPT} />
    </div>
  );
}
