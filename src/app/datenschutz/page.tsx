import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="blaze text-3xl font-bold">Datenschutzerklärung</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold">Keine Cookies, kein Tracking</h2>
          <p className="mt-2">
            Diese Website verwendet keine Cookies, keine Analyse-Tools und bindet
            keine externen Dienste (z. B. Karten oder Schriftarten von
            Drittservern) ein. Es werden keine personenbezogenen Daten an Dritte
            übertragen.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold">Server-Logfiles</h2>
          <p className="mt-2">
            Beim Aufruf der Website verarbeitet der Hosting-Anbieter automatisch
            technische Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des
            Zugriffs), soweit dies für den Betrieb der Seite technisch
            erforderlich ist (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold">Kontaktaufnahme</h2>
          <p className="mt-2">
            Wenn Sie uns per E-Mail kontaktieren (auch über die
            Anfrage-Schaltflächen dieser Website, die Ihr E-Mail-Programm öffnen),
            verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung der
            Anfrage.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold">Verantwortlicher</h2>
          <p className="mt-2">
            {site.name}, {site.representative}, {site.address.street},{" "}
            {site.address.zip} {site.address.city},{" "}
            <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </section>
      </div>
    </div>
  );
}
