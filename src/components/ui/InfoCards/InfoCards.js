import Image from "next/image";
import styles from "./style.module.css";

export default function InfoCards({ data, colorType = 'white', textAlign = 'center' }) {
  const borderRadiusMap = {
    3: ["40px 12px 12px 40px", "12px", "12px 40px 40px 12px"],
    6: ["40px 12px 12px 12px", "12px", "12px 40px 12px 12px", "12px 12px 12px 40px", "12px", "12px 12px 40px 12px"]
  };

  const getStyle = (index, length, colorType, textAlign) => {
    const stylesMap = {
      white: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        textColor: '#fff'
      },
      whiteDark: {
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        textColor: '#fff'
      },
      dark: {
        backgroundColor: 'rgba(21, 21, 21, 0.02)',
        borderColor: 'rgba(21, 21, 21, 0.1)',
        textColor: '#151515'
      },
      blue: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        textColor: '#fff'
      },
      red: {
        backgroundColor: 'red',
        borderColor: 'red',
        textColor: 'red'
      }
    };

    const { backgroundColor, borderColor, textColor } = stylesMap[colorType] || stylesMap.white;

    return {
      borderRadius: borderRadiusMap[length]?.[index] || "12px",
      backgroundColor: backgroundColor,
      color: textColor,
      border: `1px solid ${borderColor}`,
      textAlign: textAlign
    };
  };

  return (
    <div className={styles.wrapper}>
      {data.map((card, index) => (
        <div
          key={index}
          className={styles.infoCard}
          style={getStyle(index, data.length, colorType, textAlign)}
        >
          {card.icon && <Image src={card.icon} alt={card.Title} />}
          <h3>{card.Title}</h3>
          <p>{card.Description}</p>
        </div>
      ))}
    </div>
  );
}
