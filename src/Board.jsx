import React from 'react';
import Square from './Square';
import './App.css';


const Board = ({ board, handleClick }) => {
  return (
    <div className="Board">
      <div className='row'>
        <div className='column'>
          <Square value={board[0]} onClick={() => handleClick(0)} />
        </div>
        <div className='column'>
          <Square value={board[1]} onClick={() => handleClick(1)} />
        </div>
        <div className='column'>
          <Square value={board[2]} onClick={() => handleClick(2)} />
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <Square value={board[3]} onClick={() => handleClick(3)} />
        </div>
        <div className='column'>
          <Square value={board[4]} onClick={() => handleClick(4)} />
        </div>
        <div className='column'>
          <Square value={board[5]} onClick={() => handleClick(5)} />
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <Square value={board[6]} onClick={() => handleClick(6)} />
        </div>
        <div className='column'>
          <Square value={board[7]} onClick={() => handleClick(7)} />
        </div>
        <div className='column'>
          <Square value={board[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default Board;