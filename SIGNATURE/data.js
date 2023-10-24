// String
const string1 = "Hello";
const string2 = 'Hello';
const string3 = `Hello ${string1} ?!`;
console.log(string3);

// Number
const number = -123;
const pi = .14;
console.log(number + 1);
console.log(pi);

console.log(number + undefined);  // NaN
console.log(typeof (number + undefined)); // number 

const a = 0.1;
const b = 0.2;
console.log(a + b); // 0.30000000000000004  > 부동소수점 오류
console.log((a + b).toFixed(1));  // 0.3  > string type
console.log(typeof((a + b).toFixed(1)));   
console.log(Number((a + b).toFixed(1)));  // 0.3  > number type  

// Boolean(불린)
const c = true;
const d = false;

if(a) {
  console.log('Hello');
}

// Null, Undefined
let age = null;
console.log(age);

setTimeout(function() {
  age = 85;
  console.log(age);
}, 1000); 

const user = {
  name: 'Front',
  age: 85,
  email: null
}

console.log(user.name); // Front
console.log(user.age);  // 85
console.log(user.email);  // null
console.log(user.abc);  // undefined

// Array(배열)
// 배열 안의 데이터들은 아이템, 요소(Element)라고 한다
const fruits = new Array('Apple', 'Banana', 'Cherry');
const fruits2 = ['Apple', 'Banana', 'Cherry'];  // 리터럴 방식(Array Literal)

console.log(fruits);
console.log(fruits2);

console.log(fruits[1]); // 배열 데이터에서 대괄호 표기법으로 첫번째 데이터를 인덱싱했다~

console.log(fruits.length);  // fruits 배열의 길이 : 3
console.log(fruits[fruits.length -1]); // 배열의 길이를 모르더라도 마지막 요소를 출력할 수 있다

// Object(객체)
// key-value 형태로 되어 있다
// key : 속성, property
// value : 값
// 데이터는 중괄호에 묶여 출력된다
// 생성자 함수 방식
const user2 = new Object();
user.name = 'Front';
user.age = 85;

console.log(user);

// 함수 내부에서 this라는 키워드로 만드는 방식
function User() {
  this.name = 'Front';
  this.age = 85;
}
const user3 = new User();
console.log(user3);

// 리터럴 방식 < 주로 사용된다
const user4 = {
  name: 'Front',
  age: 85
};

console.log(user4);
console.log(user4.name);  // 점표기법?
console.log(user['name']);  // 대괄호표기법

const userA = {
  name: 'Front',
  age: 85
};

const userB = {
  name: 'Back',
  age: 22,
  parent: userA
};

console.log(userB.parent);
console.log(userB.parent.name);
console.log(userB['parent'].name);
console.log(userB['parent']['name']);

const users = [userA, userB];

console.log(users[0]);
console.log(users[0].name);
console.log(users[0]['name']);

// 함수
function hello() {
  console.log('Hello!');
}

hello() // call

hello // ()로 call 해주지 않으면 그냥 데이터 덩어리
console.log(hello);

function getNumber() {
  return 123
}

console.log(getNumber)  // 함수 데이터 덩어리
console.log(getNumber())  // 123

console.log(typeof getNumber)  // function
console.log(typeof getNumber())  // number

const getNumber2 = function() {
  return 123;
}

console.log(typeof getNumber2); // function
console.log(typeof getNumber2()); // number

const aa = function() {
  console.log('A');
}

const bb = function(c) {
  console.log(c)  // 함수 aa 데이터 덩어리
  c() // A
}

// bb(123);  // 123은 함수에 인수로 들어가고, c가 매개변수로 그 값을 받는다
bb(aa)

// 형 변환(Type Conversion)
const num = 1 // Number
const str = '1' // String

console.log(num === str)  // false > 일치 연산자
console.log(num == str) // true > 동등 연산자

const zero = 0
const bln = false
console.log(zero === bln) // false
console.log(zero == bln)  // true

const one = 1
const bln2 = true
console.log(one === bln2) // false
console.log(one == bln2)  // true

// 두 개의 데이터를 비교 시, 
// 형 변환이 일어나 의도하지 않은 결과가 나올 수 있기 때문에 
// 되도록 동등 연산자가 아닌 일치 연산자를 써야한다

// 참과 거짓(Truthy & Falsy)
// Falsy 7가지 외에는 모두 참
// 1) false
// 2) 0
// 3) null
// 4) undefined
// 5) NaN
// 6) ''
// 7) 0n : BigInt

if(0n) {
  console.log('참!')  // 출력 x
}

const books = []
if(books.length) {
  console.log('아이템이 들어있음!') // books.length는 0이기 때문에 출력 x
}

// 데이터 타입 확인
// typeof 방법
console.log(typeof 'Hello' === 'string') // true
console.log(typeof 123 === 'number') // true
console.log(typeof false === 'boolean') // true
console.log(typeof undefined === 'undefined') // true
console.log(typeof null === 'null') // false  > null은 object 타입
console.log(typeof [] === 'object') // true
console.log(typeof {} === 'object') // true
console.log(typeof function(){} === 'function') // true

// null, [], {}의 데이터 타입은 모두 'object'이므로 다른 방법으로 구분 필요
console.log([].constructor === Array) // true
console.log({}.constructor === Object)  // true

// console.log(null.constructor) // ERROR
// null 데이터 구분 방법
// 다른 데이터도 구분이 가능
console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null') // true

function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType('Hello'))  // String
console.log(checkType(123))  // Number
console.log(checkType(false))  // Boolean
console.log(checkType(undefined))  // Undefined
console.log(checkType(null))  // Null
console.log(checkType([]))  // Array
console.log(checkType({}))  // Object
console.log(checkType(function(){}))  // Function

console.log(checkType('Hello') === 'String')  // true
console.log(checkType(123) === 'Number')  // true
console.log(checkType(false) === 'Boolean')  // true
console.log(checkType(undefined) === 'Undefined')  // true
console.log(checkType(null) === 'Null')  // true
console.log(checkType([]) === 'Array')  // true
console.log(checkType({}) === 'Object')  // true
console.log(checkType(function(){}) === 'Function')  // true



