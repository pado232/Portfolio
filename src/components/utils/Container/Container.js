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

    // Initial check
    // 컴포넌트가 마운트될 때 초기 상태를 체크하기 위해 handleScroll 함수를 한 번 실행.
    // (초기 렌더링 시에도 요소의 위치가 바로 반영)
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // 컴포넌트가 언마운트될 때 또는 useEffect가 다시 실행되기 전에
    // scroll 이벤트 리스너를 제거하여 메모리 누수 방지
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
