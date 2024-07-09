import styles from "./TeamProject.module.css";
const teamProjects = [
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/Home.png`,
    title: "Home_page",
    content: [
      "홍보 이미지 자동 슬라이드를 구현 (인디케이터&화살표 버튼을 이용한 이미지 이동)",
      "Best 상품을 가져오는 버튼을 이용한 페이지네이션 구현",
      "헤더에는 상품명을 입력할 수 있는 검색창을 구현하여 검색한 상품명과 일치하는 상품에 대한 상품 목록 페이지로 이동.",
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/loginPage.png`,
    title: "Login_page",
    content: [
      "로그인 헤더 따로 작성 useNavigate()를 사용해 이전 페이지 방문 가능하도록 구현",
      "비밀번호 유효성 검사를 거친 로그인 구현",
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/signupPage.png`,
    title: "SignUp_page",
    content: [
      "아이디, 비밀번호, 이메일 input값 유효성 검사 구현(숫자, 문자별 input 차별 구현)",
      "'카카오 주소 검색 라이브러리'를 이용한 주소 검색 구현",
      "이메일 인증을 위한 알림, 타이머 구현",
    ],
  },
];

const TeamProject = () => {
  return (
    <div className={styles.TeamProject}>
      <h3>프론트 엔드 영역</h3>
      <p className={styles.detail}>
        2024년 12월을 시작으로 7개월에 걸쳐 제작한 코스메틱 웹 사이트입니다.
        Route를 이용한 페이지 이동을 구현하고, bar 메뉴의 카테고리 선택과
        header의 상품명 검색에 대한 상태 값들을 모든 페이지에서 전달 가능하게
        합니다.
      </p>
      <div className={styles.container}>
        <div className={styles.content_container}>
          {teamProjects.map((project, index) => (
            <div className={styles.content_box} key={index}>
              <div className={styles.img_box}>
                <img
                  className={styles.screen}
                  src={project.src}
                  alt={`Screen ${index + 1}`}
                />
              </div>

              <h3 className={styles.title}>{project.title}</h3>

              <div className={styles.detail}>
                {project.content.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamProject;
