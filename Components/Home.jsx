import Typewriter from "typewriter-effect";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className={styles.Home__container} id="/">
      <div className={styles.Home__divMayor}>
        <div className={styles.Home__divTitle}>
          <div>
            <h1>Julio</h1>
            <h1>Humere</h1>
          </div>
          <div className={styles.Home__divTypewriter}>
            <h2 className={styles.Home__typewriter}>
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  strings: [
                    "Soy Desarrollador Fullstack",
                    "Soy Desarrollador Frontend",
                    "Soy Desarrollador Backend",
                  ],
                }}
              />
            </h2>
          </div>
        </div>
        <div className={styles.Home__logo}>
          <Image
            src="https://res.cloudinary.com/dann9ji59/image/upload/v1677540985/Logo_ymkiyp.svg"
            width="400"
            height="400"
          />
        </div>
      </div>
      <div className={styles.Home__socialNetworks}>
        <a href="https://github.com/Julihumere" target="_blank">
          <FaGithub className={styles.Home__item__socialNetworks} />
        </a>
        <a href="https://www.linkedin.com/in/juli-humere/" target="_blank">
          <FaLinkedinIn className={styles.Home__item__socialNetworks} />
        </a>
        <a href="https://wa.link/h0b3bf" target="_blank">
          <FaWhatsapp className={styles.Home__item__socialNetworks} />
        </a>
      </div>
    </div>
  );
}
