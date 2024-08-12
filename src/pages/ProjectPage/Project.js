import React, { useRef, useState } from "react";
import Main from "../../components/Main/Main";
import MenuSub from "../../components/MenuSub/MenuSub";
import FlagFile from "../../components/FlagFile/FlagFile";
import Container from "../../components/utils/Container/Container";
import styles from "./Project.module.css";
import { useProject } from "../../root/store/reducers/ProjectContext";

const Project = () => {
  const menuItems = ["Team Project", "Personal Project"];
  const menuRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const projectData = useProject("");
  const teamProjects = projectData.teamProjects;
  const personalProjects = projectData.personalProjects;

  // console.log("teamProjects", teamProjects);
  // console.log("personalProjects", personalProjects);

  return (
    <div className={styles.Project}>
      <Main titleText="Project" />
      <MenuSub
        menuItems={menuItems}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        menuRef={menuRef}
      />

      {/* Team Project Section */}
      <section ref={(el) => (menuRef.current[0] = el)}>
        <Container>
          <h3 className={styles.h3}>
            <center>Team Project</center>
          </h3>
          {teamProjects.length > 0 ? (
            <FlagFile projectKeys={teamProjects} />
          ) : (
            <p>No Personal Projects Available</p>
          )}
        </Container>
      </section>

      {/* Personal Project Section */}
      <section ref={(el) => (menuRef.current[1] = el)}>
        <Container>
          <h3 className={styles.h3}>
            <center>Personal Project</center>
          </h3>
          {personalProjects.length > 0 ? (
            <FlagFile projectKeys={personalProjects} />
          ) : (
            <p>No Personal Projects Available</p>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Project;
