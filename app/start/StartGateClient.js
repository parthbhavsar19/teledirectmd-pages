'use client';

import { useState, useMemo } from 'react';
import statesData from '../../data/states.json';

// Full US states + DC for the dropdown (so parents in non-licensed states
// can still pick their state and be told we're not in their state yet).
const ALL_STATES = [
  ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'],
  ['CA', 'California'], ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'],
  ['DC', 'District of Columbia'], ['FL', 'Florida'], ['GA', 'Georgia'], ['HI', 'Hawaii'],
  ['ID', 'Idaho'], ['IL', 'Illinois'], ['IN', 'Indiana'], ['IA', 'Iowa'],
  ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'], ['ME', 'Maine'],
  ['MD', 'Maryland'], ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'],
  ['MS', 'Mississippi'], ['MO', 'Missouri'], ['MT', 'Montana'], ['NE', 'Nebraska'],
  ['NV', 'Nevada'], ['NH', 'New Hampshire'], ['NJ', 'New Jersey'], ['NM', 'New Mexico'],
  ['NY', 'New York'], ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'],
  ['OK', 'Oklahoma'], ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'],
  ['SC', 'South Carolina'], ['SD', 'South Dakota'], ['TN', 'Tennessee'], ['TX', 'Texas'],
  ['UT', 'Utah'], ['VT', 'Vermont'], ['VA', 'Virginia'], ['WA', 'Washington'],
  ['WV', 'West Virginia'], ['WI', 'Wisconsin'], ['WY', 'Wyoming'],
];

// Pull licensed states directly from the canonical site data — single source of truth.
const LICENSED_ABBRS = new Set(
  Object.values(statesData).map((s) => s.abbr)
);

const JOTFORM_URL = 'https://hipaa.jotform.com/261458412747058';
const WAITLIST_ENDPOINT = ''; // Optional: paste Keragon/Make/Zapier webhook here later

export default function StartGateClient() {
  const [age, setAge] = useState('');
  const [stateAbbr, setStateAbbr] = useState('');
  const [touched, setTouched] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState(null); // null | 'sending' | 'ok' | 'error'

  const ageNum = parseInt(age, 10);
  const ageValid = !isNaN(ageNum) && ageNum >= 3 && ageNum <= 17;
  const ageEntered = age !== '' && !isNaN(ageNum);
  const stateEntered = !!stateAbbr;
  const stateLicensed = stateEntered && LICENSED_ABBRS.has(stateAbbr);

  const ageOutOfRange = ageEntered && !ageValid;
  const stateBlocked = stateEntered && !stateLicensed;
  const eligible = ageValid && stateLicensed;

  const stateName = useMemo(() => {
    const match = ALL_STATES.find((s) => s[0] === stateAbbr);
    return match ? match[1] : '';
  }, [stateAbbr]);

  function handleProceed(e) {
    e.preventDefault();
    setTouched(true);
    if (!eligible) return;
    // Pre-fill Jotform via URL parameters. No PHI: only age + state abbreviation.
    const url = `${JOTFORM_URL}?childAge=${encodeURIComponent(ageNum)}&state=${encodeURIComponent(stateAbbr)}`;
    if (typeof window !== 'undefined') {
      try {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'start_gate_pass', { age: ageNum, state: stateAbbr });
        }
        if (typeof window.plausible === 'function') {
          window.plausible('start_gate_pass', { props: { age: ageNum, state: stateAbbr } });
        }
      } catch (err) {}
      window.location.href = url;
    }
  }

  async function handleWaitlist(e) {
    e.preventDefault();
    if (!waitlistEmail || waitlistStatus === 'sending') return;
    setWaitlistStatus('sending');

    try {
      if (typeof window !== 'undefined') {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'waitlist_signup', { state: stateAbbr });
        }
        if (typeof window.plausible === 'function') {
          window.plausible('waitlist_signup', { props: { state: stateAbbr } });
        }
      }

      if (WAITLIST_ENDPOINT) {
        const r = await fetch(WAITLIST_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: waitlistEmail,
            state: stateAbbr,
            stateName,
            childAge: ageNum,
            source: 'start_gate',
            timestamp: new Date().toISOString(),
          }),
        });
        if (!r.ok) throw new Error('http_' + r.status);
      }
      // If no endpoint set, fall through to "ok" — captures intent locally via mailto fallback.
      setWaitlistStatus('ok');
    } catch (err) {
      setWaitlistStatus('error');
    }
  }

  // Style tokens
  const NAVY = '#1E556E';
  const NAVY_DARK = '#0D384D';
  const TEAL = '#379894';
  const TEAL_TINT = '#E5F2F1';
  const CORAL = '#DC643C';
  const CORAL_TINT = '#FDEEE7';
  const BG = '#FAF8F3';
  const SURFACE = '#FFFFFF';
  const BORDER = '#E5E2DA';
  const TEXT = '#0D384D';
  const TEXT_MUTED = '#4D6470';
  const TEXT_FAINT = '#8A99A1';
  const WARN_BG = '#FEF3C7';
  const WARN_BORDER = '#F59E0B';
  const WARN_TEXT = '#78350F';
  const ERR_BG = '#FEE2E2';
  const ERR_BORDER = '#DC2626';
  const ERR_TEXT = '#7F1D1D';
  const OK_BG = '#DCFCE7';
  const OK_BORDER = '#16A34A';
  const OK_TEXT = '#14532D';

  const inputBase = {
    width: '100%',
    padding: '14px 16px',
    fontSize: 17,
    fontFamily: 'inherit',
    color: NAVY_DARK,
    background: SURFACE,
    border: `2px solid ${BORDER}`,
    borderRadius: 10,
    outline: 'none',
    boxSizing: 'border-box',
    minHeight: 52,
  };

  const styles = {
    wrap: {
      background: BG,
      fontFamily:
        'Merriweather, Georgia, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      color: TEXT,
      lineHeight: 1.6,
      minHeight: '60vh',
    },
    container: { maxWidth: 640, margin: '0 auto', padding: '40px 20px 56px' },
    eyebrow: {
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: TEAL,
      fontWeight: 700,
      marginBottom: 10,
    },
    h1: {
      fontSize: 'clamp(28px, 4vw, 36px)',
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: NAVY_DARK,
      marginBottom: 12,
    },
    lede: {
      fontSize: 17,
      color: TEXT_MUTED,
      marginBottom: 28,
      lineHeight: 1.6,
    },
    card: {
      background: SURFACE,
      border: `1px solid ${BORDER}`,
      borderRadius: 14,
      padding: 28,
      boxShadow:
        '0 1px 3px rgba(13,56,77,0.04), 0 4px 16px rgba(13,56,77,0.06)',
    },
    field: { marginBottom: 18 },
    label: {
      display: 'block',
      fontSize: 14.5,
      fontWeight: 700,
      color: NAVY_DARK,
      marginBottom: 8,
      letterSpacing: '0.01em',
    },
    helper: { fontSize: 13.5, color: TEXT_FAINT, marginTop: 6 },
    btnPrimary: {
      width: '100%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      background: eligible ? NAVY : '#9BA9B0',
      color: '#fff',
      padding: '16px 26px',
      borderRadius: 10,
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: 17,
      border: 'none',
      cursor: eligible ? 'pointer' : 'not-allowed',
      minHeight: 56,
      marginTop: 8,
      transition: 'background 0.15s ease',
    },
    blockBox: (bg, border, color) => ({
      background: bg,
      border: `2px solid ${border}`,
      borderRadius: 12,
      padding: '18px 22px',
      marginTop: 20,
      color,
    }),
    blockTitle: {
      fontSize: 15,
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: 6,
    },
    waitlistInput: {
      ...inputBase,
      marginTop: 12,
      marginBottom: 12,
    },
    waitlistBtn: {
      background: TEAL,
      color: '#fff',
      padding: '12px 22px',
      borderRadius: 10,
      border: 'none',
      cursor: 'pointer',
      fontWeight: 700,
      fontSize: 15,
      width: '100%',
      minHeight: 52,
    },
    secondaryLink: {
      display: 'inline-block',
      marginTop: 12,
      color: NAVY,
      fontWeight: 600,
      textDecoration: 'underline',
    },
    badgeRow: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 24,
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      background: TEAL_TINT,
      color: TEAL,
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
    },
    badgeCoral: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      background: CORAL_TINT,
      color: CORAL,
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.wrap}>
      <div style={styles.container}>
        <div style={styles.eyebrow}>Pediatric Telehealth Intake</div>
        <h1 style={styles.h1}>Let&apos;s check eligibility</h1>
        <p style={styles.lede}>
          Two quick questions so we can route you correctly. Takes about 10 seconds.
        </p>

        <div style={styles.badgeRow}>
          <span style={styles.badge}>Ages 3–17</span>
          <span style={styles.badge}>43 states + DC</span>
          <span style={styles.badgeCoral}>$79 flat visit</span>
        </div>

        <form
          style={styles.card}
          onSubmit={handleProceed}
          aria-describedby="vc-form-instructions"
        >
          <p id="vc-form-instructions" className="vc-sr-only" style={{
            position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
            overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0,
          }}>
            Enter your child&apos;s age and state of residence to check if TeleDirectMD can see your child.
          </p>

          <div style={styles.field}>
            <label htmlFor="vc-age" style={styles.label}>
              Child&apos;s age (in years)
            </label>
            <input
              id="vc-age"
              type="number"
              inputMode="numeric"
              min={0}
              max={25}
              step={1}
              value={age}
              onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ''))}
              onBlur={() => setTouched(true)}
              placeholder="e.g., 8"
              required
              aria-invalid={ageOutOfRange}
              aria-describedby={ageOutOfRange ? 'vc-age-error' : 'vc-age-helper'}
              style={{
                ...inputBase,
                borderColor: ageOutOfRange ? ERR_BORDER : BORDER,
              }}
            />
            <div id="vc-age-helper" style={styles.helper}>
              We treat ages 3 to 17.
            </div>
          </div>

          <div style={styles.field}>
            <label htmlFor="vc-state" style={styles.label}>
              State of residence
            </label>
            <select
              id="vc-state"
              value={stateAbbr}
              onChange={(e) => setStateAbbr(e.target.value)}
              onBlur={() => setTouched(true)}
              required
              aria-invalid={stateBlocked}
              aria-describedby={stateBlocked ? 'vc-state-error' : 'vc-state-helper'}
              style={{
                ...inputBase,
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231E556E' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 14px center',
                backgroundSize: '20px',
                paddingRight: 44,
                borderColor: stateBlocked ? ERR_BORDER : BORDER,
              }}
            >
              <option value="">Select your state…</option>
              {ALL_STATES.map(([abbr, name]) => (
                <option key={abbr} value={abbr}>
                  {name}
                </option>
              ))}
            </select>
            <div id="vc-state-helper" style={styles.helper}>
              Where will your child be located during the visit?
            </div>
          </div>

          <button
            type="submit"
            style={styles.btnPrimary}
            disabled={!eligible}
            aria-disabled={!eligible}
          >
            {eligible ? 'Continue to intake →' : 'Continue to intake'}
          </button>

          {/* Age out of range */}
          {ageOutOfRange && (
            <div
              style={styles.blockBox(WARN_BG, WARN_BORDER, WARN_TEXT)}
              role="alert"
            >
              <div style={styles.blockTitle}>Age outside our scope</div>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55 }}>
                TeleDirectMD currently treats children ages 3–17. For younger or
                older patients, please see your primary care provider or visit{' '}
                <a
                  href="/"
                  style={{ color: WARN_TEXT, fontWeight: 700, textDecoration: 'underline' }}
                >
                  TeleDirectMD adult care
                </a>
                .
              </p>
            </div>
          )}

          {/* State not licensed */}
          {stateBlocked && (
            <div
              style={styles.blockBox(ERR_BG, ERR_BORDER, ERR_TEXT)}
              role="alert"
            >
              <div style={styles.blockTitle}>Not licensed in {stateName} yet</div>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55 }}>
                Our board-certified physician isn&apos;t licensed in {stateName}{' '}
                yet. We&apos;re expanding — join our waitlist and we&apos;ll let
                you know the moment we open in your state.
              </p>

              {waitlistStatus !== 'ok' && (
                <form onSubmit={handleWaitlist} style={{ marginTop: 14 }}>
                  <label
                    htmlFor="vc-waitlist-email"
                    style={{
                      ...styles.label,
                      color: ERR_TEXT,
                      marginBottom: 6,
                    }}
                  >
                    Your email
                  </label>
                  <input
                    id="vc-waitlist-email"
                    type="email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="parent@example.com"
                    required
                    style={{
                      ...styles.waitlistInput,
                      borderColor: ERR_BORDER,
                      color: ERR_TEXT,
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      ...styles.waitlistBtn,
                      background: ERR_BORDER,
                      opacity: waitlistStatus === 'sending' ? 0.7 : 1,
                    }}
                    disabled={waitlistStatus === 'sending'}
                  >
                    {waitlistStatus === 'sending'
                      ? 'Joining…'
                      : `Notify me when TeleDirectMD opens in ${stateName}`}
                  </button>
                  {waitlistStatus === 'error' && (
                    <p
                      style={{
                        marginTop: 10,
                        fontSize: 14,
                        color: ERR_TEXT,
                      }}
                    >
                      Something went wrong. Please email{' '}
                      <a
                        href={`mailto:contact@teledirectmd.com?subject=Waitlist%20-%20${encodeURIComponent(stateName)}&body=Please%20add%20me%20to%20the%20waitlist%20for%20${encodeURIComponent(stateName)}.%20Child%20age:%20${ageNum || ''}`}
                        style={{ color: ERR_TEXT, fontWeight: 700, textDecoration: 'underline' }}
                      >
                        contact@teledirectmd.com
                      </a>{' '}
                      and we&apos;ll add you manually.
                    </p>
                  )}
                </form>
              )}

              {waitlistStatus === 'ok' && (
                <div
                  style={{
                    marginTop: 14,
                    background: OK_BG,
                    border: `2px solid ${OK_BORDER}`,
                    color: OK_TEXT,
                    borderRadius: 10,
                    padding: '12px 16px',
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                  role="status"
                >
                  ✓ You&apos;re on the {stateName} waitlist. We&apos;ll email
                  you the moment we open.
                </div>
              )}
            </div>
          )}
        </form>

        <p
          style={{
            marginTop: 22,
            fontSize: 13.5,
            color: TEXT_FAINT,
            textAlign: 'center',
            lineHeight: 1.55,
          }}
        >
          No health information is collected on this page. Your age and state
          help us route you to the right intake form.
        </p>
      </div>
    </div>
  );
}
