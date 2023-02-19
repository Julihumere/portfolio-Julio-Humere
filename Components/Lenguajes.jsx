import { useState } from "react";
import style from "../styles/Lenguajes.module.css";
import Image from "next/image";
import EN from "../public/img/Otros/EN.png";
import ES from "../public/img/Otros/ES.png";
import { useRouter } from "next/router";
import {GoTriangleDown} from "react-icons/go"

export default function Lenguajes() {
  const router = useRouter();
  const idioma = router.locale;

  const [mode, setMode] = useState(false)

  const cambiarLenguaje = (e) => {
    console.log(e.target.checked)
    if(e.target.checked === true){
      setMode(true)
      e.preventDefault();
    router.push(router.pathname, router.pathname, { locale: 'es' });
    } else{
      setMode(false)
      e.preventDefault();
    router.push(router.pathname, router.pathname, { locale: 'en' });
    }
  };

  return (
    <div className={style.Lenguaje__container}>    
      {idioma === 'es' ? <label className={style.switch}>
        <input type="checkbox" value="es" onChange={cambiarLenguaje}/>
      <span className={style.slider}></span>
    </label>: <label className={style.switch}>
        <input type="checkbox" value="en" onChange={cambiarLenguaje}/>
      <span className={style.slider}></span>
    </label>}
      
      
      
      {/* {idioma === "es" ? (
        <div className={style.lang__menu}>
          <div className={style.select__lang}>
            <Image src={ES} width={30} height={30} />
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
                <h5>Español</h5>
              </button>
            </li>
          </ul>
        </div>
      )} */}
    </div>
  );
}
