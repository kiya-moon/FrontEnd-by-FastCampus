// .length
// 배열의 길이(숫자)를 반환

const arr = ['A', 'B', 'C']
console.log(arr.length) // 3


// .at()
// 대상 매열을 인덱싱
// 음수 값을 사용하면 뒤에서부터 인덱싱

console.log(arr[0]) // A
console.log(arr.at(0))  // A

console.log(arr[arr.length - 1])  // C
console.log(arr.at(-1)) // C


// .concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환

const arr1 = ['A', 'B', 'C']
const arr2 = ['D', 'E', 'F']
// const arr3 = arr1.concat(arr2)
const arr3 = [...arr1, ...arr2] // 전개연산자로도 concat의 기능을 할 수 있다

console.log(arr1) //  ['A', 'B', 'C']
console.log(arr2) //  ['D', 'E', 'F']
console.log(arr3) //  ['A', 'B', 'C', 'D', 'E', 'F']


// .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참(Truthy)을 반환하는지 확인

const arr4 = [1, 2, 3, 4]
const isValid = arr4.every(item => item < 5)
console.log(isValid)  // true
                      // 만약 arr4 아이템 중 하나라도 5 이상인 숫자가 있다면 false가 반환된다


// .filter()
// 주어진 콜백 테스트를 통과(참(Truthy)을 반환)하는 모든 요소를 새로운 배열을 반환
// 모든 요소가 테스트를 통과하지 못하면 빈 배열([])을 반환
const numbers = [1, 20, 7, 9, 104, 0, 58]
const filteredNumbers = numbers.filter(number => number < 30)

console.log(filteredNumbers)  //  [1, 20, 7, 9, 0]

const users = [
  { name: 'Front', age: 85 },
  { name: 'Back', age: 22 },
  { name: 'Lion', age: 11 }
]
const adults = users.filter(user => user.age >= 19)
console.log(adults) // 나이 조건을 통과하지 못한 Lion을 제외한 객체 데이터가 adults 배열로 들어온다


// .find()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환

// 예제1
const arr5 = [5, 8, 130, 12, 44]
const foundItem = arr5.find(item => item > 10)

console.log(foundItem)  // 130

// 예제2
const foundUser = users.find(user => user.name === 'Lion')
console.log(foundUser)  // {name: 'Lion', age: 11}


// .findIndex()
// 대상 배열에서 콜백 테스트를 통과하는 첫번째 요소의 인덱스를 반환

const index = arr5.findIndex(item => item > 10)
console.log(index)  // 2


// .flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)까지 이어붙인 새로운 배열을 생성
// 깊이의 기본값은 `1` 입니다.

const arr6 = [1, 2, [3, 4, [5, 6, [7, 8]]]]

console.log(arr6.flat()) // [1, 2, 3, 4, [5, 6, [7, 8]]]
                         // flat()의 기본 깊이는 1이기 때문에 depth 1까지의 배열만 이어붙일 수 있다
console.log(arr6.flat(2)) //  [1, 2, 3, 4, 5, 6, [7, 8]]
console.log(arr6.flat(Infinity))  //  [1, 2, 3, 4, 5, 6, 7, 8]
                                  // 하위 배열의 깊이는 알 수 없으나 모든 하위 배열을 이어붙이고 싶을때는 Infinity를 사용


// .forEach()
// 대상 배열의 길이만큼 주어진 콜백을 실행

// 1. for문
for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i])
}

// forEach()
arr.forEach(item => console.log(item))

// 둘 모두 같은 값을 반환하지만 forEach()를 사용하는 것이 훨씬 간단하다
// 다만 forEach()는 반복을 중간에 종료할 수 없으므로 상황에 따라 사용한다


// .includes()
// 대상 배열이 특정 요소를 포함하고 있는지 확인

// 예제1
const arr7 = [1, 2, 3]
console.log(arr.includes(7))  // false

// 예제2
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(fruits.includes('Apple')) // True
console.log(fruits.includes('cherry'))  // false > 대소문자 구분을 확실히 해야함

// 예제3
console.log(users.includes({name: 'Front', age: 85})) // flase
                                                      // 화면 상 코드가 같은데 왜 false일까?
                                                      // JS에서는 기본적으로 데이터를 원시형과 참조형으로 나눔
                                                      // 참조형에는 객체 데이터, 배열 데이터, 함수 데이터가 있는데, 참조형의 데이터는 생긴 게 같더라도 서로 다른 데이터일 수 있다

const front = users[0]
console.log(users.includes(front))  // ture


// .join()
// 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환

console.log(fruits.join())  // Apple,Banana,Cherry
                            // 구분자가 주어지지 않으면 자동으로 쉼표(,)를 붙여 출력한다
console.log(fruits.join(', '))  // Apple, Banana, Cherry
console.log(fruits.join('/')) // Apple/Banana/Cherry


// .map()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환

// 예제1
const numbers2 = [1, 2, 3, 4]
const newNumbers = numbers2.map(item => item * 2)
console.log(newNumbers) // [2, 4, 6, 8]
console.log(numbers2) // [1, 2, 3, 4] > 원본엔 변화 없음

// 예제2
const newUsers = users.map(user => ({  // { return } 생략 시 소괄호()로 감싸준다
    ...user,  // === ...{ name: 'Front', age: 85} === name: 'Front', age: 85
    isValid: true,
    email: null
}))

console.log(newUsers) // (3) [{…}, {…}, {…}]
                      // 0: {name: 'Front', age: 85, isValid: true, email: null}
                      // 1: {name: 'Back', age: 22, isValid: true, email: null}
                      // 2: {name: 'Lion', age: 11, isValid: true, email: null}
                      // length: 3
                      // [[Prototype]]: Array(0)


// .pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환
// 대상 배열 원본이 변경된다

console.log(fruits.pop()) // Cherry
console.log(fruits) // ['Apple', 'Banana']


// .push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// 대상 배열 원본이 변경된다

console.log(fruits.length)  // 2

const newLength = fruits.push('Orange')
console.log(newLength)  // 3
console.log(fruits) // ['Apple', 'Banana', 'Orange']

fruits.push('Mango', 'Strawberry')
console.log(fruits) // ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry']


// .reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환
// 각 콜백의 반환 값은 다음 콜백으로 전달된다!

// 예제1
const numbers3 = [1, 2, 3]
const sum = numbers3.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue
}, 0) // 0 + 1 > 1 + 2 > 3 + 3 > 6

// accumulator, currentValue는 acc, cur로 줄여서 많이 사용
// const sum = numbers3.reduce((acc, cur) => acc + cur, 0)

console.log(sum)  // 6

// 예제2
// 총 나이 계산
const totalAge = users.reduce((acc, cur) => {
  return acc + cur.age
}, 0)
// > const totalAge = users.reduce((acc, cur) => acc + cur.age, 0)

console.log(totalAge) // 118
// 평균 나이
console.log(`평균 나이: ${(totalAge / users.length).toFixed(1)} 세`)  // 평균 나이: 39.3 세

// 모든 이름 추출
const namesArray = users.reduce((acc, cur) => {
  acc.push(cur.name)
  return acc
}, [])
const names = namesArray.join(', ')
/* 
> const names = users.reduce((acc, cur) => {
    acc.push(cur.name)
    return acc  
  }, [])
  .join(', ')
*/

console.log(names)  // Front, Back, Lion


// .reverse()
// 대상 배열의 순서를 반전
// 대상 배열의 원본이 변경된다

const reversed = arr.reverse()

console.log(reversed) // ['C', 'B', 'A']
console.log(arr)  // ['C', 'B', 'A']


// .shift()
// 대상 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환한다
// 대상 배열 원본이 변경된다

console.log(arr.shift())  //  C
console.log(arr)  // ['B', 'A']


// .slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반환
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 배열의 끝까지 추출

const arr8 = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

console.log(arr8.slice(0, 3)) // 0 부터 2 인덱스까지 추출 > ['A', 'B', 'C']
console.log(arr8.slice(4, -1))  // 인덱스 4부터 마지막자리 전까지 추출 > ['E', 'F']
console.log(arr8.slice(4))  // 인덱스 4부터 마지막까지 추출 > ['E', 'F', 'G']
console.log(arr8.slice()) // 전체 추출 > ['A', 'B', 'C', 'D', 'E', 'F', 'G']


// .some()
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는 지 확인한다
// 하나라도 테스트를 통과하면 true 반환
// 하나도 통과하지 못하면 false 반환

const isValid2 = numbers2.some(item => item > 3)
console.log(isValid2) // true


// .sort()
// 대상 배열을 콜백의 반환 값(음수, 양수, 0)에 따라 정렬
// 콜백을 제공하지 않으면 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬
// 대상 배열 원본이 변경됨

// 예제1
const numbers4 = [4, 17, 2, 103, 3, 1, 0]

numbers4.sort()
console.log(numbers4) // [0, 1, 103, 17, 2, 3, 4]

numbers4.sort((a, b) => a - b)  // 음수가 나오면 앞의 숫자를 더 낮은 값으로 판단하여 더 낮은 인덱스로 보낸다
                                // 오름차순
console.log(numbers4)  // [0, 1, 2, 3, 4, 17, 103]

numbers4.sort((a, b) => b - a)  // 17에서 4를 빼 양수가 나오게 함으로써, a가 b보다 크게 인식되도록 한다
                                // 내림차순
console.log(numbers4)  // [103, 17, 4, 3, 2, 1, 0]

// 예제2
users.sort((a, b) => a.age - b.age)
console.log(users)  // 객체데이터에서도 나이 순으로 오름차순 정렬이 된다

users.sort((a, b) => b.age - a.age)
console.log(users)  // 내림차순


// .splice()