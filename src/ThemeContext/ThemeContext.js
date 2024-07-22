import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "./ThemeContext.module.css";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // 초기 테마를 로컬 스토리지에서 가져오거나 기본값으로 "light"를 사용
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const themeClass = theme === "light" ? styles.light : styles.dark;

  useEffect(() => {
    // 테마가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 내부 컴포넌트는 따로 관리하지만 현재 themeClass를 이용해서 section의 스타일을 변경하고 있음.
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={themeClass}>{children}</div>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, [setTheme]);

  return [theme, toggleTheme];
}

export { ThemeProvider, useTheme };
