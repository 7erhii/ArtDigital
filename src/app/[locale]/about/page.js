import React from "react";
import { useTranslations } from "next-intl";
import styles from "./styles.module.css";
import Header from "@/components/Header/Header";
import CustomHero from "@/components/CustomHero/CustomHero";

import AboutImage from "@/assets/images/image-about.png";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import AchievementCard from "@/components/Achievements/AchievementCard";

import Footer from "@/components/Footer/Footer";
import Colophon from "@/components/Colophon/Colophon";
import ContactFormMini from "@/components/ui/ContactFormMini/ContactFormMini";

const contactFormData = {
  inputName: {
    title: "inputName.label",
    placeholder: "inputName.placeholder",
  },
  inputEmployees: {
    title: "inputEmployees.label",
    placeholder: "inputEmployees.placeholder",
    tooltip: "inputEmployees.tooltip",
  },
  inputEmail: {
    title: "inputEmail.label",
    placeholder: "inputEmail.placeholder",
  },
  inputPhone: {
    title: "inputPhone.label",
    placeholder: "inputPhone.placeholder",
  },
  inputDropdown: {
    title: "inputDropdown.label",
    placeholder: "inputDropdown.placeholder",
    options: {
      option1: "inputDropdown.options.option1",
      option2: "inputDropdown.options.option2",
      option3: "inputDropdown.options.option3",
      option4: "inputDropdown.options.option4",
    },
  },
  inputTextarea: {
    title: "inputTextarea.label",
    placeholder: "inputTextarea.placeholder",
  },
  button: {
    text: "button.text",
  },
};

export default function ReadyMade({ params: { locale } }) {
  const t = useTranslations("AboutUs");
  const aboutCardsData = t.raw("AboutDescription.Cards");
  const aboutTextData = t.raw("AboutDescription.Text.Description");

  const achievementsData = t.raw("AchievementsData").map((item, index) => ({
    icon: null,
    number: item.Count,
    text: item.Description,
  }));

  return (
    <div>
      <Header locale={locale} />

      <CustomHero
        sectionName="AboutUs"
        imageSrc={AboutImage}
        imageAlt="AboutUs image, Group of profeccional developers"
        coloredWords={["ART", "DIGITAL"]}
        specialWords={["MEET"]}
      />

      <SectionWrapper dark={true}>
        <AchievementCard data={achievementsData} />
      </SectionWrapper>
      <SectionWrapper>
        <div className={styles.AboutDescription}>
          <div className="w-1/2 gap-8 flex flex-col pr-20">
            {aboutCardsData.map((card, index) => (
              <div className={styles.AboutCard} key={index}>
                <h3>{card.Title}</h3>
                <p>{card.Description}</p>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <h3>{t("AboutDescription.Text.Title")}</h3>

            {aboutTextData.map((data, index) => (
              <div key={index}>
                <p>{data}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className={`flex w-full ${styles.AboutTitle}`}>
          <div className="w-1/2">
            <h1 className="">
              {t("ContactForm.title")
                .split(" ")
                .map((word, index, words) => {
                  if (["Let’s", "something", "amazing"].includes(word)) {
                    return (
                      <span key={index} style={{ color: "#3C7BF6" }}>
                        {word}{" "}
                      </span>
                    );
                  }

                  if (word === "build" && words[index + 1] === "something") {
                    return (
                      <React.Fragment key={index}>
                        {word} <br />
                      </React.Fragment>
                    );
                  }

                  return word + " ";
                })}
            </h1>
            <div>
              {aboutTextData.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          </div>

          <div className="w-1/2">
            <ContactFormMini data={contactFormData} />
          </div>
        </div>
      </SectionWrapper>

      <Footer />
      <Colophon />
    </div>
  );
}
