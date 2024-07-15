import React, { useRef, useEffect } from "react";
import styles from "./AboutMe.module.css";
import Container from "../../../../components/utils/Container/Container";

const AboutMe = () => {
  const tableTeamProject = [
    {
      title: "2024.07 ~",
      content: "Portfolio",
    },
    {
      title: "2024.03 ~ 2022.07",
      content:
        "'RealMoment' Shopping-mall Admin - 코스메틱 쇼핑몰 관리자 웹 사이트 (프론트 영역)",
    },
    {
      title: "2024.01 ~ 2024.07",
      content:
        "'RealMoment' Shopping-mall - 코스메틱 쇼핑몰 웹 사이트 (프론트 영역)",
    },
    {
      title: "2024.01 ~ 2022.01",
      content:
        "Emotion Diary - '한입 크기로 잘라먹는 리액트' 강의 실습 프로젝트 내용",
    },
  ];

  const tableEducation = [
    { title: "2017.03 ~ 2019.02", content: "대덕대학교 컴퓨터공학과" },
    {
      title: "2020.02 ~ 2022.02",
      content: "공주대학교 천안캠퍼스 정보통신공학과",
    },
  ];

  const tableCertificate = [{ title: "2024.06 ~ ", content: "정보처리 기사" }];

  const tableComponent = (tableContent) => {
    return (
      <table className={styles.table}>
        <colgroup style={{ minWidth: 180 }} />
        <colgroup style={{ width: "auto" }} />
        <tbody>
          {tableContent.map((table, index) => (
            <tr key={index}>
              <th>{table.title}</th>
              <td>{table.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <Container>
      <div className={styles.about_me}>
        <div className={styles.my_img}>
          <img
            src={process.env.PUBLIC_URL + `/images/myphoto.jpg`}
            alt="Profile"
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.h2}>Front Developer</h2>
          <h3 className={styles.h3}>1998 . 5 . 5</h3>
          <div>
            <p className={styles.p}>
              새로운 시도를 두려워하지 않는 프론트엔드 개발자가 되겠습니다.
            </p>
            <p className={styles.p}>
              꾸준히 쌓은 지식으로 강한 힘을 갖겠습니다. 성실함을 갖고 항상
              앞으로 나아가는 프론트엔드 개발자로 성장하겠습니다.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <h3 className={styles.category}>
          Projects
          <a className={styles.more} href={"/project"}>
            자세히 보기
          </a>
        </h3>
        {tableComponent(tableTeamProject)}
      </div>
      <div className={styles.more_box}></div>
      <div className={styles.table}>
        <h3 className={styles.category}>Certificate</h3>
        {tableComponent(tableCertificate)}
      </div>
      <div className={styles.table}>
        <h3 className={styles.category}>Education</h3>
        {tableComponent(tableEducation)}
      </div>
    </Container>
  );
};

export default AboutMe;
