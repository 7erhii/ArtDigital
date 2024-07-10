"use client";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './RunningLine.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function RunningLine({ speed = 5000, images }) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: speed,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className={styles.runningLineContainer}>
      <Slider {...settings}>
        {images.map((imgSrc, index) => (
          <div key={index} className={styles.slide}>
            <Image 
              src={imgSrc.src} 
              alt={`Image ${index}`}
              width={imgSrc.width || 100} 
              height={imgSrc.height || 50} 
              unoptimized
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
