import { solution } from "@/data/content";
import { CheckList } from "./ui/CheckList";
import { CtaButton } from "./ui/CtaButton";
import { Section } from "./ui/Section";

/** "Systém, který pravidelně domlouvá obchodní schůzky." — image left, list right. */
export function SolutionSection() {
  return (
    <Section>
      <div className="row">
        <div className="col col-md-half">
          {/* eslint-disable-next-line @next/next/no-img-element -- artwork is served from the original CDN, see src/data/assets.ts */}
          <img
            src={solution.image}
            alt=""
            loading="lazy"
            className="mx-auto block max-w-full rounded-[24px]"
          />
        </div>
        <div className="col col-md-half">
          <h1 className="-mt-1.5 font-heading text-[23px] leading-[1.25] font-bold lg:text-[38px]">
            {solution.heading}
          </h1>
          <CheckList
            items={solution.items}
            lineHeightClass="lg:leading-[1.8]"
            className="mt-[5px] md:pt-4"
          />
          <CtaButton align="left" className="mt-[38px]" />
        </div>
      </div>
    </Section>
  );
}
