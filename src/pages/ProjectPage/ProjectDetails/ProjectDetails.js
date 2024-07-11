import React from "react";
import ProjectLink from "../ProjectLink/ProjectLink";
import styles from "./ProjectDetails.module.css";
import teamProjects from "./DetailData/teamProjects.json";
import teamProjectDetails from "./DetailData/teamProjectDetails.json";

const ProjectDetails = () => {
  return (
    <div className={styles.ProjectDetails}>
      {/* <p className={styles.detail}>
        2024년 12월을 시작으로 7개월에 걸쳐 제작한 코스메틱 웹 사이트입니다.
        상품 목록을 조회, 결제할 수 있고, Route를 이용한 페이지 이동을 구현하고,
        bar 메뉴의 카테고리 선택과 header의 상품명 검색에 모든 페이지에서
        나타나고 동작합니다.
      </p> */}
      <ProjectLink />

      {teamProjectDetails.map((detail, index) => (
        <div key={index}>
          <h4 className={styles.h4}> 상세 정보</h4>
          <table className={styles.table}>
            <colgroup style={{ width: 150 }} />
            <colgroup style={{ width: "auto" }} />
            <tbody>
              {detail.addText.map((add, index) => (
                <tr key={index}>
                  <td>
                    <div className={styles.title}>{add.title}</div>
                  </td>
                  <td>
                    {add.content.map((content, i) => (
                      <div className={styles.content} key={i}>
                        {content}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div className={styles.container}>
        <div className={styles.content_container}>
          {teamProjects.map((project, index) => (
            <div className={styles.content_box} key={index}>
              <div className={styles.img_box}>
                <img
                  className={styles.screen}
                  src={process.env.PUBLIC_URL + project.src}
                  alt={`Screen ${index + 1}`}
                />
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <div className={styles.detail}>
                {project.content.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
