// class형
import React, { Component } from 'react'
// import { Square } from './Square' > {}는 컴포넌트 안에 여러 개의 요소가 있을 때 사용
import Square from './Square' // 현재  Square 컴포넌트에는 Square 요소 하나이므로 {} 사용x
import "./Board.css"

export default class Board extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // Array.fill()
      // 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채운다
      squares: Array(9).fill(null)
    }
  }

  handleClick(i) {
    console.log('handleClick')
    // Array.prototype.splice() : 원본 배열을 복사하여 splice
    const squares = this.state.squares.splice()
    squares[i] = 'X'
    console.log(`i :: ${i} squares[i] :: ${squares[i]}`)
    this.setState = ({ squares: squares })
  }

  renderSquare(i) {
    return <Square value={ this.state.squares[i] } 
      onClick={ () => this.handleClick(i) } />
  }

  render() {
    return (
      <div>
        <div className='status'>Next Player: X, O</div>
        <div className='board-row'>
          {/* Square를 일일이 호출하는 대신 renderSquare(i) 함수로 만들고 this.로 호출 */}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }

}
