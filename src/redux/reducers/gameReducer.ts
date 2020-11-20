import produce from 'immer';
import { GameVO } from '../../models/GameVO';
import { GameAction, ActionName, GetGameSuccessAction, MoveSuccessAction } from '../actions/GameAction';


export interface IGameState {
  game?: GameVO
}

const initialGameState: IGameState = {
  game: undefined
}

export const gameReducer = (state: IGameState = initialGameState, action: GameAction) => {
  return produce(state, next => {
    switch (action.type) {
      case (ActionName.GetGameSuccess): {
        const gameAction = action as GetGameSuccessAction;
        next.game = gameAction.payload.game
        break;
      }
      case (ActionName.MoveSuccess): {
        const moveAction = action as MoveSuccessAction;
        next.game = moveAction.payload.game
        break;
      }
    }
  })
}