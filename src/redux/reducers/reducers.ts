import { Reducer, combineReducers } from 'redux';
import { authenticationReducer, IAuthenticationState } from './authenticationReducer';
import { AuthenticationAction } from '../actions/AuthenticationAction';
import { gameReducer, IGameState } from './gameReducer';
import { GameAction } from '../actions/GameAction';
import { roomReducer, IRoomState } from './roomReducer';
import { RoomAction } from '../actions/RoomAction';
import { historyReducer, IHistoryState } from './historyReducer';
import { HistoryAction } from '../actions/HistoryAction';


export interface IState {
  auth: IAuthenticationState,
  game: IGameState,
  room: IRoomState,
  history: IHistoryState
}

export type RootAction = AuthenticationAction | GameAction | RoomAction | HistoryAction

export const chessReducers: Reducer<IState, RootAction> = combineReducers({
  auth: authenticationReducer,
  game: gameReducer,
  room: roomReducer,
  history: historyReducer
})