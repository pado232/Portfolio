import React, { useEffect, useState } from "react";
import lightStyles from "./Main.module.css";
import darkStyles from "./MainD.module.css";
import { TfiMouse } from "react-icons/tfi";
import { RiArrowDownWideLine } from "react-icons/ri";
import { useTheme } from "../../ThemeContext/ThemeContext";

const Main = ({ titleText }) => {
  const [theme] = useTheme();

  const [scrollY, setScrollY] = useState(0);

  const styles = theme === "light" ? lightStyles : darkStyles;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // querySelector : CSS 클래스 이름을 기준으로 요소를 찾아냄 (클래스 이름이 title이면서 그 안에 포함된 h1를 찾음)
    // title : querySelector와 일치하는 첫 번째 요소를 반환
    //        (값만 반환하는 것이 아니라 html형식의 태그를 포함해서 반환)
    const title = document.querySelector(`.${styles.title} h1`);
    const portfolio = document.querySelector(`.${styles.portfolio}`);

    // console.log("title", title); // <h1>DONY's<h1>

    if (title && portfolio) {
      const titleChars = title.textContent.split("");
      const portfolioChars = portfolio.textContent.split("");

      // console.log("titleChars", titleChars); // ['D', 'O', 'N', 'Y', "'", 's']
      // console.log("title.textContent", title.textContent); // DONY's

      // title 요소의 텍스트를 개별 문자로 분리하고,
      // 각 문자에 애니매니션 지연 시간(글자마다 기다려야하는 시간)을 적용한 span 태그로 감싸기
      // innerHTML: title에 있던 원래 값은 사라지고 = 뒤에 작성한 값으로 변경됨
      title.innerHTML = titleChars
        .map(
          (char, index) =>
            `<span class="${styles.char}" style="animation-delay: ${
              index * 0.2
            }s;">${char}</span>`
        )
        .join(""); // map에서 순회하며 작성된 내용 한줄한줄을 전부 결합(이어 붙이기)

      // 위 내용을 적용한 후 출력하면 애니매이션이 동작하면서
      // title의 츨력값이 <h1><span></span> ... <h1> 으로 출력되는 것임

      portfolio.innerHTML = portfolioChars
        .map(
          (char, index) =>
            `<span class="${styles.char}" style="animation-delay: ${
              (titleChars.length + index) * 0.2
            }s;">${char}</span>`
        )
        .join("");

      const totalCharsLength = titleChars.length + portfolioChars.length;

      const resetAnimation = () => {
        const chars = document.querySelectorAll(`.${styles.char}`);
        chars.forEach((char) => {
          char.style.animation = "none";
        });

        // 0.1초마다 실행될 동작

        setTimeout(() => {
          // 각 char요소에 대해 작업 수행
          chars.forEach((char, index) => {
            char.style.animation = "";
            char.style.animationDelay = `${index * 0.2}s`;
          });
        }, 100);
      };

      const intervalId = setInterval(
        resetAnimation,
        totalCharsLength * 0.1 * 1000 + 2300
      );

      return () => clearInterval(intervalId);
    } else {
      console.error("Title or Portfolio element not found");
    }
  }, []);

  return (
    <main id="main" className={styles.main}>
      <div className={styles.title}>
        <h1>DONY's</h1>
        <h1 className={styles.portfolio}>{titleText}</h1>
      </div>
      <div
        className={`${styles.mouse_container} ${
          scrollY > 10 ? styles.hidden : ""
        }`}
      >
        <div className={styles.mouse}>
          <div>
            <TfiMouse size={"2rem"} />
          </div>
          <div className={styles.text}>Scroll</div>
        </div>
        <div className={styles.arrow_box}>
          <div className={styles.top_arrow}>
            <RiArrowDownWideLine size={"1.5rem"} />
          </div>
          <div className={styles.bottom_arrow}>
            <RiArrowDownWideLine size={"1.5rem"} />
          </div>
        </div>
      </div>

      {/** scrollY 값이 10이상이면 클래스 이름 변경(스타일 변경) */}
      <div
        className={`${styles.text_container} ${
          scrollY > 10 ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.welcome}>
          <h3 className={styles.welcome_title}>Welcome to my portfolio!</h3>
          <p className={styles.welcome_content}>
            I hope you enjoy exploring my work.
          </p>
          <p className={styles.welcome_content}>
            Your feedback is highly appreciated!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
