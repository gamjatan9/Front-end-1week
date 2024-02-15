# 📂 인피니티 스크롤

인피니티 스크롤을 구현할 것입니다. 새로고침을 했을 때 이전에 보던 페이지가 띄어지게 하려면 어떻게 해야할지와 데이터가 올바르게 불러와지는지 그리고 기타 인피니티 스크롤 구현시에 주의사항을 잘 공부해서 만들어 봅시다!

## 🗾 웹 디자인

디자인 : [핀터레스트](https://www.pinterest.co.kr/ideas/)

<details>
	<summary>예시</summary>
<img width="1441" alt="스크린샷 2024-02-15 오후 11 13 29" src="https://github.com/kangsinbeom/fastcampus/assets/83047601/5bbf3084-2645-4e59-8b87-4dbe09865758">
</details>

🎉 **필독!!! 추가설명**

- 아이템의 크기는 예시와 같이 이미지의 크기 및 컨텐츠의 크기별로 다르게 구성되게 할 것입니다.
- 시간이 남는다면 상단의 header부분을 구현해도 됩니다. (UI만)
- 이미지 아래 설명 부분에는 OpenAPI의 다른 데이터를 통해 구성할 것

<br>
<br>

## 🛠️ 세팅

**React 세팅**: create react-app

**스타일 라이브러리**: styled-component

**eslint 및 prettier**: 자유

**전역 상태관리 라이브러리r**: ContextAPI 활용

**비동기 데이터 관리 라이브러리**: React-Query (TanStack-Query)

**OpenAPI**: [OpenAPI 고양이 사이트](https://thedogapi.com/)

- API KEY는 이메일로 오기에 확인 잘하시면 됩니다.
- GUIDES 또는 DOCUMENTATION에서 API 사용법 및 query 작성 방법 나와 있습니다.

<br>
<br>

## 🏆 완성조건

- ### STEP 1: 데이터를 불러와서 화면에 나타내기
- ### STEP 2: trriger설정을 통해 인피니티 스크롤 구현
- ### STEP 3: 컨텐츠의 길이가 2줄을 넘어가면 ... 생략을 해봅시다.
- ### STEP 4: 새로고침 시 현재 위치 및 데이터 유지하기
- ### STEP 5: react-virtuoso가 뭔지 알아보고 적용하기
