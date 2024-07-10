"use client";
import InfoCards from "../ui/InfoCards/InfoCards";
import styles from "./style.module.css";
import { useState } from "react";

export default function AccordionCardHolder({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.cardsWrapper}>
      {data.map((card, index) => (
        <div
          key={index}
          className={`${styles.card} ${activeIndex === index ? styles.activeCard : ""}`}
          style={{
            borderRadius:
              index === 0
                ? "40px 40px 12px 12px"
                : index === data.length - 1
                  ? "12px 12px 40px 40px"
                  : "12px",
          }}
          onClick={() => toggleCard(index)}
        >
          <div className={styles.cardTitle}>
            <div className={styles.cardTitleText}>
              <h3>{card.Title}</h3>
              <h4>{card.Description}</h4>
            </div>
            <div className={styles.iconWrapper}>
              <span className={styles.horizontalLine}></span>
              <span className={styles.verticalLine}></span>
            </div>
          </div>
          <div
            className={`${styles.innerCardsWrapper} ${activeIndex === index ? styles.open : ""}`}
          >
            <div
              style={{
                marginTop: "2.5em",
                paddingTop: "2.5em",
                borderTop: "1px solid #fff",
              }}
            >
              <InfoCards
                data={card.InfoCards}
                colorType="blue"
                textAlign="left"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
