export default function SiteFooter() {

  return (
    <>
      <footer className="tdmd-site-footer">
        <div className="tdmd-footer-inner">
          {/* Column 1: Brand */}
          <div className="tdmd-footer-brand">
            <a href="/" className="tdmd-footer-logo">
              <img src="/brand/tdmd-logo-white-400.png" srcSet="/brand/tdmd-logo-white-400.png 400w, /brand/tdmd-logo-white-600.png 600w, /brand/tdmd-logo-white.png 800w" sizes="180px" alt="TeleDirectMD" width="180" height="77" decoding="async" />
            </a>
            <p className="tdmd-footer-desc">
              Board-certified family medicine physician. $79 flat-fee virtual visits across 40+ states + D.C. Insurance accepted in select states. Employer plans available.
            </p>
            <a href="/book-online/" className="tdmd-footer-cta">Book a Visit →</a>
          </div>

          {/* Column 2: Patients */}
          <div className="tdmd-footer-col">
            <h4 className="tdmd-footer-heading">PATIENTS</h4>
            <a href="/what-we-treat/">What We Treat</a>
            <a href="/insurance/">Insurance & Pricing</a>
            <a href="/states-we-serve/">States We Serve</a>
            <a href="/faq/">FAQs</a>
            <a href="/health-guides/">Health Guides</a>
            <a href="/reviews/">Reviews</a>
            <a href="https://app.elationpassport.com/passport/login/" target="_blank" rel="noopener noreferrer">Patient Portal</a>
          </div>

          {/* Column 3: Work with us. Industry pages are linked from /employers/. */}
          <div className="tdmd-footer-col">
            <h4 className="tdmd-footer-heading">WORK WITH US</h4>
            <a href="/employers/">For Employers</a>
            <a href="/employers/brokers/">For Brokers</a>
            <a href="/partners/">For Partners</a>
            <a href="/careers/">Careers</a>
          </div>

          {/* Column 4: Legal. Every link opens a PDF in /public/legal/. Financial
              Responsibility, Controlled Substance Policy and the Texas Medical Board
              notice are linked from /patient-policies/. */}
          <div className="tdmd-footer-col">
            <h4 className="tdmd-footer-heading">LEGAL</h4>
            <a href="/legal/terms-of-service.pdf">Terms of Service</a>
            <a href="/legal/privacy-policy.pdf">Privacy Policy</a>
            <a href="/legal/notice-of-privacy-practices.pdf">HIPAA Notice</a>
            <a href="/legal/consumer-health-data-privacy.pdf">Consumer Health Data</a>
            <a href="/legal/telehealth-informed-consent.pdf">Telehealth Consent</a>
            <a href="/legal/state-consent-disclosures.pdf">State Disclosures</a>
            <a href="/legal/good-faith-estimate.pdf">Good Faith Estimate</a>
            <a href="/patient-policies/">Patient Policies</a>
            <a href="/legal/nondiscrimination-notice.pdf">Nondiscrimination Notice</a>
            <a href="/legal/accessibility.pdf">Accessibility</a>
          </div>
        </div>

        {/* LegitScript seal + social */}
        <div className="tdmd-footer-bottom-bar">
          <div className="tdmd-footer-badges">
            {/* Official LegitScript seal. Served from LegitScript at its native
                73x79; per their guidance it must not be scaled in CSS. */}
            <a
              href="https://www.legitscript.com/websites/?checker_keywords=teledirectmd.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Verify LegitScript Approval for www.teledirectmd.com"
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <img
                src="https://static.legitscript.com/seals/44406824.png"
                alt="Verify Approval for www.teledirectmd.com"
                width="73"
                height="79"
                style={{ display: 'block' }}
              />
            </a>
          </div>

          <div className="tdmd-footer-social">
            <a href="https://instagram.com/teledirectmd" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
            </a>
            <a href="https://facebook.com/teledirectmd" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </a>
            <a href="https://youtube.com/@teledirectmd" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.54 7.2a2.5 2.5 0 0 0-1.75-1.75C18.1 5 12 5 12 5s-6.1 0-7.79.45A2.5 2.5 0 0 0 2.46 7.2C2 8.9 2 12 2 12s0 3.1.46 4.8a2.5 2.5 0 0 0 1.75 1.75C5.9 19 12 19 12 19s6.1 0 7.79-.45a2.5 2.5 0 0 0 1.75-1.75C22 15.1 22 12 22 12s0-3.1-.46-4.8zM10 15V9l5.2 3-5.2 3z"/></svg>
            </a>
            <a href="https://linkedin.com/company/teledirectmd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
          </div>
        </div>

        <div className="tdmd-footer-copyright">
          <span><strong>Not for emergencies.</strong> If you are having a medical emergency, call 911.</span>
          <span>© 2026 TeleDirectMD (Mahavir Health Services LLC) · <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a></span>
        </div>
      </footer>

      {/* Mobile sticky bottom bar */}
      <div className="tdmd-mobile-sticky-bar">
        <div className="tdmd-sticky-bar-text">
          <strong>$79 Flat Fee</strong>
          <span>Insurance accepted in select states</span>
        </div>
        <a href="/book-online/" className="tdmd-sticky-bar-cta">Book Now</a>
      </div>
    </>
  );
}
