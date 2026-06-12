export default function WorldCup2026Page() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/world-cup-2026`;
  const today = new Date().toISOString().split('T')[0];

  /* ── Conditions to link (verified-existing condition slugs only) ──── */
  const conditions = [
    { name: "Traveler's Diarrhea / Stomach Bug", slug: 'viral-gastroenteritis-treatment-online', desc: "The single most common travel illness — evaluation and prescription anti-diarrheal or antibiotic sent to a pharmacy near your hotel." },
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Antibiotic prescription sent to any US pharmacy — no urgent care visit, no insurance needed.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for sinus pressure, congestion, and facial pain from your hotel room.' },
    { name: 'Sore Throat / Strep', slug: 'sore-throat-treatment-online', desc: 'Assessment of sore throat and prescription treatment when clinically appropriate.' },
    { name: 'Cold, Flu & Respiratory Infections', slug: 'common-cold-treatment-online', desc: 'Cold, flu, and bronchitis evaluation and treatment so you do not miss your match.' },
    { name: 'COVID-19', slug: 'covid-19-treatment-online', desc: 'COVID assessment and antiviral prescription when indicated, sent to a nearby pharmacy.' },
    { name: 'Pink Eye (Conjunctivitis)', slug: 'pink-eye-treatment-online', desc: 'Eye-drop prescriptions sent to the nearest pharmacy — common in crowded travel settings.' },
    { name: 'Seasonal Allergies', slug: 'seasonal-allergies-treatment-online', desc: 'Prescription allergy relief for a new environment, pollen, and air quality you are not used to.' },
    { name: 'Migraine', slug: 'migraine-refills-online', desc: 'Prescription migraine treatment — dehydration, heat, jet lag, and crowds are common triggers.' },
    { name: 'Motion Sickness', slug: 'motion-sickness-treatment-online', desc: 'Prevention and treatment for travel-related nausea on long flights and transfers.' },
    { name: 'Prescription Refills', slug: 'hypertension-refills-online', desc: "Ran short on a routine medication while traveling? Refills for stable, non-controlled conditions." },
    { name: 'Poison Ivy / Skin Rashes', slug: 'poison-ivy-oak-treatment-online', desc: 'Evaluation of rashes and contact dermatitis from unfamiliar plants and outdoor fan events.' },
  ];

  /* ── World Cup host cities mapped to TeleDirectMD licensure ───────── */
  // Source for host cities: FIFA / NBC Sports 2026 schedule. Mapped against
  // data/state-licenses.json (single source of truth — 43 states + DC).
  const hostCities = [
    { city: 'Atlanta',            state: 'Georgia',        abbr: 'ga', covered: true,  note: '5 group matches, a Round of 32, a Round of 16, and a Semi-Final (Jul 15).' },
    { city: 'Miami',              state: 'Florida',        abbr: 'fl', covered: true,  note: 'Group matches plus the Third-Place match (Jul 18).' },
    { city: 'Dallas',             state: 'Texas',          abbr: 'tx', covered: true,  note: 'Group matches through a Semi-Final (Jul 14).' },
    { city: 'Houston',            state: 'Texas',          abbr: 'tx', covered: true,  note: 'Group matches and a Round of 16.' },
    { city: 'Philadelphia',       state: 'Pennsylvania',   abbr: 'pa', covered: true,  note: 'Group matches and a Round of 16.' },
    { city: 'Seattle',            state: 'Washington',     abbr: 'wa', covered: true,  note: 'Group matches and a Round of 16.' },
    { city: 'Kansas City',        state: 'Missouri',       abbr: 'mo', covered: true,  note: 'Group matches and a Quarter-Final.' },
    { city: 'Los Angeles',        state: 'California',     abbr: 'ca', covered: true,  note: 'Group matches through a Quarter-Final.' },
    { city: 'San Francisco Bay',  state: 'California',     abbr: 'ca', covered: true,  note: 'Group matches and a Round of 32.' },
    { city: 'New York / New Jersey', state: 'New Jersey',  abbr: 'nj', covered: true,  note: 'Group matches and the Final (Jul 19) at MetLife Stadium in New Jersey.' },
    { city: 'Boston',             state: 'Massachusetts',  abbr: null, covered: false, note: 'Massachusetts is not currently in our licensed footprint.' },
  ];
  const coveredCount = hostCities.filter(h => h.covered).length;

  /* ── FAQ data ────────────────────────────────────────────────────── */
  const faqItems = [
    {
      q: 'Can I see a US doctor during the World Cup if I do not have US health insurance?',
      a: 'Yes. TeleDirectMD is a direct-pay telehealth platform — no US health insurance is required at any point. You pay a flat $79 fee when you book, which covers the full video visit with a board-certified physician and any prescriptions sent to a US pharmacy. There are no insurance claims to file and no surprise bills. This is designed for exactly the situation most international fans are in: visiting the US without domestic coverage.'
    },
    {
      q: 'Which World Cup host cities can TeleDirectMD see me in?',
      a: `TeleDirectMD is licensed in 43 US states, which covers ${coveredCount} of the 11 US host cities: Atlanta (Georgia), Miami (Florida), Dallas and Houston (Texas), Philadelphia (Pennsylvania), Seattle (Washington), Kansas City (Missouri), Los Angeles and the San Francisco Bay Area (California), and the New Jersey side of the New York/New Jersey venue. You can be seen as long as you are physically located in one of our 43 covered states at the time of the visit. The one US host city we cannot yet serve is Boston, because Massachusetts is not currently in our licensed footprint.`
    },
    {
      q: 'I have travel insurance from my home country. Can I still use TeleDirectMD?',
      a: 'Yes. Many international travel-insurance policies reimburse telehealth consultations. After your visit, TeleDirectMD provides a visit summary and an itemized receipt you can submit to your travel insurer for reimbursement. Check your policy for telehealth terms. Either way, $79 is a fraction of what a US urgent care or emergency room would charge a cash-pay patient.'
    },
    {
      q: 'What conditions do you treat for World Cup travelers?',
      a: "We treat common, non-emergency travel illnesses: traveler's diarrhea and stomach bugs, UTIs, sinus infections, sore throat, colds, flu and respiratory infections, COVID-19, pink eye, allergies, migraines, motion sickness, minor skin rashes, and refills of stable routine medications you may have run short on. If your condition needs in-person evaluation or emergency care, the physician will tell you clearly and help you find the right local resource."
    },
    {
      q: 'Can you send a prescription to a pharmacy near my hotel or the stadium?',
      a: 'Yes. We send prescriptions electronically to any US pharmacy — including CVS, Walgreens, Walmart, Rite Aid, and thousands of independent pharmacies. Just tell us the city or ZIP code you are in, and we route the prescription to the most convenient location near your hotel, fan zone, or stadium.'
    },
    {
      q: 'How fast can I be seen, and does it fit around match days?',
      a: 'Most visits are same-day, including evenings and weekends — which is when many fans are free between matches. After you book and complete a brief intake form, you connect by secure video from your smartphone or laptop. No app download is required. Most visits take 10 to 15 minutes, and if a prescription is needed it is usually sent before the visit ends.'
    },
    {
      q: 'Is this real, legitimate medical care?',
      a: 'Yes. TeleDirectMD is operated by Dr. Parth Bhavsar, MD, a board-certified Family Medicine physician licensed in 43 US states — not a chatbot, a PA, or an NP. Prescriptions issued through TeleDirectMD are valid at any US pharmacy, your visit is documented in a HIPAA-compliant record system, and you can receive a visit summary to share with your home-country physician.'
    },
    {
      q: 'Do you treat children? My family is traveling with me.',
      a: 'TeleDirectMD sees patients 18 and older and does not see pediatric patients at this time. If a child traveling with you is ill, please visit a US urgent care clinic or emergency room. Adults in your group, however, are welcome to book a visit.'
    },
  ];

  /* ── JSON-LD Schema ──────────────────────────────────────────────── */
  const licensedAbbrs = ["AL","AZ","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NC","ND","OH","OK","PA","SC","SD","TN","TX","UT","WA","WV","WI","WY"];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "Who We Serve", "item": `${baseUrl}/who-we-serve` },
          { "@type": "ListItem", "position": 3, "name": "World Cup 2026 Visitors", "item": pageUrl }
        ]
      },
      {
        "@type": "MedicalOrganization",
        "name": "TeleDirectMD",
        "url": baseUrl,
        "logo": `${baseUrl}/assets/brand/teledirectmd-logo.png`,
        "telephone": "+1-678-956-1855",
        "medicalSpecialty": "GeneralPractice",
        "availableService": { "@type": "MedicalTherapy", "name": "Telehealth Consultations" },
        "areaServed": licensedAbbrs
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}/about#physician`,
        "name": "Parth Bhavsar, MD",
        "medicalSpecialty": "FamilyMedicine",
        "worksFor": { "@type": "MedicalOrganization", "name": "TeleDirectMD" },
        "licensedIn": licensedAbbrs
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": "Online Doctor for World Cup 2026 Visitors — No US Insurance Required",
        "description": "TeleDirectMD offers $79 flat-fee video visits with a board-certified US physician for 2026 World Cup visitors without US insurance, available near host cities in 8 of the 11 US host states.",
        "inLanguage": "en-US",
        "breadcrumb": { "@id": `${pageUrl}#breadcrumbs` },
        "author": { "@id": `${baseUrl}/about#physician` },
        "datePublished": today,
        "dateModified": today,
        "publisher": { "@type": "Organization", "name": "TeleDirectMD", "url": baseUrl },
        "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".tdmd-hero-sub", "#world-cup-2026-faq .tdmd-faq-question"]
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
          <span aria-current="page">World Cup 2026 Visitors</span>
        </div>
      </nav>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="tdmd-hero" id="world-cup-2026-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Online Doctor for World Cup 2026 Visitors — No US Insurance Required</h1>
              <p className="tdmd-hero-sub">Visiting the US for the 2026 FIFA World Cup without US insurance? See a board-certified US physician by video for a flat $79 — same day, evenings &amp; weekends.</p>
              <p>
                Millions of football fans are traveling to the United States for the 2026 World Cup (June 11–July 19). Most international visitors arrive without US health insurance — and US healthcare prices can be a shock. TeleDirectMD lets you see a real US doctor from your hotel room or rental for one transparent fee, with prescriptions sent to a pharmacy near you. We are licensed in 43 states, covering {coveredCount} of the 11 US host cities.
              </p>
              <ul className="tdmd-hero-benefits">
                <li>Board-certified physician — not a PA, not an NP, not an algorithm</li>
                <li>No US insurance required — flat $79, no surprise bills</li>
                <li>Covers {coveredCount} of 11 US host cities across 8 states — Atlanta, Miami, Dallas, Houston, LA &amp; more</li>
                <li>Prescriptions sent to any US pharmacy near your hotel or stadium</li>
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
                <h2>Why World Cup Visitors Choose TeleDirectMD</h2>
                <ul>
                  <li>See a US doctor without US insurance — flat $79</li>
                  <li>Available in 10 of 11 host cities across 8 states</li>
                  <li>Prescriptions sent to a pharmacy near your hotel</li>
                  <li>Same-day visits, including evenings &amp; weekends</li>
                  <li>HIPAA-compliant, secure video from your phone</li>
                  <li>Itemized receipt for travel-insurance reimbursement</li>
                </ul>
                <p className="tdmd-hero-note">No app download required. Works on any smartphone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1b. Bilingual welcome (ES / PT) for largest fan bases ── */}
      <section className="tdmd-section tdmd-section-highlight" id="world-cup-2026-languages">
        <div className="tdmd-container">
          <h2>Para aficionados internacionales · Para torcedores internacionais</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card" lang="es">
              <h3 style={{ color: 'var(--tdmd-navy)' }}>¿Está en EE. UU. para el Mundial 2026 sin seguro médico estadounidense?</h3>
              <p style={{ margin: '0.5rem 0 0' }}>
                Vea a un médico estadounidense certificado por video por una tarifa fija de $79 dólares — el mismo día, por las tardes y los fines de semana. No necesita seguro médico de EE. UU. Enviamos las recetas a cualquier farmacia cerca de su hotel. Disponible en 10 de las 11 sedes del torneo en EE. UU., incluidas Atlanta, Miami, Dallas, Houston y Los Ángeles.
              </p>
              <p style={{ margin: '0.75rem 0 0' }}>
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Reservar una consulta</a>
              </p>
            </div>
            <div className="tdmd-card" lang="pt">
              <h3 style={{ color: 'var(--tdmd-navy)' }}>Está nos EUA para a Copa do Mundo de 2026 sem plano de saúde americano?</h3>
              <p style={{ margin: '0.5rem 0 0' }}>
                Consulte um médico americano certificado por vídeo por uma taxa fixa de US$ 79 — no mesmo dia, à noite e nos fins de semana. Não é necessário plano de saúde dos EUA. Enviamos as receitas para qualquer farmácia perto do seu hotel. Disponível em 10 das 11 cidades-sede nos EUA, incluindo Atlanta, Miami, Dallas, Houston e Los Angeles.
              </p>
              <p style={{ margin: '0.75rem 0 0' }}>
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Agendar uma consulta</a>
              </p>
            </div>
          </div>
          <p style={{ marginTop: '0.85rem', fontSize: '0.88rem', color: 'var(--tdmd-muted)' }}>
            The full visit is conducted in English. A friend or family member may interpret for you, and the physician can arrange interpretation support when needed.
          </p>
        </div>
      </section>

      {/* ── 2. The Problem ──────────────────────────────────────── */}
      <section className="tdmd-section" id="world-cup-2026-problem">
        <div className="tdmd-container">
          <h2>Getting Sick Abroad — The Hidden Cost of a World Cup Trip</h2>
          <p>
            Travel and illness go together. Travelers' diarrhea is the most predictable travel-related illness, with attack rates of <strong>30% to 70%</strong> of travelers over a two-week period depending on destination and season, according to the CDC Yellow Book. Add long flights, jet lag, summer heat, dense crowds, unfamiliar food, and packed match-day schedules, and a meaningful share of the millions of arriving fans will need care during their stay.
          </p>
          <p>
            For visitors without US health insurance, the in-person options are expensive and slow. A cash-pay urgent care visit typically runs <strong>$150 to $350</strong>, and an emergency room visit can reach <strong>$500 to $3,000 or more</strong> before imaging, labs, or medications. That is a brutal surprise when all you needed was an antibiotic for a UTI or something for a stomach bug — and it can cost you a match while you sit in a waiting room.
          </p>
          <div className="tdmd-comparison-note">
            <p style={{ margin: 0 }}>
              <strong>The scenario:</strong> You flew in for a group-stage match in Atlanta and woke up with a stomach bug and a fever. You have no US insurance and no local doctor, and your next match is tonight. With TeleDirectMD, you request a same-day visit from your hotel, connect with a board-certified US physician by video, and — if appropriate — have a prescription sent to the pharmacy two blocks away. Flat $79. No claim forms. Back in time for kickoff.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. How TeleDirectMD Solves It ───────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="world-cup-2026-solution">
        <div className="tdmd-container">
          <h2>How TeleDirectMD Works for International Fans</h2>
          <p>
            TeleDirectMD was built for people who need care away from home and outside the US insurance system — which describes most World Cup visitors. Here is how we remove the usual barriers:
          </p>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>No US Insurance Needed</h3>
              <p>One flat $79 fee covers the full visit and any prescription. No insurance card, no claim forms, no surprise billing. You see your cost before you book.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Coverage Across Host Cities</h3>
              <p>Licensed in 43 states — covering {coveredCount} of the 11 US host cities. The same physician can see you whether you are in Atlanta, Miami, Dallas, LA, or another covered host city on your itinerary.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Same-Day, Around Your Matches</h3>
              <p>Same-day visits including evenings and weekends — the times fans are actually free. Connect by secure video from your hotel in 10–15 minutes; no app download required.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Prescriptions Where You Are</h3>
              <p>We send prescriptions electronically to any US pharmacy near your hotel, fan zone, or stadium — CVS, Walgreens, Walmart, and thousands more. Just tell us your ZIP code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Host City → Coverage Map ─────────────────────────── */}
      <section className="tdmd-section" id="world-cup-2026-cities">
        <div className="tdmd-container">
          <h2>World Cup Host Cities We Can See You In</h2>
          <p>
            The 2026 World Cup is played across 11 US host cities (plus Canada and Mexico). TeleDirectMD is licensed in 43 US states — covering <strong>{coveredCount} of the 11</strong>. You can be seen as long as you are physically in one of our covered states at the time of your visit. Tap a covered city to see local details.
          </p>
          <div style={{ display: 'grid', gap: '0.85rem', marginTop: '1rem' }}>
            {hostCities.map((h) => (
              h.covered ? (
                <a
                  key={h.city}
                  href={`/${h.abbr}`}
                  className="tdmd-card"
                  style={{ textDecoration: 'none', color: 'var(--tdmd-text)', borderLeft: '4px solid var(--tdmd-teal)' }}
                >
                  <h3 style={{ margin: '0 0 0.3rem', color: 'var(--tdmd-navy)', fontSize: '1.05rem' }}>
                    {h.city}, {h.state} <span style={{ color: 'var(--tdmd-teal)', fontWeight: 700, fontSize: '0.85rem' }}>· Covered</span>
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.94rem', color: 'var(--tdmd-muted)', lineHeight: '1.45' }}>{h.note}</p>
                </a>
              ) : (
                <div
                  key={h.city}
                  className="tdmd-card"
                  style={{ color: 'var(--tdmd-text)', borderLeft: '4px solid var(--tdmd-muted)', opacity: 0.85 }}
                >
                  <h3 style={{ margin: '0 0 0.3rem', color: 'var(--tdmd-navy)', fontSize: '1.05rem' }}>
                    {h.city}, {h.state} <span style={{ color: 'var(--tdmd-muted)', fontWeight: 700, fontSize: '0.85rem' }}>· Not yet covered</span>
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.94rem', color: 'var(--tdmd-muted)', lineHeight: '1.45' }}>{h.note}</p>
                </div>
              )
            ))}
          </div>
          <p style={{ marginTop: '1.25rem' }}>
            <a href="/states-we-serve" style={{ color: 'var(--tdmd-navy)', fontWeight: 700, textDecoration: 'underline' }}>View all 43 states we serve →</a>
          </p>
        </div>
      </section>

      {/* ── 5. Conditions We Commonly Treat ─────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="world-cup-2026-conditions">
        <div className="tdmd-container">
          <h2>Common Travel Conditions We Treat</h2>
          <p>
            Each condition below links to a detailed treatment page explaining what to expect, eligibility, medications, and how a telehealth visit works for that specific issue.
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

      {/* ── 6. How It Works ─────────────────────────────────────── */}
      <section className="tdmd-section" id="world-cup-2026-how-it-works">
        <div className="tdmd-container">
          <h2>How It Works — 3 Simple Steps</h2>
          <p>Designed to be fast and simple, even from a hotel in an unfamiliar city.</p>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Request a Visit</h3>
                <p>Go to TeleDirectMD.com on your phone and request a visit. No app download needed. Tell us your symptoms and which US state you are currently in. Takes about 2 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Connect With Your Doctor</h3>
                <p>A board-certified US physician connects with you by secure video. We review your symptoms and history and determine the best plan. Most visits take 10–15 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Get Treated — Prescription Sent Nearby</h3>
                <p>If medication is needed, we send the prescription electronically to a pharmacy near your hotel or stadium. You also receive a visit summary and receipt for travel-insurance reimbursement.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Transparent Pricing ──────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="world-cup-2026-pricing">
        <div className="tdmd-container">
          <h2>Transparent Pricing — No Surprise Bills</h2>
          <p>Telehealth is dramatically cheaper than US in-person care. A Penn Medicine study found telehealth visits average $96 compared to $509 for in-person episodes — more than five times less expensive. For a visitor without US insurance, the gap between a $79 video visit and a cash-pay ER bill is enormous.</p>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
              <h3>TeleDirectMD Video Visit</h3>
              <p className="tdmd-price-big">$79</p>
              <p className="tdmd-price-sub">Flat self-pay price per visit — no US insurance required</p>
              <ul className="tdmd-price-includes">
                <li>Board-certified US physician consultation</li>
                <li>Prescriptions sent to any US pharmacy</li>
                <li>Receipt for travel-insurance reimbursement</li>
                <li>No hidden fees or surprise billing</li>
              </ul>
            </div>
            <div className="tdmd-price-chart" role="group" aria-label="Cost comparison">
              <h3>How We Compare</h3>
              <p className="tdmd-price-caption">Typical cash-pay costs without US insurance. Actual costs vary by location.</p>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>TeleDirectMD</span><span>$79</span></div>
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

      {/* ── 8. Who We Are / Trust Signals ───────────────────────── */}
      <section className="tdmd-section" id="world-cup-2026-trust">
        <div className="tdmd-container">
          <h2>Who You're Seeing — A Real US Doctor, Not an Algorithm</h2>
          <p>
            When you visit TeleDirectMD, you are seeing a licensed, board-certified US physician — not a physician assistant, not a nurse practitioner, not a chatbot. <a href="/about" style={{ color: 'var(--tdmd-navy)', fontWeight: 700 }}>Dr. Parth Bhavsar, MD</a> is a board-certified Family Medicine physician licensed across 43 states, providing the same standard of care you'd receive in person. Prescriptions are valid at any US pharmacy, and you can receive a visit summary to share with your home-country physician.
          </p>
          <ul className="tdmd-hero-benefits">
            <li>Board-certified in Family Medicine</li>
            <li>Licensed in 43 US states</li>
            <li>HIPAA-compliant platform — your data is encrypted and protected</li>
            <li>TeleDirectMD does not sell or share your health information</li>
          </ul>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>
            TeleDirectMD is HIPAA-compliant. All visits are conducted via encrypted video, and medical records are stored securely.
          </p>
        </div>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-faq" id="world-cup-2026-faq">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions — Healthcare for World Cup 2026 Visitors</h2>
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

      {/* ── 10. Final CTA ───────────────────────────────────────── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>Enjoy the tournament — we've got the doctor visits covered.</h3>
              <p>See a board-certified US physician from your hotel for a flat $79, no US insurance required. Prescriptions sent to a pharmacy near you, same day.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/who-we-serve" className="tdmd-btn tdmd-btn-outline">Who We Serve</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. Cross-links to other audiences ──────────────────── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <div className="tdmd-inline-links">
            <h3>Other Communities We Serve</h3>
            <p className="tdmd-link-cloud">
              <a href="/who-we-serve/international-visitors">International Visitors &amp; Tourists</a>
              <a href="/who-we-serve/uninsured-affordable-care">Uninsured &amp; Affordable Care</a>
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
      <section className="tdmd-section" id="world-cup-2026-references">
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li><a href="https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travelers-diarrhea.html" rel="nofollow noopener" target="_blank">Travelers' Diarrhea — CDC Yellow Book</a></li>
            <li><a href="https://www.cdc.gov/travel" rel="nofollow noopener" target="_blank">Travelers' Health — CDC</a></li>
            <li><a href="https://www.pennmedicine.org/news/news-releases/2019/december/study-finds-telemedicine-visits-cost-far-less-than-office-visits" rel="nofollow noopener" target="_blank">Study finds telemedicine visits cost far less than office visits — Penn Medicine</a></li>
            <li><a href="https://www.goodrx.com/healthcare-access/telehealth/how-much-does-a-telehealth-visit-cost" rel="nofollow noopener" target="_blank">How Much Does a Telehealth Visit Cost? — GoodRx</a></li>
            <li><a href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/fifa-world-cup-2026-hosts-cities-dates-usa-mexico-canada" rel="nofollow noopener" target="_blank">FIFA World Cup 2026 — Host Cities &amp; Dates — FIFA</a></li>
            <li><a href="https://www.hhs.gov/hipaa" rel="nofollow noopener" target="_blank">HIPAA — U.S. Department of Health and Human Services</a></li>
          </ul>
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-footnote" id="world-cup-2026-disclaimer">
        <div className="tdmd-container">
          <h2>Medical Disclaimer</h2>
          <p>
            This page is for informational purposes only and does not constitute medical advice. TeleDirectMD provides telehealth services for non-emergency conditions in adults 18 and older who are physically located in one of our licensed states at the time of the visit. TeleDirectMD does not prescribe controlled substances. If you are experiencing a medical emergency, call 911 immediately.
          </p>
          <p>
            TeleDirectMD is not affiliated with, endorsed by, or sponsored by FIFA or the 2026 FIFA World Cup. References to the tournament and host cities are descriptive only and are used to help travelers understand where telehealth care is available.
          </p>
        </div>
      </section>
    </>
  );
}
