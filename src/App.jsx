import React, { Component } from 'react';
import Game from './Game';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingBoard: null,
      startingPlayer: null,
      gameId: null
    }
  }

  componentDidMount() {
    axios.post('http://localhost:4000/api/game/new')
      .then(res => this.setState({  
        startingBoard: res.data.board,
        startingPlayer: res.data.player,
        gameId: res.data.gameId
      })
    ).catch(error => this.setState({ serverErrorMessage: error.message }))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          TicTacToe
        </header>
        <div className="App-body">
          {this.state.startingBoard
            ? <Game
              gameId={this.state.gameId}
              startingBoard={this.state.startingBoard}
              startingPlayer={this.state.startingPlayer}
            />
            : this.state.serverErrorMessage}
        </div>
      </div>
    );
  }
}

export default App;
