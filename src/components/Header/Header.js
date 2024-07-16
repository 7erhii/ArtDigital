import styles from "./Header.module.css";
import Image from "next/image";
import mainLogo from "@/assets/images/main-logo.svg";
import Nav from "./ui/Nav";
import Link from "next/link";
import LanguageSwitcher from "./ui/LanguageSwitcher";

const Header = ({ locale }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={`/${locale}`} className="header__logo">
          <Image src={mainLogo} alt="Main Logo" />
        </Link>
        <Nav locale={locale} />
        <div className="header__actions flex gap-4">
          <button
            className={`main-btn main-btn--sm main-btn--black bg-mainBlack text-white py-2 px-3 rounded-full ${styles.headerButton}`}
          >
            <span>Contact us</span>
          </button>
          <div className="language-menu flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;