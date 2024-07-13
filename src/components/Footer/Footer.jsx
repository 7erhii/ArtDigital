import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./Footer.module.css";
import mainLogo from "@/assets/icons/MainLogoWhite.svg";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterInfo}>
        <div className={styles.FooterCompany}>
          <Link href="/" className="header__logo">
            <Image src={mainLogo} alt="Main Logo" />
          </Link>
          <p>{t("company.descr")}</p>
        </div>
        <div className={styles.FooterContacts}>
          <h3>{t("company.contacts.country")}</h3>
          <h4>{t("company.contacts.street")}</h4>
          <Link href={`tel:${t("company.contacts.phone")}`}>
            {t("company.contacts.phone")}
          </Link>
          <Link href={`mailto:${t("company.contacts.email")}`}>
            {t("company.contacts.email")}
          </Link>
        </div>
      </div>
      <div className={styles.FooterMenu}></div>
    </div>
  );
}
