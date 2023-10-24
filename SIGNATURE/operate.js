// 산술(Arithmetic)
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

function isEven(num) {
  return num % 2 === 0
}

console.log(isEven(3)); // flase
console.log(isEven(12));  // true

// 할당(Assignment)
// equl(=)을 사용하여 오른쪽 항의 값을 왼쫑 항에 할당해주는 것
// const a = 3
let a = 3
console.log(a)

// const는 재할당이 불가능하므로 재할당이 필요할 땐 let을 사용한다
a += 2
console.log(a)  // a = 5

// 증감(Increment & Decrement)
console.log(a++)  // a = 5  > +1 결과값이 나중에 확인된다
console.log(a)  // a = 6

console.log(++a)  // a = 7  > +1 결과값이 바로 확인된다
console.log(a)  // a = 7

console.log(a--)  //a = 7 > -1 결과값이 나중에 확인된다
console.log(a)  // a = 6

console.log(--a)  //a = 5 > -1 결과값이 바로 확인된다
console.log(a)  // a = 5

// 부정(Negation) > boolean 타입으로 출력된다
console.log(!true)  // false
console.log(!false) // true
console.log(!0) // true
console.log(!!0)  // false
console.log(!null)  // ture
console.log(!undefined) // ture
console.log(!NaN) // ture
console.log(!'')  // ture

console.log(!{})  // false
console.log(![])  // false

// 비교(Comparison)
const a2 = 1
const b2 = 3

// 동등(형 변환)
console.log(a2 == b2) // false

// 부등(형 변환)
console.log(a2 != b2) // true

// 일치
console.log(a2 === b2)  // false

// 불일치
console.log(a2 !== b2)  // true

// 큼
console.log(a2 > b2)  // false

// 크거나 같음
console.log(a2 >= b2) // false

// 작음
console.log(a2 < b2)  // true

// 작거나 같음
console.log(a2 <= b2) // true

// 논리(Logical)
// AND(그리고) 연산자
// 조건이 모두 참이어야 함
const a3 = true
const b3 = false

if(a3 && b3) {
  console.log('모두 참!') // 실행되지 않음
}

console.log(true && false)  // false
console.log(1 && 0)  // false가 아니고 0이 출력됨
                    // > && 연산자는 왼쪽부터 체크하여 가장 먼저 만나는 false 값을 반환한다
console.log('A' && 'B' && 'C')  // C > 모두 참일 경우 제일 마지막 데이터가 반환된다

// OR(또는) 연산자
if(a3 || b3) {
  console.log('하나 이상이 참!')
}

console.log(false || true)  // true
console.log(0 || 1) // 1 > 왼쪽부터 체크하여 가장 먼저 만나는 true 값을 반환
console.log(false || 0 || {}) // {}
console.log(false || [] || null)  // []
console.log(function(){} || undefined || '') //  function(){}
console.log(false || 0 || NaN)  // NaN  > 모두 거짓일 경우 제일 마지막 데이터가 반환된다

// Nullish 병합(Nullish Coalescing)
const n = 0

// OR 연산자를 사용한 경우
const num1 = n || 7
console.log(num1) // 7

// Nullish 병합 연산자를 사용한 경우
// null과 undefined 데이터를 제외한 모든 데이터를 만나면 반환한다
const num2 = n ?? 7
console.log(num2) // 0
 
console.log(null ?? 1)  // 1
console.log(undefined ?? 2) // 2
console.log(null ?? undefined)  // undefined  > 더 이상 데이터가 없을 때 마지막 데이터 반환
console.log(null ?? 1 ?? 2) // 1
console.log(false ?? 1 ?? 2)  // flase
console.log(0 ?? 1 ?? 2)  // 0

// 삼항(Ternary)
const a4 = 1

if(a4 < 2) {
  console.log('참!')  // 참!
} else {
  console.log('거짓...')
}

console.log(a4 < 2 ? '참!' : '거짓...') // 참!

function getAlert(message) {
  return message ? message : '메시지가 존재하지 않습니다'
}

console.log(getAlert('안녕하세요~'))  // 안녕하세요~
console.log(getAlert('')) // 메시지가 존재하지 않습니다

// 전개 연산자(Spread Operator)
// 배열 데이터의 대괄호를 날려준다
const a5 = [1, 2, 3]

console.log(...a5) // 1, 2, 3
console.log(1, 2, 3)  // 1, 2, 3

const b5 = [4, 5, 6]

const c5 = a5.concat(b5)
console.log(c5)  // [1, 2, 3, 4, 5, 6]

const d5 = [a5, b5]
console.log(d5)  // [[1, 2, 3], [4, 5, 6]]

const dd5 = [...a5, ...b5]
console.log(dd5)  // [1, 2, 3, 4, 5, 6]

// 객체 데이터의 괄호도 날려줄 수 있다
const a6 = {x: 1, y: 2}
const b6 = {y: 3, z: 4}

const c6 = Object.assign({}, a6, b6)
console.log(c6) // {x: 1, y: 3, z: 4} > y는 b6의 y 값으로 덮어씌워졌다

const d6 = {a6, b6}
console.log(d6) // {a: {x: 1, y: 2}, b: {y: 3, z: 4}}

const dd6 = {...a6, ...b6}
console.log(dd6) // {x: 1, y: 3, z: 4}

function fn(x, y, z) {
  console.log(x, y, z)  // 1 2 3
}

fn(1, 2, 3)

const a7 = [1, 2, 3]

fn(a7)  // [1, 2, 3] undefined undefined
fn(a7[0], a7[1], a7[2]) // 1 2 3 
fn(...a7) // 1 2 3

// 구조 분해 할당(Destructuring assignment)
const arr = [1, 2, 3]
const a8 = arr[0]
const b8 = arr[1]
const c8 = arr[2]

console.log(a8, b8, c8) // 1 2 3

const [aa8, bb8, cc8] = arr // arr 배열의 1, 2, 3이 각각 a9, b9, c9에 들어간다
console.log(aa8, bb8, cc8) // 1 2 3

let a9 = 0
let b9 = 0
let c9 = 0

const arr2 = [1, 2, 3]

;[a9, b9, c9] = arr2  // 세미콜론(;)이 없으면 JS는 const arr2 = [1, 2, 3][a9, b9, c9] = arr2로 이해한다

console.log(a9, b9, c9) // 1 2 3

let bb9 = 0
let cc9 = 0
const arr3 = [1, 2, 3]

;[, bb9, cc9] = arr // 배열에서 특정 값을 넣어줄 때
                    // 순서에 맞춰서 구조분해해야 한다
                    // 배열의 값이 많더라도 ;[,,,,,,n]

console.log(bb9, cc9) // 2 3

const arr4 = [1, 2, 3]
// const [x, rest] = arr
const [x, ... rest] = arr

console.log(x, rest)  // 1 [2, 3]

const obj = {
  e: 1,
  f: 2,
  g: 3,
  h: 30,
  i: 12
}

// 이렇게 일일이 할당해주는 것은 비효율적
// const aa = obj.a
// const bb = obj.b
// const cc = obj.c

const {e, f} = obj  // 배열과 다르게 객체는 key 값이 있기 때문에 필요한 데이터만 쏙 가져오면 된다
console.log(e, f)

const {j} = obj
console.log(j)  // undefined

const {k = 4} = obj
console.log(k)  // 4
                // 만약 객체 내에 i의 값이 지정되어 있다면, 지정된 값이 우선된다

const {e: front, f: ten = 10, g = 4} = obj
console.log(front, ten, g)

const { h , ...remain} = obj
console.log(h, remain)  // 30 {e: 1, f: 2, g: 3, i: 12}











