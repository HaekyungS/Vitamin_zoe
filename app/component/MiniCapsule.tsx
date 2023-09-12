import styles from "../../styles/page.module.css";
import Link from "next/link";

export const MiniCapsule = () => {
  return (
    <div className={`${styles.topBox} ${styles.flexRowCenter}`}>
      <div
        className={styles.whiteSmallCap}
        onClick={() => {
          history.go(-1);
        }}
      />
      <Link className={styles.blueSmallCap} href="/" />
    </div>
  );
};
