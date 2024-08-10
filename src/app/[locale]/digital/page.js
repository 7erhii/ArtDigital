import React from "react";
import { useTranslations } from "next-intl";
// import { Inter } from "next/font/google";
import { useMessages } from "next-intl";

// Images
import DigitalHeroImage from "@/assets/images/image-hero-marketing-digital.png";
import lineImage1 from "@/assets/images/line1.svg";
import lineImage2 from "@/assets/images/line2.svg";
import lineImage3 from "@/assets/images/line3.svg";
import lineImage4 from "@/assets/images/line4.svg";
import lineImage5 from "@/assets/images/line5.svg";
import lineImage6 from "@/assets/images/line6.svg";
import lineImage7 from "@/assets/images/line7.svg";
import lineImage8 from "@/assets/images/line8.svg";
import lineImage9 from "@/assets/images/line9.svg";

// Icons
import iconPhone from "@/assets/icons/icon-phone.svg";
import iconPc from "@/assets/icons/icon-card--blue-pc.svg";
import iconSmm from "@/assets/icons/icon-card--blue-smm.svg";
import iconRefresh from "@/assets/icons/icon-card--blue-refresh.svg";
import iconBanner from "@/assets/icons/icon-card--blue-banner.svg";
import iconEmail from "@/assets/icons/icon-card--blue-email.svg";

import iconJorney from "@/assets/icons/icon-card-journey.svg";
import iconDesign from "@/assets/icons/icon-card-design.svg";
import iconOutdoor from "@/assets/icons/icon-card-outdoor.svg";

// Components
import CustomHero from "@/components/CustomHero/CustomHero";
import RunningLine from "@/components/ui/RunningLine/RunningLine";
import GridCards from "@/components/ui/GridCards/GridCards";
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
import EngageSection from "@/components/EngageSection/page";

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
    case "Lorem ipsum":
      return iconPhone;
    case "All types of Google advertising":
      return iconPhone;
    case "Website promotion to the top positions (SEO)":
      return iconPc;
    case "Targeting in social networks (SMM)":
      return iconSmm;
    case "Remarketing":
      return iconRefresh;
    case "Contextual and Banner Advertising":
      return iconBanner;
    case "Email marketing":
      return iconEmail;

    case "Strategic marketing":
      return iconJorney;
    case "Branding":
      return iconDesign;
    case "Outdoor marketing":
      return iconOutdoor;

    default:
      return null;
  }
};

export default function BackendPage({ params: { locale } }) {
  const t = useTranslations("Digital");
  const engageDataObject = t.raw("EngageSection.EngageBlock");

  const AboutData = t.raw("About.Items").map((card) => ({
    ...card,
    icon: getIcon(card.Title),
  }));

  const AdvantagesData = t.raw("Advantages.Items").map((card) => ({
    ...card,
    icon: getIcon(card.Title),
  }));


  const engageData = {
    button: "Digital.EngageSection.Button",
    cards: engageDataObject.map((card) => ({
      ...card,
      icon: getIcon(card.Title),
    })),
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



  return (
    <div>
      <Header locale={locale} />

      <CustomHero
        sectionName="Digital"
        imageSrc={DigitalHeroImage}
        imageAlt={"Digital marketing image, people behind the table"}
        coloredWords={["DIGITAL", "Marketing"]}
        specialWords={["DIGITAL", "Marketing"]}
      />

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
        <InfoCards data={aboutData} colorType="whiteDark" textAlign="center" />
      </SectionWrapper> */}

      {/* <SectionWrapper>
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
        <InfoCards
          data={servicesData}
          colorType="dark"
          textAlign="left"
          fixedBorderRadius={true}
        />
        <AccordionCardHolder data={AccordionCardsData} />
      </SectionWrapper> */}

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

      <SectionWrapper dark={true}>
        <SectionTitle
          title={t("About.Title")}
          subtitle={t("About.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = [""].includes(word);
              const blueWord = ["Digital"].includes(word);

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

        <InfoCards data={AboutData} colorType="whiteDark" textAlign="center" />
      </SectionWrapper>
      <div className="bg-[#151515] pb-[5em]">
        <RunningLine speed={7000} images={images} />
      </div>

      <SectionWrapper>
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
          styleType="sectionTitleWhite"
        />

        <InfoCards
          data={AdvantagesData}
          colorType="dark"
          textAlign="left"
          titleSize="sm"
          styleType="digital"
        />
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

      <ContactForm data={contactFormData} />

      <Faq page="DigitalPageItems" />

      <SectionWrapper dark={true}>
        <SectionTitle
          title={t("EngageSection.Title")}
          subtitle={t("EngageSection.Subtitle")
            .split(" ")
            .map((word, index, words) => {
              const specialWord = ["from"].includes(word);
              const blueWord = ["Marketing", "services"].includes(word);

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
          description={t("EngageSection.Description")}
          styleType=""
        />
        <EngageSection sectionData={engageData} />
      </SectionWrapper>

      <Footer />
      <Colophon />
    </div>
  );
}
