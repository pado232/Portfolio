import { useRef, useState } from "react";
import Main from "../../components/Main/Main";
import MenuSub from "../../components/MenuSub/MenuSub";
import AboutMe from "./components/AboutMe/AboutMe";
import Skill from "./components/Skill/Skill";

import styles from "./intro.module.css";

const Intro = () => {
  const menuItems = ["About Me", "Skills"];
  const menuRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.Intro}>
      <Main titleText={"Introduction"} />

      <MenuSub
        menuItems={menuItems}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        menuRef={menuRef}
      />
      <section ref={(el) => (menuRef.current[0] = el)}>
        <AboutMe />
      </section>
      <section ref={(el) => (menuRef.current[1] = el)}>
        <Skill />
      </section>
    </div>
  );
};

export default Intro;
