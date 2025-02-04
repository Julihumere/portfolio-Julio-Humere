import Head from "next/head";
import SobreMi from "../Components/SobreMi.jsx";
import Habilidades from "../Components/Habilidades.jsx";
import Proyectos from "../Components/Proyectos.jsx";
import Layout from "../Components/Layout";
import HomePage from "./../Components/Home";
import Stars from "../Components/Stars";
import ButtonTop from "./../Components/ButtonTop";
import { useTheme } from "next-themes";
import Experiencia from "../Components/Experiencia.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MouseTrail from "../Components/MouseTrail.jsx";
import Contact from "../Components/Contact.jsx";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Julio Humere</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <ButtonTop />
      <MouseTrail />
      <Stars />
      <Layout props={props.Layout} />
      <HomePage props={props.Home} />
      <SobreMi props={props.SobreMi} />
      <Experiencia props={props.Experiencia} />
      <Habilidades props={props.Habilidades} />
      <Proyectos props={props.Proyectos} />
      <Contact props={props.Contact} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const response = await import(`../Lang/${locale}.json`);
  return {
    props: {
      Layout: response.Layout,
      Home: response.Home,
      SobreMi: response.SobreMi,
      Experiencia: response.Experiencia,
      Habilidades: response.Habilidades,
      Proyectos: response.Proyectos,
      Contact: response.Contacto,
    },
  };
}
