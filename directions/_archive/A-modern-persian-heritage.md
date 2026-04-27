# DIRECTION A — Modern Persian Heritage

> Phase 1 artifact. One of three. Reviewed alongside `previews/A.html`.
> See `directions/B-editorial-salon.md` and `directions/C-habibi-after-dark.md` for the others.

---

## Risk profile

`safe` — diese Direction ist die wahrscheinlichste Wahl des Inhabers und greift die existierende Stitch-Vorvision auf, aber rebuilded sie produktionsreif (kein Material-3-Bloat, keine CDN-Fonts, keine `transition-all`).

## One-sentence philosophy

Stadtteil-Friseur als Modern Oasis: hanseatische Klarheit auf Linen-Untergrund, Saffron-Orange als Wärme-Akzent, Script-Wordmark aus dem Schaufenster als typographisches Echo der echten "Habibi"-Begrüßung.

## Why this fits this client

- **Audience match (INTAKE §2):** Locals + Stammkundschaft + Familien — Linen + warmes Orange wirkt einladend, nicht kühl-Spa und nicht Hipster-Barber.
- **Primary goal alignment (INTAKE §3):** Adresse/Öffnungszeiten/Preise prominent in ruhiger Hierarchie — nichts schreit, alles ist da.
- **Old-site improvement (INTAKE §4):** ersetzt Promo-Sticker-Ästhetik durch ruhig-listende Preisstruktur; bringt Persische-Heritage-Tiefe ein, die Facebook nicht kann.

## The ONE move

Doppelter Type-Anker im Hero: **Script-Wordmark "New Look by Habibi"** (Sacramento ~5rem, weißer Strich auf Linen) sitzt asymmetrisch oben links und ist *das Logo* — darunter H1 in Fraunces Display Italic: **"Willkommen, Habibi."** Die Brand-Begrüßung wird dadurch typographisch zelebriert statt nur in der Copy versteckt. Über das ganze Layout ein **subtiles geometric-tile Grid** (1px Gold-Linien, 8% Opazität) als persischer Pattern-Echo, niemals dominant.

## Color tokens

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#faf6f1` | Linen base canvas (wärmer als Stitch-Surface) |
| `--color-surface` | `#ffffff` | Service-Cards, Team-Cards |
| `--color-surface-2` | `#f3ede4` | Akzent-Sektionen (Über uns, Standort) |
| `--color-border` | `#e6dccd` | Hairlines, Card-Outlines |
| `--color-text` | `#1a1614` | Primary text (Ink) |
| `--color-text-muted` | `#6b5c50` | Captions, Meta-Info |
| `--color-accent` | `#d4501a` | Saffron — CTA, Wordmark-Underline, Active-Nav |
| `--color-accent-hover` | `#b3400e` | Saffron Deep |
| `--color-accent-soft` | `#c8902c` | Persian Gold — sparingly für "Featured" Cards, Initialen |

**Color logic:** Linen dominiert (~80%), Saffron erscheint nur an Action-Stellen (CTA-Buttons, Telefon-Link, "Habibi"-Wort in Headlines). Persian Gold ist Premium-Highlight (niemals großflächig). **Verboten:** Stitch's Persian Teal `#006972` — fühlt sich nicht visuell verankert an im realen Schaufenster, schafft unnötige Spannung mit Saffron.

## Typography

- **Display:** **Fraunces** (variable, Italic-fähig) — Google Fonts, self-hosted woff2 in `/fonts/`. Weights: 400 Regular, 500 Medium, 600 SemiBold. Italic für Hero-H1.
- **Script (Wordmark):** **Sacramento** — Google Fonts, self-hosted. Nur als Wordmark-Schriftzug verwendet, nirgendwo sonst (würde sonst kitschig).
- **Body:** **Inter** — Google Fonts, self-hosted. Weights: 400 Regular, 500 Medium, 600 SemiBold.
- **Self-hosted:** [x] Phase-3-Pflicht (CLAUDE.md §10) — Phase-1-Preview nutzt Google-Fonts-CDN als pragmatische Throwaway-Lösung.
- **Sample headline rendering:**
  - H1 "Willkommen, Habibi." → Fraunces Italic SemiBold, 64px desktop / 40px mobile, line-height 1.05, tracking -0.02em. "Habibi" hervorgehoben in `--color-accent`.
  - Subhead → Inter Regular 18px, line-height 1.6, color text-muted.
  - Wordmark "New Look by Habibi" → Sacramento Regular, 80px desktop / 48px mobile, color text.

## Spacing & layout character

- **Density:** generous — section padding 128px desktop / 80px mobile.
- **Asymmetry:** mild — Wordmark links versetzt, Hero-Photography rechts mit organischem Gold-Border (rounded-xl 24px). Symmetrie-Fall-Back ab Tablet möglich.
- **Section rhythm:** wechselnde Surface-Tiers (`--color-bg` ↔ `--color-surface-2`) als ruhige Atemzüge — nie zwei adjacent gleiche Surfaces.
- **Container:** max-width 1180px, gutter 24px desktop / 16px mobile.

## Texture / atmosphere

- **Grain-overlay:** SVG-noise bei 3% Opazität auf bg-Layer — nur fühlbar, nicht sichtbar. Gibt Linen-Touch.
- **Geometric tile pattern:** 1px Gold-Linien-Raster im Hero-Hintergrund (8-pointed Star Tessellation), 8% Opazität — persischer Hauch ohne Klischee.
- **Photography:** warm tungsten · hands-and-craft framing · keine leeren Salon-Wide-Shots — Pexels-Queries: `barbershop interior warm light`, `barber hands scissors detail`, `salon chair leather warm`.

## Mood references

1. **https://andreas-duerr.vercel.app/** — Personal Vault. Borrow: Cream/Orange/Ink-Palette-Disziplin und die Fraunces+Inter-Type-Pairing-Architektur. Discard: Handwerker-Vocabulary, Trust-Score-Patterns, Beton-Photography.
2. **https://www.aesop.com/** — Anchor (luxury-quiet, INSPIRATION §2). Borrow: hands-and-craft photography framing, generous whitespace, restrained accent use. Discard: skincare-luxury Vocabulary, sterile Premium-Ton — wir sind Stadtteil, nicht Boutique-Hotel.
3. **https://www.notion.so/** — Anchor (warm-organic, INSPIRATION §2). Borrow: Body-Type-Wärme auf warm-cream Surface, calm sectioning rhythm. Discard: SaaS-Productivity-Vocabulary, dashboard feel.

## Trade-offs

- **Sacrifice vs B:** weniger editorial-magazine drama — weniger Display-Spektakel, dafür ruhiger und schneller scanbar.
- **Sacrifice vs C:** weniger urbane-Schaufenster-Energy — verliert das "Lit Window in der Meiendorfer Straße"-Gefühl, dafür gewinnt sie Helligkeits-Zugänglichkeit für ältere Kundschaft.
- **Photography-Risiko:** lebt von guter Hands-and-Craft-Photography. Pexels liefert das (Queries oben), aber Salon-Eigenfotos wären deutlich stärker — Inhaber später fragen.

## Implementation notes

- **Best-fit components:** asymmetric hero mit Wordmark + Photo-Block, Service-Liste mit dashed-leader (klassisches Salon-Menü-Pattern aus Stitch-DESIGN.md übernommen — funktioniert), Team-Cards mit runden Portraits + Specialty-Badges in Saffron, Standort-Block als Card mit Map-Snapshot.
- **Avoid for this direction:** Card-Raster mit Gradient-Backgrounds, Icon-Rows mit harten Schatten, animated Hero-Carousels.
- **Performance considerations:** Grain als SVG inline (~2KB), Pattern-Tile als CSS `background-image: url(data:image/svg+xml...)` (~1KB). Fraunces variable woff2 ~120KB — preload nur Display-Subset.
- **Wordmark-Lieferung:** Phase 2 entscheiden — Sacramento als Approximation (sofort) oder Vector-Trace vom Schaufenster (genauer, ~30min Aufwand).
