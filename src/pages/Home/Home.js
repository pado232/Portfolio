import React, { useState, useEffect } from "react";
import lightStyles from "./Home.module.css";
import darkStyles from "./HomeD.module.css";
import { useNavigate } from "react-router-dom";
import { TfiLock } from "react-icons/tfi";
import Toggle from "../../components/utils/Toggle/Toggle";
import { useTheme } from "../../ThemeContext/ThemeContext";
import { useDispatch } from "react-redux";
import { lock, unlock } from "../../root/actions/lockAactions";
import usePageTitle from "../../hook/usePageTitle";

const numbers = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
];
const topRowAlphabets = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const middleRowAlphabets = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bottomRowAlphabets = ["Z", "X", "C", "V", "B", "N", "M"];

const Home = () => {
  usePageTitle(`DONY Portfolio`);
  const navigate = useNavigate();
  const [theme] = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    // 홈에 접근하면 잠궈버림
    dispatch(lock());
  }, [dispatch]);

  const [inputValue, setInputValue] = useState("");
  const [pressedKey, setPressedKey] = useState(null);
  const [largeInput, setLargeInput] = useState(false);
  const [hiddenH2, setHiddenH2] = useState(false);
  const [error, setError] = useState(false);

  const styles = theme === "light" ? lightStyles : darkStyles;
  useEffect(() => {
    const titleElements = document.querySelectorAll("h2");

    // 각 글자의 이동 속도를 저장할 배열을 초기화
    const speeds = [];

    titleElements.forEach((title) => {
      // 처음 글자가 화면에 나타날 랜덤한 위치
      title.style.top = `${Math.random() * 90}vh`;
      title.style.left = `${Math.random() * 90}vw`;

      // 글자의 초기 속도를 설정하고 speeds 배열에 저장
      speeds.push({
        xSpeed: 1, // 고정된 x축 이동 속도
        ySpeed: 1, // 고정된 y축 이동 속도
      });
    });

    // 글자를 이동시키는 함수
    const moveElements = () => {
      // 각 h2 요소에 대해 반복합니다.
      titleElements.forEach((title, index) => {
        // 요소의 현재 위치와 크기를 가져옴
        const rect = title.getBoundingClientRect();
        // 현재 요소의 속도를 가져옴
        let { xSpeed, ySpeed } = speeds[index];

        // 요소가 화면의 위 또는 아래 경계에 도착했는지 확인
        if (rect.top + rect.height > window.innerHeight || rect.top < 0) {
          // y축 속도의 방향을 반대로
          ySpeed = -ySpeed;
          speeds[index].ySpeed = ySpeed;
        }
        // 요소가 화면의 왼쪽 또는 오른쪽 경계에 도착했는지 확인
        if (rect.left + rect.width > window.innerWidth || rect.left < 0) {
          // x축 속도의 방향을 반대로
          xSpeed = -xSpeed;
          speeds[index].xSpeed = xSpeed;
        }

        // 요소의 새로운 위치 설정
        title.style.top = `${rect.top + ySpeed}px`;
        title.style.left = `${rect.left + xSpeed}px`;
      });

      // 다음 프레임에서 moveElements 함수를 호출
      requestAnimationFrame(moveElements);
    };

    // 창 크기 조정 이벤트를 처리하기 위해 이벤트 리스너를 추가
    const handleResize = () => {
      titleElements.forEach((title) => {
        const rect = title.getBoundingClientRect();
        if (rect.top + rect.height > window.innerHeight) {
          title.style.top = `${window.innerHeight - rect.height}px`;
        }
        if (rect.top < 0) {
          title.style.top = `0px`;
        }
        if (rect.left + rect.width > window.innerWidth) {
          title.style.left = `${window.innerWidth - rect.width}px`;
        }
        if (rect.left < 0) {
          title.style.left = `0px`;
        }
      });
    };

    window.addEventListener("resize", handleResize);

    // 애니메이션 시작
    moveElements();

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleKeyPress = (char) => {
    if (inputValue.length < 10) {
      setInputValue((prev) => prev + char);
      setPressedKey(char.toUpperCase());
      setTimeout(() => {
        setPressedKey(null);
      }, 200);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 500);
      console.log("10글자 이상 입력할 수 없습니다.");
    }
  };

  const handleBackspace = () => {
    setInputValue((prev) => prev.slice(0, -1));
    setPressedKey("Backspace");
    setTimeout(() => {
      setPressedKey(null);
    }, 200);
  };

  const handleEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(inputValue.trim().toUpperCase());
    handleSubmit();
    setPressedKey("Enter");
    setTimeout(() => {
      setPressedKey(null);
    }, 200);
  };

  const handleSubmit = () => {
    switch (inputValue.trim().toUpperCase()) {
      case "INTRO":
        dispatch(unlock());
        setLargeInput(true);
        setHiddenH2(true);
        setTimeout(() => {
          navigate("/intro");
        }, 2000);

        break;

      case "PROJECT":
        dispatch(unlock());
        setLargeInput(true);
        setHiddenH2(true);
        setTimeout(() => {
          navigate("/project");
        }, 2000);

        break;

      case "CONTACT":
        dispatch(unlock());
        setLargeInput(true);
        setHiddenH2(true);
        setTimeout(() => {
          navigate("/contact");
        }, 2000);

        break;

      default:
        console.log("암호가 일치하지 않아 페이지 이동할 수 없습니다.");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 500);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(inputValue);
      const key = e.key.toUpperCase(); // 키 값 대문자로
      if (
        topRowAlphabets.includes(key) ||
        middleRowAlphabets.includes(key) ||
        bottomRowAlphabets.includes(key)
      ) {
        handleKeyPress(key);
      } else if (e.key === "Backspace") {
        handleBackspace();
      } else if (e.key === "Enter") {
        handleEnter(e);
      }
    };

    const handleKeyUp = () => {
      setPressedKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    //  useEffect가 종료될 때 또는 의존성이 변경될 때 리스너를 제거
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [inputValue]);

  return (
    <main className={styles.main}>
      <div
        className={`${styles.title_container} ${hiddenH2 ? styles.hidden : ""}`}
      >
        <h2 className={styles.title_h2}>INTRO</h2>
        <h2 className={styles.title_h2}>PROJECT</h2>
        <h2 className={styles.title_h2}>CONTACT</h2>
      </div>
      <div className={styles.toggle_container}>
        <Toggle />
      </div>

      <div className={styles.total_container}>
        <div className={styles.action_container}>
          <div
            className={`${styles.input_container} ${error ? styles.error : ""}`}
          >
            <div className={styles.search_icon}>
              <TfiLock size={"1.5rem"} />
            </div>
            <input
              className={styles.input}
              type="text"
              name="inputValue"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoComplete="off"
            />

            <div
              className={`${styles.input_large} ${
                largeInput ? styles.action : ""
              }`}
            >
              {inputValue}
            </div>
          </div>

          <div className={styles.keyboard}>
            <div>
              {numbers.map((num, index) => (
                <button
                  key={index}
                  className={`${styles.key} ${styles.small} `}
                >
                  {num}
                </button>
              ))}
              <button
                className={`${styles.key} ${styles.backspace} ${
                  pressedKey === "Backspace" ? styles.pressed : ""
                }`}
                onClick={handleBackspace}
              >
                Backspace
              </button>
            </div>
            <div>
              <button className={`${styles.key} ${styles.mid} `}>Tab</button>
              {topRowAlphabets.map((alp, index) => (
                <button
                  key={index}
                  className={`${styles.key} ${styles.alp} ${
                    pressedKey === alp ? styles.pressed : ""
                  }`}
                  onClick={() => handleKeyPress(alp)}
                >
                  {alp}
                </button>
              ))}
              <button className={`${styles.key} ${styles.small}`}>[</button>
              <button className={`${styles.key} ${styles.small}`}>]</button>
              <button className={`${styles.key} ${styles.mid}`}>\</button>
            </div>
            <div>
              <button className={`${styles.key} ${styles.lar} `}>
                CapsLock
              </button>
              {middleRowAlphabets.map((alp, index) => (
                <button
                  key={index}
                  className={`${styles.key} ${styles.alp} ${
                    pressedKey === alp ? styles.pressed : ""
                  }`}
                  onClick={() => handleKeyPress(alp)}
                >
                  {alp}
                </button>
              ))}
              <button className={`${styles.key} ${styles.small}`}>;</button>
              <button className={`${styles.key} ${styles.small}`}>'</button>
              <button
                className={`${styles.key} ${styles.enter} ${
                  pressedKey === "Enter" ? styles.pressed : ""
                }`}
                onClick={handleEnter}
              >
                Enter
              </button>
            </div>

            <div>
              <button className={`${styles.key} ${styles.lar_shift} `}>
                Shift
              </button>
              {bottomRowAlphabets.map((alp, index) => (
                <button
                  key={index}
                  className={`${styles.key} ${styles.alp} ${
                    pressedKey === alp ? styles.pressed : ""
                  }`}
                  onClick={() => handleKeyPress(alp)}
                >
                  {alp}
                </button>
              ))}
              <button className={`${styles.key} ${styles.small}`}>{`,`}</button>
              <button className={`${styles.key} ${styles.small}`}>{`.`}</button>
              <button className={`${styles.key} ${styles.small}`}>{`/`}</button>
              <button className={`${styles.key} ${styles.lar} `}>Shift</button>
            </div>
            <div>
              <button className={`${styles.key} ${styles.altWinCtrl}`}>
                Alt
              </button>
              <button className={`${styles.key} ${styles.altWinCtrl}`}>
                Win
              </button>
              <button className={`${styles.key} ${styles.altWinCtrl}`}>
                Ctrl
              </button>
              <button className={`${styles.key} ${styles.spacebar} `}>
                SpaceBar
              </button>
              <button className={`${styles.key} ${styles.altWinCtrl} `}>
                Alt
              </button>
              <button className={`${styles.key} ${styles.altWinCtrl}`}>
                Fn
              </button>
              <button className={`${styles.key} ${styles.altWinCtrl}`}>
                Ctrl
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
