import React from "react";
import styles from "./style.module.css";
import EngageTitle from "../EngageTitle/page";
import { useTranslations } from "next-intl";

// Components
import MainButton from "../ui/MainButton/MainButton";
import InfoCards from "../ui/InfoCards/InfoCards";

export default function RedirectSection({ sectionData }) {
  const t = useTranslations();

  return (
    <div className={styles.container}>
      {sectionData.title && (
        <EngageTitle
          title={t(sectionData.title)}
          description={t(sectionData.description)}
        />
      )}
      {sectionData.cards && (
        <InfoCards
          data={sectionData.cards}
          colorType="blue"
          textAlign="left"
          titleSize="sm"
          styleType="digital"
          iconPositionSwap={true}
        />
      )}
      <div className={styles.button}>
        <MainButton
          color="FullWhite"
          size="large"
          text={t(sectionData.button)}
        />
      </div>
    </div>
  );
}
