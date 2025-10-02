import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieDetail() {
  // 리액트의 상태(State) : 화면을 결정한다. 화면에 보여질 데이터를 관리한다
  // movies : 상태 데이터를 저장하고 있는 변수
  // setMovies : 상태 데이터를 바꾸는 함수
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        // /movie/2
        // 2번 영화의 상세(detail) 정보 API를 사용하는 주소(URL)
        url: `${BASE_URL}/movie/2`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "ko-KR",
        },
      };

      // 응답 객체(res)
      const res = await axios(config);

      // 응답 객체에서 data 속성 불러와서 변수 data에 저장
      const data = res["data"];

      console.log(data);

      // setMovies(data) : 상태 변수 movies에 저장된 데이터가 data로 변경된다
      setMovies(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>인기 영화 목록</h1>
      <ul>{movies["title"]}</ul>
      <p>줄거리</p>
      <p>{movies["overview"]}</p>
    </div>
  );
}
