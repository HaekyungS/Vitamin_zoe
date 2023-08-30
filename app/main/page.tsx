import styles from "../../styles/page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.topBox}>
        <div className={styles.whiteSmallCap}></div>
        <div className={styles.blueSmallCap}></div>
      </div>
      <div className={styles.bottom}></div>
    </>
  );
}
