import Typewriter from "typewriter-effect";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import { SocialIcon } from "react-social-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Spline from '@splinetool/react-spline';



    




export default function Home() {
    const router = useRouter()
    const idioma = router.locale

    
  return (
 
        <div className={styles.index__container}>
    <Head>
        <title>Julio Humere</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/inicio.ico" />
      </Head>
      
      <div className={styles.index__divMayor}>

        <div className={styles.index__divTitle}>
          <h1>Julio Humere</h1>
        <Spline  className={styles.logoJH} scene="https://prod.spline.design/d6Y54wtG-JYV4csQ/scene.splinecode" />
        <Spline className={styles.titulo} scene="https://prod.spline.design/zEfz3-ZgG7pnSuuU/scene.splinecode" />        
        </div>
      
        <div className={styles.divTypewriter}>
          <h2 className={styles.typewriter}>
          <Typewriter
          options={{
            loop: true,
            autoStart: true,
            strings: ['Soy Desarrollador Fullstack', 'Soy Desarrollador Frontend','Soy Desarrollador Backend'],
          }}
        />
        </h2>
        </div>
  
        
   
        
          <ul className={styles.index__buttons}>
            <li className={styles.Index__li}>
               <a href={"/SobreMi"}>
              <h1>
                <>
                <span className={styles.Index__button__span}>Sobre Mi</span> 
                <span className={styles.Index__line}></span>
                </>                
              </h1>             
            </a> 
            </li>
            <li className={styles.Index__li}>
               <a href={"/Habilidades"}>
              <h1>
                <>
                <span className={styles.Index__button__span}>Habilidades</span> 
                <span className={styles.Index__line}></span>
                </>                
              </h1>             
            </a>
               </li>
               <li className={styles.Index__li}>
               <a href={"/Proyectos"}>
              <h1>
                <>
                <span className={styles.Index__button__span}>Proyectos</span> 
                <span className={styles.Index__line}></span>
                </>                
              </h1>             
            </a>
               </li>
            
            </ul>
     

            <ul className={styles.index__ul}>
          <li>
            <SocialIcon
              network="github"
              bgColor="black"
              fgColor="white"
              url="https://github.com/Julihumere"
              target={"_blank"}
            />
          </li>
          <li>
            <SocialIcon
              network="linkedin"
              bgColor="black"
              fgColor="white"
              url="https://www.linkedin.com/in/juli-humere/"
              target={"_blank"}
            />
          </li>
          <li>
            <SocialIcon
              network="whatsapp"
              bgColor="black"
              fgColor="white"
              url="https://walink.co/ef4aa4"
              target={"_blank"}
            />
          </li>
        </ul>

          </div>

        
    
    </div>
  );
}
