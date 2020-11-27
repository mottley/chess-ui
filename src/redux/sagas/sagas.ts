import { all } from 'redux-saga/effects';
import { sagas as authenticationSagas } from './authenticationSaga';
import { sagas as gameSagas } from './gameSaga';
import { sagas as roomSagas } from './roomSaga';
import { sagas as historySagas } from './historySaga';


export function* sagas() {
  yield all([...authenticationSagas, ...gameSagas, ...roomSagas, ...historySagas])
}