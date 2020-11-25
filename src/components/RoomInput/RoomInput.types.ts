

export interface IRoomInputInput {
  roomName: string
}

export interface IRoomInputEvent {
  onRoomNameChange: (roomName: string) => void;
  onJoinRoom: () => void;
  onCreateRoom: () => void;
}

export type RoomInputProps = IRoomInputInput & IRoomInputEvent