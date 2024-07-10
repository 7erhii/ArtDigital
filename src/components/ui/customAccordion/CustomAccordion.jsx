"use client";

import * as React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import styles from "./CustomAccordion.module.css";

export default function CustomAccordion({ data = [] }) {
  const [open, setOpen] = React.useState(0); 

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className={styles.CustomAccordionWrapper}>
      <div className={styles.CustomAccordionColumn}>
        {data.map(
          ({ title, descr }, index) =>
            index % 2 === 0 && (
              <div
                key={index}
                className={styles.CustomAccordionItemWrapper}
                onClick={() => toggle(index)}
              >
                <div className={styles.CustomAccordionItem}>
                  <span className={styles.CustomAccordionTitle}>{title}</span>
                  <IoIosArrowRoundDown
                    style={{
                      transform:
                        open === index ? "rotateX(180deg)" : "rotateX(0deg)",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>
                <div
                  className={`${styles.CustomAccordionDescr} ${
                    open === index ? styles.open : ""
                  }`}
                >
                  <p>{descr}</p>
                </div>
              </div>
            )
        )}
      </div>
      <div className={styles.CustomAccordionColumn}>
        {data.map(
          ({ title, descr }, index) =>
            index % 2 !== 0 && (
              <div
                key={index}
                className={styles.CustomAccordionItemWrapper}
                onClick={() => toggle(index)}
              >
                <div className={styles.CustomAccordionItem}>
                  <span className={styles.CustomAccordionTitle}>{title}</span>
                  <IoIosArrowRoundDown
                    style={{
                      transform:
                        open === index ? "rotateX(180deg)" : "rotateX(0deg)",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>
                <div
                  className={`${styles.CustomAccordionDescr} ${
                    open === index ? styles.open : ""
                  }`}
                >
                  <p>{descr}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
