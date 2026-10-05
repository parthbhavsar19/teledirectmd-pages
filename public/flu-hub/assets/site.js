// FluHub progressive enhancement: theme toggle, chart hover, sortable tables.
// Every page is complete without this file.
(function () {
  "use strict";

  /* theme toggle: cycles system -> dark -> light; remembered per browser */
  const root = document.documentElement;
  const KEY = "fluhub-theme";
  try { const t = localStorage.getItem(KEY); if (t) root.setAttribute("data-theme", t); } catch (e) {}
  const btn = document.querySelector(".theme-btn");
  if (btn) btn.addEventListener("click", () => {
    const dark = root.getAttribute("data-theme")
      ? root.getAttribute("data-theme") === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
  });

  const NS = "http://www.w3.org/2000/svg";
  const fmt = (v, dp) => v == null ? "–" : Number(v).toLocaleString("en-US", { maximumFractionDigits: dp, minimumFractionDigits: dp });

  /* line chart crosshair */
  document.querySelectorAll("figure.chart").forEach((fig) => {
    const dataEl = fig.querySelector("script.chart-data");
    const svg = fig.querySelector("svg");
    const box = fig.querySelector(".chart-box");
    if (!svg || !box) return;
    const tip = document.createElement("div");
    tip.className = "tip"; tip.hidden = true;
    box.appendChild(tip);

    if (dataEl) {
      const d = JSON.parse(dataEl.textContent);
      const layer = svg.querySelector(".hover-layer");
      const line = document.createElementNS(NS, "line");
      line.setAttribute("class", "xh"); line.setAttribute("y1", d.m.t); line.setAttribute("y2", d.H - d.m.b);
      line.style.display = "none"; layer.appendChild(line);
      const dots = d.s.map((s) => {
        const c = document.createElementNS(NS, "circle");
        c.setAttribute("r", 4); c.setAttribute("class", "dot " + s.c); c.style.display = "none";
        layer.appendChild(c); return c;
      });
      const sx = (x) => d.m.l + ((x - d.x0) / (d.x1 - d.x0)) * (d.W - d.m.l - d.m.r);
      const sy = (y) => d.H - d.m.b - (y / d.yMax) * (d.H - d.m.t - d.m.b);
      function move(ev) {
        const r = svg.getBoundingClientRect();
        const px = ((ev.clientX - r.left) / r.width) * d.W;
        const xv = d.x0 + ((px - d.m.l) / (d.W - d.m.l - d.m.r)) * (d.x1 - d.x0);
        let best = d.xs[0];
        for (const x of d.xs) if (Math.abs(x - xv) < Math.abs(best - xv)) best = x;
        const i = d.xs.indexOf(best);
        line.setAttribute("x1", sx(best)); line.setAttribute("x2", sx(best)); line.style.display = "";
        let rows = "";
        d.s.forEach((s, k) => {
          const v = s.v[best];
          if (v == null) { dots[k].style.display = "none"; return; }
          dots[k].setAttribute("cx", sx(best)); dots[k].setAttribute("cy", sy(v)); dots[k].style.display = "";
          rows += `<div class="row"><span><i class="sw-${s.c}"></i>${s.n}</span><span>${fmt(v, d.dp)}${d.unit}</span></div>`;
        });
        if (!rows) { tip.hidden = true; return; }
        tip.innerHTML = `<b>${d.xl[i]}</b>${rows}`;
        tip.hidden = false;
        const left = (sx(best) / d.W) * r.width;
        const tw = tip.offsetWidth;
        tip.style.left = Math.min(Math.max(0, left + 14 + tw > r.width ? left - tw - 14 : left + 14), Math.max(0, r.width - tw)) + "px";
        tip.style.top = "8px";
      }
      function leave() { tip.hidden = true; line.style.display = "none"; dots.forEach((c) => (c.style.display = "none")); }
      svg.addEventListener("pointermove", move);
      svg.addEventListener("pointerdown", move);
      svg.addEventListener("pointerleave", leave);
    }

    const barEl = fig.querySelector("script.bar-data");
    if (barEl) {
      const d = JSON.parse(barEl.textContent);
      svg.querySelectorAll(".bar").forEach((bar) => {
        const b = d.bars[+bar.dataset.i];
        const show = () => {
          tip.innerHTML = `<b>${b.l}</b><div class="row"><span>${b.v == null ? "Not available" : ""}</span><span>${b.v == null ? "" : fmt(b.v, b.v < 100 ? 1 : 0) + d.unit}</span></div>${b.note ? `<div class="small muted">${b.note}</div>` : ""}`;
          tip.hidden = false;
          const r = svg.getBoundingClientRect(), br = bar.getBoundingClientRect();
          const left = br.left - r.left + br.width / 2;
          const tw = tip.offsetWidth;
          tip.style.left = Math.min(Math.max(0, left - tw / 2), r.width - tw) + "px";
          tip.style.top = Math.max(0, br.top - r.top - tip.offsetHeight - 8) + "px";
        };
        bar.addEventListener("pointerenter", show);
        bar.addEventListener("pointerdown", show);
        bar.addEventListener("pointerleave", () => (tip.hidden = true));
      });
    }
  });

  /* sortable tables: <table class="sortable"> with numeric cells marked data-v */
  document.querySelectorAll("table.sortable").forEach((t) => {
    t.querySelectorAll("thead th").forEach((th, col) => {
      const b = document.createElement("button");
      b.className = "sort"; b.type = "button"; b.textContent = th.textContent;
      th.textContent = ""; th.appendChild(b);
      let asc = false;
      b.addEventListener("click", () => {
        asc = !asc;
        const rows = [...t.tBodies[0].rows];
        const val = (r) => { const c = r.cells[col]; const v = c.dataset.v; return v != null ? +v : c.textContent.trim().toLowerCase(); };
        rows.sort((a, z) => { const x = val(a), y = val(z); return (x > y ? 1 : x < y ? -1 : 0) * (asc ? 1 : -1); });
        rows.forEach((r) => t.tBodies[0].appendChild(r));
        th.setAttribute("aria-sort", asc ? "ascending" : "descending");
      });
    });
  });

  /* copy buttons */
  document.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", async () => {
    const text = document.getElementById(b.dataset.copy).innerText;
    try { await navigator.clipboard.writeText(text); b.textContent = "Copied"; }
    catch (e) { const r = document.createRange(); r.selectNodeContents(document.getElementById(b.dataset.copy)); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = "Selected, press Ctrl/Cmd+C"; }
    setTimeout(() => (b.textContent = "Copy"), 2500);
  }));
})();
