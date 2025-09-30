import React from "react";
// Child 컴포넌트를 불러와서
// <div> 태그 사이에 Child 컴포넌트를 배치
import Child from "./Child";

export default function Parent() {
  return (
    <div>
      <Child key1="value 1">
        <div>
          <h1>나는 길동</h1>
          <h2>I'm 20살</h2>
        </div>
      </Child>
      <Child>
        <div>
          <p>나는 철수</p>
          <p>떡잎마을방범대</p>
        </div>
      </Child>
      <Child>
        <div>
          <p>나는 짱구</p>
          <h1>짱구는 못말려</h1>
          <p>나는 7살</p>
        </div>
      </Child>
    </div>
  );
}
