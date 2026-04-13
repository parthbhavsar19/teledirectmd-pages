export default function SmallBusinessOwnersPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/small-business-owners`;
  const today = new Date().toISOString().split('T')[0];

  /* ── Conditions to link ─────────────────────────────────────────── */
  const conditions = [
    { name: 'Hypertension / High Blood Pressure', slug: 'hypertension-refills-online', desc: 'Ongoing blood pressure medication management and refills without taking half a day off to sit in a waiting room. Keep your numbers in check and your business running.' },
    { name: 'Diabetes Management', slug: 'diabetes-refills-online', desc: 'Medication refills and routine management for Type 2 diabetes — a condition that demands consistent monitoring, not just crisis care when something goes wrong.' },
    { name: 'Anxiety / Stress', slug: 'performance-anxiety-treatment-online', desc: 'Support for anxiety, chronic stress, and the psychological weight of running a business — financial pressure, managing employees, and the constant uncertainty of self-employment.' },
    { name: 'Acid Reflux / GERD', slug: 'acid-reflux-refills-online', desc: 'Prescription management for heartburn and reflux — especially common when meals are rushed, irregular, or eaten at a desk between client calls.' },
    { name: 'Migraines', slug: 'migraine-refills-online', desc: 'Prescription migraine treatment and refills so a debilitating headache doesn\'t cost you a day of billable hours or force you to reschedule clients.' },
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Fast evaluation and antibiotic prescriptions sent to the nearest pharmacy — without closing your business for a clinic visit that could have been handled in a video call.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Treatment for sinus pressure, congestion, and post-nasal drip so you can get back to work — instead of suffering through a full week waiting for an appointment.' },
    { name: 'High Cholesterol', slug: 'hyperlipidemia-refills-online', desc: 'Ongoing statin and cholesterol medication management for self-employed professionals who don\'t have time for routine visits but can\'t afford to skip preventive care either.' },
    { name: 'Hypothyroidism', slug: 'hypothyroidism-refills-online', desc: 'Thyroid medication refills and routine management — keeping your energy, focus, and metabolism stable without the overhead of frequent in-person appointments.' },
    { name: 'Smoking Cessation', slug: 'smoking-cessation-treatment-online', desc: 'Prescription cessation support — nicotine replacement, Chantix/varenicline management, and counseling resources — without scheduling a separate appointment just to get started.' },
  ];

  /* ── High-small-business-population states to link ───────────────── */
  const featuredStates = [
    { name: 'Texas', slug: 'tx' },
    { name: 'California', slug: 'ca' },
    { name: 'Florida', slug: 'fl' },
    { name: 'Georgia', slug: 'ga' },
    { name: 'North Carolina', slug: 'nc' },
    { name: 'Ohio', slug: 'oh' },
    { name: 'Pennsylvania', slug: 'pa' },
  ];

  /* ── FAQ data ────────────────────────────────────────────────────── */
  const faqItems = [
    {
      q: 'How much does TeleDirectMD cost for small business owners without insurance?',
      a: 'TeleDirectMD visits start at $49 self-pay — no insurance required. You know the cost before you book, with no surprise bills afterward. For comparison, a Penn Medicine study published in JAMA Network Open found that telehealth visits average $96 compared to $509 for equivalent in-person episodes. Urgent care without insurance typically runs $150–$350, and an ER visit can reach $500–$3,000 or more. For a self-employed professional without employer benefits, a $49 telehealth visit is often the most cost-effective option for the vast majority of non-emergency conditions. We also accept HSA and FSA funds, which many small business owners use to manage out-of-pocket healthcare costs.'
    },
    {
      q: 'Can TeleDirectMD manage ongoing conditions like high blood pressure or diabetes?',
      a: 'Yes. Chronic condition management — including hypertension, Type 2 diabetes, hypothyroidism, high cholesterol, and other ongoing conditions — is one of the most common and valuable uses of telehealth for self-employed professionals. Rather than scheduling a dedicated appointment every time you need a medication refill or a routine check-in, you can connect with a board-certified physician via video on your schedule. TeleDirectMD can review your history, manage refills, and advise on treatment adjustments. Conditions requiring lab work or in-person evaluation will be triaged appropriately, with referral guidance when needed.'
    },
    {
      q: 'Do I need to take time off work for a telehealth visit?',
      a: 'No. TeleDirectMD is designed specifically for people who cannot afford to lose half a business day to a waiting room. Same-day visits are available, including evenings and weekends. A typical visit takes 10–15 minutes via secure video on your smartphone — no app download required. You can connect between client meetings, during a lunch break, after business hours, or on a Saturday morning. There is no commute, no waiting room, and no lost revenue from closing your business for the afternoon.'
    },
    {
      q: 'Is TeleDirectMD available in my state?',
      a: 'TeleDirectMD is licensed in 41 states. The states we serve include Texas, California, Florida, Georgia, North Carolina, Ohio, Pennsylvania, and 34 more across the country. The states we do not currently serve are New York, Alaska, Arkansas, Massachusetts, New Mexico, Oregon, Rhode Island, Vermont, and Virginia. As long as you are physically located in one of our covered states at the time of your visit, you can be seen — regardless of where your business is registered or where you primarily live. Visit our States We Serve page for the complete list.'
    },
    {
      q: 'Can you prescribe medications during a telehealth visit?',
      a: 'Yes, when clinically appropriate. TeleDirectMD can prescribe a wide range of non-controlled medications, including antibiotics, blood pressure medications, cholesterol management drugs, thyroid medications, migraine treatments, acid reflux medications, and more. Prescriptions are sent electronically to any pharmacy you choose — CVS, Walgreens, Walmart, Rite Aid, or any independent pharmacy near you. TeleDirectMD does not prescribe controlled substances. If your condition requires a medication that cannot be prescribed via telehealth, we will advise you accordingly and provide referral guidance.'
    },
    {
      q: 'How does TeleDirectMD compare to urgent care for cost and convenience?',
      a: 'For the conditions TeleDirectMD treats, the comparison is straightforward. Urgent care without insurance typically costs $150–$350 and requires a trip to a physical location with wait times that can stretch to an hour or more. TeleDirectMD starts at $49, connects you with a board-certified physician via video from wherever you are, and a typical visit takes 10–15 minutes. GoodRx data consistently shows telehealth as the most affordable option for non-emergency conditions. The one trade-off: telehealth is not appropriate for conditions requiring physical examination, imaging, or lab work at the time of visit. For those, we will refer you to the appropriate in-person resource.'
    },
    {
      q: 'Can I see the same doctor every time?',
      a: 'TeleDirectMD is a solo physician practice. When you visit TeleDirectMD, you are seeing Dr. Parth Bhavsar, MD — a board-certified family medicine physician licensed in 41 states. This means continuity of care is built into the model. Your physician knows your history, your medications, and your ongoing conditions from visit to visit — which is meaningfully different from large telehealth platforms that route you to whoever is available. Consistent care with a physician who knows your history is especially valuable for small business owners managing chronic conditions over time.'
    },
    {
      q: 'What forms of payment does TeleDirectMD accept?',
      a: 'TeleDirectMD accepts credit cards, debit cards, HSA (Health Savings Account) funds, and FSA (Flexible Spending Account) funds. Many self-employed professionals and small business owners use HSA or FSA accounts to pay for healthcare expenses tax-advantaged — and TeleDirectMD visits qualify. Insurance is also accepted in select states. You will see your payment options clearly at checkout before completing your booking, with no hidden fees.'
    },
  ];

  /* ── JSON-LD Schema ──────────────────────────────────────────────── */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "Who We Serve", "item": `${baseUrl}/who-we-serve` },
          { "@type": "ListItem", "position": 3, "name": "Small Business Owners", "item": pageUrl }
        ]
      },
      {
        "@type": "MedicalOrganization",
        "name": "TeleDirectMD",
        "url": baseUrl,
        "logo": `${baseUrl}/assets/brand/teledirectmd-logo.png`,
        "telephone": "+1-678-956-1855",
        "medicalSpecialty": "GeneralPractice",
        "availableService": {
          "@type": "MedicalTherapy",
          "name": "Telehealth Consultations"
        },
        "areaServed": ["AL","AZ","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NC","ND","OH","OK","PA","SC","SD","TN","TX","UT","WA","WV","WI","WY"]
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}/about#physician`,
        "name": "Parth Bhavsar, MD",
        "medicalSpecialty": "FamilyMedicine",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "TeleDirectMD"
        },
        "licensedIn": ["AL","AZ","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NC","ND","OH","OK","PA","SC","SD","TN","TX","UT","WA","WV","WI","WY"]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": "Telehealth for Small Business Owners and Self-Employed Professionals",
        "description": "TeleDirectMD offers telehealth for small business owners and self-employed professionals across 41 states. No insurance required. Transparent $49 visits with a board-certified physician. Same-day visits, evenings & weekends.",
        "inLanguage": "en-US",
        "breadcrumb": { "@id": `${pageUrl}#breadcrumbs` },
        "author": { "@id": `${baseUrl}/about#physician` },
        "datePublished": today,
        "dateModified": today,
        "publisher": {
          "@type": "Organization",
          "name": "TeleDirectMD",
          "url": baseUrl
        },
        "audience": {
          "@type": "MedicalAudience",
          "audienceType": "Patient"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".tdmd-hero-sub", "#small-business-owners-faq .tdmd-faq-question"]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ──────────────────────────────────────────── */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/who-we-serve">Who We Serve</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">Small Business Owners</span>
        </div>
      </nav>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="tdmd-hero" id="small-business-owners-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Telehealth for Small Business Owners and Self-Employed Professionals</h1>
              <p className="tdmd-hero-sub">Licensed physician in 41 states. No insurance required. Same-day visits, evenings &amp; weekends.</p>
              <p>
                There are more than 34 million small businesses in the United States — nearly 99.9% of all U.S. businesses. But small business owners and self-employed professionals are among the most likely to delay their own healthcare. Without employer benefits, many are navigating expensive individual marketplace plans or going without insurance entirely. With ACA enhanced subsidies expiring at the end of 2025, annual premiums more than doubled for many marketplace enrollees — rising from an average of $888 to $1,904 per year according to Kaiser Family Foundation estimates. TeleDirectMD offers transparent cash-pay visits starting at $49 with a board-certified physician, same-day availability including evenings and weekends, and coverage across 41 states — built for professionals whose time is their most valuable asset.
              </p>
              <ul className="tdmd-hero-benefits">
                <li>Board-certified physician — not a PA, not an NP, not an algorithm</li>
                <li>Licensed in 41 states — wherever you run your business</li>
                <li>No waiting rooms — same-day visits, evenings &amp; weekends</li>
                <li>Prescriptions sent to any pharmacy near you</li>
                <li>Transparent cash-pay pricing starting at $49 — HSA/FSA accepted</li>
              </ul>
              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a>
              </div>
              <p className="tdmd-reviewed">
                Last reviewed on {today} by{' '}
                <a className="tdmd-author-link" href="/about" aria-label="About Parth Bhavsar, MD">
                  Parth Bhavsar, MD
                </a>
              </p>
            </div>

            <div className="tdmd-hero-side">
              <div className="tdmd-hero-card">
                <h2>Why Small Business Owners Choose TeleDirectMD</h2>
                <ul>
                  <li>See a doctor from your office, home, or job site — no commute required</li>
                  <li>Get prescriptions sent to any pharmacy near you</li>
                  <li>No insurance required — transparent cash-pay pricing starting at $49</li>
                  <li>Same-day visits, evenings &amp; weekends — no lost business hours</li>
                  <li>HIPAA-compliant, secure video visits from your phone or laptop</li>
                </ul>
                <p className="tdmd-hero-note">No app download required. Works on any device with a camera.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Problem ──────────────────────────────────────── */}
      <section className="tdmd-section" id="small-business-owners-problem">
        <div className="tdmd-container">
          <h2>The Healthcare Access Problem Facing Small Business Owners</h2>
          <p>
            Small business owners and self-employed professionals are the backbone of the American economy — but they're also among the most underserved when it comes to healthcare access. Unlike employees of mid-size and large companies, the self-employed have no employer-sponsored health plan, no sick days, and no HR department to navigate benefits. Every hour spent in a waiting room is revenue not earned, a client not served, or an operation not managed.
          </p>
          <p>
            The insurance picture has become significantly worse in 2026. With ACA enhanced premium tax credits expiring at the end of 2025, KFF estimated marketplace enrollees would pay <strong>114% more on average</strong> for their monthly premiums without the subsidy. In 2025, more than 4.4 million of the 5.2 million small business owners and self-employed entrepreneurs enrolled in Marketplace coverage had their premiums reduced by the enhanced credit — meaning millions lost meaningful relief simultaneously. Annual premiums rose from an average of $888 to $1,904 for subsidized enrollees.
          </p>
          <p>
            The mental and physical toll is well-documented. According to a Truist survey, <strong>57% of small business owners are somewhat or extremely stressed</strong>, and 45% report increased anxiety. A Nav report found that <strong>65% of small business owners attribute physical ailments to running their business</strong> — with stress ranking as the second most common complaint. The conditions that go unmanaged — high blood pressure, diabetes, anxiety, chronic migraines — don't get better when ignored. They get more expensive.
          </p>
          <div className="tdmd-comparison-note">
            <p style={{ margin: 0 }}>
              <strong>The scenario:</strong> You own a small HVAC company in Georgia. It's Tuesday afternoon, you've got two service calls left and a proposal due before end of day. You've been dealing with a sinus infection for four days — the pressure, the congestion, the fatigue — and it's not improving on its own. You can't close the business for the afternoon to sit in urgent care for two hours. With TeleDirectMD, you request a same-day visit during your lunch break, connect with a board-certified physician via video from your truck, and have a prescription waiting at the pharmacy before your next service call.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. How TeleDirectMD Solves It ───────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="small-business-owners-solution">
        <div className="tdmd-container">
          <h2>How TeleDirectMD Solves Healthcare for the Self-Employed</h2>
          <p>
            TeleDirectMD was built for people who can't structure their lives around a 9-to-5 healthcare system — and that includes the tens of millions of small business owners, sole proprietors, independent contractors, and self-employed professionals across the country. Here's how we address the specific barriers this community faces:
          </p>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>No Lost Business Hours</h3>
              <p>Same-day visits are available, including evenings and weekends. A typical visit takes 10–15 minutes via secure video. You don't need to close your shop, cancel appointments, or lose a day of billable hours to get a prescription refill or treat a sinus infection.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Transparent $49 Cash-Pay Pricing</h3>
              <p>No insurance? No problem. TeleDirectMD starts at $49 per visit — a fraction of urgent care without insurance. You know your cost upfront, before you book. HSA and FSA funds are accepted, making this a tax-advantaged healthcare option for the self-employed.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Chronic Condition Management Without the Overhead</h3>
              <p>High blood pressure, diabetes, high cholesterol, hypothyroidism — managing chronic conditions is one of the most common uses of TeleDirectMD for small business owners. Get medication refills and routine management without scheduling a dedicated in-person visit every time.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>41-State Coverage — Works Where You Work</h3>
              <p>Whether you run a business from home in Ohio, travel for client work across multiple states, or operate in a state with limited local healthcare options, TeleDirectMD is licensed in 41 states. The same physician sees you wherever you are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Conditions We Commonly Treat ─────────────────────── */}
      <section className="tdmd-section" id="small-business-owners-conditions">
        <div className="tdmd-container">
          <h2>Conditions We Commonly Treat for Small Business Owners</h2>
          <p>
            Each condition below is linked to a detailed treatment page with information about what to expect, eligibility, medications, and how telehealth works for that specific condition.
          </p>
          <div style={{ display: 'grid', gap: '0.85rem', marginTop: '1rem' }}>
            {conditions.map((c) => (
              <a
                key={c.slug}
                href={`/${c.slug}`}
                className="tdmd-card"
                style={{ textDecoration: 'none', color: 'var(--tdmd-text)', borderLeft: '4px solid var(--tdmd-teal)' }}
              >
                <h3 style={{ margin: '0 0 0.3rem', color: 'var(--tdmd-navy)', fontSize: '1.05rem' }}>{c.name}</h3>
                <p style={{ margin: 0, fontSize: '0.94rem', color: 'var(--tdmd-muted)', lineHeight: '1.45' }}>{c.desc}</p>
              </a>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All 60 Conditions We Treat</a>
          </div>
        </div>
      </section>

      {/* ── 5. How It Works ─────────────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="small-business-owners-how-it-works">
        <div className="tdmd-container">
          <h2>How It Works — 3 Simple Steps</h2>
          <p>Getting care from TeleDirectMD is designed to fit around your schedule — not the other way around.</p>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Request a Visit</h3>
                <p>Go to TeleDirectMD.com on your phone, tablet, or computer and request a visit. No app download needed. Tell us your symptoms and which state you're currently located in. Takes about 2 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Connect With Your Doctor</h3>
                <p>A board-certified physician will connect with you via secure, HIPAA-compliant video. Your physician will review your symptoms, medical history, and current medications, then determine the best treatment plan. Most visits take 10–15 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Get Treated — Prescriptions Sent to Your Pharmacy</h3>
                <p>If medication is clinically appropriate, your prescription is sent electronically to the pharmacy of your choice — CVS, Walgreens, Walmart, Rite Aid, or any independent pharmacy. Pick it up on your way to your next meeting or job site.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Transparent Pricing ──────────────────────────────── */}
      <section className="tdmd-section" id="small-business-owners-pricing">
        <div className="tdmd-container">
          <h2>Transparent Pricing — No Surprise Bills</h2>
          <p>For small business owners without employer-sponsored coverage, the cost difference between telehealth and traditional care is significant. A Penn Medicine study published in <em>JAMA Network Open</em> found that telehealth visits average $96 compared to $509 for in-person episodes — five times less expensive. For a self-employed professional paying full freight on healthcare, the math matters.</p>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
              <h3>TeleDirectMD Video Visit</h3>
              <p className="tdmd-price-big">$49</p>
              <p className="tdmd-price-sub">Self-pay starting price per visit</p>
              <ul className="tdmd-price-includes">
                <li>Board-certified physician consultation</li>
                <li>Prescriptions sent to any U.S. pharmacy</li>
                <li>No hidden fees or surprise billing</li>
                <li>HSA and FSA funds accepted</li>
                <li>Insurance accepted in select states</li>
              </ul>
            </div>
            <div className="tdmd-price-chart" role="group" aria-label="Cost comparison">
              <h3>How We Compare</h3>
              <p className="tdmd-price-caption">Typical costs without insurance. Actual costs vary by location.</p>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>TeleDirectMD</span><span>$49</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill tdmd-bar-fill-tdmd" style={{ '--w': 10 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Telehealth avg.</span><span>$40–$90</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 18 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Urgent Care</span><span>$150–$350</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 50 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Emergency Room</span><span>$500–$3,000+</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 100 }} /></div>
              </div>
              <p className="tdmd-price-footnote">Sources: Penn Medicine / JAMA Network Open telehealth cost study (2026); GoodRx telehealth pricing data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Who We Are / Trust Signals ───────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="small-business-owners-trust">
        <div className="tdmd-container">
          <h2>Who You're Seeing — A Real Doctor, Not a Platform</h2>
          <p>
            When you visit TeleDirectMD, you're seeing a licensed, board-certified physician — not a physician assistant, not a nurse practitioner, not a chatbot routing your case to whoever is available. <a href="/about" style={{ color: 'var(--tdmd-navy)', fontWeight: 700 }}>Dr. Parth Bhavsar, MD</a>, is a board-certified family medicine physician licensed across 41 states. Because TeleDirectMD is a solo physician practice, you're seeing the same doctor every visit — building continuity of care that matters for small business owners managing ongoing conditions over time.
          </p>
          <ul className="tdmd-hero-benefits">
            <li>Board-certified in Family Medicine</li>
            <li>Licensed in 41 U.S. states</li>
            <li>LegitScript certified — verified by the gold standard for online healthcare</li>
            <li>HIPAA-compliant platform — your data is encrypted and protected</li>
            <li>TeleDirectMD does not sell or share your health information</li>
          </ul>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>
            All visits are conducted via encrypted video. Medical records are stored securely. TeleDirectMD is HIPAA-compliant and LegitScript certified.
          </p>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-faq" id="small-business-owners-faq">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions — Telehealth for Small Business Owners</h2>
          <div className="tdmd-faq-list" role="list">
            {faqItems.map((item, i) => (
              <details key={i} className="tdmd-faq-item" role="listitem">
                <summary className="tdmd-faq-question">{item.q}</summary>
                <div className="tdmd-faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA ───────────────────────────────────────── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>Get seen today — no office visit, no waiting room, no lost business hours.</h3>
              <p>Request a same-day visit, connect with a board-certified physician via secure video, and get a prescription sent to the pharmacy of your choice — all without closing your business for the afternoon.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/who-we-serve" className="tdmd-btn tdmd-btn-outline">Who We Serve</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. State Links ─────────────────────────────────────── */}
      <section className="tdmd-section" id="small-business-owners-states">
        <div className="tdmd-container">
          <h2>Telehealth for Small Business Owners — Available in These States</h2>
          <p>TeleDirectMD is licensed in 41 states. Here are some of the states with the highest concentrations of small businesses and self-employed professionals where we can see you today:</p>
          <div className="tdmd-other-states-grid">
            {featuredStates.map((s) => (
              <a key={s.slug} className="tdmd-other-state-link" href={`/${s.slug}`}>
                {s.name}
              </a>
            ))}
          </div>
          <p style={{ marginTop: '0.75rem' }}>
            <a href="/states-we-serve" style={{ color: 'var(--tdmd-navy)', fontWeight: 700, textDecoration: 'underline' }}>View all 41 states we serve →</a>
          </p>
        </div>
      </section>

      {/* ── 11. Cross-links to other audiences ──────────────────── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <div className="tdmd-inline-links">
            <h3>Other Communities We Serve</h3>
            <p className="tdmd-link-cloud">
              <a href="/who-we-serve/uninsured-affordable-care">Uninsured &amp; Affordable Care</a>
              <a href="/who-we-serve/gig-workers">Gig Workers</a>
              <a href="/who-we-serve/remote-workers">Remote Workers</a>
              <a href="/who-we-serve/truck-drivers">Truck Drivers</a>
              <a href="/who-we-serve/travel-nurses">Travel Nurses</a>
              <a href="/who-we-serve">Who We Serve Hub</a>
            </p>
          </div>
          <div className="tdmd-inline-links" style={{ marginTop: '1rem' }}>
            <h3>More from TeleDirectMD</h3>
            <p className="tdmd-link-cloud">
              <a href="/what-we-treat">What We Treat</a>
              <a href="/states-we-serve">States We Serve</a>
              <a href="/insurance">Insurance &amp; Pricing</a>
              <a href="/faq">FAQs</a>
              <a href="/book-online">Book a Visit</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── 12. References ──────────────────────────────────────── */}
      <section className="tdmd-section" id="small-business-owners-references">
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li><a href="https://advocacy.sba.gov/2024/07/23/frequently-asked-questions-about-small-business-2024/" rel="nofollow noopener" target="_blank">Frequently Asked Questions About Small Business, 2024 — SBA Office of Advocacy</a></li>
            <li><a href="https://advocacy.sba.gov/2024/11/19/new-advocacy-report-shows-small-business-total-reaches-34-8-million-accounting-for-2-6-million-net-new-jobs-in-latest-year-of-data/" rel="nofollow noopener" target="_blank">New Advocacy Report Shows Small Business Total Reaches 34.8 Million — SBA Office of Advocacy (2024)</a></li>
            <li><a href="https://ogletree.com/insights-resources/blog-posts/enhanced-aca-health-insurance-subsidies-likely-to-end/" rel="nofollow noopener" target="_blank">Enhanced ACA Health Insurance Subsidies Likely to End — Ogletree</a></li>
            <li><a href="https://kevinmd.com/2026/04/how-expiring-aca-enhanced-premium-tax-credits-hurt-business.html" rel="nofollow noopener" target="_blank">How Expiring ACA Enhanced Premium Tax Credits Hurt Business — KevinMD (2026)</a></li>
            <li><a href="https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits" rel="nofollow noopener" target="_blank">Study Finds Telemedicine Visits Cost Far Less Than Office Visits — Penn Medicine / JAMA Network Open</a></li>
            <li><a href="https://www.goodrx.com/healthcare-access/telehealth/how-much-does-a-telehealth-visit-cost" rel="nofollow noopener" target="_blank">How Much Does a Telehealth Visit Cost? — GoodRx</a></li>
            <li><a href="https://lifehackmethod.com/blog/entrepreneur-mental-health-statistics/" rel="nofollow noopener" target="_blank">Entrepreneur Mental Health and Burnout Statistics — Lifehack Method (citing Truist survey data)</a></li>
            <li><a href="https://www.nav.com/blog/report-mapping-mental-health-in-small-business-ownership/" rel="nofollow noopener" target="_blank">Report: Mapping Mental Health in Small Business Ownership — Nav (2026)</a></li>
            <li><a href="https://www.kff.org/uninsured/issue-brief/key-facts-about-the-uninsured-population/" rel="nofollow noopener" target="_blank">Key Facts About the Uninsured Population — KFF</a></li>
          </ul>
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-footnote" id="small-business-owners-disclaimer">
        <div className="tdmd-container">
          <h2>Medical Disclaimer</h2>
          <p>
            This page is for informational purposes only and does not constitute medical advice. TeleDirectMD provides telehealth services for non-emergency conditions in adults 18 and older who are physically located in one of our licensed states at the time of the visit. TeleDirectMD does not prescribe controlled substances. If you are experiencing a medical emergency, call 911 immediately.
          </p>
          <p>
            Not all conditions are appropriate for telehealth. Some symptoms require in-person evaluation, imaging, or laboratory testing that cannot be completed via video visit. TeleDirectMD will advise you if your condition requires in-person care and can provide referral guidance as needed.
          </p>
        </div>
      </section>
    </>
  );
}
