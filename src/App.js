import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import FixedMenuButton from "./components/utils/button/FixedMenuButton";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

// 각 페이지 컴포넌트를 lazy로 동적으로 로드합니다.
const Home = lazy(() => import("./pages/Home/Home"));
const Intro = lazy(() => import("./pages/IntroPage/Intro"));
const Project = lazy(() => import("./pages/ProjectPage/Project"));
const Contact = lazy(() => import("./pages/ContactPage/Contact"));

// 메뉴와 푸터 컴포넌트도 동적으로 로드
const Menu = lazy(() => import("./components/Menu/Menu"));
const MyFooter = lazy(() => import("./components/MyFooter/MyFooter"));

function App() {
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);
  const isLocked = useSelector((state) => state.lock.isLocked);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        {/* 전체를 감싸는 Suspense로 로딩 상태 관리 */}
        <Suspense
          fallback={
            <div
              style={{
                fontSize: "1.5rem",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#333",
                color: "#ccc",
              }}
            >
              Loading...
            </div>
          }
        >
          {location.pathname !== "/" && !isLocked && <Menu />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/intro"
              element={<PrivateRoute element={<Intro />} />}
            />
            <Route
              path="/project"
              element={<PrivateRoute element={<Project />} />}
            />
            <Route
              path="/contact"
              element={<PrivateRoute element={<Contact />} />}
            />
          </Routes>
          {showButton && <FixedMenuButton />}
          {location.pathname !== "/" && !isLocked && <MyFooter />}
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
