import React from "react";
import Image from "next/image";
import styles from "../../styles/page.module.css";
import mucbo from "../../Utils/mucbo.png";
import ReactPlayer from "react-player";
import Link from "next/link";

export const Mucbo = () => {
  return (
    <div className={`${styles.projectBox} ${styles.flexColumnCenter}`}>
      {/* 프로젝트 소개 */}
      <div className={`${styles.flexRowCenter} ${styles.projectInfoBox}`}>
        <Image src={mucbo} alt="jamstock" width={200} height={200} />
        <div className={`${styles.projectInfo}`}>
          <p className={`${styles.projectName}`}>먹보의 하루</p>
          <Link href="https://github.com/HaekyungS/KDT-2-Project-B-1">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="Github"
              width={50}
              height={50}
            />
          </Link>
          <div className={`${styles.projectDetail}`}>
            '먹보'라는 먹을 걸 좋아하는 아이가 각 지역의 대표 음식을 알려주고
            <br />
            원하는 지역의 원하는 음식 맛집을 알려주며,
            <br />
            선택한 맛집까지의 길을 안내해주는 네비게이션 애플리케이션입니다.😋
          </div>
        </div>
      </div>

      {/* 팀명, 진행 기간, 개발환경 */}
      <div className={`${styles.projectText}`}>
        <div>팀 명</div>
        <div>
          행세다
          <br />
          (행복한세상의다람쥐)
        </div>
      </div>
      <div className={`${styles.projectText}`}>
        <div>진행 기간</div>
        <div>2023년 06월 22일 ~ 2023년 07월 06일</div>
      </div>

      {/* 개발환경부분 보류 */}
      {/* <div className={`${styles.projectEnv}`}>
        <div>개발 환경</div>
        <Image src={pokeXdigi_env} alt="POKE X DIGI Develop's env" width={400} height={400} />
      </div> */}

      <div className={`${styles.projectPlayer}`}>
        <div>시연 영상</div>
        <ReactPlayer
          url="https://youtube.com/shorts/RVVr-FVe6H8?feature=share"
          className={styles.projectPlay}
        />
      </div>
    </div>
  );
};
