import React from "react";
import Image from "next/image";
import styles from "../../styles/page.module.css";
import pokeXdigi from "../../Utils/pokeXdigi.png";
import pokeXdigi_env from "../../Utils/pokeXdigi_dev_env.png";
import ReactPlayer from "react-player";
import Link from "next/link";

export const PokeXDigi = () => {
  return (
    <div className={`${styles.projectBox} ${styles.flexColumnCenter}`}>
      <div className={`${styles.flexRowCenter} ${styles.projectInfoBox}`}>
        <Image src={pokeXdigi} alt="POKE X DIGI" width={200} height={200} />
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
      <div>
        <div>팀 명</div>
        <div>NewDevs (New Developers)</div>
      </div>
      <div>
        <div>진행 기간</div>
        <div>2023년 03월 22일</div>
      </div>
      <div>
        <div>개발 환경</div>
        <Image src={pokeXdigi_env} alt="POKE X DIGI Develop's env" width={400} height={400} />
      </div>
      <div>
        <div>시연 영상</div>
        <ReactPlayer
          url="https://youtu.be/RIYA3-1zyi8?si=uE_FdHR22-lF1z5-"
          className={styles.projectPlay}
        />
      </div>
    </div>
  );
};
