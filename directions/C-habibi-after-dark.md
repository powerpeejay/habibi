# DIRECTION C — Habibi After Dark

> Phase 1 artifact. One of three. Reviewed alongside `previews/C.html`.
> See `directions/A-modern-persian-heritage.md` and `directions/B-editorial-salon.md` for the others.

---

## Risk profile

`bold` — übersetzt die echte Schaufenster-Realität (Script in Weiß auf dunkler Folie, orange Akzente, Plakate mit Männerportraits) ins Digitale. Die mutigste Direction der drei, mit klar identifizierbarem Risiko bei Kinder-/Eltern-Audience.

## One-sentence philosophy

Das Schaufenster der Meiendorfer Straße bei Nacht — dunkler Wärmepunkt, weißer Script-Wordmark wie Neon, Saffron-Glow als Lichtquelle von unten — Salon nicht als Sterilraum sondern als urbaner Rückzugsort.

## Why this fits this client

- **Audience match (INTAKE §2):** Männer + jüngere Stamm­kunden goutieren das urbane Mood; Familien-Audience braucht das verlässliche helle Wechselspiel (siehe Section-Rhythmus unten — *nicht alles* ist dark, nur Hero + Footer-Bereiche).
- **Primary goal alignment (INTAKE §3):** Adresse/Öffnungszeiten/Preise sitzen in *hellen* Sektionen mit maximaler Lesbarkeit — Dark-Mode ist Hero-Stage, nicht Funktional-Information-Layer.
- **Old-site improvement (INTAKE §4):** als einzige der drei Directions übersetzt sie die echte Schaufenster-Brand-Identität ins Digitale — niemand könnte sie mit einem anderen Friseur verwechseln.

## The ONE move

Hero ist **Dark-Stage**: tief-anthrazites Surface mit textile Grain-Texture, weißer Script-Wordmark "New Look by Habibi" (~7rem Sacramento Bold) als zentrales typographisches Statement, darunter H1 in Fraunces Italic auf Weiß: **"Willkommen, Habibi."** — wobei "Habibi" in Saffron-Orange leuchtet wie eine angelaufene Neonröhre. Vom unteren Hero-Rand strahlt ein **subtiler radial-gradient Saffron-Glow** (~12% Opazität, 60% Vignette-Radius) als "Window-Light"-Anmutung — das digitale Echo der beleuchteten Schaufenster-Folie.

## Color tokens

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#0d0a08` | Deep coffee-black, niemals reines Schwarz (zu hart für Wärme) |
| `--color-surface` | `#1a1612` | Hero-Cards, Team-Card-Hover |
| `--color-surface-2` | `#faf7f2` | **Helle Sektionen** (Standort, Preise, Team) — Wechselspiel-Pflicht |
| `--color-surface-3` | `#f3ede4` | Helle Akzent-Sektionen innerhalb heller Bereiche |
| `--color-border-dark` | `#2d2620` | Hairlines auf Dark |
| `--color-border-light` | `#e6dccd` | Hairlines auf Light |
| `--color-text` | `#faf7f2` | Warm white auf Dark — niemals reines Weiß (zu kalt) |
| `--color-text-light` | `#1a1614` | Ink auf Light-Sections |
| `--color-text-muted-dark` | `#b5a899` | Captions auf Dark |
| `--color-text-muted-light` | `#6b5c50` | Captions auf Light |
| `--color-accent` | `#ff7a2c` | Saffron-Neon — strahlt auf Dark, dezenter Akzent auf Light |
| `--color-accent-hover` | `#ff9a55` | Lighter Saffron für Hover |
| `--color-glow` | `#ff7a2c33` | Glow-Layer (Saffron mit 20% Alpha) für radial gradient |

**Color logic:** Hero + Footer = Dark-Stage. Mittel-Sektionen (Über uns, Team, Leistungen, Standort) = Light. Saffron strahlt auf Dark intensiv, fungiert auf Light als ruhiger Akzent. **Verboten:** großflächige Saffron-Flächen (würde billig wirken), reines #000 (zu hart), reines #fff (zu kalt für Brand-Wärme).

## Typography

- **Wordmark:** **Sacramento** (Google Fonts, self-hosted) — Script-Approximation des echten Schaufenster-Schriftzugs. *Nur* als Wordmark eingesetzt.
- **Display:** **Fraunces** Italic (variable, self-hosted) — kontert die handgeschriebene Wordmark-Wärme mit präziser Editorial-Italic-Note. Weights: 400, 500, 600, plus Italic.
- **Body:** **Inter** (self-hosted) — auf Dark muss Body absolut clean lesen. Weights: 400, 500.
- **Self-hosted:** [x] Phase-3-Pflicht — Phase-1-Preview nutzt Google-Fonts-CDN als Throwaway.
- **Sample headline rendering:**
  - Wordmark "New Look by Habibi" → Sacramento Bold, 112px / 7rem desktop, color `--color-text` (warm white), text-shadow `0 0 24px #ff7a2c44` (subtle Glow-Halo).
  - H1 "Willkommen, Habibi." → Fraunces Italic SemiBold, 64px desktop / 40px mobile, color `--color-text`, "Habibi"-Word in `--color-accent` mit `text-shadow: 0 0 12px #ff7a2c66`.
  - Body Hero → Inter Regular 18px, color `--color-text-muted-dark`, line-height 1.6.

## Spacing & layout character

- **Density:** controlled — Dark-Sections atmosphärisch (160px section padding desktop), Light-Sections funktional (96px section padding desktop).
- **Asymmetry:** mild — Wordmark bleibt zentriert (Schaufenster-Vorbild ist symmetrisch), Photography-Blöcke leicht versetzt.
- **Section rhythm:** **Pflicht-Wechsel Dark↔Light** — niemals 2 adjacent Dark-Sections. Sequenz: Hero (Dark) → Über uns (Light) → Team (Dark mit Light-Cards) → Leistungen (Light) → Standort (Light) → Footer (Dark).

## Texture / atmosphere

- **Grain on Dark:** SVG-noise bei 6% Opazität — gibt dem Schaufenster-Folie-Feel.
- **Saffron-Glow:** radial gradient bei `bottom center`, von `--color-glow` zu `transparent` über 60% Hero-Höhe — simuliert "Lit Window"-Lichtquelle.
- **Photography:** Tungsten-warm, low-light, salon-bei-Abend-stimmung — Pexels-Queries: `barbershop interior night warm light`, `barber chair leather low light`, `hands working hair tungsten`. Hier wäre eine echte Salon-Aufnahme bei Abendstunde *stark* — Inhaber später fragen.
- **Hairlines:** Saffron-1px-Linien (10% Alpha) als Section-Trenner auf Dark; auf Light Standard `--color-border-light`.

## Mood references

1. **https://stripe.com/** — Anchor (trust-and-authority, INSPIRATION §2). Borrow: Dark-Section-Drama mit warmem Glow-Akzent, controlled Saffron-Use als single light-source. Discard: SaaS-hyperscale-Vocabulary, dashboard feel, Gradient-Mesh-Spielereien (zu tech, nicht zu Friseur).
2. **https://www.apple.com/** Produkt-Detail-Seiten (parallax-storytelling, INSPIRATION §2) — Borrow: Dark-Hero-Disziplin mit reduzierter Type-Hierarchie, Wechselspiel Dark↔Light über Sections für Pacing. Discard: tech-Product-Storytelling-Pace, Hyper-Detail-Renders.
3. **https://cosmoss.com/** — Anchor (organic-biophilic, INSPIRATION §2). Borrow: warm-amber-Akzent auf darker-Surface, organische Type-Wärme statt kühl-Tech-Dark. Discard: Wellness-Brand-Vocabulary, Influencer-Aesthetic, "ritual"-Bombast.

## Trade-offs

- **Sacrifice vs A:** verliert Helligkeits-Zugänglichkeit für ältere Kundschaft. Senioren mit reduziertem Sehvermögen bevorzugen Light-Mode-Default; Dark-Hero kann als "modern, nicht für mich" gelesen werden. **Mitigation:** alle funktionalen Inhalte (Adresse, Öffnungszeiten, Preise) leben in Light-Sections, niemals Dark.
- **Sacrifice vs B:** weniger Display-Editorial-Spektakel — Wordmark + Photography übernehmen die Bühne, nicht Drop-Caps. Editorial-Connoisseure könnten es als "zu atmosphärisch, zu wenig Substanz" lesen.
- **Brand-Risiko:** wenn der Inhaber tatsächlich von der Schaufenster-Folie weg will (modernes/helles Update wünscht), ist diese Direction die schlechteste Wahl. **Hard-Frage in Gate 1:** "ist die Schaufenster-Identität ein Brand-Asset, das du *erhalten* möchtest, oder eine Phase, von der du *weg* willst?"

## Implementation notes

- **Best-fit components:** Dark-Hero mit centered Wordmark + radial-Glow-Vignette, Light-Sections mit Card-Lift und Saffron-Akzent-Underlines, Team-Section als Dark-Stage mit Light-Card-Portraits (Theatre-Box-Effekt), Standort als Map-Embed in Light-Card mit Dark-Pin.
- **Avoid for this direction:** großflächige Saffron-Buttons mit weißem Text (verliert "Neon"-Note), Drop-Caps (gehört Direction B), zentrierte Card-Grids auf Dark (wirkt SaaS-Pricing-Page).
- **Performance considerations:** radial-gradient-Glow ist CSS-only (~50 bytes), Grain als SVG inline (~2KB), `prefers-reduced-motion` respektieren (kein Glow-Pulse). Kontrast-Compliance kritisch — Saffron `#ff7a2c` auf Coffee-Black `#0d0a08` testen (sollte ≥ 4.5:1 sein für Body, ≥ 3:1 für UI/Display).
- **Wordmark-Glow-Disziplin:** text-shadow nur subtil (`0 0 24px alpha-44`), niemals laser-glow-Klischee. Lieber zwei Shadow-Layer für tiefere Anmutung.
