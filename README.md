# 한솥 도시락
한솥 도시락의 회사 소개와 한솥 도시락의 메뉴를 볼 수 있는 사이트<br />
[사이트방문](http://ys-react-hansot.s3-website.ap-northeast-2.amazonaws.com/)
## 목차
1. [언어&#x0026;툴](#언어&툴)
2. [스토리보드](#스토리보드)
3. [구조](#구조)
4. [페이지](#페이지)
5. [기능설명](#기능설명)

<br />

### 💡언어&#x0026;툴
<img src="https://img.shields.io/badge/HTML5-E34F26?style=E34F26&logo=HTML5&logoColor=fff"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=1572B6&logo=CSS3&logoColor=fff"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=F7DF1E&logo=JavaScript&logoColor=333"/> <img src="https://img.shields.io/badge/Node.js-339933?style=339933&logo=Node.js&logoColor=fff"/> <img src="https://img.shields.io/badge/npm-CB3837?style=CB3837&logo=npm&logoColor=fff"/> <img src="https://img.shields.io/badge/React-61DAFB?style=61DAFB&logo=React&logoColor=fff"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=764ABC&logo=Redux&logoColor=fff"/>
<br />
<br />

### 💡스토리보드
[스토리보드](https://www.figma.com/file/3bA7Takc9KNJzv901hw7pq/%EB%A6%AC%EC%95%A1%ED%8A%B8%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A42-%ED%95%9C%EC%86%A5%EB%8F%84%EC%8B%9C%EB%9D%BD?node-id=0-1&t=fWFBgzDOj13tEVOI-0)
<img src="https://img.shields.io/badge/figma-F24E1E?style=000000&logo=figma&logoColor=fff"/>
<br />
<br />

### 💡구조
```
react-portfolio3_search
├─ public
│  ├─ data.json
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
└─ src
   ├─ App.js
   ├─ App_warning.js
   ├─ component
   │  ├─ AddInfo.js
   │  ├─ AddInfo_warning.js
   │  ├─ List.js
   │  ├─ Modal.js
   │  ├─ Search.js
   │  └─ SortOpt.js
   ├─ index.css
   └─ index.js

```

### 💡페이지
  1. [홈](#1-홈)
  2. [메뉴소개](#2-메뉴소개)
  3. [메뉴 상세페이지](#3-메뉴-상세페이지)
  4. [나의 장바구니](#4-나의-장바구니)
  5. [가맹점 찾기](#5-가맹점-찾기)
  6. [새로운 소식](#6-새로운-소식)
<br />

### 💡기능설명
  1. 홈<br />
    *pages>index.js*<br />
    *component : src>component>MainVisual.js, HansotPromise.js, Shortcut.js, Philosophy.js, MainNews.js*
    <br />
    <img src="https://ys-react-hansot.s3.ap-northeast-2.amazonaws.com/git/home.png" alt="홈 이미지" width="400" />
      - 데이터
        - 메인 비주얼 영역 & 뉴스 영역 -> react hook(useCallback(), useEffect(), useState())을 이용하여 데이터 가져옴

        ```bash
        <메인 비주얼 영역 json 파일 형식>
        [
          {
            "id": 1,
            "imgUrl": "url",
            "ex": "ex"
          }
        ]

        <뉴스 json 파일 형식>
        [
          {
            "id": 1,
            "title": "title",
            "imgUrl": "url",
            "text": "text",
            "link": "link",
            "date": 1676505600000
          }
        ]
        ```

      - 레이아웃
        - 메인 비주얼 영역<br />
          - Swiper를 이용하여 슬라이드 구현
        - 뉴스 영역<br />
          - 데이터를 prop를 이용하여 *src>component>NewsItem.js* 컴포넌트에 데이터 전달
          - props를 이용하여 전달받은 데이터 중, 뒤에서 세번째까지의 데이터 노출
          - 밀리초로 되어있는 날짜를 2023-02-08 로 노출되게끔 함수 구현<br />
    <br />
    <br />