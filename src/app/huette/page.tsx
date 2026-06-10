import type { Metadata } from "next";
import Image from "next/image";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { FileDown, Phone } from "lucide-react";
import { OpenNowBadge } from "@/components/open-now-badge";
import { closedLabel, openingHours } from "@/lib/opening-hours";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Hütte & Gastronomie",
  description:
    "Öffnungszeiten, Speisekarte und Reservierung der Wanderhütte des SWV Kirrberg – Biergarten mit Aussicht zwischen Kirrberg und Zweibrücken.",
};

const galerie = [
  {
    src: asset("/images/huette-luftbild.jpg"),
    alt: "Luftbild der Wanderhütte mit Biergarten",
  },
  {
    src: asset("/images/huette-biergarten.jpg"),
    alt: "Biergarten mit Blick über das Land",
  },
  {
    src: asset("/images/hero-sonnenuntergang.jpg"),
    alt: "Gäste im Biergarten bei Sonnenuntergang",
  },
  {
    src: asset("/images/landschaft-sonnenuntergang.jpg"),
    alt: "Sonnenuntergang über den Wiesen am Höhenweg",
  },
];

export default function HuettePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="max-w-2xl">
        <h1 className="blaze text-3xl font-bold">Hütte & Gastronomie</h1>
        <p className="mt-3 text-muted-foreground">
          Die Hütte wurde 1969 erbaut und über die Jahre zu ihrer heutigen Größe
          erweitert. Unsere Pächterin bietet Ihnen im Innen- wie im Außenbereich
          diverse Speisen und Getränke an – mit einem der schönsten Ausblicke der
          Region.
        </p>
      </div>

      {/* Galerie */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galerie.map((bild) => (
          <div key={bild.src} className="relative h-48 overflow-hidden rounded-lg">
            <Image
              src={bild.src}
              alt={bild.alt}
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Öffnungszeiten
              <OpenNowBadge />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2 text-sm">
              {openingHours.map((slot) => (
                <div key={slot.label} className="flex justify-between gap-4">
                  <dt className="font-semibold">{slot.label}</dt>
                  <dd>
                    {slot.open} – {slot.close} Uhr
                    {slot.note ? (
                      <span className="block text-muted-foreground">({slot.note})</span>
                    ) : null}
                  </dd>
                </div>
              ))}
              <div className="text-destructive">
                <dt className="font-semibold">{closedLabel}</dt>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reservierung</CardTitle>
            <CardDescription>
              Für größere Gruppen empfehlen wir eine Reservierung bei unserer
              Pächterin.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {site.huette.reservierung.map((nr) => (
              <Button key={nr} asChild variant="outline" className="w-full justify-start">
                <a href={`tel:${nr.replace(/\s/g, "")}`}>
                  <Phone className="size-4" />
                  {nr}
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Karten */}
      <div className="mt-10">
        <h2 className="blaze text-2xl font-bold">Speise- und Getränkekarte</h2>
        <p className="mt-2 text-muted-foreground">
          Die aktuellen Karten als PDF zum Herunterladen.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild>
            <a href={asset("/downloads/speisekarte.pdf")} target="_blank" rel="noopener">
              <FileDown className="size-4" />
              Speisekarte (PDF)
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={asset("/downloads/getraenkekarte.pdf")} target="_blank" rel="noopener">
              <FileDown className="size-4" />
              Getränkekarte (PDF)
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
