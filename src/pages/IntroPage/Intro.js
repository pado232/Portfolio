import { useRef, useState } from "react";
import Main from "../../components/Main/Main";
import MenuSub from "../../components/MenuSub/MenuSub";
import AboutMe from "./components/AboutMe/AboutMe";
import Skill from "./components/Skill/Skill";

import styles from "./intro.module.css";
const Intro = () => {
  const menuItems = ["About Me", "Skill"];
  const menuRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollToSection = (index) => {
    if (menuRef.current[index]) {
      window.scrollTo({
        top: menuRef.current[index].offsetTop,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className={styles.Intro}>
      <Main />

      <MenuSub
        menuItems={menuItems}
        activeIndex={activeIndex}
        onClick={scrollToSection}
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
