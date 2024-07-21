"use client";
import { useContext } from "react";
import { ColorContext } from "@/context/ColorContext";
import { lightenColor } from "@/utils/colorUtils";

export default function HeroTitle({ data }) {
  const { color } = useContext(ColorContext);
  const highlightKeyword = ["ready", "готовы"];

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

  return (
    <div
      className="mx-auto text-center py-20  pb-0 "
      style={{ maxWidth: "62em" }}
    >
      <div className="hero__title flex flex-col relative ">
        <h2
          className="uppercase text-8xl font-satoshi pr-[3em] text-nowrap"
          style={{ fontSize: "5.25em", fontWeight: "900" }}
        >
          <HighlightText text={data.titleLine1} />
        </h2>
        <h2
          className="uppercase text-8xl font-satoshi"
          style={{ fontSize: "5.25em", fontWeight: "900" }}
        >
          {data.titleLine2}
        </h2>
        <div className="w-[80%] flex mx-auto mt-16">
          <h3 className="text-base text-[#151515]">{data.subtitle}</h3>
        </div>

        <button
          className="main-btn main-btn--red btn absolute top-0 right-0"
          style={{
            background: color,
            padding: "1.5em 2em",
            border: `0.35em solid rgba(255, 255, 255, 0.2);`,
            color: "#fff",
            // boxShadow: `0 0 0 0.3em ${lightenColor(color, -20)}`,
          }}
        >
          {data.button}
        </button>
      </div>
      <div className="hero__subtitle font-poppins py-[5rem]">
        {/* <p>{t("subtitle")}</p> */}
      </div>
      {/* <button>CLICK1</button> */}
    </div>
  );
}
