'use client';
import { B, INSURERS, INSURANCE_CONDITIONS } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock } from '../components/InsuranceShared';
import { Ico } from '../components/InsuranceIcons';

const insurer = INSURERS["blue-cross-blue-shield"];

const BCBS_STATE_AFFILIATES = [
  { code:"FL", name:"Florida", affiliate:"Florida Blue", url:"/insurance/blue-cross-blue-shield/florida" },
  { code:"GA", name:"Georgia", affiliate:"Anthem Blue Cross Blue Shield", url:"/insurance/blue-cross-blue-shield/georgia" },
  { code:"IL", name:"Illinois", affiliate:"Blue Cross Blue Shield of Illinois", url:"/insurance/blue-cross-blue-shield/illinois" },
  { code:"PA", name:"Pennsylvania", affiliate:"Highmark Blue Cross Blue Shield", url:"/insurance/blue-cross-blue-shield/pennsylvania" },
  { code:"TX", name:"Texas", affiliate:"Blue Cross Blue Shield of Texas", url:"/insurance/blue-cross-blue-shield/texas" },
];

const BCBS_FAQS = [
  { q: "Is TeleDirectMD in-network with Blue Cross Blue Shield?", a: "Yes. TeleDirectMD is in-network with select Blue Cross Blue Shield affiliate plans in five states: Florida (Florida Blue), Georgia (Anthem BCBS), Illinois (BCBS of Illinois), Pennsylvania (Highmark BCBS), and Texas (BCBS of Texas). Because BCBS is a federation of independent plans, in-network status varies by state affiliate." },
  { q: "Does Blue Cross Blue Shield cover telemedicine visits?", a: "Yes. Most BCBS commercial plans cover telehealth visits. Federal law requires most commercial insurers to cover telehealth services. Your actual cost depends on your plan's copay, coinsurance, and deductible. Call the member services number on the back of your BCBS card or log into your member portal to verify your telehealth benefits." },
  { q: "Which Blue Cross Blue Shield plans are accepted?", a: "TeleDirectMD accepts commercial plans from Florida Blue, Anthem Blue Cross Blue Shield (Georgia), Blue Cross Blue Shield of Illinois, Highmark Blue Cross Blue Shield (Pennsylvania), and Blue Cross Blue Shield of Texas. Not all plans within each affiliate may be in-network. Federal Employee Program (FEP) plans and most Medicaid managed care plans are not accepted." },
  { q: "What conditions does BCBS cover for telehealth at TeleDirectMD?", a: "BCBS covers telehealth visits for a wide range of conditions including UTI, sinus infection, strep throat, ear infection, pink eye, flu, asthma refills, hypertension refills, and many others. Coverage is subject to your plan's specific benefits. See our <a href='/what-we-treat' style='color:#006B73'>What We Treat</a> page for the full list." },
  { q: "What is my copay for a BCBS telemedicine visit?", a: "Most BCBS commercial plans have telehealth copays of $0–$40. Your exact cost depends on your specific plan. Log into your BCBS member portal or call member services to verify your telehealth copay before your visit." },
  { q: "Does BCBS cover prescription refills through telemedicine?", a: "Yes. BCBS covers telemedicine visits for chronic medication refills including asthma, hypertension, hypothyroidism, hyperlipidemia, and acid reflux. Prescriptions are sent to your pharmacy immediately after your visit with Dr. Bhavsar." },
  { q: "How do I use my BCBS insurance with TeleDirectMD?", a: "Book at teledirectmd.com/book-online, select 'Insurance' as your payment method, and have your BCBS member ID card ready. We verify your coverage before your visit. You can also choose the flat $49 self-pay option at any time." },
  { q: "Does TeleDirectMD accept Anthem Blue Cross Blue Shield?", a: "Yes. In Georgia, TeleDirectMD is in-network with Anthem Blue Cross Blue Shield commercial plans. If your Anthem BCBS card is issued in Georgia, your visit may be covered. Other Anthem-affiliated states are not currently in-network." },
  { q: "Is Highmark BCBS accepted at TeleDirectMD?", a: "Yes. In Pennsylvania, TeleDirectMD is in-network with Highmark Blue Cross Blue Shield commercial plans. Pennsylvania residents with Highmark BCBS can use their benefits for video visits with Dr. Bhavsar." },
  { q: "Does TeleDirectMD accept BCBS of Texas?", a: "Yes. In Texas, TeleDirectMD accepts Blue Cross Blue Shield of Texas commercial plans including Blue Advantage HMO, Blue Choice PPO, Health Select, Blue Essentials, and select Medicare Advantage plans. Texas is one of TeleDirectMD's most comprehensive BCBS markets." },
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
    { "@type":"MedicalOrganization","@id":"https://teledirectmd.com/#organization","name":"TeleDirectMD","url":"https://teledirectmd.com","description":"Physician-led telemedicine practice accepting Blue Cross Blue Shield plans in FL, GA, IL, PA, TX." },
    { "@type":"Physician","@id":"https://teledirectmd.com/#physician","name":"Parth Bhavsar, MD","identifier":{"@type":"PropertyValue","name":"NPI","value":"1104323203"},"medicalSpecialty":"Family Medicine","acceptsInsurance":[{"@type":"HealthInsurancePlan","name":"Blue Cross Blue Shield Commercial Plans"}] },
    { "@type":"FAQPage","mainEntity":BCBS_FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a.replace(/<[^>]+>/g,'')} })) },
    { "@type":"WebPage","@id":"https://teledirectmd.com/insurance/blue-cross-blue-shield#webpage","url":"https://teledirectmd.com/insurance/blue-cross-blue-shield","name":"Online Doctor That Accepts Blue Cross Blue Shield | TeleDirectMD","speakable":{"@type":"SpeakableSpecification","cssSelector":["[data-speakable]"]} },
    { "@type":"HowTo","name":"How to book a BCBS-covered telemedicine visit with TeleDirectMD","description":"Three steps to see Dr. Parth Bhavsar, MD by video using your Blue Cross Blue Shield plan.","totalTime":"PT5M","step":[
      {"@type":"HowToStep","position":1,"name":"Identify your BCBS affiliate","text":"Check your member ID card for the affiliate name. TeleDirectMD is in-network with Florida Blue, Anthem BCBS Georgia, BCBS Illinois, Highmark/Independence Blue Cross Pennsylvania, and BCBS Texas."},
      {"@type":"HowToStep","position":2,"name":"Book online","text":"Go to teledirectmd.com/book-online and choose 'Insurance' as your payment method. Enter your BCBS member ID."},
      {"@type":"HowToStep","position":3,"name":"See the physician by video","text":"Join your video visit with Dr. Parth Bhavsar, MD. Pay only your BCBS copay. Prescriptions are sent to your pharmacy immediately after the visit."}
    ]},
    { "@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":"https://teledirectmd.com"},
      {"@type":"ListItem","position":2,"name":"Insurance","item":"https://teledirectmd.com/insurance"},
      {"@type":"ListItem","position":3,"name":"Blue Cross Blue Shield","item":"https://teledirectmd.com/insurance/blue-cross-blue-shield"},
    ]}
  ]
};

export default function BCBSHubClient() {
  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Insurance",href:"/insurance"},{label:"Blue Cross Blue Shield"}]} />

      {/* HERO */}
      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c={insurer.color} s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:"#90C2FF", letterSpacing:"0.04em", textTransform:"uppercase" }}>Blue Cross Blue Shield In-Network</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(30px, 5vw, 46px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>
            Online Doctor Visits Covered<br />by Blue Cross Blue Shield
          </h1>
          <p data-speakable="true" style={{ fontFamily:B.fb, fontSize:"clamp(16px, 2.5vw, 19px)", color:"rgba(255,255,255,0.75)", lineHeight:1.6, margin:"0 0 28px", maxWidth:600 }}>
            TeleDirectMD is in-network with select BCBS affiliate plans in Florida, Georgia, Illinois, Pennsylvania, and Texas. Board-certified physician. Same-day video visits.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
              <Ico.Cal c={B.white} s={18} /> Book with BCBS
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
          question="Is TeleDirectMD in-network with Blue Cross Blue Shield?"
          answer="Yes, for specific BCBS state affiliates. TeleDirectMD is in-network with BCBS commercial plans in 5 states: Florida (Florida Blue), Georgia (Anthem BCBS GA), Illinois (BCBS IL), Pennsylvania (Highmark / Independence Blue Cross), and Texas (BCBS TX). Check your member ID card for the affiliate name, then book a same-day video visit with Dr. Parth Bhavsar, MD."
          color={B.teal}
        />

        {/* IMPORTANT: BCBS affiliate note */}
        <div style={{ background:"#EAF2FF", border:`1px solid ${insurer.color}33`, borderRadius:B.r, padding:"20px 24px", marginBottom:40, display:"flex", gap:14, alignItems:"flex-start" }}>
          <Ico.Shield c={insurer.color} s={22} />
          <div>
            <div style={{ fontSize:15, fontWeight:700, color:B.navy, marginBottom:6 }}>Important: BCBS Coverage Varies by State Affiliate</div>
            <p style={{ fontSize:14, color:B.text, margin:0, lineHeight:1.6 }}>Blue Cross Blue Shield is a federation of independent, locally licensed plans. TeleDirectMD is in-network with five specific BCBS affiliates. If your BCBS card shows one of the affiliates listed below, your visit may be covered. If you are unsure, check your member ID card for the affiliate name.</p>
          </div>
        </div>

        {/* STATE AFFILIATES */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>BCBS Affiliates We Accept by State</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>Click your state to see detailed coverage information for your specific BCBS affiliate.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:12 }}>
            {BCBS_STATE_AFFILIATES.map((st) => (
              <a key={st.code} href={st.url}
                style={{ display:"block", background:B.white, border:`1px solid ${insurer.color}22`, borderRadius:B.r, padding:"20px 20px", textDecoration:"none", boxShadow:B.shadow, borderTop:`3px solid ${insurer.color}` }}>
                <div style={{ fontSize:16, fontWeight:700, color:B.navy, marginBottom:4 }}>{st.name}</div>
                <div style={{ fontSize:13, color:insurer.color, fontWeight:600, marginBottom:8 }}>{st.affiliate}</div>
                <div style={{ display:"flex", alignItems:"center", gap:4, fontSize:12, color:B.text }}>
                  <Ico.Arrow c={B.text} s={12} /> View coverage details
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CONDITIONS */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Conditions Covered by BCBS Telemedicine</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>BCBS plans typically cover the following conditions when treated via telehealth at TeleDirectMD:</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:10 }}>
            {CONDITIONS_COVERED.map((cond,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 16px", boxShadow:B.shadow }}>
                <Ico.Check c="#1A5FB4" s={16} />
                <span style={{ fontSize:14, fontWeight:500, color:B.navy }}>{cond}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>How to Use Your BCBS Insurance</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>Using your Blue Cross Blue Shield benefits with TeleDirectMD is straightforward.</p>
          <HowItWorksSteps insurerName="Blue Cross Blue Shield" />
        </section>

        <section style={{ marginBottom:48 }}><BookCTA insurerName="Blue Cross Blue Shield" /></section>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>BCBS & TeleDirectMD: Frequently Asked Questions</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px" }}>Common questions about using your Blue Cross Blue Shield benefits for telemedicine.</p>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {BCBS_FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 16px" }}>Explore BCBS Coverage by Condition</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))", gap:10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond,i) => (
              <a key={i} href={`/insurance/blue-cross-blue-shield/${cond.slug}`}
                style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"14px 16px", textDecoration:"none", boxShadow:B.shadow }}>
                <div style={{ fontSize:14, fontWeight:600, color:B.navy, marginBottom:2 }}>BCBS + {cond.name}</div>
                <div style={{ fontSize:12, color:B.text }}>Does BCBS cover {cond.name.toLowerCase()}?</div>
              </a>
            ))}
          </div>
        </section>

        {/* FEATURED DEEP COVERAGE — internal linking to triple-matrix pages */}
        <section style={{ marginBottom:48 }} data-speakable="true">
          <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Popular BCBS Coverage in Top Markets</h2>
          <p style={{ fontSize:14, color:B.text, margin:"0 0 16px", lineHeight:1.6 }}>Most-searched in-network BCBS telemedicine combinations at TeleDirectMD:</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:10 }}>
            <a href="/insurance/blue-cross-blue-shield/texas/sinus-infection" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Sinus infection covered by BCBS in Texas →</a>
            <a href="/insurance/blue-cross-blue-shield/georgia/uti-treatment" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>UTI treatment covered by BCBS in Georgia →</a>
            <a href="/insurance/blue-cross-blue-shield/florida/strep-throat" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Strep throat covered by BCBS in Florida →</a>
            <a href="/insurance/blue-cross-blue-shield/illinois/flu-treatment" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Flu treatment covered by BCBS in Illinois →</a>
            <a href="/insurance/blue-cross-blue-shield/pennsylvania/ear-infection" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Ear infection covered by BCBS in Pennsylvania →</a>
            <a href="/insurance/blue-cross-blue-shield/texas/pink-eye" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Pink eye covered by BCBS in Texas →</a>
          </div>
        </section>

        <div style={{ marginBottom:48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
