export const metadata = {
  title: 'Medical Records Notice | TeleDirectMD',
  description: 'TeleDirectMD Medical Records Notice — your rights to access, request copies of, and manage your medical records.',
  alternates: { canonical: 'https://teledirectmd.com/medical-records-notice' },
};

export default function MedicalRecordsNotice() {
  const s = { h2: { fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 } };
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Medical Records Notice</h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>Effective date: March 25, 2026</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <h2 style={s.h2}>Your Medical Record</h2>
        <p>TeleDirectMD maintains an electronic health record (EHR) for each patient visit. Your medical record may include visit notes, prescriptions, lab orders and results, diagnoses, treatment plans, and any communications related to your care. All records are stored in HIPAA-compliant systems with encryption, access controls, and audit logging.</p>

        <h2 style={s.h2}>Your Right to Access Your Records</h2>
        <p>Under HIPAA, you have the right to inspect and obtain a copy of your medical records. You may request your records in electronic format. We will respond to your request within 30 days (or up to 60 days with written notice of delay).</p>

        <h2 style={s.h2}>How to Request Your Records</h2>
        <p>To request a copy of your medical records:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li><strong>Patient Portal:</strong> Log in to the <a href="https://app.elationpassport.com/passport/login/" target="_blank" rel="noopener noreferrer" style={{ color: '#1a7f7f' }}>TeleDirectMD Patient Portal</a> to view visit summaries and download available records.</li>
          <li><strong>Email request:</strong> Send a written request to <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a> specifying the records you need and the format you prefer.</li>
          <li><strong>Phone request:</strong> Call <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a> to initiate a records request.</li>
        </ul>

        <h2 style={s.h2}>Fees</h2>
        <p>We may charge a reasonable, cost-based fee for providing copies of your medical records, as permitted by applicable state and federal law. Electronic copies transmitted via secure means may be provided at reduced cost or no charge.</p>

        <h2 style={s.h2}>Transferring Your Records</h2>
        <p>You may authorize us to send your medical records to another health care provider, insurance company, or other third party. We require a signed authorization form before releasing your records to any third party, except where disclosure is required or permitted by law (see our <a href="/notice-of-privacy-practices" style={{ color: '#1a7f7f' }}>Notice of Privacy Practices</a> for details).</p>

        <h2 style={s.h2}>Record Retention</h2>
        <p>TeleDirectMD retains medical records in accordance with applicable state and federal retention requirements. In general, adult medical records are retained for a minimum of seven (7) years from the date of the last visit, or longer if required by the laws of your state.</p>

        <h2 style={s.h2}>Right to Amend</h2>
        <p>You have the right to request that we amend information in your medical record that you believe is inaccurate or incomplete. We may deny the request in certain circumstances as permitted by HIPAA, and we will provide you with a written explanation if we do so.</p>

        <h2 style={s.h2}>Contact</h2>
        <p>For questions about your medical records, contact us at:</p>
        <p style={{ marginTop: 8 }}>
          TeleDirectMD<br />
          Phone: <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a><br />
          Email: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>
      </section>
    </div>
  );
}
