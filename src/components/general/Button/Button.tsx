import styles from "components/general/Button/Button.module.scss";

interface ButtonProps {
  className?: string;
  label: string;
  title?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: React.ButtonHTMLAttributes<HTMLButtonElement>["disabled"];
  onClick?: (event: React.MouseEvent) => void;
}

export default function Button({
  className,
  label,
  title = "",
  type,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      title={title}
      className={`${styles.wrapper} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
