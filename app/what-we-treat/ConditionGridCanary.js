'use client';
import { useState, useId } from 'react';

/* ── Soft-3D ceramic icons (owner-approved WebP assets in /public/icons/wwt) ──
   Decorative: alt="" since the adjacent condition name conveys the label. */
const ICON_BASE = '/icons/wwt';
const HEADER_ICON = 'stethoscope.webp';

/* Map each urgent-care condition slug to its icon filename; fallback = stethoscope. */
const conditionIconFile = {
  'common-cold-treatment-online': 'common_cold.webp',
  'covid-19-treatment-online': 'covid.webp',
  'influenza-treatment-online': 'influenza.webp',
  'sinus-infection-treatment-online': 'sinus.webp',
  'sore-throat-treatment-online': 'sore_throat.webp',
  'ear-pain-treatment-online': 'ear_pain.webp',
  'pink-eye-treatment-online': 'pink_eye.webp',
  'dental-pain-treatment-online': 'dental.webp',
  'uti-treatment-online': 'uti.webp',
  'cellulitis-treatment-online': 'cellulitis.webp',
  'shingles-treatment-online': 'shingles.webp',
  'gout-treatment-online': 'gout.webp',
  'mastitis-treatment-online': 'mastitis.webp',
  'viral-gastroenteritis-treatment-online': 'gastro.webp',
  'impetigo-treatment-online': 'impetigo.webp',
  'oral-thrush-treatment-online': 'oral_thrush.webp',
};

/* Display-only tile order, ranked by real-world booking frequency.
   Scoped to canary-grid rendering; does not affect source data or schema. */
const DISPLAY_ORDER = [
  'uti-treatment-online',
  'influenza-treatment-online',
  'sore-throat-treatment-online',
  'shingles-treatment-online',
  'pink-eye-treatment-online',
  'sinus-infection-treatment-online',
  'common-cold-treatment-online',
  'covid-19-treatment-online',
  'viral-gastroenteritis-treatment-online',
  'ear-pain-treatment-online',
  'dental-pain-treatment-online',
  'cellulitis-treatment-online',
  'gout-treatment-online',
  'mastitis-treatment-online',
  'impetigo-treatment-online',
  'oral-thrush-treatment-online',
];

/* Short tile display labels (collapsed grid only). The full clinical name
   is preserved in the tile button aria-label and the panel context. */
const DISPLAY_LABEL = {
  'sinus-infection-treatment-online': 'Sinusitis',
  'covid-19-treatment-online': 'COVID',
  'viral-gastroenteritis-treatment-online': 'Stomach Flu',
};

/* Owner-approved patient-first panel copy. Canary-grid only — these do NOT
   feed any JSON-LD (schema uses condition names/slugs, not these strings),
   so replacing them leaves the schema output byte-identical. */
const CANARY_DESCRIPTIONS = {
  'uti-treatment-online': `Burning, urgency, going every 20 minutes — you know something is wrong. If it is an uncomplicated bladder infection, an MD can confirm it on video and send the right antibiotic to your pharmacy today. Every visit is screened for red flags — fever, flank pain, pregnancy, catheter use — that need in-person care instead, so you get treated fast and safely.`,
  'influenza-treatment-online': `Flu antivirals work best within the first 48 hours — waiting days for an appointment can cost you the window. See an MD on video today: if it is uncomplicated flu, oseltamivir (Tamiflu) or baloxavir can be at your pharmacy within hours. Trouble breathing, chest pain, or confusion is different — that needs emergency care, and we will tell you straight.`,
  'sore-throat-treatment-online': `Most adult sore throats are viral — only about 1 in 10 is strep. An MD scores your actual strep risk on video, treats likely viral illness with relief that works, and tells you honestly when an in-person strep test is the better move. Unable to swallow, drooling, or severe neck swelling? Skip telehealth and get seen in person now.`,
  'shingles-treatment-online': `A painful, blistering band of rash on one side of your body? Shingles antivirals work best within 72 hours of rash onset — this is not the week to wait. An MD can confirm classic shingles on video and start antiviral and pain treatment today. Rash near the eye, widespread blisters, or a weakened immune system needs in-person care — we check for all of it.`,
  'pink-eye-treatment-online': `Red, watery, crusted-shut eye? Bacterial, viral, and allergic pink eye each need different treatment — an MD sorts out which one you have and prescribes drops only when they will actually help. Eye pain, light sensitivity, or any vision change is a different problem that belongs with an eye doctor, and we will tell you immediately.`,
  'sinus-infection-treatment-online': `Face pressure and congestion that will not quit? Most sinus infections are viral and clear without antibiotics — but symptoms lasting 10+ days, or improving then suddenly worsening, point to a bacterial infection worth treating. An MD gives you relief options now and antibiotics when they are actually indicated — with a straight answer either way.`,
  'common-cold-treatment-online': `There is no cure for a cold — anyone promising one is selling something. The real value of a visit: an MD rules out the lookalikes that do need treatment — flu, COVID, strep, early bacterial sinusitis — and catches a cold that is turning into something more. Ten minutes on video beats a week of wondering.`,
  'covid-19-treatment-online': `COVID is treatable — if you move fast. Paxlovid works when started within 5 days of symptom onset and is recommended for adults 50+ and those with risk factors. An MD checks whether antiviral treatment is right for you and prescribes on video the same day. Trouble breathing, chest pressure, or confusion means emergency care, not telehealth — every visit is screened.`,
  'viral-gastroenteritis-treatment-online': `Vomiting and diarrhea that hit like a truck — usually a virus, usually over in 1 to 3 days. What actually helps: steady rehydration, rest, and when you cannot keep anything down, prescription anti-nausea medication like ondansetron (Zofran) sent to your pharmacy today. Blood in stool, high fever, or signs of serious dehydration need in-person care.`,
  'ear-pain-treatment-online': `About a third of swimmer's ear cases get the wrong treatment — oral antibiotics instead of the antibiotic eardrops guidelines actually call for. An MD works out which kind of ear problem you have on video and prescribes accordingly: drops for outer-ear infections, oral antibiotics for middle-ear infections when criteria are met, and an honest referral when it is more than that.`,
  'dental-pain-treatment-online': `A throbbing tooth at 9 pm with a dental appointment days away is misery. We cannot do the root canal — but an MD can bridge the gap: the ibuprofen-plus-acetaminophen combination that works best for dental pain, antibiotics only when infection is spreading, and a dentist follow-up plan within 24 to 48 hours. Facial swelling with fever or trouble swallowing means emergency care now.`,
  'cellulitis-treatment-online': `Skin that is red, warm, swollen, and spreading outward from a cut or cracked skin can be cellulitis — and mild cases respond well to oral antibiotics started early. Show an MD on video and treatment can start today. Fever, rapid spread, red streaking, or anything on the face is urgent in-person territory — we screen for every one of them.`,
  'gout-treatment-online': `If you have had gout before, you know the flare the moment it starts — and every hour of delay is pain you do not need. An MD can start anti-inflammatory treatment on video today, no waiting room required with a foot that will not fit in a shoe. A first-ever swollen joint, or fever with joint pain, needs in-person testing first to rule out infection.`,
  'mastitis-treatment-online': `A hot, tender, wedge-shaped area of the breast while breastfeeding — mastitis is diagnosed clinically, which makes it one of the best telehealth fits there is. An MD walks you through current protocol: keep milk moving, ibuprofen, cold compresses — and antibiotics only when true bacterial signs like fever and chills are present. Keep breastfeeding; it is safe for you and your baby.`,
  'impetigo-treatment-online': `Honey-colored crusts or spreading sores, often on the face — impetigo is highly contagious, and treating it early is how you stop it moving through your household. An MD assesses the lesions on video and prescribes topical antibiotic for limited cases or oral antibiotics for more extensive infection. Spreading redness with fever gets redirected to in-person care.`,
  'oral-thrush-treatment-online': `Creamy white patches on the tongue that wipe off and leave a raw surface — classic thrush, usually triggered by inhalers, recent antibiotics, dentures, or diabetes. An MD confirms it on video, prescribes the right antifungal — lozenges, rinse, or fluconazole — and addresses the trigger so it does not come back. Painful swallowing needs in-person evaluation for esophageal involvement.`,
};

/* Compliance disclaimer — preserved from the old copy, rendered once per panel
   as a muted footnote instead of repeated inside every description. */
const COMPLIANCE_NOTE = 'For adults located in one of our covered states.';

export default function ConditionGridCanary({ category, conditionDescriptions }) {
  const [openSlug, setOpenSlug] = useState(null);
  const baseId = useId();

  const toggle = (slug) => setOpenSlug((prev) => (prev === slug ? null : slug));

  /* Reorder tiles for RENDERING only; never mutate category.conditions
     (the JSON-LD ItemList builder consumes the original source order). */
  const rank = (slug) => {
    const i = DISPLAY_ORDER.indexOf(slug);
    return i === -1 ? DISPLAY_ORDER.length : i;
  };
  const orderedConditions = category.conditions
    .map((c, i) => ({ c, i }))
    .sort((a, b) => rank(a.c.slug) - rank(b.c.slug) || a.i - b.i)
    .map((x) => x.c);

  return (
    <section className="tdm-section wwtc" id={category.categorySlug}>
      {/* Clean header: small line icon + serif title + one-line subhead (no emoji, no teal banner) */}
      <header className="wwtc-header">
        <span className="wwtc-header-icon">
          <img src={`${ICON_BASE}/${HEADER_ICON}`} alt="" width="64" height="64" loading="lazy" decoding="async" />
        </span>
        <div className="wwtc-header-text">
          <h2 className="wwtc-title">{category.categoryName}</h2>
          <p className="wwtc-subtitle">{category.categoryDescription}</p>
        </div>
        <span className="wwtc-chip" aria-hidden="true">$79 flat fee · Same-day</span>
      </header>

      <div className="wwtc-grid">
        {orderedConditions.map((c) => {
          const desc = conditionDescriptions[c.slug] || {};
          const full = desc.full || desc.description || '';
          const panelCopy = CANARY_DESCRIPTIONS[c.slug] || full;
          const label = DISPLAY_LABEL[c.slug] || c.name;
          /* When a short display label is used, expose the full clinical name
             to assistive tech while keeping the visible label inside the
             accessible name (WCAG 2.5.3 label-in-name). */
          const btnAriaLabel = label === c.name ? undefined : `${label} (${c.name})`;
          const isOpen = openSlug === c.slug;
          const panelId = `${baseId}-${c.slug}`;
          return (
            <div className={`wwtc-tile${isOpen ? ' open' : ''}`} key={c.slug} data-kw={desc.keywords || ''}>
              <button
                type="button"
                className="wwtc-tile-btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-label={btnAriaLabel}
                onClick={() => toggle(c.slug)}
              >
                <span className="wwtc-tile-icon">
                  <img src={`${ICON_BASE}/${conditionIconFile[c.slug] || HEADER_ICON}`} alt="" width="48" height="48" loading="lazy" decoding="async" />
                </span>
                <span className="wwtc-tile-name">{label}</span>
                <svg className="wwtc-tile-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="6 9 12 15 18 9" /></svg>
              </button>

              {/* Full description stays server-rendered in the DOM at all times;
                  visibility is toggled via CSS so SEO / AI-citation value is preserved. */}
              <div
                id={panelId}
                className="wwtc-panel"
                role="region"
                aria-label={`${c.name} details`}
                hidden={!isOpen}
              >
                <p className="wwtc-panel-desc">{panelCopy}</p>
                <p className="wwtc-panel-note">{COMPLIANCE_NOTE}</p>
                <div className="wwtc-panel-actions">
                  <a href="/book-online" className="tdm-btn tdm-btn-primary">Book Visit</a>
                  <a href={`/${c.slug}`} className="tdm-btn tdm-btn-secondary">Learn More →</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="wwtc-section-cta">
        <a href="/book-online" className="tdm-btn tdm-btn-primary wwtc-section-cta-btn">Book a Visit — $79</a>
      </div>
    </section>
  );
}
