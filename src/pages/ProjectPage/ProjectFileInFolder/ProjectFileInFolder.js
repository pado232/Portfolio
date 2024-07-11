import { useState } from "react";
import styles from "./ProjectFileInFolder.module.css";
import MyModal from "../../../components/utils/MyModal/MyModal";
import ProjectImage from "../ProjectImage/ProjectImage";

const TeamProject = ({ teamProjectDetails }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.TeamProject}>
      <div className={styles.detail_container}>
        {/* 요약 글*/}
        <div className={styles.summary}>{teamProjectDetails.summary}</div>

        {/* 이미지 컴포넌트 */}

        {/* 이미지가 하나라면 패스 이미지가 여러개라면 컴포넌트 실행하게 하자*/}
        {teamProjectDetails.imageComponent ? (
          // <div><ProjectImage/></div>
          <div>{teamProjectDetails.imageComponent}</div>
        ) : (
          <div className={styles.img_box}>
            <img
              className={styles.screen}
              src={teamProjectDetails.src}
              alt={``}
            />
          </div>
        )}

        <div>
          <div className={styles.button_box}>
            <button className={styles.more} onClick={() => setIsOpen(true)}>
              More
            </button>
          </div>
          <MyModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
            {/*  모달 안 컴포넌트 */}
            <div style={{ margin: 50 }}> {teamProjectDetails.component}</div>
          </MyModal>
        </div>
      </div>
    </div>
  );
};

export default TeamProject;
