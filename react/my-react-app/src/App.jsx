import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";

// App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트를 포함한다
// App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트가 중첩됐다
export default function App() {
  return (
    <div>
      <Header></Header>
      <Interpolation></Interpolation>
    </div>
  );
}
