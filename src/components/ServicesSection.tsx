import { services } from "@/data/content";
import { Section } from "./ui/Section";

/** Green band: "Co za vás převezmeme?" with three icons. */
export function ServicesSection() {
  return (
    <Section
      className="bg-brand"
      containerStyle={{ "--section-pt": "22px", "--section-pb": "36px" } as React.CSSProperties}
    >
      <div className="row">
        <div className="col">
          <h1 className="-mt-1.5 text-center font-heading text-[23px] leading-[1.25] font-bold text-white lg:text-[38px]">
            {services.heading}
          </h1>
        </div>
      </div>

      <div className="row">
        {services.items.map((item) => (
          <div key={item.title} className="col col-md-third">
            {/* eslint-disable-next-line @next/next/no-img-element -- artwork is served from the original CDN, see src/data/assets.ts */}
            <img
              src={item.icon}
              alt=""
              loading="lazy"
              style={{ width: item.iconWidth }}
              className="mx-auto mt-5 block max-w-full"
            />
            <h1 className="mt-2 text-center font-heading text-[23px] leading-[1.25] font-medium text-white lg:text-[31px]">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </Section>
  );
}
