"use client";
import { useRef } from "react";

import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";

import { Button, ButtonType } from "@/components/Button/Button";
import { ReviewBox } from "@/components/ReviewBox/ReviewBox";

import { config } from "./config";

export default function Home() {
  const bottomSectionRef = useRef<HTMLElement | null>(null);

  const handleScrollToBottom = () => {
    if (bottomSectionRef.current) {
      const offset = 100;
      const elementPosition =
        bottomSectionRef.current.getBoundingClientRect().top +
        window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div>
          <img src="/assets/logo.svg" />
        </div>
        <div className={styles.download_btn} onClick={handleScrollToBottom}>
          <span>앱 다운로드</span>
          <img src="/assets/arrow.svg" />
        </div>
      </nav>
      <main className={styles.main}>
        <section className={styles.top}>
          <div className={styles.banner}>
            <div>
              <img src="/assets/app_icon.svg"></img>
            </div>
            <div className={styles.desc}>
              <h3>{config.title}</h3>
              <h4>{config.subtitle}</h4>
              <h5>{config.company}</h5>
              <p>{config.rank}</p>
              <div>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <img key={i} src="/assets/star.svg" />
                  ))}
                <span>{config.rating}</span>
              </div>
            </div>
          </div>
          <h2>
            ‘오늘은’은 아날로그의 교환일기를 디지털로 옮긴 디지털
            교환일기입니다. <br />
            친구들과 함께 여러분의 오늘을 교환해보세요.
          </h2>
          <hr />
          <div className={styles.desc_list}>
            {config.descriptions.map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <h4>{item.desc}</h4>
              </div>
            ))}
          </div>
        </section>
        <hr />
        <section className={styles.middle}>
          <h1>iPhone 스크린샷</h1>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {config.img.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <hr />
        <section className={styles.bottom} ref={bottomSectionRef}>
          <h1>앱 다운로드 및 후기</h1>
          <div className={styles.button_container}>
            <Button
              text="oneul.apk 다운로드"
              type={ButtonType.DARK}
              desc="현재는 안드로이드 버전만 가능해요"
            />
            <Button
              text="후기 작성하기"
              type={ButtonType.BRIGHT}
              desc="추첨을 통해 기프티콘을 드려요"
            />
          </div>
          <div className={styles.review_container}>
            {config.reviews.map((review, index) => (
              <ReviewBox
                key={index}
                stars={review.stars}
                title={review.title}
                description={review.description}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div>
          <img src="/assets/github.svg" />
          <img src="/assets/insta.svg" />
        </div>
        <div>contact instagram @o.neul_app</div>
      </footer>
    </div>
  );
}
