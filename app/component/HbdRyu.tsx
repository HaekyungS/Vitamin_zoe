import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/page.module.css";
import ReactPlayer from "react-player";
import Link from "next/link";
import { firebaseImage } from "../../Utils/imageUrl";

export const HbdRyu = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = firebaseImage("hbdakairoryu.png");
        setImageUrl(await url);
      } catch (error) {
        console.error("imageError:", error);
      }
    };

    fetchImageUrl();
  }, []);

  return (
    <div className={`${styles.projectBox} ${styles.flexColumnCenter}`}>
      {/* 프로젝트 소개 */}
      <div className={`${styles.flexRowCenter} ${styles.projectInfoBox}`}>
        {imageUrl.length > 0 && <img src={imageUrl} alt="류 모의고사" width={250} height={200} />}
        <div className={`${styles.projectInfo}`}>
          <p className={`${styles.projectName}`}>2023년도 아카이로 류 모의고사</p>
          <Link href="https://github.com/HaekyungS/Aka_mock_test.git">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="Github"
              width={50}
              height={50}
            />
          </Link>
          <div className={`${styles.projectDetail}`}>
            2023년도 스트리머 '아카이로 류'님의 생일을 기념하여
            <br />
            해당 스트리머와 관련한 문제를 푸는
            <br />
            모의고사 사이트 입니다.
          </div>
        </div>
      </div>

      {/* 팀명, 진행 기간, 개발환경 */}
      <div className={`${styles.projectText}`}>
        <div>팀 명</div>
        <div>성해경(쪼에)</div>
      </div>
      <div className={`${styles.projectText}`}>
        <div>진행 기간</div>
        <div>2023년 09월 04일 ~ 2023년 09월 19일</div>
      </div>

      <div className={`${styles.projectPlayer}`}>
        <div>시연 영상</div>
        <ReactPlayer
          url="https://youtu.be/xi0BXKNPMYY?si=BTvuA0k21lD9yF6ihttps://youtu.be/xi0BXKNPMYY?si=BTvuA0k21lD9yF6i"
          className={styles.projectPlay}
        />
      </div>
    </div>
  );
};
