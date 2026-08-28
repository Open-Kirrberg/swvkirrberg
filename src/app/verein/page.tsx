import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { FileDown, Mail } from "lucide-react";
import { mailto, site } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Verein",
  description:
    "Der Ski- und Wanderverein Kirrberg e.V. – gegründet 1969. Vorstand, Sektionen Wandern und Boule, Satzung und Mitgliedschaft.",
};

const vorstand = [
  { rolle: "1. Vorsitzender", name: "nicht besetzt" },
  { rolle: "Stellv. Vorsitzender", name: "Stefan Schuh" },
  { rolle: "Kassenwartin", name: "Lisa Mohnen" },
  { rolle: "Schriftführerin", name: "Nicole Gerlinger" },
  { rolle: "Beisitzer", name: "Jürgen Regitz, Thomas Kirsch, Andreas Hoppstädter" },
  { rolle: "Kassenprüfer", name: "Rüdiger Schneidewind, Eckhard Fischer" },
];

const sektionen = [
  { rolle: "Wanderwart", name: "Frank Gerlinger" },
  { rolle: "Boulewart", name: "Karl Ruffing" },
  { rolle: "Jugendwart", name: "Timo Mohnen" },
  { rolle: "Wanderausschuss", name: "F. Gerlinger, T. Zäuner, A. Hoppstädter" },
  { rolle: "Wetterstation", name: "A. Hoppstädter" },
  { rolle: "Delegierter SBSB*", name: "Dominic Lingyak" },
  { rolle: "Stadtverband Sport", name: "Jürgen Regitz" },
  { rolle: "Freizeit + Skiwart", name: "nicht besetzt" },
  { rolle: "Gerätewart", name: "vakant" },
];

export default function VereinPage() {
  const beitrittMail = mailto(
    "Mitgliedschaft im SWV Kirrberg",
    "Hallo,\n\nich interessiere mich für eine Mitgliedschaft im Ski- und Wanderverein Kirrberg e.V. Bitte senden Sie mir die Beitrittsunterlagen.\n\nName:\nAnschrift:\nTelefon:",
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="max-w-2xl">
        <h1 className="blaze text-3xl font-bold">Der Verein</h1>
        <p className="mt-3 text-muted-foreground">
          Der Ski- und Wanderverein Kirrberg e.V. wurde {site.founded} gegründet.
          Seitdem pflegen wir Wandern, Boule und Geselligkeit – und unsere
          Vereinshütte auf der Höhe zwischen Kirrberg und Zweibrücken.
        </p>
      </div>

      {/* Sektionen mit Fotos */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden pt-0">
          <div className="relative h-56 w-full">
            <Image
              src={asset("/images/wandern-gruppe.jpg")}
              alt="Wandergruppe des SWV Kirrberg auf einem Felsen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[50%_35%]"
            />
          </div>
          <CardHeader>
            <CardTitle className="font-display text-xl">Wandern</CardTitle>
            <CardDescription>
              Gemeinsam die Natur genießen und neue Wege entdecken – in der Regel
              eine geführte Tour pro Monat. Ansprechpartner: Frank Gerlinger.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden pt-0">
          <div className="relative h-56 w-full">
            <Image
              src={asset("/images/boule-team.jpg")}
              alt="Die Boule-Mannschaft des SWV Kirrberg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="font-display text-xl">Boule</CardTitle>
            <CardDescription>
              Unsere Mannschaft spielt in der saarländischen Oberliga. Im Frühjahr
              beginnt das Training – Interessierte melden sich bei Boulewart Karl
              Ruffing (0176 46045244). Mehr unter{" "}
              <a
                href="https://www.petanque-sbv.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                petanque-sbv.de
              </a>
              .
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link href="/boule">Zum Spielplan 2026</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Vorstand */}
      <div className="mt-12">
        <h2 className="blaze text-2xl font-bold">Vorstand & Ämter</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Vorstand</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2 text-sm">
                {vorstand.map((v) => (
                  <div key={v.rolle} className="flex justify-between gap-4">
                    <dt className="font-semibold">{v.rolle}</dt>
                    <dd className="text-right text-muted-foreground">{v.name}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sektionen & Funktionen</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2 text-sm">
                {sektionen.map((s) => (
                  <div key={s.rolle} className="flex justify-between gap-4">
                    <dt className="font-semibold">{s.rolle}</dt>
                    <dd className="text-right text-muted-foreground">{s.name}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-muted-foreground">
                * Saarländischer Bergsteiger- und Skiläufer-Bund e.V.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Stand: 02/2024</p>
      </div>

      {/* Mitglied werden */}
      <Card className="topo mt-12">
        <CardHeader>
          <Badge className="w-fit bg-[oklch(0.77_0.16_90)] text-[oklch(0.25_0.05_90)]">
            Mitmachen
          </Badge>
          <CardTitle className="font-display text-2xl">Mitglied werden</CardTitle>
          <CardDescription className="max-w-xl">
            Ob Wandern, Boule oder einfach Geselligkeit an der Hütte – neue
            Mitglieder sind herzlich willkommen. Schreiben Sie uns, wir melden uns
            mit den Unterlagen.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={beitrittMail}>
              <Mail className="size-4" />
              Mitgliedschaft anfragen
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={asset("/downloads/satzung-2022.pdf")} target="_blank" rel="noopener">
              <FileDown className="size-4" />
              Vereinssatzung (Stand 2022, PDF)
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
