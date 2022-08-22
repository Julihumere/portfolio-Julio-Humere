import { useState } from "react";
import style from "../styles/Layout.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Lenguajes from "./Lenguajes";
import { useRouter } from "next/router";

export default function Layout() {
  const router = useRouter();
  const idioma = router.locale;

  const [menu, setMenu] = useState(false);

  const menuDesplegable = () => {
    setMenu(!menu);
  };

  return (
    <div className={style.Layout__container}>
      <div className={style.Layout__titulo}>
        <div>
          {idioma === "es" ? (
            <h1 className={style.Layout__title}>Portafolio</h1>
          ) : (
            <h1 className={style.Layout__title}>Portfolio</h1>
          )}
        </div>

        <ul className={style.Layout__ul}>
          <li className={style.Layout__li}>
            <Link href={"/"}>
              <button className={style.Layout__button}>
                {idioma === "es" ? <span>Inicio</span> : <span>Home</span>}
              </button>
            </Link>
          </li>
          <li className={style.Layout__li}>
            <Link href={"/SobreMi"}>
              <button className={style.Layout__button}>
                {idioma === "es" ? <span>Sobre Mi</span> : <span>About</span>}
              </button>
            </Link>
          </li>
          <li className={style.Layout__li}>
            <Link href={"/Habilidades"}>
              <button className={style.Layout__button}>
                {idioma === "es" ? (
                  <span>Habilidades</span>
                ) : (
                  <span>Skills</span>
                )}
              </button>
            </Link>
          </li>
          <li className={style.Layout__li}>
            <Link href={"/Proyectos"}>
              <button className={style.Layout__button}>
                {idioma === "es" ? (
                  <span>Proyectos</span>
                ) : (
                  <span>Proyects</span>
                )}
              </button>
            </Link>
          </li>
        </ul>
        <Lenguajes />
        <button className={style.Layout__menu} onClick={menuDesplegable}>
          <GiHamburgerMenu />
        </button>
      </div>
      {menu === true ? (
        <div className={style.Layout__menu__container}>
          <ul className={style.Layout__menu__ul}>
            <li className={style.Layout__menu__li}>
              <Link href={"/"}>
                <button className={style.Layout__menu__button}>
                  {idioma === "es" ? <span>Inicio</span> : <span>Home</span>}
                </button>
              </Link>
            </li>
            <li className={style.Layout__menu__li}>
              <Link href={"/SobreMi"}>
                <button className={style.Layout__menu__button}>
                  {idioma === "es" ? <span>Sobre Mi</span> : <span>About</span>}
                </button>
              </Link>
            </li>
            <li className={style.Layout__menu__li}>
              <Link href={"/Skills"}>
                <button className={style.Layout__menu__button}>
                  {idioma === "es" ? (
                    <span>Habilidades</span>
                  ) : (
                    <span>Skills</span>
                  )}
                </button>
              </Link>
            </li>
            <li className={style.Layout__menu__li}>
              <Link href={"/Proyectos"}>
                <button className={style.Layout__menu__button}>
                  {idioma === "es" ? (
                    <span>Proyectos</span>
                  ) : (
                    <span>Proyects</span>
                  )}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
