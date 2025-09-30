import React from "react";
// PropsChildren 폴더의 Parent 컴포넌트 불러오기
import Parent from "./components/PropsChildren/Parent";

export default function App() {
  return (
    <div>
      {/* Parent 컴포넌트를 배치 */}
      <Parent></Parent>
    </div>
  );
}
