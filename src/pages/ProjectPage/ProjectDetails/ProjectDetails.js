import React from "react";
import { useSelector } from "react-redux";
import ProjectLink from "../ProjectLink/ProjectLink";
import styles from "./ProjectDetails.module.css";

const ProjectDetails = ({ projectKey }) => {
  const projectDetails = useSelector((state) => state.projects[projectKey]);

  if (!projectDetails) {
    return <div>Loading...</div>; // projectDetails가 없을 경우 로딩 상태를 표시
  }

  const renderAddText = (addText = []) => {
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

  const renderDetailsExp = (detailsExp = []) => {
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

  const renderDetailsTech = (detailsTech = []) => {
    return (
      <table className={styles.tech_table}>
        <thead>
          <tr>
            {detailsTech.map((item, index) => (
              <th key={index}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {detailsTech.map((item, index) => (
              <td key={index}>
                <div className={styles.tech_img_container}>
                  {item.type.map((type, i) => (
                    <div key={i} className={styles.tech_img_box}>
                      {type.src ? (
                        <img
                          className={styles.tech_img}
                          src={type.src}
                          alt={`${item.title} Logo ${i + 1}`}
                        />
                      ) : (
                        <></>
                      )}
                      <p className={styles.tech_name}>{type.name}</p>
                    </div>
                  ))}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className={styles.ProjectDetails}>
      <ProjectLink projectKey={projectKey} />
      {/* ProjectLink 컴포넌트를 추가합니다 */}

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

      <div className={styles.tech_container}>
        <h4 className={styles.h4}>기술</h4>
        {renderDetailsTech(projectDetails.detailsTech)}
      </div>

      <h4 className={styles.h4}>상세 정보</h4>
      <div className={styles.container}>
        <div className={styles.content_container}>
          {renderDetailsExp(projectDetails.detailsExp)}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
