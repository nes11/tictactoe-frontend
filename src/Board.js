import React from 'react';
import Square from './Square';
import axios from 'axios';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      player: 'X'
    };
  }
  
  handleClick (id, newValue) {
    if (this.state.board[id] === null) {
      const newBoard = this.state.board.map((el, i) => i === id ? newValue : el)
      console.log(newBoard)
      this.setState({ board: newBoard, player: this.state.player === 'X' ? 'O' : 'X' })
    } 
  }

  render() {
    return (
      <div>
        <div className="board-row">
          <Square value={this.state.board[0]} onClick={() => this.handleClick(0, this.state.player)}/>
          <Square value={this.state.board[1]} onClick={() => this.handleClick(1, this.state.player)}/>
          <Square value={this.state.board[2]} onClick={() => this.handleClick(2, this.state.player)}/>
        </div>
        <div className="board-row">
          <Square value={this.state.board[3]} onClick={() => this.handleClick(3, this.state.player)}/>
          <Square value={this.state.board[4]} onClick={() => this.handleClick(4, this.state.player)}/>
          <Square value={this.state.board[5]} onClick={() => this.handleClick(5, this.state.player)}/>
        </div>
        <div className="board-row">
          <Square value={this.state.board[6]} onClick={() => this.handleClick(6, this.state.player)}/>
          <Square value={this.state.board[7]} onClick={() => this.handleClick(7, this.state.player)}/>
          <Square value={this.state.board[8]} onClick={() => this.handleClick(8, this.state.player)}/>
        </div>
      </div>
    );
  }
}


export default Board;