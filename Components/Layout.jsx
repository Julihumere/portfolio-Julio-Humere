import { useState } from "react";
import style from "../styles/Layout.module.css";
import Link from "next/link";
import Image from "next/image";
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

  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className={style.Layout__container}>
      <div className={style.Layout__titulo}>
        <div className={style.Layout__portafolio}>
          <Link href={"/"}>
            <Image
              src={"/Computer.png"}
              width={80}
              height={80}
              style={{ padding: 1 }}
            />
          </Link>
        </div>

        <ul className={style.Layout__ul}>
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
              <Link href={"/SobreMi"}>
                <button className={style.Layout__menu__button}>
                  {idioma === "es" ? <span>Sobre Mi</span> : <span>About</span>}
                </button>
              </Link>
            </li>
            <li className={style.Layout__menu__li}>
              <Link href={"/Habilidades"}>
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
                    <span>Projects</span>
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
