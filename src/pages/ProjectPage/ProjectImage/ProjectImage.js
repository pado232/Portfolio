import { useRef, useState } from "react";
import Container from "../../../components/utils/Container/Container";
import styles from "./ProjectImage.module.css";

const shoppingMallPage = [
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/Home.png`,
    name: "Home",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/loginPage.png`,
    name: "Login",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/signupPage.png`,
    name: "SignIn",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/itemlistPage.png`,
    name: "Itemlist",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/itemdetailPage.png`,
    name: "ItemDetail",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/haertPage.png`,
    name: "Haert",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/cartPage.png`,
    name: "Cart",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/mypagePage.png`,
    name: "MyPage",
  },
];

const ProjectImage = () => {
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
    <Container>
      <div className={styles.ProjectImage}>
        <h3>'Real Moment' Shopping Mall</h3>
        <div className={styles.shop_img_container}>
          {shoppingMallPage.map((page, index) => (
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
    </Container>
  );
};

export default ProjectImage;
