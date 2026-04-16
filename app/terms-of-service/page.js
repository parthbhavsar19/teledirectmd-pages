export const metadata = {
  title: 'Terms of Service | TeleDirectMD',
  description: 'TeleDirectMD Terms of Service — coming soon.',
  alternates: { canonical: 'https://teledirectmd.com/terms-of-service' },
  robots: { index: false, follow: false },
};

export default function TermsOfService() {
  return (
    <div style={{
      maxWidth: 800,
      margin: '0 auto',
      padding: '80px 24px',
      textAlign: 'center',
      fontFamily: "'Almarai', system-ui, sans-serif",
      color: 'var(--tdmd-text, #12323a)',
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--tdmd-navy, #003e52)', marginBottom: 16 }}>
        Terms of Service
      </h1>
      <p style={{ fontSize: '1.05rem', color: 'var(--tdmd-muted, #4b5f66)', lineHeight: 1.6 }}>
        This page is currently being updated. Please check back shortly.
      </p>
      <p style={{ fontSize: '0.95rem', color: 'var(--tdmd-muted, #4b5f66)', marginTop: 24 }}>
        For questions, contact us at{' '}
        <a href="mailto:contact@teledirectmd.com" style={{ color: 'var(--tdmd-teal, #006b73)' }}>
          contact@teledirectmd.com
        </a>{' '}
        or call{' '}
        <a href="tel:+16789561855" style={{ color: 'var(--tdmd-teal, #006b73)' }}>
          (678) 956-1855
        </a>.
      </p>
    </div>
  );
}
