import axios from 'axios'
import {PROYECTOS , HABILIDADES, CREAR_HABILIDADES, CREAR_PROYECTO} from './types.js'

const base_url = 'https://api-portfolio-julio-humere.up.railway.app'

export const getProyectos = ()=> (dispatch)=>{
    try {
        const proyectos =  axios.get(`${base_url}/proyectos`)
        .then((res)=>{
            dispatch ({
                type: PROYECTOS,
                payload: res.data
            })
        })
    } catch (error) {
        console.log(error)
    }
}

export const crearProyecto = (payload)=>()=>{
    try {
        const nuevoProyecto = axios({
            method: 'post',
            url: `${base_url}/proyectos/crearProyecto`,
            data:{
                titulo: payload.titulo,
                imagen: payload.imagen,
                video: payload.video,
                descripcion: payload.descripcion,
                tipo: payload.tipo,
                habilidad: payload.habilidad
            }
        })
    } catch (error) {
        console.log(error)
    }
}


//HABILIDAD

export const getHabilidades = ()=> (dispatch)=>{
    try {
        const habilidades =  axios.get(`${base_url}/habilidades`)
        .then((res)=>{
            dispatch ({
                type: HABILIDADES,
                payload: res.data
            })
        })
    } catch (error) {
        console.log(error)
    }
}

export const crearHabilidad = (payload)=>()=>{
    try {
        const nuevaHabilidad = axios({
            method: 'post',
            url: `${base_url}/habilidades/crearHabilidad`,
            data:{
                tecnologia: payload.tecnologia,
                icono: payload.icono,
                area: payload.area,
            }
        })
    } catch (error) {
        console.log(error)
    }
}