import React from 'react';
import axios from 'axios';

import Board from './Board';
import GameStatus from './GameStatus';
import AlertDialog from './Alert';
import GameHistory from './GameHistory';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.startingBoard,
      nextPlayer: this.props.startingPlayer,
      movesIds: [],
      open: false,
      gameId: this.props.gameId
    };
  }

  handleMove(clickedSquareId, player) {
    const currentBoard = this.state.board;
    const gameId = this.state.gameId;
    axios.post(`http://localhost:4000/api/game/${gameId}/move`, { currentBoard, clickedSquareId, player })
      .then(({ data }) => {
        this.setState(
          data.result
            ? { board: data.newBoard, result: data.result }
            : {
              board: data.newBoard,
              nextPlayer: data.nextPlayer,
              movesIds: this.state.movesIds.concat(data.moveId)
              }
        )
      })
      .catch(() => this.setState({ open: true }))
  };

  render() {
    return (
      <div>
        <Board
          board={this.state.board}
          handleSquareClick={(id) => this.handleMove(id, this.state.nextPlayer)} />
        <GameStatus result={this.state.result} nextPlayer={this.state.nextPlayer} />
        <GameHistory
          gameId={this.state.gameId}
          movesIdsArray={this.state.movesIds}
          setNewBoard={({ board, nextPlayer }) => this.setState({ board, nextPlayer })}
        />
        <AlertDialog open={this.state.open} setState={() => this.setState({ open: false })} />
      </div>
    );
  };
};

export default Game;