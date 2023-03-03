import Link from "next/link";
import { useState } from "react";
import styles from "../styles/MenuDesplegable.module.css";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function MenuDesplegable() {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = (e) => {
    setMenu(false);
  };

  return (
    <div>
      <nav className={styles.nav__container}>
        <input
          type="checkbox"
          className={styles.nav__collapse__input}
          id="nav__collapse__checkbox"
          checked={menu}
          onChange={openMenu}
        />
        <label
          htmlFor="nav__collapse__checkbox"
          className={styles.nav__collapse__label}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </label>
        <div className={styles.nav__collapse__bg}></div>
        <div className={styles.nav__socialNetworks}>
          <Link
            href="https://github.com/Julihumere"
            target="_blank"
            className={styles.nav__socialNetworks__item}
          >
            <FaGithub size="1.5em" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/juli-humere/"
            target="_blank"
            className={styles.nav__socialNetworks__item}
          >
            <FaLinkedinIn size="1.5em" />
          </Link>
          <Link
            href="https://wa.link/h0b3bf"
            target="_blank"
            className={styles.nav__socialNetworks__item}
          >
            <FaWhatsapp size="1.5em" />
          </Link>
        </div>
        <div className={styles.nav__menu}>
          <div className={styles.nav__menu__Links}>
            <a href="#sobremi" className={styles.nav__Link__item}>
              <button onClick={closeMenu} value={menu}>
                Sobre Mi
              </button>
            </a>
            <a href="#habilidades" className={styles.nav__Link__item}>
              <button onClick={closeMenu} value={menu}>
                Habilidades
              </button>
            </a>
            <a href="#proyectos" className={styles.nav__Link__item}>
              <button onClick={closeMenu} value={menu}>
                Proyectos
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
