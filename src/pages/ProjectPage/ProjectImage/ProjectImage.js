import { useState } from "react";
import styles from "./ProjectImage.module.css";

const ProjectImage = ({ pageImages }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const handleMouseMove = (event, image) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setCurrentImage(image);
  };

  const handleClick = (image) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div className={styles.ProjectImage}>
      <div className={styles.shop_img_container}>
        {pageImages.map((page, index) => (
          <div className={styles.shop_img_wrapper} key={index}>
            <img
              className={styles.shop_img}
              src={page.src}
              alt={`Screenshot of ${page.name}`}
              onClick={() => handleClick(page.src)}
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => setShowMagnifier(false)}
              onMouseMove={(event) => handleMouseMove(event, page.src)}
            />
            <div className={styles.page_title}>{page.name}</div>
            {showMagnifier && currentImage === page.src && (
              <div
                className={styles.magnifier}
                style={{
                  top: mousePosition.y - 25,
                  left: mousePosition.x - 25,
                  backgroundImage: `url(${page.src})`,
                  backgroundPosition: `-${mousePosition.x * 2}px -${
                    mousePosition.y * 2
                  }px`,
                }}
              >
                <img src="/images/readingGlasses.png" alt="cursor" />
              </div>
            )}
          </div>
        ))}
      </div>

      {modalImage && (
        <div className={styles.modal}>
          <div>
            <div className={styles.close_text}>
              <p> 취소하시려면 확대한 이미지를 클릭하세요.</p>
            </div>
            <img
              className={styles.modalImage}
              src={modalImage}
              alt="Enlarged view"
              onClick={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectImage;
