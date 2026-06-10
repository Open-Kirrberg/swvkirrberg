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
import { CloudSun, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "Kontakt zum SWV Kirrberg und Anfahrt zur Vereinshütte zwischen Kirrberg und Zweibrücken an der L214.",
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="max-w-2xl">
        <h1 className="blaze text-3xl font-bold">Kontakt & Anfahrt</h1>
        <p className="mt-3 text-muted-foreground">
          Sie erreichen uns per E-Mail oder Telefon – und finden uns auf der Höhe
          an der L214 zwischen Kirrberg und Zweibrücken.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Verein</CardTitle>
            <CardDescription>{site.name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>
              Vertreten durch: {site.representative}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  <Phone className="size-4" />
                  {site.phone}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${site.email}`}>
                  <Mail className="size-4" />
                  E-Mail schreiben
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground">
              Reservierung in der Hütte: {site.huette.reservierung.join(" oder ")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Anfahrt</CardTitle>
            <CardDescription>{site.huette.lage}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>
              Parkplätze sind direkt am Gelände vorhanden. Zu Fuß erreichen Sie die
              Hütte über die Wanderwege rund um den Kirrberger Wald.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href={site.huette.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="size-4" />
                  In Google Maps öffnen
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={site.wetterstationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CloudSun className="size-4" />
                  Wetter an der Hütte
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Der Kartenlink öffnet Google Maps in einem neuen Fenster – auf dieser
              Website selbst werden keine externen Dienste eingebunden.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-8 h-[380px] overflow-hidden rounded-lg">
        <Image
          src={asset("/images/gelaende-plan.jpg")}
          alt="Geländeplan mit Biergarten, Festwiese, Zeltplatz, Parkplatz, Bouleplatz und Wetterstation"
          fill
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
