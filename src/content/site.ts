/**
 * Every string and asset on the page, transcribed verbatim from the
 * vexylabs.cz capture in .reference/. Copy is intentionally unchanged.
 *
 * `origin` is the URL the live site serves the asset from. Those files live on
 * the Konverzky CDN, which this project does not control — see README for how
 * to pull them into /public before go-live.
 */

export type Asset = {
  /** Local file under /public once the asset has been imported. */
  src?: string;
  /** Where the live site currently serves it from. */
  origin: string;
  alt: string;
  /** width/height, used to reserve space while the asset is a placeholder. */
  ratio: number;
};

const CALENDLY =
  "https://calendly.com/vojtechsustal7/schuzka?kct=09db6c27-fa26-4ca2-bce6-b6448120d33d";

export const cta = {
  label: "Zjistit potenciál pro naši firmu",
  href: CALENDLY,
} as const;

export const hero = {
  headingLead: "Systematicky vám otevíráme dveře k novým ",
  headingAccent: "B2B zákazníkům",
  perex:
    "Vycházíme z databáze 850 000+ firemních kontaktů v ČR a SR. Firmy filtrujeme podle obchodního potenciálu, oslovujeme relevantní rozhodovatele a kvalifikované zájemce dostáváme přímo do vašeho kalendáře.",
  background: {
    origin:
      "https://assets.konverzkyapp.cz/data/projects/84809/minified/CItDZMrkZmHTWxJ8yeOPzolmjlIHIJKRYLKTHoCNn3Y-1785394406.png",
    alt: "",
    ratio: 16 / 9,
  } as Asset,
  video: "https://www.youtube.com/embed/QLye-qH8_gw?autoplay=0&controls=1&loop=0&rel=0",
} as const;

export const painPoints = {
  heading: "Poznáváte se v některé z těchto situací...",
  items: [
    "Většinu nových zakázek stále získáváte přes doporučení nebo z jednoho zdroje",
    "Obchodníci tráví příliš mnoho času hledáním kontaktů místo uzavíráním obchodů",
    "Marketing přivádí návštěvníky, ale ne dostatek reálných obchodních příležitostí",
    "Nechcete nabírat a týdny zaučovat dalšího obchodníka",
    "Máte kvalitní službu, ale nedostáváte se pravidelně před správné rozhodovatele",
  ],
  image: {
    origin:
      "https://assets.konverzkyapp.cz/data/projects/84542/minified/7dPXJLL13t73dR91Vi8O6ZCt_mHIFSnZAjSED7ThJag-1784801237.png",
    alt: "",
    ratio: 4 / 3,
  } as Asset,
} as const;

export const showreel = {
  video: "https://www.youtube.com/embed/uXZHckSL46U?autoplay=0&controls=0&loop=0&rel=0",
} as const;

export const system = {
  heading: "Systém, který pravidelně domlouvá obchodní schůzky.",
  items: [
    "Definice ideálního zákazníka a rozhodovatelů",
    "Z 850 000+ kontaktů vyfiltrujeme firmy s nejvyšším obchodním potenciálem",
    "Každou firmu před oslovením prověříme a komunikaci přizpůsobíme její situaci",
    "Oslovujeme telefonem a e-mailem a ověřujeme aktuální potřebu",
    "Kvalifikované obchodní příležitosti zapisujeme přímo do vašeho kalendáře",
  ],
  image: {
    origin:
      "https://assets.konverzkyapp.cz/data/projects/84542/minified/aRs2qMgmuYTcoZYILpTVZZMi6IzSt1jcJZqPX-JiYoI-1784801741.png",
    alt: "",
    ratio: 4 / 3,
  } as Asset,
} as const;

export const services = {
  heading: "Co za vás převezmeme?",
  items: [
    {
      title: "Tvorba cílené databáze",
      iconWidth: 143,
      icon: {
        origin:
          "https://assets.konverzkyapp.cz/data/projects/75866/minified/CQi94cUdfUhZyaqic7UtEN91KvDQ2kcRun96aTcGceI-1770572048.png",
        alt: "",
        ratio: 1,
      } as Asset,
    },
    {
      title: "B2B oslovování a kvalifikace",
      iconWidth: 136,
      icon: {
        origin:
          "https://assets.konverzkyapp.cz/data/projects/75866/minified/ERFvcAEZUrb1CaKWdNMQIvWnwFOyfeM546ZluQk3EWQ-1770571974.png",
        alt: "",
        ratio: 1,
      } as Asset,
    },
    {
      title: "Optimalizace obchodní kampaně",
      iconWidth: 134,
      icon: {
        origin:
          "https://assets.konverzkyapp.cz/data/projects/75866/minified/n634ybMdPwmxcR4sjomksg7Cw37Xq5D-m0fNQUjze3M-1770572169.png",
        alt: "",
        ratio: 1,
      } as Asset,
    },
  ],
} as const;

export const caseStudies = {
  heading: "Případové studie",
  items: [
    {
      title: "ERP systém",
      result: "171 obchodních schůzek za 4 měsíce",
      href: "https://www.vexylabs.cz/erp-system",
      image: {
        origin:
          "https://assets.konverzkyapp.cz/data/projects/84809/minified/LC5cxdN_1Oibj5SqYsrhuzJinIec4RG_2UnR_filOR8-1786705186.jpeg",
        alt: "ERP systém",
        ratio: 16 / 9,
      } as Asset,
    },
    {
      title: "Průmyslová údržba",
      result: "96 obchodních schůzek za 3 měsíce",
      href: "https://www.vexylabs.cz/udrzba-vyrobnich-zarizeni",
      image: {
        origin:
          "https://assets.konverzkyapp.cz/data/projects/84809/minified/b7J5t6rapcmIi73w-3d5OuXZquJZrMTiux1KMk_H1qQ-1786705296.webp",
        alt: "Průmyslová údržba",
        ratio: 16 / 9,
      } as Asset,
    },
  ],
} as const;

export const contact = {
  email: "vojtech@vexylabs.cz",
  phone: "+420 737 485 738",
} as const;
