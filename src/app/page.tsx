import { CheckList } from "@/components/CheckList";
import { CtaButton } from "@/components/CtaButton";
import { Figure } from "@/components/Figure";
import { VideoEmbed } from "@/components/VideoEmbed";
import {
  caseStudies,
  contact,
  hero,
  painPoints,
  services,
  showreel,
  system,
} from "@/content/site";

/** Poppins 500 is the heading face across the whole live page. */
const heading = "font-heading font-medium";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className={`hero-band${hero.background.src ? "" : " hero-band--placeholder"}`}
        style={
          hero.background.src
            ? ({
                "--hero-image": `url(${hero.background.src})`,
              } as React.CSSProperties)
            : undefined
        }
      >
        <div className="container-v2">
          <div className="col-v2">
            <h1
              className={`${heading} mt-5 text-center text-[42px] leading-tight text-white lg:text-[52px]`}
            >
              {hero.headingLead}
              <span className="font-bold text-[var(--color-brand-accent)]">
                {hero.headingAccent}
              </span>
            </h1>
          </div>

          <div className="pb-6">
            <p className="mx-auto max-w-full text-center text-[16px] font-normal text-white md:px-[101px] lg:text-[19px]">
              {hero.perex}
            </p>
          </div>

          <div className="pb-6">
            <VideoEmbed
              src={hero.video}
              title="Vexy Labs"
              radius={26}
              bordered
            />
          </div>

          <div className="pb-2">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* Poznáváte se v některé z těchto situací... */}
      <section>
        <div className="container-v2">
          <div className="grid items-center gap-x-[30px] md:grid-cols-2">
            <div className="col-v2">
              <h2
                className={`${heading} -mt-1.5 text-left text-[23px] leading-tight lg:text-[38px]`}
              >
                {painPoints.heading}
              </h2>
              <CheckList items={painPoints.items} />
            </div>
            <div className="col-v2">
              <Figure asset={painPoints.image} className="rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Showreel */}
      <section>
        <div className="container-v2">
          <div className="col-v2">
            <VideoEmbed
              src={showreel.video}
              title="Vexy Labs – ukázka"
              widthPercent={75}
              radius={27}
            />
          </div>
        </div>
      </section>

      {/* Systém, který pravidelně domlouvá obchodní schůzky. */}
      <section>
        <div className="container-v2">
          <div className="grid items-center gap-x-[30px] md:grid-cols-2">
            <div className="col-v2">
              <Figure asset={system.image} className="rounded-3xl" />
            </div>
            <div className="col-v2">
              <h2
                className={`${heading} -mt-1.5 text-left text-[23px] leading-tight lg:text-[38px]`}
              >
                {system.heading}
              </h2>
              <CheckList items={system.items} />
              <CtaButton align="left" />
            </div>
          </div>
        </div>
      </section>

      {/* Co za vás převezmeme? */}
      <section className="bg-[var(--color-brand)]">
        <div className="container-v2 pt-[22px] pb-[36px]">
          <div className="col-v2">
            <h2
              className={`${heading} -mt-1.5 text-center text-[23px] leading-tight text-white lg:text-[38px]`}
            >
              {services.heading}
            </h2>
          </div>

          <div className="grid gap-x-[30px] md:grid-cols-3">
            {services.items.map((service) => (
              <div key={service.title} className="col-v2 text-center">
                <Figure
                  asset={service.icon}
                  className="mt-5"
                  width={service.iconWidth}
                />
                <h3
                  className={`${heading} mt-[7px] text-[23px] leading-tight text-white lg:text-[31px]`}
                >
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Případové studie */}
      <section>
        <div className="container-v2">
          <div className="col-v2">
            <h2
              className={`${heading} text-center text-[30px] leading-tight lg:text-[38px] lg:leading-[38px]`}
            >
              {caseStudies.heading}
            </h2>
          </div>

          <div className="grid gap-x-[30px] md:grid-cols-2">
            {caseStudies.items.map((study) => (
              <div key={study.title} className="col-v2">
                <a href={study.href} className="block">
                  <Figure asset={study.image} className="rounded-[20px]" />
                </a>
                <p className="mt-5 text-center text-[17px] font-bold lg:text-[21px]">
                  {study.title}
                </p>
                <p className="mt-5 text-center text-[16px] font-normal">
                  {study.result}
                </p>
              </div>
            ))}
          </div>

          <div className="col-v2">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <footer>
        <div className="container-v2">
          <div className="col-v2 pb-10">
            <p className="text-center text-[16px] font-normal">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className="mt-5 text-center text-[16px] font-normal">
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                {contact.phone}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
