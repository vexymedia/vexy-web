type Props = {
  src: string;
  title: string;
  /** Percentage of the column width the player occupies, as on the live page. */
  widthPercent?: number;
  radius: number;
  bordered?: boolean;
};

export function VideoEmbed({
  src,
  title,
  widthPercent = 100,
  radius,
  bordered = false,
}: Props) {
  return (
    <div
      className="relative mx-auto aspect-video w-full overflow-hidden"
      style={{
        maxWidth: `${widthPercent}%`,
        borderRadius: `${radius}px`,
        ...(bordered
          ? { border: "2px solid var(--color-video-border)" }
          : undefined),
      }}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        allowFullScreen
        loading="lazy"
        frameBorder={0}
      />
    </div>
  );
}
