import React from 'react';

const Square = ({ onClick, value }) => (
  <button onClick={() => onClick()}>
    {value}
  </button>
);

export default Square;