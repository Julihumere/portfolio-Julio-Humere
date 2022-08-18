import React from "react";
import style from "../styles/Layout.module.css";
import Link from "next/link";

export default function Layout() {
  return (
    <div className={style.Layout__container}>
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
    </div>
  );
}
