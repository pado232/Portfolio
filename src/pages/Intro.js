import Main from "../components/Main";
import Container from "../utils/Container";
import AboutMe from "../components/Intro/AboutMe";

// import "../styles/intro.css";
const Intro = () => {
  return (
    <div className="Intro">
      <Main />
      <Container>
        <AboutMe />
      </Container>
    </div>
  );
};

export default Intro;
