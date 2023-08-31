import styles from "../../styles/page.module.css";

export default function Page() {
  return (
    <>
      <a className={styles.topBox} href="http://127.0.0.1:3000/main">
        <div className={styles.whiteSmallCap}></div>
        <div className={styles.blueSmallCap}></div>
      </a>
      <div className={styles.bottom}>내 정보</div>
    </>
  );
}
