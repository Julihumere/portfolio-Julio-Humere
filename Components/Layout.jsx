import Link from "next/link";
import style from "../styles/Layout.module.css";
import { BsDoorOpen } from "react-icons/bs";
import MenuDesplegable from "./MenuDesplegable";

export default function Layout() {
  return (
    <div className={style.Layout__container}>
      <div className={style.Layout__MenuDesplegable}>
        <MenuDesplegable />
      </div>
      <ul className={style.Layout__Buttons}>
        <li className={style.Layout__li}>
          <h1>
            <Link href={"/"}>
              <BsDoorOpen size={"1em"} color="white" />
            </Link>
          </h1>
        </li>
        <li className={style.Layout__li}>
          <Link href={"/SobreMi"}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>Sobre Mi</span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </Link>
        </li>
        <li className={style.Layout__li}>
          <Link href={"/Habilidades"}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>Habilidades</span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </Link>
        </li>
        <li className={style.Layout__li}>
          <Link href={"/Proyectos"}>
            <h1 className={style.Layout__Buttons__title}>
              <>
                <span className={style.Layout__button__span}>Proyectos</span>
                <span className={style.Layout__line}></span>
              </>
            </h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}
