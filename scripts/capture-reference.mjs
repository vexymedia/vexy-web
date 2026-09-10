/**
 * Dev utility (not part of the app build).
 *
 * Captures the current public VEXY site as reference material for the
 * reconstruction: full HTML, stylesheets, fonts and images, the colors /
 * fonts / spacing actually resolved by the browser, plus full-page
 * screenshots at 1440px and 390px.
 *
 * Requires egress to the target domain to be allowed by the environment's
 * network policy, and Playwright available:
 *
 *   npm i --no-save playwright
 *   node scripts/capture-reference.mjs            # defaults to vexylabs.cz
 *   TARGET=https://example.com/ node scripts/capture-reference.mjs
 *
 * Output goes to .reference/ (git-ignored).
 */
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";

const OUT = ".reference";
const TARGET = process.env.TARGET ?? "https://vexylabs.cz/";
const EXEC = process.env.CHROMIUM ?? "/opt/pw-browsers/chromium";

mkdirSync(`${OUT}/assets`, { recursive: true });

const browser = await chromium.launch({ executablePath: EXEC });

const collectAssets = (page) => {
  const seen = new Set();
  page.on("response", async (res) => {
    const url = res.url();
    const type = res.request().resourceType();
    if (!["stylesheet", "font", "image", "script"].includes(type)) return;
    if (seen.has(url)) return;
    seen.add(url);
    try {
      const name = url.split("/").pop()?.split("?")[0] || "asset";
      writeFileSync(
        `${OUT}/assets/${type}__${name.slice(0, 80)}`,
        await res.body(),
      );
    } catch {
      /* opaque or already-evicted responses are not worth failing over */
    }
  });
  return seen;
};

const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
const seen = collectAssets(page);

await page.goto(TARGET, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);
writeFileSync(`${OUT}/page.html`, await page.content());

const tokens = await page.evaluate(() => {
  const out = { fonts: {}, colors: {}, sizes: {}, nodes: [] };
  const bump = (bag, key) => {
    if (key) bag[key] = (bag[key] || 0) + 1;
  };
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    bump(out.fonts, cs.fontFamily);
    bump(out.colors, cs.color);
    bump(out.colors, cs.backgroundColor);
    bump(out.sizes, `${cs.fontSize}/${cs.fontWeight}/${cs.lineHeight}`);
  }
  const structural =
    "header,nav,section,footer,h1,h2,h3,h4,button,a[class*=btn],a[class*=button]";
  for (const el of document.querySelectorAll(structural)) {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    out.nodes.push({
      tag: el.tagName,
      cls: el.className?.toString().slice(0, 120),
      text: el.textContent?.trim().slice(0, 120),
      box: {
        x: Math.round(r.x),
        y: Math.round(r.y),
        w: Math.round(r.width),
        h: Math.round(r.height),
      },
      font: `${cs.fontSize}/${cs.fontWeight}`,
      color: cs.color,
      bg: cs.backgroundColor,
      radius: cs.borderRadius,
      pad: cs.padding,
    });
  }
  return out;
});
writeFileSync(`${OUT}/tokens.json`, JSON.stringify(tokens, null, 2));

await page.screenshot({ path: `${OUT}/desktop-1440-full.png`, fullPage: true });
await page.screenshot({ path: `${OUT}/desktop-1440-fold.png` });

const mobileCtx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const mobile = await mobileCtx.newPage();
collectAssets(mobile);
await mobile.goto(TARGET, { waitUntil: "networkidle", timeout: 60000 });
await mobile.waitForTimeout(2500);
writeFileSync(`${OUT}/page-mobile.html`, await mobile.content());
await mobile.screenshot({ path: `${OUT}/mobile-390-full.png`, fullPage: true });

await browser.close();
console.log(`captured ${TARGET} -> ${OUT}/ (${seen.size} assets)`);
