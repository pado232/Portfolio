import Main from "../../components/Main/Main";
import ProjectContent from "./ProjectContent/ProjectContent";
import ProjectImage from "./ProjectImage/ProjectImage";
import MenuSub from "../../components/MenuSub/MenuSub";
import { useRef, useState } from "react";
import PersonalProject from "./PersonalProject/PersonalProject";
import TeamProject from "./TeamProject/TeamProject";
import FlagFile from "../../components/utils/FlagFile/FlagFile";
import Container from "../../components/utils/Container/Container";
import styles from "./Project.module.css";

const flagTitles = [
  { title: "Screen Images", component: <ProjectImage /> },
  { title: "My Roles", component: <TeamProject /> },

  { title: "View More (Link attached)", component: <ProjectContent /> },
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
          <h2>Team Project</h2>
          <h3 className={styles.h3}>
            <center>'RealMoment' Shopping-Mall</center>
          </h3>
          <FlagFile flagTitles={flagTitles} />
        </Container>
      </section>
      <section ref={(el) => (menuRef.current[1] = el)}>
        <PersonalProject />
      </section>
    </div>
  );
};

export default Project;
