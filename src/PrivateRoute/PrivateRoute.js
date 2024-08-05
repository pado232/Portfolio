import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../ThemeContext/ThemeContext";

import lightStyles from "./PrivateRoute.module.css";
import darkStyles from "./PrivateRouteD.module.css";
const PrivateRoute = ({ element }) => {
  const [theme] = useTheme();

  const styles = theme === "light" ? lightStyles : darkStyles;
  const isLocked = useSelector((state) => state.lock.isLocked);

  // 잠겨 있으면 접근 불가 페이지로 리다이렉트
  if (isLocked) {
    return (
      <div className={styles.PrivateRoute}>
        <div>
          <h1 className={styles.error}>Access Denied</h1>
          <p className={styles.p}>잠겨있어요!</p>
          <p className={styles.p}>
            암호를 풀지 못하면 페이지에 접근하실 수 없습니다.
          </p>

          <div className={styles.box}>
            <p className={styles.p}>
              <span className={styles.span}>HINT!</span> 키보드로 무엇을
              입력해야할까요?
            </p>
            <p className={styles.p}>
              홈 화면에 돌아다니는 글자가 수상하지 않으신가요?
            </p>

            <Link className={styles.link} to="/">
              홈으로 이동하기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 잠겨 있지 않으면 요청한 페이지를 렌더링
  return element;
};

export default PrivateRoute;
