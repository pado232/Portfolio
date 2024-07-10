import { useState } from "react";
import styles from "./TeamProject.module.css";
import MyModal from "../../../components/utils/MyModal/MyModal";

const TeamProject = ({ teamProjectDetails }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.TeamProject}>
      <div className={styles.detail_container}>
        <div className={styles.summary}>{teamProjectDetails.summary}</div>
        {teamProjectDetails.imageComponent ? (
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
            <div style={{ margin: 50 }}> {teamProjectDetails.component}</div>
          </MyModal>
        </div>
      </div>
    </div>
  );
};

export default TeamProject;
