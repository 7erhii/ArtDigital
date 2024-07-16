import React from "react";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import { useMessages } from "next-intl";

import CustomHero from "@/components/CustomHero/CustomHero";

import BackendImage from "@/assets/images/image-dev-backend.png";
import RunningLine from "@/components/ui/RunningLine/RunningLine";
import GridCards from "@/components/ui/GridCards/GridCards";

import lineImage1 from "@/assets/images/line1.svg";
import lineImage2 from "@/assets/images/line2.svg";
import lineImage3 from "@/assets/images/line3.svg";
import lineImage4 from "@/assets/images/line4.svg";
import lineImage5 from "@/assets/images/line5.svg";
import lineImage6 from "@/assets/images/line6.svg";
import lineImage7 from "@/assets/images/line7.svg";
import lineImage8 from "@/assets/images/line8.svg";
import lineImage9 from "@/assets/images/line9.svg";

import iconConnect from "@/assets/icons/icon-connect.svg";
import iconResearch from "@/assets/icons/icon-Research.svg";
import iconDevelopment from "@/assets/icons/icon-Development.svg";

import iconDatabase from "@/assets/icons/icon-card-database.svg";
import iconAuthentication from "@/assets/icons/icon-card-authentication.svg";
import iconLogic from "@/assets/icons/icon-card-logic.svg";
import iconApi from "@/assets/icons/icon-card-api.svg";
import iconPerformance from "@/assets/icons/icon-card-performance.svg";
import iconScalability from "@/assets/icons/icon-card-scalability.svg";

import iconPage from "@/assets/icons/icon-card-page.svg";
import iconCard from "@/assets/icons/icon-card-card.svg";
import iconCorporate from "@/assets/icons/icon-card-corporate.svg";
import iconCatalog from "@/assets/icons/icon-card-catalog.svg";
import iconStore from "@/assets/icons/icon-card-store.svg";

import iconPhp from "@/assets/icons/icon-PHP.svg";
import iconMysql from "@/assets/icons/icon-mysql-dark.svg";
import iconPython from "@/assets/icons/icon-python.svg";
import iconNodeJs from "@/assets/icons/icon-nodejs.svg";

import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import InfoCards from "@/components/ui/InfoCards/InfoCards";
import StepsCards from "@/components/StepsCards/StepsCards";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import AccordionCardHolder from "@/components/AccordionCardHolder/AccordionCardHolder";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Colophon from "@/components/Colophon/Colophon";
import Header from "@/components/Header/Header";

const images = [
  lineImage1,
  lineImage2,
  lineImage3,
  lineImage4,
  lineImage5,
  lineImage6,
  lineImage7,
  lineImage8,
  lineImage9,
];

const getIcon = (title) => {
  switch (title) {
    case "Connect":
      return iconConnect;
    case "Research":
      return iconResearch;
    case "Development":
      return iconDevelopment;
    case "Database Management":
      return iconDatabase;
    case "User Authentication":
      return iconAuthentication;
    case "Server-Side Logic":
      return iconLogic;
    case "API Integration":
      return iconApi;
    case "Performance Optimization":
      return iconPerformance;
    case "Scalability and Flexibility":
      return iconScalability;

    case "landing page":
      return iconPage;
    case "Business Card Website":
      return iconCard;
    case "Corporate Website":
      return iconCorporate;
    case "Catalog Website":
      return iconCatalog;
    case "Online Store":
      return iconStore;

    default:
      return null;
  }
};

const inter = Inter({ subsets: ["latin"] });

export default function BackendPage({ params: { locale } }) {
  const t = useTranslations("BackEnd");

  const aboutData = t.raw("About.InfoCards").map((card) => ({
    ...card,
    icon: getIcon(card.Title),
  }));

  const servicesData = t.raw("Services.ServicesCards").map((card) => ({
    ...card,
    // icon: getIcon(card.Title),
  }));

  const AdvantagesData = t.raw("Advantages.Items").map((card) => ({
    ...card,
    icon: getIcon(card.Title),
  }));

  const cardsDataBack = {
    grid1: [{ type: "single", image: iconPhp, text: "PHP" }],
    //
    grid2: [{ type: "single", image: iconMysql, text: "MySQL" }],
    grid3: [{ type: "single", image: iconPython, text: "Python" }],
    grid: [{ type: "single", image: iconNodeJs, text: "Node Js" }],
  };

  const AccordionCardsData = t.raw("Services.AccordionCards").map((card) => ({
    ...card,
    InfoCards: card.InfoCards.map((infoCard) => ({
      ...infoCard,
      icon: getIcon(infoCard.Title),
    })),
  }));

  const StepsData = t.raw("Process.Steps").map((card) => ({
    ...card,
  }));

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

  return (
    
    <div className={inter.className}>
      <Header locale={locale} />

      <CustomHero
        sectionName="BackEnd"
        imageSrc={BackendImage}
        imageAlt={"Backend image, people behind the table"}
        coloredWords={["Back-end"]}
        specialWords={["Professional", "Back-end"]}
      />

      <SectionWrapper dark={true}>
        <SectionTitle
          title={t("About.Title")}
          subtitle={t("About.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = ["Visual"].includes(word);
              const blueWord = ["Clients"].includes(word);

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
          description={t("About.Description")}
          styleType=""
        />
        <InfoCards data={aboutData} colorType="whiteDark" textAlign="center" />
      </SectionWrapper>

      <div className="bg-[#151515] pb-[5em]">
        <RunningLine speed={7000} images={images} />
      </div>

      <SectionWrapper>
        <SectionTitle
          title={t("Services.Title")}
          subtitle={t("Services.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["Back-End"].includes(word);

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
          description={t("Services.Description")}
          styleType="sectionTitleWhite"
        />
        <InfoCards data={servicesData} colorType="dark" textAlign="left" />
      </SectionWrapper>
      <SectionWrapper>
        <AccordionCardHolder data={AccordionCardsData} />
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle
          title={t("Stack.Title")}
          subtitle={t("Stack.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["Visual", "Excellence"].includes(word);

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
          description={t("Stack.Description")}
          styleType="sectionTitleWhite"
        />

        <GridCards cardsData={cardsDataBack} type="white" />
      </SectionWrapper>

      <SectionWrapper dark={true}>
        <SectionTitle
          title={t("Advantages.Title")}
          subtitle={t("Advantages.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["Back-end", "Development"].includes(word);

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

        <InfoCards
          data={AdvantagesData}
          colorType="whiteDark"
          textAlign="center"
        />
      </SectionWrapper>

      <SectionWrapper dark={true}>
        <SectionTitle
          title={t("Process.Title")}
          subtitle={t("Process.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["Process"].includes(word);

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
          styleType=""
        />

        <StepsCards data={StepsData} />
      </SectionWrapper>

      <ContactForm data={contactFormData} />

      <Faq page="BackendPageItems" />
      <Footer/>
      <Colophon/>
    </div>
  );
}
