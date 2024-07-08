import { useRef, useState } from "react";
import Main from "../../components/Main/Main";
import SendEmail from "./SendEmail/SendEmail";
import MenuSub from "../../components/MenuSub/MenuSub";

const Context = () => {
  const menuItems = ["Contact with me"];
  const menuRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="Contact">
      <Main titleText={"Contact"} />
      <MenuSub
        menuItems={menuItems}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        menuRef={menuRef}
      />
      <section ref={(el) => (menuRef.current[0] = el)}>
        <SendEmail />
      </section>
    </div>
  );
};

export default Context;
