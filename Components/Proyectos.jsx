import React from "react";
import styles from "../styles/Proyectos.module.css";
import SlideShow from "./SlideShow";
import { AiFillStar } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaGraduationCap, FaTools } from "react-icons/fa";
import { FaGithub, FaLink } from "react-icons/fa";
import { useRouter } from "next/router";
import proyectosArray from "../data/proyectos.json";

export default function Projects({ props }) {
  const router = useRouter();

  return (
    <div className={styles.Proyectos__container} id="proyectos">
      <title>{props.titulo}</title>
      <div className={styles.Proyectos__titulo__slideShow}>
        <h1>{props.subtitulo1}</h1>
        <h3>{props.subtitulo2}</h3>

        <div className={styles.SlideShow}>
          <SlideShow proyectos={proyectosArray} />
        </div>
      </div>

      <div className={styles.Proyectos__container__card}>
        {proyectosArray &&
          proyectosArray.map((e) => (
            <div
              key={e.titulo}
              className={styles.Proyectos__card}
              id={e.titulo}
            >
              <div className={styles.Proyectos__info}>
                <p>{e.fecha}</p>
                <h1>
                  <AiFillStar />
                  {e.titulo}
                </h1>
                <span className={styles.line}></span>
                <div className={styles.Proyectos__info__detail}>
                  <BsFillJournalBookmarkFill size="2em" />
                  <h3>
                    {router.locale === "es"
                      ? e.descripcion
                      : e.descripcionIngles}
                  </h3>
                </div>
                <span className={styles.line}></span>
                <div className={styles.Proyectos__img}>
                  <video
                    controls
                    autoPlay={false}
                    style={{ borderRadius: "25px" }}
                    src={e.video}
                  ></video>
                  <div className={styles.tecnologias}>
                    <FaTools size="2em" />
                    <div className={styles.habilidades}>
                      {e.habilidad.map((e) => (
                        <h4 key={e}>{e}</h4>
                      ))}
                    </div>
                  </div>
                </div>
                <span className={styles.line}></span>
                <div className={styles.enlaces}>
                  <a href={e.demo} target="_blank" rel="noreferrer">
                    <FaLink className={styles.link} />
                  </a>
                  <a href={e.github} target="_blank" rel="noreferrer">
                    <FaGithub className={styles.github} />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
