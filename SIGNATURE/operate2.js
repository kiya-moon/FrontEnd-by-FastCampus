// 선택적 체이닝(Optional Chaining)
// 너무 남용하면 에러를 조기에 발견하거나 디버깅이 어려워지는 경우가 생김
// 예를 들어 user?.adress.street일 경우, user는 논리상 만드시 존재해야 하기 때문에 user에 값이 없다면 에러를 반환하는 게 옳다

// 예외처리 용도
const user = {} 
console.log(user.name)  // undefined

const user2 = null 
// console.log(user2.name)  // TypeError, undefined일때도 마찬가지
console.log(user2?.name) // undefined

const userA = {
  name: 'Front',
  age: 85,
  address: {
    country: 'Korea',
    city: 'Seoul'
  }
}

const userB = {
  name: 'Back',
  age: 22
}

function getCity(user) {
  return user.address?.city || '주소 없음'
}

console.log(getCity(userA)) // Seoul
console.log(getCity(userB)) // undefined인 address에서 city를 읽으려하기 때문에 TypeError
                            // user.address?.city 물음표를 사용하여 선택적 체이닝을 하면 undefined 반환
                            // OR 연산자 사용 시, '주소 없음'이 출력됨


// IF 조건문
function isPositive(number) {
  if (number > 0) {
    return '양수'
  }
}

console.log(isPositive(1))  // 양수
console.log(isPositive(-2))  // undefined

function isPositive2(number) {
  if (number > 0) {
    return '양수'
  } else if (number < 0) {
    return '음수'
  } else {
    return '0'
  }
}

console.log(isPositive2(1))  // 양수
console.log(isPositive2(-2))  // 음수
console.log(isPositive2(0)) // 0


// Switch 조건문
function price(fruit) {
  let p
  switch (fruit) {
    case 'Apple':
      p = 1000
      break
    case 'Banana':
      p = 1500
      break
    case 'Cherry':
      p = 2000
      break
    default:
      p = 0
  }

  return p
}

console.log(price('Apple')) // 1000
console.log(price('Hello')) // 0

// 최적화
function price2(fruit) {
  switch (fruit) {
    case 'Apple':
      return 1000 // return을 하면 switch문이 바로 끝나기 때문에 break가 필요하지 않다
    case 'Banana':
      return 1500
    case 'Cherry':
      return 2000
    default:
      return 0
  }
}

console.log(price2('Apple')) // 1000
console.log(price2('Hello')) // 0

// switch 조건문은 if 조건문으로 변경 가능하다
// 상황에 따라 if문은 switch문으로 변경이 어려울 수도 있다
function price3(fruit) {
  if (fruit === 'Apple') {
    return 1000
  } else if (fruit === 'Banana') {
    return 1500
  } else if (fruit === 'Cherry') {
    return 2000
  } else {
    return 0
  }
}

console.log(price3('Apple')) // 1000
console.log(price3('Hello')) // 0


// for 반복문
for(let i = 0; i < 10; i += 1) {
  if (i > 4) {
    break
  }
  if(i % 2 === 0) {
    continue;
  }
  console.log(i)
}


// for of 반복문
// 배열 데이터 사용
const fruits = ['Apple', 'Banana', 'Cherry']

for (let i = 0; i < fruits.length; i+= 1){
  console.log(fruits[i])
}

for ( const a of fruits) {
  console.log(a)
}

const users = [
  {
    name: 'Front',
    age: 85
  },
  {
    name: 'Back',
    age: 22
  },
  {
    name: 'Kiya',
    age: 30
  },
]

for ( let i = 0; i < users.length; i += 1 ) {
  console.log(users[i])
  console.log(users[i].name)
}

for (const user of users) {
  console.log(user)
  console.log(user.name)
}


// for in 반복문
// 객체 데이터 사용
const userX = {
  name: 'Front',
  age:85,
  isValid: true,
  email: 'front@gmail.com'
}

for (const key in userX) {
  console.log(key)
  console.log(userX.age)
  console.log(userX['age'])
}


// While 반복문
let n = 0
while (n < 4) {
  console.log(n)
  n += 1
}


// // do ~ while 반복문
do {
  console.log(n)
  n += 1
} while (n < 4)
