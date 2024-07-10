import styles from "./CustomHero.module.css";
import HeroCustomTitle from "../ui/HeroCustomTitle/HeroCustomTitle";
import MainButton from "../ui/MainButton/MainButton";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CustomHero({
  sectionName,
  imageSrc,
  imageAlt,
  coloredWords,
  specialWords,
}) {

  const t = useTranslations(sectionName);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Text}>
        <HeroCustomTitle
          sectionName={sectionName}
          coloredWords={coloredWords}
          specialWords={specialWords}
        />
        <p className={styles.TextDescr}>{t("Hero.HeroSubtitle")}</p>
        <div className={styles.HeroActions}>
          <MainButton color="Blue" size="medium" text={t("Hero.HeroButton")} />
          <MainButton
            color="Clear"
            size="medium"
            text={t("Hero.HeroButtonClear")}
          />
        </div>
      </div>
      <div className={styles.Video}>
        <Image src={imageSrc} alt={imageAlt}></Image>
      </div>
    </div>
  );
}
