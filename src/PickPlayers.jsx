import React from 'react';
import TextField from '@material-ui/core/TextField';

const PickPlayers = () => {
  return (
    <div className='PickPlayers'>
      <TextField
        label="Player X"
      />
      <TextField
        label="Player O"
      />
    </div>
  )
};

export default PickPlayers