export interface OpeningSlot {
  /** 0 = Sonntag … 6 = Samstag (wie Date.getDay()) */
  days: number[];
  label: string;
  open: string;
  close: string;
  note?: string;
}

export const openingHours: OpeningSlot[] = [
  { days: [3, 4, 5, 6], label: "Mittwoch – Samstag", open: "15:30", close: "20:30" },
  { days: [0], label: "Sonntag", open: "11:00", close: "20:00", note: "Küche bis 18:00 Uhr" },
];

export const closedLabel = "Montag & Dienstag geschlossen";

function toMinutes(hhmm: string): number {
  const [h = 0, m = 0] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** Ist die Hütte zum gegebenen Zeitpunkt geöffnet? */
export function isOpenAt(date: Date): boolean {
  const slot = openingHours.find((s) => s.days.includes(date.getDay()));
  if (!slot) return false;
  const now = date.getHours() * 60 + date.getMinutes();
  return now >= toMinutes(slot.open) && now < toMinutes(slot.close);
}
