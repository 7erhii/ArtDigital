import React from "react";
import { useTranslations } from "next-intl";

import styles from "./WorkSection.module.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import WorkSlider from "./WorkSlider/WorkSlider";
import MainButton from "../ui/MainButton/MainButton";

export default function WorkSection() {
  const t = useTranslations();

  const slidesData = t.raw("SlidesWork");

  return (
    <div style={{paddingBottom: "10em"}}>
      <SectionTitle
        title={t("workSection.title")}
        subtitle={t("workSection.subtitle")
          .split(" ")
          .map((word, index, words) => {
            let specialWord = ["Visual"].includes(word);
            let blueWord = ["in", "Action"].includes(word);

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
        description={t("workSection.description")}
        styleType="sectionTitleWhite"
      />
      <WorkSlider data={slidesData} />
    </div>
  );
}
