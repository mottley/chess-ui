import * as AuthenticationAction from '../actions/AuthenticationAction';
import { takeEvery, call } from 'redux-saga/effects';
import { AuthenticationService } from '../../services/AuthenticationService';

const authenticationService = new AuthenticationService();

export function* login(action: AuthenticationAction.LoginAction) {
  yield call(authenticationService.login.bind(authenticationService),
    action.payload.username,
    action.payload.password
  );
}

export const sagas = [
  takeEvery(AuthenticationAction.ActionName.Login, login)
]