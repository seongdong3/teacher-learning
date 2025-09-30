import React from "react";
import User from "./User";

export default function Container() {
  // 반복 렌더링할 배열 데이터
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // 객체 원소를 저장한 배열

  // id 속성의 값은 중복되지 않고, name 속성의 값은 중복될 수 있다
  // 객체의 id 속성은 서로 다른 객체들을 구별(식별)하기위한 속성
  const userArray = [
    { id: 1, name: "우영" },
    { id: 2, name: "길동" },
    { id: 3, name: "철수" },
    { id: 4, name: "짱구" },
    { id: 5, name: "영희" },
    { id: 6, name: "우영" },
    { id: 7, name: "길동" },
  ];

  return (
    <div>
      {/* array 배열을 map() 메서드로 반복 */}
      {array.map((element) => {
        // 원소(element)를 li 태그에 감싸서 반환(return)
        // 원소 element 는 보간법 { } 을 사용해서 표현
        return <li>{element}</li>;
      })}
      <hr />
      {/* 실제 표현 */}
      {/* <li>{array[0]}</li>
      <li>{array[1]}</li>
      <li>{array[2]}</li>
      <li>{array[3]}</li>
      <li>{array[4]}</li>
      <li>{array[5]}</li>
      <li>{array[6]}</li>
      <li>{array[7]}</li>
      <li>{array[8]}</li>
      <li>{array[9]}</li> */}

      {/* userArray를 map()을 활용해서 반복 */}
      {userArray.map((userElement) => {
        // User 컴포넌트의 속성 이름 user 에
        // 변수 userElement 를 지정(전달)한다
        // userElement ={id: ... , name: ...}
        // id는 고유한(2개 이상 존재하지 않는) 속성 / name은 고유하지 않은 속성

        // 반복의 대상이 되는 요소에 key 라고 하는 이름의 속성과 값을 설정을 해야한다
        // key 에 설정되는 값은 고유한 값(객체의 속성)이어야 한다
        // 반복 렌더링에서 key 속성의 역할은
        // 동일하게 반복 생성된 컴포넌트를 구별(식별)하기위한 속성
        return <User key={userElement["id"]} user={userElement}></User>;
      })}

      {/* map() X 표현 */}
      {/* <User key={1} user={user[0]}></User>
      <User key={2} user={user[1]}></User>
      <User key={3} user={user[2]}></User>
      <User key={4} user={user[3]}></User>
      <User key={5} user={user[4]}></User> */}
    </div>
  );
}
