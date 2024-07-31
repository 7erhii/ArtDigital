import React from "react";

// Styles
import styles from "./style.module.css";
import EngageTitle from "../EngageTitle/page";
import { useTranslations } from "next-intl";
// import { useTranslations } from "use-intl";

export default function RedirectSection() {
  const t = useTranslations();
  return (
    <div className={styles.container}>
      <EngageTitle title={t("BackEnd.EngageSection.Title")} description={t("BackEnd.EngageSection.Title")} button={t("BackEnd.EngageSection.Title")}/>
    </div>
  );
}
