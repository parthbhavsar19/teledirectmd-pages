'use client';
import { B, STATE_NAMES, INSURANCE_CONDITIONS } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';

const STATE_CODE_MAP = { colorado:"CO", georgia:"GA", illinois:"IL", minnesota:"MN", "north-carolina":"NC", "new-jersey":"NJ", ohio:"OH", oklahoma:"OK", pennsylvania:"PA", tennessee:"TN", washington:"WA" };
const STATE_CONTEXT = {
  CO:{cities:["Denver","Aurora","Colorado Springs","Boulder","Fort Collins"],note:"UHC is a major commercial insurer in Colorado alongside Aetna. Colorado residents have two in-network insurance options at TeleDirectMD."},
  GA:{cities:["Atlanta","Savannah","Augusta","Columbus","Macon"],note:"Georgia is TeleDirectMD's core market with three major insurers in-network: Aetna, Anthem BCBS, and UHC. Georgia UHC members have same-day access to physician-led care."},
  IL:{cities:["Chicago","Aurora","Naperville","Joliet","Rockford"],note:"Illinois is a three-insurer market. UHC is widely available through Chicago-area employer plans alongside Aetna and BCBS of Illinois."},
  MN:{cities:["Minneapolis","Saint Paul","Rochester","Duluth","Bloomington"],note:"UnitedHealthcare is headquartered in Minnetonka, Minnesota. MN UHC members have exceptional in-network telehealth access at TeleDirectMD alongside Aetna."},
  NC:{cities:["Charlotte","Raleigh","Greensboro","Durham","Winston-Salem"],note:"North Carolina residents with UHC commercial plans can access TeleDirectMD's physician-led telemedicine for urgent care and chronic medication management."},
  NJ:{cities:["Newark","Jersey City","Paterson","Elizabeth","Edison"],note:"New Jersey UHC commercial plan members have access to TeleDirectMD's telehealth services. New Jersey's dense population and employer base make UHC especially prevalent."},
  OH:{cities:["Columbus","Cleveland","Cincinnati","Toledo","Akron"],note:"Ohio is a two-insurer market with both Aetna and UHC in-network. Ohio residents have broad insurance coverage options for same-day video visits."},
  OK:{cities:["Oklahoma City","Tulsa","Norman","Broken Arrow","Edmond"],note:"Oklahoma UHC commercial plan members can access TeleDirectMD's physician-led telemedicine for urgent care, prescription refills, and chronic condition management."},
  PA:{cities:["Philadelphia","Pittsburgh","Allentown","Erie","Reading"],note:"Pennsylvania has the broadest insurance coverage at TeleDirectMD — Aetna, Highmark BCBS, and UHC are all in-network, covering most Pennsylvania employer plan members."},
  TN:{cities:["Nashville","Memphis","Knoxville","Chattanooga","Clarksville"],note:"Tennessee UHC and Aetna members can both access TeleDirectMD. Nashville's major employer base makes commercial insurance coverage especially prevalent."},
  WA:{cities:["Seattle","Spokane","Tacoma","Vancouver","Bellevue"],note:"Washington state UHC commercial plan members can access TeleDirectMD's telehealth services. Seattle's large employer base means most Washington UHC members have employer-sponsored commercial plans."},
};

export default function UHCStateClient({ stateSlug }) {
  const stateCode = STATE_CODE_MAP[stateSlug];
  const stateName = STATE_NAMES[stateCode] || stateSlug;
  const ctx = STATE_CONTEXT[stateCode] || { cities:[], note:"" };

  const FAQS = [
    { q:`Is TeleDirectMD in-network with UnitedHealthcare in ${stateName}?`, a:`Yes. TeleDirectMD is in-network with UnitedHealthcare commercial plans in ${stateName}. If you have a UHC employer-sponsored or individual commercial plan in ${stateName}, your telehealth visit with Dr. Parth Bhavsar, MD (NPI: 1104323203) may be covered subject to your plan's copay or deductible.` },
    { q:`Does UnitedHealthcare cover telemedicine in ${stateName}?`, a:`Yes. UHC covers telehealth visits for most commercial plan members in ${stateName}. Your actual cost depends on your specific plan's copay, coinsurance, and deductible. Log into myuhc.com or call the member services number on your UHC card to verify your telehealth benefits before booking.` },
    { q:`What is my UHC copay for a TeleDirectMD visit in ${stateName}?`, a:`UHC commercial plan telehealth copays in ${stateName} typically range from $0 to $40. Many employer-sponsored UHC plans have $0 telehealth copays. Log into myuhc.com or call member services to verify your exact cost before booking.` },
    { q:`What conditions does UHC cover for telemedicine in ${stateName}?`, a:`UHC commercial plans in ${stateName} cover telehealth visits for a wide range of conditions including UTI, sinus infection, strep throat, ear infection, pink eye, flu, asthma inhaler refills, hypertension medication refills, acid reflux, and many more. Coverage is subject to your specific plan benefits.` },
    { q:`How do I book a TeleDirectMD visit using UHC in ${stateName}?`, a:`Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your UHC member ID card ready. We verify your coverage before your visit. You can also book as a self-pay patient for a flat $49 fee — no insurance needed.` },
  ];

  const SCHEMA = {
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"Physician","name":"Parth Bhavsar, MD","identifier":{"@type":"PropertyValue","name":"NPI","value":"1104323203"},"medicalSpecialty":"Family Medicine","areaServed":{"@type":"State","name":stateName},"acceptsInsurance":[{"@type":"HealthInsurancePlan","name":`UnitedHealthcare Commercial Plans — ${stateName}`}]},
      {"@type":"FAQPage","mainEntity":FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} }))},
      {"@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://teledirectmd.com"},
        {"@type":"ListItem","position":2,"name":"Insurance","item":"https://teledirectmd.com/insurance"},
        {"@type":"ListItem","position":3,"name":"UnitedHealthcare","item":"https://teledirectmd.com/insurance/united-healthcare"},
        {"@type":"ListItem","position":4,"name":stateName,"item":`https://teledirectmd.com/insurance/united-healthcare/${stateSlug}`},
      ]}
    ]
  };

  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Insurance",href:"/insurance"},{label:"UnitedHealthcare",href:"/insurance/united-healthcare"},{label:stateName}]} />

      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c="#90FFB8" s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:"#90FFB8", letterSpacing:"0.04em", textTransform:"uppercase" }}>UnitedHealthcare In-Network — {stateName}</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(28px, 5vw, 44px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>
            Online Doctor That Accepts<br />UnitedHealthcare in {stateName}
          </h1>
          <p style={{ fontFamily:B.fb, fontSize:"clamp(15px, 2.5vw, 18px)", color:"rgba(255,255,255,0.75)", lineHeight:1.6, margin:"0 0 12px", maxWidth:580 }}>
            TeleDirectMD is in-network with UHC commercial plans in {stateName}. Board-certified physician. Same-day video visits — your standard UHC copay applies.
          </p>
          {ctx.note && <p style={{ fontFamily:B.fb, fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.6, margin:"0 0 28px", maxWidth:580 }}>{ctx.note}</p>}
          <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
            style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
            <Ico.Cal c={B.white} s={18} /> Book with UHC in {stateName}
          </a>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ margin:"32px 0" }}><TrustBar /></div>
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Conditions UHC Covers for Telemedicine in {stateName}</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond,i) => (
              <a key={i} href={`/insurance/united-healthcare/${stateSlug}/${cond.slug}`}
                style={{ display:"flex", alignItems:"center", gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow }}>
                <Ico.Check c="#1A7A3A" s={15} />
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:B.navy }}>{cond.displayName}</div>
                  <div style={{ fontSize:11, color:"#1A7A3A" }}>UHC + {stateName}</div>
                </div>
              </a>
            ))}
          </div>
        </section>
        {ctx.cities.length > 0 && <section style={{ marginBottom:40 }}><h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Serving UHC Members Across {stateName}</h2><p style={{ fontSize:15, color:B.text, margin:0, lineHeight:1.6 }}>TeleDirectMD serves UnitedHealthcare members throughout {stateName}, including {ctx.cities.join(", ")}, and all surrounding areas. Since care is delivered by secure video, your location within {stateName} does not affect your ability to book.</p></section>}
        <section style={{ marginBottom:48 }}><h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>How to Use Your UHC Benefits in {stateName}</h2><HowItWorksSteps insurerName="UnitedHealthcare" /></section>
        <section style={{ marginBottom:48 }}><BookCTA insurerName="UnitedHealthcare" /></section>
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>UHC + {stateName}: Frequently Asked Questions</h2>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>
        <div style={{ marginBottom:24, display:"flex", flexWrap:"wrap", gap:10 }}>
          <a href="/insurance/united-healthcare" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>← All UHC States</a>
          <span style={{ color:B.border }}>|</span>
          <a href="/insurance" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>All Insurance Options</a>
        </div>
        <div style={{ marginBottom:48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
