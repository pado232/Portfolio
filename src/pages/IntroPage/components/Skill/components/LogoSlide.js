import styles from "./LogoSlide.module.css";

const Logos = [
  { src: `/Images/LogoHtml5.png`, name: "HTML5" },
  { src: `/Images/LogoCSS3.png`, name: "CSS3" },
  {
    src: `/Images/LogoJavascript.png`,
    name: "JavaScript",
  },
  { src: `/Images/LogoReact.png`, name: "React" },
  { src: `/Images/LogoGithub.png`, name: "Git" },
];

const LogoSlide = () => {
  return (
    <div className={styles.LogoSlide}>
      <div className={styles.logo_container}>
        {Logos.map((logo, index) => (
          <div className={styles.logo_wrapper} key={index}>
            <img
              className={styles.logo}
              src={logo.src}
              alt={`${logo.name} Logo`}
              width="72" /* 4.5rem = 72px */
              height="72" /* 4.5rem = 72px */
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlide;
