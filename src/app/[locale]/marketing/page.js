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

import iconEngagement from "@/assets/icons/icon-card-engagement.svg";
import iconResearch from "@/assets/icons/icon-Research.svg";
import iconDevelopment from "@/assets/icons/icon-Development.svg";
import iconAccessibility from "@/assets/icons/icon-card-Accessibility.svg";
import iconFaster from "@/assets/icons/icon-card-faster.svg";
import iconThumb from "@/assets/icons/icon-card-thumb.svg";

import iconJourney from "@/assets/icons/icon-card-journey.svg";
import iconCommunication from "@/assets/icons/icon-card-communication.svg";
import iconMagniWhite from "@/assets/icons/icon-card-research.svg";
import iconNaming from "@/assets/icons/icon-card-naming.svg";
import iconBulb from "@/assets/icons/icon-card-bulb.svg";
import iconDesign from "@/assets/icons/icon-card-design.svg";
import iconBook from "@/assets/icons/icon-card-book.svg";
import iconBrand from "@/assets/icons/icon-card-brand.svg";
import iconPoster from "@/assets/icons/icon-card-poster.svg";
import iconAdvertising from "@/assets/icons/icon-card-advertising.svg";
import iconOutdoor from "@/assets/icons/icon-card-outdoor.svg";

import iconPhp from "@/assets/icons/icon-PHP.svg";
import iconMysql from "@/assets/icons/icon-mysql-dark.svg";
import iconPython from "@/assets/icons/icon-python.svg";
import iconNodeJs from "@/assets/icons/icon-nodejs.svg";

import CustomHero from "@/components/CustomHero/CustomHero";

import MarketingImage from "@/assets/images/image-dev-marketing.png";
import RunningLine from "@/components/ui/RunningLine/RunningLine";
import GridCards from "@/components/ui/GridCards/GridCards";
import AchievementCard from "@/components/Achievements/AchievementCard";

import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import InfoCards from "@/components/ui/InfoCards/InfoCards";
import StepsCards from "@/components/StepsCards/StepsCards";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import Faq from "@/components/Faq/Faq";
import DesignSection from "@/components/Design/DesignSection";
import DesignSlider from "@/components/Design/DesignSlider/DesignSlider";
import AccordionCardHolder from "@/components/AccordionCardHolder/AccordionCardHolder";

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
    case "Increased User Engagement":
      return iconEngagement;
    case "Higher Conversion Rates":
      return iconResearch;
    case "Brand Differentiation":
      return iconDevelopment;
    case "Improved Accessibility":
      return iconAccessibility;
    case "Faster Time to Market":
      return iconFaster;
    case "Lower Support Costs":
      return iconThumb;

    case "Customer Journey":
      return iconJourney;
    case "Communication Strategy":
      return iconCommunication;
    case "Research":
      return iconMagniWhite;
    case "Naming":
      return iconNaming;
    case "Value Proposition":
      return iconBulb;
    case "Logo Design":
      return iconDesign;
    case "Brand-book":
      return iconBook;
    case "Brand design":
      return iconBrand;
    case "Billboards and Posters":
      return iconPoster;
    case "Street Furniture Advertising":
      return iconAdvertising;
    case "Digital Outdoor Advertising":
      return iconOutdoor;
    
    default:
      return null;
  }
};

const inter = Inter({ subsets: ["latin"] });

export default function MarketingPage() {
  const t = useTranslations("Marketing");

  // const aboutData = t.raw("About.InfoCards").map((card) => ({
  //   ...card,
  //   icon: getIcon(card.Title),
  // }));

  const achievementsData = t.raw("AchievementsData").map((item, index) => ({
    icon: null,
    number: item.Count,
    text: item.Description,
  }));

  const AccordionCardsData = t.raw("Services.AccordionCards").map((card) => ({
    ...card,
    InfoCards: card.InfoCards.map((infoCard) => ({
      ...infoCard,
      icon: getIcon(infoCard.Title),
    })),
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
      {/* <DesignSlider /> */}

      <CustomHero
        sectionName="Marketing"
        imageSrc={MarketingImage}
        imageAlt={"Marketing image, people discuss things"}
        coloredWords={["Marketing"]}
        specialWords={["Marketing", "Expert"]}
      />

      <SectionWrapper dark={true}>
        <AchievementCard data={achievementsData} />
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle
          title={t("Services.Title")}
          subtitle={t("Services.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["Marketing", "Services"].includes(word);

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
        {/* <InfoCards data={AccordionCardsData} color="red" textAlign="center" /> */}
      </SectionWrapper>

      <SectionWrapper>
        <AccordionCardHolder data={AccordionCardsData} />
      </SectionWrapper>

      {/* <div className="my-10">
      <SectionTitle
          title={t("Design.Title")}
          subtitle={t("Design.Subtitle")
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
          description={t("Design.Description")}
          styleType="sectionTitleWhite"
        />
        <DesignSlider />
      </div> */}

      {/* <DesignSection/> */}

      <SectionWrapper dark={true}>
        <SectionTitle
          title={t("Advantages.Title")}
          subtitle={t("Advantages.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["Marketing"].includes(word);

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
          styleType="sectionTitleDark"
        />

        <InfoCards data={AdvantagesData} color="dark" textAlign="center" />
      </SectionWrapper>

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
