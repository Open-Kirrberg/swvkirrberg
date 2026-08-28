/*
 * Wanderplan 2026 — transkribiert vom offiziellen Wanderplan (Stand 08/2026).
 * Für die neue Saison nur diese Datei aktualisieren.
 * Alle Angaben ohne Gewähr – Änderungen vorbehalten.
 */

export type Anspruch = "Leicht" | "Mittel" | "Schwer" | "Nicht angegeben";

export interface Termin {
  /** ISO-Datum; null wenn der Termin noch nicht feststeht */
  datum: string | null;
  datumLabel: string;
  zeit: string | null;
  tour: string;
  ort: string;
  beschreibung: string;
  anspruch: Anspruch;
}

export const wanderplanStand = "Stand 08/2026";
export const treffpunkt = "siehe jeweiliger Termin";

export const termine: Termin[] = [
  {
    datum: "2026-06-28",
    datumLabel: "28.06.2026",
    zeit: "10:00",
    tour: "Teufelspfad",
    ort: "Pirmasens",
    beschreibung:
      "Abfahrt an der Ski- und Wanderhütte Kirrberg; ca. 3 km (kinderwagengeeignet) oder ca. 7 km",
    anspruch: "Nicht angegeben",
  },
  {
    datum: "2026-08-23",
    datumLabel: "23.08.2026",
    zeit: "10:00",
    tour: "Wanderung in Kirrberg",
    ort: "Kirrberg",
    beschreibung: "Treffpunkt Marienbild; 7 km",
    anspruch: "Nicht angegeben",
  },
  {
    datum: "2026-09-27",
    datumLabel: "27.09.2026",
    zeit: "10:00",
    tour: "Genusswanderung",
    ort: "Freinsheim",
    beschreibung:
      "Abfahrt an der Ski- und Wanderhütte Kirrberg; ca. 10 km (kinderwagengeeignet)",
    anspruch: "Nicht angegeben",
  },
  {
    datum: "2026-10-18",
    datumLabel: "18.10.2026",
    zeit: "10:00",
    tour: "Kastanienweg an die Wasgauhütte",
    ort: "Hauenstein",
    beschreibung:
      "Abfahrt an der Ski- und Wanderhütte Kirrberg; ca. 10 km (kinderwagengeeignet)",
    anspruch: "Nicht angegeben",
  },
  {
    datum: "2026-11-22",
    datumLabel: "22.11.2026",
    zeit: "10:00",
    tour: "Wanderung an die Ski- und Wanderhütte",
    ort: "Einöd",
    beschreibung: "Treffpunkt Marktplatz; ca. 10 km (kinderwagengeeignet)",
    anspruch: "Nicht angegeben",
  },
  {
    datum: "2026-12-20",
    datumLabel: "20.12.2026",
    zeit: "10:00",
    tour: "Glühweinwanderung durch den Kirrberger Wald",
    ort: "Kirrberg",
    beschreibung: "Treffpunkt Marktplatz; ca. 10 km",
    anspruch: "Nicht angegeben",
  },
];

/** Termine ab heute (für die Startseite). */
export function kommendeTermine(today: Date, limit = 3): Termin[] {
  const iso = today.toISOString().slice(0, 10);
  return termine.filter((t) => t.datum !== null && t.datum >= iso).slice(0, limit);
}
