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
        <h2> Skills </h2>
        <LogoSilde />
        <h3 className={styles.title_h3}>
          <center>이런 부분을 경험했어요.</center>
        </h3>
        <h3 className={styles.name_h3}>Javascript</h3>
        <p>
          비동기 처리, DOM조작, HTTP 요청 기능과 상태관리, 에러 핸들링, 적절한
          함수를 사용해 가독성/유지보수성/효율성 높이기
        </p>
        <br />
        <h3 className={styles.name_h3}>CSS</h3>
        <p>
          transform을 사용한 애니메이션 요소의 시각적 효과, 화면 크기에 따른
          유연한 반응형 웹 디자인
        </p>
        <br />
        <h3 className={styles.name_h3}>HTML</h3>
        <p>시멘틱 HTML을 사영한 명확한 구조, 재사용 가능한 코드 작성</p>
        <br />
        <h3 className={styles.name_h3}>React</h3>
        <p>
          redux를 이용한 porp-drilling 문제 해결, 재사용 가능한 컴포넌트 작성
        </p>
        <br />
        <h3 className={styles.name_h3}>Git, Github</h3>
        <p>
          변경사항 커밋 시 커밋 메시지를 명확하게 작성, 프로젝트 clone, README
          파일 작성
        </p>
      </div>
    </Container>
  );
};

export default Skill;
