import { Action } from 'redux';
import { PlayerVO } from '../../models/PlayerVO';

export enum ActionName {
  Login = '@Auth/login',
  LoginSuccess = '@Auth/login/success',
  LoginError = '@Auth/login/error',

  Logout = '@Auth/logout'
}

export interface ILoginPayload {
  username: string
  password: string
}

export class LoginAction implements Action<ActionName> {
  type = ActionName.Login
  constructor(public payload: ILoginPayload) { }
}

export interface ILoginSuccessPayload {
  player: PlayerVO
}

export class LoginSuccessAction implements Action<ActionName> {
  type = ActionName.LoginSuccess
  constructor(public payload: ILoginSuccessPayload) { }
}

export type AuthenticationAction = LoginAction
  | LoginSuccessAction
