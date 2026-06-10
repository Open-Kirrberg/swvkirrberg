export const site = {
  name: "Ski- und Wanderverein Kirrberg e.V.",
  shortName: "SWV Kirrberg",
  claim: "Wandern. Einkehren. Feiern.",
  founded: 1969,
  email: "info.swvkirrberg@t-online.de",
  address: {
    street: "Am Kalkofer Weg 61",
    zip: "66424",
    city: "Homburg",
  },
  representative: "Stefan Schuh",
  phone: "0179 4258644",
  huette: {
    reservierung: ["06841 64849", "0171 2645454"],
    lage: "Zwischen Kirrberg und Zweibrücken an der L214",
    mapsUrl: "https://goo.gl/maps/JKL7DVPH4o4azQqb9",
  },
  vermietung: {
    ansprechpartner: "Stefan Schuh",
    telefon: "0179 425 86 44",
  },
  wetterstationUrl:
    "https://wetterstationen.meteomedia.de/station=107150&wahl=vorhersage",
  instagramUrl: "https://instagram.com/swvkirrberg_1969",
} as const;

export function mailto(subject: string, body: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
