'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

/* ── FIPS-to-abbr map for the D3 map ── */
const FIPS_TO_ABBR = {'01':'AL','02':'AK','04':'AZ','05':'AR','06':'CA','08':'CO','09':'CT','10':'DE','11':'DC','12':'FL','13':'GA','15':'HI','16':'ID','17':'IL','18':'IN','19':'IA','20':'KS','21':'KY','22':'LA','23':'ME','24':'MD','25':'MA','26':'MI','27':'MN','28':'MS','29':'MO','30':'MT','31':'NE','32':'NV','33':'NH','34':'NJ','35':'NM','36':'NY','37':'NC','38':'ND','39':'OH','40':'OK','41':'OR','42':'PA','44':'RI','45':'SC','46':'SD','47':'TN','48':'TX','49':'UT','50':'VT','51':'VA','53':'WA','54':'WV','55':'WI','56':'WY'};
const ABBR_TO_NAME = {'AL':'Alabama','AK':'Alaska','AZ':'Arizona','AR':'Arkansas','CA':'California','CO':'Colorado','CT':'Connecticut','DE':'Delaware','DC':'District of Columbia','FL':'Florida','GA':'Georgia','HI':'Hawaii','ID':'Idaho','IL':'Illinois','IN':'Indiana','IA':'Iowa','KS':'Kansas','KY':'Kentucky','LA':'Louisiana','ME':'Maine','MD':'Maryland','MA':'Massachusetts','MI':'Michigan','MN':'Minnesota','MS':'Mississippi','MO':'Missouri','MT':'Montana','NE':'Nebraska','NV':'Nevada','NH':'New Hampshire','NJ':'New Jersey','NM':'New Mexico','NY':'New York','NC':'North Carolina','ND':'North Dakota','OH':'Ohio','OK':'Oklahoma','OR':'Oregon','PA':'Pennsylvania','RI':'Rhode Island','SC':'South Carolina','SD':'South Dakota','TN':'Tennessee','TX':'Texas','UT':'Utah','VT':'Vermont','VA':'Virginia','WA':'Washington','WV':'West Virginia','WI':'Wisconsin','WY':'Wyoming'};

const FEATURED_FILTER_OPTIONS = [
  { value: 'all', label: 'All States' },
  { value: 'ca', label: 'California' },
  { value: 'fl', label: 'Florida' },
  { value: 'ga', label: 'Georgia' },
  { value: 'nc', label: 'North Carolina' },
  { value: 'oh', label: 'Ohio' },
  { value: 'pa', label: 'Pennsylvania' },
  { value: 'tn', label: 'Tennessee' },
  { value: 'tx', label: 'Texas' },
];

export default function StatesWeServeClient({
  allStates,
  stateCount,
  totalConditions,
  featuredStates,
  directoryStates,
  stateNamesList,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mapPopup, setMapPopup] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mobileOverlay, setMobileOverlay] = useState(false);
  const mapWrapRef = useRef(null);
  const popupRef = useRef(null);
  const licensedAbbrSet = new Set(allStates.map(s => s.abbr));

  /* ── Build map popup data from allStates ── */
  const statePopupData = {};
  allStates.forEach(s => {
    statePopupData[s.abbr] = {
      name: s.name,
      slug: s.slug,
      conditions: [
        ['UTI', `/${s.slug}/uti-treatment-online`],
        ['Sinus Infection', `/${s.slug}/sinus-infection-treatment-online`],
        ['Influenza', `/${s.slug}/influenza-treatment-online`],
        ['Pink Eye', `/${s.slug}/pink-eye-treatment-online`],
        ['BV', `/${s.slug}/bv-treatment-online`],
      ],
    };
  });

  /* ── Load DM Serif Display font for display headings ── */
  useEffect(() => {
    if (!document.querySelector('link[href*="DM+Serif+Display"]')) {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  /* ── Load D3 + TopoJSON and build the interactive map ── */
  useEffect(() => {
    let cancelled = false;

    function loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
        const s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }

    async function buildMap() {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js');
        if (cancelled) return;

        const svgEl = document.getElementById('us-map-svg');
        const loadingEl = document.getElementById('map-loading');
        if (!svgEl || typeof window.d3 === 'undefined' || typeof window.topojson === 'undefined') return;

        const res = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json');
        const us = await res.json();
        if (cancelled) return;

        const d3 = window.d3;
        const topojson = window.topojson;
        const states = topojson.feature(us, us.objects.states).features;
        const projection = d3.geoAlbersUsa().fitSize([960, 600], topojson.feature(us, us.objects.states));
        const path = d3.geoPath().projection(projection);

        states.forEach(feature => {
          const abbr = FIPS_TO_ABBR[feature.id] || '';
          if (!abbr) return;
          const d = path(feature);
          if (!d) return;
          const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          el.setAttribute('id', `map-${abbr}`);
          el.setAttribute('d', d);
          el.setAttribute('data-name', ABBR_TO_NAME[abbr] || abbr);
          el.setAttribute('class', licensedAbbrSet.has(abbr) ? 'sws-licensed' : 'sws-unlicensed');
          if (licensedAbbrSet.has(abbr)) {
            el.setAttribute('role', 'button');
            el.setAttribute('tabindex', '0');
            el.setAttribute('aria-label', `${ABBR_TO_NAME[abbr] || abbr} — click for available conditions`);
            el.addEventListener('click', e => { e.stopPropagation(); handleMapClick(abbr, e); });
            el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); handleMapClick(abbr, e); } });
          }
          svgEl.appendChild(el);
        });

        /* State border mesh */
        const mesh = topojson.mesh(us, us.objects.states, (a, b) => a !== b);
        const meshPath = path(mesh);
        if (meshPath) {
          const meshEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          meshEl.setAttribute('d', meshPath);
          meshEl.setAttribute('fill', 'none');
          meshEl.setAttribute('stroke', '#fff');
          meshEl.setAttribute('stroke-width', '1.5');
          meshEl.setAttribute('stroke-linejoin', 'round');
          meshEl.style.pointerEvents = 'none';
          meshEl.setAttribute('aria-hidden', 'true');
          svgEl.appendChild(meshEl);
        }

        if (loadingEl) loadingEl.style.display = 'none';
        svgEl.style.display = 'block';
        setMapLoaded(true);
      } catch (err) {
        console.warn('Map load failed:', err);
        const loadingEl = document.getElementById('map-loading');
        if (loadingEl) loadingEl.innerHTML = '<span style="color:var(--sws-text-tertiary)">Map could not load. Scroll down to browse states by card.</span>';
      }
    }

    buildMap();
    return () => { cancelled = true; };
  }, []);

  /* ── Map click handler ── */
  const handleMapClick = useCallback((abbr, evt) => {
    const data = statePopupData[abbr];
    if (!data) return;
    const isMobile = window.innerWidth <= 768;
    let pos = {};
    if (!isMobile && evt && evt.clientX && mapWrapRef.current) {
      const mapRect = mapWrapRef.current.getBoundingClientRect();
      const x = evt.clientX - mapRect.left;
      const y = evt.clientY - mapRect.top;
      const popupW = 320;
      const rightEdge = x + popupW > mapRect.width;
      pos = { left: rightEdge ? (x - popupW - 10) : (x + 15), top: Math.max(10, y - 80) };
    }
    setMapPopup({ ...data, pos, isMobile });
    if (isMobile) setMobileOverlay(true);
  }, []);

  /* ── Close popup on outside click / escape ── */
  useEffect(() => {
    function handleClick(e) {
      if (popupRef.current && !popupRef.current.contains(e.target) && !e.target.classList.contains('sws-licensed')) {
        setMapPopup(null);
        setMobileOverlay(false);
      }
    }
    function handleKey(e) {
      if (e.key === 'Escape') { setMapPopup(null); setMobileOverlay(false); }
    }
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => { document.removeEventListener('click', handleClick); document.removeEventListener('keydown', handleKey); };
  }, []);

  /* ── Search/filter logic for featured cards ── */
  const normalize = t => t.toLowerCase().trim().replace(/\s+/g, ' ');
  const filteredFeatured = featuredStates.filter(s => {
    const matchesFilter = filterValue === 'all' || s.slug === filterValue;
    const matchesSearch = !searchQuery || normalize(s.name).includes(normalize(searchQuery)) ||
      s.allConditions.some(c => normalize(c.name).includes(normalize(searchQuery)));
    return matchesFilter && matchesSearch;
  });

  /* ── FAQ items (dynamic state names) ── */
  const faqItems = [
    { q: 'What states does TeleDirectMD serve?', a: `TeleDirectMD physicians are licensed and available in 40+ U.S. states and territories, including ${stateNamesList}. We are actively expanding to additional states.` },
    { q: 'How much does a TeleDirectMD visit cost?', a: 'TeleDirectMD self-pay visits are a flat $49 — no hidden fees and no surprise charges. This includes your full video consultation with a board-certified physician and any prescriptions sent to your pharmacy if clinically appropriate. We also accept select insurance plans (Aetna, Blue Cross Blue Shield, and UnitedHealthcare) in a growing number of states — standard copays apply.' },
    { q: 'Do I need insurance to use TeleDirectMD?', a: 'No. Insurance is never required. You can always book a $49 self-pay visit with no insurance filing and no prior authorization. However, we now accept select commercial insurance plans in 13 states. Visit our Insurance page to check if your plan is covered.' },
    { q: 'What conditions does TeleDirectMD treat?', a: `TeleDirectMD treats a wide range of conditions via video visits, including virtual urgent care (UTIs, sinus infections, influenza, COVID-19, sore throat, pink eye, ear pain), women\u2019s health (bacterial vaginosis, yeast infections), men\u2019s health, skin conditions (acne, eczema, cellulitis, shingles, cold sores), and medication refills (migraine, asthma, GERD). Visit our <a href="/what-we-treat">What We Treat</a> page for the complete list.` },
    { q: 'How do I book a TeleDirectMD appointment?', a: 'Booking takes about 2 minutes. Visit <a href="/book-online">teledirectmd.com/book-online</a>, select your condition and preferred time, confirm your state of residence, and complete the $49 payment. Same-day appointments are available 7 days a week. No app download required.' },
    { q: 'Do I have to be physically located in a licensed state during my visit?', a: "Yes. Per state medical licensing regulations, you must be physically present in one of TeleDirectMD\u2019s licensed states at the time of your video visit. You will be asked to confirm your current physical location during booking and again at the start of your consultation." },
    { q: 'Are TeleDirectMD doctors board-certified?', a: 'Yes. TeleDirectMD is an MD-only practice. Every consultation is conducted by a board-certified physician — not a nurse practitioner or physician assistant. Our physicians hold active medical licenses in every state where we operate.' },
    { q: 'Can TeleDirectMD prescribe medication?', a: 'Yes. When clinically appropriate, your physician can prescribe medications and send them electronically to the pharmacy of your choice. Prescription costs are separate from the $49 visit fee and depend on your pharmacy and medication. TeleDirectMD does not prescribe controlled substances.' },
  ];

  /* ── Icon SVGs ── */
  const ArrowIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
  const SmallArrowIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
  const SmallArrow14 = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
  const ChevronDown = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>;
  const MapPinIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
  const SearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>;
  const WarningIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;

  return (
    <section className="sws-root" aria-labelledby="tdmd-hero-title">
      <Styles />

      {/* Overlay for mobile map popup */}
      {mobileOverlay && <div className="sws-overlay" onClick={() => { setMapPopup(null); setMobileOverlay(false); }} />}

      {/* ═══ HERO ═══ */}
      <header className="sws-hero">
        <div className="sws-eyebrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          Licensed Physician-Led Telemedicine
        </div>
        <h1 id="tdmd-hero-title">States <em>We Serve</em></h1>
        <p className="tdmd-hero-sub">Board-certified physicians delivering secure video consultations to adults 18+ across 40+ U.S. states and territories. Same-day appointments, transparent pricing, select insurance plans accepted.</p>
        <div className="sws-stats-row">
          <div className="sws-stat-chip">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <div><span className="val">40+</span><span className="lbl">States</span></div>
          </div>
          <div className="sws-stat-chip">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            <div><span className="val">$49</span><span className="lbl">Per Visit</span></div>
          </div>
          <div className="sws-stat-chip">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            <div><span className="val">100%</span><span className="lbl">Video Visits</span></div>
          </div>
          <div className="sws-stat-chip">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <div><span className="val">Same-Day</span><span className="lbl">Appointments</span></div>
          </div>
        </div>
        <div className="sws-hero-ctas">
          <a href="/book-online" className="sws-btn sws-btn-primary">Book Your $49 Visit <ArrowIcon /></a>
          <a href="/what-we-treat" className="sws-btn sws-btn-ghost">View All Conditions</a>
          <a href="/insurance" className="sws-btn sws-btn-ghost">Insurance & Pricing</a>
        </div>
        <div className="sws-emergency">
          <WarningIcon />
          <p><strong>Emergency Notice:</strong> TeleDirectMD does not provide emergency care. If you are experiencing severe symptoms, call 911 or seek urgent in-person care immediately.</p>
        </div>
      </header>

      <div id="main-content">
        {/* ═══ MAP SECTION ═══ */}
        <section className="sws-map-section" aria-label="Coverage map">
          <div className="sws-section-header">
            <div className="sws-section-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
              Coverage Map
            </div>
            <h2>Where We Practice</h2>
            <p className="sws-section-desc">Our physicians hold active medical licenses in every highlighted state. Click any teal state to see available conditions and book a visit.</p>
          </div>
          <div className="sws-map-container">
            <div className="sws-map-legend">
              <div className="sws-legend-item"><div className="sws-legend-dot active" />Licensed — Available Now</div>
              <div className="sws-legend-item"><div className="sws-legend-dot inactive" />Coming Soon</div>
            </div>
            <div className="sws-map-wrap" ref={mapWrapRef} id="us-map">
              <div id="map-loading" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '80px 0', color: 'var(--sws-text-tertiary)', fontSize: 14, fontWeight: 600 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'swsSpin 1s linear infinite' }}><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
                Loading coverage map...
              </div>
              <svg id="us-map-svg" viewBox="0 0 975 610" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Interactive map of U.S. states served by TeleDirectMD" style={{ display: 'none', width: '100%', height: 'auto' }}>
                <title>TeleDirectMD Coverage Map</title>
              </svg>
              {/* Map Popup */}
              {mapPopup && (
                <div
                  ref={popupRef}
                  className={`sws-map-popup visible${mapPopup.isMobile ? ' mobile' : ''}`}
                  style={!mapPopup.isMobile && mapPopup.pos ? { left: mapPopup.pos.left, top: mapPopup.pos.top } : undefined}
                >
                  <div className="sws-popup-header">
                    <h3>{mapPopup.name}</h3>
                    <button className="sws-popup-close" onClick={() => { setMapPopup(null); setMobileOverlay(false); }} aria-label="Close popup">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </button>
                  </div>
                  <div className="sws-popup-conditions">
                    {mapPopup.conditions.map(([name, href]) => (
                      <a key={name} href={href} className="sws-popup-tag">{name}</a>
                    ))}
                  </div>
                  <a href="/book-online" className="sws-popup-cta">Book a Visit <SmallArrowIcon /></a>
                </div>
              )}
              {/* Noscript fallback */}
              <noscript>
                <div style={{ padding: '32px 0' }}>
                  <p style={{ fontSize: 16, fontWeight: 700, color: '#001F2E', margin: '0 0 16px' }}>TeleDirectMD is licensed in the following states:</p>
                  <ul style={{ columns: 3, columnGap: 24, listStyle: 'none', padding: 0, margin: 0 }}>
                    {allStates.map(s => (
                      <li key={s.abbr} style={{ breakInside: 'avoid', padding: '6px 0', fontSize: 14 }}>
                        <strong>{s.name}</strong> — <a href={`/${s.slug}`} style={{ color: '#006B73' }}>View conditions</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </noscript>
            </div>
            <p className="sws-map-hint">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 15l-2 5L9 9l11 4-5 2z"/></svg>
              Click any highlighted state for conditions and booking
            </p>
          </div>
        </section>

        {/* ═══ FEATURED STATES ═══ */}
        <section className="sws-section" aria-label="Featured states">
          <div className="sws-section-header">
            <div className="sws-section-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Featured States
            </div>
            <h2>Popular Destinations</h2>
            <p className="sws-section-desc">Explore our most requested states with quick access to conditions organized by category.</p>
          </div>
        </section>

        {/* Search + Filter toolbar */}
        <div className="sws-toolbar">
          <div className="sws-search-wrap">
            <SearchIcon />
            <input
              type="search"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search states or conditions..."
              aria-label="Search states and conditions"
              className="sws-search-input"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <select value={filterValue} onChange={e => setFilterValue(e.target.value)} className="sws-filter-select" aria-label="Filter by state">
            {FEATURED_FILTER_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>

        {/* Results bar */}
        {(searchQuery || filterValue !== 'all') && (
          <div className="sws-results-bar" role="status" aria-live="polite">
            {filteredFeatured.length} state{filteredFeatured.length !== 1 ? 's' : ''} found
          </div>
        )}
        {filteredFeatured.length === 0 && (
          <div className="sws-no-results">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <h3>No states found</h3>
            <p>Try adjusting your search terms or filter selection.</p>
          </div>
        )}

        {/* Featured state cards */}
        <div className="sws-grid">
          {filteredFeatured.map(state => (
            <article key={state.slug} className="sws-card" data-state={state.slug}>
              <div className="sws-card-accent" />
              <div className="sws-card-body">
                <div className="sws-card-header">
                  <div className="sws-card-icon"><MapPinIcon /></div>
                  <div><h3>{state.name}</h3><p>Featured Conditions</p></div>
                </div>
                {state.previewCategories.map(cat => (
                  <div key={cat.label} className="sws-cat">
                    <div className="sws-cat-label">{cat.label}</div>
                    <div className="sws-cat-tags">
                      {cat.conditions.map(c => <a key={c.href} href={c.href} className="sws-tag">{c.name}</a>)}
                    </div>
                  </div>
                ))}
                <div className={`sws-expand${expandedCard === state.slug ? ' open' : ''}`}>
                  <button
                    className="sws-expand-trigger"
                    aria-expanded={expandedCard === state.slug}
                    onClick={() => setExpandedCard(expandedCard === state.slug ? null : state.slug)}
                  >
                    <span>See all conditions</span>
                    <span className="sws-expand-icon"><ChevronDown /></span>
                  </button>
                  {expandedCard === state.slug && (
                    <div className="sws-expand-content">
                      <div className="sws-cond-grid">
                        {state.allConditions.map(c => <a key={c.href} href={c.href}>{c.name}</a>)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="sws-card-footer">
                <a href="/what-we-treat" className="sws-card-link">View all treatments <SmallArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>

        {/* ═══ DIRECTORY ═══ */}
        <section className="sws-directory" id="all-states" aria-label="Complete state directory">
          <div className="sws-section-header">
            <div className="sws-section-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Complete Directory
            </div>
            <h2>All Licensed States</h2>
            <p className="sws-section-desc">TeleDirectMD physicians are licensed and available for $49 video consultations in every state listed below. Conditions shown are representative — <a href="/what-we-treat" style={{ color: 'var(--sws-teal)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid rgba(0,107,115,0.25)' }}>view our full conditions list</a>.</p>
          </div>
          <div className="sws-directory-grid">
            {directoryStates.map(s => (
              <div key={s.slug} className="sws-dir-card">
                <h4>{s.name}</h4>
                <div className="sws-dir-card-conditions">
                  {['UTI', 'Sinus Infection', 'Influenza', 'Pink Eye', 'BV'].map(c => <span key={c} className="sws-dir-tag">{c}</span>)}
                </div>
                <a href="/book-online" className="sws-dir-cta">Book a visit <SmallArrow14 /></a>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="sws-faq" id="faq" aria-label="Frequently asked questions">
          <div className="sws-section-header">
            <div className="sws-section-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Common Questions
            </div>
            <h2>Frequently Asked Questions</h2>
            <p className="sws-section-desc">Quick answers about TeleDirectMD's telemedicine services, coverage, and booking.</p>
          </div>
          <div className="sws-faq-list">
            {faqItems.map((faq, i) => (
              <div key={i} className={`sws-faq-item${expandedFaq === i ? ' open' : ''}`}>
                <button
                  className="sws-faq-q"
                  aria-expanded={expandedFaq === i}
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="sws-faq-chevron"><ChevronDown /></span>
                </button>
                {expandedFaq === i && <div className="tdmd-faq-a sws-faq-a" dangerouslySetInnerHTML={{ __html: faq.a }} />}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ FOOTER NOTE ═══ */}
        <div className="sws-footer-note">
          <p><strong>Important:</strong> You must be physically located in a licensed state at the time of your visit. You will be asked to confirm your location during booking and again at the start of your video visit.</p>
          <p><a href="/book-online">Book your $49 visit now</a> · <a href="/insurance">Check insurance coverage</a> · <a href="/faq">Learn more about our services</a> · Questions? Email <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a>.</p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   Scoped Styles Component
   ═══════════════════════════════════════════════════ */
function Styles() {
  return (
    <style>{`
/* ── Variables ── */
.sws-root {
  --sws-teal: #006B73;
  --sws-teal-deep: #004D54;
  --sws-navy: #003E52;
  --sws-navy-dark: #001F2E;
  --sws-orange: #FF5A36;
  --sws-orange-soft: #FF7B5F;
  --sws-cream: #FDF8F4;
  --sws-warm-white: #FAFAF8;
  --sws-sand: #F2EDE8;
  --sws-text: #1A2B33;
  --sws-text-secondary: #5B6E78;
  --sws-text-tertiary: #8A9BA5;
  --sws-border: rgba(0,62,82,0.08);
  --sws-border-strong: rgba(0,62,82,0.15);
  --sws-shadow-xs: 0 1px 3px rgba(0,0,0,0.04);
  --sws-shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
  --sws-shadow-md: 0 8px 24px rgba(0,0,0,0.08);
  --sws-shadow-lg: 0 20px 50px rgba(0,0,0,0.1);
  --sws-shadow-xl: 0 30px 70px rgba(0,0,0,0.14);
  --sws-font-display: 'DM Serif Display', Georgia, serif;
  --sws-font-body: 'Almarai', system-ui, sans-serif;
  --sws-ease-out: cubic-bezier(0.16,1,0.3,1);
  --sws-ease-spring: cubic-bezier(0.34,1.56,0.64,1);
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 24px 100px;
  font-family: var(--sws-font-body);
  color: var(--sws-text);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* ── Animations ── */
@keyframes swsFadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
@keyframes swsSpin { to { transform:rotate(360deg); } }

/* ── Overlay ── */
.sws-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.4); backdrop-filter:blur(4px); z-index:99; }

/* ═══ HERO ═══ */
.sws-hero { position:relative; margin:48px 0 72px; padding:72px 64px 64px; background:var(--sws-navy-dark); border-radius:28px; overflow:hidden; box-shadow:var(--sws-shadow-xl); animation:swsFadeUp 0.8s var(--sws-ease-out) forwards; }
.sws-hero::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 80% 60% at 20% 80%,rgba(0,107,115,0.35) 0%,transparent 70%),radial-gradient(ellipse 60% 50% at 85% 20%,rgba(255,90,54,0.15) 0%,transparent 60%),radial-gradient(ellipse 40% 40% at 50% 50%,rgba(0,77,84,0.2) 0%,transparent 50%); pointer-events:none; }
.sws-hero::after { content:''; position:absolute; inset:0; background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60V0h1v60zm60-60v60h-1V0z' fill='rgba(255,255,255,0.02)'/%3E%3Cpath d='M0 0h60v1H0zm0 59h60v1H0z' fill='rgba(255,255,255,0.02)'/%3E%3C/svg%3E"); pointer-events:none; }
.sws-hero > * { position:relative; z-index:1; }
.sws-eyebrow { display:inline-flex; align-items:center; gap:10px; padding:7px 18px 7px 12px; background:rgba(255,255,255,0.08); backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,0.12); border-radius:100px; color:rgba(255,255,255,0.9); font-size:12px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; margin-bottom:28px; }
.sws-hero h1 { font-family:var(--sws-font-display); font-size:clamp(42px,6vw,72px); font-weight:400; line-height:1.08; color:#fff; margin:0 0 24px; letter-spacing:-0.5px; }
.sws-hero h1 em { font-style:normal; color:var(--sws-orange-soft); }
.tdmd-hero-sub { font-size:clamp(17px,2vw,20px); line-height:1.7; color:rgba(255,255,255,0.8); max-width:680px; margin:0 0 40px; }
.sws-stats-row { display:flex; flex-wrap:wrap; gap:12px; margin-bottom:40px; }
.sws-stat-chip { display:flex; align-items:center; gap:10px; padding:14px 22px; background:rgba(255,255,255,0.07); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.1); border-radius:14px; transition:all .3s var(--sws-ease-out); }
.sws-stat-chip:hover { background:rgba(255,255,255,0.12); border-color:rgba(255,255,255,0.18); transform:translateY(-2px); }
.sws-stat-chip svg { flex-shrink:0; color:var(--sws-orange-soft); }
.sws-stat-chip .val { font-size:20px; font-weight:800; color:#fff; line-height:1; display:block; }
.sws-stat-chip .lbl { font-size:12px; color:rgba(255,255,255,0.65); font-weight:600; text-transform:uppercase; letter-spacing:.8px; line-height:1.2; display:block; }
.sws-hero-ctas { display:flex; flex-wrap:wrap; gap:14px; }
.sws-btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:16px 32px; font-family:var(--sws-font-body); font-size:15px; font-weight:700; border-radius:14px; text-decoration:none; transition:all .35s var(--sws-ease-out); cursor:pointer; border:none; letter-spacing:.2px; }
.sws-btn-primary { background:linear-gradient(135deg,var(--sws-orange) 0%,#FF7048 100%); color:#fff; box-shadow:0 4px 20px rgba(255,90,54,0.35),inset 0 1px 0 rgba(255,255,255,0.2); }
.sws-btn-primary:hover { transform:translateY(-3px); box-shadow:0 10px 32px rgba(255,90,54,0.45),inset 0 1px 0 rgba(255,255,255,0.2); }
.sws-btn-primary:hover svg { transform:translateX(3px); }
.sws-btn-primary svg { transition:transform .3s var(--sws-ease-out); }
.sws-btn-ghost { background:rgba(255,255,255,0.08); backdrop-filter:blur(12px); color:#fff; border:1px solid rgba(255,255,255,0.18); }
.sws-btn-ghost:hover { background:rgba(255,255,255,0.15); border-color:rgba(255,255,255,0.3); transform:translateY(-2px); }
.sws-emergency { margin-top:40px; padding:18px 22px; background:rgba(255,90,54,0.08); border:1px solid rgba(255,90,54,0.2); border-radius:14px; display:flex; gap:14px; align-items:flex-start; }
.sws-emergency svg { flex-shrink:0; margin-top:1px; color:var(--sws-orange-soft); }
.sws-emergency p { margin:0; font-size:13.5px; line-height:1.6; color:rgba(255,255,255,0.8); }
.sws-emergency strong { color:rgba(255,255,255,0.95); }

/* ═══ SECTIONS ═══ */
.sws-section, .sws-map-section, .sws-directory, .sws-faq { margin:80px 0 36px; }
.sws-section-header { margin-bottom:24px; }
.sws-section-label { display:inline-flex; align-items:center; gap:8px; font-size:12px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--sws-teal); margin-bottom:12px; }
.sws-section-header h2 { font-family:var(--sws-font-display); font-size:clamp(32px,4.5vw,48px); font-weight:400; color:var(--sws-navy-dark); margin:0 0 16px; letter-spacing:-0.3px; line-height:1.15; }
.sws-section-desc { font-size:16.5px; color:var(--sws-text-secondary); line-height:1.7; max-width:700px; margin:0; }

/* ═══ MAP ═══ */
.sws-map-container { position:relative; margin-top:36px; padding:48px; background:var(--sws-warm-white); border-radius:24px; border:1px solid var(--sws-border); box-shadow:var(--sws-shadow-sm); overflow:visible; }
.sws-map-legend { display:flex; align-items:center; gap:24px; margin-bottom:32px; padding-bottom:24px; border-bottom:1px solid var(--sws-border); }
.sws-legend-item { display:flex; align-items:center; gap:8px; font-size:13px; font-weight:600; color:var(--sws-text-secondary); }
.sws-legend-dot { width:14px; height:14px; border-radius:4px; }
.sws-legend-dot.active { background:var(--sws-teal); }
.sws-legend-dot.inactive { background:var(--sws-sand); border:1px solid var(--sws-border-strong); }
.sws-map-wrap { position:relative; width:100%; max-width:960px; margin:0 auto; }
.sws-map-wrap svg { width:100%; height:auto; display:block; }
.sws-map-wrap svg path { transition:fill .25s var(--sws-ease-out),filter .25s var(--sws-ease-out); cursor:default; }
.sws-map-wrap svg path.sws-licensed { fill:var(--sws-teal); cursor:pointer; }
.sws-map-wrap svg path.sws-licensed:hover { fill:var(--sws-teal-deep); filter:drop-shadow(0 4px 12px rgba(0,107,115,0.3)); }
.sws-map-wrap svg path.sws-unlicensed { fill:var(--sws-sand); }
.sws-map-popup { position:absolute; z-index:100; width:320px; background:#fff; border-radius:18px; box-shadow:0 20px 60px rgba(0,0,0,0.15),0 0 0 1px rgba(0,0,0,0.05); padding:28px; pointer-events:auto; transition:all .3s var(--sws-ease-spring); }
.sws-map-popup.mobile { position:fixed; bottom:0; left:0; right:0; width:100%; border-radius:22px 22px 0 0; max-height:70vh; overflow-y:auto; z-index:200; }
.sws-popup-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; }
.sws-popup-header h3 { font-family:var(--sws-font-display); font-size:22px; font-weight:400; color:var(--sws-navy-dark); margin:0; }
.sws-popup-close { width:32px; height:32px; border-radius:50%; background:var(--sws-sand); border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; color:var(--sws-text-secondary); }
.sws-popup-close:hover { background:var(--sws-teal); color:#fff; }
.sws-popup-conditions { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:20px; }
.sws-popup-tag { padding:6px 14px; background:var(--sws-cream); border:1px solid var(--sws-border); border-radius:100px; font-size:12.5px; font-weight:600; color:var(--sws-navy); text-decoration:none; transition:all .2s var(--sws-ease-out); }
.sws-popup-tag:hover { background:var(--sws-teal); color:#fff; border-color:var(--sws-teal); }
.sws-popup-cta { display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:14px; background:linear-gradient(135deg,var(--sws-orange) 0%,#FF7048 100%); color:#fff; font-size:14px; font-weight:700; border-radius:12px; text-decoration:none; transition:all .3s var(--sws-ease-out); box-shadow:0 4px 16px rgba(255,90,54,0.25); }
.sws-popup-cta:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(255,90,54,0.35); }
.sws-map-hint { display:flex; align-items:center; gap:8px; margin-top:20px; font-size:13px; color:var(--sws-text-tertiary); font-weight:500; }

/* ═══ TOOLBAR ═══ */
.sws-toolbar { display:flex; align-items:center; gap:16px; padding:20px 24px; background:var(--sws-warm-white); border:1px solid var(--sws-border); border-radius:18px; margin-bottom:24px; }
.sws-search-wrap { flex:1; position:relative; display:flex; align-items:center; gap:12px; }
.sws-search-wrap svg { flex-shrink:0; color:var(--sws-text-tertiary); }
.sws-search-input { flex:1; border:none; background:transparent; font-family:var(--sws-font-body); font-size:15px; font-weight:500; color:var(--sws-text); outline:none; }
.sws-search-input::placeholder { color:var(--sws-text-tertiary); }
.sws-filter-select { padding:14px 44px 14px 18px; font-family:var(--sws-font-body); font-size:14px; font-weight:600; border:1.5px solid var(--sws-border); border-radius:14px; background:var(--sws-warm-white); color:var(--sws-text); cursor:pointer; appearance:none; background-image:url("data:image/svg+xml,%3Csvg width='12' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5l5-5' stroke='%23003E52' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 16px center; transition:all .25s var(--sws-ease-out); }
.sws-filter-select:hover { border-color:var(--sws-teal); }
.sws-results-bar { padding:10px 16px; font-size:14px; font-weight:600; color:var(--sws-teal); margin-bottom:16px; }
.sws-no-results { text-align:center; padding:60px 24px; color:var(--sws-text-tertiary); }
.sws-no-results h3 { font-family:var(--sws-font-display); font-size:24px; color:var(--sws-navy); margin:16px 0 8px; }
.sws-no-results p { font-size:15px; }

/* ═══ CARDS GRID ═══ */
.sws-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.sws-card { background:#fff; border-radius:22px; border:1px solid var(--sws-border); box-shadow:var(--sws-shadow-xs); overflow:hidden; transition:all .4s var(--sws-ease-out); display:flex; flex-direction:column; }
.sws-card:hover { box-shadow:var(--sws-shadow-md); transform:translateY(-4px); }
.sws-card-accent { height:4px; background:linear-gradient(90deg,var(--sws-teal) 0%,var(--sws-teal-deep) 100%); }
.sws-card-body { padding:28px 24px 20px; flex:1; }
.sws-card-header { display:flex; align-items:center; gap:14px; margin-bottom:20px; }
.sws-card-icon { width:48px; height:48px; background:var(--sws-cream); border:1px solid var(--sws-border); border-radius:14px; display:flex; align-items:center; justify-content:center; color:var(--sws-teal); }
.sws-card-header h3 { font-family:var(--sws-font-display); font-size:22px; font-weight:400; color:var(--sws-navy-dark); margin:0; }
.sws-card-header p { font-size:12px; color:var(--sws-text-tertiary); font-weight:600; text-transform:uppercase; letter-spacing:.8px; margin:2px 0 0; }
.sws-cat { margin-bottom:14px; }
.sws-cat-label { font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:var(--sws-text-tertiary); margin-bottom:8px; }
.sws-cat-tags { display:flex; flex-wrap:wrap; gap:6px; }
.sws-tag { padding:7px 14px; background:var(--sws-cream); border:1px solid var(--sws-border); border-radius:100px; font-size:12.5px; font-weight:600; color:var(--sws-navy); text-decoration:none; transition:all .2s var(--sws-ease-out); }
.sws-tag:hover { background:var(--sws-teal); color:#fff; border-color:var(--sws-teal); }
.sws-expand { border-top:1px solid var(--sws-border); margin-top:16px; padding-top:12px; }
.sws-expand-trigger { display:flex; align-items:center; justify-content:space-between; width:100%; padding:10px 0; background:none; border:none; cursor:pointer; font-family:var(--sws-font-body); font-size:13px; font-weight:700; color:var(--sws-teal); transition:all .2s; }
.sws-expand-trigger:hover { color:var(--sws-teal-deep); }
.sws-expand-icon { transition:transform .3s var(--sws-ease-out); display:flex; }
.sws-expand.open .sws-expand-icon { transform:rotate(180deg); }
.sws-expand-content { padding:12px 0; }
.sws-cond-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:6px; }
.sws-cond-grid a { padding:8px 12px; font-size:13px; color:var(--sws-text); text-decoration:none; border-radius:8px; transition:all .2s; }
.sws-cond-grid a:hover { background:var(--sws-cream); color:var(--sws-teal); }
.sws-card-footer { padding:16px 24px; border-top:1px solid var(--sws-border); background:var(--sws-warm-white); }
.sws-card-link { display:flex; align-items:center; gap:8px; font-size:13.5px; font-weight:700; color:var(--sws-teal); text-decoration:none; transition:all .2s; }
.sws-card-link:hover { color:var(--sws-teal-deep); gap:12px; }

/* ═══ DIRECTORY GRID ═══ */
.sws-directory-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:24px; }
.sws-dir-card { padding:24px; background:#fff; border-radius:16px; border:1px solid var(--sws-border); transition:all .3s var(--sws-ease-out); }
.sws-dir-card:hover { box-shadow:var(--sws-shadow-sm); transform:translateY(-2px); }
.sws-dir-card h4 { font-family:var(--sws-font-display); font-size:18px; font-weight:400; color:var(--sws-navy-dark); margin:0 0 12px; }
.sws-dir-card-conditions { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:16px; }
.sws-dir-tag { padding:4px 10px; background:var(--sws-cream); border-radius:6px; font-size:11.5px; font-weight:600; color:var(--sws-text-secondary); }
.sws-dir-cta { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:700; color:var(--sws-teal); text-decoration:none; transition:all .2s; }
.sws-dir-cta:hover { color:var(--sws-teal-deep); gap:10px; }

/* ═══ FAQ ═══ */
.sws-faq-list { margin-top:24px; }
.sws-faq-item { border:1px solid var(--sws-border); border-radius:16px; margin-bottom:12px; overflow:hidden; background:#fff; transition:all .3s; }
.sws-faq-item:hover { border-color:var(--sws-border-strong); }
.sws-faq-item.open { box-shadow:var(--sws-shadow-sm); }
.sws-faq-q { display:flex; align-items:center; justify-content:space-between; width:100%; padding:22px 28px; background:none; border:none; cursor:pointer; font-family:var(--sws-font-body); font-size:16px; font-weight:700; color:var(--sws-text); text-align:left; transition:all .2s; gap:16px; }
.sws-faq-q:hover { color:var(--sws-teal); }
.sws-faq-chevron { transition:transform .3s var(--sws-ease-out); display:flex; flex-shrink:0; }
.sws-faq-item.open .sws-faq-chevron { transform:rotate(180deg); }
.sws-faq-a { padding:0 28px 22px; font-size:15px; line-height:1.75; color:var(--sws-text-secondary); }
.sws-faq-a a { color:var(--sws-teal); font-weight:600; text-decoration:none; }
.sws-faq-a a:hover { text-decoration:underline; }

/* ═══ FOOTER NOTE ═══ */
.sws-footer-note { margin-top:60px; padding:32px; background:var(--sws-warm-white); border:1px solid var(--sws-border); border-radius:18px; text-align:center; }
.sws-footer-note p { margin:0 0 8px; font-size:14px; color:var(--sws-text-secondary); line-height:1.7; }
.sws-footer-note p:last-child { margin-bottom:0; }
.sws-footer-note strong { color:var(--sws-text); }
.sws-footer-note a { color:var(--sws-teal); font-weight:600; text-decoration:none; }
.sws-footer-note a:hover { text-decoration:underline; }

/* ═══ RESPONSIVE ═══ */
@media(max-width:1024px) {
  .sws-grid { grid-template-columns:repeat(2,1fr); }
  .sws-directory-grid { grid-template-columns:repeat(3,1fr); }
}
@media(max-width:768px) {
  .sws-hero { margin:24px 0 48px; padding:48px 28px 40px; border-radius:20px; }
  .sws-hero h1 { font-size:36px; }
  .sws-stats-row { gap:8px; }
  .sws-stat-chip { padding:12px 16px; }
  .sws-stat-chip .val { font-size:17px; }
  .sws-hero-ctas { flex-direction:column; }
  .sws-btn { width:100%; justify-content:center; }
  .sws-map-container { padding:24px 16px; }
  .sws-map-legend { flex-wrap:wrap; gap:16px; }
  .sws-grid { grid-template-columns:1fr; }
  .sws-card-body { padding:24px 20px; }
  .sws-card-footer { padding:16px 20px; }
  .sws-toolbar { flex-direction:column; padding:16px; }
  .sws-filter-select { width:100%; }
  .sws-section-header h2 { font-size:30px; }
  .sws-directory-grid { grid-template-columns:1fr 1fr; }
  .sws-faq-q { font-size:15px; padding:18px 20px; }
  .sws-faq-a { padding:0 20px 18px; }
}
@media(max-width:480px) { .sws-directory-grid { grid-template-columns:1fr; } }

/* ── Focus states ── */
.sws-root *:focus-visible { outline:3px solid var(--sws-teal); outline-offset:3px; }
.sws-root *:focus:not(:focus-visible) { outline:none; }

/* ── Print ── */
@media print {
  .sws-map-popup, .sws-overlay { display:none !important; }
  .sws-expand-content { display:block !important; }
  .sws-expand-trigger { display:none; }
  .sws-faq-a { display:block !important; }
}

/* ── Reduced motion ── */
@media(prefers-reduced-motion:reduce) {
  .sws-root *, .sws-root *::before, .sws-root *::after { animation-duration:0.01ms !important; transition-duration:0.01ms !important; }
}
`}</style>
  );
}
