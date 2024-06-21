import Image from "next/image";
import styles from "./style.module.css";

export default function InfoCards({ data, color = 'white', textAlign = 'center' }) {
  const borderRadiusMap = {
    3: ["40px 12px 12px 40px", "12px", "12px 40px 40px 12px"],
    6: ["40px 12px 12px 12px", "12px", "12px 40px 12px 12px", "12px 12px 12px 40px", "12px", "12px 12px 40px 12px"]
  };

  const getStyle = (index, length, color, textAlign) => {
    const backgroundColors = {
      white: 'rgba(255, 255, 255, 0.02)',
      dark: 'rgba(21, 21, 21, 0.02)'
    };
    const textColors = {
      white: '#fff',
      dark: '#151515'
    };
    const borderColors = {
      white: 'rgba(255, 255, 255, 0.1)',
      dark: 'rgba(21, 21, 21, 0.1)'
    };
    
    return {
      borderRadius: borderRadiusMap[length]?.[index] || "12px",
      backgroundColor: backgroundColors[color] || 'transparent',
      color: textColors[color] || '#151515',
      border: `1px solid ${borderColors[color] || 'transparent'}`,
      textAlign: textAlign
    };
  };

  return (
    <div className={styles.wrapper}>
      {data.map((card, index) => (
        <div
          key={index}
          className={styles.infoCard}
          style={getStyle(index, data.length, color, textAlign)}
        >
          {card.icon && <Image src={card.icon} alt={card.Title} />}
          <h3>{card.Title}</h3>
          <p>{card.Description}</p>
        </div>
      ))}
    </div>
  );
}
