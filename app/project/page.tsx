"use client";

import Link from "next/link";
import styles from "../../styles/page.module.css";
import { PokeXDigi } from "../component/PokeXDigi";
import { useEffect, useState } from "react";
import { JamStock } from "../component/Jamstock";
import { Mucbo } from "../component/Mucbo";

export default function Page() {
  const [project, setProject] = useState("PokeXDigi");

  const projectName = () => {
    if (project === "PokeXDigi") {
      return <PokeXDigi />;
    } else if (project === "JamStock") {
      return <JamStock />;
    } else if (project === "Mucbo") {
      return <Mucbo />;
    } else {
      return <div>뭔데 이건</div>;
    }
  };

  return (
    <>
      <div className={`${styles.topBox} ${styles.flexRowCenter}`}>
        <div
          className={styles.whiteSmallCap}
          onClick={() => {
            history.go(-1);
          }}
        ></div>
        <Link className={styles.blueSmallCap} href="/"></Link>
      </div>
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
        </div>
        {projectName()}
      </div>
    </>
  );
}
