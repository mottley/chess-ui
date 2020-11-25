import React, { FunctionComponent } from 'react';
import { TextField, Box, Button, Grid } from '@material-ui/core';
import { RoomInputProps } from './RoomInput.types';

export const RoomInput: FunctionComponent<RoomInputProps> = props => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id='room-name'
            variant='outlined'
            fullWidth
            value={props.roomName}
            onChange={event => props.onRoomNameChange(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant='outlined'
            onClick={() => props.onCreateRoom()}
          >
            Create Room
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant='outlined'
            onClick={() => props.onJoinRoom()}
          >
            Join Room
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}