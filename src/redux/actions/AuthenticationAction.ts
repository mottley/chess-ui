import { Action } from 'redux';
import { PlayerVO } from '../../models/PlayerVO';

export enum ActionName {
  Login = '@Auth/login',
  LoginSuccess = '@Auth/login/success',
  LoginError = '@Auth/login/error',

  Logout = '@Auth/logout',
  LogoutSuccess = '@Auth/logout/success',
  LogoutError = '@Auth/logout/error',

  GetCsrf = '@Auth/csrf',
  GetCsrfSuccess = '@Auth/csrf/success',
  GetCsrfError = '@Auth/csrf/error',

  CheckAuthenticated = '@Auth/check',

  Register = '@Auth/register',
  RegisterSuccess = '@Auth/register/success',
  RegisterError = '@Auth/register/error'
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

export class GetCsrfAction implements Action<ActionName> {
  type = ActionName.GetCsrf
}

export class CheckAuthenticatedAction implements Action<ActionName> {
  type = ActionName.CheckAuthenticated
}

export class LogoutAction implements Action<ActionName> {
  type = ActionName.Logout
}

export interface IRegisterPayload {
  username: string
  password: string
}

export interface IRegisterSuccessPayload {
  player: PlayerVO
}

export class RegisterAction implements Action<ActionName> {
  type = ActionName.Register
  constructor(public payload: IRegisterPayload) { }
}

export class RegisterSuccessAction implements Action<ActionName> {
  type = ActionName.RegisterSuccess
  constructor(public payload: IRegisterSuccessPayload) { }
}


export type AuthenticationAction = LoginAction
  | LoginSuccessAction
  | GetCsrfAction
  | CheckAuthenticatedAction

  | RegisterAction
  | RegisterSuccessAction
