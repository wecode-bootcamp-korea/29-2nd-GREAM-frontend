# GREAM +

- 신발 중개업 플랫폼 사이트인 <a href="https://kream.co.kr/">크림</a> 클론 프로젝트

## **프로젝트 참여인원**

- **Frontend**
  - 🍻🍻 박경원
  - 💪🏻💪🏻 박재형
  - 🦋🦋 박혜린
  - 🔥🔥 주지홍
- **Backend**
  - 🐨🐨 이강일
  - 🐻‍❄️🐻‍❄️ 이도운

## **프로젝트 기간**

- 2021.02.14 ~ 2021.02.25

## **기술스택**

- **tools**

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white"><img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">

- **frontend**

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

## **구현 목표**

- 유저가 해당 홈페이지에서 물건을 구매하고 입찰하고 판매하는 등의 경험을 제공해주는 플랫폼구현
- 프로젝트의 모든 기능을 백엔드와 연동
- <a href="https://github.com/wecode-bootcamp-korea/29-2nd-GREAM-backend.git">백엔드 레포</a>

### 필수 구현 사항

- 소셜로그인
- 상품검색 기능 구현
- 리스트페이지 캐러셀 구현
- 리스트페이지 상품 다중필터 기능 구현
- 상세페이지 관심상품 추가
- 상세페이지 사이즈모달창, 구매모달, 판매모달, 관심상품 모달, 시세모달창 구현
- 상세페이지 모달창과 모달창 밖의 UI 연동
- 상세페이지 시세 차트
- 상세페이지 하단 관련 카테고리 추천상품

## **구현 파트**

- 박경원 (상세페이지 및 리스트페이지)
  ```
  1. 프론트엔드 ProjectManager
  2. 소셜로그인
  3. 검색기능 및 Nav 드롭다운
  ```
- 박헤린 (상세페이지)
  ```
  1. 구매, 판매, 사이즈 모달, 내외부 데이터 연동
  2. 상세페이지 레이아웃
  3. 상세페이지 스크롤 이벤트 활용을 통한 Nav 구현
  4. 시세차트 구현
  ```
- 박재형 (리스트페이지)
  ```
  1. 리스트페이지 캐러셀
  2. 재사용을 위한 리스트페이지 상품카드 컴포넌트
  ```
- 주지홍 (상세페이지 및 리스트페이지)
  ```
  1. 리스트페이지 및 상세페이지 레이아웃
  2. 쿼리스트링 활용을 통한 리스트페이지 다중필터링 기능 구현
  3. 쿼리스트링 활용을 통한 리스트페이지 정렬기능 구현
  4. 상세페이지 캐러셀
  5. 상세페이지 관심상품, 시세모달 모달창 내외부 데이터 연동
  6. 리스트페이지 좌측 필터 및 상세페이지 구매정보 드롭다운 구현
  ```

## **시연**

- 라이브러리를 활용한 이미지캐러셀 구현 및 캐러셀 커스터마이징
- 페이지내에 다중 필터링 및 가격 높은순 낮은순 캐러셀 구현
  <img src="https://i.ibb.co/H2yNNZ5/list-Page-fsc.gif" alt="list-Page-fsc" border="0">
- 검색을 진행하면 해당 검색어와 관련된 상품이 나오고 상품을 누르면 상세페이지로 이동
- 라이브러리를 활용하여 이미지 캐러셀 구현 및 캐러셀 커스터마이징 하단 클릭 범위 확대
  <img src="https://i.ibb.co/rmcRm7V/search-c.gif" alt="search-c" border="0">
- 구매 판매 및 사이즈 모달창에서 사이즈 모달창을 눌렀을때 최근 거래가가 변경 됨
- 구매와 판매 모달창부분에서는 버튼을 눌렀을때 해당 버튼의 가격으로 변경
  <img src="https://i.ibb.co/hW9BgDz/modal-bss.gif" alt="modal-bss" border="0">
- 관심상품 담기버튼을 눌렀을때 로그인이 되어있지 않으면 소셜로그인 모달창이 나오고 로그인이 완료되었으면 관심상품 담기모달창이 열림
- 모달창에서 관심상품을 담으면 백엔드로 데이터가 전송되고 실시간으로 관심상품을 담은 전체 유저의 숫자확인 가능
  <img src="https://i.ibb.co/cFmZD9Y/social-Login-Intersted.gif" alt="social-Login-Intersted" border="0">
- 백엔드에서 받아온 데이터로 1주 2주 한달의 시세 데이터를 활영하여 차트 라이브러리활용을
  통한UI 구현

  <img src="https://i.ibb.co/KFVc4WY/chart-modal.gif" alt="chart-modal" border="0">

- 시세영역과 시세 모달창 영역간의 데이터 교류를 통해 실시간으로 연동 사이즈버튼을 누르면 해당 사이즈 조건에 맞는 거래내역들이 나옴 이 내역들은 모달창에서 바로 확인가능 반대로 모달창에서 눌러도 모달창 외부 시세영역과 데이터 연동
  <img src="https://i.ibb.co/Pw8q4zG/quotemodal.gif" alt="quotemodal" border="0">
- 구매 전 확인 부분 드롭다운 형태로 구현
  <img src="https://i.ibb.co/D74YvFh/dropdown-buyinfo.gif" alt="dropdown-buyinfo" border="0">
- 추천상품에서 해당 상품을 누르면 해당상품 상세페이지로 이동
- 더보기를 누르면 더보기로 이동
  <img src="https://i.ibb.co/1GWLXMn/relatedproduct.gif" alt="relatedproduct" border="0">

## **Build Installation**

```
# install dependencies
$ npm install
# serve with hot reload at localhost:3000
$ npm start
```

## **Reference**

- 이 프로젝트는 <a href="https://kream.co.kr/">크림</a> 사이트를 참조하여 학습목적으로 만들어진 사이트입니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 해당프로젝트에서 나온 이미지는 모두 가공되어진 자료입니다.
