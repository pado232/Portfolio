import { useState } from "react";
import styles from "./FixedMenuButton.module.css";
import { useNavigate } from "react-router-dom";
import { LuArrowBigUpDash } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { useTheme } from "../../../ThemeContext/ThemeContext";

const FixedMenuButton = () => {
  const navigate = useNavigate();
  const [mouseOn, setMouseOn] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [theme, toggleTheme] = useTheme();

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
        <div>
          <button
            className={styles.goto}
            onClick={toggleTheme}
            style={{ fontSize: "1rem" }}
          >
            {theme === "light" ? "🌞" : "🌜"}
          </button>
        </div>
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

        <div>
          <button
            className={styles.goto}
            onClick={() => {
              scrollToTop();
            }}
          >
            Top
            <LuArrowBigUpDash size={23} style={{ verticalAlign: -6 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedMenuButton;
