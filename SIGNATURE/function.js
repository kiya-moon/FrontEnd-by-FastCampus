const { values } = require("lodash")

// 함수 선언문(Declaration)
function example() {} // 함수 선언

// 함수 표현식(Expression)
const example2 = function() {} // 함수 할당

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 함수가 복잡한 구현부를 갖고 있으면 js 코드를 읽는 데 시간이 오래 걸리므로, 
// 자세한 내용은 나중에 읽도록 함수 선언부를 아래쪽으로 내려준다

// 함수 선언일 때는 호출이 먼저되어도 에러가 나지 않는다
// 호출
hello()

// 함수 선언
function hello() {
  console.log('Hello~')
}

// 함수 표현식일 때는 호출을 먼저 할 경우 에러가 발생한다
// 호출
// hello2()

// 함수 표현
// const hello2() = function() {
//   console.log('Hello~')
// }


// 매개변수 패턴(Parameter pattern)
// 1. 기본값(Default value)
function sum(a, b = 1) {  // 인수 1, 2를 받는 매개변수 a, b
  return a + b
}

console.log(sum(1, 2)) // 인수 1, 2 > 3
console.log(sum(7)) // a는 7이지만 b는 정의되지 않은 undefined. number + undefined는 표시할 수 없는 숫자 > NaN 
                    // 인수가 들어오지 않을 경우의 기본값을 매개변수에 지정해주어야 한다

// 2. 구조분해할당(Destructuring assignment)
// 1) 객체일때
const user = {
  name: 'Front',
  age: 85
}

// 일반적인 방법
function getName(user) {
  return user.name
}
console.log(getName(user))  // Front

// 구조분해할당 방법
function getName2(user) {
  const { name } = user
  return name
}
console.log(getName2(user)) // Front

// 매개변수 위치에서 구조분해할당
function getName3({name}) {
  return name
}
console.log(getName3(user)) // Front

function getEmail({email}) {
  return email
}
console.log(getEmail(user)) // undefined

function getEmail2({email = '이메일이 없습니다.'}) {
  return email
}
console.log(getEmail2(user)) // 이메일이 없습니다

// 2) 배열일때
const fruits = ['Apple', 'Banana', 'Cherry']

function getSecondItem(array) {
  return array[1]
}
console.log(getSecondItem(fruits))  // Banana

// 매개변수 위치에서 배열구조분해할당
function getSecondItem2([a, b, c]) {  // === function getSecondItem2([, b]) 
  return b
}
console.log(getSecondItem2(fruits)) // Banana

// 3. 나머지 매개변수(Rest parameter) 
function sum2(...rest) {
  console.log(rest)
  console.log(arguments)  // arguments는 따로 정의하지 않아도 
                          // 함수에 들어온 인수를 배열 형태로 보여주는데, 
                          // 진짜 배열은 아니고 유사배열(Array-Like)

  // rest로 받은 모든 숫자의 값을 더하는 로직
  // 배열데이터의 reduce() 메소드 사용
  // reduce() 메소드는 메소드가 붙어있는 배열의 아이템 갯수만큼 콜백함수를 실행한다
  // acc는 이전 값, cur은 현재 값
  // 쉼표 뒤 0은 이전 값을 설정해준 것
  // 만약 sum2(1,2)가 매개변수로 전달되면, 처음 시작에서 acc는 0, cur은 1이 된다.
  // return된 1(0+1)은 다시 acc에 들어가고 cur에는 2가 들어와 최종적으로 3이 return 된다
  return rest.reduce(function (acc, cur) {
    return acc + cur
  }, 0)
}

console.log(sum2(1, 2))
console.log(sum2(1, 2, 3, 4))
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// ...
// 매개변수가 몇 개가 필요할 지는 알 수가 없다
// 이럴 때 나머지 매개변수 개념이 필요
// 나머지 매개변수는 들어노는 배열을 모두 받아 배열형태로 저장하게 된다


// 화살표 함수(Arrow function)
// 선언
function declaration() {}
// 표현
const expression = function() {}
// 화살표 함수
const arrow = () => {}

// 일반적인 함수 선언
function sum3(a, b){
  return a + b
}
console.log(sum3(1, 2))
console.log(sum3(10, 20))

// Arrow function 사용
// 할당 연산자(=)를 사용하기 때문에 함수 표현에 해당한다
const sum4 = (a, b) => {  // return으로 시작될 경우 중괄호와 return 생략 가능 
                          // > const sum4 = (a, b) => a + b
  return a + b
}
console.log(sum4(1, 2))
console.log(sum4(10, 20))

const a = () => {}  // 매개변수가 없으면 소괄호 생략 불가능
const b = x => {} // 매개변수가 하나라면 소괄호 생략 가능
const c = (x, y) => {}  // 매개변수가 하나 이상이라면 소괄호 생략 불가능
const d = x => { return x * x }
const e = x => x * x  // 중괄호, return 생략
const f = x => {
  console.log(x * x)
  return x * x
}
const g = () => { return { a: 1 }}
// const h = () => { a: 1 }  // 생략이 가능할까?
                            // 함수의 블럭과 객체 데이터 모두 동일한 중괄호를 사용하기 때문에 
                            // 객체 데이터의 중괄호만 남기게 되면 h 함수의 입장에서는 해당 중괄호를 함수의 블럭으로 느끼게 된다 
                            // > a: 1을 이해하지 못하므로 에러 발생
const h = () => {{ a: 1 }}
const i = () => { return [1, 2, 3] }
const j = () => [1, 2, 3] // 배열 데이터의 대괄호는 함수의 블럭을 뜻하는 중괄호와 겹치지 않으므로 중괄호 생략 가능


// 즉시실행함수(IIFE, Immediately-Invoked Function Expression)
// 함수를 만들자마자 바로 사용할 수 있다
const aa = 7

// 일반적인 함수의 표현과 호출
const double = () => {
  console.log(aa * 2)
}
double()

// 즉시실행함수
;(() => {
  console.log(aa * 2)
})()

// 사용 패턴
;(() => {})() // (F)()
;(function() {})()  // (F)()
;(function() {}())  // (F())
;!function() {} ()  // !F()
;+function() {} ()  // +F()

;(() => { console.log(aa * 2) })() 
;(function() { console.log(aa * 2) })()  
;(function() { console.log(aa * 2) }())  
;!function() { console.log(aa * 2) } ()  
;+function() { console.log(aa * 2) } () 

;((a, b) => {
  console.log(a)  // 1
  console.log(b)  // 2
})(1, 2)  // 두 번째 소괄호에 들어가는 데이터들을 해당 함수의 매개변수로 전달한다

// 이 특성을 활용하면 우리가 사용하는 다양한 전역 데이터들의 이름을 간소화 할 수 있다
// 예를 들어 두 번째 소괄호의 첫 번재 인수로는 window 전역 객체를 추가하고,
// 두 번째로는 자주 사용하는 document 객체를 전달할 수 있다
// a에는 window 객체, b에는 document 객체 데이터가 담긴다
// 이처럼 외부의 변수를 내부에서 다른 이름으로 사용함으로써 코드를 난독화 할 수 있다
;((a, b) => {
  console.log(a.innerWidth) // 500
  console.log(b.body) // body 태그의 요소들
})(window, document)


// 콜백(Callback)
// 함수가 실행될 때 인수로 들어가는 또 하나의 함수
const x = callback => {
  callback()
  console.log('X')
}

const y = () => {
  console.log('Y')
}

x(y)

// 다른 예제
const sum5 = (a, b) => a + b
console.log(sum5(1, 2))
console.log(sum5(3, 7))

// 1초 뒤에 값을 반환하게 만들기
const sum6 = (a, b) => {
  setTimeout(() => {
    return a + b  // 이 안에 return을 적을 경우, 
    // sum6 함수가 아닌 setTimeout 함수의 안으로 들어가는 콜백함수에서의 return이므로
    // 아무런 값도 밖으로 나가지 않는다 > undefined
  }, 1000)
}
console.log(sum6(1, 2))
console.log(sum6(3, 7))

// 콜백 함수 한 번 더 쓰기
// 함수를 매개변수 c로 전달하고, setTimeout 함수 안에서 c에 담긴 함수를 호출한다
// value(a와 b에 담긴 값에 대한 더하기 연산)가 1초 뒤 콘솔에 찍힌다 
const sum7 = (a, b, c) => {
  setTimeout(() => {
    c(a + b)
  }, 1000)
}
sum7(1, 2, value => { console.log(value)})
sum7(3, 7, value => { console.log(value)})

// 콜백함수를 이용하여 이미지 로드하기
// https://www.gstatic.com/webp/gallery/4.jpg

// loadImage라는 함수가 호출이 되면
const loadImage = (url, cb) => {
  // document.createElement 메소드를 통해 자바스크립트 메모리 상에 img 태그를 생성한다
  const imgEl = document.createElement('img')
  // 그렇게 만든 img 태그의 src에 인수로 받은 url을 할당한다
  imgEl.src = url
  // imgEl.src에 할당된 url을 로드하는 이벤트
  // 이벤트가 끝나면 콜백함수가 실행된다
  imgEl.addEventListener('load', () => {
    setTimeout(() => {
      cb(imgEl)
    }, 1000)
  })
}

const containerEl = document.querySelector('.container')
loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
  containerEl.innerHTML = ''
  containerEl.append(imgEl)
})
