import { useState } from "react";
import styles from "./FlagFile.module.css";

const FlagFile = ({ flagTitles }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={styles.FlagFile}>
      <div className={styles.container}>
        <ul className={styles.ul}>
          {flagTitles.map((flag, index) => (
            <div
              key={index}
              className={
                selectedIndex === index
                  ? `${styles.li_box} ${styles.selected}`
                  : flagTitles.length - 1 === index
                  ? `${styles.li_box} ${styles.none}`
                  : styles.li_box
              }
              onClick={() => handleClick(index)}
            >
              <div className={styles.li_shape}>
                <li className={styles.li}>{flag.title}</li>
              </div>
            </div>
          ))}
        </ul>
        <div className={styles.content_container}>
          <center>
            <h2 className={styles.content_title}>
              {selectedIndex !== null && flagTitles[selectedIndex].title}
            </h2>
          </center>

          <div className={styles.content}>
            {selectedIndex !== null && flagTitles[selectedIndex].component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagFile;
