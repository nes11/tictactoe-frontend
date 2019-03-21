import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const GameHistory = ({ movesIdsArray }) => {
  return (
    <div>
      <Table>
        <TableBody>
          {movesIdsArray.map(moveId => 
            <TableRow key={moveId}>
              <TableCell>Go to move {moveId}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default GameHistory;