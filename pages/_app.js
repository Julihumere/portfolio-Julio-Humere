import "../styles/globals.css";
import { useSpring, animated } from '@react-spring/web'



function MyApp({ Component, pageProps }) {


  return (
    <>       
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
