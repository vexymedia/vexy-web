import type { Asset } from "@/content/site";

type Props = {
  asset: Asset;
  className?: string;
  /** Fixed rendered width in px, as set on the live page. */
  width?: number;
};

/**
 * Renders an image once it has been imported into /public. Until then the
 * Konverzky CDN copy is not reachable from this project, so we reserve the
 * right box instead of shipping a broken <img>.
 */
export function Figure({ asset, className = "", width }: Props) {
  const style = width ? { width: `${width}px` } : undefined;

  if (asset.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={asset.src}
        alt={asset.alt}
        loading="lazy"
        className={`mx-auto block h-auto max-w-full ${className}`}
        style={style}
      />
    );
  }

  return (
    <div
      aria-hidden
      className={`mx-auto block w-full max-w-full bg-black/5 ${className}`}
      style={{ ...style, aspectRatio: String(asset.ratio) }}
    />
  );
}
