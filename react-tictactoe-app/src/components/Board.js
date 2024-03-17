// import React, { Component } from 'react' // 클래스형
// eslint-disable-next-line
import React, { useState } from 'react'  // 함수형
// import { Square } from './Square' > {}는 컴포넌트 안에 여러 개의 요소가 있을 때 사용
import Square from './Square' // 현재  Square 컴포넌트에는 Square 요소 하나이므로 {} 사용x
import "./Board.css"

// export default class Board extends Component {
const Board = ({squares, onClick}) => {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     // Array.fill()
  //     // 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채운다
  //     squares: Array(9).fill(null)
  //   }
  // }

  // const [squares, setsquares] = useState(Array(9).fill(null)) // 첫번재 인자는 getter, 두번째 인자는 setter
  // const [xIsNext, setXIsNext] = useState(true)

  // const calculaterWinner = (i) => {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6]
  //   ]

  //   for (let index = 0; index < lines.length; index++) {
  //     const [a, b, c] = lines[index]
  //     if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
  //   }
  //   return null
  // }

  // const winner = calculaterWinner(squares)
  // let status

  // if (winner) {
  //   status = 'Winner :'+ winner
  // } else {
  //   status = `Next Player : ${xIsNext ? 'X' : 'O'}`
  // }


  // handleClick(i) {
  //   // Array.prototype.slice() : 원본 배열을 복사하여 slice
  //   const squares = this.state.squares.slice()
  //   squares[i] = 'X'
  //   this.setState = ({ squares: squares })
  // }

  // const handleClick = (i) => {
  //   const newSquares = squares.slice()  // 같은 이름의 변수를 사용하면 안되므로 이름 변경

  //   if(calculaterWinner(newSquares) || newSquares[i]) return

  //   newSquares[i] = xIsNext ? 'X' : 'O'
  //   setsquares(newSquares)  // setter가 있으므로 this.setState 대신 setSquares 사용
  //   // setXIsNext(!xIsNext)
  //   setXIsNext(prev => !prev) // 함수를 써서 이전 값을 바꿔주는 방법. prev는 원하는 대로 명명 가능
  // }

  // renderSquare(i) {
  //   return <Square value={ this.state.squares[i] } 
  //     onClick={ () => this.handleClick(i) } />
  // }
  const renderSquare = (i) => {
    return <Square value={ squares[i] } 
      onClick={ () => onClick(i) } /> // this가 없어도 바로 가져다 사용 가능
  }


  // render() {
    return (
      <div className='board-wrapper'>
        {/* <div className='status'>{ status }</div> */}
        <div className='board-row'>
          {/* Square를 일일이 호출하는 대신 renderSquare(i) 함수로 만들고 'this.renderSquare'로 호출 */}
          {/* 함수형 컴포넌트에서는 'this.' 제거 */}
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    )
  // }
}
export default Board  // 함수형 컴포넌트는 외부에서 가져다 쓸 수 있게 해주기 위해서 export 사용
