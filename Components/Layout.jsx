import { useState } from "react";
import style from "../styles/Layout.module.css";
import { useRouter } from "next/router";
import { BsDoorOpen } from "react-icons/bs";
import MenuDesplegable from "./MenuDesplegable";

export default function Layout() {
  return (
    <div className={style.Layout__container}>
      <div className={style.Layout__MenuDesplegable}>
        <MenuDesplegable />
      </div>
      <div className={style.Layout__Home}>
        <h1>
          <a href={"/"}>
            <BsDoorOpen size={"1em"} />
            Inicio
          </a>
        </h1>
      </div>
      <ul className={style.Layout__Buttons}>
        <li className={style.Layout__li}>
          <a href={"/SobreMi"}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>Sobre Mi</span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </a>
        </li>
        <li className={style.Layout__li}>
          <a href={"/Habilidades"}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>Habilidades</span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </a>
        </li>
        <li className={style.Layout__li}>
          <a href={"/Proyectos"}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>Proyectos</span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </a>
        </li>
      </ul>
    </div>
  );
}
