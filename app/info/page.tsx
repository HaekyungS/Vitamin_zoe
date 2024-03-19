"use client";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LangIcon } from "../component/LangIcon";
import { Tools } from "../component/Tools";
import { MiniCapsule } from "../component/MiniCapsule";
import { firebaseImage } from "../../Utils/imageUrl";

export default function Page() {
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = [
          await firebaseImage("230914.jpg"),
          await firebaseImage("gmail.png"),
          await firebaseImage("notion.png"),
        ];
        setImageUrl(url);
      } catch (error) {
        console.error("imageError:", error);
      }
    };

    fetchImageUrl();
  }, []);

  return (
    <>
      {/* 상단에 작은 캡슐모양 */}
      <MiniCapsule />

      {/* 신상정보 */}
      <div className={`${styles.bottomInfo} ${styles.flexColumnCenter}`}>
        <h1>비타민 "성해경" 상세 정보</h1>

        {/* 사진, 이름, 출시일 */}
        <div className={`${styles.flexColumnCenter} ${styles.infoTable}`}>
          <div className={`${styles.infoTableRow} ${styles.flexRowCenter}`}>
            <div className={`${styles.infoTableRowOne}`}>약품 사진</div>
            <div className={`${styles.infoTableRowOne}`}>
              약품명
              <br />
              (영문명)
            </div>
            <div className={`${styles.infoTableRowOne}`}></div>
          </div>
          <div className={`${styles.infoTableRow} ${styles.flexRowCenter}`}>
            <div className={`${styles.infoTableRowTwo}`}>
              {imageUrl.length > 0 && (
                <img
                  src={imageUrl[0]}
                  alt="zoe's picture"
                  draggable={false}
                  width={100}
                  height={100}
                  className={styles.infoTableImg}
                />
              )}
            </div>
            <div className={styles.infoTableRowTwo}>
              성해경
              <br />
              (Haekyung Seong)
            </div>
            <div className={`${styles.infoTableRowTwo}`}>
              <Link href="https://github.com/HaekyungS" target="_blank">
                {imageUrl.length > 0 && (
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="Github"
                    width={50}
                    height={50}
                  />
                )}
              </Link>

              <Link
                href="https://zoehae.notion.site/Project-69425c2d126f4af28d8763c1b5a5d085?pvs=4"
                target="_blank"
              >
                <img src={imageUrl[2]} alt="Notion" width={50} height={50} />
              </Link>
            </div>
          </div>
        </div>

        {/* 간단소개 */}
        <h2>약품 인사말🖐️</h2>
        <div className={styles.infoTitle}>
          비타민처럼 같이 일하는 사람에게도,
          <br />
          제가 만드는 애플리케이션 유저들에도,
          <br />
          힘이 되고 싶은
          <br />
          <span>개발자 성해경</span>입니다🤗 <br />
          점점 더 생활 속 다양해지는 자동화 시대에서 나이불문하고
          <br />
          모두가 사용하기 쉽고,
          <br />
          교육이 될 수 있는,
          <br />
          재미있는 애플리케이션을 개발하고자 공부 중에 있습니다.
        </div>

        {/* 프로젝트 페이지로 이동 */}
        <Link className={`${styles.link} ${styles.font21}`} href="/project">
          💊프로젝트 보러가기👩‍💻
        </Link>

        {/* 사용가능 언어 및 업무툴 */}
        <div className={`${styles.infoLang} ${styles.flexcolumnCenter}`}>
          <h2 className={styles.infoLangTitle}>사용 가능한 언어 및 업무툴👩‍💻</h2>
          <div className={`${styles.flexRowCenter}`}>
            {/* 사용 가능 언어 */}
            <LangIcon />

            {/* 업무 툴 */}
            <Tools />
          </div>
        </div>

        {/* 컨택포인트 */}
        <div className={`${styles.infoContact}`}>
          <h3>컨텍은 아래 메일로 연락주세요📨</h3>
          <Link
            href="mailto:haekyungs95@gmail.com"
            className={`${styles.infoProject} ${styles.link}`}
          >
            {imageUrl.length > 0 && <img src={imageUrl[1]} alt="Gmail" width={15} height={15} />}{" "}
            haekyungs95@gmail.com
          </Link>
        </div>
      </div>
    </>
  );
}
