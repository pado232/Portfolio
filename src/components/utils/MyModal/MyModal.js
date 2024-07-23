// createPortal을 사용하여 React 포탈을 만들어 모달을 body에 직접 렌더링함으로써
// 부모 요소의 스타일 영향을 받지 않도록
import { createPortal } from "react-dom";
import lightStyles from "./MyModal.module.css";
import darkStyles from "./MyModalD.module.css";
import { useTheme } from "../../../ThemeContext/ThemeContext";

const MyModal = ({ isOpen, handleClose, children }) => {
  const [theme] = useTheme();

  const styles = theme === "light" ? lightStyles : darkStyles;
  if (!isOpen) return null;

  const handleInnerClick = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <div className={styles.modal} onClick={handleClose}>
      <div className={styles.modal_main} onClick={handleInnerClick}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default MyModal;
