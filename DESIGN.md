# DESIGN.md — New Look by Habibi

> Per-client visual system. Read by any AI agent before generating UI.
> Format follows the Google Stitch DESIGN.md spec, adapted for DACH SME projects.
> Pair with `CLAUDE.md` (build rules) in the project root.
> Direction locked: **C — Habibi After Dark** (2026-04-27, Peter approved).

---

## 1. Visual Theme & Atmosphere

**Direction:** `bold` — cross-pollination of *editorial-magazine* discipline + *parallax-storytelling* dark-drama, anchored on a Stadtteil-Friseur-Hospitality core.
**Mood (3 words):** urban-warm, intimate, after-hours.
**Density:** balanced — Dark sections atmospheric (Hero, Footer), Light sections functional (Über uns, Team, Leistungen, Standort).
**One-line philosophy:** *Das Schaufenster der Meiendorfer Straße bei Nacht — als Website. Kein Beauty-Spa, kein Hipster-Barber, sondern ein urbaner Wärmepunkt mit persischer "Habibi"-Begrüßung als wiederkehrendem Hook.*

**Reference anchors** (sites whose feel we're aiming at, never copying):
- https://stripe.com/ — Dark-Section-Drama mit warmem Glow-Akzent als single light-source. *Borrow:* Saffron-as-light, controlled accent. *Discard:* SaaS-hyperscale, dashboard feel.
- https://www.apple.com/ Produkt-Detail-Seiten — Wechselspiel Dark↔Light über Sections für Pacing. *Borrow:* Pacing-Disziplin. *Discard:* Tech-Render-Bombast.
- https://cosmoss.com/ — warm-amber auf darker-Surface, organische Type-Wärme. *Borrow:* Brass-on-Dark, Serif-Italic-Display rhythm. *Discard:* Wellness-Vocabulary, "ritual"-Inflation.

**The ONE move (brand signature):**
Hero ist eine **Dark-Stage** mit zentralem Sacramento-Wordmark "New Look by Habibi" (~7rem, warm-white mit subtilem Saffron-Halo), darunter Fraunces-Italic-H1 mit dem Wort "Habibi" in Saffron-Glow. Vom unteren Rand strahlt ein radial-gradient Saffron-Glow als "Lit Window"-Lichtquelle. Die Hero-Bühne ist auf jeder anderen Seite die *Erinnerung*, an der jede Light-Sektion sich misst.

---

## 2. Color Palette & Roles

Hex-Literale erscheinen niemals im Markup — nur über CSS-Variablen.

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#0d0a08` | Dark-stage base canvas (Hero, Footer) — coffee-black, niemals reines `#000` |
| `--color-bg-light` | `#faf7f2` | Light-stage base (Über uns, Team-Cards-Hintergrund, Leistungen, Standort) |
| `--color-surface` | `#1a1612` | Elevated dark surface (dark Cards, sticky-nav-on-scroll) |
| `--color-surface-light` | `#ffffff` | Light card lift |
| `--color-surface-2` | `#f3ede4` | Light alt-surface (alternierende Light-Sektionen) |
| `--color-border-dark` | `#2d2620` | Hairlines auf Dark |
| `--color-border-light` | `#e6dccd` | Hairlines auf Light |
| `--color-text` | `#faf7f2` | Warm-white auf Dark — niemals `#fff` (zu kalt für Brand-Wärme) |
| `--color-text-light` | `#1a1614` | Ink auf Light — niemals `#000` |
| `--color-text-muted-dark` | `#b5a899` | Captions/Meta auf Dark |
| `--color-text-muted-light` | `#6b5c50` | Captions/Meta auf Light |
| `--color-accent` | `#ff7a2c` | Saffron-Neon — leuchtet auf Dark, akzentuiert auf Light |
| `--color-accent-hover` | `#ff9a55` | Lighter Saffron für Hover |
| `--color-accent-deep` | `#d4501a` | Tieferes Saffron für Light-Section-CTAs (besserer Kontrast auf Light) |
| `--color-glow` | `rgba(255, 122, 44, 0.22)` | Glow-Layer für radial gradient Hero |
| `--color-focus-ring` | `#ff7a2c` | Keyboard-Focus-Outline (gleich Saffron) |

**Color logic & rules:**
- **Hero + Footer = Dark.** Mittel-Sektionen (Über uns, Team, Leistungen, Standort) = Light. **Pflicht-Wechsel:** niemals zwei adjacent Dark-Sections.
- **Saffron erscheint auf max. 5 % jedes Viewports.** CTA-Buttons, Phone-Link, "Habibi"-Wort in Headlines, einzelne Hairlines. Großflächige Saffron-Backgrounds sind verboten (würde billig wirken).
- **Auf Dark:** `--color-accent` strahlt mit text-shadow-Halo. **Auf Light:** `--color-accent-deep` (kein Glow) für Kontrast-Compliance.
- **Body-Text auf Dark** = `--color-text-muted-dark` für Caption/Lead, `--color-text` für primary. Niemals `--color-accent` als Body-Color.
- **Verboten:** reines `#000` oder `#fff` (zu hart, kein Brand-Wärme), Stitch-Persian-Teal (`#006972` — visuell nicht im Schaufenster verankert), Gradient-Mesh-Backgrounds, gradient text.

---

## 3. Typography

**Pairing:** **Sacramento (Wordmark-only)** + **Fraunces Italic (Display)** + **Inter (Body)**.
**Source:** Self-hosted woff2 in `/fonts/`. **Niemals** `fonts.googleapis.com` in Production (CLAUDE.md §10/§13).

**Three-family-justification:** CLAUDE.md §8 sagt "max 2 Familien". Wir nutzen 3 — Sacramento ist aber **strikt Wordmark-only** (erscheint nur in der Brand-Mark "New Look by Habibi", nirgendwo sonst). Damit fungiert Sacramento als **Logo-Asset**, nicht als Type-Face — Fraunces + Inter sind das eigentliche 2-Family-Pairing.

| Style | Family | Size | Weight | Style | Tracking | Line-height | Notes |
|---|---|---|---|---|---|---|---|
| Wordmark | Sacramento | clamp(64px, 8vw, 112px) | 400 | Regular | -0.01em | 0.95 | Logo only. text-shadow für Halo. |
| Display (h1) | Fraunces | clamp(40px, 5.5vw, 68px) | 500 | Italic | -0.025em | 1.05 | "Willkommen, Habibi." |
| Heading (h2) | Fraunces | clamp(28px, 3.6vw, 42px) | 500 | Italic | -0.022em | 1.1 | Section-Headers ("Unser Team", "Leistungen") |
| Subheading (h3) | Fraunces | clamp(20px, 2.2vw, 24px) | 600 | Roman | -0.015em | 1.2 | Card-Titles, Stylist-Names |
| Body Lead | Inter | 18px (1.125rem) | 400 | Regular | 0 | 1.6 | Hero-Subhead, Über-uns-Lead |
| Body | Inter | 16px (1rem) | 400 | Regular | 0 | 1.65 | Standard text |
| Meta | Inter | 14px (0.875rem) | 500 | Regular | 0.02em | 1.5 | Adresse-Strips, Captions |
| Label / Eyebrow | Inter | 12px (0.75rem) | 500 | UPPERCASE | 0.12em | 1.4 | Section-Labels ("Stylisten · 5–6 im Team") |

**Body measure:** 60–70ch.
**Italic discipline:** Fraunces-Italic ist Display-Default (gibt Editorial-Italic-Note). H3 wechselt auf Roman für Listen-Klarheit. Kein Italic im Body-Text.

**Self-hosted loading (Phase 3):**
```html
<link rel="preload" href="/fonts/fraunces-italic.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-regular.woff2" as="font" type="font/woff2" crossorigin>
<!-- Sacramento NICHT preload — wird nur on-demand für Wordmark gebraucht, nicht LCP-relevant -->
```

`@font-face` mit `font-display: swap`. Subsetting: Latin only + Latin-Ext (für ä/ö/ü/ß).

---

## 4. Component Stylings

### Buttons

| Variant | Background | Text | Border | Hover | Use |
|---|---|---|---|---|---|
| Primary (Dark-Section) | `--color-accent` | `#1a0a04` (deep coffee, kontrast-optimiert) | none | `--color-accent-hover` + `translateY(-1px)` + box-shadow expand | Hero-CTA, Footer-CTA |
| Primary (Light-Section) | `--color-accent-deep` | `#ffffff` | none | `#b3400e` + translateY(-1px) | Light-Sektion-CTAs (Karte, Anrufen-Repeat) |
| Secondary (Dark) | transparent | `--color-text` | 1px `--color-border-dark` | border → `--color-accent`, color → `--color-text` | "Auf der Karte zeigen", "WhatsApp" |
| Secondary (Light) | transparent | `--color-text-light` | 1px `--color-border-light` | bg → `--color-surface-2` | Light-Sekundäraktionen |
| Ghost | transparent | `--color-text-muted-*` (kontextabhängig) | none | color → `--color-text` (hell auf Dark, ink auf Light) | Tertiäre Inline-Links |

**Common:**
- Padding: Primary `18px 32px` desktop, `16px 28px` mobile · Secondary `14px 24px`
- Border-radius: Primary **`100px` (Pill-Shape)** — Brand-Signatur auf Dark, weicht Schärfe auf · Secondary `8px` · Ghost: keine
- Font: Inter, weight 600, size 16px desktop / 15px mobile · letter-spacing 0.01em
- Transition: `transform 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out` — niemals `transition-all`
- `:focus-visible` → 2px outline `--color-focus-ring`, 4px offset
- Primary auf Dark: subtiler box-shadow `0 12px 32px -16px rgba(255, 122, 44, 0.6)` (Glow-Halo statt harter Schatten)

### Cards

**Dark-Card** (auf Dark-Section, z.B. Team-Section):
- Background: `--color-surface` (`#1a1612`)
- Border: 1px `--color-border-dark`
- Padding: `24px` mobile, `32px` desktop
- Border-radius: `16px` — weicher als Pill-Buttons, aber organisch
- Hover: `transform: translateY(-2px)`, border-color → `--color-accent`

**Light-Card** (auf Light-Section, z.B. Service-Cards):
- Background: `--color-surface-light` (`#ffffff`)
- Border: 1px `--color-border-light`, OR shadow `0 1px 3px rgba(26, 22, 20, 0.06)` — pick one, never both
- Padding: same as Dark
- Border-radius: `16px`

**Niemals beides** (Border + Shadow). Niemals Card-Stack mit mehr als 2 Schatten-Levels.

### Service-Liste (kein Card-Grid!)

Statt 3-Card-Pricing-Raster (CLAUDE.md §7 verboten) → **dashed-leader Preisliste** als typografische Tafel:

```
Herrenschnitt . . . . . . . . . . . . . . . . . . 16 €
Kinderschnitt . . . . . . . . . . . . . . . . . . XX €
Bart konturieren . . . . . . . . . . . . . . . . XX €
```

Implementation:
- `<dl>` mit `<dt>`/`<dd>`
- Dotted leader via CSS `border-bottom: 1px dotted var(--color-border-light)` mit Spacing-Trick
- Service-Name `Inter 18px regular`, Price `Inter 18px medium`, beide auf gleicher Baseline
- Alternativ-Tier (Highlighted-Service): Service-Name in Fraunces Italic

### Inputs

(Nicht relevant für One-Pager — keine Forms. Spec für Vollständigkeit:)
- Background: kontextabhängig (`--color-bg` auf Dark / `--color-bg-light` auf Light)
- Border: 1px `--color-border-*`, focus → 1px `--color-accent`
- Padding: `12px 16px`
- Label: immer present und assoziiert, niemals placeholder-as-label

### Navigation (Header)

One-Pager ohne klassische Nav. Nur:
- **Sticky Top-Strip** mit Wordmark-mini (Sacramento, 24px) links + Phone-Anchor rechts
- Auf Hero-Section: transparent, kein border-bottom
- Auf Scroll: `backdrop-filter: blur(12px)`, background `rgba(13, 10, 8, 0.85)` (Dark) bzw. `rgba(250, 247, 242, 0.85)` (Light, falls Light-Section sichtbar) — context-aware via JS Scroll-Spy oder einfacher: immer Dark-tint (Hero ist erste Section)
- Border-bottom 1px `--color-border-dark` erscheint auf Scroll
- Mobile: identisch, kein Hamburger nötig (keine Nav-Items zu kollabieren)

---

## 5. Layout Principles

**Spacing scale (8pt rhythm):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160 px

**Grid:**
- Container max-width: **1180px** (etwas tighter als Stitch-Default 1200, weil One-Pager)
- Gutter: 24px mobile, 32px desktop
- Columns: 12 desktop, 4 mobile (Tailwind-kompatibel falls später)

**Section padding (vertikal):**
- **Hero (Dark):** 96px top, 120px bottom desktop · 56px top, 80px bottom mobile (mehr unten für Glow-Atem)
- **Light Functional (Über uns, Team, Leistungen, Standort):** 96px desktop, 64px mobile
- **Footer (Dark):** 80px top, 56px bottom desktop · 56px / 32px mobile

**Whitespace philosophy:** balanced. Dark-Sektionen atmen mehr (atmosphärisch), Light-Sektionen sind funktional-dichter.

**Asymmetry:** **Hero zentriert** (Schaufenster-Symmetrie-Echo, niemals brechen). **Andere Sektionen dürfen asymmetrisch werden** — z.B. Über uns als 7-col-Text + 5-col-Photo, Team als 4×Card-Grid mit einem Highlighted-Card abweichend.

**Section-Wechsel-Choreografie:**
1. Hero (Dark, atmospheric)
2. Über uns (Light surface-2, Salon-Story 2-col)
3. Team (Dark stage, Light-Cards als Theater-Boxen)
4. Leistungen + Preise (Light surface, dashed-leader Liste)
5. Standort + Öffnungszeiten (Light surface-2, Map + Meta-Block)
6. Footer (Dark, Impressum + Phone-Repeat)

---

## 6. Depth & Elevation

Drei explizite Layer. Kein flat-everything, kein shadow-everything.

| Layer | Surface | Shadow | Use |
|---|---|---|---|
| Base | `--color-bg` / `--color-bg-light` | none | Page section background |
| Elevated | `--color-surface` / `--color-surface-light` | **Auf Dark:** `0 4px 16px -8px rgba(0,0,0,0.6), 0 0 0 1px var(--color-border-dark)` · **Auf Light:** `0 1px 3px rgba(26,22,20,0.06)` | Cards, inline panels |
| Floating | `--color-surface*` | **Auf Dark:** `0 24px 64px -24px rgba(0,0,0,0.7)` + warm-tinted glow if accent-related · **Auf Light:** `0 16px 48px -16px rgba(26,22,20,0.12)` | Sticky-nav-on-scroll, Modal (falls je nötig) |

**Saffron-Glow (Hero-only):**
```css
.hero::before {
  content: '';
  position: absolute; left: 50%; bottom: -20vh;
  transform: translateX(-50%);
  width: 130vw; height: 90vh;
  background: radial-gradient(ellipse at center bottom, var(--color-glow) 0%, transparent 60%);
  pointer-events: none;
}
```

Niemals auf anderen Sektionen wiederholen — verliert sonst seine Hero-Signatur-Qualität.

**Texture:**
- **Auf Dark:** SVG-Noise bei 6 % opacity, `mix-blend-mode: screen` — gibt Schaufenster-Folie-Feel.
- **Auf Light:** SVG-Noise bei 3 % opacity, `mix-blend-mode: multiply` — Linen-Touch.
- Inline as data-URI (~2KB jeweils), niemals externes Asset.

**Wordmark-Halo:**
```css
.wordmark {
  text-shadow:
    0 0 32px rgba(255, 122, 44, 0.35),
    0 0 8px rgba(250, 247, 242, 0.2);
}
```
Kein laser-glow-Klischee. Zwei subtile Layer für Tiefe.

---

## 7. Do's and Don'ts

**Do**
- Saffron sparsamer als du denkst — der erste CTA muss sich verdient anfühlen.
- Sacramento *nur* als Wordmark einsetzen. Niemals als H1, niemals in Body, niemals "kreativ" für ein Zitat.
- Light-Dark-Wechsel rhythmisch durchhalten — niemals zwei adjacent Dark-Sektionen.
- Photography editorial-warm: Tungsten, low-light, hands-and-craft, salon-bei-Abend-stimmung.
- "Habibi" als wiederkehrendes Wort in der Copy nutzen (Hero-H1, Footer-Abschluss, einzelne Microcopy-Stellen) — aber max 3-4 mal auf der ganzen Seite, sonst verliert der Hook seine Magie.
- Telefon-CTA min. 2× auf der Page (Hero + Footer); für Mobile ggf. zusätzlich Sticky-Bottom-Bar nur unter 768px.

**Don't**
- Großflächige Saffron-Buttons mit weißem Text (verliert Neon-Note auf Dark — black text auf accent ist unsere Variante).
- SaaS-Pricing-Card-Trio mit "Most Popular"-Badge (CLAUDE.md §7 banned und passt sowieso nicht).
- Drop-Caps (gehört Direction B, nicht hier).
- Reine `#000` / `#fff` — verliert Brand-Wärme.
- Gradient-Backgrounds als Section-Filler (Saffron-Glow ist die EINE Ausnahme, Hero-only).
- Emoji als Icons. Lucide-Icons SVG only (Phone, Map-Pin, Clock, Scissors). 
- Stock-Photo-Männerportraits mit "Established 1893"-Vibe (Gen-Z-Hipster-Barber-Klischee — banned in INTAKE).
- `transition-all` (CLAUDE.md §8). Animiere `transform` und `opacity` only.
- Mehr als 2 Schatten-Levels stapeln.
- Sektion einfügen, nur um die Seite zu füllen — wenn ein Inhalt nichts Neues sagt, raus.

---

## 8. Responsive Behavior

**Breakpoints:** 375 / 768 / 1024 / 1440 px

**Touch targets:** ≥ 44 × 44 px auf Viewports ≤ 768 px. Phone-CTA-Pill desktop 18×32 padding ist eh schon konform.

**Collapsing strategy:**
- **Wordmark-Skala:** desktop 7rem → tablet 5.5rem → mobile 4rem (`clamp(4rem, 11vw, 7rem)`)
- **Hero-H1:** clamp(40px, 5.5vw, 68px) — hält die "Willkommen, Habibi."-Geste über alle Breakpoints.
- **Multi-Column Über-uns / Team / Standort** → single-column ab 768 px.
- **Team-Card-Grid:** 4 Spalten desktop / 2 mobile / 1 ab 375 px nicht nötig (2 cols halten).
- **Meta-Strip Hero:** desktop 4 cols → mobile 2 cols (siehe Preview C.html — bereits implementiert).
- **Mobile Sticky-Bottom-CTA:** ab <768 px, Saffron-Pill mit "Anrufen", fixed bottom-right, padding 12px, mit `safe-area-inset-bottom` für iOS-Notch.
- **Saffron-Glow:** auf mobile reduzieren (`bottom: -10vh`, weniger ausladend).
- **Section-Padding:** auf mobile 64px (statt 96px) — atmen ja, aber ökonomisch.

**Hero-Imagery:**
- Phase 3 Pexels-Foto im Hero (Salon-Innenraum, Tungsten, Abendstimmung) — `<picture>` mit mobile-Crop (4:5) und desktop-Crop (16:9)
- LCP-Image: `fetchpriority="high"` + `loading="eager"` + explicit `width`/`height`
- AVIF + WebP + JPEG-Fallback via `<source type="...">`

**Reduced-Motion (CLAUDE.md §10):**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; animation: none !important; }
  .wordmark { text-shadow: none; } /* Glow ist statisch — bleibt */
}
```

---

## 9. Agent Prompt Guide

**Quick color reference for prompts:**
- Dark base: coffee-black `#0d0a08`
- Light base: linen `#faf7f2`
- Accent (on Dark): saffron-neon `#ff7a2c`
- Accent (on Light): saffron-deep `#d4501a`
- Text on Dark: warm-white `#faf7f2`
- Text on Light: ink `#1a1614`

**Quick type reference:**
- Wordmark: Sacramento, 7rem desktop, with subtle saffron-halo text-shadow
- H1/H2: Fraunces Italic, weight 500
- Body: Inter, regular

**Ready-to-use prompts:**

> **Hero:** "Build the Hero section for New Look by Habibi. Direction `bold` (Habibi After Dark). Dark-stage `--color-bg`, centered Sacramento wordmark at clamp(4rem, 11vw, 7rem) with saffron-halo text-shadow. Below: Fraunces Italic h1 'Willkommen, Habibi.' with the word 'Habibi' in `--color-accent` and tighter glow. Subhead Inter 18px in `--color-text-muted-dark`. Single Saffron-Pill primary CTA with phone link `tel:+4940 8787 5437`. Radial-gradient saffron-glow from bottom (CSS pseudo-element). Meta-strip with 4 items at bottom of hero (Adresse / Stadt / Schnitt-ab-Preis / Stylisten). See DESIGN.md §4 (Buttons) and §6 (Saffron-Glow) for exact specs."

> **Über uns:** "Build the 'Über uns' section. Light surface-2 (`--color-bg-light` mit `--color-surface-2` als alt). 7-col Text-Block + 5-col Salon-Photo, asymmetrisch desktop. Section-Label 'Salon · Meiendorf' in Inter UPPERCASE 12px tracking 0.12em saffron-deep. H2 in Fraunces Italic 'Setz dich. Entspann dich. Habibi.' Body in Inter 18px lead, 16px continuation, max 65ch. Photo right side: Pexels query `barbershop interior warm tungsten`, aspect 4/5, rounded-2xl 16px, soft warm-shadow. No CTA in this section — Story-Section, kein Action-Layer."

> **Team (Dark Stage):** "Build the Team section as Dark stage between two Light sections. `--color-bg` background, retain grain texture, no saffron-glow (Hero-exclusive). Section-Label 'Stylisten' in saffron. H2 in Fraunces Italic '5 Habibis hinter der Schere.' (kann bei 6 Personen auf '6 Habibis' angepasst werden). Below: 4-col grid (Tablet 2, Mobile 2) with Light-Cards as Theater-Boxen — `--color-surface-light` cards on dark stage, contains rounded portrait (Pexels: barber-portrait), Stylist-Name in Fraunces Roman h3, optional 'Specialty'-Pill in Saffron-deep on light. Use Namen-Dummies erst (Reza, Ali, Mahmoud, Daniel, Karim, Omid) — echte Namen ersetzt der Inhaber Phase-3-Final."

> **Leistungen:** "Build the Service-Liste as dashed-leader Preisliste auf Light surface. Section-Label 'Leistungen & Preise'. H2 Fraunces Italic 'Was wir machen.' Below: `<dl>` with services (Herrenschnitt 16€, Kinderschnitt TBD, Bart konturieren TBD, Färben TBD — wait for Phase 3 confirmation from owner). Service-Name links Inter 18px regular, Price rechts Inter 18px medium, dotted leader between via CSS border-bottom-trick. Highlighted Service (z.B. 'Herrenschnitt Klassik' as anchor): Service-Name in Fraunces Italic, Price in saffron-deep. No card-grid — typografische Tafel. See DESIGN.md §4 'Service-Liste' for exact pattern."

> **Standort:** "Build the Standort+Öffnungszeiten section auf Light surface-2. 2-col desktop: links Map (statisches Bild mit Maps-Link, kein Embed wegen DSGVO; falls Embed gewünscht → consent banner Pflicht), rechts Meta-Block: Adresse 'Meiendorfer Str. 115, 22145 Hamburg', Telefon klickbar in Inter Mono-vibe (lass es Inter sein, kein Mono nötig hier), Öffnungszeiten als kompakte Tabelle. Below right: secondary CTA 'Auf Google Maps öffnen' (Secondary-Light variant). LocalBusiness JSON-LD im `<head>` (Phase 3) — siehe CLAUDE.md §10 SEO baseline."

> **Footer:** "Dark Footer mit Repeat-Phone-CTA + Impressum/Datenschutz/Facebook-Links + kompakte Salon-Adresse. Repeat: Wordmark mini Sacramento 32px + 'Bis bald, Habibi.' in Fraunces Italic. Below: Impressum-Link, Datenschutz-Link, Facebook-Link, Photo-Attribution-Link (Pexels). Copyright kompakt. Niemals Newsletter-Signup, niemals 'Trusted by'-Logos."

---

## 10. Brand Identity Artifacts

### Logo / Wordmark

- **Asset state:** kein Vektor-File vom Inhaber (siehe INTAKE §5). Schaufenster-Schriftzug ist Original-Brand-DNA.
- **Phase-2-Decision:** **Sacramento als Wordmark-Approximation** des Schaufenster-Originals — sofort verfügbar, gut genug für Web. Falls Inhaber später ein Vektor-Original liefert (oder wir Foto-trace machen, ~30min in Inkscape), wird `<svg>` direkt eingebettet.
- **Sizing:** Hero 7rem desktop · Header-mini 24-32px · Footer 32-40px.
- **Treatment:** text-shadow-Halo nur auf Dark-Surfaces. Auf Light: kein Halo, color `--color-text-light`.
- **Wordmark in HTML:** als `<h1>`-äquivalent semantisch (im Hero), aber visuell Hero-H1 ("Willkommen, Habibi.") ist die echte H1. Wordmark = `<a class="wordmark" href="/" aria-label="New Look by Habibi — Startseite">New Look by Habibi</a>`.

### Favicon

- **Default:** `node generate-favicon.mjs` aus DESIGN.md-Tokens. Letter "**N**" oder "**H**" — Phase-3-Decision: **"H"** (für "Habibi" — der Brand-Hook, nicht "New Look" der dazu führt). Background `--color-accent` (`#ff7a2c`), Foreground `--color-bg-light` (`#faf7f2`). Output: `favicon.svg`.
- **Optional fallback set:** wenn `sharp` installiert ist (`npm install -D --save-exact sharp` im master) → zusätzlich `favicon.ico` (32×32) + `apple-touch-icon.png` (180×180).
- **HTML head:**
  ```html
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.ico" sizes="any">          <!-- optional fallback -->
  <link rel="apple-touch-icon" href="/apple-touch-icon.png"> <!-- optional fallback -->
  ```

### Photography

**Source-Hierarchie:**

1. **Client-supplied** → falls Inhaber Salon-Innenraum + Team-Portraits liefert → `brand_assets/photography/` → strong upgrade, INTAKE.md §5 nachfragen Phase 3
2. **Pexels (DSGVO-clean self-hosted)** via `node fetch-photos.mjs` → `assets/img/`
3. `placehold.co` ist Phase-1-only (bereits in `_archive` previews), niemals in Production

**Pexels-Queries (für `pexels-config.json`):**

```json
{
  "queries": [
    { "name": "hero",         "query": "barbershop interior warm tungsten low light", "per_page": 4, "orientation": "landscape" },
    { "name": "hero-mobile",  "query": "barber chair leather warm light",              "per_page": 3, "orientation": "portrait"  },
    { "name": "salon-detail", "query": "scissors comb wooden table detail",           "per_page": 3, "orientation": "landscape" },
    { "name": "team",         "query": "barber portrait warm light hands",             "per_page": 6, "orientation": "portrait"  },
    { "name": "craft",        "query": "barber hands cutting hair detail",             "per_page": 3, "orientation": "landscape" }
  ]
}
```

**Art-Direction-Discipline:**
- Tungsten-Wärme · low-light · hands-and-craft framing · niemals leere Wide-Shots · niemals "perfect-smile-stockphoto"-Männerportrait mit waxed-mustache (Hipster-Klischee, banned)
- Schwarz-Weiß-Photos für Team-Portraits **erlaubt**, geben Editorial-Note
- Kein Photoshop-Glamour-Filter; rohe Authentizität bevorzugt

**Format-Rules** (CLAUDE.md §10):
- Pexels `large2x` als Quelle (~1880px breit), JPG/WebP/AVIF im Build
- Explicit `width` + `height` auf jedem `<img>`
- `loading="lazy"` unter dem Fold, `fetchpriority="high"` auf Hero-LCP-Image
- Footer-Attribution: "Photos: Pexels · M. Burrows, A. Saunders, J. Doe" (kompakt) ODER dedizierte Attribution-Page in `/credits.html`

### Iconography

- **Library:** **Lucide** SVG inline. Kein Material-Icons (CDN-Abhängigkeit + Emoji-Style-Fontfile).
- **Verwendete Icons:** Phone, MapPin, Clock, Scissors (für Service-Bullets falls), MessageCircle (WhatsApp falls aktiviert), Facebook (Footer).
- **Sizing:** 20px in Body-Text, 16px in Meta, 24px in Hero-CTA-Begleitung.
- **Color:** erbt `currentColor` vom Parent — Saffron in Action-Kontexten, muted in Decorations.

---

## Sign-off

**Client:** New Look by Habibi
**Direction locked:** 2026-04-27 — Direction C (Habibi After Dark)
**Last updated:** 2026-04-27

**Phase 2 Gate-2 status:** [ ] Confirmed by Peter — proceed to Phase 3 build.
