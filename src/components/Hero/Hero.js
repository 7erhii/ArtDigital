"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import heroBgImage from "@/assets/images/hero-bg.png";

import cardIcon from "@/assets/icons/icon-cards.svg";
import gridIcon from "@/assets/icons/icon-grid2.svg";

// import imageCard1 from "@/assets/images/image-card1.svg";
// import imageCard2 from "@/assets/images/image-card2.svg";
// import imageCard3 from "@/assets/images/image-card3.svg";
// import imageCard4 from "@/assets/images/image-card4.svg";

import imageCard1 from "@/assets/images/image-card1.png";
import imageCard2 from "@/assets/images/image-card2.png";
import imageCard3 from "@/assets/images/image-card3.png";
import imageCard4 from "@/assets/images/image-card4.png";

import styles from "./Hero.module.css";

import HeroTitle from "./ui/HeroTitle";
import HeroCards from "../HeroCards/HeroCards";

export default function Hero() {
  const t = useTranslations("Hero");
  const [bgColor, setBgColor] = useState("#3C7BF6");

  const highlightKeyword = (text) => {
    const parts = text.split(/(ready | готово)/gi);
    return parts.map((part, index) =>
      /ready|готово/i.test(part) ? (
        <span key={index} className="highlight" style={styles.spanColor}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const [activeButton, setActiveButton] = useState("cardIcon");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const cardClass = (index) => {
    const baseClasses = [
      styles.heroCardImageFirst,
      styles.heroCardImageSecond,
      styles.heroCardImageThird,
      styles.heroCardImageFourth,
    ];
    const linedClasses = [
      styles.heroCardImageFirstLined,
      styles.heroCardImageSecondLined,
      styles.heroCardImageThirdLined,
      styles.heroCardImageFourthLined,
    ];

    if (activeButton === "cardIcon") {
      return baseClasses[index];
    } else if (activeButton === "gridIcon") {
      return linedClasses[index];
    }
    return "";
  };

  return (
    <div className="hero">
      <div
        className="mx-auto text-center py-20  pb-0 "
        style={{ maxWidth: "62em" }}
      >
        <div className="hero__title relative text-nowrap">
          <h2
            className="uppercase text-8xl font-poppins pr-[3em]"
            style={{ fontSize: "5.25em", fontWeight: "600" }}
          >
            {highlightKeyword(t("title-line1"))}
          </h2>
          <h2
            className="uppercase text-8xl font-poppins "
            style={{ fontSize: "5.25em", fontWeight: "600" }}
          >
            {t("title-line2")}
          </h2>
          <button
            className="main-btn main-btn--red btn absolute top-0 right-0"
            style={{
              background: "#3C7BF6",
              padding: "1.5em 2em",
              border: "0.3em solid #6E94F1",
              color: "#fff",
            }}
          >
            {t("button")}
          </button>
        </div>
        <div className="hero__subtitle font-poppins py-[5rem]">
          <p>{t("subtitle")}</p>
        </div>
        {/* <button>CLICK1</button> */}
      </div>

      <div>
        <HeroCards />
      </div>
    </div>
  );
}
