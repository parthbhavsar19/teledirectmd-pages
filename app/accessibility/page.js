export const metadata = {
  title: 'Accessibility Statement (ADA / WCAG 2.1 AA) | TeleDirectMD',
  description: 'TeleDirectMD is committed to WCAG 2.1 AA accessibility, ADA Title III, Section 504, and Section 1557 compliance. Alternative ways to access our telehealth services.',
  alternates: { canonical: 'https://teledirectmd.com/accessibility' },
};

export default function Accessibility() {
  const s = { h2: { fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 } };
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Accessibility Statement</h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>Last updated: May 23, 2026</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <h2 style={s.h2}>Our Commitment to Accessibility</h2>
        <p>TeleDirectMD is committed to ensuring that our website and telehealth services are accessible to all people, including individuals with disabilities. We believe that every patient &mdash; regardless of ability &mdash; should be able to access the health care information and services they need through our digital platforms.</p>
        <p>We serve patients across multiple U.S. states through telehealth, which makes digital accessibility essential to equitable care. Our commitment to accessibility extends to our website, our booking process, our patient portal, and the telehealth experience itself.</p>

        <h2 style={s.h2}>Standards We Follow</h2>
        <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, published by the World Wide Web Consortium (W3C). These guidelines are the internationally recognized standard for web accessibility and help ensure that digital content is perceivable, operable, understandable, and robust for all users, including those who rely on assistive technologies.</p>
        <p>Our accessibility efforts are guided by the requirements of:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li><strong>Americans with Disabilities Act (ADA)</strong> &mdash; Title III, which applies to healthcare provider websites as places of public accommodation</li>
          <li><strong>Section 504 of the Rehabilitation Act</strong> &mdash; which requires accessible digital services for entities receiving federal financial assistance</li>
          <li><strong>Section 1557 of the Affordable Care Act</strong> &mdash; which prohibits discrimination in health programs and activities, including through inaccessible technology</li>
        </ul>

        <h2 style={s.h2}>Ongoing Efforts</h2>
        <p>Accessibility is an ongoing effort. We regularly take steps to improve the accessibility of our website and services, including:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Providing descriptive alternative text for all meaningful images</li>
          <li>Maintaining color contrast ratios of at least 4.5:1 for normal text and 3:1 for large text</li>
          <li>Structuring pages with proper heading hierarchy for screen reader navigation</li>
          <li>Ensuring all interactive elements &mdash; including booking forms &mdash; are accessible via keyboard navigation</li>
          <li>Labeling all form fields clearly and programmatically</li>
          <li>Providing captions or transcripts for multimedia content</li>
          <li>Testing our site with assistive technologies and conducting periodic accessibility reviews</li>
          <li>Working with our website platform to leverage built-in accessibility features while addressing known limitations</li>
        </ul>

        <h2 style={s.h2}>Known Limitations</h2>
        <p>While we work to ensure the broadest possible accessibility, some areas of our site may not yet fully meet WCAG 2.1 Level AA in all cases. Potential limitations include:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Some third-party embedded content (such as scheduling widgets or patient portal interfaces) may have accessibility gaps outside our direct control</li>
          <li>Older PDF documents may not be fully compatible with screen readers</li>
          <li>Certain custom design elements on our website platform may have limited accessibility support</li>
        </ul>
        <p>We are actively working to address these areas and improve our overall compliance. If you encounter an accessibility barrier on any part of our site, please let us know so we can work to resolve it.</p>

        <h2 style={s.h2}>Alternative Ways to Access Our Services</h2>
        <p>If you have difficulty using our website or booking a visit online, we are happy to assist you by phone or email:</p>
        <p style={{ marginTop: 8 }}>
          Phone: <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a><br />
          Email: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>
        <p>Our team can help you schedule a visit, answer questions about our services, provide information available on our website in an alternative format, and arrange any accommodations you may need for your telehealth visit.</p>

        <h2 style={s.h2}>Feedback and Contact</h2>
        <p>We welcome your feedback on the accessibility of our website and services. If you encounter any accessibility barriers, have suggestions for improvement, or need assistance:</p>
        <p style={{ marginTop: 8 }}>
          <strong>TeleDirectMD Accessibility Feedback</strong><br />
          Phone: <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a><br />
          Email: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>
        <p>We aim to respond to accessibility feedback within 2 business days and to resolve reported barriers as quickly as possible.</p>
      </section>
    </div>
  );
}
