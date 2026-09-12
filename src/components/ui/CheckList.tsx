import { CheckIcon } from "./Icons";

type CheckListProps = {
  items: string[];
  /** Line height differs slightly between the two lists on the page. */
  lineHeightClass?: string;
  className?: string;
};

/** Bulleted list with a check mark in front of every item. */
export function CheckList({
  items,
  lineHeightClass = "lg:leading-[1.7]",
  className = "",
}: CheckListProps) {
  return (
    <ul
      className={`text-[12px] leading-[1.5] tracking-[0.2px] lg:text-[19px] ${lineHeightClass} ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="mb-[0.5em] flex gap-[10px] last:mb-0">
          <CheckIcon className="mt-[0.45em] h-[0.75em] w-[16px] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
