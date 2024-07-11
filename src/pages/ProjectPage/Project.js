import Main from "../../components/Main/Main";
import ProjectImage from "./ProjectImage/ProjectImage";
import MenuSub from "../../components/MenuSub/MenuSub";
import { useRef, useState } from "react";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import FlagFile from "../../components/FlagFile/FlagFile";
import Container from "../../components/utils/Container/Container";
import styles from "./Project.module.css";
import ProjectFileInFolder from "./ProjectFileInFolder/ProjectFileInFolder";

import RealMomentPageImages from "./ProjectImage/pageImage/RealMomentPageImages.json";
import emotionPageImages from "./ProjectImage/pageImage/emotionPageImages.json";

// 폴더 안으로 들어갈 TeamProject 컴포넌트로 들어갈 값들
const RealMomentDetails = {
  src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/Home.png`,
  summary:
    " 2023년 12월을 시작으로 7개월에 걸쳐 제작한 코스메틱 웹 사이트입니다. 상품 목록을 조회, 결제할 수 있고, Route를 이용한 페이지 이동을 구현하고, bar 메뉴의 카테고리 선택과 header의 상품명 검색에 모든 페이지에서 나타나고 동작합니다.",
  component: <ProjectDetails />,
  imageComponent: <ProjectImage pageImages={RealMomentPageImages} />,
};
const RealMomentAdminDetails = {
  src: `${process.env.PUBLIC_URL}/images/Admin-Image/adminHome.png`,
  summary:
    " 2024년 3월을 시작으로 4개월에 걸쳐 제작한 코스메틱 웹 사이트에 적용할 값들을 추가, 삭제, 수정하기 위한 웹 사이트입니다. 모든 페이지는 로그인 되지 않으면 접근 할 수 없고 판매자가 사용자에게 필요한 이미지와 텍스트를 서버에 보내기 위해 사용할 수 있습니다.",
  component: <ProjectDetails />,
};
const portfolioDetails = {
  src: `${process.env.PUBLIC_URL}/images/Admin-Image/adminHome.png`,
  summary:
    " 2024년 7월을 시작으로 1개월에 걸쳐 제작한 코스메틱 웹 사이트에 적용할 값들을 추가, 삭제, 수정하기 위한 웹 사이트입니다. 모든 페이지는 로그인 되지 않으면 접근 할 수 없고 판매자가 사용자에게 필요한 이미지와 텍스트를 서버에 보내기 위해 사용할 수 있습니다.",
  component: <ProjectDetails />,
};
const emotionDiaryDetails = {
  src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/Home.png`,
  summary:
    " 2023년 1월을 시작으로 1개월에 걸쳐 제작한 첫 프로젝트 입니다. 인프런 `한입 크기로 잘라먹는 리액트` 강의 내용으로 첫 리액트 프레임워크를 이용한 감정을 기록 하는 다이어리입니다.",
  component: <ProjectDetails />,
  imageComponent: <ProjectImage pageImages={emotionPageImages} />,
};
const toDoListDetails = {
  src: `${process.env.PUBLIC_URL}/images/Admin-Image/adminHome.png`,
  summary:
    " 2023년 2월을 시작으로 1개월에 걸쳐 작성한 할 일을 작성할 수 있는 리스트입니다.",
  component: <ProjectDetails />,
};

// 팀 폴더를 세팅하는 값
const flagTeamTitles = [
  {
    title: "Real Moment",
    component: <ProjectFileInFolder teamProjectDetails={RealMomentDetails} />,
  },
  {
    title: "Real Moment Admin",
    component: (
      <ProjectFileInFolder teamProjectDetails={RealMomentAdminDetails} />
    ),
  },
];

// 개인 폴더를 세팅하는 값
const flagPersonalTitles = [
  {
    title: "Portfolio",
    component: <ProjectFileInFolder teamProjectDetails={portfolioDetails} />,
  },
  {
    title: "Emotion Diary",
    component: <ProjectFileInFolder teamProjectDetails={emotionDiaryDetails} />,
  },
  {
    title: "To Do List",
    component: <ProjectFileInFolder teamProjectDetails={toDoListDetails} />,
  },
];

const Project = () => {
  const menuItems = ["Team Project", "Personal Project"];
  const menuRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.Project}>
      <Main titleText={"Project"} />
      <MenuSub
        menuItems={menuItems}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        menuRef={menuRef}
      />

      <section ref={(el) => (menuRef.current[0] = el)}>
        <Container>
          <h3 className={styles.h3}>
            <center>Team Project</center>
          </h3>
          <FlagFile flagTitles={flagTeamTitles}></FlagFile>
        </Container>
      </section>

      <section ref={(el) => (menuRef.current[1] = el)}>
        <Container>
          <h3 className={styles.h3}>
            <center>Personal Project</center>
          </h3>
          <FlagFile flagTitles={flagPersonalTitles} />
        </Container>
      </section>
    </div>
  );
};

export default Project;
