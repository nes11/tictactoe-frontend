import React from 'react';
//import axios from 'axios';
import Square from './Square';


const Board = ({ board, handleClick }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     board: [null, null, null, null, null, null, null, null, null],
  //     player: 'X'
  //   };
  // }
 
  // handleClick (clickedSquareId, player) {
  //   if (this.state.board[clickedSquareId] === null) {
  //     const currentBoard = this.state.board;
  //     axios.post('http://localhost:4000/api', { currentBoard, clickedSquareId, player })
  //     .then(res => {
  //       if (res.data.result) {
  //         this.setState({ board: res.data.newBoard, result: res.data.result })
  //       } else {
  //         this.setState({ board: res.data.newBoard, player: res.data.nextPlayer })
  //       } 
  //     })
  //     .catch(err => console.error(err))
  //   }
  // }

    return (
      <div>
        <div className="board-row">
          <Square value={board[0]} onClick={() => handleClick(0)}/>
          <Square value={board[1]} onClick={() => handleClick(1)}/>
          <Square value={board[2]} onClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={board[3]} onClick={() => handleClick(3)}/>
          <Square value={board[4]} onClick={() => handleClick(4)}/>
          <Square value={board[5]} onClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={board[6]} onClick={() => handleClick(6)}/>
          <Square value={board[7]} onClick={() => handleClick(7)}/>
          <Square value={board[8]} onClick={() => handleClick(8)}/>
        </div>
      </div>
    );
}


export default Board;