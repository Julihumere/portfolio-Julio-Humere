import Link from 'next/link'
import React from 'react'
import styles from "../styles/MenuDesplegable.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faGithub, faLinkedinIn, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {BsDoorOpen} from 'react-icons/bs'
export default function MenuDesplegable() {
  return (
    <div>
      <nav className={styles.nav__container}>
        <input type='checkbox' className={styles.nav__collapse__input} id="nav__collapse__checkbox"/> 
        <label htmlFor="nav__collapse__checkbox" className={styles.nav__collapse__label}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>        
        </label>
         <div className={styles.nav__collapse__bg}></div>
       <div className={styles.nav__socialNetworks}>
          <Link href='#' target='_blank' className={styles.nav__socialNetworks__item}><FontAwesomeIcon icon={faGithub} /></Link>
          <Link href='#' target='_blank' className={styles.nav__socialNetworks__item}><FontAwesomeIcon icon={faLinkedinIn} /></Link>
          <Link href='#' target='_blank' className={styles.nav__socialNetworks__item}><FontAwesomeIcon icon={faWhatsapp} /></Link>
          <Link href='#' target='_blank' className={styles.nav__socialNetworks__item}><FontAwesomeIcon icon={faEnvelope} /></Link>
        </div>
         <div className={styles.nav__menu}>
          <div className={styles.nav__menu__Links}>
            <h1><Link href={"/"}>
            <BsDoorOpen size={"2em"} style={{width:'33.3%'}} />
          </Link>Inicio</h1>
            <a href="#" className={styles.nav__Link__item}>
          Sobre Mi
          </a>
          <a href="#" className={styles.nav__Link__item}>
          Proyectos
          </a>
          <a href="#" className={styles.nav__Link__item}>
          Habilidades
          </a>
          </div>   
        </div>
      </nav>
    </div>
  )
}
