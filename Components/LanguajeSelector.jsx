import { useRouter } from "next/router";
import React, { useState } from "react";

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
        style={{
          marginTop: "0.5rem",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        value={router.locale}
      >
        <span>
          {router.locale === "en" ? (
            <img
              src="https://res.cloudinary.com/dann9ji59/image/upload/v1678725224/Portfolio/lang_es_nkekwr.png"
              width={55}
              height={55}
            />
          ) : (
            <img
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
