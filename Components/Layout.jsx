import Link from "next/link";
import style from "../styles/Layout.module.css";
import MenuDesplegable from "./MenuDesplegable";
import ThemeToggler from "./ThemeToggler";
import LanguajeSelector from "./LanguajeSelector";

export default function Layout({ theme, setTheme, props }) {
  return (
    <div className={style.Layout__container}>
      <div className={style.Layout__MenuDesplegable}>
        <MenuDesplegable theme={theme} setTheme={setTheme} />
        <div className={style.Layout__MenuDesplegableSelectors}>
          <ThemeToggler theme={theme} setTheme={setTheme} />
          <LanguajeSelector />
        </div>
      </div>
      <div className={style.Layout__icono}>
        <Link href={"/"}>
          <img src="/img/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className={style.Layout__Buttons}>
        <li className={style.Layout__li}>
          <Link href={"#sobremi"} scroll={false}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>
                  {props.sobreMi}
                </span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </Link>
        </li>
        <li className={style.Layout__li}>
          <Link href={"#experiencia"} scroll={false}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>
                  {props.experiencia}
                </span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </Link>
        </li>
        <li className={style.Layout__li}>
          <Link href={"#habilidades"}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>
                  {props.habilidades}
                </span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </Link>
        </li>
        <li className={style.Layout__li}>
          <Link href={"#proyectos"}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>
                  {props.proyectos}
                </span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </Link>
        </li>
        <li className={style.Layout__li}>
          <Link href={"#contacto"}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>
                  {props.contacto}
                </span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </Link>
        </li>
      </ul>
      <ul className={style.Layout__ul__selectors}>
        <li>
          <ThemeToggler theme={theme} setTheme={setTheme} />
        </li>
        <li>
          <LanguajeSelector />
        </li>
      </ul>
    </div>
  );
}
