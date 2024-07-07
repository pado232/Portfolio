import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";
const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <button onClick={() => navigate("/intro")}>INTRODUCTION</button>
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
