"use client";
import React from "react";
import Slider from "react-slick";
import { IoArrowForward } from "react-icons/io5";

import styles from "./WorkSlider.module.css";

export default function WorkSlider({ data }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.8,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((slide, index) => (
        <div key={index} className={`slide ${styles.sliderWrapper}`}>
          <div className={`slide ${styles.sliderContainer}`}>
            <div className={styles.SliderItem}>
              <div className={styles.sliderAction}>
                <IoArrowForward className={styles.WorkSliderIcon} />
              </div>
              <div className={styles.sliderDescr}>
                <h2 className={`slide__title ${styles.slideKey}`}>
                  {slide.step}
                </h2>
                <h3 className={`slide__title ${styles.slideTitle}`}>
                  {slide.title}
                </h3>
                <p className={`slide__title ${styles.slideSubtitle}`}>
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
