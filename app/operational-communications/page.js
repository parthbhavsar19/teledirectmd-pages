export const metadata = {
  title: 'Operational Communications | TeleDirectMD',
  description: 'How TeleDirectMD contacts you for appointment reminders, care follow-up, billing, and other operational communications.',
  alternates: { canonical: 'https://teledirectmd.com/operational-communications' },
};

export default function OperationalCommunications() {
  const s = { h2: { fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 } };
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Operational Communications</h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>Effective date: March 25, 2026</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <h2 style={s.h2}>Overview</h2>
        <p>TeleDirectMD may contact you by phone, text message (SMS), or email to support the delivery and coordination of your health care. These are operational communications that are necessary for your care and our business operations.</p>

        <h2 style={s.h2}>Types of Operational Communications</h2>
        <p>By consenting, you agree that TeleDirectMD may contact you regarding:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Appointment confirmations and reminders</li>
          <li>Visit follow-up instructions and care coordination</li>
          <li>Prescription status and pharmacy notifications</li>
          <li>Lab order updates and results notifications</li>
          <li>Billing statements, payment receipts, and payment reminders</li>
          <li>Responses to your inquiries or support requests</li>
          <li>Important service announcements (e.g., changes to hours, new state availability, system maintenance)</li>
        </ul>

        <h2 style={s.h2}>Communication Methods</h2>
        <p>We may use the following methods to reach you, based on the contact information you provide during intake:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li><strong>Phone calls</strong> to your primary phone number</li>
          <li><strong>Text messages (SMS)</strong> to your mobile phone number</li>
          <li><strong>Email</strong> to the email address on file</li>
        </ul>
        <p style={{ marginTop: 12 }}>Standard messaging and data rates from your wireless carrier may apply to text messages.</p>

        <h2 style={s.h2}>Frequency</h2>
        <p>The frequency of communications depends on your care needs. You may receive messages before, during, and after a visit. We do not send excessive or unnecessary communications.</p>

        <h2 style={s.h2}>Opting Out</h2>
        <p>You may opt out of non-essential operational communications (such as appointment reminders) at any time by contacting us. However, certain communications required for the safe delivery of your care (such as critical prescription alerts or follow-up instructions) cannot be opted out of while you are an active patient.</p>

        <h2 style={s.h2}>Privacy</h2>
        <p>All communications are handled in accordance with our <a href="/notice-of-privacy-practices" style={{ color: '#1a7f7f' }}>Notice of Privacy Practices</a> and applicable HIPAA regulations. We will not include detailed medical information in text messages or voicemails unless you have specifically authorized us to do so.</p>

        <h2 style={s.h2}>Contact</h2>
        <p>If you have questions or wish to update your communication preferences, contact us at:</p>
        <p style={{ marginTop: 8 }}>
          TeleDirectMD<br />
          Phone: <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a><br />
          Email: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>
      </section>
    </div>
  );
}
