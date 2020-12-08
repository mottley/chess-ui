import React, { FunctionComponent } from 'react';
import { LeaderboardTableProps } from './LeaderboardTable.types';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';


export const LeaderboardTable: FunctionComponent<LeaderboardTableProps> = props => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Win</TableCell>
            <TableCell>Draw</TableCell>
            <TableCell>Loss</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.playerRecords.map(r =>
            <TableRow>
              <TableCell>{r.rank}</TableCell>
              <TableCell>{r.username}</TableCell>
              <TableCell>{r.wins}</TableCell>
              <TableCell>{r.draws}</TableCell>
              <TableCell>{r.losses}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}