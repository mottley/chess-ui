import { RoomVO } from '../../models/RoomVO';
import { RoomAction, GetRoomsSuccess, ActionName, SetActiveRoom } from '../actions/RoomAction';
import produce from 'immer';


export interface IRoomState {
  availableRooms?: RoomVO[]
  activeRoom?: RoomVO
}

const initialRoomState: IRoomState = {
}

export const roomReducer = (state: IRoomState = initialRoomState, action: RoomAction) => {
  return produce(state, next => {
    switch (action.type) {
      case (ActionName.GetRoomsSuccess): {
        const roomAction = action as GetRoomsSuccess
        next.availableRooms = roomAction.payload.rooms
        break;
      }
      case (ActionName.SetActiveRoom): {
        const roomAction = action as SetActiveRoom
        next.activeRoom = roomAction.payload.room
        break;
      }
    }
  })
}