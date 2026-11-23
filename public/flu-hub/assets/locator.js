// Distance-sorted directory search. Loads only the ZIP shard and the provider files for states near the point.
(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const list = $("#loc-list"), status = $("#loc-status");
  if (!list) return;
  const cache = {};
  const get = (u) => (cache[u] ||= fetch(u).then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); }));
  const FLAGS = [[1, "Flu shot"], [4, "65+ high-dose or adjuvanted"], [8, "Egg-free"], [2, "Nasal spray"]];
  const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function miles(a, b) {
    const R = 3958.8, toR = Math.PI / 180;
    const dLat = (b[0] - a[0]) * toR, dLon = (b[1] - a[1]) * toR;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * toR) * Math.cos(b[0] * toR) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }

  async function near(pt, label) {
    const radius = +$("#radius").value, filter = +$("#filter").value;
    status.textContent = "Searching…";
    const idx = await get("data/providers/index.json");
    const pad = radius / 55 + 0.1;
    const states = Object.keys(idx).filter((s) => { const b = idx[s].b; return pt[0] >= b[0] - pad && pt[0] <= b[2] + pad && pt[1] >= b[1] - pad && pt[1] <= b[3] + pad; });
    const rows = (await Promise.all(states.map((s) => get(`data/providers/${s}.json`)))).flat();
    const hits = rows.map((p) => ({ p, d: miles(pt, [p.y, p.x]) })).filter((h) => h.d <= radius && (!filter || h.p.f & filter)).sort((a, b) => a.d - b.d);
    show(hits.slice(0, 30), `${hits.length.toLocaleString()} location${hits.length === 1 ? "" : "s"} within ${radius} miles of ${label}${hits.length > 30 ? "; showing the closest 30" : ""}. Call ahead to confirm.`);
  }

  async function byZip(zip) {
    if (!/^\d{5}$/.test(zip)) { status.textContent = "Enter a 5-digit ZIP code."; return; }
    try {
      const shard = await get(`data/zip/${zip[0]}.json`);
      const pt = shard[zip];
      if (!pt) { status.textContent = `ZIP ${zip} was not found. Try a nearby ZIP code or browse by state.`; list.innerHTML = ""; return; }
      await near(pt, `ZIP ${zip}`);
    } catch (e) { status.textContent = "The directory could not be loaded. Check your connection and try again."; }
  }

  async function byState(st) {
    const filter = +$("#filter").value;
    const rows = (await get(`data/providers/${st}.json`)).filter((p) => !filter || p.f & filter);
    show(rows.slice(0, 40).map((p) => ({ p })), `${rows.length.toLocaleString()} locations in ${$("#state").selectedOptions[0].text}, sorted by city; showing the first 40. Enter a ZIP code to sort by distance.`);
  }

  function show(hits, msg) {
    status.textContent = msg;
    if (!hits.length) { list.innerHTML = '<li class="loc loc-empty"><p>No listed locations matched. Try a wider distance, or use the <a href="#other-ways">pharmacy schedulers and other options below</a>.</p></li>'; return; }
    list.innerHTML = hits.map(({ p, d }) => `<li class="loc">
      <h4>${esc(p.n)}</h4>${d != null ? `<span class="dist">${d < 10 ? d.toFixed(1) : Math.round(d)} mi</span>` : "<span></span>"}
      <p class="addr">${esc(p.a)}, ${esc(p.c)}, ${esc(p.s)} ${esc(p.z)}</p>
      <div class="row2">${p.p ? `<span class="mono" style="user-select:all">${esc(p.p)}</span>` : ""}${p.u ? `<a href="${esc(p.u)}" target="_blank" rel="noopener">Website</a>` : ""}<span class="chips">${FLAGS.filter(([f]) => p.f & f).map(([, l]) => `<span class="chip">${l}</span>`).join("")}</span></div>
    </li>`).join("");
  }

  $("#loc-form").addEventListener("submit", (e) => { e.preventDefault(); byZip($("#zip").value.trim()); });
  $("#state").addEventListener("change", (e) => e.target.value && byState(e.target.value));
  ["#radius", "#filter"].forEach((s) => $(s).addEventListener("change", () => { const z = $("#zip").value.trim(); if (z) byZip(z); else if ($("#state").value) byState($("#state").value); }));
  $("#loc-geo").addEventListener("click", () => {
    if (!navigator.geolocation) { status.textContent = "Location is not available in this browser. Enter a ZIP code instead."; return; }
    status.textContent = "Finding your location…";
    navigator.geolocation.getCurrentPosition((pos) => near([pos.coords.latitude, pos.coords.longitude], "your location"), () => (status.textContent = "Location access was blocked or unavailable. Enter a ZIP code instead."), { timeout: 8000 });
  });

  const hash = location.hash.slice(1).toUpperCase();
  if (/^[A-Z]{2}$/.test(hash) && $("#state").querySelector(`option[value="${hash}"]`)) { $("#state").value = hash; byState(hash); }
  else byZip("30303").then(() => { status.textContent = "Example: " + status.textContent + " Enter your own ZIP code above."; });
})();
