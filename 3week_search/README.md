# 📂 검색창 구현

카카오 OpenAPI를 이용해서 검색 기능을 구현을 해볼 것입니다. 이번 과제에선 이전 과제에서 사용했던 UI에서 API를 교체할 것입니다!
<br>또한 input에 입력할 때마다 요청을 하게 되면 뭔가 불편하지 않을까요? ㅎㅎ

## 🗾 웹 디자인

디자인 : [핀터레스트](https://www.pinterest.co.kr/ideas/)

<details>
	<summary>예시</summary>
<img width="1441" alt="스크린샷 2024-02-15 오후 11 13 29" src="https://github.com/kangsinbeom/fastcampus/assets/83047601/5bbf3084-2645-4e59-8b87-4dbe09865758">
</details>

🎉 **필독!!! 추가설명**

- 썸네일로 사용하는 이미지와 그냥 이미지는 뭐가 다른지 한번 찾아보시겠어요?
- 이미지 최적화 방법 중 가장 간단한 방법은 자체 크기를 줄이는 것이랍니다. webP와 jpg의 차이점이 키워드입니다!

<br>
<br>

## 🛠️ 세팅

**React 세팅**: create react-app

**스타일 라이브러리**: styled-component

**eslint 및 prettier**: 자유

**전역 상태관리 라이브러리r**: ContextAPI 활용

**비동기 데이터 관리 라이브러리**: React-Query (TanStack-Query)

**OpenAPI**: [Kakao Daum 검색](https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide)

- API KEY 발급 받으셔야 합니다.
- 사용 방법은 잘 나와 있습니다!

<br>
<br>

## 🏆 완성조건

- ### STEP 1: 웹문서 데이터를 불러와서 화면에 나타내기
- ### STEP 2: content에 포함된 불필요한 tag 제거하기
- ### STEP 3: 디바운스 쓰로틀링 공부하고 적용하기
- ### STEP 4: 카테고리 별 검색 구현 (웹문서, 이미지, 블로그, 책, 카페)
- ### STEP 5: 자동 완성 구현!
