/**
 * Every image used on the page, in one place.
 *
 * The originals live on the page-builder CDN that serves the current
 * vexylabs.cz. They are referenced by their original URL so the clone
 * renders the real artwork; to self-host them later, drop the files into
 * `public/images/` and swap the values here for `/images/<file>` — nothing
 * else has to change.
 */
const CDN = "https://assets.konverzkyapp.cz/data/projects";

export const assets = {
  /** Dark green grid backdrop behind the hero. */
  heroBackground: `${CDN}/84809/minified/CItDZMrkZmHTWxJ8yeOPzolmjlIHIJKRYLKTHoCNn3Y-1785394406.png`,
  /** Portrait next to the "Poznáváte se v některé z těchto situací..." list. */
  problemPortrait: `${CDN}/84542/minified/7dPXJLL13t73dR91Vi8O6ZCt_mHIFSnZAjSED7ThJag-1784801237.png`,
  /** Laptop/dashboard photo next to the "Systém, který pravidelně..." list. */
  solutionDashboard: `${CDN}/84542/minified/aRs2qMgmuYTcoZYILpTVZZMi6IzSt1jcJZqPX-JiYoI-1784801741.png`,
  /** White line icons in the green "Co za vás převezmeme?" band. */
  serviceDatabase: `${CDN}/75866/minified/CQi94cUdfUhZyaqic7UtEN91KvDQ2kcRun96aTcGceI-1770572048.png`,
  serviceOutreach: `${CDN}/75866/minified/ERFvcAEZUrb1CaKWdNMQIvWnwFOyfeM546ZluQk3EWQ-1770571974.png`,
  serviceOptimization: `${CDN}/75866/minified/n634ybMdPwmxcR4sjomksg7Cw37Xq5D-m0fNQUjze3M-1770572169.png`,
  /** Case study cover images. */
  caseStudyErp: `${CDN}/84809/minified/LC5cxdN_1Oibj5SqYsrhuzJinIec4RG_2UnR_filOR8-1786705186.jpeg`,
  caseStudyMaintenance: `${CDN}/84809/minified/b7J5t6rapcmIi73w-3d5OuXZquJZrMTiux1KMk_H1qQ-1786705296.webp`,
  /** Favicon. */
  favicon: `${CDN}/84542/minified/QkB_naWftp_IWjBv_XJyy9ArqUGHnxXNqTKLeTi6C0Q-1785003468.png`,
} as const;
