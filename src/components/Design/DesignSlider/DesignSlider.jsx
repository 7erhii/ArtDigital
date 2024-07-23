"use client";
import React from "react";
import Slider from "react-slick";
import { IoArrowForward } from "react-icons/io5";

import styles from "./DesignSlider.module.css";

export default function DesignSlider({ data }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "30.3333%",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((slide, index) => (
        <div key={index} className={`slide ${styles.sliderContainer}`}>
          <div className={`slide ${styles.sliderItem}`}>
            <a href={slide.href} className={styles.DesignItem}>
              <img
                src={slide.image.src}
                alt={slide.title}
                style={{ width: "100%", display: "block" }}
                className={styles.sliderImage}
              />
              <div className={styles.sliderBottom}>
                <div className={`slider__text ${styles.sliderText}`}>
                  <h3 className={`slide__title ${styles.slideTitle}`}>
                    {slide.title}
                  </h3>
                  <p className={`slide__title ${styles.slideSubtitle}`}>
                    {slide.subtitle}
                  </p>
                </div>
                <IoArrowForward className={styles.DesignSliderIcon} />
              </div>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
}
