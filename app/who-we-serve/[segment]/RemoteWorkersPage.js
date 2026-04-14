export default function RemoteWorkersPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/remote-workers`;
  const today = new Date().toISOString().split('T')[0];

  /* ── Conditions to link ─────────────────────────────────────────── */
  const conditions = [
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for sinus pressure, congestion, and facial pain — prescription sent to the nearest pharmacy wherever you\'re working this week.' },
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Fast antibiotic prescriptions for uncomplicated UTIs, sent electronically to any pharmacy in the U.S. — no need to find a local urgent care in an unfamiliar city.' },
    { name: 'Anxiety / Stress Management', slug: 'performance-anxiety-treatment-online', desc: 'Support for anxiety and work-related stress — common among remote workers dealing with isolation, blurred work-life boundaries, and the pressure of always-on availability.' },
    { name: 'Migraines', slug: 'migraine-refills-online', desc: 'Prescription migraine treatment and refills so a debilitating headache doesn\'t cost you a full day of remote work — regardless of which state you\'re in.' },
    { name: 'Hypertension / High Blood Pressure', slug: 'hypertension-refills-online', desc: 'Blood pressure medication refills with continuity of care across state lines — especially valuable for remote workers who relocate or travel frequently.' },
    { name: 'Acid Reflux / GERD', slug: 'acid-reflux-refills-online', desc: 'Ongoing prescription management for heartburn and reflux — without having to establish care with a new local physician every time you move.' },
    { name: 'Seasonal Allergies', slug: 'seasonal-allergies-treatment-online', desc: 'Treatment and prescription management for seasonal allergies — helpful when working in a new region with different pollen seasons and allergen exposures.' },
    { name: 'Hypothyroidism', slug: 'hypothyroidism-refills-online', desc: 'Thyroid medication refills with an established physician relationship, maintaining continuity of care even as your home base changes.' },
    { name: 'Acne', slug: 'acne-treatment-online', desc: 'Prescription acne treatment evaluated via secure video — no in-person dermatology appointment required, wherever your laptop is set up.' },
  ];

  /* ── High-remote-worker-population states to link ────────────────── */
  const featuredStates = [
    { name: 'California', slug: 'ca' },
    { name: 'Colorado', slug: 'co' },
    { name: 'Texas', slug: 'tx' },
    { name: 'Florida', slug: 'fl' },
    { name: 'Georgia', slug: 'ga' },
    { name: 'North Carolina', slug: 'nc' },
    { name: 'Arizona', slug: 'az' },
  ];

  /* ── FAQ data ────────────────────────────────────────────────────── */
  const faqItems = [
    {
      q: 'Can I use TeleDirectMD if I\'m working remotely in a different state than where I live?',
      a: 'Yes. Telehealth visits are regulated by the state where you are physically located at the time of your visit — not your home state or the state on your driver\'s license. TeleDirectMD is licensed in 41 states, so as long as you are in one of our covered states when your visit begins, you can be seen. This makes TeleDirectMD a natural fit for remote workers who travel between cities, move seasonally, or work from different states throughout the year. Simply tell us which state you are currently in when you request your visit.'
    },
    {
      q: 'Do I need insurance to use TeleDirectMD?',
      a: 'No. TeleDirectMD offers transparent cash-pay pricing starting at $49 per visit — no insurance required. You will know your cost before booking, with no surprise bills. We also accept insurance in select states. HSA and FSA cards are accepted. For remote workers without a local primary care physician — or those between insurance plans during a move — the flat-rate, self-pay model makes getting care straightforward regardless of your coverage situation.'
    },
    {
      q: 'Can TeleDirectMD be my primary care doctor if I move frequently?',
      a: 'TeleDirectMD can provide ongoing primary care-level services — routine prescription refills, follow-up visits, management of chronic conditions, and evaluation of new symptoms — across all 41 states where we are licensed. Because you are seeing the same board-certified physician regardless of your location, there is genuine continuity: your doctor knows your history, your medications, and your preferences. For remote workers and digital nomads who relocate frequently, this eliminates the need to establish care with a new local physician in every city.'
    },
    {
      q: 'How does a telehealth visit work for remote workers?',
      a: 'Request a visit at TeleDirectMD.com — no app download required, works on any smartphone, tablet, or computer. You\'ll provide your current state, describe your symptoms, and complete a brief health intake. A board-certified physician will connect with you via secure, HIPAA-compliant video. The visit typically takes 10–15 minutes. If a prescription is appropriate, it is sent electronically to any pharmacy you choose — including one near your current location, even if it\'s a city you\'ve just arrived in. Same-day visits are available, including evenings and weekends.'
    },
    {
      q: 'Can you prescribe medications and send them to any pharmacy?',
      a: 'Yes. When a prescription is clinically appropriate, TeleDirectMD sends it electronically to any pharmacy in the United States — CVS, Walgreens, Walmart, Rite Aid, or any independent pharmacy. Just tell us which location is most convenient for where you\'re working right now. We can also route prescriptions to mail-order pharmacies if you prefer. Note that TeleDirectMD does not prescribe controlled substances.'
    },
    {
      q: 'What conditions can TeleDirectMD treat for remote workers?',
      a: 'TeleDirectMD treats more than 60 conditions that are commonly needed by remote workers: sinus infections, UTIs, seasonal allergies, anxiety, migraines, hypertension, acid reflux, hypothyroidism, acne, and many more. We are particularly well-suited for ongoing prescription refills — managing chronic conditions across state lines without requiring patients to re-establish care with a new local doctor. Conditions requiring in-person examination, imaging, or laboratory testing that cannot be completed via video will be identified during your visit, and we can provide referral guidance.'
    },
    {
      q: 'Is TeleDirectMD HIPAA compliant? Is my health data secure?',
      a: 'Yes. TeleDirectMD is fully HIPAA-compliant. All video visits are conducted through an encrypted, secure platform. TeleDirectMD does not sell or share your health information with third parties. Medical records are stored securely in compliance with federal health privacy regulations. The platform is LegitScript certified, and no app download is required — your entire visit occurs within a secure browser session. For remote workers who may be on public Wi-Fi or shared networks, the platform\'s encryption provides an additional layer of protection for sensitive health conversations.'
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
          { "@type": "ListItem", "position": 3, "name": "Remote Workers", "item": pageUrl }
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
        "name": "Virtual Doctor for Remote Workers and Digital Nomads — TeleDirectMD",
        "description": "TeleDirectMD provides telehealth for remote workers and digital nomads across 41 states. See the same board-certified physician wherever you work. No local PCP required. Same-day visits, evenings & weekends. Starting at $49.",
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
          "cssSelector": ["h1", ".tdmd-hero-sub", "#remote-workers-faq .tdmd-faq-question"]
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
          <span aria-current="page">Remote Workers</span>
        </div>
      </nav>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="tdmd-hero" id="remote-workers-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Virtual Doctor for Remote Workers and Digital Nomads</h1>
              <p className="tdmd-hero-sub">Board-certified physician in 41 states. Same doctor, wherever you work. Same-day visits, evenings &amp; weekends.</p>
              <p>
                More than 35 million Americans now work remotely full-time or the majority of their working hours — a share that has grown dramatically since 2020 and shows no sign of reversing. Remote workers and digital nomads face a structural problem that traditional healthcare never anticipated: their work takes them across cities, states, and sometimes countries, making a stable relationship with a local primary care physician nearly impossible to maintain. TeleDirectMD provides continuity of care across 41 states with the same board-certified family medicine physician, starting at $49 per visit — no matter where your laptop is set up this week.
              </p>
              <ul className="tdmd-hero-benefits">
                <li>Board-certified family medicine physician — not a PA, not an NP, not an algorithm</li>
                <li>Licensed in 41 states — the same doctor follows you wherever you work</li>
                <li>Same-day visits, evenings &amp; weekends — schedule around your remote work hours</li>
                <li>Prescriptions sent to any pharmacy, anywhere in the U.S.</li>
                <li>Transparent cash-pay pricing starting at $49 — no surprise bills</li>
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
                <h2>Why Remote Workers Choose TeleDirectMD</h2>
                <ul>
                  <li>See a doctor from your home office, co-working space, or Airbnb — in any of 41 states</li>
                  <li>No need to find a new local PCP every time you relocate or travel for work</li>
                  <li>Prescriptions sent to any pharmacy near your current location</li>
                  <li>No insurance required — transparent cash-pay pricing starting at $49</li>
                  <li>HIPAA-compliant, secure video visits from any device — no app download required</li>
                </ul>
                <p className="tdmd-hero-note">Works on any smartphone, tablet, or computer. No app required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Problem ──────────────────────────────────────── */}
      <section className="tdmd-section" id="remote-workers-problem">
        <div className="tdmd-container">
          <h2>The Healthcare Gap Facing Remote Workers and Digital Nomads</h2>
          <p>
            The traditional healthcare system was built around geographic stability — you live in one place, you see a doctor in that place, and your records stay there. Remote workers have broken that model. According to Stanford economist Nick Bloom's research, remote and hybrid work now accounts for nearly 30% of all working days in the U.S., and the share of fully remote workers has stabilized well above pre-pandemic levels. A Pew Research Center survey found that among workers who can do their jobs remotely, the vast majority prefer to work remotely at least some of the time — and a substantial share work from different locations throughout the year.
          </p>
          <p>
            What that means for healthcare: <strong>remote workers and digital nomads often have no established local primary care physician</strong>. When they get sick or need a prescription refill, they face a menu of bad options — waiting weeks to get established with a new doctor, paying $150–$350 at an urgent care for a condition that doesn't require in-person evaluation, or simply delaying care and hoping the problem resolves. Mental health is a compounding factor: research published in <em>Applied Psychology</em> found that remote workers experience elevated rates of anxiety, difficulty disconnecting from work, and social isolation compared to office-based employees — yet they are less likely to have employer-sponsored mental health resources if they are self-employed or contracted.
          </p>
          <p>
            Routine prescription continuity is another critical gap. Moving between states or spending extended periods away from home means that an established prescription for a thyroid condition, hypertension, or migraines can be difficult to refill without an established physician relationship in the current state. TeleDirectMD eliminates that friction entirely.
          </p>
          <div className="tdmd-comparison-note">
            <p style={{ margin: 0 }}>
              <strong>The scenario:</strong> You've been working remotely from a new city for three weeks when you develop a sinus infection — the pressure behind your eyes, thick congestion, and facial pain that makes it hard to concentrate on video calls. You have no local doctor, and the nearest urgent care is showing a two-hour wait. You request a same-day visit on TeleDirectMD.com, connect with a board-certified physician from your home office, and have a prescription sent to the pharmacy two blocks away — all before your afternoon standup meeting.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. How TeleDirectMD Solves It ───────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="remote-workers-solution">
        <div className="tdmd-container">
          <h2>How TeleDirectMD Solves Healthcare Access for Remote Workers</h2>
          <p>
            TeleDirectMD was built for the realities of location-independent work — a practice model that provides genuine primary care continuity regardless of where you are working this month. Here's how we address the specific barriers remote workers face:
          </p>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>Continuity Across 41 States</h3>
              <p>Work from California one month and Colorado the next? TeleDirectMD is licensed in 41 states, and the same board-certified physician sees you every time. There's no re-establishing care, no transferring records, and no starting over with a new provider who doesn't know your history.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Same-Day, Evenings &amp; Weekends</h3>
              <p>Remote work schedules are flexible — so is TeleDirectMD. Same-day visits are available including evenings and weekends, making it easy to schedule a visit between meetings, during a lunch break, or at the end of a long work-from-home day without losing productive hours.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>No Local PCP Required</h3>
              <p>TeleDirectMD functions as your primary care physician relationship — one that travels with you. Ongoing prescription management, routine follow-up visits, and new symptom evaluations are all handled by the same doctor, building a real longitudinal care relationship that doesn't reset every time you change zip codes.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Prescriptions Sent Anywhere in the U.S.</h3>
              <p>We send prescriptions electronically to any pharmacy in the United States. Whether you're near a CVS, Walgreens, Walmart, Rite Aid, or a local independent pharmacy, just tell us which location is closest to where you're working right now. Mail-order pharmacy routing is also available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Conditions We Commonly Treat ─────────────────────── */}
      <section className="tdmd-section" id="remote-workers-conditions">
        <div className="tdmd-container">
          <h2>Conditions We Commonly Treat for Remote Workers</h2>
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
      <section className="tdmd-section tdmd-section-highlight" id="remote-workers-how-it-works">
        <div className="tdmd-container">
          <h2>How It Works — 3 Simple Steps</h2>
          <p>Getting care from TeleDirectMD is designed to fit around your remote work schedule — not the other way around. No commute to a clinic, no waiting room, no having to find a local doctor in an unfamiliar city.</p>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Request a Visit</h3>
                <p>Go to TeleDirectMD.com on any device — smartphone, tablet, or laptop. No app download required. Tell us your current state, describe your symptoms, and complete a brief health intake. Takes about 2 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Connect With Your Doctor</h3>
                <p>A board-certified family medicine physician connects with you via secure, encrypted video. We review your symptoms, your medical history, and any existing medications to determine the best treatment plan. Most visits take 10–15 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Get Treated — Prescription Sent to Your Pharmacy</h3>
                <p>If medication is appropriate, we send the prescription electronically to any pharmacy you choose — wherever you happen to be working today. Pick it up locally, or route to a mail-order pharmacy for delivery.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Transparent Pricing ──────────────────────────────── */}
      <section className="tdmd-section" id="remote-workers-pricing">
        <div className="tdmd-container">
          <h2>Transparent Pricing — No Surprise Bills</h2>
          <p>Telehealth is significantly more cost-effective than in-person alternatives for the non-emergency conditions remote workers most commonly need care for. A Penn Medicine study found telehealth visits average $96 compared to $509 for comparable in-person episodes. For remote workers paying out-of-pocket — or those between insurance plans during a move — the difference between a $49 telehealth visit and a $150–$350 urgent care visit is substantial. GoodRx data consistently shows telehealth as the most affordable option for straightforward non-emergency conditions.</p>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
              <h3>TeleDirectMD Video Visit</h3>
              <p className="tdmd-price-big">$49</p>
              <p className="tdmd-price-sub">Self-pay starting price per visit</p>
              <ul className="tdmd-price-includes">
                <li>Board-certified family medicine physician consultation</li>
                <li>Prescriptions sent to any U.S. pharmacy</li>
                <li>No hidden fees or surprise billing</li>
                <li>HSA &amp; FSA cards accepted</li>
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
              <p className="tdmd-price-footnote">Sources: Penn Medicine telehealth cost study; GoodRx telehealth pricing data 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Who We Are / Trust Signals ───────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="remote-workers-trust">
        <div className="tdmd-container">
          <h2>Who You're Seeing — A Real Doctor, Not an Algorithm</h2>
          <p>
            When you visit TeleDirectMD, you are seeing a licensed, board-certified physician — not a physician assistant, not a nurse practitioner, not a chatbot. <a href="/about" style={{ color: 'var(--tdmd-navy)', fontWeight: 700 }}>Dr. Parth Bhavsar, MD</a>, is a board-certified family medicine physician licensed in 41 states. Remote workers who use TeleDirectMD see the same physician across visits — building a genuine longitudinal care relationship that doesn't dissolve when you change your home base.
          </p>
          <ul className="tdmd-hero-benefits">
            <li>Board-certified in Family Medicine</li>
            <li>Licensed in 41 U.S. states — follows you wherever you work</li>
            <li>HIPAA-compliant, LegitScript certified platform — your data is encrypted and protected</li>
            <li>TeleDirectMD does not sell or share your health information</li>
            <li>No app download required — works on any device, any browser</li>
          </ul>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>
            TeleDirectMD is HIPAA-compliant. All visits are conducted via encrypted video, and medical records are stored securely. The platform is LegitScript certified.
          </p>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-faq" id="remote-workers-faq">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions — Telehealth for Remote Workers</h2>
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
              <h3>Your doctor, wherever you work — same physician, 41 states, starting at $49.</h3>
              <p>Request a same-day visit, connect with a board-certified family medicine physician by secure video, and get a prescription sent to the pharmacy nearest to wherever you're working today — no local PCP required.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/who-we-serve" className="tdmd-btn tdmd-btn-outline">Who We Serve</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. State Links ─────────────────────────────────────── */}
      <section className="tdmd-section" id="remote-workers-states">
        <div className="tdmd-container">
          <h2>Telehealth for Remote Workers — Available in These High-Concentration States</h2>
          <p>TeleDirectMD is licensed in 41 states. Here are states with some of the highest concentrations of remote workers where we can see you today:</p>
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
              <a href="/who-we-serve/gig-workers">Gig Workers</a>
              <a href="/who-we-serve/uninsured-affordable-care">Uninsured &amp; Affordable Care</a>
              <a href="/who-we-serve/truck-drivers">Truck Drivers</a>
              <a href="/who-we-serve/travel-nurses">Travel Nurses</a>
              <a href="/who-we-serve/small-business-owners">Small Business Owners</a>
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
      <section className="tdmd-section" id="remote-workers-references">
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li><a href="https://nbloom.people.stanford.edu/research" rel="nofollow noopener" target="_blank">Nick Bloom — Work From Home Research, Stanford University</a></li>
            <li><a href="https://www.pewresearch.org/social-trends/2022/02/16/covid-19-pandemic-continues-to-reshape-work-in-america/" rel="nofollow noopener" target="_blank">COVID-19 Pandemic Continues to Reshape Work in America — Pew Research Center</a></li>
            <li><a href="https://www.pennmedicine.org/news/news-releases/2019/december/study-finds-telemedicine-visits-cost-far-less-than-office-visits" rel="nofollow noopener" target="_blank">Study finds telemedicine visits cost far less than office visits — Penn Medicine</a></li>
            <li><a href="https://www.goodrx.com/healthcare-access/telehealth/how-much-does-a-telehealth-visit-cost" rel="nofollow noopener" target="_blank">How Much Does a Telehealth Visit Cost? — GoodRx</a></li>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/33507490/" rel="nofollow noopener" target="_blank">Mental health consequences of remote work: a systematic review — Applied Psychology (PubMed)</a></li>
            <li><a href="https://www.kff.org/uninsured/issue-brief/key-facts-about-the-uninsured-population/" rel="nofollow noopener" target="_blank">Key Facts About the Uninsured Population — KFF</a></li>
            <li><a href="https://www.bls.gov/news.release/atus.nr0.htm" rel="nofollow noopener" target="_blank">American Time Use Survey — U.S. Bureau of Labor Statistics</a></li>
            <li><a href="https://www.upwork.com/press/releases/upwork-study-finds-36-of-the-us-workforce-freelance-amid-digital-revolution" rel="nofollow noopener" target="_blank">Future Workforce Report — Upwork</a></li>
          </ul>
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-footnote" id="remote-workers-disclaimer">
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
