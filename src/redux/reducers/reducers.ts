import { Reducer, combineReducers } from 'redux';
import { authenticationReducer, IAuthenticationState } from './authenticationReducer';
import { AuthenticationAction } from '../actions/AuthenticationAction';
import { gameReducer, IGameState } from './gameReducer';
import { GameAction } from '../actions/GameAction';


export interface IState {
  auth: IAuthenticationState,
  game: IGameState
}

export type RootAction = AuthenticationAction | GameAction

export const chessReducers: Reducer<IState, RootAction> = combineReducers({
  auth: authenticationReducer,
  game: gameReducer
})