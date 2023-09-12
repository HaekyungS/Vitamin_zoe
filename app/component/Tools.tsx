import styles from "../../styles/page.module.css";
import Image from "next/image";

export const Tools = () => {
  return (
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
  );
};
