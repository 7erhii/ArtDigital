import React from "react";

// Styles
import styles from "./style.module.css";

// Icons
import iconDevelopment from "@/assets/icons/icon-fast.svg";
import MainButton from "../ui/MainButton/MainButton";

export default function EngageTitle(props) {
  const { title, description, button } = props;

  return (
    <div className={styles.container}>
      <div>
        <img src={iconDevelopment} alt="Development Icon" />
        <h4>{title}</h4>
      </div>
      <div>
        <h4>{description}</h4>
      </div>
      <div>
        <MainButton text={button} />
      </div>
    </div>
  );
}
