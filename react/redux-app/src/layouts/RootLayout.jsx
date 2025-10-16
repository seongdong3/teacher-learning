import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              홈페이지
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300">
              로그인
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-gray-300">
              회원가입
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-white hover:text-gray-300">
              사용자 프로필
            </Link>
          </li>
        </ul>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
