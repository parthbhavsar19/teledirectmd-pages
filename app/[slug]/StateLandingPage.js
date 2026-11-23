import { PILOT_COHORT_BY_STATE, stateConditionHref } from '../../lib/live-routes';
import { getStates, getStateBySlug, getConditionCategories } from '../../lib/get-data';
import { getStateInsurance } from '../../lib/insurance-data';
import { getInsurersForState } from '../../lib/internal-links';
import { CitableSummaryBlock } from '../components/CitableSummary';
import { STATE_SHAPES } from '../../lib/state-shapes';
import FaqAccordion from '../components/FaqAccordion';
import { FlCredentialBlock, FlFooterCompliance } from '../components/FlCompliance';
import { TxComplaintNoticeLink } from '../components/TxComplaintNotice';
import { summarizeStateLanding, citableSummaryToJsonLd } from '../../lib/citable-summary';
// ── 2026-06-12 Phase 2 task 4: state-hub uniqueness architecture ──
// Same per-state JSON template that powers /[slug]/[conditionSlug] also feeds
// /[slug] (state hub). loadStateTemplate returns null when no template exists,
// causing the stateTpl && (...) guards below to render NOTHING — pages fall
// back to current generic behavior. See data/state-templates/_schema.md.
import { loadStateTemplate, stateLandingDate, getRelatedLinks, getStateSources } from '../../lib/state-template';
import { cprDarkCSS } from '../../lib/redesign-dark-styles';
import stateLicensesData from '../../data/state-licenses.json';
import CONDITION_ICONS from '../../lib/condition-icons';
import { stateHubCSS } from '../../lib/state-hub-styles';

// Six conditions shown first on every hub, chosen from the practice's priority
// list (sinus, UTI, BV, yeast, flu, refills). Each still renders only where
// stateConditionHref() publishes the page for that state.
const COMMON_CONCERNS = [
  { slug: 'uti-treatment-online', label: 'UTI', sub: 'Women only', icon: 'UTI' },
  { slug: 'sinus-infection-treatment-online', label: 'Sinus infection', sub: 'Pressure, congestion', icon: 'Sinus Infection' },
  { slug: 'influenza-treatment-online', label: 'Flu', sub: 'Fever, aches, cough', icon: 'Influenza' },
  { slug: 'bv-treatment-online', label: 'Bacterial vaginosis', sub: 'Discharge, odor', icon: 'Bacterial Vaginosis' },
  { slug: 'yeast-infection-treatment-online', label: 'Yeast infection', sub: 'Itching, discharge', icon: 'Yeast Infection' },
  { slug: 'hypertension-refills-online', label: 'Blood pressure refill', sub: 'Ongoing medication', icon: 'Hypertension Refills' },
];

// One glyph per category, borrowed from a condition in it.
const CATEGORY_ICON = {
  'urgent-care': 'Sore Throat',
  'womens-health': 'Birth Control Refills',
  'sexual-health': 'DoxyPEP STI Prevention',
  'skin-conditions': 'Acne',
  'bites-and-infestations': 'Tick Bite',
  'chronic-medication-refills': 'Asthma Refills',
  'wellness-and-lifestyle': 'Smoking Cessation',
  'travel-medicine': 'Travel Medicine',
};

export default function StateLandingPage({ stateSlug }) {
  const state = getStateBySlug(stateSlug);
  const stateTpl = loadStateTemplate(stateSlug);
  const pilotCohort = PILOT_COHORT_BY_STATE[stateSlug];
  const isPilotCohortState = Boolean(pilotCohort);
  const stateLicense = (stateLicensesData.licenses || {})[stateSlug];
  const stateCredential = stateLicense?.licenseNumber ? {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: stateLicense.credentialCategory || 'Medical License',
    name: stateLicense.credentialDisplayLong || `${state.name} Medical License`,
    identifier: stateLicense.licenseNumber,
    recognizedBy: {
      '@type': 'GovernmentOrganization',
      name: stateLicense.issuingBoard,
      url: stateLicense.issuingBoardUrl || stateLicense.verificationUrl
    },
    validIn: { '@type': 'State', name: state.name },
    ...(stateLicense.verificationUrl ? { url: stateLicense.verificationUrl } : {}),
    ...(stateLicense.dateIssued ? { validFrom: stateLicense.dateIssued } : {}),
    // A past expiry date tells search engines the license lapsed; omit it until renewed dates are entered.
    ...(stateLicense.dateExpires && stateLicense.dateExpires >= new Date().toISOString().slice(0, 10) ? { validThrough: stateLicense.dateExpires } : {})
  } : null;
  const categories = getConditionCategories();
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/${stateSlug}`;
  const today = stateLandingDate(stateSlug);
  // Human-readable form of `today` for on-page display. `today` itself stays ISO
  // because it feeds datePublished/dateModified in JSON-LD.
  const todayDisplay = new Date(`${today}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
  });
  const pid = stateSlug;
  const cities = state.cities || [];
  const pharmacies = state.pharmacies || ['CVS Pharmacy', 'Walgreens', 'Walmart Pharmacy'];
  const stateInsurers = getStateInsurance(state.abbr);
  const hasInsurance = !!stateInsurers;
  const insurerStateLinks = getInsurersForState(state.abbr);

  const displayedCategories = isPilotCohortState
    ? categories.map((cat) => ({ ...cat, conditions: cat.conditions.filter((condition) => pilotCohort.has(condition.slug)) })).filter((cat) => cat.conditions.length)
    : categories;
  // How many conditions TeleDirectMD actually treats in this state. This is the
  // full catalogue and is identical everywhere — a pilot cohort limits which
  // /{state}/{condition} pages are PUBLISHED, not what the practice treats.
  // Deriving it from displayedCategories made Alaska advertise 20 conditions
  // while Vermont, which publishes the same 20 pages, advertised 64.
  const totalConditions = categories.reduce((sum, cat) => sum + cat.conditions.length, 0);
  // Copy says "60+" for full-coverage states; pilot states keep their exact count.
  const conditionsLabel = totalConditions >= 60 ? '60+' : String(totalConditions);
  // How many of those have a dedicated in-state page to link to.
  const linkedConditions = displayedCategories.reduce((sum, cat) => sum + cat.conditions.length, 0);

  const allStates = getStates();
  const otherStates = allStates.filter((s) => s.slug !== stateSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "TeleDirectMD",
        "publisher": { "@id": `${baseUrl}/#organization` },
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
        "@id": `${baseUrl}/#organization`,
        "name": "TeleDirectMD",
        "url": baseUrl,
        "telephone": "+1-678-956-1855",
        "email": "contact@teledirectmd.com",
        "logo": `${baseUrl}/assets/brand/teledirectmd-logo.png`,
        "description": "TeleDirectMD is an MD-only virtual urgent care service offering secure video visits for adults across multiple states, using evidence-based evaluation and safety-first triage. Insurance is not required but is accepted in select states. TeleDirectMD does not prescribe controlled substances.",
        "areaServed": "United States"
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${pageUrl}#medical-business`,
        "name": `TeleDirectMD, ${state.name}`,
        "url": pageUrl,
        "telephone": "+1-678-956-1855",
        "email": "contact@teledirectmd.com",
        "description": `TeleDirectMD provides MD-only telehealth video visits in ${state.name} for ${conditionsLabel} adult conditions, for a flat $79 self-pay fee.${hasInsurance ? ' Select insurance plans accepted.' : ' No insurance required.'}`,
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": state.name,
          "sameAs": `https://en.wikipedia.org/wiki/${encodeURIComponent(state.name)}`
        },
        "medicalSpecialty": ["Primary Care", "Family Medicine", "Telemedicine"],
        "parentOrganization": { "@id": `${baseUrl}/#organization` },
        "priceRange": "$79",
        "isAcceptingNewPatients": true,
        "availableService": categories.map((cat) => ({
          "@type": "MedicalProcedure",
          "name": cat.categoryName,
          "description": cat.categoryDescription
        }))
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}/about/#physician`,
        "name": "Parth Bhavsar, MD",
        "url": `${baseUrl}/about`,
        "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" },
        "medicalSpecialty": "Family Medicine",
        "areaServed": { "@type": "State", "name": state.name },
        "affiliation": { "@id": `${baseUrl}/#organization` },
        ...(stateCredential ? { "hasCredential": stateCredential } : {}),
        ...(hasInsurance ? {
          "acceptsInsurance": stateInsurers.map((ins) => ({
            "@type": "HealthInsurancePlan",
            "name": `${ins.name}, ${state.name} (${ins.plans})`,
            "includesHealthPlanFormulary": {
              "@type": "HealthPlanFormulary",
              "offersPrescriptionDrug": true
            }
          }))
        } : {})
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": `Online Doctor in ${state.name} with TeleDirectMD`,
        "description": `See an MD-only doctor online in ${state.name}. TeleDirectMD offers same-day video visits for ${conditionsLabel} adult conditions, for a flat $79.`,
        "inLanguage": "en-US",
        "breadcrumb": { "@id": `${pageUrl}#breadcrumbs` },
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "publisher": { "@id": `${baseUrl}/#organization` },
        "author": { "@id": `${baseUrl}/about/#physician` },
        "datePublished": today,
        "dateModified": today,
        "about": { "@id": `${pageUrl}#medical-business` },
        ...(getStateSources(stateTpl).length ? { "citation": getStateSources(stateTpl).map((c) => c.url) } : {})
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "isPartOf": { "@id": `${pageUrl}#webpage` },
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What conditions does TeleDirectMD treat in ${state.name}?`,
            "acceptedAnswer": { "@type": "Answer", "text": `TeleDirectMD treats ${conditionsLabel} adult conditions in ${state.name}, including urgent care (cold, flu, UTI (women only), sinus infection), chronic medication refills (asthma, hypertension, thyroid), skin conditions (acne, eczema, rosacea), sexual health, women's health, and more. All visits are conducted by licensed MDs via secure video.` }
          },
          {
            "@type": "Question",
            "name": `How much does a TeleDirectMD visit cost in ${state.name}?`,
            "acceptedAnswer": { "@type": "Answer", "text": `A TeleDirectMD visit is a flat $79 self-pay fee, paid at booking, with no subscription, and insurance is not needed.${hasInsurance ? ' Select insurance plans are also accepted, and standard copays apply.' : ''} The fee covers the physician consultation, diagnosis and treatment plan, and any prescription is sent electronically to your preferred ${state.name} pharmacy. Medication costs at the pharmacy are separate.` }
          },
          {
            "@type": "Question",
            "name": `Do I need insurance for a TeleDirectMD visit in ${state.name}?`,
            "acceptedAnswer": { "@type": "Answer", "text": hasInsurance ? `No, insurance is not required. TeleDirectMD offers a flat $79 self-pay option. However, we also accept select insurance plans in ${state.name}, including ${stateInsurers.map(i => i.name).join(', ')}. Visit our Insurance page for details.` : `No. TeleDirectMD is a self-pay telehealth service. Insurance is not required. The transparent $79 visit fee covers your entire consultation. We are actively expanding insurance coverage to more states.` }
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

  // Breadcrumb rules only; the rest of the hub layout lives in
  // lib/state-hub-styles.js (2026-11-23 redesign).
  const statePageCSS = `
    .tdmd-breadcrumbs{padding:0.75rem 0;font-size:0.88rem;color:var(--tdmd-muted);}
    .tdmd-breadcrumbs a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
    .tdmd-breadcrumbs a:hover{color:var(--tdmd-teal);}
    .tdmd-breadcrumbs .tdmd-bc-sep{margin:0 0.4rem;color:var(--tdmd-border);}
  `;

  // ── Citable summary for AI extractors (State landing)
  const citableSummary_AI = summarizeStateLanding({ state });
  const pageUrl_AI = `https://teledirectmd.com/${stateSlug}/`;
  const citableJsonLd_AI = citableSummaryToJsonLd(citableSummary_AI, { pageUrl: pageUrl_AI, dateModified: stateLandingDate(stateSlug) });


  // Conditions that carry a state-specific paragraph on their /{state}/{slug}/
  // page (stateTpl.conditionOverrides). Marked in the index so each hub shows
  // its own depth instead of 63 identical links.
  const stateNoteSlugs = new Set(
    Object.entries((stateTpl && stateTpl.conditionOverrides) || {})
      .filter(([, v]) => v && v.stateConditionParagraph)
      .map(([k]) => k)
  );
  const indexCategories = displayedCategories
    .map((cat) => ({ ...cat, links: cat.conditions.filter((c) => stateConditionHref(stateSlug, c.slug)) }))
    .filter((cat) => cat.links.length);
  const notedCount = indexCategories.reduce((n, cat) => n + cat.links.filter((c) => stateNoteSlugs.has(c.slug)).length, 0);
  const allConditions = categories.flatMap((cat) => cat.conditions);
  const commonConcerns = COMMON_CONCERNS
    .map((cc) => ({ ...cc, condition: allConditions.find((c) => c.slug === cc.slug) }))
    .filter((cc) => cc.condition && stateConditionHref(stateSlug, cc.slug));
  const localTriggers = (stateTpl && stateTpl.stateEligibility && Array.isArray(stateTpl.stateEligibility.localTriggers))
    ? stateTpl.stateEligibility.localTriggers.filter(Boolean)
    : [];
  const noteLabel = `${state.name}-specific guidance on this page`;
  const stateShape = STATE_SHAPES[(state.abbr || '').toLowerCase()];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: statePageCSS + stateHubCSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* New York: the summary answer leads the visible FAQ instead of a hidden
          block (2026-11-03). Other hubs keep the hidden block, which no longer
          emits FAQPage markup (see CitableSummary.js). */}
      {stateSlug !== 'ny' && (
        <CitableSummaryBlock summary={citableSummary_AI} jsonLd={citableJsonLd_AI} idSuffix={`state-${stateSlug}`} />
      )}

      {/* 0) Breadcrumb */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/what-we-treat/">What We Treat</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">{state.name}</span>
        </div>
      </nav>

      <div className="shx">
      {/* 1) Hero. 2026-11-23 redesign: the price card on the right is now a
         "{State} at a glance" fact sheet (definition list) that carries the
         license number and verify link, the visit fee, where the patient must
         be, insurance and prescriptions. Those are the facts ChatGPT quoted when
         it cited a hub (Monid run, see seo-dashboard/state-hub-redesign). The
         separate verify bar is folded into it. Everything else in the left
         column is unchanged. */}
      <div className="cpr">
        <style dangerouslySetInnerHTML={{ __html: `
          .cpr{--navy:#003E52;--teal:#0C8F99;--teal-ink:#006B73;--gold:#E8A33D;--ink:#12303b;--muted:#5c7078;--line:#e4ecee;}
          .cpr-hero h1{font-family:'Fraunces',Georgia,serif;font-weight:600;letter-spacing:-0.01em;}
          .cpr-hero-wrap{max-width:1100px;margin:0 auto;padding:0 1.5rem;}
          .cpr-hero{background:linear-gradient(160deg,#012f3e 0%,#01465a 60%,#065f6b 100%);color:#fff;padding:3rem 0 3.25rem;font-family:'DM Sans',system-ui,sans-serif;}
          .cpr-hero-grid{display:grid;grid-template-columns:1.08fr .92fr;grid-template-areas:"head glance" "body glance";grid-template-rows:auto 1fr;column-gap:2.5rem;row-gap:0;align-items:start;}
          .shx-hero-head{grid-area:head;}.shx-hero-body{grid-area:body;}.shx-glance{grid-area:glance;}
          @media(max-width:840px){.cpr-hero-grid{grid-template-columns:1fr;grid-template-areas:"head" "glance" "body";row-gap:1.75rem;}}
          .cpr-hero h1{font-size:clamp(2rem,4.4vw,2.9rem);line-height:1.08;color:#fff;margin:0 0 .9rem;}
          .cpr-hero .sub{font-size:1.05rem;line-height:1.55;color:#d7ebee;margin:0 0 1.5rem;max-width:52ch;font-weight:650;}
          .cpr-hero .intro{font-size:.97rem;line-height:1.6;color:#bfdfe3;margin:0 0 1.5rem;max-width:56ch;}
          .cpr-hero-answer{background:rgba(255,255,255,0.08);border-left:4px solid #7fd0d8;border-radius:0 10px 10px 0;padding:.9rem 1.15rem;margin:0 0 1.5rem;}
          .cpr-hero-answer p{margin:0;color:#eaf6f7;font-size:.98rem;line-height:1.55;}
          .cpr-hero-ctas{display:flex;flex-wrap:wrap;gap:.75rem;margin-bottom:1.1rem;}
          .cpr-hero-cta{display:inline-flex;align-items:center;gap:.5rem;background:var(--gold);color:#08313f;font-weight:700;padding:.85rem 1.6rem;border-radius:12px;text-decoration:none;font-size:1rem;box-shadow:0 10px 26px rgba(232,163,61,.3);transition:transform .15s,filter .15s;}
          .cpr-hero-cta:hover{transform:translateY(-1px);filter:brightness(1.05);}
          .cpr-hero-cta-outline{display:inline-flex;align-items:center;padding:.8rem 1.4rem;border-radius:12px;border:1px solid rgba(255,255,255,0.35);color:#eaf6f7;font-weight:600;text-decoration:none;font-size:.92rem;}
          .cpr-hero-cta-outline:hover{border-color:#7fd0d8;color:#7fd0d8;}
          .cpr-hero-reviewed{font-size:.85rem;color:#9fc6ca;margin:.9rem 0 0;}
          .cpr-hero-author-link{color:#bfdfe3;font-weight:700;}
          .cpr-hero-hcard{background:#fff;border-radius:18px;padding:1.5rem;box-shadow:0 18px 46px rgba(0,0,0,.26);color:var(--ink);}
          .cpr-hero-hcard-cta{display:block;width:100%;box-sizing:border-box;margin:1.15rem 0 0;padding:.85rem 1.25rem;border-radius:999px;background:var(--teal-ink);color:#fff;font-weight:800;font-size:1rem;text-align:center;text-decoration:none;box-shadow:0 8px 22px rgba(0,107,115,.30);transition:background .15s,transform .15s;}
          .cpr-hero-hcard-cta:hover,.cpr-hero-hcard-cta:focus{background:var(--navy);transform:translateY(-1px);color:#fff;}
          @media (prefers-reduced-motion:reduce){.cpr-hero-cta,.cpr-hero-hcard-cta{transition:none;}.cpr-hero-cta:hover,.cpr-hero-hcard-cta:hover{transform:none;}}
          ${cprDarkCSS}
        ` }} />
        {stateTpl && stateTpl.stateInsurance && stateTpl.stateInsurance.mode === 'self-pay-only' && (
          <style dangerouslySetInnerHTML={{ __html: `.tdmd-mobile-sticky-bar .tdmd-sticky-bar-text span{font-size:0;}.tdmd-mobile-sticky-bar .tdmd-sticky-bar-text span::after{content:"Self-pay only in ${state.name}";font-size:0.82rem;}` }} />
        )}
        <section className="cpr-hero" id={`${pid}-hero`}>
          {stateShape && (
            <svg className="shx-hero-map" viewBox={stateShape.vb} aria-hidden="true" focusable="false"><path d={stateShape.d} /></svg>
          )}
          <div className="cpr-hero-wrap cpr-hero-grid">
            <div className="shx-hero-head">
              <h1 data-speakable="true">Online Doctor in {state.name} with TeleDirectMD</h1>
              <p className="sub" data-speakable="true">
                MD-only telehealth visits for {conditionsLabel} adult conditions. Same-day appointments, flat $79 self-pay{hasInsurance ? ', with select insurance plans accepted' : ', no insurance required'}.
              </p>
              {/* Hero CTAs sit right under the subhead so the first mobile
                 screen has the price and the action. The /{state}/online-doctor-visits pages were retired 2026-08-12 (301 to this hub). Two CTAs only. */}
              <div className="cpr-hero-ctas">
                <a href="/book-online/" className="cpr-hero-cta">Book a $79 visit</a>
                <a href={`#${pid}-conditions`} className="cpr-hero-cta-outline">See conditions treated in {state.name}</a>
              </div>

            </div>

            <aside className="cpr-hero-hcard shx-glance" aria-labelledby={`${pid}-glance`}>
              <div className="shx-glance-head">
                {stateShape && (
                  <svg className="shx-glance-map" viewBox={stateShape.vb} aria-hidden="true" focusable="false"><path d={stateShape.d} /></svg>
                )}
                <h2 id={`${pid}-glance`}>{state.name} at a glance</h2>
              </div>
              <dl data-speakable="true">
                <div className="shx-row">
                  <dt>Visit fee</dt>
                  <dd><span className="shx-fee">$79</span>Flat self-pay, paid at booking. No subscription.</dd>
                </div>
                <div className="shx-row">
                  <dt>Your physician</dt>
                  <dd className="shx-doc"><img src="/images/bhavsar-avatar.webp" alt="Parth Bhavsar, MD" width="44" height="44" /><span><strong>Parth Bhavsar, MD</strong>, board-certified in family medicine. MD-only, never an NP or PA.</span></dd>
                </div>
                {stateLicense?.licenseNumber && (
                  <div className="shx-row">
                    <dt>{state.name} license</dt>
                    <dd>
                      <strong>{stateLicense.licenseNumber}</strong>, {stateLicense.issuingBoard}
                      {stateLicense.verificationUrl && (
                        <><br /><a className="shx-verify" href={stateLicense.verificationUrl} target="_blank" rel="noopener noreferrer nofollow">Verify this license</a></>
                      )}
                    </dd>
                  </div>
                )}
                <div className="shx-row">
                  <dt>Where you need to be</dt>
                  <dd>In {state.name} during the video visit. Adults 18 and older.</dd>
                </div>
                <div className="shx-row">
                  <dt>Insurance</dt>
                  <dd>{hasInsurance
                    ? <>Not required. In-network in {state.name} with {stateInsurers.map((i) => i.name).join(', ')}.</>
                    : <>Not required. Self-pay in {state.name}; HSA and FSA cards accepted.</>}
                  </dd>
                </div>
                <div className="shx-row">
                  <dt>Prescriptions</dt>
                  <dd>Sent to your {state.name} pharmacy when your physician decides one fits. No controlled substances.</dd>
                </div>
              </dl>
              <a href="/book-online/" className="cpr-hero-hcard-cta">Book a visit</a>
            </aside>

            <div className="shx-hero-body">

              {/* State hub uniqueness opener: renders only when stateTpl is populated. */}
              {stateTpl && stateTpl.stateHero && stateTpl.stateHero.openingParagraph && (
                <div className="cpr-hero-answer" data-speakable="true">
                  <p>{stateTpl.stateHero.openingParagraph}</p>
                </div>
              )}

              <p className="intro">
                TeleDirectMD connects you with a licensed physician in {state.name} through a secure video visit. Whether you need urgent care for a cold or UTI in women, a chronic medication refill for asthma or blood pressure, or treatment for a skin condition, we are here to help. Prescriptions are sent directly to your local {state.name} pharmacy.
              </p>

              <p className="cpr-hero-reviewed">
                Last reviewed on <time dateTime={today}>{todayDisplay}</time> by{' '}
                <a className="cpr-hero-author-link" href="/about/" aria-label="About Parth Bhavsar, MD">
                  Parth Bhavsar, MD
                </a>
              </p>
              {/* FL: A1 credential disclosure + A3 verify-link placement 1 of 3. */}
              {state.abbr === 'FL' && <FlCredentialBlock />}
              {state.abbr === 'TX' && <TxComplaintNoticeLink />}
            </div>

          </div>
        </section>
      </div>

      {/* 1b) Answer Block: AI snippet target. */}
      <div className="tdmd-answer-block" data-speakable="true" style={{
        background: '#EAF7F8', borderLeft: '4px solid #006B73',
        padding: '1rem 1.25rem', margin: '0', lineHeight: 1.6
      }}>
        <div className="tdmd-container">
          <p style={{ margin: 0, fontWeight: 700, color: '#003E52', fontSize: '1.05rem' }}>
            Online doctor in {state.name}:
          </p>
          <p style={{ margin: '0.35rem 0 0', color: '#003E52', fontSize: '0.97rem' }}>
            TeleDirectMD provides same-day video visits with a board-certified MD in {state.name} for {conditionsLabel} adult conditions for a flat $79 self-pay fee, no insurance required{hasInsurance ? `, though select plans are accepted in ${state.name}` : ''}. Book online, see a licensed physician via secure video, and get a prescription sent directly to your local {state.name} pharmacy.
          </p>
        </div>
      </div>

      {/* 2) Conditions. Pilot states link only to their published cohort. Every
         condition is a plain <a href> in the server HTML; nothing is hidden or
         rendered by script. */}
      <section className="shx-care" id={`${pid}-conditions`}>
        <div className="tdmd-container">
          <h2>Conditions We Treat in {state.name}</h2>
          <p className="shx-lede">Browse {linkedConditions === totalConditions ? `all ${totalConditions}` : `${linkedConditions} of our ${totalConditions}`} conditions by category. Click any condition for detailed information about symptoms, treatment options, and pricing for {state.name} residents.</p>

          {commonConcerns.length > 0 && (
            <div className="shx-start" aria-labelledby={`${pid}-start`}>
              <h3 id={`${pid}-start`}>Start with a common concern</h3>
              <ul>
                {commonConcerns.map((cc) => (
                  <li key={cc.slug}>
                    <a href={stateConditionHref(stateSlug, cc.slug)}>
                      <span className="shx-start-art">
                        <img src={`/images/wwt/card/${cc.slug}.webp`} alt="" width="480" height="268" loading="lazy" decoding="async" />
                      </span>
                      <span className="shx-start-text">
                        <span className="shx-start-name">{cc.label}</span>
                        <span className="shx-start-sub">{cc.sub}</span>
                      </span>
                      {stateNoteSlugs.has(cc.slug) && <span className="shx-dot" role="img" aria-label={noteLabel} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {notedCount > 0 && (
            <p className="shx-legend"><span className="shx-dot" aria-hidden="true" />{notedCount} condition page{notedCount !== 1 ? 's' : ''} below include{notedCount === 1 ? 's' : ''} {state.name}-specific guidance.</p>
          )}

          {/* Each category is a native <details>: closed by default so the
             index reads as eight short rows, opened with a click, Enter or
             Space. The links stay in the server HTML either way, so crawlers
             and AI readers see all of them. Find-in-page opens a match. */}
          <div className="shx-index">
            {indexCategories.map((cat) => {
              const noted = cat.links.filter((c) => stateNoteSlugs.has(c.slug)).length;
              return (
                <details key={cat.categorySlug} className="shx-cat" id={`${pid}-cat-${cat.categorySlug}`}>
                  <summary>
                    <span className="shx-glyph" aria-hidden="true" dangerouslySetInnerHTML={{ __html: CONDITION_ICONS[CATEGORY_ICON[cat.categorySlug]] || '' }} />
                    <h3 id={`${pid}-cat-${cat.categorySlug}-h`}>{cat.categoryName}</h3>
                    {noted > 0 && (
                      <span className="shx-cat-noted"><span className="shx-dot" aria-hidden="true" /><span className="shx-cat-noted-n">{noted}</span><span className="shx-sr"> with {state.name}-specific guidance</span></span>
                    )}
                    <span className="shx-cat-count">{cat.links.length}<span className="shx-cat-unit"> condition{cat.links.length !== 1 ? 's' : ''}</span></span>
                    <span className="shx-chev" aria-hidden="true" />
                  </summary>
                  <div className="shx-cat-body">
                    <p className="shx-cat-desc">{cat.categoryDescription}</p>
                    <ul>
                      {cat.links.map((c) => (
                        <li key={c.slug}>
                          <a href={stateConditionHref(stateSlug, c.slug)}>
                            {c.name}
                            {stateNoteSlugs.has(c.slug) && <span className="shx-dot" role="img" aria-label={noteLabel} />}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3) How It Works */}
      <section className="shx-how" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
        <div className="tdmd-container">
          <h2 itemProp="name">How TeleDirectMD Works in {state.name}</h2>
          <p className="shx-lede">Getting care takes just three simple steps. Most visits are completed in under 15 minutes.</p>

          <ol className="shx-steps">
            <li>
              <img src="/images/steps/hub-step-book.webp" alt="" width="960" height="640" loading="lazy" decoding="async" />
              <h3>Book Your Visit</h3>
              <p>Choose your condition and select a same-day or next-day appointment. No referral needed.</p>
            </li>
            <li>
              <img src="/images/steps/hub-step-visit.webp" alt="" width="960" height="640" loading="lazy" decoding="async" />
              <h3>See Your Doctor</h3>
              <p>Meet with a licensed {state.name} MD via secure video. Discuss symptoms, review history, and get a diagnosis.</p>
            </li>
            <li>
              <img src="/images/steps/hub-step-pharmacy.webp" alt="" width="960" height="640" loading="lazy" decoding="async" />
              <h3>Get Your Treatment</h3>
              <p>Receive your treatment plan and prescriptions sent directly to a {state.name} pharmacy like {pharmacies[0]} or {pharmacies[1] || 'Walgreens'}.</p>
            </li>
          </ol>
          <div className="shx-how-cta">
            <a href="/book-online/" className="tdmd-btn tdmd-btn-primary">Book a Visit Now</a>
          </div>

          {localTriggers.length > 0 && (
            <div className="shx-rules" aria-labelledby={`${pid}-rules`}>
              <h3 id={`${pid}-rules`}>What {state.name} rules mean for your visit</h3>
              <ul>
                {localTriggers.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 4) Pricing, with the insurer links folded in (4b before 2026-11-23). */}
      <section className="shx-pay" id={`${pid}-pricing`}>
        <div className="tdmd-container">
          <h2>TeleDirectMD Pricing in {state.name}</h2>
          <p className="shx-lede">Simple, transparent pricing with no hidden fees and no subscriptions.{hasInsurance ? ' Self-pay and select insurance plans accepted.' : ' No insurance required.'}</p>

          <div className="shx-pay-grid">
            <div className="shx-price">
              <h3>Video Visit</h3>
              <div className="shx-price-fig">$79</div>
              <p>One-time fee per visit, no subscription</p>
              <ul>
                <li>Full MD consultation via secure video</li>
                <li>Diagnosis and treatment plan</li>
                <li>Prescriptions sent to your {state.name} pharmacy</li>
                <li>Follow-up guidance included</li>
              </ul>
              <div className="shx-price-cta"><a href="/book-online/">Book a $79 visit</a></div>
            </div>
            <div className="shx-excl">
              <h3>What Is Not Included</h3>
              <p>TeleDirectMD visit fees do not cover:</p>
              <ul>
                <li>Prescription medication costs (varies by pharmacy)</li>
                <li>Lab work or imaging (if recommended)</li>
                <li>Controlled substance prescriptions (not offered)</li>
                <li>In-person procedures or physical exams</li>
              </ul>
              <p>Medication costs depend on your pharmacy and whether you use discount programs like GoodRx.</p>
            </div>
          </div>

          <p className="shx-note-line">
            <strong>No hidden fees.</strong> Your $79 visit fee is the complete cost for your TeleDirectMD consultation.{hasInsurance ? <> Select insurance plans are also accepted in {state.name}. <a href="/insurance/" style={{ color: 'var(--tdmd-teal)', fontWeight: 700 }}>Check your coverage</a>.</> : ' Insurance is not required.'}
          </p>

          {insurerStateLinks.length > 0 && (
            <div className="shx-plans" id={`${pid}-insurance-providers`} data-speakable="true">
              <h3>Insurance Plans We Accept in {state.name}</h3>
              <p className="shx-note-line" style={{ marginTop: 0 }}>TeleDirectMD is in-network with the following insurers in {state.name}. Select your plan to view coverage details, in-network conditions, and how to book a copay visit.</p>
              <ul>
                {insurerStateLinks.map((ins) => (
                  <li key={ins.slug}>
                    <a href={ins.url}>{ins.name} in {state.name}<span>View coverage</span></a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 5) Telehealth Regulations, with the template's "Practicing in" block
         moved up from below the FAQ so the state facts sit together. */}
      <section className="shx-law" id={`${pid}-telehealth-regulations`}>
        <div className="tdmd-container">
          <h2>Telehealth Regulations in {state.name}</h2>
          <p className="shx-lede" style={{ marginBottom: 0 }}>TeleDirectMD operates in full compliance with {state.name} telehealth laws and medical board requirements.</p>

          <div className="shx-law-grid">
            <div className="shx-law-card">
              <h3>{state.name} Telehealth Law</h3>
              <p>{state.telehealthRegulation}</p>
              <p>
                Dr. Bhavsar is licensed to practice medicine in {state.name} and follows state-specific prescribing guidelines. A valid physician-patient relationship is established during each video visit. TeleDirectMD does not prescribe controlled substances.
              </p>
            </div>

            {/* 'Practicing in {State}' bounded block (compliance + cities + epi) */}
            {stateTpl && (
              <section className="shx-law-card tdmd-state-block" id={`${pid}-practicing-in-${stateSlug}`}>
                <h3>Practicing in {state.name}</h3>
                {stateTpl.stateCompliance && stateTpl.stateCompliance.credentialBlock && (
                  <p>{stateTpl.stateCompliance.credentialBlock}</p>
                )}
                {stateTpl.stateCities && stateTpl.stateCities.metroAndRural && (
                  <p>{stateTpl.stateCities.metroAndRural}</p>
                )}
                {stateTpl.stateEpidemiology && stateTpl.stateEpidemiology.general && (
                  <p>{stateTpl.stateEpidemiology.general}</p>
                )}
                {stateTpl.stateInsurance && stateTpl.stateInsurance.selfPayDisclosure && (
                  <p>{stateTpl.stateInsurance.selfPayDisclosure}</p>
                )}
              </section>
            )}

            {stateTpl && (getRelatedLinks(stateTpl).length > 0 || getStateSources(stateTpl).length > 0) && (
              <div className="shx-law-card shx-wide">
                {getRelatedLinks(stateTpl).length > 0 && (
                  <>
                    <h3>More {state.name} resources</h3>
                    <ul className="tdmd-state-related-links">
                      {getRelatedLinks(stateTpl).map((l) => (
                        <li key={l.href}><a href={l.href}>{l.label}</a>{l.description ? `: ${l.description}` : ''}</li>
                      ))}
                    </ul>
                  </>
                )}
                {/* Sources stay in the server HTML (and in the MedicalWebPage
                   citation list); the disclosure only keeps a long list, 80+ on
                   New York, from pushing the FAQ off the page. */}
                {getStateSources(stateTpl).length > 0 && (
                  <details className="shx-sources" style={{ marginTop: getRelatedLinks(stateTpl).length > 0 ? '1.1rem' : 0 }}>
                    <summary><h3>{state.name} sources</h3><span>{getStateSources(stateTpl).length}</span></summary>
                    <ul className="tdmd-ref-list tdmd-state-sources">
                      {getStateSources(stateTpl).map((c) => (
                        <li key={c.url}><a href={c.url} rel="nofollow noopener" target="_blank">{c.label}</a></li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6) Cities */}
      <section className="shx-places" id={`${pid}-cities`}>
        <div className="tdmd-container">
          <h2>Cities We Serve in {state.name}</h2>
          <p>TeleDirectMD is available to patients across {state.name}. As a telehealth service, you can connect with a doctor from anywhere in the state, with no need to travel to a clinic.</p>

          <ul className="shx-cities">
            {cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>

          <div className="tdmd-city-block">
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
          <FaqAccordion
            sectionTitle={`Frequently Asked Questions: TeleDirectMD in ${state.name}`}
            items={[
              ...(stateSlug === 'ny' && citableSummary_AI && citableSummary_AI.question && citableSummary_AI.answerText
                ? [{ question: citableSummary_AI.question, answer: <p>{citableSummary_AI.answerText}</p> }]
                : []),
              ...((stateTpl && Array.isArray(stateTpl.stateFaqs) ? stateTpl.stateFaqs : [])
                .filter((f) => f && f.onHub && f.question && f.answer)
                .map((f) => ({ question: f.question, answer: <p>{f.answer}</p> }))),
              {
                question: `What conditions does TeleDirectMD treat in ${state.name}?`,
                answer: (
                  <p>TeleDirectMD treats {conditionsLabel} adult conditions in {state.name}, organized into {displayedCategories.length} categories: {displayedCategories.map((c) => c.categoryName).join(', ')}. Common conditions include colds, flu, UTIs (women only), sinus infections, acne, eczema, asthma refills, blood pressure refills, and more.</p>
                ),
              },
              {
                question: 'How much does a visit cost?',
                answer: (
                  <p>A TeleDirectMD visit is a flat $79 self-pay fee, paid at booking, with no subscription.{hasInsurance ? ' We also accept select insurance plans, and standard copays and cost-sharing apply.' : ' No insurance required.'} The fee covers the physician consultation, diagnosis and treatment plan, and any prescription is sent electronically to your preferred {state.name} pharmacy. Medication costs at the pharmacy are separate.</p>
                ),
              },
              {
                question: 'Do I need insurance to use TeleDirectMD?',
                answer: hasInsurance ? (
                  <p>No, insurance is not required. You can always book a $79 self-pay visit. However, TeleDirectMD also accepts select insurance plans in {state.name}, including {stateInsurers.map(i => i.name).join(', ')}. Visit our <a href="/insurance/">Insurance page</a> to check your coverage.</p>
                ) : (
                  <p>No. Insurance is not required for a TeleDirectMD visit. The $79 visit fee is the complete cost for your consultation. We are actively expanding insurance coverage to more states. Visit our <a href="/insurance/">Insurance page</a> for the latest information.</p>
                ),
              },
              {
                question: `Can TeleDirectMD prescribe medications in ${state.name}?`,
                answer: (
                  <p>Yes. After your video visit, your TeleDirectMD physician can send prescriptions electronically to any {state.name} pharmacy, including {pharmacies.join(', ')}. Prescriptions are typically available for pickup within 1–2 hours. TeleDirectMD does not prescribe controlled substances.</p>
                ),
              },
              {
                question: 'Who will I see during my visit?',
                answer: (
                  <p>Every TeleDirectMD visit is conducted by a licensed MD, not a nurse practitioner or physician assistant. Dr. Bhavsar is licensed to practice medicine in {state.name} and is board-certified.</p>
                ),
              },
              {
                question: 'How quickly can I get an appointment?',
                answer: (
                  <p>Most TeleDirectMD appointments are available same-day. Simply choose your condition, select an available time, and connect with a doctor from anywhere in {state.name} via secure video.</p>
                ),
              },
              {
                question: 'Does TeleDirectMD prescribe controlled substances?',
                answer: (
                  <p>No. TeleDirectMD does not prescribe controlled substances (Schedule II–V), including opioids, benzodiazepines, stimulants, or sleep medications. If your condition requires a controlled substance, we will refer you to an appropriate in-person provider.</p>
                ),
              },
              {
                question: 'Can I use TeleDirectMD for medication refills?',
                answer: (
                  <p>Yes. TeleDirectMD offers convenient refills for chronic medications including asthma inhalers, blood pressure medications, thyroid medications, cholesterol medications, migraine preventives, diabetes medications, acid reflux medications, and EpiPen auto-injectors. A video visit with an MD is required to review your condition and renew your prescription.</p>
                ),
              },
            ]}
          />

          <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
            <div className="tdmd-bottom-cta-copy">
              <h3>Ready to see a doctor in {state.name}?</h3>
              <p>Book a same-day video visit with a licensed MD. Flat $79 self-pay{hasInsurance ? ', select insurance accepted' : ', no insurance required'}.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online/" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/what-we-treat/" className="tdmd-btn tdmd-btn-outline">View All Conditions</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8) Quick Links */}
      <section className="tdmd-section" id={`${pid}-quick-links`}>
        <div className="tdmd-container">
          <h2>More Resources for {state.name} Patients</h2>
          <p>Explore more about TeleDirectMD services available in {state.name}.</p>
          <div className="tdmd-inline-links">
            <p className="tdmd-link-cloud">
              <a href="/insurance/">Insurance & Pricing</a>
              <a href="/faq/">Frequently Asked Questions</a>
              <a href="/states-we-serve/">All States We Serve</a>
              <a href="/what-we-treat/">What We Treat</a>
            </p>
          </div>
        </div>
      </section>

      {/* 9) Other States */}
      <section className="tdmd-section" id={`${pid}-other-states`}>
        <div className="tdmd-container">
          <h2>TeleDirectMD Is Also Available Across 40+ States</h2>
          <p>TeleDirectMD provides MD-only telehealth visits across 40+ states + DC. Whether you are traveling, relocating, or have family in another state, we can help. Select a state below to explore available conditions and book a visit.</p>
          <ul className="tdmd-other-states-grid shx-states">
            {otherStates.map((s) => (
              <li key={s.slug}><a href={`/${s.slug}/`}>{s.name}</a></li>
            ))}
          </ul>
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
            {state.abbr === 'FL'
              ? <>TeleDirectMD&rsquo;s telehealth physician is registered to provide telehealth services in {state.name} under Fla. Stat. § 456.47(4) and operates in compliance with state telehealth regulations. All visits are subject to clinical appropriateness as determined by your treating physician.</>
              : <>Dr. Bhavsar is licensed in {state.name} and practices in compliance with state telehealth regulations. All visits are subject to clinical appropriateness as determined by your treating physician.</>
            }
          </p>
        </div>
      </section>

      {/* FL: A2 no-in-person-care + A4 standard-of-care (softer) + A3 verify-link placement 2 of 3. */}
      {state.abbr === 'FL' && <FlFooterCompliance idSuffix={`${pid}-fl-compliance`} />}
      </div>
    </>
  );
}
