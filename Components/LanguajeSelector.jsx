/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/LanguajeSelector.module.css";

export default function LanguajeSelector() {
  const router = useRouter();

  let languaje = router.locale === "es" ? "en" : "es";

  const changeLanguaje = async (e) => {
    router.push(router.pathname, router.pathname, {
      locale: languaje,
    });
  };

  return (
    <div>
      <button
        onClick={changeLanguaje}
        className={styles.buttonLang}
        value={router.locale}
      >
        <span>
          {router.locale === "es" ? (
            <img
              alt="English"
              src="https://res.cloudinary.com/dann9ji59/image/upload/v1678725224/Portfolio/lang_es_nkekwr.png"
              width={55}
              height={55}
            />
          ) : (
            <img
              alt="Español"
              src="https://res.cloudinary.com/dann9ji59/image/upload/v1678725201/Portfolio/lang_en_sndwif.png"
              width={55}
              height={55}
            />
          )}
        </span>
      </button>
    </div>
  );
}
