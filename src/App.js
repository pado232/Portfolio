import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Intro from "./pages/IntroPage/Intro";
import Project from "./pages/ProjectPage/Project";
import Contact from "./pages/ContactPage/Contact";
import Home from "./pages/Home/Home";
import MyFooter from "./components/MyFooter/MyFooter";
import { useEffect, useState } from "react";
import FixedMenuButton from "./components/utils/button/FixedMenuButton";
function App() {
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      // 예시로 100 픽셀 이상 스크롤되면 버튼을 보여줍니다.
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // 페이지 로드 시 스크롤 이벤트 리스너 추가
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {location.pathname !== "/" && <Menu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showButton && <FixedMenuButton />}
      {location.pathname !== "/" && <MyFooter />}
    </div>
  );
}

export default App;
