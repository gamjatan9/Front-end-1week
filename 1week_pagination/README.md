# 📂 페이지네이션

OpenAPI를 이용해서 데이터를 가져오고 페이징 처리릁 통한 페이지네이션 구현
<br>추가적인 최적화 요소를 단계별로 구성하였으니 난도에 맞게 수행하면 됩니다 ~ ~

## 🗾 웹 디자인

디자인 : [ABC마트](https://abcmart.a-rt.com/display/category/main?dfltChnnlMv=Y&genderGbnCode=10000&ctgrNo=1000000497&page=1)

<details>
	<summary>예시</summary>
<img width="1206" alt="스크린샷 2024-02-15 오후 10 52 23" src="https://github.com/kangsinbeom/fastcampus/assets/83047601/48c82723-4380-450c-a6de-becad8caef40">
</details>

🎉 **필독!!! 추가설명**

- 한 페이지 당 10개씩 아이템을 만들 것 한 줄에 3개의 이미지 배치 (item, layout 크기 자유)
- 네비게이션 바는 구현 X
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
- ### STEP 2: 페이징 처리를 통한 페이지네이션 구현
- ### STEP 3: 새로고침 시 현재 페이지 고정
- ### STEP 4: 이미지 최적화를 통한 전 후 light house 측정 (이미지 최적화 요소는 스스로 찾아보시길!)
- ### STEP 5: portal을 통해 디테일 모달 띄우기
