export const metadata = {
  title: 'Telehealth Informed Consent | TeleDirectMD',
  description: 'TeleDirectMD Telehealth Informed Consent — understand how telehealth visits work, including risks, benefits, alternatives, and your rights.',
  alternates: { canonical: 'https://teledirectmd.com/telehealth-consent' },
};

export default function TelehealthConsent() {
  const s = { h2: { fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 } };
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Telehealth Informed Consent</h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>Effective date: March 25, 2026</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <h2 style={s.h2}>What Is Telehealth?</h2>
        <p>Telehealth involves the delivery of health care services using interactive audio and video telecommunications technology. Instead of an in-person office visit, your physician evaluates, diagnoses, and treats you through a live, secure video connection. TeleDirectMD uses HIPAA-compliant video platforms with encryption to protect your privacy during the visit.</p>

        <h2 style={s.h2}>Benefits of Telehealth</h2>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Access to physician care without traveling to a clinic or waiting room</li>
          <li>Reduced exposure to contagious illnesses in clinical settings</li>
          <li>Ability to receive care from your home, office, or other private location</li>
          <li>Faster access to medical consultation, often the same day</li>
          <li>Electronic prescriptions sent directly to your chosen pharmacy</li>
        </ul>

        <h2 style={s.h2}>Risks and Limitations</h2>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Your physician cannot perform a physical examination; the assessment is limited to what can be observed and communicated by video and audio</li>
          <li>Technical failures (internet disruption, audio or video quality issues) may interrupt or prevent completion of your visit</li>
          <li>In rare cases, information transmitted may be insufficient for appropriate medical decision-making, and your physician may determine that an in-person visit or referral is necessary</li>
          <li>Telehealth may not be appropriate for all conditions; emergencies and life-threatening situations require in-person emergency care (call 911)</li>
          <li>Despite reasonable security measures, electronic communication carries some risk of data breach</li>
        </ul>

        <h2 style={s.h2}>Alternatives to Telehealth</h2>
        <p>You have the right to decline a telehealth visit at any time and seek care through an in-person office visit, urgent care center, or emergency department. Your physician will advise you if your condition requires in-person evaluation.</p>

        <h2 style={s.h2}>Prescribing</h2>
        <p>Based on the clinical evaluation during your telehealth visit, your physician may prescribe medications if medically appropriate. TeleDirectMD does not guarantee that any prescription will be issued. Controlled substances are prescribed only when clinically indicated and in compliance with federal DEA regulations and applicable state laws, including PDMP requirements.</p>

        <h2 style={s.h2}>Privacy and Confidentiality</h2>
        <p>Your telehealth visit is subject to the same privacy protections as an in-person visit under HIPAA and applicable state laws. Your medical information will be documented in your electronic health record and protected in accordance with our <a href="/notice-of-privacy-practices" style={{ color: '#1a7f7f' }}>Notice of Privacy Practices</a>. We recommend you participate in your visit from a private location where others cannot overhear your conversation.</p>

        <h2 style={s.h2}>Your Rights</h2>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>You may withdraw your consent and end the telehealth visit at any time</li>
          <li>You may request a referral to an in-person provider at any time</li>
          <li>You may request a copy of your medical records from the visit</li>
          <li>You may ask questions about the telehealth process before or during your visit</li>
        </ul>

        <h2 style={s.h2}>Consent</h2>
        <p>By checking the Telehealth Informed Consent acknowledgment box on the intake form, you confirm that you have read this document, understand the risks and benefits of telehealth, and voluntarily consent to receive telehealth services from TeleDirectMD.</p>

        <h2 style={s.h2}>Contact</h2>
        <p>If you have questions about this consent, contact us at:</p>
        <p style={{ marginTop: 8 }}>
          TeleDirectMD<br />
          Phone: <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a><br />
          Email: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>
      </section>
    </div>
  );
}
