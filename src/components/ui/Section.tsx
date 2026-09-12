type SectionProps = {
  children: React.ReactNode;
  /** Applied to the full-bleed wrapper (backgrounds live here). */
  className?: string;
  style?: React.CSSProperties;
  /** Overrides the container's default 20px vertical padding. */
  containerStyle?: React.CSSProperties;
};

/**
 * Full-bleed band + centred container — the original's
 * `.container-fluid > .container` pair.
 */
export function Section({
  children,
  className = "",
  style,
  containerStyle,
}: SectionProps) {
  return (
    <section className={className} style={style}>
      <div className="site-container" style={containerStyle}>
        {children}
      </div>
    </section>
  );
}
