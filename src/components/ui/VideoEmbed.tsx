type VideoEmbedProps = {
  videoId: string;
  /** YouTube player controls, hidden on the short like on the original. */
  controls?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/** 16:9 YouTube embed, matching the original's video component. */
export function VideoEmbed({
  videoId,
  controls = true,
  className = "",
  style,
}: VideoEmbedProps) {
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden ${className}`}
      style={style}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=${controls ? 1 : 0}&loop=0&rel=0&enablejsapi=1`}
        title="Vexy Labs"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
