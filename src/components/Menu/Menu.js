import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { VscKey } from "react-icons/vsc";
import { TfiLock } from "react-icons/tfi";
import lightStyles from "./Menu.module.css";
import darkStyles from "./MenuD.module.css";
import { useTheme } from "../../ThemeContext/ThemeContext";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [theme] = useTheme();
  const [mouseOn, setMouseOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const styles = theme === "light" ? lightStyles : darkStyles;

  const handleHome = () => navigate("/");
  const handleIntro = () => navigate("/intro");
  const handleProject = () => navigate("/project");
  const handleContact = () => navigate("/contact");

  return (
    <div className={styles.Menu}>
      <div
        className={styles.home}
        onMouseEnter={() => setMouseOn(true)}
        onMouseLeave={() => setMouseOn(false)}
        onMouseMove={(event) => handleMouseMove(event)}
        onClick={handleHome}
      >
        <div className={styles.home_icon}>
          <TfiLock size={"2.5rem"} style={{ marginRight: "0.7rem " }} />
        </div>
        <div>
          <h2 className={styles.h2}>Lock</h2>
          <p className={styles.p}>포트폴리오를 잠궈 다시 암호를 풀어보세요!</p>
        </div>
      </div>
      {mouseOn && (
        <div
          className={styles.mouse_key}
          style={{
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
            backgroundPosition: `-${mousePosition.x * 2}px -${
              mousePosition.y * 2
            }px`,
          }}
        >
          <VscKey className={styles.key_icon} size={"2.5rem"} />
        </div>
      )}
      <div className={styles.menu}>
        <ul>
          <li>
            <button
              className={`${styles.btn} ${
                location.pathname === "/intro" ? styles.active : ""
              }`}
              onClick={handleIntro}
            >
              INTRODUCTION
            </button>
          </li>
          <li>
            <button
              className={`${styles.btn} ${
                location.pathname === "/project" ? styles.active : ""
              }`}
              onClick={handleProject}
            >
              PROJECT
            </button>
          </li>
          <li>
            <button
              className={`${styles.btn} ${
                location.pathname === "/contact" ? styles.active : ""
              }`}
              onClick={handleContact}
            >
              CONTACT
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
