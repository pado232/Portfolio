import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Intro from "./pages/Intro";
import Context from "./pages/Context";
import Project from "./pages/Project";

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
