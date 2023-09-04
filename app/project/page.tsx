"use client";

import Link from "next/link";
import styles from "../../styles/page.module.css";
// import Image from "next/image";
// import pokeXdigi from "../../Utils/pokeXdigi.png";
// import pokeXdigi_env from "../../Utils/pokeXdigi_dev_env.png";
import { PokeXDigi } from "./component/PokeXDigi";
import { useEffect, useState } from "react";

export default function Page() {
  const [project, setProject] = useState("PokeXDigi");

  const projectName = () => {
    if (project === "PokeXDigi") {
      return <PokeXDigi />;
    } else if (project === "JamStock") {
      return <div>JamStock</div>;
    } else if (project === "Mucbo") {
      return <div>오리오랜만</div>;
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
      <div className={`${styles.bottom} ${styles.flexColumnCenter}`}>
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
