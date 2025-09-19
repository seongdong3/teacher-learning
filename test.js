// // TODO: 성적 등급 분류
// // 학생 객체 배열을 인자로 받아 등급별로 분류한 객체를 반환하는 함수를 구현한다
// // 등급 기준: A(90이상), B(80이상), C(70이상), D(70미만)
// // 반환 객체 구조: { A: [학생이름들], B: [학생이름들], C: [학생이름들], D: [학생이름들] }
// // 학생 객체 구조: { name: "이름", score: 점수 }
// // 함수명: classifyStudentsByGrade (함수 선언식), classifyStudentsByGradeArrow (화살표 함수)

// 함수 선언식 정의 코드
function classifyStudentsByGrade(students) {
  const newObject = {
    A: [],
    B: [],
    C: [],
    D: [],
  };

  for (let element of students) {
    const object = element;
    const name = object["name"];
    const score = object["score"];

    if (score >= 90) {
      newObject["A"].push(name);
    } else if (score >= 80) {
      newObject["B"].push(name);
    } else if (score >= 70) {
      newObject["C"].push(name);
    } else if (score < 70) {
      newObject["D"].push(name);
    }
  }
  return newObject;
}

// 화살표 함수 정의 코드

const classifyStudentsByGradeArrow = (students) => {
  const newObject = {
    A: [],
    B: [],
    C: [],
    D: [],
  };

  for (let element of students) {
    const object = element;
    const name = object["name"];
    const score = object["score"];

    if (score >= 90) {
      newObject["A"].push(name);
    } else if (score >= 80) {
      newObject["B"].push(name);
    } else if (score >= 70) {
      newObject["C"].push(name);
    } else if (score < 70) {
      newObject["D"].push(name);
    }
  }
  return newObject;
};

// 함수 호출 코드
let students3 = [
  { name: "김철수", score: 95 },
  { name: "이영희", score: 87 },
  { name: "박민수", score: 76 },
  { name: "최지영", score: 65 },
  { name: "홍길동", score: 92 },
];
let result13 = classifyStudentsByGrade(students3);
console.log(result13);

let students4 = [
  { name: "김영수", score: 88 },
  { name: "이민정", score: 72 },
  { name: "박준호", score: 94 },
];
let result14 = classifyStudentsByGradeArrow(students4);
console.log(result14);

// /* 출력 결과
// { A: ["김철수", "홍길동"], B: ["이영희"], C: ["박민수"], D: ["최지영"] }
// { A: ["박준호"], B: ["김영수"], C: ["이민정"], D: [] }
// */

// TODO: 배열 요소 개수 세기
// 배열을 인자로 받아 각 요소가 몇 번 나타나는지 세어서 객체로 반환하는 함수를 구현한다
// 함수명: countElements (함수 선언식), countElementsArrow (화살표 함수)

// 함수 선언식 정의 코드
function countElements(fruits) {
  const countObject = {};

  for (let fruit of fruits) {
    if (countObject.hasOwnProperty(fruit)) {
      countObject[fruit] = countObject[fruit] + 1;
    } else {
      countObject[fruit] = 1;
    }
  }
  return countObject;
}

const countElementsArrow = (fruits) => {
  const countObject = {};

  for (let fruit of fruits) {
    if (countObject.hasOwnProperty(fruit)) {
      countObject[fruit] = countObject[fruit] + 1;
    } else {
      countObject[fruit] = 1;
    }
  }
  return countObject;
};

// 화살표 함수 정의 코드

// 함수 호출 코드
let fruits1 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let result15 = countElements(fruits1);
console.log(result15);

let numbers5 = [1, 2, 3, 2, 1, 3, 1, 4];
let result16 = countElementsArrow(numbers5);
console.log(result16);

/* 출력 결과
{ apple: 3, banana: 2, orange: 1 }
{ 1: 3, 2: 2, 3: 2, 4: 1 }
*/
