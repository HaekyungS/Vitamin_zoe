import styles from "../../styles/page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.topBox}>
        <div className={styles.whiteSmallCap}></div>
        <div className={styles.blueSmallCap}></div>
      </div>
      <div className={styles.bottom}>
        <div>
          <a href="http://127.0.0.1:3000/info">약품 신상</a>
          <a href="http://127.0.0.1:3000/project">투약 프로젝트</a>
        </div>
      </div>
    </>
  );
}
