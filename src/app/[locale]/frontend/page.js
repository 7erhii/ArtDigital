import React from "react";
import { useTranslations } from "next-intl";
import styles from "./styles.module.css";
import CustomHero from "@/components/CustomHero/CustomHero";
import FrontendImage from "@/assets/images/image-dev-frontend.png";
import RunningLine from "@/components/ui/RunningLine/RunningLine";
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

import iconExpirience from "@/assets/icons/icon-card-expirience.svg";
import iconResponcive from "@/assets/icons/icon-card-responcive.svg";
import iconTime from "@/assets/icons/icon-card-time.svg";
import iconBrowser from "@/assets/icons/icon-card-browser.svg";
import iconSeo from "@/assets/icons/icon-card-seo.svg";
import iconMaitenance from "@/assets/icons/icon-card-maitenance.svg";

import iconPage from "@/assets/icons/icon-card-page.svg";
import iconCard from "@/assets/icons/icon-card-card.svg";
import iconCorporate from "@/assets/icons/icon-card-corporate.svg";
import iconCatalog from "@/assets/icons/icon-card-catalog.svg";
import iconStore from "@/assets/icons/icon-card-store.svg";

import iconHtml from "@/assets/icons/icon-HTML5.svg";
import iconCss from "@/assets/icons/icon-CSS3.svg";
import iconJs from "@/assets/icons/icon-JavaScript.svg";
import iconReact from "@/assets/icons/icon-React.svg";
import iconSass from "@/assets/icons/icon-Sass.svg";
import iconWordpress from "@/assets/icons/icon-wordpress-dark.svg";
import iconElementor from "@/assets/icons/icon-Elementor.svg";
import iconNextJs from "@/assets/icons/icon-next-js-dark.svg";
import iconAngular from "@/assets/icons/icon-angular.svg";
import iconTypescript from "@/assets/icons/icon-Typescript.svg";

import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import InfoCards from "@/components/ui/InfoCards/InfoCards";
import GridCards from "@/components/ui/GridCards/GridCards";
import StepsCards from "@/components/StepsCards/StepsCards";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import AccordionCardHolder from "@/components/AccordionCardHolder/AccordionCardHolder";
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
    case "Connect":
      return iconConnect;
    case "Research":
      return iconResearch;
    case "Development":
      return iconDevelopment;
    case "Enhanced User Experience":
      return iconExpirience;
    case "Responsive Design":
      return iconResponcive;
    case "Faster Load Times":
      return iconTime;
    case "Cross-Browser Compatibility":
      return iconBrowser;
    case "SEO Optimization":
      return iconSeo;
    case "Scalability and Maintenance":
      return iconMaitenance;

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

export default function FrontEndPage() {
  const t = useTranslations("FrontEnd");

  const aboutData = t.raw("About.InfoCards").map((card) => ({
    ...card,
    icon: getIcon(card.Title),
  }));

  const servicesData = t.raw("Services.ServicesCards").map((card) => ({
    ...card,
    icon: getIcon(card.Title),
  }));

  const AdvantagesData = t.raw("Advantages.Items").map((card) => ({
    ...card,
    icon: getIcon(card.Title),
  }));

  const cardsDataFront = {
    grid1: [
      { type: "single", image: iconHtml, text: "HTML" },
      {
        type: "double",
        text: t("Stack.DoubleCard"),
      },
    ],
    //
    grid2: [
      { type: "single", image: iconCss, text: "CSS" },
      { type: "single", image: iconSass, text: "SASS" },
      { type: "single", image: iconNextJs, text: "NextJS" },
    ],
    grid3: [
      { type: "single", image: iconJs, text: "JavaScript" },
      { type: "single", image: iconWordpress, text: "WordPress" },
      { type: "single", image: iconAngular, text: "Angular" },
    ],
    grid: [
      { type: "single", image: iconReact, text: "React" },
      { type: "single", image: iconElementor, text: "Elementor" },
      { type: "single", image: iconTypescript, text: "TypeScript" },
    ],
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
    <div>
      <CustomHero
        sectionName="FrontEnd"
        imageSrc={FrontendImage}
        imageAlt="FrontEnd image, people behind the table"
        coloredWords={["Front-end"]}
        specialWords={["Professional", "Front-end"]}
      />
      <div className={styles.aboutSection}></div>

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
        <InfoCards data={aboutData} colorType="whiteDark" />
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
              const specialWord = ["Visual"].includes(word);
              const blueWord = ["Front-End"].includes(word);

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
        {/* <InfoCards data={aboutData} colorType="dark" textAlign="left" /> */}
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

        <GridCards cardsData={cardsDataFront} type="white" />
      </SectionWrapper>

      <SectionWrapper dark={true}>
        <SectionTitle
          title={t("Advantages.Title")}
          subtitle={t("Advantages.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["Front-end", "Development"].includes(word);

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

      <Faq page="FrontendPageItems" />
    </div>
  );
}
