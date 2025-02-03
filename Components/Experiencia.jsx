/* eslint-disable @next/next/no-img-element */
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
              <img
                alt="Javascript"
                src="/img/FrontEnd/Javascript.png"
                className={styles.img__skills}
              />
              <p>Javascript</p>
            </li>
            <li>
              <img
                alt="React Native"
                src="/img/FrontEnd/ReactNative.webp"
                className={styles.img__skills}
              />
              <p>React Native</p>
            </li>
            <li>
              <img
                alt="React"
                src="/img/FrontEnd/React.png"
                className={styles.img__skills}
              />
              <p>React</p>
            </li>

            <li>
              <img
                alt="PHP"
                src="/img/FrontEnd/PHP.webp"
                className={styles.img__skills}
              />
              <p>PHP</p>
            </li>
            <li>
              <img
                alt="Node JS"
                src="/img/Backend/nodejs.png"
                className={styles.img__skills}
              />
              <p>Node JS</p>
            </li>
            <li>
              <img
                alt="Express"
                src="/img/Backend/express.png"
                className={styles.img__skills}
              />
              <p>Express</p>
            </li>
            <li>
              <img
                alt="SQL"
                src="/img/Backend/sql.png"
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
