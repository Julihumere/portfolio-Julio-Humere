import styles from "../styles/loading.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Loading() {
  return (
    <div className={styles.loading__container}>
      <h1>Loading...</h1>
      <span className={styles.loader}></span>
    </div>
  );
}
