import { useState } from "react";
import style from "../styles/Lenguajes.module.css";
import Image from "next/image";
import EN from "../public/img/Otros/EN.png";
import ES from "../public/img/Otros/ES.png";
import { useRouter } from "next/router";

export default function Lenguajes() {
  const router = useRouter();
  const idioma = router.locale;

  const cambiarLenguaje = (e) => {
    console.log(e);
    e.preventDefault();
    router.push(router.pathname, router.pathname, { locale: e.target.value });
  };

  return (
    <div>
      {idioma === "es" ? (
        <div className={style.lang__menu}>
          <div className={style.select__lang}>
            <Image src={ES} width={30} height={30} />
            <h5>Español</h5>
          </div>
          <ul>
            <li>
              <button onClick={cambiarLenguaje} value="en">
                <Image src={EN} width={30} height={30} />
                Ingles
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className={style.lang__menu}>
          <div className={style.select__lang}>
            <Image src={EN} width={30} height={30} />
            <h5>Ingles</h5>
          </div>
          <ul>
            <li>
              <button onClick={cambiarLenguaje} value="es">
                <Image src={ES} width={30} height={30} />
                Español
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
