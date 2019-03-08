import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: ['x', 'o', null, null, null, null, null, null, 'o']
    };
  }

  render() {
    return (
      <div>
        <div className="board-row">
          <Square value={this.state.board[0]}/>
          <Square value={this.state.board[1]}/>
          <Square value={this.state.board[2]}/>
        </div>
        <div className="board-row">
          <Square value={this.state.board[3]}/>
          <Square value={this.state.board[4]}/>
          <Square value={this.state.board[5]}/>
        </div>
        <div className="board-row">
          <Square value={this.state.board[6]}/>
          <Square value={this.state.board[7]}/>
          <Square value={this.state.board[8]}/>
        </div>
      </div>
    );
  }
}


export default Board;