export const metadata = {
  title: "You're All Set — TeleDirectMD",
  description:
    'Your payment and intake forms have been received. Join your secure video visit with Dr. Bhavsar, and review a few quick device and safety checks before you connect.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://teledirectmd.com/visit-ready' },
  openGraph: {
    title: "You're All Set — TeleDirectMD",
    description:
      'Payment and intake received. Join your secure video visit and review a few quick checks before connecting.',
    url: 'https://teledirectmd.com/visit-ready',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "You're All Set — TeleDirectMD",
    description:
      'Payment and intake received. Join your secure video visit and review a few quick checks before connecting.',
  },
};

const ZOOM_LINK =
  'https://zoom.us/j/4102175596?pwd=0kewa84Z4b9NXEmcIsxxBYyLwhmWGe.1';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'TeleDirectMD',
  legalName: 'Mahavir Health Services LLC',
  url: 'https://teledirectmd.com',
  logo: 'https://teledirectmd.com/logo.png',
  description:
    'Physician-owned virtual urgent care. Licensed in 44 states plus DC. Flat $79 visit fee with no subscription.',
  priceRange: '$79',
  telephone: '+1-678-956-1855',
  email: 'contact@teledirectmd.com',
  areaServed: 'United States',
  physician: {
    '@type': 'Physician',
    name: 'Parth Bhavsar, MD',
    medicalSpecialty: 'FamilyPractice',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'NPI',
      value: '1104323203',
    },
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-678-956-1855',
    email: 'contact@teledirectmd.com',
    contactType: 'customer support',
  },
};

export default function VisitReady() {
  const NAVY = '#1E556E';
  const NAVY_DARK = '#0D384D';
  const TEAL = '#379894';
  const TEAL_TINT = '#E5F2F1';
  const CORAL = '#DC643C';
  const CORAL_TINT = '#FDEEE7';
  const WARNING = '#B45309';
  const WARNING_BG = '#FEF3C7';
  const WARNING_BORDER = '#F59E0B';
  const TEXT = '#0D384D';
  const TEXT_MUTED = '#4D6470';
  const TEXT_FAINT = '#8A99A1';
  const BG = '#FAF8F3';
  const SURFACE = '#FFFFFF';
  const BORDER = '#E5E2DA';

  const styles = {
    wrap: {
      background: BG,
      fontFamily:
        'Merriweather, Georgia, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      color: TEXT,
      lineHeight: 1.6,
    },
    hero: {
      background: SURFACE,
      padding: '56px 20px 44px',
      textAlign: 'center',
      borderBottom: `1px solid ${BORDER}`,
      position: 'relative',
      overflow: 'hidden',
    },
    heroBlobCoral: {
      position: 'absolute',
      top: -40,
      right: -40,
      width: 180,
      height: 180,
      background: CORAL_TINT,
      borderRadius: '50%',
      opacity: 0.6,
      zIndex: 0,
    },
    heroBlobTeal: {
      position: 'absolute',
      bottom: -60,
      left: -60,
      width: 200,
      height: 200,
      background: TEAL_TINT,
      borderRadius: '50%',
      opacity: 0.5,
      zIndex: 0,
    },
    checkCircle: {
      width: 88,
      height: 88,
      margin: '0 auto 24px',
      background: TEAL,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 24px rgba(55,152,148,0.25)',
      position: 'relative',
      zIndex: 1,
    },
    eyebrow: {
      fontFamily: '"Space Mono", monospace',
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      fontSize: 12,
      fontWeight: 700,
      color: CORAL,
      marginBottom: 14,
      position: 'relative',
      zIndex: 1,
    },
    h1: {
      fontSize: 'clamp(26px, 4vw, 36px)',
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: NAVY_DARK,
      marginBottom: 12,
      position: 'relative',
      zIndex: 1,
    },
    subhead: {
      fontSize: 'clamp(16px, 2vw, 19px)',
      color: TEXT_MUTED,
      maxWidth: 580,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
    },
    container: { maxWidth: 760, margin: '0 auto', padding: '40px 20px 24px' },
    section: { marginBottom: 28 },
    card: {
      background: SURFACE,
      border: `1px solid ${BORDER}`,
      borderRadius: 12,
      padding: 28,
      boxShadow:
        '0 1px 3px rgba(13,56,77,0.04), 0 4px 16px rgba(13,56,77,0.06)',
    },
    joinCard: {
      background: TEAL_TINT,
      border: `1px solid ${TEAL}`,
      borderRadius: 12,
      padding: '32px 28px',
      textAlign: 'center',
      boxShadow:
        '0 1px 3px rgba(13,56,77,0.04), 0 4px 16px rgba(55,152,148,0.10)',
    },
    joinLabel: {
      fontFamily: '"Space Mono", monospace',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 11,
      fontWeight: 700,
      color: TEAL,
      marginBottom: 6,
    },
    joinHint: { fontSize: 15, color: TEXT_MUTED, marginBottom: 18 },
    timePill: {
      display: 'inline-block',
      marginBottom: 20,
      fontSize: 13.5,
      fontWeight: 700,
      color: NAVY,
      background: '#fff',
      border: `1px solid ${TEAL}`,
      padding: '7px 16px',
      borderRadius: 999,
    },
    h2: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      marginBottom: 20,
      color: NAVY_DARK,
    },
    joinBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: NAVY,
      color: '#fff',
      padding: '16px 34px',
      borderRadius: 8,
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: 17,
      border: 'none',
      cursor: 'pointer',
    },
    gcalBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      marginTop: 14,
      background: 'transparent',
      color: NAVY,
      padding: '11px 22px',
      borderRadius: 8,
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: 14.5,
      border: `1.5px solid ${BORDER}`,
      cursor: 'pointer',
    },
    fallback: {
      display: 'block',
      marginTop: 16,
      fontSize: 13,
      color: TEXT_MUTED,
      wordBreak: 'break-all',
    },
    fallbackLink: { color: TEAL, fontWeight: 600 },
    supportGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 16,
    },
    supportItem: {
      padding: 18,
      background: BG,
      borderRadius: 8,
      border: `1px solid ${BORDER}`,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
    },
    supportIcon: {
      flexShrink: 0,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: TEAL_TINT,
      color: TEAL,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    supportLabel: {
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: TEXT_FAINT,
      fontWeight: 700,
      marginBottom: 2,
    },
    supportValue: {
      fontSize: 16,
      fontWeight: 600,
      color: NAVY,
      textDecoration: 'none',
    },
    supportIntro: { fontSize: 15, color: TEXT_MUTED, marginBottom: 18 },
    driveBanner: {
      background: CORAL_TINT,
      border: `2px solid ${CORAL}`,
      borderRadius: 12,
      padding: '20px 24px',
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
    },
    driveTitle: {
      fontSize: 15,
      fontWeight: 800,
      color: CORAL,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: 6,
    },
    driveText: { color: '#7c2d12', fontSize: 15, lineHeight: 1.55, margin: 0 },
    emergencyBanner: {
      background: WARNING_BG,
      border: `2px solid ${WARNING_BORDER}`,
      borderRadius: 12,
      padding: '20px 24px',
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
    },
    emergencyTitle: {
      fontSize: 15,
      fontWeight: 800,
      color: WARNING,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: 6,
    },
    emergencyText: {
      color: '#78350F',
      fontSize: 15,
      lineHeight: 1.55,
      margin: 0,
    },
  };

  const deviceChecks = [
    {
      title: 'Check your microphone & speakers',
      body:
        "Make sure your mic isn't muted and your volume is up. When the visit opens, allow access if your browser or the Zoom app asks for microphone permission.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      ),
    },
    {
      title: 'Test your camera & permissions',
      body:
        'Confirm your camera turns on and that you have allowed camera access. Close other video apps (FaceTime, Teams) so they do not hold the camera, and use Chrome, Safari, or the Zoom app for the smoothest connection.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
    },
    {
      title: 'Find a quiet, private spot with strong signal',
      body:
        'Choose a well-lit, private place where you can speak openly with Dr. Bhavsar. A stable Wi-Fi or cellular connection helps keep your video clear throughout the visit.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      ),
    },
  ];

  const haveReady = [
    'A photo ID, in case we need to verify your identity',
    'Your preferred pharmacy name and location for any prescriptions',
    'A list of your current medications and any allergies',
    'A few notes on your symptoms — when they started and what you have tried',
  ];

  return (
    <div style={styles.wrap}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        .vr-device {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid ${BORDER};
        }
        .vr-device:first-child { padding-top: 0; }
        .vr-device:last-child { padding-bottom: 0; border-bottom: none; }
        .vr-device-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: ${TEAL_TINT};
          color: ${TEAL};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vr-device strong {
          display: block;
          font-weight: 700;
          margin-bottom: 3px;
          color: ${NAVY_DARK};
        }
        .vr-device span {
          color: ${TEXT_MUTED};
          font-size: 15px;
        }
        .vr-check-item {
          position: relative;
          padding-left: 36px;
          padding-bottom: 14px;
          color: ${TEXT};
          list-style: none;
          font-size: 15.5px;
        }
        .vr-check-item:last-child { padding-bottom: 0; }
        .vr-check-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 3px;
          width: 22px;
          height: 22px;
          background-color: ${TEAL_TINT};
          border-radius: 50%;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23379894' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 14px;
        }
        .vr-join-btn:hover { background: ${CORAL} !important; }
        .vr-gcal-btn:hover { border-color: ${TEAL} !important; color: ${TEAL} !important; }
        .vr-support a:hover { color: ${CORAL} !important; text-decoration: underline; }
      `}</style>

      <section style={styles.hero} aria-labelledby="vr-hero-title">
        <div style={styles.heroBlobCoral} aria-hidden="true" />
        <div style={styles.heroBlobTeal} aria-hidden="true" />
        <div style={styles.checkCircle} aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div style={styles.eyebrow}>You&apos;re all set</div>
        <h1 id="vr-hero-title" style={styles.h1}>
          Thank you — your intake is complete.
        </h1>
        <p style={styles.subhead}>
          We&apos;ve received your payment and all of your intake forms. Thank you
          for taking the time to fill everything out — it helps Dr. Bhavsar review
          your case and make the most of your visit. You&apos;re ready to connect.
        </p>
      </section>

      <div style={styles.container}>
        {/* Join your visit */}
        <section style={styles.section} aria-labelledby="vr-join-title">
          <div style={styles.joinCard}>
            <div style={styles.joinLabel}>Your video visit</div>
            <h2 id="vr-join-title" style={{ ...styles.h2, marginBottom: 8 }}>
              At the time of your appointment, click the button below to connect
            </h2>
            <p style={styles.joinHint}>
              There&apos;s nothing more to do right now. When your scheduled
              appointment time arrives, return to this page and click{' '}
              <strong>Join Your Video Visit</strong> to connect with Dr. Bhavsar
              on secure video.
            </p>
            <div>
              <span style={styles.timePill}>
                Click to connect at your scheduled appointment time
              </span>
            </div>
            <div>
              <a
                className="vr-join-btn"
                style={styles.joinBtn}
                href={ZOOM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
                Join Your Video Visit
              </a>
            </div>
            <div>
              <a
                className="vr-gcal-btn"
                style={styles.gcalBtn}
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=TeleDirectMD%20Video%20Visit%20with%20Dr.%20Bhavsar&details=Join%20your%20secure%20video%20visit%3A%20https%3A%2F%2Fzoom.us%2Fj%2F4102175596%3Fpwd%3D0kewa84Z4b9NXEmcIsxxBYyLwhmWGe.1%0A%0APlease%20be%20parked%20and%20stationary%20%E2%80%94%20do%20not%20drive%20during%20your%20visit.%20Check%20your%20camera%2C%20microphone%2C%20and%20find%20a%20quiet%2C%20private%20spot%20before%20joining.&location=https%3A%2F%2Fzoom.us%2Fj%2F4102175596%3Fpwd%3D0kewa84Z4b9NXEmcIsxxBYyLwhmWGe.1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Add reminder to Google Calendar
              </a>
            </div>
            <span style={styles.fallback}>
              Having trouble with the button? Open this link:{' '}
              <a style={styles.fallbackLink} href={ZOOM_LINK}>
                {ZOOM_LINK}
              </a>
            </span>
          </div>
        </section>

        {/* Do not drive */}
        <section style={styles.section} aria-labelledby="vr-drive-title">
          <div style={styles.driveBanner} role="alert">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <div>
              <h3 id="vr-drive-title" style={styles.driveTitle}>
                Please do not drive during your visit
              </h3>
              <p style={styles.driveText}>
                For your safety and the quality of your care, you must be parked
                and stationary — never behind the wheel of a moving vehicle —
                while attending your video appointment.
              </p>
            </div>
          </div>
        </section>

        {/* Before you join */}
        <section style={styles.section} aria-labelledby="vr-device-title">
          <div style={styles.card}>
            <h2 id="vr-device-title" style={styles.h2}>
              Before you join
            </h2>
            <div>
              {deviceChecks.map((d, i) => (
                <div key={i} className="vr-device">
                  <div className="vr-device-icon" aria-hidden="true">
                    {d.icon}
                  </div>
                  <div>
                    <strong>{d.title}</strong>
                    <span>{d.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to have ready */}
        <section style={styles.section} aria-labelledby="vr-ready-title">
          <div style={styles.card}>
            <h2 id="vr-ready-title" style={styles.h2}>
              What to have ready
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {haveReady.map((item, i) => (
                <li key={i} className="vr-check-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Questions / support */}
        <section style={styles.section} aria-labelledby="vr-support-title">
          <div style={styles.card}>
            <h2 id="vr-support-title" style={styles.h2}>
              Questions before your visit? We&apos;re happy to help.
            </h2>
            <p style={styles.supportIntro}>
              If anything is unclear or you run into trouble connecting, please
              don&apos;t hesitate to reach out — we&apos;d rather hear from you
              than have you wait.
            </p>
            <div style={styles.supportGrid} className="vr-support">
              <div style={styles.supportItem}>
                <div style={styles.supportIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={styles.supportLabel}>Call or text</div>
                  <a href="tel:+16789561855" style={styles.supportValue}>
                    (678) 956-1855
                  </a>
                </div>
              </div>
              <div style={styles.supportItem}>
                <div style={styles.supportIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div style={styles.supportLabel}>Email us</div>
                  <a
                    href="mailto:contact@teledirectmd.com"
                    style={styles.supportValue}
                  >
                    contact@teledirectmd.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency banner */}
        <section style={styles.section} aria-labelledby="vr-emergency-title">
          <div style={styles.emergencyBanner} role="alert">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={WARNING} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <div>
              <h3 id="vr-emergency-title" style={styles.emergencyTitle}>
                Not for emergencies
              </h3>
              <p style={styles.emergencyText}>
                TeleDirectMD is not for medical emergencies. If you are
                experiencing chest pain, difficulty breathing, or any
                life-threatening symptoms, call <strong>911</strong> or go to the
                nearest emergency department immediately.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
