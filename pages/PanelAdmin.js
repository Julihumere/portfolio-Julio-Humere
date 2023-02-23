import Cookies from 'universal-cookie'
import React from 'react'
import styles from '../styles/admin.module.css'



export default function PanelAdmin() {
  const cookie = new Cookies()
  const inicio = cookie.get('inicio')
  console.log(inicio)
  return (
    <> 
    {inicio && 
      <div className={styles.PanelAdmin__container}>
        <h1>ENTREEEE</h1>
        <h1>{inicio}</h1>
      </div>
        
      }   
    </>
      

  )
}
