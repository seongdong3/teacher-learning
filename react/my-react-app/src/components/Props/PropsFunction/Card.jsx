import React from "react";

// props = {
//   user: { name: "홍길동", age: 20 },
//   onClick: handleClick
// };
export default function Card({ userProps, onClickProps }) {
  return (
    <div>
      {/* button 태그에 onClick 속성에서 onClickProps 함수를 실행 */}
      <button
        onClick={() => {
          // props로 전달받은 user를 매개변수로 전달
          onClickProps(userProps);
        }}
      >
        클릭
      </button>
    </div>
  );
}
