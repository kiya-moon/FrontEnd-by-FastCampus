// .toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환

const num = 3.1415926535

console.log(num.toFixed(2))
// .toFixed()는 문자를 반환하기 때문에 숫자로 활용하기 위해서 parseFloat를 붙여준다
console.log(parseFloat(num.toFixed(2)))

console.log(typeof num.toFixed(2))  // string
console.log(typeof parseFloat(num.toFixed(2)))  // number


// .toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환

const num2 = 1000000

console.log(num2.toLocaleString())  // 1,000,000
console.log(`${num2.toLocaleString()}원`) // 1,000,000원


// Number.isInteger()
// 숫자가 정수(integer)인지 확인한다

const num3 = 123
const pi = 3.14

console.log(Number.isInteger(num))  // true
console.log(Number.isInteger(pi)) // false


// Number.isNaN()
// 주어진 값이 'NaN'인지 확인

const num4 = NaN
const num5 = 123
const str = 'Hello world'
const nul = null

console.log(Number.isNaN(num4)) // true
console.log(Number.isNaN(num5)) // false
console.log(Number.isNaN(str))  // false
console.log(Number.isNaN(nul))  // false


// Number.parseInt() 또는 parseInt()
// 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 정수로 반환

const str2 = '3.1415926535'
const num6 = 3.1415926535

// 10진수로 반환
console.log(Number.parseInt(str2, 10))  // 3
console.log(Number.parseInt(num6, 10))  // 3


// Number.parseFloat() 또는 parseFloat()
// 주어진 값(숫자, 문자)을 파싱해 부동소수점 실수로 반환(숫자)합니다.
// parseInt()와 다르게 특정 진수를 지정해줄 필요가 없다

console.log(Number.parseFloat(str2))  // 3.1415926535
console.log(Number.parseFloat(num6))  // 3.1415926535


// Math 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math

// Math.abs()
// 주어진 숫자의 절댓값을 반환

console.log(Math.abs(2))  // 2
console.log(Math.abs(-2)) // 2


// Math.ceil()
// 주어진 숫자를 올림해 정수를 반환

console.log(Math.ceil(3.1415926535))  // 4


// Math.floor()
// 주어진 숫자를 내림해 정수를 반환

console.log(Math.floor(3.1415926535))  // 3


// Math.max()
// 주어진 숫자 중 가장 큰 숫자를 반환

console.log(Math.max(1, 22, 38, 192)) // 192


// Math.min()
// 주어진 숫자 중 가장 작은 숫자를 반환

console.log(Math.min(1, 22, 38, 192)) // 1


// Math.pow()
// 주어진 숫자의 거듭제곱한 값을 반환

console.log(Math.pow(4, 2)) // 16
console.log(Math.pow(7, 2)) // 49
console.log(Math.pow(10, 3))  // 1000


// Math.random()
// 숫자 0 이상, 1 미만의 난수를 반환

console.log(Math.random())  // 0.9421683152743194
                            // 0.010825846048459598
                            // 0.7456060525978336
                            // ...

// 응용방법
// 특정 범위의 랜덤 정수를 얻는 함수
function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min
}

console.log(random()) // 0 ~ 10까지의 정수가 랜덤하게 출력
console.log(random(11, 20)) // 11 ~ 20까지의 정수가 랜덤하게 출력
console.log(random(101, 999)) // 101에서 999까지의 정수가 랜덤하게 출력


// Math.round()
// 주어진 숫자를 반올림해 정수를 반환

const num7 = 3.141
const num8 = 3.768

console.log(Math.round(num7)) // 3
console.log(Math.round(num8)) // 4




