'use client';
import { B, INSURERS, STATE_NAMES, INSURANCE_CONDITIONS } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock } from '../components/InsuranceShared';
import { Ico } from '../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../lib/review-schema';
import { CitableSummaryBlock } from '../../components/CitableSummary';
import { summarizeInsurerHub, citableSummaryToJsonLd } from '../../../lib/citable-summary';
import MedicaidExclusion from '../../components/MedicaidExclusion';

const insurer = INSURERS["united-healthcare"];

const UHC_STATES = [
  { code:"CO", name:"Colorado", url:"/co/" },
  { code:"GA", name:"Georgia", url:"/ga/" },
  { code:"IL", name:"Illinois", url:"/il/" },
  { code:"MN", name:"Minnesota", url:"/mn/" },
  { code:"NC", name:"North Carolina", url:"/nc/" },
  { code:"NJ", name:"New Jersey", url:"/nj/" },
  { code:"OH", name:"Ohio", url:"/oh/" },
  { code:"PA", name:"Pennsylvania", url:"/pa/" },
  { code:"TN", name:"Tennessee", url:"/tn/" },
  { code:"TX", name:"Texas", url:"/tx/", newBadge:"New · June 2026" },
      { code:"WA", name:"Washington", url:"/wa/" },
];

const UHC_FAQS = [
  { q: "Which UnitedHealthcare plans are in-network with TeleDirectMD?", a: "TeleDirectMD is in-network with UnitedHealthcare PPO, HMO, EPO, POS, and Medicare Advantage plans in 17 states. Three states are commercial-only and exclude Medicare Advantage: Illinois, Minnesota, and Texas. Colorado excludes UHC Navigate, UHC Charter, and Colorado Doctors Plan products. UHC Community Plan (Medicaid), Dual Complete (D-SNP), and Optum behavioral-only plans are not in-network in any state." },
  { q: "Is the contract held with UnitedHealthcare or Optum?", a: "Our medical-benefit contract is with UnitedHealthcare (payer ID 87726). Optum Care, Optum Behavioral Health, and OptumRx are separate Optum-family entities — only UnitedHealthcare's medical-benefit network covers our visits. If your card says 'Optum' only, call the member number on the back to confirm UHC medical benefits before booking." },
  { q: "Colorado UHC members: which products are excluded?", a: "If you have UHC Navigate, UHC Charter, or the Colorado Doctors Plan, you are not in-network with TeleDirectMD in Colorado — these are narrow-network products UHC limits to specific in-state physical clinics. Standard UHC Choice, Choice Plus, Options PPO, and UHC Medicare Advantage in Colorado are in-network." },
  { q: "Illinois / Minnesota / Texas UHC: why is Medicare Advantage excluded?", a: "Our UnitedHealthcare contract in Illinois, Minnesota, and Texas is commercial-only — UHC and AARP UnitedHealthcare Medicare Advantage plans are not included in those three state contracts. UHC Medicare Advantage is in-network in our other 14 UHC states. If you have AARP UHC Medicare Advantage in IL/MN/TX, use the $79 self-pay rate." },
  { q: "What is my UHC telehealth copay?", a: "UHC commercial telehealth copays are typically $0–$40; many employer plans waive the copay for telehealth entirely. AARP UnitedHealthcare Medicare Advantage typically applies $0–$20. Log into myuhc.com or the UHC app, or call the member services number on your card, to see your exact copay before booking." },
  { q: "Will my prescription work with OptumRx?", a: "Yes. We send e-prescriptions to any pharmacy you select — OptumRx mail-order, OptumRx home delivery, or any retail pharmacy in UHC's network. Your usual UHC pharmacy benefit and copay apply." },
  { q: "Can I use a UHC HRA, HSA, or FSA?", a: "Yes. Telehealth visits at TeleDirectMD are eligible expenses for UHC HRA, HSA, and FSA accounts whether the visit is billed to UHC or paid $79 self-pay. Your UHC debit card runs at booking." },
  { q: "Does TeleDirectMD accept UHC Community Plan (Medicaid)?", a: "No. TeleDirectMD is not in-network with UHC Community Plan, UHC Dual Complete (D-SNP), or any Medicaid managed care plan, in any state. Self-pay $79 visits remain available." },
];

const CONDITIONS_COVERED = [
  "Urinary Tract Infection (UTI)",
  "Sinus Infection",
  "Strep Throat",
  "Pink Eye",
  "Ear Infection",
  "Flu / Influenza",
  "Yeast Infection",
  "COVID-19 Evaluation",
  "UHC Choice Plus Asthma Refills",
  "UHC Choice Plus Hypertension Refills",
  "UHC Medicare Advantage Diabetes Refills",
  "OptumRx-routed Cholesterol Refills",
  "Birth Control (OptumRx mail-order)",
  "Cold Sores",
  "Eczema",
  "Contact Dermatitis",
];

const SCHEMA = {
  "@context":"https://schema.org",
  "@graph":[
    { "@type":"MedicalOrganization","@id":"https://teledirectmd.com/#organization","name":"TeleDirectMD","url":"https://teledirectmd.com","description":"Physician-led telemedicine practice accepting UnitedHealthcare PPO, HMO, EPO, POS, and Medicare Advantage plans in 17 states.","aggregateRating": getAggregateRating() },
    { "@type":"Physician","@id":"https://teledirectmd.com/#physician","name":"Parth Bhavsar, MD","identifier":{"@type":"PropertyValue","name":"NPI","value":"1104323203"},"medicalSpecialty":"Family Medicine","acceptsInsurance":[{"@type":"HealthInsurancePlan","name":"UnitedHealthcare Commercial Plans"}], ...getReviewBlock() },
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
    ]}    ,
    {
          "@type": "ItemList",
          "@id": "https://teledirectmd.com/insurance/united-healthcare#statelist",
          "name": "States where TeleDirectMD is in-network with United Healthcare",
          "numberOfItems": 11,
          "itemListOrder": "https://schema.org/ItemListOrderAscending",
          "itemListElement": [
                {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "TeleDirectMD x United Healthcare - Colorado",
                      "url": "https://teledirectmd.com/co/"
                },
                {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "TeleDirectMD x United Healthcare - Georgia",
                      "url": "https://teledirectmd.com/ga/"
                },
                {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "TeleDirectMD x United Healthcare - Illinois",
                      "url": "https://teledirectmd.com/il/"
                },
                {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "TeleDirectMD x United Healthcare - Minnesota",
                      "url": "https://teledirectmd.com/mn/"
                },
                {
                      "@type": "ListItem",
                      "position": 5,
                      "name": "TeleDirectMD x United Healthcare - North Carolina",
                      "url": "https://teledirectmd.com/nc/"
                },
                {
                      "@type": "ListItem",
                      "position": 6,
                      "name": "TeleDirectMD x United Healthcare - New Jersey",
                      "url": "https://teledirectmd.com/nj/"
                },
                {
                      "@type": "ListItem",
                      "position": 7,
                      "name": "TeleDirectMD x United Healthcare - Ohio",
                      "url": "https://teledirectmd.com/oh/"
                },
                {
                      "@type": "ListItem",
                      "position": 8,
                      "name": "TeleDirectMD x United Healthcare - Pennsylvania",
                      "url": "https://teledirectmd.com/pa/"
                },
                {
                      "@type": "ListItem",
                      "position": 9,
                      "name": "TeleDirectMD x United Healthcare - Tennessee",
                      "url": "https://teledirectmd.com/tn/"
                },
                {
                      "@type": "ListItem",
                      "position": 10,
                      "name": "TeleDirectMD x United Healthcare - Washington",
                      "url": "https://teledirectmd.com/wa/"
                }
          ]
    },
  
  ]
};

export default function UHCHubClient() {
  const customSteps = [
    { icon: <Ico.Cal c={B.teal} s={24} />, title: "Book with UHC ID", desc: "Enter your UnitedHealthcare member ID at teledirectmd.com/book-online — payer ID 87726." },
    { icon: <Ico.Check c={B.teal} s={24} />, title: "myuhc verified", desc: "We pull your UHC eligibility and Optum copay before the visit (typically $0–$40)." },
    { icon: <Ico.Video c={B.teal} s={24} />, title: "Video visit + e-Rx", desc: "Same-day visit with Dr. Bhavsar, MD. Prescription routed via OptumRx or your retail pharmacy." },
  ];

  // ── Citable summary for AI extractors (United Healthcare hub)
  const citableSummary_AI = summarizeInsurerHub({
    insurerName: 'United Healthcare',
    stateCount: insurer?.states?.length || null,
    stateList: insurer?.states ? insurer.states.map(s => STATE_NAMES[s] || s) : null,
    planTypes: "PPO, HMO, EPO, POS, and Medicare Advantage",
    payerSpecificCopy: "UnitedHealthcare claims route through UHC's electronic clearinghouse (payer ID 87726). Our UHC medical-benefit contract is separate from Optum Behavioral, Optum Care, and OptumRx \u2014 if your card says \u2018Optum\u2019 only, confirm UHC medical benefits before booking. Illinois, Minnesota, and Texas are commercial-only contracts; UHC Medicare Advantage and AARP UnitedHealthcare Medicare Advantage are excluded in those three states. Colorado excludes UHC Navigate, UHC Charter, and the Colorado Doctors Plan. UHC Community Plan (Medicaid), Dual Complete (D-SNP), and Optum behavioral-only plans are not in-network in any state. Pharmacy benefits run through OptumRx.",
  });
  const pageUrl_AI = 'https://teledirectmd.com/insurance/united-healthcare/';
  const citableJsonLd_AI = citableSummaryToJsonLd(citableSummary_AI, { pageUrl: pageUrl_AI });


  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <CitableSummaryBlock summary={citableSummary_AI} jsonLd={citableJsonLd_AI} idSuffix="united-healthcare-hub" />
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
            TeleDirectMD is in-network with UnitedHealthcare PPO, HMO, EPO, POS, and Medicare Advantage plans in 17 states. Same-day video visits with a board-certified physician. Standard UHC copay applies.
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
          answer="Yes. TeleDirectMD accepts UnitedHealthcare PPO, HMO, EPO, POS, and Medicare Advantage plans in 17 states. Medicare Advantage is not in-network in Illinois, Minnesota, or Texas. Book a same-day video visit with Dr. Parth Bhavsar, MD — your standard UHC copay applies. Bring your UHC member ID at booking and we will verify your benefits before the visit."
          color={B.teal}
        />

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>States Where We Accept UnitedHealthcare</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>TeleDirectMD is in-network with UnitedHealthcare PPO, HMO, EPO, POS, and Medicare Advantage plans in 17 states. Click your state for detailed coverage information.</p>
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
          <HowItWorksSteps insurerName="UnitedHealthcare" customSteps={customSteps} />
        </section>

        <section style={{ marginBottom:48 }}><BookCTA insurerName="UnitedHealthcare" tagline="UHC PPO, HMO, EPO, POS, and Medicare Advantage — eligibility checked via payer ID 87726 before the call." subtagline="Or pay $79 self-pay (HSA/FSA eligible) and skip prior auth entirely." /></section>

        {/* Sitewide Medicaid + D-SNP exclusion */}
        <MedicaidExclusion headingLevel="h2" idSuffix="uhc-hub" />

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>UHC & TeleDirectMD: Frequently Asked Questions</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px" }}>Common questions about using your UnitedHealthcare benefits for telemedicine.</p>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {UHC_FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        
        {/* EXPLORE LINKS — top-6 UHC combos */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 16px" }}>Most-requested UHC telehealth conditions</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:10 }}>
            {[
              { slug: 'uti-treatment-online', label: 'UTI under UHC Choice Plus' },
              { slug: 'sinus-infection-treatment-online', label: 'Sinus infection under UHC' },
              { slug: 'covid-treatment-online', label: 'COVID-19 evaluation (UHC)' },
              { slug: 'sore-throat-treatment-online', label: 'Strep throat (UHC commercial)' },
              { slug: 'pink-eye-treatment-online', label: 'Pink eye (UHC PPO)' },
              { slug: 'yeast-infection-treatment-online', label: 'Yeast infection (UHC)' },
            ].map((c, i) => (
              <a key={i} href={`/insurance/united-healthcare/${c.slug}`}
                style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"14px 16px", textDecoration:"none", boxShadow:B.shadow }}>
                <div style={{ fontSize:14, fontWeight:600, color:B.navy }}>{c.label}</div>
                <div style={{ fontSize:12, color:B.text, marginTop:2 }}>$0–$40 copay typical · OptumRx pharmacy</div>
              </a>
            ))}
          </div>
        </section>
        {/* Compact link out to /insurance/ — full cost comparison lives there */}
        <div style={{ background:"#F3FAFB", border:"1px solid #DDE3E6", borderRadius:18, padding:"18px 22px", margin:"0 0 32px", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:12 }}>
          <p style={{ margin:0, fontSize:14, color:"#12323A" }}>Not in-network on your plan? Self-pay is a flat <strong>$79</strong> in all our licensed states (HSA/FSA eligible).</p>
          <a href="/insurance/" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"10px 18px", background:"#006B73", color:"#fff", borderRadius:10, fontWeight:700, fontSize:14, textDecoration:"none", whiteSpace:"nowrap" }}>Compare options →</a>
        </div>
<div style={{ marginBottom:48 }}><InsuranceDisclaimer payerNote="UnitedHealthcare network status reflects our 2026 commercial contract; UHC Community Plan, Dual Complete (D-SNP), and Optum behavioral-only plans are excluded. Medicare Advantage is excluded in IL, MN, and TX." /></div>
      </div>
    </div>
  );
}
