import React from 'react';
import axios from 'axios';

import Board from './Board';
import GameStatus from './GameStatus';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      player: 'X'
    };
  }

  handleClick(clickedSquareId, player) {
    const currentBoard = this.state.board;
    axios.post('http://localhost:4000/api', { currentBoard, clickedSquareId, player })
      .then(res => {
        if (res.data.result) {
          this.setState({ board: res.data.newBoard, result: res.data.result })
        } else if (res.data.nextPlayer) {
          this.setState({ board: res.data.newBoard, player: res.data.nextPlayer })
        } else {
          this.setState({ currentBoard, player })
        }
      })
      .catch(err => console.error(err))
  }



  render() {
    return (
      <div>
        <Board board={this.state.board} handleClick={(id) => this.handleClick(id, this.state.player)} />
        <GameStatus result={this.state.result} nextPlayer={this.state.player}/>
      </div>
    );
  }
};

export default Game;