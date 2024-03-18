"use client";
import { useEffect, useState } from "react";
import styles from "../../styles/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { MiniCapsule } from "../component/MiniCapsule";
import { firebaseImage } from "../../Utils/imageUrl";

export default function Page() {
  const [open, Setopen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = firebaseImage("230912.jpg");
        setImageUrl(await url);
      } catch (error) {
        console.error("imageError:", error);
      }
    };

    fetchImageUrl();
  }, []);

  return (
    <div className={styles.div100flex}>
      {/* 상단에 작은 캡슐모양 */}
      <MiniCapsule />

      {/* 본문내용 부분 */}
      <div className={styles.wh80}>
        <div className={`${styles.bottomMain} ${styles.flexColumnCenter}`}>
          <h2>생기 넘치는 비타민, "성해경"</h2>
          <h3>복용 한 번 해보실래요?💊</h3>
          <div className={`${styles.flexRowCenter} ${styles.mainsub}`}>
            {imageUrl.length > 0 && (
              <img
                src={imageUrl}
                width={170}
                height={200}
                alt="zoe's picture"
                draggable={false}
                className={styles.image}
              />
            )}
            <div className={`${styles.title}`}>
              단, 단시간 복용하였음에도 <br /> 장기간 복용한 듯한 부작용이 있을 수 있습니다.😉
            </div>
          </div>
          <div
            className={styles.toggleButton}
            onClick={() => {
              if (open) {
                Setopen(false);
              } else {
                Setopen(true);
              }
            }}
          >
            약품정보 상세보기 {!open ? "😌" : "😝"}
            {open && (
              <div className={`${styles.toggle} ${styles.flexRowCenter}`}>
                <Link className={styles.link} href="/info">
                  📒약품 상세📒
                </Link>
                <Link className={styles.link} href="/project">
                  💊투약 프로젝트💊
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
