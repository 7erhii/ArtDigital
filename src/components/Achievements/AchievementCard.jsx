"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "./AchievementsSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AchievementCard = ({ data }) => {
  if (!data) {
    return null;
  }

  const numberRefs = useRef([]);

  useEffect(() => {
    numberRefs.current.forEach((ref, index) => {
      if (ref) {
        const number = data[index].number;
        const numberOnly = parseInt(number.replace(/\D/g, ""));
        const suffix = number.replace(/\d+/g, "");

        gsap.fromTo(
          ref,
          { innerHTML: 0 },
          {
            innerHTML: numberOnly,
            duration: 2,
            ease: "power2.out", // Обновление ease для ускорения и замедления
            snap: { innerHTML: 1 },
            onUpdate: function () {
              ref.innerHTML = Math.ceil(ref.innerHTML) + suffix;
            },
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, [data]);

  const getBorderRadius = (index, length) => {
    if (index === 0) return "40px 12px 12px 40px";
    if (index === length - 1) return "12px 40px 40px 12px";
    return "12px 12px 12px 12px";
  };

  return (
    <div className={styles.achievementsCards}>
      {data.map((item, index, array) => {
        const { icon, number, text } = item;

        return (
          <div
            key={index}
            style={{
              borderRadius: getBorderRadius(index, array.length),
              background: "#212121",
              border: "1px solid #404040",
              width: "33%",
              height: "16.25em",
              position: "relative",
            }}
          >
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              {icon && (
                <Image
                  src={icon}
                  alt=""
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                position: "absolute",
                top: 0,
              }}
            >
              <p
                ref={(el) => (numberRefs.current[index] = el)}
                style={{
                  fontFamily: "inter, sans-serif",
                  fontSize: "5em",
                  fontWeight: "700",
                  lineHeight: "100%",
                  color: "#fff",
                }}
              >
                {number}
              </p>
              <p
                style={{
                  fontFamily: "inter, sans-serif",
                  fontSize: "1em",
                  fontWeight: "100",
                  color: "#fff",
                }}
              >
                {text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AchievementCard;
