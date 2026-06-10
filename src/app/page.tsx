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
import { CalendarDays, MapPin, PartyPopper, UtensilsCrossed } from "lucide-react";
import { OpenNowBadge } from "@/components/open-now-badge";
import { kommendeTermine } from "@/data/termine";
import { closedLabel, openingHours } from "@/lib/opening-hours";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

const einstiege = [
  {
    href: "/huette",
    icon: UtensilsCrossed,
    title: "Einkehren",
    text: "Unsere Pächterin bietet innen wie außen Speisen und Getränke an – mit Aussicht bis weit in die Pfalz.",
    image: asset("/images/huette-biergarten.jpg"),
    cta: "Zur Hütte",
  },
  {
    href: "/vermietung",
    icon: PartyPopper,
    title: "Feiern & Mieten",
    text: "Pavillon für ca. 40 Personen und Festwiese für große Feste, Hochzeiten und Zeltlager – ganzjährig mietbar.",
    image: asset("/images/pavillon.jpg"),
    cta: "Zur Vermietung",
  },
  {
    href: "/termine",
    icon: CalendarDays,
    title: "Mitwandern",
    text: "Geführte Touren mit ortskundigen Wanderführern – in der Regel einmal im Monat, Gäste sind willkommen.",
    image: asset("/images/wandern-gruppe.jpg"),
    cta: "Zum Wanderplan",
  },
];

export default function HomePage() {
  const naechste = kommendeTermine(new Date());

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full">
          <Image
            src={asset("/images/hero-sonnenuntergang.jpg")}
            alt="Sonnenuntergang im Biergarten der Skihütte Kirrberg"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.25_0.06_158)]/85 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10">
            <Badge className="mb-3 bg-[oklch(0.77_0.16_90)] text-[oklch(0.25_0.05_90)]">
              seit {site.founded}
            </Badge>
            <h1 className="text-4xl font-bold text-white drop-shadow md:text-5xl">
              {site.claim}
            </h1>
            <p className="mt-2 max-w-xl text-lg text-white/90">
              Die Vereinshütte des Ski- und Wandervereins Kirrberg – auf der Höhe
              zwischen Kirrberg und Zweibrücken.
            </p>
          </div>
        </div>
      </section>

      {/* Einstiegskarten */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {einstiege.map((e) => (
            <Card key={e.href} className="overflow-hidden pt-0">
              <div className="relative h-44 w-full">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <e.icon className="size-5 text-primary" />
                  {e.title}
                </CardTitle>
                <CardDescription>{e.text}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link href={e.href}>{e.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Öffnungszeiten + Termine */}
      <section className="bg-accent">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Öffnungszeiten der Hütte
                <OpenNowBadge />
              </CardTitle>
              <CardDescription>
                Für größere Gruppen empfehlen wir eine Reservierung:{" "}
                {site.huette.reservierung.join(" oder ")}
              </CardDescription>
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
                <div className="flex justify-between gap-4 text-destructive">
                  <dt className="font-semibold">{closedLabel}</dt>
                  <dd />
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nächste Termine</CardTitle>
              <CardDescription>
                Treffpunkt ist immer der Marktplatz Kirrberg.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {naechste.length > 0 ? (
                naechste.map((t) => (
                  <div key={t.tour} className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="font-semibold">{t.tour}</p>
                      <p className="text-sm text-muted-foreground">{t.ort}</p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold">{t.datumLabel}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Der Wanderplan für die neue Saison wird derzeit erstellt – die
                  Touren der letzten Saison finden Sie im Wanderplan.
                </p>
              )}
              <Button asChild variant="outline">
                <Link href="/termine">Kompletter Wanderplan</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Anfahrt */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="blaze text-2xl font-bold">Wie finden Sie uns?</h2>
            <p className="mt-2 text-muted-foreground">
              Unsere Vereinshütte liegt zwischen Kirrberg und Zweibrücken an der
              L214 – mit
              Biergarten, Spielplatz, Bouleplatz und eigener Wetterstation.
              Parkplätze sind vorhanden.
            </p>
            <Button asChild className="mt-4">
              <a href={site.huette.mapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="size-4" />
                Route in Google Maps öffnen
              </a>
            </Button>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg">
            <Image
              src={asset("/images/gelaende-luftbild.jpg")}
              alt="Luftbild des Vereinsgeländes mit Hütte, Pavillon und Grillhütte"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Wanderhütte des Ski- und Wandervereins Kirrberg",
            servesCuisine: "Deutsch",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Homburg-Kirrberg",
              postalCode: site.address.zip,
              addressCountry: "DE",
            },
            telephone: "+49 6841 64849",
            openingHours: ["We-Sa 15:30-20:30", "Su 11:00-20:00"],
            url: "https://www.swvkirrberg.de",
          }),
        }}
      />
    </>
  );
}
