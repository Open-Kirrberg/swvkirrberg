import type { Metadata } from "next";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { CalendarDays, Clock3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Boule",
  description:
    "Boule beim SWV Kirrberg: Training jeden Dienstag und Spielplan der Saison 2026.",
};

const spiele = [
  { spieltag: 1, datum: "24.04.2026", begegnung: "SWV Kirrberg – BC Lebach 1", heimspiel: true },
  { spieltag: 2, datum: "08.05.2026", begegnung: "SWV Kirrberg – BSG St. Wendel 1", heimspiel: true },
  { spieltag: 3, datum: "22.05.2026", begegnung: "PC Messidor 2 – SWV Kirrberg", heimspiel: false },
  { spieltag: 4, datum: "05.06.2026", begegnung: "SWV Kirrberg – Boule KG Sitterswald 1", heimspiel: true },
  { spieltag: 5, datum: "19.06.2026", begegnung: "BC Hüttigweiler 1 – SWV Kirrberg", heimspiel: false },
  { spieltag: 6, datum: "26.06.2026", begegnung: "BF Wustweiler 1 – SWV Kirrberg", heimspiel: false },
  { spieltag: 7, datum: "28.08.2026", begegnung: "SWV Kirrberg – BC Schiffweiler 1", heimspiel: true },
  { spieltag: 8, datum: "18.09.2026", begegnung: "BV Dirmingen 1 – SWV Kirrberg", heimspiel: false },
  { spieltag: 9, datum: "25.09.2026", begegnung: "SWV Kirrberg – PC Hanweiler 2", heimspiel: true },
];

export default function BoulePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="max-w-2xl">
        <Badge className="bg-[oklch(0.77_0.16_90)] text-[oklch(0.25_0.05_90)]">
          Saison 2026
        </Badge>
        <h1 className="blaze mt-3 text-3xl font-bold">Boule beim SWV Kirrberg</h1>
        <p className="mt-3 text-muted-foreground">
          Ob Mannschaftsspiel oder gemeinsames Spiel in entspannter Runde: Neue
          Mitspielerinnen und Mitspieler sind bei uns herzlich willkommen.
        </p>
      </div>

      <Card className="mt-8 max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock3 className="size-5 text-primary" />
            Training
          </CardTitle>
          <CardDescription>
            Jeden Dienstag um 17:00 Uhr auf dem Bouleplatz des SWV Kirrberg.
          </CardDescription>
        </CardHeader>
      </Card>

      <section className="mt-12" aria-labelledby="spielplan">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 id="spielplan" className="blaze text-2xl font-bold">
              Spielplan 2026
            </h2>
            <p className="mt-2 text-muted-foreground">
              Die rot markierten Begegnungen finden in Kirrberg statt.
            </p>
          </div>
          <span className="flex items-center gap-2 text-sm font-semibold text-red-800">
            <span className="size-3 rounded-full bg-red-600" />
            Heimspiel
          </span>
        </div>

        <Card className="mt-4 overflow-hidden py-0">
          <CardContent className="overflow-x-auto px-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Spieltag</TableHead>
                  <TableHead>Datum</TableHead>
                  <TableHead>Begegnung</TableHead>
                  <TableHead className="text-right">Ort</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {spiele.map((spiel) => (
                  <TableRow
                    key={spiel.spieltag}
                    className={spiel.heimspiel ? "bg-red-50/70 hover:bg-red-50" : undefined}
                  >
                    <TableCell className="font-semibold">{spiel.spieltag}. Spieltag</TableCell>
                    <TableCell className="whitespace-nowrap">{spiel.datum}</TableCell>
                    <TableCell className="min-w-64 whitespace-normal font-semibold">
                      {spiel.begegnung}
                    </TableCell>
                    <TableCell className="text-right">
                      {spiel.heimspiel ? (
                        <Badge className="bg-red-700 text-white hover:bg-red-700">Heimspiel</Badge>
                      ) : (
                        <span className="text-sm text-muted-foreground">Auswärts</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <CalendarDays className="size-4" />
        Alle Angaben ohne Gewähr – Änderungen vorbehalten.
      </p>
    </div>
  );
}
