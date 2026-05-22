export const metadata = {
  title: 'Privacy Policy | TeleDirectMD',
  description: 'Learn how TeleDirectMD protects your health data with HIPAA-compliant policies, secure telemedicine services, and strict privacy measures across 41 states.',
  alternates: { canonical: 'https://teledirectmd.com/privacy-policy' },
};

export default function PrivacyPolicy() {
  const s = {
    h2: { fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 },
    h3: { fontSize: '1.1rem', fontWeight: 600, marginTop: 20, marginBottom: 8 },
  };
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Privacy Policy and Notice of Privacy Practices</h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>Effective date: January 4, 2026 &middot; Last reviewed: May 23, 2026</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <p>TeleDirectMD is committed to protecting your privacy and safeguarding your personal and health information. This document serves as both TeleDirectMD&apos;s Privacy Policy and its Notice of Privacy Practices as required by the Health Insurance Portability and Accountability Act (HIPAA).</p>

        <p style={{ background: '#F0F6F7', borderLeft: '4px solid #1a7f7f', padding: '14px 18px', margin: '20px 0', fontSize: '0.98rem' }}>
          <strong>Summary:</strong> This notice explains how medical and personal information about you may be used and disclosed, how you can access this information, and your rights regarding your health information.
        </p>

        <h2 style={s.h2}>1. Our Responsibilities</h2>
        <p>TeleDirectMD is required by law to maintain the privacy and security of your protected health information, to provide you with this Notice of Privacy Practices, and to follow the duties and privacy practices described in this notice.</p>

        <h2 style={s.h2}>2. Information We Collect</h2>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Personal information such as your name, contact information, date of birth, and payment information</li>
          <li>Health information you provide during video visits or related communications</li>
          <li>Technical and device information such as IP address, browser type, and device information for security and operational purposes</li>
        </ul>

        <h2 style={s.h2}>3. How We May Use and Disclose Your Health Information</h2>
        <h3 style={s.h3}>Treatment</h3>
        <p>We may use and disclose your health information to provide, coordinate, or manage your medical care. This includes documentation, prescriptions when appropriate, and referrals to in-person care when necessary.</p>
        <h3 style={s.h3}>Payment</h3>
        <p>We may use and disclose your information to obtain payment for services provided, including processing payments and addressing billing-related inquiries.</p>
        <h3 style={s.h3}>Health Care Operations</h3>
        <p>We may use and disclose your information for healthcare operations such as quality assessment, compliance activities, business management, and administrative support.</p>
        <h3 style={s.h3}>Other Permitted or Required Uses</h3>
        <p>We may also use or disclose your information as required by law, for public health activities, to avert a serious threat to health or safety, or for law enforcement purposes when permitted by law.</p>

        <h2 style={s.h2}>4. Telemedicine-Specific Privacy Considerations</h2>
        <p>TeleDirectMD provides medical care exclusively through synchronous video visits. We use HIPAA-compliant technologies designed to protect the privacy and security of information exchanged during telemedicine encounters.</p>
        <p>No system can be guaranteed to be completely secure. There are inherent risks associated with transmitting information electronically.</p>

        <h2 style={s.h2}>5. Electronic Health Records and Patient Portal</h2>
        <p>TeleDirectMD maintains medical records using secure electronic systems. Patients may be provided access to portions of their medical record through a secure online patient portal operated by an authorized healthcare technology partner.</p>
        <p>TeleDirectMD may use one or more vendors to support clinical documentation, scheduling, communications, billing, and portal access. These vendors are required by contract to safeguard protected health information and comply with applicable privacy laws.</p>

        <h2 style={s.h2}>6. Your Rights Regarding Your Health Information</h2>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li><strong>Right to Access:</strong> You may request access to your medical records.</li>
          <li><strong>Right to Amend:</strong> You may request corrections to your health information.</li>
          <li><strong>Right to an Accounting of Disclosures:</strong> You may request a list of certain disclosures of your information.</li>
          <li><strong>Right to Request Restrictions:</strong> You may request limits on how your information is used or disclosed.</li>
          <li><strong>Right to Confidential Communications:</strong> You may request communications through alternative means or locations.</li>
          <li><strong>Right to a Copy of This Notice:</strong> You may request a paper or electronic copy of this notice at any time.</li>
        </ul>

        <h2 style={s.h2}>7. Our Duties Regarding Breaches</h2>
        <p>TeleDirectMD will notify you as required by law if a breach occurs that may have compromised the privacy or security of your protected health information.</p>

        <h2 style={s.h2}>8. Website Cookies and Analytics</h2>
        <p>Our website may use cookies or analytics tools to improve functionality and performance. These tools do not access or store medical records.</p>

        <h2 style={s.h2}>9. Data Retention</h2>
        <p>We retain information for as long as necessary to provide services, maintain medical records, comply with legal obligations, and resolve disputes.</p>

        <h2 style={s.h2}>10. Changes to This Notice</h2>
        <p>TeleDirectMD reserves the right to change this Privacy Policy and Notice of Privacy Practices at any time. Changes apply to all information we maintain and will be effective upon posting with an updated effective date. For the full HIPAA notice, see our <a href="/notice-of-privacy-practices" style={{ color: '#1a7f7f' }}>Notice of Privacy Practices</a>.</p>

        <h2 style={s.h2}>11. Contact Information</h2>
        <p>If you have questions about this notice, your privacy rights, or wish to exercise your rights, contact:</p>
        <p style={{ marginTop: 8 }}>
          <strong>TeleDirectMD</strong><br />
          Phone: <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a><br />
          Email: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>

        <h2 style={s.h2}>12. Complaints</h2>
        <p>You may file a complaint if you believe your privacy rights have been violated. You will not be retaliated against for filing a complaint. Complaints may be submitted to TeleDirectMD using the contact information above or to the U.S. Department of Health and Human Services.</p>
      </section>
    </div>
  );
}
