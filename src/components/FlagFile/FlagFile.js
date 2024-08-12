import React, { useState } from "react";
import styles from "./FlagFile.module.css";
import ProjectFileInFolder from "../../pages/ProjectPage/ProjectFileInFolder/ProjectFileInFolder";
import { useProject } from "../../root/store/reducers/ProjectContext";

const FlagFile = ({ projectKeys }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const projectType = useProject("projects");
  const projects = projectType.projects;
  // console.log("projectKeys", projectKeys);
  // console.log("projects", projects);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const flagTitles = projectKeys.map((key) => ({
    title: projects[key]?.title || "No Title", // 프로젝트 데이터가 없을 때 기본값 설정
    component: <ProjectFileInFolder projectKey={key} />,
  }));

  return (
    <div className={styles.FlagFile}>
      <div className={styles.container}>
        <ul className={styles.ul}>
          {flagTitles.map((flag, index) => (
            <div
              key={index}
              className={
                selectedIndex === index
                  ? `${styles.li_box} ${styles.selected}`
                  : flagTitles.length - 1 === index
                  ? `${styles.li_box} ${styles.none}`
                  : styles.li_box
              }
              onClick={() => handleClick(index)}
            >
              <div className={styles.li_shape}>
                <li className={styles.li}>{flag.title}</li>
              </div>
            </div>
          ))}
        </ul>
        <div className={styles.content_container}>
          <center>
            <h2 className={styles.content_title}>
              {selectedIndex !== null && flagTitles[selectedIndex].title}
            </h2>
          </center>

          <div className={styles.content}>
            {selectedIndex !== null && flagTitles[selectedIndex].component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagFile;
