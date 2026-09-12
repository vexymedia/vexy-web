/**
 * All copy on the page, in source order.
 *
 * Editing text on the site means editing this file — the components only
 * lay it out. Section order itself lives in `src/app/page.tsx`.
 */
import { assets } from "./assets";

/** The single call-to-action reused by all three buttons on the page. */
export const cta = {
  label: "Zjistit potenciál pro naši firmu",
  href: "https://calendly.com/vojtechsustal7/schuzka?kct=09db6c27-fa26-4ca2-bce6-b644812068b6",
};

export const hero = {
  /** Headline is split so the last part can be highlighted in green. */
  headline: "Systematicky vám otevíráme dveře k novým",
  headlineAccent: "B2B zákazníkům",
  paragraph:
    "Vycházíme z databáze 850 000+ firemních kontaktů v ČR a SR. Firmy filtrujeme podle obchodního potenciálu, oslovujeme relevantní rozhodovatele a kvalifikované zájemce dostáváme přímo do vašeho kalendáře.",
  videoId: "QLye-qH8_gw",
};

export const problem = {
  heading: "Poznáváte se v některé z těchto situací...",
  items: [
    "Většinu nových zakázek stále získáváte přes doporučení nebo z jednoho zdroje",
    "Obchodníci tráví příliš mnoho času hledáním kontaktů místo uzavíráním obchodů",
    "Marketing přivádí návštěvníky, ale ne dostatek reálných obchodních příležitostí",
    "Nechcete nabírat a týdny zaučovat dalšího obchodníka",
    "Máte kvalitní službu, ale nedostáváte se pravidelně před správné rozhodovatele",
  ],
  image: assets.problemPortrait,
};

/** Standalone YouTube Short between the problem and solution sections. */
export const shortVideo = {
  videoId: "uXZHckSL46U",
};

export const solution = {
  heading: "Systém, který pravidelně domlouvá obchodní schůzky.",
  items: [
    "Definice ideálního zákazníka a rozhodovatelů",
    "Z 850 000+ kontaktů vyfiltrujeme firmy s nejvyšším obchodním potenciálem",
    "Každou firmu před oslovením prověříme a komunikaci přizpůsobíme její situaci",
    "Oslovujeme telefonem a e-mailem a ověřujeme aktuální potřebu",
    "Kvalifikované obchodní příležitosti zapisujeme přímo do vašeho kalendáře",
  ],
  image: assets.solutionDashboard,
};

export const services = {
  heading: "Co za vás převezmeme?",
  items: [
    {
      title: "Tvorba cílené databáze",
      icon: assets.serviceDatabase,
      /** Icon widths are set per item on the original. */
      iconWidth: 143,
    },
    {
      title: "B2B oslovování a kvalifikace",
      icon: assets.serviceOutreach,
      iconWidth: 136,
    },
    {
      title: "Optimalizace obchodní kampaně",
      icon: assets.serviceOptimization,
      iconWidth: 134,
    },
  ],
};

export const caseStudies = {
  heading: "Případové studie",
  items: [
    {
      title: "ERP systém",
      result: "171 obchodních schůzek za 4 měsíce",
      image: assets.caseStudyErp,
      href: "https://www.vexylabs.cz/erp-system",
    },
    {
      title: "Průmyslová údržba",
      result: "96 obchodních schůzek za 3 měsíce",
      image: assets.caseStudyMaintenance,
      href: "https://www.vexylabs.cz/udrzba-vyrobnich-zarizeni",
    },
  ],
};

export const contact = {
  email: "vojtech@vexylabs.cz",
  phone: "+420 737 485 738",
};
