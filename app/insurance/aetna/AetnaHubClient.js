'use client';
import { B, INSURERS, STATE_NAMES, INSURANCE_CONDITIONS } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock } from '../components/InsuranceShared';
import { Ico } from '../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../lib/review-schema';

const insurer = INSURERS.aetna;

const AETNA_FAQS = [
  { q: "Is TeleDirectMD in-network with Aetna?", a: "Yes. TeleDirectMD is in-network with Aetna commercial plans in Arizona, Colorado, Florida, Georgia, Illinois, Michigan, Minnesota, Ohio, Pennsylvania, and Tennessee. If you have an Aetna employer-sponsored or individual commercial plan in one of these states, your telehealth visit with Dr. Bhavsar may be covered subject to your plan's copay or deductible." },
  { q: "Does Aetna cover telemedicine visits?", a: "Aetna covers telehealth visits for most commercial plan members. Federal law requires most commercial insurers to cover telehealth services comparably to in-person visits. Your actual out-of-pocket cost depends on your specific plan's copay, coinsurance, and deductible. Contact the member services number on the back of your Aetna card to verify your telehealth benefits before booking." },
  { q: "What conditions does Aetna cover for telemedicine with TeleDirectMD?", a: "Aetna covers telehealth visits for a wide range of conditions. At TeleDirectMD, we treat UTIs, sinus infections, strep throat, ear infections, pink eye, asthma refills, hypertension refills, acid reflux, flu, yeast infections, and many more. Coverage depends on your plan benefits. See our <a href='/what-we-treat' style='color:#006B73'>What We Treat</a> page for the full condition list." },
  { q: "What is my copay for a TeleDirectMD visit with Aetna?", a: "Copays vary by plan. Most Aetna commercial plans have a telehealth copay of $0–$40. To find your exact cost, log in to your Aetna member portal at aetna.com, call the member services number on your insurance card, or simply ask us at booking — we will verify your benefits before your visit." },
  { q: "Does Aetna cover telehealth for urgent care conditions?", a: "Yes. Aetna covers telehealth for urgent care conditions including UTI, sinus infection, ear infection, strep throat, pink eye, and similar conditions. These are exactly the conditions TeleDirectMD specializes in treating via video visit." },
  { q: "Does Aetna cover prescription refills through telemedicine?", a: "Yes. Aetna covers telemedicine visits for prescription refills for stable chronic conditions including asthma, hypertension, hypothyroidism, hyperlipidemia, and acid reflux. The prescription is sent to your pharmacy immediately after the visit." },
  { q: "How do I book a TeleDirectMD visit using my Aetna insurance?", a: "Book at teledirectmd.com/book-online and select 'Insurance' as your payment method. Have your Aetna member ID card ready. We will verify your coverage before your visit. If you prefer, you can also book as a self-pay patient for a flat $49 fee." },
  { q: "What if my specific Aetna plan is not covered?", a: "If your specific Aetna plan is not in-network with TeleDirectMD, you can still see Dr. Bhavsar as a self-pay patient for a flat $49 fee. No insurance is required. You may also be able to submit an out-of-network claim to Aetna for partial reimbursement — contact Aetna to ask about your out-of-network benefits." },
  { q: "Does TeleDirectMD accept Aetna Medicaid?", a: "No. TeleDirectMD does not currently accept Aetna Medicaid (Aetna Better Health) plans. We accept Aetna commercial plans only. If you have Aetna Medicaid, you may book as a self-pay patient for $49." },
  { q: "Is Aetna Medicare Advantage accepted?", a: "Currently, TeleDirectMD accepts Aetna commercial plans. Aetna Medicare Advantage acceptance varies by state — contact us at contact@teledirectmd.com to ask about your specific plan." },
];

const CONDITIONS_COVERED = [
  "UTI (Urinary Tract Infection)", "Sinus Infection", "Strep Throat", "Ear Infection",
  "Pink Eye (Conjunctivitis)", "Flu / Influenza", "Yeast Infection", "Cold Sores",
  "Asthma Inhaler Refills", "Hypertension Medication Refills", "Acid Reflux / GERD Refills",
  "Hypothyroidism Refills", "Hyperlipidemia Refills", "Seasonal Allergies", "Acne",
  "Birth Control Refills", "COVID-19 Treatment", "Eczema", "Contact Dermatitis", "Nausea / Vomiting",
];

const AETNA_STATES = [
  { code:"AZ", name:"Arizona", url:"/insurance/aetna/arizona" },
  { code:"CO", name:"Colorado", url:"/insurance/aetna/colorado" },
  { code:"FL", name:"Florida", url:"/insurance/aetna/florida" },
  { code:"GA", name:"Georgia", url:"/insurance/aetna/georgia" },
  { code:"IL", name:"Illinois", url:"/insurance/aetna/illinois" },
  { code:"MI", name:"Michigan", url:"/insurance/aetna/michigan" },
  { code:"MN", name:"Minnesota", url:"/insurance/aetna/minnesota" },
  { code:"OH", name:"Ohio", url:"/insurance/aetna/ohio" },
  { code:"PA", name:"Pennsylvania", url:"/insurance/aetna/pennsylvania" },
  { code:"TN", name:"Tennessee", url:"/insurance/aetna/tennessee" },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://teledirectmd.com/#organization",
      "name": "TeleDirectMD",
      "url": "https://teledirectmd.com",
      "logo": "https://teledirectmd.com/logo.png",
      "description": "Physician-led telemedicine practice accepting Aetna commercial insurance in 10 states.",
      "medicalSpecialty": "General Practice",
      "availableService": { "@type": "MedicalTherapy", "name": "Telehealth Video Visit" },
      "aggregateRating": getAggregateRating(),
    },
    {
      "@type": "Physician",
      "@id": "https://teledirectmd.com/#physician",
      "name": "Parth Bhavsar, MD",
      "url": "https://teledirectmd.com/about",
      "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" },
      "medicalSpecialty": "Family Medicine",
      "availableService": { "@type": "MedicalTherapy", "name": "Telehealth Video Consultation" },
      "acceptsInsurance": [
        { "@type": "HealthInsurancePlan", "name": "Aetna Commercial Plans", "includesHealthPlanFormulary": { "@type": "HealthPlanFormulary", "offersPrescriptionDrug": true } }
      ],
      ...getReviewBlock(),
    },
    {
      "@type": "FAQPage",
      "mainEntity": AETNA_FAQS.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/<[^>]+>/g,'') }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://teledirectmd.com" },
        { "@type": "ListItem", "position": 2, "name": "Insurance", "item": "https://teledirectmd.com/insurance" },
        { "@type": "ListItem", "position": 3, "name": "Aetna", "item": "https://teledirectmd.com/insurance/aetna" },
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://teledirectmd.com/insurance/aetna#webpage",
      "url": "https://teledirectmd.com/insurance/aetna",
      "name": "Online Doctor That Accepts Aetna Insurance | TeleDirectMD",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["[data-speakable]"] }
    },
    {
      "@type": "HowTo",
      "name": "How to book an Aetna-covered telemedicine visit with TeleDirectMD",
      "description": "Three steps to see Dr. Parth Bhavsar, MD by video using your Aetna commercial plan.",
      "totalTime": "PT5M",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Verify Aetna coverage", "text": "Confirm your Aetna commercial plan is active in Arizona, Colorado, Florida, Georgia, Illinois, Michigan, Minnesota, Ohio, Pennsylvania, or Tennessee by checking your member ID card." },
        { "@type": "HowToStep", "position": 2, "name": "Book online", "text": "Go to teledirectmd.com/book-online and choose 'Insurance' as your payment method. Enter your Aetna member ID." },
        { "@type": "HowToStep", "position": 3, "name": "See the physician by video", "text": "Join your video visit with Dr. Parth Bhavsar, MD. Pay only your Aetna copay. Prescriptions are sent to your pharmacy immediately after the visit." }
      ]
    }
  ]
};

export default function AetnaHubClient() {
  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <Breadcrumb items={[
        { label:"Home", href:"/" },
        { label:"Insurance", href:"/insurance" },
        { label:"Aetna" },
      ]} />

      {/* HERO */}
      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c={insurer.color} s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:insurer.colorLight, letterSpacing:"0.04em", textTransform:"uppercase" }}>Aetna In-Network Provider</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(30px, 5vw, 46px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>
            Online Doctor Visits<br />Covered by Aetna
          </h1>
          <p data-speakable="true" style={{ fontFamily:B.fb, fontSize:"clamp(16px, 2.5vw, 19px)", color:"rgba(255,255,255,0.75)", lineHeight:1.6, margin:"0 0 28px", maxWidth:580 }}>
            TeleDirectMD is in-network with Aetna commercial plans in 10 states. See a board-certified physician by video today — your standard Aetna copay applies.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
              <Ico.Cal c={B.white} s={18} /> Book with Aetna
            </a>
            <a href="/insurance"
              style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 24px", background:"rgba(255,255,255,0.1)", color:B.white, borderRadius:B.rs, fontWeight:600, fontSize:15, textDecoration:"none", border:"1px solid rgba(255,255,255,0.2)" }}>
              Check Other Insurance
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>

        {/* QUICK TRUST BAR */}
        <div style={{ margin:"32px 0" }}>
          <TrustBar />
        </div>

        {/* QUICK ANSWER — AI visibility */}
        <AnswerBlock
          question="Is TeleDirectMD in-network with Aetna?"
          answer="Yes. TeleDirectMD accepts Aetna commercial insurance in 10 states: Arizona, Colorado, Florida, Georgia, Illinois, Michigan, Minnesota, Ohio, Pennsylvania, and Tennessee. Book a same-day video visit with Dr. Parth Bhavsar, MD — your standard Aetna copay applies."
          color={B.teal}
        />

        {/* WHAT'S COVERED */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>What Conditions Does Aetna Cover at TeleDirectMD?</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>
            Aetna covers telehealth visits for a wide range of conditions. Below are the most commonly treated conditions at TeleDirectMD that Aetna commercial plans typically cover. Coverage is subject to your plan's specific benefits.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:10 }}>
            {CONDITIONS_COVERED.map((cond, i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 16px", boxShadow:B.shadow }}>
                <Ico.Check c="#1A7A3A" s={16} />
                <span style={{ fontSize:14, fontWeight:500, color:B.navy }}>{cond}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize:13, color:B.text, margin:"16px 0 0", lineHeight:1.6 }}>
            See the full list on our <a href="/what-we-treat" style={{ color:B.teal }}>What We Treat</a> page. Conditions requiring DEA-scheduled controlled substances are not treated via telehealth.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>How to Use Your Aetna Insurance with TeleDirectMD</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>Three simple steps to see a physician using your Aetna benefits.</p>
          <HowItWorksSteps insurerName="Aetna" />
        </section>

        {/* COST SECTION */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>What Will My Aetna Visit Cost?</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>Your cost depends on your specific Aetna plan. Here is a general overview:</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap:16 }}>
            {[
              { title:"With Aetna Insurance", color:insurer.color, colorLight:insurer.colorLight, items:["Standard Aetna telehealth copay ($0–$40 for most plans)","Deductible applies if not yet met","Coinsurance may apply after deductible","Contact Aetna to verify your exact cost"] },
              { title:"Without Insurance (Self-Pay)", color:B.accent, colorLight:"#FFF0EC", items:["Flat $49 per visit — always","No copay, no deductible, no surprise bills","No insurance needed","Available in all 40+ licensed states"] },
            ].map((card, i) => (
              <div key={i} style={{ background:B.white, border:`2px solid ${card.color}22`, borderRadius:B.r, padding:"24px 20px", borderTop:`3px solid ${card.color}`, boxShadow:B.shadow }}>
                <h3 style={{ fontFamily:B.fd, fontSize:18, fontWeight:700, color:B.navy, margin:"0 0 16px" }}>{card.title}</h3>
                {card.items.map((item, j) => (
                  <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:10, marginBottom:10 }}>
                    <Ico.Check c={card.color} s={15} />
                    <span style={{ fontSize:14, color:B.text, lineHeight:1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* STATES GRID */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>States Where We Accept Aetna Insurance</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>
            TeleDirectMD is in-network with Aetna commercial plans in the following states. Click your state for detailed coverage information.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))", gap:10 }}>
            {AETNA_STATES.map((st) => (
              <a key={st.code} href={st.url}
                style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:B.white, border:`1px solid ${insurer.color}22`, borderRadius:B.rs, padding:"14px 16px", textDecoration:"none", boxShadow:B.shadow, transition:"border-color 0.2s" }}>
                <div>
                  <div style={{ fontSize:15, fontWeight:700, color:B.navy }}>{st.name}</div>
                  <div style={{ fontSize:12, color:insurer.color, fontWeight:600, marginTop:2 }}>Aetna In-Network</div>
                </div>
                <Ico.Arrow c={B.text} s={14} />
              </a>
            ))}
          </div>
          <p style={{ fontSize:13, color:B.text, margin:"16px 0 0" }}>
            Not seeing your state? <a href="/insurance" style={{ color:B.teal }}>Check all insurance options</a> or book a self-pay visit for $49.
          </p>
        </section>

        {/* BOOK CTA */}
        <section style={{ marginBottom:48 }}>
          <BookCTA insurerName="Aetna" />
        </section>

        {/* FAQ */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Aetna & TeleDirectMD: Frequently Asked Questions</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.5 }}>Everything you need to know about using your Aetna benefits with TeleDirectMD.</p>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {AETNA_FAQS.map((faq, i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        {/* EXPLORE LINKS */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 16px" }}>Explore Aetna Coverage by Condition</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))", gap:10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond, i) => (
              <a key={i} href={`/insurance/aetna/${cond.slug}`}
                style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"14px 16px", textDecoration:"none", boxShadow:B.shadow }}>
                <div style={{ fontSize:14, fontWeight:600, color:B.navy, marginBottom:2 }}>Aetna + {cond.name}</div>
                <div style={{ fontSize:12, color:B.text }}>Does Aetna cover {cond.name.toLowerCase()}?</div>
              </a>
            ))}
          </div>
        </section>

        {/* FEATURED DEEP COVERAGE — internal linking to triple-matrix pages */}
        <section style={{ marginBottom:48 }} data-speakable="true">
          <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Popular Aetna Coverage in Top Markets</h2>
          <p style={{ fontSize:14, color:B.text, margin:"0 0 16px", lineHeight:1.6 }}>Most-searched in-network Aetna telemedicine combinations at TeleDirectMD:</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:10 }}>
            <a href="/insurance/aetna/georgia/uti-treatment" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>UTI treatment covered by Aetna in Georgia →</a>
            <a href="/insurance/aetna/florida/sinus-infection" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Sinus infection covered by Aetna in Florida →</a>
            <a href="/insurance/aetna/pennsylvania/strep-throat" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Strep throat covered by Aetna in Pennsylvania →</a>
            <a href="/insurance/aetna/ohio/flu-treatment" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Flu treatment covered by Aetna in Ohio →</a>
            <a href="/insurance/aetna/illinois/ear-infection" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Ear infection covered by Aetna in Illinois →</a>
            <a href="/insurance/aetna/tennessee/pink-eye" style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow, color:B.navy }}>Pink eye covered by Aetna in Tennessee →</a>
          </div>
        </section>

        <div style={{ marginBottom:48 }}>
          <InsuranceDisclaimer />
        </div>
      </div>
    </div>
  );
}
