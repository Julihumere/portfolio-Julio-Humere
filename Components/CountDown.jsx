import React, { useState, useEffect } from "react";
import styles from "../styles/CountDown.module.css";
import { FaWhatsapp } from "react-icons/fa";
export default function Countdown({
  expiresAt,
  title,
  subtitle,
  daysLang,
  hoursLang,
  minutesLang,
  secondsLang,
}) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const expiresDate = new Date(expiresAt);
      const currentDate = new Date();
      const remainingMilliseconds = expiresDate - currentDate;

      if (remainingMilliseconds <= 0) {
        clearInterval(interval); // Detener el intervalo cuando el tiempo se haya agotado
        return;
      }

      const remainingDays = Math.floor(
        remainingMilliseconds / (1000 * 60 * 60 * 24)
      ); // Días
      const remainingHours = Math.floor(
        (remainingMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ); // Horas
      const remainingMinutes = Math.floor(
        (remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
      ); // Minutos
      const remainingSeconds = Math.floor(
        (remainingMilliseconds % (1000 * 60)) / 1000
      ); // Segundos

      setDays(remainingDays);
      setHours(remainingHours);
      setMinutes(remainingMinutes);
      setSeconds(remainingSeconds);
    }, 1000); // Actualiza cada segundo

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [expiresAt]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div className={styles.countdown__container}>
      <h1>{title}</h1>
      <div className={styles.countdown__values}>
        <div className={styles.countdown__value}>
          <p className={styles.big__text}>{days}</p>
          <span>{daysLang}</span>
        </div>
        <div className={styles.countdown__value}>
          <p className={styles.big__text}>{hours}</p>
          <span>{hoursLang}</span>
        </div>
        <div className={styles.countdown__value}>
          <p className={styles.big__text}>{minutes}</p>
          <span>{minutesLang}</span>
        </div>
        <div className={styles.countdown__value}>
          <p className={styles.big__text}>{seconds}</p>
          <span>{secondsLang}</span>
        </div>
      </div>
      <div>
        <h3 className={styles.countdown__container__whatsapp}>
          {subtitle}
          <a
            href="https://wa.link/h0b3bf"
            className={styles.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp style={{ marginRight: "10px", fontSize: "1.3em" }} />{" "}
            Whatsapp
          </a>
        </h3>
      </div>
    </div>
  );
}
