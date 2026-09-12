import { cta } from "@/data/content";
import { ArrowRightIcon } from "./Icons";

type CtaButtonProps = {
  /** The original centres the button everywhere except the solution section. */
  align?: "center" | "left";
  className?: string;
};

/**
 * The green "Zjistit potenciál pro naši firmu" button.
 * Label and target come from `cta` in src/data/content.ts.
 */
export function CtaButton({ align = "center", className = "" }: CtaButtonProps) {
  return (
    <div
      className={`flex ${align === "center" ? "justify-center" : "justify-start"} ${className}`}
    >
      <a
        href={cta.href}
        className="inline-flex items-center gap-3 rounded-[3px] bg-brand-button px-[47px] py-[13px] text-center text-[16px] font-bold text-white transition-opacity hover:opacity-90 lg:text-[24px]"
      >
        <span>{cta.label}</span>
        <ArrowRightIcon className="h-[0.8em] w-[0.8em] shrink-0" />
      </a>
    </div>
  );
}
