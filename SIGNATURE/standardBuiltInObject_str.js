// 표준내장객체
// 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects

// .length
// 문자의 길이(숫자)를 반환한다

const str = 'Hello world!'
//           012345678901
console.log(str.length) // 12


// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지(boolean) 확인한다
console.log(str.includes('Hello'))  // true
console.log(str.includes('hello'))  // false

console.log(str.includes('Hello', 0)) // true
                                      // 어느 index부터 문자가 포함되어 있는 지 확인하도록 지정할 수 있다
console.log(str.includes('Hello', 1)) // false


// .indexOf()
// 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환한다
// 일치하는 문자가 없으면 '-1'을 반환

console.log(str.indexOf('world'))  // 6
console.log(str.indexOf('Front'))  // -1


// .padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 대상 문자의 끝에 붙여 '새로운 문자'를 반환한다

const str2 = '1234567'

console.log(str2.padEnd(10, '0'))  // 1234567000
                                   // 대상 문자의 길이가 지정된 길이보다 길면 영향을 주지 않는다
console.log(str2) // 1234567


// .padStart()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 대상 문자의 앞에 붙여 '새로운 문자'를 반환한다
// padEnd와 마찬가지로 대상 문자의 길이가 지정된 길이보다 길면 영향을 주지 않는다

console.log(str2.padStart(10, '0')) // 0001234567
console.log(str2) // 1234567


// .replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 '새로운 문자'를 반환한다

const str3 = 'Hello, Hello?!'

console.log(str3.replace('Hello', 'Hi'))  // Hi, Hello?!
                                          // 처음 만나는 Hello를 Hi로 바꿔준다
console.log(str3.replace(/Hello/g, 'Hi')) // Hi, Hi?!
                                          // /Hello/g가 정규식(정규표현식)
                                          // g는 글로벌의 의미. 모든 Hello를 찾아 Hi로 바꾸라는 의미
console.log(str3) // Hello, Hello?!


// .slice()
// 대상 문자의 일부를 추출해 '새로운 문자'를 반환
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출

const str4 = 'Hello world!'
//            012345678901 (0 ~ 11)
//           -210987654321 (-1 ~ -12)

console.log(str4.slice(0, 5)) // Hello
console.log(str4.slice(6, -1))  // world
console.log(str4.slice(6))  // world!
console.log(str4) // Hello world!


// .split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환

const str5 = 'Apple, Banana, Cherry'
console.log(str5.split(', '))  // ['Apple', 'Banana', 'Cherry']
console.log(str5.split(','))  // ['Apple', ' Banana', ' Cherry']
console.log(str5.split('')) // ['A', 'p', 'p', 'l', 'e', ',', ' ', 'B', 'a', 'n', 'a', 'n', 'a', ',', ' ', 'C', 'h', 'e', 'r', 'r', 'y']

// 응용
console.log(str.split('').reverse().join('')) // !dlrow olleH 


// .toLowerCase()
// 대상 문자를 영어 소문자로 변환해 새로운 문자를 반환

console.log(str5.toLowerCase()) // apple, banana, cherry
console.log(str5)  // Apple, Banana, Cherry


// .toUpperCase()
// 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환

console.log(str5.toUpperCase()) // APPLE, BANANA, CHERRY
console.log(str5) // Apple, Banana, Cherry


// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자를 반환

const str6 = '   Fr o nt!   '

console.log(str6.trim())  // Fr o nt!
console.log(str6) //    Fr o nt!   



