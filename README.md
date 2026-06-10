# swvkirrberg.de — Redesign

Neubau der Website des Ski- und Wandervereins Kirrberg e.V. nach
`../PRD-swvkirrberg-redesign.md` und `../brand.md`.

## Stack

- **Next.js 16** (App Router, alle Seiten statisch vorgerendert)
- **@mind-studio/ui** (lokal eingebunden via `file:../../mind/ui`) mit eigenem
  Theme `swv-kirrberg` (`src/lib/theme.ts`)
- Tailwind v4, Fraunces (Display) + Source Sans 3 (Text) via `next/font`
- Echte Fotos & PDFs der alten Duda-Website (`scripts/fetch-assets.sh`)

## Entwicklung

```bash
pnpm install        # benötigt gebautes ../../mind/ui (dort: pnpm install && pnpm build)
pnpm dev            # http://localhost:3091
pnpm build          # statischer Produktions-Build
```

## Inhalte pflegen

| Was | Wo |
|---|---|
| Wanderplan / Termine | `src/data/termine.ts` |
| Öffnungszeiten | `src/lib/opening-hours.ts` |
| Kontakt, Telefonnummern, Preise | `src/lib/site.ts` |
| Speise-/Getränkekarte, Satzung | `public/downloads/*.pdf` |
| Fotos | `public/images/` |

## Bekannte Besonderheit

Komponenten immer aus `@/components/ui` importieren (nicht direkt aus
`@mind-studio/ui`): Im dist-Build der Lib fehlt einigen Komponenten die
`"use client"`-Direktive, während `cn()` in einem Client-Chunk liegt — der
Re-Export-Barrel macht alle Komponenten zu Client-Referenzen und umgeht das.
