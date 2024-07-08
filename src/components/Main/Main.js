import React, { useEffect } from "react";
import styles from "./Main.module.css";

const Main = ({ titleText }) => {
  useEffect(() => {
    const title = document.querySelector(`.${styles.title} h1`);
    const portfolio = document.querySelector(`.${styles.portfolio}`);

    if (title && portfolio) {
      const titleChars = title.textContent.split("");
      const portfolioChars = portfolio.textContent.split("");

      title.innerHTML = titleChars
        .map(
          (char, index) =>
            `<span class="${styles.char}" style="animation-delay: ${
              index * 0.2
            }s;">${char}</span>`
        )
        .join("");

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

        setTimeout(() => {
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
    </main>
  );
};

export default Main;
