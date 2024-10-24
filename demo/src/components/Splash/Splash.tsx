"use client";
import Image from "next/image";
import styles from "./Splash.module.css";

export default function Splash() {
  return (
    <div className={styles.splashContainer}>
      <div className={styles.logoContainer}>
        <Image
          src="/assets/app_icon.svg"
          alt="App Icon"
          width={180}
          height={180}
          className={styles.appIcon}
        />
      </div>
      <div className={styles.text}>교환일기로 공유하는 오늘의 일기</div>
      <footer className={styles.footer}>
        © 2024 SS507. All rights reserved.
      </footer>
    </div>
  );
}
