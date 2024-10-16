import styles from "./Button.module.css";

export enum ButtonType {
  DARK = "dark",
  BRIGHT = "bright",
}

type ButtonProps = {
  text: string;
  type: ButtonType;
  desc: string;
};

export const Button = ({ text, type, desc }: ButtonProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.button} ${styles[type]}`}>{text}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};
