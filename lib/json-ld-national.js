import { getAggregateRating, getReviewBlock } from './review-schema';

export function generateNationalJsonLd(condition) {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/${condition.conditionSlug}`;
  const today = new Date().toISOString().split('T')[0];
  const jld = condition.jsonLd;
  const refs = condition.references || [];

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      "url": baseUrl,
      "name": "TeleDirectMD",
      "publisher": { "@id": `${baseUrl}#organization` },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        },
        {
          "@type": "ReserveAction",
          "name": "Book a TeleDirectMD video visit",
          "target": `${baseUrl}/book`
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumbs`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
        { "@type": "ListItem", "position": 2, "name": "What We Treat", "item": `${baseUrl}/what-we-treat` },
        { "@type": "ListItem", "position": 3, "name": condition.conditionName, "item": pageUrl }
      ]
    },
    {
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
      "name": "TeleDirectMD",
      "url": baseUrl,
      "telephone": "+1-678-956-1855",
      "email": "contact@teledirectmd.com",
      "logo": `${baseUrl}/assets/brand/teledirectmd-logo.png`,
      "description": "TeleDirectMD is an MD-only virtual urgent care service offering secure video visits for adults across multiple states, using evidence-based evaluation and safety-first triage. Insurance is not required but is accepted in select states. TeleDirectMD does not prescribe controlled substances.",
      "areaServed": "United States",
      "medicalSpecialty": ["Primary Care", "Family Medicine", "Telemedicine"],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-678-956-1855",
          "contactType": "customer service",
          "availableLanguage": ["en", "hi"]
        }
      ]
    },
    {
      "@type": "MedicalOrganization",
      "@id": `${baseUrl}#medical-organization`,
      "name": "TeleDirectMD",
      "url": baseUrl,
      "parentOrganization": { "@id": `${baseUrl}#organization` },
      "aggregateRating": getAggregateRating()
    },
    {
      "@type": "Physician",
      "@id": `${baseUrl}/about#physician`,
      "name": "Parth Bhavsar, MD",
      "url": `${baseUrl}/about`,
      "affiliation": { "@id": `${baseUrl}#organization` },
      "knowsAbout": jld.knowsAbout || [],
      ...getReviewBlock()
    },
    {
      "@type": "MedicalAudience",
      "@id": `${pageUrl}#audience`,
      "audienceType": "Patient"
    }
  ];

  // Guidelines
  const guidelineIds = [];
  if (jld.guidelines) {
    for (const g of jld.guidelines) {
      const gId = `${pageUrl}#guideline-${g.id}`;
      guidelineIds.push({ "@id": gId });
      graph.push({
        "@type": "MedicalGuideline",
        "@id": gId,
        "name": g.name,
        "url": g.url,
        "publisher": { "@type": "Organization", "name": g.publisher }
      });
    }
  }

  // MedicalWebPage
  graph.push({
    "@type": "MedicalWebPage",
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
    "name": condition.hero.h1,
    "description": jld.webpageDescription,
    "inLanguage": "en-US",
    "breadcrumb": { "@id": `${pageUrl}#breadcrumbs` },
    "isPartOf": { "@id": `${baseUrl}#website` },
    "about": { "@id": `${pageUrl}#condition` },
    "mainEntity": { "@id": `${pageUrl}#condition` },
    "publisher": { "@id": `${baseUrl}#organization` },
    "author": { "@id": `${baseUrl}/about#physician` },
    "datePublished": today,
    "dateModified": today,
    "dateReviewed": today,
    "reviewedBy": { "@id": `${baseUrl}/about#physician` },
    "audience": { "@id": `${pageUrl}#audience` },
    "isBasedOn": guidelineIds,
    "citation": refs.map((r) => r.url),
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        ".tdmd-hero-sub",
        `#${condition.conditionSlug}-faq .tdmd-faq-question`
      ]
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "@id": `${baseUrl}/assets/social/tdmd-${condition.conditionSlug}-og.png`,
      "url": `${baseUrl}/assets/social/tdmd-${condition.conditionSlug}-og.png`
    }
  });

  // Anatomy
  if (jld.anatomy) {
    graph.push({
      "@type": "AnatomicalStructure",
      "@id": `${pageUrl}#anatomy`,
      "name": jld.anatomy
    });
  }

  // Risk factors
  const riskFactorIds = [];
  if (jld.riskFactors) {
    for (let i = 0; i < jld.riskFactors.length; i++) {
      const rfId = `${pageUrl}#risk-${i}`;
      riskFactorIds.push({ "@id": rfId });
      graph.push({
        "@type": "MedicalRiskFactor",
        "@id": rfId,
        "name": jld.riskFactors[i]
      });
    }
  }

  // Drugs
  const drugIds = [];
  if (jld.drugs) {
    for (const drug of jld.drugs) {
      const dId = `${pageUrl}#drug-${drug.id}`;
      drugIds.push({ "@id": dId });
      graph.push({
        "@type": "Drug",
        "@id": dId,
        "name": drug.name
      });
    }
  }

  // MedicalCondition
  graph.push({
    "@type": "MedicalCondition",
    "@id": `${pageUrl}#condition`,
    "name": jld.conditionName,
    "alternateName": jld.conditionAlternateNames || [],
    "description": jld.conditionDescription,
    "code": { "@type": "MedicalCode", "code": jld.primaryIcd10, "codingSystem": "ICD-10-CM" },
    ...(jld.anatomy ? { "associatedAnatomy": { "@id": `${pageUrl}#anatomy` } } : {}),
    "signOrSymptom": (jld.symptoms || []).map((s) => ({ "@type": "MedicalSymptom", "name": s })),
    "riskFactor": riskFactorIds,
    "possibleComplication": jld.complications || [],
    "epidemiology": jld.epidemiology || "",
    "drug": drugIds,
    "possibleTreatment": [
      ...drugIds,
      ...(jld.treatments || []).map((t) => ({ "@type": "MedicalTherapy", "name": t }))
    ],
    "typicalTest": (jld.tests || []).map((t) => ({ "@type": "MedicalTest", "name": t })),
    "relevantSpecialty": (jld.specialties || []).map((s) => ({ "@type": "MedicalSpecialty", "name": s })),
    "guideline": guidelineIds
  });

  // MedicalProcedure (service) — national, all states
  graph.push({
    "@type": "MedicalProcedure",
    "@id": `${pageUrl}#service`,
    "name": `Adult ${condition.conditionName} Video Visit`,
    "procedureType": "Telemedicine consultation",
    "description": jld.serviceDescription,
    "areaServed": { "@type": "Country", "name": "United States" },
    "howPerformed": "Secure real-time video consultation with symptom review, red-flag screening, and treatment planning.",
    "offers": {
      "@type": "Offer",
      "url": `${baseUrl}/book`,
      "price": "49",
      "priceCurrency": "USD",
      "description": "Transparent self pay option starting at $49 for an adult video visit. Insurance is not required but select plans are accepted in some states.",
      "eligibleRegion": "US",
      "availability": "https://schema.org/InStock"
    }
  });

  // Pharmacies
  const pharmacyNames = ['CVS Pharmacy', 'Walgreens', 'Walmart Pharmacy'];
  for (const pName of pharmacyNames) {
    const pId = pName.toLowerCase().replace(/[^a-z0-9]/g, '');
    graph.push({
      "@type": "Pharmacy",
      "@id": `${pageUrl}#pharmacy-${pId}`,
      "name": pName,
      "areaServed": { "@type": "Country", "name": "United States" }
    });
  }

  // FAQPage
  const faqItems = condition.faq?.items || [];
  if (faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "isPartOf": { "@id": `${pageUrl}#webpage` },
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer }
      }))
    });
  }

  // HowTo — booking steps (national)
  graph.push({
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    "name": `How to See a Doctor Online for ${condition.conditionName}`,
    "description": `Book a same-day video visit with a licensed MD for ${condition.conditionName} — available in 40+ states, no waiting room, starting at $49.`,
    "totalTime": "PT15M",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "49" },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Book your visit online",
        "text": `Go to teledirectmd.com/book-online, select ${condition.conditionName} as your reason for visit, and choose a same-day or next-day appointment slot. No referral needed.`,
        "url": `${baseUrl}/book-online`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Complete your intake form",
        "text": "Fill in your symptoms, medical history, current medications, and any allergies. This takes about 2 minutes and lets your physician prepare before your visit."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "See your MD via secure video",
        "text": "Connect with a board-certified physician through an encrypted video call. Your doctor will review your symptoms, perform a clinical assessment, and discuss your treatment options. TeleDirectMD is available in 40+ states."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Receive your treatment plan and prescription",
        "text": "If clinically appropriate, your physician will send a prescription electronically to your preferred pharmacy — typically ready within 1–2 hours. You will also receive written follow-up guidance."
      }
    ]
  });

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}
