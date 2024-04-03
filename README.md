# react1-1
# 이하늘 202030326학번

## 4주차 (2024-03-27)
### 오늘 배운 내용
- JSX란?
- 엘리멘트

### JSX란?
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
