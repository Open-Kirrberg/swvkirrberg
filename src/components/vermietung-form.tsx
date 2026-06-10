"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  NativeSelect,
  Textarea,
} from "@/components/ui";
import { Mail } from "lucide-react";
import { mailto, site } from "@/lib/site";

/*
 * Anfrage per mailto: Das Formular öffnet eine vorausgefüllte E-Mail im
 * Mailprogramm der Besucher — die Seite ist statisch, es gibt keinen
 * Mailserver. Es werden keine Daten an Dritte übertragen.
 */
export function VermietungForm() {
  const [objekt, setObjekt] = useState("Pavillon");
  const [datum, setDatum] = useState("");
  const [personen, setPersonen] = useState("");
  const [anlass, setAnlass] = useState("");
  const [name, setName] = useState("");
  const [kontakt, setKontakt] = useState("");
  const [nachricht, setNachricht] = useState("");

  const subject = `Mietanfrage ${objekt}${datum ? ` am ${datum}` : ""}`;
  const body = [
    `Objekt: ${objekt}`,
    `Wunschtermin: ${datum || "-"}`,
    `Personenzahl: ${personen || "-"}`,
    `Anlass: ${anlass || "-"}`,
    "",
    `Name: ${name || "-"}`,
    `Telefon / E-Mail: ${kontakt || "-"}`,
    "",
    nachricht,
  ].join("\n");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mietanfrage stellen</CardTitle>
        <CardDescription>
          Die Anfrage öffnet eine vorausgefüllte E-Mail an {site.email}. Alternativ
          erreichen Sie {site.vermietung.ansprechpartner} unter{" "}
          {site.vermietung.telefon}.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="objekt">Objekt</Label>
            <NativeSelect
              id="objekt"
              value={objekt}
              onChange={(e) => setObjekt(e.target.value)}
            >
              <option>Pavillon</option>
              <option>Festwiese (Outdoor Field)</option>
              <option>Pavillon + Festwiese</option>
            </NativeSelect>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="datum">Wunschtermin</Label>
            <Input
              id="datum"
              type="date"
              value={datum}
              onChange={(e) => setDatum(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="personen">Personenzahl</Label>
            <Input
              id="personen"
              type="number"
              min={1}
              placeholder="z. B. 40"
              value={personen}
              onChange={(e) => setPersonen(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="anlass">Anlass</Label>
            <Input
              id="anlass"
              placeholder="z. B. Geburtstag, Hochzeit, Vereinsfest"
              value={anlass}
              onChange={(e) => setAnlass(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Ihr Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="kontakt">Telefon / E-Mail für Rückfragen</Label>
            <Input
              id="kontakt"
              value={kontakt}
              onChange={(e) => setKontakt(e.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="nachricht">Nachricht (optional)</Label>
          <Textarea
            id="nachricht"
            rows={4}
            value={nachricht}
            onChange={(e) => setNachricht(e.target.value)}
          />
        </div>
        <Button asChild className="justify-self-start">
          <a href={mailto(subject, body)}>
            <Mail className="size-4" />
            Anfrage per E-Mail senden
          </a>
        </Button>
        <p className="text-xs text-muted-foreground">
          Hinweis: Vermietung ausschließlich an Personen, die das 21. Lebensjahr
          vollendet haben.
        </p>
      </CardContent>
    </Card>
  );
}
