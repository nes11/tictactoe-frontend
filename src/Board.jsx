import React from 'react';
import Square from './Square';
import './App.css';

const Board = ({ board, handleSquareClick }) => {
  return (
    <div className="Board">
      <div className='row'>
        <div className='column'>
          <Square value={board[0]} onClick={() => handleSquareClick(0)} />
        </div>
        <div className='column'>
          <Square value={board[1]} onClick={() => handleSquareClick(1)} />
        </div>
        <div className='column'>
          <Square value={board[2]} onClick={() => handleSquareClick(2)} />
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <Square value={board[3]} onClick={() => handleSquareClick(3)} />
        </div>
        <div className='column'>
          <Square value={board[4]} onClick={() => handleSquareClick(4)} />
        </div>
        <div className='column'>
          <Square value={board[5]} onClick={() => handleSquareClick(5)} />
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <Square value={board[6]} onClick={() => handleSquareClick(6)} />
        </div>
        <div className='column'>
          <Square value={board[7]} onClick={() => handleSquareClick(7)} />
        </div>
        <div className='column'>
          <Square value={board[8]} onClick={() => handleSquareClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default Board;