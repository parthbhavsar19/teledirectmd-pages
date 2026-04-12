'use client';

import { useState, useEffect, useRef } from "react";

// ─── Data: Only ACTIVE contracts (live for billing as of April 2026) ───
const insuranceData = {
  AZ: { state: "Arizona", insurers: [{ name: "Aetna", group: "Aetna", plans: ["Commercial plans accepted"] }] },
  CO: { state: "Colorado", insurers: [{ name: "Aetna", group: "Aetna", plans: ["Commercial plans accepted"] }, { name: "UnitedHealthcare", group: "UHC", plans: ["Commercial plans accepted"] }] },
  FL: { state: "Florida", insurers: [{ name: "Aetna", group: "Aetna", plans: ["Commercial plans accepted"] }, { name: "Florida Blue", group: "BCBS", plans: ["Individual plans", "Group plans"] }] },
  GA: { state: "Georgia", insurers: [{ name: "Aetna", group: "Aetna", plans: ["Commercial plans accepted"] }, { name: "Anthem Blue Cross Blue Shield", group: "BCBS", plans: ["Commercial plans accepted"] }, { name: "UnitedHealthcare", group: "UHC", plans: ["Commercial plans accepted"] }] },
  IL: { state: "Illinois", insurers: [{ name: "Aetna", group: "Aetna", plans: ["Commercial plans accepted"] }, { name: "Blue Cross Blue Shield of Illinois", group: "BCBS", plans: ["Commercial plans accepted"] }, { name: "UnitedHealthcare", group: "UHC", plans: ["Commercial plans accepted"] }] },
  MI: { state: "Michigan", insurers: [{ name: "Aetna", group: "Aetna", plans: ["Commercial plans accepted"] }] },
  MN: { state: "Minnesota", insurers: [{ name: "Aetna", group: "Aetna", plans: ["Commercial plans accepted"] }, { name: "UnitedHealthcare", group: "UHC", plans: ["Commercial plans accepted"] }] },
  NJ: { state: "New Jersey", insurers: [{ name: "UnitedHealthcare", group: "UHC", plans: ["Commercial plans accepted"] }] },
  OH: { state: "Ohio", insurers: [{ name: "Aetna", group: "Aetna", plans: ["Commercial plans accepted"] }, { name: "UnitedHealthcare", group: "UHC", plans: ["Commercial plans accepted"] }] },
  PA: { state: "Pennsylvania", insurers: [{ name: "Highmark Blue Cross Blue Shield", group: "BCBS", plans: ["Commercial plans accepted"] }, { name: "UnitedHealthcare", group: "UHC", plans: ["Commercial plans accepted"] }] },
  TN: { state: "Tennessee", insurers: [{ name: "Aetna", group: "Aetna", plans: ["Commercial plans accepted"] }, { name: "UnitedHealthcare", group: "UHC", plans: ["Commercial plans accepted"] }] },
  TX: { state: "Texas", insurers: [{ name: "Blue Cross Blue Shield of Texas", group: "BCBS", plans: ["Blue Advantage HMO","Blue Choice PPO","Health Select","Blue Essentials","Medicare Advantage HMO","Medicare Advantage PPO","Dual Special Needs Plan (D-SNP)","WellMed MA HMO"] }] },
  WA: { state: "Washington", insurers: [{ name: "UnitedHealthcare", group: "UHC", plans: ["Commercial plans accepted"] }] },
};

const allStates = ["AL","AZ","CA","CO","CT","DC","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NC","ND","OH","OK","PA","SC","SD","TN","TX","UT","WA","WV","WI","WY"];

const stateNames = {AL:"Alabama",AZ:"Arizona",CA:"California",CO:"Colorado",CT:"Connecticut",DC:"District of Columbia",DE:"Delaware",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",PA:"Pennsylvania",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"};

// ─── Brand Colors (extracted from teledirectmd.com CSS custom properties) ───
const B = {
  teal: "#006B73", tealLight: "#008C96", navy: "#003E52", navyDeep: "#002A3A", navyDarker: "#001E2B",
  accent: "#FF5A36", accentHover: "#ff704e", white: "#FFFFFF", bg: "#F5FAFA", text: "#4A6870",
  border: "rgba(0,62,82,0.10)", shadow: "0 4px 20px rgba(0,35,45,0.06)", shadowLg: "0 8px 32px rgba(0,35,45,0.08)",
  r: 20, rs: 12, fd: "'Fraunces', Georgia, serif", fb: "'DM Sans', Montserrat, system-ui, sans-serif",
};

const insurerColors = {
  Aetna: { bg: "#F3EAFF", accent: "#7B2CBF" },
  BCBS:  { bg: "#EAF2FF", accent: "#1A5FB4" },
  UHC:   { bg: "#E6FFF0", accent: "#1A7A3A" },
};

// ─── Icons ───
const Ico = {
  Shield: ({c="#currentColor",s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Check: ({c="#currentColor",s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  Chev: ({c="#currentColor",s=18}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  Dollar: ({c="#currentColor",s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  Search: ({c="#currentColor",s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  Heart: ({c="#currentColor",s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  Cal: ({c="#currentColor",s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Arrow: ({c="#currentColor",s=18}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
};

function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${B.border}` }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", background: "none", border: "none", cursor: "pointer", fontFamily: B.fd, fontSize: "17px", fontWeight: 600, color: B.navy, textAlign: "left", lineHeight: 1.4 }}>
        <span style={{ paddingRight: 16 }}>{question}</span>
        <span style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", flexShrink: 0 }}><Ico.Chev c={B.text} /></span>
      </button>
      <div style={{ maxHeight: open ? 400 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
        <p style={{ margin: 0, paddingBottom: 20, fontFamily: B.fb, fontSize: "15px", color: B.text, lineHeight: 1.7 }}>{answer}</p>
      </div>
    </div>
  );
}

export default function InsuranceClient() {
  const [selectedState, setSelectedState] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [animateResults, setAnimateResults] = useState(false);
  const dropdownRef = useRef(null);
  const resultsRef = useRef(null);
  const stateData = insuranceData[selectedState];
  const hasInsurance = !!stateData;

  useEffect(() => { if (selectedState) { setAnimateResults(false); requestAnimationFrame(() => { requestAnimationFrame(() => setAnimateResults(true)); }); setTimeout(() => { resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }); }, 100); } }, [selectedState]);
  useEffect(() => { function h(e) { if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false); } document.addEventListener("mousedown", h); return () => document.removeEventListener("mousedown", h); }, []);

  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />

      {/* ═══ HERO ═══ */}
      <div style={{ background: `linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding: "56px 24px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", borderRadius: 100, padding: "8px 16px", marginBottom: 24, backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Heart c={B.tealLight} s={16} />
            <span style={{ fontFamily: B.fb, fontSize: 13, fontWeight: 600, color: B.tealLight, letterSpacing: "0.04em", textTransform: "uppercase" }}>Now Accepting Select Insurance Plans</span>
          </div>
          <p style={{ fontFamily: B.fd, fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 400, fontStyle: "italic", color: "#9FE7EE", lineHeight: 1.3, margin: "0 0 12px", letterSpacing: "0.01em" }}>You asked. We listened.</p>
          <h1 style={{ fontFamily: B.fd, fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 700, color: B.white, lineHeight: 1.15, margin: "0 0 16px" }}>More Ways to See<br />Your Doctor</h1>
          <p style={{ fontFamily: B.fb, fontSize: "clamp(16px, 2.5vw, 19px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0, maxWidth: 560 }}>Many of you told us you wanted the option to use your insurance. We heard you. TeleDirectMD now accepts select commercial insurance plans in a growing number of states, while our flat-fee self-pay visits remain available everywhere we practice.</p>
        </div>
      </div>

      {/* ═══ TWO-PATH CARDS ═══ */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {/* Cash-pay */}
          <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: "28px 24px", position: "relative", boxShadow: B.shadow }}>
            <div style={{ position: "absolute", top: -1, left: 24, right: 24, height: 3, background: B.accent, borderRadius: "0 0 4px 4px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: B.rs, background: "#FFF0EC", display: "flex", alignItems: "center", justifyContent: "center" }}><Ico.Dollar c={B.accent} s={20} /></div>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: B.accent }}>Always Available</span>
            </div>
            <h3 style={{ fontFamily: B.fd, fontSize: 21, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>Self-Pay Visits</h3>
            <p style={{ fontSize: 15, color: B.text, lineHeight: 1.6, margin: "0 0 16px" }}>Flat-fee video visits with no surprise bills, no membership, and no insurance required. Available in 40+ states.</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}><span style={{ fontFamily: B.fd, fontSize: 32, fontWeight: 700, color: B.navy }}>$49</span><span style={{ fontSize: 14, color: B.text }}>/visit</span></div>
          </div>
          {/* Insurance */}
          <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: "28px 24px", position: "relative", boxShadow: B.shadow }}>
            <div style={{ position: "absolute", top: -1, left: 24, right: 24, height: 3, background: B.teal, borderRadius: "0 0 4px 4px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: B.rs, background: "#EAF6F7", display: "flex", alignItems: "center", justifyContent: "center" }}><Ico.Shield c={B.teal} s={20} /></div>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: B.teal }}>Now Expanding</span>
            </div>
            <h3 style={{ fontFamily: B.fd, fontSize: 21, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>Insurance Visits</h3>
            <p style={{ fontSize: 15, color: B.text, lineHeight: 1.6, margin: "0 0 16px" }}>We now accept Aetna, select Blue Cross Blue Shield plans, and UnitedHealthcare in select states. Standard copays and cost-sharing apply.</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}><span style={{ fontFamily: B.fd, fontSize: 18, fontWeight: 600, color: B.navy }}>Check coverage below</span><Ico.Chev s={16} c={B.text} /></div>
          </div>
        </div>
      </div>

      {/* ═══ CHECK YOUR COVERAGE ═══ */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 0" }}>
        <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: "36px 28px", boxShadow: B.shadowLg }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <Ico.Search c={B.teal} s={22} />
            <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: 0 }}>Check Your Coverage</h2>
          </div>
          <p style={{ fontSize: 15, color: B.text, margin: "0 0 24px", lineHeight: 1.5 }}>Select your state to see which insurance plans we currently accept there.</p>

          <div ref={dropdownRef} style={{ position: "relative", marginBottom: 24 }}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: selectedState ? "#EAF6F7" : B.bg, border: `2px solid ${dropdownOpen ? B.teal : B.border}`, borderRadius: B.rs, cursor: "pointer", fontFamily: B.fb, fontSize: 16, fontWeight: 500, color: selectedState ? B.navy : B.text, transition: "border-color 0.2s ease" }}>
              <span>{selectedState ? `${stateNames[selectedState]} (${selectedState})` : "Select your state..."}</span>
              <span style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}><Ico.Chev c={B.text} /></span>
            </button>
            {dropdownOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, background: B.white, border: `2px solid ${B.border}`, borderRadius: B.rs, boxShadow: B.shadowLg, zIndex: 100, maxHeight: 280, overflowY: "auto" }}>
                {allStates.map((code) => {
                  const hasIns = !!insuranceData[code];
                  return (
                    <button key={code} onClick={() => { setSelectedState(code); setDropdownOpen(false); }}
                      style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 18px", background: selectedState === code ? "#EAF6F7" : "transparent", border: "none", borderBottom: `1px solid ${B.bg}`, cursor: "pointer", fontFamily: B.fb, fontSize: 15, color: B.navy, textAlign: "left", transition: "background 0.15s ease" }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "#EAF6F7"} onMouseLeave={(e) => e.currentTarget.style.background = selectedState === code ? "#EAF6F7" : "transparent"}>
                      <span>{stateNames[code]} ({code})</span>
                      {hasIns && <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: B.teal, background: "#D9F0F1", padding: "3px 8px", borderRadius: 6 }}>Insurance Available</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {selectedState && (
            <div ref={resultsRef} style={{ opacity: animateResults ? 1 : 0, transform: animateResults ? "translateY(0)" : "translateY(12px)", transition: "all 0.4s ease" }}>
              {hasInsurance ? (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", background: "#D9F0F1", borderRadius: B.rs, marginBottom: 20 }}>
                    <Ico.Check c={B.teal} s={18} />
                    <span style={{ fontSize: 15, fontWeight: 600, color: B.teal }}>We accept insurance in {stateData.state}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {stateData.insurers.map((ins, i) => {
                      const cl = insurerColors[ins.group] || insurerColors.Aetna;
                      return (
                        <div key={i} style={{ background: cl.bg, border: `1px solid ${cl.accent}22`, borderRadius: B.rs, padding: 20, opacity: animateResults ? 1 : 0, transform: animateResults ? "translateY(0)" : "translateY(8px)", transition: `all 0.4s ease ${0.1 + i * 0.1}s` }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                            <div style={{ width: 32, height: 32, borderRadius: 8, background: `${cl.accent}18`, display: "flex", alignItems: "center", justifyContent: "center" }}><Ico.Shield c={cl.accent} s={17} /></div>
                            <div style={{ fontSize: 16, fontWeight: 700, color: B.navy }}>{ins.name}</div>
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                            {ins.plans.map((plan, j) => <span key={j} style={{ fontSize: 13, fontWeight: 500, color: cl.accent, background: `${cl.accent}12`, padding: "5px 12px", borderRadius: 100, border: `1px solid ${cl.accent}22` }}>{plan}</span>)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ marginTop: 20, padding: "16px 20px", background: "#FFF0EC", borderRadius: B.rs, display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ flexShrink: 0, marginTop: 2 }}><Ico.Dollar c={B.accent} s={18} /></div>
                    <p style={{ margin: 0, fontSize: 14, color: "#6B3A2A", lineHeight: 1.6 }}><strong style={{ color: B.navy }}>Not seeing your plan?</strong> You can always book a self-pay visit for a flat $49, no insurance needed. Same doctor, same quality care.</p>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ padding: "28px 24px", background: "#FFF0EC", borderRadius: B.rs, textAlign: "center" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: "#FFE0D6", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}><Ico.Dollar c={B.accent} s={24} /></div>
                    <h3 style={{ fontFamily: B.fd, fontSize: 20, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>Self-Pay Available in {stateNames[selectedState]}</h3>
                    <p style={{ fontSize: 15, color: B.text, lineHeight: 1.6, margin: "0 0 20px", maxWidth: 400, marginLeft: "auto", marginRight: "auto" }}>Insurance billing is not yet available in {stateNames[selectedState]}, but you can book a flat-fee video visit for $49 right now. No insurance needed.</p>
                    <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 600, fontSize: 15, textDecoration: "none", transition: "background 0.2s ease" }} onMouseEnter={(e) => e.currentTarget.style.background = B.accentHover} onMouseLeave={(e) => e.currentTarget.style.background = B.accent}>Book a Visit <Ico.Arrow c={B.white} s={16} /></a>
                  </div>
                  <p style={{ fontSize: 13, color: B.text, textAlign: "center", margin: "16px 0 0", lineHeight: 1.5 }}>We are actively expanding insurance coverage to more states. Check back soon or contact us at <a href="mailto:contact@teledirectmd.com" style={{ color: B.teal }}>contact@teledirectmd.com</a> for updates.</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ═══ CURRENTLY ACCEPTED OVERVIEW ═══ */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 0" }}>
        <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>Currently Accepted Insurers</h2>
        <p style={{ fontSize: 15, color: B.text, margin: "0 0 24px", lineHeight: 1.5 }}>We are in-network with the following insurers across select states. Coverage is expanding regularly.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {[
            { group: "Aetna", color: insurerColors.Aetna, states: ["AZ","CO","FL","GA","IL","MI","MN","OH","TN"], note: "Commercial plans" },
            { group: "Blue Cross Blue Shield", color: insurerColors.BCBS, states: ["FL","GA","IL","PA","TX"], note: "Select plans by state" },
            { group: "UnitedHealthcare", color: insurerColors.UHC, states: ["CO","GA","IL","MN","NJ","OH","PA","TN","WA"], note: "Commercial plans" },
          ].map((item, i) => (
            <div key={i} style={{ background: B.white, border: `1px solid ${item.color.accent}22`, borderRadius: B.r, padding: "24px 20px", borderTop: `3px solid ${item.color.accent}`, boxShadow: B.shadow }}>
              <h3 style={{ fontFamily: B.fd, fontSize: 18, fontWeight: 700, color: B.navy, margin: "0 0 6px" }}>{item.group}</h3>
              <p style={{ fontSize: 13, color: B.text, margin: "0 0 14px" }}>{item.note}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {item.states.map((st) => <span key={st} style={{ fontSize: 13, fontWeight: 600, color: item.color.accent, background: item.color.bg, padding: "4px 10px", borderRadius: 6 }}>{st}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ BOOK CTA ═══ */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 0" }}>
        <div style={{ background: `linear-gradient(135deg, ${B.navyDarker}, ${B.navy})`, borderRadius: B.r, padding: "36px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: B.fd, fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 700, color: B.white, margin: "0 0 8px" }}>Ready to Book Your Visit?</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", margin: "0 0 24px", maxWidth: 440 }}>Whether you have insurance or prefer to pay out of pocket, we make it easy to see a board-certified physician by video.</p>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 15, textDecoration: "none", transition: "all 0.2s ease" }} onMouseEnter={(e) => { e.currentTarget.style.background = B.accentHover; e.currentTarget.style.transform = "translateY(-1px)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = B.accent; e.currentTarget.style.transform = "translateY(0)"; }}>
              <Ico.Cal c={B.white} s={18} /> Book a Visit
            </a>
          </div>
        </div>
      </div>

      {/* ═══ FAQ ═══ */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 56px" }}>
        <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>Frequently Asked Questions</h2>
        <p style={{ fontSize: 15, color: B.text, margin: "0 0 24px" }}>Common questions about insurance and payment at TeleDirectMD.</p>
        <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: "4px 24px", boxShadow: B.shadow }}>
          <FAQ question="Do I need insurance to be seen?" answer="No. TeleDirectMD was built as a self-pay practice and that model remains fully available. You can book a flat-fee video visit for $49 in any of the 40+ states where we are licensed, with no insurance required. Insurance is simply an additional payment option for patients who prefer to use their benefits." />
          <FAQ question="How do I know if my plan is accepted?" answer="Use the Check Your Coverage tool above to select your state and see which insurers and plans are currently in-network. If your specific plan is not listed, you can still book as a self-pay patient. You can also call the member services number on the back of your insurance card and ask if Parth P. Bhavsar, MD (NPI: 1104323203) is listed as an in-network provider." />
          <FAQ question="What will my insurance visit cost?" answer="When using insurance, your cost depends on your specific plan benefits. You may owe a copay, coinsurance, or deductible amount as determined by your insurer. We recommend contacting your insurance company to verify your telehealth benefits before booking. A Good Faith Estimate is available upon request for uninsured or self-pay patients." />
          <FAQ question="Will you accept more insurance plans in the future?" answer="Yes. We are actively credentialing with additional insurers and expanding into more states. Check this page periodically for updates, or email contact@teledirectmd.com to ask about a specific plan." />
          <FAQ question="Is the quality of care different for insurance vs. self-pay visits?" answer="No. Every patient is seen by Parth Bhavsar, MD, a board-certified family medicine physician. The clinical experience, visit quality, and scope of conditions treated are identical regardless of payment method." />
          <FAQ question="Can I use insurance for conditions listed on your What We Treat page?" answer="Insurance visits cover the same scope of conditions as self-pay visits. However, coverage for specific services depends on your individual plan benefits. If a service is not covered by your plan, you always have the option to pay the flat self-pay rate." />
        </div>
      </div>

      {/* ═══ EXPLORE MORE ═══ */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 40px" }}>
        <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>Explore TeleDirectMD</h2>
        <p style={{ fontSize: 15, color: B.text, margin: "0 0 20px", lineHeight: 1.5 }}>Learn more about our services, coverage, and conditions we treat.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
          {[
            { href: "/states-we-serve", label: "States We Serve", desc: "40+ states with same-day visits" },
            { href: "/what-we-treat", label: "What We Treat", desc: "Browse all conditions" },
            { href: "/faq", label: "FAQs", desc: "Common questions answered" },
            { href: "/book-online", label: "Book a Visit", desc: "$49 flat fee or insurance" },
          ].map((link, i) => (
            <a key={i} href={link.href} style={{ display: "block", padding: "16px", background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, textDecoration: "none", transition: "border-color 0.2s" }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: B.navy, marginBottom: 4 }}>{link.label}</div>
              <div style={{ fontSize: 13, color: B.text, lineHeight: 1.4 }}>{link.desc}</div>
            </a>
          ))}
        </div>
      </div>

      {/* ═══ DISCLAIMER ═══ */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 48px" }}>
        <p style={{ fontSize: 12, color: B.text, lineHeight: 1.7, borderTop: `1px solid ${B.border}`, paddingTop: 20, opacity: 0.7 }}>
          Insurance coverage and plan acceptance are subject to change. The information on this page reflects currently active contracts as of April 2026. Not all plans from a listed insurer may be accepted. Medicaid and Medicare fee-for-service plans are not accepted unless specifically noted. Patients are encouraged to verify benefits with their insurer before booking. TeleDirectMD does not guarantee insurance coverage for any specific service or visit. For the most current information, contact us at <a href="mailto:contact@teledirectmd.com" style={{ color: B.teal }}>contact@teledirectmd.com</a>.
        </p>
      </div>
    </div>
  );
}
