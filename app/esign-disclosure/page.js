export const metadata = {
  title: 'Electronic Signature Disclosure | TeleDirectMD',
  description: 'TeleDirectMD Electronic Signature Disclosure — your rights under the E-SIGN Act and state UETA laws regarding electronic signatures and records.',
  alternates: { canonical: 'https://teledirectmd.com/esign-disclosure' },
};

export default function EsignDisclosure() {
  const s = { h2: { fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 } };
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Electronic Signature Disclosure</h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>Effective date: March 25, 2026</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <h2 style={s.h2}>Overview</h2>
        <p>TeleDirectMD uses electronic signatures and electronic records to facilitate patient intake, consent, and related documentation. This disclosure is provided in accordance with the federal Electronic Signatures in Global and National Commerce Act (E-SIGN Act, 15 U.S.C. § 7001 et seq.) and applicable state Uniform Electronic Transactions Act (UETA) laws.</p>

        <h2 style={s.h2}>Your Consent to Use Electronic Signatures</h2>
        <p>By checking the Electronic Signature Disclosure acknowledgment box on the intake form, you consent to:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Use electronic signatures in place of handwritten signatures for intake forms, consent documents, and other patient-facing agreements</li>
          <li>Receive documents and disclosures in electronic format rather than on paper</li>
          <li>Conduct transactions with TeleDirectMD electronically</li>
        </ul>

        <h2 style={s.h2}>What Constitutes Your Electronic Signature</h2>
        <p>Your electronic signature may include:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Checking an acknowledgment checkbox on the TeleDirectMD intake form</li>
          <li>Typing your name in a signature field</li>
          <li>Clicking a button that indicates agreement (e.g., "I Agree" or "Submit")</li>
        </ul>
        <p style={{ marginTop: 12 }}>Each of these actions carries the same legal weight as a handwritten signature under the E-SIGN Act and applicable state law.</p>

        <h2 style={s.h2}>Documents Covered</h2>
        <p>This consent applies to all documents and disclosures presented during the TeleDirectMD patient intake and visit process, including but not limited to:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Telehealth Informed Consent</li>
          <li>Medication History Disclosure</li>
          <li>Notice of Privacy Practices (NPP) acknowledgment</li>
          <li>State-Specific Notices</li>
          <li>Operational and Marketing Communications consents</li>
          <li>Medical Records Notice</li>
          <li>Any future amendments to these documents</li>
        </ul>

        <h2 style={s.h2}>Your Right to Paper Copies</h2>
        <p>You have the right to receive any document or disclosure on paper. To request a paper copy of any electronically signed document, contact us at the information below. Paper copies will be provided at no charge.</p>

        <h2 style={s.h2}>Your Right to Withdraw Consent</h2>
        <p>You may withdraw your consent to use electronic signatures and electronic records at any time by notifying us in writing. Withdrawal of consent will not affect the legal validity of any electronic signatures provided before withdrawal. Note that withdrawing consent may limit your ability to complete certain processes electronically and may require in-person or paper-based alternatives.</p>

        <h2 style={s.h2}>Hardware and Software Requirements</h2>
        <p>To access and retain electronic documents, you need:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>A computer, tablet, or smartphone with internet access</li>
          <li>A current web browser (Chrome, Safari, Firefox, or Edge)</li>
          <li>An email account to receive electronic correspondence</li>
          <li>Sufficient storage or a printer to retain copies of documents for your records</li>
        </ul>

        <h2 style={s.h2}>Contact</h2>
        <p>If you have questions about electronic signatures or wish to request a paper copy of any document, contact us at:</p>
        <p style={{ marginTop: 8 }}>
          TeleDirectMD<br />
          Phone: <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a><br />
          Email: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>
      </section>
    </div>
  );
}
