export default function FlightAttendantsPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/flight-attendants`;
  const today = new Date().toISOString().split('T')[0];

  /* Accurate current footprint: 42 states + DC (includes VT and DC per current licensing). */
  const areaServed = ["AL","AZ","CA","CO","CT","DC","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NC","ND","OH","OK","PA","SC","SD","TN","TX","UT","VT","WA","WV","WI","WY"];

  /* ── Conditions to link — reframed for the cabin-crew reality ─────── */
  const conditions = [
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Long duty days and limited lavatory breaks make it easy to hold off on fluids and bathroom trips — behaviors associated with UTIs, a common complaint among cabin crew. We can send an antibiotic to a pharmacy near your layover hotel when appropriate — no hunting for an urgent care in a city you land in tonight and leave tomorrow.' },
    { name: 'Sinus & Ear Congestion', slug: 'sinus-infection-treatment-online', desc: 'Repeated cabin pressurization cycles aggravate sinus pressure, ear blockage, and facial pain. We evaluate and treat sinus infections so you are not flying multiple pressure changes a day with an untreated blockage.' },
    { name: 'Prescription Refills', slug: 'hypertension-refills-online', desc: 'When you are almost never in your home city during pharmacy or clinic hours, refills lapse. We review your history and route blood-pressure, thyroid, asthma, reflux, and allergy refills to any U.S. pharmacy near your current position. No controlled substances.' },
    { name: 'Motion Sickness & Nausea', slug: 'travel-medicine-treatment-online', desc: 'Turbulence-heavy rotations, back-of-the-clock flying, and rough approaches trigger nausea. We counsel on and prescribe non-controlled motion-sickness options where appropriate as part of our travel-medicine service.' },
    { name: "Traveler's Diarrhea (standby)", slug: 'travel-medicine-treatment-online', desc: 'International layovers and unfamiliar food and water are a recurring problem. We can provide standby antibiotic therapy guidance for traveler\u2019s diarrhea before a trip so you are not sick and stranded on a turn.' },
    { name: "Women's Health", slug: 'bacterial-vaginosis-treatment-online', desc: 'BV, yeast infections, and birth-control refills are difficult to manage on a schedule that keeps you out of your home city for days at a time. We handle these by secure video without an in-person visit where clinically appropriate.' },
    { name: 'Seasonal Allergies', slug: 'seasonal-allergies-treatment-online', desc: 'A different base, a different city, and a different pollen season every few days. We evaluate and prescribe allergy treatment that works regardless of where this week\u2019s rotation takes you.' },
    { name: 'Skin, Bites & Rashes', slug: 'contact-dermatitis-treatment-online', desc: 'Hotel-room bites, contact rashes, and sun exposure from high-altitude UV are common. Send a photo, get evaluated, and get a prescription to a pharmacy near your hotel.' },
  ];

  /* ── Hub / crew-heavy base cities (not "assignment states") ──────── */
  const featuredBases = [
    { name: 'Georgia (ATL)', slug: 'ga' },
    { name: 'Texas (DFW / IAH)', slug: 'tx' },
    { name: 'Illinois (ORD)', slug: 'il' },
    { name: 'Florida (MIA / MCO)', slug: 'fl' },
    { name: 'North Carolina (CLT)', slug: 'nc' },
    { name: 'Arizona (PHX)', slug: 'az' },
    { name: 'Colorado (DEN)', slug: 'co' },
  ];

  /* ── FAQ data — cabin-crew specific ─────────────────────────────── */
  const faqItems = [
    {
      q: 'Can I see a doctor from my layover hotel?',
      a: 'Yes. As long as you are physically located in one of the 42 states or Washington, D.C. where TeleDirectMD is licensed at the time of your visit, you can connect by secure video from your hotel room, the crew lounge, or anywhere with a signal. You do not need to be a resident of that state \u2014 only physically present in it during the visit. This is the entire reason cabin crew use TeleDirectMD: you are rarely in your home city when a clinic is open, but you are almost always in a covered state during a layover. Tell us where you are landing and we will confirm eligibility before you book.'
    },
    {
      q: 'Do you provide FAA medical certificates or fitness-to-fly clearance?',
      a: 'No. TeleDirectMD does not issue FAA medical certificates, does not perform aeromedical examinations, and does not make fitness-to-fly or return-to-duty determinations. Those must be handled by an FAA-designated Aviation Medical Examiner (AME); you can locate one through the FAA\u2019s official AME locator. What we do provide is treatment for the everyday, non-emergency conditions \u2014 a UTI, a sinus infection, a medication refill \u2014 that are separate from your medical certification. If a condition or a medication could affect your certification or duty status, that determination is between you and your AME, and you are responsible for following your airline\u2019s and the FAA\u2019s reporting rules.'
    },
    {
      q: 'How do you handle recurrent UTIs, which are common in this job?',
      a: 'Urinary tract infections are a frequently reported complaint among cabin crew. The likely contributors are behavioral rather than exotic: long duty periods and limited lavatory access make it easy to delay fluids and bathroom trips, both of which are associated with UTIs. For an uncomplicated UTI in an eligible patient, we evaluate symptoms and history by video and, when clinically appropriate, prescribe a short course of a first-line antibiotic consistent with current IDSA guidance, sent to a pharmacy near wherever you are. If your history suggests a complicated or recurrent pattern that warrants a urine culture or in-person workup, we will tell you that directly and help you find local care rather than treat blindly.'
    },
    {
      q: 'Can you refill my regular medications when I am never in my home city?',
      a: 'Yes, for non-controlled maintenance medications. If you are established on a medication \u2014 blood pressure, thyroid, asthma, acid reflux, seasonal allergy, or birth control, for example \u2014 we can review your history and send a refill electronically to any pharmacy in the United States, including one near your current layover or base. This is the single biggest reason crew members lose access to their own care: pharmacies and clinics keep hours you are almost never home for. TeleDirectMD does not prescribe controlled substances of any kind, so scheduled medications must be managed by a local prescriber.'
    },
    {
      q: 'Is this for in-flight medical emergencies?',
      a: 'No. TeleDirectMD is for your own non-emergency care on the ground \u2014 not for managing a passenger or crew emergency in the air. In-flight emergencies are handled through your airline\u2019s onboard ground-based medical support service, such as MedAire\u2019s MedLink or STAT-MD, which your carrier contracts specifically for that purpose, and through the crew and any responding medical volunteers onboard. If you are on the ground and experiencing a medical emergency \u2014 chest pain, difficulty breathing, stroke symptoms, severe injury \u2014 call 911 or your local emergency number immediately. TeleDirectMD does not replace emergency care.'
    },
    {
      q: 'Do I need insurance, and what does it cost?',
      a: 'No insurance is required. TeleDirectMD uses transparent cash-pay pricing at $79 per visit, and you know the price before you book \u2014 no surprise bills. Many crew members have employer coverage, but it is often impractical on the road: a network that varies by state, a high deductible, or the simple fact that you cannot get to an in-network clinic while you are on a three-day trip. We accept credit and debit cards, HSA, and FSA. For the off-hours, layover, reserve, and part-time gaps this service is built for, a flat $79 is usually the fastest and most predictable option.'
    },
    {
      q: 'Will this compete with the free clinic or virtual care my airline already gives me?',
      a: 'It is meant to fill the gap those benefits leave, not replace them. Several major carriers offer excellent onsite airport clinics and employee virtual care, and if yours does and it is convenient, use it. But those clinics keep business hours at your base, and employer virtual care can be tied to a plan that is awkward to use mid-trip. TeleDirectMD is most useful when you are on a layover at 9 p.m. in a city that is not your base, when you are on reserve and cannot plan around clinic hours, when you fly for a regional or smaller carrier without a rich onsite-clinic benefit, or when you simply want it handled privately and now.'
    },
    {
      q: 'What conditions can you treat, and what falls outside telehealth?',
      a: 'We treat more than 60 non-emergency adult conditions by video \u2014 acute infections such as UTIs, sinus infections, and pink eye; women\u2019s health concerns; skin issues; travel-medicine needs such as motion sickness and standby therapy for traveler\u2019s diarrhea; and refills of non-controlled maintenance medications. We do not treat emergencies, do not prescribe controlled substances, and do not issue FAA medical certificates. Conditions that require an in-person exam, imaging, or lab testing \u2014 or any red-flag symptom \u2014 will be triaged and referred to appropriate local care rather than forced into a video visit.'
    },
  ];

  /* ── JSON-LD Schema graph ────────────────────────────────────────── */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "Who We Serve", "item": `${baseUrl}/who-we-serve` },
          { "@type": "ListItem", "position": 3, "name": "Flight Attendants", "item": pageUrl }
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
        "areaServed": areaServed
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
        "licensedIn": areaServed
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
        "name": "Telehealth for Flight Attendants: See a Doctor on Your Layover",
        "description": "TeleDirectMD provides telehealth for flight attendants and cabin crew across 42 states plus D.C. \u2014 UTIs, sinus and ear issues, prescription refills, women's health, and travel medicine, treated by a board-certified physician from your layover hotel. Not for FAA certificates or in-flight emergencies. Same-day visits, evenings & weekends. Starting at $79.",
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
          "@type": "PeopleAudience",
          "audienceType": "Flight attendants and cabin crew",
          "name": "Flight Attendants"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".tdmd-hero-sub", "#flight-attendants-faq .tdmd-faq-question"]
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
          <span aria-current="page">Flight Attendants</span>
        </div>
      </nav>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="tdmd-hero" id="flight-attendants-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Telehealth for Flight Attendants: See a Doctor on Your Layover</h1>
              <p className="tdmd-hero-sub">A board-certified physician you can reach from your hotel room, in 42 states plus D.C. UTIs, sinus infections, refills, and travel medicine &mdash; same-day, evenings &amp; weekends. Not for FAA certificates or in-flight emergencies.</p>
              <p>
                Cabin crew are among the hardest-working people in the country to keep healthy &mdash; not because they neglect it, but because the job makes ordinary care nearly impossible to reach. You are rarely in your home city when a clinic or pharmacy is open. Reserve and on-call assignments make it impossible to plan an appointment. Long duty days, restricted lavatory breaks, and dry cabin air drive recurrent UTIs. Repeated pressurization aggravates sinuses and ears. And when something comes up on a layover, the alternative is finding an unfamiliar urgent care in a city you land in tonight and leave tomorrow. TeleDirectMD was built for exactly this: a real physician you can reach by secure video from your hotel, wherever this rotation has taken you.
              </p>
              <ul className="tdmd-hero-benefits">
                <li>Board-certified Family Medicine physician &mdash; not a PA, not an NP, not an algorithm</li>
                <li>Licensed in 42 states plus D.C. &mdash; care from nearly any layover or base</li>
                <li>Prescriptions to any pharmacy near your hotel &mdash; no controlled substances</li>
                <li>Same-day visits, evenings &amp; weekends &mdash; built around back-of-the-clock schedules</li>
                <li>Transparent $79 cash-pay &mdash; no insurance required, no surprise bills</li>
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
                <h2>Why Cabin Crew Choose TeleDirectMD</h2>
                <ul>
                  <li>Reach a doctor from your layover hotel, not a strange urgent care</li>
                  <li>Prescriptions sent to a pharmacy near wherever you land</li>
                  <li>No insurance required &mdash; flat $79, HSA/FSA accepted</li>
                  <li>Same-day, evenings &amp; weekends &mdash; fits reserve and on-call life</li>
                  <li>HIPAA-compliant, secure video from your phone or laptop</li>
                </ul>
                <p className="tdmd-hero-note">Not for FAA medical certificates or in-flight emergencies. See below.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Problem ──────────────────────────────────────── */}
      <section className="tdmd-section" id="flight-attendants-problem">
        <div className="tdmd-container">
          <h2>Why Healthcare Is So Hard to Reach for Cabin Crew</h2>
          <p>
            There are roughly 90,000 to 110,000 flight attendants working in the United States, and the structure of the job creates a healthcare access problem that has almost nothing to do with income or coverage and almost everything to do with time and geography. A flight attendant can be in three cities in a day and none of them home. Reserve crew often cannot commit to an appointment days in advance because they do not yet know where they will be. Even senior crew flying a fixed line spend nights and weekends away from their base city &mdash; exactly when clinics are closed and exactly when a health problem does not wait.
          </p>
          <p>
            The work itself is associated with specific, recurring problems. Long duty periods and limited lavatory access encourage holding off on fluids and bathroom breaks &mdash; behaviors linked to urinary tract infections, one of the more frequently reported complaints among crew. Repeated cabin-pressure changes aggravate sinus and ear congestion. Circadian disruption from crossing time zones and flying back-of-the-clock trips affects sleep, digestion, and mood. Prolonged immobility on long-haul legs is a recognized risk factor for blood clots, particularly for those with other risk factors. And cabin crew are classified as radiation-exposed workers because of cosmic-radiation exposure at altitude. None of these require an emergency room &mdash; but all of them are easier to manage with a doctor who is actually reachable when you are on the road.
          </p>
          <p>
            The predictable result is that crew self-manage. Online cabin-crew communities are full of members trading probiotic brands, hydration tricks, and supplement recommendations &mdash; not because those replace medical care, but because getting to a doctor is so impractical that self-treatment becomes the default. That is the exact gap TeleDirectMD is designed to close: not to replace the free clinic at your base or the care you get at home, but to be reachable in the hours and cities where nothing else is.
          </p>
          <div className="tdmd-comparison-note">
            <p style={{ margin: 0 }}>
              <strong>The scenario:</strong> You are on the second night of a three-day trip, in a hotel two time zones from home, and the telltale burning of a UTI starts at 9 p.m. You are due to work a full day of flying tomorrow. The options used to be: tough it out, or spend your short overnight finding a rideshare to an unfamiliar urgent care and $180 out of pocket. With TeleDirectMD you open your phone, connect with a board-certified physician by secure video, and &mdash; if appropriate &mdash; have an antibiotic waiting at the pharmacy around the corner from your hotel before you sleep.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Scope & Safety (unique to this page) ─────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="flight-attendants-scope">
        <div className="tdmd-container">
          <h2>What We Do &mdash; and What We Deliberately Don&rsquo;t</h2>
          <p>
            Because this is aviation, it matters to be precise about scope. TeleDirectMD treats your everyday, non-emergency health needs on the ground. It is not an aeromedical service, and being clear about the boundaries is part of keeping you safe and compliant.
          </p>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>What we do</h3>
              <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                <li>Treat non-emergency conditions by secure video &mdash; UTIs, sinus and ear issues, women&rsquo;s health, skin problems, allergies</li>
                <li>Refill non-controlled maintenance medications to any U.S. pharmacy near you</li>
                <li>Provide travel-medicine care such as motion sickness and standby therapy for traveler&rsquo;s diarrhea</li>
                <li>See you from any of 42 states plus D.C., same-day, evenings and weekends</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-bad">
              <h3>What we do not do</h3>
              <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                <li><strong>FAA medical certificates or fitness-to-fly clearance</strong> &mdash; those require an FAA-designated Aviation Medical Examiner (AME)</li>
                <li><strong>In-flight emergencies</strong> &mdash; those are handled by your airline&rsquo;s ground-based medical support (e.g. MedAire/MedLink, STAT-MD) and 911 on the ground</li>
                <li><strong>Controlled substances</strong> of any kind</li>
                <li>Anything needing an in-person exam, imaging, or labs &mdash; we triage and refer these to local care</li>
              </ul>
            </div>
          </div>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)', marginTop: '1rem' }}>
            If a medication or condition could affect your medical certification or duty status, that determination is between you and your AME, and you remain responsible for your airline&rsquo;s and the FAA&rsquo;s reporting requirements. When in doubt, talk to your AME before flying.
          </p>
        </div>
      </section>

      {/* ── 4. Conditions ───────────────────────────────────────── */}
      <section className="tdmd-section" id="flight-attendants-conditions">
        <div className="tdmd-container">
          <h2>Conditions We Commonly Treat for Cabin Crew</h2>
          <p>
            Each condition links to a detailed treatment page covering eligibility, what to expect, and how telehealth works for it. These are the issues the job tends to produce &mdash; and the ones that are well suited to being handled from a hotel room by video.
          </p>
          <div style={{ display: 'grid', gap: '0.85rem', marginTop: '1rem' }}>
            {conditions.map((c) => (
              <a
                key={c.name}
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
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All 60+ Conditions We Treat</a>
          </div>
        </div>
      </section>

      {/* ── 5. How It Works ─────────────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="flight-attendants-how-it-works">
        <div className="tdmd-container">
          <h2>How It Works &mdash; 3 Simple Steps</h2>
          <p>Designed to work in the ten spare minutes you have on an overnight &mdash; from your phone, in whatever city you landed in.</p>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Request a Visit</h3>
                <p>Open TeleDirectMD.com from your phone &mdash; no app to download. Describe your symptoms and confirm which state you are physically in right now. About two minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Connect With Your Doctor</h3>
                <p>A board-certified Family Medicine physician joins you over secure, HIPAA-compliant video, reviews your history and medications, and answers your questions. Most visits run 10&ndash;15 minutes &mdash; short enough for a layover.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Get Treated &mdash; Rx to Any Pharmacy</h3>
                <p>If medication is appropriate, we send it electronically to any U.S. pharmacy &mdash; including the one nearest your hotel. Pick it up and get your rest before the next duty day.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Pricing ──────────────────────────────────────────── */}
      <section className="tdmd-section" id="flight-attendants-pricing">
        <div className="tdmd-container">
          <h2>Transparent Pricing &mdash; No Surprise Bills</h2>
          <p>For the layover, reserve, and off-hours gaps this service fills, a flat cash-pay visit is usually the fastest and most predictable option &mdash; no navigating an out-of-state network from a hotel. You know the price before you book.</p>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
              <h3>TeleDirectMD Video Visit</h3>
              <p className="tdmd-price-big">$79</p>
              <p className="tdmd-price-sub">Self-pay starting price per visit</p>
              <ul className="tdmd-price-includes">
                <li>Board-certified Family Medicine physician consultation</li>
                <li>Prescriptions sent to any U.S. pharmacy</li>
                <li>No hidden fees or surprise billing</li>
                <li>HSA and FSA accepted</li>
                <li>Itemized receipt for reimbursement</li>
              </ul>
            </div>
            <div className="tdmd-price-chart" role="group" aria-label="Cost comparison">
              <h3>How We Compare</h3>
              <p className="tdmd-price-caption">Typical costs without insurance. Actual costs vary by location.</p>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>TeleDirectMD</span><span>$79</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill tdmd-bar-fill-tdmd" style={{ '--w': 10 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Telehealth avg.</span><span>$40&ndash;$90</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 18 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Urgent Care</span><span>$150&ndash;$350</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 50 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Emergency Room</span><span>$500&ndash;$3,000+</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 100 }} /></div>
              </div>
              <p className="tdmd-price-footnote">Sources: Penn Medicine telehealth cost study; GoodRx telehealth pricing data 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Trust ────────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="flight-attendants-trust">
        <div className="tdmd-container">
          <h2>Who You&rsquo;re Seeing &mdash; A Real Physician</h2>
          <p>
            When you visit TeleDirectMD you are seeing a licensed, board-certified physician &mdash; not a physician assistant, not a nurse practitioner, not a chatbot. <a href="/about" style={{ color: 'var(--tdmd-navy)', fontWeight: 700 }}>Dr. Parth Bhavsar, MD</a>, is board-certified in Family Medicine and licensed across 42 states plus Washington, D.C. You get the same standard of care you would expect from an established primary-care physician &mdash; reachable from wherever your schedule has put you tonight.
          </p>
          <ul className="tdmd-hero-benefits">
            <li>Board-certified in Family Medicine &mdash; a real physician, not a PA or NP</li>
            <li>Licensed in 42 states plus D.C. &mdash; care across nearly any layover or base</li>
            <li>HIPAA-compliant platform &mdash; encrypted visits, secure records</li>
            <li>LegitScript certified &mdash; a recognized mark of telehealth compliance</li>
            <li>TeleDirectMD does not sell or share your health information</li>
          </ul>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>
            All visits are conducted via encrypted video. Your medical records travel with your relationship with TeleDirectMD &mdash; not with the city you happen to overnight in.
          </p>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-faq" id="flight-attendants-faq">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions &mdash; Telehealth for Flight Attendants</h2>
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

      {/* ── 9. Final CTA ────────────────────────────────────────── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>A doctor you can reach from your hotel. 42 states plus D.C.</h3>
              <p>Request a same-day visit, connect with a board-certified physician by secure video, and get a prescription sent to the pharmacy nearest your layover &mdash; before the next duty day.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/who-we-serve" className="tdmd-btn tdmd-btn-outline">Who We Serve</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Base / hub links ────────────────────────────────── */}
      <section className="tdmd-section" id="flight-attendants-bases">
        <div className="tdmd-container">
          <h2>Telehealth for Flight Attendants &mdash; Available Across Crew Base States</h2>
          <p>TeleDirectMD is licensed in 42 states plus D.C., including the states behind the busiest crew bases and layover cities. As long as you are physically present in a covered state during your visit, we can see you:</p>
          <div className="tdmd-other-states-grid">
            {featuredBases.map((s) => (
              <a key={s.slug} className="tdmd-other-state-link" href={`/${s.slug}`}>
                {s.name}
              </a>
            ))}
          </div>
          <p style={{ marginTop: '0.75rem' }}>
            <a href="/states-we-serve" style={{ color: 'var(--tdmd-navy)', fontWeight: 700, textDecoration: 'underline' }}>View all states we serve &rarr;</a>
          </p>
        </div>
      </section>

      {/* ── 11. Cross-links ─────────────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <div className="tdmd-inline-links">
            <h3>Related Reading</h3>
            <p className="tdmd-link-cloud">
              <a href="/health-guides/healthcare-on-the-road-flight-crews-guide/">Healthcare on the Road: A Guide for Flight Crews</a>
              <a href="/travel-medicine-treatment-online/">Travel Medicine</a>
              <a href="/uti-treatment-online/">UTI Treatment</a>
            </p>
          </div>
          <div className="tdmd-inline-links" style={{ marginTop: '1rem' }}>
            <h3>Other Communities We Serve</h3>
            <p className="tdmd-link-cloud">
              <a href="/who-we-serve/travel-nurses">Travel Nurses</a>
              <a href="/who-we-serve/truck-drivers">Truck Drivers</a>
              <a href="/who-we-serve/remote-workers">Remote Workers</a>
              <a href="/who-we-serve/international-visitors">International Visitors</a>
              <a href="/who-we-serve">Who We Serve Hub</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── 12. References ──────────────────────────────────────── */}
      <section className="tdmd-section" id="flight-attendants-references">
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li><a href="https://www.bls.gov/ooh/transportation-and-material-moving/flight-attendants.htm" rel="nofollow noopener" target="_blank">Flight Attendants &mdash; Occupational Outlook Handbook, U.S. Bureau of Labor Statistics</a></li>
            <li><a href="https://www.faa.gov/pilots/amelocator" rel="nofollow noopener" target="_blank">Aviation Medical Examiner (AME) Locator &mdash; Federal Aviation Administration</a></li>
            <li><a href="https://wwwnc.cdc.gov/travel/yellowbook/2024/preparing-international-travelers/travelers-diarrhea" rel="nofollow noopener" target="_blank">Travelers&rsquo; Diarrhea &mdash; CDC Yellow Book</a></li>
            <li><a href="https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/" rel="nofollow noopener" target="_blank">Uncomplicated UTI Treatment Guideline &mdash; Infectious Diseases Society of America (IDSA)</a></li>
            <li><a href="https://www.cdc.gov/niosh/topics/aircrew/" rel="nofollow noopener" target="_blank">Aircrew Safety &amp; Health &mdash; NIOSH / CDC</a></li>
            <li><a href="https://www.pennmedicine.org/news/news-releases/2019/december/study-finds-telemedicine-visits-cost-far-less-than-office-visits" rel="nofollow noopener" target="_blank">Study finds telemedicine visits cost far less than office visits &mdash; Penn Medicine</a></li>
            <li><a href="https://www.goodrx.com/healthcare-access/telehealth/how-much-does-a-telehealth-visit-cost" rel="nofollow noopener" target="_blank">How Much Does a Telehealth Visit Cost? &mdash; GoodRx</a></li>
          </ul>
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-footnote" id="flight-attendants-disclaimer">
        <div className="tdmd-container">
          <h2>Medical Disclaimer</h2>
          <p>
            This page is for informational purposes only and does not constitute medical advice. TeleDirectMD provides telehealth services for non-emergency conditions in adults 18 and older who are physically located in one of our licensed states or Washington, D.C. at the time of the visit. TeleDirectMD does not prescribe controlled substances, does not issue FAA medical certificates, and does not make fitness-to-fly or return-to-duty determinations, which must be handled by an FAA-designated Aviation Medical Examiner. If you are experiencing a medical emergency, call 911 immediately. In-flight medical emergencies are managed through your airline&rsquo;s onboard and ground-based medical support services.
          </p>
          <p>
            Not all conditions are appropriate for telehealth. Some symptoms require in-person evaluation, imaging, or laboratory testing that cannot be completed via video visit. TeleDirectMD will advise you if your condition requires in-person care and can provide referral guidance as needed.
          </p>
        </div>
      </section>
    </>
  );
}
