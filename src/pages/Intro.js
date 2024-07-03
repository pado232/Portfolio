import Main from "../components/Main";
import "../styles/intro.css";
const Intro = () => {
  return (
    <div className="Intro">
      <Main />
      <div>
        <div className="My">
          <img
            className="my_img"
            src={process.env.PUBLIC_URL + `/images/Dony.jpg`}
          />
        </div>
        <div className="content">
          <h2>Front Developer</h2>
          <p>내용</p>
          <p>내용</p>
          <p>내용</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
