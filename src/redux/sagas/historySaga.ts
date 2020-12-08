import { takeEvery, call, put } from 'redux-saga/effects';
import * as HistoryAction from '../actions/HistoryAction';
import { HistoryService } from '../../services/HistoryService';
import { GameHistoryDto } from '../../models/dto/GameHistoryDto';
import { GameHistoryVO } from '../../models/GameHistoryVO';
import { dtoToHistoryVO, dtoToRecordVO } from '../../models/converter';
import { PlayerRecordDto } from '../../models/dto/PlayerRecordDto';
import { PlayerRecordVO } from '../../models/PlayerRecordVO';

const historyService = new HistoryService();

export function* getHistory(action: HistoryAction.GetHistoryAction) {
  const dtos: GameHistoryDto[] = yield call(historyService.getGameHistory.bind(historyService))

  const vos: GameHistoryVO[] = dtos.map(d => dtoToHistoryVO(d))

  yield put(new HistoryAction.GetHistorySuccessAction({ games: vos }))
}

export function* getLeaderboard(action: HistoryAction.GetLeaderboardAction) {
  const dtos: PlayerRecordDto[] = yield call(historyService.getLeaderbaord.bind(historyService))

  const vos: PlayerRecordVO[] = dtos.map(r => dtoToRecordVO(r))

  yield put(new HistoryAction.GetLeaderboardSuccessAction({ records: vos }))
}

export const sagas = [
  takeEvery(HistoryAction.ActionName.GetHistory, getHistory),
  takeEvery(HistoryAction.ActionName.GetLeaderboard, getLeaderboard)
]