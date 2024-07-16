import styles from "./style.module.css";

export default function StepsCards({ data, type = "white" }) {
  return (
    <div className={styles.Wrapper}>
      {data.map((card, index) => (
        <div
          key={index + 1}
          style={{
            borderRadius:
              index === 0
                ? "40px 40px 12px 12px"
                : index === data.length - 1
                  ? "12px 12px 40px 40px"
                  : "12px 12px 12px 12px",
          }}
          className={`${styles.CardItem} ${type === "dark" ? styles.CardItemDark : ""}`}
        >
          <div className={styles.CardTile}>
            <p>STEP {index + 1}</p>
            <h4>{card.Title}</h4>
          </div>
          <div className={styles.CardDescr}>
            <h5>{card.Description}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}