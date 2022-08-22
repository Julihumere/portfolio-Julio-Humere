import React from "react";
import styles from "../styles/Skills.module.css";
import Layout from "../Components/Layout";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Skills(props) {
  const SKILLS = {
    skillsInfo: [
      {
        title: "FrontEnd",
        skills: [
          {
            icon: "/img/FrontEnd/Javascript.png",
            title: "Javascript",
          },
          {
            icon: "/img/FrontEnd/NextJs.png",
            title: "NextJs",
          },
          {
            icon: "/img/FrontEnd/React.png",
            title: "React",
          },
          {
            icon: "/img/FrontEnd/Redux.png",
            title: "Redux",
          },
          {
            icon: "/img/FrontEnd/Html.png",
            title: "HTML",
          },
          {
            icon: "/img/FrontEnd/Css.png",
            title: "CSS",
          },
          {
            icon: "/img/FrontEnd/Bootstrap.jfif",
            title: "Bootstrap",
          },
          {
            icon: "/img/FrontEnd/taildwind css.png",
            title: "Taildwind",
          },
        ],
      },
      {
        title: "BackEnd",
        skills: [
          {
            icon: "/img/BackEnd/express.png",
            title: "Express",
          },
          {
            icon: "/img/BackEnd/nodejs.png",
            title: "Node Js",
          },
          {
            icon: "/img/BackEnd/postgresql.png",
            title: "PostgreSQL",
          },
          {
            icon: "/img/BackEnd/sequelize.png",
            title: "Sequelize",
          },
          {
            icon: "/img/BackEnd/sql.png",
            title: "SQL",
          },
        ],
      },
      {
        title: "Otros",
        skills: [
          {
            icon: "/img/Otros/git.png",
            title: "GIT",
          },
          {
            icon: "/img/Otros/lucidchart.png",
            title: "Lucidchart",
          },
          {
            icon: "/img/Otros/trello.png",
            title: "Trello",
          },
          {
            icon: "/img/Otros/vscode.png",
            title: "VS code",
          },
        ],
      },
    ],
  };

  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.Skills__container}>
        <Head>
          <title>Julio Humere</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/img/inicio.ico" />
        </Head>
        <Layout />
        <h1 className={styles.Skills__title}>{props.Habilidades.Titulo}</h1>
        <h4>{props.Habilidades.Info}</h4>
        <div className={styles.Skills__div}>
          <div className={styles.Skills__div__frontend}>
            <h1>{SKILLS.skillsInfo[0].title}</h1>
            <div className={styles.Skills__map}>
              {SKILLS.skillsInfo &&
                SKILLS.skillsInfo[0].skills.map((e, i) => (
                  <div key={i}>
                    <Image src={e.icon} alt="" width={50} height={50} />
                    <h5>{e.title}</h5>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.Skills__div__backend}>
            <h1>{SKILLS.skillsInfo[1].title}</h1>
            <div className={styles.Skills__map}>
              {SKILLS.skillsInfo &&
                SKILLS.skillsInfo[1].skills.map((e, i) => (
                  <div key={i}>
                    <Image src={e.icon} alt="" width={50} height={50} />
                    <h5>{e.title}</h5>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.Skills__div__otros}>
            <h1>{props.Habilidades.Otros}</h1>
            <div className={styles.Skills__map}>
              {SKILLS.skillsInfo &&
                SKILLS.skillsInfo[2].skills.map((e, i) => (
                  <div key={i}>
                    <Image src={e.icon} alt="" width={50} height={50} />
                    <h5>{e.title}</h5>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export async function getStaticProps({ locale }) {
  const response = await import(`../Lenguajes/${locale}.json`);
  return {
    props: {
      Habilidades: response.default.Habilidades,
    },
  };
}