"use client";
import { useEffect, useState, useRef } from "react";

import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import { Button, ButtonType } from "@/components/Button/Button";
import { ReviewBox } from "@/components/ReviewBox/ReviewBox";
import Splash from "@/components/Splash/Splash";

import { config } from "./config";
import { useViewport } from "@/hooks/useViewport";
import { MQ, RedirectType, sizes } from "./util";

export default function Home() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const { width } = useViewport();
  const selectedSize = width < MQ ? sizes.mobile : sizes.PC;
  const {
    logoWidth,
    arrowWidth,
    screenWidth,
    screenGap,
    pagingArrow,
    pagingGap,
    social,
    text,
    marginArrow,
  } = selectedSize;
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

  const handleRedirect = (type: RedirectType) => {
    let url = "";
    if (type === RedirectType.GIT) {
      url = "https://github.com/SS507-today";
    } else if (type === RedirectType.FORM) {
      url = "https://forms.gle/ssrsWhW7yHXaaafB9";
    } else if (type === RedirectType.INSTA) {
      url = "https://www.instagram.com/o.neul_app?igsh=MXd3bXJidzNnc3RiYQ==";
    }
    window.location.href = url;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <Splash />}

      <div className={styles.page}>
        <nav className={styles.nav}>
          <div>
            <img src="/assets/logo.svg" />
          </div>
          <div className={styles.download_btn} onClick={handleScrollToBottom}>
            <span>앱 다운로드</span>
            <img src="/assets/arrow.svg" width={arrowWidth} />
          </div>
        </nav>
        <main className={styles.main}>
          <section className={styles.top}>
            <div className={styles.banner}>
              <div>
                <img src="/assets/app_icon.svg" width={logoWidth}></img>
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
            <h2>{text}</h2>
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
              slidesPerView="auto"
              spaceBetween={screenGap}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 1000,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {config.img.map((item, index) => (
                <SwiperSlide key={index} style={{ width: `${screenWidth}px` }}>
                  <img src={item} width={screenWidth} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="swiper-button-wrapper"
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                gap: `${pagingGap}px`,
                marginRight: `${marginArrow}px`,
              }}
            >
              <div
                className="swiper-button-prev"
                style={{
                  marginTop: "0",
                  position: "static",
                  color: "#fff",
                  height: "100px",
                }}
              >
                <img
                  src="/assets/circle-arrow.svg"
                  width={pagingArrow}
                  style={{ transform: "rotate(180deg)" }}
                />
              </div>
              <div
                className="swiper-button-next"
                style={{
                  marginTop: "0",
                  position: "static",
                  color: "#fff",
                  height: "100px",
                }}
              >
                <img src="/assets/circle-arrow.svg" width={pagingArrow} />
              </div>
            </div>
          </section>
          <hr />
          <section className={styles.bottom} ref={bottomSectionRef}>
            <h1>앱 다운로드 및 후기</h1>
            <div className={styles.button_container}>
              <Button
                text="oneul.apk 다운로드"
                type={ButtonType.DARK}
                desc="현재는 안드로이드 버전만 가능해요"
                onClick={() => {}}
              />
              <Button
                text="후기 작성하기"
                type={ButtonType.BRIGHT}
                desc="추첨을 통해 기프티콘을 드려요"
                onClick={() => handleRedirect(RedirectType.FORM)}
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
            <img
              src="/assets/github.svg"
              width={social}
              onClick={() => handleRedirect(RedirectType.GIT)}
            />
            <img
              src="/assets/insta.svg"
              width={social}
              onClick={() => handleRedirect(RedirectType.FORM)}
            />
          </div>
          <div>contact instagram @o.neul_app</div>
        </footer>
      </div>
    </>
  );
}
