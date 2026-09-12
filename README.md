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
src/app/page.tsx          pořadí sekcí stránky
src/app/layout.tsx        fonty (Poppins, Inter), metadata
src/app/globals.css       barvy, breakpointy, mřížka (.site-container/.row/.col)
src/components/           jedna komponenta = jedna sekce webu
src/components/ui/        znovupoužitelné prvky (CtaButton, CheckList, VideoEmbed, Section)
src/data/content.ts       veškeré texty
src/data/assets.ts        URL všech obrázků
public/                   statická aktiva
```

### Jak dělat časté úpravy

- **Text, CTA, čísla v případovkách** → `src/data/content.ts`
- **Pořadí nebo odebrání sekcí** → `src/app/page.tsx`
- **Výměna obrázku** → `src/data/assets.ts`
- **Barvy a breakpointy** → blok `@theme` v `src/app/globals.css`

Mřížka kopíruje Bootstrap 4, na kterém běží současný vexylabs.cz: container
max 1140 px, 15px gutter, sloupce `py-4` (24 px). Tailwind breakpointy jsou
srovnané s Bootstrapem, takže `md:` = 768 px a `lg:` = 992 px odpovídají
původním `col-md-*` a `fs-lg-*`.

### Obrázky – deployment blocker

**Obrázky zatím nejsou self-hostované.** Načítají se z původní CDN page
builderu (viz `src/data/assets.ts`), protože `assets.konverzkyapp.cz`
i `app-assets.konverzkyapp.cz` jsou blokované egress policy tohoto prostředí
(403 na CONNECT; `www.vexylabs.cz/data/...` jen přesměruje na tutéž doménu).
Web tak závisí na cizí CDN a na tom, že nezakáže hotlinking.

Před produkčním nasazením je potřeba assety stáhnout ručně, nahrát je do
`public/images/` a v `src/data/assets.ts` přepsat hodnoty na `/images/<soubor>`.
Nic jiného se nemění.

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
