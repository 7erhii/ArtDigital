import React from "react";
import { Inter } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "ru"];

export function generateStaticParams() {
  return locales.map((locale) => ({ params: { locale } }));
}

export default function HomePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className={inter.className}>
      <Hero />
      <AchievementsSection />
      <DesignSection />
      <WorkSection />
      <Development />
      <MarketingSection />
      <Ready />
      <Clients />
      <Industries />
      <ContactForm />
      <Faq page="MainPageItems" />
    </div>
  );
}
