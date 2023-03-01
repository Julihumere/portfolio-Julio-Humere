import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../Redux/store";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {

  return (
    <>
    <ThemeProvider>
       <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
     
    </>
  );
}

export default MyApp;
