import styles from "../styles/stars.module.css"

export default function Stars() {
  return (
    <div className={styles.bgAnimation}>
    <div id={styles.stars}></div>
    <div id={styles.stars2}></div>
    <div id={styles.stars3}></div>
    <div id={styles.stars4}></div>
  </div>
  )
}
