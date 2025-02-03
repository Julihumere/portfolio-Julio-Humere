import React from "react";
import styles from "../styles/Experiencia.module.css";
import Image from "next/image";

export default function Experiencia({ props }) {
  return (
    <div className={styles.Experiencia__container} id="experiencia">
      <title>{props.titulo}</title>
      <div className={styles.Experiencia__item}>
        <div className={styles.title__item}>
          <h1>{props.nombre}</h1>
          <h2>{props.fecha}</h2>
        </div>
        <p className={styles.item__text}>{props.text}</p>

        <div className={styles.item__skills}>
          <strong>{props.titulohab}</strong>
          <ul>
            <li>
              <Image
                alt="Javascript"
                src="/img/FrontEnd/Javascript.png"
                width={50}
                height={50}
                className={styles.img__skills}
              />
              <p>Javascript</p>
            </li>
            <li>
              <Image
                alt="React Native"
                src="/img/FrontEnd/ReactNative.webp"
                width={50}
                height={50}
                className={styles.img__skills}
              />
              <p>React Native</p>
            </li>
            <li>
              <Image
                alt="React"
                src="/img/FrontEnd/React.png"
                width={50}
                height={50}
                className={styles.img__skills}
              />
              <p>React</p>
            </li>

            <li>
              <Image
                alt="PHP"
                src="/img/FrontEnd/PHP.webp"
                width={70}
                height={50}
                className={styles.img__skills}
              />
              <p>PHP</p>
            </li>
            <li>
              <Image
                alt="Node JS"
                src="/img/Backend/nodejs.png"
                width={50}
                height={50}
                className={styles.img__skills}
              />
              <p>Node JS</p>
            </li>
            <li>
              <Image
                alt="Express"
                src="/img/Backend/express.png"
                width={50}
                height={50}
                className={styles.img__skills}
              />
              <p>Express</p>
            </li>
            <li>
              <Image
                alt="SQL"
                src="/img/Backend/sql.png"
                width={50}
                height={50}
                className={styles.img__skills}
              />
              <p>MySql</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
