import * as gtag from "@/lib/gtag";
import styles from "./Button.module.css";

export enum ButtonType {
  DARK = "dark",
  BRIGHT = "bright",
}

type ButtonProps = {
  text: string;
  type: ButtonType;
  desc: string;
  gaCategory: string;
  onClick: () => void;
};

export const Button = ({
  text,
  type,
  desc,
  gaCategory,
  onClick,
}: ButtonProps) => {
  const handleClick = () => {
    onClick();

    gtag.event("select_item", {
      event_category: gaCategory,
      event_label: text,
      value: 1,
    });
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={`${styles.button} ${styles[type]}`}>{text}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};
