import React from "react";
import styles from "./ProjectLink.module.css";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { useProject } from "../../../root/store/reducers/ProjectContext";

const icons = {
  Github: <FaGithub size={"2rem"} />,
  Notion: <SiNotion size={"2rem"} />,
};

const ProjectLink = ({ projectKey }) => {
  const project = useProject();
  const projectDetails = project.projects[projectKey];

  // 프로젝트 데이터를 콘솔에 출력하여 확인
  console.log("projectDetails:", projectDetails);

  const linkData = projectDetails ? projectDetails.link : [];

  return (
    <div className={styles.ProjectLink}>
      {linkData.map((link, index) => (
        <div className={styles.box} key={index}>
          <div className={styles.logo}>
            <div className={styles.icon}>
              {link.isIcon ? (
                icons[link.title] // 아이콘 이름에 해당하는 컴포넌트를 렌더링
              ) : (
                <img
                  className={styles.image}
                  src={link.srcOrIcon}
                  alt="Link Icon"
                />
              )}
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.link_warpper}>
              <p>
                <a
                  className={styles.a}
                  href={link.linkUrl || "#"} // 유효하지 않은 경우 기본 링크로 설정
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.linkUrl || "No URL provided"}
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectLink;
