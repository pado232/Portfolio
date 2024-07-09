import { useState } from "react";
import styles from "./ProjectImage.module.css";

const shoppingMallPage = [
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/Home.png`,
    name: "Home",
    linkUrl: "https://real-moment.kro.kr/",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/loginPage.png`,
    name: "Login",
    linkUrl: "https://real-moment.kro.kr/login",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/signupPage.png`,
    name: "SignIn",
    linkUrl: "https://real-moment.kro.kr/signup",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/itemlistPage.png`,
    name: "Itemlist",
    linkUrl: "https://real-moment.kro.kr/item/all",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/itemdetailPage.png`,
    name: "ItemDetail",
    linkUrl: "https://real-moment.kro.kr/detail/6",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/haertPage.png`,
    name: "Haert",
    linkUrl: "https://real-moment.kro.kr/",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/cartPage.png`,
    name: "Cart",
    linkUrl: "https://real-moment.kro.kr/",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/mypagePage.png`,
    name: "MyPage",
    linkUrl: "https://real-moment.kro.kr/",
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
    <div className={styles.ProjectImage}>
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
  );
};

export default ProjectImage;
