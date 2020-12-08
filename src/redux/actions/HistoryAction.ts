import { GameHistoryVO } from '../../models/GameHistoryVO';
import { Action } from 'redux';
import { PlayerRecordVO } from '../../models/PlayerRecordVO';


export enum ActionName {
  GetHistory = '@History/get',
  GetHistorySuccess = '@History/get/success',
  GetHistoryError = '@History/get/error',

  GetLeaderboard = '@Leaderboard/get',
  GetLeaderboardSuccess = '@Leaderboard/get/success',
  GetLeaderboardError = '@Leaderboard/get/error'
}

export interface IHistoryPayload { }

export interface IHistorySuccessPayload {
  games: GameHistoryVO[]
}

export class GetHistoryAction implements Action<ActionName> {
  type = ActionName.GetHistory
  constructor(public payload: IHistoryPayload) { }
}

export class GetHistorySuccessAction implements Action<ActionName> {
  type = ActionName.GetHistorySuccess
  constructor(public payload: IHistorySuccessPayload) { }
}

export interface ILeaderboardPayload { }

export interface ILeaderboardSuccessPayload {
  records: PlayerRecordVO[]
}

export class GetLeaderboardAction implements Action<ActionName> {
  type = ActionName.GetLeaderboard
  constructor(public payload: ILeaderboardPayload) { }
}

export class GetLeaderboardSuccessAction implements Action<ActionName> {
  type = ActionName.GetLeaderboardSuccess
  constructor(public payload: ILeaderboardSuccessPayload) { }
}


export type HistoryAction = GetHistoryAction
  | GetHistorySuccessAction

  | GetLeaderboardAction
  | GetLeaderboardSuccessAction