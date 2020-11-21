import { RoomService } from '../../services/RoomService';
import { RoomDto } from '../../models/dto/RoomDto';
import { takeEvery, call, put, select, delay, take, race, fork } from 'redux-saga/effects';
import { RoomVO } from '../../models/RoomVO';
import { dtoToRoomVO } from '../../models/converter';
import * as RoomAction from '../actions/RoomAction';
import { PlayerVO } from '../../models/PlayerVO';
import { IApplicationStore } from '../store/store.types';
import { GetGameAction } from '../actions/GameAction';
import { actions as RouterAction } from 'redux-router5';
import { RouteNames } from '../../routes/routes';

const roomService = new RoomService();

export function* pollRooms() {
  while (true) {
    try {
      const player: PlayerVO = yield select((store: IApplicationStore) => store.chess.auth.player!)
      const dtos: RoomDto[] = yield call(roomService.getRooms.bind(roomService))

      const vos: RoomVO[] = dtos.map(r => dtoToRoomVO(r))

      yield put(new RoomAction.GetRoomsSuccess({ rooms: vos }))

      // Determine if user is in a room with a game started
      const activeGameRoom = vos.find(r => r.gameId && r.players.find(p => p.username === player.username))
      if (activeGameRoom !== undefined) {
        yield put(new GetGameAction({ gameId: activeGameRoom.gameId! }))
        yield put(RouterAction.navigateTo(RouteNames.Game))
        yield put(new RoomAction.PollRoomStop({}))
      }

      yield delay(2000);
    } catch (err) {
      console.log(err)
      yield put(new RoomAction.PollRoomStop({}))
    }
  }
}

export function* pollTaskWatcher() {
  while (true) {
    yield take(RoomAction.ActionName.PollRoomStart)
    yield race([call(pollRooms), take(RoomAction.ActionName.PollRoomStop)])
  }
}

export const sagas = [
  fork(pollTaskWatcher)
]