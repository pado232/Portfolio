import Container from "../../../../components/utils/Container/Container";
import { useTheme } from "../../../../ThemeContext/ThemeContext";
import LogoSilde from "./components/LogoSlide";
import lightStyles from "./Skill.module.css";
import darkStyles from "./SkillD.module.css";

const Skill = () => {
  const [theme] = useTheme();

  const styles = theme === "light" ? lightStyles : darkStyles;
  return (
    <Container>
      <div className={styles.Skill}>
        <LogoSilde />
        <h3 className={styles.title_h3}>
          <center>이런 부분을 경험했어요.</center>
        </h3>
        <h3 className={styles.name_h3}>JavaScript</h3>
        {/* <p className={styles.p}>
          비동기 처리, DOM조작, HTTP 요청 기능과 상태관리, 에러 핸들링, 적절한
          함수를 사용해 가독성/유지보수성/효율성 높이기
        </p> */}
        <p className={styles.p}>문법과 구조</p>
        <p className={styles.p}>DOM조작 하기</p>
        <p className={styles.p}>비동기 실행과 Promise 객체 적절히 사용하기</p>
        <br />

        <h3 className={styles.name_h3}>CSS</h3>
        <p className={styles.p}>동적인 애니메이션 구현</p>
        <p className={styles.p}>화면 크기에 따른 유연한 반응형 웹 디자인</p>
        <p className={styles.p}>
          클래스 이름 중복 방지를 위한 CSS Modules 사용
        </p>
        <br />
        <h3 className={styles.name_h3}>HTML</h3>
        <p className={styles.p}>적절한 시멘틱 태그 사용</p>
        <p className={styles.p}>유효성 검사</p>
        <br />
        <h3 className={styles.name_h3}>React</h3>
        <p className={styles.p}>
          Redux, contextAPI를 이용한 porp-drilling 문제 해결
        </p>
        <p className={styles.p}>React Hook 사용</p>
        <br />
        <h3 className={styles.name_h3}>Git, Github</h3>
        <p className={styles.p}>협업과 버전 관리를 위한 Git 사용</p>
        <p className={styles.p}>README 작성</p>
      </div>
    </Container>
  );
};

export default Skill;
