import React, {useState, useEffect} from 'react'
import {BiUpArrowAlt} from "react-icons/bi"
import styles from "../styles/ButtonTop.module.css"
import { useRouter } from 'next/router';


export default function ButtonTop() {
    const router = useRouter()

    const [visible, setVisible] = useState(false)

    const goTop = ()=>{
        window.scrollTo({top:0, left:0, behavior: 'smooth'})
        router.push('/')
    }

    const scroll = ()=>{
        let heightToHidden = 400
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop

        if(windowScroll > heightToHidden){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", scroll)
    })
  return (
    <>
    {visible &&  <div className={styles.Button__top__container} onClick={goTop}>
        <button className={styles.Button__top}><BiUpArrowAlt color='white' size="2em"/></button>
    </div>}
    </> 
  )
}
