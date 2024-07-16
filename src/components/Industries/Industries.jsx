import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./Industries.module.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import IndustriesCards from "./IndustriesCards/IndustriesCards";
import ContactForm from "../ui/ContactForm/ContactForm";

import iconHome from "@/assets/icons/icon-home.svg";
import iconCardiology from "@/assets/icons/icon-cardiology.svg";
import iconNature from "@/assets/icons/icon-nature.svg";
import iconSchool from "@/assets/icons/icon-school.svg";
import iconHomeWork from "@/assets/icons/icon-home_work.svg";
import iconBackHand from "@/assets/icons/icon-back_hand.svg";

export default function Industries({ type = "white" }) {
  const t = useTranslations("IndustriesSections");

  const industriesCardsData = [
    {
      image: iconHome,
      title: t("IndustriesCards.card1.title"),
    },
    {
      image: iconCardiology,
      title: t("IndustriesCards.card2.title"),
    },
    {
      image: iconNature,
      title: t("IndustriesCards.card3.title"),
    },
    {
      image: iconSchool,
      title: t("IndustriesCards.card4.title"),
    },
    {
      image: iconHomeWork,
      title: t("IndustriesCards.card5.title"),
    },
    {
      image: iconBackHand,
      title: t("IndustriesCards.card6.title"),
    },
  ];

  return (
    <div className={type === "white" ? styles.pageWrapper : styles.pageWrapperDarkMode}>
      <SectionTitle
        title={t("title")}
        subtitle={t("subtitle")
          .split(" ")
          .map((word, index, words) => {
            let specialWord = ["Visual"].includes(word);
            let blueWord = ["we", "work", "with"].includes(word);

            if (specialWord || blueWord) {
              return (
                <React.Fragment key={index}>
                  <span
                    style={blueWord ? { color: "#3C7BF6" } : { color: "#151515" }}
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
        description={t("description")}
        styleType={type === "white" ? "sectionTitleDark" : "sectionTitleWhite"}
      />
      <IndustriesCards data={industriesCardsData} type={type} />
    </div>
  );
}
