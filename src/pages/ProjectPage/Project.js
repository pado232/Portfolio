import Main from "../../components/Main/Main";
import ProjectContent from "./ProjectContent/ProjectContent";
import ProjectImage from "./ProjectImage/ProjectImage";
import MenuSub from "../../components/MenuSub/MenuSub";
import { useRef, useState } from "react";

const Project = () => {
  const menuItems = ["Shopping-Mall Image", "Shopping-Mall Link"];
  const menuRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="Project">
      <Main titleText={"Project"} />
      <MenuSub
        menuItems={menuItems}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        menuRef={menuRef}
      />
      <section ref={(el) => (menuRef.current[0] = el)}>
        <h3 style={{ color: "red" }}>
          new, sale 페이지 수정하면 추가하면 될듯
        </h3>
        <ProjectImage />
      </section>
      <section ref={(el) => (menuRef.current[1] = el)}>
        <ProjectContent />
      </section>
    </div>
  );
};

export default Project;
