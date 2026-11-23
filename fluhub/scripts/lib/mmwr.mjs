// MMWR (CDC epidemiologic) week helpers.
// Week 1 is the first Sunday-to-Saturday week with at least four days in the calendar year.

const DAY = 86400000;

function week1Start(year) {
  const jan1 = Date.UTC(year, 0, 1);
  const dow = new Date(jan1).getUTCDay(); // 0 = Sunday
  return dow <= 3 ? jan1 - dow * DAY : jan1 + (7 - dow) * DAY;
}

export function weeksInYear(year) {
  return Math.round((week1Start(year + 1) - week1Start(year)) / (7 * DAY));
}

/** 202540 -> Date (UTC) of the Saturday that ends that MMWR week. */
export function epiweekEnd(ew) {
  const y = Math.floor(ew / 100), w = ew % 100;
  return new Date(week1Start(y) + ((w - 1) * 7 + 6) * DAY);
}

export function epiweekEndISO(ew) {
  return epiweekEnd(ew).toISOString().slice(0, 10);
}

/** Date (UTC or ISO string) -> epiweek number such as 202540. */
export function dateToEpiweek(d) {
  const t = typeof d === "string" ? Date.parse(d.slice(0, 10) + "T00:00:00Z") : d.getTime();
  let y = new Date(t).getUTCFullYear() + 1;
  while (week1Start(y) > t) y--;
  const w = Math.floor((t - week1Start(y)) / (7 * DAY)) + 1;
  return y * 100 + w;
}

export function addWeeks(ew, n) {
  return dateToEpiweek(new Date(epiweekEnd(ew).getTime() + n * 7 * DAY));
}

/** Season label for an epiweek. Flu seasons run from MMWR week 40 to week 39. */
export function seasonOf(ew) {
  const y = Math.floor(ew / 100), w = ew % 100;
  const start = w >= 40 ? y : y - 1;
  return `${start}-${String((start + 1) % 100).padStart(2, "0")}`;
}

/** 0-based index of the week within its season (week 40 = 0). */
export function seasonWeekIndex(ew) {
  const y = Math.floor(ew / 100), w = ew % 100;
  if (w >= 40) return w - 40;
  return weeksInYear(y - 1) - 40 + w;
}
