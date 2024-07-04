import Main from "../../components/Main/Main";
import Container from "../../components/utils/Container/Container";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";

import styles from "./intro.module.css";
const Intro = () => {
  return (
    <div className={styles.Intro}>
      <Main />
      <Container>
        <AboutMe />
        <Skill />
      </Container>
    </div>
  );
};

export default Intro;
