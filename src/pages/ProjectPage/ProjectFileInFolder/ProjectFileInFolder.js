import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./ProjectFileInFolder.module.css";
import MyModal from "../../../components/utils/MyModal/MyModal";
import ProjectImage from "../ProjectImage/ProjectImage";
import ProjectDetails from "../../ProjectPage/ProjectDetails/ProjectDetails";

const ProjectFileInFolder = ({ projectKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const projectDetails = useSelector(
    (state) => state.project.projects[projectKey]
  );

  if (!projectDetails) {
    return <div>Loading...</div>; // projectDetails가 없을 경우 로딩 상태를 표시
  }

  return (
    <div className={styles.ProjectFileInFolder}>
      <div className={styles.detail_container}>
        {/* 요약 글 */}
        <div>
          <p className={styles.summary}>{projectDetails.summary}</p>
        </div>

        {/* 이미지 컴포넌트 */}
        {projectDetails.images.length > 1 ? (
          <ProjectImage pageImages={projectDetails.images} />
        ) : (
          <div className={styles.img_box}>
            <img
              className={styles.screen}
              src={projectDetails.images[0].src}
              alt={projectDetails.images[0].name}
            />
          </div>
        )}

        <div>
          <div className={styles.button_box}>
            <button className={styles.more} onClick={() => setIsOpen(true)}>
              자세히 보기
            </button>
          </div>
          <MyModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
            {/* 모달 안 컴포넌트 */}
            <div style={{ margin: "2rem" }}>
              <ProjectDetails projectKey={projectKey} />
            </div>
          </MyModal>
        </div>
      </div>
    </div>
  );
};

export default ProjectFileInFolder;
