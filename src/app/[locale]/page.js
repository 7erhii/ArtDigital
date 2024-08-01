import React from "react";

import { unstable_setRequestLocale } from "next-intl/server";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "@/components/Hero/Hero";
import AchievementsSection from "@/components/Achievements/AchievementsSection";
import DesignSection from "@/components/Design/DesignSection";
import WorkSection from "@/components/Work/WorkSection";
import Development from "@/components/Development/Development";
import MarketingSection from "@/components/Marketing/MarketingSection";
import Ready from "@/components/Ready/Ready";
import Clients from "@/components/Clients/Clients";
import Industries from "@/components/Industries/Industries";
import Faq from "@/components/Faq/Faq";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Colophon from "@/components/Colophon/Colophon";
import Header from "@/components/Header/Header";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";

const locales = ["en", "ru", "il"];

export function generateStaticParams() {
  return locales.map((locale) => ({ params: { locale } }));
}

export default function HomePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

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
      {/* <Header locale={locale} /> */}
      {/* <Hero /> */}
      {/* <AchievementsSection /> */}
      <DesignSection />
      <WorkSection />
      <Development />
      <MarketingSection />
      <Ready />
      <Clients />
      <SectionWrapper dark={true}>
        <Industries />
      </SectionWrapper>
      <ContactForm data={contactFormData} />
      <Faq page="MainPageItems" />
      <Footer locale={locale} />
      <Colophon />
    </div>
  );
}
