// HeroTitle.js
"use client";
import { useContext, useEffect, useState } from "react";
import { ColorContext } from "@/context/ColorContext";

// Style
import styles from "./HeroTitle.module.css";

export default function HeroTitle({ data }) {
  const { color, hoverColor } = useContext(ColorContext);
  const highlightKeyword = ["ready", "готовы"];
  const [initialClass, setInitialClass] = useState(
    styles.HeroTitleButtonInitial
  );

  const HighlightText = ({ text }) => {
    const regex = new RegExp(`(${highlightKeyword.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      highlightKeyword.includes(part.toLowerCase()) ? (
        <span key={index} style={{ color }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--button-color", color);
    document.documentElement.style.setProperty(
      "--button-hover-color",
      hoverColor
    );
    setInitialClass("");
  }, [color, hoverColor]);

  return (
    <div
      className="mx-auto text-center py-28 pb-0"
      style={{ maxWidth: "65.5em" }}
    >
      <div className={`${styles.heroTitle} hero__title flex flex-col relative`}>
        <h2
          className="uppercase text-8xl font-satoshi pr-[3.2em] whitespace-nowrap"
          style={{
            fontSize: "5.25em",
            fontWeight: "900",
            paddingBottom: "1.8rem",
          }}
        >
          <HighlightText text={data.titleLine1} />
        </h2>
        <h2
          className="uppercase text-8xl font-satoshi"
          style={{
            fontSize: "5.25em",
            fontWeight: "900",
            letterSpacing: "3.3px",
            textShadow:
              "1px 1px 0 #151515, -1px -1px 0 #151515, 1px -1px 0 #151515, -1px 1px 0 #151515",
          }}
        >
          {data.titleLine2}
        </h2>
        <div className="w-[80%] flex mx-auto mt-20">
          <h3 className="text-base text-[#151515]">{data.subtitle}</h3>
        </div>
        <button className={`${styles.HeroTitleButton} ${initialClass}`}>
          {data.button}
        </button>
      </div>
      <div className="hero__subtitle py-[11em]"></div>
    </div>
  );
}
