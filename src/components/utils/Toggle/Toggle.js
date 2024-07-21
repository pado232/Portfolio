import { useTheme } from "../../../ThemeContext/ThemeContext";
import styles from "./Toggle.module.css";
const Toggle = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={styles.Toggle}>
      <div className={styles.container}>
        {/* <div>
          <input className={styles.input} type="checkbox" />
          <label className={styles.lab} for="switch"></label>
        </div>

        <div>
          <input type="checkbox" id="toggle" hidden />

          <label for="toggle" className={styles.toggleSwitch}>
            <span className={styles.toggleButton}></span>
          </label>
        </div> */}
        <div style={{ marginTop: 30, textAlign: "center" }}>
          <button onClick={toggleTheme}>
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
