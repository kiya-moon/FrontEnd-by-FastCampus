// 정적 메소드
// prototype이 붙지 않은 메소드

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  // prototype 메소드
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  // class가 사용가능한 메소드를 만드려면 메소드명 앞에 static을 명시해주어야 한다!
  static isUser() {
    return true
  }
  static isUser2(User) {
    if(User.firstName && User.lastName) {
      return true
    }
    return false
  }
}

const front = new User('Front', 'End')
const back = new User('Back', 'End')

// prototype 메소드는 인스턴스에서는 호출 가능하나
console.log(front.getFullName())  // Front End
console.log(back.getFullName()) // Back End

// class에서는 호출이 불가능하다
// console.log(User.getFullName()) // TypeError
// User에서 바로 호출할 수 있는 메소드를 만들려면??
console.log(User.isUser())

// 정적 메소드는 인스턴스에서 사용 불가능하다
// console.log(front.isUser()) // TypeError

console.log(User.isUser2(front))  // true

// firstName, lastName을 가진 구조가 아닌 데이터
const lion = {
  name: 'Lion Apeach',
  age: 85
}

console.log(User.isUser2(lion)) // 사용하고 있는 구조가 아니기 때문에 false
                                // 정적 메소드가 그 구조를 체크하는 역할을 함


// 상속(Ingeritance)

// 운송수단
class Vehicle {
  constructor(acceleration = 1) {
    this.speed = 0
    this.acceleration = acceleration
  }
  accelerate() {
    this.speed += this.acceleration
  }
  decelerate() {
    if(this.speed <= 0) {
      console.log('정지!')
      return
    }
    this.speed -= this.acceleration
  }
}

// 자전거
class Bicycle extends Vehicle {
  constructor(price = 100, acceleration) {
    super(acceleration)
    this.price = price
    this.wheel = 2
  }
}

const bicycle = new Bicycle(300, 2)
console.log(bicycle)  // Bicycle {speed: 0, acceleration: 2, price: 300, wheel: 2}

bicycle.accelerate()
console.log(bicycle)  // Bicycle {speed: 2, acceleration: 2, price: 300, wheel: 2}

// instanceof : 변수 bicycle이 Bicycle 클래스의 인스턴스가 맞는 지 확인
console.log(bicycle instanceof Bicycle) // true
console.log(bicycle instanceof Vehicle) // Bicycle은 Vehicle을 상속하는 클래스이기 때문에 true

// 자동차
class Car extends Bicycle {
  constructor(license, price, acceleration) {
    super(price, acceleration)
    this.license = license
    this.wheel = 4
  }
  // 오버라이딩(Overwriting)
  accelerate() {
    if(!this.license) {
      console.error('무면허!')
      return
    }
    this.speed += this.acceleration
    console.log('가속!', this.speed)
  }
}

const carA = new Car(true, 7000, 10)
const carB = new Car(false, 4000, 6)
console.log(carA) // Car {speed: 0, acceleration: 10, price: 7000, wheel: 4, license: true}
console.log(carB) // Car {speed: 0, acceleration: 6, price: 4000, wheel: 4, license: false} 

carA.accelerate() // 가속! 10
carA.accelerate() // 가속! 20
console.log(carA) // Car {speed: 20, acceleration: 10, price: 7000, wheel: 4, license: true}

carB.accelerate() // 무면허!
console.log(carB) // Car {speed: 0, acceleration: 6, price: 4000, wheel: 4, license: false}

console.log(carA instanceof Car)  // true
console.log(carB instanceof Car)  // true
console.log(carB instanceof Bicycle)  // true
console.log(carB instanceof Vehicle)  // true


// 보트
class Boat extends Vehicle {
  constructor(price, acceleration) {
    super(acceleration)
    this.price = price
    this.moter = 1
  }
}

const boat = new Boat(10000, 5)
console.log(boat) // Boat {speed: 0, acceleration: 5, price: 10000, moter: 1}

console.log(boat instanceof Boat) // ture
console.log(boat instanceof Vehicle) // ture
console.log(boat instanceof Bicycle) // false
console.log(boat instanceof Car) // false

// 다른 예제
class A {
  constructor() {}
}

class B extends A {
  constructor() {
    super()
  }
}

class C extends B {
  constructor() {
    super()
  }
}

const a = new A()
const b = new B()
const c = new C()

console.log(a instanceof A) // true
console.log(a instanceof B) // false
console.log(a instanceof C) // false

console.log(b instanceof A) // true
console.log(b instanceof B) // true
console.log(b instanceof C) // false

console.log(c instanceof A) // true
console.log(c instanceof B) // true
console.log(c instanceof C) // true

// instanceof는 상속받는 클래스와 모두 true로 출력된다
// 그래서 정확히 어떤 클래스에서 만들어진 것인지 체크하기 위해서 constructor를 사용한다 
console.log(c.constructor === A)  // false
console.log(c.constructor === B)  // false
console.log(c.constructor === C)  // true


const fruits = ['Apple', 'Banana']
const fruits2 = new Array('Apple', 'Banana')

console.log(fruits.constructor === Array) // true
console.log(fruits2.constructor === Array) // true

console.log(fruits instanceof Array)  // true
console.log(fruits2 instanceof Array) // ture
