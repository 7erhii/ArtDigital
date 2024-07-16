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
import DesignSection from "@/components/Design/DesignSection";
import DesignSlider from "@/components/Design/DesignSlider/DesignSlider";
import Industries from "@/components/Industries/Industries";
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
    default:
      return null;
  }
};

const inter = Inter({ subsets: ["latin"] });

export default function DesignPage({ params: { locale } }) {
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
      <Header locale={locale} />

      {/* <DesignSlider /> */}

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

      <SectionWrapper>
        <SectionTitle
          title={t("Services.Title")}
          subtitle={t("Services.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["Three", "main", "ways"].includes(word);

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
        <InfoCards data={servicesData} colorType="dark" textAlign="center" />
      </SectionWrapper>
      <DesignSection />

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

      <SectionWrapper>
        <SectionTitle
          title={t("Advantages.Title")}
          subtitle={t("Advantages.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["Business", "Success"].includes(word);

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
          styleType="sectionTitleWhite"
        />

        <InfoCards data={AdvantagesData} colorType="dark" textAlign="center" />
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
      <Industries />
      <ContactForm data={contactFormData} />

      {/* <ContactForm></ContactForm> */}
      <Faq page="DesignPageItems" />
      <Footer />
      <Colophon />
    </div>
  );
}
