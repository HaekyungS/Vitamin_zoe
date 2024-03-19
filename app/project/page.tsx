"use client";

import Link from "next/link";
import styles from "../../styles/page.module.css";
import { PokeXDigi } from "../component/PokeXDigi";
import { useEffect, useState } from "react";
import { JamStock } from "../component/Jamstock";
import { Mucbo } from "../component/Mucbo";
import { MiniCapsule } from "../component/MiniCapsule";
import { HbdRyu } from "../component/HbdRyu";

export default function Page() {
  const [project, setProject] = useState("PokeXDigi");

  const projectName = () => {
    if (project === "PokeXDigi") {
      return <PokeXDigi />;
    } else if (project === "JamStock") {
      return <JamStock />;
    } else if (project === "Mucbo") {
      return <Mucbo />;
    } else if (project === "HbdRyu") {
      return <HbdRyu />;
    } else {
      return <div>뭔데 이건</div>;
    }
  };

  return (
    <>
      {/* 상단 작은캡슐부분 */}
      <MiniCapsule />

      {/* 프로젝트 카테고리 */}
      <div className={`${styles.bottomProject} ${styles.flexColumnCenter}`}>
        <div className={`${styles.flexRowSAround} ${styles.projectTap}`}>
          <div
            onClick={() => {
              setProject("PokeXDigi");
            }}
          >
            POKE X DIGI
          </div>
          <div
            onClick={() => {
              setProject("JamStock");
            }}
          >
            JamStock
          </div>
          <div
            onClick={() => {
              setProject("Mucbo");
            }}
          >
            먹보의 하루
          </div>
          <div
            onClick={() => {
              setProject("HbdRyu");
            }}
          >
            류 모의고사
          </div>
        </div>
        {/* 프로젝트 내용부분 */}
        {projectName()}
      </div>
    </>
  );
}
