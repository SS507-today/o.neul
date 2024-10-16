import styles from "./ReviewBox.module.css";

type ReviewProps = {
  stars: number;
  title: string;
  description: string;
};

export const ReviewBox = ({ stars, title, description }: ReviewProps) => {
  const starElements = Array(stars)
    .fill(0)
    .map((_, index) => <img key={index} src="/assets/star.svg" alt="star" />);

  return (
    <div className={styles.reviewBox}>
      <div className={styles.stars}>{starElements}</div>
      <h3 className={styles.h3}>{title}</h3>
      <p className={styles.p}>{description}</p>
    </div>
  );
};
