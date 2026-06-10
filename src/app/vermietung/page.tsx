import type { Metadata } from "next";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Users } from "lucide-react";
import { VermietungForm } from "@/components/vermietung-form";

export const metadata: Metadata = {
  title: "Vermietung – Pavillon & Festwiese",
  description:
    "Pavillon (ca. 40 Personen) und Festwiese für Hochzeiten, Vereinsfeste und Zeltlager beim SWV Kirrberg mieten – ganzjährig, mit Sanitäranlagen und Parkplätzen.",
};

const objekte = [
  {
    name: "Pavillon",
    image: "/images/pavillon.jpg",
    alt: "Der Pavillon des SWV Kirrberg",
    preis: "130 € / Tag",
    preisDetail: "160 € inkl. Endreinigung",
    kapazitaet: "ca. 40 Personen im Innenraum",
    text: "Unser Pavillon ist Treffpunkt der Vereinsgruppen und eignet sich für Geburtstage, Familienfeiern und kleinere Veranstaltungen – ganzjährig mietbar.",
  },
  {
    name: "Festwiese (Outdoor Field)",
    image: "/images/gelaende-luftbild.jpg",
    alt: "Luftbild der Festwiese mit Hütte und Pavillon",
    preis: "150 € / Tag",
    preisDetail: "Vermietung ganzjährig",
    kapazitaet: "Große Events, Zelte möglich",
    text: "Die Festwiese eignet sich für größere Events wie Hochzeiten, Vereinsfeste und Zeltlager. Ein eigener Grillplatz gehört dazu.",
  },
];

const faq = [
  {
    frage: "Gibt es sanitäre Anlagen?",
    antwort:
      "Ja, separate sanitäre Anlagen stehen für Mieter von Pavillon und Festwiese zur Verfügung.",
  },
  {
    frage: "Sind Parkplätze vorhanden?",
    antwort:
      "Ja, direkt am Gelände gibt es einen großen Parkplatz – ausreichend auch für größere Feiern.",
  },
  {
    frage: "Gibt es Strom und Wasser?",
    antwort:
      "Pavillon und Grillplatz verfügen über Strom- und Wasseranschluss. Details klären wir gerne bei der Besichtigung.",
  },
  {
    frage: "Wer darf mieten?",
    antwort:
      "Die Vermietung erfolgt ausschließlich an Personen, die das 21. Lebensjahr vollendet haben.",
  },
  {
    frage: "Kann ich das Gelände vorher besichtigen?",
    antwort:
      "Gerne – vereinbaren Sie einfach einen Termin mit unserem Ansprechpartner Stefan Schuh (0179 425 86 44).",
  },
];

export default function VermietungPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="max-w-2xl">
        <h1 className="blaze text-3xl font-bold">Feiern auf dem Hügel</h1>
        <p className="mt-3 text-muted-foreground">
          Pavillon und Festwiese liegen direkt an unserer Vereinshütte – mit
          Aussicht, Grillplatz, Sanitäranlagen und Parkplätzen. Beides können Sie
          ganzjährig mieten.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {objekte.map((o) => (
          <Card key={o.name} className="overflow-hidden pt-0">
            <div className="relative h-56 w-full">
              <Image
                src={o.image}
                alt={o.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <Badge className="absolute right-3 top-3 bg-[oklch(0.77_0.16_90)] text-[oklch(0.25_0.05_90)]">
                {o.preis}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="font-display text-xl">{o.name}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Users className="size-4" />
                {o.kapazitaet}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>{o.text}</p>
              <p className="font-semibold">{o.preisDetail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Geländeplan */}
      <div className="mt-10">
        <h2 className="blaze text-2xl font-bold">Das Gelände</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Biergarten, Grill- und Festwiese, Zeltplatz, Bouleplatz, Parkplatz und
          Wetterstation – alles auf einen Blick.
        </p>
        <div className="relative mt-4 h-[420px] overflow-hidden rounded-lg">
          <Image
            src="/images/gelaende-plan.jpg"
            alt="Beschrifteter Geländeplan: Biergarten, Grill und Festwiese, Zeltplatz, Grillhütte zum Vermieten, Parkplatz, Bouleplatz, Wetterstation"
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="blaze text-2xl font-bold">Häufige Fragen</h2>
          <Accordion type="single" collapsible className="mt-4">
            {faq.map((f) => (
              <AccordionItem key={f.frage} value={f.frage}>
                <AccordionTrigger>{f.frage}</AccordionTrigger>
                <AccordionContent>{f.antwort}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <VermietungForm />
      </div>
    </div>
  );
}
