# vexy-web

Veřejný web VEXY. Samostatný projekt, bez vazby na vexy-mailer.

## Stack

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS 4
- React 19

## Vývoj

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # produkční build
npm run lint    # ESLint
```

## Struktura

```
src/app/         App Router – layout, stránka, globální styly
src/components/  stavební prvky (CTA, check list, video, obrázek)
src/content/     veškeré texty a odkazy na aktiva (site.ts)
public/          statická aktiva
```

Texty jsou opsané 1:1 z živého webu a drží se v `src/content/site.ts`,
aby se daly upravovat bez zásahu do rozvržení.

## Referenční podklad

Baseline webu se staví podle současného veřejného webu na **vexylabs.cz**.
Podklad stáhne dev utilita (vyžaduje povolený egress na doménu):

```bash
npm i --no-save playwright
node scripts/capture-reference.mjs
```

Uloží do `.reference/` (git-ignored) HTML, CSS, fonty a obrázky, skutečně
použité barvy/typografii/rozestupy z computed stylů a full-page screenshoty
v 1440 px a 390 px.

### Chybějící aktiva

Živý web běží na Konverzky a **všechny obrázky a stylopisy** servíruje
z `assets.konverzkyapp.cz` a `app-assets.konverzkyapp.cz`. Egress policy
tohoto prostředí tyto domény nepouští (403 na CONNECT), takže se stáhlo
jen HTML z `vexylabs.cz`.

Rekonstrukce proto stojí na tom, co nese samotné HTML – inline barvy,
řezy písma, poloměry, rozestupy a třídy `fs-lg-*` / `fs-sm-*`, které
kódují velikosti písma pro jednotlivé breakpointy. Chybí pouze bitmapy.

Až budou domény povolené, stáhněte je a doplňte `src` u položek
v `src/content/site.ts` (u každé je v `origin` původní URL):

```bash
node scripts/capture-reference.mjs      # nově projde i assets/
```

Do té doby se místo obrázků vykreslí placeholder se správným poměrem stran,
takže rozvržení sedí. Hero má navíc dočasně tmavý podklad
(`.hero-band--placeholder`), protože bílý nadpis by na světlé fallback
barvě z originálu nebyl čitelný.
