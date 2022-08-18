import React from "react";
import styles from "../styles/About.module.css";
import Layout from "../Components/Layout";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.About__container}>
      <Layout />
      <div className={styles.About__text}>
        <h1>Sobre mi...</h1>
        <p>
          Fui parte del bootcamp de Henry, el cual me proporciono +600 horas de
          codeo, practica y aprendizaje. En el cual aprendi Javascript, React,
          Node.JS, Express, Redux, HTML, CSS. Y continuo aprendiendo nuevas
          tecnologias que me den paso a un excelente empleo, como typescript,
          nextJS, React Native, Mongo DB. Actualmente me encuentro en curso de
          la tecnicatura universitaria de desarrollo web
        </p>
        <p>
          Si bien no tengo experiencia laboral como tal, me siento capacitado
          para dar el maximo de mi y aprender lo que haya que saber, me
          considero una persona que tiene aprendizaje rapido y muchas ganas de
          demostrarlo. Tengo proyectos realizados que los pueden encontrar en mi
          github(github.com/Julihumere), con su respectiva demostracion en mi
          Linkedin(linkedin.com/in/juli-humere/)
        </p>
        <Link
          href={
            "https://drive.google.com/drive/folders/1Fz4U3G0ECmyzOV-hYg8vR_VIAkOJ6Tea?usp=sharing"
          }
        >
          <button className={styles.About__cv}>CV</button>
        </Link>
      </div>
    </div>
  );
}
