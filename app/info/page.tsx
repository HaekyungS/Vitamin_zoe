import Link from "next/link";
import styles from "../../styles/page.module.css";

export default function Page() {
  return (
    <>
      <Link className={`${styles.topBox} ${styles.flexRowCenter}`} href="/main">
        <div className={styles.whiteSmallCap}></div>
        <div className={styles.blueSmallCap}></div>
      </Link>
      <div className={`${styles.bottom} ${styles.flexRowCenter}`}>내 정보</div>
    </>
  );
}
