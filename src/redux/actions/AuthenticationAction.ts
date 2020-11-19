import { Action } from 'redux';


export enum ActionName {
  Login = '@Auth/login',
  Logout = '@Auth/logout'
}

export interface ILoginPayload {
  username: string
  password: string
}

export class LoginAction implements Action<ActionName> {
  type = ActionName.Login
  constructor(public payload: ILoginPayload) {
  }
}

export type AuthenticationAction = LoginAction
