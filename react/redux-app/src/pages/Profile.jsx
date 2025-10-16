import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [decodedToken, setDecodedToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setDecodedToken(jwtDecode(token));
    } else {
      // navigate("/login");
    }
  }, [token, navigate]);

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          프로필
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900">사용자 정보</h3>
              {decodedToken ? (
                <p className="mt-1 text-sm text-gray-600">
                  이메일: {decodedToken.email}
                </p>
              ) : (
                <p className="mt-1 text-sm text-gray-600">로그인을 해주세요.</p>
              )}
            </div>

            <div className="bg-gray-100 p-4 rounded-md overflow-hidden">
              <h3 className="text-lg font-medium text-gray-900">
                Access Token
              </h3>
              <p className="mt-1 text-sm text-gray-600 break-words">
                {token ? token : "토큰이 없습니다."}
              </p>
            </div>

            <div>
              <button
                onClick={handleLogout}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
