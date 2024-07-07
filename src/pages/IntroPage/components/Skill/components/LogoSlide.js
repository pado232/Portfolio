import styles from "./LogoSlide.module.css";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Logos = [
  { src: `${process.env.PUBLIC_URL}/images/LogoHtml5.png`, name: "HTML5" },
  { src: `${process.env.PUBLIC_URL}/images/LogoCSS3.png`, name: "CSS3" },
  {
    src: `${process.env.PUBLIC_URL}/images/LogoJavascript.png`,
    name: "JavaScript",
  },
  { src: `${process.env.PUBLIC_URL}/images/LogoReact.png`, name: "React" },
  { src: `${process.env.PUBLIC_URL}/images/LogoGithub.png`, name: "GitHub" },
];

const LogoSlide = () => {
  return (
    <div className={styles.LogoSlide}>
      {/* <div className={styles.arrow_icon_warpper}>
        <IoIosArrowBack size={30} />
      </div> */}

      <div className={styles.logo_container}>
        {Logos.map((logo, index) => (
          <div className={styles.logo_wrapper} key={index}>
            <img
              className={styles.logo}
              src={logo.src}
              alt={`${logo.name} Logo`}
            />
            <p className={styles.logo_name}>{logo.name}</p>
          </div>
        ))}
      </div>
      {/* <div>
        <IoIosArrowForward size={30} />
      </div> */}
    </div>
  );
};

export default LogoSlide;
