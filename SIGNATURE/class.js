// prototype

// 배열 리터럴
// const fruits = ['Apple', 'Banana', 'Cherry']

// 생성자 함수를 통해 만든 배열 데이터(인스턴스)
// length, includes 등을 쓸 수 있는데 prototype 속성 또는 prototype 메소드라고 한다
const fruits = new Array('Apple', 'Banana', 'Cherry')
console.log(fruits) // (3) ['Apple', 'Banana', 'Cherry']
console.log(fruits.length)  // 3
console.log(fruits.includes('Banana'))  // true
console.log(fruits.includes('Orange'))  // false

// 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

// 메소드를 직접 만들 수도 있다
Array.prototype.front = function() {
  console.log(this)
}

fruits.front()  // (3) ['Apple', 'Banana', 'Cherry']

const arr = []
arr.front() // []

// 예제
const front = {
  firstName: 'Front',
  lastName: 'Back',
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const lion = {
  firstName: 'Lion',
  lastName: 'Apeach',
  // getFullName() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

console.log(front.getFullName())  // Front Back
// console.log(lion.getFullName()) // Lion Apeach

// >>> 값은 잘 나오지만 front와 lion에 똑같은 getFullName() 코드가 중복된다. 비효율적
// lion의 getFullName()을 없애주고 front에서 빌려와 사용
console.log(front.getFullName.call(lion))

// 하지만 빌려쓰는 객체가 많아지면 코드가 헷갈리게 된다.
// 이를 위해서 prototype을 사용

// 앞글자 대문자! (Pascal Case)
function User(first, last) {
  this.firstName = first
  this.lastName = last
}
// prototype의 메소드를 만들 때는 꼭 일반함수 사용★
// this 키워드의 정의가 달라지기 때문!
User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const front2 = new User('Front', 'Back')
const lion2 = new User('Lion', 'Apeach')

console.log(front2)
console.log(lion2)
console.log(front2.getFullName())
console.log(lion2.getFullName())


// ES6에서 좀 더 간편해진 class 문법이 나옴
// ES6 classes

// prototype 방식
// function User2(first, last) {
//   this.firstName = first
//   this.lastName = last
// }

// // 각각의 객체가 동일한 메소드를 사용하기 위해서는 prototype 사용
// User2.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// class 방식
class User2 {
  // function User2() {}의 역할을 해준다
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const muzi = new User2('Muzi', 'Tube')
const neo = new User2('Neo', 'Prodo')

console.log(muzi)
console.log(neo)
console.log(muzi.getFullName())
console.log(neo.getFullName())

// class 문법은 기존의 prototype을 내장해서 돌아간다


// Getter, Setter
class User3 {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
    // this.fullName = `${first} ${last}`
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const java = new User3('Java', 'Spring')
console.log(java) // User3 {firstName: 'Java', lastName: 'Spring', fullName: 'Java Spring'}
console.log(java.getFullName()) // Java Spring

java.firstName = 'React'

console.log(java) // User3 {firstName: 'React', lastName: 'Spring', fullName: 'Java Spring'}
                  // this.fullName으로 만들 경우, 최초로 생성된 후 firstName이 바뀌어도 재생성되지는 않아 fullName이 Java Spring으로 나오게된다

console.log(java.getFullName()) // React Spring

class User4 {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
    // this.fullName = `${first} ${last}`
  }
  // Getter 사용
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  //Setter 사용
  set fullName(value) {
    console.log(value)
    ;[this.firstName, this.lastName] = value.split(' ')
  }
}

const java2 = new User4('Java', 'Spring')

console.log(java2.fullName) // Java Spring

java2.firstName = 'React'

console.log(java2.fullName) // React Spring

java2.fullName = 'Neo Jay-G'
console.log(java2)  // User4 {firstName: 'React', lastName: 'Spring'}
                    // firstName:"React"
                    // lastName:"Spring"
                    // fullName:"React Spring"  
                    // >> 변경되지 않음
                    // Neo Jay-G을 각각 Neo와 Jag-G로 나눠서 firstName과 lastName에 넣어주어야 함


