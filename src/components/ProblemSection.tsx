import { problem } from "@/data/content";
import { CheckList } from "./ui/CheckList";
import { Section } from "./ui/Section";

/** "Poznáváte se v některé z těchto situací..." — list left, portrait right. */
export function ProblemSection() {
  return (
    <Section>
      <div className="row">
        <div className="col col-md-half">
          <h1 className="-mt-1.5 font-heading text-[23px] leading-[1.25] font-bold lg:text-[38px]">
            {problem.heading}
          </h1>
          <CheckList
            items={problem.items}
            lineHeightClass="lg:leading-[1.7]"
            className="mt-5 mb-[15px] md:pt-3"
          />
        </div>
        <div className="col col-md-half">
          {/* eslint-disable-next-line @next/next/no-img-element -- artwork is served from the original CDN, see src/data/assets.ts */}
          <img
            src={problem.image}
            alt=""
            loading="lazy"
            className="mx-auto block max-w-full rounded-[24px]"
          />
        </div>
      </div>
    </Section>
  );
}
