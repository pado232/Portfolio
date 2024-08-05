import React from "react";
import { useSelector } from "react-redux";
import styles from "./ProjectLink.module.css";

const ProjectLink = ({ projectKey }) => {
  const projectDetails = useSelector(
    (state) => state.project.projects[projectKey]
  );
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
                      React.isValidElement(link.srcOrIcon) ? (
                        React.createElement(link.srcOrIcon, { size: "2rem" })
                      ) : (
                        <div>
                          <strong>{link.title}</strong>
                        </div> // 아이콘이 유효하지 않은 경우
                      )
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
                      {link.linkUrl || "No URL provided"}
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
