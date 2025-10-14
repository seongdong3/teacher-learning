// AuthLayout과 AuthLayout에 중첩된 페이지 경로 배열을 정의
import AuthLayout from "../../layout/AuthLayout.jsx";
import AuthHome from "../../pages/AuthPages/AuthHome.jsx";
import Signup from "../../pages/AuthPages/Signup.jsx";
import Login from "../../pages/AUthPages/Login.jsx";

import PATHS from "../../constants/paths.js";

// AuthLayout 관련 경로 배열
const authRoutes = [
  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      // 로그인 경로(path)와 Component 설정
      {
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
      // 회원가입 경로(path)와 Component 설정
      {
        path: PATHS.AUTH.SIGNUP,
        Component: Signup,
      },
    ],
  },
];

export default authRoutes