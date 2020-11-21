import { Action } from 'redux';
import { RoomVO } from '../../models/RoomVO';


export enum ActionName {
  CreateRoom = '@Room/create',
  CreateRoomSuccess = '@Room/create/success',
  CreateRoomError = '@Room/create/error',

  JoinRoom = '@Room/join',
  JoinRoomSuccess = '@Room/join/success',
  JoinRoomError = '@Room/join/error',

  GetRooms = '@Room/get',
  GetRoomsSuccess = '@Room/get/success',
  GetRoomsError = '@Room/get/error',

  SetActiveRoom = '@Room/active/set',

  PollRoomStart = '@Room/poll/start',
  PollRoomStop = '@Room/poll/stop'
}

export interface IRoomPayload {
  roomName: string
}

export interface ICreateRoomSuccessPayload { }

export interface IJoinRoomSuccessPayload { }

export interface IGetRoomsSuccessPayload {
  rooms: RoomVO[]
}

export interface ISetActiveRoomPayload {
  room: RoomVO
}

export interface IPollRoomPayload { }

export class CreateRoom implements Action<ActionName> {
  type = ActionName.CreateRoom
  constructor(public payload: IRoomPayload) { }
}

export class CreateRoomSuccess implements Action<ActionName> {
  type = ActionName.CreateRoomSuccess
  constructor(public payload: ICreateRoomSuccessPayload) { }
}

export class CreateRoomError implements Action<ActionName> {
  type = ActionName.CreateRoomError
}

export class JoinRoom implements Action<ActionName> {
  type = ActionName.JoinRoom
  constructor(public payload: IRoomPayload) { }
}

export class JoinRoomSuccess implements Action<ActionName> {
  type = ActionName.JoinRoomSuccess
}

export class JoinRoomError implements Action<ActionName> {
  type = ActionName.JoinRoomError
}

export class GetRoomsSuccess implements Action<ActionName> {
  type = ActionName.GetRoomsSuccess
  constructor(public payload: IGetRoomsSuccessPayload) { }
}

export class SetActiveRoom implements Action<ActionName> {
  type = ActionName.SetActiveRoom
  constructor(public payload: ISetActiveRoomPayload) { }
}

export class PollRoomStart implements Action<ActionName> {
  type = ActionName.PollRoomStart
  constructor(public payload: IPollRoomPayload) { }
}

export class PollRoomStop implements Action<ActionName> {
  type = ActionName.PollRoomStop
  constructor(public payload: IPollRoomPayload) { }
}

export type RoomAction = CreateRoom
  | CreateRoomSuccess
  | CreateRoomError

  | JoinRoom
  | JoinRoomSuccess
  | JoinRoomError

  | GetRoomsSuccess

  | PollRoomStart
  | PollRoomStop