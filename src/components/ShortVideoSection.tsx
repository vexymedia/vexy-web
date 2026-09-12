import { shortVideo } from "@/data/content";
import { Section } from "./ui/Section";
import { VideoEmbed } from "./ui/VideoEmbed";

/** Standalone YouTube Short, 75% of the column width like on the original. */
export function ShortVideoSection() {
  return (
    <Section>
      <div className="row">
        <div className="col">
          <VideoEmbed
            videoId={shortVideo.videoId}
            controls={false}
            className="w-3/4! rounded-[27px]"
          />
        </div>
      </div>
    </Section>
  );
}
