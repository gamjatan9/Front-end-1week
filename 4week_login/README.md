# 📂 로그인 / 회원가입 및 소셜 로그인

firebase를 통해서 이메일 로그인 / 회원가입과 소셜로그인을 구현해보겠습니다.
<br>다양한 정보를 firebase storage에 user 정보를 저장해봅시다.

## 🗾 웹 디자인

디자인 : [핀터레스트](https://www.pinterest.co.kr/ideas/)

<details>
	<summary>예시</summary>
<img width="1483" alt="스크린샷 2024-02-15 오후 11 36 24" src="https://github.com/kangsinbeom/fastcampus/assets/83047601/d7ee6581-8b21-484f-bf93-c13bd4b8823e">
</details>

🎉 **필독!!! 추가설명**

- facebook 대신 카카오 소셜로그인을 연동할 것입니다. 카카오와 구글 2개와 이메일로 가입까지 총 3가지 방법이 있겠습니다.
- portal을 사용해서 구현을 해주세요~
- 회원가입 때 생년월일은 5단계로 구현해주세요

<br>
<br>

## 🛠️ 세팅

**React 세팅**: create react-app

**스타일 라이브러리**: styled-component

**eslint 및 prettier**: 자유

**전역 상태관리 라이브러리r**: ContextAPI 활용

**비동기 데이터 관리 라이브러리**: React-Query (TanStack-Query)

**유저 인증 및 데이터베이스**: firebase

<br>
<br>

## 🏆 완성조건

- ### STEP 1: 이메일 로그인 / 회원가입 구현
- ### STEP 2: 소셜로그인 구현
- ### STEP 3: hooks 패턴을 통한 관심사 분리
- ### STEP 4: react-hook-form을 통한 랜더링 성능 최적화
- ### STEP 5: 생년월일도 데이터를 받아보자! (react-day-picker)
