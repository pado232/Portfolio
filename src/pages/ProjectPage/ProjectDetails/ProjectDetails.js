import React from "react";
import { useSelector } from "react-redux";
import ProjectLink from "../ProjectLink/ProjectLink";
import styles from "./ProjectDetails.module.css";

const ProjectDetails = ({ projectKey }) => {
  const projectDetails = useSelector((state) => state.projects[projectKey]);

  if (!projectDetails) {
    return <div>Loading...</div>; // projectDetails가 없을 경우 로딩 상태를 표시
  }

  const renderAddText = (addText) => {
    return addText.map((item, index) => (
      <tr key={index}>
        <td>
          <div className={styles.title}>{item.title}</div>
        </td>
        <td>
          {item.content.map((content, i) => (
            <div className={styles.content} key={i}>
              {content}
            </div>
          ))}
        </td>
      </tr>
    ));
  };

  const renderDetailsExp = (detailsExp) => {
    return detailsExp.map((item, index) => (
      <div key={index} className={styles.content_box}>
        <div className={styles.img_box}>
          <img
            className={styles.screen}
            src={process.env.PUBLIC_URL + item.src}
            alt={item.title}
          />
        </div>
        <h3 className={styles.title}>{item.title}</h3>
        <div className={styles.detail}>
          {item.content.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.ProjectDetails}>
      {projectDetails.detailsInfo.map((detail, index) => (
        <div key={index}>
          <h4 className={styles.h4}>상세 정보</h4>
          <table className={styles.table}>
            <colgroup style={{ width: 150 }} />
            <colgroup style={{ width: "auto" }} />
            <tbody>{renderAddText(detail.addText)}</tbody>
          </table>
        </div>
      ))}
      <div className={styles.container}>
        <div className={styles.content_container}>
          {renderDetailsExp(projectDetails.detailsExp)}
        </div>
      </div>
      <ProjectLink linkData={projectDetails.link} />{" "}
      {/* ProjectLink 컴포넌트를 추가합니다 */}
    </div>
  );
};

export default ProjectDetails;
