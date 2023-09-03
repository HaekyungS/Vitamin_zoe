"use client";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import photo from "../../Utils/230910.jpg";
import gmail from "../../Utils/gmail.png";
import notion from "../../Utils/notion.png";
import React from "react";

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
      <div className={`${styles.bottom} ${styles.flexColumnCenter}`}>
        <h2>비타민 "성해경" 신상 정보</h2>

        {/* 사진, 이름, 출시일 */}
        <div className={`${styles.flexRowSAround} ${styles.infoTable}`}>
          <div>
            <p>약품 사진</p>
            <Image
              src={photo}
              width={170}
              height={200}
              alt="zoe's picture"
              draggable={false}
              // className={styles.image}
            />
          </div>
          <div>
            <p>
              약품명
              <br />
              (영문명)
            </p>
            <div>
              성해경
              <br />
              (Haekyung Seong)
            </div>
          </div>
          <div>
            <p>출시년월</p>
            <div>2023년 07월 18일</div>
            {/* 클릭 시, 수료증 사진이 나오도록 클릭 버튼 만들기 */}
          </div>
        </div>

        {/* 사용가능 언어 및 업무툴 */}
        <div className={`${styles.infoLang} ${styles.flexRowCenter}`}>
          {/* 사용 가능 언어 */}
          <div className={styles.lang}>
            <h3 className={styles.langTitle}>사용 가능 언어</h3>
            <div className={styles.langBox}>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="Javascript"
                width={50}
                height={50}
                className={styles.marginLeft}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="Typescript"
                width={50}
                height={50}
              />
              <br />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                alt="NodeJS"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="NextJS"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="express"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                alt="webpack"
                width={50}
                height={50}
              />
              <br />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
                alt="Android"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
                alt="Socket.io"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                alt="AWS"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="GIT"
                width={50}
                height={50}
              />
            </div>
          </div>

          {/* 업무 툴 */}
          <div className={styles.lang}>
            <h3 className={styles.langTitle}>사용 가능 업무툴</h3>
            <div className={`${styles.langBox} ${styles.flexRowCenter}`}>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Github"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="VSCode"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
                alt="Android Studio"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                alt="Figma"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
                alt="Slack"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* 특징부분 */}
        <div>
          <h3>특 징</h3>
          <p>다음과 같은 특징이 있습니다.</p>
          <ol>
            <li>
              카멜레온을 뺨치는 빠른 적응력
              <br />
              일에 대한 업무 파악은 물론이고 장소, 사람에 대해서도 적응이 빨라 잠깐 알았는데 장기간
              알고 지낸 느낌이 듭니다.
            </li>
            <li>
              민달팽이같은 유연함
              <br />
              사람들과 협업함에 있어 의견 수용 등에 대해 굉장히 유연한 사고력을 가지고 있어 편안히
              대화를 통해 의견을 소통함에 원활합니다.
            </li>
            <li>
              늑대같은 책임감
              <br />한 번 내 손에 들어온 일이면 일이 마무리된 후까지도 진행 사항을 확인하며, 끝난
              뒤까지 책임집니다.
            </li>
          </ol>
        </div>

        {/* 부작용 부분 */}
        <div>
          <h3>부작용</h3>
          <p>
            다음과 같은 부작용이 있을 수 있습니다. 투약으로 인해 발생하는 부작용에 대해서는 책임지지
            않습니다.
          </p>
          <ol className={styles.listTypeNone}>
            <li>
              "든 자리는 몰라도 난 자리는 안다" 를 체감 가능하십니다.
              <br />
              고작 사람 하나 없는데 허전하고 조용해서 심심함을 느낄 수 있습니다.
            </li>
          </ol>
        </div>
        {/* 컨택포인트 */}
        <div>
          <h2>좀 더 알고 싶다면!</h2>
          <div>
            <Link href="https://github.com/HaekyungS">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Github"
                width={50}
                height={50}
              />
            </Link>
            <Link href="https://foul-rice-892.notion.site/Project-69425c2d126f4af28d8763c1b5a5d085?pvs=4">
              <Image src={notion} alt="Notion" width={50} height={50} />
            </Link>
            <div>
              <Image src={gmail} alt="Notion" width={15} height={15} />
              haekyungs95@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
