'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { HARD_STOPS, FALLBACK, SEVERITY } from './dictionary';

function Icon({ name, size = 32, color = 'currentColor' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  if (name === 'alert') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="13" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    );
  }
  if (name === 'alert-triangle') {
    return (
      <svg {...common}>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    );
  }
  // info
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function HardStopClient() {
  const params = useSearchParams();
  const rawCode = (params?.get('code') || '').trim().toUpperCase();
  const entry = HARD_STOPS[rawCode] || null;
  const displayCode = entry ? rawCode : (rawCode || 'NONE');
  const data = entry || FALLBACK;
  const sev = SEVERITY[data.severity] || SEVERITY.in_person_pcp;
  const isPhoneCta = (data.cta_url || '').startsWith('tel:');

  // Analytics hook — fires once on mount. Hooks into GA4 if gtag exists,
  // Plausible if window.plausible exists. Safe no-op otherwise.
  useEffect(() => {
    try {
      const evt = {
        code: rawCode || 'MISSING',
        valid: !!entry,
        severity: data.severity,
      };
      if (typeof window !== 'undefined') {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'hardstop_view', evt);
        }
        if (typeof window.plausible === 'function') {
          window.plausible('hardstop_view', { props: evt });
        }
      }
    } catch (e) {
      // analytics failure must never break the page
    }
  }, [rawCode, entry, data.severity]);

  const NAVY = '#1E556E';
  const NAVY_DARK = '#0D384D';
  const TEAL = '#379894';
  const CORAL = '#DC643C';
  const BG = '#FAF8F3';
  const SURFACE = '#FFFFFF';
  const BORDER = '#E5E2DA';
  const TEXT = '#0D384D';
  const TEXT_MUTED = '#4D6470';
  const TEXT_FAINT = '#8A99A1';

  const styles = {
    wrap: {
      background: BG,
      fontFamily:
        'Merriweather, Georgia, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      color: TEXT,
      lineHeight: 1.6,
      minHeight: '60vh',
    },
    container: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '32px 20px 48px',
    },
    eyebrow: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: TEXT_FAINT,
      fontWeight: 700,
      marginBottom: 16,
    },
    eyebrowDot: {
      width: 8,
      height: 8,
      background: sev.accent,
      borderRadius: '50%',
      flexShrink: 0,
    },
    severityBanner: {
      background: sev.bg,
      border: `2px solid ${sev.border}`,
      borderRadius: 12,
      padding: '18px 22px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 24,
    },
    severityLabel: {
      color: sev.accent,
      fontWeight: 800,
      fontSize: 14,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    h1: {
      fontSize: 'clamp(24px, 4vw, 32px)',
      lineHeight: 1.25,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: NAVY_DARK,
      marginBottom: 18,
    },
    body: {
      fontSize: 17,
      color: TEXT,
      lineHeight: 1.65,
      marginBottom: 28,
    },
    actionCard: {
      background: SURFACE,
      border: `1px solid ${BORDER}`,
      borderLeft: `5px solid ${sev.accent}`,
      borderRadius: 10,
      padding: '20px 22px',
      marginBottom: 28,
      boxShadow:
        '0 1px 3px rgba(13,56,77,0.04), 0 4px 16px rgba(13,56,77,0.06)',
    },
    actionLabel: {
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: TEXT_FAINT,
      fontWeight: 700,
      marginBottom: 8,
    },
    actionText: {
      fontSize: 16.5,
      color: NAVY_DARK,
      fontWeight: 500,
      lineHeight: 1.6,
      margin: 0,
    },
    ctaRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginBottom: 28,
    },
    btnPrimary: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      background: sev.accent,
      color: '#fff',
      padding: '16px 26px',
      borderRadius: 10,
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: 17,
      border: 'none',
      cursor: 'pointer',
      flex: '1 1 240px',
      minHeight: 56,
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    },
    btnSecondary: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      background: 'transparent',
      color: NAVY,
      padding: '14px 22px',
      borderRadius: 10,
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: 16,
      border: `2px solid ${NAVY}`,
      cursor: 'pointer',
      flex: '0 1 auto',
      minHeight: 56,
    },
    refundCard: {
      background: '#F0F9FF',
      border: '1px solid #BAE6FD',
      borderRadius: 10,
      padding: '16px 20px',
      marginBottom: 24,
      fontSize: 15,
      color: '#0C4A6E',
      lineHeight: 1.55,
    },
    refundTitle: {
      fontWeight: 700,
      marginBottom: 4,
      color: '#075985',
    },
    emergencyFooter: {
      background: '#FEE2E2',
      border: '1px solid #FCA5A5',
      borderRadius: 10,
      padding: '14px 18px',
      marginBottom: 20,
      fontSize: 14.5,
      color: '#7F1D1D',
      textAlign: 'center',
      fontWeight: 600,
    },
    referenceLine: {
      fontSize: 12.5,
      color: TEXT_FAINT,
      letterSpacing: '0.04em',
      textAlign: 'center',
      marginTop: 28,
      paddingTop: 18,
      borderTop: `1px solid ${BORDER}`,
      fontFamily:
        'ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    },
    contactLine: {
      fontSize: 14,
      color: TEXT_MUTED,
      textAlign: 'center',
      marginTop: 8,
    },
    npiLine: {
      fontSize: 12,
      color: TEXT_FAINT,
      textAlign: 'center',
      marginTop: 8,
      lineHeight: 1.5,
    },
  };

  // Determine primary CTA label/icon based on URL type
  const primaryIcon = isPhoneCta ? <PhoneIcon /> : <ExternalIcon />;
  const isExternal = (data.cta_url || '').startsWith('http');

  return (
    <div style={styles.wrap} role="main" aria-live="polite">
      <div style={styles.container}>
        <div style={styles.eyebrow}>
          <span style={styles.eyebrowDot} aria-hidden="true" />
          <span>Important: Please review</span>
        </div>

        <div style={styles.severityBanner} role="alert">
          <Icon name={sev.icon} size={32} color={sev.accent} />
          <span style={styles.severityLabel}>{sev.label}</span>
        </div>

        <h1 style={styles.h1}>{data.title}</h1>

        <p style={styles.body}>{data.message}</p>

        <div style={styles.actionCard}>
          <div style={styles.actionLabel}>What to do now</div>
          <p style={styles.actionText}>{data.recommended_action}</p>
        </div>

        <div style={styles.ctaRow}>
          <a
            href={data.cta_url}
            style={styles.btnPrimary}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            aria-label={data.cta_label}
          >
            {primaryIcon}
            {data.cta_label}
          </a>
          <a href="/" style={styles.btnSecondary} aria-label="Return to TeleDirectMD home">
            Return to TeleDirectMD
          </a>
        </div>

        <div style={styles.refundCard}>
          <div style={styles.refundTitle}>If you were charged</div>
          A full refund will be issued within 3–5 business days. Contact{' '}
          <a
            href="mailto:contact@teledirectmd.com"
            style={{ color: '#075985', fontWeight: 600 }}
          >
            contact@teledirectmd.com
          </a>{' '}
          or call{' '}
          <a
            href="tel:+16789561855"
            style={{ color: '#075985', fontWeight: 600 }}
          >
            (678) 956-1855
          </a>{' '}
          with any questions.
        </div>

        <div style={styles.emergencyFooter} role="note">
          For any medical emergency, call <strong>911</strong> or go to the
          nearest emergency department. For poisoning, call Poison Control at{' '}
          <strong>1-800-222-1222</strong>.
        </div>

        <div style={styles.contactLine}>
          Need help with this page? Email{' '}
          <a
            href="mailto:contact@teledirectmd.com"
            style={{ color: NAVY, fontWeight: 600 }}
          >
            contact@teledirectmd.com
          </a>{' '}
          or call{' '}
          <a href="tel:+16789561855" style={{ color: NAVY, fontWeight: 600 }}>
            (678) 956-1855
          </a>
          .
        </div>

        <div style={styles.npiLine}>
          TeleDirectMD is a service of Mahavir Health Services LLC. Care
          provided by a board-certified family medicine physician · NPI
          1104323203. Licensed in 44 states + DC. Telehealth services are not a
          substitute for emergency care.
        </div>

        <div style={styles.referenceLine}>Reference: {displayCode}</div>
      </div>
    </div>
  );
}
