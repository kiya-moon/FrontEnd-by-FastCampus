// String
let myName = "Front";
let email = 'front@gmail.com';
let hello = `Hello ${myName}?!`;

console.log(myName);
console.log(email);
console.log(hello);

// Object
let user = {
  name: 'Front',
  age: 85,
}

console.log(user);
console.log(user.age);

// --------------------------------

// 함수
// 이름이 있는 함수(기명 함수)
// 함수 선언!!
function hello2() {
  console.log('Hello~');
}

// 이름이 없는 함수(익명 함수)
// 함수 표현!!
let world2 = function() {
  console.log('World~!');
}

// 함수 호출
hello2();  // Hello~
world2();  // World~!

// 객체 데이터
const front = {
  name: 'Front',
  age: 85,
  // 메소드(Method)
  getName: function() {
    return this.name;
  }
};

const hisName = front.getName();
console.log(hisName); // Front
// 혹은
console.log(front.getName()); // Front

// --------------------------------

// DOM API

// 1. document.querySelector()
// HTML 요소(Element) 1개 검색/찾기
// index.html에서 class 값이 box인 요소를 가져와 boxEl에 담아준다
const boxEl = document.querySelector('.box');

console.log(boxEl); // <div class="box">Box!!</div>

// 2. addEventListener()
// 인수로 이벤트(event, 상황)와 핸들러(Handler, 실행할 함수)가 들어간다
boxEl.addEventListener('click', function() {
  console.log('Click!');
});

// 3. 요소의 클래스 정보 객체 활용
// classList.~
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains);

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains);

 // 4. document.querySelectorAll()
 // HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// 5. forEach()
// 찾은 요소들 반복해서 함수 실행
// 인수로 익명 함수가 들어간다
// boxEls.forEach(function() {});
// function에는 두 개의 매개변수가 들어간다
// 첫 번째 매개변수에는 반복중인 요소(boxEl), 두 번째 매개변수에는 반복 중인 번호(index)
boxEls.forEach(function(boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});

// 6. textContent
// Getter, Setter 역할
// Getter : 값을 가져오는 용도
console.log(boxEl.textContent);

// Setter : 값을 지정하는 용도
boxEl.textContent = 'New!!';
console.log(boxEl.textContent); 

// --------------------------------

// 메소드 체이닝
// 예시
const a = 'Hello~';
const b = a.split('').reverse().join('');

console.log(a); // Hello~
console.log(b); // ~olleH