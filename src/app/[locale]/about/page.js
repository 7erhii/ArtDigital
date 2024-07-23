import React from "react";
import { useTranslations } from "next-intl";
import styles from "./styles.module.css";
import Header from "@/components/Header/Header";
import CustomHero from "@/components/CustomHero/CustomHero";

import AboutImage from "@/assets/images/image-about.png";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import AchievementCard from "@/components/Achievements/AchievementCard";
import StepsCards from "@/components/StepsCards/StepsCards";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Industries from "@/components/Industries/Industries";
import InfoCards from "@/components/ui/InfoCards/InfoCards";

import iconSolution from "@/assets/icons/icon-card-solution.svg";
import iconLightning from "@/assets/icons/icon-card-lightning.svg";
import iconSupport from "@/assets/icons/icon-card-support.svg";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Colophon from "@/components/Colophon/Colophon";
import MainButton from "@/components/ui/MainButton/MainButton";
import { forEach } from "lodash";
import ContactFormMini from "@/components/ui/ContactFormMini/ContactFormMini";

const getIcon = (title) => {
  switch (title) {
    case "Professional Solutions You Can Trust":
      return iconSolution;
    case "Fast Turnaround Get Up and Running Quickly":
      return iconLightning;
    case "Personalized Support, We’re Here for You":
      return iconSupport;

    default:
      return null;
  }
};

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

  const achievementsData = t.raw("AchievementsData").map((item, index) => ({
    icon: null,
    number: item.Count,
    text: item.Description,
  }));

  // const StepsData = t.raw("Process.Steps").map((card) => ({
  //   ...card,
  // }));

  // const AdvantagesData = t.raw("Advantages.Items").map((card) => ({
  //   ...card,
  //   icon: getIcon(card.Title),
  // }));

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
            {/* TODO: */}
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

            <p>{t("ContactForm.description")}</p>
          </div>

          <div className="w-1/2">
            <ContactFormMini data={contactFormData} />
          </div>
        </div>
      </SectionWrapper>


      {/* <ContactForm data={contactFormData} /> */}
      {/* <Faq page="ReadyMadeItems" /> */}
      <Footer />
      <Colophon />
    </div>
  );
}
