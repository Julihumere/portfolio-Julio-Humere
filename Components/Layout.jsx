import Link from "next/link";
import style from "../styles/Layout.module.css";
import MenuDesplegable from "./MenuDesplegable";
import Spline from "@splinetool/react-spline";
import ThemeToggler from './ThemeToggler';

export default function Layout({theme, setTheme}) {
  return (
    <div className={style.Layout__container}>
      <div className={style.Layout__MenuDesplegable}>
        <MenuDesplegable theme={theme} setTheme={setTheme} />
      </div>
      <div className={style.Layout__icono}>
            <Link href={"/"}>
            <Spline
            scene="https://prod.spline.design/d6Y54wtG-JYV4csQ/scene.splinecode"
          />
            </Link>
        </div>
      <ul className={style.Layout__Buttons}>
        <li className={style.Layout__li}>
          <Link href={"#sobremi"} scroll={false}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>Sobre Mi</span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </Link>
        </li>
        <li className={style.Layout__li}>
          <Link href={"#habilidades"}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>Habilidades</span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </Link>
        </li>
        <li className={style.Layout__li}>
          <Link href={"#proyectos"}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>Proyectos</span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </Link>
        </li>
        <li>
        <ThemeToggler theme={theme} setTheme={setTheme} />
        </li>
      </ul>
    </div>
  );
}
