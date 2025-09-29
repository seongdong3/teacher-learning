import React from "react";
import Profile from "./Profile";

export default function ProfileContainer() {
  return (
    <div>
      <Profile name="홍길동" age={20}></Profile>
      {/* function Profile(props) {} */}

      {/* props = {name: "홍길동", age: 20} */}
      {/* Profile(props) XXXXX비효율 */}
      {/* Profile({name, age}) OOOOO효율적 */}
    </div>
  );
}
