export const metadata = {
  title: 'Visit Confirmed — TeleDirectMD',
  description:
    "Your child's pediatric telehealth intake has been received. Our board-certified physician will review the information before your scheduled video visit with TeleDirectMD.",
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://teledirectmd.com/visit-confirmed' },
  openGraph: {
    title: 'Visit Confirmed — TeleDirectMD',
    description:
      "Intake received. Our board-certified physician will review your child's information before the visit.",
    url: 'https://teledirectmd.com/visit-confirmed',
    siteName: 'TeleDirectMD',
    type: 'website',
    images: [
      {
        url: 'https://teledirectmd.com/visit-confirmed/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visit Confirmed — TeleDirectMD',
    description:
      "Intake received. Our board-certified physician will review your child's information before the visit.",
    images: ['https://teledirectmd.com/visit-confirmed/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'TeleDirectMD',
  legalName: 'Mahavir Health Services LLC',
  url: 'https://teledirectmd.com',
  logo: 'https://teledirectmd.com/logo.png',
  image: 'https://teledirectmd.com/visit-confirmed/og-image.png',
  description:
    'Physician-owned virtual urgent care for children ages 3–17. Licensed in 43 states plus DC. Flat $79 visit fee with no subscription.',
  priceRange: '$79',
  telephone: '+1-678-956-1855',
  email: 'contact@teledirectmd.com',
  medicalSpecialty: ['Pediatrics', 'FamilyPractice', 'PrimaryCare'],
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

export default function VisitConfirmed() {
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
      maxWidth: 560,
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
    h2: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      marginBottom: 20,
      color: NAVY_DARK,
    },
    stepsList: { listStyle: 'none', padding: 0, margin: 0 },
    btn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: NAVY,
      color: '#fff',
      padding: '14px 26px',
      borderRadius: 8,
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: 16,
      border: 'none',
      cursor: 'pointer',
    },
    btnWrap: { textAlign: 'center', marginTop: 22 },
    btnHelper: {
      display: 'block',
      marginTop: 12,
      fontSize: 14,
      color: TEXT_MUTED,
    },
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

  const steps = [
    {
      title: 'Confirmation email sent',
      body:
        'Check your inbox within the next 5 minutes (and your spam folder, just in case).',
    },
    {
      title: 'Our board-certified physician reviews the intake & uploaded photos',
      body:
        'Your responses and any photos you uploaded are reviewed before the visit so we can use the full appointment time on care.',
    },
    {
      title: 'Video visit link arrives by email and SMS',
      body:
        "You'll receive the secure link at your scheduled time. No app download required.",
    },
    {
      title: 'After-visit summary & any e-prescriptions sent',
      body:
        'A summary is emailed to you, and any prescriptions are sent directly to your pharmacy.',
    },
  ];

  const checklist = [
    'A parent or legal guardian must be present on the video call',
    'Test your camera and microphone in advance',
    'Find a quiet, well-lit room with a stable internet connection',
    "Keep your child's current medication list nearby",
    "Join 5 minutes early using the link we'll email you",
  ];

  return (
    <div style={styles.wrap}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        .vc-step {
          position: relative;
          padding-left: 52px;
          padding-bottom: 22px;
          color: ${TEXT};
        }
        .vc-step:last-child { padding-bottom: 0; }
        .vc-step-num {
          position: absolute;
          left: 0;
          top: 0;
          width: 36px;
          height: 36px;
          background: ${NAVY};
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 15px;
        }
        .vc-step-line {
          position: absolute;
          left: 17px;
          top: 36px;
          bottom: 6px;
          width: 2px;
          background: ${BORDER};
        }
        .vc-step strong {
          display: block;
          font-weight: 600;
          margin-bottom: 2px;
          color: ${NAVY_DARK};
        }
        .vc-step span {
          color: ${TEXT_MUTED};
          font-size: 15px;
        }
        .vc-check-item {
          position: relative;
          padding-left: 36px;
          padding-bottom: 14px;
          color: ${TEXT};
          list-style: none;
        }
        .vc-check-item:last-child { padding-bottom: 0; }
        .vc-check-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 4px;
          width: 22px;
          height: 22px;
          background-color: ${TEAL_TINT};
          border-radius: 50%;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23379894' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 14px;
        }
        .vc-btn:hover { background: ${CORAL} !important; }
        .vc-support a:hover { color: ${CORAL} !important; text-decoration: underline; }
      `}</style>

      <section style={styles.hero} aria-labelledby="vc-hero-title">
        <div style={styles.heroBlobCoral} aria-hidden="true" />
        <div style={styles.heroBlobTeal} aria-hidden="true" />
        <div style={styles.checkCircle} aria-hidden="true">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 id="vc-hero-title" style={styles.h1}>
          Intake received — you&apos;re all set.
        </h1>
        <p style={styles.subhead}>
          Our board-certified physician will review your child&apos;s information
          before the visit.
        </p>
      </section>

      <div style={styles.container}>
        {/* What happens next */}
        <section style={styles.section} aria-labelledby="vc-next-title">
          <div style={styles.card}>
            <h2 id="vc-next-title" style={styles.h2}>
              What happens next
            </h2>
            <ol style={styles.stepsList}>
              {steps.map((s, i) => (
                <li key={i} className="vc-step">
                  <span className="vc-step-num">{i + 1}</span>
                  {i < steps.length - 1 && <span className="vc-step-line" />}
                  <strong>{s.title}</strong>
                  <span>{s.body}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Before your visit */}
        <section style={styles.section} aria-labelledby="vc-prep-title">
          <div style={styles.card}>
            <h2 id="vc-prep-title" style={styles.h2}>
              Before your visit
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {checklist.map((item, i) => (
                <li key={i} className="vc-check-item">
                  {item}
                </li>
              ))}
            </ul>
            <div style={styles.btnWrap}>
              <a
                className="vc-btn"
                style={styles.btn}
                href="/tech-check"
              >
                Run the visit tech check
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <span style={styles.btnHelper}>
                Takes about 60 seconds — checks your camera, mic, and connection.
              </span>
            </div>
          </div>
        </section>

        {/* Support */}
        <section style={styles.section} aria-labelledby="vc-support-title">
          <div style={styles.card}>
            <h2 id="vc-support-title" style={styles.h2}>
              Need to reschedule or change something?
            </h2>
            <div style={styles.supportGrid} className="vc-support">
              <div style={styles.supportItem}>
                <div style={styles.supportIcon} aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div style={styles.supportLabel}>Email</div>
                  <a
                    href="mailto:contact@teledirectmd.com"
                    style={styles.supportValue}
                  >
                    contact@teledirectmd.com
                  </a>
                </div>
              </div>
              <div style={styles.supportItem}>
                <div style={styles.supportIcon} aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={styles.supportLabel}>Phone</div>
                  <a href="tel:+16789561855" style={styles.supportValue}>
                    (678) 956-1855
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency banner */}
        <section style={styles.section} aria-labelledby="vc-emergency-title">
          <div style={styles.emergencyBanner} role="alert">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={WARNING}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <div>
              <h3 id="vc-emergency-title" style={styles.emergencyTitle}>
                Not for emergencies
              </h3>
              <p style={styles.emergencyText}>
                If your child develops trouble breathing, severe pain, sudden
                vision loss, or becomes unresponsive, call <strong>911</strong>{' '}
                or go to the nearest emergency department.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
