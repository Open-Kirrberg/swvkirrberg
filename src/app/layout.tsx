import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source-sans",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swvkirrberg.de"),
  title: {
    default: `${site.shortName} – ${site.claim}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Ski- und Wanderverein Kirrberg e.V. – Vereinshütte mit Gastronomie und Aussicht zwischen Kirrberg und Zweibrücken, Pavillon- und Festwiesen-Vermietung, geführte Wanderungen und Boule.",
  openGraph: {
    siteName: site.shortName,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`${sourceSans.variable} ${fraunces.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
