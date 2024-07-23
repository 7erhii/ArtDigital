"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IoArrowForward } from "react-icons/io5";

import styles from "./MarketingCards.module.css";

const highlightWords = ["Development", "page", "Mobile", "App"];

export default function MarketingCards({ data }) {
  function highlightText(text, itemId) {
    return text
      .split(" ")
      .map((word, index) => {
        const cleanWord = word.replace(/[\n,.]/g, "");
        const key = `${itemId}-${index}`;

        if (highlightWords.includes(cleanWord)) {
          return (
            <span key={key} style={{ color: "#3C7BF6" }}>
              {word}
            </span>
          );
        }
        return <span key={key}>{word}</span>;
      })
      .reduce((prev, curr) => [prev, " ", curr]);
  }

  return (
    <div className={styles.marketingCards}>
      {Object.entries(data).map(([lineKey, line]) => (
        <div key={lineKey} className={styles.marketingCards__line}>
          {Object.entries(line).map(([blockKey, block]) => (
            <div key={blockKey} className={styles.marketingCards__section}>
              {Object.entries(block).map(([itemKey, item]) => (
                <Link
                  key={itemKey}
                  href={item.href}
                  className={styles.marketingCards__item}
                >
                  <div
                    className={
                      item.type !== "blueText"
                        ? styles.textWrapper
                        : styles.textWrapperBlue
                    }
                  >
                    <div className={styles.marketingCardsText}>
                      {item.title
                        .split("\n")
                        .map((line, index, arr) => {
                          const processedLine = highlightText(line, itemKey);
                          return (
                            <React.Fragment key={`${itemKey}-line-${index}`}>
                              {processedLine}
                              {index < arr.length - 1 && <br />}
                            </React.Fragment>
                          );
                        })}
                    </div>
                    <IoArrowForward className={styles.cardsIcon} />
                  </div>
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className={
                        item.type !== "noPadding"
                          ? styles.marketingCards__image
                          : styles.imageNopaddingRight
                      }
                    />
                  )}
                </Link>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
