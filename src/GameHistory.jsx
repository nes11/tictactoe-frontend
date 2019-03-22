import React from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

const fetchSavedMoveById = (moveId) => axios
  .get(`http://localhost:4000/api/game-history/${moveId}`)
  .then(res => ({ board: res.data.newBoard, nextPlayer: res.data.nextPlayer }))

const GameHistory = ({ movesIdsArray, setNewBoard }) => {
  return (
    <div>
      <Table>
        <TableBody>
          {movesIdsArray.map(moveId =>
            <TableRow key={moveId}>
              <TableCell>
                <Button
                  onClick={() => fetchSavedMoveById(moveId).then(move => setNewBoard(move))}
                >
                  Go to move {moveId}
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}



export default GameHistory;
