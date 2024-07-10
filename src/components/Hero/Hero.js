import { useTranslations } from "next-intl";
import HeroTitle from "./ui/HeroTitle";
import HeroCards from "./ui/HeroCards";

import imageCard1 from "@/assets/images/image-card1-bg.svg";
import imageCard2 from "@/assets/images/image-card2-bg.svg";
import imageCard3 from "@/assets/images/image-card3-bg.svg";
import imageCard4 from "@/assets/images/image-card4-bg.svg";

export default function Hero() {
  const t = useTranslations();
  const heroData = t.raw("Hero");
  const cardsDataObj = t.raw("Cards");

  const cardsData = [
    {
      title: cardsDataObj.card1.title,
      subscribe: cardsDataObj.card1.subtitle,
      descr: cardsDataObj.card1.descr,
      cardColor: "#151515",
      image: imageCard1,
    },
    {
      title: cardsDataObj.card3.title,
      subscribe: cardsDataObj.card3.subtitle,
      descr: cardsDataObj.card3.descr,
      cardColor: "#82B55B",
      image: imageCard2,
    },
    {
      title: cardsDataObj.card4.title,
      subscribe: cardsDataObj.card4.subtitle,
      descr: cardsDataObj.card4.descr,
      cardColor: "#fff",
      image: imageCard3,
    },
    {
      title: cardsDataObj.card2.title,
      subscribe: cardsDataObj.card2.subtitle,
      descr: cardsDataObj.card2.descr,
      cardColor: "#3C7BF6",
      image: imageCard4,
    },
  ];

  const cardText = {
    nextButton: cardsDataObj.cardText.prevPage,
    prewButton: cardsDataObj.cardText.nextPage,
  };

  return (
    <div>
      <HeroTitle data={heroData} />
      <HeroCards data={cardsData} buttonsData={cardText} />
    </div>
  );
}
