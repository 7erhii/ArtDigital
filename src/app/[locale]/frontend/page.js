import React from "react";
import { Inter } from "next/font/google";
import { useMessages } from "next-intl";

import CustomHero from "@/components/CustomHero/CustomHero";

import FrontendImage from "@/assets/images/image-design-uxui.png";

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

const inter = Inter({ subsets: ["latin"] });

export default function DesignPage() {
  const messages = useMessages();

  return (
    <div className={inter.className}>
      <CustomHero
        sectionName="FrontEnd"
        imageSrc={FrontendImage}
        imageAlt={"FrontEnd image, people behind the table"}
        coloredWords={["Front-end"]}
        specialWords={["Professional", "Front-end"]}
      />
      <RunningLine speed={7000} images={images} />
    </div>
  );
}
