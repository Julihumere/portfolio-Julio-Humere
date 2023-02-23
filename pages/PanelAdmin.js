import Cookies from 'universal-cookie'
import React from 'react'
import styles from '../styles/admin.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearProyecto } from '../Redux/actions';



export default function PanelAdmin() {
  const cookie = new Cookies()
  const router = useRouter()
  const dispatch = useDispatch()
  const inicio = cookie.get('inicio')

  const [proyecto, setProyecto] = useState({
    titulo: '',
    descripcion: '',
    imagen: '',
    video:'',
    tipo: '',
    habilidad: []
  })
  useEffect(()=>{
    if(inicio !== 'true'){
      router.push('/Admin')
    } 
  }, [])

  const handleOnChange = (e)=>{
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSelectArea = (e)=>{
    setProyecto({
      ...proyecto,
      tipo: e.target.value
    })
  }

  const handleOnSelectHabilidad = (e)=>{
    setProyecto({
      ...proyecto,
      habilidad: [...proyecto.habilidad, e.target.value]
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(crearProyecto(proyecto))
  }

  const cerrarSesion = ()=>{
    cookie.remove('inicio')
    router.push('/')
  }
  return (
      <div className={styles.PanelAdmin__container}>
        <nav className={styles.PanelAdmin__nav}>
          <ul className={styles.PanelAdmin__ul}>
            <li className={styles.PanelAdmin__li}><h1>Hola, Julio</h1></li>
            <li className={styles.PanelAdmin__li}><button onClick={cerrarSesion}>Cerrar Sesion</button></li>
          </ul>
        </nav>
        <div className={styles.PanelAdmin__forms}>
          <div className={styles.PanelAdmin__form}>
            <h1>Proyectos</h1>
            <form onSubmit={handleSubmit} className={styles.PanelAdmin__form__div}>
              <div className={styles.PanelAdmin__form__input}>
              <label>Titulo</label>
              <input onChange={handleOnChange} name='titulo' value={proyecto.titulo} />
              </div>
              <div className={styles.PanelAdmin__form__input}>
               <label>Descripcion</label>
              <textarea onChange={handleOnChange} name='descripcion' value={proyecto.descripcion} />
              </div>
              <div className={styles.PanelAdmin__form__input}>
              <label>Imagen</label>
              <input onChange={handleOnChange} name='imagen' value={proyecto.imagen} />
              </div>
              <div className={styles.PanelAdmin__form__input}>
              <label>Video</label>
              <input onChange={handleOnChange} name='video' value={proyecto.video} />
              </div>
              <div className={styles.PanelAdmin__form__input}>
              <label>Area</label>
              <input onChange={handleOnChange} name='tipo' value={proyecto.tipo} />
              </div>
              <div className={styles.PanelAdmin__form__input}>
               <label>Habilidades</label>
              {/* <select multiple={false} onChange={e=>handleOnSelectHabilidad(e)} value={proyecto.habilidad}>

              </select> */}
              <input onChange={handleOnChange} name='habilidad' value={proyecto.habilidad} />
              </div> 
              <h3>React, Node, Next, Express, PostgreSQL</h3>                 
              <button className={styles.PanelAdmin__form__button}>Crear</button>
            </form>
          </div>

          {/* HABILIDAD */}

        <div className={styles.PanelAdmin__form}>
            <h1>Habilidad</h1>
          {/* <div className={styles.PanelAdmin__form__div}>            
            <div className={styles.PanelAdmin__form__input}>
              <label>Tecnologia</label>
              <input onChange={handleOnChange} name='titulo' value={proyecto.titulo} />
            </div>
            <div className={styles.PanelAdmin__form__input}>
               <label>Icono</label>
              <textarea onChange={handleOnChange} name='descripcion' value={proyecto.descripcion} />
            </div>
            <div className={styles.PanelAdmin__form__input}>
              <label>Area</label>
              <select onChange={e => handleOnSelectArea(e)} value={proyecto.tipo}>
                <option hidden>Elegir el Area</option>
                <option value='FrontEnd'>FrontEnd</option>
                <option value='Backend'>Backend</option>
                <option value='Lenguajes'>Lenguajes</option>
                <option value='Otros'>Otros</option>
              </select> 
            </div>
            <button className={styles.PanelAdmin__form__button}>Crear</button>
          </div> */}
        </div>
      </div>
        
      </div>      

  )
}
