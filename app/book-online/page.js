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

export const metadata = {
  title: '$79 video visits with a board-certified MD | Weekends, evening hours available | No insurance needed | TeleDirectMD',
  description:
    'Skip the waiting room and book your TeleDirectMD video visit in minutes. Connect directly with a board-certified physician for urgent care or medication refills. Flat $79 fee or use your insurance, prescriptions sent to your pharmacy.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://teledirectmd.com/book-online' },
};

export default function BookOnlinePage() {
  return (
    <div style={{ background: '#EEF4F5', padding: 'clamp(16px, 4vw, 48px) clamp(10px, 2vw, 16px)' }}>
      <div dangerouslySetInnerHTML={{ __html: MARKUP }} />
      <BookingGateClient script={SCRIPT} />
    </div>
  );
}
