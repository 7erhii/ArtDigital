import React from "react";
import styles from "./SectionWrapper.module.css"

const SectionWrapper = ({ dark, children }) => {
  return (
    <div className={`sectionWrapper ${dark ? "bg-[#151515]" : ""} py-20 ${styles.SectionWrapper}`}>
      <div className="sectionContainer flex flex-col mx-auto">{children}</div>
    </div>
  );
};

export default SectionWrapper;
