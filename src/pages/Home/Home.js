import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { TfiLock } from "react-icons/tfi";
const topRowAlphabets = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const middleRowAlphabets = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bottomRowAlphabets = ["Z", "X", "C", "V", "B", "N", "M"];

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [pressedKey, setPressedKey] = useState(null);
  const [largeInput, setLargeInput] = useState(false);
  const navigate = useNavigate();

  const handleKeyPress = (char) => {
    setInputValue((prev) => prev + char);
    setPressedKey(char.toUpperCase());
    setTimeout(() => {
      setPressedKey(null);
    }, 200);
  };

  const handleSpaceBar = () => {
    setInputValue((prev) => prev + " ");
    setPressedKey(" ");
    setTimeout(() => {
      setPressedKey(null);
    }, 200);
  };

  const handleBackspace = () => {
    setInputValue((prev) => prev.slice(0, -1));
    setPressedKey("Backspace");
    setTimeout(() => {
      setPressedKey(null);
    }, 200);
  };

  const handleEnter = () => {
    handleSubmit();
    setPressedKey("Enter");
    setTimeout(() => {
      setPressedKey(null);
    }, 200);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      if (
        topRowAlphabets.includes(key) ||
        middleRowAlphabets.includes(key) ||
        bottomRowAlphabets.includes(key)
      ) {
        handleKeyPress(key);
      } else if (e.key === " ") {
        handleSpaceBar();
      } else if (e.key === "Backspace") {
        handleBackspace();
      } else if (e.key === "Enter") {
        handleEnter();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", () => setPressedKey(null));

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", () => setPressedKey(null));
    };
  }, []);

  const handleSubmit = () => {
    console.log(inputValue.trim().toUpperCase());
    switch (inputValue) {
      case "INTRO":
        setLargeInput(true);
        setTimeout(() => {
          navigate("/intro");
        }, 4000);
        break;

      case "PROJECT":
        setLargeInput(true);
        setTimeout(() => {
          navigate("/project");
        }, 4000);
        break;

      case "CONTACT":
        setLargeInput(true);
        setTimeout(() => {
          navigate("/contact");
        }, 4000);
        break;

      default:
        console.log("암호가 일치하지 않아 페이지 이동할 수 없습니다.");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.title_container}>
        <div>
          <h2 className={styles.title_h2}>INTRO</h2>
        </div>
        <div>
          <h2 className={styles.title_h2}>PROJECT</h2>
        </div>
        <div>
          <h2 className={styles.title_h2}>CONTACT</h2>
        </div>
      </div>
      <div className={styles.action_container}>
        <div className={styles.input_container}>
          <div className={styles.search_icon}>
            <TfiLock size={"1.5rem"} />
          </div>
          <div className={`${styles.input} ${largeInput ? styles.large : ""}`}>
            {inputValue}
          </div>
        </div>

        <div className={styles.keyboard}>
          <div>
            {topRowAlphabets.map((alp, index) => (
              <button
                key={index}
                className={`${styles.alp_key} ${
                  pressedKey === alp ? styles.pressed : ""
                }`}
                onClick={() => handleKeyPress(alp)}
              >
                {alp}
              </button>
            ))}
            <button
              className={`${styles.backspace_key} ${
                pressedKey === "Backspace" ? styles.pressed : ""
              }`}
              onClick={handleBackspace}
            >
              Backspace
            </button>
          </div>
          <div>
            {middleRowAlphabets.map((alp, index) => (
              <button
                key={index}
                className={`${styles.alp_key} ${
                  pressedKey === alp ? styles.pressed : ""
                }`}
                onClick={() => handleKeyPress(alp)}
              >
                {alp}
              </button>
            ))}
            <button
              className={`${styles.enter_key} ${
                pressedKey === "Enter" ? styles.pressed : ""
              }`}
              onClick={handleEnter}
            >
              Enter
            </button>
          </div>

          <div style={{ marginRight: "5rem" }}>
            {bottomRowAlphabets.map((alp, index) => (
              <button
                key={index}
                className={`${styles.alp_key} ${
                  pressedKey === alp ? styles.pressed : ""
                }`}
                onClick={() => handleKeyPress(alp)}
              >
                {alp}
              </button>
            ))}
          </div>
          <div style={{ marginRight: "5rem" }}>
            <button
              className={`${styles.spacebar_key} ${
                pressedKey === " " ? styles.pressed : ""
              }`}
              onClick={handleSpaceBar}
            >
              SpaceBar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
