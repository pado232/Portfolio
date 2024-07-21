import { useTheme } from "../../../ThemeContext/ThemeContext";
import styles from "./Toggle.module.css";

const Toggle = () => {
  const [theme, toggleTheme] = useTheme();
  const mode = theme === "light" ? true : false;

  return (
    <div className={styles.Toggle}>
      <div className={styles.container}>
        <input className={styles.input} type="checkbox" hidden checked={mode} />
        <label
          className={styles.lab}
          for="switch"
          onClick={toggleTheme}
        ></label>
      </div>
    </div>
  );
};

export default Toggle;
