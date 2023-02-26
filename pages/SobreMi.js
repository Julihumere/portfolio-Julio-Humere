import React from "react";
import styles from "../styles/SobreMi.module.css";
import Link from "next/link";
import Head from "next/head";
import Layout from "../Components/Layout";
import Footer from "../Components/Footer";

export default function About(props) {
  return (
    <div className={styles.SobreMi__container}>
      <Head>
        <title>Julio Humere</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/inicio.ico" />
      </Head>
      <Layout />

      <div className={styles.SobreMi__text}>
        <div className={styles.Hoja1}>
          <h1>Sobre mi</h1>
          <p>
            Fui parte del bootcamp de Henry, el cual me proporciono +600 horas
            de codeo, practica y aprendizaje. En el cual aprendi Javascript,
            React, Node.JS, Express, Redux, HTML, CSS. Y continuo aprendiendo
            nuevas tecnologias que me habran paso a un excelente empleo, como
            typescript, nextJS, React Native, Mongo DB. Actualmente me encuentro
            en curso de la tecnicatura universitaria de desarrollo web
          </p>
        </div>
        <div className={styles.Hoja2}>
          <p>
            Si bien no tengo experiencia laboral como tal, me siento capacitado
            para dar el maximo de mi y aprender lo que haya que saber, me
            considero una persona que tiene aprendizaje rapido y muchas ganas de
            demostrarlo
          </p>
          <div className={styles.SobreMi__buttons__cv}>
            <Link
              href={
                "https://doc-00-18-docs.googleusercontent.com/docs/securesc/p7u22lt9iv58uj61b1cvth31l3olrtee/2can54ed6ie3fqum33cmp419uijiq7kt/1661196825000/05360399902341524987/05360399902341524987/1CnJ9Xdi6c_4gLG0PZpmqdMm5D0sHck-l?e=download&ax=AI9vYm5bwsM1bD_sjqN6jxUzy_4QNGTzQ5Vqw78ekTI99uOFACTTbNU6bAxPUr1aqGCvjKRAYiykSwDFB2bBerIqdiGNAkmrFUy_SDLMRbtn0RbaqxhJJSu2P6za_pk24c5GbYHWppQum9xD0tWN2detxc_vgjZDSOZdUc4-d0xgRpZHOeAePjZf3hqgHIks67CK2kzYf2XK7cV0WyoMcmC-vlF_Vo46ZjquchIJYBqWtPcKct6KxuvxL6776kmqdCWdKf8SflBavYTTTlruX-RtnuEJlJ4ob2u8A_ODYbOQ3GMJurdtyVH_eI-nL1pyJL35XiWQyw7V61wAVgjFK8QNSPVsyS1vc8hJfJzS8updjGpuis3rG2RBIQkC_Hok7WOQHaH7hb1EE7_avJGj0wxvKB961SwjasK9dY6YQeLtgjw1Hcu-kKyq0fl9xwcsrsJTyRrOmnEvsuqSTZwCJHagfyuNMAATaJtBWFiHzMxQxo4AVWY8AacGnwPHyYB3qAovbReeRT2hK8iuE0AQMiPJ2XvRXJ92qF_DiuQmK9D1mVtf3zlfhHvpjdD0OuOZQXlTLHORwtQS08F0mq7tVqi7dHlLsXvuTC1tG5t-HROdZrqyXBQfFwajv9Iju4ojZZI-EQzJhttWdTtoQMP_hv2_C5Y1UW3-JCATPdniBxB9f9b0RvL2yfcp52-r9xhjhH3rEPv7VV7JL5PK41j3utOQoAi0yPtZMlXewqJbbTLMrxrOlR3Y28uYxeCDGAEEOxS67h6OodlXD8lwHW8gKdARs_jNB5B8JuI_3hyvFbaqhDiSMw5vkW3hg8fkMPE&uuid=41c4db85-6ce6-4ca1-b92f-05bd1aa2314f&authuser=1"
              }
            >
              <button className={styles.SobreMi__cv}>Cv Español</button>
            </Link>
            <Link
              href={
                "https://doc-0o-18-docs.googleusercontent.com/docs/securesc/p7u22lt9iv58uj61b1cvth31l3olrtee/u0dkffajd6khujgt2rblf42477nrig1a/1661196825000/05360399902341524987/05360399902341524987/11wwiQhrtJDDB2alFQwu5Y06fleZCIgz5?e=download&ax=AI9vYm7dAwIudfMZv--Fnnth413sUK8AwlKEQGRKaekR6G7ONkMAMHd9gFGLaChmAdD5G8YBJrd0ILasm0_roAiflQD2uPB7bVEddWdCrGSpAkve1yj3vhYtUGi8ianmNn-rWVvp1ZMKo0pK9KRmsq5EClOcGD5qwsuYoaSp0DaibnH4_5tgmxi7ajjQZ7UpeLhBM7z61GlKg_zfDyJzTzX0YeUvgIgUrlXwwzn3vCFIsTegD4H67KBj2e5XVBtjY1K-I_ABSMZ1vDDwcVNJqg-oztz5jI_VIVlVlZabyWH72xsazC2fn6a4iGTK9sHKDiZgojNv2COxrkNb3pOtM9kDmiQXG1KPSWaAKa_bIZRNfPIqZokOff078eAaFxBO0_7WM9FD5jkGFqjJShYYhlDbgQEp0Gm0DsKeRNQSg98QCFqJkLlUXGynbhNLMjnoPIMIH2rVh_01AFw1huon7yxVKjgymggJDm_kNgows7MvQQ5H5zQsz_GANmJw0p7uVj6gHSroyyc0A5VHjTf8jQc2qlWRKERGHWqoeUJ-Hhcw_2y1FrzX98tY1bvhnxq26Uv_mhYZ4sZ4PuG84v-a_S4N-CxCaYnN2hrq_Ir2Wn0svN0LhcK1DcLqEZbeJGZyHv4zxtpnD0joKpl1RHVLyntk5eb595OlBkyXw4hfpmz4ykoAB4rOzD0E4J9LfIvAqFKFxUK1bmQmEVFS0_tWLOX2RiCaA_Er17CsvyPbBvd3l3QEr7sK-Q7LWZ1tFxds-Tt8VHmef_Rt7VZXPrDSjPSk_qKeKykx3-AbSUvwKhtPC9o09jgeeDokE2Mwqro&uuid=e819d4d7-2232-43d6-87d5-4b5cdb138b81&authuser=1"
              }
            >
              <button className={styles.SobreMi__cv}>CV Ingles</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
