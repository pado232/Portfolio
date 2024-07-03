import Container from "../utils/Container";
import "../styles/Main.css";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    const title = document.querySelector(".title h1");
    const portfolio = document.querySelector(".title .portfolio");

    try {
      if (title && portfolio) {
        const titleChars = title.textContent.split("");
        const portfolioChars = portfolio.textContent.split("");

        title.innerHTML = titleChars
          .map(
            (char, index) =>
              `<span class="char" style="animation-delay: ${
                index * 0.1
              }s;">${char}</span>`
          )
          .join("");

        portfolio.innerHTML = portfolioChars
          .map(
            (char, index) =>
              `<span class="char" style="animation-delay: ${
                (titleChars.length + index) * 0.1
              }s;">${char}</span>`
          )
          .join("");

        const totalCharsLength = titleChars.length + portfolioChars.length;

        // 애니메이션 초기화 및 다시 시작
        const resetAnimation = () => {
          try {
            const chars = document.querySelectorAll(".char");
            chars.forEach((char) => {
              char.style.animation = "none";
            });

            setTimeout(() => {
              chars.forEach((char, index) => {
                char.style.animation = "";
                char.style.animationDelay = `${index * 0.1}s`;
              });
            }, 100); // 짧은 지연 시간 후 애니메이션 재시작
          } catch (error) {
            console.error("Error resetting animation: ", error);
          }
        };

        // 일정 시간 간격으로 애니메이션 재시작
        const intervalId = setInterval(
          resetAnimation,
          totalCharsLength * 0.1 * 1000 + 1000
        ); // 전체 애니메이션 길이 + 1초 간격으로 애니메이션 재시작

        // 클린업 함수
        return () => clearInterval(intervalId);
      }
    } catch (error) {
      console.error("Error in useEffect: ", error);
    }
  }, []);

  return (
    <main id="main">
      <Container>
        <div className="title">
          <h1>DONY's</h1>
          <h1 className="portfolio">Portfolio</h1>
        </div>
      </Container>
    </main>
  );
};

export default Main;
