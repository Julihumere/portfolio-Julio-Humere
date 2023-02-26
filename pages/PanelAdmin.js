import Cookies from "universal-cookie";
import React from "react";
import styles from "../styles/admin.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  crearHabilidad,
  crearProyecto,
  getHabilidades,
  getProyectos,
  updateProyecto,
  deleteProyecto,
} from "../Redux/actions";

export default function PanelAdmin() {
  const cookie = new Cookies();
  const router = useRouter();
  const dispatch = useDispatch();

  const habilidades = ["Frontend", "Backend", "Otros", "Lenguaje"];

  const habilidadArray = useSelector((state) => state.habilidades);
  const inicio = cookie.get("inicio");

  const proyectos = useSelector((state) => state.proyectos);

  useEffect(() => {
    dispatch(getHabilidades());
    dispatch(getProyectos());
    if (inicio !== "true") {
      router.push("/Admin");
    }
  }, []);

  const [proyecto, setProyecto] = useState({
    titulo: "",
    descripcion: "",
    imagen: "",
    video: "",
    tipo: "",
    habilidad: [],
  });
  const [habilidad, setHabilidad] = useState({
    tecnologia: "",
    icono: "",
    area: "",
  });

  const [update, setUpdate] = useState({
    fecha: "",
    titulo: "",
    descripcion: "",
    imagen: "",
    video: "",
    tipo: "",
    habilidad: [],
  });

  //Proyecto
  const handleOnChangeProyectos = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSelectProyectos = (e) => {
    setProyecto({
      ...proyecto,
      habilidad: [...proyecto.habilidad, e.target.value],
    });
  };

  const handleSubmitProyectos = (e) => {
    e.preventDefault();
    dispatch(crearProyecto(proyecto));
    setProyecto({
      fecha: "",
      titulo: "",
      descripcion: "",
      imagen: "",
      video: "",
      tipo: "",
      habilidad: [],
    });
  };

  const resetHabilidades = () => {
    setProyecto({
      ...proyecto,
      habilidad: [],
    });
  };

  //UPDATE

  const idProyecto = (e) => {
    let id = e.target.value;
    const data = proyectos && proyectos.find((e) => e.id === id);
    setUpdate({
      id: data.id,
      fecha: data.fecha,
      titulo: data.titulo,
      descripcion: data.descripcion,
      imagen: data.imagen,
      video: data.video,
      tipo: data.tipo,
      habilidad: data.habilidad,
    });
  };

  const handleOnChangeUpdate = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSelectUpdate = (e) => {
    setUpdate({
      ...update,
      habilidad: [...update.habilidad, e.target.value],
    });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProyecto(update));
  };

  const resetHabilidadesUpdate = () => {
    setUpdate({
      ...update,
      habilidad: [],
    });
  };

  const eliminarProyecto = (e) => {
    dispatch(deleteProyecto(e.target.value));
  };

  //Habilidad

  const handleOnChangeHabilidades = (e) => {
    setHabilidad({
      ...habilidad,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSelectHabilidades = (e) => {
    setHabilidad({
      ...habilidad,
      area: e.target.value,
    });
  };

  const handleSubmitHabilidades = (e) => {
    e.preventDefault();
    dispatch(crearHabilidad(habilidad));
    setHabilidad({
      tecnologia: "",
      icono: "",
      area: "",
    });
  };

  const cerrarSesion = () => {
    cookie.remove("inicio");
    router.push("/");
  };

  return (
    <div className={styles.PanelAdmin__container}>
      <nav className={styles.PanelAdmin__nav}>
        <ul className={styles.PanelAdmin__ul}>
          <li className={styles.PanelAdmin__li}>
            <h1>Hola, Julio</h1>
          </li>
          <li className={styles.PanelAdmin__li}>
            <button onClick={cerrarSesion}>Cerrar Sesion</button>
          </li>
        </ul>
      </nav>
      <div className={styles.PanelAdmin__forms}>
        {/* PROYECTOS */}

        <div className={styles.PanelAdmin__form}>
          <h1>Proyectos</h1>
          <form
            onSubmit={handleSubmitProyectos}
            className={styles.PanelAdmin__form__div}
          >
            <div className={styles.PanelAdmin__form__input}>
              <label>Fecha</label>
              <input
                onChange={handleOnChangeProyectos}
                name="fecha"
                value={proyecto.fecha}
              />
            </div>
            <div className={styles.PanelAdmin__form__input}>
              <label>Titulo</label>
              <input
                onChange={handleOnChangeProyectos}
                name="titulo"
                value={proyecto.titulo}
              />
            </div>
            <div className={styles.PanelAdmin__form__input}>
              <label>Descripcion</label>
              <textarea
                onChange={handleOnChangeProyectos}
                name="descripcion"
                value={proyecto.descripcion}
              />
            </div>
            <div className={styles.PanelAdmin__form__input}>
              <label>Imagen</label>
              <input
                onChange={handleOnChangeProyectos}
                name="imagen"
                value={proyecto.imagen}
              />
            </div>
            <div className={styles.PanelAdmin__form__input}>
              <label>Video</label>
              <input
                onChange={handleOnChangeProyectos}
                name="video"
                value={proyecto.video}
              />
            </div>
            <div className={styles.PanelAdmin__form__input}>
              <label>Area</label>
              <input
                onChange={handleOnChangeProyectos}
                name="tipo"
                value={proyecto.tipo}
              />
            </div>
            <div className={styles.PanelAdmin__form__input}>
              <label>Habilidades</label>
              <select
                multiple={true}
                onChange={(e) => handleOnSelectProyectos(e)}
                value={proyecto.habilidad}
              >
                <option hidden>Elige las tecnologias</option>
                {habilidadArray &&
                  habilidadArray.map((e, i) => (
                    <option key={i} value={e.tecnologia}>
                      {e.tecnologia}
                    </option>
                  ))}
              </select>
            </div>
            <div className={styles.PanelAdmin__form__reset}>
              <h5>{proyecto.habilidad.join(" - ")}</h5>
              <button onClick={resetHabilidades}>❌</button>
            </div>

            <button className={styles.PanelAdmin__form__button}>Crear</button>
          </form>
        </div>

        {/* HABILIDAD */}

        <div className={styles.PanelAdmin__form}>
          <h1>Habilidad</h1>
          <form
            onSubmit={handleSubmitHabilidades}
            className={styles.PanelAdmin__form__div}
          >
            <div className={styles.PanelAdmin__form__input}>
              <label>Tecnologia</label>
              <input
                onChange={handleOnChangeHabilidades}
                name="tecnologia"
                value={habilidad.tecnologia}
              />
            </div>
            <div className={styles.PanelAdmin__form__input}>
              <label>Icono</label>
              <textarea
                onChange={handleOnChangeHabilidades}
                name="icono"
                value={habilidad.icono}
              />
            </div>
            <div className={styles.PanelAdmin__form__input}>
              <label>Area</label>
              <select
                multiple={true}
                onChange={(e) => handleOnSelectHabilidades(e)}
                value={habilidad.area}
              >
                <option hidden>Elegir el Area</option>
                {habilidades &&
                  habilidades.map((e, i) => (
                    <option key={i} value={e}>
                      {e}
                    </option>
                  ))}
              </select>
            </div>
            <button className={styles.PanelAdmin__form__button}>Crear</button>
          </form>
        </div>
      </div>
      <div className={styles.PanelAdmin__update__container}>
        <div className={styles.PanelAdmin__container__buttons}>
          {proyectos &&
            proyectos.map((e, i) => (
              <div key={i} className={styles.PanelAdmin__update__buttons}>
                <button
                  className={styles.PanelAdmin__update__eliminar}
                  value={e.id}
                  onClick={eliminarProyecto}
                >
                  ❌
                </button>
                <button
                  className={styles.PanelAdmin__update__nombre}
                  value={e.id}
                  onClick={idProyecto}
                >
                  {e.titulo}
                </button>
              </div>
            ))}
        </div>
        <form
          onSubmit={handleSubmitUpdate}
          className={styles.PanelAdmin__update}
        >
          <label>Fecha</label>
          <input
            name="fecha"
            value={update.fecha}
            onChange={handleOnChangeUpdate}
          />
          <label>Titulo</label>
          <input
            name="titulo"
            value={update.titulo}
            onChange={handleOnChangeUpdate}
          />
          <label>Imagen</label>
          <input
            name="imagen"
            value={update.imagen}
            onChange={handleOnChangeUpdate}
          />
          <label>Video</label>
          <input
            name="video"
            value={update.video}
            onChange={handleOnChangeUpdate}
          />
          <label>Descripcion</label>
          <textarea
            name="descripcion"
            value={update.descripcion}
            onChange={handleOnChangeUpdate}
          />
          <label>Area</label>
          <input
            name="tipo"
            value={update.tipo}
            onChange={handleOnChangeUpdate}
          />
          <label>Habilidades</label>
          <select onChange={handleOnSelectUpdate}>
            <option hidden>Elige las habilidades</option>
            {habilidadArray &&
              habilidadArray.map((e, i) => (
                <option key={i} value={e.tecnologia}>
                  {e.tecnologia}
                </option>
              ))}
          </select>
          <div className={styles.PanelAdmin__form__reset}>
            <h5>{update.habilidad.join(" - ")}</h5>
            <button onClick={resetHabilidadesUpdate}>❌</button>
          </div>
          <div className={styles.PanelAdmin__buttons}>
            <button type="submit">Actualizar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
