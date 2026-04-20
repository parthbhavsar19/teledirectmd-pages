'use client';
import { useState } from "react";
import { Ico } from "./InsuranceIcons";
import { B } from "../../../data/insurance/insuranceConfig";

export function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${B.border}` }}>
      <button onClick={() => setOpen(!open)} style={{ width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px 0", background:"none", border:"none", cursor:"pointer", fontFamily:B.fd, fontSize:"17px", fontWeight:600, color:B.navy, textAlign:"left", lineHeight:1.4 }}>
        <span style={{ paddingRight:16 }}>{question}</span>
        <span style={{ transform:open?"rotate(180deg)":"rotate(0deg)", transition:"transform 0.3s ease", flexShrink:0 }}><Ico.Chev c={B.text} /></span>
      </button>
      <div style={{ maxHeight:open?600:0, overflow:"hidden", transition:"max-height 0.35s ease" }}>
        <p style={{ margin:0, paddingBottom:20, fontFamily:B.fb, fontSize:"15px", color:B.text, lineHeight:1.7 }} dangerouslySetInnerHTML={{__html: answer}} />
      </div>
    </div>
  );
}

export function BookCTA({ insurerName }) {
  return (
    <div style={{ background:`linear-gradient(135deg, ${B.navyDarker}, ${B.navy})`, borderRadius:B.r, padding:"40px 28px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, opacity:0.05, backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)", backgroundSize:"24px 24px" }} />
      <div style={{ position:"relative", zIndex:1 }}>
        <h2 style={{ fontFamily:B.fd, fontSize:"clamp(22px, 4vw, 28px)", fontWeight:700, color:B.white, margin:"0 0 8px" }}>
          Ready to Use Your {insurerName} Benefits?
        </h2>
        <p style={{ fontSize:16, color:"rgba(255,255,255,0.7)", margin:"0 0 8px", maxWidth:460 }}>
          Board-certified physician. Same-day video visits. Prescription sent to your pharmacy.
        </p>
        <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", margin:"0 0 24px" }}>
          Self-pay $49 flat fee always available if you prefer to skip insurance.
        </p>
        <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
          style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 32px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:16, textDecoration:"none" }}>
          <Ico.Cal c={B.white} s={18} /> Book a Visit
        </a>
        <p style={{ fontSize:13, color:"rgba(255,255,255,0.45)", margin:"16px 0 0" }}>
          NPI: 1104323203 | Dr. Parth Bhavsar, MD | Board-Certified Physician
        </p>
      </div>
    </div>
  );
}

export function HowItWorksSteps({ insurerName }) {
  const steps = [
    { icon: <Ico.Cal c={B.teal} s={24} />, title: "Book Your Visit", desc: `Select "Insurance" as your payment method when booking. Have your ${insurerName} member ID ready.` },
    { icon: <Ico.Video c={B.teal} s={24} />, title: "Video Visit with Dr. Bhavsar", desc: "Connect via secure video from your phone or computer. Same-day appointments typically available." },
    { icon: <Ico.Rx c={B.teal} s={24} />, title: "Prescription Sent Instantly", desc: "If appropriate, your prescription is sent to your preferred pharmacy immediately after the visit." },
  ];
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap:16 }}>
      {steps.map((step, i) => (
        <div key={i} style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"24px 20px", boxShadow:B.shadow }}>
          <div style={{ width:48, height:48, borderRadius:14, background:"#EAF6F7", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14 }}>{step.icon}</div>
          <div style={{ fontSize:12, fontWeight:700, color:B.teal, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:6 }}>Step {i+1}</div>
          <h3 style={{ fontFamily:B.fd, fontSize:17, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>{step.title}</h3>
          <p style={{ fontSize:14, color:B.text, lineHeight:1.6, margin:0 }}>{step.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function TrustBar() {
  return (
    <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"24px 28px", boxShadow:B.shadow }}>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:16, textAlign:"center" }}>
        {[
          { label: "Board-Certified MD", sub: "Dr. Parth Bhavsar, MD" },
          { label: "LegitScript Certified", sub: "Verified online pharmacy practice" },
          { label: "HIPAA Compliant", sub: "Secure, encrypted video visits" },
          { label: "NPI Verified", sub: "NPI: 1104323203" },
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

export function InsuranceDisclaimer() {
  return (
    <p style={{ fontSize:12, color:B.text, lineHeight:1.7, borderTop:`1px solid ${B.border}`, paddingTop:20, opacity:0.7 }}>
      Insurance coverage and plan acceptance are subject to change. Information reflects active contracts as of April 2026. Not all plans from a listed insurer may be accepted. Medicaid and Medicare fee-for-service plans are not accepted unless specifically noted. Patients should verify benefits with their insurer before booking. TeleDirectMD does not guarantee insurance coverage for any specific service. NPI: 1104323203. Contact: <a href="mailto:contact@teledirectmd.com" style={{ color:B.teal }}>contact@teledirectmd.com</a>.
    </p>
  );
}
