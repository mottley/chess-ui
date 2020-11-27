import produce from 'immer';
import { GameHistoryVO } from '../../models/GameHistoryVO';
import { HistoryAction, ActionName, GetHistorySuccessAction } from '../actions/HistoryAction';


export interface IHistoryState {
  completedGames?: GameHistoryVO[]
}

const initialHistoryState: IHistoryState = {
}

export const historyReducer = (state: IHistoryState = initialHistoryState, action: HistoryAction) => {
  return produce(state, next => {
    switch (action.type) {
      case (ActionName.GetHistorySuccess): {
        const historyAction = action as GetHistorySuccessAction
        next.completedGames = historyAction.payload.games
      }
    }
  })
}