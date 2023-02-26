import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../Redux/store";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
