import { employersCSS } from '../../employers-styles';

export const metadata = {
  title: 'Your Brief Is On the Way | TeleDirectMD',
  description: 'Thanks for downloading the TeleDirectMD Employer Brief. The PDF is opening below and a copy has been emailed to you.',
  alternates: { canonical: 'https://teledirectmd.com/employers/brief/thank-you' },
  robots: { index: false, follow: false },
};

export default function BriefThankYouPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: employersCSS }} />

      <div className="tdmd-emp">
        <section className="tdmd-emp-hero" style={{ paddingBottom: '2rem' }}>
          <div className="tdmd-emp-container">
            <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
              <span className="tdmd-emp-eyebrow">Thank you</span>
              <h1>Your brief is downloading.</h1>
              <p className="tdmd-emp-hero-sub">
                The 8-page Employer Brief PDF is opening in a new tab and a copy has been sent to the email you provided. Check your inbox (and your spam folder, just in case).
              </p>
              <div className="tdmd-emp-ctas" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="/downloads/teledirectmd-employer-brief.pdf"
                  className="tdmd-emp-btn tdmd-emp-btn--primary"
                  target="_blank"
                  rel="noopener"
                  download
                >
                  Download the PDF again
                </a>
                <a href="/employers" className="tdmd-emp-btn tdmd-emp-btn--outline">
                  Back to Employers
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="tdmd-emp-section">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">While you&apos;re reading</span>
              <h2>If you decide this looks like a fit, here&apos;s how to talk to us.</h2>
            </div>
            <div className="tdmd-emp-vcards" style={{ maxWidth: 980, margin: '0 auto' }}>
              <div className="tdmd-emp-vcard">
                <h3>SMB owners &amp; HR</h3>
                <p>Book a 15-minute discovery call. Dr. Bhavsar or our team will walk you through state coverage, plan design, and timing.</p>
                <a href="/employers#form" className="tdmd-emp-btn tdmd-emp-btn--primary" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                  Book a discovery call
                </a>
              </div>
              <div className="tdmd-emp-vcard">
                <h3>Benefits brokers</h3>
                <p>Flat $250 per signed employer. Not commission, not volume-tiered. ACH within 30 days of activation.</p>
                <a href="/employers/brokers#form" className="tdmd-emp-btn tdmd-emp-btn--primary" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                  Become a partner
                </a>
              </div>
              <div className="tdmd-emp-vcard">
                <h3>Direct contact</h3>
                <p>
                  Email: <a href="mailto:contact@teledirectmd.com" style={{ color: 'var(--tdmd-teal)', fontWeight: 700 }}>contact@teledirectmd.com</a><br />
                  Phone: <a href="tel:+16789561855" style={{ color: 'var(--tdmd-teal)', fontWeight: 700 }}>(678) 956-1855</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
