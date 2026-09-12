import { caseStudies } from "@/data/content";
import { CtaButton } from "./ui/CtaButton";
import { Section } from "./ui/Section";

/** "Případové studie" — two clickable covers with a result line, then the CTA. */
export function CaseStudiesSection() {
  return (
    <Section>
      <div className="row">
        <div className="col">
          <h1 className="text-center font-heading text-[30px] leading-[1.25] font-normal lg:text-[38px] lg:leading-[38px]">
            {caseStudies.heading}
          </h1>
        </div>
      </div>

      <div className="row">
        {caseStudies.items.map((item) => (
          <div key={item.title} className="col col-md-half">
            <a href={item.href}>
              {/* eslint-disable-next-line @next/next/no-img-element -- artwork is served from the original CDN, see src/data/assets.ts */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="mx-auto block max-w-full rounded-[20px]"
              />
            </a>
            <p className="mt-5 text-center text-[17px] font-bold lg:text-[21px]">
              {item.title}
            </p>
            <p className="mt-5 text-center text-[16px]">{item.result}</p>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col">
          <CtaButton className="mt-[38px]" />
        </div>
      </div>
    </Section>
  );
}
