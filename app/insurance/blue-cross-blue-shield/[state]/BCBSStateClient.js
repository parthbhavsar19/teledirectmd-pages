'use client';
import { B, STATE_NAMES, INSURANCE_CONDITIONS } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';

const STATE_CODE_MAP = { florida:"FL", georgia:"GA", illinois:"IL", pennsylvania:"PA", texas:"TX" };
const AFFILIATES = { FL:"Florida Blue", GA:"Anthem Blue Cross Blue Shield", IL:"Blue Cross Blue Shield of Illinois", PA:"Highmark Blue Cross Blue Shield", TX:"Blue Cross Blue Shield of Texas" };
const STATE_CONTEXT = {
  FL:{cities:["Miami","Orlando","Tampa","Jacksonville","Fort Lauderdale"],note:"Florida Blue is the dominant BCBS affiliate in Florida. TeleDirectMD is in-network with Florida Blue individual and group commercial plans."},
  GA:{cities:["Atlanta","Savannah","Augusta","Columbus","Macon"],note:"Anthem Blue Cross Blue Shield is the BCBS affiliate for Georgia. TeleDirectMD accepts Anthem BCBS alongside Aetna and UHC — giving Georgia residents the broadest insurance options."},
  IL:{cities:["Chicago","Aurora","Naperville","Joliet","Rockford"],note:"BCBS of Illinois is the state's largest insurer. Combined with Aetna and UHC in-network status, Illinois residents have three major insurance options at TeleDirectMD."},
  PA:{cities:["Philadelphia","Pittsburgh","Allentown","Erie","Reading"],note:"Highmark Blue Cross Blue Shield is western Pennsylvania's largest insurer. Pennsylvania is TeleDirectMD's most insurance-covered state with Highmark BCBS, Aetna, and UHC all in-network."},
  TX:{cities:["Houston","Dallas","Austin","San Antonio","Fort Worth"],note:"Blue Cross Blue Shield of Texas offers several plan types including Blue Advantage HMO, Blue Choice PPO, Health Select, Blue Essentials, and select Medicare Advantage plans — all accepted at TeleDirectMD."},
};

export default function BCBSStateClient({ stateSlug }) {
  const stateCode = STATE_CODE_MAP[stateSlug];
  const stateName = STATE_NAMES[stateCode] || stateSlug;
  const affiliate = AFFILIATES[stateCode] || "Blue Cross Blue Shield";
  const ctx = STATE_CONTEXT[stateCode] || { cities:[], note:"" };

  const FAQS = [
    { q:`Is TeleDirectMD in-network with ${affiliate}?`, a:`Yes. TeleDirectMD is in-network with ${affiliate} commercial plans in ${stateName}. If you have a ${affiliate} employer-sponsored or individual commercial plan, your telehealth visit with Dr. Parth Bhavsar, MD (NPI: 1104323203) may be covered subject to your plan's copay or deductible.` },
    { q:`Does ${affiliate} cover telemedicine visits?`, a:`Yes. ${affiliate} covers telehealth visits for most commercial plan members in ${stateName}. Your actual out-of-pocket cost depends on your specific plan's copay, coinsurance, and deductible. Call member services or log into your member portal to verify your telehealth benefits before booking.` },
    { q:`What is my copay for a telemedicine visit with ${affiliate}?`, a:`Most ${affiliate} commercial plans have telehealth copays of $0–$40. Your exact cost depends on your specific plan. Log into your ${affiliate} member portal or call member services to verify before booking.` },
    { q:`What conditions does ${affiliate} cover for telemedicine at TeleDirectMD?`, a:`${affiliate} covers telehealth visits for a wide range of conditions including UTI, sinus infection, strep throat, ear infection, pink eye, flu, asthma refills, hypertension refills, and many more. Coverage is subject to your specific plan benefits.` },
    { q:`How do I book using my ${affiliate} insurance?`, a:`Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your ${affiliate} member ID card ready. We verify coverage before your visit. You can also book self-pay at any time for a flat $49 — no insurance needed.` },
  ];

  const SCHEMA = {
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"Physician","name":"Parth Bhavsar, MD","identifier":{"@type":"PropertyValue","name":"NPI","value":"1104323203"},"medicalSpecialty":"Family Medicine","areaServed":{"@type":"State","name":stateName},"acceptsInsurance":[{"@type":"HealthInsurancePlan","name":`${affiliate} Commercial Plans`}]},
      {"@type":"FAQPage","mainEntity":FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} }))},
      {"@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://teledirectmd.com"},
        {"@type":"ListItem","position":2,"name":"Insurance","item":"https://teledirectmd.com/insurance"},
        {"@type":"ListItem","position":3,"name":"Blue Cross Blue Shield","item":"https://teledirectmd.com/insurance/blue-cross-blue-shield"},
        {"@type":"ListItem","position":4,"name":stateName,"item":`https://teledirectmd.com/insurance/blue-cross-blue-shield/${stateSlug}`},
      ]}
    ]
  };

  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Insurance",href:"/insurance"},{label:"Blue Cross Blue Shield",href:"/insurance/blue-cross-blue-shield"},{label:stateName}]} />

      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c="#90C2FF" s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:"#90C2FF", letterSpacing:"0.04em", textTransform:"uppercase" }}>{affiliate} In-Network</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(28px, 5vw, 44px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>
            Online Doctor That Accepts<br />{affiliate} in {stateName}
          </h1>
          <p style={{ fontFamily:B.fb, fontSize:"clamp(15px, 2.5vw, 18px)", color:"rgba(255,255,255,0.75)", lineHeight:1.6, margin:"0 0 12px", maxWidth:580 }}>
            TeleDirectMD is in-network with {affiliate} in {stateName}. Board-certified physician. Same-day video visits — your standard BCBS copay applies.
          </p>
          {ctx.note && <p style={{ fontFamily:B.fb, fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.6, margin:"0 0 28px", maxWidth:580 }}>{ctx.note}</p>}
          <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
            style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
            <Ico.Cal c={B.white} s={18} /> Book with {affiliate.length > 30 ? "BCBS" : affiliate}
          </a>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ margin:"32px 0" }}><TrustBar /></div>
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Conditions Covered by {affiliate} Telemedicine</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 20px", lineHeight:1.6 }}>Click any condition for {affiliate} + {stateName} specific coverage details:</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond,i) => (
              <a key={i} href={`/insurance/blue-cross-blue-shield/${stateSlug}/${cond.slug}`}
                style={{ display:"flex", alignItems:"center", gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow }}>
                <Ico.Check c="#1A5FB4" s={15} />
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:B.navy }}>{cond.displayName}</div>
                  <div style={{ fontSize:11, color:"#1A5FB4" }}>BCBS + {stateName}</div>
                </div>
              </a>
            ))}
          </div>
        </section>
        {ctx.cities.length > 0 && <section style={{ marginBottom:40 }}><h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Serving {affiliate} Members Across {stateName}</h2><p style={{ fontSize:15, color:B.text, margin:0, lineHeight:1.6 }}>TeleDirectMD serves {affiliate} members throughout {stateName}, including {ctx.cities.join(", ")}, and all surrounding areas. Since care is delivered by secure video, your location within {stateName} does not affect your ability to book.</p></section>}
        <section style={{ marginBottom:48 }}><h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>How to Use Your {affiliate} Benefits</h2><HowItWorksSteps insurerName={affiliate} /></section>
        <section style={{ marginBottom:48 }}><BookCTA insurerName={affiliate} /></section>
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>{affiliate} + {stateName}: Frequently Asked Questions</h2>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>
        <div style={{ marginBottom:24, display:"flex", flexWrap:"wrap", gap:10 }}>
          <a href="/insurance/blue-cross-blue-shield" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>← All BCBS States</a>
          <span style={{ color:B.border }}>|</span>
          <a href="/insurance" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>All Insurance Options</a>
        </div>
        <div style={{ marginBottom:48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
