import React from "react";
import Parent from "./components/Props/Parent";
import CardContainer from "./components/PropsFunction/CardContainer";
// 1. Parent 컴포넌트 불러오기
// 2. Parent 컴포넌트를 App 컴포넌트 내부에 배치
// 3. 다른 컴포넌트는 모두 삭제
export default function App() {
  return (
    <div>
      <CardContainer></CardContainer>
    </div>
  );
}
