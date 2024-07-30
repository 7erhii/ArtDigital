import React from "react";
import { useTranslations } from "next-intl";

import styles from "./DesignSection.module.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import DesignSlider from "./DesignSlider/DesignSlider";

import MainButton from "../ui/MainButton/MainButton";

import sliderImage1 from "@/assets/images/slide1.png";
import sliderImage2 from "@/assets/images/slide2.png";
import sliderImage3 from "@/assets/images/slide3.png";

export default function DesignSection() {
  const t = useTranslations();
  const sliderDataObj = t.raw("SlidesDesign");

  const cardsData = [
    {
      image: sliderImage1,
      href: "#",
      title: sliderDataObj[0].title,
      subtitle: sliderDataObj[0].subtitle,
    },
    {
      image: sliderImage2,
      href: "#",
      title: sliderDataObj[1].title,
      subtitle: sliderDataObj[1].subtitle,
    },
    {
      image: sliderImage3,
      href: "#",
      title: sliderDataObj[2].title,
      subtitle: sliderDataObj[2].subtitle,
    },
  ];

  return (
    <div>
      <SectionTitle
        title={t("designSection.title")}
        subtitle={t("designSection.subtitle")
          .split(" ")
          .map((word, index, words) => {
            let specialWord = [""].includes(word);
            let blueWord = ["Visual", "Excellence"].includes(word);

            if (specialWord || blueWord) {
              return (
                <React.Fragment key={index}>
                  <span
                    style={blueWord ? { color: "#3C7BF6" } : { color: "#fff" }}
                  >
                    {word}
                  </span>
                  {specialWord && <br />}
                </React.Fragment>
              );
            } else {
              return <span key={index}>{word}</span>;
            }
          })
          .reduce((acc, word, index, array) => {
            if (index < array.length - 1) {
              return [...acc, word, " "];
            } else {
              return [...acc, word];
            }
          }, [])}
        description={t("designSection.description")}
        styleType="sectionTitleWhite"
      />

      <DesignSlider data={cardsData} />

      <div className={styles.designAction}>
        <MainButton
          text={t("designSection.buttonRight")}
          color="Blue"
          size="medium"
        />
        <MainButton
          text={t("designSection.buttonLeft")}
          color="White"
          size="medium"
        />
      </div>
    </div>
  );
}
