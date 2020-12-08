import produce from 'immer';
import { GameHistoryVO } from '../../models/GameHistoryVO';
import { PlayerRecordVO } from '../../models/PlayerRecordVO';
import { HistoryAction, ActionName, GetHistorySuccessAction, GetLeaderboardSuccessAction } from '../actions/HistoryAction';


export interface IHistoryState {
  completedGames?: GameHistoryVO[]
  playerRecords?: PlayerRecordVO[]
}

const initialHistoryState: IHistoryState = {
}

export const historyReducer = (state: IHistoryState = initialHistoryState, action: HistoryAction) => {
  return produce(state, next => {
    switch (action.type) {
      case (ActionName.GetHistorySuccess): {
        const historyAction = action as GetHistorySuccessAction
        next.completedGames = historyAction.payload.games
        break;
      }
      case (ActionName.GetLeaderboardSuccess): {
        const leaderboardAction = action as GetLeaderboardSuccessAction
        next.playerRecords = leaderboardAction.payload.records
      }
    }
  })
}