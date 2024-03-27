import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/page.module.css";
import ReactPlayer from "react-player";
import Link from "next/link";
import { firebaseImage } from "../../Utils/imageUrl";

export const PokeXDigi = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = firebaseImage("pokeXdigi.png");
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
        {imageUrl.length > 0 && <img src={imageUrl} alt="POKE X DIGI" width={200} height={200} />}
        <div className={`${styles.projectInfo}`}>
          <p className={`${styles.projectName}`}>POKE X DIGI</p>
          <Link href="https://github.com/NewDevs2/pokeXdigi">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="Github"
              width={50}
              height={50}
            />
          </Link>
          <div className={`${styles.projectDetail}`}>
            포켓몬과 디지몬을 좋아하는 90년대생 5명이 만든 멀티 커뮤니케이션 게임
            <br />
            특정한 목표 없이 자유롭게 지인 혹은 처음보는 사람들과 소통할 수 있는 공간을 제작하고자
            시작하였습니다🤗
          </div>
        </div>
      </div>

      {/* 팀명, 진행 기간, 개발환경 */}
      <div className={`${styles.projectText}`}>
        <div>팀 명</div>
        <div>NewDevs (New Developers)</div>
      </div>
      <div className={`${styles.projectText}`}>
        <div>진행 기간</div>
        <div>2023년 03월 22일 ~ 2023년 05월 11일</div>
      </div>

      <div className={`${styles.projectPlayer}`}>
        <div>시연 영상</div>
        <ReactPlayer
          url="https://youtu.be/RIYA3-1zyi8?si=uE_FdHR22-lF1z5-"
          className={styles.projectPlay}
        />
      </div>
    </div>
  );
};
