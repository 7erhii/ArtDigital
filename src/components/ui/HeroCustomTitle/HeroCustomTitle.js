import React from "react";
import { useTranslations } from "next-intl";
import styles from "./HeroCustomTitle.module.css";

export default function HeroCustomTitle({
  sectionName,
  specialWords,
  coloredWords,
}) {
  const t = useTranslations(sectionName);

  return (
    <div>
      <h1 className={styles.HeroTitle}>
        {t("Hero.HeroTitle")
          .split(" ")
          .map((word, index, array) => {
            const isSpecial = specialWords.includes(word);
            const isColored = coloredWords.includes(word);
            const addSpace = (index < array.length - 1) ? ' ' : '';
            return (
              <React.Fragment key={index}>
                <span
                  style={
                    isColored ? { color: "#3C7BF6" } : { color: "#151515" }
                  }
                >
                  {word}{addSpace}
                </span>
                {isSpecial && <br />}
              </React.Fragment>
            );
          })}
      </h1>
    </div>
  );
}
