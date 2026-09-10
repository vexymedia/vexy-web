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
src/app/        App Router – layout, stránky, globální styly
public/         statická aktiva
```

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
