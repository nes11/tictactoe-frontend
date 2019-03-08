import React, { Component } from 'react';
import Board from './Board'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            TicTacToe
          </p>
          <Board />
        </header>
      </div>
    );
  }
}

export default App;
