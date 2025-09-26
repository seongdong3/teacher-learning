// 23-modern/destruct.js
// 구조 분해 할당

const object = {
  name: "홍길동",
  age: 20,
  name2: "홍길동",
  age2: 20,
};

// 구조 분해 할당을 활용하지 않은 경우
// 속성을 개별 변수에 할당
let name = object["name"];
let age = object["age"];

// 구조 분해 할당을 활용하는 경우
// 변수명과 객체의 속성명(key)가 동일해야한다
const { name2, age2 } = object;
console.log(name); // 홍길동
console.log(name2); // 홍길동

const object2 = {
  id: 1,
  title: "갤럭시 99",
  description: "삼성 스마트폰",
  price: 9900,
};

// object2에서 title과 price 속성의 값만 필요
// 구조 분해 할당 활용
const { title, price } = object2;
// {
//       "id": 1,
//       "name": "Classic Margherita Pizza",
//       "ingredients": [
//         "Pizza dough",
//         "Tomato sauce",
//         "Fresh mozzarella cheese",
//         "Fresh basil leaves",
//         "Olive oil",
//         "Salt and pepper to taste"
//       ],
//       "instructions": [
//         "Preheat the oven to 475°F (245°C).",
//         "Roll out the pizza dough and spread tomato sauce evenly.",
//         "Top with slices of fresh mozzarella and fresh basil leaves.",
//         "Drizzle with olive oil and season with salt and pepper.",
//         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//         "Slice and serve hot."
//       ],
//       "prepTimeMinutes": 20,
//       "cookTimeMinutes": 15,
//       "servings": 4,
//       "difficulty": "Easy",
//       "cuisine": "Italian",
//       "caloriesPerServing": 300,
//       "tags": [
//         "Pizza",
//         "Italian"
//       ],
//       "userId": 45,
//       "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
//       "rating": 4.6,
//       "reviewCount": 3,
//       "mealType": [
//         "Dinner"
//       ]
//     },

// 배열 구조 분해 할당
const array = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = array;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5

// 객체를 인자로 전달받는 함수
function func(object) {
  // 구조분해할당으로 변수에 속성 값(value)을 저장
  const { name, age } = object;

  console.log(`Hello ${name}, I'm ${age}`);
}

// 매개변수에 구조분해 할당을 활용
function func2({ name, age }) {
  console.log(`Hello ${name}, I'm ${age}`);
}

const user = {
  name: "홍길동",
  age: 20,
};

func(user); // Hello 홍길동, I'm 20
func2(user); // Hello 홍길동, I'm 20

const object1 = {
  id: 1,
  body: "This is some awesome thinking!",
  postId: 242,
  likes: 3,
};
