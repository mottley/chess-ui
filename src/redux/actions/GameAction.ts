import { Action } from 'redux';
import { GameVO } from '../../models/GameVO';

export enum ActionName {
  Move = '@Game/move',
  MoveSuccess = '@Game/move/success',
  MoveError = '@Game/move/error',

  GetGame = '@Game/get',
  GetGameSuccess = '@Game/get/success',
  GetGameError = '@Game/get/error'
}

export interface IMovePayload {
  move: string
}

export interface IGamePayload {
  game: GameVO
}


export class MoveAction implements Action<ActionName> {
  type = ActionName.Move
  constructor(public payload: IMovePayload) { }
}

export class MoveSuccessAction implements Action<ActionName> {
  type = ActionName.MoveSuccess
  constructor(public payload: IGamePayload) { }
}

export interface IGetGamePayload {
  gameId: string
}

export class GetGameAction implements Action<ActionName> {
  type = ActionName.GetGame
  constructor(public payload: IGetGamePayload) { }
}

export class GetGameSuccessAction implements Action<ActionName> {
  type = ActionName.GetGameSuccess
  constructor(public payload: IGamePayload) { }
}

export type GameAction = MoveAction
  | MoveSuccessAction

  | GetGameAction
  | GetGameSuccessAction