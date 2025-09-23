// Promise 생성자 함수를 직접 사용하는 방법
// new Promise() : 생성자 함수
// (resolve, reject) => {} : 비동기 작업을 수행하고, 결과를 반환하는 함수

const randomPromise = new Promise((resolve, reject) => {
  // 비동기 작업 흉내
  setTimeout(() => {
    const random = Math.random(); // 랜덤 숫자 생성

    if (random > 0.5) {
      resolve("숫자가 0.5 이상! 성공"); // 성공 시  반환
    } else {
      reject("숫자가 0.5 이하! 실패"); // 실패 시  반환
    }
  }, 2000);
});

// Promise 두 가지 상태
// 비동기 처리의 성공과 실패
// 예시) 네트워크 통신의 성공과 실패

// 성공 상태일 때 수행할 처리 메서드
// Promise데이터.then(콜백함수)

// 실패 상태일 때 수행할 처리 메서드
// Promise데이터.catch(콜백함수)

// 콜백함수는 매개변수를 하나 받는다
// randomPromise
//   .then((data) => {
//     // data는 resolve() 함수의 인자 데이터
//     console.log(data);
//   })
//   .catch((error) => {
//     // error는 reject() 함수의 인자 데이터
//     console.log(error);
//   });

// async/await
// Promise 자료형을 쉽게 사용하게 도와주는 키워드

// async 키워드
// 함수앞에 붙는 키워드.
// 해당 함수가 비동기를 처리하는 함수란것을 표시

function randomPromiseFunction() {
  return new Promise((resolve, reject) => {
    // 비동기 작업 흉내
    setTimeout(() => {
      const random = Math.random(); // 랜덤 숫자 생성

      if (random > 0) {
        resolve("숫자가 0.5 이상! 성공"); // 성공 시  반환
      } else {
        reject("숫자가 0.5 이하! 실패"); // 실패 시  반환
      }
    }, 2000);
  });
}

async function func() {
  try {
    // 비동기처리를 수행하는 코드 블록

    // await 키워드
    // Promise 기반 비동기처리 수행
    // 수행 결과 resolve() 함수 인자를 반환

    const result1 = await randomPromiseFunction(); // 1초
    const result2 = await randomPromiseFunction(); // 1초
    const result3 = await randomPromiseFunction(); // 1초

    console.log(result1);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    // 비동기처리가 실패했을 때
    console.log(error);
  }
}

func();

// setTimeout(() => {
//   console.log(1);
// }, 1000);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// setTimeout(() => {
//   console.log(3);
// }, 1000);

