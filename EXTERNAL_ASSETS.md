# EXTERNAL_ASSETS.md — New Look by Habibi

Every third-party request the production site makes. DSGVO accountability.

| URL / domain | Purpose | Justification | DSGVO note |
|---|---|---|---|
| (none — production builds zero external requests) | | | Fonts self-hosted in `/fonts/`, Pexels photos self-hosted in `/assets/img/`, no analytics, no embed |

**Rule:** if it's not on this list, it doesn't load.

---

## Outbound user-clicked links (no automatic load — explicit user action only)

These don't fire requests until the user clicks. Each opens in a new tab.

| URL | Where | Purpose |
|---|---|---|
| `https://www.google.com/maps/search/?api=1&query=Meiendorfer+Str.+115%2C+22145+Hamburg` | Standort-Section, Footer-Map-Link | Google Maps Suchergebnis öffnen |
| `https://www.facebook.com/pages/New-Look-By-Habibi/123275751094343` | Footer | Facebook-Profil des Salons |
| `https://ec.europa.eu/consumers/odr/` | Impressum | EU-Streitschlichtung (gesetzliche Pflichtangabe) |
| `https://datenschutz-hamburg.de/` | Datenschutz | Hamburg DPA (gesetzliche Pflichtangabe) |
| `https://policies.google.com/privacy` | Datenschutz | Google-Datenschutz (für externe-Links-Abschnitt) |
| `https://www.facebook.com/privacy/policy` | Datenschutz | Meta-Datenschutz |
| `https://www.pexels.com/privacy-policy/` | Datenschutz | Pexels-Datenschutz |

---

## Build-time (nicht-Runtime) Quellen — keine Visitor-Datenströme

Dies sind Daten, die **zur Build-Zeit** auf den Server gezogen werden, nicht zur Runtime im Browser.

| URL / domain | Purpose | Bei welchem Script |
|---|---|---|
| `fonts.googleapis.com` + `fonts.gstatic.com` | woff2 herunterladen, lokal cachen | `node fetch-fonts.mjs` (one-time) |
| `api.pexels.com/v1/search` | Photo-Metadaten + Download-URLs | `node fetch-photos.mjs` (one-time, on-demand) |
| `images.pexels.com` (CDN) | woff/jpg Photo-Files | `node fetch-photos.mjs` |

**DSGVO:** Diese Requests passieren in deiner lokalen Build-Umgebung, niemals im Browser des Nutzers. Die heruntergeladenen Assets liegen self-hosted in `/fonts/` bzw. `/assets/img/` — Visitor-IPs gehen nie zu Google/Pexels.

<!-- PEXELS-ATTRIBUTION-START -->
## Pexels-Attribution

Self-hosted Photos in `assets/img/` — DSGVO-clean (kein CDN-Embed). Lizenz: Pexels License (frei kommerziell, Attribution requested).

- "Eine gemütliche Szene in einem altmodischen Friseursalon bei Nacht: Ein Kunde genießt seinen Haarschnitt." — Foto: [Alina Degli](https://www.pexels.com/de-de/@alinadegli) auf [Pexels](https://www.pexels.com/de-de/foto/18991957/)
- "Kostenloses Stock Foto zu abend, asien, Barbershop-Kultur" — Foto: [esrannuur](https://www.pexels.com/de-de/@esrannuur-129682465) auf [Pexels](https://www.pexels.com/de-de/foto/menschen-stehen-fenster-logo-14698352/)
- "Kostenloses Stock Foto zu #indoor, akademisches umfeld, arbeitsplatz" — Foto: [Orhan Pergel](https://www.pexels.com/de-de/@skylake) auf [Pexels](https://www.pexels.com/de-de/foto/laptop-tabellen-zimmer-raum-20337424/)
- "Kostenloses Stock Foto zu architektur, atmosphärisch, Barbershop-Stange" — Foto: [Kyle  Miller](https://www.pexels.com/de-de/@kyle-miller-169884138) auf [Pexels](https://www.pexels.com/de-de/foto/nacht-dunkel-stuhle-innere-17027433/)
- "Holzstuhl unter einer Eisenbahnbrücke in Berlin, lebendiges urbanes Ambiente." — Foto: [Valentin](https://www.pexels.com/de-de/@valentin-2150793390) auf [Pexels](https://www.pexels.com/de-de/foto/stadtische-szene-mit-holzstuhl-in-berlin-31389697/)
- "Kostenloses Stock Foto zu abend, ambiente, ausruhen" — Foto: [K](https://www.pexels.com/de-de/@kelly) auf [Pexels](https://www.pexels.com/de-de/foto/licht-nacht-dammerung-tier-6468891/)
- "Kostenloses Stock Foto zu #indoor, ästhetik, ausleuchtung" — Foto: [K](https://www.pexels.com/de-de/@kelly) auf [Pexels](https://www.pexels.com/de-de/foto/licht-haus-pflanze-topf-6468883/)
- "Kostenloses Stock Foto zu ambiente, balkeneinstellung, besinnlich" — Foto: [Денис Нагайцев](https://www.pexels.com/de-de/@75711057) auf [Pexels](https://www.pexels.com/de-de/foto/mann-tragen-weisses-hemd-vertikaler-schuss-11938940/)
- "Kostenloses Stock Foto zu ahnung, atmosphärisch, ausdrucksvoll" — Foto: [Marcella Soáres](https://www.pexels.com/de-de/@smgrafias) auf [Pexels](https://www.pexels.com/de-de/foto/mann-portrat-gespenstisch-beleuchtet-6641650/)
- "Rückansicht Des Schreibenden Mannes Und Der Frau" — Foto: [cottonbro studio](https://www.pexels.com/de-de/@cottonbro) auf [Pexels](https://www.pexels.com/de-de/foto/ruckansicht-des-schreibenden-mannes-und-der-frau-5088420/)
- "Kostenloses Stock Foto zu abendessen, anrichte, atmosphäre" — Foto: [cottonbro studio](https://www.pexels.com/de-de/@cottonbro) auf [Pexels](https://www.pexels.com/de-de/foto/mann-nacht-abendessen-tisch-5019012/)
- "Kostenloses Stock Foto zu abstrakte beleuchtung, ausdrucksvoll, besinnlich" — Foto: [Pexels User](https://www.pexels.com/de-de/@pexels-user-106556483) auf [Pexels](https://www.pexels.com/de-de/foto/licht-mann-dunkel-gesicht-9527504/)
- "Eleganter Mann Mit Bart Und Schnurrbart" — Foto: [cottonbro studio](https://www.pexels.com/de-de/@cottonbro) auf [Pexels](https://www.pexels.com/de-de/foto/eleganter-mann-mit-bart-und-schnurrbart-5371944/)
- "Kostenloses Stock Foto zu aufsicht, augen geschlossen, barbier" — Foto: [Fernanda Pereira](https://www.pexels.com/de-de/@fernanda-pereira-2010085) auf [Pexels](https://www.pexels.com/de-de/foto/mann-hande-bart-aufsicht-3885101/)
- "Kostenloses Stock Foto zu #indoor, afroamerikaner, armbanduhr" — Foto: [RDNE Stock project](https://www.pexels.com/de-de/@rdne) auf [Pexels](https://www.pexels.com/de-de/foto/hande-pinsel-kopf-haar-7697279/)
- "Kostenloses Stock Foto zu aussehen, barbier, besatz" — Foto: [Vitaly Gorbachev](https://www.pexels.com/de-de/@vitalyagorbachev) auf [Pexels](https://www.pexels.com/de-de/foto/schwarz-und-weiss-schwarzweiss-hande-festhalten-10775084/)
- "Kostenloses Stock Foto zu altmodisch, antik, antike" — Foto: [Leon Kohle](https://www.pexels.com/de-de/@leon-kohle-3158283) auf [Pexels](https://www.pexels.com/de-de/foto/schreibtisch-vintage-antiquitat-antik-14146722/)
- "Kostenloses Stock Foto zu ausrüstung, barbier, beruf" — Foto: [cottonbro studio](https://www.pexels.com/de-de/@cottonbro) auf [Pexels](https://www.pexels.com/de-de/foto/textur-holzern-frisur-vorbereitung-3992874/)
- "Kostenloses Stock Foto zu altmodisch, barbier, besatz" — Foto: [Los Muertos Crew](https://www.pexels.com/de-de/@cristian-rojas) auf [Pexels](https://www.pexels.com/de-de/foto/holz-werkzeuge-retro-pinsel-8867162/)
- "Schwarzer Und Silberner Allzweck Lederstuhl In Einem Barbershop" — Foto: [Los Muertos Crew](https://www.pexels.com/de-de/@cristian-rojas) auf [Pexels](https://www.pexels.com/de-de/foto/schwarzer-und-silberner-allzweck-lederstuhl-in-einem-barbershop-8867166/)
- "Kostenloses Stock Foto zu anspruchsvoll, ästhetisch, ausleuchtung" — Foto: [the iop](https://www.pexels.com/de-de/@the-iop-86002042) auf [Pexels](https://www.pexels.com/de-de/foto/34529825/)
- "Mann, Der Seinen Haarschnitt Hat" — Foto: [Th2city Santana](https://www.pexels.com/de-de/@th2city) auf [Pexels](https://www.pexels.com/de-de/foto/mann-der-seinen-haarschnitt-hat-1860567/)
- "Gemütlicher Vintage-Friseursalon mit rotem Stuhl und Retro-Dekor durch das Fenster." — Foto: [🇻🇳🇻🇳 Việt Anh Nguyễn 🇻🇳🇻🇳](https://www.pexels.com/de-de/@vi-t-anh-nguy-n-2150409023) auf [Pexels](https://www.pexels.com/de-de/foto/vintage-barber-shop-interieur-mit-roten-stuhl-31395604/)
- "Kostenloses Stock Foto zu barbershop-werkzeuge, fashion, friseur" — Foto: [Marcelo Verfe](https://www.pexels.com/de-de/@marceloverfe) auf [Pexels](https://www.pexels.com/de-de/foto/sitz-friseur-barbier-ledersessel-18702143/)
<!-- PEXELS-ATTRIBUTION-END -->
