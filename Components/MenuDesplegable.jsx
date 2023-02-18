
import React from "react";
import { Link } from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import styles from "../styles/MenuDesplegable.module.css"

export default function MenuDesplegable() {

    const [menuActive, setMenuActive] = useState(false);
    const [Modelos, setModelos] = useState(false);
    const [Ficha, setFicha] = useState(false);
    const handleMouseOverModelos = () => {
      setModelos(true);
    };
  
    const handleMouseOutModelos = () => {
      setModelos(false);
    };
  
    const handleMouseOverFicha = () => {
      setFicha(true);
    };
  
    const handleMouseOutFicha = () => {
      setFicha(false);
    };
  
    const openMenu = () => {
      if (menuActive === false) {
        setMenuActive(true);
      } else {
        setMenuActive(false);
      }
    };
  return (
    <div>
      <div className={styles.header__title__menu}>
        {menuActive === false ? (
          <>
            <h4>Menu</h4>
            <button id={styles.logo} onClick={openMenu}>
              <AiOutlineMenu width={25} height={2} />
            </button>
          </>
        ) : (
          <div className="header__button__cerrar">
            <h4>Cerrar</h4>
            <button id="logo" onClick={openMenu}>
              <AiOutlineClose width={25} height={2} />
            </button>
            <button className="header__button__menu__responsive">
              <AiOutlineMenu />
            </button>
          </div>
        )}
      </div>
    {menuActive ? (
      <>
        <div className="home__background"></div>
        <div className="home__menuActive">
          <div className="home__list_white">
            <div className="header__button__cerrar__responsive">
              <h3>
                Cerrar{" "}
                <button id="logo" onClick={openMenu}>
                  {" "}
                  <AiOutlineClose width={25} height={2} />
                </button>
              </h3>
            </div>

            <ul>
              <li>Modelos</li>
              <li>Servicios y Accesorios</li>
              <li>Financiación</li>
              <li>Reviews y Comunidad</li>
            </ul>
            <div className="home__menuActive__line"></div>
            <ul>
              <li>Toyota Moblity Service</li>
              <li>Toyota Gazoo Racing</li>
              <li>Toyota Hibridos</li>
            </ul>
            <div className="home__menuActive__line"></div>
            <ul>
              <li>Concesionarios</li>
              <li>Test Drive</li>
              <li>Contacto</li>
            </ul>
          </div>

          <div className="home__menuActive__line"></div>
          <div className="home__list_grey">
            <ul>
              <li>Actividades</li>
              <li>Servicios al Cliente</li>
              <li>Ventas Especiales</li>
              <li>Innovación</li>
              <li>Prensa</li>
              <li>Acerca De</li>
            </ul>
          </div>
        </div>
      </>
    ) : null}
    <div className="line"></div>
  </div>
  )
  
}
