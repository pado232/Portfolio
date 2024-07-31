import React from "react";
import { useSelector } from "react-redux";
import ProjectLink from "../ProjectLink/ProjectLink";
import styles from "./ProjectDetails.module.css";

const ProjectDetails = ({ projectKey }) => {
  const projectDetails = useSelector(
    (state) => state.project.projects[projectKey]
  );

  if (!projectDetails) {
    return <div>Loading...</div>; // projectDetails가 없을 경우 로딩 상태를 표시
  }
  const renderAddText = (detailsInfo = []) => {
    if (detailsInfo.length === 0) {
      return null;
    }

    return detailsInfo.map((detail, index) => (
      <div key={index}>
        <h4 className={styles.h4}>상세 정보</h4>
        <table className={styles.table}>
          <colgroup style={{ width: "10rem" }} />
          <colgroup style={{ width: "auto" }} />
          <tbody>
            {detail.addText.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <div className={styles.title}>{item.title}</div>
                </td>
                <td>
                  {item.content.map((content, cIdx) => (
                    <p key={cIdx} className={styles.content}>
                      {content}
                    </p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ));
  };

  const renderDetailsExp = (detailsExp = []) => {
    if (detailsExp.length === 0) {
      return null;
    }

    return (
      <div>
        <h4 className={styles.h4}>상세 내용</h4>
        <div className={styles.content_container}>
          {detailsExp.map((item, index) => (
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
          ))}
        </div>
      </div>
    );
  };

  const renderDetailsTech = (detailsTech = []) => {
    if (detailsTech.length === 0) {
      return null;
    }

    return (
      <div>
        <h4 className={styles.h4}>기술</h4>
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
                    {item.type.map((type, idx) => (
                      <div key={idx} className={styles.tech_img_box}>
                        {type.src ? (
                          <img
                            className={styles.tech_img}
                            src={type.src}
                            alt={`${item.title} Logo ${idx + 1}`}
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
      </div>
    );
  };

  const renderDetailsTechMin = (detailsTech = []) => {
    if (detailsTech.length === 0) {
      return null;
    }
    return (
      <div>
        <h4 className={styles.h4}>기술</h4>
        {detailsTech.map((item, index) => (
          <div className={styles.tech_min}>
            <strong key={index}>{item.title}</strong>
            {item.type.map((type, idx) => (
              <div key={idx}>
                <p className={styles.tech_name}>{type.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.ProjectDetails}>
      {/** 링크 */}

      <ProjectLink projectKey={projectKey} />

      {/** 상세 정보 */}

      {renderAddText(projectDetails.detailsInfo)}

      {/** 기술 */}

      {/** 큰 화면 기술 모드 */}
      <div className={styles.tech_container}>
        {renderDetailsTech(projectDetails.detailsTech)}
      </div>
      {/** 작은 화면 기술 모드 */}
      <div className={styles.tech_container_min}>
        {renderDetailsTechMin(projectDetails.detailsTech)}
      </div>

      {/** 상세 내용 */}

      {renderDetailsExp(projectDetails.detailsExp)}
    </div>
  );
};

export default ProjectDetails;
