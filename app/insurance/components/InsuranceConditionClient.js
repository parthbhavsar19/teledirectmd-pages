'use client';
import { B, INSURANCE_CONDITIONS, INSURERS, STATE_NAMES } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer } from './InsuranceShared';
import { Ico } from './InsuranceIcons';

export default function InsuranceConditionClient({ insurerSlug, conditionSlug }) {
  const insurer = INSURERS[insurerSlug];
  const cond = INSURANCE_CONDITIONS[conditionSlug];
  if (!insurer || !cond) return null;

  const insurerStates = insurer.states.map(code => ({
    code,
    name: STATE_NAMES[code],
    slug: STATE_NAMES[code].toLowerCase().replace(/\s+/g, '-'),
  }));

  const shortName = insurerSlug === 'blue-cross-blue-shield' ? 'BCBS' : insurer.name;

  const FAQS = [
    { q:`Does ${insurer.name} cover ${cond.displayName} through telemedicine?`, a:`Yes. ${insurer.name} commercial plans cover telemedicine visits for ${cond.displayName}. ${insurer.name} is required under federal law to cover telehealth services comparably to in-person visits for most commercial plan members. Your actual cost — copay, coinsurance, or deductible — depends on your specific plan. Contact the member services number on your ${shortName} card to verify your telehealth benefits before booking.` },
    { q:`What does ${insurer.name} pay for a ${cond.name} telemedicine visit?`, a:`Most ${insurer.name} commercial plans have telehealth copays of $0–$40 for visits including ${cond.name} treatment. The exact amount depends on your plan. Many employer-sponsored ${shortName} plans have $0 telehealth copays. Log into your ${shortName} member portal or call member services to verify.` },
    { q:`How do I see a doctor for ${cond.name} using my ${insurer.name} insurance?`, a:`Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your ${shortName} member ID card ready. Dr. Bhavsar will evaluate your ${cond.name.toLowerCase()} symptoms during a secure video visit and send a prescription to your pharmacy if appropriate. We verify your coverage before your visit.` },
    { q:`What states does ${insurer.name} cover ${cond.name} telehealth?`, a:`TeleDirectMD is in-network with ${insurer.name} in the following states: ${insurer.states.map(c => STATE_NAMES[c]).join(', ')}. If you are located in one of these states during your visit, your ${cond.name.toLowerCase()} telehealth visit may be covered by your ${shortName} plan.` },
    { q:`Is the self-pay option available if my ${shortName} plan does not cover ${cond.name}?`, a:`Yes. If your ${shortName} plan does not cover this visit, or if you are located in a state where ${shortName} is not in-network with TeleDirectMD, you can book as a self-pay patient for a flat $49 fee. Same physician, same quality of care — no insurance needed.` },
    { q:`Will ${insurer.name} cover a prescription for ${cond.name} from a telehealth visit?`, a:`${insurer.name} covers the telehealth visit itself. Prescription coverage depends on your ${shortName} pharmacy benefit plan. Most ${shortName} commercial plans include pharmacy benefits that cover common medications prescribed for ${cond.name.toLowerCase()}. Check your pharmacy benefits with ${shortName} for details.` },
  ];

  const SCHEMA = {
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"Physician","name":"Parth Bhavsar, MD","identifier":{"@type":"PropertyValue","name":"NPI","value":"1104323203"},"medicalSpecialty":"Family Medicine","knowsAbout":{"@type":"MedicalCondition","name":cond.displayName,"code":{"@type":"MedicalCode","code":cond.icd10,"codingSystem":"ICD-10"}},"acceptsInsurance":[{"@type":"HealthInsurancePlan","name":`${insurer.name} Commercial Plans`}]},
      {"@type":"FAQPage","mainEntity":FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} }))},
      {"@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://teledirectmd.com"},
        {"@type":"ListItem","position":2,"name":"Insurance","item":"https://teledirectmd.com/insurance"},
        {"@type":"ListItem","position":3,"name":insurer.name,"item":`https://teledirectmd.com/insurance/${insurerSlug}`},
        {"@type":"ListItem","position":4,"name":cond.displayName,"item":`https://teledirectmd.com/insurance/${insurerSlug}/${conditionSlug}`},
      ]}
    ]
  };

  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Insurance",href:"/insurance"},{label:insurer.name,href:`/insurance/${insurerSlug}`},{label:cond.name}]} />

      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c={insurer.colorLight || "#90C2FF"} s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:insurer.colorLight || "#90C2FF", letterSpacing:"0.04em", textTransform:"uppercase" }}>{shortName} Covered — {cond.name}</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(28px, 5vw, 44px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>
            Does {insurer.name} Cover<br />{cond.displayName} Telemedicine?
          </h1>
          <p style={{ fontFamily:B.fb, fontSize:"clamp(15px, 2.5vw, 18px)", color:"rgba(255,255,255,0.75)", lineHeight:1.6, margin:"0 0 28px", maxWidth:580 }}>
            Yes — {insurer.name} commercial plans cover telehealth visits for {cond.displayName}. TeleDirectMD is in-network with {shortName} in {insurer.states.length} states. {cond.shortDesc}
          </p>
          <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
            style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
            <Ico.Cal c={B.white} s={18} /> Book {cond.name} Visit with {shortName}
          </a>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ margin:"32px 0" }}><TrustBar /></div>

        {/* WHAT'S COVERED CALLOUT */}
        <div style={{ background:insurer.colorLight, border:`1px solid ${insurer.color}33`, borderRadius:B.r, padding:"24px 28px", marginBottom:40, display:"flex", gap:16, alignItems:"flex-start" }}>
          <Ico.Check c={insurer.color} s={28} />
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:B.navy, marginBottom:6 }}>{insurer.name} covers {cond.displayName} telehealth visits</div>
            <p style={{ fontSize:14, color:B.text, margin:0, lineHeight:1.6 }}>{cond.shortDesc} TeleDirectMD is in-network with {shortName} in {insurer.states.length} states. Your standard {shortName} telehealth copay applies ($0–$40 for most commercial plans). Self-pay visits are also available for a flat $49.</p>
          </div>
        </div>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>How to Use {insurer.name} for {cond.name} Treatment</h2>
          <HowItWorksSteps insurerName={insurer.name} />
        </section>

        {/* STATES WHERE COVERED */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>States Where {shortName} Covers {cond.name} at TeleDirectMD</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 20px", lineHeight:1.6 }}>Click your state for state-specific coverage details:</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))", gap:10 }}>
            {insurerStates.map((st) => (
              <a key={st.code} href={`/insurance/${insurerSlug}/${st.slug}/${conditionSlug}`}
                style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:B.white, border:`1px solid ${insurer.color}22`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow }}>
                <div>
                  <div style={{ fontSize:14, fontWeight:700, color:B.navy }}>{st.name}</div>
                  <div style={{ fontSize:11, color:insurer.color, fontWeight:600 }}>{shortName} In-Network</div>
                </div>
                <Ico.Arrow c={B.text} s={13} />
              </a>
            ))}
          </div>
        </section>

        <section style={{ marginBottom:48 }}><BookCTA insurerName={insurer.name} /></section>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Frequently Asked Questions — {shortName} + {cond.name}</h2>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        {/* RELATED CONDITIONS */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:20, fontWeight:700, color:B.navy, margin:"0 0 12px" }}>Other Conditions {shortName} Covers at TeleDirectMD</h2>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {Object.values(INSURANCE_CONDITIONS).filter(c => c.slug !== conditionSlug).map((c,i) => (
              <a key={i} href={`/insurance/${insurerSlug}/${c.slug}`}
                style={{ fontSize:13, fontWeight:500, color:insurer.color, background:insurer.colorLight, padding:"6px 14px", borderRadius:100, textDecoration:"none", border:`1px solid ${insurer.color}22` }}>
                {c.name}
              </a>
            ))}
          </div>
        </section>

        <div style={{ marginBottom:24, display:"flex", flexWrap:"wrap", gap:10 }}>
          <a href={`/insurance/${insurerSlug}`} style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>← {insurer.name} Overview</a>
          <span style={{ color:B.border }}>|</span>
          <a href={`/${cond.conditionPageSlug}`} style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>{cond.displayName} Treatment Page</a>
          <span style={{ color:B.border }}>|</span>
          <a href="/insurance" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>All Insurance Options</a>
        </div>
        <div style={{ marginBottom:48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
