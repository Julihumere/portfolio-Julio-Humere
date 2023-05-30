import React from "react";
import styles from "../styles/SobreMi.module.css";
import Link from "next/link";

export default function About({ props }) {
  return (
    <div className={styles.SobreMi__container} id="sobremi">
      <title>{props.titulo}</title>
      <div className={styles.SobreMi__text}>
        <div className={styles.Hoja1}>
          <p>{props.text1}</p>
        </div>
        <div className={styles.Hoja2}>
          <p>{props.text2}</p>
          <div className={styles.SobreMi__buttons__cv}>
            <ul className={styles.SobreMi__Buttons}>
              <li className={styles.SobreMi__li}>
                <a
                  target="_blank"
                  href={
                    "https://drive.google.com/file/d/1RFFjcrTt7prhawix_MTEtP_YOLKFy9Qh/view?usp=share_link"
                  }
                >
                  <h1 className={styles.SobreMi__Buttons__title}>
                    <>
                      <span className={styles.SobreMi__button__span}>
                        {props.CvEspañol}
                      </span>
                      <span className={styles.SobreMi__line}></span>
                    </>
                  </h1>
                </a>
              </li>
              <li className={styles.SobreMi__li}>
                <a
                  target="_blank"
                  href={
                    "https://drive.google.com/file/d/18I9qp4-q8j42AdHMR7PL5cRsOaEiA6o6/view?usp=share_link"
                  }
                >
                  <h1 className={styles.SobreMI__Buttons__title}>
                    <>
                      <span className={styles.SobreMi__button__span}>
                        {props.CVIngles}
                      </span>
                      <span className={styles.SobreMi__line}></span>
                    </>
                  </h1>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
