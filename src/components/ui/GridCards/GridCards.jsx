import React from "react";
import Image from "next/image";
import styles from "./GridCards.module.css";

export default function GridCards({ cardsData, type }) {
  const columns = Object.keys(cardsData).length;

  return (
    <div className={`grid grid-cols-4 gap-5 ${styles.cardContainer}`}>
      {Object.keys(cardsData).map((gridKey, colIndex) => (
        <div key={gridKey} className={styles.gridLine}>
          {cardsData[gridKey].map((card, rowIndex, array) => {
            const isSingleCard = array.length === 1;
            const isLeftColumn = colIndex === 0;
            const isRightColumn = colIndex === columns - 1;

            const cornerRadius = isSingleCard
              ? isLeftColumn
                ? "16px 8px 8px 16px"
                : isRightColumn
                  ? "8px 16px 16px 8px"
                  : "8px"
              : rowIndex === 0
                ? isLeftColumn
                  ? "16px 8px 8px 8px"
                  : isRightColumn
                    ? "8px 16px 8px 8px"
                    : "8px"
                : rowIndex === array.length - 1
                  ? isLeftColumn
                    ? "8px 8px 8px 16px"
                    : isRightColumn
                      ? "8px 8px 16px 8px"
                      : "8px"
                  : "8px";

            return (
              <div
                key={rowIndex}
                className={`${card.type === "single" ? styles.cardItem : styles.cardItemDouble} ${type === "white" ? styles.cardItemWhite : styles.cardItemDark}`}
                style={{ borderRadius: cornerRadius }}
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
            );
          })}
        </div>
      ))}
    </div>
  );
}
