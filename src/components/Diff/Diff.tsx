import { formatPercent, formatPrice } from "logic/utils/Helper";

import styles from "components/Diff/Diff.module.scss";

interface DiffProps {
  className?: string;
  original: number;
  actual: number;
}

export default function Diff({
  className = "",
  original = 0,
  actual = 0,
}: React.PropsWithChildren<DiffProps>) {
  const difference = -(original - actual);
  const positive = difference >= 0;

  const percent =
    actual === 0 && original === 0
      ? "0.00%"
      : formatPercent((actual * 100) / original - 100);

  const classNames = [
    positive ? styles.diffPositive : styles.diffNegative,
    className,
  ].join(" ");

  return (
    <p className={classNames}>
      <span>
        {positive ? "+" : "-"}
        {formatPrice(Math.abs(difference))}
      </span>
      <span>
        ({positive ? "+" : ""}
        {percent})
      </span>
    </p>
  );
}
