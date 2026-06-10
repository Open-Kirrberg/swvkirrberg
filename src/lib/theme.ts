import { parseTheme } from "@mind-studio/ui";
import { asset } from "@/lib/asset";

/*
 * swv-kirrberg — Markentheme nach brand.md:
 * Tannengrün (#0C7D4A) als Primärfarbe, Sonnengold (#DDB206) als Akzent,
 * Wiese (#E8F4EC) als helle Fläche. Nur abweichende Tokens; Rest erbt vom
 * Mind-Basistheme.
 */
export const swvKirrberg = parseTheme(
  {
    name: "swv-kirrberg",
    label: "SWV Kirrberg",
    light: {
      background: "#fbfbf6",
      primary: "oklch(0.52 0.11 158)",
      "primary-foreground": "#ffffff",
      accent: "#e8f4ec",
      "accent-foreground": "oklch(0.32 0.08 158)",
      ring: "oklch(0.52 0.11 158)",
      destructive: "oklch(0.5 0.17 29)",
      "chart-1": "oklch(0.52 0.11 158)",
      "chart-2": "oklch(0.77 0.16 90)",
    },
    dark: {
      primary: "oklch(0.72 0.13 158)",
      "primary-foreground": "oklch(0.18 0.03 158)",
      ring: "oklch(0.72 0.13 158)",
    },
    radius: "0.5rem",
    font: {
      sans: '"Source Sans 3", "Source Sans Pro", system-ui, sans-serif',
    },
    logo: { light: asset("/images/wappen.png"), dark: asset("/images/wappen.png") },
    symbol: { light: asset("/images/wappen.png"), dark: asset("/images/wappen.png") },
    pattern: { kind: "dots", opacity: 0.05 },
  },
  { source: "swvkirrberg/src/lib/theme" },
);
