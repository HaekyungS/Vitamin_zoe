import styles from "../styles/page.module.css";
export default function Page() {
  return (
    <>
      <a className={styles.mainBox} href="http://127.0.0.1:3000/main">
        <div className={styles.blueCap}></div>
        <div className={styles.whiteCap}></div>
      </a>
    </>
  );
}
