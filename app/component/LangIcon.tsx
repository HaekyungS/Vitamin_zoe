import styles from "../../styles/page.module.css";
import Image from "next/image";

export const LangIcon = () => {
  return (
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
  );
};
