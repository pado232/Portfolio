import styles from "./MenuSub.module.css";

const MenuSub = ({ menuItems, activeIndex, setActiveIndex, menuRef }) => {
  const scrollToSection = (index) => {
    if (menuRef.current[index]) {
      window.scrollTo({
        top: menuRef.current[index].offsetTop,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className={styles.MenuSub}>
      <ul className={styles.menu_ul}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menu_li}>
            <button
              className={
                activeIndex === index
                  ? `${styles.menu_button} ${styles.active}`
                  : styles.menu_button
              }
              onClick={() => scrollToSection(index)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSub;
