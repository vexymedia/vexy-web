import { assets } from "@/data/assets";
import { hero } from "@/data/content";
import { CtaButton } from "./ui/CtaButton";
import { Section } from "./ui/Section";
import { VideoEmbed } from "./ui/VideoEmbed";

/** Green hero: headline, intro paragraph, intro video and the first CTA. */
export function Hero() {
  return (
    <Section
      className="bg-hero-fallback bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${assets.heroBackground})` }}
    >
      <div className="row">
        <div className="col">
          <h1 className="mt-5 text-center font-heading text-[42px] leading-[1.25] font-medium text-white lg:text-[52px]">
            {hero.headline}{" "}
            <b className="font-bold text-brand-accent">{hero.headlineAccent}</b>
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col pt-0">
          <p className="text-center text-[16px] text-white lg:text-[19px] md:px-[101px]">
            {hero.paragraph}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col md:pb-0">
          <VideoEmbed
            videoId={hero.videoId}
            className="rounded-[26px] border-2 border-video-frame"
          />
        </div>
      </div>

      <div className="row">
        <div className="col pt-0 pb-2">
          <CtaButton className="mt-[38px]" />
        </div>
      </div>
    </Section>
  );
}
