import React, { Component } from 'react';
import Game from './Game';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          TicTacToe
        </header>
        <body className="App-body">
          <Game />
        </body>
      </div>
    );
  }
}

export default App;
