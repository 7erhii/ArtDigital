"use client";
import { useState } from "react";
import Image from "next/image";
import IconArrow from "@/assets/icons/icon-arrow.svg";
import { useRouter, useParams } from "next/navigation";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (value) => {
    if (value !== locale) {
      router.replace(`/${value}`);
    }
    setIsOpen(false);
  };

  return (
    <div
      className="language-switcher relative"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`${styles.LangSelector} ${isOpen ? styles.LangSelectorOpen : ""}`}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span className="uppercase">{locale}</span>
        <Image
          className={`${styles.LangSelectorIcon} ${isOpen ? styles.LangSelectorIconOpen : ""}`}
          src={IconArrow}
          alt="Arrow Icon"
          width={20}
          height={20}
        />
      </div>
      {isOpen && (
        <div className={styles.LangDropdown}>
          <div  className={styles.LangDropdownItem}  onClick={() => changeLanguage("en")}>
            EN
          </div>
          <div className={styles.LangDropdownItem} onClick={() => changeLanguage("ru")}>
            RU
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
