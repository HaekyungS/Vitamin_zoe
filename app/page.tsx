import styles from "./Page.module.css";
export default function Page() {
  return (
    <>
      <a className={styles.mainBox} href="http://127.0.0.1:3000/main">
        <div className={styles.bluecap}></div>
        <div className={styles.whitecap}></div>
      </a>
    </>
  );
}
