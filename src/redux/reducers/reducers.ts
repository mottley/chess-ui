import { Reducer, combineReducers } from 'redux';
import { authenticationReducer, IAuthenticationState } from './authenticationReducer';
import { AuthenticationAction } from '../actions/AuthenticationAction';
import { gameReducer, IGameState } from './gameReducer';
import { GameAction } from '../actions/GameAction';
import { roomReducer, IRoomState } from './roomReducer';
import { RoomAction } from '../actions/RoomAction';


export interface IState {
  auth: IAuthenticationState,
  game: IGameState,
  room: IRoomState
}

export type RootAction = AuthenticationAction | GameAction | RoomAction

export const chessReducers: Reducer<IState, RootAction> = combineReducers({
  auth: authenticationReducer,
  game: gameReducer,
  room: roomReducer
})