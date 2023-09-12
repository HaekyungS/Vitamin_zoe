import Link from "next/link";
import styles from "../styles/page.module.css";
export default function Page() {
  return (
    <div className={styles.div100flex}>
      <Link className={`${styles.containerFull} ${styles.flexColumnCenter}`} href="/main">
        <div className={styles.blueCap}></div>
        <div className={styles.whiteCap}></div>
      </Link>
    </div>
  );
}
