import React, { createContext, useContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects] = useState(projectData); // 상태로 관리할 필요가 없으면 useState 없이도 가능합니다.

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);

export const projectData = {
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
        {
          src: "/images/Shopping-Mall-Image/signupPage.png",
          name: "SignUp",
          linkUrl: "https://real-moment.kro.kr/signup",
        },
        {
          src: "/images/Shopping-Mall-Image/itemlistPage.png",
          name: "itemList",
          linkUrl: "https://real-moment.kro.kr/item/all",
        },
        {
          src: "/images/Shopping-Mall-Image/itemdetailPage.png",
          name: "ItemDetail",
          linkUrl: "https://real-moment.kro.kr/item/16",
        },
        {
          src: "/images/Shopping-Mall-Image/cartPage.png",
          name: "Cart",
          linkUrl: "https://real-moment.kro.kr/cart",
        },
        {
          src: "/images/Shopping-Mall-Image/haertPage.png",
          name: "Heart",
          linkUrl: "https://real-moment.kro.kr/heart",
        },

        // 나머지 이미지도 추가
      ],
      link: [
        {
          title: "RealMoment",
          isIcon: false,
          srcOrIcon: "/images/RealMomentLogo.png",
          linkUrl: "https://real-moment.kro.kr/",
        },
        {
          title: "Github",
          isIcon: true,

          linkUrl: "https://github.com/pado232/RealMoment",
        },
        {
          title: "Notion",
          isIcon: true,

          linkUrl:
            "https://www.notion.so/ShoppingMall-83cac7f2de6f47b48037173179d5c961",
        },
      ],
      detailsInfo: [
        {
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
              content: [
                "비회원,회원 모두가 상품을 쉽게 탐색할 수 있고, 회원이 상품을 구매할 수 있는 사이트 (구매자를 위한 사이트)",
              ],
            },
            {
              title: "기능의 흐름",
              content: [
                "- 데이터 전송방식: REST API",
                "- 데이터의 형식: JSON 형식 ",
                "- 데이터 통신 프로토콜: HTTP/HTTPS (RESTful API) ",
              ],
            },
          ],
        },
      ],
      detailsTech: [
        {
          title: "프로그래밍 언어",
          type: [{ src: "/images/LogoJavascript.png", name: "Javascript" }],
        },
        {
          title: "프레임워크",
          type: [{ src: "/images/LogoReact.png", name: "React" }],
        },
        {
          title: "통합 개발 환경(IDE)",
          type: [{ src: "/images/LogoVSCode.png", name: "Visual Studio Code" }],
        },
        {
          title: "버전 관리 및 협업",
          type: [{ src: "/images/LogoGithub.png", name: "GitHub" }],
        },
        {
          title: "상태관리",
          type: [{ name: "Context API, React Router" }],
        },
        {
          title: "스타일링",
          type: [{ src: "/images/LogoCSS3.png", name: "CSS" }],
        },
      ],
      // detailsExp: [
      //   {
      //     src: "/images/Shopping-Mall-Image/Home.png",
      //     title: "Home_page",
      //     content: [
      //       "홍보 이미지 자동 슬라이드를 구현 (인디케이터&화살표 버튼을 이용한 이미지 이동)",
      //       "Best 상품을 가져오는 버튼을 이용한 페이지네이션 구현",
      //       "헤더에는 상품명을 입력할 수 있는 검색창을 구현하여 검색한 상품명과 일치하는 상품에 대한 상품 목록 페이지로 이동.",
      //     ],
      //   },
      //   {
      //     src: "/images/Shopping-Mall-Image/loginPage.png",
      //     title: "Login_page",
      //     content: [
      //       "로그인 헤더 따로 작성 useNavigate()를 사용해 이전 페이지 방문 가능하도록 구현",
      //       "비밀번호 유효성 검사를 거친 로그인 구현",
      //     ],
      //   },
      //   {
      //     src: "/images/Shopping-Mall-Image/signupPage.png",
      //     title: "SignUp_page",
      //     content: [
      //       "아이디, 비밀번호, 이메일 input값 유효성 검사 구현(숫자, 문자별 input 차별 구현)",
      //       "'카카오 주소 검색 라이브러리'를 이용한 주소 검색 구현",
      //       "이메일 인증을 위한 알림, 타이머 구현",
      //     ],
      //   },
      // ],
    },

    // RealMomentAdmin
    RealMomentAdmin: {
      title: "Real Moment Admin",
      summary:
        "2024년 3월을 시작으로 4개월에 걸쳐 제작한 코스메틱 웹 사이트에 적용할 값들을 추가, 삭제, 수정하기 위한 웹 사이트입니다. 모든 페이지는 로그인 되지 않으면 접근 할 수 없고 판매자가 사용자에게 필요한 이미지와 텍스트를 서버에 보내기 위해 사용할 수 있습니다.",
      images: [
        {
          src: "/images/Admin-Image/adminHome.png",
          name: "Home",
          linkUrl: "https://real-moment.kro.kr/",
        },
      ],
      link: [
        {
          title: "Github",
          linkUrl: "https://github.com/pado232/ShopAdmin",
          isIcon: true,
        },
        {
          title: "Notion",
          linkUrl:
            "https://www.notion.so/ShoppingMall-83cac7f2de6f47b48037173179d5c961",
          isIcon: true,
        },
      ],
      detailsInfo: [
        {
          src: "/images/Shopping-Mall-Image/Home.png",
          summary:
            "2024년 3월을 시작으로 4개월에 걸쳐 제작한 코스메틱 웹 사이트에 적용할 값들을 추가, 삭제, 수정하기 위한 웹 사이트입니다. 모든 페이지는 로그인 되지 않으면 접근 할 수 없고 판매자가 사용자에게 필요한 이미지와 텍스트를 서버에 보내기 위해 사용할 수 있습니다.",
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
                "- 개발: 3개월",
                "- 유지보수: 진행 중",
              ],
            },
            {
              title: "기능",
              content: [
                "RealMoment 쇼핑몰에 들어갈 정보를 추가, 수정, 삭제 가능한 사이트 ( 판매자를 위한 사이트 )",
              ],
            },
            {
              title: "기능의 흐름",
              content: [
                "- 데이터 전송방식: REST API",
                "- 데이터의 형식: JSON 형식 ",
                "- 데이터 통신 프로토콜: HTTP/HTTPS (RESTful API) ",
              ],
            },
          ],
        },
      ],
      detailsTech: [
        {
          title: "프로그래밍 언어",
          type: [{ src: "/images/LogoJavascript.png", name: "Javascript" }],
        },
        {
          title: "프레임워크",
          type: [{ src: "/images/LogoReact.png", name: "React" }],
        },
        {
          title: "통합 개발 환경(IDE)",
          type: [{ src: "/images/LogoVSCode.png", name: "Visual Studio Code" }],
        },
        {
          title: "버전 관리 및 협업",
          type: [{ src: "/images/LogoGithub.png", name: "GitHub" }],
        },
        {
          title: "상태관리",
          type: [{ name: "Context API, React Router" }],
        },
        {
          title: "스타일링",
          type: [{ src: "/images/LogoCSS3.png", name: "CSS" }],
        },
      ],
      // detailsExp: [
      //   {
      //     src: "/images/Admin-Image/adminHome.png",
      //     title: "모든 페이지에 대한 설명",
      //     content: [
      //       "모든 페이지는 로그인을 통한 인증을 거치지 않으면 열람할 수 없음",
      //       "",
      //       "",
      //     ],
      //   },
      // ],
    },

    // Portfolio
    Portfolio: {
      title: "Portfolio",
      summary:
        "2024년 7월을 시작으로 약 1개월에 걸쳐 제작한 '나'를 표현한 포트폴리오 프로젝트입니다. 암호를 입력해서 해당 페이지들로 이동할 수 있도록 제작했고, 해당 페이지는 암호를 풀지 못하면 진입할 수 없습니다. 소개, 프로젝트, 연락에 대한 페이지로 각각 구성되어 있습니다.",
      images: [
        // {
        //   src: "/images/Portfolio-Image/intro.png",
        //   name: "Intro",
        // },
        // {
        //   src: "/images/Portfolio-Image/project.png",
        //   name: "Project",
        // },
        // {
        //   src: "/images/Portfolio-Image/contact.png",
        //   name: "Contact",
        // },
        {
          src: "/images/Portfolio-Image/home.png",
          name: "Home",
        },
      ],
      link: [
        {
          title: "Github",
          linkUrl: "https://github.com/pado232/Portfolio",
          isIcon: true,
        },
        {
          title: "Notion",
          linkUrl:
            "https://www.notion.so/Portfolio-7a25d265898547bd8472f62ad9b1cd9d",
          isIcon: true,
        },
      ],
      detailsInfo: [
        {
          src: "/images/Portfolio-Image/home.png",
          summary:
            "2024년 7월을 시작으로 약 1개월에 걸쳐 제작한 '나'를 표현한 포트폴리오 프로젝트입니다. 암호를 입력해서 해당 페이지들로 이동할 수 있도록 제작했고, 해당 페이지는 암호를 풀지 못하면 진입할 수 없습니다. 소개, 프로젝트, 연락에 대한 페이지로 각각 구성되어 있습니다.",
          addText: [
            {
              title: "개발 인원",
              content: ["총 1명", "- 프론트엔드: 1명"],
            },
            {
              title: "역할",
              content: ["전체"],
            },
            {
              title: "일정",
              content: ["- 개발: 1개월", "- 유지보수: 진행 중"],
            },
            {
              title: "기능",
              content: ["포트폴리오 형식의 페이지 이동이 가능한 웹 사이트"],
            },
            {
              title: "기능의 흐름",
              content: [
                "메인 페이지에서 암호를 확인 후 페이지 이동, Redux를 이용한 각 프로젝트 페이지 데이터 관리, EmailJS 사용으로 이메일 전송 가능",
              ],
            },
          ],
        },
      ],
      detailsTech: [
        {
          title: "프로그래밍 언어",
          type: [{ src: "/images/LogoJavascript.png", name: "Javascript" }],
        },
        {
          title: "프레임워크",
          type: [{ src: "/images/LogoReact.png", name: "React" }],
        },
        {
          title: "통합 개발 환경(IDE)",
          type: [{ src: "/images/LogoVSCode.png", name: "Visual Studio Code" }],
        },
        {
          title: "버전 관리",
          type: [{ src: "/images/LogoGithub.png", name: "GitHub" }],
        },
        {
          title: "상태관리",
          type: [{ name: "Context API, React Router, Redux" }],
        },
        {
          title: "스타일링",
          type: [{ src: "/images/LogoCSS3.png", name: "CSS Module" }],
        },
      ],
      detailsExp: [
        {
          src: "/images/Portfolio-Image/home.png",
          title: "Home_page",
          content: [
            "암호를 입력해서 들어갈 수 있게 제작, 암호를 풀지 않고 페이지 이동하거나 다시 LOCK이 걸리면 해당 페이지에는 접근할 수 없다는 안내를 띄움",
            "직접 키보드를 이용해 타이핑하거나 화면에 나타난 키보드를 마우스로 클릭해 암호 입력 가능",
            "상단에 토글 버튼을 이용해 다크모드 가능",
          ],
        },
        {
          src: "/images/Portfolio-Image/intro.png",
          title: "Intro_page",
          content: [
            "[동일] 페이지 상단 - 해당 페이지에 대한 글자가 튀어오르는 애니메이션, 메뉴, 잠금(홈으로 이동), 푸터, 고정 메뉴 바(페이지 이동, 최상단으로 이동, 다크모드), 섹션 이동 메뉴 바 ",
            "화면 크기에 따라 소개 글 배치와 크기가 변경되는 반응형 웹 디자인",
          ],
        },
        {
          src: "/images/Portfolio-Image/project.png",
          title: "Project_page",
          content: [
            "[동일] 페이지 상단 - 해당 페이지에 대한 글자가 튀어오르는 애니메이션, 메뉴, 잠금(홈으로 이동), 푸터, 고정 메뉴 바(페이지 이동, 최상단으로 이동, 다크모드), 섹션 이동 메뉴 바",
            "플래그 폴더를 만들어 프로젝트를 불러오고, 프로젝트에 대한 스크린 이미지가 여러 개라면 클릭하여 확대 가능",
            "'자세히 보기' 플래그를 버튼을 클릭하면 모달을 띄워 프로젝트의 상세 내용을 보여줌",
          ],
        },
        {
          src: "/images/Portfolio-Image/contact.png",
          title: "Contact_page",
          content: [
            "[동일] 페이지 상단 - 해당 페이지에 대한 글자가 튀어오르는 애니메이션, 메뉴, 잠금(홈으로 이동), 푸터, 고정 메뉴 바(페이지 이동, 최상단으로 이동, 다크모드), 섹션 이동 메뉴 바 ",
            "이메일을 복사 가능한 버튼, 복사가 완료 되었다면 안내 문구를 띄움",
            "'emailJS'를 이용하여 이메일 작성 폼에 입력하고 전송하면 사용자가 이메일을 보낼 수 있음",
          ],
        },
      ],
    },

    emotionDiary: {
      title: "Emotion Diary",
      summary:
        "2023년 1월을 시작으로 1개월에 걸쳐 제작한 첫 프로젝트 입니다. 인프런 한입 크기로 잘라먹는 리액트 강의 내용으로 첫 리액트 프레임워크를 이용한 감정을 기록하는 다이어리입니다.",
      images: [
        {
          src: "/images/emotion/emotionHome.png",
          name: "Home",
        },
        {
          src: "/images/emotion/viewPage.png",
          name: "View",
        },
        {
          src: "/images/emotion/writePage.png",
          name: "Create & Edit",
        },
      ],
      link: [
        // 빈 값으로 설정
      ],
      detailsInfo: [
        {
          src: "/images/Shopping-Mall-Image/Home.png",
          summary:
            "2023년 1월을 시작으로 1개월에 걸쳐 제작한 첫 프로젝트 입니다. 인프런 한입 크기로 잘라먹는 리액트 강의 내용으로 첫 리액트 프레임워크를 이용한 감정을 기록하는 다이어리입니다.",
          addText: [
            {
              title: "일정",
              content: ["- 학습: 1개월"],
            },
            {
              title: "기능",
              content: ["오늘의 감정을 기록할 수 있는 다이어리"],
            },
            {
              title: "기능의 흐름",
              content: [
                "감정을 기록, 수정, 편집할 수 있도록 state를 전역으로 사용",
              ],
            },
            {
              title: "기술",
              content: [
                "- 프로그래밍 언어: javaScript ",
                "- 프레임워크: React",
                "- 통합 개발 환경(IDE): Visual Studio Code",
                "- 상태관리: Context API, React Router, Redux",
                "- 스타일링: CSS",
              ],
            },
          ],
        },
      ],
    },
    // 나머지 프로젝트에 대한 데이터도 추가
  },
  teamProjects: ["RealMoment", "RealMomentAdmin"],
  personalProjects: ["Portfolio", "emotionDiary"],
};

// const projectReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export default projectReducer;
