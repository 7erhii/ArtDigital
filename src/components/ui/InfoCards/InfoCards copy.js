// Core
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";

// Icons
import { IoArrowForward } from "react-icons/io5";

export default function InfoCards({
  data,
  colorType = "white",
  textAlign = "center",
  alignItems = "center",
  titleSize = "m",
  fixedBorderRadius = false,
  styleType = "",
  iconPositionSwap = false,
}) {
  const borderRadiusMap = {
    3: ["40px 12px 12px 40px", "12px", "12px 40px 40px 12px"],
    5: [
      "40px 12px 12px 12px",
      "12px 12px 12px 12px",
      "12px 40px 12px 12px",
      "12px 12px 12px 40px",
      "12px 12px 40px 12px",
    ],
    6: [
      "40px 12px 12px 12px",
      "12px",
      "12px 40px 12px 12px",
      "12px 12px 12px 40px",
      "12px",
      "12px 12px 40px 12px",
    ],
  };

  const borderRadiusMapDigital = {
    3: ["40px 12px 12px 40px", "12px", "12px 40px 40px 12px"],
    5: [
      "40px 12px 12px 12px",
      "12px 12px 12px 12px",
      "12px 40px 12px 12px",
      "12px 12px 12px 40px",
      "12px 12px 40px 12px",
    ],
    6: [
      "40px 12px 12px 12px",
      "12px 40px 12px 12px",
      "12px 12px 12px 12px",
      "12px 12px 12px 12px",
      "12px 12px 12px 40px",
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

    const borderRadius = fixedBorderRadius
      ? "40px 40px 12px 12px"
      : borderRadiusMap[length]?.[index] || "12px";

    return {
      borderRadius,
      backgroundColor,
      color: textColor,
      border: `1px solid ${borderColor}`,
      textAlign,
      alignItems,
      width,
      display: "flex",
      flexDirection: "column",
    };
  };

  const getStyleDigital = (index, length, colorType, textAlign, alignItems) => {
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

    const borderRadius = fixedBorderRadius
      ? "40px 40px 12px 12px"
      : borderRadiusMapDigital[length]?.[index] || "12px";

    return {
      borderRadius,
      backgroundColor,
      color: textColor,
      border: `1px solid ${borderColor}`,
      textAlign,
      alignItems,
      width,
      display: "flex",
      flexDirection: "column",
    };
  };

  const getTitleSizeStyle = (titleSize) => {
    switch (titleSize) {
      case "sm":
        return { fontSize: "1.5em" };
      case "m":
      default:
        return { fontSize: "2em" };
    }
  };

  return (
    <div className={styles.wrapper}>
      {data.map((card, index) => {
        const isDigital = styleType === "digital";
        const cardContent = (
          <>
            {isDigital ? (
              <div className={styles.infoCardDigitalTypeTitle}>
                <h3 style={getTitleSizeStyle(titleSize)}>{card.Title}</h3>
                {card.icon && (
                  <Image
                    src={card.icon}
                    alt={card.Title}
                    className={` w-[2em] h-[2em]`}
                  />
                )}
              </div>
            ) : (
              <>
                <div className={styles.infoCardDigitalTypeTitle}>
                  {card.icon && <Image src={card.icon} alt={card.Title} />}
                  <h3 style={getTitleSizeStyle(titleSize)}>{card.Title}</h3>
                </div>
              </>
            )}
            <p>{card.Description}</p>
            {card.Features && <span>{card.Features}</span>}
            {card.FeaturesItems && (
              <ul>
                {card.FeaturesItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {card.Link && (
              <div className={styles.arrowBlock}>
                <IoArrowForward className={`${styles.arrow} w-[2em] h-[2em]`} />
              </div>
            )}
          </>
        );

        return card.Link ? (
          <Link
            href={card.Link}
            key={index}
            // className={`${isDigital ? styles.infoCardDigitalType : styles.infoCard} ${styles.linkCard}`}
            className={`${isDigital ? styles.infoCardDigitalType : styles.infoCard} ${styles.linkCard}`}
            // style={
            //   isDigital
            //     ? getStyleDigital(
            //         index,
            //         data.length,
            //         colorType,
            //         textAlign,
            //         alignItems
            //       )
            //     : getStyle(index, data.length, colorType, textAlign, alignItems)
            // }
          >
            {cardContent}
          </Link>
        ) : (
          <div
            key={index}
            className={
              isDigital
                ? data.length === 6
                  ? styles.infoCardDigitalLongType
                  : styles.infoCardDigitalLong
                : styles.infoCard
            }
            style={
              isDigital
                ? getStyleDigital(
                    index,
                    data.length,
                    colorType,
                    textAlign,
                    alignItems
                  )
                : getStyle(index, data.length, colorType, textAlign, alignItems)
            }
          >
            {cardContent}
          </div>
        );
      })}
    </div>
  );
}

// //

// // Core
// import Link from "next/link";
// import Image from "next/image";
// import styles from "./style.module.css";

// // Icons
// import { IoArrowForward } from "react-icons/io5";

// export default function InfoCards({
//   data,
//   colorType = "white",
//   textAlign = "center",
//   alignItems = "center",
//   titleSize = "m",
//   fixedBorderRadius = false,
//   styleType = "",
//   iconPositionSwap = false,
// }) {
//   const borderRadiusMap = {
//     3: ["40px 12px 12px 40px", "12px", "12px 40px 40px 12px"],
//     5: [
//       "40px 12px 12px 12px",
//       "12px 12px 12px 12px",
//       "12px 40px 12px 12px",
//       "12px 12px 12px 40px",
//       "12px 12px 40px 12px",
//     ],
//     6: [
//       "40px 12px 12px 12px",
//       "12px",
//       "12px 40px 12px 12px",
//       "12px 12px 12px 40px",
//       "12px",
//       "12px 12px 40px 12px",
//     ],
//   };

//   const borderRadiusMapDigital = {
//     3: ["40px 12px 12px 40px", "12px", "12px 40px 40px 12px"],
//     5: [
//       "40px 12px 12px 12px",
//       "12px 12px 12px 12px",
//       "12px 40px 12px 12px",
//       "12px 12px 12px 40px",
//       "12px 12px 40px 12px",
//     ],
//     6: [
//       "40px 12px 12px 12px",
//       "12px 40px 12px 12px",
//       "12px 12px 12px 12px",
//       "12px 12px 12px 12px",
//       "12px 12px 12px 40px",
//       "12px 12px 40px 12px",
//     ],
//   };

//   const getStyle = (index, length, colorType, textAlign, alignItems) => {
//     const stylesMap = {
//       white: {
//         backgroundColor: "rgba(255, 255, 255, 0.05)",
//         borderColor: "rgba(255, 255, 255, 0.1)",
//         textColor: "#fff",
//       },
//       whiteDark: {
//         backgroundColor: "rgba(255, 255, 255, 0.02)",
//         borderColor: "rgba(255, 255, 255, 0.1)",
//         textColor: "#fff",
//       },
//       dark: {
//         backgroundColor: "rgba(21, 21, 21, 0.02)",
//         borderColor: "rgba(21, 21, 21, 0.1)",
//         textColor: "#151515",
//       },
//       blue: {
//         backgroundColor: "rgba(255, 255, 255, 0.05)",
//         borderColor: "rgba(255, 255, 255, 0.15)",
//         textColor: "#fff",
//       },
//       red: {
//         backgroundColor: "red",
//         borderColor: "red",
//         textColor: "red",
//       },
//     };

//     const { backgroundColor, borderColor, textColor } =
//       stylesMap[colorType] || stylesMap.white;

//     let width = "32%";
//     if (length === 4 || (length === 5 && index > 2)) {
//       width = "49%";
//     }

//     const borderRadius = fixedBorderRadius
//       ? "40px 40px 12px 12px"
//       : borderRadiusMap[length]?.[index] || "12px";

//     return {
//       borderRadius,
//       backgroundColor,
//       color: textColor,
//       border: `1px solid ${borderColor}`,
//       textAlign,
//       alignItems,
//       width,
//       display: "flex",
//       flexDirection: "column",
//     };
//   };

//   const getStyleDigital = (index, length, colorType, textAlign, alignItems) => {
//     const stylesMap = {
//       white: {
//         backgroundColor: "rgba(255, 255, 255, 0.05)",
//         borderColor: "rgba(255, 255, 255, 0.1)",
//         textColor: "#fff",
//       },
//       whiteDark: {
//         backgroundColor: "rgba(255, 255, 255, 0.02)",
//         borderColor: "rgba(255, 255, 255, 0.1)",
//         textColor: "#fff",
//       },
//       dark: {
//         backgroundColor: "rgba(21, 21, 21, 0.02)",
//         borderColor: "rgba(21, 21, 21, 0.1)",
//         textColor: "#151515",
//       },
//       blue: {
//         backgroundColor: "rgba(255, 255, 255, 0.05)",
//         borderColor: "rgba(255, 255, 255, 0.15)",
//         textColor: "#fff",
//       },
//       red: {
//         backgroundColor: "red",
//         borderColor: "red",
//         textColor: "red",
//       },
//     };

//     const { backgroundColor, borderColor, textColor } =
//       stylesMap[colorType] || stylesMap.white;

//     let width = "32%";
//     if (length === 4 || (length === 5 && index > 2)) {
//       width = "49%";
//     }

//     const borderRadius = fixedBorderRadius
//       ? "40px 40px 12px 12px"
//       : borderRadiusMapDigital[length]?.[index] || "12px";

//     return {
//       borderRadius,
//       backgroundColor,
//       color: textColor,
//       border: `1px solid ${borderColor}`,
//       textAlign,
//       alignItems,
//       width,
//       display: "flex",
//       flexDirection: "column",
//     };
//   };

//   const getTitleSizeStyle = (titleSize) => {
//     switch (titleSize) {
//       case "sm":
//         return { fontSize: "1.5em" };
//       case "m":
//       default:
//         return { fontSize: "2em" };
//     }
//   };

//   return (
//     <div className={styles.wrapper}>
//       {data.map((card, index) => {
//         const isDigital = styleType === "digital";
//         const cardContent = (
//           <>
//             {isDigital ? (
//               <div
//                 className={`flex w-full gap-5 justify-between `}
//                 style={
//                   isDigital ? getStyleDigital(colorType) : getStyle(colorType)
//                 }
//               >
//                 {/* <div className={styles.infoCardDigitalTypeTitle}> */}
//                 <h3 style={getTitleSizeStyle(titleSize)}>{card.Title}</h3>
//                 {card.icon && (
//                   <Image
//                     src={card.icon}
//                     alt={card.Title}
//                     className={` w-[2em] h-[2em]`}
//                   />
//                 )}
//               </div>
//             ) : (
//               <>
//                 {card.icon && <Image src={card.icon} alt={card.Title} />}
//                 <h3 style={getTitleSizeStyle(titleSize)}>{card.Title}</h3>
//               </>
//             )}
//             <p>{card.Description}</p>
//             {card.Features && <span>{card.Features}</span>}
//             {card.FeaturesItems && (
//               <ul>
//                 {card.FeaturesItems.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             )}
//             {card.Link && (
//               <div className={styles.arrowBlock}>
//                 <IoArrowForward className={`${styles.arrow} w-[2em] h-[2em]`} />
//               </div>
//             )}
//           </>
//         );

//         return card.Link ? (
//           <Link
//             href={card.Link}
//             key={index}
//             // className={`${isDigital ? styles.infoCardDigitalType : styles.infoCard} ${styles.linkCard}`}
//             className={`${isDigital ? styles.infoCardDigitalType : styles.infoCard} ${styles.linkCard}`}
//             // style={
//             //   isDigital
//             //     ? getStyleDigital(
//             //         index,
//             //         data.length,
//             //         colorType,
//             //         textAlign,
//             //         alignItems
//             //       )
//             //     : getStyle(index, data.length, colorType, textAlign, alignItems)
//             // }
//           >
//             {cardContent}
//           </Link>
//         ) : (
//           <div
//             key={index}
//             className={
//               isDigital
//                 ? data.length === 6
//                   ? styles.infoCardDigitalLongType
//                   : styles.infoCardDigitalLong
//                 : styles.infoCard
//             }
//             style={
//               isDigital
//                 ? getStyleDigital(
//                     index,
//                     data.length,
//                     colorType,
//                     textAlign,
//                     alignItems
//                   )
//                 : getStyle(index, data.length, colorType, textAlign, alignItems)
//             }
//           >
//             {cardContent}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
