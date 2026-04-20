'use client';
import { useState } from "react";
import { Ico } from "./InsuranceIcons";
import { B, INSURERS, STATE_NAMES, INSURANCE_STATES, STATE_INSURANCE_MAP } from "../../../data/insurance/insuranceConfig";

// ─── Accordion FAQ ────────────────────────────────────────────────────────────
export function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${B.border}` }}>
      <button onClick={() => setOpen(!open)} style={{ width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px 0", background:"none", border:"none", cursor:"pointer", fontFamily:B.fd, fontSize:"17px", fontWeight:600, color:B.navy, textAlign:"left", lineHeight:1.4 }}>
        <span style={{ paddingRight:16 }}>{question}</span>
        <span style={{ transform:open?"rotate(180deg)":"rotate(0deg)", transition:"transform 0.3s ease", flexShrink:0 }}><Ico.Chev c={B.text} /></span>
      </button>
      <div style={{ maxHeight:open?800:0, overflow:"hidden", transition:"max-height 0.4s ease" }}>
        <p style={{ margin:0, paddingBottom:20, fontFamily:B.fb, fontSize:"15px", color:B.text, lineHeight:1.75 }} dangerouslySetInnerHTML={{__html: answer}} />
      </div>
    </div>
  );
}

// ─── Answer Engine Block (AI + featured snippet target) ──────────────────────
export function AnswerBlock({ question, answer, color }) {
  return (
    <div data-speakable="true" style={{ background: color || B.teal, borderRadius: B.r, padding: "28px 32px", marginBottom: 32, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, borderRadius: "0 20px 0 100%", background: "rgba(255,255,255,0.07)" }} />
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start", position: "relative", zIndex: 1 }}>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 10, padding: 10, flexShrink: 0 }}>
          <Ico.Check c="#fff" s={20} />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Quick Answer</div>
          <div style={{ fontFamily: B.fd, fontSize: "clamp(16px, 2.5vw, 19px)", fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.35 }}>{question}</div>
          <p style={{ fontFamily: B.fb, fontSize: 15, color: "rgba(255,255,255,0.88)", lineHeight: 1.7, margin: 0 }}>{answer}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Copay Info Card ──────────────────────────────────────────────────────────
export function CopayCard({ insurerName, stateName, copayData, insurerColor }) {
  if (!copayData) return null;
  return (
    <div style={{ background: B.white, border: `2px solid ${insurerColor || B.teal}22`, borderRadius: B.r, padding: "24px 28px", marginBottom: 32, boxShadow: B.shadow }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <Ico.Dollar c={insurerColor || B.teal} s={20} />
        <h2 style={{ fontFamily: B.fd, fontSize: 19, fontWeight: 700, color: B.navy, margin: 0 }}>
          {insurerName} Telehealth Copay in {stateName}
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 16 }}>
        {[
          { label: "Typical Copay Range", val: copayData.typical },
          { label: "Employer Plans", val: copayData.employer },
        ].map((item, i) => (
          <div key={i} style={{ background: B.bg, borderRadius: B.rs, padding: "14px 16px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: insurerColor || B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{item.label}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: B.navy }}>{item.val}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 13, color: B.text, lineHeight: 1.65, margin: "0 0 8px" }}>{copayData.note}</p>
      <p style={{ fontSize: 12, color: B.text, opacity: 0.7, margin: 0 }}>
        Copay ranges are estimates based on published plan data (April 2026). Your exact cost depends on your specific plan. Verify at your {insurerName} member portal or call the number on your card before booking. Self-pay $49 flat always available.
      </p>
    </div>
  );
}

// ─── Book CTA ─────────────────────────────────────────────────────────────────
export function BookCTA({ insurerName }) {
  return (
    <div style={{ background:`linear-gradient(135deg, ${B.navyDarker}, ${B.navy})`, borderRadius:B.r, padding:"40px 28px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, opacity:0.05, backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)", backgroundSize:"24px 24px" }} />
      <div style={{ position:"relative", zIndex:1 }}>
        <h2 style={{ fontFamily:B.fd, fontSize:"clamp(22px, 4vw, 28px)", fontWeight:700, color:B.white, margin:"0 0 8px" }}>
          Ready to Use Your {insurerName} Benefits?
        </h2>
        <p style={{ fontSize:16, color:"rgba(255,255,255,0.7)", margin:"0 0 4px", maxWidth:480 }}>
          Board-certified physician. Same-day video visits. Prescription sent directly to your pharmacy.
        </p>
        <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", margin:"0 0 24px" }}>
          Self-pay $49 flat fee always available — no insurance required.
        </p>
        <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
          style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 32px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:16, textDecoration:"none" }}>
          <Ico.Cal c={B.white} s={18} /> Book a Visit Now
        </a>
        <p style={{ fontSize:13, color:"rgba(255,255,255,0.45)", margin:"16px 0 0" }}>
          NPI: 1104323203 · Dr. Parth Bhavsar, MD · Board-Certified Family Medicine
        </p>
      </div>
    </div>
  );
}

// ─── HowItWorks — with HowTo schema JSON-LD ──────────────────────────────────
export function HowItWorksSteps({ insurerName }) {
  const steps = [
    { icon: <Ico.Cal c={B.teal} s={24} />, title: "Book Your Visit Online", desc: `Go to teledirectmd.com/book-online. Select "Insurance" as your payment method. Have your ${insurerName} member ID card ready — we verify your coverage before your visit.` },
    { icon: <Ico.Check c={B.teal} s={24} />, title: "Coverage Verified for You", desc: `We confirm your ${insurerName} benefits before you join the video call. If your specific plan isn't in-network, we'll let you know so you can choose self-pay ($49) instead.` },
    { icon: <Ico.Video c={B.teal} s={24} />, title: "Video Visit with Dr. Bhavsar, MD", desc: "Connect by secure video from your phone, tablet, or computer. Dr. Bhavsar evaluates your symptoms — same clinical standard as an in-person visit, not a PA or NP." },
    { icon: <Ico.Rx c={B.teal} s={24} />, title: "Prescription Sent Instantly", desc: "If a prescription is appropriate, it's sent electronically to your preferred pharmacy the moment your visit ends. Your pharmacy benefit applies to the medication." },
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Use Your ${insurerName} Insurance for a Telehealth Visit at TeleDirectMD`,
    "description": `Step-by-step guide to using your ${insurerName} insurance benefits for a telemedicine visit with Dr. Parth Bhavsar, MD at TeleDirectMD.`,
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "text": s.desc,
      "url": "https://teledirectmd.com/book-online",
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:16 }}>
        {steps.map((step, i) => (
          <div key={i} style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"24px 20px", boxShadow:B.shadow, position:"relative" }}>
            <div style={{ position:"absolute", top:16, right:16, fontSize:11, fontWeight:800, color:B.teal, opacity:0.2, fontFamily:B.fd }}>0{i+1}</div>
            <div style={{ width:48, height:48, borderRadius:14, background:"#EAF6F7", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14 }}>{step.icon}</div>
            <div style={{ fontSize:11, fontWeight:700, color:B.teal, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:6 }}>Step {i+1}</div>
            <h3 style={{ fontFamily:B.fd, fontSize:16, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>{step.title}</h3>
            <p style={{ fontSize:14, color:B.text, lineHeight:1.65, margin:0 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Patient Journey Section ──────────────────────────────────────────────────
export function PatientJourney({ insurerName, conditionName }) {
  const cond = conditionName || "your condition";
  const timeline = [
    { time: "Before your visit", icon: "📋", title: "What to have ready", desc: `Your ${insurerName} member ID card, a list of current medications, your pharmacy name and zip code, and 5–10 minutes of quiet time. Your phone's camera needs to be working — that's it.` },
    { time: "Visit start", icon: "🖥️", title: "What you'll see on screen", desc: `A secure, HIPAA-compliant video window opens. You'll see Dr. Bhavsar, MD — not a bot, not a PA. The average visit runs 8–12 minutes. He'll ask about your symptoms, review your history, and ask follow-up questions.` },
    { time: "During your visit", icon: "🩺", title: "What Dr. Bhavsar evaluates", desc: `For ${cond}: Dr. Bhavsar uses validated clinical criteria — not a generic symptom checklist — to assess your presentation, rule out red flags that require in-person care, and determine whether a prescription is appropriate.` },
    { time: "Visit end", icon: "💊", title: "Your prescription", desc: `If a prescription is clinically appropriate, it is sent electronically to your preferred pharmacy before the video call ends. Most pharmacies fill it within 1–2 hours. You'll also receive a visit summary.` },
    { time: "After your visit", icon: "🧾", title: "Your insurance claim", desc: `${insurerName} receives the claim automatically — billing codes 99213 or 99214 depending on visit complexity. Your ${insurerName} Explanation of Benefits (EOB) arrives within 2–4 weeks showing what was billed and your cost.` },
  ];
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: "0 0 20px" }}>
        What Actually Happens During Your Visit
      </h2>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${B.teal}, ${B.navy})`, opacity: 0.15 }} />
        {timeline.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 20, marginBottom: 28, position: "relative" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: B.white, border: `2px solid ${B.teal}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16, zIndex: 1 }}>
              {item.icon}
            </div>
            <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.rs, padding: "16px 20px", flex: 1, boxShadow: B.shadow }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{item.time}</div>
              <div style={{ fontFamily: B.fd, fontSize: 15, fontWeight: 700, color: B.navy, marginBottom: 6 }}>{item.title}</div>
              <p style={{ fontSize: 14, color: B.text, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────
export function TrustBar() {
  return (
    <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"24px 28px", boxShadow:B.shadow }}>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:16, textAlign:"center" }}>
        {[
          { label: "Board-Certified MD", sub: "Dr. Parth Bhavsar, MD — not a PA or NP" },
          { label: "LegitScript Certified", sub: "Verified online pharmacy practice" },
          { label: "HIPAA Compliant", sub: "Secure, encrypted video visits" },
          { label: "NPI Verified", sub: "NPI: 1104323203 · Family Medicine" },
        ].map((item, i) => (
          <div key={i}>
            <div style={{ fontSize:14, fontWeight:700, color:B.navy, marginBottom:2 }}>{item.label}</div>
            <div style={{ fontSize:12, color:B.text }}>{item.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
export function Breadcrumb({ items }) {
  return (
    <nav style={{ padding:"12px 24px 0", maxWidth:880, margin:"0 auto" }} aria-label="Breadcrumb">
      <ol style={{ display:"flex", flexWrap:"wrap", gap:"4px 8px", listStyle:"none", margin:0, padding:0, fontSize:13, color:B.text }}>
        {items.map((item, i) => (
          <li key={i} style={{ display:"flex", alignItems:"center", gap:8 }}>
            {i > 0 && <span style={{ opacity:0.4 }}>/</span>}
            {item.href ? <a href={item.href} style={{ color:B.teal, textDecoration:"none" }}>{item.label}</a> : <span style={{ color:B.text }}>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ─── Cross-Insurer Comparison Table (for multi-insurer states) ───────────────
export function CrossInsurerTable({ stateCode, stateName, currentInsurer }) {
  const stateData = STATE_INSURANCE_MAP[stateCode];
  if (!stateData || stateData.insurers.length < 2) return null;

  const otherInsurers = stateData.insurers.filter(id => id !== currentInsurer);
  if (otherInsurers.length === 0) return null;

  const allInsurers = stateData.insurers;

  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>
        All Insurance Plans Accepted in {stateName}
      </h2>
      <p style={{ fontSize: 14, color: B.text, margin: "0 0 16px", lineHeight: 1.6 }}>
        {stateName} is one of TeleDirectMD's strongest markets — {allInsurers.length} major insurers accepted here, covering the majority of {stateName} employer plan members.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${allInsurers.length}, 1fr)`, gap: 12 }}>
        {allInsurers.map((insurerId, i) => {
          const ins = INSURERS[insurerId];
          const isCurrent = insurerId === currentInsurer;
          return (
            <a key={i} href={`/insurance/${insurerId}/${stateName.toLowerCase().replace(/\s+/g,'-')}`}
              style={{ display: "block", background: isCurrent ? ins.colorLight : B.white, border: `2px solid ${isCurrent ? ins.color : B.border}`, borderRadius: B.rs, padding: "16px 18px", textDecoration: "none", boxShadow: isCurrent ? B.shadowLg : B.shadow }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: ins.color, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                {isCurrent ? "Currently viewing" : "Also in-network"}
              </div>
              <div style={{ fontFamily: B.fd, fontSize: 15, fontWeight: 700, color: B.navy, marginBottom: 4 }}>{ins.name}</div>
              <div style={{ fontSize: 12, color: B.text }}>{ins.states.length} states · {ins.planTypes[0]}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

// ─── Interactive Coverage Checker Widget ──────────────────────────────────────
export function CoverageChecker() {
  const [selectedInsurer, setSelectedInsurer] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [result, setResult] = useState(null);

  const insurerOptions = [
    { value: 'aetna', label: 'Aetna' },
    { value: 'blue-cross-blue-shield', label: 'Blue Cross Blue Shield' },
    { value: 'united-healthcare', label: 'UnitedHealthcare' },
  ];

  const stateOptions = INSURANCE_STATES.map(code => ({
    value: code,
    label: STATE_NAMES[code],
  })).sort((a, b) => a.label.localeCompare(b.label));

  const checkCoverage = () => {
    if (!selectedInsurer || !selectedState) return;
    const insurer = INSURERS[selectedInsurer];
    const isInNetwork = insurer?.states.includes(selectedState);
    const stateName = STATE_NAMES[selectedState];
    const stateSlug = stateName.toLowerCase().replace(/\s+/g, '-');
    setResult({ isInNetwork, insurerName: insurer?.name, stateName, stateSlug, insurerSlug: selectedInsurer, color: insurer?.color, colorLight: insurer?.colorLight });
  };

  return (
    <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: "32px 28px", marginBottom: 40, boxShadow: B.shadow }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <Ico.Shield c={B.teal} s={22} />
        <h2 style={{ fontFamily: B.fd, fontSize: 20, fontWeight: 700, color: B.navy, margin: 0 }}>
          Is My Insurance Accepted?
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 12, alignItems: "flex-end", marginBottom: 16 }}>
        <div>
          <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: B.text, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>Your Insurance</label>
          <select value={selectedInsurer} onChange={e => { setSelectedInsurer(e.target.value); setResult(null); }}
            style={{ width: "100%", padding: "10px 12px", borderRadius: B.rs, border: `1px solid ${B.border}`, fontFamily: B.fb, fontSize: 14, color: B.navy, background: B.bg, appearance: "none" }}>
            <option value="">Select insurer...</option>
            {insurerOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div>
          <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: B.text, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>Your State</label>
          <select value={selectedState} onChange={e => { setSelectedState(e.target.value); setResult(null); }}
            style={{ width: "100%", padding: "10px 12px", borderRadius: B.rs, border: `1px solid ${B.border}`, fontFamily: B.fb, fontSize: 14, color: B.navy, background: B.bg, appearance: "none" }}>
            <option value="">Select state...</option>
            {stateOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <button onClick={checkCoverage} disabled={!selectedInsurer || !selectedState}
          style={{ padding: "10px 20px", background: selectedInsurer && selectedState ? B.teal : B.border, color: B.white, border: "none", borderRadius: B.rs, fontFamily: B.fb, fontWeight: 700, fontSize: 14, cursor: selectedInsurer && selectedState ? "pointer" : "not-allowed", whiteSpace: "nowrap" }}>
          Check Coverage
        </button>
      </div>

      {result && (
        <div style={{ background: result.isInNetwork ? result.colorLight : "#FFF0F0", border: `1px solid ${result.isInNetwork ? result.color + "44" : "#FFB3B3"}`, borderRadius: B.rs, padding: "20px 20px" }}>
          {result.isInNetwork ? (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <Ico.Check c={result.color} s={20} />
                <span style={{ fontFamily: B.fd, fontSize: 17, fontWeight: 700, color: B.navy }}>
                  Yes — {result.insurerName} is in-network in {result.stateName}
                </span>
              </div>
              <p style={{ fontSize: 14, color: B.text, margin: "0 0 14px", lineHeight: 1.65 }}>
                TeleDirectMD accepts {result.insurerName} commercial plans in {result.stateName}. Your standard telehealth copay applies — typically $0–$40 for most commercial plans. Verify your specific plan benefits at your {result.insurerName} member portal.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                  <Ico.Cal c={B.white} s={16} /> Book with {result.insurerName}
                </a>
                <a href={`/insurance/${result.insurerSlug}/${result.stateSlug}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "transparent", color: result.color, border: `1px solid ${result.color}44`, borderRadius: B.rs, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                  View {result.stateName} details →
                </a>
              </div>
            </>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 18 }}>⚠️</span>
                <span style={{ fontFamily: B.fd, fontSize: 17, fontWeight: 700, color: B.navy }}>
                  {result.insurerName} is not in-network in {result.stateName} — yet
                </span>
              </div>
              <p style={{ fontSize: 14, color: B.text, margin: "0 0 14px", lineHeight: 1.65 }}>
                TeleDirectMD is not currently in-network with {result.insurerName} in {result.stateName}. You can still see Dr. Bhavsar as a self-pay patient for a flat $49 fee — same physician, same quality, no insurance needed.
              </p>
              <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                Book Self-Pay — $49 Flat Fee
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Insurer Trust Details (billing codes, provider directory, claims) ────────
export function InsurerTrustDetails({ insurer }) {
  if (!insurer) return null;
  return (
    <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: "28px", marginBottom: 40, boxShadow: B.shadow }}>
      <h2 style={{ fontFamily: B.fd, fontSize: 20, fontWeight: 700, color: B.navy, margin: "0 0 20px" }}>
        How TeleDirectMD Appears in the {insurer.name} System
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 20 }}>
        {[
          { label: "Provider NPI", val: "1104323203", note: "Verified in NPPES national registry" },
          { label: "Billing Codes", val: "CPT 99213 / 99214", note: "Standard outpatient E&M codes for telehealth" },
          { label: "Claim Submission", val: "Electronic / EDI", note: "Claims submitted directly — no paperwork for you" },
          { label: "Claims Questions", val: insurer.claimsPhone || "See member card", note: `Call ${insurer.name} member services` },
        ].map((item, i) => (
          <div key={i} style={{ background: B.bg, borderRadius: B.rs, padding: "14px 16px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{item.label}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: B.navy, marginBottom: 2 }}>{item.val}</div>
            <div style={{ fontSize: 12, color: B.text }}>{item.note}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {insurer.memberPortal && (
          <a href={insurer.memberPortal} target="_blank" rel="noopener"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: insurer.color, textDecoration: "none", border: `1px solid ${insurer.color}33`, borderRadius: B.rs, padding: "8px 14px" }}>
            {insurer.name} Member Portal →
          </a>
        )}
        {insurer.providerDirectory && (
          <a href={insurer.providerDirectory} target="_blank" rel="noopener"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: B.text, textDecoration: "none", border: `1px solid ${B.border}`, borderRadius: B.rs, padding: "8px 14px" }}>
            Find a Provider Directory →
          </a>
        )}
      </div>
    </div>
  );
}

// ─── Commissioner Links (state authority outbound links) ──────────────────────
export function CommissionerLink({ stateCode, stateName }) {
  const stateData = STATE_INSURANCE_MAP[stateCode];
  if (!stateData?.commissioner) return null;
  const { name, url } = stateData.commissioner;
  return (
    <div style={{ borderTop: `1px solid ${B.border}`, paddingTop: 20, marginBottom: 32 }}>
      <p style={{ fontSize: 13, color: B.text, margin: "0 0 6px", lineHeight: 1.6 }}>
        <strong>State Insurance Authority:</strong> If you have a complaint or question about insurance coverage in {stateName}, contact the{" "}
        <a href={url} target="_blank" rel="noopener" style={{ color: B.teal, textDecoration: "none" }}>{name}</a>.
      </p>
    </div>
  );
}

// ─── Insurance Disclaimer ─────────────────────────────────────────────────────
export function InsuranceDisclaimer() {
  return (
    <p style={{ fontSize:12, color:B.text, lineHeight:1.7, borderTop:`1px solid ${B.border}`, paddingTop:20, opacity:0.7 }}>
      Insurance coverage and plan acceptance are subject to change. Information reflects active contracts as of April 2026 and is verified monthly. Not all plans from a listed insurer may be accepted — Medicaid and Medicare fee-for-service plans are not accepted unless specifically noted. Copay estimates are based on published plan data and may not reflect your exact cost. Patients should verify benefits with their insurer before booking. TeleDirectMD does not guarantee insurance coverage for any specific service. Dr. Parth Bhavsar, MD · NPI: 1104323203 · Board-Certified Family Medicine · Contact: <a href="mailto:contact@teledirectmd.com" style={{ color:B.teal }}>contact@teledirectmd.com</a>.
    </p>
  );
}
