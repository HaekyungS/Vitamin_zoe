import React from "react";
import Image from "next/image";
import styles from "../../styles/page.module.css";
import jamstock from "../../Utils/jamstock.png";
import ReactPlayer from "react-player";
import Link from "next/link";

export const JamStock = () => {
  return (
    <div className={`${styles.projectBox} ${styles.flexColumnCenter}`}>
      {/* 프로젝트 소개 */}
      <div className={`${styles.flexRowCenter} ${styles.projectInfoBox}`}>
        <Image src={jamstock} alt="jamstock" width={200} height={200} />
        <div className={`${styles.projectInfo}`}>
          <p className={`${styles.projectName}`}>JamStock</p>
          <Link href="https://github.com/JamStock/JamStock.git">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="Github"
              width={50}
              height={50}
            />
          </Link>
          <div className={`${styles.projectDetail}`}>
            실제 본인의 자산을 투자하기에 망설여지시는 분들을 위해
            <br />
            주식API를 이용하여 실제 장 상황을 체험하고,
            <br />
            보다 쉽고 재밌게 주식 투자 경험을 할 수 있는 모의투자 애플리케이션입니다.🤗
          </div>
        </div>
      </div>

      {/* 팀명, 진행 기간, 개발환경 */}
      <div className={`${styles.projectText}`}>
        <div>팀 명</div>
        <div>OB</div>
      </div>
      <div className={`${styles.projectText}`}>
        <div>진행 기간</div>
        <div>2023년 05월 15일 ~ 2023년 06월 23일</div>
      </div>

      {/* 개발환경부분 보류 */}
      {/* <div className={`${styles.projectEnv}`}>
        <div>개발 환경</div>
        <Image src={pokeXdigi_env} alt="POKE X DIGI Develop's env" width={400} height={400} />
      </div> */}

      <div className={`${styles.projectPlayer}`}>
        <div>시연 영상</div>
        <ReactPlayer url="https://youtu.be/5CzOYe78M_g" className={styles.projectPlay} />
      </div>
    </div>
  );
};
