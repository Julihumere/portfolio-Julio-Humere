"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/contact.module.css";
import ButtonSend from "./ButtonSend";
import { InlineWidget } from "react-calendly";
import emailjs from "@emailjs/browser";
import Countdown from "./CountDown";

export default function Contact({ props }) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");
  const [messages, setMessages] = useState([]);
  const [expiresAt, setExpiresAt] = useState(0);

  let mensajeExitoso = props.enviado;

  const handleErrors = async () => {
    if (!form) {
      return props.formularioVacio;
    }

    if (!form.nombre || form.nombre === "") {
      return props.item1Requerido;
    }

    if (!form.email || form.email === "") {
      return props.item2Requerido;
    } else if (!form.email.includes("@")) {
      return props.emailInvalido;
    }

    if (!form.asunto || form.asunto === "") {
      return props.item3Requerido;
    }

    if (!form.mensaje || form.mensaje === "") {
      return props.item4Requerido;
    }

    return true;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Al cargar, obtener mensajes y eliminar los expirados
    const storedMessages = JSON.parse(localStorage.getItem("messages") || "[]");
    const now = Date.now();
    const validMessages = storedMessages.filter((msg) => {
      return msg.expiresAt > now;
    });

    if (validMessages.length > 0) {
      setExpiresAt(validMessages[0].expiresAt);
      setMessages(setMsgSuccess(mensajeExitoso));
    }
  }, []);

  const saveLocalStorage = () => {
    const now = Date.now();
    const expiresAt = now + 7 * 24 * 60 * 60 * 1000;

    const newMessage = { message: form.mensaje, expiresAt };
    const updatedMessages = [...messages, newMessage];

    localStorage.setItem("messages", JSON.stringify(updatedMessages));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseErrors = await handleErrors();

    if (responseErrors === true) {
      setMsgError("");
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setMsgSuccess(mensajeExitoso);
          saveLocalStorage();
        })
        .catch((error) => {
          console.error("Error al enviar el mensaje:", error);
        });
    } else {
      setMsgError(responseErrors);
    }
  };

  return (
    <div id="contacto" className={styles.Contact__container}>
      <title>{props.titulo}</title>
      <div className={styles.Contact__box}>
        {msgSuccess === "" ? (
          <section className={styles.Contact__form}>
            <h1>{props.formulario}</h1>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="" className={styles.Contact__form__label}>
                {props.item1}
                <input
                  onChange={handleChange}
                  name="nombre"
                  value={form.nombre}
                  type="text"
                  className={styles.Contact__form__input}
                />
                {(msgError.includes("Nombre") || msgError.includes("Name")) && (
                  <p className={styles.error}>{msgError}</p>
                )}
              </label>
              <label htmlFor="" className={styles.Contact__form__label}>
                {props.item2}
                <input
                  onChange={handleChange}
                  name="email"
                  value={form.email}
                  type="email"
                  className={styles.Contact__form__input}
                />
                {msgError.includes("Email") && (
                  <p className={styles.error}>{msgError}</p>
                )}
              </label>

              <label htmlFor="" className={styles.Contact__form__label}>
                {props.item3}
                <input
                  onChange={handleChange}
                  name="asunto"
                  value={form.asunto}
                  type="text"
                  className={styles.Contact__form__input}
                />
                {(msgError.includes("Asunto") ||
                  msgError.includes("Subject")) && (
                  <p className={styles.error}>{msgError}</p>
                )}
              </label>

              <label htmlFor="" className={styles.Contact__form__label}>
                {props.item4}
                <textarea
                  onChange={handleChange}
                  name="mensaje"
                  value={form.mensaje}
                  className={styles.Contact__form__textarea}
                ></textarea>
                {(msgError.includes("Mensaje") ||
                  msgError.includes("Message")) && (
                  <p className={styles.error}>{msgError}</p>
                )}
              </label>

              <ButtonSend lang={props.button} />
            </form>
          </section>
        ) : (
          <section className={styles.Contact__success}>
            <h1>{msgSuccess}</h1>
            <Countdown
              expiresAt={expiresAt}
              title={props.titleCountDown}
              subtitle={props.subtitleCountDown}
              daysLang={props.diasLang}
              hoursLang={props.horasLang}
              minutesLang={props.minutosLang}
              secondsLang={props.segundosLang}
            />
            {/* <button
              onClick={() => setMsgSuccess("")}
              className={styles.Contact__button__success}
            >
              Enviar otro mensaje
            </button> */}
          </section>
        )}

        <section className={styles.Contact__calendly}>
          <h1>Calendly</h1>
          <InlineWidget
            className={styles.Contact__calendly__widget}
            url="https://calendly.com/julihumere/meeting"
            styles={{
              width: "90%",
              height: "1000px",
            }}
          />
        </section>
      </div>
    </div>
  );
}
