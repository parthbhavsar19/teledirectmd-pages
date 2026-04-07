import { getStates, getStateBySlug, getConditionCategories } from '../../lib/get-data';

export default function StateLandingPage({ stateSlug }) {
  const state = getStateBySlug(stateSlug);
  const categories = getConditionCategories();
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/${stateSlug}`;
  const today = new Date().toISOString().split('T')[0];
  const pid = stateSlug;
  const cities = state.cities || [];
  const pharmacies = state.pharmacies || ['CVS Pharmacy', 'Walgreens', 'Walmart Pharmacy'];

  const totalConditions = categories.reduce((sum, cat) => sum + cat.conditions.length, 0);

  const allStates = getStates();
  const otherStates = allStates.filter((s) => s.slug !== stateSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        "url": baseUrl,
        "name": "TeleDirectMD",
        "publisher": { "@id": `${baseUrl}#organization` },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "What We Treat", "item": `${baseUrl}/what-we-treat` },
          { "@type": "ListItem", "position": 3, "name": state.name, "item": pageUrl }
        ]
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        "name": "TeleDirectMD",
        "url": baseUrl,
        "telephone": "+1-678-956-1855",
        "email": "contact@teledirectmd.com",
        "logo": `${baseUrl}/assets/brand/teledirectmd-logo.png`,
        "description": "TeleDirectMD is an MD-only virtual urgent care service offering secure video visits for adults across multiple states, using evidence-based evaluation and safety-first triage. Insurance is not required. TeleDirectMD does not prescribe controlled substances.",
        "areaServed": "United States"
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${pageUrl}#medical-business`,
        "name": `TeleDirectMD — ${state.name}`,
        "url": pageUrl,
        "telephone": "+1-678-956-1855",
        "email": "contact@teledirectmd.com",
        "description": `TeleDirectMD provides MD-only telehealth video visits in ${state.name} for ${totalConditions} adult conditions, starting at $49 with no insurance required.`,
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": state.name,
          "sameAs": `https://en.wikipedia.org/wiki/${encodeURIComponent(state.name)}`
        },
        "medicalSpecialty": ["Primary Care", "Family Medicine", "Telemedicine"],
        "parentOrganization": { "@id": `${baseUrl}#organization` },
        "priceRange": "$49",
        "isAcceptingNewPatients": true,
        "availableService": categories.map((cat) => ({
          "@type": "MedicalProcedure",
          "name": cat.categoryName,
          "description": cat.categoryDescription
        }))
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}/about#physician`,
        "name": "Parth Bhavsar, MD",
        "url": `${baseUrl}/about`,
        "affiliation": { "@id": `${baseUrl}#organization` }
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": `Online Doctor in ${state.name} — TeleDirectMD`,
        "description": `See an MD-only doctor online in ${state.name}. TeleDirectMD offers same-day video visits for ${totalConditions} adult conditions, starting at $49.`,
        "inLanguage": "en-US",
        "breadcrumb": { "@id": `${pageUrl}#breadcrumbs` },
        "isPartOf": { "@id": `${baseUrl}#website` },
        "publisher": { "@id": `${baseUrl}#organization` },
        "author": { "@id": `${baseUrl}/about#physician` },
        "datePublished": today,
        "dateModified": today,
        "about": { "@id": `${pageUrl}#medical-business` }
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "isPartOf": { "@id": `${pageUrl}#webpage` },
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What conditions does TeleDirectMD treat in ${state.name}?`,
            "acceptedAnswer": { "@type": "Answer", "text": `TeleDirectMD treats ${totalConditions} adult conditions in ${state.name}, including urgent care (cold, flu, UTI, sinus infection), chronic medication refills (asthma, hypertension, thyroid), skin conditions (acne, eczema, rosacea), sexual health, women's health, and more. All visits are conducted by licensed MDs via secure video.` }
          },
          {
            "@type": "Question",
            "name": `How much does a TeleDirectMD visit cost in ${state.name}?`,
            "acceptedAnswer": { "@type": "Answer", "text": `TeleDirectMD visits start at $49. There are no hidden fees, no subscription required, and insurance is not needed. The visit fee covers the full consultation, diagnosis, treatment plan, and any prescribed medications sent directly to your preferred ${state.name} pharmacy.` }
          },
          {
            "@type": "Question",
            "name": `Do I need insurance for a TeleDirectMD visit in ${state.name}?`,
            "acceptedAnswer": { "@type": "Answer", "text": `No. TeleDirectMD is a self-pay telehealth service. Insurance is not required and not accepted. The transparent $49 visit fee covers your entire consultation.` }
          },
          {
            "@type": "Question",
            "name": `How do I get a prescription through TeleDirectMD in ${state.name}?`,
            "acceptedAnswer": { "@type": "Answer", "text": `After your video visit, your TeleDirectMD physician can send prescriptions electronically to any ${state.name} pharmacy, including ${pharmacies.join(', ')}. Prescriptions are typically available for pickup within 1–2 hours. TeleDirectMD does not prescribe controlled substances.` }
          }
        ]
      }
    ]
  };

  const statePageCSS = `
    .tdmd-state-hero-sub{font-size:1.05rem;font-weight:650;color:var(--tdmd-navy);margin:0 0 1rem;}
    .tdmd-state-stats{display:flex;flex-wrap:wrap;gap:1.25rem;margin:1.25rem 0;}
    .tdmd-state-stat{background:var(--tdmd-card);border-radius:var(--tdmd-radius);padding:1rem 1.25rem;box-shadow:var(--tdmd-shadow);border:1px solid rgba(0,0,0,0.03);text-align:center;min-width:140px;flex:1;}
    .tdmd-state-stat-number{font-size:1.75rem;font-weight:950;color:var(--tdmd-teal);letter-spacing:-0.02em;}
    .tdmd-state-stat-label{font-size:0.88rem;color:var(--tdmd-muted);margin-top:0.15rem;}

    .tdmd-cat-nav{display:flex;flex-wrap:wrap;gap:0.5rem;margin:0 0 1.75rem;}
    .tdmd-cat-chip{display:inline-block;padding:0.45rem 1rem;border-radius:999px;border:1px solid var(--tdmd-border);background:var(--tdmd-card);color:var(--tdmd-navy);font-weight:700;font-size:0.9rem;text-decoration:none;transition:border-color 0.15s,background 0.15s;}
    .tdmd-cat-chip:hover,.tdmd-cat-chip:focus{border-color:var(--tdmd-teal);background:var(--tdmd-bg-soft);}

    .tdmd-cat-section{margin-bottom:2rem;}
    .tdmd-cat-header{display:flex;align-items:baseline;gap:0.75rem;margin:0 0 0.75rem;}
    .tdmd-cat-header h3{font-size:1.15rem;margin:0;color:var(--tdmd-navy);}
    .tdmd-cat-count{font-size:0.88rem;color:var(--tdmd-muted);}
    .tdmd-cat-desc{margin:0 0 0.85rem;color:var(--tdmd-muted);font-size:0.95rem;}
    .tdmd-cat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:0.75rem;}
    .tdmd-cat-link{display:block;padding:0.75rem 1rem;border-radius:0.75rem;border:1px solid var(--tdmd-border);background:var(--tdmd-card);color:var(--tdmd-navy);font-weight:700;font-size:0.93rem;text-decoration:none;transition:border-color 0.15s,box-shadow 0.15s;}
    .tdmd-cat-link:hover,.tdmd-cat-link:focus{border-color:var(--tdmd-teal);box-shadow:0 4px 12px rgba(0,107,115,0.1);}

    .tdmd-how-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.25rem;margin:1.25rem 0;}
    .tdmd-how-step{background:var(--tdmd-card);border-radius:var(--tdmd-radius);padding:1.25rem;box-shadow:var(--tdmd-shadow);border:1px solid rgba(0,0,0,0.03);text-align:center;}
    .tdmd-how-number{width:2.5rem;height:2.5rem;border-radius:50%;background:var(--tdmd-navy);color:#fff;display:inline-grid;place-items:center;font-weight:900;font-size:1.25rem;margin-bottom:0.75rem;}
    .tdmd-how-step h3{font-size:1.05rem;margin:0 0 0.5rem;}
    .tdmd-how-step p{font-size:0.93rem;color:var(--tdmd-muted);margin:0;}

    .tdmd-pricing-simple{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:1.25rem;margin:1.25rem 0;}
    .tdmd-pricing-card{background:var(--tdmd-card);border-radius:var(--tdmd-radius);padding:1.5rem;box-shadow:var(--tdmd-shadow);border:1px solid rgba(0,0,0,0.03);}
    .tdmd-pricing-card-highlight{border-top:4px solid var(--tdmd-teal);}
    .tdmd-pricing-card h3{margin:0 0 0.5rem;font-size:1.1rem;}
    .tdmd-pricing-card .tdmd-price-big{font-size:2.5rem;font-weight:950;letter-spacing:-0.02em;color:var(--tdmd-teal);margin:0.25rem 0;}
    .tdmd-pricing-card p{color:var(--tdmd-muted);font-size:0.95rem;margin:0.5rem 0 0;}
    .tdmd-pricing-includes{margin:0.75rem 0 0;padding-left:1.2rem;display:grid;gap:0.3rem;font-size:0.93rem;}

    .tdmd-reg-block{background:var(--tdmd-card);border-radius:var(--tdmd-radius);padding:1.5rem;box-shadow:var(--tdmd-shadow);border:1px solid rgba(0,0,0,0.03);border-left:4px solid var(--tdmd-teal);margin:1rem 0;}
    .tdmd-reg-block p{margin:0.5rem 0 0;line-height:1.6;font-size:0.95rem;}

    .tdmd-city-grid{display:flex;flex-wrap:wrap;gap:0.5rem 0.85rem;margin:1rem 0;}
    .tdmd-city-tag{padding:0.4rem 0.85rem;border-radius:999px;border:1px solid var(--tdmd-border);background:var(--tdmd-card);color:var(--tdmd-navy);font-weight:650;font-size:0.88rem;}

    .tdmd-breadcrumbs{padding:0.75rem 0;font-size:0.88rem;color:var(--tdmd-muted);}
    .tdmd-breadcrumbs a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
    .tdmd-breadcrumbs a:hover{color:var(--tdmd-teal);}
    .tdmd-breadcrumbs .tdmd-bc-sep{margin:0 0.4rem;color:var(--tdmd-border);}

    .tdmd-other-states-grid{display:flex;flex-wrap:wrap;gap:0.5rem 0.65rem;margin:1rem 0;}
    .tdmd-other-state-link{display:inline-block;padding:0.4rem 0.85rem;border-radius:999px;border:1px solid var(--tdmd-border);background:var(--tdmd-card);color:var(--tdmd-navy);font-weight:700;font-size:0.88rem;text-decoration:none;transition:border-color 0.15s,background 0.15s;}
    .tdmd-other-state-link:hover,.tdmd-other-state-link:focus{border-color:var(--tdmd-teal);background:var(--tdmd-bg-soft);}

    @media (max-width:768px){
      .tdmd-how-steps{grid-template-columns:minmax(0,1fr);}
      .tdmd-pricing-simple{grid-template-columns:minmax(0,1fr);}
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: statePageCSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 0) Breadcrumb */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/what-we-treat">What We Treat</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">{state.name}</span>
        </div>
      </nav>

      {/* 1) Hero */}
      <section className="tdmd-hero" id={`${pid}-hero`}>
        <div className="tdmd-container">
          <h1>Online Doctor in {state.name} — TeleDirectMD</h1>
          <p className="tdmd-state-hero-sub">
            MD-only telehealth visits for {totalConditions} adult conditions. Same-day appointments, starting at $49 — no insurance required.
          </p>
          <p>
            TeleDirectMD connects you with a licensed physician in {state.name} through a secure video visit. Whether you need urgent care for a cold or UTI, a chronic medication refill for asthma or blood pressure, or treatment for a skin condition — we are here to help. Prescriptions are sent directly to your local {state.name} pharmacy.
          </p>

          <div className="tdmd-state-stats">
            <div className="tdmd-state-stat">
              <div className="tdmd-state-stat-number">{totalConditions}</div>
              <div className="tdmd-state-stat-label">Conditions treated</div>
            </div>
            <div className="tdmd-state-stat">
              <div className="tdmd-state-stat-number">$49</div>
              <div className="tdmd-state-stat-label">Starting price</div>
            </div>
            <div className="tdmd-state-stat">
              <div className="tdmd-state-stat-number">MD</div>
              <div className="tdmd-state-stat-label">Doctor-only visits</div>
            </div>
            <div className="tdmd-state-stat">
              <div className="tdmd-state-stat-number">{cities.length}+</div>
              <div className="tdmd-state-stat-label">Cities served</div>
            </div>
          </div>

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
      </section>

      {/* 2) Conditions Directory */}
      <section className="tdmd-section" id={`${pid}-conditions`}>
        <div className="tdmd-container">
          <h2>Conditions We Treat in {state.name}</h2>
          <p>Browse all {totalConditions} conditions by category. Click any condition for detailed information about symptoms, treatment options, and pricing for {state.name} residents.</p>

          <nav className="tdmd-cat-nav" aria-label="Condition categories">
            {categories.map((cat) => (
              <a key={cat.categorySlug} className="tdmd-cat-chip" href={`#${pid}-cat-${cat.categorySlug}`}>
                {cat.categoryName} ({cat.conditions.length})
              </a>
            ))}
          </nav>

          {categories.map((cat) => (
            <div key={cat.categorySlug} className="tdmd-cat-section" id={`${pid}-cat-${cat.categorySlug}`}>
              <div className="tdmd-cat-header">
                <h3>{cat.categoryName}</h3>
                <span className="tdmd-cat-count">{cat.conditions.length} condition{cat.conditions.length !== 1 ? 's' : ''}</span>
              </div>
              <p className="tdmd-cat-desc">{cat.categoryDescription}</p>
              <div className="tdmd-cat-grid">
                {cat.conditions.map((c) => (
                  <a key={c.slug} className="tdmd-cat-link" href={`/${stateSlug}/${c.slug}`}>
                    {c.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3) How It Works */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-how-it-works`}>
        <div className="tdmd-container">
          <h2>How TeleDirectMD Works in {state.name}</h2>
          <p>Getting care takes just three simple steps. Most visits are completed in under 15 minutes.</p>

          <div className="tdmd-how-steps">
            <div className="tdmd-how-step">
              <div className="tdmd-how-number">1</div>
              <h3>Book Your Visit</h3>
              <p>Choose your condition and select a same-day or next-day appointment. No referral needed.</p>
            </div>
            <div className="tdmd-how-step">
              <div className="tdmd-how-number">2</div>
              <h3>See Your Doctor</h3>
              <p>Meet with a licensed {state.name} MD via secure video. Discuss symptoms, review history, and get a diagnosis.</p>
            </div>
            <div className="tdmd-how-step">
              <div className="tdmd-how-number">3</div>
              <h3>Get Your Treatment</h3>
              <p>Receive your treatment plan and prescriptions sent directly to a {state.name} pharmacy like {pharmacies[0]} or {pharmacies[1] || 'Walgreens'}.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit Now</a>
          </div>
        </div>
      </section>

      {/* 4) Pricing */}
      <section className="tdmd-section" id={`${pid}-pricing`}>
        <div className="tdmd-container">
          <h2>TeleDirectMD Pricing in {state.name}</h2>
          <p>Simple, transparent pricing with no hidden fees, no subscriptions, and no insurance required.</p>

          <div className="tdmd-pricing-simple">
            <div className="tdmd-pricing-card tdmd-pricing-card-highlight">
              <h3>Video Visit</h3>
              <div className="tdmd-price-big">$49</div>
              <p>One-time fee per visit — no subscription</p>
              <ul className="tdmd-pricing-includes">
                <li>Full MD consultation via secure video</li>
                <li>Diagnosis and treatment plan</li>
                <li>Prescriptions sent to your {state.name} pharmacy</li>
                <li>Follow-up guidance included</li>
              </ul>
            </div>
            <div className="tdmd-pricing-card">
              <h3>What Is Not Included</h3>
              <p style={{ marginTop: '0.75rem' }}>TeleDirectMD visit fees do not cover:</p>
              <ul className="tdmd-pricing-includes">
                <li>Prescription medication costs (varies by pharmacy)</li>
                <li>Lab work or imaging (if recommended)</li>
                <li>Controlled substance prescriptions (not offered)</li>
                <li>In-person procedures or physical exams</li>
              </ul>
              <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
                Medication costs depend on your pharmacy and whether you use discount programs like GoodRx.
              </p>
            </div>
          </div>

          <p className="tdmd-cost-note">
            <strong>No hidden fees.</strong> Your $49 visit fee is the complete cost for your TeleDirectMD consultation. Insurance is not required and not accepted.
          </p>
        </div>
      </section>

      {/* 5) Telehealth Regulations */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-telehealth-regulations`}>
        <div className="tdmd-container">
          <h2>Telehealth Regulations in {state.name}</h2>
          <p>TeleDirectMD operates in full compliance with {state.name} telehealth laws and medical board requirements.</p>

          <div className="tdmd-reg-block">
            <h3>{state.name} Telehealth Law</h3>
            <p>{state.telehealthRegulation}</p>
          </div>

          <p>
            All TeleDirectMD physicians are licensed to practice medicine in {state.name} and follow state-specific prescribing guidelines. A valid physician-patient relationship is established during each video visit. TeleDirectMD does not prescribe controlled substances.
          </p>
        </div>
      </section>

      {/* 6) Cities */}
      <section className="tdmd-section" id={`${pid}-cities`}>
        <div className="tdmd-container">
          <h2>Cities We Serve in {state.name}</h2>
          <p>TeleDirectMD is available to patients across {state.name}. As a telehealth service, you can connect with a doctor from anywhere in the state — no need to travel to a clinic.</p>

          <div className="tdmd-city-grid">
            {cities.map((city) => (
              <span key={city} className="tdmd-city-tag">{city}</span>
            ))}
          </div>

          <div className="tdmd-city-block" style={{ marginTop: '1.5rem' }}>
            <h3>Your Local Pharmacies in {state.name}</h3>
            <p>
              After your visit, prescriptions can be sent to any {state.name} pharmacy, including {pharmacies.join(', ')}, and other local pharmacies in {cities[0]}, {cities[1] || cities[0]}, {cities[2] || cities[0]}, and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* 7) FAQ */}
      <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
        <div className="tdmd-container">
          <h2>Frequently Asked Questions — TeleDirectMD in {state.name}</h2>

          <div className="tdmd-faq-list" role="list">
            <details className="tdmd-faq-item" role="listitem">
              <summary className="tdmd-faq-question">What conditions does TeleDirectMD treat in {state.name}?</summary>
              <div className="tdmd-faq-answer">
                <p>TeleDirectMD treats {totalConditions} adult conditions in {state.name}, organized into {categories.length} categories: {categories.map((c) => c.categoryName).join(', ')}. Common conditions include colds, flu, UTIs, sinus infections, acne, eczema, asthma refills, blood pressure refills, and more.</p>
              </div>
            </details>
            <details className="tdmd-faq-item" role="listitem">
              <summary className="tdmd-faq-question">How much does a visit cost?</summary>
              <div className="tdmd-faq-answer">
                <p>TeleDirectMD visits start at $49 per visit. There are no hidden fees, no subscription, and no insurance required. The visit fee covers the full MD consultation, diagnosis, treatment plan, and prescriptions sent to your preferred {state.name} pharmacy.</p>
              </div>
            </details>
            <details className="tdmd-faq-item" role="listitem">
              <summary className="tdmd-faq-question">Do I need insurance to use TeleDirectMD?</summary>
              <div className="tdmd-faq-answer">
                <p>No. TeleDirectMD is a self-pay telehealth service. Insurance is not required and not accepted. The $49 visit fee is the complete cost for your consultation.</p>
              </div>
            </details>
            <details className="tdmd-faq-item" role="listitem">
              <summary className="tdmd-faq-question">Can TeleDirectMD prescribe medications in {state.name}?</summary>
              <div className="tdmd-faq-answer">
                <p>Yes. After your video visit, your TeleDirectMD physician can send prescriptions electronically to any {state.name} pharmacy, including {pharmacies.join(', ')}. Prescriptions are typically available for pickup within 1–2 hours. TeleDirectMD does not prescribe controlled substances.</p>
              </div>
            </details>
            <details className="tdmd-faq-item" role="listitem">
              <summary className="tdmd-faq-question">Who will I see during my visit?</summary>
              <div className="tdmd-faq-answer">
                <p>Every TeleDirectMD visit is conducted by a licensed MD — not a nurse practitioner or physician assistant. Our physicians are licensed to practice medicine in {state.name} and are board-certified.</p>
              </div>
            </details>
            <details className="tdmd-faq-item" role="listitem">
              <summary className="tdmd-faq-question">How quickly can I get an appointment?</summary>
              <div className="tdmd-faq-answer">
                <p>Most TeleDirectMD appointments are available same-day. Simply choose your condition, select an available time, and connect with a doctor from anywhere in {state.name} via secure video.</p>
              </div>
            </details>
            <details className="tdmd-faq-item" role="listitem">
              <summary className="tdmd-faq-question">Does TeleDirectMD prescribe controlled substances?</summary>
              <div className="tdmd-faq-answer">
                <p>No. TeleDirectMD does not prescribe controlled substances (Schedule II–V), including opioids, benzodiazepines, stimulants, or sleep medications. If your condition requires a controlled substance, we will refer you to an appropriate in-person provider.</p>
              </div>
            </details>
            <details className="tdmd-faq-item" role="listitem">
              <summary className="tdmd-faq-question">Can I use TeleDirectMD for medication refills?</summary>
              <div className="tdmd-faq-answer">
                <p>Yes. TeleDirectMD offers convenient refills for chronic medications including asthma inhalers, blood pressure medications, thyroid medications, cholesterol medications, migraine preventives, diabetes medications, acid reflux medications, and EpiPen auto-injectors. A video visit with an MD is required to review your condition and renew your prescription.</p>
              </div>
            </details>
          </div>

          <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
            <div className="tdmd-bottom-cta-copy">
              <h3>Ready to see a doctor in {state.name}?</h3>
              <p>Book a same-day video visit with a licensed MD. No insurance required, starting at $49.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8) Other States */}
      <section className="tdmd-section" id={`${pid}-other-states`}>
        <div className="tdmd-container">
          <h2>TeleDirectMD Is Also Available in {otherStates.length} Other States</h2>
          <p>TeleDirectMD provides MD-only telehealth visits across 40+ states. Whether you are traveling, relocating, or have family in another state — we can help. Select a state below to explore available conditions and book a visit.</p>
          <div className="tdmd-other-states-grid">
            {otherStates.map((s) => (
              <a key={s.slug} className="tdmd-other-state-link" href={`/${s.slug}/`}>{s.name}</a>
            ))}
          </div>
        </div>
      </section>

      {/* 9) Disclaimer */}
      <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
        <div className="tdmd-container">
          <h2>Medical Disclaimer</h2>
          <p>
            The information on this page is for educational purposes only and does not constitute medical advice. TeleDirectMD provides telehealth consultations with licensed physicians who evaluate each patient individually. Treatment decisions are made during your video visit based on your specific symptoms, medical history, and clinical judgment.
          </p>
          <p>
            TeleDirectMD does not guarantee that a prescription will be issued for any condition. If your physician determines that your condition requires in-person evaluation, lab work, imaging, or a specialist referral, they will advise you accordingly. TeleDirectMD does not prescribe controlled substances. If you are experiencing a medical emergency, call 911 or go to your nearest emergency room immediately.
          </p>
          <p>
            TeleDirectMD physicians are licensed in {state.name} and operate in compliance with state telehealth regulations. All visits are subject to clinical appropriateness as determined by your treating physician.
          </p>
        </div>
      </section>
    </>
  );
}
