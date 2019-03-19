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
    }
  }

  componentDidMount() {
    axios.post('http://localhost:4000/api/new-game')
      .then(res => this.setState({ 
        startingBoard: res.data.board, 
        startingPlayer: res.data.player, 
      }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          TicTacToe
        </header>
        <body className="App-body">
          {this.state.startingBoard 
            ? <Game startingBoard={this.state.startingBoard} startingPlayer={this.state.startingPlayer}/> 
            : null}
        </body>
      </div>
    );
  }
}

export default App;
