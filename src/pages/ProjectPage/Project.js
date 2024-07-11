import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Main from "../../components/Main/Main";
import MenuSub from "../../components/MenuSub/MenuSub";
import FlagFile from "../../components/FlagFile/FlagFile";
import Container from "../../components/utils/Container/Container";
import styles from "./Project.module.css";

const Project = () => {
  const menuItems = ["Team Project", "Personal Project"];
  const menuRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const teamProjects = useSelector((state) => state.teamProjects);
  const personalProjects = useSelector((state) => state.personalProjects);

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
          <FlagFile projectKeys={teamProjects} />
        </Container>
      </section>

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
