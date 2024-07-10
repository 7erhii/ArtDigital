import React from "react";
import Image from "next/image";
import styles from "./GridCards.module.css";

export default function GridCards({ cardsData, type }) {
  return (
    <div className={`grid grid-cols-4 gap-3 ${styles.cardContainer}`}>
      {Object.keys(cardsData).map((gridKey) => (
        <div key={gridKey} className={styles.gridLine}>
          {cardsData[gridKey].map((card, index) => (
            <div
              key={index}
              className={`${card.type === "single" ? styles.cardItem : styles.cardItemDouble} ${type === "white" ? styles.cardItemWhite : styles.cardItemDark}`}
            >
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.text}
                  className={styles.cardItemImage}
                />
              )}
              <p
                className={`${card.type === "single" ? styles.cardItemText : styles.cardItemTextDouble} ${type === "white" ? styles.cardItemTextWhite : styles.cardItemTextDark}`}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
