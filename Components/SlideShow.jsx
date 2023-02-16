import React, {useEffect, useRef} from "react";
import styles from '../styles/slideShow.module.css'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from "react-scroll";

export default function SlideShow({proyectos}) {
    let arrayProyectos = proyectos

    const slideShow = useRef(null)


    const next = ()=>{
        if(slideShow.current.children.length > 0){

            const primerElemento = slideShow.current.children[0]
            slideShow.current.style.transition = "1500ms ease-out all"

            const sizeSlide = slideShow.current.children[0].offsetWidth
            slideShow.current.style.transform = `translateX(-${sizeSlide}px)`

            const slideTransition =()=>{
                slideShow.current.style.transition = 'none';
                slideShow.current.style.transform = 'translateX(0px)';
                slideShow.current.appendChild(primerElemento)
                slideShow.current.removeEventListener('transitionend', slideTransition)
            }

            slideShow.current.addEventListener('transitionend', slideTransition)

           
        }
    }
    const prev = ()=>{
        if(slideShow.current.children.length > 0){
            const index = slideShow.current.children.length - 1
            const ultimoElemento = slideShow.current.children[index]

            slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild)
            slideShow.current.style.transition = "none"

            const sizeSlide = slideShow.current.children[0].offsetWidth
            slideShow.current.style.transform = `translateX(-${sizeSlide}px)`

            setTimeout(()=>{
                slideShow.current.style.transition = '1500ms ease-out all';
                slideShow.current.style.transform = 'translateX(0px)';
            }, 30)
        }
    }




  return (
    <div className={styles.slideShow__container}>
        <div className={styles.SlideShow} ref={slideShow}>
            {arrayProyectos && arrayProyectos.proyectos.map(e=>
            <div className={styles.Slide} >
                   <Link to={e.href} spy={true} smooth={true} offset={-30} duration={500} className={styles.Link}>
                    <img src={e.imagen} alt="" />
                    </Link>
                <div className={styles.textSlide}>
                    <Link to={e.href} spy={true} smooth={true} offset={-30} duration={500}><p>{e.titulo}</p></Link>
                </div>
            </div> )}
        </div>
        <div className={styles.SlideButtons}>
            <button onClick={prev} id={styles.button_left}><AiOutlineArrowLeft size='2em' /></button>
            <button onClick={next} id={styles.button_rigth} ><AiOutlineArrowRight size='2em'/></button>
        </div>
    </div>
  )
}
