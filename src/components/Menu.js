import { useNavigate } from "react-router-dom";
import "../styles/Menu.css";
const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="Menu">
      <ul>
        <li>
          <button onClick={() => navigate("/")}>INTRODUCTION</button>
        </li>
        <li>
          <button onClick={() => navigate("/project")}>PROJECT</button>
        </li>
        <li>
          <button onClick={() => navigate("/context")}>CONTEXT</button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
