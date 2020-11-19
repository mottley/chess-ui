import * as AuthenticationAction from '../actions/AuthenticationAction';
import { takeEvery } from 'redux-saga/effects';


export function* login(action: AuthenticationAction.LoginAction) {
  console.log('logging in')
}

export const sagas = [
  takeEvery(AuthenticationAction.ActionName.Login, login)
]