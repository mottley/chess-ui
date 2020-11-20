import * as GameAction from '../actions/GameAction';
import { takeEvery, call, put, select, delay, take, race, fork } from 'redux-saga/effects';
import { GameService } from '../../services/GameService';
import { GameDto } from '../../models/dto/GameDto';
import { GameVO } from '../../models/GameVO';
import { dtoToGameVO } from '../../models/converter';
import { IApplicationStore } from '../store/store.types';

const gameService = new GameService();

export function* move(action: GameAction.MoveAction) {
  const game: GameVO = yield select((store: IApplicationStore) => store.chess.game.game)

  const dto: GameDto = yield call(gameService.move.bind(gameService),
    game.gameId,
    action.payload.move
  )

  const vo: GameVO = dtoToGameVO(dto)

  yield put(new GameAction.MoveSuccessAction({ game: vo }))
}

export function* getGame(action: GameAction.GetGameAction) {
  const dto: GameDto = yield call(gameService.getGame.bind(gameService),
    action.payload.gameId
  )

  const vo: GameVO = dtoToGameVO(dto)

  yield put(new GameAction.GetGameSuccessAction({ game: vo }))
  yield put(new GameAction.PollGameStartAction({}))
}

export function* pollGame() {
  const game: GameVO = yield select((store: IApplicationStore) => store.chess.game.game)

  while (true) {
    try {
      const dto: GameDto = yield call(gameService.getGame.bind(gameService),
        game.gameId
      )
      const vo: GameVO = dtoToGameVO(dto)

      yield put(new GameAction.GetGameSuccessAction({ game: vo }))
      yield delay(2000);
    } catch (err) {
      yield put(new GameAction.PollGameStopAction({}))
    }
  }
}

export function* pollTaskWatcher() {
  while (true) {
    yield take(GameAction.ActionName.PollGameStart)
    yield race([call(pollGame), take(GameAction.ActionName.PollGameStop)])
  }
}

export const sagas = [
  takeEvery(GameAction.ActionName.Move, move),
  takeEvery(GameAction.ActionName.GetGame, getGame),
  fork(pollTaskWatcher),
]