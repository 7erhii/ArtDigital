"use client";

import React, { useState, useRef, useEffect } from "react";
import { useContext } from 'react';

import { ColorContext } from "@/context/ColorContext";

import { lightenColor } from "@/utils/colorUtils";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./HeroCards.module.css";
import cardIcon from "@/assets/icons/icon-cards.svg";
import gridIcon from "@/assets/icons/icon-grid2.svg";
import { IoArrowForwardOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

// const lightenColor = (color, percent) => {
//   const num = parseInt(color.replace("#", ""), 16);
//   const amt = Math.round(2.55 * percent);
//   const R = (num >> 16) + amt;
//   const G = ((num >> 8) & 0x00ff) + amt;
//   const B = (num & 0x0000ff) + amt;
//   return (
//     "#" +
//     (
//       0x1000000 +
//       (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
//       (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
//       (B < 255 ? (B < 1 ? 0 : B) : 255)
//     )
//       .toString(16)
//       .slice(1)
//   );
// };

export default function HeroCards({ data: cards, buttonsData: cardText }) {
  const { setColor } = useContext(ColorContext);

  const [activeButton, setActiveButton] = useState("card");
  const [cardIndex, setCardIndex] = useState(0);
  const [popUpText, setPopUpText] = useState(cardText.prewButton);
  const cardRefs = useRef([]);
  const popUpRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

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
        start: "top 75%",
        end: "bottom top",
        onEnter: () => setAnimationComplete(true),
        toggleActions: "play none none none",
      },
    });
  };

  const spreadCards = () => {
    const cardWidth = 14 * 16;
    const gap = 60;
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
        start: "top 75%",
        end: "bottom top",
        onEnter: () => setAnimationComplete(true),
        toggleActions: "play none none none",
      },
    });
  };

  const updateColors = (index) => {
    const reorderedCards = [...cards.slice(index), ...cards.slice(0, index)];

    const backgroundColor =
      reorderedCards[3].cardColor === "#fff"
        ? "#D9D9D9"
        : reorderedCards[3].cardColor;

    const previousCardColor = reorderedCards[0]
      ? reorderedCards[0].cardColor
      : "#151515";
    const previousTextColor = previousCardColor === "#fff" ? "#151515" : "#fff";
    const borderColor =
      previousCardColor === "#fff"
        ? "#ccc"
        : lightenColor(previousCardColor, 20);

    gsap.to(popUpRef.current, {
      duration: 0.24,
      backgroundColor: previousCardColor,
      color: previousTextColor,
    });

    return { backgroundColor, borderColor };
  };

  const rotateCardsLeft = () => {
    if (!animationComplete) return;

    setCardIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % cards.length;
      const { backgroundColor, borderColor } = updateColors(newIndex);
      gsap.to(".pageWrapper", { backgroundColor, duration: 0.5 });
      gsap.to(cardRefs.current[cardRefs.current.length - 1], {
        borderTop: `2px solid ${borderColor}`,
        borderRight: `2px solid ${borderColor}`,
      });

      setColor(backgroundColor); // Устанавливаем новый цвет в контексте

      return newIndex;
    });
  };

  const rotateCardsRight = () => {
    if (!animationComplete) return;

    setCardIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + cards.length) % cards.length;
      const reorderedCards = [
        ...cards.slice(newIndex),
        ...cards.slice(0, newIndex),
      ];

      const backgroundColor =
        reorderedCards[3].cardColor === "#fff"
          ? "#D9D9D9"
          : reorderedCards[3].cardColor;

      const previousCardColor = reorderedCards[2]
        ? reorderedCards[2].cardColor
        : "#151515";
      const previousTextColor =
        previousCardColor === "#fff" ? "#151515" : "#fff";
      const borderColor =
        previousCardColor === "#fff"
          ? "#ccc"
          : lightenColor(previousCardColor, 20);

      gsap.to(".pageWrapper", { backgroundColor, duration: 0.5 });
      gsap.to(cardRefs.current[cardRefs.current.length - 1], {
        borderTop: `2px solid ${borderColor}`,
        borderLeft: `2px solid ${borderColor}`,
      });
      gsap.to(popUpRef.current, {
        duration: 0.24,
        backgroundColor: previousCardColor,
        color: previousTextColor,
      });

      setColor(backgroundColor); // Устанавливаем новый цвет в контексте

      return newIndex;
    });
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
    reorderedCards[3].cardColor === "#fff"
      ? "#D9D9D9"
      : reorderedCards[3].cardColor;

  const previousCardColorLeft = reorderedCards[0]
    ? reorderedCards[0].cardColor
    : "#151515";
  const previousTextColorLeft =
    previousCardColorLeft === "#fff" ? "#151515" : "#fff";
  const borderColorLeft =
    previousCardColorLeft === "#fff"
      ? "#ccc"
      : lightenColor(previousCardColorLeft, 20);

  const previousCardColorRight = reorderedCards[2]
    ? reorderedCards[2].cardColor
    : "#151515";
  const previousTextColorRight =
    previousCardColorRight === "#fff" ? "#151515" : "#fff";
  const borderColorRight =
    previousCardColorRight === "#fff"
      ? "#ccc"
      : lightenColor(previousCardColorRight, 20);

  return (
    <div
      className={`${styles.pageWrapper} pageWrapper`}
      style={{ backgroundColor }}
    >
      <button
        className={styles.sideButton}
        style={{
          left: "25%",
          display: activeButton === "card" ? "block" : "none",
          clipPath: "polygon(0% 0%, 100% 0%, 70% 50%, 100% 100%, 0% 100%)",
        }}
        onMouseEnter={() => {
          if (!animationComplete) return;
          setPopUpText(cardText.prewButton);
          gsap.to(cardRefs.current[cardRefs.current.length - 1], {
            duration: 0.5,
            x: "-140%",
            y: -50,
            rotationX: -23,
            rotationY: -41,
            skewY: -12,
            borderTop: `2px solid ${borderColorLeft}`,
            borderRight: `2px solid ${borderColorLeft}`,
          });
          gsap.to(popUpRef.current, {
            duration: 0.24,
            height: "100%",
            backgroundColor: previousCardColorLeft,
            color: previousTextColorLeft,
          });
        }}
        onMouseLeave={() => {
          if (!animationComplete) return;
          gsap.to(cardRefs.current[cardRefs.current.length - 1], {
            duration: 0.5,
            x: 0,
            y: -120,
            rotationX: 0,
            rotationY: 0,
            skewY: 0,
            borderTop: "none",
            borderRight: "none",
          });
          gsap.to(popUpRef.current, {
            duration: 0.24,
            height: "0%",
          });
        }}
        onClick={rotateCardsLeft}
      ></button>

      <div className={styles.container}>
        {reorderedCards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={styles.card}
          >
            <div className={styles.cardText}>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardSubscribe}>
                {card.subscribe
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
            <Image src={card.image} alt="cardImage" priority />
            <div
              style={{
                backgroundColor: card.cardColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: card.cardColor === "#fff" ? "#151515" : "#fff",
                padding: "1em 1.3em",
              }}
            >
              <p style={{ fontSize: "0.76em", fontWeight: "500" }}>{card.descr}</p>
              <IoArrowForwardOutline />
            </div>
            <div
              ref={popUpRef}
              style={{
                position: "absolute",
                display: "flex",
                bottom: "0",
                width: "100%",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                height: "0%",
                overflow: "hidden",
              }}
            >
              <p style={{ textTransform: "uppercase" }}>{popUpText}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className={styles.sideButton}
        style={{
          right: "25%",
          display: activeButton === "card" ? "block" : "none",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 30% 50%)",
        }}
        onMouseEnter={() => {
          if (!animationComplete) return;
          setPopUpText(cardText.nextButton);
          gsap.to(cardRefs.current[cardRefs.current.length - 1], {
            duration: 0.5,
            x: "140%",
            y: -50,
            rotationX: -23,
            rotationY: 41,
            skewY: -12,
            borderTop: `2px solid ${borderColorRight}`,
            borderLeft: `2px solid ${borderColorRight}`,
          });
          gsap.to(popUpRef.current, {
            duration: 0.24,
            height: "100%",
            backgroundColor: previousCardColorRight,
            color: previousTextColorRight,
          });
        }}
        onMouseLeave={() => {
          if (!animationComplete) return;
          gsap.to(cardRefs.current[cardRefs.current.length - 1], {
            duration: 0.5,
            x: 0,
            y: -120,
            rotationX: 0,
            rotationY: 0,
            skewY: 0,
            borderTop: "none",
            borderLeft: "none",
          });
          gsap.to(popUpRef.current, {
            duration: 0.24,
            height: "0%",
          });
        }}
        onClick={rotateCardsRight}
      ></button>
      <div className={`hero__actions ${styles.heroActions}`}>
        <button
          className={`${styles.heroButton} ${activeButton === "card" ? styles.heroButtonActive : ""}`}
          onClick={() => setActiveButton("card")}
        >
          <Image src={cardIcon} alt="" />
        </button>
        <button
          className={`${styles.heroButton} ${activeButton === "grid" ? styles.heroButtonActive : ""}`}
          onClick={() => setActiveButton("grid")}
        >
          <Image src={gridIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
