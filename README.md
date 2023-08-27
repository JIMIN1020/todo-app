# To Do App

> https://jimin1020.github.io/todo-app

**React**, **Firebase**로 개발하고 **gh-pages**로 배포한 간단한 To Do Application 입니다.

![todo](https://github.com/JIMIN1020/todo-app/assets/121474189/d8c20c1e-db4b-4b22-92a6-b801438f0776)

할 일과 마감 기한을 입력하면, `Overdue` | `In Progress` | `Completed` 3가지의 카테고리로 나뉘어 나타납니다.

- `Overdue` : 마감 기한이 지난 To Do
- `In Progress` : 진행 중인 To Do
- `Completed` : 완료한 To Do

모든 To Do는 기한에 따라 오름차순 정렬되어 나타납니다.

<br />

## 기술 스택 & 사용한 라이브러리

### 기술 스택

- React
- Firebase

### 라이브러리

- react-icons
- react-datepicker
- lottie-react
- styled-components
- react-router-dom

<br />

## 특징

### 로그인 / 로그아웃 기능

Firebase의 Authentication 기능을 활용하여 **구글, 깃허브 로그인**을 가능하게 하였습니다.
로그인 이후 유저가 원할 때 로그아웃 또는 회원 탈퇴를 할 수 있습니다.

### 데이터 저장

Firebase의 데이터베이스인 **Firestore**를 이용하여 유저가 작성한 할 일 목록을 저장하고 불러옵니다.

### 반응형 웹

데스크탑, 태블릿, 모바일 사이즈에 맞게 반응형 웹을 구현했습니다.
![size](https://github.com/JIMIN1020/todo-app/assets/121474189/593d1eab-e766-44ad-b63b-c2edf937e439)

#### 태블릿 사이즈

![tablet size](https://github.com/JIMIN1020/todo-app/assets/121474189/69940809-04f7-4d8f-be82-6b90250362eb)

#### 모바일 사이즈

![moblie size](https://github.com/JIMIN1020/todo-app/assets/121474189/e4869335-ae19-473c-8515-34fe8443d1d9)
