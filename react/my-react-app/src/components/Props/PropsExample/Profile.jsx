import React from "react";

export default function Profile({ name, age }) {
  {
    /* props = {name: "홍길동", age: 20} */
  }
  {
    /* Profile(props) XXXXX 비효율 */
  }
  {
    /* Profile({name, age}) OOOOO 효율적 */
  }
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
}
