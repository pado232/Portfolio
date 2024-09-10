import React, { useMemo } from "react";
import ProjectLink from "../ProjectLink/ProjectLink";
import lightStyles from "./ProjectDetails.module.css";
import darkStyles from "./ProjectDetailsD.module.css";
import { useTheme } from "../../../ThemeContext/ThemeContext";
import { useProject } from "../../../root/store/reducers/ProjectContext";
import { FaRegHandPointRight } from "react-icons/fa";

const ProjectDetails = ({ projectKey }) => {
  const [theme] = useTheme();
  const styles = useMemo(
    () => (theme === "light" ? lightStyles : darkStyles),
    [theme]
  );
  const project = useProject();
  const projectDetails = project.projects[projectKey];

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  const renderAddText = (detailsInfo = []) =>
    detailsInfo.length === 0
      ? null
      : detailsInfo.map((detail) => (
          <DetailInfo key={detail.id} detail={detail} styles={styles} />
        ));

  const renderDetailsExp = (detailsExp = []) => (
    <DetailsExp detailsExp={detailsExp} styles={styles} />
  );

  const renderDetailsTech = (detailsTech = []) => (
    <DetailsTech detailsTech={detailsTech} styles={styles} />
  );

  const renderDetailsTechMin = (detailsTech = []) => (
    <DetailsTechMin detailsTech={detailsTech} styles={styles} />
  );

  return (
    <div className={styles.ProjectDetails}>
      <ProjectLink projectKey={projectKey} />
      {projectDetails.detailsInfo &&
        projectDetails.detailsInfo.length > 0 &&
        renderAddText(projectDetails.detailsInfo)}
      <div className={styles.tech_container}>
        {projectDetails.detailsTech &&
          projectDetails.detailsTech.length > 0 &&
          renderDetailsTech(projectDetails.detailsTech)}
      </div>
      <div className={styles.tech_container_min}>
        {projectDetails.detailsTech &&
          projectDetails.detailsTech.length > 0 &&
          renderDetailsTechMin(projectDetails.detailsTech)}
      </div>
      {projectDetails.detailsExp &&
        projectDetails.detailsExp.length > 0 &&
        renderDetailsExp(projectDetails.detailsExp)}
    </div>
  );
};

const DetailInfo = ({ detail, styles }) => (
  <div className={styles.container}>
    <h4 className={styles.h4}>상세 정보</h4>
    <table className={styles.table}>
      <colgroup style={{ maxWidth: "8rem", width: "25%" }} />
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
);

const DetailsExp = ({ detailsExp, styles }) => (
  <div className={styles.container}>
    <h4 className={styles.h4}>상세 내용</h4>
    <div className={styles.content_container}>
      {detailsExp.map((item, index) => (
        <div key={index} className={styles.content_box}>
          <div className={styles.img_box}>
            {item.src && (
              <img
                className={styles.screen}
                src={process.env.PUBLIC_URL + item.src}
                alt={item.title}
              />
            )}
          </div>
          <h3 className={styles.title}>{item.title}</h3>
          <div className={styles.detail}>
            {item.content.map((line, idx) => (
              <div key={idx} className={styles.detail_context}>
                <div>
                  <FaRegHandPointRight />
                </div>
                <p>{line}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DetailsTech = ({ detailsTech, styles }) => (
  <div className={styles.container}>
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
                    {type.src && (
                      <img
                        className={styles.tech_img}
                        src={type.src}
                        alt={`${item.title} Logo ${idx + 1}`}
                      />
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

const DetailsTechMin = ({ detailsTech, styles }) => {
  return (
    <div>
      <h4 className={styles.h4}>기술</h4>
      {detailsTech.map((item, index) => (
        <div className={styles.tech_min}>
          <strong key={index}>{item.title}</strong>
          {item.type.map((type, i) => (
            <div key={i}>
              <p className={styles.tech_name}>{type.name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
