import "../styles/globals.css";
import Layout from "../Components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
