'use client';
import { B, INSURANCE_CONDITIONS, INSURERS, STATE_NAMES } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer } from './InsuranceShared';
import { Ico } from './InsuranceIcons';

export default function InsuranceStateConditionClient({ insurerSlug, stateSlug, conditionSlug }) {
  const insurer = INSURERS[insurerSlug];
  const cond = INSURANCE_CONDITIONS[conditionSlug];
  if (!insurer || !cond) return null;

  // Resolve state code from slug
  const slugToCode = {};
  Object.entries(STATE_NAMES).forEach(([code, name]) => {
    slugToCode[name.toLowerCase().replace(/\s+/g,'-')] = code;
  });
  const stateCode = slugToCode[stateSlug];
  const stateName = STATE_NAMES[stateCode] || stateSlug;
  const shortName = insurerSlug === 'blue-cross-blue-shield' ? 'BCBS' : insurer.name;

  const FAQS = [
    { q:`Does ${insurer.name} cover ${cond.displayName} telemedicine in ${stateName}?`, a:`Yes. ${insurer.name} commercial plans cover telehealth visits for ${cond.displayName} in ${stateName}. TeleDirectMD is in-network with ${shortName} in ${stateName}. Your standard ${shortName} telehealth copay applies ($0–$40 for most commercial plans). Contact the member services number on your ${shortName} card to verify your specific plan's telehealth benefits before booking.` },
    { q:`What is my ${shortName} copay for ${cond.name} treatment in ${stateName}?`, a:`Most ${shortName} commercial plans in ${stateName} have telehealth copays of $0–$40. Your exact cost depends on your specific plan. Log into your ${shortName} member portal or call member services to verify your telehealth copay before your ${cond.name.toLowerCase()} visit.` },
    { q:`How do I see a doctor for ${cond.name} in ${stateName} using ${insurer.name}?`, a:`Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your ${shortName} member ID card ready. Dr. Bhavsar, MD will evaluate your ${cond.name.toLowerCase()} symptoms by secure video and send a prescription to your preferred ${stateName} pharmacy if appropriate. We verify your coverage before your visit.` },
    { q:`Can I get a ${cond.name} prescription through telemedicine with ${shortName} in ${stateName}?`, a:`Yes. If Dr. Bhavsar determines that a prescription is clinically appropriate for your ${cond.name.toLowerCase()} symptoms, it is sent to your preferred ${stateName} pharmacy immediately after your visit. ${insurer.name} covers the telehealth visit. Your prescription is covered by your ${shortName} pharmacy benefit (check your plan for drug coverage details).` },
    { q:`What if my ${shortName} plan does not cover ${cond.name} in ${stateName}?`, a:`If your specific ${shortName} plan does not cover this visit, you can book as a self-pay patient for a flat $49 fee — same physician, same quality of care, no insurance needed. You may also be eligible to submit an out-of-network claim to ${shortName} for partial reimbursement.` },
    { q:`How fast can I be seen for ${cond.name} in ${stateName}?`, a:`TeleDirectMD typically offers same-day video visits. Book online at teledirectmd.com/book-online and select a time that works for you. Most patients are seen within a few hours of booking during business hours. Your ${cond.name.toLowerCase()} symptoms are evaluated by Dr. Bhavsar, MD — not a nurse practitioner or PA.` },
  ];

  const SCHEMA = {
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"Physician","name":"Parth Bhavsar, MD","identifier":{"@type":"PropertyValue","name":"NPI","value":"1104323203"},"medicalSpecialty":"Family Medicine","areaServed":{"@type":"State","name":stateName},"knowsAbout":{"@type":"MedicalCondition","name":cond.displayName,"code":{"@type":"MedicalCode","code":cond.icd10,"codingSystem":"ICD-10"}},"acceptsInsurance":[{"@type":"HealthInsurancePlan","name":`${insurer.name} Commercial Plans — ${stateName}`}]},
      {"@type":"FAQPage","mainEntity":FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} }))},
      {"@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://teledirectmd.com"},
        {"@type":"ListItem","position":2,"name":"Insurance","item":"https://teledirectmd.com/insurance"},
        {"@type":"ListItem","position":3,"name":insurer.name,"item":`https://teledirectmd.com/insurance/${insurerSlug}`},
        {"@type":"ListItem","position":4,"name":stateName,"item":`https://teledirectmd.com/insurance/${insurerSlug}/${stateSlug}`},
        {"@type":"ListItem","position":5,"name":cond.displayName,"item":`https://teledirectmd.com/insurance/${insurerSlug}/${stateSlug}/${conditionSlug}`},
      ]}
    ]
  };

  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[
        {label:"Home",href:"/"},
        {label:"Insurance",href:"/insurance"},
        {label:insurer.name,href:`/insurance/${insurerSlug}`},
        {label:stateName,href:`/insurance/${insurerSlug}/${stateSlug}`},
        {label:cond.name},
      ]} />

      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c={insurer.colorLight || "#90C2FF"} s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:insurer.colorLight || "#90C2FF", letterSpacing:"0.04em", textTransform:"uppercase" }}>{shortName} — {cond.name} — {stateName}</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(26px, 4.5vw, 42px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>
            {cond.displayName} Treatment<br />Covered by {shortName} in {stateName}
          </h1>
          <p style={{ fontFamily:B.fb, fontSize:"clamp(15px, 2.5vw, 18px)", color:"rgba(255,255,255,0.75)", lineHeight:1.6, margin:"0 0 10px", maxWidth:580 }}>
            TeleDirectMD is in-network with {insurer.name} in {stateName}. {cond.shortDesc} Your standard {shortName} copay applies.
          </p>
          <p style={{ fontFamily:B.fb, fontSize:14, color:"rgba(255,255,255,0.5)", lineHeight:1.5, margin:"0 0 28px", maxWidth:560 }}>
            Evaluated by Dr. Parth Bhavsar, MD (NPI: 1104323203) — board-certified physician, not a nurse practitioner or PA.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
              <Ico.Cal c={B.white} s={18} /> Book {cond.name} Visit with {shortName}
            </a>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 20px", background:"rgba(255,255,255,0.1)", color:B.white, borderRadius:B.rs, fontWeight:600, fontSize:14, textDecoration:"none", border:"1px solid rgba(255,255,255,0.2)" }}>
              <Ico.Dollar c={B.white} s={16} /> Self-Pay $49 (No Insurance)
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ margin:"32px 0" }}><TrustBar /></div>

        {/* KEY ANSWER BOX */}
        <div style={{ background:insurer.colorLight, border:`1px solid ${insurer.color}33`, borderRadius:B.r, padding:"28px 28px", marginBottom:40 }}>
          <div style={{ display:"flex", gap:16, alignItems:"flex-start" }}>
            <Ico.Check c={insurer.color} s={28} />
            <div>
              <div style={{ fontSize:17, fontWeight:700, color:B.navy, marginBottom:8 }}>Yes — {insurer.name} covers {cond.displayName} telehealth in {stateName}</div>
              <p style={{ fontSize:14, color:B.text, margin:"0 0 12px", lineHeight:1.7 }}>
                {insurer.name} commercial plans cover telehealth visits for {cond.displayName} in {stateName}. TeleDirectMD (Dr. Parth Bhavsar, MD, NPI: 1104323203) is an in-network telehealth provider with {shortName} in {stateName}. Your standard telehealth copay applies — typically $0–$40 for commercial plans. If appropriate, your prescription is sent to your {stateName} pharmacy immediately after your visit.
              </p>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))", gap:10 }}>
                {[
                  {label:"Insurer",val:`${shortName} In-Network`},
                  {label:"State",val:stateName},
                  {label:"Condition",val:cond.displayName},
                  {label:"Copay",val:"$0–$40 most plans"},
                  {label:"Self-Pay Option",val:"$49 flat fee"},
                  {label:"Prescribing MD",val:"Dr. Parth Bhavsar, MD"},
                ].map((item,i) => (
                  <div key={i} style={{ background:"rgba(255,255,255,0.6)", borderRadius:B.rs, padding:"10px 14px" }}>
                    <div style={{ fontSize:11, fontWeight:700, color:insurer.color, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:2 }}>{item.label}</div>
                    <div style={{ fontSize:13, fontWeight:600, color:B.navy }}>{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>How to Get {cond.displayName} Treatment Using {shortName} in {stateName}</h2>
          <HowItWorksSteps insurerName={insurer.name} />
        </section>

        <section style={{ marginBottom:48 }}><BookCTA insurerName={insurer.name} /></section>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Frequently Asked Questions — {shortName} + {cond.name} in {stateName}</h2>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        <section style={{ marginBottom:40 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:18, fontWeight:700, color:B.navy, margin:"0 0 12px" }}>Other {shortName} Conditions in {stateName}</h2>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {Object.values(INSURANCE_CONDITIONS).filter(c=>c.slug!==conditionSlug).map((c,i) => (
              <a key={i} href={`/insurance/${insurerSlug}/${stateSlug}/${c.slug}`}
                style={{ fontSize:13, fontWeight:500, color:insurer.color, background:insurer.colorLight, padding:"5px 12px", borderRadius:100, textDecoration:"none", border:`1px solid ${insurer.color}22` }}>
                {c.name}
              </a>
            ))}
          </div>
        </section>

        <div style={{ marginBottom:24, display:"flex", flexWrap:"wrap", gap:10 }}>
          <a href={`/insurance/${insurerSlug}/${stateSlug}`} style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>← {shortName} in {stateName}</a>
          <span style={{ color:B.border }}>|</span>
          <a href={`/insurance/${insurerSlug}/${conditionSlug}`} style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>{shortName} + {cond.name} (All States)</a>
          <span style={{ color:B.border }}>|</span>
          <a href={`/${cond.conditionPageSlug}`} style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>{cond.displayName} Treatment</a>
        </div>
        <div style={{ marginBottom:48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
