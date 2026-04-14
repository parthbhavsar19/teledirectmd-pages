// Condition-specific SVG icons — monochrome, 24x24 viewBox
// All icons use stroke="currentColor" for theming via CSS

const CONDITION_ICONS = {
  // ===== URGENT CARE =====
  'Common Cold': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 11c0-2.8-2.2-5-5-5S5 8.2 5 11"/><path d="M10 6V3"/><path d="M6.5 7.5L4.5 5.5"/><path d="M13.5 7.5l2-2"/><rect x="7" y="11" width="6" height="3" rx="1"/><path d="M8 14v4a2 2 0 0 0 4 0v-4"/><path d="M17 16h2"/><path d="M19.5 13.5l1.5 1.5"/><path d="M19.5 18.5l1.5-1.5"/></svg>`,

  'COVID-19': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="M4.93 4.93l2.12 2.12"/><path d="M16.95 16.95l2.12 2.12"/><path d="M4.93 19.07l2.12-2.12"/><path d="M16.95 7.05l2.12-2.12"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>`,

  'Influenza': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v6a2 2 0 0 1-4 0V4a2 2 0 0 1 4 0z"/><path d="M8.5 14h7a4 4 0 0 1-7 0z"/><path d="M12 18v3"/><path d="M8 10H6"/><path d="M18 10h-2"/><path d="M12 2v0"/><circle cx="12" cy="8" r="0.5" fill="currentColor"/></svg>`,

  'Sinus Infection': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3c-2 0-4 2-4 5 0 2 1 3.5 2 4.5"/><path d="M15 3c2 0 4 2 4 5 0 2-1 3.5-2 4.5"/><path d="M12 6v6"/><path d="M10 20c0-1.5.5-3 2-4 1.5 1 2 2.5 2 4"/><path d="M9 16c-1 0-2 .5-2 2"/><path d="M15 16c1 0 2 .5 2 2"/></svg>`,

  'Sore Throat': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8v4a4 4 0 0 1-8 0V3z"/><path d="M7 7c-1 1-2 3-2 5a7 7 0 0 0 14 0c0-2-1-4-2-5"/><path d="M10 10h4"/><path d="M12 10v3"/></svg>`,

  'Ear Pain': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12a6 6 0 0 1 12 0c0 4-3 6-3 9H9c0-3-3-5-3-9z"/><path d="M9.5 12a2.5 2.5 0 0 1 5 0"/><path d="M12 12v2"/><path d="M3 8l1.5 1"/><path d="M3 16l1.5-1"/></svg>`,

  'Pink Eye': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="1" fill="currentColor"/><path d="M15 9l2-2"/><path d="M17 12h2"/><path d="M15 15l2 2"/></svg>`,

  'Dental Pain': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9 2 7 4 7 7c0 2 .5 3 1 5 .5 1.5 1 4 1.5 6.5.3 1.5 1 2.5 2.5 2.5s2.2-1 2.5-2.5c.5-2.5 1-5 1.5-6.5.5-2 1-3 1-5 0-3-2-5-5-5z"/><path d="M10 7h4"/><path d="M12 5v4"/></svg>`,

  'UTI': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8l-1 7H9L8 3z"/><ellipse cx="12" cy="13" rx="5" ry="3"/><path d="M12 16v5"/><path d="M10 21h4"/><circle cx="12" cy="13" r="1" fill="currentColor"/></svg>`,

  'Cellulitis': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="16" height="12" rx="3"/><path d="M9 10c0 1.5 1.5 3 3 3s3-1.5 3-3"/><path d="M8 15h8"/><path d="M7 3v3"/><path d="M17 3v3"/></svg>`,

  'Shingles': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c2-4 6-8 8-8s6 4 8 8-6 8-8 8-6-4-8-8z"/><path d="M9 10l1 2-1 2"/><path d="M13 10l1 2-1 2"/><circle cx="10" cy="12" r="0.5" fill="currentColor"/><circle cx="14" cy="12" r="0.5" fill="currentColor"/><circle cx="12" cy="9" r="0.5" fill="currentColor"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>`,

  'Gout': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 18c-2 0-4-1.5-4-4s3-6 5-9h0c2 3 5 6 5 9s-2 4-4 4"/><path d="M16 14c-1 0-2-.8-2-2s1.5-3 2.5-4.5C17.5 9 19 11 19 12.5s-1 2.5-2.5 2.5l-.5-1"/><path d="M6 16l1-1"/><path d="M9 17l1-1"/></svg>`,

  'Mastitis': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8c0-2 2-4 6-4s6 2 6 4c0 4-2 8-6 12-4-4-6-8-6-12z"/><circle cx="12" cy="10" r="2"/><path d="M10 10h4"/><path d="M12 8v4"/></svg>`,

  'Viral Gastroenteritis': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6c0 0 1 3 1 6s-1 6-1 6"/><path d="M18 6c0 0-1 3-1 6s1 6 1 6"/><path d="M6 6h12"/><path d="M6 18h12"/><path d="M9 10h6"/><path d="M8 14h8"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>`,

  'Impetigo': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="3.5"/><circle cx="15" cy="14" r="3"/><circle cx="8" cy="15" r="2.5"/><circle cx="10" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="14" r="0.8" fill="currentColor"/></svg>`,

  'Oral Thrush': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8c0-2 2-4 5-4s5 2 5 4"/><path d="M6 8c0 5 2 8 6 12 4-4 6-7 6-12"/><path d="M9 10h6"/><circle cx="10" cy="13" r="0.8" fill="currentColor"/><circle cx="14" cy="12" r="0.8" fill="currentColor"/><circle cx="12" cy="15" r="0.8" fill="currentColor"/></svg>`,

  // ===== WOMEN'S HEALTH =====
  'Yeast Infection': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="6"/><path d="M12 16v5"/><path d="M9 21h6"/><path d="M10 8a2 2 0 0 1 4 0c0 1.5-2 2.5-2 4"/><circle cx="12" cy="13.5" r="0.5" fill="currentColor"/></svg>`,

  'Bacterial Vaginosis': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="7" ry="8"/><path d="M9 9c0 0 1.5 2 3 2s3-2 3-2"/><path d="M9 15c0 0 1.5-1 3-1s3 1 3 1"/><path d="M12 11v2"/></svg>`,

  'Vaginal Dryness': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 4-6 7-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11z"/><path d="M10 13h4"/><path d="M10 16h4"/></svg>`,

  'Birth Control Refills': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="4" y1="8" x2="20" y2="8"/><circle cx="8" cy="11.5" r="0.8" fill="currentColor"/><circle cx="12" cy="11.5" r="0.8" fill="currentColor"/><circle cx="16" cy="11.5" r="0.8" fill="currentColor"/><circle cx="8" cy="15" r="0.8" fill="currentColor"/><circle cx="12" cy="15" r="0.8" fill="currentColor"/><circle cx="16" cy="15" r="0.8" fill="currentColor"/><circle cx="8" cy="18" r="0.8" fill="currentColor"/></svg>`,

  // ===== SEXUAL HEALTH =====
  'Chlamydia': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><path d="M12 8v3l2 2"/><path d="M8.5 14c1 1.5 2 2 3.5 2s2.5-.5 3.5-2"/><circle cx="12" cy="5" r="1" fill="currentColor"/></svg>`,

  'Genital Herpes': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8A5 5 0 0 0 7 8c0 4 5 8 5 12 0-4 5-8 5-12z"/><path d="M12 8v2"/><path d="M10.5 9h3"/></svg>`,

  'Cold Sore': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12c0-4 2.7-7 6-7s6 3 6 7c0 3-2 5-6 7-4-2-6-4-6-7z"/><path d="M9 11h6"/><path d="M9 14c1.5 1.5 4.5 1.5 6 0"/></svg>`,

  'Genital Warts': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18c1-3 2-6 3-7"/><path d="M10 18c1-4 1.5-7 2-9"/><path d="M14 18c.5-3 1-5 2-7"/><path d="M18 18c-.5-2-1-4-2-5"/><path d="M4 18h16"/><circle cx="9" cy="9" r="1.5"/><circle cx="14" cy="10" r="1.2"/></svg>`,

  'Trichomoniasis': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="13" rx="5" ry="6"/><path d="M9 7c1-2 2-3 3-4"/><path d="M12 7c0-2 .5-3 1.5-4"/><path d="M15 8c-1-2-.5-3 .5-4.5"/><circle cx="12" cy="13" r="2"/></svg>`,

  'Mycoplasma Genitalium': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="11" cy="14" rx="5" ry="4"/><path d="M16 13c2-1 4-3 4-5"/><path d="M15 11c1-2 3-3 4-3"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="13" cy="14" r="0.8" fill="currentColor"/></svg>`,

  'DoxyPEP STI Prevention': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v6c0 4.5-3.5 8.5-8 10-4.5-1.5-8-5.5-8-10V7l8-4z"/><path d="M9 12l2 2 4-4"/></svg>`,

  'Erectile Dysfunction': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="8" rx="2"/><path d="M12 11v4"/><path d="M8 18h8"/><path d="M10 18v3"/><path d="M14 18v3"/><path d="M10 7h4"/></svg>`,

  'Performance Anxiety': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M12 15v3"/><path d="M8 21h8"/><path d="M10 7v1"/><path d="M14 7v1"/><path d="M9.5 11c1 1 3.5 1 5 0"/></svg>`,

  // ===== SKIN CONDITIONS =====
  'Acne': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="9" cy="10" r="1.2"/><circle cx="15" cy="10" r="1"/><circle cx="12" cy="14" r="1.5"/><circle cx="8" cy="14" r="0.8"/><circle cx="16" cy="13" r="0.8"/></svg>`,

  'Eczema': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12c0-5 3-9 7-9s7 4 7 9-3 9-7 9-7-4-7-9z"/><path d="M9 8c1 0 2 1 2 3s-1 3-2 3"/><path d="M15 9c-1 0-1.5 1-1.5 2.5s.5 2.5 1.5 2.5"/><path d="M11 15c.5.5 1.5.5 2 0"/></svg>`,

  'Rosacea': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="11" r="8"/><circle cx="8" cy="10" r="2" stroke-dasharray="2 1"/><circle cx="16" cy="10" r="2" stroke-dasharray="2 1"/><path d="M10 15c1 1 3 1 4 0"/><path d="M11 7v1"/><path d="M13 7v1"/></svg>`,

  'Contact Dermatitis': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 10a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0v-4z"/><path d="M9 9l1.5 2L9 13"/><path d="M15 9l-1.5 2L15 13"/><path d="M2 12h3"/><path d="M19 12h3"/></svg>`,

  'Dandruff': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c0-5 3.5-9 8-9s8 4 8 9"/><path d="M6 12c1 4 3 7 6 9 3-2 5-5 6-9"/><circle cx="8" cy="7" r="0.6" fill="currentColor"/><circle cx="12" cy="5" r="0.6" fill="currentColor"/><circle cx="16" cy="7" r="0.6" fill="currentColor"/><circle cx="10" cy="8" r="0.6" fill="currentColor"/><circle cx="14" cy="6" r="0.6" fill="currentColor"/></svg>`,

  'Psoriasis Refills': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="14" height="14" rx="3"/><path d="M8 9c1-1 2-1 3 0s2 1 3 0"/><path d="M8 13c1-1 2-1 3 0s2 1 3 0"/><path d="M9 16h6"/></svg>`,

  'Skin Fungus': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>`,

  'Tinea Versicolor': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="3"/><circle cx="15" cy="9" r="2.5"/><circle cx="12" cy="14" r="3.5"/><circle cx="7" cy="14" r="2"/><circle cx="17" cy="14" r="2"/></svg>`,

  'Excessive Sweating': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4c-1.5 2.5-3 5-3 7.5a7 7 0 0 0 14 0c0-2.5-1.5-5-3-7.5"/><path d="M12 2v5"/><path d="M9 14h6"/><path d="M10 17h4"/><path d="M12 7l-1 3h2l-1 3"/></svg>`,

  'Poison Ivy & Oak': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V11"/><path d="M12 11c-2-2-5-3-7-1 2.5 0 4 1.5 5 3"/><path d="M12 11c2-2 5-3 7-1-2.5 0-4 1.5-5 3"/><path d="M12 7c-1.5-2-3.5-3-5.5-2 2 .5 3 1.5 3.5 3"/><path d="M12 7c1.5-2 3.5-3 5.5-2-2 .5-3 1.5-3.5 3"/><path d="M12 4c0-1.5-.5-3-1.5-3.5.5 1 .5 2 .5 3"/><path d="M12 4c0-1.5.5-3 1.5-3.5-.5 1-.5 2-.5 3"/></svg>`,

  'Perioral Dermatitis': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="11" r="8"/><path d="M9 14c1.5 1.5 4.5 1.5 6 0"/><circle cx="9" cy="9" r="0.8"/><circle cx="15" cy="9" r="0.8"/><circle cx="8" cy="14" r="0.6" fill="currentColor"/><circle cx="10" cy="16" r="0.6" fill="currentColor"/><circle cx="14" cy="16" r="0.6" fill="currentColor"/><circle cx="16" cy="14" r="0.6" fill="currentColor"/></svg>`,

  'Melasma': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="11" r="8"/><path d="M8 9c1 0 2 1 2 2.5S9 14 8 14"/><path d="M16 9c-1 0-2 1-2 2.5s1 2.5 2 2.5"/><path d="M10 15c1 1 3 1 4 0"/></svg>`,

  // ===== BITES & INFESTATIONS =====
  'Dog Bite': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10c0-3 2-6 4-6 1 0 2 1 2 3h4c0-2 1-3 2-3 2 0 4 3 4 6 0 4-2 7-4 8v3H8v-3c-2-1-4-4-4-8z"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/><path d="M10 14h4"/></svg>`,

  'Cat Bite': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 10V4l3 3h8l3-3v6c0 5-3 8-7 11-4-3-7-6-7-11z"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/><ellipse cx="12" cy="13" rx="1.5" ry="1"/><path d="M10.5 14L9 16"/><path d="M13.5 14l1.5 2"/></svg>`,

  'Tick Bite': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="14" rx="5" ry="6"/><circle cx="12" cy="6" r="3"/><path d="M5 10l-2-1"/><path d="M19 10l2-1"/><path d="M6 14l-3 0"/><path d="M18 14l3 0"/><path d="M7 18l-2 1"/><path d="M17 18l2 1"/></svg>`,

  'Head Lice': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c0-5 3.5-9 8-9s8 4 8 9"/><path d="M6 12c1 4 3 7 6 9 3-2 5-5 6-9"/><path d="M8 10l1 3"/><path d="M12 8v4"/><path d="M16 10l-1 3"/><path d="M10 12l.5 2"/><path d="M14 11l-.5 3"/></svg>`,

  'Scabies': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="7" ry="5"/><path d="M7 9l-2-2"/><path d="M17 9l2-2"/><path d="M6 12l-3 0"/><path d="M18 12l3 0"/><path d="M7 15l-2 2"/><path d="M17 15l2 2"/><circle cx="10" cy="12" r="0.6" fill="currentColor"/><circle cx="14" cy="12" r="0.6" fill="currentColor"/></svg>`,

  // ===== CHRONIC REFILLS =====
  'Asthma Refills': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 14c-1 3 0 5 2 6 1.5.7 3 .7 4.5.3"/><path d="M17 14c1 3 0 5-2 6"/><path d="M7 14c0-4 2-7 5-10 3 3 5 6 5 10"/><path d="M10 12h4"/><path d="M12 10v4"/></svg>`,

  'Hypertension Refills': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4C8 4 4 7 4 12s4 8 8 8 8-4 8-8-4-8-8-8z"/><path d="M12 8v4l2 2"/><path d="M4.5 16h15"/></svg>`,

  'Hypothyroidism Refills': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v3c0 2-1 3-3 4-2-1-3-2-3-4V3z"/><path d="M8 10c-2 1-3 3-3 5a7 7 0 0 0 14 0c0-2-1-4-3-5"/><path d="M12 10v4"/><path d="M10 12h4"/></svg>`,

  'Hyperlipidemia Refills': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4l-8 5v6l8 5 8-5V9l-8-5z"/><path d="M12 9v6"/><path d="M8.5 11.5h7"/><path d="M12 4v5"/><path d="M4 9l8 5"/><path d="M20 9l-8 5"/></svg>`,

  'Diabetes Refills': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 4-6 7-6 10a6 6 0 0 0 12 0c0-3-3-6-6-10z"/><path d="M12 13v4"/><path d="M10 15h4"/></svg>`,

  'Migraine Refills': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 4c-2 2-3 5-3 8s1 6 3 8"/><path d="M8 8l8 8"/><path d="M16 8l-8 8"/><path d="M7 12h10"/></svg>`,

  'Acid Reflux Refills': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 5h10v4c0 3-2 5-5 7-3-2-5-4-5-7V5z"/><path d="M9 12c0 2 1.5 4 3 5 1.5-1 3-3 3-5"/><path d="M12 15v4"/><path d="M10 19h4"/></svg>`,

  'EpiPen Refills': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="16" rx="3"/><path d="M12 18v4"/><path d="M9 6h6"/><path d="M9 10h6"/><path d="M10 14h4"/></svg>`,

  'Seasonal Allergies': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>`,

  // ===== WELLNESS & LIFESTYLE =====
  'Hair Loss': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13c0-5 3.5-10 8-10s8 5 8 10"/><path d="M4 13c0 3 2 5 4 6"/><path d="M20 13c0 3-2 5-4 6"/><path d="M8 19l1-5"/><path d="M12 20V13"/><path d="M16 19l-1-5"/></svg>`,

  'Anti-Aging': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M8 9c.5-.5 1-.5 1.5 0"/><path d="M14.5 9c.5-.5 1-.5 1.5 0"/><path d="M9 14c1.5 2 4.5 2 6 0"/><path d="M5 6l2 2"/><path d="M17 6l-2 2"/></svg>`,

  'Eyelash Growth': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s4-5 10-5 10 5 10 5-4 5-10 5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M5 7l-1-3"/><path d="M9 6l-.5-3"/><path d="M12 5.5V2"/><path d="M15 6l.5-3"/><path d="M19 7l1-3"/></svg>`,

  'Smoking Cessation': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="14" height="4" rx="1"/><path d="M19 14v4"/><path d="M21 14v4"/><path d="M17 10V8c0-1.5-1-3-3-3"/><path d="M19 11V7c0-2-1.5-4-4-4"/><path d="M3 21l18-18" stroke-width="2"/></svg>`,

  'Motion Sickness': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M8 10v0"/><path d="M16 10v0"/><path d="M9 15c0 0 1 1.5 3 1.5s3-1.5 3-1.5"/><path d="M3 8c2 1 4 0 6-1s4-1 6 0"/><path d="M3 16c2 1 4 0 6-1"/></svg>`,
};

export default CONDITION_ICONS;
