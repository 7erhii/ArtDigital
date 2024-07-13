"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import styles from "./ReadyCards.module.css";

export default function ReadyCards({ data }) {
  const t = useTranslations("ReadySection.ReadyCards");

  return (
    <div className={styles.ReadyCards}>
      {data.map((card) => (
        <a
          href={card.href}
          key={card.title}
          className={`ready ${styles.marketingCards} ${
            card.size === "1/3" ? styles.marketingCardsThird : styles.marketingCardsHalf
          }`}
        >
          <div className={`ready__title ${styles.marketingCardsTitle}`}>
            <h2>{card.title}</h2>
            <IoArrowForward />
          </div>
          <div className={`ready__descr ${styles.marketingCardsDescr}`}>
            <p>{card.descr}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
