import styles from "./MyFooter.module.css";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
const MyFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>© Created by DONY</div>

      <div className={styles.icon_container}>
        <div className={styles.icon}>
          <a className={styles.atag} href="/contact">
            <MdEmail size={"1.8rem"} />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            className={styles.atag}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/pado232"
          >
            <FaGithub size={"1.8rem"} />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            className={styles.atag}
            target="_blank"
            rel="noreferrer"
            href="https://www.notion.so/Front-End-RoadMap-82dea5a40b38410f8d2432d6491caafe"
          >
            <SiNotion size={"1.8rem"} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
