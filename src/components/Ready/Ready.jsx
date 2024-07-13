import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Ready.module.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import ReadyCards from "./ReadyCards/ReadyCards";

export default function Ready() {
  const t = useTranslations();

  const readyCardsData = [
    {
      size: "1/2",
      title: t("ReadySection.ReadyCards.card1.title"),
      descr: t("ReadySection.ReadyCards.card1.descr"),
      href: "#link1",
    },
    {
      size: "1/2",
      title: t("ReadySection.ReadyCards.card2.title"),
      descr: t("ReadySection.ReadyCards.card2.descr"),
      href: "#link2",
    },
    {
      size: "1/3",
      title: t("ReadySection.ReadyCards.card3.title"),
      descr: t("ReadySection.ReadyCards.card3.descr"),
      href: "#link3",
    },
    {
      size: "1/3",
      title: t("ReadySection.ReadyCards.card4.title"),
      descr: t("ReadySection.ReadyCards.card4.descr"),
      href: "#link4",
    },
    {
      size: "1/3",
      title: t("ReadySection.ReadyCards.card5.title"),
      descr: t("ReadySection.ReadyCards.card5.descr"),
      href: "#link5",
    },
    {
      size: "1/2",
      title: t("ReadySection.ReadyCards.card6.title"),
      descr: t("ReadySection.ReadyCards.card6.descr"),
      href: "#link6",
    },
    {
      size: "1/2",
      title: t("ReadySection.ReadyCards.card7.title"),
      descr: t("ReadySection.ReadyCards.card7.descr"),
      href: "#link7",
    },
  ];

  return (
    <div>
      <SectionTitle
        title={t("ReadySection.title")}
        subtitle={t("ReadySection.subtitle")
          .split(" ")
          .map((word, index, words) => {
            let specialWord = ["Visual"].includes(word);
            let blueWord = ["Inspiration"].includes(word);

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
        description={t("ReadySection.description")}
        styleType="sectionTitleWhite"
      />

      <ReadyCards data={readyCardsData} />
    </div>
  );
}
