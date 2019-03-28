import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './App.css';


const GameStatus = ({ result, nextPlayer }) => {
  if (result) {
    return (
      <div className='GameStatus'>
      <Paper elevation={5}>
      <Typography style={{ fontSize: '40px', color: '#cc0000' }}>{result}</Typography>
      </Paper>
      </div>
    )
  } else {
    return (
      <div className='GameStatus'>
      <Paper elevation={5}>
      <Typography style={{ fontSize: '30px' }}>Next player: {nextPlayer}</Typography>  
      </Paper>
      </div>
    )
  }
};

export default GameStatus;