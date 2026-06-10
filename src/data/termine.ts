/*
 * Wanderplan — transkribiert vom Wanderplan 2025 (Stand 01/2025) der alten
 * Website. Für die neue Saison nur diese Datei aktualisieren.
 * Alle Angaben ohne Gewähr – Änderungen vorbehalten.
 */

export type Anspruch = "Leicht" | "Mittel" | "Schwer";

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

export const wanderplanStand = "Stand 01/2025";
export const treffpunkt = "Marktplatz Kirrberg";

export const termine: Termin[] = [
  {
    datum: "2025-01-19",
    datumLabel: "19.01.2025",
    zeit: "10:00",
    tour: "Karlsbergtour",
    ort: "Homburg",
    beschreibung: "15 km, verschiedene Brunnen, Einkehr Schützenhaus Sanddorf",
    anspruch: "Mittel",
  },
  {
    datum: "2025-02-16",
    datumLabel: "16.02.2025",
    zeit: "10:00",
    tour: "Spitzbubenweg",
    ort: "Münchwies",
    beschreibung: "12 km, Einkehr Höcherberg-Turm",
    anspruch: "Mittel",
  },
  {
    datum: null,
    datumLabel: "März 2025",
    zeit: "09:00",
    tour: "Pfälzer Mandelwochen",
    ort: "Neustadt a.d. Weinstraße",
    beschreibung:
      "Gimmeldinger Mandelblütenfest – Termin abhängig vom Stand der Blüte und der Wetterlage, Details werden kurz davor besprochen",
    anspruch: "Leicht",
  },
  {
    datum: "2025-04-27",
    datumLabel: "27.04.2025",
    zeit: "09:00",
    tour: "Lecker Pfädchen",
    ort: "Thalfang / Hunsrück",
    beschreibung:
      "11 km, 3 Getränkestationen, „Ebbes von hei“-Essen muss mitgebracht werden – alternativ Picknick buchbar",
    anspruch: "Mittel",
  },
  {
    datum: "2025-05-16",
    datumLabel: "16.–18.05.2025",
    zeit: null,
    tour: "Weingut Alois Boesen",
    ort: "Palzem",
    beschreibung:
      "3-Tage-Tour mit Wanderung an der Mosel inkl. Straußwirtschaft – Anmeldung erforderlich!",
    anspruch: "Mittel",
  },
  {
    datum: "2025-07-13",
    datumLabel: "13.07.2025",
    zeit: "10:00",
    tour: "Lemberger Flößertour",
    ort: "Lemberg",
    beschreibung: "14 km, Einkehr Friedrichs-Häuschen mit Selbstverpflegung",
    anspruch: "Mittel",
  },
  {
    datum: "2025-08-24",
    datumLabel: "24.08.2025",
    zeit: "10:00",
    tour: "Schmuggler-Pfad",
    ort: "Kröppen",
    beschreibung: "13 km, gemeinsames Picknick im Obstgarten Walschbronn (F)",
    anspruch: "Mittel",
  },
  {
    datum: "2025-09-14",
    datumLabel: "14.09.2025",
    zeit: "09:00",
    tour: "Burgentour",
    ort: "Nothweiler",
    beschreibung: "12 km, diverse Burgen, Einkehr Gimbelhof (F)",
    anspruch: "Schwer",
  },
  {
    datum: null,
    datumLabel: "September 2025",
    zeit: "19:30",
    tour: "Nachtwanderung",
    ort: "Rabenhorst",
    beschreibung:
      "Geführter Spaziergang zum Thema Fledermäuse mit Andreas Christian Schröder – Termin wird noch bekannt gegeben",
    anspruch: "Leicht",
  },
  {
    datum: "2025-10-03",
    datumLabel: "03.10.2025",
    zeit: "10:00",
    tour: "Weinfest Kloster Wörschweiler",
    ort: "Wörschweiler („Tag der Deutschen Einheit“)",
    beschreibung: "15 km, guter Wein und leckeres Essen",
    anspruch: "Mittel",
  },
  {
    datum: "2025-10-26",
    datumLabel: "26.10.2025",
    zeit: "10:00",
    tour: "Blies-Grenz-Weg",
    ort: "Sitterswald",
    beschreibung: "15 km, Selbstverpflegung",
    anspruch: "Mittel",
  },
  {
    datum: "2025-11-16",
    datumLabel: "16.11.2025",
    zeit: "09:00",
    tour: "Hahnberghütte",
    ort: "Contwig",
    beschreibung: "18 km, Hahnberghütte PWV Zweibrücken",
    anspruch: "Mittel",
  },
];

/** Termine ab heute (für die Startseite). */
export function kommendeTermine(today: Date, limit = 3): Termin[] {
  const iso = today.toISOString().slice(0, 10);
  return termine.filter((t) => t.datum !== null && t.datum >= iso).slice(0, limit);
}
