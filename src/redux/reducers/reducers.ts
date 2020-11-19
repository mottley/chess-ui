import { Reducer, combineReducers } from 'redux';
import { authenticationReducer, IAuthenticationState } from './authenticationReducer';
import { AuthenticationAction } from '../actions/AuthenticationAction';


export interface IState {
  auth: IAuthenticationState
}

export type RootAction = AuthenticationAction

export const chessReducers: Reducer<IState, RootAction> = combineReducers({
  auth: authenticationReducer
})