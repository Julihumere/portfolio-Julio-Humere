import React from "react";
import styles from "../styles/SobreMi.module.css";
import Link from "next/link";
import Head from "next/head";
import Layout from "./Layout";
import Footer from "./Footer";

export default function About(props) {
  return (
    <div className={styles.SobreMi__container} id="sobremi">
      <title>&lt; SobreMi /&gt;</title>
      <div className={styles.SobreMi__text}>
        <div className={styles.Hoja1}>
          <h1>Sobre mi</h1>
          <p>
            Fui parte del bootcamp de Henry, el cual me proporciono +600 horas
            de codeo, practica y aprendizaje. En el cual aprendi Javascript,
            React, Node.JS, Express, Redux, HTML, CSS. Y continuo aprendiendo
            nuevas tecnologias que me den paso a un excelente empleo, como
            typescript, nextJS, React Native, Mongo DB.
          </p>
        </div>
        <div className={styles.Hoja2}>
          <p>
            Si bien no tengo experiencia laboral como tal, me siento capacitado
            para dar el maximo de mi y aprender lo que haya que saber, me
            considero una persona que tiene aprendizaje rapido y muchas ganas de
            demostrarlo
          </p>
          <div className={styles.SobreMi__buttons__cv}>
          <ul className={styles.SobreMi__Buttons}>
          <li className={styles.SobreMi__li}>
            <Link
            target="_blank"
              href={
                "https://drive.google.com/file/d/13PClqUwLk4BFgaX6i9Zkx9Veq8nCbDKe/view?usp=share_link"
              }
            >
              <h1 className={styles.SobreMi__Buttons__title}>
              <>
                <span className={styles.SobreMi__button__span}>CV español</span>
                <span className={styles.SobreMi__line}></span>
              </>
            </h1>
            </Link>
          </li>
          <li className={styles.SobreMi__li}>
            <Link
            target="_blank"
              href={
                "https://drive.google.com/file/d/1hZJJ413zJwKLPNQwkFqBpjEvv3VaZzJc/view?usp=share_link"
              }
            >
              <h1 className={styles.SobreMI__Buttons__title}>
                <>
                  <span className={styles.SobreMi__button__span}>CV ingles</span>
                  <span className={styles.SobreMi__line}></span>
                </>
              </h1>
            </Link>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
