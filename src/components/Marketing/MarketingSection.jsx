import React from "react";
import { useTranslations } from "next-intl";

import styles from "./MarketingSection.module.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import MarketingCards from "./MarketingCards/MarketingCards";

import markImage1 from "@/assets/images/image-mark1.png";
import markImage2 from "@/assets/images/image-mark2.png";
import markImage3 from "@/assets/images/image-mark3.png";
import markImage4 from "@/assets/images/image-mark4.png";
import markImage5 from "@/assets/images/image-mark5.png";

export default function MarketingSection() {
  const t = useTranslations();

  const marketingCardsData = t.raw("MarketingCards");

  const marketingData = {
    line1: {
      block1: {
        item1: {
          href: "#",
          title: marketingCardsData.card1,
          image: markImage1,
        },
      },
      block2: {
        item1: {
          href: "#",
          title: marketingCardsData.card2,
          image: markImage2,
        },
      },
    },
    line2: {
      block1: {
        item1: {
          href: "#",
          title: marketingCardsData.card3,
          image: markImage3,
        },
        item2: {
          href: "#",
          title: marketingCardsData.card4,
        },
      },
      block2: {
        item1: {
          href: "#",
          title: marketingCardsData.card5,
          image: markImage4,
        },
      },
      block3: {
        item1: {
          href: "#",
          title: marketingCardsData.card6,
          image: markImage5,
          type: "noPadding",
        },
        item2: {
          href: "#",
          title: marketingCardsData.card7,
          type: "blueText",
        },
      },
    },
  };

  return (
    <div>
      <SectionTitle
        title={t("MarketingSection.title")}
        subtitle={t("MarketingSection.subtitle")
          .split(" ")
          .map((word, index) => {
            let specialWord = ["Visual"].includes(word);
            let blueWord = ["Impact"].includes(word);

            if (specialWord || blueWord) {
              return (
                <React.Fragment key={index}>
                  <span
                    style={blueWord ? { color: "#3C7BF6" } : { color: "#fff" }}
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
        description={t("MarketingSection.description")}
        styleType="sectionTitleWhite"
      />

      <MarketingCards data={marketingData} />
    </div>
  );
}
