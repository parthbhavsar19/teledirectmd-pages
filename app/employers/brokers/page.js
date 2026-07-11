import { employersCSS } from '../employers-styles';
import LeadFormEmbed from '../LeadFormEmbed';

export const metadata = {
  title: 'Broker Partnership Program | $250 per Signed Employer | TeleDirectMD',
  description:
    "A telehealth benefit your SMB clients haven't seen. Zero employer cost, board-certified MD, in-network billing with BCBS/Aetna/UHC. Earn $250 flat per signed employer.",
  alternates: { canonical: 'https://teledirectmd.com/employers/brokers' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Broker Partnership Program | $250 per Signed | TeleDirectMD',
    description:
      'Differentiate your book with a telehealth benefit at $0 cost to your client. A consistent physician relationship, not a rotating roster. Earn $250 flat per signed employer.',
    url: 'https://teledirectmd.com/employers/brokers',
    images: ['https://teledirectmd.com/og-brokers.jpg'],
  },
  twitter: { card: 'summary_large_image' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://teledirectmd.com/employers/brokers#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com/' },
        { '@type': 'ListItem', position: 2, name: 'For Employers', item: 'https://teledirectmd.com/employers/' },
        { '@type': 'ListItem', position: 3, name: 'Benefits Brokers', item: 'https://teledirectmd.com/employers/brokers/' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://teledirectmd.com/employers/brokers#webpage',
      url: 'https://teledirectmd.com/employers/brokers/',
      name: 'Broker Partnership Program | TeleDirectMD',
      description: 'TeleDirectMD broker partnership: $250 flat finder\'s fee per signed employer. Zero cost to your clients. Board-certified MD, in-network billing.',
      inLanguage: 'en-US',
      breadcrumb: { '@id': 'https://teledirectmd.com/employers/brokers#breadcrumbs' },
      primaryImageOfPage: 'https://teledirectmd.com/og-brokers.jpg',
      isPartOf: { '@id': 'https://teledirectmd.com/#website' },
      about: { '@id': 'https://teledirectmd.com/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.tdmd-emp-hero-sub', '.tdmd-emp-feecard'],
      },
    },
    {
      // Broker partnership offer — lets LLMs answer "how much does TeleDirectMD
      // pay brokers?" and "is the broker fee commission-based?" verbatim.
      '@type': 'Offer',
      '@id': 'https://teledirectmd.com/employers/brokers#offer',
      name: 'Broker Finder\'s Fee',
      description: 'Flat $250 finder\'s fee per signed employer agreement. Not commission. Not volume-tiered. Paid via ACH within 30 days of employer activation. Issued on Form 1099-NEC if aggregate annual payments meet or exceed $600.',
      price: '250.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '250.00',
        priceCurrency: 'USD',
        valueAddedTaxIncluded: false,
      },
      category: 'Referral Fee',
      eligibleCustomerType: 'https://schema.org/Business',
      // Florida brokers are excluded pending FL Patient Brokering Act counsel review.
      ineligibleRegion: { '@type': 'State', name: 'Florida' },
      areaServed: 'United States',
      seller: { '@id': 'https://teledirectmd.com/#organization' },
      availability: 'https://schema.org/InStock',
    },
    {
      // Reference the canonical Physician and Organization entities defined on /employers.
      '@type': ['Organization', 'MedicalBusiness'],
      '@id': 'https://teledirectmd.com/#organization',
      name: 'TeleDirectMD',
      url: 'https://teledirectmd.com',
      logo: 'https://teledirectmd.com/logo.webp',
      founder: { '@id': 'https://teledirectmd.com/#physician' },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-678-956-1855',
        email: 'contact@teledirectmd.com',
        contactType: 'customer service',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://teledirectmd.com/employers/brokers#faq',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.tdmd-emp-faq'] },
      mainEntity: [
        { '@type': 'Question', name: "When does the finder's fee pay?", acceptedAnswer: { '@type': 'Answer', text: "Within 30 days of the employer agreement being activated and the employer's enrollment code going live." } },
        { '@type': 'Question', name: 'Is it a 1099?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — we issue a 1099-NEC at year-end for any aggregate payments of $600 or more.' } },
        { '@type': 'Question', name: 'Is this commission-based?', acceptedAnswer: { '@type': 'Answer', text: 'No. It is a flat $250 per signed employer, regardless of how many employees enroll or how many visits they use. The flat-fee structure is intentional — it keeps the arrangement defensible under federal and state referral-payment rules.' } },
        { '@type': 'Question', name: "What if I'm a Florida broker?", acceptedAnswer: { '@type': 'Answer', text: "You can introduce us to Florida employers, but we can't pay the finder's fee for Florida placements at this time pending Florida healthcare counsel review of the Florida Patient Brokering Act exception for licensed insurance agents." } },
        { '@type': 'Question', name: "What's the typical sales cycle?", acceptedAnswer: { '@type': 'Answer', text: 'For an SMB owner under 50 employees, 30 to 60 days. For mid-market HR (50 to 500 employees), 90 to 180 days. Owner-operator sales are fastest because the owner decides alone.' } },
      ],
    },
  ],
};

export default function BrokerPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: employersCSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="tdmd-emp">

        {/* ============ HERO ============ */}
        <section className="tdmd-emp-hero">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-hero-grid">
              <div>
                <span className="tdmd-emp-eyebrow">For Benefits Brokers & Consultants</span>
                <h1>A telehealth benefit your SMB clients <em>haven't seen before.</em></h1>
                <p className="tdmd-emp-hero-sub">
                  Physician-founded virtual care, in-network with BCBS, Aetna, and UnitedHealthcare across 43 states + DC. Zero cost to your client. Their team pays a preferred employer per-visit rate (custom-set per partnership) below our standard retail. You earn a flat $250 finder's fee on every signed employer. Physician roster currently expanding to add capacity across the service area.
                </p>
                <div className="tdmd-emp-ctas">
                  <a href="#form" className="tdmd-emp-btn tdmd-emp-btn--primary">Become a Partner</a>
                  <a href="/employers/brief" className="tdmd-emp-btn tdmd-emp-btn--outline">Download the Brief (PDF)</a>
                </div>
              </div>
              <div className="tdmd-emp-feecard">
                <div className="tdmd-emp-feecard-label">Flat finder's fee</div>
                <div className="tdmd-emp-feecard-number">$250</div>
                <p>Per signed employer agreement. Paid via ACH within 30 days of activation. Not commission. Not volume-tiered.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TRUST STRIP ============ */}
        <div className="tdmd-emp-trust">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-trust-row">
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-dot" aria-hidden="true"></span>Board-Certified Family Medicine</div>
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-stars" aria-hidden="true">★★★★★</span>5.0 · 125 Verified Reviews</div>
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-dot" aria-hidden="true"></span>LegitScript · HIPAA-Compliant</div>
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-dot" aria-hidden="true"></span>Licensed in 43 states + DC</div>
            </div>
          </div>
        </div>

        {/* ============ PROBLEM ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--teal">
          <div className="tdmd-emp-narrow" style={{ textAlign: 'center' }}>
            <span className="tdmd-emp-eyebrow">Why this matters</span>
            <h2 style={{ color: '#ffffff' }}>The "free" Teladoc on their carrier plan? They're not using it.</h2>
            <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.0625rem' }}>
              Most of your sub-200-employee clients on BCBS, Aetna, or UnitedHealthcare have carrier-bundled Teladoc or MDLive running at the industry-benchmark <strong style={{ color: 'var(--tdmd-accent)' }}>~7% utilization</strong>. Their employees don't trust seeing a different stranger every visit — and most don't know they have the benefit at all.
            </p>
            <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.0625rem', marginTop: '1.5rem' }}>
              TeleDirectMD is the supplement, not a replacement. A consistent board-certified physician relationship, not a rotating roster of strangers. In-network billing that counts toward the deductible. Zero cost to your client to add.
            </p>
          </div>
        </section>

        {/* ============ OFFER ============ */}
        <section className="tdmd-emp-section" id="offer">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">What you can offer your clients</span>
              <h2>One offer. Five bullets. Memorize it.</h2>
            </div>
            <ul className="tdmd-emp-offerlist">
              <li><strong>Employer pays $0.</strong> No PEPM, no per-visit fees, no contracts with money in them.</li>
              <li><strong>Employees access a preferred employer per-visit rate</strong> (custom-set per partnership, below our standard retail) — or use BCBS / Aetna / UnitedHealthcare in-network.</li>
              <li><strong>A board-certified physician your team actually gets to know.</strong> Patients are assigned to a physician and stay with them — no NPs, no PAs, no rotating network of strangers.</li>
              <li><strong>43 states + DC coverage.</strong> Same-day appointments, including evenings and weekends.</li>
              <li><strong>One-page partnership agreement, terminate at-will.</strong></li>
            </ul>
          </div>
        </section>

        {/* ============ WHAT'S IN IT FOR YOU ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--soft">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">What's in it for you</span>
              <h2>Flat $250. Paid by ACH. Not commission.</h2>
            </div>
            <div className="tdmd-emp-vcards" style={{ maxWidth: 980, margin: '0 auto' }}>
              <div className="tdmd-emp-vcard">
                <h3>Flat finder's fee</h3>
                <span className="tdmd-emp-bigstat">$250</span>
                <p>Per signed employer partnership, regardless of how many employees enroll or how many visits they use.</p>
              </div>
              <div className="tdmd-emp-vcard">
                <h3>Paid fast</h3>
                <span className="tdmd-emp-bigstat">30 days</span>
                <p>ACH payout within 30 days of the employer's enrollment code going live. 1099-NEC issued at year-end for aggregate payments of $600+.</p>
              </div>
              <div className="tdmd-emp-vcard">
                <h3>Compliance-clean</h3>
                <span className="tdmd-emp-bigstat">Flat</span>
                <p>Structured deliberately as a finder's fee, not volume-tiered commission, to stay defensible under federal Anti-Kickback Statute and state referral-payment rules.</p>
              </div>
            </div>
            <div className="tdmd-emp-florida">
              <strong>Florida brokers:</strong> You can introduce TeleDirectMD to Florida-based employers, but we can't pay the finder's fee for Florida placements at this time. The Florida Patient Brokering Act (Fla. Stat. § 817.505) is broader than federal AKS and includes commercial payer referrals. There's a licensed-insurance-agent exception, but pending Florida healthcare counsel review of our specific structure, we exclude Florida from the fee program out of caution. You're still welcome to introduce us.
            </div>
          </div>
        </section>

        {/* ============ COMPLIANCE RESOURCES ============ */}
        <section className="tdmd-emp-section">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">Broker compliance corner</span>
              <h2>Everything you need to put us in front of your clients</h2>
              <p style={{ color: 'var(--tdmd-muted)', fontSize: '1.0625rem' }}>Submit the form and we'll email you the full broker resources package within one business day.</p>
            </div>
            <div className="tdmd-emp-resources">
              <div className="tdmd-emp-resource"><span className="tdmd-emp-resource-icon" aria-hidden="true">📋</span>State licensure roster (current PDF)</div>
              <div className="tdmd-emp-resource"><span className="tdmd-emp-resource-icon" aria-hidden="true">👨‍⚕️</span>Physician credential file &amp; NPI</div>
              <div className="tdmd-emp-resource"><span className="tdmd-emp-resource-icon" aria-hidden="true">🔒</span>HIPAA posture &amp; BAA template</div>
              <div className="tdmd-emp-resource"><span className="tdmd-emp-resource-icon" aria-hidden="true">✓</span>LegitScript certification</div>
              <div className="tdmd-emp-resource"><span className="tdmd-emp-resource-icon" aria-hidden="true">📄</span>Malpractice insurance disclosure</div>
              <div className="tdmd-emp-resource"><span className="tdmd-emp-resource-icon" aria-hidden="true">📝</span>CAA-2021 disclosure template</div>
              <div className="tdmd-emp-resource"><span className="tdmd-emp-resource-icon" aria-hidden="true">📑</span>Sample one-page employer agreement</div>
              <div className="tdmd-emp-resource"><span className="tdmd-emp-resource-icon" aria-hidden="true">🎨</span>Co-brandable one-pager (Canva)</div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--soft">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">Broker FAQ</span>
              <h2>The questions brokers ask first</h2>
            </div>
            <div className="tdmd-emp-faq">
              <details><summary>When does the finder's fee pay?</summary><div><p>Within 30 days of the employer agreement being activated and the employer's enrollment code going live.</p></div></details>
              <details><summary>Is it a 1099?</summary><div><p>Yes — we issue a 1099-NEC at year-end for any aggregate payments of $600 or more.</p></div></details>
              <details><summary>Is this commission-based?</summary><div><p>No. It's a flat $250 per signed employer, regardless of how many of your client's employees enroll, how many visits they use, or what they pay. The flat-fee structure is intentional — it keeps the arrangement defensible under federal and state referral-payment rules.</p></div></details>
              <details><summary>What if I'm a Florida broker?</summary><div><p>You can introduce us to Florida-based employers, but we can't pay the finder's fee for Florida placements at this time. Florida Patient Brokering Act counsel review of the licensed-insurance-agent exception is on our roadmap.</p></div></details>
              <details><summary>What's the typical sales cycle?</summary><div><p>For an SMB owner (under 50 EE), 30–60 days. For mid-market HR (50–500 EE), 90–180 days. The owner-operator sale is fastest because the owner decides alone — no benefits committee, no RFP.</p></div></details>
              <details><summary>Can I co-brand the materials?</summary><div><p>Yes. We'll send you an editable Canva template for a one-pager you can add your logo to and forward to clients.</p></div></details>
              <details><summary>Do you have a broker portal?</summary><div><p>A password-gated broker resources area is in build. For now, fill out the form and we'll email you the materials directly.</p></div></details>
              <details><summary>Who do I talk to about a specific client?</summary><div><p>Submit the form. Dr. Bhavsar or someone from his team will be in touch within one business day with the broker resources package and to discuss your client opportunity.</p></div></details>
            </div>
          </div>
        </section>

        {/* ============ LEAD FORM ============ */}
        <section className="tdmd-emp-section">
          <div className="tdmd-emp-container">
            <LeadFormEmbed defaultPath="broker" />
          </div>
        </section>

      </div>

      {/* ============ COMPLIANCE FOOTER ============ */}
      <section className="tdmd-emp-compliance">
        <div className="tdmd-emp-container">
          <div className="tdmd-emp-compliance-block">
            <h4>Service nature</h4>
            <p>TeleDirectMD provides direct-pay primary care telehealth and is <strong>not a health insurance product</strong>. This service complements, not replaces, your client's group health plan.</p>
          </div>
          <div className="tdmd-emp-compliance-block">
            <h4>Broker fee structure</h4>
            <p>The TeleDirectMD broker finder's fee is structured as a one-time flat payment per signed employer partnership, not as commission tied to enrollment volume or visit utilization, and is designed to stay outside the federal Anti-Kickback Statute scope (which applies to federal program referrals only). Florida-based broker placements are excluded from the fee program pending Florida healthcare counsel review of the Florida Patient Brokering Act licensed-insurance-agent exception.</p>
          </div>
          <div className="tdmd-emp-compliance-block">
            <h4>Provider identity</h4>
            <p>Care provided by Parth Bhavsar, MD — Board-Certified Family Medicine Physician · NPI 1104323203 · Residency: University of Mississippi Medical Center, 2021 · Licensed in 43 states + DC.</p>
          </div>
        </div>
      </section>
    </>
  );
}
