import Cookies from 'universal-cookie'
import React from 'react'
import styles from '../styles/admin.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearHabilidad, crearProyecto } from '../Redux/actions';
import { useSelector } from 'react-redux';
import { getHabilidades } from './../Redux/actions';



export default function PanelAdmin() {
  const cookie = new Cookies()
  const router = useRouter()
  const dispatch = useDispatch()

  const habilidadArray = useSelector(state => state.habilidades)
  const inicio = cookie.get('inicio')


 useEffect(()=>{
    dispatch(getHabilidades())
    if(inicio !== 'true'){
      router.push('/Admin')
    } 
  }, [])
  const [proyecto, setProyecto] = useState({
    titulo: '',
    descripcion: '',
    imagen: '',
    video:'',
    tipo: '',
    habilidad: []
  })
  const [habilidad, setHabilidad] = useState({
    tecnologia: '',
    icono: '',
    area:''
  })
 


  //Proyecto
  const handleOnChangeProyectos = (e)=>{
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSelectProyectos = (e)=>{
    setProyecto({
      ...proyecto,
      habilidad: [...proyecto.habilidad, e.target.value]
    })
  }

  const handleSubmitProyectos = (e)=>{
    e.preventDefault()
    dispatch(crearProyecto(proyecto))
    setProyecto({
      fecha: '',
      titulo: '',
      descripcion: '',
      imagen: '',
      video:'',
      tipo: '',
      habilidad: []
    })
  }

  const resetHabilidades = (e)=>{
    setProyecto({
      ...proyecto,
      habilidad: []
    })
  }

  //Habilidad

  const handleOnChangeHabilidades = (e)=>{
    setHabilidad({
      ...habilidad,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSelectHabilidades = (e)=>{
    setHabilidad({
      ...habilidad,
      area: e.target.value
    })
  }

  const handleSubmitHabilidades = (e)=>{
    e.preventDefault()
    dispatch(crearHabilidad(habilidad))
    setHabilidad({
      tecnologia: '',
      icono: '',
      area:''
    })
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

          {/* PROYECTOS */}

          <div className={styles.PanelAdmin__form}>
            <h1>Proyectos</h1>
            <form onSubmit={handleSubmitProyectos} className={styles.PanelAdmin__form__div}>
              <div className={styles.PanelAdmin__form__input}>
              <label>Fecha</label>
              <input onChange={handleOnChangeProyectos} name='fecha' value={proyecto.fecha} />
              </div>
              <div className={styles.PanelAdmin__form__input}>
              <label>Titulo</label>
              <input onChange={handleOnChangeProyectos} name='titulo' value={proyecto.titulo} />
              </div>
              <div className={styles.PanelAdmin__form__input}>
               <label>Descripcion</label>
              <textarea onChange={handleOnChangeProyectos} name='descripcion' value={proyecto.descripcion} />
              </div>
              <div className={styles.PanelAdmin__form__input}>
              <label>Imagen</label>
              <input onChange={handleOnChangeProyectos} name='imagen' value={proyecto.imagen} />
              </div>
              <div className={styles.PanelAdmin__form__input}>
              <label>Video</label>
              <input onChange={handleOnChangeProyectos} name='video' value={proyecto.video} />
              </div>
              <div className={styles.PanelAdmin__form__input}>
              <label>Area</label>
              <input onChange={handleOnChangeProyectos} name='tipo' value={proyecto.tipo} />
              </div>
              <div className={styles.PanelAdmin__form__input}>
               <label>Habilidades</label>
              <select multiple={false} onChange={e=>handleOnSelectProyectos(e)} value={proyecto.habilidad}>
                  <option hidden>Elige las tecnologias</option>
                  {habilidadArray && habilidadArray.map(e =>(
                  <option key={e} value={e.tecnologia}>{e.tecnologia}</option>
                  ))}
              </select>
              </div> 
              <div className={styles.PanelAdmin__form__reset}>
                <h5>{proyecto.habilidad.join(' - ')}</h5>
                <button onClick={resetHabilidades}>❌</button>  
              </div>
                           
              <button className={styles.PanelAdmin__form__button}>Crear</button>
            </form>
          </div>

          {/* HABILIDAD */}

        <div className={styles.PanelAdmin__form}>
            <h1>Habilidad</h1>
          <form onSubmit={handleSubmitHabilidades} className={styles.PanelAdmin__form__div}>            
            <div className={styles.PanelAdmin__form__input}>
              <label>Tecnologia</label>
              <input onChange={handleOnChangeHabilidades} name='tecnologia' value={habilidad.tecnologia} />
            </div>
            <div className={styles.PanelAdmin__form__input}>
               <label>Icono</label>
              <textarea onChange={handleOnChangeHabilidades} name='icono' value={habilidad.icono} />
            </div>
            <div className={styles.PanelAdmin__form__input}>
              <label>Area</label>
              <select multiple={false} onChange={e => handleOnSelectHabilidades(e)} value={habilidad.area}>
                <option hidden>Elegir el Area</option>
                <option value='Frontend'>FrontEnd</option>
                <option value='Backend'>Backend</option>
                <option value='Lenguaje'>Lenguaje</option>
                <option value='Otros'>Otros</option>
              </select> 
            </div>
            <button className={styles.PanelAdmin__form__button}>Crear</button>
          </form>
        </div>
      </div>
        
      </div>      

  )
}
