import type { Metadata } from "next";
import {
  Badge,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { Download, MapPin } from "lucide-react";
import { type Anspruch, termine, treffpunkt, wanderplanStand } from "@/data/termine";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termine & Wanderplan",
  description:
    "Der Wanderplan des SWV Kirrberg: geführte Touren mit ortskundigen Wanderführern – Treffpunkt Marktplatz Kirrberg, Gäste willkommen.",
};

const anspruchVariant: Record<Anspruch, string> = {
  Leicht: "bg-[oklch(0.95_0.02_158)] text-[oklch(0.32_0.08_158)]",
  Mittel: "bg-[oklch(0.93_0.06_90)] text-[oklch(0.4_0.08_90)]",
  Schwer: "bg-[oklch(0.93_0.06_29)] text-[oklch(0.4_0.12_29)]",
  "Nicht angegeben": "bg-muted text-muted-foreground",
};

export default function TerminePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="max-w-2xl">
        <h1 className="blaze text-3xl font-bold">Termine & Wanderplan</h1>
        <p className="mt-3 text-muted-foreground">
          Gemeinsam die Natur genießen und neue Wege entdecken: Wir bieten
          regelmäßig – in der Regel monatlich – abwechslungsreiche, geführte
          Wanderungen mit ortskundigen Wanderführern an.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="flex items-center gap-1.5 font-semibold">
            <MapPin className="size-4 text-primary" />
            Treffpunkt: {treffpunkt}
          </span>
          <Badge variant="outline">{wanderplanStand}</Badge>
        </div>
      </div>

      <Card className="mt-8 py-0">
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Datum</TableHead>
                <TableHead>Tour</TableHead>
                <TableHead className="hidden md:table-cell">Beschreibung</TableHead>
                <TableHead className="text-right">Anspruch</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {termine.map((t) => (
                <TableRow key={`${t.datumLabel}-${t.tour}`}>
                  <TableCell className="whitespace-nowrap font-semibold">
                    {t.datumLabel}
                    {t.zeit ? (
                      <span className="block text-xs font-normal text-muted-foreground">
                        {t.zeit} Uhr
                      </span>
                    ) : null}
                  </TableCell>
                  <TableCell className="whitespace-normal">
                    <span className="font-semibold">{t.tour}</span>
                    <span className="block text-xs text-muted-foreground">{t.ort}</span>
                    <span className="mt-1 block max-w-[40ch] text-xs text-muted-foreground md:hidden">
                      {t.beschreibung}
                    </span>
                  </TableCell>
                  <TableCell className="hidden max-w-[48ch] whitespace-normal text-sm text-muted-foreground md:table-cell">
                    {t.beschreibung}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge className={anspruchVariant[t.anspruch]}>{t.anspruch}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <a
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline"
        href={asset("/downloads/wanderplan-2026.pdf")}
        target="_blank"
        rel="noreferrer"
      >
        <Download className="size-4" />
        Wanderplan 2026 als PDF herunterladen
      </a>

      <p className="mt-4 text-sm text-muted-foreground">
        Geführte Touren mit ortskundigen Wanderführern. Alle Angaben ohne Gewähr –
        Änderungen vorbehalten. Gäste fragen bitte per E-Mail an:{" "}
        <a className="underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
    </div>
  );
}
