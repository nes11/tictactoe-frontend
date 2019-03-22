import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

const GameHistory = ({ movesIdsArray, handleClick }) => {
  return (
    <div>
    <Table>
      <TableBody>
        {movesIdsArray.map(moveId => 
          <TableRow key={moveId}>
            <TableCell>
              <Button onClick={() => handleClick(moveId)}>Go to move {moveId}</Button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
  )
}
 


export default GameHistory;
