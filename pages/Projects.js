import React from "react";
import Image from "next/image";
import styles from "../styles/Proyectos.module.css";
import Layout from "../Components/Layout";
import Link from "next/link";

export default function Projects() {
  const proyectos = {
    proyectos: [
      {
        titulo: "Foodies",
        imagen: "/img/Proyectos/Foods.png",
        info: `Es una SPA que tiene una paginacion de 9 recetas,
        con ordenamientos por abecedario y nivel saludable y filtrados por dietas, y una formulario
        controlado con javascript para crear distintas recetas.`,
        tecnologias: [
          "React",
          "Redux",
          "NodeJs",
          "ExpressJs",
          "Sequelize",
          "SQL",
          "Vercel",
          "Heroku",
        ],
      },
      {
        titulo: "Love of Travel",
        imagen: "/img/Proyectos/love of travel.png",
        info: `Es una SPA que tiene una paginacion de 10 paises,
        con ordenamientos por abecedario y poblacion y filtrados por continentes y actividades,  y una formulario
        controlado con javascript para crear actividades
        turisticas.`,
        tecnologias: [
          "React",
          "Redux",
          "NodeJs",
          "ExpressJs",
          "Sequelize",
          "SQL",
          "Vercel",
          "Heroku",
        ],
      },
      {
        titulo: "Pomodoro and ToDo",
        imagen: "/img/Proyectos/Pomodoro and todo.png",
        info: `Es una app creada con Next Js, pomodoro con la
        posibilidad de describir la tarea el tiempo de trabajo y
        de descanso. Y un ToDo list, para escribir tus tareas e ir
        marcando la completadas`,
        tecnologias: ["NextJs", "Vercel", "Module.css"],
      },
    ],
  };
  return (
    <div>
      <Layout />
      <div className={styles.Proyectos__container}>
        <div className={styles.Proyectos__div}>
          <h1>{proyectos.proyectos && proyectos.proyectos[0].titulo}</h1>
          <span className={styles.Proyectos__line}></span>
          <Image
            src={proyectos.proyectos[0].imagen}
            alt=""
            width={400}
            height={250}
          />
          <span className={styles.Proyectos__line}></span>
          <p className={styles.Proyectos__info}>
            {proyectos.proyectos[0].info}
          </p>
          <span className={styles.Proyectos__line}></span>
          <div className={styles.Proyectos___tecnologias}>
            {proyectos.proyectos &&
              proyectos.proyectos[0].tecnologias.map((e) => (
                <p className={styles.tecnologias}>{e}</p>
              ))}
          </div>
          <div className={styles.Proyectos__div__buttons}>
            <Link href={"/"}>
              <button className={styles.Proyectos__buttons}>Pagina</button>
            </Link>
            <Link href={"https://lnkd.in/d_D9TYer"}>
              <button className={styles.Proyectos__buttons}>Codigo</button>
            </Link>
          </div>
        </div>

        {/*  -----------------------------------------------------------------*/}

        <div className={styles.Proyectos__div}>
          <h1>{proyectos.proyectos && proyectos.proyectos[1].titulo}</h1>
          <span className={styles.Proyectos__line}></span>
          <Image
            src={proyectos.proyectos[1].imagen}
            alt=""
            width={400}
            height={250}
          />
          <span className={styles.Proyectos__line}></span>
          <p className={styles.Proyectos__info}>
            {proyectos.proyectos[1].info}
          </p>
          <span className={styles.Proyectos__line}></span>
          <div className={styles.Proyectos___tecnologias}>
            {proyectos.proyectos &&
              proyectos.proyectos[1].tecnologias.map((e) => (
                <p className={styles.tecnologias}>{e}</p>
              ))}
          </div>
          <div className={styles.Proyectos__div__buttons}>
            <Link href={"/"}>
              <button className={styles.Proyectos__buttons}>Pagina</button>
            </Link>
            <Link href={"/"}>
              <button className={styles.Proyectos__buttons}>Codigo</button>
            </Link>
          </div>
        </div>

        {/*  -----------------------------------------------------------------*/}

        <div className={styles.Proyectos__div}>
          <h1>{proyectos.proyectos && proyectos.proyectos[2].titulo}</h1>
          <span className={styles.Proyectos__line}></span>
          <Image
            src={proyectos.proyectos[2].imagen}
            alt=""
            width={400}
            height={250}
          />
          <span className={styles.Proyectos__line}></span>
          <p className={styles.Proyectos__info}>
            {proyectos.proyectos[2].info}
          </p>
          <span className={styles.Proyectos__line}></span>
          <div className={styles.Proyectos___tecnologias}>
            {proyectos.proyectos &&
              proyectos.proyectos[2].tecnologias.map((e) => (
                <p className={styles.tecnologias}>{e}</p>
              ))}
          </div>
          <div className={styles.Proyectos__div__buttons}>
            <Link href={"/"}>
              <button className={styles.Proyectos__buttons}>Pagina</button>
            </Link>
            <Link href={"/"}>
              <button className={styles.Proyectos__buttons}>Codigo</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
