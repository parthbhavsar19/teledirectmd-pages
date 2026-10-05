// Turns raw series into the things pages show: season overlays, typical ranges, week-over-week numbers.
import { seasonOf, seasonWeekIndex, epiweekEnd, epiweekEndISO, dateToEpiweek, weeksInYear } from "./mmwr.mjs";

// Seasons whose shape was distorted by COVID-19 mitigation; excluded from "typical" ranges.
export const ATYPICAL = new Set(["2020-21", "2021-22"]);

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const fmtDate = (d, withYear = true) => {
  const x = typeof d === "string" ? new Date(d + "T00:00:00Z") : d;
  return `${MONTHS[x.getUTCMonth()]} ${x.getUTCDate()}${withYear ? ", " + x.getUTCFullYear() : ""}`;
};
export const seasonLabel = (s) => s.replace("-", "–");

/** [[epiweek, v]] -> { season: [[weekIndex, v]] } */
export function bySeason(series) {
  const out = {};
  for (const [ew, v] of series) (out[seasonOf(ew)] ||= []).push([seasonWeekIndex(ew), v]);
  return out;
}

/** min/max/median across seasons for each week index */
export function typicalBand(seasons, include) {
  const byIdx = {};
  for (const s of include) for (const [i, v] of seasons[s] || []) if (v != null) (byIdx[i] ||= []).push(v);
  const idx = Object.keys(byIdx).map(Number).sort((a, b) => a - b).filter((i) => byIdx[i].length >= Math.max(3, include.length / 2));
  const q = (arr, p) => { const a = [...arr].sort((x, y) => x - y); const k = (a.length - 1) * p; const f = Math.floor(k); return a[f] + (a[Math.ceil(k)] - a[f]) * (k - f); };
  return {
    lo: idx.map((i) => [i, q(byIdx[i], 0.1)]),
    hi: idx.map((i) => [i, q(byIdx[i], 0.9)]),
    med: idx.map((i) => [i, q(byIdx[i], 0.5)]),
  };
}

/** Month ticks for a season x-axis (week index 0 = MMWR week 40), using that season's calendar. */
export function seasonTicks(season) {
  const y = +season.slice(0, 4);
  const start = epiweekEnd(y * 100 + 40).getTime();
  const ticks = [];
  for (let k = 0; k < 12; k++) {
    const m = (9 + k) % 12, yy = m >= 9 ? y : y + 1;
    const t = Date.UTC(yy, m, 1);
    const idx = (t - start) / (7 * 86400000);
    if (idx >= -0.5 && idx <= 52) ticks.push([Math.max(0, idx), MONTHS[m]]);
  }
  return ticks;
}

/** Hover label for a season week index, in the given season's calendar. */
export function weekIndexLabel(season) {
  const y = +season.slice(0, 4);
  const w0 = weeksInYear(y);
  return (i) => {
    const ew = i <= w0 - 40 ? y * 100 + 40 + i : (y + 1) * 100 + (i - (w0 - 40));
    return `Week ending ${fmtDate(epiweekEnd(ew), false)} (wk ${ew % 100})`;
  };
}

/** Value at the same season-week index in another season. */
export const atIndex = (pts, i) => (pts || []).find((p) => p[0] === i)?.[1] ?? null;

export function seasonsList(seasons, current, n) {
  return Object.keys(seasons).filter((s) => s < current).sort().slice(-n);
}

/** Summaries for one jurisdiction's ILI series. */
export function iliSummary(series) {
  if (!series?.length) return null;
  const seasons = bySeason(series);
  const lastEw = series.at(-1)[0];
  const current = seasonOf(lastEw);
  const prev = seasonsList(seasons, current, 1)[0];
  const typicalSeasons = Object.keys(seasons).filter((s) => s < current && !ATYPICAL.has(s));
  const band = typicalBand(seasons, typicalSeasons);
  const cur = seasons[current] || [];
  const latest = series.at(-1);
  const prior = series.at(-2);
  const idx = seasonWeekIndex(latest[0]);
  return {
    seasons, current, prev, band, typicalSeasons,
    latest: { ew: latest[0], v: latest[1], date: epiweekEndISO(latest[0]) },
    prior: prior ? { ew: prior[0], v: prior[1] } : null,
    lastYearSameWeek: atIndex(seasons[prev], idx),
    typicalSameWeek: atIndex(band.med, idx),
    peak: (s) => (seasons[s] || []).reduce((m, p) => (p[1] != null && p[1] > (m?.[1] ?? -1) ? p : m), null),
    curIdx: idx,
  };
}

/** NHSN weekly admissions: [[date, admits, per100k]] -> season overlay on per-100k */
export function nhsnSeasons(rows) {
  const out = {};
  for (const [date, n, r] of rows) {
    const ew = dateToEpiweek(date);
    (out[seasonOf(ew)] ||= []).push([seasonWeekIndex(ew), r, n, date]);
  }
  return out;
}

/** FluSurv-NET weekly rates -> cumulative per season. col 1 = overall. */
export function cumulative(rows, col = 1) {
  let c = 0;
  return rows.map((r) => [seasonWeekIndex(r[0]), r[col] == null ? null : +(c += r[col]).toFixed(1)]);
}

export function pctChange(a, b) {
  if (a == null || b == null || b === 0) return null;
  return ((a - b) / b) * 100;
}

export function trendWord(a, b, tol = 5) {
  const p = pctChange(a, b);
  if (p == null) return "";
  if (Math.abs(p) < tol) return "about the same as";
  return p > 0 ? "up from" : "down from";
}
