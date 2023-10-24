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
if(조건) {
  //
}

if(조건) {
  //
} else {
  //
}

if(조건1) {
  //
} else if(조건2) {
  //
} else if(조건3) {
  //
} else {
  //
}