import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const GameStatus = ({ result, nextPlayer }) => {
  if (result) {
    return (
      <div className='App'>
      <Paper elevation={5}>
      <Typography>{result}</Typography>
        
      </Paper>
      </div>
    )
  } else {
    return (
      <div className='App'>
      <Paper elevation={5} square={true}>
      <Typography>Next player: {nextPlayer}</Typography>  
      </Paper>
      </div>
    )
  }
};

export default GameStatus;