import React, { useEffect } from "react";
import styles from "../styles/Habilidades.module.css";
import Layout from "../Components/Layout";
import Image from "next/image";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { getHabilidades } from "../Redux/actions";
import Footer from "../Components/Footer";
import Loading from "./../Components/Loading";

export default function Skills() {
  const dispatch = useDispatch();
  const habilidades = useSelector((state) => state.habilidades);

  const Frontend =
    habilidades && habilidades.filter((e) => e.area === "Frontend");

  const Lenguajes =
    habilidades && habilidades.filter((e) => e.area === "Lenguaje");

  const Backend =
    habilidades && habilidades.filter((e) => e.area === "Backend");

  const Otros = habilidades && habilidades.filter((e) => e.area === "Otros");

  useEffect(() => {
    dispatch(getHabilidades());
  }, []);

  return (
    <div className={styles.Habilidades__container}>
      <Head>
        <title>Julio Humere</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/inicio.ico" />
      </Head>
      {habilidades && habilidades.length <= 0 ? (
        <Loading />
      ) : (
        <>
          <Layout />
          <div className={styles.Habilidades__div}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>Frontend</h1>
              <div className={styles.Habilidades__tecnologia__div}>
                {Frontend &&
                  Frontend.map((e, i) => (
                    <div key={e} className={styles.Habilidades__tecnologia}>
                      <Image src={e.icono} width="40" height="40" />
                      <h5>{e.tecnologia}</h5>
                    </div>
                  ))}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>Backend</h1>
              <div className={styles.Habilidades__tecnologia__div}>
                {Backend &&
                  Backend.map((e, i) => (
                    <div key={e} className={styles.Habilidades__tecnologia}>
                      <Image src={e.icono} width="40" height="40" />
                      <h5>{e.tecnologia}</h5>
                    </div>
                  ))}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>Lenguajes</h1>
              <div className={styles.Habilidades__tecnologia__div}>
                {Lenguajes &&
                  Lenguajes.map((e, i) => (
                    <div key={e} className={styles.Habilidades__tecnologia}>
                      <Image src={e.icono} width="40" height="40" />
                      <h5>{e.tecnologia}</h5>
                    </div>
                  ))}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>Otros</h1>
              <div className={styles.Habilidades__tecnologia__div}>
                {Otros &&
                  Otros.map((e, i) => (
                    <div key={e} className={styles.Habilidades__tecnologia}>
                      <Image src={e.icono} width="40" height="40" />
                      <h5>{e.tecnologia}</h5>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
