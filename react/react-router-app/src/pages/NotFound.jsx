import { Link } from "react-router-dom";
import PATHS from "./../constants/paths";

export default function NotFound() {
  return (
    <div>
      페이지를 찾을 수 없습니다. 404 Error
      <br />
      <Link className="border-2 p-1" to={PATHS.ROOT.INDEX}>
        홈 페이지로 돌아가기
      </Link>
    </div>
  );
}
