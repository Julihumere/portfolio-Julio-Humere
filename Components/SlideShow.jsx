import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/slideShow.module.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-scroll";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideShow({ proyectos }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveIndex(current),
    arrows: false,
    dotsClass: styles.custom_dots,
    autoplay: true,
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
            <div>
              <Image
                layout="responsive"
                width={1000}
                height={600}
                src={item.imagen}
                alt={"imagen de " + item.titulo}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h2>{item.titulo}</h2>
              <Link
                to={item.titulo}
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Ir al proyecto
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
