import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Menu from "./components/Menu/Menu";
import MyFooter from "./components/MyFooter/MyFooter";
import FixedMenuButton from "./components/utils/button/FixedMenuButton";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

// 각 페이지 컴포넌트를 lazy로 동적으로 로드합니다.
const Home = lazy(() => import("./pages/Home/Home"));
const Intro = lazy(() => import("./pages/IntroPage/Intro"));
const Project = lazy(() => import("./pages/ProjectPage/Project"));
const Contact = lazy(() => import("./pages/ContactPage/Contact"));

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
        {location.pathname !== "/" && !isLocked && <Menu />}
        {/* Suspense로 감싸서 로딩 상태를 관리합니다. */}
        <Suspense
          fallback={<div style={{ margin: "50 auto" }}>Loading...</div>}
        >
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
        </Suspense>
        {showButton && <FixedMenuButton />}
        {location.pathname !== "/" && !isLocked && <MyFooter />}
      </div>
    </ThemeProvider>
  );
}

export default App;
