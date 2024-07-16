import Image from "next/image";
import styles from "./style.module.css";

export default function InfoCards({
  data,
  colorType = "white",
  textAlign = "center",
  alignItems = "center",
  titleSize = "m",
}) {
  const borderRadiusMap = {
    3: ["40px 12px 12px 40px", "12px", "12px 40px 40px 12px"],
    6: [
      "40px 12px 12px 12px",
      "12px",
      "12px 40px 12px 12px",
      "12px 12px 12px 40px",
      "12px",
      "12px 12px 40px 12px",
    ],
  };

  const getStyle = (index, length, colorType, textAlign, alignItems) => {
    const stylesMap = {
      white: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textColor: "#fff",
      },
      whiteDark: {
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textColor: "#fff",
      },
      dark: {
        backgroundColor: "rgba(21, 21, 21, 0.02)",
        borderColor: "rgba(21, 21, 21, 0.1)",
        textColor: "#151515",
      },
      blue: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderColor: "rgba(255, 255, 255, 0.15)",
        textColor: "#fff",
      },
      red: {
        backgroundColor: "red",
        borderColor: "red",
        textColor: "red",
      },
    };

    const { backgroundColor, borderColor, textColor } =
      stylesMap[colorType] || stylesMap.white;

    let width = "32%";
    if (length === 4 || (length === 5 && index > 2)) {
      width = "49%";
    }

    return {
      borderRadius: borderRadiusMap[length]?.[index] || "12px",
      backgroundColor: backgroundColor,
      color: textColor,
      border: `1px solid ${borderColor}`,
      textAlign: textAlign,
      alignItems: alignItems,
      width: width,
      display: "flex",
      flexDirection: "column",
    };
  };

  const getTitleSizeStyle = (titleSize) => {
    switch (titleSize) {
      case "sm":
        return {
          fontSize: "1.5em",
        };
      case "m":
      default:
        return {
          fontSize: "2em",
        };
    }
  };

  return (
    <div className={styles.wrapper}>
      {data.map((card, index) => (
        <div
          key={index}
          className={styles.infoCard}
          style={getStyle(index, data.length, colorType, textAlign, alignItems)}
        >
          {card.icon && <Image src={card.icon} alt={card.Title} />}
          <h3 style={getTitleSizeStyle(titleSize)}>{card.Title}</h3>
          <p>{card.Description}</p>
          {card.Features && <span>{card.Features}</span>}
          {card.FeaturesItems && (
            <ul>
              {card.FeaturesItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}