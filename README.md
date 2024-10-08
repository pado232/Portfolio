# 📝Portfolio

## 🙋‍♀️ 웹 사이트 설명

웹 사이트를 통해 시각적으로 방문자를 사로잡아 ‘나’를 소개하고 홍보할 목적으로 제작 되었습니다.<br/>

방문자의 흥미를 끌고 싶어서 방문 첫 페이지인 HOME에는 간단하게 암호를 풀어 포트폴리오를 감상할 수 있게 제작되었고, 각각의 포트폴리오 페이지에는 잠금 버튼이 존재해 다시 포트폴리오를 잠글 수 있습니다.<br/>

포트폴리오를 잠궜거나 암호를 풀지 않고 다른 페이지로 이동하려고 하면 해당 페이지에는 암호를 풀도록 힌트를 제공하고 홈으로 이동하도록 안내합니다.

모든 페이지에는 다크모드과 라이트모드를 적용할 수 있습니다.<br/><br/>

[DONT's Portfolio 바로가기](http://dony-portfolio.kro.kr/)

## 🎨 웹 사이트 구성

### HOME

암호의 힌트 단어가 화면 크기 안에서 화면의 벽을 만나면 튕기며 돌아다니고, 암호를 입력할 수 있는 키보드와 입력창이 존재합니다.<br/>
암호는 화면에 나타나는 키보드를 마우스로 클릭하며 입력하거나 직접 키보드로 입력할 수 있습니다.<br/>
암호를 풀지 못하면 다른 페이지에 방문하실 수 없습니다.<br/>

### INTRO

소개하는 페이지로 경력, 스킬에 대한 정보를 보여줍니다.<br/>

### PROJECT

팀 프로젝트와 개인 프로젝트를 섹션으로 나눠 각각은 플래그 폴더 디자인의 폴더 안에서 정보를 제공합니다.<br/>
플래그마다 프로젝트의 제목을 할당하여 해당 플래그를 선택하면 폴더 안의 내용이 해당 프로젝트의 정보를 보여줍니다.<br/>
'자세히 보기' 버튼을 누르면 프로젝트에 대한 상세 정보를 모달을 통해 확인하실 수 있습니다.<br/>

### CONTACT

방문자와 소통하기 위해 방문자로부터 이메일을 받을 수 있도록 이메일 입력 폼이 존재합니다.<br/>
추가적으로는 이메일을 복사할 수 있는 버튼이 제공 되어있습니다.<br/><br/>

## 🔍 프로젝트 세부 정보

### ✔ 프로젝트 종류

개인 프로젝트 (웹 사이트)

### ✔ 일정

2024.06.28 ~ 2024.08

### ✔ 기술

**프로그래밍 언어** - Javascript

**프레임워크** - React

**상태관리** - Context API, Redux

**스타일링** - CSS Module

**통합 개발 환경(IDE)** - Visual Studio Code

**버전 관리** - Git, GitHub

<br/>

## 🔥 문제 해결

### ❕ 상태관리

**컴포넌트의 재사용성을 높이려고 prop으로 데이터를 받으면서 prop-drilling 발생**

- **[방법 1] Redux를 사용**<br/>
  prop-drilling은 발생하지 않았으나 action을 통한 상태변화 없이 직접 값을 변경했을 시에 상태 변경이 이루어지지 않음.<br/>
- **[방법 2] ContextAPI를 사용**<br/>
  prop-drilling도 발생하지 않고 직접 값을 변경해서 사용할 수 있음.

👉 Redux를 사용할 때 값을 바꿔 주기 위해서는 action이 일어나야하기 때문에 그저 값을 가져오고 값 자체를 변경하는 것이 효율적이라면 ContextAPI를 사용하는 것이 더 현명한 선택일 수 있음
<br/><br/>

### ❕ 반응형 웹 디자인

**화면이 작아질수로 한 화면에 컨텐츠가 전부 알맞게 들어오지 않는 상황이 발생**

👉 rem, %를 이용해 사이즈를 맞추고 미디어 쿼리를 이용해 화면 크기별로 css 적용
<br/><br/>

### ❕ 스타일링

**클래스 이름이 같은 요소의 중복을 막기 위해 컴포넌트의 상위 클래스를 모두 적어주면서 작성하니 가독성이 떨어지는 문제 발생**

👉 CSS Module을 사용하여 클래스 이름이 다른 컴포넌트에서 사용하는 클래스 이름들과 중복되지 않도록 함
<br/><br/>

### ❕ 폴더 구조

**이전에 작성했던 프로젝트에서 폴더 관리를 세분화하지 않아 유지보수 시 비효율적인 문제 발생**

👉 포트폴리오 프로젝트에서는 폴더의 역할을 정확하게 나눠 폴더구조를 세분화하고 찾기 쉽게 배치함
<br/><br/>

#### [▶ 더 많은 경험에 대해 궁금하신가요?](https://www.notion.so/Portfolio-7a25d265898547bd8472f62ad9b1cd9d)

<br/><br/>

## 🚀 한걸음 성장하기

프로젝트를 만드는 과정에서 다양하고 새로운 작업을 해나가는 것에 대한 배움이 좋아 작업을 시작하게 되었습니다.<br/>
하지만 더 나아가 나에 대한 정보를 담고, 그 정보를 요약하는 과정에서 지금까지 했던 작업들을 요약하고 검토하면서 전에 작성했던 프로젝트들에 대해 복기하는 기회가 되었습니다.<br/>
나의 부족한 부분이 무엇이고 다음 프로젝트를 제작하고 성장하기 위한 방향성을 잡는데 큰 수익을 얻었습니다.

### 나의 부족한 점

- 프로젝트의 완성도 신경쓰기
- 유지보수에 대해 생각하며 작성하기
- 사용자에게 편리한 UI가 무엇인지 깊게 고민하기

### 다음 프로젝트에서 도전해보고 싶은 부분

- 발전된 반응형 웹 디자인
- Redux 깊이 있게 이해하고 사용 해보기
- 다양한 프로그래밍 언어, 프레임워크, css 라이브러리 사용해보기
