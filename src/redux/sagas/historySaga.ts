import { takeEvery, call, put } from 'redux-saga/effects';
import * as HistoryAction from '../actions/HistoryAction';
import { HistoryService } from '../../services/HistoryService';
import { GameHistoryDto } from '../../models/dto/GameHistoryDto';
import { GameHistoryVO } from '../../models/GameHistoryVO';
import { dtoToHistoryVO } from '../../models/converter';

const historyService = new HistoryService();

export function* getHistory(action: HistoryAction.GetHistoryAction) {
  const dtos: GameHistoryDto[] = yield call(historyService.getGameHistory.bind(historyService))

  const vos: GameHistoryVO[] = dtos.map(d => dtoToHistoryVO(d))

  yield put(new HistoryAction.GetHistorySuccessAction({ games: vos }))
}

export const sagas = [
  takeEvery(HistoryAction.ActionName.GetHistory, getHistory)
]