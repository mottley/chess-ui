import React, { FunctionComponent, useState, useEffect } from 'react';
import { LobbyProps } from './Lobby.types';
import { Typography, makeStyles, Button } from '@material-ui/core';
import { RoomList } from '../../components/RoomList/RoomList';
import { useDispatch, useSelector } from 'react-redux';
import { RoomVO } from '../../models/RoomVO';
import { IApplicationStore } from '../../redux/store/store.types';
import { PollRoomStart, JoinRoom, CreateRoom } from '../../redux/actions/RoomAction';
import { RoomInput } from '../../components/RoomInput/RoomInput';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export const Lobby: FunctionComponent<LobbyProps> = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const availableRooms = useSelector<IApplicationStore, RoomVO[] | undefined>(store => store.chess.room.availableRooms)

  const [roomName, setRoomName] = useState<string>('');

  const onJoinRoom = () => {
    dispatch(new JoinRoom({ roomName: roomName }))
  }

  const onCreateRoom = () => {
    dispatch(new CreateRoom({ roomName: roomName }))
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
          onRoomSelected={roomName => setRoomName(roomName)}
        />
      }
      <RoomInput
        roomName={roomName}
        onRoomNameChange={roomName => setRoomName(roomName)}
        onCreateRoom={onCreateRoom}
        onJoinRoom={onJoinRoom}
      />
    </React.Fragment>
  )
}