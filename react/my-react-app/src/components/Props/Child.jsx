import React from "react";

// 함수의 첫 번째 매개변수는 props 객체가 들어온다
export default function Child(props) {
  return (
    <div>
      <h1>{props["name"]}</h1>
      <h2>{props["age"]}</h2>
    </div>
  );
}
