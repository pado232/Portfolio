import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Intro from "./pages/IntroPage/Intro";
import Project from "./pages/ProjectPage/Project";
import Contact from "./pages/ContactPage/Contact";
import Home from "./pages/Home/Home";
import MyFooter from "./components/MyFooter/MyFooter";
import FixedMenuButton from "./components/utils/button/FixedMenuButton";
import { ThemeProvider, useTheme } from "./ThemeContext/ThemeContext";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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

  // const PrivateRoute = ({ element }) => {
  //   const [theme] = useTheme();
  //   return isLocked ? (
  //     <div
  //       style={
  //         theme === "ligth"
  //           ? { height: "100vh", textAlign: "center", padding: 50 }
  //           : {
  //               height: "100vh",
  //               textAlign: "center",
  //               padding: 50,
  //               backgroundColor: "#aaa",
  //             }
  //       }
  //     >
  //       <h2>Access Denied</h2>
  //       <p>아직 잠겨있어요!</p>
  //       <p>아직 잠겨있어요! 암호를 풀어 포트폴리오를 확인해보세요!</p>
  //       <Link to="/">홈으로 돌아가기</Link>
  //     </div>
  //   ) : (
  //     element
  //   );
  // };

  return (
    <ThemeProvider>
      <div className="App">
        {location.pathname !== "/" && !isLocked && <Menu />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<PrivateRoute element={<Intro />} />} />
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
      </div>
    </ThemeProvider>
  );
}

export default App;
