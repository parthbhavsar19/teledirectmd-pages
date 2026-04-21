'use client';
import { B, STATE_NAMES, INSURANCE_CONDITIONS, INSURERS, COPAY_DATA, STATE_INSURANCE_MAP, LAST_REVIEWED } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock, CopayCard, PatientJourney, CrossInsurerTable, CommissionerLink, InsurerTrustDetails } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';

const insurer = INSURERS.aetna;

const STATE_CODE_MAP = { arizona:"AZ", colorado:"CO", florida:"FL", georgia:"GA", illinois:"IL", michigan:"MI", minnesota:"MN", ohio:"OH", pennsylvania:"PA", tennessee:"TN" };

const STATE_CONTEXT = {
  AZ:{cities:["Phoenix","Tucson","Scottsdale","Mesa","Chandler"],note:"Arizona's dry climate makes respiratory conditions and sinus infections extremely common. Aetna is a major commercial insurer in the Arizona employer market with strong plan penetration in the Phoenix metro."},
  CO:{cities:["Denver","Aurora","Colorado Springs","Boulder","Fort Collins"],note:"Colorado's active, health-conscious population and high altitude make same-day telehealth especially convenient. Aetna and UHC are both in-network at TeleDirectMD in Colorado — two options for most Colorado employer plan members."},
  FL:{cities:["Miami","Orlando","Tampa","Jacksonville","Fort Lauderdale"],note:"Florida is one of TeleDirectMD's largest markets. Aetna and Florida Blue (BCBS) are both in-network, giving most Florida residents at least one insurance option for same-day telehealth care."},
  GA:{cities:["Atlanta","Savannah","Augusta","Columbus","Macon"],note:"Georgia is TeleDirectMD's home state and core market. All three major insurers — Aetna, Anthem BCBS, and UHC — are in-network for Georgia residents, giving the broadest multi-insurer coverage of any state we serve."},
  IL:{cities:["Chicago","Aurora","Naperville","Joliet","Rockford"],note:"Illinois is a three-insurer market for TeleDirectMD. Aetna, BCBS of Illinois, and UHC are all in-network — covering the vast majority of Illinois employer plan members, including the large Chicago metro employer base."},
  MI:{cities:["Detroit","Grand Rapids","Ann Arbor","Lansing","Flint"],note:"Michigan residents with Aetna commercial plans can access TeleDirectMD's physician-led telemedicine statewide. Michigan has robust telehealth parity regulations, meaning Aetna telehealth copays are regulated to match or beat in-person rates."},
  MN:{cities:["Minneapolis","Saint Paul","Rochester","Duluth","Bloomington"],note:"Minnesota is home to UHC headquarters, but Aetna is a major commercial insurer in the Twin Cities employer market. Both Aetna and UHC are in-network at TeleDirectMD in Minnesota."},
  OH:{cities:["Columbus","Cleveland","Cincinnati","Toledo","Akron"],note:"Ohio is a strong two-insurer market with both Aetna and UHC in-network at TeleDirectMD. Ohio employer plans frequently carry $0 telehealth copays — especially for large employers in Columbus and Cleveland."},
  PA:{cities:["Philadelphia","Pittsburgh","Allentown","Erie","Reading"],note:"Pennsylvania has the broadest insurance coverage at TeleDirectMD: Aetna, Highmark BCBS, and UHC are all in-network, covering most Pennsylvania employer plan members across both the Philadelphia and Pittsburgh markets."},
  TN:{cities:["Nashville","Memphis","Knoxville","Chattanooga","Clarksville"],note:"Tennessee residents with Aetna or UHC commercial plans can access TeleDirectMD. Nashville's major employer base — including HCA Healthcare, Vanderbilt, and large tech companies — makes commercial insurance especially prevalent."},
};

export default function AetnaStateClient({ stateSlug }) {
  const stateCode = STATE_CODE_MAP[stateSlug];
  const stateName = STATE_NAMES[stateCode] || stateSlug;
  const ctx = STATE_CONTEXT[stateCode] || { cities:[], note:"" };
  const copayData = COPAY_DATA.aetna?.[stateCode];
  const stateInfo = STATE_INSURANCE_MAP[stateCode];

  const FAQS = [
    { q:`Is TeleDirectMD in-network with Aetna in ${stateName}?`, a:`Yes. TeleDirectMD is contracted as an in-network telehealth provider with Aetna commercial plans in ${stateName}. Dr. Parth Bhavsar, MD (NPI: 1104323203) is the treating physician. If you have an Aetna employer-sponsored or individual commercial plan in ${stateName}, your telehealth visit may be covered subject to your plan's copay or deductible. Claims are submitted electronically using CPT codes 99213/99214.` },
    { q:`What is the Aetna telehealth copay in ${stateName}?`, a:`${copayData ? `Most Aetna commercial plans in ${stateName} have telehealth copays of ${copayData.typical}. ${copayData.employer}. ${copayData.note}` : `Aetna commercial plan telehealth copays in ${stateName} typically range from $0 to $40.`} Log into your Aetna member portal at aetna.com or call the member services number on your Aetna card to verify your exact cost. Self-pay is always available for $49 flat.` },
    { q:`Does Aetna cover telemedicine in ${stateName}?`, a:`Yes. Aetna covers telehealth visits for most commercial plan members in ${stateName}. Federal telehealth parity requirements and ${stateName} state law ensure that Aetna must cover telehealth services comparably to in-person visits for most commercial plans. Your actual cost depends on your plan's copay, coinsurance, and deductible status. Medicaid, Medicare fee-for-service, and Aetna Better Health (Medicaid) are not accepted.` },
    { q:`What conditions does Aetna cover for telemedicine in ${stateName}?`, a:`Aetna commercial plans in ${stateName} cover telehealth visits for UTI, sinus infection, strep throat, ear infection, pink eye, flu, asthma inhaler refills, hypertension medication refills, acid reflux, yeast infections, and many more. Coverage depends on your specific plan benefits. Use the conditions grid below to explore specific condition + Aetna + ${stateName} coverage details.` },
    { q:`How do I book a TeleDirectMD visit using Aetna in ${stateName}?`, a:`Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your Aetna member ID card ready. We verify your coverage before your visit begins. You can also book self-pay for $49 flat — no insurance required, same physician and quality of care.` },
    { q:`How does TeleDirectMD bill Aetna for my visit in ${stateName}?`, a:`TeleDirectMD submits your claim electronically to Aetna using CPT code 99213 (standard complexity) or 99214 (moderate complexity). Aetna processes the claim and applies it to your benefits. You'll receive an Explanation of Benefits (EOB) from Aetna within 2–4 weeks showing what was billed (typically $150–$250) and your responsibility (your copay or deductible portion). Questions? Call Aetna member services at 1-888-632-3862.` },
    { q:`What Aetna plans are NOT accepted at TeleDirectMD in ${stateName}?`, a:`The following Aetna plan types are not accepted: Aetna Medicaid, Aetna Better Health (Medicaid), Medicare fee-for-service, and Aetna Medicare Advantage plans. If you are unsure about your plan type, self-pay is available for $49 flat — same physician and care quality, no insurance required.` },
    { q:`Can I use my Aetna FSA or HSA for a TeleDirectMD visit in ${stateName}?`, a:`Yes. Telehealth visits with a licensed physician are qualified medical expenses eligible for FSA and HSA payment. If your Aetna plan applies your deductible before covering the visit, your FSA or HSA card can be used to pay your cost-sharing. The $49 self-pay option is also FSA/HSA eligible.` },
    { q:`Does Aetna in ${stateName} cover my prescription from the telehealth visit?`, a:`Aetna covers the telehealth visit under your medical benefit. Prescription coverage is handled by your Aetna pharmacy benefit. Most first-line medications for common conditions (antibiotics, antivirals, PPIs, antihypertensives) are Tier 1 generic drugs covered by virtually all Aetna commercial plans for $4–$15. Check your Aetna formulary at aetna.com or ask your pharmacy.` },
    { q:`What if my specific Aetna plan in ${stateName} is not covered?`, a:`If your specific Aetna plan is not in-network with TeleDirectMD in ${stateName}, you can still see Dr. Bhavsar as a self-pay patient for a flat $49 fee. You may also submit an out-of-network claim to Aetna for partial reimbursement depending on your plan's out-of-network benefit.` },
    { q:`How do I verify my Aetna telehealth benefits before booking in ${stateName}?`, a:`Log into your Aetna member portal at aetna.com, navigate to "Benefits," and look for "Telehealth" or "Virtual Care" under your plan details. You can also call the member services number on the back of your Aetna card. When calling, ask: "Is TeleDirectMD in-network for telehealth?" and "What is my telehealth copay?" Have your member ID ready.` },
    { q:`Is there a difference between Aetna telehealth and in-person copays in ${stateName}?`, a:`In most Aetna commercial plans in ${stateName}, telehealth copays are equal to or lower than your primary care in-person copay. Many employer-sponsored Aetna plans carry $0 telehealth copays — particularly since the post-pandemic expansion of telehealth benefits. Your specific plan determines the exact amount. Log into aetna.com to confirm your telehealth cost-sharing.` },
  ];

  const SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": `Online Doctor That Accepts Aetna in ${stateName}`,
        "description": `TeleDirectMD is in-network with Aetna commercial plans in ${stateName}. Board-certified physician Dr. Parth Bhavsar, MD (NPI: 1104323203). Same-day video visits — your Aetna copay applies${copayData ? ` (typically ${copayData.typical})` : ""}.`,
        "url": `https://teledirectmd.com/insurance/aetna/${stateSlug}`,
        "lastReviewed": LAST_REVIEWED,
        "reviewedBy": { "@type": "Physician", "name": "Parth Bhavsar, MD", "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" } },
        "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["[data-speakable]"] },
      },
      {
        "@type": "Physician",
        "name": "Parth Bhavsar, MD",
        "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" },
        "medicalSpecialty": "Family Medicine",
        "areaServed": { "@type": "State", "name": stateName },
        "acceptsInsurance": [{ "@type": "HealthInsurancePlan", "name": `Aetna Commercial Plans — ${stateName}` }],
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(f => ({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type":"ListItem","position":1,"name":"Home","item":"https://teledirectmd.com" },
          { "@type":"ListItem","position":2,"name":"Insurance","item":"https://teledirectmd.com/insurance" },
          { "@type":"ListItem","position":3,"name":"Aetna","item":"https://teledirectmd.com/insurance/aetna" },
          { "@type":"ListItem","position":4,"name":stateName,"item":`https://teledirectmd.com/insurance/aetna/${stateSlug}` },
        ],
      },
    ],
  };

  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Insurance",href:"/insurance"},{label:"Aetna",href:"/insurance/aetna"},{label:stateName}]} />

      {/* HERO */}
      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c="#C084FC" s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:"#C084FC", letterSpacing:"0.04em", textTransform:"uppercase" }}>Aetna In-Network — {stateName}</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(28px, 5vw, 44px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>Online Doctor That Accepts<br />Aetna Insurance in {stateName}</h1>
          <p data-speakable="true" style={{ fontFamily:B.fb, fontSize:"clamp(15px, 2.5vw, 18px)", color:"rgba(255,255,255,0.80)", lineHeight:1.65, margin:"0 0 10px", maxWidth:600 }}>
            TeleDirectMD is in-network with Aetna commercial plans in {stateName}. See a board-certified physician by video — your standard Aetna copay applies{copayData ? ` (typically ${copayData.typical})` : ""}.
          </p>
          {ctx.note && <p style={{ fontFamily:B.fb, fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.6, margin:"0 0 24px", maxWidth:580 }}>{ctx.note}</p>}
          <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
            <Ico.Cal c={B.white} s={18} /> Book with Aetna in {stateName}
          </a>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ margin:"32px 0" }}><TrustBar /></div>

        {/* ANSWER BLOCK */}
        <AnswerBlock
          question={`Does Aetna cover telemedicine visits in ${stateName}?`}
          answer={`Yes — TeleDirectMD is in-network with Aetna commercial plans in ${stateName}. Dr. Parth Bhavsar, MD evaluates your symptoms by secure video and sends prescriptions directly to your ${stateName} pharmacy if appropriate. Your standard Aetna copay applies${copayData ? ` — typically ${copayData.typical} for most ${stateName} commercial plans` : ""}. Self-pay is $49 flat if you prefer.`}
          color={insurer.color}
        />

        {/* COPAY CARD */}
        {copayData && <CopayCard insurerName="Aetna" stateName={stateName} copayData={copayData} insurerColor={insurer.color} />}

        {/* CONDITIONS GRID */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Conditions Aetna Covers via Telehealth in {stateName}</h2>
          <p style={{ fontSize:14, color:B.text, margin:"0 0 16px", lineHeight:1.6 }}>Select a condition to see Aetna + {stateName} specific coverage details, copay estimates, and prescription information.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond,i) => (
              <a key={i} href={`/insurance/aetna/${stateSlug}/${cond.slug}`} style={{ display:"flex", alignItems:"center", gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow }}>
                <Ico.Check c="#7B2CBF" s={15} />
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:B.navy }}>{cond.displayName}</div>
                  <div style={{ fontSize:11, color:"#7B2CBF" }}>Aetna · {stateName} · {cond.icd10}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SELF-PAY CROSS-LINKS — internal linking for AI visibility */}
        <section style={{ marginBottom:40, padding:"20px 24px", background:B.colorLight || "#F9FAFB", border:`1px solid ${B.border}`, borderRadius:B.r }} data-speakable="true">
          <h2 style={{ fontFamily:B.fd, fontSize:20, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Without Aetna? Self-Pay Options in {stateName}</h2>
          <p style={{ fontSize:14, color:B.text, margin:"0 0 12px", lineHeight:1.6 }}>No Aetna plan or uninsured? TeleDirectMD offers $49 self-pay video visits for the same conditions in {stateName}. Browse self-pay options:</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            <a href={`/${stateSlug}/`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>All conditions in {stateName} →</a>
            <a href={`/${stateSlug}/uti-treatment-online`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>UTI →</a>
            <a href={`/${stateSlug}/sinus-infection-treatment-online`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>Sinus Infection →</a>
            <a href={`/${stateSlug}/strep-throat-treatment-online`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>Strep Throat →</a>
            <a href={`/${stateSlug}/influenza-treatment-online`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>Flu →</a>
          </div>
        </section>

        {/* CITIES */}
        {ctx.cities.length > 0 && (
          <section style={{ marginBottom:40 }}>
            <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Serving Aetna Members Across {stateName}</h2>
            <p style={{ fontSize:15, color:B.text, margin:0, lineHeight:1.7 }}>
              TeleDirectMD serves Aetna members throughout {stateName}, including {ctx.cities.join(", ")}, and all surrounding areas. Care is delivered via secure video — your location within {stateName} does not affect your eligibility to book. As long as you are physically in {stateName} during your visit, your Aetna coverage applies.
            </p>
            {stateInfo?.majorEmployers && (
              <p style={{ fontSize:14, color:B.text, margin:"12px 0 0", lineHeight:1.7 }}>
                Major {stateName} employers whose plans may be in-network with TeleDirectMD via Aetna include: {stateInfo.majorEmployers.join(", ")}. Verify your specific plan at aetna.com.
              </p>
            )}
          </section>
        )}

        {/* HOW IT WORKS */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 16px" }}>How to Use Your Aetna Benefits in {stateName}</h2>
          <HowItWorksSteps insurerName="Aetna" />
        </section>

        {/* PATIENT JOURNEY */}
        <PatientJourney insurerName="Aetna" conditionName="your condition" />

        {/* CROSS-INSURER TABLE */}
        <CrossInsurerTable stateCode={stateCode} stateName={stateName} currentInsurer="aetna" />

        {/* INSURER TRUST */}
        <InsurerTrustDetails insurer={insurer} />

        <section style={{ marginBottom:48 }}><BookCTA insurerName="Aetna" /></section>

        {/* FAQ */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Aetna + {stateName}: Frequently Asked Questions</h2>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        <div style={{ marginBottom:24, display:"flex", flexWrap:"wrap", gap:10 }}>
          <a href="/insurance/aetna" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>← All Aetna States</a>
          <span style={{ color:B.border }}>|</span>
          <a href="/insurance" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>All Insurance Options</a>
        </div>

        <CommissionerLink stateCode={stateCode} stateName={stateName} />
        <div style={{ marginBottom:48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
