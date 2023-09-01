import Link from "next/link";
import styles from "../../styles/page.module.css";

export default function Page() {
  return (
    <>
      <div className={`${styles.topBox} ${styles.flexRowCenter}`}>
        <div
          className={styles.whiteSmallCap}
          onClick={() => {
            history.go(-1);
          }}
        ></div>
        <Link className={styles.blueSmallCap} href="/"></Link>
      </div>
      <div className={`${styles.bottom} ${styles.flexRowCenter}`}>프로젝트</div>
    </>
  );
}
