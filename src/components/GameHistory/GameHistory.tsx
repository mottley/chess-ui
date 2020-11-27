import React, { FunctionComponent } from 'react';
import { GameHistoryProps } from './GameHistory.types';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';


export const GameHistory: FunctionComponent<GameHistoryProps> = props => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Result</TableCell>
            <TableCell>White</TableCell>
            <TableCell>Black</TableCell>
            <TableCell>Winner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.games.map(g =>
            <TableRow>
              <TableCell>{g.gameId}</TableCell>
              <TableCell>{g.result}</TableCell>
              <TableCell>{g.players.white}</TableCell>
              <TableCell>{g.players.black}</TableCell>
              <TableCell>{g.winner}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}