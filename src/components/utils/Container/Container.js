import { useEffect, useRef } from "react";
import styles from "./Container.module.css";

const Container = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        // 화면의 절반 지점에서 나타나게
        if (rect.top <= windowHeight / 1.5) {
          containerRef.current.classList.add(styles.visible);
        } else {
          containerRef.current.classList.remove(styles.visible);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={`${styles.Container} ${styles.hidden}`}>
      {children}
    </div>
  );
};

export default Container;
