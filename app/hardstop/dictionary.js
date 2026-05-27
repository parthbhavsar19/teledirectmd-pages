// Hard-stop dictionary for pediatric intake red flags.
// Severity levels: "911" | "urgent_care" | "in_person_pcp" | "telehealth_alt"
// Copy written at ~3rd-grade reading level for stressed parents.

export const HARD_STOPS = {
  HS8: {
    title: "A parent or legal guardian must be on the video visit",
    severity: "telehealth_alt",
    message:
      "Our pediatric video visits require a parent or legal guardian to be on camera with the child for the entire visit. This is a legal and safety requirement for telehealth care of minors. We're sorry we can't proceed today.",
    recommended_action:
      "Please rebook the visit at a time when a parent or legal guardian can be present on camera with your child.",
    cta_label: "Rebook a visit",
    cta_url: "/book-online",
  },

  HS9: {
    title: "Pregnancy-related care needs in-person evaluation",
    severity: "in_person_pcp",
    message:
      "You indicated that your child is pregnant, breastfeeding, or could become pregnant. Treatment choices for this age group need to be carefully selected, and we recommend an in-person visit with a pediatrician or OB/GYN who can do a full exam and order any needed tests.",
    recommended_action:
      "Schedule an in-person visit with your child's pediatrician or an OB/GYN this week. If you don't have one, call your insurance to find an in-network provider.",
    cta_label: "Find a pediatrician near me",
    cta_url:
      "https://www.google.com/maps/search/pediatrician+near+me",
  },

  HS10: {
    title: "Fever above 102°F needs urgent in-person care",
    severity: "urgent_care",
    message:
      "A fever above 102°F (39°C) right now in a child needs hands-on evaluation. A clinician needs to listen to the lungs, check the throat, look in the ears, and watch how your child is breathing — things we can't do safely over video.",
    recommended_action:
      "Take your child to a pediatric urgent care today. If they look very sick, are unusually sleepy, or have trouble breathing, go to the ER or call 911.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS11: {
    title: "Call 911 now — trouble breathing",
    severity: "911",
    message:
      "Trouble breathing, ribs sucking in with each breath, or being unable to speak in full sentences are emergencies. Your child needs immediate help.",
    recommended_action:
      "Call 911 right now. Stay calm and stay with your child. If you have a rescue inhaler, use it while you wait for help to arrive.",
    cta_label: "Call 911",
    cta_url: "tel:911",
  },

  HS12: {
    title: "Vomiting and dehydration need urgent care",
    severity: "urgent_care",
    message:
      "Vomiting that won't stop for more than 24 hours, or signs of dehydration like a dry mouth, no tears, no wet diapers, or sunken eyes, means your child needs fluids and an in-person exam right away.",
    recommended_action:
      "Take your child to a pediatric urgent care or ER today. If they are very sleepy, very weak, or can't keep down even small sips of water, go to the ER.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS13: {
    title: "Call 911 now — your child is not acting normally",
    severity: "911",
    message:
      "Confusion, unusual sleepiness, or being impossible to comfort can be signs of a serious illness. This needs emergency evaluation right now — not a video visit.",
    recommended_action:
      "Call 911 right now or go to the nearest emergency room. Stay with your child and watch their breathing.",
    cta_label: "Call 911",
    cta_url: "tel:911",
  },

  HS14: {
    title: "Call 911 now — stiff neck and light sensitivity",
    severity: "911",
    message:
      "A stiff neck or strong sensitivity to light, especially with a fever, can be signs of meningitis or another serious infection. This is an emergency.",
    recommended_action:
      "Call 911 right now or go straight to the nearest emergency room. Do not wait.",
    cta_label: "Call 911",
    cta_url: "tel:911",
  },

  HS15: {
    title: "Recent serious injury needs in-person evaluation",
    severity: "urgent_care",
    message:
      "A significant head, belly, or other injury in the last 24 hours needs a hands-on exam. We can't safely assess injuries over video.",
    recommended_action:
      "Go to a pediatric urgent care or ER today. If your child lost consciousness, is throwing up, has severe pain, or is acting differently, go straight to the ER or call 911.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS16: {
    title: "Call 911 now — your child looks very ill",
    severity: "911",
    message:
      "Skin that looks mottled, gray, or blue, or a child who looks very sick to you, is a medical emergency. Trust your gut as a parent.",
    recommended_action:
      "Call 911 right now. Keep your child warm and stay with them until help arrives.",
    cta_label: "Call 911",
    cta_url: "tel:911",
  },

  HS17: {
    title: "Call 911 now — seizure activity",
    severity: "911",
    message:
      "A new seizure, or seizure-like shaking, jerking, or staring spells, needs emergency care. This is not safe to handle over a video visit.",
    recommended_action:
      "Call 911 right now. Lay your child on their side, do not put anything in their mouth, and time how long the seizure lasts so you can tell the medics.",
    cta_label: "Call 911",
    cta_url: "tel:911",
  },

  HS18: {
    title: "Call Poison Control now — possible poisoning",
    severity: "911",
    message:
      "If your child may have swallowed medication, cleaning products, or other chemicals, you need expert help right now. Poison Control is open 24/7 and free.",
    recommended_action:
      "Call Poison Control at 1-800-222-1222 right now. If your child is unconscious, having trouble breathing, or having a seizure, call 911 instead.",
    cta_label: "Call Poison Control",
    cta_url: "tel:1-800-222-1222",
  },

  HS19: {
    title: "Help is available for child safety concerns",
    severity: "in_person_pcp",
    message:
      "If you have concerns that a child is being harmed or neglected, please reach out for help. Trained counselors at Childhelp are available 24/7 and the call is free and confidential.",
    recommended_action:
      "Call Childhelp at 1-800-422-4453 to talk to a counselor. If a child is in immediate danger, call 911. We also recommend an in-person visit with your child's pediatrician.",
    cta_label: "Call Childhelp 1-800-422-4453",
    cta_url: "tel:1-800-422-4453",
  },

  HS20: {
    title: "Swollen eye with fever needs urgent care",
    severity: "urgent_care",
    message:
      "A swollen eyelid with a fever, or an eye that looks like it's pushed forward, can be a serious infection behind the eye (orbital cellulitis). This needs an in-person exam and possibly imaging today.",
    recommended_action:
      "Take your child to a pediatric urgent care or ER today. Do not wait until tomorrow.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS21: {
    title: "Severe eye pain needs urgent care",
    severity: "urgent_care",
    message:
      "Severe eye pain in a child is not typical for everyday pink eye. It can mean a scratch on the cornea, a foreign object, or another problem that needs a hands-on eye exam today.",
    recommended_action:
      "Take your child to a pediatric urgent care or eye doctor today. If pain came after an injury or chemical splash, go to the ER.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS22: {
    title: "Sudden vision change needs urgent care",
    severity: "urgent_care",
    message:
      "Sudden blurry vision, double vision, or any vision change that doesn't go away can be a sign of a serious eye or brain problem and needs same-day care.",
    recommended_action:
      "Take your child to a pediatric urgent care or ER today. An eye doctor (ophthalmologist) may also be able to see them urgently.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS23: {
    title: "Severe light sensitivity needs urgent care",
    severity: "urgent_care",
    message:
      "When light truly hurts your child's eye (true photophobia), it can mean inflammation deep in the eye or in the brain lining. This needs same-day evaluation, not a video visit.",
    recommended_action:
      "Take your child to a pediatric urgent care or ER today. If they also have a stiff neck, headache, or fever, call 911.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS24: {
    title: "Eye glued shut from discharge needs in-person care",
    severity: "in_person_pcp",
    message:
      "Discharge so thick that the eyelid is sealed shut for more than a brief moment can be a heavy bacterial infection that needs a hands-on exam, possibly a culture, and prescription drops.",
    recommended_action:
      "Schedule a same-day or next-day in-person visit with your child's pediatrician or a pediatric urgent care.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS25: {
    title: "White spot on the eye needs urgent care",
    severity: "urgent_care",
    message:
      "A white spot on the colored part of the eye (the cornea) can mean a corneal ulcer, which can damage vision if not treated quickly. This is not safe to manage over video.",
    recommended_action:
      "Go to a pediatric urgent care or ER today, or call an eye doctor (ophthalmologist) for an urgent appointment.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS26: {
    title: "Contact lens + eye symptoms need an eye doctor",
    severity: "in_person_pcp",
    message:
      "Children who wear contact lenses and have eye redness, pain, or discharge are at higher risk for serious corneal infections. They need an in-person eye exam, not a video visit.",
    recommended_action:
      "Stop wearing the contacts right now. Call an eye doctor (ophthalmologist or optometrist) for a same-day or next-day appointment. If pain is severe or vision is changing, go to a pediatric urgent care or ER today.",
    cta_label: "Find an eye doctor",
    cta_url: "https://www.google.com/maps/search/ophthalmologist+near+me",
  },

  HS27: {
    title: "Eye injury or chemical splash needs urgent care",
    severity: "urgent_care",
    message:
      "Any recent eye injury or chemical splash in the eye is an emergency. For chemicals, every minute counts.",
    recommended_action:
      "If a chemical got in the eye, rinse with lots of clean water for 15 minutes, then go to the ER or call 911. For any other eye injury, go to a pediatric urgent care or ER today.",
    cta_label: "Find emergency care",
    cta_url:
      "https://www.google.com/maps/search/emergency+room+near+me",
  },

  HS28: {
    title: "Blisters near the eye need urgent care",
    severity: "urgent_care",
    message:
      "Blisters or sores around the eyelid or face — especially if they look like small clear bumps — can be a herpes (HSV) infection. If it gets near or in the eye, it can damage vision. This needs same-day care.",
    recommended_action:
      "Take your child to a pediatric urgent care or eye doctor today. Do not let your child rub the eye and wash hands often.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS29: {
    title: "Clustered blisters with fever need urgent care",
    severity: "urgent_care",
    message:
      "Tight clusters of small punched-out blisters along with a fever can be eczema herpeticum, a herpes infection on top of eczema. This needs same-day antiviral medicine and in-person evaluation.",
    recommended_action:
      "Take your child to a pediatric urgent care or ER today.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS30: {
    title: "Call 911 now — widespread peeling skin",
    severity: "911",
    message:
      "Red, peeling skin over much of the body can be a life-threatening reaction such as Stevens-Johnson syndrome or staphylococcal scalded skin syndrome. This is an emergency.",
    recommended_action:
      "Call 911 right now or go straight to the nearest emergency room.",
    cta_label: "Call 911",
    cta_url: "tel:911",
  },

  HS31: {
    title: "Spreading impetigo with fever needs urgent care",
    severity: "urgent_care",
    message:
      "Honey-colored crusts on the skin with fever and red, spreading skin around them can be impetigo with a deeper infection. This needs same-day evaluation and likely oral antibiotics.",
    recommended_action:
      "Take your child to a pediatric urgent care today. Keep the area covered and wash hands well.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS32: {
    title: "Rapidly spreading rash needs urgent care",
    severity: "urgent_care",
    message:
      "A rash that grows more than a few inches in 24 hours, or moves quickly across the body, can mean a serious skin or blood infection. It needs same-day evaluation.",
    recommended_action:
      "Take your child to a pediatric urgent care today. If your child also has fever, vomiting, fast breathing, or looks very sick, go to the ER or call 911.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS33: {
    title: "Severe pain or swelling at the rash needs urgent care",
    severity: "urgent_care",
    message:
      "Severe pain, swelling, warmth, or a hard area under a rash can be a deeper skin infection (cellulitis or abscess) that needs in-person treatment, possibly drainage or IV medicine.",
    recommended_action:
      "Take your child to a pediatric urgent care or ER today.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS34: {
    title: "Sick-looking child with fever needs urgent care",
    severity: "urgent_care",
    message:
      "When a child looks ill, sleepy, or has a high fever, a hands-on exam is needed to listen to the lungs, look in the ears, and check for signs of more serious infection.",
    recommended_action:
      "Take your child to a pediatric urgent care today. If they are very sleepy, very weak, breathing fast, or hard to wake, go to the ER or call 911.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS35: {
    title: "Eczema not responding to steroids needs dermatology",
    severity: "in_person_pcp",
    message:
      "Eczema that has not improved on two or more prescription steroid creams needs a dermatologist or pediatrician for an in-person exam. There are other treatments that work well, but they need a careful evaluation first.",
    recommended_action:
      "Schedule an appointment with a pediatric dermatologist or your child's pediatrician this week.",
    cta_label: "Find a pediatric dermatologist",
    cta_url:
      "https://www.google.com/maps/search/pediatric+dermatologist+near+me",
  },

  HS37: {
    title: "Fever + swollen lumps behind ears needs urgent care",
    severity: "urgent_care",
    message:
      "Tender, swollen lumps behind the ears along with a fever can mean a deeper scalp or skin infection that goes beyond simple lice. This needs same-day evaluation.",
    recommended_action:
      "Take your child to a pediatric urgent care today.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS38: {
    title: "Lice on eyelashes needs an eye doctor",
    severity: "in_person_pcp",
    message:
      "Lice on the eyelashes (called phthiriasis palpebrarum) need to be treated by an eye doctor. We can't safely use regular lice medicine near the eyes.",
    recommended_action:
      "Schedule a same-day or next-day appointment with an eye doctor (ophthalmologist). Until then, do not put any lice medicine in or near the eyes.",
    cta_label: "Find an eye doctor",
    cta_url: "https://www.google.com/maps/search/ophthalmologist+near+me",
  },

  HS39: {
    title: "Lice still present after 2+ treatments — see PCP",
    severity: "in_person_pcp",
    message:
      "If your child still has live lice after two or more proper treatments, it may be a resistant strain or the medicine wasn't used the right way. Your pediatrician can prescribe a prescription-strength treatment after a hands-on exam.",
    recommended_action:
      "Schedule an in-person visit with your child's pediatrician this week to discuss prescription options.",
    cta_label: "Find a pediatrician near me",
    cta_url:
      "https://www.google.com/maps/search/pediatrician+near+me",
  },

  HS40: {
    title: "Open scalp wounds need urgent care",
    severity: "urgent_care",
    message:
      "Open sores, deep scratches, or a serious scalp injury need an in-person exam before any lice treatment. Putting lice medicine on broken skin can be unsafe.",
    recommended_action:
      "Take your child to a pediatric urgent care today.",
    cta_label: "Find pediatric urgent care",
    cta_url:
      "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
  },

  HS42: {
    title: "Recent asthma ER or hospital stay needs a specialist",
    severity: "in_person_pcp",
    message:
      "An ER visit or hospital stay for asthma in the past 3 months means your child's asthma is not well controlled. They need a full review of their treatment plan by their pediatrician or an asthma specialist (pulmonologist or allergist) — not a refill over video.",
    recommended_action:
      "Schedule an in-person visit with your child's pediatrician or asthma specialist this week.",
    cta_label: "Find an asthma specialist",
    cta_url:
      "https://www.google.com/maps/search/pediatric+pulmonologist+near+me",
  },

  HS43: {
    title: "Asthma refills require a prior diagnosis",
    severity: "in_person_pcp",
    message:
      "We can only refill asthma medicine when a doctor has already diagnosed your child with asthma. A first-time diagnosis needs a hands-on exam, and sometimes lung-function testing, that we can't safely do by video.",
    recommended_action:
      "Schedule an in-person visit with your child's pediatrician to be evaluated for asthma.",
    cta_label: "Find a pediatrician near me",
    cta_url:
      "https://www.google.com/maps/search/pediatrician+near+me",
  },

  HS46: {
    title: "Call 911 now — current breathing problems",
    severity: "911",
    message:
      "If your child has chest tightness, wheezing, or trouble breathing right now, this is an emergency. Do not wait.",
    recommended_action:
      "Call 911 right now. If your child has a rescue inhaler (like albuterol), use it while you wait for help.",
    cta_label: "Call 911",
    cta_url: "tel:911",
  },
};

// Generic fallback when code is missing, invalid, or unrecognized.
export const FALLBACK = {
  title: "Please get in-person care for this concern",
  severity: "in_person_pcp",
  message:
    "Based on what you shared, this concern needs an in-person exam — not a video visit. We want your child to get the right care, so we're directing you to providers who can examine your child hands-on.",
  recommended_action:
    "If this is an emergency, call 911 or go to the nearest emergency room. Otherwise, contact your child's pediatrician or a local pediatric urgent care today.",
  cta_label: "Find pediatric urgent care",
  cta_url:
    "https://www.google.com/maps/search/pediatric+urgent+care+near+me",
};

// Severity → display config (colors match brand + accessibility requirements)
export const SEVERITY = {
  "911": {
    label: "EMERGENCY — CALL 911",
    bg: "#FEE2E2",
    border: "#DC2626",
    text: "#7F1D1D",
    accent: "#DC2626",
    icon: "alert",
  },
  urgent_care: {
    label: "URGENT — SAME-DAY IN-PERSON CARE NEEDED",
    bg: "#FEF3C7",
    border: "#F59E0B",
    text: "#78350F",
    accent: "#B45309",
    icon: "alert-triangle",
  },
  in_person_pcp: {
    label: "IN-PERSON CARE NEEDED",
    bg: "#DBEAFE",
    border: "#2563EB",
    text: "#1E3A8A",
    accent: "#2563EB",
    icon: "info",
  },
  telehealth_alt: {
    label: "PLEASE REBOOK",
    bg: "#F3F4F6",
    border: "#6B7280",
    text: "#374151",
    accent: "#4B5563",
    icon: "info",
  },
};
