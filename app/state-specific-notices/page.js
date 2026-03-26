export const metadata = {
  title: 'State-Specific Telehealth Notices | TeleDirectMD',
  description: 'State-specific telehealth notices and requirements for TeleDirectMD patients. Additional disclosures required by individual state laws.',
  alternates: { canonical: 'https://teledirectmd.com/state-specific-notices' },
};

export default function StateSpecificNotices() {
  const s = { h2: { fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 }, h3: { fontSize: '1.1rem', fontWeight: 600, marginTop: 20, marginBottom: 8 } };
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>State-Specific Telehealth Notices</h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>Effective date: March 25, 2026</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <p>TeleDirectMD is licensed to provide telehealth services in over 40 U.S. states. Certain states require additional disclosures or notices beyond the general Telehealth Informed Consent. This page provides those state-specific notices. If your state is not listed below, the general <a href="/telehealth-consent" style={{ color: '#1a7f7f' }}>Telehealth Informed Consent</a> applies to your visit.</p>

        <h2 style={s.h2}>General Notice (All States)</h2>
        <p>In all states where TeleDirectMD operates, the following apply:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>You have the right to withdraw consent and discontinue a telehealth visit at any time.</li>
          <li>Your telehealth visit is subject to the same standard of care as an in-person visit.</li>
          <li>Your physician may determine that your condition is not appropriate for telehealth and refer you for in-person evaluation.</li>
          <li>All visits are conducted through HIPAA-compliant, encrypted video platforms.</li>
          <li>In a medical emergency, call 911 or go to the nearest emergency department.</li>
        </ul>

        <h2 style={s.h2}>California</h2>
        <p>Pursuant to California Business and Professions Code Section 2290.5, you have the right to receive a copy of all medical records related to your telehealth visit. You are informed that telehealth is used as a mode of delivering health care services and is not a separate form of practice. The provider at the distant site is responsible for the quality of services provided.</p>

        <h2 style={s.h2}>Connecticut</h2>
        <p>Connecticut General Statutes Section 19a-906 requires that telehealth providers inform patients that the provider is licensed in the state, that you may file a complaint with the Connecticut Department of Public Health, and that you may be referred for in-person services when clinically appropriate.</p>

        <h2 style={s.h2}>Florida</h2>
        <p>Under Florida Statute Section 456.47, telehealth providers must maintain a medical record that meets the same standards as an in-person medical record. All prescriptions issued via telehealth comply with Florida prescribing rules for telehealth-based encounters.</p>

        <h2 style={s.h2}>Georgia</h2>
        <p>Georgia Code Section 33-24-56.4 requires telehealth providers to ensure the same standard of care as in-person encounters. TeleDirectMD complies with all Georgia Medical Board telemedicine regulations including documentation requirements.</p>

        <h2 style={s.h2}>Texas</h2>
        <p>Under the Texas Occupations Code and Texas Medical Board rules for telemedicine, patients are informed that you may request an in-person visit at any time. Complaints about a physician may be directed to the Texas Medical Board at (800) 201-9353 or <a href="https://www.tmb.state.tx.us" target="_blank" rel="noopener noreferrer" style={{ color: '#1a7f7f' }}>www.tmb.state.tx.us</a>.</p>

        <h2 style={s.h2}>Other States</h2>
        <p>TeleDirectMD monitors and complies with telehealth-specific regulations in every state where we are licensed. If your state has enacted specific telehealth disclosure requirements not listed above, those requirements are incorporated by reference into your consent. If you have questions about your state's telehealth laws, contact us.</p>

        <h2 style={s.h2}>Contact</h2>
        <p>If you have questions about state-specific notices, contact us at:</p>
        <p style={{ marginTop: 8 }}>
          TeleDirectMD<br />
          Phone: <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a><br />
          Email: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>
      </section>
    </div>
  );
}
