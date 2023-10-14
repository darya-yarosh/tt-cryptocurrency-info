import { formatPrice } from "logic/utils/Helper";

import styles from "components/Diff/Diff.module.scss";

type DiffProps = {
    className?: string;
    original: number;
    actual: number;
}

export function Diff({
    className = "",
    original = 0,
    actual = 0,
}: React.PropsWithChildren<DiffProps>) {
    const difference = -(original - actual);
    const positive = difference >= 0;

    const percent = (((actual * 100) / original) - 100).toFixed(1);

    const classNames = [
        positive ? styles.diffPositive : styles.diffNegative,
        className,
    ].join(" ");

    return (
        <span className={classNames}>
            {positive ? "+" : "-"}
            {formatPrice(Math.abs(difference))}
            &nbsp;
            ({positive ? "+" : "-"}{percent}%)
        </span>
    )
}