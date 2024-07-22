import { useState } from "react";
import styles from "./FixedMenuButton.module.css";
import { useNavigate } from "react-router-dom";
import { LuArrowBigUpDash } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { useTheme } from "../../../ThemeContext/ThemeContext";

const FixedMenuButton = () => {
  const navigate = useNavigate();
  const [mouseOn, setMouseOn] = useState(false);
  const [theme, toggleTheme] = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={styles.FixedMenuButton}
      onMouseLeave={() => setMouseOn(false)}
      onMouseEnter={() => setMouseOn(true)}
    >
      <button className={styles.fix_btn}>
        <FiPlus size={"1.69rem"} />
      </button>
      <div className={`${styles.btn_wrapper} ${mouseOn ? styles.visible : ""}`}>
        {/** 다크모드 변환  */}
        <div>
          <button
            className={styles.goto}
            onClick={toggleTheme}
            style={{ fontSize: "1rem" }}
          >
            {theme === "light" ? "🌞" : "🌜"}
          </button>
        </div>

        {/** intro 페이지로 이동 */}
        <div>
          <button
            className={styles.goto}
            onClick={() => {
              navigate("/intro");
            }}
          >
            INTRO
          </button>
        </div>

        {/** project 페이지로 이동 */}
        <div>
          <button
            className={styles.goto}
            onClick={() => {
              navigate("/project");
            }}
          >
            PROJECT
          </button>
        </div>

        {/** contact 페이지로 이동 */}
        <div>
          <button
            className={styles.goto}
            onClick={() => {
              navigate("/contact");
            }}
          >
            CONTACT
          </button>
        </div>

        {/** 페이지의 상단으로 이동 */}
        <div>
          <button
            className={styles.goto}
            onClick={() => {
              scrollToTop();
            }}
          >
            Top
            <LuArrowBigUpDash size={"1.5rem"} style={{ verticalAlign: -6 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedMenuButton;
