import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Intro from "./pages/IntroPage/Intro";
import Project from "./pages/ProjectPage/Project";
import Contact from "./pages/ContactPage/Contact";
import Home from "./pages/Home/Home";
import MyFooter from "./components/MyFooter/MyFooter";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/" && <MyFooter />}
    </div>
  );
}

export default App;
