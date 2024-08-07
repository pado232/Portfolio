import { useTheme } from "../../../ThemeContext/ThemeContext";
import styles from "./Toggle.module.css";

const Toggle = () => {
  const [theme, toggleTheme] = useTheme();

  const mode = theme === "light" ? true : false;

  return (
    <div className={styles.Toggle}>
      <input
        className={styles.input}
        type="checkbox"
        onChange={toggleTheme}
        checked={mode}
        hidden
      />
      <label
        className={styles.lab}
        htmlFor="switch"
        onClick={toggleTheme}
      ></label>
    </div>
  );
};

export default Toggle;
