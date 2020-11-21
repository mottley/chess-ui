import React, { FunctionComponent } from 'react';
import { RoomListProps } from './RoomList.types';
import { Typography, Card, CardContent, makeStyles, Button } from '@material-ui/core';



export const RoomList: FunctionComponent<RoomListProps> = props => {

  // console.log(props.rooms[0].players)

  return (
    <div>
      {props.rooms.map(r =>
        <Card
          key={r.name}
          onClick={() => props.onRoomSelected(r.name)}
        >
          <CardContent>
            <Typography>{r.name}</Typography>
            {r.players.map(p => <Typography key={p.username}>{p.username}</Typography>)}
            <Typography>{`Players: ${r.players.length}/2`}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  )
}