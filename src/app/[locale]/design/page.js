import React from "react";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import { useMessages } from "next-intl";

import styles from "./styles.module.css";

import lineImage1 from "@/assets/images/line1.svg";
import lineImage2 from "@/assets/images/line2.svg";
import lineImage3 from "@/assets/images/line3.svg";
import lineImage4 from "@/assets/images/line4.svg";
import lineImage5 from "@/assets/images/line5.svg";
import lineImage6 from "@/assets/images/line6.svg";
import lineImage7 from "@/assets/images/line7.svg";
import lineImage8 from "@/assets/images/line8.svg";
import lineImage9 from "@/assets/images/line9.svg";

import iconMagni from "@/assets/icons/icon-magni.svg";
import iconLanding from "@/assets/icons/icon-landing.svg";
import iconDutdoor from "@/assets/icons/icon-outdoor.svg";

import iconDatabase from "@/assets/icons/icon-card-database.svg";
import iconAuthentication from "@/assets/icons/icon-card-authentication.svg";
import iconLogic from "@/assets/icons/icon-card-logic.svg";
import iconApi from "@/assets/icons/icon-card-api.svg";
import iconPerformance from "@/assets/icons/icon-card-performance.svg";
import iconScalability from "@/assets/icons/icon-card-scalability.svg";

import iconPhp from "@/assets/icons/icon-PHP.svg";
import iconMysql from "@/assets/icons/icon-mysql-dark.svg";
import iconPython from "@/assets/icons/icon-python.svg";
import iconNodeJs from "@/assets/icons/icon-nodejs.svg";

import CustomHero from "@/components/CustomHero/CustomHero";

import DesignImage from "@/assets/images/image-dev-design.png";
import RunningLine from "@/components/ui/RunningLine/RunningLine";
import GridCards from "@/components/ui/GridCards/GridCards";
import AchievementCard from "@/components/Achievements/AchievementCard";

import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import InfoCards from "@/components/ui/InfoCards/InfoCards";
import StepsCards from "@/components/StepsCards/StepsCards";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import Faq from "@/components/Faq/Faq";

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
    case "UX/ UI research and design":
      return iconMagni;
    case "Web, landings and mobile design":
      return iconLanding;
    case "Outdoor design for business":
      return iconDutdoor;
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
    default:
      return null;
  }
};

const inter = Inter({ subsets: ["latin"] });

export default function DesignPage() {
  const t = useTranslations("Design");

  // const aboutData = t.raw("About.InfoCards").map((card) => ({
  //   ...card,
  //   icon: getIcon(card.Title),
  // }));

  const achievementsData = t.raw("AchievementsData").map((item, index) => ({
    icon: null,
    number: item.Count,
    text: item.Description,
  }));

  const servicesData = t.raw("Services.ServicesCards").map((card) => ({
    ...card,
    icon: getIcon(card.Title),
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

  const StepsData = t.raw("Process.Steps").map((card) => ({
    ...card,
  }));

  return (
    <div className={inter.className}>
      <CustomHero
        sectionName="Design"
        imageSrc={DesignImage}
        imageAlt={"Design image, desk with a design ideas"}
        coloredWords={["DESIGN"]}
        specialWords={["DESIGN", "BEST"]}
      />

      <SectionWrapper dark={true}>
        <AchievementCard data={achievementsData} />
      </SectionWrapper>

      {/* <SectionWrapper dark={true}>
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
        <InfoCards data={aboutData} color="white" textAlign="center" />
      </SectionWrapper> */}

      {/* <div className="bg-[#151515] pb-[5em]">
        <RunningLine speed={7000} images={images} />
      </div> */}

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
        <InfoCards data={servicesData} color="dark" textAlign="center" />
      </SectionWrapper>

      {/* <SectionWrapper>
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
      </SectionWrapper> */}

      {/* <SectionWrapper dark={true}>
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

        <InfoCards data={AdvantagesData} color="white" textAlign="center" />
      </SectionWrapper> */}

      {/* <SectionWrapper dark={true}>
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
      </SectionWrapper> */}

      {/* <ContactForm></ContactForm> */}
      {/* <Faq page="BackendPageItems" /> */}
    </div>
  );
}
