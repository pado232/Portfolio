const initialState = {
  projects: {
    RealMoment: {
      title: "Real Moment",
      summary:
        "2023년 12월을 시작으로 7개월에 걸쳐 제작한 코스메틱 웹 사이트입니다. 상품 목록을 조회, 결제할 수 있고, Route를 이용한 페이지 이동을 구현하고, bar 메뉴의 카테고리 선택과 header의 상품명 검색에 모든 페이지에서 나타나고 동작합니다.",
      images: [
        {
          src: "/images/Shopping-Mall-Image/Home.png",
          name: "Home",
          linkUrl: "https://real-moment.kro.kr/",
        },
        {
          src: "/images/Shopping-Mall-Image/loginPage.png",
          name: "Login",
          linkUrl: "https://real-moment.kro.kr/login",
        },
        // 나머지 이미지도 추가
      ],
      link: [
        {
          srcOrIcon: "/images/RealMomentLogo.png",
          linkUrl: "https://real-moment.kro.kr/",
          isIcon: false,
        },
        {
          srcOrIcon: <FaGithub size={35} />,
          linkUrl: "https://github.com/pado232/RealMoment",
          isIcon: true,
        },
        {
          srcOrIcon: <SiNotion size={35} />,
          linkUrl:
            "https://www.notion.so/ShoppingMall-83cac7f2de6f47b48037173179d5c961",
          isIcon: true,
        },
      ],
      detailsInfo: [
        {
          src: "/images/Shopping-Mall-Image/Home.png",
          summary:
            "2024년 12월을 시작으로 7개월에 걸쳐 제작한 코스메틱 웹 사이트입니다. 상품 목록을 조회, 결제할 수 있고, Route를 이용한 페이지 이동을 구현하고, bar 메뉴의 카테고리 선택과 header의 상품명 검색에 모든 페이지에서 나타나고 동작합니다.",
          addText: [
            {
              title: "개발 인원",
              content: ["총 2명", "- 프론트엔드: 1명", "- 백엔드: 1명"],
            },
            {
              title: "역할",
              content: ["프론트 영역 전부"],
            },
            {
              title: "일정",
              content: [
                "- 기획: 1개월",
                "- 개발: 6개월",
                "- 유지보수: 진행 중",
              ],
            },
            {
              title: "기능",
              content: ["회원이 상품을 열람하고 구매할 수 있는 사이트"],
            },
            {
              title: "기능의 흐름",
              content: [
                "- 데이터 전송방식 : REST API",
                "- 데이터의 형식: JSON 형식 ",
                "- 데이터 통신 프로토콜: HTTP/HTTPS (RESTful API) ",
              ],
            },
            {
              title: "기술",
              content: [
                "- 프로그래밍 언어 : javaScript ",
                "- 프레임워크: React",
                "- 통합 개발 환경(IDE): Visual Studio Code",
                "- 버전 관리 및 협업: Git, GitHub",
                "- 상태관리: Context API, React Router",
                "- 스타일링: CSS",
              ],
            },
          ],
        },
      ],
      detailsExp: [
        {
          src: "/images/Shopping-Mall-Image/Home.png",
          title: "Home_page",
          content: [
            "홍보 이미지 자동 슬라이드를 구현 (인디케이터&화살표 버튼을 이용한 이미지 이동)",
            "Best 상품을 가져오는 버튼을 이용한 페이지네이션 구현",
            "헤더에는 상품명을 입력할 수 있는 검색창을 구현하여 검색한 상품명과 일치하는 상품에 대한 상품 목록 페이지로 이동.",
          ],
        },
        {
          src: "/images/Shopping-Mall-Image/loginPage.png",
          title: "Login_page",
          content: [
            "로그인 헤더 따로 작성 useNavigate()를 사용해 이전 페이지 방문 가능하도록 구현",
            "비밀번호 유효성 검사를 거친 로그인 구현",
          ],
        },
        {
          src: "/images/Shopping-Mall-Image/signupPage.png",
          title: "SignUp_page",
          content: [
            "아이디, 비밀번호, 이메일 input값 유효성 검사 구현(숫자, 문자별 input 차별 구현)",
            "'카카오 주소 검색 라이브러리'를 이용한 주소 검색 구현",
            "이메일 인증을 위한 알림, 타이머 구현",
          ],
        },
      ],
    },
    // portfolio: {
    //   title: "Portfolio",
    //   summary:
    //     "2024년 7월을 시작으로 1개월에 걸쳐 제작한 포트폴리오 웹 사이트입니다.",
    //   image: [
    //     {
    //       src: "/images/Portfolio.png",
    //       name: "Portfolio",
    //       linkUrl: "https://portfolio.example.com",
    //     },
    //   ],
    //   details: "상세정보입니다.",
    //   description: "상세설명입니다.",
    // },
    // 나머지 프로젝트에 대한 데이터도 추가
  },
  teamProjects: ["RealMoment"],
  //   personalProjects: ["portfolio"],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
