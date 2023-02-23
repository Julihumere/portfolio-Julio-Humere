import axios from 'axios'
import {PROYECTOS} from './types.js'

const base_url = 'https://api-portfolio-julio-humere.up.railway.app'

export const getProyectos = ()=> (dispatch)=>{
    try {
        const proyectos =  axios.get("http://localhost:3001/proyectos")
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
    console.log(payload)
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