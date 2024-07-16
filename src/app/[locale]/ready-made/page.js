import React from "react";
import { useTranslations } from "next-intl";
import styles from "./styles.module.css";
import Header from "@/components/Header/Header";
import CustomHero from "@/components/CustomHero/CustomHero";

import ReadyMadeImage from "@/assets/images/image-readyMade.png";
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
};

export default function ReadyMade({ params: { locale } }) {
  const t = useTranslations("ReadyMade");
  const cardsData = t.raw("Offerings.Cards");

  const achievementsData = t.raw("AchievementsData").map((item, index) => ({
    icon: null,
    number: item.Count,
    text: item.Description,
  }));

  const StepsData = t.raw("Process.Steps").map((card) => ({
    ...card,
  }));

  const AdvantagesData = t.raw("Advantages.Items").map((card) => ({
    ...card,
    icon: getIcon(card.Title),
  }));

  return (
    <div>
      <Header locale={locale} />

      <CustomHero
        sectionName="ReadyMade"
        imageSrc={ReadyMadeImage}
        imageAlt="ReadyMade image, people behind the glass with notes"
        coloredWords={["Complete", "Solutions"]}
        specialWords={["Complete", "Solutions", "for"]}
      />

      <SectionWrapper dark={true}>
        <AchievementCard data={achievementsData} />
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle
          title={t("Process.Title")}
          subtitle={t("Process.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["It", "Works"].includes(word);

              if (specialWord || blueWord) {
                return (
                  <React.Fragment key={index}>
                    <span
                      style={
                        blueWord ? { color: "#3C7BF6" } : { color: "#fff" }
                      }
                    >
                      {word}
                    </span>
                    {specialWord && <br />}
                  </React.Fragment>
                );
              } else {
                return <span key={index}>{word}</span>;
              }
            })
            .reduce((acc, word, index, array) => {
              if (index < array.length - 1) {
                return [...acc, word, " "];
              } else {
                return [...acc, word];
              }
            }, [])}
          description={t("Process.Description")}
          styleType="sectionTitleWhite"
        />

        <StepsCards data={StepsData} type="dark" />
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle
          title={t("Offerings.Title")}
          subtitle={t("Offerings.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["All", "In", "One"].includes(word);

              if (specialWord || blueWord) {
                return (
                  <React.Fragment key={index}>
                    <span
                      style={
                        blueWord ? { color: "#3C7BF6" } : { color: "#fff" }
                      }
                    >
                      {word}
                    </span>
                    {specialWord && <br />}
                  </React.Fragment>
                );
              } else {
                return <span key={index}>{word}</span>;
              }
            })
            .reduce((acc, word, index, array) => {
              if (index < array.length - 1) {
                return [...acc, word, " "];
              } else {
                return [...acc, word];
              }
            }, [])}
          description={t("Offerings.Description")}
          styleType="sectionTitleWhite"
        />

        <div className="flex gap-3">
          <div className={`${styles.customCard} ${styles.white}`}>
            <h3>{cardsData[0].Title}</h3>
            <h4>{cardsData[0].Description}</h4>
            <p>{cardsData[0].Extra}</p>
            <ul>
              {cardsData[0].List.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.customCard} ${styles.dark}`}>
            <h3>{cardsData[1].Title}</h3>
            <h4>{cardsData[1].Description}</h4>
            <MainButton color="Blue" size="medium" text={cardsData[1].Button} />
          </div>
        </div>
      </SectionWrapper>

      
      <Industries type="dark" />
      <SectionWrapper dark={true}>
        <SectionTitle
          title={t("Advantages.Title")}
          subtitle={t("Advantages.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["Choose", "Us"].includes(word);

              if (specialWord || blueWord) {
                return (
                  <React.Fragment key={index}>
                    <span
                      style={
                        blueWord ? { color: "#3C7BF6" } : { color: "#fff" }
                      }
                    >
                      {word}
                    </span>
                    {specialWord && <br />}
                  </React.Fragment>
                );
              } else {
                return <span key={index}>{word}</span>;
              }
            })
            .reduce((acc, word, index, array) => {
              if (index < array.length - 1) {
                return [...acc, word, " "];
              } else {
                return [...acc, word];
              }
            }, [])}
          description={t("Advantages.Description")}
          styleType=""
        />

        <InfoCards data={AdvantagesData} color="dark" textAlign="center" />
      </SectionWrapper>

      <ContactForm data={contactFormData} />
      <Faq page="ReadyMadeItems" />
      <Footer />
      <Colophon />
    </div>
  );
}
