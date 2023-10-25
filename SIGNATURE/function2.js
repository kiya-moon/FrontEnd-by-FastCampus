// 재귀(Recursive)
let i = 0
const a = () => {
  console.log('A')
  // a()  // 내부에서 아무런 조건 없이 자기 자신을 호출하면 함수가 무한정 호출하게 된다
          // 조건 필수★
  i += 1
  if( i < 4 ) {
    a()
  }
}

a()

// 다른 예제
const userA = { name: 'A', parent: null}
const userB = { name: 'B', parent: userA}
const userC = { name: 'C', parent: userB}
const userD = { name: 'D', parent: userC}

const getRootUser = user => {
  if ( user.parent ) {
    return getRootUser(user.parent)
  }
  return user
}

console.log(getRootUser(userD))


// 호출 스케줄링(Scheduling a function call)
// 호출을 지연하거나 반복적으로 호출되도록 하는 것

// 2초 뒤 hello를 호출
// setTimeout은 함수의 호출 시간을 지연시키는 역할을 한다
const hello = () => {
  console.log('Hello~')
}
// setTimeout(hello, 2000)
// 2초가 지나기 전 hello() 함수가 실행되지 않게 만들기
const timeout = setTimeout(hello, 2000)
// clearTimeout(timeout)

// 사용자가 어떤 액션을 취했을 때 타이머가 종료되도록 만들기
// index.html의 h1 태그 요소를 가져와, 해당 요소를 클릭하면 함수가 실행되지 않음
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  console.log('Clear!')
  clearTimeout(timeout)
})

// 2초마다 실행
// const timeout = setInterval(hello, 2000)
// 정지
// clearInterval(timeout)


// this
// 일반 함수의 this는 호출 위치에서 정의
const user = {
  // property
  firstName: 'Front',
  lastName: 'Back',
  age: 85,
  // 함수가 할당된 property는 method라고 부른다
  // 일반함수일 때는 콜론(:)과 function 생략이 가능하다 > getFullName() {}
  getFullName: function () {
    return `${this.firstName} ${this.lastName}` // 여기서 this는 getFullName이 들어있는 객체 데이터 안의 데이터를 가리킨다
  }
}

console.log(user.getFullName()) // Front Back

// 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
const user2 = {
  firstName: 'Front',
  lastName: 'Back',
  age: 85,
  getFullName: () => {
    return `${this.firstName} ${this.lastName}` // 선언된 함수를 감싸는 상위 함수가 없음
                                                // > undefined
  }
}
console.log(user2.getFullName()) // undefined undefined

function user3() {
  this.firstName = 'Lion'
  this.lastName = 'Apeach'
  return {
    firstName: 'Front',
    lastName: 'Back',
    age: 85,
    getFullName: () => {
      return `${this.firstName} ${this.lastName}` // 선언된 함수를 user3 함수가 감싸고 있음
                                                  // user3 함수에 선언되어 있는 lion과 Apeach 값이 각각 들어옴
    }               
  }
}
const u = user3()
console.log(u.getFullName())  // Lion Apeach

// 'Java'는 getFullName() 메소드가 없지만 빌려와서 사용 가능하다
const Java = {
  firstName: 'Java',
  lastName: 'Spring'
}

console.log(u.getFullName.call(Java)) // u가 아닌 Java 위치에서 호출된다
                                      // 다만 정의되는 범위가 다르기 때문에
                                      // 화살표 함수일 때는 Lion Apeach가 출력되고
                                      // 일반 함수일 때 Java Spring으로 출력된다

// 다른 예제
const timer = {
  title: 'TIMER!',
  timeout() {
    console.log(this.title) // TIMER!
//    setTimeout(function () {
    setTimeout(() => {
      console.log(this.title)
    }, 1000)
  }
}
timer.timeout()