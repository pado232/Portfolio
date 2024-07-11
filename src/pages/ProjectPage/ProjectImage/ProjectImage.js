import { useState } from "react";
import styles from "./ProjectImage.module.css";

const ProjectImage = ({ pageImages }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleMouseMove = (event, image) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setCurrentImage(image);
  };

  return (
    <div className={styles.ProjectImage}>
      <div className={styles.shop_img_container}>
        {pageImages.map((page, index) => (
          <div
            className={styles.shop_img_wrapper}
            key={index}
            onMouseEnter={() => setShowMagnifier(true)}
            onMouseLeave={() => setShowMagnifier(false)}
            onMouseMove={(event) => handleMouseMove(event, page.src)}
          >
            <img
              // style={{
              //   cursor: `url(${process.env.PUBLIC_URL}/images/readingGlasses.png), auto`,
              // }}
              className={styles.shop_img}
              src={page.src}
              alt={`Screenshot of ${page.name}`}
            />
            <p className={styles.page_title}>{page.name}</p>
            {showMagnifier && currentImage === page.src && (
              <div
                className={styles.magnifier}
                style={{
                  top: mousePosition.y - 50,
                  left: mousePosition.x - 50,
                  backgroundImage: `url(${page.src})`,
                  backgroundPosition: `-${mousePosition.x * 2}px -${
                    mousePosition.y * 2
                  }px`,
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/readingGlasses.png`}
                  alt="curser"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImage;
