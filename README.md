# 고객 등록 관리자 페이지
신규 고객을 등록할 수 있고, 고객 리스트도 볼 수 있는 페이지<br />
[사이트방문](http://ys-react-search.s3-website.ap-northeast-2.amazonaws.com/)
## 목차
1. [언어&#x0026;툴](#언어&툴)
2. [스토리보드](#스토리보드)
3. [구조](#구조)
4. [페이지](#페이지)
5. [기능설명](#기능설명)

<br />

### 💡언어&#x0026;툴
<img src="https://img.shields.io/badge/HTML5-E34F26?style=E34F26&logo=HTML5&logoColor=fff"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=1572B6&logo=CSS3&logoColor=fff"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=F7DF1E&logo=JavaScript&logoColor=333"/> <img src="https://img.shields.io/badge/Node.js-339933?style=339933&logo=Node.js&logoColor=fff"/> <img src="https://img.shields.io/badge/npm-CB3837?style=CB3837&logo=npm&logoColor=fff"/> <img src="https://img.shields.io/badge/React-61DAFB?style=61DAFB&logo=React&logoColor=fff"/>
<br />
<br />

### 💡스토리보드
[스토리보드](https://www.figma.com/file/Sh4UZ9r6Pc3D4PBtzcGskz/%EB%A6%AC%EC%95%A1%ED%8A%B8%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A43-%EA%B3%A0%EA%B0%9D%EB%93%B1%EB%A1%9D%EC%82%AC%EC%9D%B4%ED%8A%B8?node-id=0-1&t=dFcNVjVofquQM7s6-0)
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
<br />

### 💡기능설명
  1. 홈<br />
    *src>App.js*<br />
    *component : src>component>Search.js, AddInfo.js, List.js, Modal.js*
    <br />
    <img src="https://ys-react-search.s3.ap-northeast-2.amazonaws.com/git/main.png" alt="홈 이미지" width="400" />
      - 데이터
        - react hook(useCallback(), useEffect(), useState())을 이용하여 데이터 가져옴

        ```bash
        <json 파일 형식>
        [
          {
            "people": "people",
            "id": 1,
            "date": 1027954800000,
            "title": "title",
            "body": "body"
          }
        ]
        ```

      - 레이아웃
        - 필터
          - 필터 조건에 맞춰 데이터(고객 리스트) 정렬
        - 검색
          - 일치하는 고객 있을 경우
            - 필터링을 걸쳐 검색한 내용에 일치하는 고객 정보 리스트업
          - 일치하는 고객 없을 경우
            - "고객 리스트가 없습니다." 출력
        - 신규 고객 등록
          - 필수 항목을 적지 않을 때는 하단에 경고 메시지 출력 (등록x)
            <img src="https://ys-react-search.s3.ap-northeast-2.amazonaws.com/git/warning.png" alt="경고메시지 이미지" width="300" />
          - 등록 완료시 모달창으로 작성된 내용 보여준 후 리스트업
            <img src="https://ys-react-search.s3.ap-northeast-2.amazonaws.com/git/modal.png" alt="모달창 이미지" width="300" />