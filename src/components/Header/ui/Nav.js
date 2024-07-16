import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";

import IconDesignUxUi from "@/assets/icons/icon-header-design-ux-ui.svg";
import IconDesignWeb from "@/assets/icons/icon-header-design-web.svg";
import IconDesignOutdoor from "@/assets/icons/icon-header-design-outdoor.svg";
import IconDevBack from "@/assets/icons/icon-header-dev-back.svg";
import IconDevFront from "@/assets/icons/icon-header-dev-front.svg";
import IconDevFull from "@/assets/icons/icon-header-dev-full.svg";
import IconMacketBranding from "@/assets/icons/icon-header-marketing-branding.svg";
import IconMacketSeo from "@/assets/icons/icon-header-marketing-seo.svg";
import IconRedyIp from "@/assets/icons/icon-header-redy-ip.svg";
import IconRedySeccurity from "@/assets/icons/icon-header-redy-security.svg";
import IconRedyCrm from "@/assets/icons/icon-header-redy-crm.svg";
import IconRedyApi from "@/assets/icons/icon-header-redy-api.svg";
import IconRedyChat from "@/assets/icons/icon-header-redy-chat.svg";
import IconRedyBilling from "@/assets/icons/icon-header-redy-billing.svg";
import IconRedyIptv from "@/assets/icons/icon-header-redy-iptv.svg";

import About from "@/assets/icons/icon-header-redy-iptv.svg";

const icons = {
  "UX/ UI research and design": IconDesignUxUi,
  "Web, landings and mobile design": IconDesignWeb,
  "Outdoor design for business": IconDesignOutdoor,
  "Back-End": IconDevBack,
  "Front-End": IconDevFront,
  "Full Stack": IconDevFull,
  "Product branding": IconMacketBranding,
  "SEO Advertising": IconMacketSeo,
  "IP telephony implementation & administration": IconRedyIp,
  "Implementation of security systems": IconRedySeccurity,
  "Implementation of a CRM system": IconRedyCrm,
  "Integration of systems using API": IconRedyApi,
  "Chat bot implementations": IconRedyChat,
  "Ready Billing system": IconRedyBilling,
  "IPTV/OTT": IconRedyIptv,
  "About Us": About,
};

const Nav = ({ locale }) => {
  const t = useTranslations();

  const menuData = t.raw("Header");

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {menuData.map((item, index) => (
          <li className={styles.navItem} key={index}>
            <Link href={`/${locale}${item.links[0]}`}>
              <div className={styles.navTitle}>{item.title}</div>
            </Link>
            <div className={styles.navDropdovnGroup}>
              {item.subtitles.map((subtitle, idx) => (
                <div className={styles.navDropdovnItem} key={idx}>
                  {icons[subtitle] && (
                    <Image
                      src={icons[subtitle]}
                      alt={subtitle}
                      width={20}
                      height={20}
                    />
                  )}
                  <Link href={`/${locale}${item.links[idx]}`}>{subtitle}</Link>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
