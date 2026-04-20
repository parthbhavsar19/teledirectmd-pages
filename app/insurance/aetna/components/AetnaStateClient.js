'use client';
import { B, STATE_NAMES, INSURANCE_CONDITIONS } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';

const STATE_CODE_MAP = { arizona:"AZ", colorado:"CO", florida:"FL", georgia:"GA", illinois:"IL", michigan:"MI", minnesota:"MN", ohio:"OH", pennsylvania:"PA", tennessee:"TN" };
const STATE_CONTEXT = {
  AZ:{cities:["Phoenix","Tucson","Scottsdale","Mesa","Chandler"],note:"Arizona's dry climate makes respiratory conditions and sinus infections common. Aetna is a major insurer in the Arizona market with strong commercial plan presence."},
  CO:{cities:["Denver","Aurora","Colorado Springs","Boulder","Fort Collins"],note:"Colorado's active lifestyle and high altitude make same-day telehealth especially convenient. Aetna and UHC are both in-network in Colorado."},
  FL:{cities:["Miami","Orlando","Tampa","Jacksonville","Fort Lauderdale"],note:"Florida is one of TeleDirectMD's largest markets. Aetna and Florida Blue are both accepted, giving most Florida residents insurance options."},
  GA:{cities:["Atlanta","Savannah","Augusta","Columbus","Macon"],note:"Georgia is TeleDirectMD's home state and core market. All three major insurers — Aetna, Anthem BCBS, and UHC — are in-network for Georgia residents."},
  IL:{cities:["Chicago","Aurora","Naperville","Joliet","Rockford"],note:"Illinois is a three-insurer market for TeleDirectMD. Aetna, BCBS of Illinois, and UHC are all in-network, covering the majority of Illinois employer plan members."},
  MI:{cities:["Detroit","Grand Rapids","Ann Arbor","Lansing","Flint"],note:"Michigan residents with Aetna commercial plans can access TeleDirectMD's physician-led telemedicine statewide."},
  MN:{cities:["Minneapolis","Saint Paul","Rochester","Duluth","Bloomington"],note:"Minnesota is home to UHC headquarters, but Aetna is a major commercial insurer in the Twin Cities and statewide. Both are in-network at TeleDirectMD."},
  OH:{cities:["Columbus","Cleveland","Cincinnati","Toledo","Akron"],note:"Ohio is a strong two-insurer market with both Aetna and UHC in-network. Ohio residents have broad insurance coverage options for TeleDirectMD visits."},
  PA:{cities:["Philadelphia","Pittsburgh","Allentown","Erie","Reading"],note:"Pennsylvania has the broadest insurance coverage at TeleDirectMD: Aetna, Highmark BCBS, and UHC are all in-network, covering most Pennsylvania employer plan members."},
  TN:{cities:["Nashville","Memphis","Knoxville","Chattanooga","Clarksville"],note:"Tennessee residents with Aetna or UHC commercial plans can access TeleDirectMD. Nashville's major employer base makes commercial insurance coverage especially common."},
};

export default function AetnaStateClient({ stateSlug }) {
  const stateCode = STATE_CODE_MAP[stateSlug];
  const stateName = STATE_NAMES[stateCode] || stateSlug;
  const ctx = STATE_CONTEXT[stateCode] || { cities:[], note:"" };
  const FAQS = [
    { q:`Is TeleDirectMD in-network with Aetna in ${stateName}?`, a:`Yes. TeleDirectMD is in-network with Aetna commercial plans in ${stateName}. If you have an Aetna employer-sponsored or individual commercial plan in ${stateName}, your telehealth visit with Dr. Parth Bhavsar, MD (NPI: 1104323203) may be covered subject to your plan's copay or deductible.` },
    { q:`Does Aetna cover telemedicine in ${stateName}?`, a:`Yes. Aetna covers telehealth visits for most commercial plan members in ${stateName}. Your actual cost depends on your plan's copay, coinsurance, and deductible. Call the member services number on your Aetna card or log into aetna.com to verify your telehealth benefits before booking.` },
    { q:`What is the Aetna telehealth copay in ${stateName}?`, a:`Aetna commercial plan telehealth copays in ${stateName} typically range from $0 to $40. Many employer-sponsored Aetna plans have $0 telehealth copays. Log into your Aetna member portal or call member services to verify your exact cost.` },
    { q:`What conditions does Aetna cover for telemedicine in ${stateName}?`, a:`Aetna commercial plans in ${stateName} cover telehealth visits for UTI, sinus infection, strep throat, ear infection, pink eye, flu, asthma inhaler refills, hypertension medication refills, acid reflux, yeast infections, and many more. Coverage depends on your specific plan benefits.` },
    { q:`How do I book a TeleDirectMD visit using Aetna in ${stateName}?`, a:`Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your Aetna member ID card ready. We verify your coverage before your visit. You can also book self-pay for $49 flat — no insurance needed.` },
    { q:`What if my specific Aetna plan in ${stateName} is not covered?`, a:`If your specific Aetna plan is not in-network with TeleDirectMD in ${stateName}, you can still see Dr. Bhavsar as a self-pay patient for a flat $49 fee. You may also be eligible to submit an out-of-network claim to Aetna.` },
  ];
  const SCHEMA = {
    "@context":"https://schema.org","@graph":[
      {"@type":"Physician","name":"Parth Bhavsar, MD","identifier":{"@type":"PropertyValue","name":"NPI","value":"1104323203"},"medicalSpecialty":"Family Medicine","areaServed":{"@type":"State","name":stateName},"acceptsInsurance":[{"@type":"HealthInsurancePlan","name":`Aetna Commercial Plans — ${stateName}`}]},
      {"@type":"FAQPage","mainEntity":FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} }))},
      {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://teledirectmd.com"},{"@type":"ListItem","position":2,"name":"Insurance","item":"https://teledirectmd.com/insurance"},{"@type":"ListItem","position":3,"name":"Aetna","item":"https://teledirectmd.com/insurance/aetna"},{"@type":"ListItem","position":4,"name":stateName,"item":`https://teledirectmd.com/insurance/aetna/${stateSlug}`}]}
    ]
  };
  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Insurance",href:"/insurance"},{label:"Aetna",href:"/insurance/aetna"},{label:stateName}]} />
      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c="#C084FC" s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:"#C084FC", letterSpacing:"0.04em", textTransform:"uppercase" }}>Aetna In-Network — {stateName}</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(28px, 5vw, 44px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>Online Doctor That Accepts<br />Aetna Insurance in {stateName}</h1>
          <p style={{ fontFamily:B.fb, fontSize:"clamp(15px, 2.5vw, 18px)", color:"rgba(255,255,255,0.75)", lineHeight:1.6, margin:"0 0 12px", maxWidth:580 }}>TeleDirectMD is in-network with Aetna commercial plans in {stateName}. See a board-certified physician by video — your standard Aetna copay applies.</p>
          {ctx.note && <p style={{ fontFamily:B.fb, fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.6, margin:"0 0 28px", maxWidth:580 }}>{ctx.note}</p>}
          <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}><Ico.Cal c={B.white} s={18} /> Book with Aetna in {stateName}</a>
        </div>
      </div>
      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ margin:"32px 0" }}><TrustBar /></div>
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Conditions Aetna Covers in {stateName}</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond,i) => (
              <a key={i} href={`/insurance/aetna/${stateSlug}/${cond.slug}`} style={{ display:"flex", alignItems:"center", gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow }}>
                <Ico.Check c="#7B2CBF" s={15} />
                <div><div style={{ fontSize:13, fontWeight:600, color:B.navy }}>{cond.displayName}</div><div style={{ fontSize:11, color:"#7B2CBF" }}>Aetna + {stateName}</div></div>
              </a>
            ))}
          </div>
        </section>
        {ctx.cities.length > 0 && <section style={{ marginBottom:40 }}><h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Serving Aetna Members Across {stateName}</h2><p style={{ fontSize:15, color:B.text, margin:0, lineHeight:1.6 }}>TeleDirectMD serves Aetna members throughout {stateName}, including {ctx.cities.join(", ")}, and all surrounding areas. Care delivered by secure video — your location within {stateName} does not affect your ability to book.</p></section>}
        <section style={{ marginBottom:48 }}><h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>How to Use Your Aetna Benefits in {stateName}</h2><HowItWorksSteps insurerName="Aetna" /></section>
        <section style={{ marginBottom:48 }}><BookCTA insurerName="Aetna" /></section>
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Aetna + {stateName}: Frequently Asked Questions</h2>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>{FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}</div>
        </section>
        <div style={{ marginBottom:24, display:"flex", flexWrap:"wrap", gap:10 }}>
          <a href="/insurance/aetna" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>← All Aetna States</a>
          <span style={{ color:B.border }}>|</span>
          <a href="/insurance" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>All Insurance Options</a>
        </div>
        <div style={{ marginBottom:48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
