import * as AuthenticationAction from '../actions/AuthenticationAction';
import { takeEvery, call, put } from 'redux-saga/effects';
import { AuthenticationService } from '../../services/AuthenticationService';
import { actions as RouterAction } from 'redux-router5';
import { RouteNames } from '../../routes/routes';
import { PlayerDto } from '../../models/dto/PlayerDto';
import { PlayerVO } from '../../models/PlayerVO';
import { dtoToPlayerVO } from '../../models/converter';
import * as HistoryAction from '../actions/HistoryAction';
import { CsrfDto } from '../../models/dto/CsrfDto';
import axios from 'axios';

const authenticationService = new AuthenticationService();

export function* login(action: AuthenticationAction.LoginAction) {
  const dto: PlayerDto = yield call(authenticationService.login.bind(authenticationService),
    action.payload.username,
    action.payload.password
  );

  const vo: PlayerVO = dtoToPlayerVO(dto)

  yield put(new AuthenticationAction.LoginSuccessAction({ player: vo }))

  yield put(RouterAction.navigateTo(RouteNames.Lobby))

  yield put(new HistoryAction.GetHistoryAction({}))
}

export function* getCsrfToken(action: AuthenticationAction.GetCsrfAction) {
  const dto: CsrfDto = yield call(authenticationService.getCsrfToken.bind(authenticationService))

  axios.interceptors.request.use(config => {
    config.headers['CSRF-TOKEN'] = dto.token
    return config
  })
}

export function* checkAuthenticated(action: AuthenticationAction.CheckAuthenticatedAction) {
  try {
    const dto: PlayerDto = yield call(authenticationService.getPlayer.bind(authenticationService))

    const vo: PlayerVO = dtoToPlayerVO(dto)

    yield put(new AuthenticationAction.LoginSuccessAction({ player: vo }))

  } catch (err) {
    yield put(RouterAction.navigateTo(RouteNames.Login))
  }
}

export function* logout(action: AuthenticationAction.LogoutAction) {
  yield call(authenticationService.logout.bind(authenticationService))

  yield put(RouterAction.navigateTo(RouteNames.Login))
}

export const sagas = [
  takeEvery(AuthenticationAction.ActionName.Login, login),
  takeEvery(AuthenticationAction.ActionName.Logout, logout),
  takeEvery(AuthenticationAction.ActionName.GetCsrf, getCsrfToken),
  takeEvery(AuthenticationAction.ActionName.CheckAuthenticated, checkAuthenticated)
]