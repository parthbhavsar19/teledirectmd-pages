'use client';
import { B, INSURERS, INSURANCE_CONDITIONS } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock } from '../components/InsuranceShared';
import { Ico } from '../components/InsuranceIcons';

const insurer = INSURERS["united-healthcare"];

const UHC_STATES = [
  { code:"CO", name:"Colorado", url:"/insurance/united-healthcare/colorado" },
  { code:"GA", name:"Georgia", url:"/insurance/united-healthcare/georgia" },
  { code:"IL", name:"Illinois", url:"/insurance/united-healthcare/illinois" },
  { code:"MN", name:"Minnesota", url:"/insurance/united-healthcare/minnesota" },
  { code:"NC", name:"North Carolina", url:"/insurance/united-healthcare/north-carolina" },
  { code:"NJ", name:"New Jersey", url:"/insurance/united-healthcare/new-jersey" },
  { code:"OH", name:"Ohio", url:"/insurance/united-healthcare/ohio" },
  { code:"OK", name:"Oklahoma", url:"/insurance/united-healthcare/oklahoma" },
  { code:"PA", name:"Pennsylvania", url:"/insurance/united-healthcare/pennsylvania" },
  { code:"TN", name:"Tennessee", url:"/insurance/united-healthcare/tennessee" },
  { code:"WA", name:"Washington", url:"/insurance/united-healthcare/washington" },
];

const UHC_FAQS = [
  { q:"Is TeleDirectMD in-network with UnitedHealthcare?", a:"Yes. TeleDirectMD is in-network with UnitedHealthcare commercial plans in 11 states: Colorado, Georgia, Illinois, Minnesota, North Carolina, New Jersey, Ohio, Oklahoma, Pennsylvania, Tennessee, and Washington. If you have a UHC employer-sponsored or individual commercial plan in one of these states, your telehealth visit with Dr. Bhavsar may be covered." },
  { q:"Does UnitedHealthcare cover telemedicine visits?", a:"Yes. UnitedHealthcare covers telehealth visits for most commercial plan members. Under the UHC telehealth benefit, virtual visits with in-network providers are covered comparably to in-person visits. Your actual out-of-pocket cost — copay, coinsurance, or deductible — depends on your specific plan. Call the member services number on your UHC card or log into myuhc.com to verify your telehealth benefits." },
  { q:"What UnitedHealthcare plans does TeleDirectMD accept?", a:"TeleDirectMD accepts UnitedHealthcare commercial plans including UnitedHealthcare Choice, UnitedHealthcare Options PPO, and employer-sponsored UHC group plans in the 11 listed states. UHC Community Plan (Medicaid), AARP Medicare Advantage, and fee-for-service Medicare plans are not currently accepted." },
  { q:"What conditions does UHC cover for telehealth at TeleDirectMD?", a:"UHC covers telehealth visits for a wide range of conditions including UTI, sinus infection, strep throat, ear infection, pink eye, flu, asthma refills, hypertension refills, and many more. Coverage is subject to your plan's specific benefits. See our <a href='/what-we-treat' style='color:#006B73'>What We Treat</a> page for the complete list." },
  { q:"What is my UHC copay for a TeleDirectMD visit?", a:"UHC telehealth copays for commercial plans typically range from $0–$40 depending on your plan. Many UHC employer plans have $0 telehealth copays. Log into myuhc.com or call member services to verify your exact cost before booking." },
  { q:"Does UHC cover prescription refills through telemedicine?", a:"Yes. UHC covers telemedicine visits for chronic medication refills for stable conditions including asthma, hypertension, hypothyroidism, hyperlipidemia, and acid reflux. Prescriptions are sent to your preferred pharmacy immediately after your video visit." },
  { q:"How do I book a UnitedHealthcare telemedicine visit with TeleDirectMD?", a:"Book at teledirectmd.com/book-online and select 'Insurance' as your payment method. Have your UHC member ID card ready. We will verify your coverage before your visit. You can also book as a self-pay patient at any time for $49 flat." },
  { q:"Does TeleDirectMD accept UHC Medicaid (Community Plan)?", a:"No. TeleDirectMD does not accept UnitedHealthcare Community Plan (Medicaid) at this time. We accept UHC commercial plans only. If you have UHC Medicaid, you may book as a self-pay patient for $49." },
  { q:"Is AARP UnitedHealthcare Medicare Advantage accepted?", a:"Currently, TeleDirectMD accepts UHC commercial plans. AARP UHC Medicare Advantage acceptance varies — contact us at contact@teledirectmd.com to ask about your specific Medicare Advantage plan." },
  { q:"What if UHC is not available in my state?", a:"If UHC is not in-network in your state, you can still see Dr. Bhavsar as a self-pay patient for a flat $49 fee. You may also be eligible to submit an out-of-network claim to UHC for partial reimbursement — contact UHC to learn about your out-of-network benefits." },
];

const CONDITIONS_COVERED = [
  "UTI (Urinary Tract Infection)","Sinus Infection","Strep Throat","Ear Infection",
  "Pink Eye (Conjunctivitis)","Flu / Influenza","Yeast Infection","Cold Sores",
  "Asthma Inhaler Refills","Hypertension Medication Refills","Acid Reflux / GERD Refills",
  "Hypothyroidism Refills","Hyperlipidemia Refills","Seasonal Allergies","Acne",
  "Birth Control Refills","COVID-19 Treatment","Eczema","Contact Dermatitis","Nausea / Vomiting",
];

const SCHEMA = {
  "@context":"https://schema.org",
  "@graph":[
    { "@type":"MedicalOrganization","@id":"https://teledirectmd.com/#organization","name":"TeleDirectMD","url":"https://teledirectmd.com","description":"Physician-led telemedicine practice accepting UnitedHealthcare commercial plans in 11 states." },
    { "@type":"Physician","@id":"https://teledirectmd.com/#physician","name":"Parth Bhavsar, MD","identifier":{"@type":"PropertyValue","name":"NPI","value":"1104323203"},"medicalSpecialty":"Family Medicine","acceptsInsurance":[{"@type":"HealthInsurancePlan","name":"UnitedHealthcare Commercial Plans"}] },
    { "@type":"FAQPage","mainEntity":UHC_FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a.replace(/<[^>]+>/g,'')} })) },
    { "@type":"WebPage","@id":"https://teledirectmd.com/insurance/united-healthcare#webpage","url":"https://teledirectmd.com/insurance/united-healthcare","name":"Online Doctor That Accepts UnitedHealthcare | TeleDirectMD","speakable":{"@type":"SpeakableSpecification","cssSelector":["[data-speakable]"]} },
    { "@type":"HowTo","name":"How to book a UnitedHealthcare-covered telemedicine visit with TeleDirectMD","description":"Three steps to see Dr. Parth Bhavsar, MD by video using your UnitedHealthcare commercial plan.","totalTime":"PT5M","step":[
      {"@type":"HowToStep","position":1,"name":"Verify UHC coverage","text":"Confirm your UnitedHealthcare commercial plan is active in one of our 11 licensed states by checking your member ID card."},
      {"@type":"HowToStep","position":2,"name":"Book online","text":"Go to teledirectmd.com/book-online and choose 'Insurance' as your payment method. Enter your UHC member ID."},
      {"@type":"HowToStep","position":3,"name":"See the physician by video","text":"Join your video visit with Dr. Parth Bhavsar, MD. Pay only your UHC copay. Prescriptions are sent to your pharmacy immediately after the visit."}
    ]},
    { "@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":"https://teledirectmd.com"},
      {"@type":"ListItem","position":2,"name":"Insurance","item":"https://teledirectmd.com/insurance"},
      {"@type":"ListItem","position":3,"name":"UnitedHealthcare","item":"https://teledirectmd.com/insurance/united-healthcare"},
    ]}
  ]
};

export default function UHCHubClient() {
  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Insurance",href:"/insurance"},{label:"UnitedHealthcare"}]} />

      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c={insurer.color} s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:"#90FFB8", letterSpacing:"0.04em", textTransform:"uppercase" }}>UnitedHealthcare In-Network</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(30px, 5vw, 46px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>
            Online Doctor Visits Covered<br />by UnitedHealthcare
          </h1>
          <p data-speakable="true" style={{ fontFamily:B.fb, fontSize:"clamp(16px, 2.5vw, 19px)", color:"rgba(255,255,255,0.75)", lineHeight:1.6, margin:"0 0 28px", maxWidth:600 }}>
            TeleDirectMD is in-network with UnitedHealthcare commercial plans in 11 states. Same-day video visits with a board-certified physician. Standard UHC copay applies.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
              <Ico.Cal c={B.white} s={18} /> Book with UHC
            </a>
            <a href="/insurance" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 24px", background:"rgba(255,255,255,0.1)", color:B.white, borderRadius:B.rs, fontWeight:600, fontSize:15, textDecoration:"none", border:"1px solid rgba(255,255,255,0.2)" }}>
              Check Other Insurance
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ margin:"32px 0" }}><TrustBar /></div>

        {/* QUICK ANSWER — AI visibility */}
        <AnswerBlock
          question="Is TeleDirectMD in-network with UnitedHealthcare?"
          answer="Yes. TeleDirectMD accepts UnitedHealthcare commercial plans in 11 states. Book a same-day video visit with Dr. Parth Bhavsar, MD — your standard UHC copay applies. Bring your UHC member ID at booking and we will verify your benefits before the visit."
          color={B.teal}
        />

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>States Where We Accept UnitedHealthcare</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>TeleDirectMD is in-network with UHC commercial plans in 11 states. Click your state for detailed coverage information.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))", gap:10 }}>
            {UHC_STATES.map((st) => (
              <a key={st.code} href={st.url}
                style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:B.white, border:`1px solid ${insurer.color}22`, borderRadius:B.rs, padding:"14px 16px", textDecoration:"none", boxShadow:B.shadow }}>
                <div>
                  <div style={{ fontSize:15, fontWeight:700, color:B.navy }}>{st.name}</div>
                  <div style={{ fontSize:12, color:insurer.color, fontWeight:600, marginTop:2 }}>UHC In-Network</div>
                </div>
                <Ico.Arrow c={B.text} s={14} />
              </a>
            ))}
          </div>
        </section>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Conditions Covered by UHC Telemedicine</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>UnitedHealthcare commercial plans typically cover these conditions when treated via telehealth at TeleDirectMD:</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:10 }}>
            {CONDITIONS_COVERED.map((cond,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 16px", boxShadow:B.shadow }}>
                <Ico.Check c="#1A7A3A" s={16} />
                <span style={{ fontSize:14, fontWeight:500, color:B.navy }}>{cond}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>How to Use Your UHC Insurance</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>Three steps to see a physician using your UnitedHealthcare benefits.</p>
          <HowItWorksSteps insurerName="UnitedHealthcare" />
        </section>

        <section style={{ marginBottom:48 }}><BookCTA insurerName="UnitedHealthcare" /></section>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>UHC & TeleDirectMD: Frequently Asked Questions</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px" }}>Common questions about using your UnitedHealthcare benefits for telemedicine.</p>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {UHC_FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 16px" }}>Explore UHC Coverage by Condition</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))", gap:10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond,i) => (
              <a key={i} href={`/insurance/united-healthcare/${cond.slug}`}
                style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"14px 16px", textDecoration:"none", boxShadow:B.shadow }}>
                <div style={{ fontSize:14, fontWeight:600, color:B.navy, marginBottom:2 }}>UHC + {cond.name}</div>
                <div style={{ fontSize:12, color:B.text }}>Does UHC cover {cond.name.toLowerCase()}?</div>
              </a>
            ))}
          </div>
        </section>

        {/* FEATURED DEEP COVERAGE — internal linking to triple-matrix pages */}
        <section style={{ marginBottom:48 }} data-speakable="true">
          <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Popular UnitedHealthcare Coverage in Top Markets</h2>
          <p style={{ fontSize:14, color:B.text, margin:"0 0 16px", lineHeight:1.6 }}>Most-searched in-network UHC telemedicine combinations at TeleDirectMD:</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:10 }}>
            <a href="/insurance/united-healthcare/georgia/uti-treatment" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>UTI treatment covered by UHC in Georgia →</a>
            <a href="/insurance/united-healthcare/pennsylvania/sinus-infection" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Sinus infection covered by UHC in Pennsylvania →</a>
            <a href="/insurance/united-healthcare/ohio/strep-throat" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Strep throat covered by UHC in Ohio →</a>
            <a href="/insurance/united-healthcare/illinois/flu-treatment" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Flu treatment covered by UHC in Illinois →</a>
            <a href="/insurance/united-healthcare/north-carolina/ear-infection" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Ear infection covered by UHC in North Carolina →</a>
            <a href="/insurance/united-healthcare/tennessee/pink-eye" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Pink eye covered by UHC in Tennessee →</a>
          </div>
        </section>

        <div style={{ marginBottom:48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
