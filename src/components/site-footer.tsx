import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[oklch(0.42_0.10_158)] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="flex items-start gap-3">
          <Image
            src={asset("/images/wappen.png")}
            alt="Wappen SWV Kirrberg"
            width={48}
            height={55}
            className="h-12 w-auto"
          />
          <div>
            <p className="font-bold">{site.name}</p>
            <p className="text-sm text-white/80">
              <span className="text-[oklch(0.77_0.16_90)]">gegründet {site.founded}</span>
            </p>
          </div>
        </div>

        <div className="text-sm leading-relaxed text-white/90">
          <p className="font-semibold text-white">Kontakt</p>
          <p>Vertreten durch: {site.representative}</p>
          <p>
            {site.address.street}, {site.address.zip} {site.address.city}
          </p>
          <p>{site.phone}</p>
          <a href={`mailto:${site.email}`} className="underline hover:text-white">
            {site.email}
          </a>
        </div>

        <div className="text-sm leading-relaxed text-white/90">
          <p className="font-semibold text-white">Mehr</p>
          <ul className="space-y-1">
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.wetterstationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Wetterstation Kirrberg
              </a>
            </li>
            <li>
              <Link href="/impressum" className="underline hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="underline hover:text-white">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} {site.name} – Alle Rechte vorbehalten
      </div>
    </footer>
  );
}
