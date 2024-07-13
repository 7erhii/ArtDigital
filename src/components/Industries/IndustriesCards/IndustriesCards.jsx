"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./IndustriesCards.module.css";

export default function IndustriesCards({ data }) {
  const t = useTranslations("IndustriesSections.IndustriesCards");

  return (
    <div className={styles.IndustriesCards}>
      {data.map((card, index) => (
        <div
          key={index}
          className={styles.IndustriesCard}
          style={{
            borderRadius:
              index === 0
                ? "40px 12px 12px 12px"
                : index === 2
                ? "12px 40px 12px 12px"
                : index === data.length - 3
                ? "12px 12px 12px 40px"
                : index === data.length - 1
                ? "12px 12px 40px 12px"
                : "12px",
          }}
        >
          <Image
            src={card.image}
            alt={t(card.title)}
            width={50}
            height={50}
            className={styles.IndustriesCardImage}
          />
          <p className={styles.IndustriesCardDescr}>{card.title}</p>
        </div>
      ))}
    </div>
  );
}
