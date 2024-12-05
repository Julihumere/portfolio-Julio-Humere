import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/slideShow.module.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-scroll";
import Image from "next/image";
import Slider from "react-slick";

export default function SlideShow({ proyectos }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveIndex(current),
    arrows: false,
    //autoplay: true,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {proyectos.map((item) => (
          <div
            key={item.id}
            className={styles.slide}
            style={{ backgroundColor: item.color }}
          >
            <Link
              to={item.titulo}
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <Image
                layout="responsive"
                width={1000}
                height={600}
                src={item.imagen}
                alt={"imagen de " + item.titulo}
                className={styles.image}
              />
              <h2>{item.titulo}</h2>
            </Link>
          </div>
        ))}
      </Slider>

      <div className={styles.indicatorContainer}>
        {proyectos.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              activeIndex === index ? styles.active : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
