import React from "react";
import styles from "./style.module.css";
import EngageTitle from "../EngageTitle/page";
import { useTranslations } from "next-intl";

export default function RedirectSection({ sectionData }) {
  const t = useTranslations();
  return (
    <div className={styles.container}>
      {sectionData.title && (
        <EngageTitle
          title={t(sectionData.title)}
          description={t(sectionData.description)}
          button={t(sectionData.button)}
        />
      )}
    </div>
  );
}