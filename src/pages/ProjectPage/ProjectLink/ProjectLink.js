import React from "react";
import { useSelector } from "react-redux";
import styles from "./ProjectLink.module.css";

const ProjectLink = ({ projectKey }) => {
  const projectDetails = useSelector((state) => state.projects[projectKey]);
  const linkData = projectDetails ? projectDetails.link : [];

  return (
    <div className={styles.ProjectLink}>
      <div className={styles.content_container}>
        <table className={styles.table}>
          <colgroup style={{ width: 200 }} />
          <colgroup style={{ width: "auto" }} />
          <tbody>
            {linkData.map((link, index) => (
              <tr key={index}>
                <td>
                  <div className={styles.icon}>
                    {link.isIcon ? (
                      link.srcOrIcon
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
                      href={link.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.linkUrl}
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
