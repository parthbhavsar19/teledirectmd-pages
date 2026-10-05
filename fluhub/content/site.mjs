// Site-wide settings. Change these in one place.
export const SITE = {
  name: "FluHub",
  baseUrl: "https://teledirectmd.com/flu-hub/",
  editor: "Parth Bhavsar, MD",
  editorCred: "board-certified family physician",
  email: "contact@teledirectmd.com",
  // Filled at build time
  weekLabel: "",
  builtLabel: "",

  // TeleDirectMD call-to-action. Set enabled:false to run FluHub as a fully standalone resource.
  // Shown only on adult (18+) symptom-checker results where a same-day physician visit is appropriate,
  // and on the treatment page. Never shown for emergency results or for children.
  cta: {
    enabled: true,
    org: "TeleDirectMD",
    url: "https://teledirectmd.com/book-online",
    conditionUrl: "https://teledirectmd.com/what-we-treat",
    // Approved public phrasing (social/content-rules.md and the live site). Keep "40+ states" per Dr. Bhavsar.
    line: "Same-day video visits, and every visit is with a board-certified physician. Flat $79, no insurance needed. Adults 18+ in 40+ states.",
  },
};
