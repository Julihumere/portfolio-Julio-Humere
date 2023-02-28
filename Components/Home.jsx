
import Typewriter from "typewriter-effect";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function HomePage() {
  return (
    <div  className={styles.index__container}>
    <div className={styles.index__divMayor}>
        <div className={styles.index__divTitle}>
          <div>
          <h1>Julio</h1>
          <h1>Humere</h1>
        </div>
        <div className={styles.divTypewriter}>
          <h2 className={styles.typewriter}>
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
          <Image src="https://res.cloudinary.com/dann9ji59/image/upload/v1677540985/Logo_ymkiyp.svg" width='400' height='400' />
        </div>      
      </div>
      <div className={styles.Home__socialNetworks}>
        <Link 
          href="https://github.com/Julihumere"
          target="_blank">
          <FontAwesomeIcon icon={faGithub} className={styles.socialNetworks} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/juli-humere/"
          target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialNetworks} />
        </Link>
        <Link
          href="https://wa.link/h0b3bf"
          target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} className={styles.socialNetworks} />
        </Link>
          
        </div>
      </div>
  )
}

