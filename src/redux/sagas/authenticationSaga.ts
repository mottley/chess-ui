import * as AuthenticationAction from '../actions/AuthenticationAction';
import { takeEvery, call, put } from 'redux-saga/effects';
import { AuthenticationService } from '../../services/AuthenticationService';
import { GameService } from '../../services/GameService';
import { actions as RouterAction } from 'redux-router5';
import { RouteNames } from '../../routes/routes';

const authenticationService = new AuthenticationService();

const gameService = new GameService();

export function* login(action: AuthenticationAction.LoginAction) {
  yield call(authenticationService.login.bind(authenticationService),
    action.payload.username,
    action.payload.password
  );

  // yield call(gameService.move.bind(gameService),
  //   'c59fea60-12a8-4a4f-a324-0899489e6bfd',
  //   'e4'
  // )
  yield put(RouterAction.navigateTo(RouteNames.Game))
}

export const sagas = [
  takeEvery(AuthenticationAction.ActionName.Login, login)
]