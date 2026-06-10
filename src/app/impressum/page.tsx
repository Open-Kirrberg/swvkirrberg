import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="blaze text-3xl font-bold">Impressum</h1>
      <div className="prose mt-6 space-y-4 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">
            {site.name}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold">Vertreten durch</h2>
          <p className="mt-2">{site.representative} (Stellv. Vorsitzender)</p>
        </section>
        <section>
          <h2 className="text-lg font-bold">Kontakt</h2>
          <p className="mt-2">
            Telefon: {site.phone}
            <br />
            E-Mail: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold">Haftung für Links</h2>
          <p className="mt-2">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>
        </section>
      </div>
    </div>
  );
}
