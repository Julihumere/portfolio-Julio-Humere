import { useState } from "react";
import style from "../styles/Layout.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Layout() {
  const [menu, setMenu] = useState(false);

  const menuDesplegable = () => {
    setMenu(!menu);
  };

  return (
    <div className={style.Layout__container}>
      <div className={style.Layout__titulo}>
        <div>
          <h1 className={style.Layout__title}>Portfolio</h1>
        </div>

        <ul className={style.Layout__ul}>
          <li className={style.Layout__li}>
            <Link href={"/"}>
              <button className={style.Layout__button}>
                <span>Inicio</span>
              </button>
            </Link>
          </li>
          <li className={style.Layout__li}>
            <Link href={"/SobreMi"}>
              <button className={style.Layout__button}>
                <span>Sobre mi</span>
              </button>
            </Link>
          </li>
          <li className={style.Layout__li}>
            <Link href={"/Skills"}>
              <button className={style.Layout__button}>
                <span>Skills</span>
              </button>
            </Link>
          </li>
          <li className={style.Layout__li}>
            <Link href={"/Proyectos"}>
              <button className={style.Layout__button}>
                <span>Proyectos</span>
              </button>
            </Link>
          </li>
        </ul>
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
                  <span>Inicio</span>
                </button>
              </Link>
            </li>
            <li className={style.Layout__menu__li}>
              <Link href={"/SobreMi"}>
                <button className={style.Layout__menu__button}>
                  <span>Sobre mi</span>
                </button>
              </Link>
            </li>
            <li className={style.Layout__menu__li}>
              <Link href={"/Skills"}>
                <button className={style.Layout__menu__button}>
                  <span>Skills</span>
                </button>
              </Link>
            </li>
            <li className={style.Layout__menu__li}>
              <Link href={"/Proyectos"}>
                <button className={style.Layout__menu__button}>
                  <span>Proyectos</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
