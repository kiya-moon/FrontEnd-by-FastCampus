const date = new Date()
console.log(date) // Thu Oct 26 2023 16:13:09 GMT+0900 (한국 표준시)

const d1 = new Date(2022, 11, 16, 12, 57, 30)
console.log(d1) // Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)
                // 월에 대해 제로베이스 넘버링이 적용됨
                // 1월 2월 3월 4월 5월 6월 7월 8월 9월 10월 11월 12월
                //  0   1   2   3   4   5   6   7   8   9   10   11

const d2 = new Date('Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)')
console.log(d2) // Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)        
console.log(d2.getFullYear()) // 2022       


// .getFullYear()와 .setFullYear()
// 날짜 인스턴스의 '연도'를 반환하거나 지정한다

console.log(date.getFullYear()) // 2023

date.setFullYear(2024)
console.log(date.getFullYear()) // 2024
console.log(date) // Sat Oct 26 2024 16:27:48 GMT+0900 (한국 표준시)


// .getMonth()와 .setMonth()
// 날짜 인스턴스의 '월'을 반환하거나 지정
// 0부터 시작(Zero-based numbering)

console.log(date.getMonth())  // 9
                              // 현재 날짜는 10월이지만 zero-based numbering 되기 때문에 9가 반환된다
console.log(date)

date.setMonth(0)
console.log(date.getMonth())  // 0
console.log(date) // Fri Jan 26 2024 16:31:57 GMT+0900 (한국 표준시)
                  // 월을 0으로 지정했으므로 1월이 된다


// .getDate()와 .setDate()
// 날짜 인스턴스의 '일'을 반환하거나 지정

console.log(date.getDate()) // 26
console.log(date) // Fri Jan 26 2024 16:34:30 GMT+0900 (한국 표준시)

date.setDate(11)
console.log(date.getDate()) // 11
console.log(date) // Thu Jan 11 2024 16:34:43 GMT+0900 (한국 표준시)


// .getHours()와 .setHours()
// 날짜 인스턴스의 '시간'을 반환하거나 지정
// -s로 끝남

console.log(date.getHours())  // 16
console.log(date) // Thu Jan 11 2024 16:47:14 GMT+0900 (한국 표준시)

date.setHours(7)
console.log(date.getHours())  // 7
console.log(date) // Thu Jan 11 2024 07:47:24 GMT+0900 (한국 표준시)


// .getMinutes()와 .setMinutes()
// 날짜 인스턴스의 '분'을 반환하거나 지정
// -s로 끝남

console.log(date.getMinutes())  // 53
console.log(date) // Thu Jan 11 2024 07:53:24 GMT+0900 (한국 표준시)

date.setMinutes(2)
console.log(date.getMinutes())  // 2
console.log(date) // Thu Jan 11 2024 07:02:31 GMT+0900 (한국 표준시)


// .getSeconds()와 .setSeconds()
// 날짜 인스턴스의 '초'를 반환하거나 지정
// -s로 끝남

console.log(date.getSeconds())  // 14
console.log(date) // Thu Jan 11 2024 07:02:14 GMT+0900 (한국 표준시)

date.setSeconds(57)
console.log(date.getSeconds())  // 57
console.log(date) // Thu Jan 11 2024 07:02:57 GMT+0900 (한국 표준시)


// .getDay()
// 날짜 인스턴스의 '요일'을 반환

const day = date.getDay()

console.log(day)  // 4
console.log(getDayKo(day))  // 목요일

function getDayKo(day) {
  switch (day) {
    case 0: return '일요일'
    case 1: return '월요일'
    case 2: return '화요일'
    case 3: return '수요일'
    case 4: return '목요일'
    case 5: return '금요일'
    case 6: return '토요일'
  }
}


// .getTime()와 .setTime()
// `1970-01-01 00:00:00`(유닉스타임)부터 경과한. 
// 날짜 인스턴스의 '밀리초(ms)'로 반환하거나 지정

const date2 = new Date()

console.log(date2.getTime()) // 1698307546020
console.log(date2) // Thu Oct 26 2023 17:05:53 GMT+0900 (한국 표준시)

date2.setTime(1700000000000)
console.log(date2.getTime())  // 1700000000000
console.log(date2)  // Wed Nov 15 2023 07:13:20 GMT+0900 (한국 표준시)

// 예제
Date.prototype.isAfter = function (date) {
  const a = this.getTime()
  const b = date.getTime()
  return a > b
}

const d3 = new Date('Sat Jan 01 2022 00:00:00 GMT+0900 (한국 표준시)')
const d4 = new Date('Sun Jan 01 2023 00:00:00 GMT+0900 (한국 표준시)')

console.log(d3.isAfter(d4)) // false
console.log(d4.isAfter(d3)) // true


// Date.now()
// `1970-01-01 00:00:00`(유닉스타임)부터 경과한,
//  메소드가 호출될 때의 '밀리초(ms)'로 반환

// 고정된 값
const time = new Date().getTime()
// 호출될 때의 시간 반환
console.log(Date.now())
console.log(time)

setTimeout(() => {
  console.log(Date.now())
  console.log(time)
}, 1000)

