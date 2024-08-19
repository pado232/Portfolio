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
        },
        {
          src: "/images/Shopping-Mall-Image/loginPage.png",
          name: "Login",
        },
        {
          src: "/images/Shopping-Mall-Image/signupPage.png",
          name: "SignUp",
        },
        {
          src: "/images/Shopping-Mall-Image/itemlistPage.png",
          name: "itemList",
        },
        {
          src: "/images/Shopping-Mall-Image/itemdetailPage.png",
          name: "ItemDetail",
        },
        {
          src: "/images/Shopping-Mall-Image/cartPage.png",
          name: "Cart",
        },
        {
          src: "/images/Shopping-Mall-Image/haertPage.png",
          name: "Heart",
        },
        {
          src: "/images/Shopping-Mall-Image/mypagePage.png",
          name: "MyPage",
        },
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
          // src: "/images/Shopping-Mall-Image/loginPage.png",
          title: "Login_page",
          content: [
            "로그인 헤더 따로 작성 useNavigate()를 사용해 이전 페이지 방문 가능하도록 구현",
            "비밀번호 유효성 검사를 거친 로그인 구현",
          ],
        },
        {
          // src: "/images/Shopping-Mall-Image/signupPage.png",
          title: "ItemList_page",
          content: [
            "사용자가 원하는 제품을 쉽게 찾을 수 있도록 헤더의 검색창, 카테고리 선택 통해 상품 목록 검색이 가능하고 필터, 페이지네이션 기능을 제공",
          ],
        },
        {
          // src: "/images/Shopping-Mall-Image/signupPage.png",
          title: "ItemDetail_page",
          content: [
            "특정 상품에 대한 상세 정보, 구매, 장바구니에 담기, 하트함에 담기, 상세 상품에 대한 리뷰, Q&A 작성이 가능한 페이지",
          ],
        },
        {
          // src: "/images/Shopping-Mall-Image/signupPage.png",
          title: "Cart_page",
          content: [
            "구매하고 싶은 상품들을 미리 담아 각각의 가격, 수량 확인할 수 있는 기능을 제공",
            "저장한 제품들 중 체크박스로 선택한 제품들에 대해서는 삭제와 주문 가능",
          ],
        },
        {
          // src: "/images/Shopping-Mall-Image/signupPage.png",
          title: "Heart_page",
          content: [
            "사용자가 관심있는 상품들을 따로 저장하고 목록으로 조회 가능",
          ],
        },
        {
          // src: "/images/Shopping-Mall-Image/signupPage.png",
          title: "Payment_page",
          content: [
            "기본 배송지로 구매자의 정보를 입력하고 안전하게 결제할 수 있는 기능을 제공 (아임포트 사용)",
            "결제할 항목에 대한 간단한 정보를 리스트로 보여주고, 적립금을 사용하여 결제금액에 대한 할인을 받을 수 있음.",
          ],
        },
        {
          // src: "/images/Shopping-Mall-Image/signupPage.png",
          title: "MyPage_page",
          content: [
            "[주문내역] - 주문 내역을 확인하고 주문상태에 따라 구매확정, 환불요청 등 사용자가 주문 후 상품에 대한 요청을 판매자에게 전달",
            "[사용자 리뷰 및 평점] - 사용자들이 제품에 대한 리뷰 작성과 별점 부여 가능",
            "[적립금] - 사용자는 부여 받은 멤버십에 의한 적립금 해택을 받음. 해당 적립금은 주문 시 결제금액에 적립금 금액을 차감하여 사용 가능",
            "[사용자 1:1문의 및 Q&A] - 사용자들이 쇼핑몰이나 상품에 대한 문의할 수 있고 판매자로부터 답변 확인 가능",
            "[배송지 관리] - 결제 시 사용자가 설정한 기본배송지를 이용하여 간편하게 주문할 수 있도록 사용자의 배송 정보를 저장할 수 있는 페이지",
            "[개인정보] - 사용자의 개인정보 확인 시 보안을 위해 민감한 정보는 블러 처리하고 인증을 거쳐 안전하게 수정할 수 있음.",
          ],
        },
      ],
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
      detailsExp: [
        {
          src: "/images/Admin-Image/adminHome.png",
          title: "관리자 웹 사이트에 대한 전체 설명",
          content: [
            "모든 페이지는 로그인 시 열람 가능하고, 권한별로 페이지에 대한 권한이 부여됨.",
            "어떤 항목에 대한 권한이 없는 관리자라면 해당 항목에 대해 조회, 수정, 삭제가 불가함",
            "권한의 종류에는 사원(ADMIN, CUSTOMER), 이사(OPERATOR), 대표(REPRESENTATIVE)가 존재함",
          ],
        },
        {
          title: "제품 관리",
          content: [
            "[새 제품 추가] - 새로운 제품 등록을 위한 제품에 대한 정보와 이미지 입력과 저장",
            "[제품 목록 조회 및 편집] - 순서, 카테고리, 진열 여부에 대해 필터할 수 있으며, 상품명을 검색하여 조회 가능. '상세보기'에 들어가 해당 상품에 대한 상세한 정보, 리뷰, Q&A 열람과 편집 가능",
          ],
        },
        {
          title: "주문 관리",
          content: [
            "[주문 목록 및 세부 정보 확인] - 회원이 주문한 상품 결제상태, 기간에 따라 필터할 수 있고, 상품명, 아이디, 주문고유번호를 검색하여 조회 가능",
          ],
        },
        {
          title: "회원 관리",
          content: [
            "[회원 목록 조회] - 순서, 계정 탈퇴 여부, 등급별로 필터할 수 있으며, 회원 아이디을 검색하여 조회 가능",
          ],
        },
        {
          title: "문의/평가 관리",
          content: [
            "[1:1 문의 조회 및 답변 관리] - 답변 존재 여부를 필터할 수 있으며, 회원이 문의한 글에 답변을 추가, 삭제, 수정 (다양한 문의)",
            "[Q&A 목록 조회 및 답변관리] - 답변 존재 여부를 필터할 수 있으며, 회원이 문의한 글에 답변을 추가, 삭제, 수정 (상품에 대한 문의)",
            "[고객 리뷰 및 평가 관리] - 별점별로 필터할 수 있으며, 회원이 작성한 리뷰를 조회",
          ],
        },
        {
          title: "사이트 관리",
          content: [
            "[공지사항 관리] - 공지사항을 작성, 수정, 삭제",
            "[카테고리 및 쇼핑몰 이미지 관리] - 쇼핑몰에 나타날 카테고리와 쇼핑몰 웹 사이트에 들어갈 이미지를 추가, 수정, 삭제하고, 카테고리와 저장한 이미지들은 웹 사이트에 적용",
            "[고객 등급 관리] - 등급을 추가, 수정, 삭제하고, 해당 등급별로 쇼핑몰 웹 사이트에서 상품 결제 시 적립금 부여",
          ],
        },
        {
          title: "관리자 가입 관리",
          content: [
            "[관리자 가입]- 대표에게만 권한이 주어지고, 관리자를 가입하기 위한 폼을 제공함",
          ],
        },
        {
          title: "마이페이지",
          content: ["로그인한 관리자에 대한 정보 조회 및 편집 기능을 제공"],
        },
      ],
    },

    // Portfolio
    Portfolio: {
      title: "Portfolio",
      summary:
        "2024년 7월을 시작으로 약 1개월에 걸쳐 제작한 '나'를 표현한 포트폴리오 프로젝트입니다. 암호를 입력해서 해당 페이지들로 이동할 수 있도록 제작했고, 해당 페이지는 암호를 풀지 못하면 진입할 수 없습니다. 소개, 프로젝트, 연락에 대한 페이지로 각각 구성되어 있습니다.",
      images: [
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
                "감정을 기록, 수정, 편집할 수 있도록 Redux를 사용해 상태를 전역으로 관리함",
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
