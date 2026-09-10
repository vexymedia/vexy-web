import { cta } from "@/content/site";

type Props = {
  /** Live page centres every CTA except the one in the "Systém" column. */
  align?: "center" | "left";
  className?: string;
};

export function CtaButton({ align = "center", className = "" }: Props) {
  return (
    <div
      className={`mt-[38px] flex ${align === "center" ? "justify-center" : "justify-start"} ${className}`}
    >
      <a
        href={cta.href}
        className="btn-vexy text-[16px] lg:text-[24px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        {cta.label}
        <svg
          className="btn-vexy-arrow"
          viewBox="0 0 448 512"
          fill="currentColor"
          aria-hidden
        >
          <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
        </svg>
      </a>
    </div>
  );
}
