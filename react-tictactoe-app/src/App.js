import Board from "./components/Board";
import React, { useState } from 'react';
import './App.css';

function App() {

  const [history, sethistory] = useState([ { squares: Array(9).fill(null) } ])
  const [xIsNext, setxIsNext] = useState(true)
  // eslint-disable-next-line
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [stepNumber, setStepNumber] = useState(0)

  const calculaterWinner = (i) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
    }
    return null
  }

  const current = history[stepNumber]
  const winner = calculaterWinner(current.squares)

  let status

  if (winner) {
    status = 'Winner :'+ winner
  } else {
    status = `Next Player : ${xIsNext ? 'X' : 'O'}`
  }

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1)
    const newCurrent = newHistory[newHistory.length - 1]
    const newSquares = newCurrent.squares.slice()
    
    if(calculaterWinner(newSquares) || newSquares[i]) return

    newSquares[i] = xIsNext? 'X' : 'O'
    sethistory([...history, { squares: newSquares }])
    setxIsNext(prev => !prev)

    setStepNumber(newHistory.length)
  }

  const moves = history.map((step, move) => {
    // move는 index여서 0부터 시작하는데, 0은 false이기 때문에 'Go to move start'가 출력된다
    const desc = move? 'Go to move #' + move : 'Go to game start'
    return (
      <li key={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  const jumpTo = (step) => {
    setStepNumber(step)
    setxIsNext((step % 2) === 0)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div className='status'>{ status }</div>
        <ol style={{ listStyle: 'none'}}>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
