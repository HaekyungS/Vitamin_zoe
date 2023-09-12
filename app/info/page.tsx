"use client";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import photo from "../../Utils/230910.jpg";
import gmail from "../../Utils/gmail.png";
import notion from "../../Utils/notion.png";
import React from "react";
import { LangIcon } from "../component/LangIcon";
import { Tools } from "../component/Tools";

export default function Page() {
  return (
    <>
      {/* 상단에 작은 캡슐모양 */}
      <div className={`${styles.topBox} ${styles.flexRowCenter}`}>
        <div
          className={styles.whiteSmallCap}
          onClick={() => {
            history.go(-1);
          }}
        />
        <Link className={styles.blueSmallCap} href="/" />
      </div>

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
            <div className={`${styles.infoTableRowOne}`}>출시년월</div>
          </div>
          <div className={`${styles.infoTableRow} ${styles.flexRowCenter}`}>
            <div className={`${styles.infoTableRowTwo}`}>
              <Image
                src={photo}
                alt="zoe's picture"
                draggable={false}
                className={styles.infoTableImg}
              />
            </div>
            <div className={styles.infoTableRowTwo}>
              성해경
              <br />
              (Haekyung Seong)
            </div>
            <div className={`${styles.infoTableRowTwo}`}>2023년 07월 18일</div>

            {/* 클릭 시, 수료증 사진이 나오도록 클릭 버튼 만들기 */}
          </div>
        </div>

        {/* 간단소개 */}
        <h2>약품 인사말🖐️</h2>
        <div className={styles.infoTitle}>
          비타민처럼 같이 일하는 사람에게도 제가 만드는 것들에도 힘이 되고 싶은
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

        {/* 사용가능 언어 및 업무툴 */}
        <div className={`${styles.infoLang} ${styles.flexcolumnCenter}`}>
          <h2 className={styles.infoLangTitle}>이 약품이 사용가능한 언어 및 업무툴👩‍💻</h2>
          <div className={`${styles.flexRowCenter}`}>
            {/* 사용 가능 언어 */}
            <LangIcon />

            {/* 업무 툴 */}
            <Tools />
          </div>
        </div>

        {/* 특징부분 */}
        {/* 특징적 이미지들을 찾아서 옆에 넣고 양쪽 교차 방식으로. */}
        <div className={`${styles.infoSpec} ${styles.marginTwo}`}>
          <h2>약품 특이사항</h2>
          <ul>
            <li className={`${styles.textLeft}`}>
              <span>카멜레온을 뺨치는 빠른 적응력</span>
              <br />
              일에 대한 업무 파악은 물론이고 장소, 사람에 대해서도 적응이 빠릅니다.
              <br />
              그로인해 잠깐 알았는데도 장기간 알고 지낸 느낌이 듭니다.
            </li>
            <li className={styles.textRight}>
              <span>민달팽이같은 유연함</span>
              <br />
              사람들과 협업함에 있어 의견 수용 등에 대하여
              <br />
              굉장히 유연한 사고력을 가지고 있어
              <br />
              대화를 통한 원활한 의견 소통에 용이합니다.
            </li>
            <li className={styles.textLeft}>
              <span>늑대같은 책임감</span>
              <br />한 번 내 손에 들어온 일이면 일이 마무리된 후까지도
              <br />
              진행 사항을 확인하며, 끝난 뒤까지 책임집니다.
              <br />제 손을 떠났다고 제 것이 아닌 게 아니니까요.
            </li>
          </ul>
        </div>

        {/* 부작용 부분 */}
        <div className={`${styles.marginTwo}`}>
          <h2>부작용</h2>
          <p>
            다음과 같은 부작용이 있을 수 있습니다.
            <br />
            투약으로 인해 발생하는 부작용에 대해서는 책임지지 않습니다.
          </p>
          <ol className={styles.listTypeNone}>
            <li className={styles.textLeft}>
              <span>"든 자리는 몰라도 난 자리는 안다"</span> 를 체감 가능하십니다.
              <br />
              고작 사람 하나 없는데 허전하고 조용하여 심심함을 느낄 수 있습니다.
            </li>
            <li className={styles.textRight}>
              특이사항처럼 장기간 알고 지낸 느낌때문에 자꾸 생각납니다.
              <br />
              본 부작용은, 전직장 팀장님 등 동료분들, 여행 중 알게된 동행자, 친구 등 다양한 사례로
              증명된 부작용입니다.
              <br />
              잠깐 같이 있었는데도 친근하고 오랜 기간 알고지낸 느낌 뿐 아니라 자꾸 생각난다 합니다.
            </li>
          </ol>
        </div>

        {/* 컨택포인트 */}
        <div className={`${styles.infoContact}`}>
          <h2>이 약품에 대해 더 알고싶다면</h2>
          <div>
            <Link href="https://github.com/HaekyungS" target="_blank">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Github"
                width={50}
                height={50}
              />
            </Link>
            <Link
              href="https://foul-rice-892.notion.site/Project-69425c2d126f4af28d8763c1b5a5d085?pvs=4"
              target="_blank"
            >
              <Image src={notion} alt="Notion" width={50} height={50} />
            </Link>
          </div>
          <div>
            <h3>투약하고 싶다면 자유롭게 메일로 연락주세요📨</h3>
            <div className={styles.font18}>
              <Image src={gmail} alt="Notion" width={15} height={15} /> haekyungs95@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
