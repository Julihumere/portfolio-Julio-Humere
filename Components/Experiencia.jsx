import React from "react";
import styles from "../styles/Experiencia.module.css";

export default function Experiencia({ props }) {
  console.log(props);
  return (
    <div className={styles.Experiencia__container} id="experiencia">
      <title>{props.titulo}</title>
      <div className={styles.Experiencia__item}>
        <div className={styles.title__item}>
          <h1>{props.nombre}</h1>
          <h2>{props.fecha}</h2>
        </div>
        <h4 className={styles.item__text}>{props.text}</h4>

        <h5 className={styles.item__skills}>{props.Habilidades}</h5>
      </div>
    </div>
  );
}
