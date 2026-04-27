# INSPIRATION.md — Reference Catalog

> Phase 1 mood references and Phase 3 component patterns.
> Claude Code consults this file before suggesting any external reference.
> Peter grows §3 Personal Vault as he finds new things worth remembering.

---

## 1. Sources by Purpose

### A. Whole-site galleries (Phase 1 — direction-finding)

| Source | URL | Best for | Notes |
|---|---|---|---|
| motionsites.ai | https://motionsites.ai/ | Sites with notable motion design | Use for `parallax-storytelling`, `exaggerated-minimalism`, `kinetic-typography` directions |
| siteinspire.com | https://www.siteinspire.com/ | Broadest curated index, decade+ of taste | Filter by Style + Subject |
| godly.website | https://godly.website/ | Modern, often experimental | Skews maximalist |
| httpster.net | https://httpster.net/ | Editorial curation | Strong on editorial / typographic work |
| land-book.com | https://land-book.com/ | Landing pages specifically | Best matches Peter's brochure-site work |
| onepagelove.com | https://onepagelove.com/ | Single-page sites | Good for tightly-scoped client work |
| minimal.gallery | https://minimal.gallery/ | Minimal aesthetics | Direct fit for `refined-minimal`, `swiss-modernism` |
| bestfolios.com | https://www.bestfolios.com/ | Portfolio / agency sites | Use for `exaggerated-minimalism`, photographer/creative briefs |

### B. Specialist references (Phase 1 — typographic & color anchoring)

| Source | URL | Best for |
|---|---|---|
| typewolf.com | https://www.typewolf.com/ | Typography-led sites + curated font pairings |
| fontsinuse.com | https://fontsinuse.com/ | Type pairings in real-world context |
| coolors.co/palettes/trending | https://coolors.co/palettes/trending | Palette starting points (verify accessibility) |
| happyhues.co | https://www.happyhues.co/ | Pre-tested palette + role assignments |

### C. Component & pattern libraries (Phase 3 — build)

| Source | URL | Best for |
|---|---|---|
| 21st.dev | https://21st.dev/ | React component patterns (hero, pricing, footer, nav) |
| ui.shadcn.com | https://ui.shadcn.com/ | Accessible primitives — even when not using React, the markup/a11y patterns are reference-grade |
| tailwindui.com (paid) | https://tailwindui.com/ | Reference for spacing rhythm + component composition |
| floating-ui.com | https://floating-ui.com/ | Tooltip / dropdown positioning logic |
| cssgradient.io | https://cssgradient.io/ | When a direction calls for gradients (rare) |

### D. Use with caution

These reward taste but punish naive copying. Use for *concept extraction*, never literal layout reference.

| Source | URL | Why cautious | When OK |
|---|---|---|---|
| Dribbble | https://dribbble.com/shots/following/web-design | Static images that hide responsive failure, broken hierarchies, illegible contrast | Color combinations, composition ideas, atmosphere |
| Awwwards | https://www.awwwards.com/ | Celebrates over-design; many SOTY winners would fail Lighthouse | High-craft motion ideas, bold direction proofs |
| Behance | https://www.behance.net/ | Same as Dribbble | Brand identity systems, typography concepts |

**Rule:** if a Dribbble/Awwwards reference is suggested in Phase 1, the direction file must explain *what specifically* is borrowed and *what's discarded.* "I like this" is not a reason.

---

## 2. By Direction Matrix Row

Starter references per direction. These are jumping-off points; the personal vault (§3) supersedes them as it grows.

### warm-organic
- **Anchors:** notion.so (warm typography, soft surfaces), aesop.com (botanical photography + restrained type)
- **Browse:** typewolf, minimal.gallery, fontsinuse
- **Extract:** type warmth, photography styling, asymmetric editorial spacing

### editorial-magazine
- **Anchors:** pitchfork.com (editorial hierarchy), nytimes.com section pages, are.na
- **Browse:** httpster, siteinspire (Style: Editorial)
- **Extract:** display headline treatment, pull-quote style, multi-column flow

### luxury-quiet
- **Anchors:** aesop.com, hermès product pages, dieline.com (packaging)
- **Browse:** minimal.gallery, siteinspire (Subject: Fashion / Beauty)
- **Extract:** photography art-direction, generous whitespace, restrained accent use

### soft-UI-evolution
- **Anchors:** linear.app marketing pages (in their softer moments), Apple watch product pages
- **Browse:** godly.website filtered by health/wellness
- **Extract:** subtle gradients, gentle shadow stacks, organic-shaped surfaces

### accessible-ethical
- **Anchors:** gov.uk service pages (gold standard for clarity), 18f.gsa.gov, kruso.dk
- **Browse:** siteinspire (Subject: Healthcare, Education)
- **Extract:** plain-language headlines, high-contrast palettes, deliberate hierarchy

### industrial-utilitarian
- **Anchors:** stripe.com (signature trust + density), vercel.com (utilitarian precision), the.industry sites
- **Browse:** httpster, siteinspire (Style: Minimal)
- **Extract:** monospace accents, bordered containers, technical-spec-style information density

### trust-and-authority
- **Anchors:** stripe.com, hashicorp.com, swiss banking sites
- **Browse:** siteinspire (Subject: Corporate, Finance)
- **Extract:** typographic hierarchy, restraint in color, photography of real people in real spaces

### swiss-modernism
- **Anchors:** Anything Massimo Vignelli, Helvetica.fyi, ia.net
- **Browse:** typewolf, minimal.gallery
- **Extract:** grid discipline, single sans-serif treatment, hairline rules as structural elements

### refined-minimal
- **Anchors:** linear.app, vercel.com, geist-ui.dev
- **Browse:** minimal.gallery, siteinspire (Style: Minimal)
- **Extract:** spacing rhythm, type-scale precision, monochrome + single accent

### exaggerated-minimalism
- **Anchors:** off-white.com, agency portfolios on bestfolios
- **Browse:** godly.website, motionsites.ai
- **Extract:** giant type breaking the grid, ample negative space, single bold visual move per section

### parallax-storytelling
- **Anchors:** apple.com product launches, tesla.com cybertruck, journey.world
- **Browse:** motionsites.ai
- **Extract:** scroll-triggered reveals, layered depth, deliberate pacing

### organic-biophilic
- **Anchors:** allbirds.com, patagonia.com, cosmoss.com
- **Browse:** siteinspire (Subject: Sustainability)
- **Extract:** earth-toned palettes, photography of nature/materials, organic-shaped containers

---

## 3. Personal Vault

> Peter's saved finds. Add by editing this table directly.
> When you find something worth remembering: URL, which direction(s) it teaches, date, one-line note on what to learn.

| URL | Direction tag(s) | Saved | What to learn |
|---|---|---|---|
| https://andreas-duerr.vercel.app/ | warm-organic, trust-and-authority | 2026-04-26 | Cream/Orange-Palette (`--cream` #FBF7F0 base, `--orange` #E87722 accent, `--ink` #1A1614 text) + Fraunces/Inter pairing — warme Direction bewusst auf Handwerker-Brief angewendet statt Default-`industrial-utilitarian`. Eigenes Jacob-Digital-Benchmark. |
| https://www.schreinermeisterei.de/ | industrial-utilitarian | 2026-04-26 | Borrow: Slate-Amber-Pairing als Benchmark für Default-Handwerker (`#344248` + `#ffbe00`), Oswald-condensed als Stock-Display-Choice. Discard: WordPress/Marize-Stock-Feel, Google-Fonts-CDN (DSGVO-Verstoß), generic photo-carousel hero. Negativ-Anker — wenn dein Build danach aussieht, hast du nichts verbessert. |
| https://heizungs-hahn.de/Home | industrial-utilitarian (negative anchor) | 2026-04-26 | Discard everything: TLS-Cert kaputt (`ERR_TLS_CERT_ALTNAME_INVALID`), `<title>Home</title>`, keine Heading-Hierarchie, Verdana als Primär-Font, Telekom-HomepageDesigner-Lock-in. Konkrete Lehre: jeder Punkt ist ein Pre-Delivery-Checklist-Fail aus CLAUDE.md §13. Wenn ein Kunde mit so einer Seite kommt → kompletter Neubau, kein Polish. |

**Curation discipline:** entry only earns its place if you can answer *"what specifically would I borrow from this?"* in one sentence. Vague "I like it" entries get pruned.

---

## 4. How Claude Code uses this file

In **Phase 1**, when generating each of the three directions:

1. Read this file before suggesting any mood references.
2. Pull from §3 Personal Vault first (Peter's curated taste), then §2 (per-direction starters), then §1 (galleries to browse if needed).
3. Each direction must include 3 named references with a one-sentence "what to extract" per reference.
4. If a candidate reference is from §1.D (use-with-caution sources), the direction file must explicitly state what's being taken and what's being discarded.
5. If Peter swaps in a reference Claude Code didn't suggest, append it to §3 Personal Vault before proceeding to Phase 2.

In **Phase 3**, when implementing components:

1. Consult §1.C for component-level patterns.
2. Translate React/Tailwind reference patterns to plain HTML/CSS — never copy-paste framework code into a vanilla project.
3. Check accessibility patterns in shadcn/ui or Radix even when implementing custom components — their markup is the reference.

---

## 5. What this file is NOT

- Not a portfolio or showcase.
- Not exhaustive — better to have 30 sharp references than 300 vague ones.
- Not static — §3 Personal Vault is the living part.
- Not a substitute for taste. The catalog seeds direction, the eye picks.

---

## 6. Pexels Query Starters per Direction Matrix

> Phase-3-Builds nutzen diese Tabelle als Ausgangspunkt für `pexels-config.json`. Claude liest die zur Branche+Direction passenden Queries, schlägt 3-5 vor pro Page-Sektion (Hero, Service-Detail, Über uns, Kontakt), filled das config-File, dann `node fetch-photos.mjs`. Resultat: 10-30 self-gehostete Photos pro Projekt — DSGVO-clean, emotional, kein Stock-Lärm.

| Direction-Matrix-Zeile | Pexels-Queries | Orientation | Art-Direction-Notes |
|---|---|---|---|
| Café / Bakery / Bistro | "bakery bread morning light", "cafe interior wood table", "fresh croissant hands" | landscape, portrait | warm tungsten, hands-and-craft, mehl auf holz, niemals leere Wide-shots |
| Restaurant | "restaurant table setting candle", "chef hands cooking detail", "wine glass wood table" | portrait | shallow DOF, low-light, food als Subjekt nicht Deko |
| Hotel / Pension / B&B | "boutique hotel room interior", "hotel lobby morning light", "room window view" | landscape | natural light, ungemachte Betten OK (lived-in), keine Marketing-Sterilität |
| Beauty / Wellness / Spa | "spa stone water minimal", "wellness towel detail", "candle reflection water" | portrait | calm neutral, kein Plastik, kein Glitter |
| Doctor / Praxis / Clinic | "modern medical office bright", "doctor consultation hands", "stethoscope wooden desk" | landscape | non-clinical warmth, niemals OP-Theater oder generic-coat-arms |
| Handwerker (Sanitär) | "modern bathroom interior detail", "bathroom faucet chrome", "tile work craft hands", "shower floor tile" | portrait | material focus, hände-bei-arbeit, niemals Bauarbeiter-mit-Helm-Stockphoto |
| Handwerker (Bau / Maler / Elektro) | "construction craft hands detail", "paint roller wall texture", "wood saw workshop", "electrician hands cable" | landscape | authentic, dirty hands OK, keine Daumen-hoch-Posen |
| Legal / Tax / Notar / Steuer | "lawyer office documents minimal", "consultation handshake hands", "legal book detail" | landscape | restrained, dunkles Holz + Papier, niemals Stockphoto-Suit-Lächeln |
| Photographer / Creative agency | (überspringe — Photographen liefern eigene Photos; bei Agentur-Demo: "creative workspace minimal", "color palette swatches") | — | nur Anker bis Client-Photos da sind |
| Local SaaS / B2B service | "modern workspace desk minimal", "team meeting natural light", "laptop coffee desk top-down" | landscape | clean, kein cliché-developer-am-laptop |
| E-commerce (regional, niche) | abhängig vom Sortiment — Pexels-Query passend zur Produktkategorie + "minimal product photography" | landscape, portrait | Produkt im Kontext, nicht freigestellt-on-white |

**Format-Hinweis pro Query in `pexels-config.json`:**

```json
{
  "queries": [
    {
      "name": "hero",
      "query": "modern bathroom interior detail",
      "per_page": 3,
      "orientation": "portrait"
    },
    {
      "name": "showroom",
      "query": "tile work craft hands",
      "per_page": 4,
      "orientation": "landscape"
    }
  ]
}
```

`name` wird zum Filename-Slug (`hero-photographer-12345.jpg`). `per_page` = 1–80. `orientation` = landscape | portrait | square. Optional: `locale` (Default `de-DE`), `size` (small | medium | large), `color` (für stylistisch konsistente Sets).

**Discipline:** Phase 3 Claude soll für jede Sektion nur soviele Queries ziehen, wie Photos tatsächlich gebraucht werden. Lieber 8 sehr passende Photos im Repo als 40 verstreute Stock-Bilder, von denen 32 ungenutzt rumliegen.
