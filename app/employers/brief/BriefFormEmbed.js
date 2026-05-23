'use client';

/**
 * Gated download form for the Employer Brief PDF.
 * JotForm ID 261426215442046 — captures name, work email, company, role,
 * industry, employees, TCPA consent. Redirects to /employers/brief/thank-you
 * on submit (form-level setting in JotForm) and emails the submitter the
 * PDF link.
 */
const BRIEF_FORM_URL = 'https://form.jotform.com/261426215442046';

export default function BriefFormEmbed() {
  return (
    <div className="tdmd-emp-form-wrap" id="form">
      <div style={{ textAlign: 'center', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tdmd-teal)', marginBottom: '0.5rem' }}>
        Free Download
      </div>
      <h2>Get the Employer Brief</h2>
      <p>
        Tell us who you are and we&apos;ll email you the 8-page PDF immediately. No sales call required — just the brief.
      </p>

      <div className="tdmd-emp-jotform-host">
        <iframe
          src={BRIEF_FORM_URL}
          title="Download the TeleDirectMD Employer Brief"
          allow="geolocation; microphone; camera"
          style={{ width: '100%', minHeight: 760, border: 0 }}
        />
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--tdmd-muted)', marginTop: '1.25rem' }}>
        Prefer a direct link? After submitting, the brief opens automatically and we email a copy to the address you provide.
      </p>
    </div>
  );
}
