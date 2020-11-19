import { Reducer, combineReducers } from 'redux';
import { authenticationReducer, IAuthenticationState } from './authenticationReducer';


export interface IState {
  auth: IAuthenticationState
}

export const chessReducers: Reducer<IState> = combineReducers({
  auth: authenticationReducer
})