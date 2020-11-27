import { GameHistoryVO } from '../../models/GameHistoryVO';
import { Action } from 'redux';


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


export type HistoryAction = GetHistoryAction
  | GetHistorySuccessAction