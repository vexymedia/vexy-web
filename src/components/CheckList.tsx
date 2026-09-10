type Props = {
  items: readonly string[];
  className?: string;
};

export function CheckList({ items, className = "" }: Props) {
  return (
    <ul className={`check-list mt-5 text-[16px] lg:text-[19px] ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
