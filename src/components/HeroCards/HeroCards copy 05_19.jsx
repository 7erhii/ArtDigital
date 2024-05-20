import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./HeroCards.module.css";
import cardIcon from "@/assets/icons/icon-cards.svg";
import gridIcon from "@/assets/icons/icon-grid2.svg";
import imageCard1 from "@/assets/images/image-card1-bg.svg";
import imageCard2 from "@/assets/images/image-card2-bg.svg";
import imageCard3 from "@/assets/images/image-card3-bg.svg";
import imageCard4 from "@/assets/images/image-card4-bg.svg";

import { IoArrowForwardOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    title: "card1.title",
    subscribe: "card1.subtitle",
    descr: "card1.descr",
    cardColor: "#151515",
  },
  {
    title: "card2.title",
    subscribe: "card2.subtitle",
    descr: "card2.descr",
    cardColor: "#3C7BF6",
  },
  {
    title: "card3.title",
    subscribe: "card3.subtitle",
    descr: "card3.descr",
    cardColor: "#82B55B",
  },
  {
    title: "card4.title",
    subscribe: "card4.subtitle",
    descr: "card4.descr",
    cardColor: "#fff",
  },
];

export default function HeroCards({ cards = cardsData }) {
  const t = useTranslations("Cards");
  const [activeButton, setActiveButton] = useState("card");
  const [cardIndex, setCardIndex] = useState(0);
  const cardRefs = useRef([]);

  const stackCards = () => {
    gsap.to(cardRefs.current, {
      duration: 0.5,
      x: 0,
      y: "-8em",
      rotation: (i) => [0, 7, -7, 0][i % 4],
      scale: 1.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: cardRefs.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });
  };

  const spreadCards = () => {
    const cardWidth = 14 * 16;
    const gap = 60; // px
    const offset = cardWidth + gap;

    gsap.to(cardRefs.current, {
      duration: 0.5,
      x: (i) => {
        const indexOffset = i - cardRefs.current.length / 2 + 0.5;
        return indexOffset * (cardWidth + gap);
      },
      y: 0,
      rotation: 0,
      scale: 1.2,
      stagger: 0.1,
      scrollTrigger: {
        trigger: cardRefs.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });
  };

  const rotateCardsLeft = () => {
    setCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const rotateCardsRight = () => {
    setCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    if (activeButton === "card") {
      stackCards();
    } else if (activeButton === "grid") {
      spreadCards();
    }
  }, [activeButton]);

  const reorderedCards = [
    ...cards.slice(cardIndex),
    ...cards.slice(0, cardIndex),
  ];

  const backgroundColor =
    reorderedCards[3].cardColor === "#fff" ? "#151515" : reorderedCards[3].cardColor;

  return (
    <div
      className={styles.pageWrapper}
      style={{ backgroundColor }}
    >
      <button
        className={styles.sideButton}
        style={{
          left: "25%",
          display: activeButton === "card" ? "block" : "none",
        }}
        onMouseEnter={() => {
          gsap.to(cardRefs.current[cardRefs.current.length - 1], {
            duration: 0.5,
            x: "20%",
            rotationX: -23,
            rotationY: 41,
            skewY: -12,
          });
        }}
        onMouseLeave={() => {
          gsap.to(cardRefs.current[cardRefs.current.length - 1], {
            duration: 0.5,
            x: 0,
            rotationX: 0,
            rotationY: 0,
            skewY: 0,
          });
        }}
        onClick={rotateCardsLeft}
      ></button>
      <div className={styles.container}>
        {[imageCard1, imageCard2, imageCard3, imageCard4].map((src, index) => (
          <div
            key={src}
            ref={(el) => (cardRefs.current[index] = el)}
            className={styles.card}
          >
            <div className={styles.cardText}>
              <h2 className={styles.cardTitle}>
                {t(reorderedCards[index].title)}
              </h2>
              <p className={styles.cardSubscribe}>
                {t(reorderedCards[index].subscribe)
                  .split(" ")
                  .map((word, wordIndex, wordsArray) => {
                    let blueWord = ["Visual", "Excellence"].includes(word);
                    let greenWord = ["Impact"].includes(word);

                    let specialWord = [
                      "On",
                      "Visual",
                      "Strategic",
                      "Your",
                    ].includes(word);

                    let color = blueWord
                      ? "#3C7BF6"
                      : greenWord
                      ? "#82B55B"
                      : "#151515";

                    return (
                      <React.Fragment key={wordIndex}>
                        <span style={{ color }}>{word}</span>
                        {specialWord && wordIndex < wordsArray.length - 1 && (
                          <br />
                        )}
                        {wordIndex < wordsArray.length - 1 && " "}
                      </React.Fragment>
                    );
                  })}
              </p>
            </div>
            <Image src={src} alt="cardImage" />
            <div
              style={{
                backgroundColor: reorderedCards[index].cardColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color:
                  reorderedCards[index].cardColor === "#fff"
                    ? "#151515"
                    : "#fff",
                padding: "1em 1.3em",
              }}
            >
              <p style={{ fontSize: "0.76em" }}>{t(reorderedCards[index].descr)}</p>
              <IoArrowForwardOutline />
            </div>
          </div>
        ))}
      </div>
      <button
        className={styles.sideButton}
        style={{
          right: "25%",
          display: activeButton === "card" ? "block" : "none",
        }}
        onMouseEnter={() => {
          gsap.to(cardRefs.current[cardRefs.current.length - 1], {
            duration: 0.5,
            x: "-20%",
            rotationX: -23,
            rotationY: -41,
            skewY: -12,
          });
        }}
        onMouseLeave={() => {
          gsap.to(cardRefs.current[cardRefs.current.length - 1], {
            duration: 0.5,
            x: 0,
            rotationX: 0,
            rotationY: 0,
            skewY: 0,
          });
        }}
        onClick={rotateCardsRight}
      ></button>
      <div className={`hero__actions ${styles.heroActions}`}>
        <button
          className={`${styles.heroButton} ${
            activeButton === "card" ? styles.heroButtonActive : ""
          }`}
          onClick={() => setActiveButton("card")}
        >
          <Image src={cardIcon} alt="" />
        </button>
        <button
          className={`${styles.heroButton} ${
            activeButton === "grid" ? styles.heroButtonActive : ""
          }`}
          onClick={() => setActiveButton("grid")}
        >
          <Image src={gridIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import styles from "./HeroCards.module.css";
// import cardIcon from "@/assets/icons/icon-cards.svg";
// import gridIcon from "@/assets/icons/icon-grid2.svg";
// import imageCard1 from "@/assets/images/image-card1-bg.svg";
// import imageCard2 from "@/assets/images/image-card2-bg.svg";
// import imageCard3 from "@/assets/images/image-card3-bg.svg";
// import imageCard4 from "@/assets/images/image-card4-bg.svg";

// import { IoArrowForwardOutline } from "react-icons/io5";
// import { useTranslations } from "next-intl";

// gsap.registerPlugin(ScrollTrigger);

// const cardsData = [
//   {
//     title: "card1.title",
//     subscribe: "card1.subtitle",
//     descr: "card1.descr",
//     cardColor: "#151515",
//   },
//   {
//     title: "card2.title",
//     subscribe: "card2.subtitle",
//     descr: "card2.descr",
//     cardColor: "#3C7BF6",
//   },
//   {
//     title: "card3.title",
//     subscribe: "card3.subtitle",
//     descr: "card3.descr",
//     cardColor: "#82B55B",
//   },
//   {
//     title: "card4.title",
//     subscribe: "card4.subtitle",
//     descr: "card4.descr",
//     cardColor: "#fff",
//   },
// ];

// export default function HeroCards({ cards = cardsData }) {
//   const t = useTranslations("Cards");

//   const [activeButton, setActiveButton] = useState("card");
//   const cardRefs = useRef([]);

//   const stackCards = () => {
//     gsap.to(cardRefs.current, {
//       duration: 0.5,
//       x: 0,
//       y: "-8em",
//       rotation: (i) => [0, 7, -7, 0][i % 4],
//       scale: 1.6,
//       stagger: 0.1,
//       scrollTrigger: {
//         trigger: cardRefs.current,
//         start: "top center",
//         end: "bottom top",
//         toggleActions: "play none none none",
//       },
//     });
//   };

//   const spreadCards = () => {
//     const cardWidth = 14 * 16;
//     const gap = 60; // px
//     const offset = cardWidth + gap;

//     gsap.to(cardRefs.current, {
//       duration: 0.5,
//       x: (i) => {
//         const indexOffset = i - cardRefs.current.length / 2 + 0.5;
//         return indexOffset * (cardWidth + gap);
//       },
//       y: 0,
//       rotation: 0,
//       scale: 1.2,
//       stagger: 0.1,
//       scrollTrigger: {
//         trigger: cardRefs.current,
//         start: "top center",
//         end: "bottom top",
//         toggleActions: "play none none none",
//       },
//     });
//   };

//   useEffect(() => {
//     if (activeButton === "card") {
//       stackCards();
//     } else if (activeButton === "grid") {
//       spreadCards();
//     }
//   }, [activeButton]);

//   return (
//     <div className={styles.pageWrapper} style={{backgroundColor: "red"}}>
//       <button
//         className={styles.sideButton}
//         style={{
//           left: "25%",
//           display: activeButton === "card" ? "block" : "none",
//         }}
//       ></button>
//       <div className={styles.container}>
//         {[imageCard1, imageCard2, imageCard3, imageCard4].map((src, index) => (
//           <div
//             key={src}
//             ref={(el) => (cardRefs.current[index] = el)}
//             className={styles.card}
//           >
//             <div className={styles.cardText}>
//               <h2 className={styles.cardTitle}>{t(cards[index].title)}</h2>
//               <p className={styles.cardSubscribe}>
//                 {t(cards[index].subscribe)
//                   .split(" ")
//                   .map((word, wordIndex, wordsArray) => {
//                     let blueWord = ["Visual", "Excellence"].includes(word);
//                     let greenWord = ["Impact"].includes(word);

//                     let specialWord = [
//                       "On",
//                       "Visual",
//                       "Strategic",
//                       "Your",
//                     ].includes(word);

//                     let color = blueWord
//                       ? "#3C7BF6"
//                       : greenWord
//                       ? "#82B55B"
//                       : "#151515";

//                     return (
//                       <React.Fragment key={wordIndex}>
//                         <span style={{ color }}>{word}</span>
//                         {specialWord && wordIndex < wordsArray.length - 1 && (
//                           <br />
//                         )}
//                         {wordIndex < wordsArray.length - 1 && " "}
//                       </React.Fragment>
//                     );
//                   })}
//               </p>
//             </div>
//             <Image src={src} alt="cardImage" />
//             <div
//               style={{
//                 backgroundColor: cards[index].cardColor,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 color: cards[index].cardColor === "#fff" ? "#151515" : "#fff",
//                 padding: "1em 1.3em",
//               }}
//             >
//               <p style={{ fontSize: "0.76em" }}>{t(cards[index].descr)}</p>
//               <IoArrowForwardOutline />
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         className={styles.sideButton}
//         style={{
//           right: "25%",
//           display: activeButton === "card" ? "block" : "none",
//         }}
//       ></button>
//       <div className={`hero__actions ${styles.heroActions}`}>
//         <button
//           className={`${styles.heroButton} ${activeButton === "card" ? styles.heroButtonActive : ""}`}
//           onClick={() => setActiveButton("card")}
//         >
//           <Image src={cardIcon} alt="" />
//         </button>
//         <button
//           className={`${styles.heroButton} ${activeButton === "grid" ? styles.heroButtonActive : ""}`}
//           onClick={() => setActiveButton("grid")}
//         >
//           <Image src={gridIcon} alt="" />
//         </button>
//       </div>
//     </div>
//   );
// }
