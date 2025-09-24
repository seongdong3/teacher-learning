// div 태그 요소 생성, 변수에 할당
const divTag = document.createElement("div");

// div 태그에 id 속성 "container" 지정
// 요소.setAttribute("속성명","속성값")
divTag.setAttribute("id", "container");

// p 태그 요소 생성, 변수에 할당
const pTag = document.createElement("p");
// 요소의 textContent 속서으로 텍스트 설정
pTag["textContent"] = "pTag";

// append() 메서드로 body 태그에 divTag를 추가
const bodyTag = document.querySelector("body");
bodyTag.append(divTag, pTag);

// h1 태그 요소를 생성하고, 변수에 할당
const h1Tag = document.createElement("h1");
// 텍스트 "H1" 설정
h1Tag["textContent"] = "H1";

// id가 child인 요소를 선택하고, 변수에 할당
const childTag = document.querySelector("#child");

// id가 parent인 요소를 선택하고, 변수에 할당
const parentTag = document.querySelector("#parent");

// 부모 요소 parentTag, 특정 자식 요소 childTag, 추가할 요소 h1Tag
parentTag.insertBefore(h1Tag, childTag);

h1Tag.remove();
