import React from "react";
import { useSelector } from "react-redux";
import styles from "./ProjectLink.module.css";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const icons = {
  Github: <FaGithub size={"2rem"} />,
  Notion: <SiNotion size={"2rem"} />,
};

const ProjectLink = ({ projectKey }) => {
  const projectDetails = useSelector(
    (state) => state.project.projects[projectKey]
  );

  // 프로젝트 데이터를 콘솔에 출력하여 확인
  console.log("projectDetails:", projectDetails);

  const linkData = projectDetails ? projectDetails.link : [];

  return (
    <div className={styles.ProjectLink}>
      <div className={styles.content_container}>
        <table className={styles.table}>
          <colgroup style={{ width: "12.5rem" }} />
          <colgroup style={{ width: "auto" }} />
          <tbody>
            {linkData.map((link, index) => (
              <tr key={index}>
                <td className={styles.logo_td}>
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
                </td>
                <td className={styles.link_td}>
                  <div className={styles.link_warpper}>
                    <a
                      className={styles.a}
                      href={link.linkUrl || "#"} // 유효하지 않은 경우 기본 링크로 설정
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{link.linkUrl || "No URL provided"}</p>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectLink;
