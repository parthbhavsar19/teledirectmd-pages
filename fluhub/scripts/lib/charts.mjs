// Server-side SVG charts. Every chart renders complete without JavaScript;
// site.js adds the hover crosshair/tooltip from the embedded JSON.
// Colors come from CSS classes so both themes are handled in site.css.

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export function niceTicks(max, count = 4) {
  if (!(max > 0)) return [0, 1];
  const raw = max / count;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw);
  const ticks = [];
  for (let v = 0; v <= max + step * 0.001; v += step) ticks.push(+v.toFixed(6));
  if (ticks.at(-1) < max) ticks.push(+(ticks.at(-1) + step).toFixed(6));
  return ticks;
}

const fmtNum = (v, d = 1) => (v == null ? "–" : Number(v).toLocaleString("en-US", { maximumFractionDigits: d, minimumFractionDigits: 0 }));

/**
 * Line chart.
 * opts: { id, title, desc, width, height, x:{min,max,ticks:[[v,label]]}, yFmt, yUnit,
 *         series:[{name, points:[[x,y]], cls, width, label, dot}], bands:[{name, cls, lo:[[x,y]], hi:[[x,y]]}],
 *         hoverLabels: {x: label}, refLines:[{y, label}] , yMax }
 */
export function lineChart(o) {
  const W = o.width || 760, H = o.height || 300;
  const m = { t: 16, r: o.rightPad ?? 96, b: 30, l: 44 };
  const allY = [...o.series.flatMap((s) => s.points.map((p) => p[1])), ...(o.bands || []).flatMap((b) => b.hi.map((p) => p[1])), ...(o.refLines || []).map((r) => r.y)].filter((v) => v != null);
  const yTicks = niceTicks(o.yMax ?? Math.max(...allY, 0.0001), o.yTickCount || 4);
  const yMax = yTicks.at(-1);
  const sx = (v) => m.l + ((v - o.x.min) / (o.x.max - o.x.min)) * (W - m.l - m.r);
  const sy = (v) => H - m.b - (v / yMax) * (H - m.t - m.b);
  const yf = o.yFmt || ((v) => fmtNum(v, 1));

  const path = (pts) => {
    let d = "", pen = false;
    for (const [x, y] of pts) {
      if (y == null) { pen = false; continue; }
      d += (pen ? "L" : "M") + sx(x).toFixed(1) + " " + sy(y).toFixed(1);
      pen = true;
    }
    return d;
  };

  let g = "";
  // grid + y axis
  for (const t of yTicks) {
    g += `<line class="grid" x1="${m.l}" x2="${W - m.r}" y1="${sy(t)}" y2="${sy(t)}"/>`;
    g += `<text class="tick" x="${m.l - 6}" y="${sy(t) + 4}" text-anchor="end">${esc(yf(t))}</text>`;
  }
  for (const [v, label] of o.x.ticks) {
    g += `<line class="xtick" x1="${sx(v)}" x2="${sx(v)}" y1="${H - m.b}" y2="${H - m.b + 4}"/>`;
    g += `<text class="tick" x="${sx(v)}" y="${H - m.b + 17}" text-anchor="middle">${esc(label)}</text>`;
  }
  g += `<line class="axis" x1="${m.l}" x2="${W - m.r}" y1="${H - m.b}" y2="${H - m.b}"/>`;
  for (const r of o.refLines || []) {
    g += `<line class="ref" x1="${m.l}" x2="${W - m.r}" y1="${sy(r.y)}" y2="${sy(r.y)}"/>`;
    g += `<text class="ref-label" x="${W - m.r + 6}" y="${sy(r.y) + 4}">${esc(r.label)}</text>`;
  }
  for (const b of o.bands || []) {
    const top = b.hi.map(([x, y]) => `${sx(x).toFixed(1)} ${sy(y).toFixed(1)}`);
    const bot = [...b.lo].reverse().map(([x, y]) => `${sx(x).toFixed(1)} ${sy(y).toFixed(1)}`);
    g += `<path class="band ${b.cls || ""}" d="M${top.join("L")}L${bot.join("L")}Z"/>`;
  }
  // past/muted first, emphasized last so they draw on top
  const ordered = [...o.series].sort((a, b) => (a.z || 0) - (b.z || 0));
  const labels = [];
  for (const s of ordered) {
    g += `<path class="line ${s.cls}" d="${path(s.points)}" style="stroke-width:${s.width || 2}px"/>`;
    const last = [...s.points].reverse().find((p) => p[1] != null);
    if (last && s.dot) g += `<circle class="dot ${s.cls}" cx="${sx(last[0])}" cy="${sy(last[1])}" r="4.5"/>`;
    if (last && s.label) labels.push({ y: sy(last[1]), x: sx(last[0]), text: s.label, cls: s.cls, inline: s.labelInline });
  }
  // direct labels in the right gutter, nudged apart
  labels.sort((a, b) => a.y - b.y);
  for (let i = 1; i < labels.length; i++) if (labels[i].y - labels[i - 1].y < 14) labels[i].y = labels[i - 1].y + 14;
  for (const l of labels) {
    const lx = l.inline ? l.x + 8 : W - m.r + 6;
    g += `<text class="dlabel ${l.cls}-t" x="${lx}" y="${l.y + 4}">${esc(l.text)}</text>`;
  }

  // hover payload
  const xs = [...new Set(o.series.flatMap((s) => s.points.map((p) => p[0])))].sort((a, b) => a - b);
  const hover = {
    m, W, H, x0: o.x.min, x1: o.x.max, yMax,
    xs, xl: xs.map((x) => (o.hoverLabels ? o.hoverLabels(x) : String(x))),
    s: o.series.filter((s) => s.hover !== false).map((s) => ({ n: s.name, c: s.cls, v: Object.fromEntries(s.points.filter((p) => p[1] != null).map((p) => [p[0], p[1]])) })),
    unit: o.yUnit || "", dp: o.hoverDp ?? 1,
  };

  return `<figure class="chart" id="${o.id}">
${o.title ? `<figcaption><span class="chart-title">${esc(o.title)}</span>${o.sub ? `<span class="chart-sub">${o.sub}</span>` : ""}</figcaption>` : ""}
${o.legend ? legend(o.legend) : ""}
<div class="chart-box"><svg viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${o.id}-d" preserveAspectRatio="xMidYMid meet"><desc id="${o.id}-d">${esc(o.desc || o.title || "")}</desc>${g}<g class="hover-layer"></g></svg></div>
<script type="application/json" class="chart-data">${JSON.stringify(hover).replace(/</g, "\\u003c")}</script>
${o.note ? `<p class="chart-note">${o.note}</p>` : ""}
</figure>`;
}

export function legend(items) {
  return `<ul class="legend">${items.map((i) => `<li><span class="key ${i.cls}${i.band ? " key-band" : ""}"></span>${esc(i.name)}</li>`).join("")}</ul>`;
}

/**
 * Vertical bar chart (one series). opts: {id,title,sub,bars:[{label,value,cls,note}], yFmt, highlight}
 */
export function barChart(o) {
  const W = o.width || 760, H = o.height || 260;
  const m = { t: 22, r: 12, b: 34, l: 52 };
  const vals = o.bars.map((b) => b.value).filter((v) => v != null);
  const yTicks = niceTicks(Math.max(...vals), 4);
  const yMax = yTicks.at(-1);
  const n = o.bars.length;
  const slot = (W - m.l - m.r) / n;
  const bw = Math.max(4, Math.min(34, slot - 6));
  const sy = (v) => H - m.b - (v / yMax) * (H - m.t - m.b);
  const yf = o.yFmt || ((v) => fmtNum(v, 0));
  let g = "";
  for (const t of yTicks) {
    g += `<line class="grid" x1="${m.l}" x2="${W - m.r}" y1="${sy(t)}" y2="${sy(t)}"/>`;
    g += `<text class="tick" x="${m.l - 6}" y="${sy(t) + 4}" text-anchor="end">${esc(yf(t))}</text>`;
  }
  const every = Math.ceil(n / (W / 58));
  o.bars.forEach((b, i) => {
    const cx = m.l + slot * i + slot / 2;
    if (b.value != null) {
      const y = sy(b.value), h = H - m.b - y;
      const r = Math.min(4, bw / 2, h);
      // rounded top, square baseline
      g += `<path class="bar ${b.cls || "s1"}" data-i="${i}" d="M${cx - bw / 2} ${H - m.b}V${y + r}Q${cx - bw / 2} ${y} ${cx - bw / 2 + r} ${y}H${cx + bw / 2 - r}Q${cx + bw / 2} ${y} ${cx + bw / 2} ${y + r}V${H - m.b}Z"/>`;
      if (b.showValue) g += `<text class="bar-val" x="${cx}" y="${y - 6}" text-anchor="middle">${esc(yf(b.value))}</text>`;
    } else {
      g += `<text class="tick na" x="${cx}" y="${H - m.b - 6}" text-anchor="middle">n/a</text>`;
    }
    if (i % every === 0 || i === n - 1) g += `<text class="tick" x="${cx}" y="${H - m.b + 17}" text-anchor="middle">${esc(b.short || b.label)}</text>`;
  });
  g += `<line class="axis" x1="${m.l}" x2="${W - m.r}" y1="${H - m.b}" y2="${H - m.b}"/>`;
  const hover = { bars: o.bars.map((b) => ({ l: b.label, v: b.value, note: b.note || "" })), unit: o.yUnit || "", m, W, H, slot };
  return `<figure class="chart" id="${o.id}">
${o.title ? `<figcaption><span class="chart-title">${esc(o.title)}</span>${o.sub ? `<span class="chart-sub">${o.sub}</span>` : ""}</figcaption>` : ""}
${o.legend ? legend(o.legend) : ""}
<div class="chart-box"><svg viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${o.id}-d"><desc id="${o.id}-d">${esc(o.desc || o.title || "")}</desc>${g}</svg></div>
<script type="application/json" class="bar-data">${JSON.stringify(hover).replace(/</g, "\\u003c")}</script>
${o.note ? `<p class="chart-note">${o.note}</p>` : ""}
</figure>`;
}

/** Inline sparkline, no axes. */
export function sparkline(points, { w = 120, h = 32, cls = "s1" } = {}) {
  const ys = points.map((p) => p[1]).filter((v) => v != null);
  if (!ys.length) return "";
  const max = Math.max(...ys) || 1;
  const x0 = points[0][0], x1 = points.at(-1)[0];
  const sx = (x) => 2 + ((x - x0) / (x1 - x0 || 1)) * (w - 8);
  const sy = (y) => h - 3 - (y / max) * (h - 6);
  let d = "", pen = false;
  for (const [x, y] of points) { if (y == null) { pen = false; continue; } d += (pen ? "L" : "M") + sx(x).toFixed(1) + " " + sy(y).toFixed(1); pen = true; }
  const last = [...points].reverse().find((p) => p[1] != null);
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" aria-hidden="true"><path class="line ${cls}" d="${d}" style="stroke-width:1.5px"/><circle class="dot ${cls}" cx="${sx(last[0])}" cy="${sy(last[1])}" r="2.5"/></svg>`;
}
