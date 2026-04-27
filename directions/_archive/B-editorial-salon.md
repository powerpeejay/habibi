# DIRECTION B — Editorial Salon

> Phase 1 artifact. One of three. Reviewed alongside `previews/B.html`.
> See `directions/A-modern-persian-heritage.md` and `directions/C-habibi-after-dark.md` for the others.

---

## Risk profile

`adjacent` — gleicher Trust-Anker wie A (heller Cream-Untergrund, kein Dark-Mode-Schock), aber stilistisch deutlich höher gepitcht. Magazine-Tonfall statt Stadtteil-Tonfall.

## One-sentence philosophy

Der Salon als Magazin: Inhaber-Story als Editorial, große asymmetrische Photography, Display-Italic in dramatischem Größensprung, persische Manuskript-Tradition als Drop-Cap-Zitat — Wärme kommt aus Foto + Cream + warmem Gold, nicht aus Orange-Flächen.

## Why this fits this client

- **Audience match (INTAKE §2):** für die Stamm­kundschafts­untergruppe mit Stilbewusstsein — Männer, denen Type, Photography und kuratierter Look wichtig sind. Familien sehen es als Premium-Signal ohne Snobismus, weil das Editorial human bleibt (echte Salon-Photos, echte Team-Stories).
- **Primary goal alignment (INTAKE §3):** Adresse + Preise sind als ruhige Sidebar-Spalte oder Sticky-Footer integriert — informationally vorhanden, ästhetisch nicht im Weg.
- **Old-site improvement (INTAKE §4):** Maximaler Sprung gegenüber Facebook-Only-Auftritt — vermittelt "Salon mit Geschichte" statt "Friseur mit Preisen".

## The ONE move

**Drop-Cap-"H" von "Habibi"** in Instrument Serif Italic bei 14rem, weicher Pomegranate-Brown, ragt 30% ins Hero-Photo hinein wie eine illuminierte Initiale aus einem persischen Manuskript. Die H1 wickelt sich asymmetrisch um diese Initiale: "abibi heißt mein Lieblingswort. Komm rein." — der Buchstabe ist gleichzeitig Wordmark-Echo, Display-Schmuck und kulturelle Geste, drei Funktionen in einer Form.

## Color tokens

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#f7f1e8` | Deep Cream — wärmer als A, näher an Buchpapier |
| `--color-surface` | `#ffffff` | Card-Lift, niemals großflächig |
| `--color-surface-2` | `#ede2d0` | Akzent-Sektionen — Editorial-Pull-Quotes, Sidebar |
| `--color-border` | `#d4c5af` | Hairlines, Spalten-Trennlinien |
| `--color-text` | `#221814` | Deeper Ink (Buchschwarz, nicht Tinten-Grau) |
| `--color-text-muted` | `#5a4639` | Captions, Datums-Marker |
| `--color-accent` | `#b8842c` | Persian Gold / Pomegranate-Brown — Drop-Caps, Pull-Quotes, CTA-Underlines |
| `--color-accent-hover` | `#976921` | Darker Gold |
| `--color-accent-rare` | `#d4501a` | Saffron — *nur* für Telefon-Link + "Anrufen"-Button (Hard-Action-Reservoir) |

**Color logic:** Gold dominiert die Akzent-Welt, Saffron-Orange ist *rare* und reserviert für die EINE Hard-Action (Anrufen). Diese Disziplin macht den Anruf-Button visuell unausweichlich, weil er die einzige Saffron-Stelle auf der Seite ist.

## Typography

- **Display:** **Instrument Serif** (Italic-Variant, Google Fonts, self-hosted) — open-source Migra-Alternative mit dramatischen Italic-Kurven. Weights: 400 Regular, 400 Italic.
- **Body:** **Geist Sans** (Vercel-Open-Source, self-hosted) — clean, präzise, geometric ohne kalt zu sein. Weights: 400, 500, 600.
- **Mono (Meta):** **JetBrains Mono** für Datum/Uhr-Angaben in Sidebar (Editorial-Touch). Weight: 400.
- **Self-hosted:** [x] Phase-3-Pflicht — Phase-1-Preview nutzt Google-Fonts-CDN als Throwaway.
- **Sample headline rendering:**
  - Drop-Cap "H" → Instrument Serif Italic, 224px / 14rem desktop, color `--color-accent`, line-height 0.85, hängend wie illuminated initial.
  - H1 Resttext → Instrument Serif Italic 56px / 3.5rem, line-height 1.0, tracking -0.03em.
  - Body → Geist 17px / 1.0625rem, line-height 1.65, max-width 62ch.
  - Section-Labels → Geist 12px UPPERCASE, letter-spacing 0.12em, color `--color-text-muted`.

## Spacing & layout character

- **Density:** balanced — Editorial verlangt Atmen, aber auch echten Content. Section padding 144px desktop / 96px mobile.
- **Asymmetry:** stark — Magazine-Grid: 12-Spalten-Raster, Display-Initialen brechen aus, Photo-Blöcke nehmen 7-Spalten, Body-Text 5-Spalten, hairline Trennlinien zwischen Spalten.
- **Section rhythm:** Editorial-Pacing — Hero (full-bleed Photography), Story (2-Spalten-Artikel-Layout), Team (Portrait-Gallery wie Mitarbeiter-Index in Magazin), Services (Preisliste als typografische Tafel mit dashed leaders), Standort (Sidebar-Style Meta-Box mit Mono-Type).

## Texture / atmosphere

- **Paper-grain:** 4% SVG-noise auf bg-Layer — Buchpapier-Anmutung, taktil.
- **Photography:** editorial portrait — Salon-Inhaber in seinem Element, halbformell, warmes Tungsten, mid-distance shots. Pexels-Queries: `barbershop owner portrait warm`, `salon interior editorial light`, `hands cutting hair detail close`. Salon-Eigenfotos wären *stark* aufgewertet hier — Phase 3 vom Inhaber abklären.
- **Hairlines:** 1px Gold-Linien als Spalten-Trenner und Section-Schließer (klassisches Magazin-Vokabular).

## Mood references

1. **https://www.are.na/** — Anchor (editorial-magazine, INSPIRATION §2). Borrow: typographic hierarchy, hairline-trenner zwischen Sections, Datum-/Meta-Marker in Mono-Type. Discard: Beta-research-aesthetic, art-school inside-talk, fragmented-feed UX.
2. **https://pitchfork.com/** — Anchor (editorial-magazine, INSPIRATION §2). Borrow: massive Italic-Display-Headlines, Small-Caps Section-Labels, Pull-Quote-Treatment. Discard: media-publication chaos, ad-density, Score-Rating-Prominenz (würde Friseur-Stil-Bewertung andeuten — falsch).
3. **https://cosmoss.com/** — Anchor (organic-biophilic, INSPIRATION §2). Borrow: warm-cream Surface + Brass-Akzent + Serif-Display-Rhythmus. Discard: Wellness-Brand-Vocabulary ("ritual", "energy"), Influencer-Photography.

## Trade-offs

- **Sacrifice vs A:** weniger Direktheit — die Adresse braucht 2 Sekunden mehr zum Finden, weil Editorial die Story davor zelebriert. Riskant für die Walk-In-Hauptaudience, deren primäres Goal "Adresse+Öffnungszeiten finden" ist.
- **Sacrifice vs C:** weniger Brand-Truth-zum-Schaufenster — diese Direction ist ästhetisch raffinierter, aber sie ignoriert die echte Schaufenster-Realität (Script auf Schwarz). Sie pitcht den Salon, wie er *könnte*, nicht wie er *ist*.
- **Photography-Risiko:** Editorial lebt von Photography. Mit Stock-Pexels funktional OK, aber das wahre Versprechen erfordert Salon-Eigenfotos. **Hard-Empfehlung wenn B gewählt:** Inhaber zu einem 2-Stunden-Photo-Shoot überreden (Iphone-Pro mit Naturlicht reicht, kein Studio nötig).

## Implementation notes

- **Best-fit components:** Drop-Cap-Hero, asymmetric 12-col grid, Editorial-Pull-Quotes mit Anführungszeichen-Display-Glyph, Team-Portraits im Mitarbeiter-Index-Layout (Liste mit Portrait + Bio-Spalte), dashed-leader Preisliste als typografische Tafel.
- **Avoid for this direction:** zentrierte Hero-Compositions, Service-Cards-mit-Icons, Card-Grids mit harten Schatten, gradient-Backgrounds.
- **Performance considerations:** Instrument Serif full Italic ~110KB woff2 — preload + subset wenn möglich. Drop-Cap-Render serverside mit `:first-letter`-CSS, kein JS. Hairline-SVG-Trenner inline (~0.5KB).
- **Drop-Cap-Risiko:** muss responsive degradieren — auf Mobile (375px) wird das "H" zu groß und überdeckt Body-Text. Lösung: ab <600px Drop-Cap auf 6rem, kein Wrap-Around.
