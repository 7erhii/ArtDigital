import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./HeroCards.module.css";
import cardIcon from "@/assets/icons/icon-cards.svg";
import gridIcon from "@/assets/icons/icon-grid2.svg";
import imageCard1 from "@/assets/images/image-card1.svg";
import imageCard2 from "@/assets/images/image-card2.svg";
import imageCard3 from "@/assets/images/image-card3.svg";
import imageCard4 from "@/assets/images/image-card4.svg";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCards() {
  const [activeButton, setActiveButton] = useState("card");
  const [cardWidth, setCardWidth] = useState(14 * parseFloat(getComputedStyle(document.body).fontSize));
  const [gap, setGap] = useState(3 * parseFloat(getComputedStyle(document.body).fontSize)); 
  const cardRefs = useRef([]);

  const updateDimensions = () => {
    const fontSize = parseFloat(getComputedStyle(document.body).fontSize);
    setCardWidth(14 * fontSize);
    setGap(4 * fontSize);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

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
        toggleActions: "play none none none"
      }
    });
  };

  const spreadCards = () => {
    const offset = cardWidth + gap; 

    gsap.to(cardRefs.current, {
      duration: 0.5,
      x: (i) => {
        const indexOffset = i - cardRefs.current.length / 2 + 0.5;
        return indexOffset * offset;
      },
      y: 0,
      rotation: 0,
      scale: 1.2,
      stagger: 0.1,
      scrollTrigger: {
        trigger: cardRefs.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play none none none"
      }
    });
  };

  useEffect(() => {
    if (activeButton === "card") {
      stackCards();
    } else if (activeButton === "grid") {
      spreadCards();
    }
  }, [activeButton, cardWidth, gap]); 

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {[imageCard1, imageCard2, imageCard3, imageCard4].map((src, index) => (
          <div key={src} ref={(el) => (cardRefs.current[index] = el)} className={styles.card}>
            <Image src={src} alt="card image" />
          </div>
        ))}
      </div>
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
