'use client';
import { useState, useEffect, useRef } from 'react';

/**
 * Dual-path lead form embed.
 * Phase 1: shows a placeholder + tap-to-call until you replace the JotForm IDs.
 * Phase 2: paste in your JotForm form IDs below — one for employer, one for broker.
 *
 * To wire up:
 *   1. Build the two JotForm forms (or one form with conditional logic).
 *   2. Replace EMPLOYER_FORM_URL and BROKER_FORM_URL below with the JotForm "Direct Link" URLs.
 *   3. Deploy. Done.
 */
// Live JotForm forms (created 2026-05-23)
//   Employer Inquiry: https://form.jotform.com/261425492541052
//   Broker Partner Inquiry: https://form.jotform.com/261425799417064
const EMPLOYER_FORM_URL = 'https://form.jotform.com/261425492541052';
const BROKER_FORM_URL = 'https://form.jotform.com/261425799417064';

export default function LeadFormEmbed({ defaultPath = 'employer' }) {
  const [path, setPath] = useState(defaultPath);
  const containerRef = useRef(null);

  const formUrl = path === 'broker' ? BROKER_FORM_URL : EMPLOYER_FORM_URL;

  return (
    <div className="tdmd-emp-form-wrap" id="form">
      <div style={{ textAlign: 'center', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tdmd-teal)', marginBottom: '0.5rem' }}>
        Get started
      </div>
      <h2>{path === 'broker' ? 'Become a TeleDirectMD partner' : 'Book a 15-minute discovery call'}</h2>
      <p>
        {path === 'broker'
          ? "We'll send the broker resources package within one business day."
          : 'Dr. Bhavsar or someone from his team will be in touch within one business day.'}
      </p>

      <div className="tdmd-emp-pathsel" role="tablist" aria-label="I am a">
        <button
          type="button"
          role="tab"
          aria-selected={path === 'employer'}
          className="tdmd-emp-pathbtn"
          onClick={() => setPath('employer')}
        >
          I'm an Employer
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={path === 'broker'}
          className="tdmd-emp-pathbtn"
          onClick={() => setPath('broker')}
        >
          I'm a Benefits Broker
        </button>
      </div>

      <div className="tdmd-emp-jotform-host" ref={containerRef}>
        {formUrl ? (
          <iframe
            key={formUrl}
            src={formUrl}
            title={path === 'broker' ? 'Broker partnership form' : 'Employer discovery call form'}
            allow="geolocation; microphone; camera"
            style={{ width: '100%', minHeight: 620, border: 0 }}
          />
        ) : (
          <div className="tdmd-emp-form-fallback">
            <p style={{ fontWeight: 700, color: 'var(--tdmd-navy)', fontSize: '1rem', marginBottom: '0.75rem' }}>
              Form is being finalized — call us directly to start.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              We're wiring up the dual-path JotForm right now. In the meantime, the fastest way to start the conversation is a 5-minute call.
            </p>
            <a
              href="tel:+16789561855"
              className="tdmd-emp-btn tdmd-emp-btn--primary"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              Call (678) 956-1855
            </a>
            <p style={{ fontSize: '0.85rem', marginTop: '1rem' }}>
              Or email <a href="mailto:contact@teledirectmd.com" style={{ color: 'var(--tdmd-teal)', fontWeight: 700 }}>contact@teledirectmd.com</a>
            </p>
          </div>
        )}
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--tdmd-muted)', marginTop: '1.25rem' }}>
        Or call us directly at <strong style={{ color: 'var(--tdmd-navy)' }}>(678) 956-1855</strong>
      </p>
    </div>
  );
}
