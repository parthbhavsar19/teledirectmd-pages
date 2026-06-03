import { employersCSS } from './employers-styles';
import IndustryTabs from './IndustryTabs';
import LeadFormEmbed from './LeadFormEmbed';

export const metadata = {
  title: 'Telehealth for Employees | $0 Employer Cost | TeleDirectMD',
  description:
    "Add telehealth to your team's benefits at zero employer cost. Board-certified family medicine MD, preferred employer pricing, in-network with BCBS, Aetna, and UnitedHealthcare across 41 states + DC.",
  alternates: { canonical: 'https://teledirectmd.com/employers' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Telehealth for Employees | $0 Employer Cost | TeleDirectMD',
    description:
      'Real doctor visits for your team. Zero cost to you. Preferred employer pricing or in-network with BCBS, Aetna, UHC. 41 states + DC.',
    url: 'https://teledirectmd.com/employers',
    images: ['https://teledirectmd.com/og-employers.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telehealth for Employees | $0 Employer Cost | TeleDirectMD',
    description: 'Real doctor visits for your team. Zero cost to you. Preferred employer pricing.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://teledirectmd.com/employers#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com/' },
        { '@type': 'ListItem', position: 2, name: 'For Employers', item: 'https://teledirectmd.com/employers/' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://teledirectmd.com/employers#webpage',
      url: 'https://teledirectmd.com/employers/',
      name: 'Telehealth for Employees | $0 Employer Cost | TeleDirectMD',
      description:
        "Add telehealth to your team's benefits at zero employer cost. Board-certified MD, preferred employer pricing, in-network with BCBS, Aetna, UnitedHealthcare. 41 states + DC.",
      inLanguage: 'en-US',
      breadcrumb: { '@id': 'https://teledirectmd.com/employers#breadcrumbs' },
      isPartOf: { '@id': 'https://teledirectmd.com/#website' },
      about: { '@id': 'https://teledirectmd.com/#organization' },
      primaryImageOfPage: 'https://teledirectmd.com/og-employers.jpg',
      // Speakable hint for voice-first AI assistants (Google Assistant, Alexa, Siri).
      // Marks the hero summary and FAQ block as voice-extractable.
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.tdmd-emp-hero-sub', '.tdmd-emp-faq dt', '.tdmd-emp-faq dd'],
      },
    },
    {
      // Founder/physician entity — high-authority signal for AI engines.
      // sameAs links connect this entity to its press, review, and licensure profiles.
      '@type': 'Physician',
      '@id': 'https://teledirectmd.com/#physician',
      name: 'Parth Bhavsar, MD',
      honorificSuffix: 'MD',
      jobTitle: 'Board-Certified Family Medicine Physician, Founder',
      medicalSpecialty: 'https://schema.org/FamilyPractice',
      identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: '1104323203' },
      worksFor: { '@id': 'https://teledirectmd.com/#organization' },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'University of Mississippi Medical Center',
        url: 'https://www.umc.edu/',
      },
      memberOf: { '@type': 'Organization', name: 'American Board of Family Medicine' },
      knowsLanguage: ['English', 'Hindi', 'Gujarati', 'Urdu'],
      areaServed: ['Alabama', 'Arizona', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Pennsylvania', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      image: 'https://teledirectmd.com/images/parth-bhavsar-md.jpg',
      url: 'https://teledirectmd.com/about',
      sameAs: [
        'https://npiregistry.cms.hhs.gov/provider-view/1104323203',
        'https://www.healthgrades.com/physician/dr-parth-bhavsar',
        'https://www.webmd.com/doctors/parth-bhavsar',
        'https://www.zocdoc.com/doctor/parth-bhavsar',
      ],
    },
    {
      // Organization with comprehensive sameAs links to all press coverage and
      // review platforms — this is the strongest AI-citation authority signal.
      '@type': ['Organization', 'MedicalBusiness'],
      '@id': 'https://teledirectmd.com/#organization',
      name: 'TeleDirectMD',
      legalName: 'TeleDirectMD',
      url: 'https://teledirectmd.com',
      logo: 'https://teledirectmd.com/logo.webp',
      description: 'Physician-led virtual care platform offering same-day video visits with a board-certified family medicine MD across 41 states plus DC. Physician roster currently expanding.',
      founder: { '@id': 'https://teledirectmd.com/#physician' },
      foundingDate: '2024',
      areaServed: 'United States',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-678-956-1855',
        email: 'contact@teledirectmd.com',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
      },
      medicalSpecialty: 'https://schema.org/FamilyPractice',
      // Verified press mentions — anchors the entity in known-authority publishers
      // so LLMs can confirm citation legitimacy.
      sameAs: [
        'https://time.com/7331761/cold-shower-benefits-health/',
        'https://www.newsweek.com/woman-drinks-matcha-every-week-shock-ends-hospital-2127630',
        'https://www.huffpost.com/entry/things-you-should-never-do-with-protein-powder_l_67e3d27ee4b0c1de2e0d8c91',
        'https://www.foxnews.com/food-drink/bananas-may-sabotaging-your-smoothies-superpowers-scientists-warn',
        'https://www.britishgq.com/article/sleep-tips-good-night',
        'https://parade.com/health/health-benefits-of-walnuts',
        'https://health.usnews.com/wellness/articles/should-i-use-collagen-supplements',
        'https://nypost.com/2025/11/01/lifestyle/bananas-may-be-making-your-smoothies-less-effective-scientists-say/',
        'https://www.healthline.com/health-news/amy-sedaris-talks-brain-health',
        'https://www.healthgrades.com/physician/dr-parth-bhavsar',
        'https://www.zocdoc.com/doctor/parth-bhavsar',
        'https://www.webmd.com/doctors/parth-bhavsar',
        'https://www.google.com/maps/place/TeleDirectMD',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        bestRating: '5',
        reviewCount: '125',
        itemReviewed: 'TeleDirectMD virtual care visits',
      },
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'LegitScript Certified Telehealth Provider' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'HIPAA-Compliant Platform' },
      ],
      // Insurance networks the practice participates in — answers "is TeleDirectMD
      // in-network with [X]?" verbatim from schema.
      memberOf: [
        { '@type': 'Organization', name: 'Aetna Provider Network' },
        { '@type': 'Organization', name: 'Blue Cross Blue Shield Provider Network' },
        { '@type': 'Organization', name: 'UnitedHealthcare Provider Network' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://teledirectmd.com/employers#service',
      serviceType: 'Employee Telehealth Benefit',
      provider: { '@id': 'https://teledirectmd.com/#organization' },
      description:
        'Direct-pay virtual care for employer-endorsed teams. Zero employer cost. Employees access a preferred per-visit rate (custom-set per employer partnership) or use BCBS, Aetna, or UnitedHealthcare in-network. Adult patients 18+. Covers 41 states plus DC. Physician roster currently expanding.',
      audience: { '@type': 'BusinessAudience', audienceType: 'Small and mid-market employers' },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        eligibleCustomerType: 'https://schema.org/Business',
        description: 'Zero employer cost. Employees access a preferred per-visit rate set per employer partnership, or use commercial insurance in-network.',
      },
      areaServed: 'United States',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://teledirectmd.com/employers#faq',
      // Hint to voice assistants that the FAQ block is voice-extractable.
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.tdmd-emp-faq'] },
      mainEntity: [
        { '@type': 'Question', name: 'What does it cost the business?', acceptedAnswer: { '@type': 'Answer', text: 'Zero. No PEPM, no per-visit fees, no contracts with money in them. You sign a one-page partnership agreement and your team gets an enrollment code.' } },
        { '@type': 'Question', name: 'How do you make money if I don\'t pay?', acceptedAnswer: { '@type': 'Answer', text: 'From the preferred per-visit rate your team pays (custom-set per employer partnership), or from in-network insurance billing when they have BCBS, Aetna, or UnitedHealthcare. Your $0 cost is our customer-acquisition model.' } },
        { '@type': 'Question', name: 'What about my employees\' kids or dependents?', acceptedAnswer: { '@type': 'Answer', text: 'Right now we\'re adults-only (18 and up). Pediatric care for ages 5 and up is on our roadmap. For now, the benefit covers your employees themselves.' } },
        { '@type': 'Question', name: 'Do you prescribe controlled substances?', acceptedAnswer: { '@type': 'Answer', text: 'No. TeleDirectMD does not prescribe controlled substances via telehealth — no stimulants, benzodiazepines, or opioids. This is a deliberate clinical-safety decision.' } },
        { '@type': 'Question', name: 'We already have Teladoc through our carrier. Why add this?', acceptedAnswer: { '@type': 'Answer', text: 'Carrier-bundled telehealth averages around 7 percent utilization. Most employees do not know it exists. TeleDirectMD is a supplement — a consistent physician relationship rather than a rotating roster of strangers, in-network billing that counts toward the deductible, and no cost to you.' } },
        { '@type': 'Question', name: 'How fast can my team get a visit?', acceptedAnswer: { '@type': 'Answer', text: 'Same-day or next-day, every day — including evenings and weekends.' } },
        { '@type': 'Question', name: 'What states do you cover?', acceptedAnswer: { '@type': 'Answer', text: '41 states plus the District of Columbia. We do not currently serve Alaska, Arkansas, Massachusetts, New Mexico, New York, Oregon, Rhode Island, Vermont, or Virginia.' } },
        { '@type': 'Question', name: 'Can our employees use HSA or FSA dollars?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A TeleDirectMD telehealth visit is an IRS-qualified medical expense.' } },
        { '@type': 'Question', name: 'Can we reimburse employees through ICHRA or QSEHRA?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. TeleDirectMD visits are HRA-eligible. Consult your benefits counsel on plan-design specifics.' } },
        { '@type': 'Question', name: 'Is this an ERISA-regulated health plan?', acceptedAnswer: { '@type': 'Answer', text: 'Our partnership is structured as a voluntary, employee-pay-all arrangement designed to fall within the Department of Labor voluntary-plan safe harbor. Consult your benefits counsel for specifics.' } },
        { '@type': 'Question', name: 'What\'s the contract length?', acceptedAnswer: { '@type': 'Answer', text: 'Month-to-month. Terminate at-will, any time. The agreement is one page.' } },
      ],
    },
  ],
};

export default function EmployersPage() {
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
                <span className="tdmd-emp-eyebrow">For Employers · Brokers · HR Teams</span>
                <h1>Real doctor visits for your team. <em>$0 cost to you.</em></h1>
                <p className="tdmd-emp-hero-sub">
                  TeleDirectMD is physician-founded virtual care in 41 states + DC. Your team books video visits with a board-certified family medicine physician at a preferred employer rate — or uses BCBS, Aetna, or UnitedHealthcare in-network. You pay zero. You sign one page. You're live in a week. Our physician roster is currently expanding to add capacity across our service area.
                </p>
                <div className="tdmd-emp-ctas">
                  <a href="#form" className="tdmd-emp-btn tdmd-emp-btn--primary">Book a 15-Minute Discovery Call</a>
                  <a href="/employers/brief" className="tdmd-emp-btn tdmd-emp-btn--outline">Download the Brief (PDF)</a>
                </div>
              </div>
              <aside className="tdmd-emp-pricecard" aria-label="Pricing snapshot">
                <div className="tdmd-emp-priceblock">
                  <div className="tdmd-emp-pricelabel">Your business pays</div>
                  <div className="tdmd-emp-priceamount">$0</div>
                  <div className="tdmd-emp-pricedetail">No PEPM. No per-visit fees. No contracts.</div>
                </div>
                <div className="tdmd-emp-priceblock">
                  <div className="tdmd-emp-pricelabel">Your employee pays</div>
                  <div className="tdmd-emp-priceamount" style={{ fontSize: '1.4rem' }}>Preferred Rate</div>
                  <div className="tdmd-emp-pricedetail">Custom per-visit rate set per employer partnership. Same-day visit. HSA/FSA eligible.</div>
                </div>
                <div className="tdmd-emp-priceblock">
                  <div className="tdmd-emp-pricelabel">Or use insurance</div>
                  <div className="tdmd-emp-priceamount" style={{ fontSize: '1.4rem' }}>In-Network</div>
                  <div className="tdmd-emp-pricedetail">BCBS · Aetna · UnitedHealthcare commercial plans (select states)</div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ============ TRUST STRIP ============ */}
        <div className="tdmd-emp-trust">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-trust-row">
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-dot" aria-hidden="true"></span>Licensed in 41 states + DC</div>
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-dot" aria-hidden="true"></span>Board-Certified Family Medicine</div>
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-dot" aria-hidden="true"></span>In-Network: BCBS · Aetna · UHC</div>
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-stars" aria-hidden="true">★★★★★</span>5.0 · 125 Verified Reviews</div>
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-dot" aria-hidden="true"></span>LegitScript · HIPAA-Compliant</div>
            </div>
          </div>
        </div>

        {/* ============ PRESS ============ */}
        <div className="tdmd-emp-press">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-press-label">As featured in</div>
            <div className="tdmd-emp-press-row">
              <img src="/logos/time.png" alt="TIME" loading="lazy" />
              <img src="/logos/newsweek.png" alt="Newsweek" loading="lazy" />
              <img src="/logos/huffpost.jpg" alt="HuffPost" loading="lazy" />
              <img src="/logos/fox.png" alt="FOX News Digital" loading="lazy" />
              <img src="/logos/gq.jpg" alt="British GQ" loading="lazy" />
              <img src="/logos/parade.png" alt="Parade" loading="lazy" />
              <img src="/logos/usnews.png" alt="U.S. News & World Report" loading="lazy" />
              <img src="/logos/nypost.png" alt="New York Post" loading="lazy" />
            </div>
          </div>
        </div>

        {/* ============ PROBLEM ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--teal">
          <div className="tdmd-emp-narrow" style={{ textAlign: 'center' }}>
            <span className="tdmd-emp-eyebrow">The reality</span>
            <h2 style={{ color: '#ffffff' }}>Your team needs a doctor. They can't get one.</h2>
            <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.0625rem' }}>
              The average ER visit costs <strong style={{ color: 'var(--tdmd-accent)' }}>$1,454</strong>. The average urgent care runs <strong style={{ color: 'var(--tdmd-accent)' }}>$150–$300</strong>. Your employees skip both — and skip the doctor entirely — because they can't take half a day off to see one. 70% of hospitality workers have zero employer health benefits. 41% of independent trucking owner-operators are uninsured.
            </p>
            <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.0625rem', marginTop: '1.5rem' }}>
              We fix that — and it costs your business nothing.
            </p>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section className="tdmd-emp-section" id="how">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">How it works</span>
              <h2>Three steps. Live in a week.</h2>
              <p style={{ color: 'var(--tdmd-muted)', fontSize: '1.0625rem' }}>No PEPM negotiation. No benefits committee. No claims plumbing to build.</p>
            </div>
            <div className="tdmd-emp-steps">
              <div className="tdmd-emp-step">
                <h3>You sign one page.</h3>
                <p>A one-page partnership agreement. No PEPM, no per-visit fees, no contracts with money in them. Terminate at-will, any time.</p>
              </div>
              <div className="tdmd-emp-step">
                <h3>Your team gets a code.</h3>
                <p>Each business receives a unique enrollment code. Employees book on TeleDirectMD, see Dr. Bhavsar via video, and pay the preferred employer rate set in your partnership agreement — or use BCBS / Aetna / UnitedHealthcare in-network.</p>
              </div>
              <div className="tdmd-emp-step">
                <h3>Visits count toward their deductible.</h3>
                <p>When insured, we bill in-network directly. No surprise bills, no out-of-network friction. Visits count toward the deductible just like any other doctor's appointment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ VALUE CARDS ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--soft">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">Why teams choose us</span>
              <h2>Built differently than carrier-bundled telehealth</h2>
            </div>
            <div className="tdmd-emp-vcards">
              <div className="tdmd-emp-vcard">
                <h3>Your people skip the ER</h3>
                <span className="tdmd-emp-bigstat">$1,454</span>
                <p>Average ER visit cost. A TeleDirectMD visit is a fraction of that — paid at the preferred employer rate or in-network through commercial insurance. A 2017–2019 Penn Medicine study (<em>American Journal of Managed Care</em>) found employee telehealth visits cost <strong>23% less per episode</strong> than in-person — about $113 less per visit.</p>
                <span className="tdmd-emp-caveat">Results vary by setting. Penn Medicine findings come from a health-system study; your outcomes may differ.</span>
              </div>
              <div className="tdmd-emp-vcard">
                <h3>You get a retention edge</h3>
                <span className="tdmd-emp-bigstat">70%</span>
                <p>Of hospitality workers lack any employer health benefit. 79% annual caregiver turnover in home care is driven largely by benefits gaps. Even a benefit you don't pay for moves the needle on hiring.</p>
              </div>
              <div className="tdmd-emp-vcard">
                <h3>It actually gets used</h3>
                <span className="tdmd-emp-bigstat">~7%</span>
                <p>Industry-benchmark utilization for carrier-bundled telehealth at large employers. Most of your team doesn't know it exists. We're paid only on real visits — structurally incentivized to drive usage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ INDUSTRY TABS ============ */}
        <section className="tdmd-emp-section">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">Who we help</span>
              <h2>Built for businesses where employees can't take half a day off</h2>
            </div>
            <IndustryTabs />
          </div>
        </section>

        {/* ============ SCOPE ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--soft">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">Honest scope</span>
              <h2>What we treat — and what we don't</h2>
              <p style={{ color: 'var(--tdmd-muted)', fontSize: '1.0625rem' }}>Adult patients, 18+. We're upfront about what we don't do so your team gets the right care, not the wrong care faster.</p>
            </div>
            <div className="tdmd-emp-scope">
              <div className="tdmd-emp-scope-col tdmd-emp-scope-col--do">
                <h3>What we treat</h3>
                <ul className="tdmd-emp-scope-list">
                  <li>Urgent care: UTI, sinus, cough, cold, allergies, strep, flu</li>
                  <li>Chronic refills: hypertension, asthma, hypothyroid, GERD, hyperlipidemia, non-insulin diabetes</li>
                  <li>Skin and dermatology, women's health</li>
                  <li>Smoking cessation, weight management</li>
                  <li>Work excuse and return-to-work notes</li>
                  <li>60+ conditions total</li>
                </ul>
              </div>
              <div className="tdmd-emp-scope-col tdmd-emp-scope-col--dont">
                <h3>What we don't treat</h3>
                <ul className="tdmd-emp-scope-list">
                  <li>Children under 18 (pediatric ages 5+ on roadmap)</li>
                  <li>Controlled substances — no stimulants, benzos, opioids</li>
                  <li>Emergencies — we triage to ER</li>
                  <li>Primary mental health as a lead product</li>
                  <li>Complex specialty care — we'll refer</li>
                  <li>FMCSA DOT physicals (requires in-person CME)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRICING ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--teal">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">Transparent pricing</span>
              <h2 style={{ color: '#ffffff' }}>Pricing is simple. And public.</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>None of our competitors disclose their pricing publicly. We do.</p>
            </div>
            <div className="tdmd-emp-pricing-table">
              <div className="tdmd-emp-pricerow">
                <span className="tdmd-emp-plabel">Your business pays</span>
                <span className="tdmd-emp-pvalue tdmd-emp-pvalue--accent">$0 / month, $0 / visit</span>
              </div>
              <div className="tdmd-emp-pricerow">
                <span className="tdmd-emp-plabel">Your employee pays cash</span>
                <span className="tdmd-emp-pvalue tdmd-emp-pvalue--accent">Preferred employer rate</span>
              </div>
              <div className="tdmd-emp-pricerow">
                <span className="tdmd-emp-plabel">Or insurance copay (BCBS · Aetna · UHC)</span>
                <span className="tdmd-emp-pvalue">In-network — counts toward deductible</span>
              </div>
              <div className="tdmd-emp-pricerow">
                <span className="tdmd-emp-plabel">Implementation cost</span>
                <span className="tdmd-emp-pvalue">$0</span>
              </div>
              <div className="tdmd-emp-pricerow">
                <span className="tdmd-emp-plabel">Contract length</span>
                <span className="tdmd-emp-pvalue">Month-to-month, terminate at-will</span>
              </div>
              <div className="tdmd-emp-pricerow">
                <span className="tdmd-emp-plabel">Hidden fees</span>
                <span className="tdmd-emp-pvalue">None</span>
              </div>
              <div className="tdmd-emp-pricing-math">
                Most employer telehealth runs $5–$15 per employee per month. At industry-benchmark 7% utilization, a 100-employee company paying $7 PEPM ends up at roughly <strong>$1,200 per actual consult</strong>. We charge you nothing.
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMPARISON ============ */}
        <section className="tdmd-emp-section">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">vs. The alternatives</span>
              <h2>The four real options at your scale</h2>
            </div>
            <div className="tdmd-emp-compare-wrap">
              <table className="tdmd-emp-compare">
                <thead>
                  <tr>
                    <th></th>
                    <th className="tdmd-emp-us">TeleDirectMD</th>
                    <th>Carrier-bundled Teladoc / MDLive</th>
                    <th>First Stop Health</th>
                    <th>Sesame@Work</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Employer cost</td><td className="tdmd-emp-us">$0</td><td>Embedded in premium</td><td>PEPM ($5–$12+)</td><td>$20/EE/month</td></tr>
                  <tr><td>Employee per visit</td><td className="tdmd-emp-us">Preferred employer rate</td><td>$0 — but unused</td><td>$0</td><td>Marketplace prices</td></tr>
                  <tr><td>In-network insurance</td><td className="tdmd-emp-us"><span className="tdmd-emp-yes">Yes — BCBS · Aetna · UHC</span></td><td>Through your carrier only</td><td><span className="tdmd-emp-no">No (cash-pay)</span></td><td><span className="tdmd-emp-no">No (cash-pay)</span></td></tr>
                  <tr><td>Continuity with one physician</td><td className="tdmd-emp-us"><span className="tdmd-emp-yes">Yes — assigned, not rotated</span></td><td><span className="tdmd-emp-no">Random doctor</span></td><td>Network of physicians</td><td>Marketplace</td></tr>
                  <tr><td>Physician-only (no NPs/PAs)</td><td className="tdmd-emp-us"><span className="tdmd-emp-yes">Yes</span></td><td>Mixed</td><td>Mixed</td><td>Mixed</td></tr>
                  <tr><td>Typical utilization</td><td className="tdmd-emp-us">Driven by real visits</td><td>~7%</td><td>60% claimed</td><td>Self-directed</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--tdmd-muted)', fontSize: '0.875rem' }}>
              Full comparisons: <a href="/compare/teledirectmd-vs-teladoc/" style={{ color: 'var(--tdmd-teal)', fontWeight: 700 }}>vs. Teladoc</a> · <a href="/compare/teledirectmd-vs-doctor-on-demand/" style={{ color: 'var(--tdmd-teal)', fontWeight: 700 }}>vs. Doctor on Demand</a>
            </p>
          </div>
        </section>

        {/* ============ FOUNDER ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--soft">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-founder">
              <div className="tdmd-emp-founder-img">
                <img src="/images/parth-bhavsar-md.jpg" alt="Parth Bhavsar, MD — Board-Certified Family Medicine Physician" width="280" height="280" />
              </div>
              <div>
                <span className="tdmd-emp-eyebrow">Who's behind TeleDirectMD</span>
                <h2>You'll talk to the same doctor every time.</h2>
                <p className="tdmd-emp-founder-credential">
                  <strong style={{ color: 'var(--tdmd-navy)' }}>Parth Bhavsar, MD</strong> · Board-Certified Family Medicine<br />
                  Residency: University of Mississippi Medical Center, 2021 · NPI 1104323203
                </p>
                <p>
                  Most virtual care platforms route your team to a different stranger every visit — often an NP or PA, not a physician. TeleDirectMD is built around continuity: each patient is assigned to a board-certified physician and stays with that physician across visits. Dr. Bhavsar founded the practice and is licensed in 41 states + DC; the physician roster is currently expanding to add capacity. That's not a marketing line. It's the entire model.
                </p>
                <div className="tdmd-emp-founder-badges">
                  <span className="tdmd-emp-badge">LegitScript Certified</span>
                  <span className="tdmd-emp-badge">HIPAA-Compliant</span>
                  <span className="tdmd-emp-badge">NPI 1104323203</span>
                  <span className="tdmd-emp-badge">41 States + DC</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ REVIEWS ============ */}
        <section className="tdmd-emp-section">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">5.0 ★ across 125 verified patient reviews</span>
              <h2>What patients say about Dr. Bhavsar</h2>
            </div>
            <div className="tdmd-emp-reviews-stats">
              <div className="tdmd-emp-review-stat"><div className="tdmd-emp-review-platform">Google</div><div className="tdmd-emp-review-rating">5.0 ★</div></div>
              <div className="tdmd-emp-review-stat"><div className="tdmd-emp-review-platform">ZocDoc</div><div className="tdmd-emp-review-rating">5.0 ★</div></div>
              <div className="tdmd-emp-review-stat"><div className="tdmd-emp-review-platform">WebMD</div><div className="tdmd-emp-review-rating">5.0 ★</div></div>
              <div className="tdmd-emp-review-stat"><div className="tdmd-emp-review-platform">Healthgrades</div><div className="tdmd-emp-review-rating">5.0 ★</div></div>
            </div>
            <div className="tdmd-emp-tests">
              <div className="tdmd-emp-test">
                <blockquote>"My visit with Dr. Bhavsar went well. He was on time and I didn't feel rushed. He took time to find out what my issue was, explained symptoms I had in great detail, and I understood my issue even better because of this."</blockquote>
                <cite>Verified Patient, WebMD</cite>
              </div>
              <div className="tdmd-emp-test">
                <blockquote>"He listened to my symptoms and immediately knew what I needed. After my visit I got my prescription and work excuse very fast and started to feel better within a few hours. 10/10."</blockquote>
                <cite>Verified Patient, Healthgrades</cite>
              </div>
              <div className="tdmd-emp-test">
                <blockquote>"Dr. Parth was professional, attentive, and made the visit feel easy and comfortable. He listened carefully, explained everything clearly, and prescribed medication that worked quickly."</blockquote>
                <cite>Verified Patient, Healthgrades</cite>
              </div>
              <div className="tdmd-emp-test">
                <blockquote>"Was very understanding, didn't try to get off the video call right away, kept asking me if I had any additional questions or concerns. Could not recommend Dr. Bhavsar enough!"</blockquote>
                <cite>Verified Patient, ZocDoc</cite>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--tdmd-muted)' }}>
              Read all reviews: <a href="https://www.healthgrades.com/physician/dr-parth-bhavsar-xynq9m7" style={{ color: 'var(--tdmd-teal)', fontWeight: 700 }}>Healthgrades</a> · <a href="https://doctor.webmd.com/doctor/parth-bhavsar-e293ceba-555d-466e-ab94-d82e02d268db-overview" style={{ color: 'var(--tdmd-teal)', fontWeight: 700 }}>WebMD</a> · <a href="https://www.zocdoc.com/practice/teledirectmd-145823" style={{ color: 'var(--tdmd-teal)', fontWeight: 700 }}>ZocDoc</a>
            </p>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--soft">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">FAQ</span>
              <h2>Questions employers ask before signing</h2>
            </div>
            <div className="tdmd-emp-faq">
              <details><summary>What does it cost the business?</summary><div><p>Zero. No PEPM, no per-visit fees, no contracts with money in them. You sign a one-page partnership agreement and your team gets an enrollment code. That's it.</p></div></details>
              <details><summary>How do you make money if I don't pay?</summary><div><p>Honestly — from the preferred per-visit rate your team pays (custom-set per employer partnership), or from in-network insurance billing when they have BCBS, Aetna, or UnitedHealthcare. Your $0 cost is our customer-acquisition model.</p></div></details>
              <details><summary>What about my employees' kids or dependents?</summary><div><p>Right now we're adults-only (18+). Pediatric care for ages 5 and up is on our roadmap. For now, the benefit covers your employees themselves.</p></div></details>
              <details><summary>Do you prescribe ADHD meds, benzos, or opioids?</summary><div><p>No. We do not prescribe controlled substances via telehealth. That's a deliberate clinical-safety decision — it keeps us aligned with DEA guidance and our malpractice scope.</p></div></details>
              <details><summary>We already have Teladoc through our carrier. Why add this?</summary><div><p>Carrier-bundled telehealth at large employers averages around 7% utilization. Most of your team doesn't even know it exists, and the platform routes them to a different stranger every visit. We're a supplement, not a replacement — a consistent physician relationship rather than a rotating roster, in-network billing that counts toward your deductible, and no cost to you.</p></div></details>
              <details><summary>How fast can my team get a visit?</summary><div><p>Same-day or next-day, every day — including evenings and weekends.</p></div></details>
              <details><summary>What states do you cover?</summary><div><p>41 states plus the District of Columbia. We do not currently serve Alaska, Arkansas, Massachusetts, New Mexico, New York, Oregon, Rhode Island, Vermont, or Virginia. <a href="/states-we-serve/" style={{ color: 'var(--tdmd-teal)', fontWeight: 700 }}>See the full coverage map →</a></p></div></details>
              <details><summary>What if my team is on Cigna?</summary><div><p>Cigna is not in our in-network roster yet. Your team can still use the preferred employer cash-pay rate set in your partnership agreement, and Cigna is on our credentialing roadmap.</p></div></details>
              <details><summary>Can our employees use HSA or FSA dollars?</summary><div><p>Yes. A TeleDirectMD telehealth visit is an IRS-qualified medical expense.</p></div></details>
              <details><summary>Can we reimburse employees through ICHRA or QSEHRA?</summary><div><p>Yes. TeleDirectMD visits are HRA-eligible. Consult your benefits counsel on plan-design specifics.</p></div></details>
              <details><summary>Is this an ERISA-regulated health plan?</summary><div><p>Our partnership is structured as a voluntary, employee-pay-all arrangement designed to fall within the U.S. Department of Labor's voluntary-plan safe harbor — meaning no PEPM payment from the employer, no employer payroll deduction beyond optional voluntary deduction, and minimal employer involvement. Consult your benefits counsel for specifics in your situation.</p></div></details>
              <details><summary>What's the contract length?</summary><div><p>Month-to-month. Terminate at-will, any time. The agreement is one page.</p></div></details>
            </div>
          </div>
        </section>

        {/* ============ LEAD FORM ============ */}
        <section className="tdmd-emp-section">
          <div className="tdmd-emp-container">
            <LeadFormEmbed defaultPath="employer" />
          </div>
        </section>

      </div>

      {/* ============ COMPLIANCE FOOTER (above SiteFooter) ============ */}
      <section className="tdmd-emp-compliance">
        <div className="tdmd-emp-container">
          <div className="tdmd-emp-compliance-block">
            <h4>Service nature</h4>
            <p>TeleDirectMD provides direct-pay primary care telehealth and is <strong>not a health insurance product</strong>. This service complements, not replaces, your group health plan. Hospitalization, surgical care, specialty care, and emergency services are not provided. Maintain adequate health insurance.</p>
          </div>
          <div className="tdmd-emp-compliance-block">
            <h4>ERISA posture</h4>
            <p>Our employer endorsement program is structured as a voluntary, employee-pay-all arrangement designed to fall within Department of Labor voluntary-plan safe harbor guidance. Employers should consult benefits counsel for plan-design specifics.</p>
          </div>
          <div className="tdmd-emp-compliance-block">
            <h4>Outcomes and prescribing</h4>
            <p>Clinical outcomes vary by individual. No specific clinical or financial result is guaranteed. TeleDirectMD does not prescribe controlled substances via telehealth.</p>
          </div>
          <div className="tdmd-emp-compliance-block">
            <h4>Provider identity</h4>
            <p>Care provided by Parth Bhavsar, MD — Board-Certified Family Medicine Physician · NPI 1104323203 · Residency: University of Mississippi Medical Center, 2021 · Licensed in 41 states + DC.</p>
          </div>
        </div>
      </section>
    </>
  );
}
