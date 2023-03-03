import axios from "axios";
import { PROYECTOS, HABILIDADES } from "./types.js";

const base_url = `${process.env.NEXT_PUBLIC_URL}`;

export const getProyectos = () => async (dispatch) => {
  try {
    const proyectos = await axios.get(`${base_url}/proyectos`).then((res) => {
      dispatch({
        type: PROYECTOS,
        payload: res.data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const crearProyecto = (payload) => () => {
  try {
    const nuevoProyecto = axios({
      method: "post",
      url: `${base_url}/proyectos/crearProyecto`,
      data: {
        fecha: payload.fecha,
        titulo: payload.titulo,
        imagen: payload.imagen,
        video: payload.video,
        descripcion: payload.descripcion,
        tipo: payload.tipo,
        habilidad: payload.habilidad,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProyecto = (payload) => () => {
  try {
    const proyecto = axios({
      method: "put",
      url: `${base_url}/proyectos/updateProyecto`,
      data: {
        id: payload.id,
        fecha: payload.fecha,
        titulo: payload.titulo,
        imagen: payload.imagen,
        video: payload.video,
        descripcion: payload.descripcion,
        tipo: payload.tipo,
        habilidad: payload.habilidad,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProyecto = (payload) => () => {
  try {
    const proyecto = axios({
      method: "delete",
      url: `${base_url}/proyectos/deleteProyecto`,
      data: {
        id: payload,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//HABILIDAD

export const getHabilidades = () => (dispatch) => {
  try {
    const habilidades = axios.get(`${base_url}/habilidades`).then((res) => {
      dispatch({
        type: HABILIDADES,
        payload: res.data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const crearHabilidad = (payload) => () => {
  try {
    const nuevaHabilidad = axios({
      method: "post",
      url: `${base_url}/habilidades/crearHabilidad`,
      data: {
        tecnologia: payload.tecnologia,
        icono: payload.icono,
        area: payload.area,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
