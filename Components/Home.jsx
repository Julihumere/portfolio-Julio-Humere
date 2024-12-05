import Typewriter from "typewriter-effect";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function HomePage({ props }) {
  return (
    <div className={styles.Home__container} id="/">
      <div className={styles.Home__divMayor}>
        <div className={styles.Home__divTitle}>
          <h1>Julio Humere</h1>
          <div className={styles.Home__divTypewriter}>
            <h2 className={styles.Home__typewriter}>
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  strings: [props.fullstack, props.frontend, props.backend],
                }}
              />
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.Home__socialNetworks}>
        <a
          href="https://github.com/Julihumere"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={styles.Home__item__socialNetworks} />
        </a>
        <a
          href="https://www.linkedin.com/in/juli-humere/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className={styles.Home__item__socialNetworks} />
        </a>
        <a href="https://wa.link/h0b3bf" target="_blank" rel="noreferrer">
          <FaWhatsapp className={styles.Home__item__socialNetworks} />
        </a>
      </div>
    </div>
  );
}
