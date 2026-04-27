# INTAKE.md — New Look by Habibi

> Phase 0 output. Filled 2026-04-27 by Claude Code (Opus 4.7).
> Sign-on client. Confirmed by Peter before Phase 1 (Three Directions) begins.

---

## 1. Client

- **Name:** New Look by Habibi
- **Business type (matrix row):** Friseur (Herren-Salon mit Kindern als Sub-Audience). Falls strikt unter §6 → *Beauty / Wellness / Spa*; aber Charakter näher an *Café / Bakery / Bistro* (Stadtteil-Hospitality, kein Spa). → **Cross-pollination:** warm-organic + organic-biophilic.
- **Location:** Hamburg, Stadtteil Meiendorf (Wandsbek/Rahlstedt-Grenze, Stadtrand-Wohngebiet)
- **Website (if exists):** keine — nur Facebook-Präsenz
- **Languages:** DE only
- **Decision-maker:** Inhaber (persischer Background)
- **Engagement:** Sign-on Client (live branding, kein Demo-Mode)

## 2. Audience

- **Primary:** Locals + Stammkundschaft aus Meiendorf und Umgebung. Männer aller Altersgruppen, plus Kinder. Stadtteil-Friseur-Modus: Vertrauen, Wiederkommen, kurzer Weg.
- **Secondary:** Familien (Vater + Sohn), persisch-deutsche Community im Stadtteil — die "Habibi"-Begrüßung trägt sprachlich-emotional.
- **Not the audience:** Hipster-Barbershop-Touristen, Beauty-Spa-Klientel, Hochzeits-Styling-Markt.

## 3. Primary user goal

Die EINE Sache, die ein Besucher tun können muss:

- **Adresse + Öffnungszeiten + Preise finden** — der Friseur ist Walk-In/Anruf, kein Buchungssystem nötig.

Sekundär (nice-to-have, dürfen primär nicht überlagern):

- Anrufen direkt aus dem Hero (`tel:` Link, Mobile-First)
- Team kennenlernen (Vertrauen vor Erstbesuch)
- Optional WhatsApp-Kontakt für Terminanfragen (falls Inhaber das nutzt — abklären in Phase 3)

## 4. Old website analysis

> Keine bestehende Website — nur Facebook-Link. Stattdessen wurde das **Schaufenster-Foto** als reale Brand-Truth analysiert.

**Aktuelle Brand-Realität (Schaufenster-Beobachtung):**
- Direction (felt): Stadtteil-Friseur mit warm-orange Akzenten auf dunkler Schaufenster-Folie. Kein "Premium-Barbershop", aber auch kein Discount.
- Color palette: dunkles Anthrazit/Schwarz Schaufenster · warmes Orange-Rot in runden Preis-Stickern (~9€/11€/13€) · weißer Schriftzug · Erdton/Sand an der Fassade unten
- Typography: **"New Look by Habibi" als Handwriting/Script-Wordmark in Weiß** — nicht Serif, nicht Sans. Echte Brand-DNA.
- Photography style: Plakate mit Männerportraits/Frisuren-Inspiration im Schaufenster
- Copy tone: Promo-orientiert (Preise prominent), familiär

**What works (preserve):**
- Orange als unverwechselbarer Brand-Akzent (sichtbar im Schaufenster, vom Inhaber bestätigt)
- Handwriting-Logo "New Look by Habibi" in Weiß — soll als Wordmark übernommen werden (Vektorisierung TBD, siehe §5)
- Stadtteil-Tonalität: zugänglich, warm, kein Hochglanz

**What fails (replace):**
- Promo-Sticker-Ästhetik (Preise als Werbeknaller im Schaufenster) ist Verkaufstool, kein Brand-Vehicle. Web-Auftritt sollte Preise sauber listen, nicht aufdringlich werben.
- Männerportrait-Plakate im Schaufenster sind Stockphoto-Style → Web bekommt entweder eigene Salon-/Team-Photography oder Pexels-Self-Hosted (DSGVO-clean)

**What's missing (add):**
- Digitales Brand-Vehikel überhaupt (bis jetzt nur Facebook)
- Adresse + Öffnungszeiten klickbar als Call/Maps/Routenplaner
- Team-Vorstellung (Vertrauen aufbauen für Erstbesucher)
- Local-SEO (LocalBusiness JSON-LD, Google-Maps-Einbindung)
- Impressum + Datenschutz (DSGVO-Pflicht — bis jetzt nicht existent)

## 5. Brand assets present

> Inventory `c:\Users\peter\Desktop\habibi\brand_assets\` + `reference\`.

- [x] **Pre-existing DESIGN.md** ("Modern Persian Heritage", Stitch-Output) — Konzept "The Modern Oasis" (hanseatische Präzision + persische Gastfreundschaft). Vollständige Palette + Typographie definiert.
- [x] **Pre-existing code.html** (Stitch-Prototyp, Tailwind-CDN basiert) — Mockup wie das Endprodukt aussehen könnte; **nicht produktionsreif** (Google-Fonts-CDN, Tailwind-CDN, Material-Icons → CLAUDE.md §10/§13 banned). Verwertbar als visuelle Referenz, nicht als Code.
- [x] **screen_main.png** (Stitch-Mockup, gerendert) — Hero mit Salon-Innenraum-Foto, "Willkommen bei Habibi", "5 Männer, eine Leidenschaft" Team-Section, 3 Service-Cards, Map-Section. Konfirmiert: Team ≈5 Personen.
- [ ] Logo (SVG) — **kein Vektor-File** vorhanden. Nur Schaufenster-Foto. → siehe Logo-State unten.
- [ ] Logo (raster fallback) — nein
- [x] Defined brand colors (aus Stitch-DESIGN.md): Primary Orange `#a23a00` / `#ca4b00`, Persian Teal Secondary `#006972`, Gold Tertiary `#755717`, Linen `#faf9f8`, Charcoal `#1a1c1c`. **Anmerkung:** Stitch-Palette ist Material-3-bloated (~50 Tokens) — wird in Phase 2 auf 8–10 semantische Tokens reduziert.
- [x] Defined typography (aus Stitch): Noto Serif (Display) + Be Vietnam Pro (Body). **Tension:** Schaufenster-Logo ist Script — Stitch hat das nie gesehen. Phase 1 muss Type-Wahl gegen die Brand-Realität testen.
- [ ] Photography library — keine eigenen Salon-Photos. **Phase 3 → Pexels self-hosted als Default** (DSGVO-clean, `node fetch-photos.mjs`).
- [ ] Existing brand guidelines doc — die Stitch-DESIGN.md ist der einzige Vorgänger. Bewerten als *Inspiration*, nicht als *Lock-in* (Phase 1 darf andere Directions vorschlagen).

**Photo source plan:**

- [x] **Pexels-Stock als Default** (Phase 3 `node fetch-photos.mjs`, Queries aus INSPIRATION.md §6 — barbershop, salon-interior, hands-with-scissors, persian-pattern-detail). Hybrid-Option falls Inhaber später eigene Salon-Fotos liefert.
- [ ] Photoshooting eingeplant — nein
- [ ] Client liefert eigene Bilder — TBD nachfragen, ob Inhaber Salon-Innenraum + Team selbst photographieren lassen möchte (großer Hebel für Authentizität)

**Logo state:**

- [x] **Kein Logo-Asset** vorhanden, aber existierender Schaufenster-Schriftzug "New Look by Habibi" in Handwriting/Script-Stil. → **Phase 1 Optionen:**
  - **A1:** Script-Schriftzug als Wordmark approximieren mit free-license Script-Font (Caveat / Sacramento / Allura / Pacifico) — sofort verfügbar, gut genug
  - **A2:** Schaufenster-Foto als Vorlage nehmen, Vector-Trace in Inkscape/Illustrator — nähere Original-Treue, ~30min Arbeit
  - **A3:** Inhaber bittet, Original-Logo-File zu liefern (falls jemand das Schaufenster designt hat — gibt's eine Datei?) → **Action:** in Phase 1 abklären

**Favicon decision:**

- [x] **Auto-SVG aus Wordmark "H" + Orange-Akzent** als Default (`node generate-favicon.mjs`). Erstbuchstabe "H" oder "N" (für "New Look") — Phase 2 entscheiden.

**Confirmed facts (vom Inhaber, 2026-04-27):**
- **Adresse:** Meiendorfer Str. 115, 22145 Hamburg
- **Telefon:** `04087875437` → Hero-CTA `tel:+4940 8787 5437`
- **Herrenschnitt aktuell:** 16 € (Schaufenster-Preise 9/11/13 € sind also veraltet — nicht übernehmen)
- **Team:** 5–6 Friseure → für Phase 1/2 **Namen-Dummys** (z.B. "Reza", "Ali", "Mahmoud", "Daniel", "Karim", "Omid"); echte Namen + Bios kommen Phase 3 vom Inhaber

**Still to flag with client (Phase 3):**
- Vollständige Öffnungszeiten (für `LocalBusiness` JSON-LD)
- Erweiterte Preisliste: Kinder, Bart, Färbung, Kombi-Pakete
- WhatsApp-Business-Nummer (falls Inhaber WhatsApp als Kontakt-Kanal nutzt)
- Vorhandensein eines Original-Logo-Files (Schaufenster-Designer fragen)
- Echte Team-Namen + kurze Bios + ggf. Portrait-Photos

## 6. Hard constraints

**Must keep:**
- **"Habibi" als Brand-Ritual:** Jeder Kunde wird mit "Habibi" begrüßt — Web-Erlebnis muss diese Begrüßung als wiederkehrenden Hook spiegeln (z.B. H1 "Willkommen, Habibi.", Microcopy in CTAs, Footer-Abschluss). **Direction-übergreifender Anker, nicht verhandelbar.**
- **Orange als Brand-Farbe** (real im Schaufenster, im Stitch-Output, vom Inhaber bestätigt)
- **Persische kulturelle Tiefe** — nicht oberflächlich-Klischee (kein Shisha-Pattern, keine Moschee-Silhouetten), sondern als **Hospitality-Modus** (Wärme, Begrüßung, Tee-Kultur, Handwerk-Tradition)

**Must avoid:**
- Beauty/Spa-Vokabular ("Wellness", "Beauty Lounge", "Indulge") — das ist Herren-/Familien-Friseur, nicht Spa
- Gen-Z-Hipster-Barbershop-Klischees (waxed mustache stockphoto, "Established 1893", Penny-Farthing-Aesthetic)
- Brutalist, cyberpunk, AI-purple gradients (CLAUDE.md §6 Banned-Spalte für Beauty-Row)
- Englische Marketing-Begriffe — DE only, deutsch-direkter Tonfall

**Compliance flags:**
- Sign-on Client → echte Impressum-Daten Pflicht (Inhaber-Name, Anschrift, Telefon, Steuer-Nr. falls Gewerbe)
- DSGVO: keine Google-Fonts-CDN, kein Analytics ohne Consent, Pexels-Photos self-hosted

## 7. Scope

- **Page count:** **One-Pager** — alles auf einer Seite mit Anchor-Navigation. Sektionen (Phase-2 Reihenfolge):
  1. Hero (großes Foto, Habibi-Greeting H1, Adresse/Öffnungszeiten/Anruf-CTA)
  2. Über uns / Salon-Story (kurz, persische Hospitality-Note)
  3. Team (Stylisten, ≈5 Personen)
  4. Leistungen + Preise (Herren / Kinder / ggf. Bart / Color)
  5. Standort + Öffnungszeiten + Anfahrt (Map-Embed oder statisches Image + Maps-Link)
  6. Footer (Impressum, Datenschutz, Social-Link Facebook)
- **Forms:** keine — Kontakt via `tel:` + ggf. `wa.me/` (WhatsApp) Links
- **Integrations:** Google-Maps-Link (Pin), Facebook-Link, optional WhatsApp
- **CMS need:** none — statische HTML
- **Hosting target:** Vercel (per Memory: GitHub-Repo `powerpeejay/habibi` first, dann Vercel-Auto-Import) — kostenfrei für SME, inkl. SSL
- **Deadline:** keine harte — entspannter Build mit ≥2 Iterationen je Phase 3
- **Budget context:** Sign-on (zahlender Client), aber Stadtteil-Friseur-Skala — kein Photoshoot-Budget angenommen, daher Pexels als Default

## 8. Recommended Direction (matrix)

- **Matrix row matched:** *Friseur* fällt nominell unter **Beauty / Wellness / Spa**, aber Herren-Salon + Kinder + Stadtteil-Hospitality + persischer Background verschiebt den Charakter Richtung **Café / Bakery / Bistro** (warm-organic). → **Hybrid-Anker: warm-organic mit organic-biophilic Akzenten.**

- **Primary direction (Phase 1 → A): "Modern Persian Heritage" (warm-organic, safe-best-fit)**
  Lehnt sich an die existierende Stitch-Vision an, aber produktionsreif gerebuilded: Linen Surface · Saffron Orange · tieferes Pomegranate als zweiter Akzent · Charcoal Type · subtile geometric-tile Pattern-Elemente als Texture (nicht aufdringlich). Display: Script-Wordmark "New Look by Habibi" + Serif für Headlines. Body: clean Sans (Geist oder Inter Display — nicht Be Vietnam Pro, da zu generic). Risiko: niedrig — sehr wahrscheinlich erste Wahl des Inhabers.

- **Secondary (Phase 1 → B): "Editorial Salon" (editorial-magazine, adjacent)**
  Magazine-Hero mit großer asymmetrischer Photography (Salon-Innen oder Inhaber-Portrait), type-driven Hierarchie, große ornamentale Initialen für persische Type-Tradition (z.B. Migra Italic für Display). Wärme aus Foto + Cream + warmer Gold, nicht aus Orange-Flächen. Team als Story-Section, nicht als Card-Raster. Risiko: mittel — kann für Walk-In-Friseur als zu hochnäsig empfunden werden, aber für Stammkundschaft mit Stilbewusstsein attraktiv.

- **Bold candidate (Phase 1 → C): "Habibi After Dark" (bold)**
  Schaufenster-Realität als Inspiration: dunkler Hintergrund · neon-warmes Orange · weißer Script-Wordmark prominent. Mood: nighttime salon, lit window, urban + warm. Helle Sektionen wechseln rhythmisch mit dunklen für Drama. Persische Pattern-Texture als Light-Layer auf Dark-Surfaces. Risiko: höher — kann Familien-/Kinder-Zielgruppe als zu trendy empfinden. Aber EINE bold Direction ist Pflicht (CLAUDE.md §Phase 1) und das ist deutlich der echte Brand-Truth des Schaufensters.

**Reasoning:** Direction A bedient die Stitch-Vorarbeit + Inhaber-Erwartung mit Linen-Wärme; Direction B verschiebt die Stilachse Richtung editorial-Premium (für die "Stilbewusstsein"-Stammkundschaft); Direction C übersetzt die echte Schaufenster-Brand-Identität ins Digitale. Alle drei respektieren die "Habibi"-Begrüßung als Brand-Hook und Orange + persischen Heritage als kulturelle Tiefe — sie unterscheiden sich in **Helligkeit, Type-Spannung und Hospitality-Modus.**

---

## Sign-off

- **Filled:** 2026-04-27 by Claude Code (Opus 4.7)
- **Confirmed by Peter:** [x] Yes — proceed to Phase 1 (2026-04-27)
