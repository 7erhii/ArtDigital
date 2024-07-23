import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./Footer.module.css";
import mainLogo from "@/assets/icons/MainLogoWhite.svg";

export default function Footer({ locale }) {
  const t = useTranslations("Footer");
  const footerItemsObj = t.raw("FooterItems");

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
      <nav className={styles.FooterMenu}>
        {footerItemsObj.map((item, index) => (
          <div key={index} className={styles.FooterMenuItem}>
            <div className={styles.FooterMenuTitle}>
              <p>{item.Title}</p>
            </div>
            <div className={styles.FooterMenuSubitle}>
              <p>{item.Subtitle}</p>
            </div>
            <ul className={styles.FooterMenuList}>
              {item.Points.map((point, subIndex) => (
                <li key={`point-${index}-${subIndex}`}>
                  <Link
                    className={styles.FooterMenuLink}
                    href={`/${locale}/${point.Link}`}
                  >
                    <p>{point.Text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
