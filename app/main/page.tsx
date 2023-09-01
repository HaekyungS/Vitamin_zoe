"use client";
import { useState } from "react";
import styles from "../../styles/page.module.css";
import Link from "next/link";

export default function Page() {
  const [open, Setopen] = useState(false);

  return (
    <>
      {/* 상단에 작은 캡슐모양 */}
      <div className={`${styles.topBox} ${styles.flexRowCenter}`}>
        <div
          className={styles.whiteSmallCap}
          onClick={() => {
            history.go(-1);
          }}
        ></div>
        <Link className={styles.blueSmallCap} href="/"></Link>
      </div>

      <div className={`${styles.bottom} ${styles.flexRowCenter}`}>
        <div
          onClick={() => {
            if (open) {
              Setopen(false);
            } else {
              Setopen(true);
            }
          }}
        >
          약품정보 상세보기 ▼
          {open && (
            <div className={`${styles.toggle} ${styles.flexColumnCenter}`}>
              <Link className={styles.link} href="/info">
                약품 신상
              </Link>
              <Link className={styles.link} href="/project">
                투약 프로젝트
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
