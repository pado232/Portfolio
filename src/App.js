import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Intro from "./pages/IntroPage/Intro";
import Project from "./pages/ProjectPage/Project";
import Context from "./pages/ContextPage/Context";
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/project" element={<Project />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </div>
  );
}

export default App;
