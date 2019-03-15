import React from 'react';

const Square = ({ onClick, value }) => (
  <button onClick={() => onClick()} style={{ height: '100%', fontSize: '40px'}}>
    {value}
  </button>
);

export default Square;