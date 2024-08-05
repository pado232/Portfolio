import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Intro from "./pages/IntroPage/Intro";
import Project from "./pages/ProjectPage/Project";
import Contact from "./pages/ContactPage/Contact";
import Home from "./pages/Home/Home";
import MyFooter from "./components/MyFooter/MyFooter";
import FixedMenuButton from "./components/utils/button/FixedMenuButton";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
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
