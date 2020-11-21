import React, { FunctionComponent, useState, useEffect } from 'react';
import { LobbyProps } from './Lobby.types';
import { Typography, makeStyles, Button } from '@material-ui/core';
import { RoomList } from '../../components/RoomList/RoomList';
import { useDispatch, useSelector } from 'react-redux';
import { RoomVO } from '../../models/RoomVO';
import { IApplicationStore } from '../../redux/store/store.types';
import { PollRoomStart, JoinRoom } from '../../redux/actions/RoomAction';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export const Lobby: FunctionComponent<LobbyProps> = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const availableRooms = useSelector<IApplicationStore, RoomVO[] | undefined>(store => store.chess.room.availableRooms)

  const [selectedRoom, setSelectedRoom] = useState<string>('');

  const onJoinGame = () => {
    dispatch(new JoinRoom({ roomName: selectedRoom }))
  }

  useEffect(() => {
    dispatch(new PollRoomStart({}))
  }, [])

  return (
    <React.Fragment>
      <Typography variant='h4'>Available Rooms</Typography>
      {availableRooms &&
        <RoomList
          rooms={availableRooms}
          onRoomSelected={room => setSelectedRoom(room)}
        />
      }

      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
        onClick={() => onJoinGame()}
      >
        Join Game
      </Button>
    </React.Fragment>
  )
}