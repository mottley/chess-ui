import { RoomVO } from "../../models/RoomVO";



export interface IRoomListInput {
  rooms: RoomVO[]
}

export interface IRoomListEvent {
  onRoomSelected: (room: string) => void;
}

export type RoomListProps = IRoomListInput & IRoomListEvent