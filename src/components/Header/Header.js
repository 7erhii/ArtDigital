import styles from "./Header.module.css";
import Image from "next/image";
import mainLogo from "@/assets/images/main-logo.svg";
import Nav from "./ui/Nav";
import Link from "next/link";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import MainButton from "../ui/MainButton/MainButton";

const Header = ({ locale }) => {
  const t = useTranslations()
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={`/${locale}`} className={styles.HeaderLogo}>
          <Image src={mainLogo} alt="Main Logo" width={127} height={27} />
        </Link>
        <Nav locale={locale} />
        <div className={styles.HeaderAction}>
          <MainButton color="Black"  text={t("Buttons.contactBnt")}/>
          {/* <button
            className={`main-btn main-btn--sm main-btn--black bg-mainBlack text-white py-2 px-6 rounded-full ${styles.headerButton}`}
          > */}
            {/* <span>{t("Buttons.contactBnt")}</span> */}
          {/* </button> */}
          <div className="language-menu flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
