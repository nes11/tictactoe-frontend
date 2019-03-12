import React from 'react';

const GameStatus = ({ result, nextPlayer }) => {
  if (result) {
    return (
      <div>
        {result}
      </div>
    )
  } else {
    return (
      <div>
        Next player: {nextPlayer}
      </div>
    )
  }
};

export default GameStatus;