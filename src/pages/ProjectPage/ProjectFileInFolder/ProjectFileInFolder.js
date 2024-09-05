import React, { useState } from "react";
import styles from "./ProjectFileInFolder.module.css";
import MyModal from "../../../components/utils/MyModal/MyModal";
import ProjectImage from "../ProjectImage/ProjectImage";
import ProjectDetails from "../../ProjectPage/ProjectDetails/ProjectDetails";
import { useProject } from "../../../root/store/reducers/ProjectContext";

const ProjectFileInFolder = ({ projectKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const project = useProject();
  const projectDetails = project.projects[projectKey];

  if (!projectDetails) {
    return <div>No project details available...</div>; // 프로젝트가 없을 경우 메시지 표시
  }

  const hasImages = projectDetails.images && projectDetails.images.length > 0;

  return (
    <div className={styles.ProjectFileInFolder}>
      <div className={styles.detail_container}>
        {/* 요약 글 */}
        <div>
          <p className={styles.summary}>{projectDetails.summary}</p>
        </div>

        {/* 이미지 컴포넌트 */}
        {hasImages ? (
          projectDetails.images.length > 1 ? (
            <ProjectImage pageImages={projectDetails.images} />
          ) : (
            <div className={styles.img_box}>
              <img
                className={styles.screen}
                src={projectDetails.images[0].src}
                alt={projectDetails.images[0].name}
              />
            </div>
          )
        ) : (
          <div>No Images Available</div> // 이미지가 없을 경우 메시지 표시
        )}

        <div>
          <div className={styles.button_box}>
            <button className={styles.more} onClick={() => setIsOpen(true)}>
              자세히 보기
            </button>
          </div>
          <MyModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
            {/* 모달 안 컴포넌트 */}
            <ProjectDetails projectKey={projectKey} />
          </MyModal>
        </div>
      </div>
    </div>
  );
};

export default ProjectFileInFolder;
