export const homepageCSS = `
/* ============================================================
   TeleDirectMD Homepage Styles
   ============================================================ */

/* --- Box sizing reset --- */
.hp-services *,
.hp-services *::before,
.hp-services *::after,
.hp-how *,
.hp-how *::before,
.hp-how *::after { box-sizing: border-box; }

/* Prevent any section from causing horizontal scroll */
.hp-services, .hp-how { overflow: hidden; }

/* --- Font imports --- */
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Inter:wght@400;500;600;700&family=Patrick+Hand&family=Caveat:wght@400;700&family=Manrope:wght@500;700&family=Space+Mono:wght@400;700&family=Karla:wght@400;700&display=swap');

/* --- Animations --- */
@keyframes hp-fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes hp-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes hp-slide-left {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes hp-slide-right {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes hp-scale-in {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes hp-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
@keyframes hp-strikethrough {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes hp-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
/* ---- SCROLL ENTRANCE (non-hero sections) ---- */
.hp-animate {
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.hp-animate.hp-visible {
  opacity: 1;
  transform: translateY(0) translateX(0) scale(1);
}
.hp-animate.hp-fade-up { transform: translateY(30px); }
.hp-animate.hp-fade-up.hp-visible { transform: translateY(0); }
.hp-animate.hp-slide-left { transform: translateX(40px); }
.hp-animate.hp-slide-left.hp-visible { transform: translateX(0); }
.hp-animate.hp-slide-right { transform: translateX(-40px); }
.hp-animate.hp-slide-right.hp-visible { transform: translateX(0); }
.hp-animate.hp-scale-in { transform: scale(0.92); }
.hp-animate.hp-scale-in.hp-visible { transform: scale(1); }

/* Staggered children */
.hp-stagger > .hp-animate:nth-child(1) { transition-delay: 0.05s; }
.hp-stagger > .hp-animate:nth-child(2) { transition-delay: 0.1s; }
.hp-stagger > .hp-animate:nth-child(3) { transition-delay: 0.15s; }
.hp-stagger > .hp-animate:nth-child(4) { transition-delay: 0.2s; }
.hp-stagger > .hp-animate:nth-child(5) { transition-delay: 0.25s; }
.hp-stagger > .hp-animate:nth-child(6) { transition-delay: 0.3s; }

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hp-animate,
  .hp-sticky-step-card,
  .hp-sticky-why-card {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
    transition: none !important;
  }
  .hp-sticky-scroll-outer,
  .hp-sticky-why-outer {
    min-height: auto !important;
  }
  .hp-sticky-viewport {
    position: relative !important;
    min-height: auto !important;
  }
}

/* --- Base layout --- */
/* Hide the global mobile sticky bar on homepage — homepage has its own CTAs */
body:has(.hp-wrap) .tdmd-mobile-sticky-bar {
  display: none !important;
}
body:has(.hp-wrap) {
  padding-bottom: 0 !important;
}

.hp-wrap {
  font-family: 'Inter', sans-serif;
  color: #003E52;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
.hp-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}

/* --- Buttons --- */
.hp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.98rem;
  border-radius: 50px;
  padding: 14px 32px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  line-height: 1.2;
}
.hp-btn:hover {
  transform: translateY(-1px);
}
.hp-btn-primary {
  background: #FF5A36;
  color: #fff;
  box-shadow: 0 4px 16px rgba(255,90,54,0.3);
}
.hp-btn-primary:hover {
  background: #e8492a;
  box-shadow: 0 6px 22px rgba(255,90,54,0.4);
}
.hp-btn-secondary {
  background: #006B73;
  color: #fff;
  box-shadow: 0 4px 16px rgba(0,107,115,0.2);
}
.hp-btn-secondary:hover {
  background: #005a61;
}
.hp-btn-outline {
  background: transparent;
  color: #003E52;
  border: 1.5px solid #003E52;
}
.hp-btn-outline:hover {
  background: #003E52;
  color: #fff;
}
.hp-btn-white {
  background: #fff;
  color: #003E52;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}
.hp-btn-white:hover {
  background: #f8f8f8;
}
.hp-btn-sm {
  padding: 10px 22px;
  font-size: 0.9rem;
}

/* --- Section spacing --- */
.hp-section {
  padding: 80px 0;
}
.hp-section-sm {
  padding: 56px 0;
}

/* --- Section headings --- */
.hp-section-label {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
  display: block;
}
.hp-section-title {
  font-family: 'Merriweather', serif;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.25;
  margin: 0 0 16px;
}
.hp-section-subtitle {
  font-size: 1.08rem;
  line-height: 1.6;
  max-width: 640px;
  color: #4b5f66;
}

/* ============================================================
   SECTION 1: HERO — Canvas Animation
   ============================================================ */
/* Visually hidden but readable by crawlers and screen readers */
.hp-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

/* Insurance CTA below hero canvas */
.hp-hero-insurance-cta {
  background: #F4EFE8;
  text-align: center;
  padding: 10px 16px 16px;
}
.hp-hero-insurance-link {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  color: #006B73;
  text-decoration: none;
  border-bottom: 1px solid rgba(0,107,115,0.3);
  transition: color 0.2s, border-color 0.2s;
}
.hp-hero-insurance-link:hover {
  color: #003E52;
  border-color: #003E52;
}

.hp-hero-canvas {
  background: #F4EFE8;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.hp-hero-accents {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
}
@media (min-width: 1200px) {
  .hp-hero-accents {
    display: block;
  }
}
.hp-hero-accent-left {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: auto;
}
.hp-hero-accent-right {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: auto;
}
#tmd-root {
  width: 100%;
  background: #F4EFE8;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  line-height: 0;
  font-size: 0;
}
#tmd-wrap-d {
  display: none;
  width: 100%;
  max-width: 100%;
  position: relative;
  line-height: 0;
  font-size: 0;
}
#tmd-wrap-m {
  display: none;
  width: 100%;
  max-width: 100%;
  position: relative;
  line-height: 0;
  font-size: 0;
}
@media(min-width:768px) { #tmd-wrap-d { display: block; } }
@media(max-width:767px) { #tmd-wrap-m { display: block; } }
#tmd-wrap-d canvas, #tmd-wrap-m canvas {
  display: block;
  width: 100%;
  height: auto;
  will-change: transform;
}
.tmd-cta {
  position: absolute;
  left: 50%;
  bottom: 6%;
  transform: translateX(-50%) scale(0.85);
  display: none;
  opacity: 0;
  background: #FF5A36;
  color: #fff;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: clamp(14px, 1.7vw, 18px);
  letter-spacing: 0.02em;
  border: none;
  padding: clamp(12px, 1.4vw, 16px) clamp(28px, 3.5vw, 44px);
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 22px rgba(255, 90, 54, 0.38);
  transition: transform 0.18s, box-shadow 0.18s;
  white-space: nowrap;
}
.tmd-cta:hover {
  background: #e04a28;
  transform: translateX(-50%) scale(1.04);
}
.tmd-replay {
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 3px;
  color: rgba(255, 90, 54, 0.50);
  background: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
  text-transform: uppercase;
}
/* ============================================================
   SECTION 2: SERVICE CATEGORIES
   ============================================================ */
.hp-services {
  background: #1A3C4D;
  padding: 72px 0 56px;
  color: #fff;
}
.hp-services .hp-section-label {
  color: rgba(255,255,255,0.6);
}
.hp-services .hp-section-title {
  color: #fff;
}
.hp-services .hp-section-subtitle {
  color: rgba(255,255,255,0.7);
}
.hp-services-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: 40px;
}
.hp-service-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  padding: 24px 20px;
  text-align: center;
  transition: background 0.2s ease, transform 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.hp-service-card:hover {
  background: rgba(255,255,255,0.14);
  transform: translateY(-3px);
}
.hp-service-icon {
  width: 64px;
  height: 64px;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  box-shadow: 0 0 0 8px rgba(255,255,255,0.04);
}
.hp-service-icon svg {
  width: 32px;
  height: 32px;
  color: #7BD4C0;
}
.hp-service-img {
  width: 100%;
  height: 180px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;
  background: rgba(255,255,255,0.06);
}
.hp-service-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.hp-service-card:hover .hp-service-img img {
  transform: scale(1.05);
}
.hp-service-card h3 {
  font-family: 'Merriweather', serif;
  font-weight: 600;
  font-size: 1.05rem;
  margin: 0 0 8px;
  line-height: 1.3;
}
.hp-service-card p {
  font-size: 0.82rem;
  line-height: 1.5;
  color: rgba(255,255,255,0.65);
  margin: 0 0 auto;
  padding-bottom: 16px;
  flex: 1;
}
.hp-service-card .hp-btn-sm {
  font-size: 0.8rem;
  padding: 10px 18px;
  background: rgba(255,255,255,0.15);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.25);
  width: 100%;
  margin-top: 20px;
  flex-shrink: 0;
}
.hp-service-card:hover .hp-btn-sm {
  background: #FF5A36;
  border-color: #FF5A36;
}

/* Featured-in marquee */
.hp-featured-strip {
  margin-top: 48px;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 28px;
}
.hp-featured-strip span {
  font-size: 0.72rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  display: block;
  margin-bottom: 18px;
}
.hp-marquee-wrap {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%);
}
.hp-marquee-track {
  display: flex;
  align-items: center;
  gap: 24px;
  width: max-content;
  animation: hp-marquee 30s linear infinite;
}
.hp-marquee-wrap:hover .hp-marquee-track {
  animation-play-state: paused;
}
.hp-marquee-track img {
  height: 24px;
  opacity: 1;
  filter: grayscale(20%);
  object-fit: contain;
  background: #ffffff;
  padding: 10px 18px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  flex-shrink: 0;
  transition: filter 0.2s ease;
}
.hp-marquee-track img:hover {
  filter: grayscale(0%);
}

/* ============================================================
   SECTION 3: HOW IT WORKS
   ============================================================ */
.hp-how {
  background: #fff;
  text-align: center;
}
.hp-how .hp-section-label { color: #006B73; }
.hp-how .hp-section-title { color: #003E52; }
.hp-how .hp-section-subtitle {
  margin-left: auto;
  margin-right: auto;
}
.hp-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 48px;
  position: relative;
}
.hp-step {
  text-align: center;
  position: relative;
}
.hp-step-num {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #EAF5F3;
  color: #006B73;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  position: relative;
  z-index: 1;
}
.hp-step-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  position: relative;
  z-index: 1;
}
.hp-step-icon svg {
  width: 80px;
  height: 80px;
}
.hp-step-img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 16px;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 20px rgba(0,62,82,0.12);
  border: 3px solid #EAF5F3;
  background: #FAF7F2;
}
.hp-step-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hp-step-img .hp-step-num {
  position: absolute;
  bottom: 6px;
  right: 6px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #006B73;
  color: #fff;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #fff;
  margin: 0;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.hp-step-connector {
  position: absolute;
  top: 60px;
  left: calc(50% + 60px);
  right: calc(-50% + 60px);
  height: 2px;
  background: linear-gradient(90deg, #006B73 0%, #d0e8e5 100%);
  z-index: 0;
}
.hp-step:last-child .hp-step-connector { display: none; }
.hp-step h3 {
  font-family: 'Merriweather', serif;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0 0 8px;
  color: #003E52;
}
.hp-step p {
  font-size: 0.92rem;
  line-height: 1.55;
  color: #60727C;
  margin: 0;
  max-width: 220px;
  margin-left: auto;
  margin-right: auto;
}

/* ============================================================
   SECTION 4: CONDITIONS
   ============================================================ */
.hp-conditions {
  background: #F5FBFB;
}
.hp-conditions .hp-section-label { color: #006B73; }
.hp-conditions-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 28px;
}
.hp-tab {
  padding: 10px 20px;
  border-radius: 50px;
  border: 1.5px solid #d0e0e3;
  background: #fff;
  color: #003E52;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.hp-tab:hover {
  border-color: #006B73;
  color: #006B73;
}
.hp-tab.hp-tab-active {
  background: #006B73;
  color: #fff;
  border-color: #006B73;
}
.hp-conditions-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
  min-height: 60px;
}
.hp-condition-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 50px;
  background: #fff;
  border: 1px solid #d0e0e3;
  font-size: 0.88rem;
  color: #003E52;
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
}
.hp-condition-pill:hover {
  border-color: #006B73;
  color: #006B73;
  background: #EAF5F3;
}
.hp-condition-pill svg {
  width: 18px;
  height: 18px;
  color: #006B73;
  flex-shrink: 0;
}
.hp-condition-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
.hp-condition-icon svg {
  width: 18px;
  height: 18px;
  color: #006B73;
  flex-shrink: 0;
}
.hp-conditions-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* ============================================================
   SECTION 5: MEET THE DOCTOR
   ============================================================ */
.hp-doctor {
  background: #fff;
}
.hp-doctor-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.hp-doctor-label {
  color: #006B73;
}
.hp-doctor-name {
  font-family: 'Merriweather', serif;
  font-weight: 600;
  font-size: 2rem;
  color: #003E52;
  margin: 0 0 6px;
}
.hp-doctor-creds {
  font-size: 0.92rem;
  color: #60727C;
  margin: 0 0 20px;
}
.hp-doctor-bio {
  font-size: 1rem;
  line-height: 1.7;
  color: #37474F;
  margin: 0 0 12px;
}
.hp-doctor-npi {
  font-size: 0.82rem;
  color: #60727C;
  margin: 0 0 24px;
}
.hp-doctor-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.hp-doctor-photo-wrap {
  position: relative;
}
.hp-doctor-blob {
  position: absolute;
  top: -40px;
  left: -40px;
  right: -40px;
  bottom: -40px;
  pointer-events: none;
  z-index: 0;
}
.hp-doctor-blob svg {
  width: 100%;
  height: 100%;
}
.hp-doctor-photo {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0,35,45,0.1);
  position: relative;
  z-index: 1;
}
.hp-doctor-photo img {
  width: 100%;
  height: auto;
  display: block;
}

/* Wave divider between Why and Coverage */
.hp-wave-divider {
  margin-top: -1px;
  line-height: 0;
}
.hp-wave-divider svg {
  width: 100%;
  height: 60px;
  display: block;
}

/* ============================================================
   SECTION 6: AS SEEN IN
   ============================================================ */
.hp-media {
  background: #F5F5F2;
}
.hp-media .hp-section-label { color: #60727C; }
.hp-media .hp-section-title { color: #003E52; }
.hp-media-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 16px;
  margin-top: 40px;
}
.hp-media-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 72px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.hp-media-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}
.hp-media-card img {
  max-height: 32px;
  max-width: 100%;
  filter: grayscale(40%);
  opacity: 0.8;
  transition: filter 0.3s ease, opacity 0.3s ease;
}
.hp-media-card:hover img {
  filter: grayscale(0%);
  opacity: 1;
}

/* ============================================================
   SECTION 6b: INSURANCE LOGOS
   ============================================================ */
.hp-insurance-logos {
  background: #F5F5F2;
}
.hp-insurance-logos .hp-section-label { color: #60727C; }
.hp-insurance-logos .hp-section-title { color: #003E52; }
.hp-insurance-logos .hp-section-sub { color: #60727C; font-size: 0.95rem; line-height: 1.6; }
.hp-insurance-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 720px;
  margin: 0 auto;
}
.hp-insurance-card {
  background: #fff;
  border-radius: 16px;
  padding: 28px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 96px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(0,0,0,0.06);
}
.hp-insurance-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.08);
}
.hp-insurance-card img {
  max-height: 40px;
  max-width: 160px;
  width: 100%;
  object-fit: contain;
  filter: grayscale(20%);
  opacity: 0.85;
  transition: filter 0.3s ease, opacity 0.3s ease;
}
.hp-insurance-card:hover img {
  filter: grayscale(0%);
  opacity: 1;
}

/* ============================================================
   SECTION 7: REVIEWS
   ============================================================ */
.hp-reviews {
  background: #fff;
  overflow: hidden;
}
.hp-reviews .hp-section-label { color: #006B73; }
.hp-review-quote {
  position: absolute;
  top: 12px;
  right: 16px;
  opacity: 1;
  pointer-events: none;
}
.hp-reviews-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 36px;
}
.hp-reviews-header-left .hp-section-title {
  margin-bottom: 4px;
}
.hp-reviews-nav {
  display: flex;
  gap: 10px;
}
.hp-reviews-nav button {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1.5px solid #d0e0e3;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: #003E52;
}
.hp-reviews-nav button:hover {
  background: #006B73;
  border-color: #006B73;
  color: #fff;
}
.hp-reviews-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding-bottom: 4px;
}
.hp-reviews-track::-webkit-scrollbar {
  display: none;
}
.hp-review-card {
  scroll-snap-align: start;
  background: #F9FAFB;
  border-radius: 20px;
  padding: 28px;
  min-width: 340px;
  max-width: 340px;
  flex-shrink: 0;
  border: 1px solid #e8ecee;
  position: relative;
  overflow: hidden;
}
.hp-review-stars {
  display: flex;
  gap: 3px;
  margin-bottom: 12px;
}
.hp-review-stars svg {
  width: 18px;
  height: 18px;
  fill: #f5a623;
}
.hp-review-text {
  font-size: 0.94rem;
  line-height: 1.6;
  color: #37474F;
  margin: 0 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.hp-review-author {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hp-review-name {
  font-weight: 700;
  font-size: 0.9rem;
  color: #003E52;
}
.hp-review-source {
  font-size: 0.78rem;
  color: #60727C;
  font-weight: 500;
}

/* ============================================================
   SECTION 8: WHY CHOOSE
   ============================================================ */
.hp-why {
  background: #EAF5F3;
}
.hp-why .hp-section-label { color: #006B73; }
.hp-why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.hp-why-card {
  background: #fff;
  border-radius: 20px;
  padding: 28px 24px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0,35,45,0.05);
  transition: transform 0.2s ease;
}
.hp-why-card:hover {
  transform: translateY(-3px);
}
.hp-why-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: #EAF5F3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
.hp-why-icon svg {
  width: 28px;
  height: 28px;
  color: #006B73;
}
.hp-why-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 16px;
  background: #F4F1EC;
  box-shadow: 0 2px 12px rgba(0,62,82,0.08);
}
.hp-why-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hp-why-card h3 {
  font-family: 'Merriweather', serif;
  font-weight: 600;
  font-size: 1.05rem;
  margin: 0 0 8px;
  color: #003E52;
}
.hp-why-card p {
  font-size: 0.88rem;
  line-height: 1.55;
  color: #60727C;
  margin: 0;
}
.hp-why .hp-btn {
  display: block;
  margin: 0 auto;
  width: fit-content;
}

/* ============================================================
   SECTION 9: STATE MAP
   ============================================================ */
.hp-us-map {
  max-width: 700px;
  margin: 32px auto 24px;
}
.hp-us-map svg {
  width: 100%;
  height: auto;
}
.hp-map-legend {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 12px;
}
.hp-map-legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.6);
}
.hp-map-legend-item span {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  display: inline-block;
}
.hp-map-legend-item.hp-map-active span {
  background: #006B73;
}
.hp-map-legend-item.hp-map-inactive span {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.2);
}

.hp-states {
  background: #1A3C4D;
  color: #fff;
  text-align: center;
}
.hp-states .hp-section-label { color: rgba(255,255,255,0.5); }
.hp-states .hp-section-title { color: #fff; }
.hp-states .hp-section-subtitle {
  color: rgba(255,255,255,0.6);
  margin-left: auto;
  margin-right: auto;
}
.hp-state-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
  gap: 8px;
  margin-top: 40px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.hp-state-tile {
  aspect-ratio: 1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
}
.hp-state-active {
  background: #006B73;
  color: #fff;
}
.hp-state-active:hover {
  background: #008080;
  transform: scale(1.08);
  color: #fff;
}
.hp-state-inactive {
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.3);
  border: 1px solid rgba(255,255,255,0.1);
}
.hp-state-dc {
  font-size: 0.68rem;
}

/* ============================================================
   SECTION 10: CONTACT / SUPPORT
   ============================================================ */
.hp-contact {
  background: #F4EFE8;
}
.hp-contact .hp-section-label { color: #006B73; }
.hp-contact-layout {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  align-items: center;
  max-width: 860px;
  margin: 32px auto 0;
}
.hp-contact-illustration {
  width: 220px;
  flex-shrink: 0;
}
.hp-contact-illustration svg {
  width: 100%;
  height: auto;
}
.hp-contact-card {
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 24px rgba(0,35,45,0.06);
}
.hp-contact-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
}
.hp-contact-row:last-child {
  margin-bottom: 0;
}
.hp-contact-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #EAF5F3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.hp-contact-icon svg {
  width: 22px;
  height: 22px;
  color: #006B73;
}
.hp-contact-info h4 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  margin: 0 0 4px;
  color: #003E52;
}
.hp-contact-info p,
.hp-contact-info a {
  font-size: 0.92rem;
  color: #60727C;
  margin: 0;
  line-height: 1.5;
  text-decoration: none;
}
.hp-contact-info a:hover {
  color: #006B73;
}
.hp-contact-disclaimer {
  text-align: center;
  font-size: 0.82rem;
  color: #8b9da4;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #e8ecee;
}

/* ============================================================
   APPLE-STYLE STICKY SCROLL ANIMATIONS
   ============================================================ */

/* Outer container creates scroll height for the pinned area */
.hp-sticky-scroll-outer {
  min-height: calc(100vh + 560px); /* viewport pins, then 560px of scroll to reveal 4 steps */
  position: relative;
}
.hp-sticky-why-outer {
  min-height: calc(100vh + 680px); /* viewport pins, then 680px of scroll to reveal 6 cards */
}

/* The pinned viewport — stays in view while user scrolls */
.hp-sticky-viewport {
  position: sticky;
  top: 0;
  min-height: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 0;
  overflow: hidden;
}

/* How It Works — sticky step layout */
.hp-sticky-steps {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 48px;
  margin-top: 48px;
  align-items: start;
}

/* Left nav: vertical timeline */
.hp-sticky-steps-nav {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}
.hp-sticky-nav-item {
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  padding-bottom: 8px;
}
.hp-sticky-nav-num {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #EAF5F3;
  color: #006B73;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 2;
}
.hp-sticky-nav-active .hp-sticky-nav-num {
  background: #006B73;
  color: #fff;
  transform: scale(1.12);
  box-shadow: 0 4px 16px rgba(0,107,115,0.3);
}
.hp-sticky-nav-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.92rem;
  color: #97adb5;
  transition: color 0.4s ease;
  white-space: nowrap;
}
.hp-sticky-nav-active .hp-sticky-nav-label {
  color: #003E52;
}
.hp-sticky-nav-line {
  position: absolute;
  left: 21px;
  top: 44px;
  width: 2px;
  height: 24px;
  background: #d0e8e5;
  z-index: 1;
}
.hp-sticky-nav-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: #006B73;
  transition: height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.hp-sticky-nav-line-fill::after {
  height: 100%;
}

/* Right: step cards grid */
.hp-sticky-steps-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.hp-sticky-step-card {
  background: #F9FAFB;
  border: 1px solid #e8ecee;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}
.hp-sticky-step-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.hp-sticky-step-card .hp-sticky-step-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  box-shadow: 0 4px 16px rgba(0,62,82,0.1);
  border: 3px solid #EAF5F3;
  background: #FAF7F2;
}
.hp-sticky-step-card .hp-sticky-step-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hp-sticky-step-card .hp-step-num {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #006B73;
  color: #fff;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 0.72rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.hp-sticky-step-text h3 {
  font-family: 'Merriweather', serif;
  font-weight: 600;
  font-size: 1.05rem;
  margin: 0 0 6px;
  color: #003E52;
}
.hp-sticky-step-text p {
  font-size: 0.88rem;
  line-height: 1.5;
  color: #60727C;
  margin: 0;
}

/* Why section — sticky cards */
.hp-sticky-why-card {
  opacity: 0;
  transform: translateY(40px) scale(0.92);
  transition: all 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}
.hp-sticky-why-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 1024px) {
  .hp-services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .hp-media-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .hp-section {
    padding: 56px 0;
  }
  .hp-section-title {
    font-size: 1.6rem;
  }
  .hp-services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  /* Switch grid to flex column on tablet — eliminates height:100% overlap */
  .hp-services-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .hp-service-card {
    height: auto;
  }
  /* Orange Book Now by default on touch screens — no hover state */
  .hp-service-card .hp-btn-sm {
    background: #FF5A36;
    border-color: #FF5A36;
    color: #fff;
    font-weight: 600;
  }
  /* Remove animation on mobile service cards — static with proper spacing */
  .hp-services-grid .hp-service-card.hp-animate {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .hp-steps {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  .hp-step-connector {
    display: none;
  }
  /* Sticky scroll: stack on mobile */
  .hp-sticky-scroll-outer {
    min-height: auto !important;
  }
  .hp-sticky-why-outer {
    min-height: auto !important;
  }
  .hp-sticky-viewport {
    position: relative !important;
    top: auto !important;
    min-height: auto !important;
    padding: 40px 0;
  }
  .hp-sticky-steps {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .hp-sticky-steps-nav {
    display: none;
  }
  .hp-sticky-steps-cards {
    grid-template-columns: 1fr;
  }
  .hp-sticky-step-card {
    opacity: 1 !important;
    transform: none !important;
  }
  .hp-sticky-why-card {
    opacity: 1 !important;
    transform: none !important;
  }
  .hp-doctor-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .hp-doctor-photo-wrap {
    order: -1;
    max-width: 360px;
    margin: 0 auto;
  }
  .hp-media-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .hp-why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .hp-review-card {
    min-width: 280px;
    max-width: 280px;
  }
  .hp-reviews-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .hp-state-grid {
    grid-template-columns: repeat(auto-fill, minmax(48px, 1fr));
  }
  .hp-contact-card {
    padding: 28px 20px;
  }
  .hp-contact-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .hp-contact-illustration {
    width: 180px;
    margin: 0 auto;
  }
  .hp-us-map {
    max-width: 100%;
    margin: 24px auto 16px;
  }
  /* Insurance logos — stack to 1 col, bigger cards */
  .hp-insurance-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 360px;
  }
  .hp-insurance-card {
    padding: 24px 40px;
    min-height: 100px;
  }
  .hp-insurance-card img {
    max-height: 52px;
    max-width: 200px;
  }
}

@media (max-width: 480px) {
  .hp-section-title {
    font-size: 1.4rem;
  }
  .hp-services-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  /* Orange Book Now by default on mobile — no hover state on touch */
  .hp-service-card .hp-btn-sm {
    background: #FF5A36;
    border-color: #FF5A36;
    color: #fff;
    padding: 14px 18px;
    font-size: 0.92rem;
    font-weight: 600;
  }
  .hp-service-card {
    height: auto;
    padding-bottom: 28px;
  }
  .hp-steps {
    grid-template-columns: 1fr;
  }
  .hp-media-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .hp-why-grid {
    grid-template-columns: 1fr;
  }
  .hp-review-card {
    min-width: 260px;
    max-width: 260px;
  }
  .hp-marquee-track {
    gap: 16px;
  }
  .hp-marquee-track img {
    height: 18px;
    padding: 8px 12px;
  }

}

/* ============================
   ANIMATED COUNTER NUMBERS
   ============================ */
.hp-counter-num {
  font-variant-numeric: tabular-nums;
  display: inline-block;
  min-width: 1.8ch;
}
.hp-counter-price {
  font-variant-numeric: tabular-nums;
  display: inline-block;
  min-width: 2.5ch;
  color: #FF5A36;
  transition: color 0.4s ease-out;
}
.hp-services .hp-counter-price {
  color: #FF5A36;
}
.hp-why-card .hp-counter-price {
  color: #FF5A36;
}
`;
