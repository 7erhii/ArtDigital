import React from "react";
import Image from "next/image";

// Styles
import styles from "./style.module.css";

// Icons
import iconDevelopment from "@/assets/icons/icon-fast.svg";

export default function EngageTitle(props) {
  const { title, description } = props;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src={iconDevelopment} alt="Development Icon" width={40} height={40}/>
        <h4>{title}</h4>
      </div>
      <div className={styles.description}>
        <h4>{description}</h4>
      </div>

    </div>
  );
}
