import * as AuthenticationAction from '../actions/AuthenticationAction';
import { takeEvery, call, put } from 'redux-saga/effects';
import { AuthenticationService } from '../../services/AuthenticationService';
import { actions as RouterAction } from 'redux-router5';
import { RouteNames } from '../../routes/routes';
import { GetGameAction } from '../actions/GameAction';
import { PlayerDto } from '../../models/dto/PlayerDto';
import { PlayerVO } from '../../models/PlayerVO';
import { dtoToPlayerVO } from '../../models/converter';

const authenticationService = new AuthenticationService();

export function* login(action: AuthenticationAction.LoginAction) {
  const dto: PlayerDto = yield call(authenticationService.login.bind(authenticationService),
    action.payload.username,
    action.payload.password
  );

  const vo: PlayerVO = dtoToPlayerVO(dto)

  yield put(new AuthenticationAction.LoginSuccessAction({ player: vo }))

  // TODO - remove/implement rooms?
  // yield put(new GetGameAction({ gameId: 'c59fea60-12a8-4a4f-a324-0899489e6bfd' }))
  yield put(RouterAction.navigateTo(RouteNames.Lobby))
}

export const sagas = [
  takeEvery(AuthenticationAction.ActionName.Login, login)
]