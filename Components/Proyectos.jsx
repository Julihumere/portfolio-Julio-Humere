import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Proyectos.module.css";
import Layout from "./Layout";
import Head from "next/head";
import SlideShow from "./SlideShow";
import { AiFillStar } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaGraduationCap, FaTools } from "react-icons/fa";
import { getProyectos } from "../Redux/actions.js";
import { FaGithub, FaLink } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Projects({props}) {
  const dispatch = useDispatch();
  const proyectos = useSelector((state) => state.proyectos);
  const router = useRouter()

  useEffect(() => {
    dispatch(getProyectos());
  }, []);

  return (
    <div>
      <div className={styles.Proyectos__container} id="proyectos">
        <title>{props.titulo}</title>
        <div className={styles.Proyectos__titulo__slideShow}>
          <h1>{props.subtitulo1}</h1>
          <h3>{props.subtitulo2}</h3>

          <div className={styles.SlideShow}>
            <SlideShow proyectos={proyectos} />
          </div>
        </div>

        <div className={styles.Proyectos__container__card}>
          {proyectos &&
            proyectos.map((e) => (
              <div
                key={e.titulo}
                className={styles.Proyectos__card}
                id={e.titulo}
              >
                <div className={styles.Proyectos__card__color}> </div>
                <div className={styles.Proyectos__info}>
                  <p>{e.fecha}</p>
                  <h1>
                    <AiFillStar />
                    {e.titulo}
                  </h1>
                  <span className={styles.line}></span>
                  <div className={styles.Proyectos__info__detail}>
                    <BsFillJournalBookmarkFill size="2em" />
                    <h3>{router.locale === 'es' ? e.descripcion : e.descripcionIngles}</h3>
                  </div>
                  <span className={styles.line}></span>
                  <div className={styles.Proyectos__info__education}>
                    <FaGraduationCap size="3em" />
                    <h4>{router.locale === 'es' ? e.tipo : e.tipoIngles}</h4>
                  </div>
                  <span className={styles.line}></span>
                  <div className={styles.enlaces}>
                    <a href={e.demo} target="_blank">
                      <FaLink className={styles.link} />
                    </a>
                    <a href={e.github} target="_blank">
                      <FaGithub className={styles.github} />
                    </a>
                  </div>
                  <span className={styles.line}></span>
                </div>
                <div className={styles.Proyectos__img}>
                  <video
                    controls
                    autoPlay={false}
                    style={{ borderRadius: "25px" }}
                    src={e.video}
                  ></video>
                  <span className={styles.line}></span>
                  <div className={styles.tecnologias}>
                    <FaTools size="2em" />
                    <div className={styles.habilidades}>
                      {e.habilidad.map((e) => (
                        <h4 key={e}>{e}</h4>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
