export const metadata = {
  title: 'Marketing Communications | TeleDirectMD',
  description: 'TeleDirectMD optional marketing communications consent — educational content, health tips, promotions, and how to opt out.',
  alternates: { canonical: 'https://teledirectmd.com/marketing-communications' },
};

export default function MarketingCommunications() {
  const s = { h2: { fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 } };
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Marketing Communications</h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>Effective date: March 25, 2026</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <h2 style={s.h2}>Overview</h2>
        <p>This consent is <strong>optional</strong>. By opting in, you agree that TeleDirectMD may send you marketing and educational communications. You can opt out at any time without affecting your ability to receive medical care from TeleDirectMD.</p>

        <h2 style={s.h2}>What You May Receive</h2>
        <p>If you consent, we may send you:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Health education articles, tips, and seasonal wellness reminders</li>
          <li>Information about new services, conditions we treat, or expanded state availability</li>
          <li>Promotional offers or discounts on TeleDirectMD services</li>
          <li>Patient satisfaction surveys</li>
          <li>Newsletters or updates about TeleDirectMD</li>
        </ul>

        <h2 style={s.h2}>Communication Methods</h2>
        <p>Marketing communications may be sent via:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Email to the address you provided during intake</li>
          <li>Text message (SMS) to your mobile number, if you opted in</li>
        </ul>
        <p style={{ marginTop: 12 }}>Standard messaging and data rates from your wireless carrier may apply.</p>

        <h2 style={s.h2}>Opting Out</h2>
        <p>You may withdraw your consent to marketing communications at any time by:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Clicking the "Unsubscribe" link at the bottom of any marketing email</li>
          <li>Replying STOP to any marketing text message</li>
          <li>Contacting us directly at the information below</li>
        </ul>
        <p style={{ marginTop: 12 }}>Opting out of marketing communications will not affect your ability to receive operational communications (appointment reminders, billing notices, care follow-up) or medical care from TeleDirectMD.</p>

        <h2 style={s.h2}>HIPAA and Marketing</h2>
        <p>Under HIPAA, marketing communications that are not for treatment, payment, or health care operations require your authorization. This consent serves as your HIPAA-compliant authorization for TeleDirectMD to send marketing communications as described above. We will never sell your contact information to third parties for their marketing purposes.</p>

        <h2 style={s.h2}>Contact</h2>
        <p>If you have questions about marketing communications, contact us at:</p>
        <p style={{ marginTop: 8 }}>
          TeleDirectMD<br />
          Phone: <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a><br />
          Email: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>
      </section>
    </div>
  );
}
