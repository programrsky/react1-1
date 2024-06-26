# react
# 이하늘 202030326학번
- [7주차](#7주차-2024-04-17) - 2024-04-17
- [6주차](#6주차-2024-04-10) - 2024-04-10(휴강)
- [5주차](#5주차-2024-04-03) - 2024-04-03
- [4주차](#3주차-2024-03-27) - 2024-03-27
- [3주차](#3주차-2024-03-20) - 2024-03-20
- [2주차](#2주차-2024-03-13) - 2024-03-13
- [1주차](#1주차-2024-03-06) - 2024-03-06
---
## 7주차 (2024-04-17)
### 수업내용
- Hook

### Hook

- Hook의 종류에는 useState, useEffect, useContext 이있다.
- 클래스형 컴포넌트에서 생성자로 state 를 초기화 한다.
- useState 함수로 state를 업데이트한다.

### useEffect

- 사이드 이펙트는 의도적으로 수행됩니다. 책에서 언급된 사이드 이펙트는 원래 목적이나 효과 외에도 발생하는 것들을 가리킵니다.
`userEffect(이펙트 함수, 의존성 배열)`
- 의존성 배열 안에 있는 변수 중 하나의 값이 변경될 때마다 효과 함수가 실행됩니다.
- 컴포넌트가 처음 렌더링된 후와 다시 렌더링된 후에 실행됩니다.
- 마운트 및 언마운트 시에 한 번만 실행하려면 빈 배열을 입력하세요.
- 프롭스나 스테이트의 값에 의존하지 않으므로 여러 번 실행되지 않습니다.
- <b style="color:red">클래스 컴포넌트의 라이프 사이클 함수와 같은 함수들을 하나로 통합하는 기능을 제공합니다.</b>

### useMemo

- 계산이 많이 필요한 작업의 반복을 방지하기 위해 이전 계산 값이 포함되어 있습니다.
- 계산된 값을 메모리에 저장함으로써 실행 속도를 높일 수 있습니다.
- 렌더링이 진행되는 동안 실행되어서는 안 되는 작업은 포함해서는 안 됩니다.

### useRef

- 특정 컴포넌트에 접근할 수 있는 객체를 의미
- 래퍼런스 객체를 반환하는데 사용
- 반환된 레퍼런스객체는 컴포넌트의 라이프타임 전체에 걸쳐 유지

---
## 6주차 (2024-04-17)
### 수업내용
- 휴강
---

## 5주차 (2024-04-03)
### 수업내용
- 컴포넌트
- Props

### 컴포넌트

-  리액트 : 컴포넌트 기반에 구조이다.
-  작은 컴포넌트가 모여 큰 컴포넌트를 구성하고 그를 또 모아 페이지를 구성하는것.
-  컴포넌트는 JS 함수처럼 입력과 출력이 있는 면에서 유사함.
-  입력은 Props가 담당하고, 출력은 리액트 엘리먼트로 한다.
-  객체 지향 개념과 유사.

### Props

-  prop(property : 속성, 특성)의 줄임말.
-  컴포넌트의 속성임.
-  어떤 Props를 넣느냐에 따라 속성 변환.
-  다양한 정보를 담고 있는 JS객체.
-  읽기 전용 (변경 불가)
-  다른 속성의 엘리먼트를 생성하려면 새로운 Props컴포넌트에 전달하면 됨.

### Pure 함수 Impure 함수

-   Pure함수 : 인수로 받은 정보가 내부에서 변하지않음.
-   Impure함수 : 인수로 받은 정보가 내부에서 변함.

---

## 4주차 (2024-03-27)
### 수업내용
- JSX
- 엘리멘트

### JSX
- XML, HTML을 합친 언어이다.
- React는 컴포넌트 단위로 이뤄져 있기 때문에 사용하는 목적이 크다.
- ```const element = <h1>Hello World!</h1>;```
- JS로 작성할 경우 ```createElement()``` 함수를 사용해야 한다.
- JSX는 모든 Javascript 문법을 사용할 수 있다.
- XML 코드를 사용하다가 중간에 자바스크립트 코드를 넣을 경우 ```{ }```를 이용하면 된다.

### 엘리멘트
- 리액트 앱을 구성하는 가장 작은 요소이다.
- 리액트 엘리멘트는 VDOM 형태를 가지고 있다.
- 컴포넌트, 속성 및 내부 모든 자식들은 일반 Javascript 객체이다.
- 마음대로 변경할 수 없는 <b style="color: red">불변성</b>을 가지고 있다.
- <b style="color: red">엘리멘트를 렌더링하기 위해서는 해당 코드를 입력해야 한다.</b>
  ```ReactDOM.render(element, document getElementById("root"));```
- 렌더링 할 때는 ```<div>``` 태그로 하나로 묶어줘야 한다.

---

## 3주차 (2024-03-20)
### 수업내용
- React
- React의 장점
- create-react-app (React 프로젝트 생성)
  
### React
- 웹 및 앱 유저 인터페이스를 위한 라이브러리이다.
- SPA를 <b  style = "color: red">쉽고 빠르게</b> 만들수 있도록 도와주는 도구이다.
  - SPA : Single Page Application

### React의 장점
- VDOM을 사용하면 변경 사항만 대해서 업데이트 하기 때문에 <b>속도가 빠르다</b>.
  - 즉, VDOM은 비동기식 방법으로 렌더링한다.
- <b>컴포넌트 기반</b> 구조로 이뤄져 있다.
  
### create-react-app (React 프로젝트 생성)
- 터미널 새로 생성한 후 ```npx create-react-app app-name```를 입력한다.
- 패키지 경로를 확인 후 진행할 것이냐고 물어볼 경우 y를 입력한다.
  - 물어보지 않는 경우도 있었으나, 설치가 가능.
- 성공적으로 프로젝트를 생성하면 아래와 같은 트리 구조가 나타나게 된다.<br />
  - node_modules
  - public
    - 앱을 컴파일 하는데 필요하지 않는 요소들을 넣는다.
    - 정적 파일들을 담는 곳이다.
      - html, 이미지 파일이 있다.
  - src
    - 앱이 컴파일 하는데 사용하는 요소들을 넣는다.
  - .gitignore
    - node_modules 폴더와 같이 용량이 크거나, 개발 계획서등 필요하지 않는 파일들을 제외할 때 쓰인다.
  - package.json
    - npm 명령어 혹은 앱 이름,버전 등에 쓰인다.

---

## 2주차 (2024-03-13)
### 수업내용
- Github 초기화
- HTML

### Github 초기화
- Git 초기화 하는 명령어
  - ```git init```
- 각 디렉토리 별로 초기화 하는 명령어
  - 개인 PC 환경에서 사용할 때
    - ```git config --global user.name "userName"```
  - 공용 PC 환경에서 사용할 때
    - ```git config user.name "userName"```
    - ``` git config user.email```
- commit 및 message 쓰기
  - 디폴트 언어 : 영어.
  - message는 enter key 2번.

### HTML
- 웹 사이트를 구성하는 하나의 구성 요소.
- Tag로 하나의 큰 뼈대를 만든다.

### Javasript
- 동적으로 변경되는 콘텐츠를 만들고, 멀티 미디어 제어, 이미지에 애니메이션 적용.
- 웹에서 행하는 작업들을 제어하는 스크립트.

### 자료형
- var : 재선언 o, 재할당 o.
- let : 재선언 x, 재할당 o.
- const : 재선언 x, 재할당 x.

### JSON
```javascript
let a = {
  name : "leesky",
  num: "01024799363",
}  
```

### Arrow Function
```javascript
let arrow = x => x + y;
```
---

## 1주차 (2024-03-06)
### 내용 정리
- Markdown 기본 사용법 및 태그
- 시멘틱 버전

### 제목

###### h6
##### h5
#### h4
### h3
## h2
# h1

### 줄 바꿈

`<br>`을 쓰거나 스페이스 바 2번을 입력한다.
텍스트 입력<br>줄 바꿈.

### List

1. 숫자 리스트
- 글머리 리스트

### 코드
- 백틱(``)을 사용
- 백틱 옆에 프로그래밍 언어추가 적용

```js
print("안녕하세요");
```

### 구분선
*** , ---

### 글씨 효과
- *기울인 글씨*
- **굵은긁씨**
- ***기울이고 굵은글씨***

### 링크
- [구글사이트](https://google.com)
- [문서 내 링크](#제목)

### 이미지